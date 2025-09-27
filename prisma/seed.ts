import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding database...')

  // Create sample users
  const users = await Promise.all([
    prisma.user.create({
      data: {
        email: 'john@example.com',
        name: 'John Doe',
      },
    }),
    prisma.user.create({
      data: {
        email: 'jane@example.com',
        name: 'Jane Smith',
      },
    }),
  ])

  // Create sample pledges
  const pledges = [
    {
      title: 'I will bike to work twice a week',
      description:
        'To reduce my carbon footprint and improve my health, I commit to biking to work at least twice every week.',
      category: 'transportation',
      userId: users[0].id,
    },
    {
      title: 'Switch to renewable energy',
      description:
        'I will install solar panels on my roof and switch to a renewable energy provider.',
      category: 'energy',
      userId: users[1].id,
    },
    {
      title: 'Reduce food waste by 50%',
      description:
        'I commit to meal planning and composting to cut my household food waste in half.',
      category: 'waste',
      userId: users[0].id,
    },
    {
      title: 'Plant a tree every month',
      description:
        'I will plant at least one tree every month in my community to help offset carbon emissions.',
      category: 'lifestyle',
      userId: users[1].id,
    },
  ]

  await prisma.pledge.createMany({ data: pledges })

  // Create sample events
  const events = [
    {
      title: 'Community Tree Planting Day',
      description:
        "Join us for a day of tree planting in Central Park. All ages welcome! We'll provide tools and refreshments.",
      date: new Date('2024-04-15T09:00:00Z'),
      location: 'Central Park, New York',
      type: 'tree-planting',
      imageUrl: '/api/placeholder/400/300',
    },
    {
      title: 'Climate Science Workshop',
      description:
        'Learn about the latest climate science research and how you can take action in your daily life.',
      date: new Date('2024-04-20T14:00:00Z'),
      location: 'Community Center, San Francisco',
      type: 'workshop',
    },
    {
      title: 'Beach Cleanup Drive',
      description:
        'Help us clean up Ocean Beach and protect marine life from plastic pollution.',
      date: new Date('2024-04-25T08:00:00Z'),
      location: 'Ocean Beach, California',
      type: 'cleanup',
    },
    {
      title: 'Global Climate Strike',
      description:
        'Join millions worldwide in demanding climate action from world leaders.',
      date: new Date('2024-05-01T12:00:00Z'),
      location: 'City Hall, Various Cities',
      type: 'protest',
    },
    {
      title: 'Renewable Energy Webinar',
      description:
        'Online workshop on how to transition your home to renewable energy sources.',
      date: new Date('2024-05-10T19:00:00Z'),
      location: 'Online Event',
      type: 'webinar',
    },
  ]

  await prisma.event.createMany({ data: events })

  // Create sample blog posts
  const blogPosts = [
    {
      title: '10 Simple Ways to Reduce Your Carbon Footprint',
      slug: '10-ways-reduce-carbon-footprint',
      content: 'Climate change is one of the most pressing issues of our time...',
      excerpt: 'Discover practical steps you can take today to reduce your environmental impact.',
      imageUrl: 'https://images.pexels.com/photos/60013/desert-drought-dehydrated-clay-soil-60013.jpeg',
      published: true,
    },
    {
      title: 'The Science Behind Climate Change: What You Need to Know',
      slug: 'climate-change-science-explained',
      content: 'Understanding the science behind climate change is crucial...',
      excerpt: 'A comprehensive guide to understanding climate science and its implications.',
      imageUrl: 'https://images.pexels.com/photos/221012/pexels-photo-221012.jpeg',
      published: true,
    },
    {
      title: 'Renewable Energy: The Future is Now',
      slug: 'renewable-energy-future',
      content: 'Renewable energy technologies have advanced dramatically...',
      excerpt: 'Explore how renewable energy is transforming our world.',
      imageUrl: 'https://images.pexels.com/photos/666737/pexels-photo-666737.jpeg',
      published: true,
    },
  ]
  
  await prisma.blogPost.createMany({ data: blogPosts })

  console.log('✅ Database seeded successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
