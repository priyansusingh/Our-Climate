import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Users, Heart, Calendar, MessageCircle, Trophy, Target } from 'lucide-react'
import { ClimateQuiz } from '@/components/quiz/ClimateQuiz'

export default function CommunityPage() {
  const communityStats = [
    { icon: Users, label: 'Active Members', value: '12,547', color: 'text-blue-600' },
    { icon: Heart, label: 'Pledges Made', value: '8,932', color: 'text-red-600' },
    { icon: Calendar, label: 'Events This Month', value: '23', color: 'text-green-600' },
    { icon: Trophy, label: 'Trees Planted', value: '15,678', color: 'text-yellow-600' }
  ]

  const communityActions = [
    {
      title: 'Make a Climate Pledge',
      description: 'Commit to specific actions that reduce your environmental impact and inspire others to do the same.',
      icon: Target,
      href: '/pledge',
      color: 'bg-green-500'
    },
    {
      title: 'Join Local Events',
      description: 'Participate in tree planting, beach cleanups, and climate action events in your area.',
      icon: Calendar,
      href: '/events',
      color: 'bg-blue-500'
    },
    {
      title: 'Community Forum',
      description: 'Connect with like-minded individuals, share tips, and discuss climate solutions.',
      icon: MessageCircle,
      href: '#',
      color: 'bg-purple-500'
    }
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Users className="h-16 w-16 text-green-600 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Join Our Community
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Connect with thousands of climate advocates worldwide. Together, we&apos;re building 
            a sustainable future through collective action and shared knowledge.
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {communityStats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="text-center pt-6">
                <stat.icon className={`h-8 w-8 ${stat.color} mx-auto mb-2`} />
                <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Community Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {communityActions.map((action, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className={`w-12 h-12 ${action.color} rounded-lg flex items-center justify-center mb-4`}>
                  <action.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">{action.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{action.description}</p>
                <Button className="w-full">
                  <Link href={action.href}>
                    Get Started
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Climate Quiz Section */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Test Your Climate Knowledge
            </h2>
            <p className="text-gray-600">
              Challenge yourself with our interactive climate quiz and learn fascinating facts about our planet.
            </p>
          </div>
          <ClimateQuiz />
        </div>

        {/* Call to Action */}
        <Card className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
          <CardContent className="text-center py-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
            <p className="text-xl mb-6 text-green-100">
              Join our community today and start your journey toward a more sustainable lifestyle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="bg-white text-green-600 hover:bg-gray-100">
                <Link href="/pledge">Make Your First Pledge</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-green-600">
                <Link href="/calculator">Calculate Your Impact</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}