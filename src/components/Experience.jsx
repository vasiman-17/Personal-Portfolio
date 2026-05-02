export default function Experience() {
  return (
    <>
      <style>{`
        .exp-container {
          max-width: var(--max-width);
          margin: 0 auto;
          padding: 32px;
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: var(--col-gap);
        }

        .exp-col-left {
          border-right: 1px solid var(--rule);
          padding-right: var(--col-gap);
        }

        .exp-col-left.reveal,
        .exp-col-right.reveal {
          opacity: 1;
          transform: none;
        }

        .exp-col-right.reveal {
          --delay: 0.2s;
        }

        .exp-col-left.reveal.visible,
        .exp-col-right.reveal.visible {
          opacity: 1;
          transform: none;
        }

        .exp-header {
          font-size: 14px;
          line-height: 1.75;
          color: var(--ink);
          margin-bottom: 24px;
        }

        .exp-item {
          margin-bottom: 24px;
          padding-left: 16px;
        }

        .exp-item-1 {
          border-left: 3px solid var(--ink);
        }

        .exp-date {
          font-family: 'Space Mono', monospace;
          font-size: 10px;
          color: var(--ink-light);
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 4px;
        }

        .exp-title {
          font-family: 'Playfair Display', serif;
          font-size: 20px;
          font-weight: 700;
          color: var(--ink);
          margin-bottom: 4px;
        }

        .exp-location {
          font-family: 'Space Mono', monospace;
          font-size: 10px;
          color: var(--ink-faint);
          margin-bottom: 8px;
        }

        .exp-body {
          color: var(--ink-secondary);
        }

        .exp-highlights {
          margin: 16px 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .exp-highlight-item {
          display: flex;
          gap: 10px;
          align-items: flex-start;
          font-size: 14px;
          line-height: 1.6;
          color: var(--ink-secondary);
          font-family: var(--body-font);
        }

        .exp-highlight-marker {
          flex-shrink: 0;
          width: 6px;
          height: 6px;
          background: var(--accent);
          margin-top: 7px;
        }

        .exp-key-contribution {
          border: 2px solid var(--accent);
          padding: 16px 20px;
          margin-top: 20px;
          position: relative;
        }

        .exp-key-label {
          font-family: 'Space Mono', monospace;
          font-size: 9px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 8px;
          font-weight: 700;
        }

        .exp-key-text {
          font-family: 'DM Serif Display', serif;
          font-size: 16px;
          font-style: italic;
          line-height: 1.6;
          color: var(--ink-secondary);
        }

        .exp-stats {
          display: flex;
          gap: 24px;
          margin-top: 12px;
          flex-wrap: wrap;
        }

        .exp-stat {
          font-family: 'Space Mono', monospace;
          font-size: 10px;
          border-left: 2px solid var(--accent);
          padding-left: 8px;
          color: var(--ink);
        }

        .exp-right-stack {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .exp-about-box {
          border: 2px solid var(--ink);
          padding: 24px;
        }

        .exp-about-body {
          font-family: 'DM Serif Display', serif;
          font-size: 15px;
          font-style: italic;
          line-height: 1.7;
          color: var(--ink-secondary);
        }

        .exp-stats-box {
          border: 1px solid var(--rule);
          padding: 20px;
        }

        .exp-stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .exp-stat-item {
          border-left: 2px solid var(--accent);
          padding-left: 12px;
        }

        .exp-stat-value {
          font-family: 'Playfair Display', serif;
          font-size: 28px;
          font-weight: 700;
          color: var(--ink);
          line-height: 1.1;
        }

        .exp-stat-label {
          font-family: 'Space Mono', monospace;
          font-size: 9px;
          color: var(--ink-faint);
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        @media (max-width: 768px) {
          .exp-container {
            grid-template-columns: 1fr;
          }

          .exp-col-left {
            border-right: none;
            padding-right: 0;
            padding-bottom: 24px;
            border-bottom: 1px solid var(--rule);
          }
        }
      `}</style>

      <section id="experience" style={styles.expSection}>
        <div className="exp-container">
          <div className="exp-col-left reveal">
            <div className="exp-header">Hands-on engineering work beyond the classroom.</div>
            <div className="exp-item exp-item-1">
              <div className="exp-date">AUG 2025 - SEP 2025</div>
              <h3 className="exp-title">Robocon Club — Web Development Intern</h3>
              <div className="exp-location">SRM Institute of Science & Technology, Chennai</div>
              
              <div className="exp-highlights">
                <div className="exp-highlight-item">
                  <div className="exp-highlight-marker" />
                  <span>Built responsive web interfaces end-to-end using HTML, CSS, JavaScript, and integrated them with Node.js and Express backends</span>
                </div>
                <div className="exp-highlight-item">
                  <div className="exp-highlight-marker" />
                  <span>Collaborated with a multi-disciplinary team of 15+ members, managing shared codebases through Git with structured branching workflows</span>
                </div>
                <div className="exp-highlight-item">
                  <div className="exp-highlight-marker" />
                  <span>Independently debugged and resolved critical frontend-backend integration issues under tight competition deadlines</span>
                </div>
                <div className="exp-highlight-item">
                  <div className="exp-highlight-marker" />
                  <span>Delivered production-ready modules that were directly used in the club's competition submissions</span>
                </div>
              </div>

              <div className="exp-key-contribution">
                <div className="exp-key-label">Key Contribution</div>
                <div className="exp-key-text">
                  Owned the full web development pipeline for competition deliverables — from UI design to API integration — in a high-pressure, deadline-driven environment.
                </div>
              </div>
            </div>

            <div style={{ borderLeft: '3px solid var(--rule)', paddingLeft: '16px', marginTop: '24px' }}>
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '9px', color: 'var(--ink-faint)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '4px' }}>
                2024 — Present
              </div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '18px', fontWeight: '700', color: 'var(--ink)', marginBottom: '4px' }}>
                SRM Institute of Science & Technology
              </h3>
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '10px', color: 'var(--ink-faint)', marginBottom: '12px' }}>
                B.Tech Artificial Intelligence · Kattankulathur
              </div>
              <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
                <div style={{ borderLeft: '2px solid var(--accent)', paddingLeft: '10px' }}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '22px', fontWeight: '700' }}>8.67</div>
                  <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '9px', color: 'var(--ink-faint)', textTransform: 'uppercase', letterSpacing: '1px' }}>CGPA</div>
                </div>
                <div style={{ borderLeft: '2px solid var(--accent)', paddingLeft: '10px' }}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '22px', fontWeight: '700' }}>4th</div>
                  <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '9px', color: 'var(--ink-faint)', textTransform: 'uppercase', letterSpacing: '1px' }}>Semester</div>
                </div>
                <div style={{ borderLeft: '2px solid var(--accent)', paddingLeft: '10px' }}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '22px', fontWeight: '700' }}>2028</div>
                  <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '9px', color: 'var(--ink-faint)', textTransform: 'uppercase', letterSpacing: '1px' }}>Graduation</div>
                </div>
              </div>
            </div>
          </div>
          <div className="exp-col-right reveal">
            <div className="exp-right-stack">
              <div className="exp-about-box">
                <div className="col-label" style={{ borderBottom: '1px solid var(--rule)', paddingBottom: '8px', marginBottom: '16px' }}>
                  About the Developer
                </div>
                <p className="exp-about-body">
                  B.Tech AI student at SRM KTR with an 8.67 CGPA. Builds full-stack products with React, Node.js, and Python. Ships to production — not just to GitHub.
                </p>
              </div>
              <div className="exp-stats-box">
                <div className="col-label" style={{ borderBottom: '1px solid var(--rule)', paddingBottom: '8px', marginBottom: '16px' }}>
                  By The Numbers
                </div>
                <div className="exp-stats-grid">
                  <div className="exp-stat-item">
                    <div className="exp-stat-value">8.67</div>
                    <div className="exp-stat-label">CGPA</div>
                  </div>
                  <div className="exp-stat-item">
                    <div className="exp-stat-value">3</div>
                    <div className="exp-stat-label">Products Shipped</div>
                  </div>
                  <div className="exp-stat-item">
                    <div className="exp-stat-value">2</div>
                    <div className="exp-stat-label">Live in Production</div>
                  </div>
                  <div className="exp-stat-item">
                    <div className="exp-stat-value">15+</div>
                    <div className="exp-stat-label">TEAM MEMBERS</div>
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
  expSection: {
    width: '100%',
    backgroundColor: 'var(--paper)'
  }
}
