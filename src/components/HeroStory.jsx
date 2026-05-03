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

        @keyframes dispatchPulse {
          0%,
          100% {
            opacity: 0.24;
            transform: scaleX(0.82);
          }
          50% {
            opacity: 0.62;
            transform: scaleX(1);
          }
        }

        @keyframes dispatchSweep {
          0% {
            transform: translateX(-45%);
          }
          100% {
            transform: translateX(50%);
          }
        }

        @keyframes dispatchCrawl {
          0% {
            transform: translateY(0%);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        .dispatch-board {
          margin-top: 20px;
          border: 1px solid var(--ink);
          background: linear-gradient(180deg, #161616 0%, #070707 100%);
          color: var(--paper);
          position: relative;
          overflow: hidden;
          flex: 1 1 auto;
          min-height: 360px;
          display: flex;
          flex-direction: column;
        }

        .dispatch-board::before {
          content: '';
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(
            0deg,
            rgba(242, 234, 216, 0.07) 0 1px,
            transparent 1px 4px
          );
          pointer-events: none;
        }

        .dispatch-top {
          position: relative;
          z-index: 1;
          border-bottom: 1px solid rgba(242, 234, 216, 0.36);
          padding: 12px 14px 10px;
        }

        .dispatch-label {
          font-family: 'Space Mono', monospace;
          font-size: 8px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: rgba(242, 234, 216, 0.75);
          margin-bottom: 7px;
        }

        .dispatch-title {
          font-family: 'Playfair Display', serif;
          font-size: 18px;
          line-height: 1.2;
          color: var(--paper);
        }

        .dispatch-grid {
          position: relative;
          z-index: 1;
          padding: 14px;
          flex: 1;
          display: grid;
          grid-template-rows: auto auto 1fr;
          gap: 12px;
        }

        .dispatch-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }

        .dispatch-stat {
          border: 1px solid rgba(242, 234, 216, 0.35);
          padding: 10px;
          background: rgba(0, 0, 0, 0.22);
        }

        .dispatch-stat-value {
          font-family: 'Playfair Display', serif;
          font-size: 28px;
          color: var(--paper);
          line-height: 1;
        }

        .dispatch-stat-label {
          margin-top: 6px;
          font-family: 'Space Mono', monospace;
          font-size: 8px;
          letter-spacing: 1.6px;
          text-transform: uppercase;
          color: rgba(242, 234, 216, 0.72);
        }

        .dispatch-signal {
          border: 1px solid rgba(242, 234, 216, 0.3);
          padding: 12px 10px;
          position: relative;
          overflow: hidden;
          background: rgba(0, 0, 0, 0.24);
        }

        .dispatch-signal::after {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          width: 62%;
          background: linear-gradient(90deg, transparent 0%, rgba(255, 215, 0, 0.16) 55%, transparent 100%);
          animation: dispatchSweep 4s linear infinite;
        }

        .dispatch-wave {
          height: 2px;
          background: rgba(255, 215, 0, 0.88);
          animation: dispatchPulse 1.8s ease-in-out infinite;
          transform-origin: left;
        }

        .dispatch-feed {
          border: 1px solid rgba(242, 234, 216, 0.24);
          position: relative;
          overflow: hidden;
          background: rgba(0, 0, 0, 0.32);
        }

        .dispatch-feed-track {
          display: flex;
          flex-direction: column;
          animation: dispatchCrawl 14s linear infinite;
          will-change: transform;
        }

        .dispatch-feed-list {
          padding: 0;
          margin: 0;
          list-style: none;
        }

        .dispatch-feed-item {
          font-family: 'Space Mono', monospace;
          font-size: 9px;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: rgba(242, 234, 216, 0.86);
          padding: 9px 10px;
          border-bottom: 1px solid rgba(242, 234, 216, 0.16);
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
            min-height: 0;
          }

          .hero-body {
            column-count: 1;
            column-gap: 0;
            column-rule: none;
          }

          .hero-teaser {
            padding: 14px 0;
          }

          .dispatch-board {
            margin-top: 18px;
            min-height: 320px;
          }

          .dispatch-title {
            font-size: 16px;
          }
        }

        @media (max-width: 480px) {
          .hero-headline {
            line-height: 1.15;
            margin: 10px 0;
          }

          .hero-subheadline {
            margin: 10px 0;
          }

          .hero-button {
            width: 100%;
            margin-right: 0;
            text-align: center;
          }

          .dispatch-board {
            min-height: 290px;
          }

          .dispatch-stat-value {
            font-size: 24px;
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
              PRism: Faster Pull Request Reviews for Shipping Teams
            </h1>

            <hr className="hero-headline-rule" />

            <div className="hero-subheadline">
              GitHub pull requests are analyzed for risk and review quality, then returned as structured feedback in seconds.
            </div>

            <div className="byline">
              Product Brief · SRM KTR · 2026
            </div>

            <div className="hero-body">
              PRism connects to GitHub, reads pull request diffs, and highlights risks with actionable review notes. The current release runs in production and focuses on practical engineering workflows: clear risk flags, concise suggestions, and faster decision-making during code review.
            </div>

            <div className="pull-quote">
              Built for clarity, speed, and practical use in real development cycles.
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
              <div className="hero-profile-line">Full-stack engineering student</div>
              <div className="hero-profile-line">React · Node.js · Python</div>
              <div className="hero-profile-line">Focus: developer tools and web platforms</div>
              <div className="hero-profile-line">SRM KTR · B.Tech AI</div>
              <div className="hero-profile-line" style={{ borderBottom: 'none' }}>Open for internships and entry-level roles</div>
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
                <a className="hero-teaser-link" href="#work">Project Archive: Product Builds and Live Demos</a>
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
                Available for roles starting Summer 2026.
              </div>
            </div>

            <div className="dispatch-board">
              <div className="dispatch-top">
                <div className="dispatch-label">LIVE SIGNAL DESK</div>
                <div className="dispatch-title">Production Dispatch Monitor</div>
              </div>
              <div className="dispatch-grid">
                <div className="dispatch-row">
                  <div className="dispatch-stat">
                    <div className="dispatch-stat-value">03</div>
                    <div className="dispatch-stat-label">Systems Active</div>
                  </div>
                  <div className="dispatch-stat">
                    <div className="dispatch-stat-value">24/7</div>
                    <div className="dispatch-stat-label">Signal Watch</div>
                  </div>
                </div>

                <div className="dispatch-signal">
                  <div className="dispatch-wave" />
                </div>

                <div className="dispatch-feed">
                  <div className="dispatch-feed-track">
                    <ul className="dispatch-feed-list">
                      <li className="dispatch-feed-item">PRISM REPORTING LIVE REVIEW FEEDS</li>
                      <li className="dispatch-feed-item">SYNCRO MATCH ENGINE STABLE AND ONLINE</li>
                      <li className="dispatch-feed-item">FLOWBOARD EXECUTION GRAPH IN MOTION</li>
                      <li className="dispatch-feed-item">NEW BUILD RECEIVED READY FOR TESTING</li>
                      <li className="dispatch-feed-item">OPEN FOR INTERNSHIPS AND PRODUCT WORK</li>
                    </ul>
                    <ul className="dispatch-feed-list" aria-hidden="true">
                      <li className="dispatch-feed-item">PRISM REPORTING LIVE REVIEW FEEDS</li>
                      <li className="dispatch-feed-item">SYNCRO MATCH ENGINE STABLE AND ONLINE</li>
                      <li className="dispatch-feed-item">FLOWBOARD EXECUTION GRAPH IN MOTION</li>
                      <li className="dispatch-feed-item">NEW BUILD RECEIVED READY FOR TESTING</li>
                      <li className="dispatch-feed-item">OPEN FOR INTERNSHIPS AND PRODUCT WORK</li>
                    </ul>
                  </div>
                </div>
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
