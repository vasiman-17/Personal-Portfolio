import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Masthead() {
  const titleRef = useRef(null)
  const taglineRef = useRef(null)
  const navRef = useRef(null)
  const title = 'Vaibhav Vasistha'

  useEffect(() => {
    const ctx = gsap.context(() => {
      const chars = titleRef.current.querySelectorAll('.masthead-title-char')

      gsap.set([taglineRef.current, navRef.current], { opacity: 0 })
      gsap.set(chars, { opacity: 0 })

      gsap.to(chars, {
        opacity: 1,
        duration: 0.08,
        delay: 0.5,
        ease: 'none',
        stagger: 0.08
      })

      gsap.fromTo(
        taglineRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.6, delay: 1.2 }
      )

      gsap.fromTo(
        navRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.6, delay: 1.5 }
      )
    })

    return () => ctx.revert()
  }, [])

  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <header style={styles.masthead}>
      <div style={styles.container}>
        <div className="masthead-top-row" style={styles.topRow}>
          <div style={styles.leftText}>EST. 2024 / SRM KTR / CHENNAI EDITION</div>
          <div style={styles.center}>
            <h1 className="masthead-title" style={styles.title} ref={titleRef}>
              {title.split('').map((char, index) => (
                <span
                  key={`${char}-${index}`}
                  className="masthead-title-char"
                  aria-hidden="true"
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
              <span style={styles.titleSrOnly}>{title}</span>
            </h1>
          </div>
          <div style={styles.rightText}>
            <div>VOL. II / ISSUE 4</div>
            <div>{currentDate}</div>
          </div>
        </div>

        <hr className="rule-double" style={styles.ruleDouble} />

        <div style={styles.tagline} ref={taglineRef}>
          All The Code That's Fit To Ship
        </div>

        <hr className="rule" style={styles.thinRule} />

        <nav style={styles.nav} ref={navRef}>
          <a href="#work" style={styles.navLink}>Work</a>
          <a href="#about" style={styles.navLink}>About</a>
          <a href="#skills" style={styles.navLink}>Skills</a>
          <a href="#contact" style={styles.navLink}>Contact</a>
          <a
            href="https://docs.google.com/document/d/1N7St-SdyTNbibrxAuNgJfGgUPmDyGxcT/edit?usp=sharing&ouid=112235181738279072731&rtpof=true&sd=true"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.navLink}
          >
            Resume
          </a>
        </nav>

        <hr className="rule-thick" style={styles.thickRule} />
      </div>
    </header>
  )
}

const styles = {
  masthead: {
    width: '100%',
    paddingTop: '16px',
    backgroundColor: 'var(--paper)'
  },
  container: {
    maxWidth: 'var(--max-width)',
    margin: '0 auto',
    paddingLeft: '32px',
    paddingRight: '32px'
  },
  topRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '16px'
  },
  leftText: {
    fontFamily: "'Space Mono', monospace",
    fontSize: '9px',
    color: 'var(--ink-faint)',
    flex: '0 0 auto',
    minWidth: '200px'
  },
  center: {
    flex: '1 1 auto',
    textAlign: 'center'
  },
  title: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: 'clamp(42px, 7vw, 88px)',
    fontWeight: '900',
    textTransform: 'uppercase',
    color: 'var(--ink)',
    margin: '0',
    letterSpacing: '1px',
    lineHeight: '0.92'
  },
  titleSrOnly: {
    position: 'absolute',
    width: '1px',
    height: '1px',
    padding: 0,
    margin: '-1px',
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    whiteSpace: 'nowrap',
    border: 0
  },
  rightText: {
    fontFamily: "'Space Mono', monospace",
    fontSize: '9px',
    color: 'var(--ink-faint)',
    textAlign: 'right',
    flex: '0 0 auto',
    minWidth: '150px',
    lineHeight: '1.6'
  },
  ruleDouble: {
    marginTop: '12px',
    marginBottom: '0'
  },
  tagline: {
    textAlign: 'center',
    fontFamily: "'Space Mono', monospace",
    fontSize: '10px',
    letterSpacing: '3px',
    textTransform: 'uppercase',
    color: 'var(--ink-light)',
    padding: '8px 0',
    margin: '0'
  },
  thinRule: {
    marginTop: '8px',
    marginBottom: '0'
  },
  nav: {
    display: 'flex',
    justifyContent: 'center',
    gap: '28px',
    padding: '10px 0',
    fontFamily: "'Space Mono', monospace",
    fontSize: '10px',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    flexWrap: 'wrap'
  },
  navLink: {
    color: 'var(--ink-light)',
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'color 0.2s ease, text-decoration 0.2s ease'
  },
  thickRule: {
    marginTop: '10px',
    marginBottom: '0'
  }
}
