import Terminal from './Terminal'

export default function HeroStory() {
  return (
    <>
      <style>{`
        .hero-container {
          display: grid;
          grid-template-columns: 2fr 1.2fr 1fr;
          align-items: stretch;
          gap: var(--col-gap);
          max-width: var(--max-width);
          margin: 0 auto;
          padding: 32px;
        }

        .hero-col-1 {
          border-right: 1px solid var(--rule);
          padding-right: var(--col-gap);
        }

        .hero-col-2 {
          border-right: 1px solid var(--rule);
          padding-right: var(--col-gap);
        }

        .hero-col-3 {
          padding-bottom: 0;
        }

        .hero-col-1.reveal,
        .hero-col-2.reveal,
        .hero-col-3.reveal {
          opacity: 1;
          transform: none;
        }

        .hero-col-2.reveal {
          --delay: 0.2s;
        }

        .hero-col-3.reveal {
          --delay: 0.4s;
        }

        .hero-col-1.reveal.visible,
        .hero-col-2.reveal.visible,
        .hero-col-3.reveal.visible {
          opacity: 1;
          transform: none;
        }

        .hero-headline {
          font-family: 'Playfair Display', serif;
          font-size: clamp(32px, 5vw, 56px);
          font-weight: 900;
          font-style: italic;
          line-height: 1.1;
          margin: 12px 0;
          color: var(--ink);
        }

        .hero-headline-rule {
          border: none;
          border-top: 1px solid var(--rule);
          margin: 12px 0;
        }

        .hero-subheadline {
          font-size: 16px;
          font-style: italic;
          color: var(--ink-secondary);
          line-height: 1.5;
          margin: 12px 0;
        }

        .hero-body {
          margin: 16px 0;
          color: var(--ink);
          font-family: var(--body-font);
          font-size: 15px;
          line-height: 1.6;
        }

        .hero-button {
          display: inline-block;
          font-family: 'Space Mono', monospace;
          font-size: 10px;
          letter-spacing: 2px;
          border: 1px solid var(--ink);
          padding: 8px 16px;
          margin-right: 12px;
          margin-top: 16px;
          color: var(--ink);
          text-decoration: none;
          background: transparent;
          cursor: pointer;
          transition: background 0.2s ease, color 0.2s ease;
        }

        .hero-button-primary {
          background: var(--ink);
          color: var(--paper);
          border: 1px solid var(--ink);
          padding: 10px 20px;
          font-size: 11px;
          border-radius: 0;
        }

        .hero-button-secondary {
          background: transparent;
          color: var(--ink);
          border: 1px solid var(--ink);
        }

        .hero-button-secondary:hover {
          background: var(--ink);
          color: var(--paper);
        }

        .hero-button-primary:hover {
          background: var(--accent);
          border-color: var(--accent);
          color: var(--paper);
        }

        .hero-teaser {
          border-bottom: 1px solid var(--rule);
          padding: 12px 0;
        }

        .hero-teaser:last-child {
          border-bottom: none;
        }

        .hero-teaser-headline {
          font-family: 'Playfair Display', serif;
          font-size: 14px;
          font-weight: 700;
          color: var(--ink);
          line-height: 1.3;
          margin-bottom: 4px;
        }

        .hero-teaser-body {
          font-family: 'Space Mono', monospace;
          font-size: 10px;
          color: var(--ink-faint);
          line-height: 1.5;
        }

        .hero-profile-box {
          border: 1px solid var(--rule);
          padding: 16px;
          margin-top: 16px;
        }

        .hero-profile-title {
          font-family: 'Space Mono', monospace;
          font-size: 9px;
          letter-spacing: 3px;
          color: var(--ink-faint);
          text-transform: uppercase;
          margin-bottom: 12px;
          padding-bottom: 8px;
          border-bottom: 1px solid var(--rule);
        }

        .hero-profile-line {
          font-family: 'Space Mono', monospace;
          font-size: 11px;
          color: var(--ink-secondary);
          line-height: 2;
          padding: 3px 0;
          border-bottom: 1px solid var(--rule);
        }

        .hero-profile-line:last-child {
          border-bottom: none;
        }

        .hero-photo-wrap {
          position: relative;
          border: 1px solid var(--rule);
          margin-bottom: 8px;
          aspect-ratio: 4 / 5;
          background: var(--paper-dark);
        }

        .hero-photo-wrap::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 50% 34%, transparent 0 38%, rgba(13, 13, 13, 0.08) 100%),
            repeating-linear-gradient(0deg, rgba(13, 13, 13, 0.08) 0 1px, transparent 1px 4px);
          mix-blend-mode: multiply;
          pointer-events: none;
          z-index: 1;
        }

        .hero-teaser-page {
          font-family: 'Space Mono', monospace;
          font-size: 9px;
          color: var(--accent);
          margin-bottom: 4px;
          letter-spacing: 2px;
        }

        .hero-teaser-link {
          color: inherit;
          text-decoration: none;
        }

        .hero-teaser-link:hover {
          background: transparent;
          padding: 0;
          text-decoration: underline;
          text-underline-offset: 3px;
        }

        @media (max-width: 768px) {
          .hero-container {
            grid-template-columns: 1fr;
            gap: var(--col-gap);
          }

          .hero-col-1,
          .hero-col-2 {
            border-right: none;
            border-bottom: 1px solid var(--rule);
            padding-right: 0;
            padding-bottom: 24px;
          }

          .hero-col-3 {
            padding-bottom: 0;
          }

          .hero-body {
            column-count: 1;
            column-gap: 0;
            column-rule: none;
          }
        }
      `}</style>

      <section id="about" style={styles.heroSection}>
        <div className="hero-container">
          {/* COLUMN 1 — LEAD STORY */}
          <div className="hero-col-1 reveal">
            <div className="article-number">ARTICLE 001</div>
            <div className="breaking-tag">EXCLUSIVE</div>

            <h1 className="hero-headline">
              PRism: The AI Tool That Reviews Your GitHub Pull Requests Like a Senior Engineer
            </h1>

            <hr className="hero-headline-rule" />

            <div className="hero-subheadline">
              PRism reads GitHub pull requests, scores risk, and delivers structured review feedback in seconds — not days.
            </div>

            <div className="byline">
              By Vaibhav Vasistha · SRM KTR · 2025
            </div>

            <div className="hero-body">
              PRism emerged from a simple question: why do developers wait days for code review when the feedback could arrive in seconds? Built entirely solo, the tool connects directly to GitHub, reads every line of a pull request diff, and returns a structured review — risks identified, improvements specified, risk score calculated. Deployed on Vercel and Render. Free to use.
            </div>

            <div className="pull-quote">
              Three products shipped. Two in production. One developer.
            </div>

            <div>
              <a href="#work" className="hero-button hero-button-primary">
                See the Work →
              </a>
              <a href="https://prism-black-five.vercel.app/" target="_blank" rel="noopener noreferrer" className="hero-button hero-button-secondary">
                Try PRism Live →
              </a>
            </div>
          </div>

          {/* COLUMN 2 — PHOTO, PROFILE & TERMINAL */}
          <div className="hero-col-2 reveal">
            <div className="hero-photo-wrap">
              <img
                src="/assets/photo.png"
                alt="Vaibhav Vasistha"
                className="newspaper-photo"
                style={styles.heroPhoto}
              />
            </div>

            <div style={styles.caption}>
              Vaibhav Vasistha, B.Tech AI, SRM Kattankulathur — shipping production software from Chennai.
            </div>

            <div className="hero-profile-box">
              <div className="hero-profile-title">Developer Profile</div>
              <div className="hero-profile-line">Full-stack developer</div>
              <div className="hero-profile-line">React · Node.js · Python</div>
              <div className="hero-profile-line">3 products shipped</div>
              <div className="hero-profile-line">CGPA 8.67 · SRM KTR · 2nd Year</div>
              <div className="hero-profile-line" style={{ borderBottom: 'none' }}>Available for internships</div>
            </div>

            <Terminal />
          </div>

          {/* COLUMN 3 — ALSO INSIDE */}
          <div className="hero-col-3 reveal" style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={styles.alsoInsideLabel}>ALSO INSIDE</div>

            {/* TEASER 1 */}
            <div className="hero-teaser">
              <div className="hero-teaser-page">P.2</div>
              <div className="hero-teaser-headline">
                <a className="hero-teaser-link" href="#work">Full Project Archive: 3 Shipped Products</a>
              </div>
              <div className="hero-teaser-body">
                PRism, Syncro, and Flowboard — with live demos.
              </div>
            </div>

            {/* TEASER 2 */}
            <div className="hero-teaser">
              <div className="hero-teaser-page">P.3</div>
              <div className="hero-teaser-headline">
                <a className="hero-teaser-link" href="#skills">Technical Stack: 2025 Edition</a>
              </div>
              <div className="hero-teaser-body">
                React, Node, Python, Three.js, GSAP, and more.
              </div>
            </div>

            {/* TEASER 3 */}
            <div className="hero-teaser">
              <div className="hero-teaser-page">P.4</div>
              <div className="hero-teaser-headline">
                <a className="hero-teaser-link" href="#contact">Open to Opportunities</a>
              </div>
              <div className="hero-teaser-body">
                Available for roles starting Summer 2025.
              </div>
            </div>

            {/* INDEX */}
            <div className="hero-index" style={{ marginTop: '24px', borderTop: '2px solid var(--ink)', borderBottom: '2px solid var(--ink)', padding: '12px 0' }}>
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '10px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px', color: 'var(--ink)' }}>
                INDEX
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0', fontSize: '11px', fontFamily: "'Space Mono', monospace", color: 'var(--ink-secondary)' }}>
                <span>Front Page</span>
                <span>A1</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0', fontSize: '11px', fontFamily: "'Space Mono', monospace", color: 'var(--ink-secondary)' }}>
                <span>Projects</span>
                <span>B1</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0', fontSize: '11px', fontFamily: "'Space Mono', monospace", color: 'var(--ink-secondary)' }}>
                <span>Experience</span>
                <span>C1</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0', fontSize: '11px', fontFamily: "'Space Mono', monospace", color: 'var(--ink-secondary)' }}>
                <span>Skills</span>
                <span>D1</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0', fontSize: '11px', fontFamily: "'Space Mono', monospace", color: 'var(--ink-secondary)' }}>
                <span>Contact</span>
                <span>E1</span>
              </div>
            </div>

            {/* BARCODE */}
            <div style={{ marginTop: 'auto', paddingTop: '32px', textAlign: 'center' }}>
              <svg width="140" height="50" viewBox="0 0 140 50" style={{ opacity: 0.8 }}>
                 <rect x="0" y="0" width="3" height="40" fill="var(--ink)"/>
                 <rect x="5" y="0" width="1" height="40" fill="var(--ink)"/>
                 <rect x="8" y="0" width="4" height="40" fill="var(--ink)"/>
                 <rect x="14" y="0" width="2" height="40" fill="var(--ink)"/>
                 <rect x="18" y="0" width="6" height="40" fill="var(--ink)"/>
                 <rect x="26" y="0" width="1" height="40" fill="var(--ink)"/>
                 <rect x="29" y="0" width="3" height="40" fill="var(--ink)"/>
                 <rect x="34" y="0" width="5" height="40" fill="var(--ink)"/>
                 <rect x="41" y="0" width="2" height="40" fill="var(--ink)"/>
                 <rect x="45" y="0" width="1" height="40" fill="var(--ink)"/>
                 <rect x="48" y="0" width="4" height="40" fill="var(--ink)"/>
                 <rect x="54" y="0" width="2" height="40" fill="var(--ink)"/>
                 <rect x="58" y="0" width="1" height="40" fill="var(--ink)"/>
                 <rect x="61" y="0" width="3" height="40" fill="var(--ink)"/>
                 <rect x="66" y="0" width="5" height="40" fill="var(--ink)"/>
                 <rect x="73" y="0" width="1" height="40" fill="var(--ink)"/>
                 <rect x="76" y="0" width="2" height="40" fill="var(--ink)"/>
                 <rect x="80" y="0" width="4" height="40" fill="var(--ink)"/>
                 <rect x="86" y="0" width="1" height="40" fill="var(--ink)"/>
                 <rect x="89" y="0" width="3" height="40" fill="var(--ink)"/>
                 <rect x="94" y="0" width="2" height="40" fill="var(--ink)"/>
                 <rect x="98" y="0" width="6" height="40" fill="var(--ink)"/>
                 <rect x="106" y="0" width="1" height="40" fill="var(--ink)"/>
                 <rect x="109" y="0" width="4" height="40" fill="var(--ink)"/>
                 <rect x="115" y="0" width="2" height="40" fill="var(--ink)"/>
                 <rect x="119" y="0" width="1" height="40" fill="var(--ink)"/>
                 
                 <text x="60" y="48" fontFamily="'Space Mono', monospace" fontSize="8" fill="var(--ink)" textAnchor="middle" letterSpacing="3px">01101000 01101001</text>
              </svg>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

const styles = {
  heroSection: {
    width: '100%',
    backgroundColor: 'var(--paper)'
  },
  heroPhoto: {
    width: '100%',
    height: '100%',
    display: 'block',
    objectFit: 'cover',
    objectPosition: 'center 38%',
    filter: 'grayscale(100%) sepia(18%) contrast(1.18) brightness(0.96)'
  },
  caption: {
    fontFamily: "var(--body-font)",
    fontSize: '12px',
    fontStyle: 'italic',
    color: 'var(--ink-faint)',
    padding: '8px 0',
    borderBottom: '1px solid var(--rule)',
    lineHeight: '1.6'
  },
  alsoInsideLabel: {
    fontFamily: "'Space Mono', monospace",
    fontSize: '9px',
    letterSpacing: '3px',
    textTransform: 'uppercase',
    color: 'var(--ink-faint)',
    borderBottom: '2px solid var(--ink)',
    paddingBottom: '8px',
    marginBottom: '16px'
  }
}
