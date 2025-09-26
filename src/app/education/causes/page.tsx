import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Factory, Car, Zap, TreePine, Flame, Building } from 'lucide-react'

export default function CausesPage() {
  const causes = [
    {
      icon: Factory,
      title: 'Industrial Processes',
      percentage: 21,
      description: 'Manufacturing, cement production, and chemical processes release significant amounts of CO₂ and other greenhouse gases.',
      color: 'bg-red-500'
    },
    {
      icon: Car,
      title: 'Transportation',
      percentage: 16,
      description: 'Cars, trucks, ships, and airplanes burn fossil fuels, contributing to global emissions.',
      color: 'bg-orange-500'
    },
    {
      icon: Zap,
      title: 'Energy Production',
      percentage: 25,
      description: 'Burning coal, oil, and natural gas for electricity and heat is the largest source of greenhouse gas emissions.',
      color: 'bg-yellow-500'
    },
    {
      icon: TreePine,
      title: 'Deforestation',
      percentage: 11,
      description: 'Cutting down forests reduces CO₂ absorption and releases stored carbon into the atmosphere.',
      color: 'bg-green-500'
    },
    {
      icon: Flame,
      title: 'Agriculture',
      percentage: 18,
      description: 'Livestock, rice cultivation, and fertilizer use produce methane and nitrous oxide emissions.',
      color: 'bg-blue-500'
    },
    {
      icon: Building,
      title: 'Buildings',
      percentage: 9,
      description: 'Heating, cooling, and powering buildings accounts for a significant portion of energy consumption.',
      color: 'bg-purple-500'
    }
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Causes of Climate Change
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Human activities have increased greenhouse gas concentrations in the atmosphere 
            since the Industrial Revolution, leading to global warming and climate change.
          </p>
        </div>

        <Card className="mb-12 bg-gradient-to-r from-red-50 to-orange-50 border-red-200">
          <CardHeader>
            <CardTitle className="text-2xl text-red-800">
              The Greenhouse Effect
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              Greenhouse gases trap heat in Earth&apos;s atmosphere, creating a natural warming effect that makes our planet habitable. 
              However, human activities have dramatically increased these gas concentrations, intensifying this effect and causing global temperatures to rise.
            </p>
            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-4">Major Greenhouse Gases:</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Carbon Dioxide (CO₂)</span>
                  <span className="text-red-600">76% of emissions</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Methane (CH₄)</span>
                  <span className="text-orange-600">16% of emissions</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Nitrous Oxide (N₂O)</span>
                  <span className="text-yellow-600">6% of emissions</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Fluorinated Gases</span>
                  <span className="text-blue-600">2% of emissions</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {causes.map((cause, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <cause.icon className="h-10 w-10 text-gray-600" />
                  <CardTitle className="text-xl">{cause.title}</CardTitle>
                </div>
                <div className="flex items-center space-x-4">
                  <Progress value={cause.percentage} className="flex-1" />
                  <span className="font-bold text-lg">{cause.percentage}%</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{cause.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gray-900 text-white">
          <CardHeader>
            <CardTitle className="text-2xl">Historical Context</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-yellow-400 mb-2">280ppm</div>
                <div className="text-gray-300">CO₂ levels before Industrial Revolution</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-400 mb-2">1850s</div>
                <div className="text-gray-300">Beginning of rapid emissions growth</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-400 mb-2">420ppm</div>
                <div className="text-gray-300">Current CO₂ levels (50% increase)</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}