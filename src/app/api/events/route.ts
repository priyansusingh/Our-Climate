import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const type = searchParams.get('type')
    const limit = parseInt(searchParams.get('limit') || '50')

    const events = await prisma.event.findMany({
      where: type && type !== 'all' ? { type } : undefined,
      orderBy: { date: 'asc' },
      take: limit
    })

    return NextResponse.json(events)
  } catch (error) {
    console.error('Get events error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { title, description, date, location, type, imageUrl } = body

    const event = await prisma.event.create({
      data: {
        title,
        description,
        date: new Date(date),
        location,
        type,
        imageUrl
      }
    })

    return NextResponse.json(event)

  } catch (error) {
    console.error('Create event error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
