import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { z } from 'zod'

const pledgeSchema = z.object({
  title: z.string().min(1, 'Title is required').max(100),
  description: z.string().min(1, 'Description is required').max(500),
  category: z.string().min(1, 'Category is required')
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { title, description, category } = pledgeSchema.parse(body)

    // For now, create pledge without user authentication
    // In production, you'd get userId from session/JWT
    const pledge = await prisma.pledge.create({
      data: {
        title,
        description,
        category,
        userId: 'anonymous' // Replace with actual user ID when auth is implemented
      }
    })

    return NextResponse.json({ success: true, pledge })
  } catch (error) {
    console.error('Pledge creation error:', error)
    return NextResponse.json(
      { error: 'Failed to create pledge' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const pledges = await prisma.pledge.findMany({
      orderBy: { createdAt: 'desc' },
      take: 50 // Limit to recent 50 pledges
    })

    return NextResponse.json(pledges)
  } catch (error) {
    console.error('Error fetching pledges:', error)
    return NextResponse.json(
      { error: 'Failed to fetch pledges' },
      { status: 500 }
    )
  }
}