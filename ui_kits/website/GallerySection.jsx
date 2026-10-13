function Ph({ label }) {
  return <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#8a857c', fontSize: 11, fontFamily: 'var(--font-sans)', background: '#3A3A3A' }}>{label || 'foto'}</div>;
}
function GallerySection() {
  const { TransformationCard } = StigmaDesignSystem_ef6ffb;
  const items = [
    { caption: 'No le cambiamos el pelo. Le devolvimos las ganas de mirarse al espejo. ♥✦', stylist: 'Valentina' },
    { caption: 'De "no sé si me atrevo" a "¿por qué no lo hice antes?" en 3 horas.', stylist: 'Andrés' },
    { caption: 'Color vibrante, técnica real, resultado que dura.', stylist: 'Manuela' },
  ];
  return (
    <section id="transformaciones" style={{ background: '#1E1E1E', padding: '72px 32px', fontFamily: 'var(--font-sans)' }}>
      <div style={{ fontSize: 12, letterSpacing: '.18em', textTransform: 'uppercase', color: '#C9C4B9', textAlign: 'center', marginBottom: 10 }}>La prueba está en la silla</div>
      <h2 style={{ fontFamily: 'var(--font-display)', textAlign: 'center', fontSize: 32, color: '#FAF7F2', margin: '0 0 40px' }}>Transformaciones</h2>
      <div style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap', maxWidth: 1040, margin: '0 auto' }}>
        {items.map((it, i) => <TransformationCard key={i} beforeSlot={<Ph/>} afterSlot={<Ph label="después"/>} caption={it.caption} stylist={it.stylist} />)}
      </div>
    </section>
  );
}
window.GallerySection = GallerySection;
