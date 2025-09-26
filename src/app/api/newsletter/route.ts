import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { newsletterSchema } from '@/lib/validations'
import { z } from 'zod'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email } = newsletterSchema.parse(body)

    // Check if email already exists
    const existingSubscriber = await prisma.newsletterSubscriber.findUnique({
      where: { email }
    })

    if (existingSubscriber) {
      if (existingSubscriber.active) {
        return NextResponse.json(
          { error: 'Email already subscribed' },
          { status: 400 }
        )
      } else {
        // Reactivate subscription
        await prisma.newsletterSubscriber.update({
          where: { email },
          data: { active: true }
        })
        return NextResponse.json({ message: 'Subscription reactivated' })
      }
    }

    // Create new subscriber
    const subscriber = await prisma.newsletterSubscriber.create({
      data: { email }
    })

    return NextResponse.json({
      message: 'Successfully subscribed to newsletter',
      id: subscriber.id
    })

  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    console.error('Newsletter subscription error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const email = searchParams.get('email')

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    await prisma.newsletterSubscriber.updateMany({
      where: { email },
      data: { active: false }
    })

    return NextResponse.json({ message: 'Successfully unsubscribed' })

  } catch (error) {
    console.error('Newsletter unsubscription error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
