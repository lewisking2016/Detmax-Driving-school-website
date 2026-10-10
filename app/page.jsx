'use client'

import HeroSection from '@/components/home/HeroSection'
import FeaturesSection from '@/components/home/FeaturesSection'
import WelcomeSection from '@/components/home/WelcomeSection'
import AdvantagesSection from '@/components/home/AdvantagesSection'
import CoursesSection from '@/components/home/CoursesSection'
import SchoolsOverview from '@/components/home/SchoolsOverview'
import DrivingSchoolSection from '@/components/home/DrivingSchoolSection'
import ComputerCollegeSection from '@/components/home/ComputerCollegeSection'
import TestimonialSection from '@/components/home/TestimonialSection'
import CTASection from '@/components/home/CTASection'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <WelcomeSection />
      <AdvantagesSection />
      <CoursesSection />
      <SchoolsOverview />
      <DrivingSchoolSection />
      <ComputerCollegeSection />
      <TestimonialSection />
      <CTASection />
    </main>
  )
}
