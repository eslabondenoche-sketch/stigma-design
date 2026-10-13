/* @ds-bundle: {"format":4,"namespace":"StigmaDesignSystem_ef6ffb","components":[{"name":"BurstShape","sourcePath":"components/brand/BurstShape.jsx"},{"name":"ScallopedFrame","sourcePath":"components/brand/ScallopedFrame.jsx"},{"name":"SparkleAccent","sourcePath":"components/brand/SparkleAccent.jsx"},{"name":"ServiceCard","sourcePath":"components/cards/ServiceCard.jsx"},{"name":"TestimonialCard","sourcePath":"components/cards/TestimonialCard.jsx"},{"name":"TransformationCard","sourcePath":"components/cards/TransformationCard.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"}],"sourceHashes":{"components/brand/BurstShape.jsx":"66705f579f13","components/brand/ScallopedFrame.jsx":"6d4e78152b28","components/brand/SparkleAccent.jsx":"ade7a3d845b4","components/cards/ServiceCard.jsx":"94175d4554e0","components/cards/TestimonialCard.jsx":"98f7a5e9ac12","components/cards/TransformationCard.jsx":"18386950b70b","components/core/Badge.jsx":"16ac008b3924","components/core/Button.jsx":"491f0862f11a","ui_kits/instagram-carousel/CarouselApp.jsx":"21dcd9dae770","ui_kits/instagram-carousel/slides/BeforeAfterSlide.jsx":"5a71df140c27","ui_kits/instagram-carousel/slides/CtaSlide.jsx":"c5821691531c","ui_kits/instagram-carousel/slides/HookSlide.jsx":"09d6fd0dd541","ui_kits/instagram-carousel/slides/TipSlide.jsx":"e7694984c3fe","ui_kits/website/Footer.jsx":"4fb85da5e664","ui_kits/website/GallerySection.jsx":"dcca95d7a7bc","ui_kits/website/Header.jsx":"f08b65fcfa41","ui_kits/website/Hero.jsx":"5fa6dbe0725a","ui_kits/website/ServicesSection.jsx":"50e2dff5f73d","ui_kits/website/TestimonialsSection.jsx":"38df876030ca","ui_kits/website/WebsiteApp.jsx":"00f206cb3234"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.StigmaDesignSystem_ef6ffb = window.StigmaDesignSystem_ef6ffb || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/BurstShape.jsx
try { (() => {
function BurstShape({
  tone = 'lime',
  size = 320,
  points = 12,
  rotation = 0
}) {
  const tones = {
    lemon: '#F8F058',
    lilac: '#E098D8',
    magenta: '#E868A0',
    lime: '#E0F068',
    charcoal: '#1E1E1E'
  };
  const c = tones[tone] || tones.lime;
  const outerR = 50,
    innerR = 38;
  let d = '';
  for (let i = 0; i < points * 2; i++) {
    const r = i % 2 === 0 ? outerR : innerR;
    const a = Math.PI / points * i - Math.PI / 2;
    const x = 50 + r * Math.cos(a);
    const y = 50 + r * Math.sin(a);
    d += (i === 0 ? 'M' : 'L') + x.toFixed(2) + ',' + y.toFixed(2) + ' ';
  }
  d += 'Z';
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 100 100",
    style: {
      display: 'block',
      transform: `rotate(${rotation}deg)`
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: d,
    fill: c
  }));
}
Object.assign(__ds_scope, { BurstShape });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/BurstShape.jsx", error: String((e && e.message) || e) }); }

// components/brand/ScallopedFrame.jsx
try { (() => {
function ScallopedFrame({
  children,
  tone = 'lilac',
  size = 220
}) {
  const tones = {
    lilac: '#E098D8',
    magenta: '#E868A0',
    lemon: '#F8F058',
    lime: '#E0F068',
    charcoal: '#1E1E1E'
  };
  const clip = 'polygon(50% 0%,58% 4%,66% 0%,72% 6%,80% 4%,84% 12%,92% 12%,92% 20%,100% 24%,96% 32%,100% 40%,94% 46%,96% 54%,88% 58%,90% 66%,82% 68%,80% 76%,72% 74%,66% 80%,58% 76%,50% 82%,42% 76%,34% 80%,28% 74%,20% 76%,18% 68%,10% 66%,12% 58%,4% 54%,8% 46%,0% 40%,6% 32%,2% 24%,10% 20%,10% 12%,18% 12%,22% 4%,30% 6%,36% 0%,42% 4%)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      background: tones[tone] || tones.lilac,
      clipPath: clip,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    }
  }, children);
}
Object.assign(__ds_scope, { ScallopedFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/ScallopedFrame.jsx", error: String((e && e.message) || e) }); }

// components/brand/SparkleAccent.jsx
try { (() => {
function SparkleAccent({
  color = 'lemon',
  size = 24
}) {
  const colors = {
    lemon: '#F8F058',
    lilac: '#E098D8',
    magenta: '#E868A0',
    lime: '#E0F068'
  };
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    style: {
      display: 'inline-block',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 0 L14.2 9.8 L24 12 L14.2 14.2 L12 24 L9.8 14.2 L0 12 L9.8 9.8 Z",
    fill: colors[color] || colors.lemon
  }));
}
Object.assign(__ds_scope, { SparkleAccent });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/SparkleAccent.jsx", error: String((e && e.message) || e) }); }

// components/cards/ServiceCard.jsx
try { (() => {
function ServiceCard({
  title,
  description,
  icon,
  tone = 'lemon'
}) {
  const tones = {
    lemon: '#F8F058',
    lilac: '#E098D8',
    magenta: '#E868A0',
    lime: '#E0F068'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-card)',
      padding: 'var(--space-5)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      fontFamily: 'var(--font-sans)',
      width: 220
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 'var(--radius-sm)',
      background: tones[tone] || tones.lemon,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#1E1E1E'
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 18,
      color: 'var(--charcoal)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted-on-light)',
      lineHeight: 'var(--lh-body)'
    }
  }, description));
}
Object.assign(__ds_scope, { ServiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ServiceCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/TestimonialCard.jsx
try { (() => {
function TestimonialCard({
  quote,
  name,
  photoSlot
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bone)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-card)',
      padding: 'var(--space-5)',
      display: 'flex',
      gap: 'var(--space-4)',
      alignItems: 'center',
      fontFamily: 'var(--font-sans)',
      width: 340
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 64,
      borderRadius: '50%',
      overflow: 'hidden',
      flexShrink: 0,
      background: '#E4DFD5'
    }
  }, photoSlot), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontSize: 15,
      color: 'var(--charcoal)',
      lineHeight: 'var(--lh-body)'
    }
  }, "\u201C", quote, "\u201D"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--text-muted-on-light)'
    }
  }, "\u2014 ", name)));
}
Object.assign(__ds_scope, { TestimonialCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/TestimonialCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/TransformationCard.jsx
try { (() => {
function TransformationCard({
  beforeSlot,
  afterSlot,
  caption,
  stylist
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--charcoal)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      fontFamily: 'var(--font-sans)',
      width: 280,
      boxShadow: 'var(--shadow-card-lg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '1',
      background: '#3A3A3A'
    }
  }, beforeSlot, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 8,
      left: 8,
      fontSize: 10,
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: '#FAF7F2',
      background: 'rgba(30,30,30,0.55)',
      padding: '3px 8px',
      borderRadius: 'var(--radius-pill)'
    }
  }, "Antes")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '1',
      background: '#3A3A3A'
    }
  }, afterSlot, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 8,
      right: 8,
      fontSize: 10,
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: '#1E1E1E',
      background: '#F8F058',
      padding: '3px 8px',
      borderRadius: 'var(--radius-pill)'
    }
  }, "Despu\xE9s"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-4)',
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--bone)',
      fontSize: 14,
      lineHeight: 'var(--lh-body)'
    }
  }, caption), stylist && /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#C9C4B9',
      fontSize: 11,
      letterSpacing: 'var(--tracking-wide)'
    }
  }, "Color por ", stylist, " \u2726")));
}
Object.assign(__ds_scope, { TransformationCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/TransformationCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function Badge({
  children,
  tone = 'lemon',
  variant = 'solid'
}) {
  const tones = {
    lemon: '#F8F058',
    lilac: '#E098D8',
    magenta: '#E868A0',
    lime: '#E0F068',
    charcoal: '#1E1E1E'
  };
  const c = tones[tone] || tones.lemon;
  const solid = {
    background: c,
    color: '#1E1E1E'
  };
  const outline = {
    background: 'transparent',
    color: tone === 'charcoal' ? '#1E1E1E' : c,
    border: `1.5px solid ${c}`
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 11,
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      borderRadius: 'var(--radius-pill)',
      padding: '6px 14px',
      display: 'inline-block',
      ...(variant === 'solid' ? solid : outline)
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  disabled,
  onClick
}) {
  const sizes = {
    sm: {
      padding: '8px 16px',
      fontSize: 13
    },
    md: {
      padding: '12px 22px',
      fontSize: 15
    },
    lg: {
      padding: '15px 28px',
      fontSize: 16
    }
  };
  const variants = {
    primary: {
      background: 'var(--cta-bg)',
      color: 'var(--cta-text)',
      border: 'none'
    },
    dark: {
      background: 'var(--charcoal)',
      color: 'var(--bone)',
      border: 'none'
    },
    outline: {
      background: 'transparent',
      color: 'var(--charcoal)',
      border: '1.5px solid var(--charcoal)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--charcoal)',
      border: 'none'
    }
  };
  const style = {
    fontFamily: 'var(--font-sans)',
    fontWeight: 600,
    borderRadius: 'var(--radius-pill)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    transition: 'transform var(--dur-fast) var(--ease-standard), background var(--dur-fast) var(--ease-standard)',
    ...sizes[size],
    ...variants[variant]
  };
  return /*#__PURE__*/React.createElement("button", {
    style: style,
    disabled: disabled,
    onClick: onClick,
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'scale(0.97)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'scale(1)';
    }
  }, icon, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// ui_kits/instagram-carousel/CarouselApp.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function CarouselApp() {
  const tips = [{
    number: '01',
    title: 'El tono depende de tu piel, no solo de la tendencia',
    body: 'Un mismo rubio puede verse distinto según tu subtono. Por eso la asesoría va antes que el catálogo de Pinterest.'
  }, {
    number: '02',
    title: 'Cuidar el color empieza en la ducha',
    body: 'Agua tibia (no caliente) y shampoo sin sulfatos duplican la duración del tono.'
  }, {
    number: '03',
    title: 'Decir "no se puede en una sesión" es honestidad, no excusa',
    body: 'Preferimos dos citas bien hechas que una que arriesgue tu cabello.'
  }];
  const slides = [/*#__PURE__*/React.createElement(HookSlide, {
    key: "hook"
  }), ...tips.map((t, i) => /*#__PURE__*/React.createElement(TipSlide, _extends({
    key: i
  }, t))), /*#__PURE__*/React.createElement(BeforeAfterSlide, {
    key: "ba"
  }), /*#__PURE__*/React.createElement(CtaSlide, {
    key: "cta"
  })];
  const [i, setI] = React.useState(0);
  const size = 460;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 16,
      fontFamily: 'var(--font-sans)',
      padding: '24px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      borderRadius: 8,
      overflow: 'hidden',
      boxShadow: '0 20px 50px rgba(0,0,0,0.35)',
      position: 'relative'
    }
  }, slides[i], i > 0 && /*#__PURE__*/React.createElement("button", {
    onClick: () => setI(i - 1),
    style: {
      position: 'absolute',
      left: 8,
      top: '50%',
      transform: 'translateY(-50%)',
      border: 'none',
      background: 'rgba(255,255,255,0.85)',
      width: 32,
      height: 32,
      borderRadius: '50%',
      cursor: 'pointer'
    }
  }, "\u2039"), i < slides.length - 1 && /*#__PURE__*/React.createElement("button", {
    onClick: () => setI(i + 1),
    style: {
      position: 'absolute',
      right: 8,
      top: '50%',
      transform: 'translateY(-50%)',
      border: 'none',
      background: 'rgba(255,255,255,0.85)',
      width: 32,
      height: 32,
      borderRadius: '50%',
      cursor: 'pointer'
    }
  }, "\u203A")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, slides.map((_, idx) => /*#__PURE__*/React.createElement("div", {
    key: idx,
    onClick: () => setI(idx),
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: idx === i ? '#1E1E1E' : '#bbb',
      cursor: 'pointer'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: '#5B5750'
    }
  }, "Slide ", i + 1, " / ", slides.length));
}
if (document.getElementById('root')) ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(CarouselApp, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/instagram-carousel/CarouselApp.jsx", error: String((e && e.message) || e) }); }

// ui_kits/instagram-carousel/slides/BeforeAfterSlide.jsx
try { (() => {
function BeforeAfterSlide() {
  const {
    TransformationCard
  } = StigmaDesignSystem_ef6ffb;
  function Ph({
    label
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#8a857c',
        fontSize: '2vw',
        fontFamily: 'var(--font-sans)',
        background: '#3A3A3A'
      }
    }, label);
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      background: '#1E1E1E',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '8%',
      boxSizing: 'border-box',
      fontFamily: 'var(--font-sans)',
      gap: '6%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: '4vw',
      color: '#FAF7F2',
      textAlign: 'center'
    }
  }, "El antes que nadie ve"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '84%',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '3%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '1'
    }
  }, /*#__PURE__*/React.createElement(Ph, {
    label: "antes"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 10,
      left: 10,
      fontSize: '1.6vw',
      color: '#FAF7F2',
      background: 'rgba(30,30,30,0.6)',
      padding: '4px 12px',
      borderRadius: 999
    }
  }, "Antes")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '1'
    }
  }, /*#__PURE__*/React.createElement(Ph, {
    label: "despu\xE9s"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 10,
      right: 10,
      fontSize: '1.6vw',
      color: '#1E1E1E',
      background: '#F8F058',
      padding: '4px 12px',
      borderRadius: 999
    }
  }, "Despu\xE9s"))), /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#C9C4B9',
      fontSize: '1.8vw',
      textAlign: 'center'
    }
  }, "Color por Valentina \u2726"));
}
window.BeforeAfterSlide = BeforeAfterSlide;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/instagram-carousel/slides/BeforeAfterSlide.jsx", error: String((e && e.message) || e) }); }

