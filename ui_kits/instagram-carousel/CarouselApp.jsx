function CarouselApp() {
  const tips = [
    { number: '01', title: 'El tono depende de tu piel, no solo de la tendencia', body: 'Un mismo rubio puede verse distinto según tu subtono. Por eso la asesoría va antes que el catálogo de Pinterest.' },
    { number: '02', title: 'Cuidar el color empieza en la ducha', body: 'Agua tibia (no caliente) y shampoo sin sulfatos duplican la duración del tono.' },
    { number: '03', title: 'Decir "no se puede en una sesión" es honestidad, no excusa', body: 'Preferimos dos citas bien hechas que una que arriesgue tu cabello.' },
  ];
  const slides = [
    <HookSlide key="hook" />,
    ...tips.map((t, i) => <TipSlide key={i} {...t} />),
    <BeforeAfterSlide key="ba" />,
    <CtaSlide key="cta" />,
  ];
  const [i, setI] = React.useState(0);
  const size = 460;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, fontFamily: 'var(--font-sans)', padding: '24px 0' }}>
      <div style={{ width: size, height: size, borderRadius: 8, overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.35)', position: 'relative' }}>
        {slides[i]}
        {i > 0 && <button onClick={() => setI(i - 1)} style={{ position: 'absolute', left: 8, top: '50%', transform: 'translateY(-50%)', border: 'none', background: 'rgba(255,255,255,0.85)', width: 32, height: 32, borderRadius: '50%', cursor: 'pointer' }}>‹</button>}
        {i < slides.length - 1 && <button onClick={() => setI(i + 1)} style={{ position: 'absolute', right: 8, top: '50%', transform: 'translateY(-50%)', border: 'none', background: 'rgba(255,255,255,0.85)', width: 32, height: 32, borderRadius: '50%', cursor: 'pointer' }}>›</button>}
      </div>
      <div style={{ display: 'flex', gap: 6 }}>
        {slides.map((_, idx) => <div key={idx} onClick={() => setI(idx)} style={{ width: 7, height: 7, borderRadius: '50%', background: idx === i ? '#1E1E1E' : '#bbb', cursor: 'pointer' }} />)}
      </div>
      <div style={{ fontSize: 12, color: '#5B5750' }}>Slide {i + 1} / {slides.length}</div>
    </div>
  );
}
if (document.getElementById('root')) ReactDOM.createRoot(document.getElementById('root')).render(<CarouselApp />);
