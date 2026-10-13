function Footer() {
  const { SparkleAccent } = StigmaDesignSystem_ef6ffb;
  return (
    <footer style={{ background: '#1E1E1E', color: '#C9C4B9', padding: '48px 32px 32px', fontFamily: 'var(--font-sans)', fontSize: 13 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24, maxWidth: 1040, margin: '0 auto' }}>
        <div>
          <img src="../../assets/logo-wordmark-horizontal.png" style={{ height: 26, marginBottom: 12 }} alt="Stigma" />
          <div>Galerías, Bogotá</div>
          <div>Mar–Sáb · 10am–7pm</div>
        </div>
        <div>
          <div style={{ letterSpacing: '.14em', textTransform: 'uppercase', fontSize: 11, color: '#F8F058', marginBottom: 10 }}>Síguenos</div>
          <div>@stigmasaloon · Instagram</div>
          <div>@stigmasaloon · TikTok</div>
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
        <SparkleAccent color="lemon" size={14} /> Redefiniendo la belleza, juntos. <SparkleAccent color="lemon" size={14} />
      </div>
    </footer>
  );
}
window.Footer = Footer;
