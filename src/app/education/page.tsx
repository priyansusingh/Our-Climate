import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ThermometerSun, Waves, TreePine, Factory, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function EducationPage() {
  const topics = [
    {
      icon: Factory,
      title: 'Causes of Climate Change',
      description: 'Understand the primary drivers of global warming including greenhouse gases, deforestation, and industrial processes.',
      href: '/education/causes',
      color: 'text-red-600'
    },
    {
      icon: ThermometerSun,
      title: 'Effects & Impacts',
      description: 'Explore the current and projected impacts of climate change on our planet, ecosystems, and communities.',
      href: '/education/effects',
      color: 'text-orange-600'
    },
    {
      icon: TreePine,
      title: 'Solutions & Actions',
      description: 'Discover renewable energy, sustainable practices, and technologies that can help mitigate climate change.',
      href: '/education/solutions',
      color: 'text-green-600'
    },
    {
      icon: Waves,
      title: 'Myths vs Facts',
      description: 'Separate fact from fiction with science-based information that debunks common climate change myths.',
      href: '/education/myths',
      color: 'text-blue-600'
    }
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Understanding Climate Change
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Climate change is one of the most pressing challenges of our time. 
            This educational resource provides science-based information to help you 
            understand the causes, effects, and solutions to global warming.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {topics.map((topic, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <topic.icon className={`h-10 w-10 ${topic.color}`} />
                  <CardTitle className="text-xl">{topic.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{topic.description}</p>
                <Button variant="outline" className="w-full">
                  <Link href={topic.href} className="flex items-center justify-center space-x-2">
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-blue-50 border-blue-200">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-800">
              Key Climate Facts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">97%</div>
                <div className="text-blue-800">of climate scientists agree that climate change is human-caused</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">420ppm</div>
                <div className="text-blue-800">Current atmospheric CO₂ levels (highest in 3M years)</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">1.1°C</div>
                <div className="text-blue-800">Global temperature increase since pre-industrial times</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}