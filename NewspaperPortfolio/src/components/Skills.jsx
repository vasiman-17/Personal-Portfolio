export default function Skills() {
  const skillSections = [
    {
      title: 'Frontend',
      skills: ['React', 'JavaScript ES6+', 'HTML5', 'CSS3', 'Tailwind CSS', 'Three.js', 'GSAP'],
      footer: '3 years experience · Available now',
      delay: '0s'
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'Python', 'Flask', 'MongoDB', 'REST APIs', 'Groq API'],
      footer: 'Deployed to production · Available now',
      delay: '0.15s'
    },
    {
      title: 'Tools & Platforms',
      skills: ['Git', 'GitHub', 'Vercel', 'Render', 'Postman', 'VS Code', 'Linux Terminal'],
      footer: 'Used daily · Available now',
      delay: '0.3s'
    }
  ]

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
          margin-bottom: 24px;
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
          padding: 4px 0;
          border-bottom: 1px solid rgba(153, 153, 153, 0.3);
          color: var(--ink);
        }

        .skill-item:last-child {
          border-bottom: none;
        }

        .skills-footer {
          font-family: 'Space Mono', monospace;
          font-size: 9px;
          color: var(--ink-faint);
          font-style: italic;
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
                    <div key={i} className="skill-item">{skill}</div>
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
  }
}
