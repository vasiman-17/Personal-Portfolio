export default function Footer() {
  return (
    <>
      <style>{`
        .footer {
          width: 100%;
          background: var(--ink);
          color: var(--paper);
          padding: 28px 32px;
        }

        .footer-divider {
          border: none;
          border-top: 1px solid rgba(242, 234, 216, 0.3);
          margin-bottom: 24px;
        }

        .footer-mark {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 12px;
          margin-bottom: 18px;
        }

        .footer-monogram {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          background: var(--highlight);
          color: var(--ink);
          border: 2px solid var(--paper);
          font-family: 'Playfair Display', serif;
          font-size: 17px;
          font-weight: 900;
          line-height: 1;
        }

        .footer-masthead {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(24px, 4vw, 40px);
          font-weight: 900;
          color: var(--paper);
          text-align: center;
          letter-spacing: 1px;
          text-transform: uppercase;
          line-height: 0.95;
        }

        .footer-edition {
          font-family: 'Space Mono', monospace;
          font-size: 12px;
          letter-spacing: 1px;
          text-align: center;
          margin-bottom: 14px;
          color: var(--paper);
        }

        .footer-links {
          display: flex;
          justify-content: center;
          gap: 18px;
          flex-wrap: wrap;
          margin-bottom: 24px;
          font-family: 'Space Mono', monospace;
          font-size: 10px;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .footer-link {
          color: var(--paper);
          text-decoration: none;
          border-bottom: 1px solid rgba(242, 234, 216, 0.5);
        }

        .footer-link:hover {
          color: var(--highlight);
          background: transparent;
          padding: 0;
          border-bottom-color: var(--highlight);
        }

        .footer-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-family: 'Space Mono', monospace;
          font-size: 9px;
          color: rgba(255, 255, 255, 0.5);
          gap: 16px;
          flex-wrap: wrap;
        }

        .footer-info-left,
        .footer-info-center,
        .footer-info-right {
          flex: 1;
        }

        .footer-info-left {
          text-align: left;
        }

        .footer-info-center {
          text-align: center;
        }

        .footer-info-right {
          text-align: right;
        }

        @media (max-width: 768px) {
          .footer-mark,
          .footer-info {
            flex-direction: column;
            text-align: center;
            gap: 8px;
          }

          .footer-info-left,
          .footer-info-center,
          .footer-info-right {
            text-align: center;
          }
        }
      `}</style>

      <footer className="footer">
        <hr className="footer-divider" />
        <div className="footer-mark">
          <div className="footer-monogram" aria-hidden="true">VV</div>
          <div className="footer-masthead">Vaibhav Vasistha</div>
        </div>
        <div className="footer-edition">CHENNAI EDITION / FULL-STACK DEVELOPER / 2025</div>
        <div className="footer-links">
          <a
            className="footer-link"
            href="https://docs.google.com/document/d/1N7St-SdyTNbibrxAuNgJfGgUPmDyGxcT/edit?usp=sharing&ouid=112235181738279072731&rtpof=true&sd=true"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
          <a
            className="footer-link"
            href="https://drive.google.com/file/d/1vINYJwqn4YSqRTgnXoWJwP483cZnH6ug/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Udemy Certificate
          </a>
          <a
            className="footer-link"
            href="https://drive.google.com/file/d/1JTKuE3YNMN_KThkwl6r8BL9-u-ljoFNH/view"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hackathon Certificate
          </a>
        </div>
        <div className="footer-info">
          <div className="footer-info-left">AI tools, team platforms, and workflow products.</div>
          <div className="footer-info-center">SRM KTR / B.Tech AI / Est. 2024</div>
          <div className="footer-info-right">Copyright Vaibhav Vasistha 2025</div>
        </div>
      </footer>
    </>
  )
}
