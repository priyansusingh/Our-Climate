import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { pledgeSchema } from '@/lib/validations'
import { z } from 'zod'

export async function GET() {
  try {
    const pledges = await prisma.pledge.findMany({
      include: {
        user: {
          select: { name: true }
        }
      },
      orderBy: { createdAt: 'desc' },
      take: 50
    })

    return NextResponse.json(pledges)
  } catch (error) {
    console.error('Get pledges error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { title, description, category } = pledgeSchema.parse(body)
    const { userName } = body

    // For demo purposes, we'll create a user if not exists
    let user = await prisma.user.findFirst({
      where: { name: userName }
    })

    if (!user) {
      user = await prisma.user.create({
        data: {
          name: userName,
          email: `${userName.toLowerCase().replace(/\s+/g, '.')}@example.com`
        }
      })
    }

    const pledge = await prisma.pledge.create({
      data: {
        title,
        description,
        category,
        userId: user.id
      },
      include: {
        user: {
          select: { name: true }
        }
      }
    })

    return NextResponse.json({
      id: pledge.id,
      title: pledge.title,
      description: pledge.description,
      category: pledge.category,
      userName: pledge.user.name,
      createdAt: pledge.createdAt.toISOString()
    })

  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid pledge data', details: error.issues },
        { status: 400 }
      )
    }

    console.error('Create pledge error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
