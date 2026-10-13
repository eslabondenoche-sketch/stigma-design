function TipSlide({ number, title, body }) {
  return (
    <div style={{ width: '100%', height: '100%', background: '#FAF7F2', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '10%', boxSizing: 'border-box', fontFamily: 'var(--font-sans)' }}>
      <div style={{ fontFamily: 'var(--font-display)', fontSize: '9vw', color: '#E868A0', lineHeight: 1, marginBottom: '4%' }}>{number}</div>
      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '4.6vw', color: '#1E1E1E', marginBottom: '5%', lineHeight: 1.15 }}>{title}</div>
      <div style={{ fontSize: '2.1vw', color: '#5B5750', lineHeight: 1.6, maxWidth: '90%' }}>{body}</div>
    </div>
  );
}
window.TipSlide = TipSlide;
