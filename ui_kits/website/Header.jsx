function Header({ onReserve }) {
  const [open, setOpen] = React.useState(false);
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 10, background: '#1E1E1E', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 32px', fontFamily: 'var(--font-sans)' }}>
      <img src="../../assets/logo-wordmark-horizontal.png" style={{ height: 34 }} alt="Stigma" />
      <nav style={{ display: 'flex', alignItems: 'center', gap: 28 }} className="stigma-nav">
        <a href="#servicios" style={{ color: '#FAF7F2', fontSize: 13, letterSpacing: '.04em' }}>Servicios</a>
        <a href="#transformaciones" style={{ color: '#FAF7F2', fontSize: 13, letterSpacing: '.04em' }}>Transformaciones</a>
        <a href="#nosotros" style={{ color: '#FAF7F2', fontSize: 13, letterSpacing: '.04em' }}>Nosotros</a>
        <StigmaDesignSystem_ef6ffb.Button variant="primary" size="sm" onClick={onReserve}>Reserva tu cita</StigmaDesignSystem_ef6ffb.Button>
      </nav>
    </header>
  );
}
window.Header = Header;
