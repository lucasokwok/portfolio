'use client'

import { LanguageProvider } from '@/components/language-provider'
import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Projects } from '@/components/projects'
import { Technologies } from '@/components/technologies'
import { Experience } from '@/components/experience'
import { Education } from '@/components/education'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function HomePage() {
  return (
    <LanguageProvider>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Technologies />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  )
}
