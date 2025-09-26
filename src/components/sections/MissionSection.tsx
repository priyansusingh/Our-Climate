'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Target, Users, Globe, Zap } from 'lucide-react'

export function MissionSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const missions = [
    {
      icon: Target,
      title: 'Educate & Inform',
      description: 'Provide clear, science-based information about climate change causes and effects.'
    },
    {
      icon: Users,
      title: 'Build Community',
      description: 'Connect like-minded individuals and organizations working towards sustainability.'
    },
    {
      icon: Globe,
      title: 'Inspire Action',
      description: 'Empower people with practical steps to reduce their environmental impact.'
    },
    {
      icon: Zap,
      title: 'Drive Change',
      description: 'Advocate for policy changes and sustainable practices at all levels.'
    }
  ]

  return (
    <section className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We believe that collective action, powered by knowledge and community, 
            can create the sustainable future our planet needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {missions.map((mission, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <mission.icon className="h-12 w-12 text-green-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                {mission.title}
              </h3>
              <p className="text-gray-600 text-center">
                {mission.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}