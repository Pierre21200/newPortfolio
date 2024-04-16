'use client'

import { Competences } from '@/components/ui/competences';
import { BackgroundGrid } from '@/components/ui/backgroundGrid';
import { Navbar } from '@/components/ui/navbar';
import { Hero } from '@/components/ui/hero';
import { Projets } from '@/components/ui/projets';
import { Spotlight } from '@/components/ui/spotlight';
import { SpotlightPreview } from '@/components/ui/spotlightpreview';
import { TailwindIndicator } from '@/components/ui/width';
import { AuroraBackgroundDemo } from '@/components/ui/auroraBack';
import Contact from '@/components/ui/contact';




export default function Home() {

  return (
    <main>
            <div className={`min-w-full min-h-screen bg-gradient-to-b from-[hsl(240,38%,10%)] to-[hsl(240,64%,6%)] flex flex-col justify-center items-center`}>

     {/* <Navbar /> */}
     
          <Hero/>

          <Projets/>

          <BackgroundGrid>
            <Competences />
          </BackgroundGrid>

          <Contact/>
     

      




 

      </div>


    <TailwindIndicator/>

    </main>
  )
}
