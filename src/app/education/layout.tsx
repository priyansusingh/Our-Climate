import { EducationNav } from '@/app/education/EducationNav'

export default function EducationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <EducationNav />
      {children}
    </div>
  )
}