// ui_kits/instagram-carousel/slides/CtaSlide.jsx
try { (() => {
function CtaSlide() {
  const {
    Button,
    SparkleAccent
  } = StigmaDesignSystem_ef6ffb;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      background: '#F8F058',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '10%',
      boxSizing: 'border-box',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement(SparkleAccent, {
    color: "magenta",
    size: 40
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: '5.2vw',
      color: '#1E1E1E',
      margin: '6% 0 5%',
      lineHeight: 1.1
    }
  }, "\xBFLista/o para", /*#__PURE__*/React.createElement("br", null), "tu cambio?"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '2vw',
      color: '#1E1E1E',
      marginBottom: '7%',
      maxWidth: '80%'
    }
  }, "Reserva tu cita y ven a redefinir la belleza, junt@s."), /*#__PURE__*/React.createElement("div", {
    style: {
      transform: 'scale(1.4)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "dark",
    size: "md"
  }, "Reserva \u2193")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '8%',
      fontSize: '1.5vw',
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: '#1E1E1E'
    }
  }, "@stigmasaloon"));
}
window.CtaSlide = CtaSlide;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/instagram-carousel/slides/CtaSlide.jsx", error: String((e && e.message) || e) }); }

// ui_kits/instagram-carousel/slides/HookSlide.jsx
try { (() => {
function HookSlide() {
  const {
    SparkleAccent
  } = StigmaDesignSystem_ef6ffb;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      background: '#1E1E1E',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '10%',
      boxSizing: 'border-box',
      fontFamily: 'var(--font-sans)',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '8%',
      left: '10%'
    }
  }, /*#__PURE__*/React.createElement(SparkleAccent, {
    color: "lemon",
    size: 28
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: '10%',
      right: '12%'
    }
  }, /*#__PURE__*/React.createElement(SparkleAccent, {
    color: "lilac",
    size: 22
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '3.4vw',
      letterSpacing: '.18em',
      textTransform: 'uppercase',
      color: '#F8F058',
      marginBottom: '5%'
    }
  }, "Mitos del color"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      color: '#FAF7F2',
      fontSize: '6.2vw',
      lineHeight: 1.1
    }
  }, "3 cosas que tu", /*#__PURE__*/React.createElement("br", null), "estilista no te dice"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '7%',
      fontSize: '1.6vw',
      color: '#C9C4B9'
    }
  }, "Desliza \u2192 \u2726"));
}
window.HookSlide = HookSlide;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/instagram-carousel/slides/HookSlide.jsx", error: String((e && e.message) || e) }); }

