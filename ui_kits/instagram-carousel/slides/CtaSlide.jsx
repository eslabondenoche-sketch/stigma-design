function CtaSlide() {
  const { Button, SparkleAccent } = StigmaDesignSystem_ef6ffb;
  return (
    <div style={{ width: '100%', height: '100%', background: '#F8F058', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '10%', boxSizing: 'border-box', fontFamily: 'var(--font-sans)' }}>
      <SparkleAccent color="magenta" size={40} />
      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '5.2vw', color: '#1E1E1E', margin: '6% 0 5%', lineHeight: 1.1 }}>¿Lista/o para<br/>tu cambio?</div>
      <div style={{ fontSize: '2vw', color: '#1E1E1E', marginBottom: '7%', maxWidth: '80%' }}>Reserva tu cita y ven a redefinir la belleza, junt@s.</div>
      <div style={{ transform: 'scale(1.4)' }}><Button variant="dark" size="md">Reserva ↓</Button></div>
      <div style={{ marginTop: '8%', fontSize: '1.5vw', letterSpacing: '.14em', textTransform: 'uppercase', color: '#1E1E1E' }}>@stigmasaloon</div>
    </div>
  );
}
window.CtaSlide = CtaSlide;
