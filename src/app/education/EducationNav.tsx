'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

export function EducationNav() {
  const pathname = usePathname()
  
  const navItems = [
    { name: 'Overview', href: '/education' },
    { name: 'Causes', href: '/education/causes' },
    { name: 'Effects', href: '/education/effects' },
    { name: 'Solutions', href: '/education/solutions' },
    { name: 'Myths vs Facts', href: '/education/myths' }
  ]

  return (
    <nav className="bg-white border-b sticky top-16 z-40">
      <div className="container mx-auto px-4">
        <div className="flex space-x-8 overflow-x-auto py-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'whitespace-nowrap px-4 py-2 rounded-lg font-medium transition-colors',
                pathname === item.href
                  ? 'bg-green-100 text-green-800'
                  : 'text-gray-600 hover:text-green-800 hover:bg-green-50'
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}