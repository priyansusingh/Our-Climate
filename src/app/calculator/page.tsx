'use client'
import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Progress } from '@/components/ui/progress'
import { Calculator, Car, Zap, Trash2, Leaf } from 'lucide-react'
import { motion } from 'framer-motion'

interface CalculatorData {
  transportation: {
    carMiles: number
    flights: number
    publicTransport: number
  }
  energy: {
    electricity: number
    gas: number
    heating: number
  }
  waste: {
    recycling: number
    foodWaste: number
    consumption: number
  }
}

export default function CalculatorPage() {
  const [data, setData] = useState<CalculatorData>({
    transportation: { carMiles: 0, flights: 0, publicTransport: 0 },
    energy: { electricity: 0, gas: 0, heating: 0 },
    waste: { recycling: 50, foodWaste: 0, consumption: 50 }
  })
  
  const [results, setResults] = useState<{
    total: number
    breakdown: { transportation: number, energy: number, waste: number }
  } | null>(null)

  const calculateFootprint = () => {
    // Simplified calculation (in tons CO2 per year)
    const transportationScore = 
      (data.transportation.carMiles * 0.0004) + 
      (data.transportation.flights * 0.5) + 
      (data.transportation.publicTransport * 0.0001)
    
    const energyScore = 
      (data.energy.electricity * 0.0005) + 
      (data.energy.gas * 0.002) + 
      (data.energy.heating * 0.002)
    
    const wasteScore = 
      ((100 - data.waste.recycling) * 0.01) + 
      (data.waste.foodWaste * 0.003) + 
      (data.waste.consumption * 0.02)

    const total = transportationScore + energyScore + wasteScore

    setResults({
      total,
      breakdown: {
        transportation: transportationScore,
        energy: energyScore,
        waste: wasteScore
      }
    })
  }

  const updateData = (category: keyof CalculatorData, field: string, value: number) => {
    setData(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [field]: value
      }
    }))
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Calculator className="h-16 w-16 text-green-600 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Carbon Footprint Calculator
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Calculate your annual carbon footprint and discover ways to reduce your environmental impact.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <div className="space-y-6">
            {/* Transportation */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Car className="h-6 w-6 text-blue-600" />
                  <span>Transportation</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="carMiles">Car Miles per Year</Label>
                  <Input
                    id="carMiles"
                    type="number"
                    value={data.transportation.carMiles}
                    onChange={(e) => updateData('transportation', 'carMiles', Number(e.target.value))}
                    placeholder="e.g., 12000"
                  />
                </div>
                <div>
                  <Label htmlFor="flights">Round-trip Flights per Year</Label>
                  <Input
                    id="flights"
                    type="number"
                    value={data.transportation.flights}
                    onChange={(e) => updateData('transportation', 'flights', Number(e.target.value))}
                    placeholder="e.g., 2"
                  />
                </div>
                <div>
                  <Label htmlFor="publicTransport">Public Transport Miles per Year</Label>
                  <Input
                    id="publicTransport"
                    type="number"
                    value={data.transportation.publicTransport}
                    onChange={(e) => updateData('transportation', 'publicTransport', Number(e.target.value))}
                    placeholder="e.g., 1000"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Energy */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Zap className="h-6 w-6 text-yellow-600" />
                  <span>Energy Use</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="electricity">Monthly Electricity Bill ($)</Label>
                  <Input
                    id="electricity"
                    type="number"
                    value={data.energy.electricity}
                    onChange={(e) => updateData('energy', 'electricity', Number(e.target.value))}
                    placeholder="e.g., 120"
                  />
                </div>
                <div>
                  <Label htmlFor="gas">Monthly Natural Gas Bill ($)</Label>
                  <Input
                    id="gas"
                    type="number"
                    value={data.energy.gas}
                    onChange={(e) => updateData('energy', 'gas', Number(e.target.value))}
                    placeholder="e.g., 80"
                  />
                </div>
                <div>
                  <Label htmlFor="heating">Monthly Heating Oil/Propane ($)</Label>
                  <Input
                    id="heating"
                    type="number"
                    value={data.energy.heating}
                    onChange={(e) => updateData('energy', 'heating', Number(e.target.value))}
                    placeholder="e.g., 100"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Waste & Consumption */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Trash2 className="h-6 w-6 text-green-600" />
                  <span>Waste & Consumption</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="recycling">Recycling Rate (%)</Label>
                  <Input
                    id="recycling"
                    type="number"
                    min="0"
                    max="100"
                    value={data.waste.recycling}
                    onChange={(e) => updateData('waste', 'recycling', Number(e.target.value))}
                  />
                </div>
                <div>
                  <Label htmlFor="foodWaste">Food Waste (lbs per week)</Label>
                  <Input
                    id="foodWaste"
                    type="number"
                    value={data.waste.foodWaste}
                    onChange={(e) => updateData('waste', 'foodWaste', Number(e.target.value))}
                    placeholder="e.g., 5"
                  />
                </div>
                <div>
                  <Label htmlFor="consumption">Consumption Level (1-100)</Label>
                  <Input
                    id="consumption"
                    type="number"
                    min="1"
                    max="100"
                    value={data.waste.consumption}
                    onChange={(e) => updateData('waste', 'consumption', Number(e.target.value))}
                  />
                </div>
              </CardContent>
            </Card>

            <Button onClick={calculateFootprint} size="lg" className="w-full">
              Calculate My Footprint
            </Button>
          </div>

          {/* Results */}
          <div>
            {results ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle className="text-2xl text-center">Your Carbon Footprint</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center mb-6">
                      <div className="text-5xl font-bold text-red-600 mb-2">
                        {results.total.toFixed(1)}
                      </div>
                      <div className="text-gray-600">tons CO₂ per year</div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="flex items-center space-x-2">
                            <Car className="h-4 w-4" />
                            <span>Transportation</span>
                          </span>
                          <span>{results.breakdown.transportation.toFixed(1)} tons</span>
                        </div>
                        <Progress value={(results.breakdown.transportation / results.total) * 100} />
                      </div>

                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="flex items-center space-x-2">
                            <Zap className="h-4 w-4" />
                            <span>Energy</span>
                          </span>
                          <span>{results.breakdown.energy.toFixed(1)} tons</span>
                        </div>
                        <Progress value={(results.breakdown.energy / results.total) * 100} />
                      </div>

                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="flex items-center space-x-2">
                            <Trash2 className="h-4 w-4" />
                            <span>Waste</span>
                          </span>
                          <span>{results.breakdown.waste.toFixed(1)} tons</span>
                        </div>
                        <Progress value={(results.breakdown.waste / results.total) * 100} />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-green-50 border-green-200">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2 text-green-800">
                      <Leaf className="h-6 w-6" />
                      <span>Recommendations</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-green-700">
                      {results.breakdown.transportation > 5 && (
                        <li>• Consider using public transportation or electric vehicles</li>
                      )}
                      {results.breakdown.energy > 3 && (
                        <li>• Switch to renewable energy sources and improve home insulation</li>
                      )}
                      {results.breakdown.waste > 2 && (
                        <li>• Increase recycling and reduce food waste</li>
                      )}
                      <li>• Offset remaining emissions through verified carbon offset programs</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ) : (
              <Card className="h-full flex items-center justify-center">
                <CardContent>
                  <div className="text-center text-gray-500">
                    <Calculator className="h-16 w-16 mx-auto mb-4" />
                    <p>Fill out the form and click &quot;Calculate My Footprint&quot; to see your results.</p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}