import { ContactsSection } from '@/components/contacts-section'
import { ExperienceSection } from '@/components/experience-section'
import { HomeSection } from '@/components/home-section'
import { ShowcaseSection } from '@/components/showcase-section'

export default function Home() {
  return (
    <main>
      <div className="mx-auto max-w-screen-lg">
        <HomeSection />
        <ExperienceSection />
        <ShowcaseSection />
        <ContactsSection />
      </div>
    </main>
  )
}
