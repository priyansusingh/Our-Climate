'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calculator, BookOpen, Calendar, Users2, TrendingUp, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function FeaturesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const features = [
    {
      icon: Calculator,
      title: 'Carbon Footprint Calculator',
      description: 'Measure your environmental impact and get personalized recommendations.',
      href: '/calculator',
      color: 'text-blue-600'
    },
    {
      icon: BookOpen,
      title: 'Educational Resources',
      description: 'Learn about climate science, causes, effects, and solutions.',
      href: '/education',
      color: 'text-green-600'
    },
    {
      icon: Calendar,
      title: 'Climate Events',
      description: 'Join local and global climate action events and initiatives.',
      href: '/events',
      color: 'text-purple-600'
    },
    {
      icon: Users2,
      title: 'Community Pledges',
      description: 'Make commitments and track your progress with others.',
      href: '/pledge',
      color: 'text-orange-600'
    },
    {
      icon: TrendingUp,
      title: 'Real-time Data',
      description: 'Access live climate data and tracking tools.',
      href: '/data',
      color: 'text-red-600'
    },
    {
      icon: Heart,
      title: 'Take Action',
      description: 'Find practical ways to make a difference in your daily life.',
      href: '/community',
      color: 'text-pink-600'
    }
  ]

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Tools for Change
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive suite of tools designed to educate, 
            engage, and empower you in the fight against climate change.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-xl border-2 border-gray-100 hover:border-green-200 hover:shadow-lg transition-all duration-300"
            >
              <feature.icon className={`h-12 w-12 ${feature.color} mb-6 group-hover:scale-110 transition-transform`} />
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {feature.description}
              </p>
              <Button variant="outline" className="group-hover:bg-green-50">
                <Link href={feature.href}>
                  Explore Tool
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}