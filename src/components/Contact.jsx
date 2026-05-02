export default function Contact() {
  const contactCards = [
    {
      label: 'EMAIL',
      text: 'vaibhav.vasistha06@gmail.com',
      href: 'mailto:vaibhav.vasistha06@gmail.com'
    },
    {
      label: 'GITHUB',
      text: 'vasiman-17',
      href: 'https://github.com/vasiman-17'
    },
    {
      label: 'LINKEDIN',
      text: 'Vaibhav Vasistha',
      href: 'https://www.linkedin.com/in/vaibhav-vasistha-8a6803358/'
    },
    {
      label: 'RESUME',
      text: 'View Resume',
      href: 'https://drive.google.com/file/d/1EwsnA155rAakkzwXwiOoKx9cQUfCO9ug/view'
    }
  ]

  return (
    <>
      <style>{`
        .contact-container {
          max-width: var(--max-width);
          margin: 0 auto;
          padding: 0 32px 32px;
          text-align: center;
        }

        .contact-container.reveal {
          opacity: 1;
          transform: none;
        }

        .contact-container.reveal.visible {
          opacity: 1;
          transform: none;
        }

        .contact-label {
          font-family: 'Space Mono', monospace;
          font-size: 9px;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: var(--ink-light);
          margin-bottom: 12px;
        }

        .contact-label-rule {
          border: none;
          border-top: 1px solid var(--rule);
          max-width: 400px;
          margin: 0 auto 24px;
        }

        .contact-headline {
          font-family: 'Playfair Display', serif;
          font-size: clamp(28px, 4vw, 48px);
          font-weight: 700;
          font-style: italic;
          line-height: 1.1;
          color: var(--ink);
          margin-bottom: 12px;
        }

        .contact-subtext {
          font-family: 'Space Mono', monospace;
          font-size: 13px;
          color: var(--ink-secondary);
          max-width: 500px;
          margin: 12px auto 32px;
          line-height: 1.6;
        }

        .contact-cards {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 16px;
        }

        .contact-card {
          border: 1px solid var(--ink);
          padding: 20px 24px;
          text-align: center;
          text-decoration: none;
          color: var(--ink);
          min-width: 160px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          transition: background 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;
          cursor: pointer;
        }

        .contact-card:hover {
          background: var(--ink);
          color: var(--paper);
          box-shadow: 3px 3px 0px var(--accent);
        }

        .contact-card-label {
          font-family: 'Space Mono', monospace;
          font-size: 9px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: inherit;
        }

        .contact-card-text {
          font-family: 'Space Mono', monospace;
          font-size: 11px;
          color: inherit;
        }
      `}</style>

      <section id="contact" style={styles.contactSection}>
        <div className="contact-container reveal">
          <div className="contact-label">Correspondence Welcome</div>
          <hr className="contact-label-rule" />
          <h2 className="contact-headline">Let's Build Something</h2>
          <div className="contact-subtext">Open to full-time roles, freelance projects, and meaningful collaborations. Email is the fastest way to reach me.</div>
          <div className="contact-cards">
            {contactCards.map((card, index) => (
              <a key={index} href={card.href} target={card.href.startsWith('http') ? '_blank' : '_self'} rel={card.href.startsWith('http') ? 'noopener noreferrer' : ''} className="contact-card">
                <div className="contact-card-label">{card.label}</div>
                <div className="contact-card-text">{card.text}</div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

const styles = {
  contactSection: {
    width: '100%',
    backgroundColor: 'var(--paper)',
    paddingTop: '48px'
  }
}
