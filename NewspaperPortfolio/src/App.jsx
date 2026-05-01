import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Masthead from './components/Masthead'
import Ticker from './components/Ticker'
import HeroStory from './components/HeroStory'
import Divider from './components/Divider'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './index.css'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const progressRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(progressRef.current, { display: 'block', width: '0%', opacity: 1 })
      gsap.to(progressRef.current, {
        width: '100%',
        duration: 1.2,
        ease: 'power2.out'
      })
      gsap.to(progressRef.current, {
        opacity: 0,
        duration: 0.35,
        delay: 1.5,
        onComplete: () => gsap.set(progressRef.current, { display: 'none' })
      })

      gsap.utils.toArray('.reveal').forEach(el => {
        gsap.from(el, {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none none'
          },
          delay: el.style.getPropertyValue('--delay') || 0
        })
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <>
      <div
        ref={progressRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: '3px',
          width: '0%',
          background: 'var(--accent)',
          zIndex: 1000
        }}
      />
      <Masthead />
      <Ticker />
      <HeroStory />
      <Divider label="Featured Developments" />
      <Projects />
      <Divider label="Field Reports" />
      <Experience />
      <Divider label="Technical Classifieds" />
      <Skills />
      <Divider label="Letters to the Editor" />
      <Contact />
      <Footer />
    </>
  )
}

export default App
