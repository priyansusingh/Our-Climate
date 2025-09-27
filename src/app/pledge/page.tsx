'use client'
import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Heart, Users, Leaf, Car, Zap, Recycle } from 'lucide-react'
import { motion } from 'framer-motion'

interface Pledge {
  id: string
  title: string
  description: string
  category: string
  createdAt: string
  userId?: string
}

// Mock data for development
const mockPledges: Pledge[] = [
  {
    id: '1',
    title: 'I will bike to work twice a week',
    description: 'To reduce my carbon footprint and improve my health, I commit to biking to work at least twice every week.',
    category: 'transportation',
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    title: 'Switch to renewable energy',
    description: 'I will install solar panels on my roof and switch to a renewable energy provider.',
    category: 'energy',
    createdAt: '2024-01-16T14:30:00Z'
  },
  {
    id: '3',
    title: 'Reduce food waste by 50%',
    description: 'I commit to meal planning and composting to cut my household food waste in half.',
    category: 'waste',
    createdAt: '2024-01-17T09:15:00Z'
  },
  {
    id: '4',
    title: 'Plant a tree every month',
    description: 'I will plant at least one tree every month in my community to help offset carbon emissions.',
    category: 'lifestyle',
    createdAt: '2024-01-18T16:45:00Z'
  },
  {
    id: '5',
    title: 'Use public transportation daily',
    description: 'I pledge to use public transportation for my daily commute instead of driving.',
    category: 'transportation',
    createdAt: '2024-01-19T08:20:00Z'
  },
  {
    id: '6',
    title: 'Install LED bulbs throughout home',
    description: 'Replace all traditional bulbs with energy-efficient LED lighting.',
    category: 'energy',
    createdAt: '2024-01-20T11:10:00Z'
  }
]

export default function PledgePage() {
  const [pledges, setPledges] = useState<Pledge[]>([])
  const [newPledge, setNewPledge] = useState({
    title: '',
    description: '',
    category: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const categories = [
    { value: 'transportation', label: 'Transportation', icon: Car, color: 'bg-blue-100 text-blue-800' },
    { value: 'energy', label: 'Energy', icon: Zap, color: 'bg-yellow-100 text-yellow-800' },
    { value: 'waste', label: 'Waste Reduction', icon: Recycle, color: 'bg-green-100 text-green-800' },
    { value: 'lifestyle', label: 'Sustainable Living', icon: Leaf, color: 'bg-emerald-100 text-emerald-800' }
  ]

  useEffect(() => {
    loadMockPledges()
  }, [])

  const loadMockPledges = () => {
    setIsLoading(true)
    setTimeout(() => {
      setPledges(mockPledges)
      setIsLoading(false)
    }, 500)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const newPledgeWithId: Pledge = {
        id: Date.now().toString(),
        ...newPledge,
        createdAt: new Date().toISOString()
      }
      
      setPledges(prev => [newPledgeWithId, ...prev])
      setNewPledge({ title: '', description: '', category: '' })
      setShowForm(false)
    } catch (error) {
      console.error('Error creating pledge:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const getCategoryInfo = (category: string) => {
    return categories.find(cat => cat.value === category) || categories[0]
  }

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <Heart className="h-16 w-16 text-red-500 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Community Pledges
            </h1>
            <p className="text-xl text-gray-600">Loading pledges...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Heart className="h-16 w-16 text-red-500 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Community Pledges
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Join thousands of others in making commitments to reduce your environmental impact. 
            Every pledge counts in our fight against climate change.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <Card>
            <CardContent className="text-center pt-6">
              <div className="text-3xl font-bold text-green-600">{pledges.length}</div>
              <div className="text-gray-600">Total Pledges</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="text-center pt-6">
              <div className="text-3xl font-bold text-blue-600">
                {pledges.filter(p => p.category === 'transportation').length}
              </div>
              <div className="text-gray-600">Transport</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="text-center pt-6">
              <div className="text-3xl font-bold text-yellow-600">
                {pledges.filter(p => p.category === 'energy').length}
              </div>
              <div className="text-gray-600">Energy</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="text-center pt-6">
              <div className="text-3xl font-bold text-emerald-600">
                {pledges.filter(p => p.category === 'lifestyle').length}
              </div>
              <div className="text-gray-600">Lifestyle</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Pledge Form */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Make Your Pledge</CardTitle>
              </CardHeader>
              <CardContent>
                {!showForm ? (
                  <div className="text-center">
                    <Users className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 mb-6">
                      Ready to make a difference? Create your climate pledge and inspire others to take action.
                    </p>
                    <Button onClick={() => setShowForm(true)} className="w-full">
                      Create Pledge
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="title">Pledge Title</Label>
                      <Input
                        id="title"
                        value={newPledge.title}
                        onChange={(e) => setNewPledge(prev => ({ ...prev, title: e.target.value }))}
                        placeholder="e.g., I will bike to work twice a week"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="category">Category</Label>
                      <Select
                        value={newPledge.category}
                        onValueChange={(value) => setNewPledge(prev => ({ ...prev, category: value }))}
                        required
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map(category => (
                            <SelectItem key={category.value} value={category.value}>
                              {category.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="description">Description</Label>
                      <Textarea
                        id="description"
                        value={newPledge.description}
                        onChange={(e) => setNewPledge(prev => ({ ...prev, description: e.target.value }))}
                        placeholder="Describe your commitment and why it matters to you..."
                        rows={4}
                        required
                      />
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button type="submit" disabled={isSubmitting} className="flex-1">
                        {isSubmitting ? 'Creating...' : 'Create Pledge'}
                      </Button>
                      <Button type="button" variant="outline" onClick={() => setShowForm(false)}>
                        Cancel
                      </Button>
                    </div>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Pledges List */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Recent Pledges</h2>
              <Badge variant="outline">{pledges.length} pledges made</Badge>
            </div>
            
            <div className="space-y-4">
              {pledges.map((pledge, index) => {
                const categoryInfo = getCategoryInfo(pledge.category)
                const IconComponent = categoryInfo.icon
                
                return (
                  <motion.div
                    key={pledge.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Card className="hover:shadow-md transition-shadow">
                      <CardContent className="pt-6">
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                              <IconComponent className="h-5 w-5 text-gray-600" />
                            </div>
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between mb-2">
                              <h3 className="font-semibold text-lg text-gray-800">
                                {pledge.title}
                              </h3>
                              <Badge className={categoryInfo.color}>
                                {categoryInfo.label}
                              </Badge>
                            </div>
                            
                            <p className="text-gray-600 mb-3">
                              {pledge.description}
                            </p>
                            
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-500">
                                {new Date(pledge.createdAt).toLocaleDateString()}
                              </span>
                              <Button variant="ghost" size="sm">
                                <Heart className="h-4 w-4 mr-1" />
                                Support
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
              
              {pledges.length === 0 && !isLoading && (
                <Card>
                  <CardContent className="text-center py-12">
                    <Users className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">
                      No pledges yet. Be the first to make a commitment!
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}