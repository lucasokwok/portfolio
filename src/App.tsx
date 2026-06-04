import { About } from './components/About'
import { Contact } from './components/Contact'
import { Education } from './components/Education'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { LanguageProvider } from './components/LanguageProvider'
import { Projects } from './components/Projects'
import { Technologies } from './components/Technologies'

export default function App() {
  return (
    <LanguageProvider>
      <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
        <Header />
        <main className="relative">
          <Hero />
          <About />
          <Projects />
          <Technologies />
          <Experience />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}
