function BeforeAfterSlide() {
  const { TransformationCard } = StigmaDesignSystem_ef6ffb;
  function Ph({ label }) { return <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#8a857c', fontSize: '2vw', fontFamily: 'var(--font-sans)', background: '#3A3A3A' }}>{label}</div>; }
  return (
    <div style={{ width: '100%', height: '100%', background: '#1E1E1E', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '8%', boxSizing: 'border-box', fontFamily: 'var(--font-sans)', gap: '6%' }}>
      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '4vw', color: '#FAF7F2', textAlign: 'center' }}>El antes que nadie ve</div>
      <div style={{ width: '84%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3%' }}>
        <div style={{ position: 'relative', aspectRatio: '1' }}><Ph label="antes"/><span style={{ position: 'absolute', top: 10, left: 10, fontSize: '1.6vw', color: '#FAF7F2', background: 'rgba(30,30,30,0.6)', padding: '4px 12px', borderRadius: 999 }}>Antes</span></div>
        <div style={{ position: 'relative', aspectRatio: '1' }}><Ph label="después"/><span style={{ position: 'absolute', top: 10, right: 10, fontSize: '1.6vw', color: '#1E1E1E', background: '#F8F058', padding: '4px 12px', borderRadius: 999 }}>Después</span></div>
      </div>
      <div style={{ color: '#C9C4B9', fontSize: '1.8vw', textAlign: 'center' }}>Color por Valentina ✦</div>
    </div>
  );
}
window.BeforeAfterSlide = BeforeAfterSlide;
