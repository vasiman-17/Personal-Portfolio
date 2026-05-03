export default function Ticker() {
  const tickerContent = "PRISM AI CODE REVIEWER — LIVE IN PRODUCTION · SYNCRO TEAM PLATFORM — DEPLOYED WITH OAUTH · FLOWBOARD VISUAL WORKFLOW TOOL · SRM KTR · B.TECH AI · REACT · NODE.JS · PYTHON · THREE.JS · MONGODB · OPEN TO OPPORTUNITIES · "

  return (
    <>
      <style>{`
        @keyframes tickerLoop {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .ticker-track {
          display: flex;
          width: max-content;
          white-space: nowrap;
          animation: tickerLoop 36s linear infinite;
        }

        .ticker-track:hover {
          animation-play-state: paused;
        }

        .ticker-line {
          display: inline-block;
          padding-right: 40px;
        }
      `}</style>
      <div style={styles.tickerBar}>
        <div style={styles.breakingLabel}>BREAKING</div>
        <div style={styles.tickerContent}>
          <div className="ticker-track" aria-label="Live updates ticker">
            <span className="ticker-line">{tickerContent}</span>
            <span className="ticker-line" aria-hidden="true">{tickerContent}</span>
          </div>
        </div>
      </div>
    </>
  )
}

const styles = {
  tickerBar: {
    width: '100%',
    backgroundColor: 'var(--accent)',
    padding: '5px 0',
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    alignItems: 'center'
  },
  breakingLabel: {
    fontFamily: "'Space Mono', monospace",
    fontSize: '10px',
    fontWeight: '700',
    backgroundColor: 'var(--ink)',
    color: 'var(--paper)',
    padding: '5px 12px',
    position: 'absolute',
    left: '0',
    zIndex: '2',
    textTransform: 'uppercase',
    letterSpacing: '2px'
  },
  tickerContent: {
    fontFamily: "'Space Mono', monospace",
    fontSize: '10px',
    color: 'var(--paper)',
    letterSpacing: '2px',
    marginLeft: '100px',
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
    width: '100%'
  }
}
