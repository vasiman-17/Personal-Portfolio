import { useState, useEffect, useRef } from 'react'

const TERMINAL_LINES = [
  { text: '$ prism analyze', color: '#888', delay: 500 },
  { text: '→ Fetching PR #28000...', color: '#00ff41', delay: 1200 },
  { text: '→ Files changed: 47', color: '#00ff41', delay: 2000 },
  { text: '→ Running risk analysis...', color: '#00ff41', delay: 2700 },
  { text: '⚠ Risk Score: 67 / 100', color: '#ffaa00', delay: 3500 },
  { text: '✗ 3 risks identified', color: '#ff6b6b', delay: 4200 },
  { text: '✓ 2 suggestions generated', color: '#00ff41', delay: 4900 },
  { text: '→ Review ready in 4.2s', color: '#888', delay: 5600 },
  { text: '$ _', color: '#00ff41', delay: 6300, bold: true, cursor: true }
]

export default function Terminal() {
  const [lines, setLines] = useState([])
  const [currentText, setCurrentText] = useState('')
  const [currentLineColor, setCurrentLineColor] = useState('#00ff41')
  const [currentLineBold, setCurrentLineBold] = useState(false)
  const bodyRef = useRef(null)

  useEffect(() => {
    let isMounted = true
    const sleep = (ms) => new Promise(r => setTimeout(r, ms))

    const runTerminal = async () => {
      while (isMounted) {
        setLines([])
        setCurrentText('')
        
        for (let i = 0; i < TERMINAL_LINES.length; i++) {
          if (!isMounted) break

          const line = TERMINAL_LINES[i]
          const delayBefore = i === 0 ? line.delay : line.delay - TERMINAL_LINES[i-1].delay
          
          await sleep(delayBefore)
          if (!isMounted) break

          setCurrentLineColor(line.color || '#00ff41')
          setCurrentLineBold(line.bold || false)

          const textToType = line.cursor ? '$ ' : line.text
          
          for (let j = 1; j <= textToType.length; j++) {
            if (!isMounted) break
            setCurrentText(textToType.substring(0, j))
            await sleep(35)
          }
          
          if (!isMounted) break
          setLines(prev => [...prev, { text: textToType, color: line.color, bold: line.bold, cursor: line.cursor }])
          setCurrentText('')
        }
        
        await sleep(4000)
      }
    }

    runTerminal()

    return () => {
      isMounted = false
    }
  }, [])

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight
    }
  }, [lines, currentText])

  return (
    <>
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .terminal-cursor {
          display: inline-block;
          width: 8px;
          height: 14px;
          background: #00ff41;
          margin-left: 2px;
          vertical-align: middle;
          animation: blink 1s step-end infinite;
        }
      `}</style>
      <div style={styles.terminal}>
        <div style={styles.header}>
          <span style={{ ...styles.dot, background: '#ff5f57' }} />
          <span style={{ ...styles.dot, background: '#febc2e' }} />
          <span style={{ ...styles.dot, background: '#28c840' }} />
          <span style={styles.headerTitle}>prism — analyzing PR #28000</span>
        </div>
        <div style={styles.body} ref={bodyRef}>
          {lines.map((line, i) => (
            <div key={i} style={{
              color: line.color,
              fontWeight: line.bold ? '700' : '400',
              marginBottom: '4px',
              lineHeight: '1.6'
            }}>
              {line.text}
              {line.cursor && <span className="terminal-cursor" />}
            </div>
          ))}
          {currentText && (
            <div style={{
              color: currentLineColor,
              fontWeight: currentLineBold ? '700' : '400',
              marginBottom: '4px',
              lineHeight: '1.6'
            }}>
              {currentText}
              <span className="terminal-cursor" />
            </div>
          )}
        </div>
      </div>
    </>
  )
}

const styles = {
  terminal: {
    width: '100%',
    marginTop: '16px',
    border: '1px solid #333',
    background: '#0d0d0d',
    fontFamily: "'Courier New', monospace",
    fontSize: '12px',
    overflow: 'hidden'
  },
  header: {
    background: '#1a1a1a',
    padding: '8px 12px',
    display: 'flex',
    alignItems: 'center',
    gap: '6px'
  },
  dot: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    display: 'inline-block'
  },
  headerTitle: {
    fontFamily: "'Space Mono', monospace",
    fontSize: '10px',
    color: '#666',
    marginLeft: '8px'
  },
  body: {
    padding: '16px',
    minHeight: '200px',
    maxHeight: '280px',
    overflow: 'hidden'
  }
}
