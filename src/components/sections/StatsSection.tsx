'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'

export function StatsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [counters, setCounters] = useState({
    co2: 0,
    temperature: 0,
    seaLevel: 0,
    species: 0
  })

  useEffect(() => {
    if (inView) {
      const intervals: NodeJS.Timeout[] = []
      
      // Animate CO2 level to 420 ppm
      intervals.push(setInterval(() => {
        setCounters(prev => ({
          ...prev,
          co2: prev.co2 < 420 ? prev.co2 + 5 : 420
        }))
      }, 50))

      // Animate temperature to 1.1°C
      intervals.push(setInterval(() => {
        setCounters(prev => ({
          ...prev,
          temperature: prev.temperature < 1.1 ? prev.temperature + 0.05 : 1.1
        }))
      }, 100))

      // Animate sea level to 21 cm
      intervals.push(setInterval(() => {
        setCounters(prev => ({
          ...prev,
          seaLevel: prev.seaLevel < 21 ? prev.seaLevel + 1 : 21
        }))
      }, 100))

      // Animate species to 1000000
      intervals.push(setInterval(() => {
        setCounters(prev => ({
          ...prev,
          species: prev.species < 1000000 ? prev.species + 10000 : 1000000
        }))
      }, 50))

      return () => intervals.forEach(clearInterval)
    }
  }, [inView])

  return (
    <section className="py-20 bg-gradient-to-r from-red-900 to-orange-800 text-white" ref={ref}>
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The Urgency is Real
          </h2>
          <p className="text-xl text-red-100 mb-12 max-w-3xl mx-auto">
            These numbers tell the story of our changing planet. 
            Every fraction of a degree and ppm matters.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <div className="text-4xl md:text-6xl font-bold text-red-300 mb-2">
              {counters.co2.toFixed(0)}
            </div>
            <div className="text-red-100 text-lg">ppm CO₂</div>
            <div className="text-red-200 text-sm mt-1">Current Level</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <div className="text-4xl md:text-6xl font-bold text-orange-300 mb-2">
              +{counters.temperature.toFixed(1)}°C
            </div>
            <div className="text-orange-100 text-lg">Temperature Rise</div>
            <div className="text-orange-200 text-sm mt-1">Since Pre-industrial</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <div className="text-4xl md:text-6xl font-bold text-yellow-300 mb-2">
              +{counters.seaLevel}cm
            </div>
            <div className="text-yellow-100 text-lg">Sea Level Rise</div>
            <div className="text-yellow-200 text-sm mt-1">Since 1900</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center"
          >
            <div className="text-4xl md:text-6xl font-bold text-red-400 mb-2">
              {(counters.species / 1000000).toFixed(1)}M
            </div>
            <div className="text-red-100 text-lg">Species at Risk</div>
            <div className="text-red-200 text-sm mt-1">Facing Extinction</div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}