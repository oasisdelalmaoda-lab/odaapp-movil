/* @ds-bundle: {"format":3,"namespace":"OdaOasisDelAlmaDesignSystem_35d6ca","components":[{"name":"ProductCard","sourcePath":"components/commerce/ProductCard.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Rating","sourcePath":"components/core/Rating.jsx"},{"name":"ScentTag","sourcePath":"components/core/ScentTag.jsx"}],"sourceHashes":{"components/commerce/ProductCard.jsx":"9eded4cdc84c","components/core/Badge.jsx":"529333f69c34","components/core/Button.jsx":"eddf52c9255a","components/core/IconButton.jsx":"98254c6d3218","components/core/Input.jsx":"5751f39544ff","components/core/Rating.jsx":"9f0236d531e6","components/core/ScentTag.jsx":"94e18c0495b0","ui_kits/website/chrome.jsx":"7a1747de0635","ui_kits/website/components.jsx":"9eff7274059a","ui_kits/website/data.js":"e3e23c2efe97","ui_kits/website/product.jsx":"46841d35201d","ui_kits/website/sections.jsx":"c23339c9c768"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.OdaOasisDelAlmaDesignSystem_35d6ca = window.OdaOasisDelAlmaDesignSystem_35d6ca || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Oda Badge — small status/label chip.
 * `sale` is the terracotta discount flag used on product cards (e.g. "-50%").
 */
function Badge({
  children,
  variant = 'neutral',
  size = 'md',
  ...rest
}) {
  const variants = {
    neutral: {
      background: 'var(--surface-sand)',
      color: 'var(--brand-ink)',
      border: '1px solid var(--border-subtle)'
    },
    sale: {
      background: 'var(--oda-sale)',
      color: '#FBF8F2',
      border: '1px solid var(--oda-sale)'
    },
    brand: {
      background: 'var(--brand-primary)',
      color: '#FBF8F2',
      border: '1px solid var(--brand-primary)'
    },
    soft: {
      background: 'var(--surface-card)',
      color: 'var(--text-body)',
      border: '1px solid var(--border-subtle)'
    },
    natural: {
      background: 'rgba(98,123,96,0.12)',
      color: 'var(--oda-eucalipto, #4f6450)',
      border: '1px solid rgba(98,123,96,0.3)'
    }
  };
  const sizes = {
    sm: {
      padding: '2px 8px',
      fontSize: '0.6875rem'
    },
    md: {
      padding: '4px 11px',
      fontSize: 'var(--text-xs)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.35em',
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--fw-bold)',
      letterSpacing: '0.04em',
      lineHeight: 1,
      borderRadius: 'var(--radius-pill)',
      textTransform: 'uppercase',
      ...sizes[size],
      ...variants[variant]
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Oda Button — the primary call-to-action across Oasis del Alma.
 * Solid gold-brown by default; warm, soft-cornered, gentle press.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  as = 'button',
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '8px 16px',
      fontSize: 'var(--text-sm)'
    },
    md: {
      padding: '12px 24px',
      fontSize: 'var(--text-base)'
    },
    lg: {
      padding: '16px 34px',
      fontSize: 'var(--text-lead)'
    }
  };
  const variants = {
    primary: {
      background: 'var(--brand-primary)',
      color: 'var(--text-on-brand)',
      border: '1px solid var(--brand-primary)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--brand-ink)',
      border: '1px solid var(--brand-ink)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--brand-ink)',
      border: '1px solid transparent'
    },
    ink: {
      background: 'var(--surface-ink)',
      color: 'var(--text-inverse)',
      border: '1px solid var(--surface-ink)'
    }
  };
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.55em',
    fontFamily: 'var(--font-body)',
    fontWeight: 'var(--fw-semibold)',
    letterSpacing: '0.02em',
    lineHeight: 1,
    borderRadius: 'var(--radius-pill)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    width: fullWidth ? '100%' : 'auto',
    transition: 'transform var(--dur-fast) var(--ease-soft), background var(--dur-base) var(--ease-soft), box-shadow var(--dur-base) var(--ease-soft)',
    whiteSpace: 'nowrap',
    ...sizes[size],
    ...variants[variant]
  };
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: base,
    disabled: as === 'button' ? disabled : undefined,
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'scale(0.97)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    },
    onMouseEnter: e => {
      if (disabled) return;
      if (variant === 'primary') e.currentTarget.style.background = 'var(--brand-hover)';
      if (variant === 'secondary' || variant === 'ghost') e.currentTarget.style.background = 'var(--surface-sand)';
      e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'scale(1)';
      e.currentTarget.style.boxShadow = 'none';
      e.currentTarget.style.background = variants[variant].background;
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Oda IconButton — circular icon control for nav (cart, search, account, favorite). */
function IconButton({
  children,
  label,
  variant = 'ghost',
  size = 'md',
  badge,
  ...rest
}) {
  const sizes = {
    sm: 34,
    md: 42,
    lg: 48
  };
  const dim = sizes[size];
  const variants = {
    ghost: {
      background: 'transparent',
      color: 'var(--brand-ink)'
    },
    soft: {
      background: 'var(--surface-sand)',
      color: 'var(--brand-ink)'
    },
    solid: {
      background: 'var(--brand-primary)',
      color: 'var(--text-on-brand)'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    title: label,
    style: {
      position: 'relative',
      width: dim,
      height: dim,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: 'none',
      borderRadius: 'var(--radius-circle)',
      cursor: 'pointer',
      transition: 'background var(--dur-base) var(--ease-soft), transform var(--dur-fast) var(--ease-soft)',
      ...variants[variant]
    },
    onMouseEnter: e => {
      if (variant === 'ghost') e.currentTarget.style.background = 'var(--surface-sand)';
    },
    onMouseLeave: e => {
      if (variant === 'ghost') e.currentTarget.style.background = 'transparent';
    },
    onMouseDown: e => {
      e.currentTarget.style.transform = 'scale(0.92)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    }
  }, rest), children, badge != null && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -2,
      right: -2,
      minWidth: 18,
      height: 18,
      padding: '0 5px',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-body)',
      fontSize: '0.625rem',
      fontWeight: 'var(--fw-bold)',
      color: '#FBF8F2',
      background: 'var(--brand-primary)',
      borderRadius: 'var(--radius-pill)',
      border: '2px solid var(--surface-card)'
    }
  }, badge));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Oda Input — soft-cornered text field with optional label + leading icon. */
