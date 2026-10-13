function BookingModal({ onClose }) {
  const [step, setStep] = React.useState(0);
  const { Button, Badge } = StigmaDesignSystem_ef6ffb;
  const services = ['Color fantasía', 'Corte & estilo', 'Uñas & nail art'];
  const [service, setService] = React.useState(services[0]);
  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(30,30,30,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 50 }} onClick={onClose}>
      <div style={{ background: '#FAF7F2', borderRadius: 'var(--radius-lg)', padding: 32, width: 360, fontFamily: 'var(--font-sans)' }} onClick={e => e.stopPropagation()}>
        {step === 0 && (<React.Fragment>
          <h3 style={{ fontFamily: 'var(--font-display)', margin: '0 0 16px', color: '#1E1E1E' }}>¿Qué te haces hoy?</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 20 }}>
            {services.map(s => (
              <div key={s} onClick={() => setService(s)} style={{ padding: '12px 14px', borderRadius: 'var(--radius-sm)', border: service === s ? '2px solid #1E1E1E' : '1px solid var(--border-on-light)', cursor: 'pointer', fontSize: 14 }}>{s}</div>
            ))}
          </div>
          <Button variant="primary" onClick={() => setStep(1)}>Ver horarios</Button>
        </React.Fragment>)}
        {step === 1 && (<React.Fragment>
          <h3 style={{ fontFamily: 'var(--font-display)', margin: '0 0 16px', color: '#1E1E1E' }}>Elige un horario</h3>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 20 }}>
            {['Jue 2pm', 'Vie 11am', 'Vie 4pm', 'Sáb 1pm'].map(t => <Badge key={t} tone="lemon">{t}</Badge>)}
          </div>
          <Button variant="primary" onClick={() => setStep(2)}>Confirmar cita</Button>
        </React.Fragment>)}
        {step === 2 && (<React.Fragment>
          <h3 style={{ fontFamily: 'var(--font-display)', margin: '0 0 12px', color: '#1E1E1E' }}>¡Listo! ✦</h3>
          <p style={{ fontSize: 14, color: 'var(--text-muted-on-light)', marginBottom: 20 }}>Tu cita de {service} quedó agendada. Te escribimos por WhatsApp para confirmar. ♥</p>
          <Button variant="dark" onClick={onClose}>Cerrar</Button>
        </React.Fragment>)}
      </div>
    </div>
  );
}
function WebsiteApp() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <div>
      <Header onReserve={() => setShowModal(true)} />
      <Hero onReserve={() => setShowModal(true)} />
      <ServicesSection />
      <GallerySection />
      <TestimonialsSection />
      <Footer />
      {showModal && <BookingModal onClose={() => setShowModal(false)} />}
    </div>
  );
}
if (document.getElementById('root')) ReactDOM.createRoot(document.getElementById('root')).render(<WebsiteApp />);
