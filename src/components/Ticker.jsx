export default function Ticker() {
  const tickerContent = "PRISM AI CODE REVIEWER — LIVE IN PRODUCTION · SYNCRO TEAM PLATFORM — DEPLOYED WITH OAUTH · 3 PRODUCTS SHIPPED SOLO · CGPA 8.67 · B.TECH AI · SRM KTR · REACT · NODE.JS · PYTHON · THREE.JS · MONGODB · GROQ LLAMA 3 · OPEN TO OPPORTUNITIES · "

  return (
    <>
      <style>{`
        @keyframes ticker {
          0% {
            transform: translateX(100vw);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .ticker-content {
          animation: ticker 35s linear infinite;
          white-space: nowrap;
        }
        .ticker-content:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div style={styles.tickerBar}>
        <div style={styles.breakingLabel}>BREAKING</div>
        <div style={styles.tickerContent}>
          <span className="ticker-content">{tickerContent}</span>
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
    alignItems: 'center'
  }
}
