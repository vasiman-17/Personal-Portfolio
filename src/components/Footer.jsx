export default function Footer() {
  return (
    <>
      <style>{`
        .footer {
          width: 100%;
          background: var(--ink);
          color: var(--paper);
          padding: 28px 32px;
          text-align: center;
        }

        .footer-name {
          font-family: 'Abril Fatface', serif;
          font-size: 28px;
          color: var(--paper);
          line-height: 1;
          margin-bottom: 12px;
        }

        .footer-edition,
        .footer-copyright {
          font-family: 'Space Mono', monospace;
          color: var(--paper);
          letter-spacing: 1px;
        }

        .footer-edition {
          font-size: 10px;
          letter-spacing: 2px;
          color: rgba(255,255,255,0.5);
          margin-bottom: 8px;
        }

        .footer-copyright {
          font-size: 9px;
          color: rgba(255,255,255,0.3);
        }
      `}</style>

      <footer className="footer">
        <div className="footer-name">Vasistha Times</div>
        <div className="footer-edition">Chennai Edition · Full-Stack Developer · 2025</div>
        <div className="footer-copyright">© Vaibhav Vasistha 2025</div>
      </footer>
    </>
  )
}
