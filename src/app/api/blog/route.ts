import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const published = searchParams.get('published') !== 'false'
    const limit = parseInt(searchParams.get('limit') || '10')

    const posts = await prisma.blogPost.findMany({
      where: { published },
      orderBy: { createdAt: 'desc' },
      take: limit,
      select: {
        id: true,
        title: true,
        slug: true,
        excerpt: true,
        imageUrl: true,
        createdAt: true,
        updatedAt: true
      }
    })

    return NextResponse.json(posts)
  } catch (error) {
    console.error('Get blog posts error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
