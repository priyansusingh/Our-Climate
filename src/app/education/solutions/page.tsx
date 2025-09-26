'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Leaf, 
  Lightbulb, 
  Recycle, 
  Car, 
  Home, 
  Users, 
  Building2, 
  Globe,
  TreePine,
  Droplets,
  Wind,
  Sun
} from 'lucide-react'

const solutions = {
  individual: [
    {
      icon: <Car className="w-6 h-6" />,
      title: "Sustainable Transportation",
      description: "Reduce emissions from daily travel",
      actions: [
        "Use public transportation, bike, or walk",
        "Switch to electric or hybrid vehicles",
        "Work from home when possible",
        "Carpool or use ride-sharing services"
      ],
      impact: "High",
      difficulty: "Medium"
    },
    {
      icon: <Home className="w-6 h-6" />,
      title: "Energy Efficiency at Home",
      description: "Optimize your home's energy consumption",
      actions: [
        "Switch to LED bulbs and energy-efficient appliances",
        "Improve insulation and weatherproofing",
        "Install a programmable thermostat",
        "Use renewable energy sources like solar panels"
      ],
      impact: "High",
      difficulty: "Medium"
    },
    {
      icon: <Recycle className="w-6 h-6" />,
      title: "Waste Reduction",
      description: "Minimize waste and maximize recycling",
      actions: [
        "Reduce single-use plastics",
        "Compost organic waste",
        "Buy products with minimal packaging",
        "Repair items instead of replacing them"
      ],
      impact: "Medium",
      difficulty: "Low"
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Sustainable Consumption",
      description: "Make eco-friendly purchasing decisions",
      actions: [
        "Buy local and seasonal food",
        "Choose sustainable and ethical brands",
        "Reduce meat consumption",
        "Buy second-hand when possible"
      ],
      impact: "Medium",
      difficulty: "Low"
    }
  ],
  community: [
    {
      icon: <TreePine className="w-6 h-6" />,
      title: "Community Gardens & Urban Forestry",
      description: "Create green spaces and food security",
      actions: [
        "Start or join community gardens",
        "Participate in tree planting initiatives",
        "Create pollinator-friendly spaces",
        "Organize neighborhood clean-up events"
      ],
      impact: "High",
      difficulty: "Medium"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Education & Advocacy",
      description: "Spread awareness and drive policy change",
      actions: [
        "Organize climate awareness workshops",
        "Contact local representatives",
        "Join or create environmental groups",
        "Use social media to share information"
      ],
      impact: "High",
      difficulty: "Medium"
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Local Business Engagement",
      description: "Encourage sustainable business practices",
      actions: [
        "Support eco-friendly local businesses",
        "Encourage businesses to adopt green practices",
        "Promote sustainable supply chains",
        "Organize green business networks"
      ],
      impact: "Medium",
      difficulty: "Medium"
    }
  ],
  global: [
    {
      icon: <Sun className="w-6 h-6" />,
      title: "Renewable Energy Transition",
      description: "Shift from fossil fuels to clean energy",
      actions: [
        "Massive investment in solar and wind power",
        "Phase out coal and oil subsidies",
        "Develop energy storage technologies",
        "Create green energy job programs"
      ],
      impact: "Very High",
      difficulty: "High"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "International Climate Agreements",
      description: "Coordinate global climate action",
      actions: [
        "Strengthen Paris Climate Agreement commitments",
        "Develop carbon pricing mechanisms",
        "Support climate adaptation funding",
        "Share clean technology globally"
      ],
      impact: "Very High",
      difficulty: "High"
    },
    {
      icon: <Droplets className="w-6 h-6" />,
      title: "Nature-Based Solutions",
      description: "Protect and restore natural ecosystems",
      actions: [
        "Halt deforestation and restore forests",
        "Protect wetlands and marine ecosystems",
        "Implement regenerative agriculture",
        "Create protected natural areas"
      ],
      impact: "Very High",
      difficulty: "High"
    },
    {
      icon: <Wind className="w-6 h-6" />,
      title: "Green Technology Innovation",
      description: "Develop breakthrough climate solutions",
      actions: [
        "Invest in carbon capture technology",
        "Develop sustainable transportation systems",
        "Create circular economy models",
        "Advance clean manufacturing processes"
      ],
      impact: "Very High",
      difficulty: "High"
    }
  ]
}

