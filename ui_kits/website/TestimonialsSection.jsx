function TestimonialsSection() {
  const { TestimonialCard } = StigmaDesignSystem_ef6ffb;
  function Ph() { return <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#8a857c', fontSize: 10, fontFamily: 'var(--font-sans)' }}>foto</div>; }
  return (
    <section id="nosotros" style={{ background: 'var(--surface-page)', padding: '72px 32px', fontFamily: 'var(--font-sans)' }}>
      <h2 style={{ fontFamily: 'var(--font-display)', textAlign: 'center', fontSize: 32, color: 'var(--charcoal)', margin: '0 0 40px' }}>Nuestra familia</h2>
      <div style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap', maxWidth: 1040, margin: '0 auto' }}>
        <TestimonialCard quote="Aquí nadie tiene que explicarse. Llegas como eres y te vas siendo más tú." name="Camila R." photoSlot={<Ph/>} />
        <TestimonialCard quote="Por fin un salón que me escucha antes de tomar las tijeras." name="Julián T." photoSlot={<Ph/>} />
      </div>
    </section>
  );
}
window.TestimonialsSection = TestimonialsSection;
