export default function HeroStory() {
  return (
    <>
      <style>{`
        .hero-container {
          display: grid;
          grid-template-columns: 2fr 1.2fr 1fr;
          align-items: start;
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
          column-count: 2;
          column-gap: 20px;
          column-rule: 1px solid var(--rule);
          margin: 16px 0;
          color: var(--ink);
          overflow: visible;
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

        .hero-profile-body {
          font-family: 'Space Mono', monospace;
          font-size: 12px;
          color: var(--ink-secondary);
          line-height: 1.9;
        }

        .hero-col3-feature {
          margin-top: 16px;
          border: 1px solid var(--rule);
          padding: 10px;
        }

        .hero-col3-feature-image {
          width: 100%;
          height: 140px;
          object-fit: cover;
          border: 1px solid var(--rule);
          margin-bottom: 10px;
          filter: grayscale(72%) sepia(10%) contrast(1.05);
        }

        .hero-col3-feature-caption {
          font-family: 'Space Mono', monospace;
          font-size: 10px;
          color: var(--ink-faint);
          line-height: 1.6;
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
              Local Developer Ships AI Tool That Reviews Code Like a Senior Engineer
            </h1>

            <hr className="hero-headline-rule" />

            <div className="hero-subheadline">
              PRism analyzes GitHub Pull Requests using Groq Llama 3, delivering structured feedback with cinematic Three.js animations — deployed and live.
            </div>

            <div className="byline">
              By Vaibhav Vasistha · SRM KTR · 2025
            </div>

            <div className="hero-body">
              PRism emerged from a simple question: why do developers wait days for code review when the feedback could arrive in seconds? Built entirely solo by a second-year student, the tool connects directly to GitHub, reads every line of a pull request, and returns a structured review - risks identified, improvements specified, risk score calculated. Deployed on Vercel and Render. Free to use. Live now.
            </div>

            <div className="pull-quote">
              I build things that ship. Not just things that look good.
            </div>

            <div>
              <a href="https://prism-black-five.vercel.app/" target="_blank" rel="noopener noreferrer" className="hero-button hero-button-primary">
                Read Full Story →
              </a>
              <a href="https://github.com/vasiman-17/Prism" target="_blank" rel="noopener noreferrer" className="hero-button hero-button-secondary">
                View Source →
              </a>
            </div>
          </div>

          {/* COLUMN 2 — PHOTO & CAPTION */}
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
              Vaibhav Vasistha, 2nd year B.Tech AI, SRM Kattankulathur - building production tools from Chennai.
            </div>

            <div className="hero-profile-box">
              <div className="hero-profile-title">From the Chennai Desk</div>
              <div className="hero-profile-body">
                <div>Second-year B.Tech AI student at SRM KTR.</div>
                <div>Builds and ships full-stack products, not mockups.</div>
                <div>Currently looking for internship opportunities.</div>
              </div>
            </div>
          </div>

          {/* COLUMN 3 — ALSO INSIDE */}
          <div className="hero-col-3 reveal">
            <div style={styles.alsoInsideLabel}>ALSO INSIDE</div>

            {/* TEASER 1 */}
            <div className="hero-teaser">
              <div className="hero-teaser-page">P.2</div>
              <div className="hero-teaser-headline">
                <a className="hero-teaser-link" href="#work">Flowboard: Build API Workflows Visually</a>
              </div>
              <div className="hero-teaser-body">
                DAG-based execution engine ships.
              </div>
            </div>

            {/* TEASER 2 */}
            <div className="hero-teaser">
              <div className="hero-teaser-page">P.3</div>
              <div className="hero-teaser-headline">
                <a className="hero-teaser-link" href="#skills">Skills Inventory: 2025 Edition</a>
              </div>
              <div className="hero-teaser-body">
                React, Node, Python, Three.js and more.
              </div>
            </div>

            {/* TEASER 3 */}
            <div className="hero-teaser">
              <div className="hero-teaser-page">P.4</div>
              <div className="hero-teaser-headline">
                <a className="hero-teaser-link" href="#contact">Internship Applications Open</a>
              </div>
              <div className="hero-teaser-body">
                Developer available for summer 2025.
              </div>
            </div>

            <div className="hero-col3-feature">
              <img
                src="/assets/prism.png"
                alt="PRism production preview"
                className="hero-col3-feature-image"
              />
              <div className="hero-col3-feature-caption">
                This week&apos;s build: PRism in production, reviewing live pull requests with structured risk scoring.
              </div>
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
