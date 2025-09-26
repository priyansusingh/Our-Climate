'use client'
import { Button } from '@/components/ui/button'
import { ArrowRight, Play } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-green-900 via-blue-900 to-teal-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-20"></div>
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Together for a{' '}
            <span className="text-green-400">Sustainable Future</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
            Join millions worldwide in the fight against climate change. 
            Learn, act, and make a difference for our planet&apos;s future.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-4">
              <Link href="/pledge" className="flex items-center gap-2">
                Take Action Now <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white hover:bg-white text-green-800 text-lg px-8 py-4"
            >
              <Play className="h-5 w-5 mr-2" />
              Watch Our Mission
            </Button>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-400">2.1M+</div>
              <div className="text-gray-300">Pledges Made</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-400">85K</div>
              <div className="text-gray-300">Trees Planted</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-400">420</div>
              <div className="text-gray-300">CO₂ ppm Current</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-red-400">1.1°C</div>
              <div className="text-gray-300">Temperature Rise</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}