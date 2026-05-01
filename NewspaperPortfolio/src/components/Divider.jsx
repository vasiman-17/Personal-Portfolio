export default function Divider({ label }) {
  return (
    <div className="divider" style={styles.divider}>
      <div style={styles.container}>
        {/* THICK RULE */}
        <hr className="rule-thick" style={styles.ruleThick} />

        {/* LABEL WITH SIDE RULES */}
        <div style={styles.labelRow}>
          <hr className="rule" style={styles.ruleSide} />
          <div style={styles.label}>{label}</div>
          <hr className="rule" style={styles.ruleSide} />
        </div>

        {/* THIN RULE */}
        <hr className="rule" style={styles.ruleThin} />
      </div>
    </div>
  )
}

const styles = {
  divider: {
    width: '100%',
    backgroundColor: 'var(--paper)',
    paddingLeft: '32px',
    paddingRight: '32px',
    paddingTop: '32px'
  },
  container: {
    maxWidth: 'var(--max-width)',
    margin: '0 auto'
  },
  ruleThick: {
    marginTop: '0',
    marginBottom: '0'
  },
  labelRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    padding: '10px 0'
  },
  ruleSide: {
    flex: '1',
    border: 'none',
    borderTop: '1px solid var(--rule)',
    margin: '0'
  },
  label: {
    fontFamily: "'Space Mono', monospace",
    fontSize: '11px',
    letterSpacing: '5px',
    textTransform: 'uppercase',
    color: 'var(--ink)',
    whiteSpace: 'nowrap',
    flex: '0 0 auto'
  },
  ruleThin: {
    marginTop: '0',
    marginBottom: '0'
  }
}
