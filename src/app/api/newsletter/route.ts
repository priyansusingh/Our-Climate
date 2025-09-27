import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { z } from 'zod'

const newsletterSchema = z.object({
  email: z.string().email('Invalid email address')
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email } = newsletterSchema.parse(body)

    // Check if email already exists
    const existingSubscriber = await prisma.newsletterSubscriber.findUnique({
      where: { email }
    })

    if (existingSubscriber) {
      return NextResponse.json(
        { error: 'Email already subscribed' },
        { status: 400 }
      )
    }

    // Create new subscriber
    const subscriber = await prisma.newsletterSubscriber.create({
      data: { email }
    })

    return NextResponse.json({ success: true, subscriber })
  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return NextResponse.json(
      { error: 'Failed to subscribe' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const count = await prisma.newsletterSubscriber.count({
      where: { active: true }
    })
    
    return NextResponse.json({ count })
  } catch (error) {
    console.error('Error fetching newsletter count:', error)
    return NextResponse.json(
      { error: 'Failed to fetch count' },
      { status: 500 }
    )
  }
}