export default function Skills() {
  const skillSections = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 4 },
        { name: 'JavaScript ES6+', level: 4 },
        { name: 'HTML5', level: 5 },
        { name: 'CSS3', level: 5 },
        { name: 'Tailwind CSS', level: 3 },
        { name: 'Three.js', level: 3 },
        { name: 'GSAP', level: 3 }
      ],
      footer: 'Production-tested',
      delay: '0s'
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 4 },
        { name: 'Express.js', level: 4 },
        { name: 'Python', level: 4 },
        { name: 'Flask', level: 3 },
        { name: 'MongoDB', level: 4 },
        { name: 'REST APIs', level: 5 },
        { name: 'Groq API', level: 3 }
      ],
      footer: 'Deployed to production',
      delay: '0.15s'
    },
    {
      title: 'Tools & Platforms',
      skills: [
        { name: 'Git', level: 5 },
        { name: 'GitHub', level: 5 },
        { name: 'Vercel', level: 4 },
        { name: 'Render', level: 3 },
        { name: 'Postman', level: 4 },
        { name: 'VS Code', level: 5 },
        { name: 'Linux Terminal', level: 3 }
      ],
      footer: 'Used daily in production workflow',
      delay: '0.3s'
    }
  ]

  const renderDots = (level) => {
    return (
      <span style={styles.dotsContainer}>
        {[1, 2, 3, 4, 5].map(i => (
          <span
            key={i}
            style={{
              ...styles.dot,
              background: i <= level ? 'var(--ink)' : 'transparent',
              border: i <= level ? '1px solid var(--ink)' : '1px solid var(--rule)'
            }}
          />
        ))}
      </span>
    )
  }

  return (
    <>
      <style>{`
        .skills-container {
          max-width: var(--max-width);
          margin: 0 auto;
          padding: 32px;
        }

        .skills-header {
          font-family: 'Space Mono', monospace;
          font-size: 12px;
          line-height: 1.7;
          color: var(--ink);
          margin-bottom: 16px;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--col-gap);
        }

        .skills-ad {
          border: 1px solid var(--ink);
          padding: 20px;
          opacity: 1;
          transform: none;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .skills-ad:hover {
          border-color: var(--accent);
          box-shadow: 4px 4px 0px var(--accent);
        }

        .skills-ad.visible {
          opacity: 1;
          transform: none;
        }

        .skills-label {
          font-family: 'Space Mono', monospace;
          font-size: 9px;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: var(--ink-light);
          margin-bottom: 8px;
        }

        .skills-rule-1 {
          border: none;
          border-top: 1px solid var(--rule);
          margin-bottom: 12px;
        }

        .skills-title {
          font-family: 'Playfair Display', serif;
          font-size: 20px;
          font-weight: 700;
          color: var(--ink);
          margin-bottom: 12px;
        }

        .skills-rule-2 {
          border: none;
          border-top: 1px solid var(--rule);
          margin-bottom: 16px;
        }

        .skills-list {
          margin-bottom: 16px;
        }

        .skill-item {
          font-family: 'Space Mono', monospace;
          font-size: 12px;
          padding: 6px 0;
          border-bottom: 1px solid rgba(153, 153, 153, 0.3);
          color: var(--ink);
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: background 0.15s ease, padding-left 0.15s ease;
        }

        .skill-item:hover {
          background: rgba(139, 0, 0, 0.04);
          padding-left: 6px;
        }

        .skill-item:last-child {
          border-bottom: none;
        }

        .skills-footer {
          font-family: 'Space Mono', monospace;
          font-size: 9px;
          color: var(--accent);
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-top: 4px;
        }

        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <section id="skills" style={styles.skillsSection}>
        <div className="skills-container">
          <div className="skills-header">Available for immediate deployment in the following technologies.</div>
          <div className="skills-grid">
            {skillSections.map((section, index) => (
              <div key={index} className="skills-ad reveal" style={{'--delay': section.delay}}>
                <div className="skills-label">For Hire</div>
                <hr className="skills-rule-1" />
                <h3 className="skills-title">{section.title}</h3>
                <hr className="skills-rule-2" />
                <div className="skills-list">
                  {section.skills.map((skill, i) => (
                    <div key={i} className="skill-item">
                      <span>{skill.name}</span>
                      {renderDots(skill.level)}
                    </div>
                  ))}
                </div>
                <div className="skills-footer">{section.footer}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

const styles = {
  skillsSection: {
    width: '100%',
    backgroundColor: 'var(--paper)'
  },
  dotsContainer: {
    display: 'flex',
    gap: '3px',
    alignItems: 'center'
  },
  dot: {
    width: '7px',
    height: '7px',
    borderRadius: '50%',
    display: 'inline-block'
  }
}
