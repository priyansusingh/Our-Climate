import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { carbonCalculatorSchema } from '@/lib/validations'
import { calculateCarbonFootprint } from '@/lib/utils'
import { ZodError } from 'zod'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { transportation, energy, waste } = carbonCalculatorSchema.parse(body)
    
    const totalScore = calculateCarbonFootprint({ transportation, energy, waste })
    
    // Optionally save to database for registered users
    const { userId } = body
    if (userId) {
      const carbonFootprint = await prisma.carbonFootprint.create({
        data: {
          userId,
          transportation,
          energy,
          waste,
          totalScore
        }
      })
    }

    return NextResponse.json({
      total: totalScore,
      breakdown: { transportation, energy, waste },
      recommendations: generateRecommendations({ transportation, energy, waste, totalScore })
    })
   
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        { error: 'Invalid calculator data', details: error.issues },
        { status: 400 }
      )
    }

    console.error('Carbon calculator error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

function generateRecommendations(data: { transportation: number, energy: number, waste: number, totalScore: number }) {
  const recommendations: string[] = []

  if (data.transportation > 5) {
    recommendations.push('Consider using public transportation, cycling, or electric vehicles')
    recommendations.push('Try carpooling or working from home more often')
  }

  if (data.energy > 3) {
    recommendations.push('Switch to LED bulbs and energy-efficient appliances')
    recommendations.push('Consider renewable energy options like solar panels')
    recommendations.push('Improve home insulation to reduce heating/cooling needs')
  }

  if (data.waste > 2) {
    recommendations.push('Increase recycling and composting rates')
    recommendations.push('Reduce single-use plastics and packaging')
    recommendations.push('Buy local and seasonal products')
  }

  if (data.totalScore > 10) {
    recommendations.push('Consider purchasing verified carbon offsets')
    recommendations.push('Join local climate action groups')
  }

  return recommendations
}