// ui_kits/instagram-carousel/slides/TipSlide.jsx
try { (() => {
function TipSlide({
  number,
  title,
  body
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      background: '#FAF7F2',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '10%',
      boxSizing: 'border-box',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '9vw',
      color: '#E868A0',
      lineHeight: 1,
      marginBottom: '4%'
    }
  }, number), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: '4.6vw',
      color: '#1E1E1E',
      marginBottom: '5%',
      lineHeight: 1.15
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '2.1vw',
      color: '#5B5750',
      lineHeight: 1.6,
      maxWidth: '90%'
    }
  }, body));
}
window.TipSlide = TipSlide;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/instagram-carousel/slides/TipSlide.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
function Footer() {
  const {
    SparkleAccent
  } = StigmaDesignSystem_ef6ffb;
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: '#1E1E1E',
      color: '#C9C4B9',
      padding: '48px 32px 32px',
      fontFamily: 'var(--font-sans)',
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 24,
      maxWidth: 1040,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-wordmark-horizontal.png",
    style: {
      height: 26,
      marginBottom: 12
    },
    alt: "Stigma"
  }), /*#__PURE__*/React.createElement("div", null, "Galer\xEDas, Bogot\xE1"), /*#__PURE__*/React.createElement("div", null, "Mar\u2013S\xE1b \xB7 10am\u20137pm")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      fontSize: 11,
      color: '#F8F058',
      marginBottom: 10
    }
  }, "S\xEDguenos"), /*#__PURE__*/React.createElement("div", null, "@stigmasaloon \xB7 Instagram"), /*#__PURE__*/React.createElement("div", null, "@stigmasaloon \xB7 TikTok"))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: 36,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(SparkleAccent, {
    color: "lemon",
    size: 14
  }), " Redefiniendo la belleza, juntos. ", /*#__PURE__*/React.createElement(SparkleAccent, {
    color: "lemon",
    size: 14
  })));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/GallerySection.jsx
