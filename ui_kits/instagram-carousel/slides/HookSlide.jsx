function HookSlide() {
  const { SparkleAccent } = StigmaDesignSystem_ef6ffb;
  return (
    <div style={{ width: '100%', height: '100%', background: '#1E1E1E', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '10%', boxSizing: 'border-box', fontFamily: 'var(--font-sans)', position: 'relative' }}>
      <div style={{ position: 'absolute', top: '8%', left: '10%' }}><SparkleAccent color="lemon" size={28} /></div>
      <div style={{ position: 'absolute', bottom: '10%', right: '12%' }}><SparkleAccent color="lilac" size={22} /></div>
      <div style={{ fontSize: '3.4vw', letterSpacing: '.18em', textTransform: 'uppercase', color: '#F8F058', marginBottom: '5%' }}>Mitos del color</div>
      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: '#FAF7F2', fontSize: '6.2vw', lineHeight: 1.1 }}>3 cosas que tu<br/>estilista no te dice</div>
      <div style={{ marginTop: '7%', fontSize: '1.6vw', color: '#C9C4B9' }}>Desliza → ✦</div>
    </div>
  );
}
window.HookSlide = HookSlide;
