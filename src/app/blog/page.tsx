import Link from "next/link"
import { prisma } from "@/lib/prisma"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default async function BlogPage() {
  const posts = await prisma.blogPost.findMany({
    where: { published: true },
    orderBy: { createdAt: "desc" },
    take: 10,
  })

  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-green-700 mb-4">
          Climate Blog 🌍
        </h1>
        <p className="text-gray-600 text-lg">
          Latest awareness updates and actionable insights on climate change.
        </p>
      </header>

      {posts.length === 0 && (
        <p className="text-center text-gray-500 text-lg">
          No blog posts yet. Stay tuned!
        </p>
      )}

      <div className="grid md:grid-cols-2 gap-8">
        {posts.map((post) => (
          <Card key={post.id} className="hover:shadow-xl transition-transform duration-300">
            <CardContent className="p-6 flex flex-col justify-between h-full">
              <div>
                <h2 className="text-2xl font-semibold text-green-800 mb-3">
                  {post.title}
                </h2>
                <p className="text-gray-700 mb-4">{post.excerpt}</p>
              </div>
              <div className="flex justify-between items-center mt-4">
                <p className="text-sm text-gray-400">
                  {new Date(post.createdAt).toLocaleDateString()}
                </p>
                <Link href={`/blog/${post.slug}`}>
                  <Button variant="outline" size="sm" className="text-green-700 border-green-700 hover:bg-green-50 hover:cursor-alias">
                    Read More
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  )
}
