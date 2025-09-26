// src/app/events/page.tsx
'use client'
import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Calendar, MapPin, Clock, Users, Filter, TreePine, Megaphone, GraduationCap, Recycle } from 'lucide-react'
import { motion } from 'framer-motion'

interface Event {
  id: string
  title: string
  description: string
  date: string
  time: string
  location: string
  type: 'workshop' | 'cleanup' | 'protest' | 'education' | 'conference'
  attendees: number
  maxAttendees?: number
  imageUrl?: string
}

const eventTypes = [
  { value: 'all', label: 'All Events', icon: Calendar },
  { value: 'workshop', label: 'Workshops', icon: GraduationCap },
  { value: 'cleanup', label: 'Cleanup Events', icon: Recycle },
  { value: 'protest', label: 'Advocacy', icon: Megaphone },
  { value: 'education', label: 'Education', icon: GraduationCap },
  { value: 'conference', label: 'Conferences', icon: Users }
]

const typeColors = {
  workshop: 'bg-blue-100 text-blue-800',
  cleanup: 'bg-green-100 text-green-800',
  protest: 'bg-red-100 text-red-800',
  education: 'bg-purple-100 text-purple-800',
  conference: 'bg-yellow-100 text-yellow-800'
}

const sampleEvents: Event[] = [
  {
    id: '1',
    title: 'Community Solar Panel Workshop',
    description: 'Learn how to install and maintain solar panels for your home. Hands-on workshop with experienced instructors.',
    date: '2024-02-15',
    time: '10:00 AM - 2:00 PM',
    location: 'Community Center, Downtown',
    type: 'workshop',
    attendees: 23,
    maxAttendees: 30
  },
  {
    id: '2',
    title: 'River Cleanup Drive',
    description: 'Join us for a community cleanup of the local river. All supplies provided. Lunch included.',
    date: '2024-02-18',
    time: '9:00 AM - 12:00 PM',
    location: 'Riverside Park',
    type: 'cleanup',
    attendees: 45,
    maxAttendees: 100
  },
  {
    id: '3',
    title: 'Climate Action March',
    description: 'Peaceful march to raise awareness about climate change and demand policy action.',
    date: '2024-02-22',
    time: '11:00 AM - 3:00 PM',
    location: 'City Hall',
    type: 'protest',
    attendees: 234,
    maxAttendees: 500
  },
  {
    id: '4',
    title: 'Sustainable Living Seminar',
    description: 'Expert speakers share tips on reducing your carbon footprint and living more sustainably.',
    date: '2024-02-25',
    time: '7:00 PM - 9:00 PM',
    location: 'University Auditorium',
    type: 'education',
    attendees: 89,
    maxAttendees: 200
  },
  {
    id: '5',
    title: 'Regional Climate Conference',
    description: 'Two-day conference featuring scientists, policymakers, and activists discussing climate solutions.',
    date: '2024-03-01',
    time: '9:00 AM - 5:00 PM',
    location: 'Convention Center',
    type: 'conference',
    attendees: 456,
    maxAttendees: 800
  }
]

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>(sampleEvents)
  const [selectedType, setSelectedType] = useState<string>('all')

  const filteredEvents = selectedType === 'all' 
    ? events 
    : events.filter(event => event.type === selectedType)

  const handleRSVP = (eventId: string) => {
    setEvents(prev => prev.map(event => 
      event.id === eventId 
        ? { ...event, attendees: event.attendees + 1 }
        : event
    ))
  }

  const getEventIcon = (type: Event['type']) => {
    switch (type) {
      case 'workshop': return GraduationCap
      case 'cleanup': return Recycle
      case 'protest': return Megaphone
      case 'education': return GraduationCap
      case 'conference': return Users
      default: return Calendar
    }
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
            Join local and global climate action events. From educational workshops 
            to community cleanups, find opportunities to make a difference.
          </p>
        </div>

        {/* Event Type Filter */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {eventTypes.map((type) => {
            const Icon = type.icon
            return (
              <Button
                key={type.value}
                variant={selectedType === type.value ? "default" : "outline"}
                onClick={() => setSelectedType(type.value)}
                className="flex items-center space-x-2"
              >
                <Icon className="h-4 w-4" />
                <span>{type.label}</span>
              </Button>
            )
          })}
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-green-600 mb-1">{events.length}</div>
              <div className="text-sm text-gray-600">Upcoming Events</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">
                {events.reduce((sum, event) => sum + event.attendees, 0)}
              </div>
              <div className="text-sm text-gray-600">Total Attendees</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-purple-600 mb-1">12</div>
              <div className="text-sm text-gray-600">Cities</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-orange-600 mb-1">98%</div>
              <div className="text-sm text-gray-600">Satisfaction Rate</div>
            </CardContent>
          </Card>
        </div>

        {/* Events List */}
        <div className="space-y-6">
          {filteredEvents.map((event, index) => {
            const Icon = getEventIcon(event.type)
            const isNearCapacity = event.maxAttendees && event.attendees / event.maxAttendees > 0.8

            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                      <div className="flex-1">
                        <div className="flex items-start space-x-4 mb-4">
                          <Icon className="h-8 w-8 text-green-600 flex-shrink-0 mt-1" />
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center space-x-3 mb-2">
                              <h3 className="text-xl font-semibold text-gray-800">
                                {event.title}
                              </h3>
                              <Badge className={typeColors[event.type]}>
                                {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                              </Badge>
                            </div>
                            <p className="text-gray-600 mb-4">{event.description}</p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                              <div className="flex items-center space-x-2">
                                <Calendar className="h-4 w-4" />
                                <span>{new Date(event.date).toLocaleDateString()}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Clock className="h-4 w-4" />
                                <span>{event.time}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <MapPin className="h-4 w-4" />
                                <span>{event.location}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col items-end space-y-4 lg:ml-6">
                        <div className="text-right">
                          <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
                            <Users className="h-4 w-4" />
                            <span>
                              {event.attendees} 
                              {event.maxAttendees && ` / ${event.maxAttendees}`} attendees
                            </span>
                          </div>
                          {isNearCapacity && (
                            <Badge variant="secondary" className="text-xs">
                              Almost Full
                            </Badge>
                          )}
                        </div>

                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            Learn More
                          </Button>
                          <Button 
                            size="sm"
                            onClick={() => handleRSVP(event.id)}
                            disabled={event.maxAttendees ? event.attendees >= event.maxAttendees : false}
                          >
                            {event.maxAttendees && event.attendees >= event.maxAttendees 
                              ? 'Full' 
                              : 'RSVP'
                            }
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Call to Action */}
        <Card className="mt-12 bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
          <CardContent className="p-8 text-center">
            <TreePine className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Organize Your Own Event
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Have an idea for a climate action event? We&apos;ll help you organize and promote it to our community.
            </p>
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Submit Event Proposal
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}