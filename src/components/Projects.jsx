import { useState } from 'react'
import Modal from './Modal'

export default function Projects() {
  const [showModal, setShowModal] = useState(false)

  const projects = [
    {
      id: 1,
      articleNum: 'ARTICLE 002',
      tagText: 'AI DEVELOPER TOOL',
      tagBg: 'var(--accent)',
      headline: 'PRism: AI Reviews Your Code So Your Team Doesn\'t Have To',
      image: '/assets/prism.png',
      caption: 'PRism\'s landing page — paste any GitHub PR URL to begin analysis.',
      body: 'Full-stack AI tool using Groq Llama 3 to analyze GitHub diffs and return structured code review with risk scoring.',
      liveUrl: 'https://prism-black-five.vercel.app/',
      tags: ['React', 'Three.js', 'GSAP', 'Python', 'Flask', 'Groq API', 'GitHub API'],
      links: [
        { text: 'GitHub →', url: 'https://github.com/vasiman-17/Prism' },
        { text: 'Live Demo →', url: 'https://prism-black-five.vercel.app/' }
      ],
      delay: '0s'
    },
    {
      id: 2,
      articleNum: 'ARTICLE 003',
      tagText: 'FULL STACK PLATFORM',
      tagBg: 'var(--ink)',
      headline: 'Syncro Connects Developers With Teammates and Projects',
      image: '/assets/syncro.png',
      caption: 'Syncro dashboard showing project discovery and team matching.',
      body: 'Team collaboration platform with Google OAuth 2.0, JWT authentication, and MongoDB. Built with React and Node.js.',
      liveUrl: 'https://syncro-brown.vercel.app/auth',
      tags: ['React', 'Node.js', 'Express', 'MongoDB', 'OAuth', 'JWT'],
      links: [
        { text: 'GitHub →', url: 'https://github.com/vasiman-17/syncro' },
        { text: 'Live Demo →', url: 'https://syncro-brown.vercel.app/auth' }
      ],
      delay: '0.15s'
    },
    {
      id: 3,
      articleNum: 'ARTICLE 004',
      tagText: 'DEVELOPER TOOL',
      tagBg: 'var(--ink-light)',
      headline: 'Flowboard Lets Developers Build API Workflows on a Visual Canvas',
      image: '/assets/flowboard.png',
      caption: 'Flowboard\'s node canvas with a DAG workflow in execution.',
      body: 'Visual API orchestration tool with drag-and-drop interface and DAG-based execution engine. Backend on Node.js and MongoDB.',
      tags: ['Node.js', 'Express', 'MongoDB', 'DAG Engine', 'Canvas API'],
      links: [
        { text: 'GitHub →', url: 'https://github.com/vasiman-17/Flowboard' }
      ],
      comingSoon: true,
      delay: '0.3s'
    }
  ]

  return (
    <>
      <style>{`
        .projects-container {
          max-width: var(--max-width);
          margin: 0 auto;
          padding: 32px;
        }

        .projects-header {
          font-size: 14px;
          line-height: 1.75;
          color: var(--ink);
          margin-bottom: 24px;
          max-width: 760px;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--col-gap);
        }

        .project-card {
          opacity: 1;
          transform: none;
        }

        .project-card.visible {
          opacity: 1;
          transform: none;
        }

        .project-col-1 {
          border-right: 1px solid var(--rule);
          padding-right: var(--col-gap);
        }

        .project-col-2 {
          border-right: 1px solid var(--rule);
          padding-right: var(--col-gap);
        }

        .project-headline {
          font-family: 'Playfair Display', serif;
          font-size: clamp(20px, 2vw, 26px);
          font-weight: 700;
          line-height: 1.16;
          margin: 8px 0 12px 0;
          color: var(--ink);
        }

        .project-title-link,
        .project-title-button {
          color: inherit;
          text-decoration: none;
        }

        .project-title-link:hover,
        .project-title-button:hover {
          background: transparent;
          padding: 0;
          text-decoration: underline;
          text-underline-offset: 4px;
        }

        .project-title-button {
          appearance: none;
          border: none;
          background: transparent;
          cursor: pointer;
          display: block;
          text-align: left;
          width: 100%;
          padding: 0;
          font: inherit;
        }

        .project-image-frame {
          position: relative;
          display: block;
          border: 1px solid var(--rule-thick);
          background: var(--paper-dark);
          margin: 14px 0 10px;
          overflow: hidden;
          aspect-ratio: 16 / 10;
          width: 100%;
          padding: 0;
          cursor: pointer;
        }

        .project-image-frame:hover {
          background: var(--paper-dark);
          padding: 0;
        }

        .project-image-frame::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            linear-gradient(rgba(242, 234, 216, 0.12), rgba(13, 13, 13, 0.04)),
            repeating-linear-gradient(0deg, rgba(13, 13, 13, 0.08) 0 1px, transparent 1px 4px);
          mix-blend-mode: multiply;
          pointer-events: none;
          z-index: 1;
        }

        .project-image {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          object-position: top center;
          filter: grayscale(72%) sepia(18%) contrast(1.12) brightness(0.92);
          transition: filter 0.35s ease, transform 0.35s ease;
          cursor: pointer;
        }

        .project-image:hover {
          filter: grayscale(12%) sepia(6%) contrast(1.05) brightness(1);
          transform: scale(1.015);
        }

        .project-caption {
          font-size: 12px;
          font-style: italic;
          color: var(--ink-faint);
          margin-bottom: 12px;
          line-height: 1.5;
        }

        .project-body {
          color: var(--ink-secondary);
          margin-bottom: 12px;
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 4px;
          margin-bottom: 12px;
        }

        .project-tag {
          font-family: 'Space Mono', monospace;
          font-size: 9px;
          border: 1px solid var(--rule);
          padding: 2px 6px;
          display: inline-block;
          color: var(--ink-light);
        }

        .project-links {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .project-link {
          font-family: 'Space Mono', monospace;
          font-size: 10px;
          letter-spacing: 1px;
          border: 1px solid var(--ink);
          padding: 6px 12px;
          display: inline-block;
          text-decoration: none;
          color: var(--ink);
          background: transparent;
          cursor: pointer;
          transition: background 0.2s ease, color 0.2s ease;
        }

        .project-link:hover {
          background: var(--ink);
          color: var(--paper);
        }

        .project-coming-soon {
          font-family: 'Space Mono', monospace;
          font-size: 10px;
          letter-spacing: 1px;
          color: var(--ink-faint);
          border: 1px solid var(--rule);
          padding: 6px 12px;
          display: inline-block;
          background: transparent;
          cursor: pointer;
        }

        .project-coming-soon:hover {
          background: transparent;
          color: var(--ink-light);
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
            gap: var(--col-gap);
          }

          .project-col-1,
          .project-col-2 {
            border-right: none;
            padding-right: 0;
          }

          .project-card:not(:last-child) {
            border-bottom: 3px solid var(--ink);
            padding-bottom: 24px;
            margin-bottom: 24px;
          }
        }
      `}</style>

      <section id="work" style={styles.projectsSection}>
        <div id="projects" className="projects-container">
          {/* HEADER */}
          <div className="projects-header">
            Three products. All deployed. All built solo. All live on GitHub.
          </div>

          {/* GRID */}
          <div className="projects-grid">
            {projects.map((project, index) => {
              const isLastCol = (index + 1) % 3 === 0
              const colClass = !isLastCol 
                ? (index % 3 === 0 ? 'project-col-1' : 'project-col-2')
                : ''

              return (
                <div
                  key={project.id}
                  className={`project-card reveal ${colClass}`}
                  style={{ '--delay': project.delay }}
                >
                  <div className="article-number">{project.articleNum}</div>
                  <div
                    className="breaking-tag"
                    style={{ backgroundColor: project.tagBg, color: 'var(--paper)' }}
                  >
                    {project.tagText}
                  </div>

                  <h3 className="project-headline">
                    {project.liveUrl ? (
                      <a
                        className="project-title-link"
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {project.headline}
                      </a>
                    ) : (
                      <button
                        className="project-title-button"
                        type="button"
                        onClick={() => setShowModal(true)}
                      >
                        {project.headline}
                      </button>
                    )}
                  </h3>

                  {project.liveUrl ? (
                    <div
                      className="project-image-frame"
                      role="button"
                      tabIndex={0}
                      onClick={() => window.open(project.liveUrl, '_blank', 'noopener,noreferrer')}
                      onKeyDown={(event) => {
                        if (event.key === 'Enter' || event.key === ' ') {
                          event.preventDefault()
                          window.open(project.liveUrl, '_blank', 'noopener,noreferrer')
                        }
                      }}
                    >
                      <img
                        src={project.image}
                        alt={project.headline}
                        className="project-image"
                      />
                    </div>
                  ) : (
                    <button
                      className="project-image-frame"
                      type="button"
                      onClick={() => setShowModal(true)}
                    >
                      <img
                        src={project.image}
                        alt={project.headline}
                        className="project-image"
                      />
                    </button>
                  )}

                  <div className="project-caption">{project.caption}</div>

                  <div className="project-body">{project.body}</div>

                  <div className="project-tags">
                    {project.tags.map((tag, i) => (
                      <div key={i} className="project-tag">
                        {tag}
                      </div>
                    ))}
                  </div>

                  <div className="project-links">
                    {project.links.map((link, i) => (
                      <a
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        {link.text}
                      </a>
                    ))}
                    {project.comingSoon && (
                      <button
                        className="project-coming-soon"
                        type="button"
                        onClick={() => setShowModal(true)}
                      >
                        Live: Coming Soon
                      </button>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      {showModal && <Modal onClose={() => setShowModal(false)} />}
    </>
  )
}

const styles = {
  projectsSection: {
    width: '100%',
    backgroundColor: 'var(--paper)'
  }
}
