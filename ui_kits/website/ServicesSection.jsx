function ServicesSection() {
  const { ServiceCard } = StigmaDesignSystem_ef6ffb;
  const services = [
    { title: 'Color fantasía', description: 'Técnicas de alto nivel con asesoría honesta sobre lo que de verdad te favorece.', tone: 'lilac' },
    { title: 'Cortes & estilo', description: 'Cortes a la medida de tu identidad, no de una tendencia impuesta.', tone: 'lemon' },
    { title: 'Uñas & nail art', description: 'Diseños expresivos, de cuidado real, sin prisa.', tone: 'magenta' },
    { title: 'Spa & bienestar', description: 'Cuidado personal como experiencia, no como trámite.', tone: 'lime' },
  ];
  return (
    <section id="servicios" style={{ background: 'var(--surface-page)', padding: '72px 32px', fontFamily: 'var(--font-sans)' }}>
      <div style={{ fontSize: 12, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--text-muted-on-light)', textAlign: 'center', marginBottom: 10 }}>Lo que hacemos</div>
      <h2 style={{ fontFamily: 'var(--font-display)', textAlign: 'center', fontSize: 32, color: 'var(--charcoal)', margin: '0 0 40px' }}>Servicios</h2>
      <div style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap', maxWidth: 1040, margin: '0 auto' }}>
        {services.map((s, i) => <ServiceCard key={i} tone={s.tone} title={s.title} description={s.description} icon={<span style={{fontFamily:'var(--font-sans)',fontSize:18}}>✦</span>} />)}
      </div>
    </section>
  );
}
window.ServicesSection = ServicesSection;
