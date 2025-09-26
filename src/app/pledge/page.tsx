'use client'
import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Heart, Users, Target, CheckCircle, TreePine, Car, Lightbulb, Recycle } from 'lucide-react'
import { motion } from 'framer-motion'

interface Pledge {
  id: string
  title: string
  description: string
  category: string
  userName: string
  createdAt: string
}

const pledgeCategories = [
  { value: 'energy', label: 'Energy Conservation', icon: Lightbulb, color: 'bg-yellow-100 text-yellow-800' },
  { value: 'transportation', label: 'Sustainable Transport', icon: Car, color: 'bg-blue-100 text-blue-800' },
  { value: 'waste', label: 'Waste Reduction', icon: Recycle, color: 'bg-green-100 text-green-800' },
  { value: 'lifestyle', label: 'Sustainable Living', icon: TreePine, color: 'bg-emerald-100 text-emerald-800' }
]

// Sample pledges for demonstration
const samplePledges: Pledge[] = [
  {
    id: '1',
    title: 'Switch to LED bulbs',
    description: 'I pledge to replace all incandescent bulbs in my home with LED alternatives to reduce energy consumption.',
    category: 'energy',
    userName: 'Sarah M.',
    createdAt: '2024-01-15'
  },
  {
    id: '2',
    title: 'Bike to work twice a week',
    description: 'I commit to cycling to work at least twice per week instead of driving, reducing my carbon footprint.',
    category: 'transportation',
    userName: 'Mike R.',
    createdAt: '2024-01-14'
  },
  {
    id: '3',
    title: 'Zero food waste challenge',
    description: 'I pledge to minimize food waste by meal planning and composting organic waste.',
    category: 'waste',
    userName: 'Emma L.',
    createdAt: '2024-01-13'
  }
]

export default function PledgePage() {
  const [pledges, setPledges] = useState<Pledge[]>(samplePledges)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    userName: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/pledges', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        const newPledge = await response.json()
        setPledges(prev => [newPledge, ...prev])
        setFormData({ title: '', description: '', category: '', userName: '' })
        setShowForm(false)
      }
    } catch (error) {
      console.error('Error submitting pledge:', error)
    } finally {
      setIsSubmitting(false)
    }
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
            Join thousands of people making commitments to fight climate change. 
            Every action matters, no matter how small.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-green-600 mb-2">2,143</div>
              <div className="text-gray-600">Total Pledges</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">1,247</div>
              <div className="text-gray-600">Active Members</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-purple-600 mb-2">85%</div>
              <div className="text-gray-600">Completion Rate</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-orange-600 mb-2">342</div>
              <div className="text-gray-600">Tons CO₂ Saved</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Make a Pledge Form */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="h-6 w-6 text-green-600" />
                  <span>Make Your Pledge</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {!showForm ? (
                  <div className="text-center">
                    <p className="text-gray-600 mb-4">
                      Ready to make a commitment to help fight climate change?
                    </p>
                    <Button onClick={() => setShowForm(true)} className="w-full">
                      Create New Pledge
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="userName">Your Name</Label>
                      <Input
                        id="userName"
                        value={formData.userName}
                        onChange={(e) => setFormData(prev => ({ ...prev, userName: e.target.value }))}
                        placeholder="e.g., John D."
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="category">Category</Label>
                      <Select
                        value={formData.category}
                        onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}
                        required
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                          {pledgeCategories.map((cat) => (
                            <SelectItem key={cat.value} value={cat.value}>
                              {cat.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="title">Pledge Title</Label>
                      <Input
                        id="title"
                        value={formData.title}
                        onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                        placeholder="What will you commit to?"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="description">Description</Label>
                      <Textarea
                        id="description"
                        value={formData.description}
                        onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                        placeholder="Describe your commitment in detail"
                        rows={3}
                        required
                      />
                    </div>

                    <div className="flex space-x-2">
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1"
                      >
                        {isSubmitting ? 'Submitting...' : 'Make Pledge'}
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setShowForm(false)}
                      >
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
              <h2 className="text-2xl font-semibold text-gray-800">Recent Pledges</h2>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Users className="h-4 w-4" />
                <span>{pledges.length} pledges</span>
              </div>
            </div>

            <div className="space-y-4">
              {pledges.map((pledge, index) => {
                const category = pledgeCategories.find(cat => cat.value === pledge.category)
                const Icon = category?.icon || Target

                return (
                  <motion.div
                    key={pledge.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Card className="hover:shadow-md transition-shadow">
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center space-x-3">
                            <Icon className="h-8 w-8 text-green-600" />
                            <div>
                              <CardTitle className="text-lg">{pledge.title}</CardTitle>
                              <div className="flex items-center space-x-2 mt-1">
                                <span className="text-sm text-gray-600">by {pledge.userName}</span>
                                <span className="text-gray-400">•</span>
                                <span className="text-sm text-gray-500">
                                  {new Date(pledge.createdAt).toLocaleDateString()}
                                </span>
                              </div>
                            </div>
                          </div>
                          {category && (
                            <Badge className={category.color}>
                              {category.label}
                            </Badge>
                          )}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 mb-4">{pledge.description}</p>
                        <div className="flex items-center space-x-4">
                          <Button variant="outline" size="sm">
                            <Heart className="h-4 w-4 mr-1" />
                            Support
                          </Button>
                          <Button variant="ghost" size="sm">
                            <CheckCircle className="h-4 w-4 mr-1" />
                            I did this too
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}