import { prisma } from "@/lib/prisma"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

// Tell Next.js this page is dynamic
export const dynamic = 'force-dynamic'

export default async function BlogPostPage({ params }: any) {
  const post = await prisma.blogPost.findUnique({
    where: { slug: params.slug },
  })

  if (!post || !post.published) {
    return (
      <main className="max-w-2xl mx-auto px-6 py-16 text-center">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Post Not Found</h1>
        <p className="text-gray-600 mb-6">
          The blog post you’re looking for doesn’t exist or is unpublished.
        </p>
        <Link href="/blog">
          <Button variant="outline" className="text-green-700 border-green-700 hover:bg-green-50">
            Back to Blog
          </Button>
        </Link>
      </main>
    )
  }

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <article className="prose prose-green lg:prose-xl">
        <h1 className="text-5xl font-extrabold text-green-700 mb-6">{post.title}</h1>
        {post.imageUrl && (
          <Image
            src={post.imageUrl}
            alt={post.title}
            width={800}
            height={400}
            className="rounded-lg w-full mb-6"
          />
        )}
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
        <p className="text-sm text-gray-400 mt-8">
          Last updated {new Date(post.updatedAt).toLocaleDateString()}
        </p>
      </article>

      <div className="mt-12 flex justify-start">
        <Link href="/blog">
          <Button variant="outline" className="text-green-700 border-green-700 hover:bg-green-50">
            ← Back to Blog
          </Button>
        </Link>
      </div>
    </main>
  )
}