try { (() => {
function Ph({
  label
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#8a857c',
      fontSize: 11,
      fontFamily: 'var(--font-sans)',
      background: '#3A3A3A'
    }
  }, label || 'foto');
}
function GallerySection() {
  const {
    TransformationCard
  } = StigmaDesignSystem_ef6ffb;
  const items = [{
    caption: 'No le cambiamos el pelo. Le devolvimos las ganas de mirarse al espejo. ♥✦',
    stylist: 'Valentina'
  }, {
    caption: 'De "no sé si me atrevo" a "¿por qué no lo hice antes?" en 3 horas.',
    stylist: 'Andrés'
  }, {
    caption: 'Color vibrante, técnica real, resultado que dura.',
    stylist: 'Manuela'
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "transformaciones",
    style: {
      background: '#1E1E1E',
      padding: '72px 32px',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      letterSpacing: '.18em',
      textTransform: 'uppercase',
      color: '#C9C4B9',
      textAlign: 'center',
      marginBottom: 10
    }
  }, "La prueba est\xE1 en la silla"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      textAlign: 'center',
      fontSize: 32,
      color: '#FAF7F2',
      margin: '0 0 40px'
    }
  }, "Transformaciones"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      justifyContent: 'center',
      flexWrap: 'wrap',
      maxWidth: 1040,
      margin: '0 auto'
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement(TransformationCard, {
    key: i,
    beforeSlot: /*#__PURE__*/React.createElement(Ph, null),
    afterSlot: /*#__PURE__*/React.createElement(Ph, {
      label: "despu\xE9s"
    }),
    caption: it.caption,
    stylist: it.stylist
  }))));
}
window.GallerySection = GallerySection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/GallerySection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Header.jsx
try { (() => {
function Header({
  onReserve
}) {
  const [open, setOpen] = React.useState(false);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 10,
      background: '#1E1E1E',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '14px 32px',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-wordmark-horizontal.png",
    style: {
      height: 34
    },
    alt: "Stigma"
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 28
    },
    className: "stigma-nav"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#servicios",
    style: {
      color: '#FAF7F2',
      fontSize: 13,
      letterSpacing: '.04em'
    }
  }, "Servicios"), /*#__PURE__*/React.createElement("a", {
    href: "#transformaciones",
    style: {
      color: '#FAF7F2',
      fontSize: 13,
      letterSpacing: '.04em'
    }
  }, "Transformaciones"), /*#__PURE__*/React.createElement("a", {
    href: "#nosotros",
    style: {
      color: '#FAF7F2',
      fontSize: 13,
      letterSpacing: '.04em'
    }
  }, "Nosotros"), /*#__PURE__*/React.createElement(StigmaDesignSystem_ef6ffb.Button, {
    variant: "primary",
    size: "sm",
    onClick: onReserve
  }, "Reserva tu cita")));
}
window.Header = Header;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
function Hero({
  onReserve
}) {
  const {
    SparkleAccent,
    Button
  } = StigmaDesignSystem_ef6ffb;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: '#1E1E1E',
      color: '#FAF7F2',
      padding: '96px 32px 80px',
      textAlign: 'center',
      fontFamily: 'var(--font-sans)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 40,
      left: '8%'
    }
  }, /*#__PURE__*/React.createElement(SparkleAccent, {
    color: "lilac",
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 60,
      right: '10%'
    }
  }, /*#__PURE__*/React.createElement(SparkleAccent, {
    color: "magenta",
    size: 26
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      letterSpacing: '.18em',
      textTransform: 'uppercase',
      color: '#F8F058',
      marginBottom: 18
    }
  }, "Saloon & Nails Spa \xB7 Bogot\xE1"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'clamp(2.4rem,5vw,4rem)',
      margin: '0 auto 20px',
      maxWidth: 760,
      lineHeight: 1.08
    }
  }, "Redefiniendo la belleza, juntos."), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 480,
      margin: '0 auto 34px',
      color: '#C9C4B9',
      fontSize: 16,
      lineHeight: 1.6
    }
  }, "El sal\xF3n donde transformarte no implica encajar. Color y estilo de alto nivel, con asesor\xEDa honesta, en un espacio sin juicios."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: onReserve
  }, "Reserva tu cita \u2726"));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ServicesSection.jsx
