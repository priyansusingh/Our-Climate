import { NextRequest, NextResponse } from 'next/server'

// Temporary mock data - replace with Prisma when database is ready
const mockEvents = [
  {
    id: '1',
    title: 'Community Tree Planting Day',
    description: 'Join us for a day of tree planting in Central Park.',
    date: '2024-04-15T09:00:00Z',
    location: 'Central Park, New York',
    type: 'tree-planting',
    createdAt: '2024-01-01T00:00:00Z'
  },
  // ... more events
]

export async function GET() {
  try {
    // For now, return mock data
    // When database is ready, uncomment the Prisma code below:
    
    /*
    const events = await prisma.event.findMany({
      where: {
        date: {
          gte: new Date()
        }
      },
      orderBy: { date: 'asc' }
    })
    return NextResponse.json(events)
    */
    
    return NextResponse.json(mockEvents)
  } catch (error) {
    console.error('Error fetching events:', error)
    return NextResponse.json(
      { error: 'Failed to fetch events' },
      { status: 500 }
    )
  }
}