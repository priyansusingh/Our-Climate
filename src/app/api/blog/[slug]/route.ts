import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET(request: Request, context: any) {
  const { slug } = context.params as { slug: string }

  try {
    const post = await prisma.blogPost.findUnique({
      where: { slug },
    })

    if (!post || !post.published) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 })
    }

    return NextResponse.json(post)
  } catch (error) {
    console.error("Error fetching blog post:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
