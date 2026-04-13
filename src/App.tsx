import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { TechStackSection } from '@/components/sections/TechStackSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { TimelineSection } from '@/components/sections/TimelineSection';
import { ContactSection } from '@/components/sections/ContactSection';

import {
    navItems,
    techCards,
    projects,
    timelineEvents,
    socialLinks,
    footerLinks
} from '@/data/content';

function App() {
    return (
        <>
            <Navbar items={navItems} />

            <main>
                <HeroSection />
                <TechStackSection cards={techCards} />
                <ProjectsSection projects={projects} />
                <TimelineSection events={timelineEvents} />
                <ContactSection socialLinks={socialLinks} />
            </main>

            <Footer socialLinks={footerLinks} />
        </>
    );
}

export default App;