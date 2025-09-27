import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, XCircle, AlertTriangle } from 'lucide-react'

export default function MythsPage() {
  const mythsFacts = [
    {
      myth: "Climate change is a natural cycle",
      fact: "Current climate change is primarily caused by human activities, not natural cycles.",
      explanation: "While some regions may experience temporary benefits like longer growing seasons, the overall impacts are overwhelmingly negative. Even regions that warm moderately face increased extreme weather, infrastructure damage, and disruptions from climate impacts elsewhere.",
      evidence: "Studies of Arctic communities show that even modest warming brings more costs than benefits through infrastructure damage and ecosystem disruption."
    }
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <AlertTriangle className="h-16 w-16 text-orange-600 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Myths vs Facts
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Separating climate science fact from fiction. Get the truth about 
            common climate change misconceptions with evidence-based explanations.
          </p>
        </div>

        <div className="space-y-8">
          {mythsFacts.map((item, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-0">
                {/* Myth Section */}
                <div className="bg-red-50 border-l-4 border-red-400 p-6">
                  <div className="flex items-start space-x-3">
                    <XCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                    <div>
                      <Badge className="bg-red-100 text-red-800 mb-2">MYTH</Badge>
                      <h3 className="text-lg font-semibold text-red-800 mb-2">
                      &quot;{item.myth}&quot;
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Fact Section */}
                <div className="bg-green-50 border-l-4 border-green-400 p-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <Badge className="bg-green-100 text-green-800 mb-2">FACT</Badge>
                      <h3 className="text-lg font-semibold text-green-800 mb-2">
                        {item.fact}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Explanation */}
                <div className="p-6 bg-white">
                  <h4 className="font-semibold text-gray-800 mb-3">Explanation:</h4>
                  <p className="text-gray-600 mb-4">{item.explanation}</p>
                  
                  <h4 className="font-semibold text-gray-800 mb-2">Scientific Evidence:</h4>
                  <p className="text-gray-600 text-sm bg-blue-50 p-3 rounded-lg border-l-4 border-blue-400">
                    {item.evidence}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-12 bg-blue-50 border-blue-200">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-800 text-center">
              How to Identify Reliable Climate Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-lg mb-3 text-green-700">Look For:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-gray-700">Peer-reviewed scientific journals</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-gray-700">Government climate agencies (NOAA, NASA)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-gray-700">IPCC reports</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-gray-700">Multiple independent studies</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-gray-700">Transparent methodology</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-3 text-red-700">Be Cautious Of:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <XCircle className="h-4 w-4 text-red-600" />
                    <span className="text-gray-700">Non-peer reviewed sources</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <XCircle className="h-4 w-4 text-red-600" />
                    <span className="text-gray-700">Cherry-picked data</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <XCircle className="h-4 w-4 text-red-600" />
                    <span className="text-gray-700">Extreme claims without evidence</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <XCircle className="h-4 w-4 text-red-600" />
                    <span className="text-gray-700">Sources with clear conflicts of interest</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <XCircle className="h-4 w-4 text-red-600" />
                    <span className="text-gray-700">Emotional appeals over scientific evidence</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}