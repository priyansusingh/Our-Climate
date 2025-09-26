import Link from 'next/link'
import { Leaf, Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-green-400" />
              <span className="font-bold text-xl">ClimateAware</span>
            </div>
            <p className="text-gray-300">
              Together for a sustainable future. Join our mission to combat climate change.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/education" className="text-gray-300 hover:text-green-400">Education</Link></li>
              <li><Link href="/calculator" className="text-gray-300 hover:text-green-400">Carbon Calculator</Link></li>
              <li><Link href="/community" className="text-gray-300 hover:text-green-400">Community</Link></li>
              <li><Link href="/events" className="text-gray-300 hover:text-green-400">Events</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/blog" className="text-gray-300 hover:text-green-400">Blog</Link></li>
              <li><Link href="/pledge" className="text-gray-300 hover:text-green-400">Make a Pledge</Link></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400">Download Reports</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400">Partner Organizations</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-gray-300">info@climateaware.org</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span className="text-gray-300">Global Initiative</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 ClimateAware. All rights reserved. Together for a sustainable future.</p>
        </div>
      </div>
    </footer>
  )
}