try { (() => {
function ServicesSection() {
  const {
    ServiceCard
  } = StigmaDesignSystem_ef6ffb;
  const services = [{
    title: 'Color fantasía',
    description: 'Técnicas de alto nivel con asesoría honesta sobre lo que de verdad te favorece.',
    tone: 'lilac'
  }, {
    title: 'Cortes & estilo',
    description: 'Cortes a la medida de tu identidad, no de una tendencia impuesta.',
    tone: 'lemon'
  }, {
    title: 'Uñas & nail art',
    description: 'Diseños expresivos, de cuidado real, sin prisa.',
    tone: 'magenta'
  }, {
    title: 'Spa & bienestar',
    description: 'Cuidado personal como experiencia, no como trámite.',
    tone: 'lime'
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "servicios",
    style: {
      background: 'var(--surface-page)',
      padding: '72px 32px',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      letterSpacing: '.18em',
      textTransform: 'uppercase',
      color: 'var(--text-muted-on-light)',
      textAlign: 'center',
      marginBottom: 10
    }
  }, "Lo que hacemos"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      textAlign: 'center',
      fontSize: 32,
      color: 'var(--charcoal)',
      margin: '0 0 40px'
    }
  }, "Servicios"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      justifyContent: 'center',
      flexWrap: 'wrap',
      maxWidth: 1040,
      margin: '0 auto'
    }
  }, services.map((s, i) => /*#__PURE__*/React.createElement(ServiceCard, {
    key: i,
    tone: s.tone,
    title: s.title,
    description: s.description,
    icon: /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 18
      }
    }, "\u2726")
  }))));
}
window.ServicesSection = ServicesSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ServicesSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/TestimonialsSection.jsx
try { (() => {
function TestimonialsSection() {
  const {
    TestimonialCard
  } = StigmaDesignSystem_ef6ffb;
  function Ph() {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#8a857c',
        fontSize: 10,
        fontFamily: 'var(--font-sans)'
      }
    }, "foto");
  }
  return /*#__PURE__*/React.createElement("section", {
    id: "nosotros",
    style: {
      background: 'var(--surface-page)',
      padding: '72px 32px',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      textAlign: 'center',
      fontSize: 32,
      color: 'var(--charcoal)',
      margin: '0 0 40px'
    }
  }, "Nuestra familia"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      justifyContent: 'center',
      flexWrap: 'wrap',
      maxWidth: 1040,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(TestimonialCard, {
    quote: "Aqu\xED nadie tiene que explicarse. Llegas como eres y te vas siendo m\xE1s t\xFA.",
    name: "Camila R.",
    photoSlot: /*#__PURE__*/React.createElement(Ph, null)
  }), /*#__PURE__*/React.createElement(TestimonialCard, {
    quote: "Por fin un sal\xF3n que me escucha antes de tomar las tijeras.",
    name: "Juli\xE1n T.",
    photoSlot: /*#__PURE__*/React.createElement(Ph, null)
  })));
}
window.TestimonialsSection = TestimonialsSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/TestimonialsSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/WebsiteApp.jsx
try { (() => {
function BookingModal({
  onClose
}) {
  const [step, setStep] = React.useState(0);
  const {
    Button,
    Badge
  } = StigmaDesignSystem_ef6ffb;
  const services = ['Color fantasía', 'Corte & estilo', 'Uñas & nail art'];
  const [service, setService] = React.useState(services[0]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(30,30,30,0.6)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 50
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#FAF7F2',
      borderRadius: 'var(--radius-lg)',
      padding: 32,
      width: 360,
      fontFamily: 'var(--font-sans)'
    },
    onClick: e => e.stopPropagation()
  }, step === 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      margin: '0 0 16px',
      color: '#1E1E1E'
    }
  }, "\xBFQu\xE9 te haces hoy?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      marginBottom: 20
    }
  }, services.map(s => /*#__PURE__*/React.createElement("div", {
    key: s,
    onClick: () => setService(s),
    style: {
      padding: '12px 14px',
      borderRadius: 'var(--radius-sm)',
      border: service === s ? '2px solid #1E1E1E' : '1px solid var(--border-on-light)',
      cursor: 'pointer',
      fontSize: 14
    }
  }, s))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => setStep(1)
  }, "Ver horarios")), step === 1 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      margin: '0 0 16px',
      color: '#1E1E1E'
    }
  }, "Elige un horario"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap',
      marginBottom: 20
    }
  }, ['Jue 2pm', 'Vie 11am', 'Vie 4pm', 'Sáb 1pm'].map(t => /*#__PURE__*/React.createElement(Badge, {
    key: t,
    tone: "lemon"
  }, t))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => setStep(2)
  }, "Confirmar cita")), step === 2 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      margin: '0 0 12px',
      color: '#1E1E1E'
    }
  }, "\xA1Listo! \u2726"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted-on-light)',
      marginBottom: 20
    }
  }, "Tu cita de ", service, " qued\xF3 agendada. Te escribimos por WhatsApp para confirmar. \u2665"), /*#__PURE__*/React.createElement(Button, {
    variant: "dark",
    onClick: onClose
  }, "Cerrar"))));
}
function WebsiteApp() {
  const [showModal, setShowModal] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, {
    onReserve: () => setShowModal(true)
  }), /*#__PURE__*/React.createElement(Hero, {
    onReserve: () => setShowModal(true)
  }), /*#__PURE__*/React.createElement(ServicesSection, null), /*#__PURE__*/React.createElement(GallerySection, null), /*#__PURE__*/React.createElement(TestimonialsSection, null), /*#__PURE__*/React.createElement(Footer, null), showModal && /*#__PURE__*/React.createElement(BookingModal, {
    onClose: () => setShowModal(false)
  }));
}
if (document.getElementById('root')) ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(WebsiteApp, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/WebsiteApp.jsx", error: String((e && e.message) || e) }); }

__ds_ns.BurstShape = __ds_scope.BurstShape;

__ds_ns.ScallopedFrame = __ds_scope.ScallopedFrame;

__ds_ns.SparkleAccent = __ds_scope.SparkleAccent;

__ds_ns.ServiceCard = __ds_scope.ServiceCard;

__ds_ns.TestimonialCard = __ds_scope.TestimonialCard;

__ds_ns.TransformationCard = __ds_scope.TransformationCard;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

})();
