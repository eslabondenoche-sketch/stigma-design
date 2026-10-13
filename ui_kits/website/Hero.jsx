function Hero({ onReserve }) {
  const { SparkleAccent, Button } = StigmaDesignSystem_ef6ffb;
  return (
    <section style={{ background: '#1E1E1E', color: '#FAF7F2', padding: '96px 32px 80px', textAlign: 'center', fontFamily: 'var(--font-sans)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 40, left: '8%' }}><SparkleAccent color="lilac" size={20} /></div>
      <div style={{ position: 'absolute', bottom: 60, right: '10%' }}><SparkleAccent color="magenta" size={26} /></div>
      <div style={{ fontSize: 12, letterSpacing: '.18em', textTransform: 'uppercase', color: '#F8F058', marginBottom: 18 }}>Saloon &amp; Nails Spa · Bogotá</div>
      <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(2.4rem,5vw,4rem)', margin: '0 auto 20px', maxWidth: 760, lineHeight: 1.08 }}>Redefiniendo la belleza, juntos.</h1>
      <p style={{ maxWidth: 480, margin: '0 auto 34px', color: '#C9C4B9', fontSize: 16, lineHeight: 1.6 }}>El salón donde transformarte no implica encajar. Color y estilo de alto nivel, con asesoría honesta, en un espacio sin juicios.</p>
      <Button variant="primary" size="lg" onClick={onReserve}>Reserva tu cita ✦</Button>
    </section>
  );
}
window.Hero = Hero;
