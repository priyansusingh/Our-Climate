import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Zap, TreePine, Factory, Home, Car, Recycle } from 'lucide-react'

export default function SolutionsPage() {
  const solutions = [
    {
      icon: Zap,
      title: 'Renewable Energy',
      adoption: 85,
      description: 'Transition to solar, wind, and other clean energy sources to reduce fossil fuel dependence.',
      benefits: [
        'Reduces greenhouse gas emissions by up to 80%',
        'Creates sustainable jobs',
        'Decreases air pollution',
        'Energy independence'
      ],
      color: 'text-yellow-600'
    },
    {
      icon: TreePine,
      title: 'Reforestation & Conservation',
      adoption: 45,
      description: 'Protect existing forests and plant new trees to absorb CO₂ from the atmosphere.',
      benefits: [
        'Each tree absorbs 48 lbs of CO₂ annually',
        'Preserves biodiversity',
        'Prevents soil erosion',
        'Provides economic opportunities'
      ],
      color: 'text-green-600'
    },
    {
      icon: Factory,
      title: 'Industrial Efficiency',
      adoption: 60,
      description: 'Improve manufacturing processes and implement circular economy principles.',
      benefits: [
        'Reduces waste by 70%',
        'Lowers production costs',
        'Minimizes resource consumption',
        'Creates innovative technologies'
      ],
      color: 'text-blue-600'
    },
    {
      icon: Home,
      title: 'Green Buildings',
      adoption: 40,
      description: 'Design and retrofit buildings for maximum energy efficiency and sustainability.',
      benefits: [
        'Reduces energy consumption by 50%',
        'Improves indoor air quality',
        'Lowers utility costs',
        'Increases property value'
      ],
      color: 'text-purple-600'
    },
    {
      icon: Car,
      title: 'Sustainable Transportation',
      adoption: 30,
      description: 'Promote electric vehicles, public transit, and active transportation methods.',
      benefits: [
        'Reduces transport emissions by 60%',
        'Improves air quality in cities',
        'Decreases traffic congestion',
        'Promotes healthier lifestyles'
      ],
      color: 'text-red-600'
    },
    {
      icon: Recycle,
      title: 'Circular Economy',
      adoption: 25,
      description: 'Minimize waste through reuse, recycling, and sustainable consumption patterns.',
      benefits: [
        'Reduces landfill waste by 90%',
        'Conserves natural resources',
        'Creates new business models',
        'Promotes innovation'
      ],
      color: 'text-orange-600'
    }
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Climate Solutions
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            We have the technologies and knowledge needed to address climate change. 
            Here are the key solutions that can help us build a sustainable future.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {solutions.map((solution, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <solution.icon className={`h-10 w-10 ${solution.color}`} />
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{solution.title}</CardTitle>
                    <div className="flex items-center space-x-3">
                      <Progress value={solution.adoption} className="flex-1" />
                      <span className="text-sm font-medium">{solution.adoption}%</span>
                    </div>
                    <span className="text-sm text-gray-500">Current adoption rate</span>
                  </div>
                </div>
                <p className="text-gray-600">{solution.description}</p>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold mb-3 text-green-800">Key Benefits:</h4>
                <ul className="space-y-2">
                  {solution.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
          <CardHeader>
            <CardTitle className="text-2xl text-green-800 text-center">
              Individual Actions That Make a Difference
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-lg mb-3 text-green-700">At Home</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>• Switch to LED bulbs</li>
                  <li>• Improve insulation</li>
                  <li>• Use programmable thermostat</li>
                  <li>• Choose renewable energy</li>
                  <li>• Reduce water heating</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-3 text-blue-700">Transportation</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>• Walk, bike, or use transit</li>
                  <li>• Consider electric vehicles</li>
                  <li>• Combine errands into one trip</li>
                  <li>• Work from home when possible</li>
                  <li>• Choose direct flights</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-3 text-purple-700">Consumption</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>• Reduce, reuse, recycle</li>
                  <li>• Buy local and seasonal food</li>
                  <li>• Minimize food waste</li>
                  <li>• Choose sustainable products</li>
                  <li>• Support eco-friendly businesses</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}