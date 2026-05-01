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

        .hero-button:hover {
          background: var(--ink);
          color: var(--paper);
        }

        .hero-sidebar-article {
          border-top: 2px solid var(--ink);
          padding-top: 12px;
          margin-top: 12px;
        }

        .hero-sidebar-headline {
          font-family: 'Playfair Display', serif;
          font-size: 16px;
          font-weight: 700;
          color: var(--ink);
          margin-bottom: 8px;
        }

        .hero-sidebar-body {
          color: var(--ink-secondary);
          margin-bottom: 8px;
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
          margin: 6px 0;
        }

        .hero-teaser-body {
          color: var(--ink-faint);
        }

        .hero-status-box {
          border: 1px solid var(--rule);
          padding: 12px;
          margin-top: 16px;
        }

        .hero-status-line {
          font-family: 'Space Mono', monospace;
          font-size: 12px;
          color: var(--ink);
          line-height: 1.8;
        }

        .hero-photo-wrap {
          position: relative;
          overflow: hidden;
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

        .hero-photo-wrap::after {
          content: 'Read More →';
          position: absolute;
          inset: 0;
          background: rgba(13, 13, 13, 0.7);
          color: var(--paper);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Space Mono', monospace;
          font-size: 11px;
          letter-spacing: 2px;
          text-transform: uppercase;
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 2;
        }

        .hero-photo-wrap:hover::after {
          opacity: 1;
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
              In what observers are calling an impressive feat for a second-year student, Vaibhav Vasistha has shipped PRism — a fully deployed AI tool that reads GitHub pull requests and returns senior-engineer-level code reviews in seconds. The tool uses Groq's Llama 3 model and Three.js for a cinematic scan animation. Built solo. Deployed on Vercel and Render. Free to use.
            </div>

            <div className="pull-quote">
              I build things that ship. Not just things that look good.
            </div>

            <div>
              <a href="https://prism-black-five.vercel.app/" target="_blank" rel="noopener noreferrer" className="hero-button">
                Read Full Story →
              </a>
              <a href="https://github.com/vasiman-17/Prism" target="_blank" rel="noopener noreferrer" className="hero-button">
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

            <div className="hero-sidebar-article">
              <div className="hero-sidebar-headline">
                Syncro Platform Reaches Production
              </div>
              <div className="hero-sidebar-body">
                Full-stack collaboration platform with Google OAuth and JWT now live for real users.
              </div>
              <a
                href="https://syncro-brown.vercel.app/auth"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.sidebarLink}
              >
                Continue reading →
              </a>
            </div>
          </div>

          {/* COLUMN 3 — ALSO INSIDE */}
          <div className="hero-col-3 reveal">
            <div style={styles.alsoInsideLabel}>ALSO INSIDE</div>

            {/* TEASER 1 */}
            <div className="hero-teaser">
              <div className="article-number">P. 2</div>
              <div className="hero-teaser-headline">
                Flowboard: Build API Workflows Visually
              </div>
              <div className="hero-teaser-body">
                DAG-based execution engine ships.
              </div>
            </div>

            {/* TEASER 2 */}
            <div className="hero-teaser">
              <div className="article-number">P. 3</div>
              <div className="hero-teaser-headline">
                Skills Inventory: 2025 Edition
              </div>
              <div className="hero-teaser-body">
                React, Node, Python, Three.js and more.
              </div>
            </div>

            {/* TEASER 3 */}
            <div className="hero-teaser">
              <div className="article-number">P. 4</div>
              <div className="hero-teaser-headline">
                Internship Applications Open
              </div>
              <div className="hero-teaser-body">
                Developer available for summer 2025.
              </div>
            </div>

            {/* STATUS BOX */}
            <div className="hero-status-box">
              <div className="col-label" style={{ marginBottom: '8px' }}>
                CURRENT STATUS
              </div>
              <div className="hero-status-line">Available for Internship</div>
              <div className="hero-status-line">Open to: Startups, Product</div>
              <div className="hero-status-line">Location: Chennai / Remote</div>
              <div className="hero-status-line">Response time: &lt; 24 hours</div>
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
  sidebarLink: {
    fontFamily: "'Space Mono', monospace",
    fontSize: '10px',
    color: 'var(--ink)',
    textDecoration: 'underline',
    textUnderlineOffset: '3px'
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
