import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Thermometer, Waves, TreePine, Heart, Home, Utensils } from 'lucide-react'

export default function EffectsPage() {
  const effects = [
    {
      icon: Thermometer,
      title: 'Rising Temperatures',
      severity: 'Critical',
      description: 'Global average temperatures have risen by 1.1°C since pre-industrial times, leading to more frequent and intense heatwaves.',
      impacts: [
        'Record-breaking heatwaves',
        'Changes in precipitation patterns',
        'Melting of polar ice caps',
        'Ecosystem disruption'
      ],
      color: 'text-red-600',
      badgeColor: 'bg-red-100 text-red-800'
    },
    {
      icon: Waves,
      title: 'Sea Level Rise',
      severity: 'High',
      description: 'Melting glaciers and thermal expansion of seawater are causing sea levels to rise at an accelerating rate.',
      impacts: [
        'Coastal flooding and erosion',
        'Salt water intrusion',
        'Displacement of communities',
        'Loss of coastal ecosystems'
      ],
      color: 'text-blue-600',
      badgeColor: 'bg-orange-100 text-orange-800'
    },
    {
      icon: TreePine,
      title: 'Biodiversity Loss',
      severity: 'Critical',
      description: 'Climate change is accelerating species extinction and disrupting ecosystems worldwide.',
      impacts: [
        'Habitat loss and fragmentation',
        'Species migration and extinction',
        'Coral reef bleaching',
        'Forest ecosystem changes'
      ],
      color: 'text-green-600',
      badgeColor: 'bg-red-100 text-red-800'
    },
    {
      icon: Heart,
      title: 'Human Health',
      severity: 'High',
      description: 'Climate change affects human health through direct and indirect pathways.',
      impacts: [
        'Heat-related illness and death',
        'Air quality deterioration',
        'Vector-borne disease spread',
        'Mental health impacts'
      ],
      color: 'text-pink-600',
      badgeColor: 'bg-orange-100 text-orange-800'
    },
    {
      icon: Utensils,
      title: 'Food Security',
      severity: 'High',
      description: 'Changing climate patterns threaten global food production and security.',
      impacts: [
        'Crop yield reductions',
        'Livestock heat stress',
        'Water scarcity for irrigation',
        'Increased food prices'
      ],
      color: 'text-yellow-600',
      badgeColor: 'bg-orange-100 text-orange-800'
    },
    {
      icon: Home,
      title: 'Economic Impact',
      severity: 'Moderate',
      description: 'Climate change imposes significant economic costs through damage and adaptation needs.',
      impacts: [
        'Infrastructure damage',
        'Insurance claim increases',
        'Tourism industry impacts',
        'Energy demand changes'
      ],
      color: 'text-purple-600',
      badgeColor: 'bg-yellow-100 text-yellow-800'
    }
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Effects of Climate Change
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Climate change is already having widespread impacts on people, communities, 
            and ecosystems around the world. These effects are expected to intensify as temperatures continue to rise.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {effects.map((effect, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <effect.icon className={`h-10 w-10 ${effect.color}`} />
                    <CardTitle className="text-xl">{effect.title}</CardTitle>
                  </div>
                  <Badge className={effect.badgeColor}>
                    {effect.severity}
                  </Badge>
                </div>
                <p className="text-gray-600">{effect.description}</p>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold mb-3">Key Impacts:</h4>
                <ul className="space-y-2">
                  {effect.impacts.map((impact, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">{impact}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-to-r from-red-50 to-orange-50 border-red-200">
          <CardHeader>
            <CardTitle className="text-2xl text-red-800">
              Regional Variations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-lg mb-3">Arctic Regions</h4>
                <p className="text-gray-600">
                  Experiencing the most rapid warming, with ice loss, permafrost thaw, 
                  and ecosystem changes affecting indigenous communities.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-3">Small Island States</h4>
                <p className="text-gray-600">
                  Facing existential threats from sea-level rise, with some nations 
                  potentially becoming uninhabitable within decades.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-3">Sub-Saharan Africa</h4>
                <p className="text-gray-600">
                  Experiencing increased drought, desertification, and food insecurity, 
                  disproportionately affecting vulnerable populations.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}