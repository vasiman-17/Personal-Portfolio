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

        .exp-item-2 {
          border-left: 3px solid var(--rule);
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

        .quote-box {
          border: 2px solid var(--ink);
          padding: 24px;
          margin-bottom: 24px;
          background: rgba(255, 215, 0, 0.08);
        }

        .quote-text {
          font-family: 'DM Serif Display', serif;
          font-size: 22px;
          font-style: italic;
          line-height: 1.35;
          color: var(--ink);
          margin-bottom: 12px;
        }

        .quote-attr {
          font-family: 'Space Mono', monospace;
          font-size: 10px;
          color: var(--ink-faint);
        }

        .exp-status-box {
          border: 1px solid var(--rule);
          padding: 16px;
        }

        .exp-status-line {
          font-family: 'Space Mono', monospace;
          font-size: 11px;
          color: var(--ink);
          line-height: 1.8;
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
            <div className="exp-header">A record of deployments, training, and project work in the field.</div>
            <div className="exp-item exp-item-1">
              <div className="exp-date">AUG 2025 - SEP 2025</div>
              <h3 className="exp-title">Robocon Club - Web Dev Intern</h3>
              <div className="exp-location">SRM KTR, Chennai</div>
              <div className="exp-body drop-cap">
                Completed intensive full-stack training building responsive web interfaces with HTML, CSS and JavaScript alongside backend development using Node.js and Express. Managed codebase with Git in a collaborative team environment and independently resolved frontend and backend issues.
              </div>
            </div>
            <div className="exp-item exp-item-2">
              <div className="exp-date">2024 - PRESENT</div>
              <h3 className="exp-title">SRM Institute of Science & Technology</h3>
              <div className="exp-location">B.Tech Artificial Intelligence</div>
              <div className="exp-stats">
                <div className="exp-stat">CGPA: 8.67</div>
                <div className="exp-stat">SEM: 4th</div>
                <div className="exp-stat">BATCH: 2028</div>
              </div>
            </div>
          </div>
          <div className="exp-col-right reveal">
            <div className="quote-box">
              <div className="quote-text">From a dice game in vanilla JS to shipping AI tools with real users - in under a year.</div>
              <div className="quote-attr">- Vaibhav Vasistha, 2025</div>
            </div>
            <div className="exp-status-box">
              <div className="exp-status-line">STATUS: Available</div>
              <div className="exp-status-line">START DATE: June 2025</div>
              <div className="exp-status-line">TYPE: Internship / Full-time</div>
              <div className="exp-status-line">LOCATION: Chennai / Remote</div>
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