const getImpactColor = (impact: string) => {
  switch (impact) {
    case 'Low': return 'bg-green-100 text-green-800'
    case 'Medium': return 'bg-yellow-100 text-yellow-800'
    case 'High': return 'bg-orange-100 text-orange-800'
    case 'Very High': return 'bg-red-100 text-red-800'
    default: return 'bg-gray-100 text-gray-800'
  }
}

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'Low': return 'bg-green-100 text-green-800'
    case 'Medium': return 'bg-yellow-100 text-yellow-800'
    case 'High': return 'bg-red-100 text-red-800'
    default: return 'bg-gray-100 text-gray-800'
  }
}

export default function SolutionsPage() {
  const [activeTab, setActiveTab] = useState('individual')

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Climate Solutions
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover practical solutions to combat climate change at every level - 
          from individual actions to global initiatives that can make a real difference.
        </p>
      </div>

      {/* Solutions Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="individual" className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            Individual Actions
          </TabsTrigger>
          <TabsTrigger value="community" className="flex items-center gap-2">
            <Building2 className="w-4 h-4" />
            Community Solutions
          </TabsTrigger>
          <TabsTrigger value="global" className="flex items-center gap-2">
            <Globe className="w-4 h-4" />
            Global Initiatives
          </TabsTrigger>
        </TabsList>

        <TabsContent value="individual">
          <div className="grid md:grid-cols-2 gap-6">
            {solutions.individual.map((solution, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-green-100 rounded-lg text-green-600">
                        {solution.icon}
                      </div>
                      <div>
                        <CardTitle className="text-lg">{solution.title}</CardTitle>
                        <CardDescription>{solution.description}</CardDescription>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-2">
                    <Badge className={getImpactColor(solution.impact)}>
                      Impact: {solution.impact}
                    </Badge>
                    <Badge className={getDifficultyColor(solution.difficulty)}>
                      Difficulty: {solution.difficulty}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {solution.actions.map((action, actionIndex) => (
                      <li key={actionIndex} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{action}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-4" variant="outline">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="community">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.community.map((solution, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                      {solution.icon}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{solution.title}</CardTitle>
                    </div>
                  </div>
                  <CardDescription>{solution.description}</CardDescription>
                  <div className="flex gap-2 mt-2">
                    <Badge className={getImpactColor(solution.impact)}>
                      Impact: {solution.impact}
                    </Badge>
                    <Badge className={getDifficultyColor(solution.difficulty)}>
                      Difficulty: {solution.difficulty}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {solution.actions.map((action, actionIndex) => (
                      <li key={actionIndex} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{action}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-4" variant="outline">
                    Get Involved
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="global">
          <div className="grid md:grid-cols-2 gap-6">
            {solutions.global.map((solution, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
                      {solution.icon}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{solution.title}</CardTitle>
                    </div>
                  </div>
                  <CardDescription>{solution.description}</CardDescription>
                  <div className="flex gap-2 mt-2">
                    <Badge className={getImpactColor(solution.impact)}>
                      Impact: {solution.impact}
                    </Badge>
                    <Badge className={getDifficultyColor(solution.difficulty)}>
                      Difficulty: {solution.difficulty}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {solution.actions.map((action, actionIndex) => (
                      <li key={actionIndex} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{action}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-4" variant="outline">
                    Support Initiative
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Call to Action */}
      <div className="mt-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Take Action?</h2>
        <p className="text-lg mb-6 opacity-90">
          Start with small steps today and be part of the solution to climate change.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" className="text-green-600">
            Calculate Your Carbon Footprint
          </Button>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-green-600">
            Join Our Community
          </Button>
        </div>
      </div>
    </div>
  )
}