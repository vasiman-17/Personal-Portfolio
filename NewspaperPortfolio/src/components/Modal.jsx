export default function Modal({ isOpen, onClose }) {
  if (!isOpen) {
    return null
  }

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="modal-box"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="flowboard-modal-title"
      >
        <button
          className="modal-close"
          type="button"
          onClick={onClose}
          aria-label="Close modal"
        >
          ×
        </button>
        <h3 id="flowboard-modal-title">Coming Soon</h3>
        <p>Flowboard is currently in development. Watch the repo for updates.</p>
        <a
          className="modal-github"
          href="https://github.com/vasiman-17/Flowboard"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub →
        </a>
      </div>
    </div>
  )
}
