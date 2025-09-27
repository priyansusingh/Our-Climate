'use client'
import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Calendar, MapPin, Clock, Users, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'

interface Event {
  id: string
  title: string
  description: string
  date: string
  location: string
  type: string
  imageUrl?: string
}

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([])
  const [filter, setFilter] = useState('all')
  const [isLoading, setIsLoading] = useState(true)

  const eventTypes = [
    { value: 'all', label: 'All Events' },
    { value: 'cleanup', label: 'Cleanup' },
    { value: 'tree-planting', label: 'Tree Planting' },
    { value: 'workshop', label: 'Workshop' },
    { value: 'protest', label: 'Climate Strike' },
    { value: 'webinar', label: 'Webinar' }
  ]

  useEffect(() => {
    fetchEvents()
  }, [])

  const fetchEvents = async () => {
    try {
      setIsLoading(true)
      const response = await fetch('/api/events')
      if (response.ok) {
        const data = await response.json()
        setEvents(Array.isArray(data) ? data : [])
      } else {
        console.error('Failed to fetch events')
        setEvents([])
      }
    } catch (error) {
      console.error('Error fetching events:', error)
      setEvents([])
    } finally {
      setIsLoading(false)
    }
  }

  const filteredEvents = Array.isArray(events) 
    ? (filter === 'all' ? events : events.filter(event => event.type === filter))
    : []

  const getEventTypeColor = (type: string) => {
    const colors = {
      'cleanup': 'bg-blue-100 text-blue-800',
      'tree-planting': 'bg-green-100 text-green-800',
      'workshop': 'bg-purple-100 text-purple-800',
      'protest': 'bg-red-100 text-red-800',
      'webinar': 'bg-orange-100 text-orange-800'
    }
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-800'
  }

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <Calendar className="h-16 w-16 text-green-600 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Climate Events
            </h1>
            <p className="text-xl text-gray-600">Loading events...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Calendar className="h-16 w-16 text-green-600 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Climate Events
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Join local and global climate action events. Together we can make a bigger impact 
            through collective action and community engagement.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {eventTypes.map(type => (
            <Button
              key={type.value}
              variant={filter === type.value ? "default" : "outline"}
              onClick={() => setFilter(type.value)}
              size="sm"
            >
              {type.label}
            </Button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                {event.imageUrl && (
                  <div className="h-48 bg-gray-200 rounded-t-lg bg-cover bg-center"
                       style={{ backgroundImage: `url(${event.imageUrl})` }}>
                  </div>
                )}
                
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-xl line-clamp-2">
                      {event.title}
                    </CardTitle>
                    <Badge className={getEventTypeColor(event.type)}>
                      {eventTypes.find(t => t.value === event.type)?.label || event.type}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {event.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-2" />
                      {new Date(event.date).toLocaleDateString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </div>
                    
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="h-4 w-4 mr-2" />
                      {event.location}
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button size="sm" className="flex-1">
                      <Users className="h-4 w-4 mr-1" />
                      Join Event
                    </Button>
                    <Button variant="outline" size="sm">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredEvents.length === 0 && !isLoading && (
          <Card>
            <CardContent className="text-center py-12">
              <Calendar className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">
                No events found for the selected filter. Check back soon for new events!
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}