import { useEffect } from 'react'

export default function Modal({ onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  return (
    <>
      <div
        onClick={onClose}
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0,0,0,0.6)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          style={{
            background: '#f2ead8',
            border: '2px solid #0d0d0d',
            padding: '48px 40px',
            maxWidth: '420px',
            width: '90%',
            textAlign: 'center',
            position: 'relative'
          }}
        >
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '16px',
              right: '20px',
              background: 'none',
              border: 'none',
              fontSize: '22px',
              cursor: 'pointer',
              fontFamily: 'Space Mono',
              color: '#0d0d0d'
            }}
          >
            ×
          </button>

          <div
            style={{
              fontFamily: 'Space Mono',
              fontSize: '9px',
              letterSpacing: '4px',
              color: '#888',
              textTransform: 'uppercase',
              marginBottom: '16px'
            }}
          >
            ARTICLE 004
          </div>

          <h3
            style={{
              fontFamily: 'Playfair Display',
              fontSize: '32px',
              fontWeight: '700',
              marginBottom: '16px',
              color: '#0d0d0d'
            }}
          >
            Coming Soon
          </h3>

          <div
            style={{
              width: '40px',
              height: '2px',
              background: '#8b0000',
              margin: '0 auto 20px'
            }}
          />

          <p
            style={{
              fontFamily: 'Space Mono',
              fontSize: '12px',
              color: '#555',
              lineHeight: '1.8',
              marginBottom: '28px'
            }}
          >
            Flowboard is currently in active development. A visual API workflow builder with DAG execution engine. Watch the repository for updates.
          </p>

          <a
            href="https://github.com/vasiman-17/Flowboard"
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'inline-block',
              fontFamily: 'Space Mono',
              fontSize: '11px',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              border: '1px solid #0d0d0d',
              padding: '10px 24px',
              color: '#0d0d0d',
              textDecoration: 'none',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#0d0d0d'
              e.target.style.color = '#f2ead8'
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'transparent'
              e.target.style.color = '#0d0d0d'
            }}
          >
            Watch on GitHub →
          </a>
        </div>
      </div>
    </>
  )
}