function Input({
  label,
  hint,
  error,
  iconLeft,
  size = 'md',
  id,
  ...rest
}) {
  const sizes = {
    md: {
      padding: iconLeft ? '12px 14px 12px 40px' : '12px 14px',
      fontSize: 'var(--text-base)'
    },
    lg: {
      padding: iconLeft ? '15px 16px 15px 44px' : '15px 16px',
      fontSize: 'var(--text-lead)'
    }
  };
  const fieldId = id || (label ? `oda-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      display: 'block',
      fontFamily: 'var(--font-body)'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginBottom: 6,
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'block'
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 14,
      top: '50%',
      transform: 'translateY(-50%)',
      display: 'inline-flex',
      color: 'var(--text-muted)',
      pointerEvents: 'none'
    }
  }, iconLeft), /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    style: {
      width: '100%',
      fontFamily: 'var(--font-body)',
      color: 'var(--text-strong)',
      background: 'var(--surface-card)',
      border: `1px solid ${error ? 'var(--oda-sale)' : 'var(--border-subtle)'}`,
      borderRadius: 'var(--radius-md)',
      outline: 'none',
      transition: 'border-color var(--dur-base) var(--ease-soft), box-shadow var(--dur-base) var(--ease-soft)',
      ...sizes[size]
    },
    onFocus: e => {
      e.currentTarget.style.borderColor = 'var(--brand-primary)';
      e.currentTarget.style.boxShadow = 'var(--shadow-focus)';
    },
    onBlur: e => {
      e.currentTarget.style.borderColor = error ? 'var(--oda-sale)' : 'var(--border-subtle)';
      e.currentTarget.style.boxShadow = 'none';
    }
  }, rest))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: 6,
      fontSize: 'var(--text-xs)',
      color: error ? 'var(--oda-sale)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Rating.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Oda Rating — gold-brown star rating for reviews/testimonials. */
function Rating({
  value = 5,
  max = 5,
  size = 16,
  count,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: 1
    },
    "aria-label": `${value} de ${max}`
  }, Array.from({
    length: max
  }).map((_, i) => {
    const fill = i < Math.floor(value) ? 1 : i < value ? value - i : 0;
    return /*#__PURE__*/React.createElement("svg", {
      key: i,
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
      id: `oda-star-${i}-${fill}`
    }, /*#__PURE__*/React.createElement("stop", {
      offset: `${fill * 100}%`,
      stopColor: "var(--brand-primary)"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: `${fill * 100}%`,
      stopColor: "var(--border-subtle)"
    }))), /*#__PURE__*/React.createElement("path", {
      d: "M12 2.5l2.9 5.9 6.5.95-4.7 4.58 1.1 6.47L12 17.4l-5.8 3.05 1.1-6.47-4.7-4.58 6.5-.95z",
      fill: `url(#oda-star-${i}-${fill})`
    }));
  })), count != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, "(", count, ")"));
}
Object.assign(__ds_scope, { Rating });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Rating.jsx", error: String((e && e.message) || e) }); }

// components/core/ScentTag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SCENTS = {
  despierta: {
    color: '#C1AA81',
    label: 'Despierta'
  },
  descansa: {
    color: '#5D8091',
    label: 'Descansa'
  },
  calma: {
    color: '#6596A6',
    label: 'Calma'
  },
  respira: {
    color: '#7A9379',
    label: 'Respira'
  },
  naranja: {
    color: '#E8B56A',
    label: 'Naranja'
  },
  lavanda: {
    color: '#9C97A2',
    label: 'Lavanda'
  },
  romero: {
    color: '#B8B7B8',
    label: 'Romero'
  },
  limoncillo: {
    color: '#8AB38D',
    label: 'Limoncillo'
  },
  'arbol-te': {
    color: '#979381',
    label: 'Árbol de té'
  },
  menta: {
    color: '#A8BEA4',
    label: 'Menta'
  },
  eucalipto: {
    color: '#627B60',
    label: 'Eucalipto'
  },
  incienso: {
    color: '#C9B9A7',
    label: 'Incienso'
  }
};

/**
 * Oda ScentTag — a mood/scent pill carrying a dab of the scent color.
 * The signature way Oasis del Alma labels products by feeling.
 */
function ScentTag({
  scent = 'calma',
  label,
  selected = false,
  size = 'md',
  ...rest
}) {
  const s = SCENTS[scent] || SCENTS.calma;
  const sizes = {
    sm: {
      padding: '4px 10px 4px 8px',
      fontSize: 'var(--text-xs)',
      dot: 8
    },
    md: {
      padding: '6px 14px 6px 10px',
      fontSize: 'var(--text-sm)',
      dot: 10
    }
  };
  const sz = sizes[size];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5em',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      lineHeight: 1,
      color: selected ? '#FBF8F2' : 'var(--text-strong)',
      background: selected ? s.color : 'var(--surface-card)',
      border: `1px solid ${selected ? s.color : 'var(--border-subtle)'}`,
      borderRadius: 'var(--radius-pill)',
      padding: sz.padding,
      fontSize: sz.fontSize,
      cursor: 'default',
      transition: 'all var(--dur-base) var(--ease-soft)'
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: sz.dot,
      height: sz.dot,
      borderRadius: '50%',
      background: s.color,
      boxShadow: selected ? '0 0 0 2px rgba(255,255,255,0.6)' : 'none',
      flex: 'none'
    }
  }), label || s.label);
}
Object.assign(__ds_scope, { ScentTag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ScentTag.jsx", error: String((e && e.message) || e) }); }

// components/commerce/ProductCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const COP = n => '$' + Math.round(n).toLocaleString('es-CO').replace(/,/g, '.');

/**
 * Oda ProductCard — the storefront product tile for Oasis del Alma.
 * Image on warm sand, mood scents, COP price with optional struck regular price.
 */
function ProductCard({
  title,
  image,
  price,
  compareAt,
  scents = [],
  rating,
  reviews,
  soldOut = false,
  ctaLabel = 'Añadir al carrito',
  onAdd,
  ...rest
}) {
  const discount = compareAt && price < compareAt ? Math.round((1 - price / compareAt) * 100) : 0;
  return /*#__PURE__*/React.createElement("article", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      transition: 'transform var(--dur-base) var(--ease-soft), box-shadow var(--dur-base) var(--ease-soft)'
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = 'translateY(-4px)';
      e.currentTarget.style.boxShadow = 'var(--shadow-md)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = 'none';
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '1 / 1',
      background: 'var(--surface-sand)'
    }
  }, (discount > 0 || soldOut) && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 12,
      left: 12,
      display: 'flex',
      gap: 6,
      zIndex: 2
    }
  }, discount > 0 && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    variant: "sale"
  }, "-", discount, "%"), soldOut && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    variant: "soft"
  }, "Agotado")), image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: title,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5)',
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      flex: 1
    }
  }, scents.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 6
    }
  }, scents.slice(0, 3).map(s => /*#__PURE__*/React.createElement(__ds_scope.ScentTag, {
    key: s,
    scent: s,
    size: "sm"
  }))), /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-h4)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-strong)',
      margin: 0,
      lineHeight: 1.2
    }
  }, title), rating != null && /*#__PURE__*/React.createElement(__ds_scope.Rating, {
    value: rating,
    count: reviews,
    size: 15
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 10,
      marginTop: 'auto',
      paddingTop: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 'var(--text-lead)',
      color: 'var(--text-strong)'
    }
  }, COP(price)), discount > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--price-regular)',
      textDecoration: 'line-through'
    }
  }, COP(compareAt))), /*#__PURE__*/React.createElement("button", {
    onClick: onAdd,
    disabled: soldOut,
    style: {
      marginTop: 4,
      width: '100%',
      padding: '11px 16px',
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: 'var(--text-sm)',
      letterSpacing: '0.02em',
      color: soldOut ? 'var(--text-muted)' : 'var(--text-on-brand)',
      background: soldOut ? 'var(--surface-sand)' : 'var(--brand-primary)',
      border: 'none',
      borderRadius: 'var(--radius-pill)',
      cursor: soldOut ? 'not-allowed' : 'pointer',
      transition: 'background var(--dur-base) var(--ease-soft)'
    },
    onMouseEnter: e => {
      if (!soldOut) e.currentTarget.style.background = 'var(--brand-hover)';
    },
    onMouseLeave: e => {
      if (!soldOut) e.currentTarget.style.background = 'var(--brand-primary)';
    }
  }, soldOut ? 'Agotado' : ctaLabel)));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/ProductCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/chrome.jsx
