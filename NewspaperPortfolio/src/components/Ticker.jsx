export default function Ticker() {
  const tickerContent = "DEVELOPER AVAILABLE FOR SUMMER 2025 INTERNSHIP · PRISM AI TOOL NOW LIVE · SYNCRO PLATFORM DEPLOYED · FLOWBOARD IN DEVELOPMENT · CGPA: 8.67 · SRM KTR · FULL STACK · REACT · NODE.JS · PYTHON · GROQ LLAMA 3 · "

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
          animation: ticker 30s linear infinite;
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
    padding: '6px 0',
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    alignItems: 'center'
  },
  breakingLabel: {
    fontFamily: "'Space Mono', monospace",
    fontSize: '9px',
    fontWeight: '700',
    backgroundColor: 'var(--ink)',
    color: 'var(--paper)',
    padding: '6px 12px',
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
