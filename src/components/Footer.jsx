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

        .footer-divider {
          border: none;
          border-top: 1px solid rgba(242, 234, 216, 0.3);
          margin-bottom: 24px;
        }

        .footer-name {
          font-family: 'UnifrakturMaguntia', serif;
          font-size: clamp(30px, 5vw, 48px);
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
          font-size: 12px;
          margin-bottom: 8px;
        }

        .footer-copyright {
          font-size: 10px;
          color: rgba(242, 234, 216, 0.72);
        }
      `}</style>

      <footer className="footer">
        <hr className="footer-divider" />
        <div className="footer-name">Vasistha Times</div>
        <div className="footer-edition">Chennai Edition · Full-Stack Developer · 2025</div>
        <div className="footer-copyright">© Vaibhav Vasistha 2025</div>
      </footer>
    </>
  )
}
