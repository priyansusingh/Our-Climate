// prisma/seed.ts
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting database seeding...')

  // Clean existing data
  await prisma.carbonFootprint.deleteMany()
  await prisma.pledge.deleteMany()
  await prisma.blogPost.deleteMany()
  await prisma.event.deleteMany()
  await prisma.newsletterSubscriber.deleteMany()
  await prisma.user.deleteMany()

  // Create sample users
  const users = await Promise.all([
    prisma.user.create({
      data: {
        name: 'Sarah Mitchell',
        email: 'sarah.mitchell@example.com'
      }
    }),
    prisma.user.create({
      data: {
        name: 'Mike Rodriguez',
        email: 'mike.rodriguez@example.com'
      }
    }),
    prisma.user.create({
      data: {
        name: 'Emma Chen',
        email: 'emma.chen@example.com'
      }
    }),
    prisma.user.create({
      data: {
        name: 'David Thompson',
        email: 'david.thompson@example.com'
      }
    }),
    prisma.user.create({
      data: {
        name: 'Lisa Patel',
        email: 'lisa.patel@example.com'
      }
    })
  ])

  console.log('✅ Created users')

  // Create sample pledges
  await Promise.all([
    prisma.pledge.create({
      data: {
        title: 'Switch to LED bulbs throughout my home',
        description: 'I commit to replacing all incandescent and fluorescent bulbs in my home with energy-efficient LED alternatives to reduce energy consumption.',
        category: 'energy',
        userId: users[0].id
      }
    }),
    prisma.pledge.create({
      data: {
        title: 'Bike to work twice a week',
        description: 'I pledge to cycle to work at least twice per week instead of driving, reducing my carbon footprint and improving my health.',
        category: 'transportation',
        userId: users[1].id
      }
    }),
    prisma.pledge.create({
      data: {
        title: 'Zero food waste challenge',
        description: 'I will minimize food waste by planning meals carefully, using leftovers creatively, and composting organic waste.',
        category: 'waste',
        userId: users[2].id
      }
    }),
    prisma.pledge.create({
      data: {
        title: 'Install a home composting system',
        description: 'Set up a backyard composting bin to reduce organic waste and create nutrient-rich soil for gardening.',
        category: 'waste',
        userId: users[3].id
      }
    }),
    prisma.pledge.create({
      data: {
        title: 'Use public transportation for daily commute',
        description: 'Switch from driving to using public transportation for my daily commute to reduce emissions.',
        category: 'transportation',
        userId: users[4].id
      }
    }),
    prisma.pledge.create({
      data: {
        title: 'Reduce meat consumption to 3 days per week',
        description: 'Limit meat consumption to three days per week and explore plant-based alternatives for a lower carbon diet.',
        category: 'lifestyle',
        userId: users[0].id
      }
    }),
    prisma.pledge.create({
      data: {
        title: 'Install smart home energy monitoring',
        description: 'Set up smart plugs and energy monitors to track and reduce household energy consumption.',
        category: 'energy',
        userId: users[1].id
      }
    }),
    prisma.pledge.create({
      data: {
        title: 'Start a community garden',
        description: 'Organize neighbors to create a shared community garden for growing local, organic food.',
        category: 'lifestyle',
        userId: users[2].id
      }
    })
  ])

  console.log('✅ Created pledges')

  // Create sample events
  const today = new Date()
  const events = [
    {
      title: 'Community Solar Panel Workshop',
      description: 'Learn how to install and maintain solar panels for your home. Hands-on workshop with experienced instructors covering costs, benefits, and installation process.',
      date: new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000), // 1 week from now
      location: 'Community Center, 123 Main St',
      type: 'workshop'
    },
    {
      title: 'River Cleanup Drive',
      description: 'Join us for a community cleanup of the local river. All supplies provided including gloves, bags, and tools. Lunch and refreshments included.',
      date: new Date(today.getTime() + 10 * 24 * 60 * 60 * 1000), // 10 days from now
      location: 'Riverside Park, North Entrance',
      type: 'cleanup'
    },
    {
      title: 'Climate Action March',
      description: 'Peaceful march to raise awareness about climate change and demand policy action from local government. Signs and materials provided.',
      date: new Date(today.getTime() + 14 * 24 * 60 * 60 * 1000), // 2 weeks from now
      location: 'City Hall Plaza',
      type: 'protest'
    },
    {
      title: 'Sustainable Living Seminar',
      description: 'Expert speakers share practical tips on reducing your carbon footprint, sustainable consumption, and eco-friendly lifestyle choices.',
      date: new Date(today.getTime() + 17 * 24 * 60 * 60 * 1000), // ~2.5 weeks from now
      location: 'University Auditorium, Room 101',
      type: 'education'
    },
    {
      title: 'Regional Climate Conference',
      description: 'Two-day conference featuring climate scientists, policymakers, and activists discussing the latest research and solutions for climate action.',
      date: new Date(today.getTime() + 21 * 24 * 60 * 60 * 1000), // 3 weeks from now
      location: 'Downtown Convention Center',
      type: 'conference'
    },
    {
      title: 'Youth Climate Summit',
      description: 'Empowering young climate activists with tools, knowledge, and networking opportunities to drive change in their communities.',
      date: new Date(today.getTime() + 28 * 24 * 60 * 60 * 1000), // 4 weeks from now
      location: 'High School Campus, Auditorium',
      type: 'education'
    },
    {
      title: 'Beach Plastic Cleanup',
      description: 'Help remove plastic pollution from our local beaches. Great for families and groups. Data collection for marine research included.',
      date: new Date(today.getTime() + 35 * 24 * 60 * 60 * 1000), // 5 weeks from now
      location: 'Ocean Beach, Pier Area',
      type: 'cleanup'
    }
  ]

  await Promise.all(events.map(event => 
    prisma.event.create({
      data: event
    })
  ))

  console.log('✅ Created events')

  // Create sample blog posts
  const blogPosts = [
    {
      title: 'Understanding Your Carbon Footprint: A Beginner\'s Guide',
      slug: 'understanding-carbon-footprint-beginners-guide',
      excerpt: 'Learn what a carbon footprint is, how to calculate yours, and practical steps to reduce your environmental impact.',
      content: `
# Understanding Your Carbon Footprint: A Beginner's Guide

A carbon footprint represents the total amount of greenhouse gases produced directly and indirectly by human activities. Understanding your carbon footprint is the first step toward making meaningful changes to help combat climate change.

## What Contributes to Your Carbon Footprint?

### Transportation (28% of emissions)
- Car travel and fuel consumption
- Air travel and flights
- Public transportation usage

### Home Energy (42% of emissions)
- Electricity consumption
- Heating and cooling systems
- Appliance usage

### Food and Consumption (30% of emissions)
- Diet choices and meat consumption
- Shopping habits
- Waste production

## How to Calculate Your Carbon Footprint

Use online calculators or track:
1. Monthly utility bills
2. Transportation miles
3. Dietary habits
4. Consumption patterns

## Simple Ways to Reduce Your Impact

- Switch to LED light bulbs
- Use public transportation or bike
- Eat less meat
- Reduce, reuse, recycle
- Choose renewable energy options

Remember, small changes in daily habits can lead to significant environmental impact when adopted by many people.
      `,
      imageUrl: '/images/carbon-footprint-guide.jpg',
      published: true
    },
    {
      title: 'The Science Behind Climate Change: What You Need to Know',
      slug: 'science-behind-climate-change',
      excerpt: 'Explore the scientific evidence for climate change, from greenhouse gases to global temperature records.',
      content: `
# The Science Behind Climate Change: What You Need to Know

Climate change refers to long-term shifts in global temperatures and weather patterns. While climate variations occur naturally, scientific evidence shows that human activities have been the dominant driver since the mid-20th century.

## The Greenhouse Effect

The greenhouse effect is a natural process that warms Earth's surface. When the Sun's energy reaches Earth, some is reflected back to space and the rest is absorbed. The absorbed energy warms the planet and is then radiated back toward space as heat.

### How Greenhouse Gases Work

Greenhouse gases in the atmosphere absorb and re-emit this heat, trapping some of it and keeping Earth warm enough to sustain life. However, human activities have increased concentrations of these gases, intensifying the greenhouse effect.

## Key Scientific Evidence

### Temperature Records
- Global average temperature has risen by about 1.1°C since the late 1800s
- The last decade was the warmest on record
- Arctic regions are warming twice as fast as the global average

### Atmospheric CO₂ Levels
- Current levels exceed 420 ppm, the highest in over 3 million years
- CO₂ levels have increased by over 40% since pre-industrial times
- The rate of increase has accelerated in recent decades

### Ice Loss and Sea Level Rise
- Arctic sea ice is declining at a rate of 13% per decade
- Antarctic and Greenland ice sheets are losing mass
- Global sea levels have risen 21 cm since 1900

## Scientific Consensus

97% or more of actively publishing climate scientists agree that climate change is primarily caused by human activities. This consensus is based on multiple lines of evidence from temperature records, ice core data, satellite measurements, and climate models.
      `,
      imageUrl: '/images/climate-science.jpg',
      published: true
    },
    {
      title: 'Renewable Energy Solutions: Solar, Wind, and Beyond',
      slug: 'renewable-energy-solutions',
      excerpt: 'Discover how renewable energy technologies are revolutionizing our approach to sustainable power generation.',
      content: `
# Renewable Energy Solutions: Solar, Wind, and Beyond

Renewable energy sources are key to reducing greenhouse gas emissions and fighting climate change. These technologies harness natural processes to generate clean electricity without depleting resources or producing harmful emissions.

## Solar Power

Solar energy converts sunlight directly into electricity using photovoltaic cells. It's one of the fastest-growing energy sources globally.

### Benefits of Solar Energy
- Abundant and freely available
- No emissions during operation
- Costs have dropped dramatically
- Can be installed at various scales

### Recent Developments
- Efficiency improvements in solar panels
- Better energy storage solutions
- Floating solar installations
- Building-integrated photovoltaics

## Wind Energy

Wind power harnesses the kinetic energy of moving air to generate electricity through wind turbines.

### Advantages
- Clean and renewable
- Land can still be used for agriculture
- Creates jobs in manufacturing and maintenance
- Costs have become competitive with fossil fuels

### Innovations
- Offshore wind farms
- Larger, more efficient turbines
- Better grid integration
- Floating wind platforms

## Other Renewable Technologies

### Hydroelectric Power
- Uses flowing water to generate electricity
- Provides consistent, reliable power
- Can store energy through pumped storage

### Geothermal Energy
- Harnesses Earth's internal heat
- Provides baseload power
- Low environmental impact

### Energy Storage
Battery technology and other storage solutions are crucial for renewable energy integration, allowing power to be stored when production exceeds demand.

## The Path Forward

The transition to renewable energy is accelerating, driven by falling costs, policy support, and climate commitments. With continued innovation and investment, renewable energy can meet growing global energy demands while reducing emissions.
      `,
      imageUrl: '/images/renewable-energy.jpg',
      published: true
    }
  ]

  await Promise.all(blogPosts.map(post => 
    prisma.blogPost.create({
      data: post
    })
  ))

  console.log('✅ Created blog posts')

  // Create sample newsletter subscribers
  const subscribers = [
    'john.doe@example.com',
    'jane.smith@example.com',
    'alex.johnson@example.com',
    'maria.garcia@example.com',
    'robert.brown@example.com',
    'sophie.wilson@example.com',
    'michael.davis@example.com',
    'ashley.miller@example.com'
  ]

  await Promise.all(subscribers.map(email => 
    prisma.newsletterSubscriber.create({
      data: { email }
    })
  ))

  console.log('✅ Created newsletter subscribers')

  // Create sample carbon footprint data
  await Promise.all([
    prisma.carbonFootprint.create({
      data: {
        userId: users[0].id,
        transportation: 8.5,
        energy: 6.2,
        waste: 2.1,
        totalScore: 16.8
      }
    }),
    prisma.carbonFootprint.create({
      data: {
        userId: users[1].id,
        transportation: 4.2,
        energy: 5.8,
        waste: 1.5,
        totalScore: 11.5
      }
    }),
    prisma.carbonFootprint.create({
      data: {
        userId: users[2].id,
        transportation: 6.1,
        energy: 4.9,
        waste: 1.8,
        totalScore: 12.8
      }
    })
  ])

  console.log('✅ Created carbon footprint data')

  console.log('🎉 Database seeding completed successfully!')
}
