import { AnimatePresence, motion } from 'framer-motion'
import { useSlideshow } from '../../hooks/useSlideshow'
import { useWakeLock } from '../../hooks/useWakeLock'
import { InstitutionalBackground } from '../effects/InstitutionalBackground'
import { VerticalHeader } from './VerticalHeader'
import { VerticalFooter } from './VerticalFooter'
import { VerticalProgressBar } from './VerticalProgressBar'
import { VWelcomeSlide } from './slides/VWelcomeSlide'
import { VMissionSlide } from './slides/VMissionSlide'
import { VProgramsOverviewSlide } from './slides/VProgramsOverviewSlide'
import { VCampusSlide } from './slides/VCampusSlide'
import { VExamsSlide } from './slides/VExamsSlide'
import { VOrientationSlide } from './slides/VOrientationSlide'
import { VPartnershipsSlide } from './slides/VPartnershipsSlide'
import { VResearchSlide } from './slides/VResearchSlide'
import { VEventsSlide } from './slides/VEventsSlide'
import { VContactSlide } from './slides/VContactSlide'

function getSlideContent(slideId: string) {
  switch (slideId) {
    case 'welcome': return <VWelcomeSlide />
    case 'mission': return <VMissionSlide />
    case 'programs-overview': return <VProgramsOverviewSlide />
    case 'campus': return <VCampusSlide />
    case 'exams': return <VExamsSlide />
    case 'orientation': return <VOrientationSlide />
    case 'partnerships': return <VPartnershipsSlide />
    case 'research': return <VResearchSlide />
    case 'events': return <VEventsSlide />
    case 'contact': return <VContactSlide />
    default: return null
  }
}

export function VerticalApp() {
  const { currentIndex, currentSlideId, progress } = useSlideshow()
  useWakeLock()

  return (
    <div className="w-screen h-screen relative overflow-hidden">
      <InstitutionalBackground />

      <div className="absolute inset-0 flex flex-col" style={{ padding: '3% 5%' }}>
        <VerticalHeader />
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlideId}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex flex-col justify-center overflow-hidden"
          >
            {getSlideContent(currentSlideId)}
          </motion.div>
        </AnimatePresence>
        <VerticalFooter />
      </div>

      <VerticalProgressBar currentIndex={currentIndex} progress={progress} />
    </div>
  )
}