try { (() => {
/* Oasis del Alma — site chrome: announcement bar, header, cart drawer, search, footer */

function AnnouncementBar() {
  const items = ['🎁 Empaque de regalo · ✍️ Tarjeta personalizada · 🗂️ Obsequio sorpresa', 'Envío GRATIS a todo el país por compras superiores a $150.000', '⚡ ENTREGAS EL MISMO DÍA en Cali'];
  const [i, setI] = React.useState(0);
  React.useEffect(() => {
    const t = setInterval(() => setI(v => (v + 1) % items.length), 3800);
    return () => clearInterval(t);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-ink)',
      color: 'var(--oda-brown-200)',
      textAlign: 'center',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      letterSpacing: '0.02em',
      padding: '9px 16px',
      minHeight: 38,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      animation: 'odaFade var(--dur-slow) var(--ease-soft)'
    }
  }, items[i]));
}
function Header({
  cartCount,
  onCart,
  onSearch
}) {
  const nav = ['TIENDA', 'KITS', 'TIPS', 'NOSOTROS', 'GARANTÍA'];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 30,
      background: 'var(--surface-card)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '14px var(--gutter)',
      display: 'grid',
      gridTemplateColumns: '1fr auto 1fr',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 26
    }
  }, nav.map(n => /*#__PURE__*/React.createElement("a", {
    key: n,
    href: "#",
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: '0.1em',
      color: 'var(--text-strong)'
    },
    onMouseEnter: e => e.currentTarget.style.color = 'var(--brand-primary)',
    onMouseLeave: e => e.currentTarget.style.color = 'var(--text-strong)'
  }, n))), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      justifySelf: 'center'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    height: 40,
    variant: "brown"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4,
      justifyContent: 'flex-end',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "search",
    label: "Buscar",
    onClick: onSearch
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "user",
    label: "Cuenta"
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "heart",
    label: "Favoritos"
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "shopping-bag",
    label: "Carrito",
    variant: "solid",
    badge: cartCount,
    onClick: onCart
  }))));
}
function CartDrawer({
  open,
  items,
  onClose,
  onQty
}) {
  const subtotal = items.reduce((s, it) => s + it.price * it.qty, 0);
  const freeShip = 150000;
  const pct = Math.min(100, Math.round(subtotal / freeShip * 100));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(58,51,38,0.4)',
      zIndex: 50,
      opacity: open ? 1 : 0,
      pointerEvents: open ? 'auto' : 'none',
      transition: 'opacity var(--dur-base) var(--ease-soft)'
    }
  }), /*#__PURE__*/React.createElement("aside", {
    style: {
      position: 'fixed',
      top: 0,
      right: 0,
      height: '100%',
      width: 'min(420px, 100vw)',
      zIndex: 51,
      background: 'var(--surface-page)',
      boxShadow: 'var(--shadow-lg)',
      transform: open ? 'translateX(0)' : 'translateX(100%)',
      transition: 'transform var(--dur-slow) var(--ease-out)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '20px 24px',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-h3)'
    }
  }, "Tu carrito (", items.length, ")"), /*#__PURE__*/React.createElement(IconButton, {
    icon: "x",
    label: "Cerrar",
    onClick: onClose
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 24px',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 8px',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-body)'
    }
  }, subtotal >= freeShip ? '🎉 ¡Tienes envío gratis!' : /*#__PURE__*/React.createElement(React.Fragment, null, "Te faltan ", /*#__PURE__*/React.createElement("b", null, COP(freeShip - subtotal)), " para el env\xEDo gratis")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 7,
      borderRadius: 999,
      background: 'var(--surface-sand)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      width: pct + '%',
      background: 'var(--brand-primary)',
      borderRadius: 999,
      transition: 'width var(--dur-slow) var(--ease-soft)'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '8px 24px'
    }
  }, items.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '60px 16px',
      color: 'var(--text-muted)',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "shopping-bag",
    style: {
      width: 40,
      height: 40,
      opacity: 0.4
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 12
    }
  }, "Tu carrito est\xE1 vac\xEDo.")), items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.id,
    style: {
      display: 'flex',
      gap: 14,
      padding: '16px 0',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: it.img,
    alt: "",
    style: {
      width: 72,
      height: 72,
      borderRadius: 'var(--radius-md)',
      objectFit: 'cover',
      background: 'var(--surface-sand)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-h4)',
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, it.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '2px 0 8px',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      fontWeight: 700,
      color: 'var(--text-strong)'
    }
  }, COP(it.price)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      border: '1px solid var(--border-subtle)',
      borderRadius: 999,
      padding: '4px 10px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onQty(it.id, -1),
    style: qtyBtn
  }, "\u2212"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      minWidth: 16,
      textAlign: 'center'
    }
  }, it.qty), /*#__PURE__*/React.createElement("button", {
    onClick: () => onQty(it.id, 1),
    style: qtyBtn
  }, "+")))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 24px',
      borderTop: '1px solid var(--border-subtle)',
      background: 'var(--surface-card)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 14,
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, "Subtotal"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 'var(--text-lead)',
      color: 'var(--text-strong)'
    }
  }, COP(subtotal))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    fullWidth: true,
    size: "lg",
    disabled: items.length === 0
  }, "Finalizar compra"))));
}
const qtyBtn = {
  border: 'none',
  background: 'transparent',
  cursor: 'pointer',
  fontSize: 18,
  lineHeight: 1,
  color: 'var(--brand-ink)',
  fontFamily: 'var(--font-body)'
};
function SearchOverlay({
  open,
  onClose
}) {
  const trending = ['Calma', 'Respira', 'Difusores', 'Kit', 'Descansa'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 60,
      opacity: open ? 1 : 0,
      pointerEvents: open ? 'auto' : 'none',
      transition: 'opacity var(--dur-base) var(--ease-soft)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(58,51,38,0.4)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 680,
      margin: '0 auto',
      marginTop: 90,
      background: 'var(--surface-page)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)',
      padding: 24,
      transform: open ? 'translateY(0)' : 'translateY(-16px)',
      transition: 'transform var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      padding: '12px 16px',
      background: 'var(--surface-card)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "search",
    style: {
      width: 20,
      height: 20,
      color: 'var(--text-muted)'
    }
  }), /*#__PURE__*/React.createElement("input", {
    autoFocus: open,
    placeholder: "Estoy buscando\u2026",
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-lead)',
      color: 'var(--text-strong)'
    }
  })), /*#__PURE__*/React.createElement("p", {
    className: "oda-eyebrow",
    style: {
      marginTop: 20,
      marginBottom: 10
    }
  }, "B\xFAsquedas de tendencia"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8
    }
  }, trending.map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      padding: '7px 15px',
      borderRadius: 999,
      border: '1px solid var(--border-subtle)',
      background: 'var(--surface-card)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-body)',
      cursor: 'pointer'
    }
  }, t)))));
}
function Footer() {
  const cols = [{
    h: 'Tienda',
    links: ['Aromaterapia', 'Kits y regalos', 'Difusores', 'Accesorios']
  }, {
    h: 'Ayuda',
    links: ['Nosotros', 'Política de garantía', 'Envíos', 'Tips de bienestar']
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--surface-ink)',
      color: 'var(--oda-brown-200)',
      paddingTop: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--gutter)',
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr 1.4fr',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Logo, {
    height: 42,
    variant: "white"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 16,
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontSize: 'var(--text-lead)',
      color: 'var(--oda-brown-300)'
    }
  }, "Bienestar en cada respiro."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      lineHeight: 1.7,
      maxWidth: '34ch',
      color: 'var(--oda-brown-200)'
    }
  }, "Aromaterapia con aceites esenciales 100% puros. Hecho en Colombia, libre de crueldad animal.")), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h
  }, /*#__PURE__*/React.createElement("p", {
    className: "oda-eyebrow",
    style: {
      color: 'var(--oda-brown-300)',
      marginBottom: 14
    }
  }, c.h), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, c.links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--oda-brown-200)'
    }
  }, l)))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "oda-eyebrow",
    style: {
      color: 'var(--oda-brown-300)',
      marginBottom: 14
    }
  }, "Atenci\xF3n al cliente"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--oda-brown-200)',
      lineHeight: 1.7
    }
  }, "Escr\xEDbenos por WhatsApp:", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("b", {
    style: {
      color: '#FBF8F2'
    }
  }, "+57 313 406 3259")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 14
    }
  }, ['camera', 'thumbs-up', 'message-circle'].map(ic => /*#__PURE__*/React.createElement("span", {
    key: ic,
    style: {
      width: 38,
      height: 38,
      borderRadius: '50%',
      border: '1px solid var(--oda-brown-600)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--oda-brown-200)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": ic,
    style: {
      width: 18,
      height: 18
    }
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--space-6) var(--gutter)',
      marginTop: 'var(--space-7)',
      borderTop: '1px solid var(--oda-brown-700)',
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 12,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-xs)',
      color: 'var(--oda-brown-300)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2025 Oasis del Alma. Todos los derechos reservados."), /*#__PURE__*/React.createElement("span", null, "Visa \xB7 Mastercard \xB7 American Express \xB7 PSE")));
}
Object.assign(window, {
  AnnouncementBar,
  Header,
  CartDrawer,
  SearchOverlay,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/components.jsx
try { (() => {
/* Oasis del Alma UI kit — self-contained primitives (mirror of the DS components,
   inlined so the kit renders without the compiled bundle). Styling via tokens. */

const COP = n => '$' + Math.round(n).toLocaleString('es-CO').replace(/,/g, '.');
function Logo({
  height = 38,
  variant = 'brown'
}) {
  const src = {
    brown: '../../assets/logo-wordmark-brown.png',
    black: '../../assets/logo-wordmark-black.png',
    white: '../../assets/logo-wordmark-white.png'
  }[variant];
  return /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "Oasis del Alma",
    style: {
      height,
      width: 'auto'
    }
  });
}
function Mark({
  size = 40,
  variant = 'brown'
}) {
  const src = {
    brown: '../../assets/logo-mark-brown.png',
    white: '../../assets/logo-mark-white.png'
  }[variant];
  return /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    style: {
      height: size,
      width: 'auto'
    }
  });
}
function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth,
  onClick,
  disabled,
  style = {}
}) {
  const sizes = {
    sm: {
      padding: '8px 16px',
      fontSize: 'var(--text-sm)'
    },
    md: {
      padding: '12px 24px',
      fontSize: 'var(--text-base)'
    },
    lg: {
      padding: '16px 34px',
      fontSize: 'var(--text-lead)'
    }
  };
  const variants = {
    primary: {
      background: 'var(--brand-primary)',
      color: 'var(--text-on-brand)',
      border: '1px solid var(--brand-primary)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--brand-ink)',
      border: '1px solid var(--brand-ink)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--brand-ink)',
      border: '1px solid transparent'
    },
    ink: {
      background: 'var(--surface-ink)',
      color: 'var(--text-inverse)',
      border: '1px solid var(--surface-ink)'
    },
    light: {
      background: 'var(--oda-ivory)',
      color: 'var(--brand-ink)',
      border: '1px solid var(--oda-ivory)'
    }
  };
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    disabled: disabled,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.55em',
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: '0.02em',
      lineHeight: 1,
      borderRadius: 'var(--radius-pill)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      width: fullWidth ? '100%' : 'auto',
      transition: 'transform var(--dur-fast) var(--ease-soft), background var(--dur-base) var(--ease-soft), box-shadow var(--dur-base) var(--ease-soft)',
      whiteSpace: 'nowrap',
      ...sizes[size],
      ...variants[variant],
      ...style
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'scale(0.97)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    },
    onMouseEnter: e => {
      if (!disabled) {
        e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
        if (variant === 'primary') e.currentTarget.style.background = 'var(--brand-hover)';
      }
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'scale(1)';
      e.currentTarget.style.boxShadow = 'none';
      e.currentTarget.style.background = variants[variant].background;
    }
  }, children);
}
function Badge({
  children,
  variant = 'neutral'
}) {
  const variants = {
    neutral: {
      background: 'var(--surface-sand)',
      color: 'var(--brand-ink)',
      border: '1px solid var(--border-subtle)'
    },
    sale: {
      background: 'var(--oda-sale)',
      color: '#FBF8F2',
      border: '1px solid var(--oda-sale)'
    },
    brand: {
      background: 'var(--brand-primary)',
      color: '#FBF8F2',
      border: '1px solid var(--brand-primary)'
    },
    soft: {
      background: 'var(--surface-card)',
      color: 'var(--text-body)',
      border: '1px solid var(--border-subtle)'
    },
    natural: {
      background: 'rgba(98,123,96,0.12)',
      color: '#4f6450',
      border: '1px solid rgba(98,123,96,0.3)'
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.35em',
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--fw-bold)',
      letterSpacing: '0.04em',
      lineHeight: 1,
      borderRadius: 'var(--radius-pill)',
      textTransform: 'uppercase',
      padding: '4px 11px',
      fontSize: 'var(--text-xs)',
      ...variants[variant]
    }
  }, children);
}
const SCENTS = {
  despierta: '#C1AA81',
  descansa: '#5D8091',
  calma: '#6596A6',
  respira: '#7A9379',
  naranja: '#E8B56A',
  lavanda: '#9C97A2',
  romero: '#B8B7B8',
  limoncillo: '#8AB38D',
  'arbol-te': '#979381',
  menta: '#A8BEA4',
  eucalipto: '#627B60',
  incienso: '#C9B9A7'
};
const SCENT_LABEL = {
  despierta: 'Despierta',
  descansa: 'Descansa',
  calma: 'Calma',
  respira: 'Respira',
  naranja: 'Naranja',
  lavanda: 'Lavanda',
  romero: 'Romero',
  limoncillo: 'Limoncillo',
  'arbol-te': 'Árbol de té',
  menta: 'Menta',
  eucalipto: 'Eucalipto',
  incienso: 'Incienso'
};
function ScentTag({
  scent = 'calma',
  selected,
  size = 'md',
  onClick
}) {
  const c = SCENTS[scent];
  const sz = size === 'sm' ? {
    padding: '4px 10px 4px 8px',
    fontSize: 'var(--text-xs)',
    dot: 8
  } : {
    padding: '6px 14px 6px 10px',
    fontSize: 'var(--text-sm)',
    dot: 10
  };
  return /*#__PURE__*/React.createElement("span", {
    onClick: onClick,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5em',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      lineHeight: 1,
      color: selected ? '#FBF8F2' : 'var(--text-strong)',
      background: selected ? c : 'var(--surface-card)',
      border: `1px solid ${selected ? c : 'var(--border-subtle)'}`,
      borderRadius: 'var(--radius-pill)',
      padding: sz.padding,
      fontSize: sz.fontSize,
      cursor: onClick ? 'pointer' : 'default',
      transition: 'all var(--dur-base) var(--ease-soft)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: sz.dot,
      height: sz.dot,
      borderRadius: '50%',
      background: c,
      flex: 'none',
      boxShadow: selected ? '0 0 0 2px rgba(255,255,255,0.6)' : 'none'
    }
  }), SCENT_LABEL[scent]);
}
function Rating({
  value = 5,
  size = 15,
  count
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: 1
    }
  }, Array.from({
    length: 5
  }).map((_, i) => {
    const fill = i < Math.floor(value) ? 1 : i < value ? value - i : 0;
    return /*#__PURE__*/React.createElement("svg", {
      key: i,
      width: size,
      height: size,
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
      id: `s${i}-${fill}`
    }, /*#__PURE__*/React.createElement("stop", {
      offset: `${fill * 100}%`,
      stopColor: "var(--brand-primary)"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: `${fill * 100}%`,
      stopColor: "var(--border-subtle)"
    }))), /*#__PURE__*/React.createElement("path", {
      d: "M12 2.5l2.9 5.9 6.5.95-4.7 4.58 1.1 6.47L12 17.4l-5.8 3.05 1.1-6.47-4.7-4.58 6.5-.95z",
      fill: `url(#s${i}-${fill})`
    }));
  })), count != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, "(", count, ")"));
}
function IconButton({
  icon,
  label,
  variant = 'ghost',
  badge,
  onClick
}) {
  const variants = {
    ghost: {
      background: 'transparent',
      color: 'var(--brand-ink)'
    },
    soft: {
      background: 'var(--surface-sand)',
      color: 'var(--brand-ink)'
    },
    solid: {
      background: 'var(--brand-primary)',
      color: 'var(--text-on-brand)'
    }
  };
  return /*#__PURE__*/React.createElement("button", {
    "aria-label": label,
    title: label,
    onClick: onClick,
    style: {
      position: 'relative',
      width: 42,
      height: 42,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: 'none',
      borderRadius: '50%',
      cursor: 'pointer',
      transition: 'background var(--dur-base) var(--ease-soft), transform var(--dur-fast) var(--ease-soft)',
      ...variants[variant]
    },
    onMouseEnter: e => {
      if (variant === 'ghost') e.currentTarget.style.background = 'var(--surface-sand)';
    },
    onMouseLeave: e => {
      if (variant === 'ghost') e.currentTarget.style.background = 'transparent';
    },
    onMouseDown: e => {
      e.currentTarget.style.transform = 'scale(0.92)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon,
    style: {
      width: 21,
      height: 21
    }
  }), badge != null && badge > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -2,
      right: -2,
      minWidth: 18,
      height: 18,
      padding: '0 5px',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-body)',
      fontSize: '0.625rem',
      fontWeight: 'var(--fw-bold)',
      color: '#FBF8F2',
      background: 'var(--brand-primary)',
      borderRadius: 'var(--radius-pill)',
      border: '2px solid var(--surface-card)'
    }
  }, badge));
}
function ProductCard({
  p,
  onAdd
}) {
  const discount = p.compareAt && p.price < p.compareAt ? Math.round((1 - p.price / p.compareAt) * 100) : 0;
  return /*#__PURE__*/React.createElement("article", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      transition: 'transform var(--dur-base) var(--ease-soft), box-shadow var(--dur-base) var(--ease-soft)'
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = 'translateY(-4px)';
      e.currentTarget.style.boxShadow = 'var(--shadow-md)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = 'none';
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '1 / 1',
      background: 'var(--surface-sand)'
    }
  }, (discount > 0 || p.soldOut) && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 12,
      left: 12,
      display: 'flex',
      gap: 6,
      zIndex: 2
    }
  }, discount > 0 && /*#__PURE__*/React.createElement(Badge, {
    variant: "sale"
  }, "-", discount, "%"), p.soldOut && /*#__PURE__*/React.createElement(Badge, {
    variant: "soft"
  }, "Agotado")), /*#__PURE__*/React.createElement("img", {
    src: p.img,
    alt: p.title,
    loading: "lazy",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5)',
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 6
    }
  }, p.scents.slice(0, 3).map(s => /*#__PURE__*/React.createElement(ScentTag, {
    key: s,
    scent: s,
    size: "sm"
  }))), /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-h4)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-strong)',
      margin: 0,
      lineHeight: 1.2
    }
  }, p.title), p.rating != null && /*#__PURE__*/React.createElement(Rating, {
    value: p.rating,
    count: p.reviews
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 10,
      marginTop: 'auto',
      paddingTop: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 'var(--text-lead)',
      color: 'var(--text-strong)'
    }
  }, COP(p.price)), discount > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--price-regular)',
      textDecoration: 'line-through'
    }
  }, COP(p.compareAt))), /*#__PURE__*/React.createElement("button", {
    onClick: () => !p.soldOut && onAdd(p),
    disabled: p.soldOut,
    style: {
      marginTop: 4,
      width: '100%',
      padding: '11px 16px',
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: 'var(--text-sm)',
      letterSpacing: '0.02em',
      color: p.soldOut ? 'var(--text-muted)' : 'var(--text-on-brand)',
      background: p.soldOut ? 'var(--surface-sand)' : 'var(--brand-primary)',
      border: 'none',
      borderRadius: 'var(--radius-pill)',
      cursor: p.soldOut ? 'not-allowed' : 'pointer',
      transition: 'background var(--dur-base) var(--ease-soft)'
    },
    onMouseEnter: e => {
      if (!p.soldOut) e.currentTarget.style.background = 'var(--brand-hover)';
    },
    onMouseLeave: e => {
      if (!p.soldOut) e.currentTarget.style.background = 'var(--brand-primary)';
    }
  }, p.soldOut ? 'Agotado' : 'Añadir al carrito')));
}
Object.assign(window, {
  COP,
  Logo,
  Mark,
  Button,
  Badge,
  ScentTag,
  SCENTS,
  SCENT_LABEL,
  Rating,
  IconButton,
  ProductCard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/components.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
/* Oasis del Alma — storefront sample data (real products from oasisdelalma.co).
   Product imagery is hot-linked from the live Shopify CDN. */
window.ODA_DATA = function () {
  const cdn = 'https://oasisdelalma.co/cdn/shop/files/';
  const col = 'https://oasisdelalma.co/cdn/shop/collections/';
  const products = [{
    id: 'kit-inhala',
    title: 'Kit Inhala · 3 inhaladores',
    img: cdn + 'Kit_inhala.png?v=1779070111&width=700',
    price: 100000,
    compareAt: 128700,
    scents: ['calma', 'respira', 'despierta'],
    rating: 5,
    reviews: 42,
    cat: 'kits'
  }, {
    id: 'punto-magico',
    title: 'Punto Mágico · Roll-on',
    img: cdn + 'Rollon_-_punto_magico.png?v=1780002252&width=700',
    price: 29900,
    scents: ['calma', 'respira', 'descansa'],
    rating: 4.5,
    reviews: 87,
    cat: 'aromaterapia'
  }, {
    id: 'brumas',
    title: 'Brumas · Agua de lino',
    img: cdn + 'Brumas.png?v=1780006060&width=700',
    price: 19900,
    scents: ['descansa', 'eucalipto', 'calma'],
    rating: 5,
    reviews: 31,
    cat: 'aromaterapia'
  }, {
    id: 'aceites',
    title: 'Aceites Esenciales 100% puros',
    img: cdn + 'Aceites_esenciales.png?v=1780335650&width=700',
    price: 29900,
    scents: ['eucalipto', 'lavanda', 'menta'],
    rating: 5,
    reviews: 64,
    cat: 'aromaterapia'
  }, {
    id: 'kit-magia',
    title: 'Kit Magia x6 · Roll-ons',
    img: cdn + 'kit_magia_x_6.png?v=1779382780&width=700',
    price: 150000,
    compareAt: 179400,
    scents: ['calma', 'respira', 'despierta'],
    rating: 5,
    reviews: 53,
    cat: 'kits',
    soldOut: true
  }, {
    id: 'vela-masaje',
    title: 'Vela de Masajes',
    img: cdn + 'velas-masaje.jpg?v=1771622219&width=700',
    price: 83900,
    scents: ['descansa', 'calma'],
    rating: 4.5,
    reviews: 22,
    cat: 'aromaterapia'
  }, {
    id: 'kit-antiestres',
    title: 'Kit Antiestrés',
    img: cdn + 'kit_antiestres.png?v=1779397928&width=700',
    price: 239900,
    compareAt: 383680,
    scents: ['calma', 'lavanda'],
    rating: 5,
    reviews: 18,
    cat: 'kits',
    soldOut: true
  }, {
    id: 'kit-difusor',
    title: 'Kit Difusor + 3 aceites',
    img: cdn + 'kit_difusor_3_aceites_90078b73-9be5-4937-b352-da39c98cfb3f.png?v=1779404537&width=700',
    price: 199900,
    compareAt: 284600,
    scents: ['lavanda', 'eucalipto', 'naranja'],
    rating: 5,
    reviews: 47,
    cat: 'difusores'
  }, {
    id: 'kit-esencial',
    title: 'Kit Esencial',
    img: cdn + 'Kit_esencial.png?v=1779743203&width=700',
    price: 183600,
    compareAt: 239200,
    scents: ['eucalipto', 'menta', 'romero'],
    rating: 5,
    reviews: 12,
    cat: 'kits'
  }, {
    id: 'kit-descansa',
    title: 'Kit Descansa',
    img: cdn + 'Kit-descansa-2.png?v=1739727796&width=700',
    price: 90000,
    compareAt: 111700,
    scents: ['descansa', 'lavanda'],
    rating: 5,
    reviews: 39,
    cat: 'kits'
  }, {
    id: 'kit-respira',
    title: 'Kit Respira',
    img: cdn + 'kit-respiracion-completo.png?v=1743180485&width=700',
    price: 99900,
    compareAt: 119700,
    scents: ['respira', 'eucalipto', 'menta'],
    rating: 5,
    reviews: 58,
    cat: 'kits'
  }, {
    id: 'kit-alma',
    title: 'Kit Alma · Set completo',
    img: cdn + 'Kit_Alma_10ml.png?v=1779997897&width=700',
    price: 577900,
    compareAt: 1164500,
    scents: ['lavanda', 'eucalipto', 'menta'],
    rating: 5,
    reviews: 9,
    cat: 'kits'
  }];
  const moods = [{
    q: '¿Tienes estrés?',
    tag: 'Calma la ansiedad',
    scent: 'calma',
    img: cdn + 'DSC_5994-copia-scaled-e1663296235421.jpg?v=1740099382&width=900'
  }, {
    q: '¿No puedes dormir?',
    tag: 'Descansa mejor',
    scent: 'descansa',
    img: cdn + 'DSC_1826-scaled-e1663297018319.jpg?v=1740100049&width=900'
  }, {
    q: '¿Te falta energía?',
    tag: 'Despierta tus sentidos',
    scent: 'despierta',
    img: cdn + 'DSC_5976-scaled-e1663297696712.jpg?v=1740099600&width=900'
  }, {
    q: '¿Problemas respiratorios?',
    tag: 'Respira libre',
    scent: 'respira',
    img: cdn + 'IMG_2965-scaled-e1663297632658.jpg?v=1740099533&width=900'
  }];
  const categories = [{
    title: 'Kits y regalos',
    img: col + 'Banner_WEB_1920x800px.jpg?v=1766502947&width=900'
  }, {
    title: 'Aromaterapia',
    img: cdn + 'Kit-Conocete2.png?v=1739823520&width=900'
  }, {
    title: 'Difusores',
    img: cdn + 'kit_difusor_3_aceites_90078b73-9be5-4937-b352-da39c98cfb3f.png?v=1779404537&width=900'
  }, {
    title: 'Accesorios',
    img: cdn + 'anillodeacupresion.png?v=1781626548&width=900'
  }];
  const testimonials = [{
    name: 'Natalia González',
    text: 'Excelentes productos, no podía dormir y la mezcla Descansa me cambió la vida.',
    product: 'Kit Descansa'
  }, {
    name: 'Carolina Fandiño',
    text: 'Amo sus productos. El Kit Respira es lo mejor que me ha pasado, me ayuda mucho a controlar mi rinitis.',
    product: 'Kit Respira'
  }, {
    name: 'Life Arango',
    text: 'Sus productos se han vuelto parte de mis rutinas diarias. Excelente producto y asesoría, 10 de 10.',
    product: 'Aceites Esenciales'
  }];
  const hero = cdn + 'Banner_WEB_1920x800px.jpg?v=1764946898&width=1920';
  return {
    products,
    moods,
    categories,
    testimonials,
    hero
  };
}();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

// ui_kits/website/product.jsx
try { (() => {
/* Oasis del Alma — Product detail view */

function Accordion({
  title,
  children,
  open: openInit
}) {
  const [open, setOpen] = React.useState(!!openInit);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(!open),
    style: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '18px 0',
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-h4)',
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, title, /*#__PURE__*/React.createElement("i", {
    "data-lucide": open ? 'minus' : 'plus',
    style: {
      width: 20,
      height: 20,
      color: 'var(--brand-primary)'
    }
  })), open && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 0 18px',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      lineHeight: 1.7,
      color: 'var(--text-body)'
    }
  }, children));
}
function ProductView({
  product,
  onAdd
}) {
  const p = product;
  const [scent, setScent] = React.useState(p.scents[0]);
  const [qty, setQty] = React.useState(1);
  const discount = p.compareAt ? Math.round((1 - p.price / p.compareAt) * 100) : 0;
  const thumbs = [p.img, ODA_DATA.products[1].img, ODA_DATA.products[3].img];
  const [active, setActive] = React.useState(0);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--space-7) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("nav", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)',
      marginBottom: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'var(--text-muted)'
    }
  }, "Inicio"), " / ", /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'var(--text-muted)'
    }
  }, "Kits"), " / ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-strong)'
    }
  }, p.title)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.05fr 1fr',
      gap: 'var(--space-8)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      position: 'sticky',
      top: 90
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, thumbs.map((t, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    onClick: () => setActive(i),
    style: {
      width: 68,
      height: 68,
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      border: `2px solid ${active === i ? 'var(--brand-primary)' : 'var(--border-subtle)'}`,
      padding: 0,
      cursor: 'pointer',
      background: 'var(--surface-sand)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: t,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      aspectRatio: '1 / 1',
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      background: 'var(--surface-sand)',
      position: 'relative'
    }
  }, discount > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 16,
      left: 16,
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "sale"
  }, "-", discount, "%")), /*#__PURE__*/React.createElement("img", {
    src: thumbs[active],
    alt: p.title,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "oda-eyebrow"
  }, "Aromaterapia \xB7 Kit"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--text-h1)',
      margin: '8px 0 12px'
    }
  }, p.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(Rating, {
    value: p.rating,
    count: p.reviews,
    size: 18
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--oda-success)',
      fontWeight: 600
    }
  }, "\u25CF En stock")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 14,
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: '2.4rem',
      color: 'var(--text-strong)'
    }
  }, COP(p.price)), discount > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-lead)',
      color: 'var(--price-regular)',
      textDecoration: 'line-through'
    }
  }, COP(p.compareAt))), /*#__PURE__*/React.createElement("p", {
    className: "oda-lead",
    style: {
      marginBottom: 24
    }
  }, "Una selecci\xF3n de aceites esenciales 100% puros, formulada para acompa\xF1ar tu ritual diario de bienestar."), /*#__PURE__*/React.createElement("p", {
    className: "oda-eyebrow",
    style: {
      marginBottom: 10
    }
  }, "Elige tu aroma"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8,
      marginBottom: 26
    }
  }, p.scents.map(s => /*#__PURE__*/React.createElement(ScentTag, {
    key: s,
    scent: s,
    selected: scent === s,
    onClick: () => setScent(s)
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 16,
      border: '1px solid var(--border-strong)',
      borderRadius: 'var(--radius-pill)',
      padding: '0 16px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setQty(Math.max(1, qty - 1)),
    style: qtyBtn
  }, "\u2212"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-lead)',
      minWidth: 18,
      textAlign: 'center'
    }
  }, qty), /*#__PURE__*/React.createElement("button", {
    onClick: () => setQty(qty + 1),
    style: qtyBtn
  }, "+")), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    style: {
      flex: 1
    },
    onClick: () => onAdd({
      ...p,
      qty
    })
  }, "A\xF1adir al carrito \xB7 ", COP(p.price * qty))), /*#__PURE__*/React.createElement(Button, {
    variant: "ink",
    size: "lg",
    fullWidth: true,
    onClick: () => onAdd({
      ...p,
      qty
    })
  }, "Comprar ahora"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 18,
      margin: '24px 0',
      flexWrap: 'wrap'
    }
  }, [['leaf', 'Ingredientes naturales'], ['heart', 'Cruelty free'], ['map-pin', 'Hecho en Colombia']].map(([ic, t]) => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": ic,
    style: {
      width: 18,
      height: 18,
      color: 'var(--brand-primary)'
    }
  }), t))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(Accordion, {
    title: "Descripci\xF3n",
    open: true
  }, "Mezcla de aceites esenciales puros pensada para tu rutina de bienestar. Aplica en mu\xF1ecas, sienes o difusor y respira profundo."), /*#__PURE__*/React.createElement(Accordion, {
    title: "Ingredientes"
  }, "Aceites esenciales 100% puros de lavanda, eucalipto y menta. Sin parabenos ni qu\xEDmicos sint\xE9ticos."), /*#__PURE__*/React.createElement(Accordion, {
    title: "Env\xEDos y entregas"
  }, "Env\xEDo gratis en compras superiores a $150.000. Entregas el mismo d\xEDa en Cali. Resto del pa\xEDs: 2\u20134 d\xEDas h\xE1biles.")))));
}
Object.assign(window, {
  ProductView,
  Accordion
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/product.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/sections.jsx
try { (() => {
/* Oasis del Alma — homepage sections */

function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      minHeight: 520,
      display: 'flex',
      alignItems: 'center',
      backgroundImage: `linear-gradient(90deg, rgba(58,51,38,0.55) 0%, rgba(58,51,38,0.15) 55%, rgba(58,51,38,0) 100%), url(${ODA_DATA.hero})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--gutter)',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 540,
      color: '#FBF8F2'
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "oda-eyebrow",
    style: {
      color: 'var(--oda-brown-200)'
    }
  }, "Aromaterapia \xB7 Bienestar"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'clamp(2.8rem, 5vw, 4.4rem)',
      color: '#FBF8F2',
      margin: '10px 0 16px',
      fontWeight: 500
    }
  }, "Bienestar en cada respiro"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-lead)',
      lineHeight: 1.6,
      color: 'rgba(251,248,242,0.92)',
      maxWidth: '42ch',
      marginBottom: 28
    }
  }, "Aceites esenciales 100% puros, roll-ons, brumas y difusores para calmar, respirar, descansar y despertar."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "light",
    size: "lg"
  }, "Comprar ahora"), /*#__PURE__*/React.createElement(Button, {
    variant: "ink",
    size: "lg",
    style: {
      background: 'transparent',
      borderColor: 'rgba(251,248,242,0.5)',
      color: '#FBF8F2'
    }
  }, "Ver kits")))));
}
function SectionHead({
  eyebrow,
  title,
  action
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      marginBottom: 'var(--space-6)',
      gap: 16,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, eyebrow && /*#__PURE__*/React.createElement("p", {
    className: "oda-eyebrow",
    style: {
      marginBottom: 8
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0
    }
  }, title)), action && /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      fontWeight: 600,
      letterSpacing: '0.04em',
      color: 'var(--brand-primary)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, action, " ", /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-right",
    style: {
      width: 16,
      height: 16
    }
  })));
}
function MoodGrid() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--space-9) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "oda-eyebrow"
  }, "Compra por c\xF3mo te sientes"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '8px 0 0'
    }
  }, "\xBFQu\xE9 necesita tu alma hoy?")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 18
    }
  }, ODA_DATA.moods.map(m => /*#__PURE__*/React.createElement("a", {
    key: m.q,
    href: "#",
    style: {
      position: 'relative',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      aspectRatio: '3 / 4',
      display: 'block',
      boxShadow: 'var(--shadow-sm)'
    },
    onMouseEnter: e => {
      e.currentTarget.querySelector('img').style.transform = 'scale(1.06)';
    },
    onMouseLeave: e => {
      e.currentTarget.querySelector('img').style.transform = 'scale(1)';
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: m.img,
    alt: m.tag,
    loading: "lazy",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform var(--dur-slow) var(--ease-soft)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, rgba(58,51,38,0) 35%, rgba(58,51,38,0.78) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      padding: 18,
      color: '#FBF8F2'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      width: 12,
      height: 12,
      borderRadius: '50%',
      background: SCENTS[m.scent],
      marginBottom: 10
    }
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      color: '#FBF8F2',
      margin: '0 0 4px',
      fontSize: 'var(--text-h4)',
      fontWeight: 600
    }
  }, m.q), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'rgba(251,248,242,0.85)'
    }
  }, m.tag))))));
}
function ProductRail({
  title,
  eyebrow,
  products,
  onAdd
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-linen)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--space-9) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: eyebrow,
    title: title,
    action: "Ver todo"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 18
    }
  }, products.map(p => /*#__PURE__*/React.createElement(ProductCard, {
    key: p.id,
    p: p,
    onAdd: onAdd
  })))));
}
function CategoryGrid() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--space-9) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Explora",
    title: "Categor\xEDas"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 18
    }
  }, ODA_DATA.categories.map(c => /*#__PURE__*/React.createElement("a", {
    key: c.title,
    href: "#",
    style: {
      position: 'relative',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      aspectRatio: '1 / 1',
      display: 'block',
      border: '1px solid var(--border-subtle)'
    },
    onMouseEnter: e => {
      e.currentTarget.querySelector('img').style.transform = 'scale(1.05)';
    },
    onMouseLeave: e => {
      e.currentTarget.querySelector('img').style.transform = 'scale(1)';
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: c.img,
    alt: c.title,
    loading: "lazy",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform var(--dur-slow) var(--ease-soft)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, rgba(58,51,38,0) 50%, rgba(58,51,38,0.6) 100%)'
    }
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      position: 'absolute',
      left: 18,
      bottom: 16,
      color: '#FBF8F2',
      margin: 0,
      fontSize: 'var(--text-h4)',
      fontWeight: 600
    }
  }, c.title)))));
}
function TrustMarquee() {
  const items = ['Ingredientes naturales', 'Cruelty free · No testeado en animales', 'Hecho en Colombia', 'Aceites 100% puros'];
  const row = [...items, ...items, ...items];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--brand-primary)',
      color: '#FBF8F2',
      overflow: 'hidden',
      padding: '16px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 0,
      whiteSpace: 'nowrap',
      animation: 'odaMarquee 26s linear infinite',
      width: 'max-content'
    }
  }, row.map((it, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 18,
      padding: '0 28px',
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-h4)',
      fontWeight: 500,
      letterSpacing: '0.02em'
    }
  }, it, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.5
    }
  }, "\u2726")))));
}
function Testimonials() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--space-9) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "oda-eyebrow"
  }, "Lo que dicen"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '8px 0 0'
    }
  }, "Historias de bienestar")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 18
    }
  }, ODA_DATA.testimonials.map(t => /*#__PURE__*/React.createElement("figure", {
    key: t.name,
    style: {
      margin: 0,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-6)',
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Rating, {
    value: 5,
    size: 16
  }), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-h4)',
      lineHeight: 1.4,
      color: 'var(--text-strong)',
      fontStyle: 'italic'
    }
  }, "\u201C", t.text, "\u201D"), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      borderRadius: '50%',
      background: 'var(--surface-sand)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      color: 'var(--brand-ink)'
    }
  }, t.name[0]), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 'var(--text-sm)',
      color: 'var(--text-strong)'
    }
  }, t.name), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)'
    }
  }, "Comprador verificado \xB7 ", t.product)))))));
}
function Newsletter() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-sand)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-narrow)',
      margin: '0 auto',
      padding: 'var(--space-9) var(--gutter)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Mark, {
    size: 48,
    variant: "brown"
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '18px 0 8px'
    }
  }, "Gana 10% en tu primera compra"), /*#__PURE__*/React.createElement("p", {
    className: "oda-lead",
    style: {
      marginBottom: 24,
      maxWidth: '46ch',
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  }, "Reg\xEDstrate y recibe un 10% de descuento, adem\xE1s de ofertas y nuevas referencias."), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => e.preventDefault(),
    style: {
      display: 'flex',
      gap: 10,
      maxWidth: 440,
      margin: '0 auto',
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "email",
    placeholder: "tu@correo.com",
    required: true,
    style: {
      flex: '1 1 240px',
      padding: '14px 16px',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      border: '1px solid var(--border-strong)',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--surface-card)',
      color: 'var(--text-strong)',
      outline: 'none'
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg"
  }, "Registrarme"))));
}
Object.assign(window, {
  Hero,
  MoodGrid,
  ProductRail,
  CategoryGrid,
  TrustMarquee,
  Testimonials,
  Newsletter,
  SectionHead
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/sections.jsx", error: String((e && e.message) || e) }); }

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Rating = __ds_scope.Rating;

__ds_ns.ScentTag = __ds_scope.ScentTag;

})();
