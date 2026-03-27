import { AnimatePresence } from 'framer-motion'
import { useSlideshow } from './hooks/useSlideshow'
import { useWakeLock } from './hooks/useWakeLock'
import { useOrientation } from './hooks/useOrientation'
import { TVSafeArea } from './components/layout/TVSafeArea'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { ProgressBar } from './components/layout/ProgressBar'
import { SlideContainer } from './components/layout/SlideContainer'
import { InstitutionalBackground } from './components/effects/InstitutionalBackground'
import { WelcomeSlide } from './components/slides/WelcomeSlide'
import { MissionSlide } from './components/slides/MissionSlide'
import { ProgramsOverviewSlide } from './components/slides/ProgramsOverviewSlide'
import { CampusSlide } from './components/slides/CampusSlide'
import { OrientationSlide } from './components/slides/OrientationSlide'
import { PartnershipsSlide } from './components/slides/PartnershipsSlide'
import { ResearchSlide } from './components/slides/ResearchSlide'
import { EventsSlide } from './components/slides/EventsSlide'
import { ExamsSlide } from './components/slides/ExamsSlide'
import { ContactSlide } from './components/slides/ContactSlide'
import { VerticalApp } from './components/vertical/VerticalApp'

function getSlideContent(slideId: string) {
  switch (slideId) {
    case 'welcome': return <WelcomeSlide />
    case 'mission': return <MissionSlide />
    case 'programs-overview': return <ProgramsOverviewSlide />
    case 'campus': return <CampusSlide />
    case 'exams': return <ExamsSlide />
    case 'orientation': return <OrientationSlide />
    case 'partnerships': return <PartnershipsSlide />
    case 'research': return <ResearchSlide />
    case 'events': return <EventsSlide />
    case 'contact': return <ContactSlide />
    default: return null
  }
}

function LandscapeApp() {
  const { currentIndex, currentSlideId, progress } = useSlideshow()
  useWakeLock()

  return (
    <div className="w-screen h-screen relative overflow-hidden">
      <InstitutionalBackground />

      <TVSafeArea>
        <Header />
        <AnimatePresence mode="wait">
          <SlideContainer slideKey={currentSlideId}>
            {getSlideContent(currentSlideId)}
          </SlideContainer>
        </AnimatePresence>
        <Footer />
      </TVSafeArea>

      <ProgressBar currentIndex={currentIndex} progress={progress} />
    </div>
  )
}

export default function App() {
  const isPortrait = useOrientation()
  return isPortrait ? <VerticalApp /> : <LandscapeApp />
}
