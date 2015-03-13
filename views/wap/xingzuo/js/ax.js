!
function(a, b) {
  "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
    if (!a.document) throw new Error("jQuery requires a window with a document");
    return b(a)
  }: b(a)
} ("undefined" != typeof window ? window: this,
function(a, b) {
  function c(a) {
    var b = a.length,
    c = eb.type(a);
    return "function" === c || eb.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
  }
  function d(a, b, c) {
    if (eb.isFunction(b)) return eb.grep(a,
    function(a, d) {
      return !! b.call(a, d, a) !== c
    });
    if (b.nodeType) return eb.grep(a,
    function(a) {
      return a === b !== c
    });
    if ("string" == typeof b) {
      if (mb.test(b)) return eb.filter(b, a, c);
      b = eb.filter(b, a)
    }
    return eb.grep(a,
    function(a) {
      return eb.inArray(a, b) >= 0 !== c
    })
  }
  function e(a, b) {
    do a = a[b];
    while (a && 1 !== a.nodeType);
    return a
  }
  function f(a) {
    var b = ub[a] = {};
    return eb.each(a.match(tb) || [],
    function(a, c) {
      b[c] = !0
    }),
    b
  }
  function g() {
    ob.addEventListener ? (ob.removeEventListener("DOMContentLoaded", h, !1), a.removeEventListener("load", h, !1)) : (ob.detachEvent("onreadystatechange", h), a.detachEvent("onload", h))
  }
  function h() { (ob.addEventListener || "load" === event.type || "complete" === ob.readyState) && (g(), eb.ready())
  }
  function i(a, b, c) {
    if (void 0 === c && 1 === a.nodeType) {
      var d = "data-" + b.replace(zb, "-$1").toLowerCase();
      if (c = a.getAttribute(d), "string" == typeof c) {
        try {
          c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null: +c + "" === c ? +c: yb.test(c) ? eb.parseJSON(c) : c
        } catch(e) {}
        eb.data(a, b, c)
      } else c = void 0
    }
    return c
  }
  function j(a) {
    var b;
    for (b in a) if (("data" !== b || !eb.isEmptyObject(a[b])) && "toJSON" !== b) return ! 1;
    return ! 0
  }
  function k(a, b, c, d) {
    if (eb.acceptData(a)) {
      var e, f, g = eb.expando,
      h = a.nodeType,
      i = h ? eb.cache: a,
      j = h ? a[g] : a[g] && g;
      if (j && i[j] && (d || i[j].data) || void 0 !== c || "string" != typeof b) return j || (j = h ? a[g] = W.pop() || eb.guid++:g),
      i[j] || (i[j] = h ? {}: {
        toJSON: eb.noop
      }),
      ("object" == typeof b || "function" == typeof b) && (d ? i[j] = eb.extend(i[j], b) : i[j].data = eb.extend(i[j].data, b)),
      f = i[j],
      d || (f.data || (f.data = {}), f = f.data),
      void 0 !== c && (f[eb.camelCase(b)] = c),
      "string" == typeof b ? (e = f[b], null == e && (e = f[eb.camelCase(b)])) : e = f,
      e
    }
  }
  function l(a, b, c) {
    if (eb.acceptData(a)) {
      var d, e, f = a.nodeType,
      g = f ? eb.cache: a,
      h = f ? a[eb.expando] : eb.expando;
      if (g[h]) {
        if (b && (d = c ? g[h] : g[h].data)) {
          eb.isArray(b) ? b = b.concat(eb.map(b, eb.camelCase)) : b in d ? b = [b] : (b = eb.camelCase(b), b = b in d ? [b] : b.split(" ")),
          e = b.length;
          for (; e--;) delete d[b[e]];
          if (c ? !j(d) : !eb.isEmptyObject(d)) return
        } (c || (delete g[h].data, j(g[h]))) && (f ? eb.cleanData([a], !0) : cb.deleteExpando || g != g.window ? delete g[h] : g[h] = null)
      }
    }
  }
  function m() {
    return ! 0
  }
  function n() {
    return ! 1
  }
  function o() {
    try {
      return ob.activeElement
    } catch(a) {}
  }
  function p(a) {
    var b = Kb.split("|"),
    c = a.createDocumentFragment();
    if (c.createElement) for (; b.length;) c.createElement(b.pop());
    return c
  }
  function q(a, b) {
    var c, d, e = 0,
    f = typeof a.getElementsByTagName !== xb ? a.getElementsByTagName(b || "*") : typeof a.querySelectorAll !== xb ? a.querySelectorAll(b || "*") : void 0;
    if (!f) for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) ! b || eb.nodeName(d, b) ? f.push(d) : eb.merge(f, q(d, b));
    return void 0 === b || b && eb.nodeName(a, b) ? eb.merge([a], f) : f
  }
  function r(a) {
    Eb.test(a.type) && (a.defaultChecked = a.checked)
  }
  function s(a, b) {
    return eb.nodeName(a, "table") && eb.nodeName(11 !== b.nodeType ? b: b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
  }
  function t(a) {
    return a.type = (null !== eb.find.attr(a, "type")) + "/" + a.type,
    a
  }
  function u(a) {
    var b = Vb.exec(a.type);
    return b ? a.type = b[1] : a.removeAttribute("type"),
    a
  }
  function v(a, b) {
    for (var c, d = 0; null != (c = a[d]); d++) eb._data(c, "globalEval", !b || eb._data(b[d], "globalEval"))
  }
  function w(a, b) {
    if (1 === b.nodeType && eb.hasData(a)) {
      var c, d, e, f = eb._data(a),
      g = eb._data(b, f),
      h = f.events;
      if (h) {
        delete g.handle,
        g.events = {};
        for (c in h) for (d = 0, e = h[c].length; e > d; d++) eb.event.add(b, c, h[c][d])
      }
      g.data && (g.data = eb.extend({},
      g.data))
    }
  }
  function x(a, b) {
    var c, d, e;
    if (1 === b.nodeType) {
      if (c = b.nodeName.toLowerCase(), !cb.noCloneEvent && b[eb.expando]) {
        e = eb._data(b);
        for (d in e.events) eb.removeEvent(b, d, e.handle);
        b.removeAttribute(eb.expando)
      }
      "script" === c && b.text !== a.text ? (t(b).text = a.text, u(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), cb.html5Clone && a.innerHTML && !eb.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && Eb.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected: ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
    }
  }
  function y(b, c) {
    var d, e = eb(c.createElement(b)).appendTo(c.body),
    f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display: eb.css(e[0], "display");
    return e.detach(),
    f
  }
  function z(a) {
    var b = ob,
    c = _b[a];
    return c || (c = y(a, b), "none" !== c && c || ($b = ($b || eb("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = ($b[0].contentWindow || $b[0].contentDocument).document, b.write(), b.close(), c = y(a, b), $b.detach()), _b[a] = c),
    c
  }
  function A(a, b) {
    return {
      get: function() {
        var c = a();
        return null != c ? c ? void delete this.get: (this.get = b).apply(this, arguments) : void 0
      }
    }
  }
  function B(a, b) {
    if (b in a) return b;
    for (var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = mc.length; e--;) if (b = mc[e] + c, b in a) return b;
    return d
  }
  function C(a, b) {
    for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g],
    d.style && (f[g] = eb._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && Cb(d) && (f[g] = eb._data(d, "olddisplay", z(d.nodeName)))) : (e = Cb(d), (c && "none" !== c || !e) && eb._data(d, "olddisplay", e ? c: eb.css(d, "display"))));
    for (g = 0; h > g; g++) d = a[g],
    d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "": "none"));
    return a
  }
  function D(a, b, c) {
    var d = ic.exec(b);
    return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
  }
  function E(a, b, c, d, e) {
    for (var f = c === (d ? "border": "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2)"margin" === c && (g += eb.css(a, c + Bb[f], !0, e)),
    d ? ("content" === c && (g -= eb.css(a, "padding" + Bb[f], !0, e)), "margin" !== c && (g -= eb.css(a, "border" + Bb[f] + "Width", !0, e))) : (g += eb.css(a, "padding" + Bb[f], !0, e), "padding" !== c && (g += eb.css(a, "border" + Bb[f] + "Width", !0, e)));
    return g
  }
  function F(a, b, c) {
    var d = !0,
    e = "width" === b ? a.offsetWidth: a.offsetHeight,
    f = ac(a),
    g = cb.boxSizing && "border-box" === eb.css(a, "boxSizing", !1, f);
    if (0 >= e || null == e) {
      if (e = bc(a, b, f), (0 > e || null == e) && (e = a.style[b]), dc.test(e)) return e;
      d = g && (cb.boxSizingReliable() || e === a.style[b]),
      e = parseFloat(e) || 0
    }
    return e + E(a, b, c || (g ? "border": "content"), d, f) + "px"
  }
  function G(a, b, c, d, e) {
    return new G.prototype.init(a, b, c, d, e)
  }
  function H() {
    return setTimeout(function() {
      nc = void 0
    }),
    nc = eb.now()
  }
  function I(a, b) {
    var c, d = {
      height: a
    },
    e = 0;
    for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = Bb[e],
    d["margin" + c] = d["padding" + c] = a;
    return b && (d.opacity = d.width = a),
    d
  }
  function J(a, b, c) {
    for (var d, e = (tc[b] || []).concat(tc["*"]), f = 0, g = e.length; g > f; f++) if (d = e[f].call(c, b, a)) return d
  }
  function K(a, b, c) {
    var d, e, f, g, h, i, j, k, l = this,
    m = {},
    n = a.style,
    o = a.nodeType && Cb(a),
    p = eb._data(a, "fxshow");
    c.queue || (h = eb._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
      h.unqueued || i()
    }), h.unqueued++, l.always(function() {
      l.always(function() {
        h.unqueued--,
        eb.queue(a, "fx").length || h.empty.fire()
      })
    })),
    1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [n.overflow, n.overflowX, n.overflowY], j = eb.css(a, "display"), k = "none" === j ? eb._data(a, "olddisplay") || z(a.nodeName) : j, "inline" === k && "none" === eb.css(a, "float") && (cb.inlineBlockNeedsLayout && "inline" !== z(a.nodeName) ? n.zoom = 1 : n.display = "inline-block")),
    c.overflow && (n.overflow = "hidden", cb.shrinkWrapBlocks() || l.always(function() {
      n.overflow = c.overflow[0],
      n.overflowX = c.overflow[1],
      n.overflowY = c.overflow[2]
    }));
    for (d in b) if (e = b[d], pc.exec(e)) {
      if (delete b[d], f = f || "toggle" === e, e === (o ? "hide": "show")) {
        if ("show" !== e || !p || void 0 === p[d]) continue;
        o = !0
      }
      m[d] = p && p[d] || eb.style(a, d)
    } else j = void 0;
    if (eb.isEmptyObject(m))"inline" === ("none" === j ? z(a.nodeName) : j) && (n.display = j);
    else {
      p ? "hidden" in p && (o = p.hidden) : p = eb._data(a, "fxshow", {}),
      f && (p.hidden = !o),
      o ? eb(a).show() : l.done(function() {
        eb(a).hide()
      }),
      l.done(function() {
        var b;
        eb._removeData(a, "fxshow");
        for (b in m) eb.style(a, b, m[b])
      });
      for (d in m) g = J(o ? p[d] : 0, d, l),
      d in p || (p[d] = g.start, o && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
    }
  }
  function L(a, b) {
    var c, d, e, f, g;
    for (c in a) if (d = eb.camelCase(c), e = b[d], f = a[c], eb.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = eb.cssHooks[d], g && "expand" in g) {
      f = g.expand(f),
      delete a[d];
      for (c in f) c in a || (a[c] = f[c], b[c] = e)
    } else b[d] = e
  }
  function M(a, b, c) {
    var d, e, f = 0,
    g = sc.length,
    h = eb.Deferred().always(function() {
      delete i.elem
    }),
    i = function() {
      if (e) return ! 1;
      for (var b = nc || H(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
      return h.notifyWith(a, [j, f, c]),
      1 > f && i ? c: (h.resolveWith(a, [j]), !1)
    },
    j = h.promise({
      elem: a,
      props: eb.extend({},
      b),
      opts: eb.extend(!0, {
        specialEasing: {}
      },
      c),
      originalProperties: b,
      originalOptions: c,
      startTime: nc || H(),
      duration: c.duration,
      tweens: [],
      createTween: function(b, c) {
        var d = eb.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
        return j.tweens.push(d),
        d
      },
      stop: function(b) {
        var c = 0,
        d = b ? j.tweens.length: 0;
        if (e) return this;
        for (e = !0; d > c; c++) j.tweens[c].run(1);
        return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]),
        this
      }
    }),
    k = j.props;
    for (L(k, j.opts.specialEasing); g > f; f++) if (d = sc[f].call(j, a, k, j.opts)) return d;
    return eb.map(k, J, j),
    eb.isFunction(j.opts.start) && j.opts.start.call(a, j),
    eb.fx.timer(eb.extend(i, {
      elem: a,
      anim: j,
      queue: j.opts.queue
    })),
    j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
  }
  function N(a) {
    return function(b, c) {
      "string" != typeof b && (c = b, b = "*");
      var d, e = 0,
      f = b.toLowerCase().match(tb) || [];
      if (eb.isFunction(c)) for (; d = f[e++];)"+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
    }
  }
  function O(a, b, c, d) {
    function e(h) {
      var i;
      return f[h] = !0,
      eb.each(a[h] || [],
      function(a, h) {
        var j = h(b, c, d);
        return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j), e(j), !1)
      }),
      i
    }
    var f = {},
    g = a === Rc;
    return e(b.dataTypes[0]) || !f["*"] && e("*")
  }
  function P(a, b) {
    var c, d, e = eb.ajaxSettings.flatOptions || {};
    for (d in b) void 0 !== b[d] && ((e[d] ? a: c || (c = {}))[d] = b[d]);
    return c && eb.extend(!0, a, c),
    a
  }
  function Q(a, b, c) {
    for (var d, e, f, g, h = a.contents,
    i = a.dataTypes;
    "*" === i[0];) i.shift(),
    void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
    if (e) for (g in h) if (h[g] && h[g].test(e)) {
      i.unshift(g);
      break
    }
    if (i[0] in c) f = i[0];
    else {
      for (g in c) {
        if (!i[0] || a.converters[g + " " + i[0]]) {
          f = g;
          break
        }
        d || (d = g)
      }
      f = f || d
    }
    return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
  }
  function R(a, b, c, d) {
    var e, f, g, h, i, j = {},
    k = a.dataTypes.slice();
    if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
    for (f = k.shift(); f;) if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i;
    else if ("*" !== i && i !== f) {
      if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
        g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
        break
      }
      if (g !== !0) if (g && a["throws"]) b = g(b);
      else try {
        b = g(b)
      } catch(l) {
        return {
          state: "parsererror",
          error: g ? l: "No conversion from " + i + " to " + f
        }
      }
    }
    return {
      state: "success",
      data: b
    }
  }
  function S(a, b, c, d) {
    var e;
    if (eb.isArray(b)) eb.each(b,
    function(b, e) {
      c || Vc.test(a) ? d(a, e) : S(a + "[" + ("object" == typeof e ? b: "") + "]", e, c, d)
    });
    else if (c || "object" !== eb.type(b)) d(a, b);
    else for (e in b) S(a + "[" + e + "]", b[e], c, d)
  }
  function T() {
    try {
      return new a.XMLHttpRequest
    } catch(b) {}
  }
  function U() {
    try {
      return new a.ActiveXObject("Microsoft.XMLHTTP")
    } catch(b) {}
  }
  function V(a) {
    return eb.isWindow(a) ? a: 9 === a.nodeType ? a.defaultView || a.parentWindow: !1
  }
  var W = [],
  X = W.slice,
  Y = W.concat,
  Z = W.push,
  $ = W.indexOf,
  _ = {},
  ab = _.toString,
  bb = _.hasOwnProperty,
  cb = {},
  db = "1.11.1",
  eb = function(a, b) {
    return new eb.fn.init(a, b)
  },
  fb = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
  gb = /^-ms-/,
  hb = /-([\da-z])/gi,
  ib = function(a, b) {
    return b.toUpperCase()
  };
  eb.fn = eb.prototype = {
    jquery: db,
    constructor: eb,
    selector: "",
    length: 0,
    toArray: function() {
      return X.call(this)
    },
    get: function(a) {
      return null != a ? 0 > a ? this[a + this.length] : this[a] : X.call(this)
    },
    pushStack: function(a) {
      var b = eb.merge(this.constructor(), a);
      return b.prevObject = this,
      b.context = this.context,
      b
    },
    each: function(a, b) {
      return eb.each(this, a, b)
    },
    map: function(a) {
      return this.pushStack(eb.map(this,
      function(b, c) {
        return a.call(b, c, b)
      }))
    },
    slice: function() {
      return this.pushStack(X.apply(this, arguments))
    },
    first: function() {
      return this.eq(0)
    },
    last: function() {
      return this.eq( - 1)
    },
    eq: function(a) {
      var b = this.length,
      c = +a + (0 > a ? b: 0);
      return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
    },
    end: function() {
      return this.prevObject || this.constructor(null)
    },
    push: Z,
    sort: W.sort,
    splice: W.splice
  },
  eb.extend = eb.fn.extend = function() {
    var a, b, c, d, e, f, g = arguments[0] || {},
    h = 1,
    i = arguments.length,
    j = !1;
    for ("boolean" == typeof g && (j = g, g = arguments[h] || {},
    h++), "object" == typeof g || eb.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++) if (null != (e = arguments[h])) for (d in e) a = g[d],
    c = e[d],
    g !== c && (j && c && (eb.isPlainObject(c) || (b = eb.isArray(c))) ? (b ? (b = !1, f = a && eb.isArray(a) ? a: []) : f = a && eb.isPlainObject(a) ? a: {},
    g[d] = eb.extend(j, f, c)) : void 0 !== c && (g[d] = c));
    return g
  },
  eb.extend({
    expando: "jQuery" + (db + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function(a) {
      throw new Error(a)
    },
    noop: function() {},
    isFunction: function(a) {
      return "function" === eb.type(a)
    },
    isArray: Array.isArray ||
    function(a) {
      return "array" === eb.type(a)
    },
    isWindow: function(a) {
      return null != a && a == a.window
    },
    isNumeric: function(a) {
      return ! eb.isArray(a) && a - parseFloat(a) >= 0
    },
    isEmptyObject: function(a) {
      var b;
      for (b in a) return ! 1;
      return ! 0
    },
    isPlainObject: function(a) {
      var b;
      if (!a || "object" !== eb.type(a) || a.nodeType || eb.isWindow(a)) return ! 1;
      try {
        if (a.constructor && !bb.call(a, "constructor") && !bb.call(a.constructor.prototype, "isPrototypeOf")) return ! 1
      } catch(c) {
        return ! 1
      }
      if (cb.ownLast) for (b in a) return bb.call(a, b);
      for (b in a);
      return void 0 === b || bb.call(a, b)
    },
    type: function(a) {
      return null == a ? a + "": "object" == typeof a || "function" == typeof a ? _[ab.call(a)] || "object": typeof a
    },
    globalEval: function(b) {
      b && eb.trim(b) && (a.execScript ||
      function(b) {
        a.eval.call(a, b)
      })(b)
    },
    camelCase: function(a) {
      return a.replace(gb, "ms-").replace(hb, ib)
    },
    nodeName: function(a, b) {
      return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
    },
    each: function(a, b, d) {
      var e, f = 0,
      g = a.length,
      h = c(a);
      if (d) {
        if (h) for (; g > f && (e = b.apply(a[f], d), e !== !1); f++);
        else for (f in a) if (e = b.apply(a[f], d), e === !1) break
      } else if (h) for (; g > f && (e = b.call(a[f], f, a[f]), e !== !1); f++);
      else for (f in a) if (e = b.call(a[f], f, a[f]), e === !1) break;
      return a
    },
    trim: function(a) {
      return null == a ? "": (a + "").replace(fb, "")
    },
    makeArray: function(a, b) {
      var d = b || [];
      return null != a && (c(Object(a)) ? eb.merge(d, "string" == typeof a ? [a] : a) : Z.call(d, a)),
      d
    },
    inArray: function(a, b, c) {
      var d;
      if (b) {
        if ($) return $.call(b, a, c);
        for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c: 0; d > c; c++) if (c in b && b[c] === a) return c
      }
      return - 1
    },
    merge: function(a, b) {
      for (var c = +b.length,
      d = 0,
      e = a.length; c > d;) a[e++] = b[d++];
      if (c !== c) for (; void 0 !== b[d];) a[e++] = b[d++];
      return a.length = e,
      a
    },
    grep: function(a, b, c) {
      for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f),
      d !== h && e.push(a[f]);
      return e
    },
    map: function(a, b, d) {
      var e, f = 0,
      g = a.length,
      h = c(a),
      i = [];
      if (h) for (; g > f; f++) e = b(a[f], f, d),
      null != e && i.push(e);
      else for (f in a) e = b(a[f], f, d),
      null != e && i.push(e);
      return Y.apply([], i)
    },
    guid: 1,
    proxy: function(a, b) {
      var c, d, e;
      return "string" == typeof b && (e = a[b], b = a, a = e),
      eb.isFunction(a) ? (c = X.call(arguments, 2), d = function() {
        return a.apply(b || this, c.concat(X.call(arguments)))
      },
      d.guid = a.guid = a.guid || eb.guid++, d) : void 0
    },
    now: function() {
      return + new Date
    },
    support: cb
  }),
  eb.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),
  function(a, b) {
    _["[object " + b + "]"] = b.toLowerCase()
  });
  var jb = function(a) {
    function b(a, b, c, d) {
      var e, f, g, h, i, j, l, n, o, p;
      if ((b ? b.ownerDocument || b: O) !== G && F(b), b = b || G, c = c || [], !a || "string" != typeof a) return c;
      if (1 !== (h = b.nodeType) && 9 !== h) return [];
      if (I && !d) {
        if (e = sb.exec(a)) if (g = e[1]) {
          if (9 === h) {
            if (f = b.getElementById(g), !f || !f.parentNode) return c;
            if (f.id === g) return c.push(f),
            c
          } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && M(b, f) && f.id === g) return c.push(f),
          c
        } else {
          if (e[2]) return _.apply(c, b.getElementsByTagName(a)),
          c;
          if ((g = e[3]) && v.getElementsByClassName && b.getElementsByClassName) return _.apply(c, b.getElementsByClassName(g)),
          c
        }
        if (v.qsa && (!J || !J.test(a))) {
          if (n = l = N, o = b, p = 9 === h && a, 1 === h && "object" !== b.nodeName.toLowerCase()) {
            for (j = z(a), (l = b.getAttribute("id")) ? n = l.replace(ub, "\\$&") : b.setAttribute("id", n), n = "[id='" + n + "'] ", i = j.length; i--;) j[i] = n + m(j[i]);
            o = tb.test(a) && k(b.parentNode) || b,
            p = j.join(",")
          }
          if (p) try {
            return _.apply(c, o.querySelectorAll(p)),
            c
          } catch(q) {} finally {
            l || b.removeAttribute("id")
          }
        }
      }
      return B(a.replace(ib, "$1"), b, c, d)
    }
    function c() {
      function a(c, d) {
        return b.push(c + " ") > w.cacheLength && delete a[b.shift()],
        a[c + " "] = d
      }
      var b = [];
      return a
    }
    function d(a) {
      return a[N] = !0,
      a
    }
    function e(a) {
      var b = G.createElement("div");
      try {
        return !! a(b)
      } catch(c) {
        return ! 1
      } finally {
        b.parentNode && b.parentNode.removeChild(b),
        b = null
      }
    }
    function f(a, b) {
      for (var c = a.split("|"), d = a.length; d--;) w.attrHandle[c[d]] = b
    }
    function g(a, b) {
      var c = b && a,
      d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || W) - (~a.sourceIndex || W);
      if (d) return d;
      if (c) for (; c = c.nextSibling;) if (c === b) return - 1;
      return a ? 1 : -1
    }
    function h(a) {
      return function(b) {
        var c = b.nodeName.toLowerCase();
        return "input" === c && b.type === a
      }
    }
    function i(a) {
      return function(b) {
        var c = b.nodeName.toLowerCase();
        return ("input" === c || "button" === c) && b.type === a
      }
    }
    function j(a) {
      return d(function(b) {
        return b = +b,
        d(function(c, d) {
          for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
        })
      })
    }
    function k(a) {
      return a && typeof a.getElementsByTagName !== V && a
    }
    function l() {}
    function m(a) {
      for (var b = 0,
      c = a.length,
      d = ""; c > b; b++) d += a[b].value;
      return d
    }
    function n(a, b, c) {
      var d = b.dir,
      e = c && "parentNode" === d,
      f = Q++;
      return b.first ?
      function(b, c, f) {
        for (; b = b[d];) if (1 === b.nodeType || e) return a(b, c, f)
      }: function(b, c, g) {
        var h, i, j = [P, f];
        if (g) {
          for (; b = b[d];) if ((1 === b.nodeType || e) && a(b, c, g)) return ! 0
        } else for (; b = b[d];) if (1 === b.nodeType || e) {
          if (i = b[N] || (b[N] = {}), (h = i[d]) && h[0] === P && h[1] === f) return j[2] = h[2];
          if (i[d] = j, j[2] = a(b, c, g)) return ! 0
        }
      }
    }
    function o(a) {
      return a.length > 1 ?
      function(b, c, d) {
        for (var e = a.length; e--;) if (!a[e](b, c, d)) return ! 1;
        return ! 0
      }: a[0]
    }
    function p(a, c, d) {
      for (var e = 0,
      f = c.length; f > e; e++) b(a, c[e], d);
      return d
    }
    function q(a, b, c, d, e) {
      for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
      return g
    }
    function r(a, b, c, e, f, g) {
      return e && !e[N] && (e = r(e)),
      f && !f[N] && (f = r(f, g)),
      d(function(d, g, h, i) {
        var j, k, l, m = [],
        n = [],
        o = g.length,
        r = d || p(b || "*", h.nodeType ? [h] : h, []),
        s = !a || !d && b ? r: q(r, m, a, h, i),
        t = c ? f || (d ? a: o || e) ? [] : g: s;
        if (c && c(s, t, h, i), e) for (j = q(t, n), e(j, [], h, i), k = j.length; k--;)(l = j[k]) && (t[n[k]] = !(s[n[k]] = l));
        if (d) {
          if (f || a) {
            if (f) {
              for (j = [], k = t.length; k--;)(l = t[k]) && j.push(s[k] = l);
              f(null, t = [], j, i)
            }
            for (k = t.length; k--;)(l = t[k]) && (j = f ? bb.call(d, l) : m[k]) > -1 && (d[j] = !(g[j] = l))
          }
        } else t = q(t === g ? t.splice(o, t.length) : t),
        f ? f(null, g, t, i) : _.apply(g, t)
      })
    }
    function s(a) {
      for (var b, c, d, e = a.length,
      f = w.relative[a[0].type], g = f || w.relative[" "], h = f ? 1 : 0, i = n(function(a) {
        return a === b
      },
      g, !0), j = n(function(a) {
        return bb.call(b, a) > -1
      },
      g, !0), k = [function(a, c, d) {
        return ! f && (d || c !== C) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d))
      }]; e > h; h++) if (c = w.relative[a[h].type]) k = [n(o(k), c)];
      else {
        if (c = w.filter[a[h].type].apply(null, a[h].matches), c[N]) {
          for (d = ++h; e > d && !w.relative[a[d].type]; d++);
          return r(h > 1 && o(k), h > 1 && m(a.slice(0, h - 1).concat({
            value: " " === a[h - 2].type ? "*": ""
          })).replace(ib, "$1"), c, d > h && s(a.slice(h, d)), e > d && s(a = a.slice(d)), e > d && m(a))
        }
        k.push(c)
      }
      return o(k)
    }
    function t(a, c) {
      var e = c.length > 0,
      f = a.length > 0,
      g = function(d, g, h, i, j) {
        var k, l, m, n = 0,
        o = "0",
        p = d && [],
        r = [],
        s = C,
        t = d || f && w.find.TAG("*", j),
        u = P += null == s ? 1 : Math.random() || .1,
        v = t.length;
        for (j && (C = g !== G && g); o !== v && null != (k = t[o]); o++) {
          if (f && k) {
            for (l = 0; m = a[l++];) if (m(k, g, h)) {
              i.push(k);
              break
            }
            j && (P = u)
          }
          e && ((k = !m && k) && n--, d && p.push(k))
        }
        if (n += o, e && o !== n) {
          for (l = 0; m = c[l++];) m(p, r, g, h);
          if (d) {
            if (n > 0) for (; o--;) p[o] || r[o] || (r[o] = Z.call(i));
            r = q(r)
          }
          _.apply(i, r),
          j && !d && r.length > 0 && n + c.length > 1 && b.uniqueSort(i)
        }
        return j && (P = u, C = s),
        p
      };
      return e ? d(g) : g
    }
    var u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = "sizzle" + -new Date,
    O = a.document,
    P = 0,
    Q = 0,
    R = c(),
    S = c(),
    T = c(),
    U = function(a, b) {
      return a === b && (E = !0),
      0
    },
    V = "undefined",
    W = 1 << 31,
    X = {}.hasOwnProperty,
    Y = [],
    Z = Y.pop,
    $ = Y.push,
    _ = Y.push,
    ab = Y.slice,
    bb = Y.indexOf ||
    function(a) {
      for (var b = 0,
      c = this.length; c > b; b++) if (this[b] === a) return b;
      return - 1
    },
    cb = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
    db = "[\\x20\\t\\r\\n\\f]",
    eb = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
    fb = eb.replace("w", "w#"),
    gb = "\\[" + db + "*(" + eb + ")(?:" + db + "*([*^$|!~]?=)" + db + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + fb + "))|)" + db + "*\\]",
    hb = ":(" + eb + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + gb + ")*)|.*)\\)|)",
    ib = new RegExp("^" + db + "+|((?:^|[^\\\\])(?:\\\\.)*)" + db + "+$", "g"),
    jb = new RegExp("^" + db + "*," + db + "*"),
    kb = new RegExp("^" + db + "*([>+~]|" + db + ")" + db + "*"),
    lb = new RegExp("=" + db + "*([^\\]'\"]*?)" + db + "*\\]", "g"),
    mb = new RegExp(hb),
    nb = new RegExp("^" + fb + "$"),
    ob = {
      ID: new RegExp("^#(" + eb + ")"),
      CLASS: new RegExp("^\\.(" + eb + ")"),
      TAG: new RegExp("^(" + eb.replace("w", "w*") + ")"),
      ATTR: new RegExp("^" + gb),
      PSEUDO: new RegExp("^" + hb),
      CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + db + "*(even|odd|(([+-]|)(\\d*)n|)" + db + "*(?:([+-]|)" + db + "*(\\d+)|))" + db + "*\\)|)", "i"),
      bool: new RegExp("^(?:" + cb + ")$", "i"),
      needsContext: new RegExp("^" + db + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + db + "*((?:-\\d)?\\d*)" + db + "*\\)|)(?=[^-]|$)", "i")
    },
    pb = /^(?:input|select|textarea|button)$/i,
    qb = /^h\d$/i,
    rb = /^[^{]+\{\s*\[native \w/,
    sb = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
    tb = /[+~]/,
    ub = /'|\\/g,
    vb = new RegExp("\\\\([\\da-f]{1,6}" + db + "?|(" + db + ")|.)", "ig"),
    wb = function(a, b, c) {
      var d = "0x" + b - 65536;
      return d !== d || c ? b: 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
    };
    try {
      _.apply(Y = ab.call(O.childNodes), O.childNodes),
      Y[O.childNodes.length].nodeType
    } catch(xb) {
      _ = {
        apply: Y.length ?
        function(a, b) {
          $.apply(a, ab.call(b))
        }: function(a, b) {
          for (var c = a.length,
          d = 0; a[c++] = b[d++];);
          a.length = c - 1
        }
      }
    }
    v = b.support = {},
    y = b.isXML = function(a) {
      var b = a && (a.ownerDocument || a).documentElement;
      return b ? "HTML" !== b.nodeName: !1
    },
    F = b.setDocument = function(a) {
      var b, c = a ? a.ownerDocument || a: O,
      d = c.defaultView;
      return c !== G && 9 === c.nodeType && c.documentElement ? (G = c, H = c.documentElement, I = !y(c), d && d !== d.top && (d.addEventListener ? d.addEventListener("unload",
      function() {
        F()
      },
      !1) : d.attachEvent && d.attachEvent("onunload",
      function() {
        F()
      })), v.attributes = e(function(a) {
        return a.className = "i",
        !a.getAttribute("className")
      }), v.getElementsByTagName = e(function(a) {
        return a.appendChild(c.createComment("")),
        !a.getElementsByTagName("*").length
      }), v.getElementsByClassName = rb.test(c.getElementsByClassName) && e(function(a) {
        return a.innerHTML = "<div class='a'></div><div class='a i'></div>",
        a.firstChild.className = "i",
        2 === a.getElementsByClassName("i").length
      }), v.getById = e(function(a) {
        return H.appendChild(a).id = N,
        !c.getElementsByName || !c.getElementsByName(N).length
      }), v.getById ? (w.find.ID = function(a, b) {
        if (typeof b.getElementById !== V && I) {
          var c = b.getElementById(a);
          return c && c.parentNode ? [c] : []
        }
      },
      w.filter.ID = function(a) {
        var b = a.replace(vb, wb);
        return function(a) {
          return a.getAttribute("id") === b
        }
      }) : (delete w.find.ID, w.filter.ID = function(a) {
        var b = a.replace(vb, wb);
        return function(a) {
          var c = typeof a.getAttributeNode !== V && a.getAttributeNode("id");
          return c && c.value === b
        }
      }), w.find.TAG = v.getElementsByTagName ?
      function(a, b) {
        return typeof b.getElementsByTagName !== V ? b.getElementsByTagName(a) : void 0
      }: function(a, b) {
        var c, d = [],
        e = 0,
        f = b.getElementsByTagName(a);
        if ("*" === a) {
          for (; c = f[e++];) 1 === c.nodeType && d.push(c);
          return d
        }
        return f
      },
      w.find.CLASS = v.getElementsByClassName &&
      function(a, b) {
        return typeof b.getElementsByClassName !== V && I ? b.getElementsByClassName(a) : void 0
      },
      K = [], J = [], (v.qsa = rb.test(c.querySelectorAll)) && (e(function(a) {
        a.innerHTML = "<select msallowclip=''><option selected=''></option></select>",
        a.querySelectorAll("[msallowclip^='']").length && J.push("[*^$]=" + db + "*(?:''|\"\")"),
        a.querySelectorAll("[selected]").length || J.push("\\[" + db + "*(?:value|" + cb + ")"),
        a.querySelectorAll(":checked").length || J.push(":checked")
      }), e(function(a) {
        var b = c.createElement("input");
        b.setAttribute("type", "hidden"),
        a.appendChild(b).setAttribute("name", "D"),
        a.querySelectorAll("[name=d]").length && J.push("name" + db + "*[*^$|!~]?="),
        a.querySelectorAll(":enabled").length || J.push(":enabled", ":disabled"),
        a.querySelectorAll("*,:x"),
        J.push(",.*:")
      })), (v.matchesSelector = rb.test(L = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && e(function(a) {
        v.disconnectedMatch = L.call(a, "div"),
        L.call(a, "[s!='']:x"),
        K.push("!=", hb)
      }), J = J.length && new RegExp(J.join("|")), K = K.length && new RegExp(K.join("|")), b = rb.test(H.compareDocumentPosition), M = b || rb.test(H.contains) ?
      function(a, b) {
        var c = 9 === a.nodeType ? a.documentElement: a,
        d = b && b.parentNode;
        return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
      }: function(a, b) {
        if (b) for (; b = b.parentNode;) if (b === a) return ! 0;
        return ! 1
      },
      U = b ?
      function(a, b) {
        if (a === b) return E = !0,
        0;
        var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
        return d ? d: (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !v.sortDetached && b.compareDocumentPosition(a) === d ? a === c || a.ownerDocument === O && M(O, a) ? -1 : b === c || b.ownerDocument === O && M(O, b) ? 1 : D ? bb.call(D, a) - bb.call(D, b) : 0 : 4 & d ? -1 : 1)
      }: function(a, b) {
        if (a === b) return E = !0,
        0;
        var d, e = 0,
        f = a.parentNode,
        h = b.parentNode,
        i = [a],
        j = [b];
        if (!f || !h) return a === c ? -1 : b === c ? 1 : f ? -1 : h ? 1 : D ? bb.call(D, a) - bb.call(D, b) : 0;
        if (f === h) return g(a, b);
        for (d = a; d = d.parentNode;) i.unshift(d);
        for (d = b; d = d.parentNode;) j.unshift(d);
        for (; i[e] === j[e];) e++;
        return e ? g(i[e], j[e]) : i[e] === O ? -1 : j[e] === O ? 1 : 0
      },
      c) : G
    },
    b.matches = function(a, c) {
      return b(a, null, null, c)
    },
    b.matchesSelector = function(a, c) {
      if ((a.ownerDocument || a) !== G && F(a), c = c.replace(lb, "='$1']"), !(!v.matchesSelector || !I || K && K.test(c) || J && J.test(c))) try {
        var d = L.call(a, c);
        if (d || v.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
      } catch(e) {}
      return b(c, G, null, [a]).length > 0
    },
    b.contains = function(a, b) {
      return (a.ownerDocument || a) !== G && F(a),
      M(a, b)
    },
    b.attr = function(a, b) { (a.ownerDocument || a) !== G && F(a);
      var c = w.attrHandle[b.toLowerCase()],
      d = c && X.call(w.attrHandle, b.toLowerCase()) ? c(a, b, !I) : void 0;
      return void 0 !== d ? d: v.attributes || !I ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value: null
    },
    b.error = function(a) {
      throw new Error("Syntax error, unrecognized expression: " + a)
    },
    b.uniqueSort = function(a) {
      var b, c = [],
      d = 0,
      e = 0;
      if (E = !v.detectDuplicates, D = !v.sortStable && a.slice(0), a.sort(U), E) {
        for (; b = a[e++];) b === a[e] && (d = c.push(e));
        for (; d--;) a.splice(c[d], 1)
      }
      return D = null,
      a
    },
    x = b.getText = function(a) {
      var b, c = "",
      d = 0,
      e = a.nodeType;
      if (e) {
        if (1 === e || 9 === e || 11 === e) {
          if ("string" == typeof a.textContent) return a.textContent;
          for (a = a.firstChild; a; a = a.nextSibling) c += x(a)
        } else if (3 === e || 4 === e) return a.nodeValue
      } else for (; b = a[d++];) c += x(b);
      return c
    },
    w = b.selectors = {
      cacheLength: 50,
      createPseudo: d,
      match: ob,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: !0
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: !0
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        ATTR: function(a) {
          return a[1] = a[1].replace(vb, wb),
          a[3] = (a[3] || a[4] || a[5] || "").replace(vb, wb),
          "~=" === a[2] && (a[3] = " " + a[3] + " "),
          a.slice(0, 4)
        },
        CHILD: function(a) {
          return a[1] = a[1].toLowerCase(),
          "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]),
          a
        },
        PSEUDO: function(a) {
          var b, c = !a[6] && a[2];
          return ob.CHILD.test(a[0]) ? null: (a[3] ? a[2] = a[4] || a[5] || "": c && mb.test(c) && (b = z(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
        }
      },
      filter: {
        TAG: function(a) {
          var b = a.replace(vb, wb).toLowerCase();
          return "*" === a ?
          function() {
            return ! 0
          }: function(a) {
            return a.nodeName && a.nodeName.toLowerCase() === b
          }
        },
        CLASS: function(a) {
          var b = R[a + " "];
          return b || (b = new RegExp("(^|" + db + ")" + a + "(" + db + "|$)")) && R(a,
          function(a) {
            return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== V && a.getAttribute("class") || "")
          })
        },
        ATTR: function(a, c, d) {
          return function(e) {
            var f = b.attr(e, a);
            return null == f ? "!=" === c: c ? (f += "", "=" === c ? f === d: "!=" === c ? f !== d: "^=" === c ? d && 0 === f.indexOf(d) : "*=" === c ? d && f.indexOf(d) > -1 : "$=" === c ? d && f.slice( - d.length) === d: "~=" === c ? (" " + f + " ").indexOf(d) > -1 : "|=" === c ? f === d || f.slice(0, d.length + 1) === d + "-": !1) : !0
          }
        },
        CHILD: function(a, b, c, d, e) {
          var f = "nth" !== a.slice(0, 3),
          g = "last" !== a.slice( - 4),
          h = "of-type" === b;
          return 1 === d && 0 === e ?
          function(a) {
            return !! a.parentNode
          }: function(b, c, i) {
            var j, k, l, m, n, o, p = f !== g ? "nextSibling": "previousSibling",
            q = b.parentNode,
            r = h && b.nodeName.toLowerCase(),
            s = !i && !h;
            if (q) {
              if (f) {
                for (; p;) {
                  for (l = b; l = l[p];) if (h ? l.nodeName.toLowerCase() === r: 1 === l.nodeType) return ! 1;
                  o = p = "only" === a && !o && "nextSibling"
                }
                return ! 0
              }
              if (o = [g ? q.firstChild: q.lastChild], g && s) {
                for (k = q[N] || (q[N] = {}), j = k[a] || [], n = j[0] === P && j[1], m = j[0] === P && j[2], l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop();) if (1 === l.nodeType && ++m && l === b) {
                  k[a] = [P, n, m];
                  break
                }
              } else if (s && (j = (b[N] || (b[N] = {}))[a]) && j[0] === P) m = j[1];
              else for (; (l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r: 1 !== l.nodeType) || !++m || (s && ((l[N] || (l[N] = {}))[a] = [P, m]), l !== b)););
              return m -= e,
              m === d || m % d === 0 && m / d >= 0
            }
          }
        },
        PSEUDO: function(a, c) {
          var e, f = w.pseudos[a] || w.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
          return f[N] ? f(c) : f.length > 1 ? (e = [a, a, "", c], w.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function(a, b) {
            for (var d, e = f(a, c), g = e.length; g--;) d = bb.call(a, e[g]),
            a[d] = !(b[d] = e[g])
          }) : function(a) {
            return f(a, 0, e)
          }) : f
        }
      },
      pseudos: {
        not: d(function(a) {
          var b = [],
          c = [],
          e = A(a.replace(ib, "$1"));
          return e[N] ? d(function(a, b, c, d) {
            for (var f, g = e(a, null, d, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f))
          }) : function(a, d, f) {
            return b[0] = a,
            e(b, null, f, c),
            !c.pop()
          }
        }),
        has: d(function(a) {
          return function(c) {
            return b(a, c).length > 0
          }
        }),
        contains: d(function(a) {
          return function(b) {
            return (b.textContent || b.innerText || x(b)).indexOf(a) > -1
          }
        }),
        lang: d(function(a) {
          return nb.test(a || "") || b.error("unsupported lang: " + a),
          a = a.replace(vb, wb).toLowerCase(),
          function(b) {
            var c;
            do
            if (c = I ? b.lang: b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(),
            c === a || 0 === c.indexOf(a + "-");
            while ((b = b.parentNode) && 1 === b.nodeType);
            return ! 1
          }
        }),
        target: function(b) {
          var c = a.location && a.location.hash;
          return c && c.slice(1) === b.id
        },
        root: function(a) {
          return a === H
        },
        focus: function(a) {
          return a === G.activeElement && (!G.hasFocus || G.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
        },
        enabled: function(a) {
          return a.disabled === !1
        },
        disabled: function(a) {
          return a.disabled === !0
        },
        checked: function(a) {
          var b = a.nodeName.toLowerCase();
          return "input" === b && !!a.checked || "option" === b && !!a.selected
        },
        selected: function(a) {
          return a.parentNode && a.parentNode.selectedIndex,
          a.selected === !0
        },
        empty: function(a) {
          for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeType < 6) return ! 1;
          return ! 0
        },
        parent: function(a) {
          return ! w.pseudos.empty(a)
        },
        header: function(a) {
          return qb.test(a.nodeName)
        },
        input: function(a) {
          return pb.test(a.nodeName)
        },
        button: function(a) {
          var b = a.nodeName.toLowerCase();
          return "input" === b && "button" === a.type || "button" === b
        },
        text: function(a) {
          var b;
          return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
        },
        first: j(function() {
          return [0]
        }),
        last: j(function(a, b) {
          return [b - 1]
        }),
        eq: j(function(a, b, c) {
          return [0 > c ? c + b: c]
        }),
        even: j(function(a, b) {
          for (var c = 0; b > c; c += 2) a.push(c);
          return a
        }),
        odd: j(function(a, b) {
          for (var c = 1; b > c; c += 2) a.push(c);
          return a
        }),
        lt: j(function(a, b, c) {
          for (var d = 0 > c ? c + b: c; --d >= 0;) a.push(d);
          return a
        }),
        gt: j(function(a, b, c) {
          for (var d = 0 > c ? c + b: c; ++d < b;) a.push(d);
          return a
        })
      }
    },
    w.pseudos.nth = w.pseudos.eq;
    for (u in {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0
    }) w.pseudos[u] = h(u);
    for (u in {
      submit: !0,
      reset: !0
    }) w.pseudos[u] = i(u);
    return l.prototype = w.filters = w.pseudos,
    w.setFilters = new l,
    z = b.tokenize = function(a, c) {
      var d, e, f, g, h, i, j, k = S[a + " "];
      if (k) return c ? 0 : k.slice(0);
      for (h = a, i = [], j = w.preFilter; h;) { (!d || (e = jb.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])),
        d = !1,
        (e = kb.exec(h)) && (d = e.shift(), f.push({
          value: d,
          type: e[0].replace(ib, " ")
        }), h = h.slice(d.length));
        for (g in w.filter) ! (e = ob[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), f.push({
          value: d,
          type: g,
          matches: e
        }), h = h.slice(d.length));
        if (!d) break
      }
      return c ? h.length: h ? b.error(a) : S(a, i).slice(0)
    },
    A = b.compile = function(a, b) {
      var c, d = [],
      e = [],
      f = T[a + " "];
      if (!f) {
        for (b || (b = z(a)), c = b.length; c--;) f = s(b[c]),
        f[N] ? d.push(f) : e.push(f);
        f = T(a, t(e, d)),
        f.selector = a
      }
      return f
    },
    B = b.select = function(a, b, c, d) {
      var e, f, g, h, i, j = "function" == typeof a && a,
      l = !d && z(a = j.selector || a);
      if (c = c || [], 1 === l.length) {
        if (f = l[0] = l[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && v.getById && 9 === b.nodeType && I && w.relative[f[1].type]) {
          if (b = (w.find.ID(g.matches[0].replace(vb, wb), b) || [])[0], !b) return c;
          j && (b = b.parentNode),
          a = a.slice(f.shift().value.length)
        }
        for (e = ob.needsContext.test(a) ? 0 : f.length; e--&&(g = f[e], !w.relative[h = g.type]);) if ((i = w.find[h]) && (d = i(g.matches[0].replace(vb, wb), tb.test(f[0].type) && k(b.parentNode) || b))) {
          if (f.splice(e, 1), a = d.length && m(f), !a) return _.apply(c, d),
          c;
          break
        }
      }
      return (j || A(a, l))(d, b, !I, c, tb.test(a) && k(b.parentNode) || b),
      c
    },
    v.sortStable = N.split("").sort(U).join("") === N,
    v.detectDuplicates = !!E,
    F(),
    v.sortDetached = e(function(a) {
      return 1 & a.compareDocumentPosition(G.createElement("div"))
    }),
    e(function(a) {
      return a.innerHTML = "<a href='#'></a>",
      "#" === a.firstChild.getAttribute("href")
    }) || f("type|href|height|width",
    function(a, b, c) {
      return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
    }),
    v.attributes && e(function(a) {
      return a.innerHTML = "<input/>",
      a.firstChild.setAttribute("value", ""),
      "" === a.firstChild.getAttribute("value")
    }) || f("value",
    function(a, b, c) {
      return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
    }),
    e(function(a) {
      return null == a.getAttribute("disabled")
    }) || f(cb,
    function(a, b, c) {
      var d;
      return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value: null
    }),
    b
  } (a);
  eb.find = jb,
  eb.expr = jb.selectors,
  eb.expr[":"] = eb.expr.pseudos,
  eb.unique = jb.uniqueSort,
  eb.text = jb.getText,
  eb.isXMLDoc = jb.isXML,
  eb.contains = jb.contains;
  var kb = eb.expr.match.needsContext,
  lb = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
  mb = /^.[^:#\[\.,]*$/;
  eb.filter = function(a, b, c) {
    var d = b[0];
    return c && (a = ":not(" + a + ")"),
    1 === b.length && 1 === d.nodeType ? eb.find.matchesSelector(d, a) ? [d] : [] : eb.find.matches(a, eb.grep(b,
    function(a) {
      return 1 === a.nodeType
    }))
  },
  eb.fn.extend({
    find: function(a) {
      var b, c = [],
      d = this,
      e = d.length;
      if ("string" != typeof a) return this.pushStack(eb(a).filter(function() {
        for (b = 0; e > b; b++) if (eb.contains(d[b], this)) return ! 0
      }));
      for (b = 0; e > b; b++) eb.find(a, d[b], c);
      return c = this.pushStack(e > 1 ? eb.unique(c) : c),
      c.selector = this.selector ? this.selector + " " + a: a,
      c
    },
    filter: function(a) {
      return this.pushStack(d(this, a || [], !1))
    },
    not: function(a) {
      return this.pushStack(d(this, a || [], !0))
    },
    is: function(a) {
      return !! d(this, "string" == typeof a && kb.test(a) ? eb(a) : a || [], !1).length
    }
  });
  var nb, ob = a.document,
  pb = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
  qb = eb.fn.init = function(a, b) {
    var c, d;
    if (!a) return this;
    if ("string" == typeof a) {
      if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : pb.exec(a), !c || !c[1] && b) return ! b || b.jquery ? (b || nb).find(a) : this.constructor(b).find(a);
      if (c[1]) {
        if (b = b instanceof eb ? b[0] : b, eb.merge(this, eb.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b: ob, !0)), lb.test(c[1]) && eb.isPlainObject(b)) for (c in b) eb.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
        return this
      }
      if (d = ob.getElementById(c[2]), d && d.parentNode) {
        if (d.id !== c[2]) return nb.find(a);
        this.length = 1,
        this[0] = d
      }
      return this.context = ob,
      this.selector = a,
      this
    }
    return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : eb.isFunction(a) ? "undefined" != typeof nb.ready ? nb.ready(a) : a(eb) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), eb.makeArray(a, this))
  };
  qb.prototype = eb.fn,
  nb = eb(ob);
  var rb = /^(?:parents|prev(?:Until|All))/,
  sb = {
    children: !0,
    contents: !0,
    next: !0,
    prev: !0
  };
  eb.extend({
    dir: function(a, b, c) {
      for (var d = [], e = a[b]; e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !eb(e).is(c));) 1 === e.nodeType && d.push(e),
      e = e[b];
      return d
    },
    sibling: function(a, b) {
      for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
      return c
    }
  }),
  eb.fn.extend({
    has: function(a) {
      var b, c = eb(a, this),
      d = c.length;
      return this.filter(function() {
        for (b = 0; d > b; b++) if (eb.contains(this, c[b])) return ! 0
      })
    },
    closest: function(a, b) {
      for (var c, d = 0,
      e = this.length,
      f = [], g = kb.test(a) || "string" != typeof a ? eb(a, b || this.context) : 0; e > d; d++) for (c = this[d]; c && c !== b; c = c.parentNode) if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && eb.find.matchesSelector(c, a))) {
        f.push(c);
        break
      }
      return this.pushStack(f.length > 1 ? eb.unique(f) : f)
    },
    index: function(a) {
      return a ? "string" == typeof a ? eb.inArray(this[0], eb(a)) : eb.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length: -1
    },
    add: function(a, b) {
      return this.pushStack(eb.unique(eb.merge(this.get(), eb(a, b))))
    },
    addBack: function(a) {
      return this.add(null == a ? this.prevObject: this.prevObject.filter(a))
    }
  }),
  eb.each({
    parent: function(a) {
      var b = a.parentNode;
      return b && 11 !== b.nodeType ? b: null
    },
    parents: function(a) {
      return eb.dir(a, "parentNode")
    },
    parentsUntil: function(a, b, c) {
      return eb.dir(a, "parentNode", c)
    },
    next: function(a) {
      return e(a, "nextSibling")
    },
    prev: function(a) {
      return e(a, "previousSibling")
    },
    nextAll: function(a) {
      return eb.dir(a, "nextSibling")
    },
    prevAll: function(a) {
      return eb.dir(a, "previousSibling")
    },
    nextUntil: function(a, b, c) {
      return eb.dir(a, "nextSibling", c)
    },
    prevUntil: function(a, b, c) {
      return eb.dir(a, "previousSibling", c)
    },
    siblings: function(a) {
      return eb.sibling((a.parentNode || {}).firstChild, a)
    },
    children: function(a) {
      return eb.sibling(a.firstChild)
    },
    contents: function(a) {
      return eb.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document: eb.merge([], a.childNodes)
    }
  },
  function(a, b) {
    eb.fn[a] = function(c, d) {
      var e = eb.map(this, b, c);
      return "Until" !== a.slice( - 5) && (d = c),
      d && "string" == typeof d && (e = eb.filter(d, e)),
      this.length > 1 && (sb[a] || (e = eb.unique(e)), rb.test(a) && (e = e.reverse())),
      this.pushStack(e)
    }
  });
  var tb = /\S+/g,
  ub = {};
  eb.Callbacks = function(a) {
    a = "string" == typeof a ? ub[a] || f(a) : eb.extend({},
    a);
    var b, c, d, e, g, h, i = [],
    j = !a.once && [],
    k = function(f) {
      for (c = a.memory && f, d = !0, g = h || 0, h = 0, e = i.length, b = !0; i && e > g; g++) if (i[g].apply(f[0], f[1]) === !1 && a.stopOnFalse) {
        c = !1;
        break
      }
      b = !1,
      i && (j ? j.length && k(j.shift()) : c ? i = [] : l.disable())
    },
    l = {
      add: function() {
        if (i) {
          var d = i.length; !
          function f(b) {
            eb.each(b,
            function(b, c) {
              var d = eb.type(c);
              "function" === d ? a.unique && l.has(c) || i.push(c) : c && c.length && "string" !== d && f(c)
            })
          } (arguments),
          b ? e = i.length: c && (h = d, k(c))
        }
        return this
      },
      remove: function() {
        return i && eb.each(arguments,
        function(a, c) {
          for (var d; (d = eb.inArray(c, i, d)) > -1;) i.splice(d, 1),
          b && (e >= d && e--, g >= d && g--)
        }),
        this
      },
      has: function(a) {
        return a ? eb.inArray(a, i) > -1 : !(!i || !i.length)
      },
      empty: function() {
        return i = [],
        e = 0,
        this
      },
      disable: function() {
        return i = j = c = void 0,
        this
      },
      disabled: function() {
        return ! i
      },
      lock: function() {
        return j = void 0,
        c || l.disable(),
        this
      },
      locked: function() {
        return ! j
      },
      fireWith: function(a, c) {
        return ! i || d && !j || (c = c || [], c = [a, c.slice ? c.slice() : c], b ? j.push(c) : k(c)),
        this
      },
      fire: function() {
        return l.fireWith(this, arguments),
        this
      },
      fired: function() {
        return !! d
      }
    };
    return l
  },
  eb.extend({
    Deferred: function(a) {
      var b = [["resolve", "done", eb.Callbacks("once memory"), "resolved"], ["reject", "fail", eb.Callbacks("once memory"), "rejected"], ["notify", "progress", eb.Callbacks("memory")]],
      c = "pending",
      d = {
        state: function() {
          return c
        },
        always: function() {
          return e.done(arguments).fail(arguments),
          this
        },
        then: function() {
          var a = arguments;
          return eb.Deferred(function(c) {
            eb.each(b,
            function(b, f) {
              var g = eb.isFunction(a[b]) && a[b];
              e[f[1]](function() {
                var a = g && g.apply(this, arguments);
                a && eb.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
              })
            }),
            a = null
          }).promise()
        },
        promise: function(a) {
          return null != a ? eb.extend(a, d) : d
        }
      },
      e = {};
      return d.pipe = d.then,
      eb.each(b,
      function(a, f) {
        var g = f[2],
        h = f[3];
        d[f[1]] = g.add,
        h && g.add(function() {
          c = h
        },
        b[1 ^ a][2].disable, b[2][2].lock),
        e[f[0]] = function() {
          return e[f[0] + "With"](this === e ? d: this, arguments),
          this
        },
        e[f[0] + "With"] = g.fireWith
      }),
      d.promise(e),
      a && a.call(e, e),
      e
    },
    when: function(a) {
      var b, c, d, e = 0,
      f = X.call(arguments),
      g = f.length,
      h = 1 !== g || a && eb.isFunction(a.promise) ? g: 0,
      i = 1 === h ? a: eb.Deferred(),
      j = function(a, c, d) {
        return function(e) {
          c[a] = this,
          d[a] = arguments.length > 1 ? X.call(arguments) : e,
          d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d)
        }
      };
      if (g > 1) for (b = new Array(g), c = new Array(g), d = new Array(g); g > e; e++) f[e] && eb.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
      return h || i.resolveWith(d, f),
      i.promise()
    }
  });
  var vb;
  eb.fn.ready = function(a) {
    return eb.ready.promise().done(a),
    this
  },
  eb.extend({
    isReady: !1,
    readyWait: 1,
    holdReady: function(a) {
      a ? eb.readyWait++:eb.ready(!0)
    },
    ready: function(a) {
      if (a === !0 ? !--eb.readyWait: !eb.isReady) {
        if (!ob.body) return setTimeout(eb.ready);
        eb.isReady = !0,
        a !== !0 && --eb.readyWait > 0 || (vb.resolveWith(ob, [eb]), eb.fn.triggerHandler && (eb(ob).triggerHandler("ready"), eb(ob).off("ready")))
      }
    }
  }),
  eb.ready.promise = function(b) {
    if (!vb) if (vb = eb.Deferred(), "complete" === ob.readyState) setTimeout(eb.ready);
    else if (ob.addEventListener) ob.addEventListener("DOMContentLoaded", h, !1),
    a.addEventListener("load", h, !1);
    else {
      ob.attachEvent("onreadystatechange", h),
      a.attachEvent("onload", h);
      var c = !1;
      try {
        c = null == a.frameElement && ob.documentElement
      } catch(d) {}
      c && c.doScroll && !
      function e() {
        if (!eb.isReady) {
          try {
            c.doScroll("left")
          } catch(a) {
            return setTimeout(e, 50)
          }
          g(),
          eb.ready()
        }
      } ()
    }
    return vb.promise(b)
  };
  var wb, xb = "undefined";
  for (wb in eb(cb)) break;
  cb.ownLast = "0" !== wb,
  cb.inlineBlockNeedsLayout = !1,
  eb(function() {
    var a, b, c, d;
    c = ob.getElementsByTagName("body")[0],
    c && c.style && (b = ob.createElement("div"), d = ob.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== xb && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", cb.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(d))
  }),
  function() {
    var a = ob.createElement("div");
    if (null == cb.deleteExpando) {
      cb.deleteExpando = !0;
      try {
        delete a.test
      } catch(b) {
        cb.deleteExpando = !1
      }
    }
    a = null
  } (),
  eb.acceptData = function(a) {
    var b = eb.noData[(a.nodeName + " ").toLowerCase()],
    c = +a.nodeType || 1;
    return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
  };
  var yb = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
  zb = /([A-Z])/g;
  eb.extend({
    cache: {},
    noData: {
      "applet ": !0,
      "embed ": !0,
      "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
    },
    hasData: function(a) {
      return a = a.nodeType ? eb.cache[a[eb.expando]] : a[eb.expando],
      !!a && !j(a)
    },
    data: function(a, b, c) {
      return k(a, b, c)
    },
    removeData: function(a, b) {
      return l(a, b)
    },
    _data: function(a, b, c) {
      return k(a, b, c, !0)
    },
    _removeData: function(a, b) {
      return l(a, b, !0)
    }
  }),
  eb.fn.extend({
    data: function(a, b) {
      var c, d, e, f = this[0],
      g = f && f.attributes;
      if (void 0 === a) {
        if (this.length && (e = eb.data(f), 1 === f.nodeType && !eb._data(f, "parsedAttrs"))) {
          for (c = g.length; c--;) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = eb.camelCase(d.slice(5)), i(f, d, e[d])));
          eb._data(f, "parsedAttrs", !0)
        }
        return e
      }
      return "object" == typeof a ? this.each(function() {
        eb.data(this, a)
      }) : arguments.length > 1 ? this.each(function() {
        eb.data(this, a, b)
      }) : f ? i(f, a, eb.data(f, a)) : void 0
    },
    removeData: function(a) {
      return this.each(function() {
        eb.removeData(this, a)
      })
    }
  }),
  eb.extend({
    queue: function(a, b, c) {
      var d;
      return a ? (b = (b || "fx") + "queue", d = eb._data(a, b), c && (!d || eb.isArray(c) ? d = eb._data(a, b, eb.makeArray(c)) : d.push(c)), d || []) : void 0
    },
    dequeue: function(a, b) {
      b = b || "fx";
      var c = eb.queue(a, b),
      d = c.length,
      e = c.shift(),
      f = eb._queueHooks(a, b),
      g = function() {
        eb.dequeue(a, b)
      };
      "inprogress" === e && (e = c.shift(), d--),
      e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)),
      !d && f && f.empty.fire()
    },
    _queueHooks: function(a, b) {
      var c = b + "queueHooks";
      return eb._data(a, c) || eb._data(a, c, {
        empty: eb.Callbacks("once memory").add(function() {
          eb._removeData(a, b + "queue"),
          eb._removeData(a, c)
        })
      })
    }
  }),
  eb.fn.extend({
    queue: function(a, b) {
      var c = 2;
      return "string" != typeof a && (b = a, a = "fx", c--),
      arguments.length < c ? eb.queue(this[0], a) : void 0 === b ? this: this.each(function() {
        var c = eb.queue(this, a, b);
        eb._queueHooks(this, a),
        "fx" === a && "inprogress" !== c[0] && eb.dequeue(this, a)
      })
    },
    dequeue: function(a) {
      return this.each(function() {
        eb.dequeue(this, a)
      })
    },
    clearQueue: function(a) {
      return this.queue(a || "fx", [])
    },
    promise: function(a, b) {
      var c, d = 1,
      e = eb.Deferred(),
      f = this,
      g = this.length,
      h = function() {--d || e.resolveWith(f, [f])
      };
      for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--;) c = eb._data(f[g], a + "queueHooks"),
      c && c.empty && (d++, c.empty.add(h));
      return h(),
      e.promise(b)
    }
  });
  var Ab = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
  Bb = ["Top", "Right", "Bottom", "Left"],
  Cb = function(a, b) {
    return a = b || a,
    "none" === eb.css(a, "display") || !eb.contains(a.ownerDocument, a)
  },
  Db = eb.access = function(a, b, c, d, e, f, g) {
    var h = 0,
    i = a.length,
    j = null == c;
    if ("object" === eb.type(c)) {
      e = !0;
      for (h in c) eb.access(a, b, h, c[h], !0, f, g)
    } else if (void 0 !== d && (e = !0, eb.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
      return j.call(eb(a), c)
    })), b)) for (; i > h; h++) b(a[h], c, g ? d: d.call(a[h], h, b(a[h], c)));
    return e ? a: j ? b.call(a) : i ? b(a[0], c) : f
  },
  Eb = /^(?:checkbox|radio)$/i; !
  function() {
    var a = ob.createElement("input"),
    b = ob.createElement("div"),
    c = ob.createDocumentFragment();
    if (b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", cb.leadingWhitespace = 3 === b.firstChild.nodeType, cb.tbody = !b.getElementsByTagName("tbody").length, cb.htmlSerialize = !!b.getElementsByTagName("link").length, cb.html5Clone = "<:nav></:nav>" !== ob.createElement("nav").cloneNode(!0).outerHTML, a.type = "checkbox", a.checked = !0, c.appendChild(a), cb.appendChecked = a.checked, b.innerHTML = "<textarea>x</textarea>", cb.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue, c.appendChild(b), b.innerHTML = "<input type='radio' checked='checked' name='t'/>", cb.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, cb.noCloneEvent = !0, b.attachEvent && (b.attachEvent("onclick",
    function() {
      cb.noCloneEvent = !1
    }), b.cloneNode(!0).click()), null == cb.deleteExpando) {
      cb.deleteExpando = !0;
      try {
        delete b.test
      } catch(d) {
        cb.deleteExpando = !1
      }
    }
  } (),
  function() {
    var b, c, d = ob.createElement("div");
    for (b in {
      submit: !0,
      change: !0,
      focusin: !0
    }) c = "on" + b,
    (cb[b + "Bubbles"] = c in a) || (d.setAttribute(c, "t"), cb[b + "Bubbles"] = d.attributes[c].expando === !1);
    d = null
  } ();
  var Fb = /^(?:input|select|textarea)$/i,
  Gb = /^key/,
  Hb = /^(?:mouse|pointer|contextmenu)|click/,
  Ib = /^(?:focusinfocus|focusoutblur)$/,
  Jb = /^([^.]*)(?:\.(.+)|)$/;
  eb.event = {
    global: {},
    add: function(a, b, c, d, e) {
      var f, g, h, i, j, k, l, m, n, o, p, q = eb._data(a);
      if (q) {
        for (c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = eb.guid++), (g = q.events) || (g = q.events = {}), (k = q.handle) || (k = q.handle = function(a) {
          return typeof eb === xb || a && eb.event.triggered === a.type ? void 0 : eb.event.dispatch.apply(k.elem, arguments)
        },
        k.elem = a), b = (b || "").match(tb) || [""], h = b.length; h--;) f = Jb.exec(b[h]) || [],
        n = p = f[1],
        o = (f[2] || "").split(".").sort(),
        n && (j = eb.event.special[n] || {},
        n = (e ? j.delegateType: j.bindType) || n, j = eb.event.special[n] || {},
        l = eb.extend({
          type: n,
          origType: p,
          data: d,
          handler: c,
          guid: c.guid,
          selector: e,
          needsContext: e && eb.expr.match.needsContext.test(e),
          namespace: o.join(".")
        },
        i), (m = g[n]) || (m = g[n] = [], m.delegateCount = 0, j.setup && j.setup.call(a, d, o, k) !== !1 || (a.addEventListener ? a.addEventListener(n, k, !1) : a.attachEvent && a.attachEvent("on" + n, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, l) : m.push(l), eb.event.global[n] = !0);
        a = null
      }
    },
    remove: function(a, b, c, d, e) {
      var f, g, h, i, j, k, l, m, n, o, p, q = eb.hasData(a) && eb._data(a);
      if (q && (k = q.events)) {
        for (b = (b || "").match(tb) || [""], j = b.length; j--;) if (h = Jb.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
          for (l = eb.event.special[n] || {},
          n = (d ? l.delegateType: l.bindType) || n, m = k[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = m.length; f--;) g = m[f],
          !e && p !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1), g.selector && m.delegateCount--, l.remove && l.remove.call(a, g));
          i && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || eb.removeEvent(a, n, q.handle), delete k[n])
        } else for (n in k) eb.event.remove(a, n + b[j], c, d, !0);
        eb.isEmptyObject(k) && (delete q.handle, eb._removeData(a, "events"))
      }
    },
    trigger: function(b, c, d, e) {
      var f, g, h, i, j, k, l, m = [d || ob],
      n = bb.call(b, "type") ? b.type: b,
      o = bb.call(b, "namespace") ? b.namespace.split(".") : [];
      if (h = k = d = d || ob, 3 !== d.nodeType && 8 !== d.nodeType && !Ib.test(n + eb.event.triggered) && (n.indexOf(".") >= 0 && (o = n.split("."), n = o.shift(), o.sort()), g = n.indexOf(":") < 0 && "on" + n, b = b[eb.expando] ? b: new eb.Event(n, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = o.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : eb.makeArray(c, [b]), j = eb.event.special[n] || {},
      e || !j.trigger || j.trigger.apply(d, c) !== !1)) {
        if (!e && !j.noBubble && !eb.isWindow(d)) {
          for (i = j.delegateType || n, Ib.test(i + n) || (h = h.parentNode); h; h = h.parentNode) m.push(h),
          k = h;
          k === (d.ownerDocument || ob) && m.push(k.defaultView || k.parentWindow || a)
        }
        for (l = 0; (h = m[l++]) && !b.isPropagationStopped();) b.type = l > 1 ? i: j.bindType || n,
        f = (eb._data(h, "events") || {})[b.type] && eb._data(h, "handle"),
        f && f.apply(h, c),
        f = g && h[g],
        f && f.apply && eb.acceptData(h) && (b.result = f.apply(h, c), b.result === !1 && b.preventDefault());
        if (b.type = n, !e && !b.isDefaultPrevented() && (!j._default || j._default.apply(m.pop(), c) === !1) && eb.acceptData(d) && g && d[n] && !eb.isWindow(d)) {
          k = d[g],
          k && (d[g] = null),
          eb.event.triggered = n;
          try {
            d[n]()
          } catch(p) {}
          eb.event.triggered = void 0,
          k && (d[g] = k)
        }
        return b.result
      }
    },
    dispatch: function(a) {
      a = eb.event.fix(a);
      var b, c, d, e, f, g = [],
      h = X.call(arguments),
      i = (eb._data(this, "events") || {})[a.type] || [],
      j = eb.event.special[a.type] || {};
      if (h[0] = a, a.delegateTarget = this, !j.preDispatch || j.preDispatch.call(this, a) !== !1) {
        for (g = eb.event.handlers.call(this, a, i), b = 0; (e = g[b++]) && !a.isPropagationStopped();) for (a.currentTarget = e.elem, f = 0; (d = e.handlers[f++]) && !a.isImmediatePropagationStopped();)(!a.namespace_re || a.namespace_re.test(d.namespace)) && (a.handleObj = d, a.data = d.data, c = ((eb.event.special[d.origType] || {}).handle || d.handler).apply(e.elem, h), void 0 !== c && (a.result = c) === !1 && (a.preventDefault(), a.stopPropagation()));
        return j.postDispatch && j.postDispatch.call(this, a),
        a.result
      }
    },
    handlers: function(a, b) {
      var c, d, e, f, g = [],
      h = b.delegateCount,
      i = a.target;
      if (h && i.nodeType && (!a.button || "click" !== a.type)) for (; i != this; i = i.parentNode || this) if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
        for (e = [], f = 0; h > f; f++) d = b[f],
        c = d.selector + " ",
        void 0 === e[c] && (e[c] = d.needsContext ? eb(c, this).index(i) >= 0 : eb.find(c, this, null, [i]).length),
        e[c] && e.push(d);
        e.length && g.push({
          elem: i,
          handlers: e
        })
      }
      return h < b.length && g.push({
        elem: this,
        handlers: b.slice(h)
      }),
      g
    },
    fix: function(a) {
      if (a[eb.expando]) return a;
      var b, c, d, e = a.type,
      f = a,
      g = this.fixHooks[e];
      for (g || (this.fixHooks[e] = g = Hb.test(e) ? this.mouseHooks: Gb.test(e) ? this.keyHooks: {}), d = g.props ? this.props.concat(g.props) : this.props, a = new eb.Event(f), b = d.length; b--;) c = d[b],
      a[c] = f[c];
      return a.target || (a.target = f.srcElement || ob),
      3 === a.target.nodeType && (a.target = a.target.parentNode),
      a.metaKey = !!a.metaKey,
      g.filter ? g.filter(a, f) : a
    },
    props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function(a, b) {
        return null == a.which && (a.which = null != b.charCode ? b.charCode: b.keyCode),
        a
      }
    },
    mouseHooks: {
      props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
      filter: function(a, b) {
        var c, d, e, f = b.button,
        g = b.fromElement;
        return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || ob, e = d.documentElement, c = d.body, a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)),
        !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement: g),
        a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0),
        a
      }
    },
    special: {
      load: {
        noBubble: !0
      },
      focus: {
        trigger: function() {
          if (this !== o() && this.focus) try {
            return this.focus(),
            !1
          } catch(a) {}
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function() {
          return this === o() && this.blur ? (this.blur(), !1) : void 0
        },
        delegateType: "focusout"
      },
      click: {
        trigger: function() {
          return eb.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
        },
        _default: function(a) {
          return eb.nodeName(a.target, "a")
        }
      },
      beforeunload: {
        postDispatch: function(a) {
          void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
        }
      }
    },
    simulate: function(a, b, c, d) {
      var e = eb.extend(new eb.Event, c, {
        type: a,
        isSimulated: !0,
        originalEvent: {}
      });
      d ? eb.event.trigger(e, null, b) : eb.event.dispatch.call(b, e),
      e.isDefaultPrevented() && c.preventDefault()
    }
  },
  eb.removeEvent = ob.removeEventListener ?
  function(a, b, c) {
    a.removeEventListener && a.removeEventListener(b, c, !1)
  }: function(a, b, c) {
    var d = "on" + b;
    a.detachEvent && (typeof a[d] === xb && (a[d] = null), a.detachEvent(d, c))
  },
  eb.Event = function(a, b) {
    return this instanceof eb.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? m: n) : this.type = a, b && eb.extend(this, b), this.timeStamp = a && a.timeStamp || eb.now(), void(this[eb.expando] = !0)) : new eb.Event(a, b)
  },
  eb.Event.prototype = {
    isDefaultPrevented: n,
    isPropagationStopped: n,
    isImmediatePropagationStopped: n,
    preventDefault: function() {
      var a = this.originalEvent;
      this.isDefaultPrevented = m,
      a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
    },
    stopPropagation: function() {
      var a = this.originalEvent;
      this.isPropagationStopped = m,
      a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
    },
    stopImmediatePropagation: function() {
      var a = this.originalEvent;
      this.isImmediatePropagationStopped = m,
      a && a.stopImmediatePropagation && a.stopImmediatePropagation(),
      this.stopPropagation()
    }
  },
  eb.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  },
  function(a, b) {
    eb.event.special[a] = {
      delegateType: b,
      bindType: b,
      handle: function(a) {
        var c, d = this,
        e = a.relatedTarget,
        f = a.handleObj;
        return (!e || e !== d && !eb.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b),
        c
      }
    }
  }),
  cb.submitBubbles || (eb.event.special.submit = {
    setup: function() {
      return eb.nodeName(this, "form") ? !1 : void eb.event.add(this, "click._submit keypress._submit",
      function(a) {
        var b = a.target,
        c = eb.nodeName(b, "input") || eb.nodeName(b, "button") ? b.form: void 0;
        c && !eb._data(c, "submitBubbles") && (eb.event.add(c, "submit._submit",
        function(a) {
          a._submit_bubble = !0
        }), eb._data(c, "submitBubbles", !0))
      })
    },
    postDispatch: function(a) {
      a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && eb.event.simulate("submit", this.parentNode, a, !0))
    },
    teardown: function() {
      return eb.nodeName(this, "form") ? !1 : void eb.event.remove(this, "._submit")
    }
  }),
  cb.changeBubbles || (eb.event.special.change = {
    setup: function() {
      return Fb.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (eb.event.add(this, "propertychange._change",
      function(a) {
        "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
      }), eb.event.add(this, "click._change",
      function(a) {
        this._just_changed && !a.isTrigger && (this._just_changed = !1),
        eb.event.simulate("change", this, a, !0)
      })), !1) : void eb.event.add(this, "beforeactivate._change",
      function(a) {
        var b = a.target;
        Fb.test(b.nodeName) && !eb._data(b, "changeBubbles") && (eb.event.add(b, "change._change",
        function(a) { ! this.parentNode || a.isSimulated || a.isTrigger || eb.event.simulate("change", this.parentNode, a, !0)
        }), eb._data(b, "changeBubbles", !0))
      })
    },
    handle: function(a) {
      var b = a.target;
      return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
    },
    teardown: function() {
      return eb.event.remove(this, "._change"),
      !Fb.test(this.nodeName)
    }
  }),
  cb.focusinBubbles || eb.each({
    focus: "focusin",
    blur: "focusout"
  },
  function(a, b) {
    var c = function(a) {
      eb.event.simulate(b, a.target, eb.event.fix(a), !0)
    };
    eb.event.special[b] = {
      setup: function() {
        var d = this.ownerDocument || this,
        e = eb._data(d, b);
        e || d.addEventListener(a, c, !0),
        eb._data(d, b, (e || 0) + 1)
      },
      teardown: function() {
        var d = this.ownerDocument || this,
        e = eb._data(d, b) - 1;
        e ? eb._data(d, b, e) : (d.removeEventListener(a, c, !0), eb._removeData(d, b))
      }
    }
  }),
  eb.fn.extend({
    on: function(a, b, c, d, e) {
      var f, g;
      if ("object" == typeof a) {
        "string" != typeof b && (c = c || b, b = void 0);
        for (f in a) this.on(f, b, c, a[f], e);
        return this
      }
      if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = n;
      else if (!d) return this;
      return 1 === e && (g = d, d = function(a) {
        return eb().off(a),
        g.apply(this, arguments)
      },
      d.guid = g.guid || (g.guid = eb.guid++)),
      this.each(function() {
        eb.event.add(this, a, d, c, b)
      })
    },
    one: function(a, b, c, d) {
      return this.on(a, b, c, d, 1)
    },
    off: function(a, b, c) {
      var d, e;
      if (a && a.preventDefault && a.handleObj) return d = a.handleObj,
      eb(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace: d.origType, d.selector, d.handler),
      this;
      if ("object" == typeof a) {
        for (e in a) this.off(e, b, a[e]);
        return this
      }
      return (b === !1 || "function" == typeof b) && (c = b, b = void 0),
      c === !1 && (c = n),
      this.each(function() {
        eb.event.remove(this, a, c, b)
      })
    },
    trigger: function(a, b) {
      return this.each(function() {
        eb.event.trigger(a, b, this)
      })
    },
    triggerHandler: function(a, b) {
      var c = this[0];
      return c ? eb.event.trigger(a, b, c, !0) : void 0
    }
  });
  var Kb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
  Lb = / jQuery\d+="(?:null|\d+)"/g,
  Mb = new RegExp("<(?:" + Kb + ")[\\s/>]", "i"),
  Nb = /^\s+/,
  Ob = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
  Pb = /<([\w:]+)/,
  Qb = /<tbody/i,
  Rb = /<|&#?\w+;/,
  Sb = /<(?:script|style|link)/i,
  Tb = /checked\s*(?:[^=]|=\s*.checked.)/i,
  Ub = /^$|\/(?:java|ecma)script/i,
  Vb = /^true\/(.*)/,
  Wb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
  Xb = {
    option: [1, "<select multiple='multiple'>", "</select>"],
    legend: [1, "<fieldset>", "</fieldset>"],
    area: [1, "<map>", "</map>"],
    param: [1, "<object>", "</object>"],
    thead: [1, "<table>", "</table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: cb.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
  },
  Yb = p(ob),
  Zb = Yb.appendChild(ob.createElement("div"));
  Xb.optgroup = Xb.option,
  Xb.tbody = Xb.tfoot = Xb.colgroup = Xb.caption = Xb.thead,
  Xb.th = Xb.td,
  eb.extend({
    clone: function(a, b, c) {
      var d, e, f, g, h, i = eb.contains(a.ownerDocument, a);
      if (cb.html5Clone || eb.isXMLDoc(a) || !Mb.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (Zb.innerHTML = a.outerHTML, Zb.removeChild(f = Zb.firstChild)), !(cb.noCloneEvent && cb.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || eb.isXMLDoc(a))) for (d = q(f), h = q(a), g = 0; null != (e = h[g]); ++g) d[g] && x(e, d[g]);
      if (b) if (c) for (h = h || q(a), d = d || q(f), g = 0; null != (e = h[g]); g++) w(e, d[g]);
      else w(a, f);
      return d = q(f, "script"),
      d.length > 0 && v(d, !i && q(a, "script")),
      d = h = e = null,
      f
    },
    buildFragment: function(a, b, c, d) {
      for (var e, f, g, h, i, j, k, l = a.length,
      m = p(b), n = [], o = 0; l > o; o++) if (f = a[o], f || 0 === f) if ("object" === eb.type(f)) eb.merge(n, f.nodeType ? [f] : f);
      else if (Rb.test(f)) {
        for (h = h || m.appendChild(b.createElement("div")), i = (Pb.exec(f) || ["", ""])[1].toLowerCase(), k = Xb[i] || Xb._default, h.innerHTML = k[1] + f.replace(Ob, "<$1></$2>") + k[2], e = k[0]; e--;) h = h.lastChild;
        if (!cb.leadingWhitespace && Nb.test(f) && n.push(b.createTextNode(Nb.exec(f)[0])), !cb.tbody) for (f = "table" !== i || Qb.test(f) ? "<table>" !== k[1] || Qb.test(f) ? 0 : h: h.firstChild, e = f && f.childNodes.length; e--;) eb.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j);
        for (eb.merge(n, h.childNodes), h.textContent = ""; h.firstChild;) h.removeChild(h.firstChild);
        h = m.lastChild
      } else n.push(b.createTextNode(f));
      for (h && m.removeChild(h), cb.appendChecked || eb.grep(q(n, "input"), r), o = 0; f = n[o++];) if ((!d || -1 === eb.inArray(f, d)) && (g = eb.contains(f.ownerDocument, f), h = q(m.appendChild(f), "script"), g && v(h), c)) for (e = 0; f = h[e++];) Ub.test(f.type || "") && c.push(f);
      return h = null,
      m
    },
    cleanData: function(a, b) {
      for (var c, d, e, f, g = 0,
      h = eb.expando,
      i = eb.cache,
      j = cb.deleteExpando,
      k = eb.event.special; null != (c = a[g]); g++) if ((b || eb.acceptData(c)) && (e = c[h], f = e && i[e])) {
        if (f.events) for (d in f.events) k[d] ? eb.event.remove(c, d) : eb.removeEvent(c, d, f.handle);
        i[e] && (delete i[e], j ? delete c[h] : typeof c.removeAttribute !== xb ? c.removeAttribute(h) : c[h] = null, W.push(e))
      }
    }
  }),
  eb.fn.extend({
    text: function(a) {
      return Db(this,
      function(a) {
        return void 0 === a ? eb.text(this) : this.empty().append((this[0] && this[0].ownerDocument || ob).createTextNode(a))
      },
      null, a, arguments.length)
    },
    append: function() {
      return this.domManip(arguments,
      function(a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = s(this, a);
          b.appendChild(a)
        }
      })
    },
    prepend: function() {
      return this.domManip(arguments,
      function(a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = s(this, a);
          b.insertBefore(a, b.firstChild)
        }
      })
    },
    before: function() {
      return this.domManip(arguments,
      function(a) {
        this.parentNode && this.parentNode.insertBefore(a, this)
      })
    },
    after: function() {
      return this.domManip(arguments,
      function(a) {
        this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
      })
    },
    remove: function(a, b) {
      for (var c, d = a ? eb.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || eb.cleanData(q(c)),
      c.parentNode && (b && eb.contains(c.ownerDocument, c) && v(q(c, "script")), c.parentNode.removeChild(c));
      return this
    },
    empty: function() {
      for (var a, b = 0; null != (a = this[b]); b++) {
        for (1 === a.nodeType && eb.cleanData(q(a, !1)); a.firstChild;) a.removeChild(a.firstChild);
        a.options && eb.nodeName(a, "select") && (a.options.length = 0)
      }
      return this
    },
    clone: function(a, b) {
      return a = null == a ? !1 : a,
      b = null == b ? a: b,
      this.map(function() {
        return eb.clone(this, a, b)
      })
    },
    html: function(a) {
      return Db(this,
      function(a) {
        var b = this[0] || {},
        c = 0,
        d = this.length;
        if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(Lb, "") : void 0;
        if (! ("string" != typeof a || Sb.test(a) || !cb.htmlSerialize && Mb.test(a) || !cb.leadingWhitespace && Nb.test(a) || Xb[(Pb.exec(a) || ["", ""])[1].toLowerCase()])) {
          a = a.replace(Ob, "<$1></$2>");
          try {
            for (; d > c; c++) b = this[c] || {},
            1 === b.nodeType && (eb.cleanData(q(b, !1)), b.innerHTML = a);
            b = 0
          } catch(e) {}
        }
        b && this.empty().append(a)
      },
      null, a, arguments.length)
    },
    replaceWith: function() {
      var a = arguments[0];
      return this.domManip(arguments,
      function(b) {
        a = this.parentNode,
        eb.cleanData(q(this)),
        a && a.replaceChild(b, this)
      }),
      a && (a.length || a.nodeType) ? this: this.remove()
    },
    detach: function(a) {
      return this.remove(a, !0)
    },
    domManip: function(a, b) {
      a = Y.apply([], a);
      var c, d, e, f, g, h, i = 0,
      j = this.length,
      k = this,
      l = j - 1,
      m = a[0],
      n = eb.isFunction(m);
      if (n || j > 1 && "string" == typeof m && !cb.checkClone && Tb.test(m)) return this.each(function(c) {
        var d = k.eq(c);
        n && (a[0] = m.call(this, c, d.html())),
        d.domManip(a, b)
      });
      if (j && (h = eb.buildFragment(a, this[0].ownerDocument, !1, this), c = h.firstChild, 1 === h.childNodes.length && (h = c), c)) {
        for (f = eb.map(q(h, "script"), t), e = f.length; j > i; i++) d = h,
        i !== l && (d = eb.clone(d, !0, !0), e && eb.merge(f, q(d, "script"))),
        b.call(this[i], d, i);
        if (e) for (g = f[f.length - 1].ownerDocument, eb.map(f, u), i = 0; e > i; i++) d = f[i],
        Ub.test(d.type || "") && !eb._data(d, "globalEval") && eb.contains(g, d) && (d.src ? eb._evalUrl && eb._evalUrl(d.src) : eb.globalEval((d.text || d.textContent || d.innerHTML || "").replace(Wb, "")));
        h = c = null
      }
      return this
    }
  }),
  eb.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  },
  function(a, b) {
    eb.fn[a] = function(a) {
      for (var c, d = 0,
      e = [], f = eb(a), g = f.length - 1; g >= d; d++) c = d === g ? this: this.clone(!0),
      eb(f[d])[b](c),
      Z.apply(e, c.get());
      return this.pushStack(e)
    }
  });
  var $b, _b = {}; !
  function() {
    var a;
    cb.shrinkWrapBlocks = function() {
      if (null != a) return a;
      a = !1;
      var b, c, d;
      return c = ob.getElementsByTagName("body")[0],
      c && c.style ? (b = ob.createElement("div"), d = ob.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== xb && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(ob.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(d), a) : void 0
    }
  } ();
  var ac, bc, cc = /^margin/,
  dc = new RegExp("^(" + Ab + ")(?!px)[a-z%]+$", "i"),
  ec = /^(top|right|bottom|left)$/;
  a.getComputedStyle ? (ac = function(a) {
    return a.ownerDocument.defaultView.getComputedStyle(a, null)
  },
  bc = function(a, b, c) {
    var d, e, f, g, h = a.style;
    return c = c || ac(a),
    g = c ? c.getPropertyValue(b) || c[b] : void 0,
    c && ("" !== g || eb.contains(a.ownerDocument, a) || (g = eb.style(a, b)), dc.test(g) && cc.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)),
    void 0 === g ? g: g + ""
  }) : ob.documentElement.currentStyle && (ac = function(a) {
    return a.currentStyle
  },
  bc = function(a, b, c) {
    var d, e, f, g, h = a.style;
    return c = c || ac(a),
    g = c ? c[b] : void 0,
    null == g && h && h[b] && (g = h[b]),
    dc.test(g) && !ec.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em": g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)),
    void 0 === g ? g: g + "" || "auto"
  }),
  !
  function() {
    function b() {
      var b, c, d, e;
      c = ob.getElementsByTagName("body")[0],
      c && c.style && (b = ob.createElement("div"), d = ob.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), b.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", f = g = !1, i = !0, a.getComputedStyle && (f = "1%" !== (a.getComputedStyle(b, null) || {}).top, g = "4px" === (a.getComputedStyle(b, null) || {
        width: "4px"
      }).width, e = b.appendChild(ob.createElement("div")), e.style.cssText = b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", e.style.marginRight = e.style.width = "0", b.style.width = "1px", i = !parseFloat((a.getComputedStyle(e, null) || {}).marginRight)), b.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", e = b.getElementsByTagName("td"), e[0].style.cssText = "margin:0;border:0;padding:0;display:none", h = 0 === e[0].offsetHeight, h && (e[0].style.display = "", e[1].style.display = "none", h = 0 === e[0].offsetHeight), c.removeChild(d))
    }
    var c, d, e, f, g, h, i;
    c = ob.createElement("div"),
    c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
    e = c.getElementsByTagName("a")[0],
    (d = e && e.style) && (d.cssText = "float:left;opacity:.5", cb.opacity = "0.5" === d.opacity, cb.cssFloat = !!d.cssFloat, c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", cb.clearCloneStyle = "content-box" === c.style.backgroundClip, cb.boxSizing = "" === d.boxSizing || "" === d.MozBoxSizing || "" === d.WebkitBoxSizing, eb.extend(cb, {
      reliableHiddenOffsets: function() {
        return null == h && b(),
        h
      },
      boxSizingReliable: function() {
        return null == g && b(),
        g
      },
      pixelPosition: function() {
        return null == f && b(),
        f
      },
      reliableMarginRight: function() {
        return null == i && b(),
        i
      }
    }))
  } (),
  eb.swap = function(a, b, c, d) {
    var e, f, g = {};
    for (f in b) g[f] = a.style[f],
    a.style[f] = b[f];
    e = c.apply(a, d || []);
    for (f in b) a.style[f] = g[f];
    return e
  };
  var fc = /alpha\([^)]*\)/i,
  gc = /opacity\s*=\s*([^)]*)/,
  hc = /^(none|table(?!-c[ea]).+)/,
  ic = new RegExp("^(" + Ab + ")(.*)$", "i"),
  jc = new RegExp("^([+-])=(" + Ab + ")", "i"),
  kc = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
  },
  lc = {
    letterSpacing: "0",
    fontWeight: "400"
  },
  mc = ["Webkit", "O", "Moz", "ms"];
  eb.extend({
    cssHooks: {
      opacity: {
        get: function(a, b) {
          if (b) {
            var c = bc(a, "opacity");
            return "" === c ? "1": c
          }
        }
      }
    },
    cssNumber: {
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {
      "float": cb.cssFloat ? "cssFloat": "styleFloat"
    },
    style: function(a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e, f, g, h = eb.camelCase(b),
        i = a.style;
        if (b = eb.cssProps[h] || (eb.cssProps[h] = B(i, h)), g = eb.cssHooks[b] || eb.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e: i[b];
        if (f = typeof c, "string" === f && (e = jc.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(eb.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || eb.cssNumber[h] || (c += "px"), cb.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try {
          i[b] = c
        } catch(j) {}
      }
    },
    css: function(a, b, c, d) {
      var e, f, g, h = eb.camelCase(b);
      return b = eb.cssProps[h] || (eb.cssProps[h] = B(a.style, h)),
      g = eb.cssHooks[b] || eb.cssHooks[h],
      g && "get" in g && (f = g.get(a, !0, c)),
      void 0 === f && (f = bc(a, b, d)),
      "normal" === f && b in lc && (f = lc[b]),
      "" === c || c ? (e = parseFloat(f), c === !0 || eb.isNumeric(e) ? e || 0 : f) : f
    }
  }),
  eb.each(["height", "width"],
  function(a, b) {
    eb.cssHooks[b] = {
      get: function(a, c, d) {
        return c ? hc.test(eb.css(a, "display")) && 0 === a.offsetWidth ? eb.swap(a, kc,
        function() {
          return F(a, b, d)
        }) : F(a, b, d) : void 0
      },
      set: function(a, c, d) {
        var e = d && ac(a);
        return D(a, c, d ? E(a, b, d, cb.boxSizing && "border-box" === eb.css(a, "boxSizing", !1, e), e) : 0)
      }
    }
  }),
  cb.opacity || (eb.cssHooks.opacity = {
    get: function(a, b) {
      return gc.test((b && a.currentStyle ? a.currentStyle.filter: a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "": b ? "1": ""
    },
    set: function(a, b) {
      var c = a.style,
      d = a.currentStyle,
      e = eb.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")": "",
      f = d && d.filter || c.filter || "";
      c.zoom = 1,
      (b >= 1 || "" === b) && "" === eb.trim(f.replace(fc, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = fc.test(f) ? f.replace(fc, e) : f + " " + e)
    }
  }),
  eb.cssHooks.marginRight = A(cb.reliableMarginRight,
  function(a, b) {
    return b ? eb.swap(a, {
      display: "inline-block"
    },
    bc, [a, "marginRight"]) : void 0
  }),
  eb.each({
    margin: "",
    padding: "",
    border: "Width"
  },
  function(a, b) {
    eb.cssHooks[a + b] = {
      expand: function(c) {
        for (var d = 0,
        e = {},
        f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + Bb[d] + b] = f[d] || f[d - 2] || f[0];
        return e
      }
    },
    cc.test(a) || (eb.cssHooks[a + b].set = D)
  }),
  eb.fn.extend({
    css: function(a, b) {
      return Db(this,
      function(a, b, c) {
        var d, e, f = {},
        g = 0;
        if (eb.isArray(b)) {
          for (d = ac(a), e = b.length; e > g; g++) f[b[g]] = eb.css(a, b[g], !1, d);
          return f
        }
        return void 0 !== c ? eb.style(a, b, c) : eb.css(a, b)
      },
      a, b, arguments.length > 1)
    },
    show: function() {
      return C(this, !0)
    },
    hide: function() {
      return C(this)
    },
    toggle: function(a) {
      return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
        Cb(this) ? eb(this).show() : eb(this).hide()
      })
    }
  }),
  eb.Tween = G,
  G.prototype = {
    constructor: G,
    init: function(a, b, c, d, e, f) {
      this.elem = a,
      this.prop = c,
      this.easing = e || "swing",
      this.options = b,
      this.start = this.now = this.cur(),
      this.end = d,
      this.unit = f || (eb.cssNumber[c] ? "": "px")
    },
    cur: function() {
      var a = G.propHooks[this.prop];
      return a && a.get ? a.get(this) : G.propHooks._default.get(this)
    },
    run: function(a) {
      var b, c = G.propHooks[this.prop];
      return this.pos = b = this.options.duration ? eb.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a,
      this.now = (this.end - this.start) * b + this.start,
      this.options.step && this.options.step.call(this.elem, this.now, this),
      c && c.set ? c.set(this) : G.propHooks._default.set(this),
      this
    }
  },
  G.prototype.init.prototype = G.prototype,
  G.propHooks = {
    _default: {
      get: function(a) {
        var b;
        return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = eb.css(a.elem, a.prop, ""), b && "auto" !== b ? b: 0) : a.elem[a.prop]
      },
      set: function(a) {
        eb.fx.step[a.prop] ? eb.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[eb.cssProps[a.prop]] || eb.cssHooks[a.prop]) ? eb.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
      }
    }
  },
  G.propHooks.scrollTop = G.propHooks.scrollLeft = {
    set: function(a) {
      a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
    }
  },
  eb.easing = {
    linear: function(a) {
      return a
    },
    swing: function(a) {
      return.5 - Math.cos(a * Math.PI) / 2
    }
  },
  eb.fx = G.prototype.init,
  eb.fx.step = {};
  var nc, oc, pc = /^(?:toggle|show|hide)$/,
  qc = new RegExp("^(?:([+-])=|)(" + Ab + ")([a-z%]*)$", "i"),
  rc = /queueHooks$/,
  sc = [K],
  tc = {
    "*": [function(a, b) {
      var c = this.createTween(a, b),
      d = c.cur(),
      e = qc.exec(b),
      f = e && e[3] || (eb.cssNumber[a] ? "": "px"),
      g = (eb.cssNumber[a] || "px" !== f && +d) && qc.exec(eb.css(c.elem, a)),
      h = 1,
      i = 20;
      if (g && g[3] !== f) {
        f = f || g[3],
        e = e || [],
        g = +d || 1;
        do h = h || ".5",
        g /= h,
        eb.style(c.elem, a, g + f);
        while (h !== (h = c.cur() / d) && 1 !== h && --i)
      }
      return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]),
      c
    }]
  };
  eb.Animation = eb.extend(M, {
    tweener: function(a, b) {
      eb.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
      for (var c, d = 0,
      e = a.length; e > d; d++) c = a[d],
      tc[c] = tc[c] || [],
      tc[c].unshift(b)
    },
    prefilter: function(a, b) {
      b ? sc.unshift(a) : sc.push(a)
    }
  }),
  eb.speed = function(a, b, c) {
    var d = a && "object" == typeof a ? eb.extend({},
    a) : {
      complete: c || !c && b || eb.isFunction(a) && a,
      duration: a,
      easing: c && b || b && !eb.isFunction(b) && b
    };
    return d.duration = eb.fx.off ? 0 : "number" == typeof d.duration ? d.duration: d.duration in eb.fx.speeds ? eb.fx.speeds[d.duration] : eb.fx.speeds._default,
    (null == d.queue || d.queue === !0) && (d.queue = "fx"),
    d.old = d.complete,
    d.complete = function() {
      eb.isFunction(d.old) && d.old.call(this),
      d.queue && eb.dequeue(this, d.queue)
    },
    d
  },
  eb.fn.extend({
    fadeTo: function(a, b, c, d) {
      return this.filter(Cb).css("opacity", 0).show().end().animate({
        opacity: b
      },
      a, c, d)
    },
    animate: function(a, b, c, d) {
      var e = eb.isEmptyObject(a),
      f = eb.speed(b, c, d),
      g = function() {
        var b = M(this, eb.extend({},
        a), f); (e || eb._data(this, "finish")) && b.stop(!0)
      };
      return g.finish = g,
      e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
    },
    stop: function(a, b, c) {
      var d = function(a) {
        var b = a.stop;
        delete a.stop,
        b(c)
      };
      return "string" != typeof a && (c = b, b = a, a = void 0),
      b && a !== !1 && this.queue(a || "fx", []),
      this.each(function() {
        var b = !0,
        e = null != a && a + "queueHooks",
        f = eb.timers,
        g = eb._data(this);
        if (e) g[e] && g[e].stop && d(g[e]);
        else for (e in g) g[e] && g[e].stop && rc.test(e) && d(g[e]);
        for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1)); (b || !c) && eb.dequeue(this, a)
      })
    },
    finish: function(a) {
      return a !== !1 && (a = a || "fx"),
      this.each(function() {
        var b, c = eb._data(this),
        d = c[a + "queue"],
        e = c[a + "queueHooks"],
        f = eb.timers,
        g = d ? d.length: 0;
        for (c.finish = !0, eb.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
        for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
        delete c.finish
      })
    }
  }),
  eb.each(["toggle", "show", "hide"],
  function(a, b) {
    var c = eb.fn[b];
    eb.fn[b] = function(a, d, e) {
      return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(I(b, !0), a, d, e)
    }
  }),
  eb.each({
    slideDown: I("show"),
    slideUp: I("hide"),
    slideToggle: I("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  },
  function(a, b) {
    eb.fn[a] = function(a, c, d) {
      return this.animate(b, a, c, d)
    }
  }),
  eb.timers = [],
  eb.fx.tick = function() {
    var a, b = eb.timers,
    c = 0;
    for (nc = eb.now(); c < b.length; c++) a = b[c],
    a() || b[c] !== a || b.splice(c--, 1);
    b.length || eb.fx.stop(),
    nc = void 0
  },
  eb.fx.timer = function(a) {
    eb.timers.push(a),
    a() ? eb.fx.start() : eb.timers.pop()
  },
  eb.fx.interval = 13,
  eb.fx.start = function() {
    oc || (oc = setInterval(eb.fx.tick, eb.fx.interval))
  },
  eb.fx.stop = function() {
    clearInterval(oc),
    oc = null
  },
  eb.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  },
  eb.fn.delay = function(a, b) {
    return a = eb.fx ? eb.fx.speeds[a] || a: a,
    b = b || "fx",
    this.queue(b,
    function(b, c) {
      var d = setTimeout(b, a);
      c.stop = function() {
        clearTimeout(d)
      }
    })
  },
  function() {
    var a, b, c, d, e;
    b = ob.createElement("div"),
    b.setAttribute("className", "t"),
    b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
    d = b.getElementsByTagName("a")[0],
    c = ob.createElement("select"),
    e = c.appendChild(ob.createElement("option")),
    a = b.getElementsByTagName("input")[0],
    d.style.cssText = "top:1px",
    cb.getSetAttribute = "t" !== b.className,
    cb.style = /top/.test(d.getAttribute("style")),
    cb.hrefNormalized = "/a" === d.getAttribute("href"),
    cb.checkOn = !!a.value,
    cb.optSelected = e.selected,
    cb.enctype = !!ob.createElement("form").enctype,
    c.disabled = !0,
    cb.optDisabled = !e.disabled,
    a = ob.createElement("input"),
    a.setAttribute("value", ""),
    cb.input = "" === a.getAttribute("value"),
    a.value = "t",
    a.setAttribute("type", "radio"),
    cb.radioValue = "t" === a.value
  } ();
  var uc = /\r/g;
  eb.fn.extend({
    val: function(a) {
      var b, c, d, e = this[0];
      return arguments.length ? (d = eb.isFunction(a), this.each(function(c) {
        var e;
        1 === this.nodeType && (e = d ? a.call(this, c, eb(this).val()) : a, null == e ? e = "": "number" == typeof e ? e += "": eb.isArray(e) && (e = eb.map(e,
        function(a) {
          return null == a ? "": a + ""
        })), b = eb.valHooks[this.type] || eb.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
      })) : e ? (b = eb.valHooks[e.type] || eb.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c: (c = e.value, "string" == typeof c ? c.replace(uc, "") : null == c ? "": c)) : void 0
    }
  }),
  eb.extend({
    valHooks: {
      option: {
        get: function(a) {
          var b = eb.find.attr(a, "value");
          return null != b ? b: eb.trim(eb.text(a))
        }
      },
      select: {
        get: function(a) {
          for (var b, c, d = a.options,
          e = a.selectedIndex,
          f = "select-one" === a.type || 0 > e,
          g = f ? null: [], h = f ? e + 1 : d.length, i = 0 > e ? h: f ? e: 0; h > i; i++) if (c = d[i], !(!c.selected && i !== e || (cb.optDisabled ? c.disabled: null !== c.getAttribute("disabled")) || c.parentNode.disabled && eb.nodeName(c.parentNode, "optgroup"))) {
            if (b = eb(c).val(), f) return b;
            g.push(b)
          }
          return g
        },
        set: function(a, b) {
          for (var c, d, e = a.options,
          f = eb.makeArray(b), g = e.length; g--;) if (d = e[g], eb.inArray(eb.valHooks.option.get(d), f) >= 0) try {
            d.selected = c = !0
          } catch(h) {
            d.scrollHeight
          } else d.selected = !1;
          return c || (a.selectedIndex = -1),
          e
        }
      }
    }
  }),
  eb.each(["radio", "checkbox"],
  function() {
    eb.valHooks[this] = {
      set: function(a, b) {
        return eb.isArray(b) ? a.checked = eb.inArray(eb(a).val(), b) >= 0 : void 0
      }
    },
    cb.checkOn || (eb.valHooks[this].get = function(a) {
      return null === a.getAttribute("value") ? "on": a.value
    })
  });
  var vc, wc, xc = eb.expr.attrHandle,
  yc = /^(?:checked|selected)$/i,
  zc = cb.getSetAttribute,
  Ac = cb.input;
  eb.fn.extend({
    attr: function(a, b) {
      return Db(this, eb.attr, a, b, arguments.length > 1)
    },
    removeAttr: function(a) {
      return this.each(function() {
        eb.removeAttr(this, a)
      })
    }
  }),
  eb.extend({
    attr: function(a, b, c) {
      var d, e, f = a.nodeType;
      return a && 3 !== f && 8 !== f && 2 !== f ? typeof a.getAttribute === xb ? eb.prop(a, b, c) : (1 === f && eb.isXMLDoc(a) || (b = b.toLowerCase(), d = eb.attrHooks[b] || (eb.expr.match.bool.test(b) ? wc: vc)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e: (e = eb.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e: (a.setAttribute(b, c + ""), c) : void eb.removeAttr(a, b)) : void 0
    },
    removeAttr: function(a, b) {
      var c, d, e = 0,
      f = b && b.match(tb);
      if (f && 1 === a.nodeType) for (; c = f[e++];) d = eb.propFix[c] || c,
      eb.expr.match.bool.test(c) ? Ac && zc || !yc.test(c) ? a[d] = !1 : a[eb.camelCase("default-" + c)] = a[d] = !1 : eb.attr(a, c, ""),
      a.removeAttribute(zc ? c: d)
    },
    attrHooks: {
      type: {
        set: function(a, b) {
          if (!cb.radioValue && "radio" === b && eb.nodeName(a, "input")) {
            var c = a.value;
            return a.setAttribute("type", b),
            c && (a.value = c),
            b
          }
        }
      }
    }
  }),
  wc = {
    set: function(a, b, c) {
      return b === !1 ? eb.removeAttr(a, c) : Ac && zc || !yc.test(c) ? a.setAttribute(!zc && eb.propFix[c] || c, c) : a[eb.camelCase("default-" + c)] = a[c] = !0,
      c
    }
  },
  eb.each(eb.expr.match.bool.source.match(/\w+/g),
  function(a, b) {
    var c = xc[b] || eb.find.attr;
    xc[b] = Ac && zc || !yc.test(b) ?
    function(a, b, d) {
      var e, f;
      return d || (f = xc[b], xc[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, xc[b] = f),
      e
    }: function(a, b, c) {
      return c ? void 0 : a[eb.camelCase("default-" + b)] ? b.toLowerCase() : null
    }
  }),
  Ac && zc || (eb.attrHooks.value = {
    set: function(a, b, c) {
      return eb.nodeName(a, "input") ? void(a.defaultValue = b) : vc && vc.set(a, b, c)
    }
  }),
  zc || (vc = {
    set: function(a, b, c) {
      var d = a.getAttributeNode(c);
      return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)),
      d.value = b += "",
      "value" === c || b === a.getAttribute(c) ? b: void 0
    }
  },
  xc.id = xc.name = xc.coords = function(a, b, c) {
    var d;
    return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value: null
  },
  eb.valHooks.button = {
    get: function(a, b) {
      var c = a.getAttributeNode(b);
      return c && c.specified ? c.value: void 0
    },
    set: vc.set
  },
  eb.attrHooks.contenteditable = {
    set: function(a, b, c) {
      vc.set(a, "" === b ? !1 : b, c)
    }
  },
  eb.each(["width", "height"],
  function(a, b) {
    eb.attrHooks[b] = {
      set: function(a, c) {
        return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
      }
    }
  })),
  cb.style || (eb.attrHooks.style = {
    get: function(a) {
      return a.style.cssText || void 0
    },
    set: function(a, b) {
      return a.style.cssText = b + ""
    }
  });
  var Bc = /^(?:input|select|textarea|button|object)$/i,
  Cc = /^(?:a|area)$/i;
  eb.fn.extend({
    prop: function(a, b) {
      return Db(this, eb.prop, a, b, arguments.length > 1)
    },
    removeProp: function(a) {
      return a = eb.propFix[a] || a,
      this.each(function() {
        try {
          this[a] = void 0,
          delete this[a]
        } catch(b) {}
      })
    }
  }),
  eb.extend({
    propFix: {
      "for": "htmlFor",
      "class": "className"
    },
    prop: function(a, b, c) {
      var d, e, f, g = a.nodeType;
      return a && 3 !== g && 8 !== g && 2 !== g ? (f = 1 !== g || !eb.isXMLDoc(a), f && (b = eb.propFix[b] || b, e = eb.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d: a[b] = c: e && "get" in e && null !== (d = e.get(a, b)) ? d: a[b]) : void 0
    },
    propHooks: {
      tabIndex: {
        get: function(a) {
          var b = eb.find.attr(a, "tabindex");
          return b ? parseInt(b, 10) : Bc.test(a.nodeName) || Cc.test(a.nodeName) && a.href ? 0 : -1
        }
      }
    }
  }),
  cb.hrefNormalized || eb.each(["href", "src"],
  function(a, b) {
    eb.propHooks[b] = {
      get: function(a) {
        return a.getAttribute(b, 4)
      }
    }
  }),
  cb.optSelected || (eb.propHooks.selected = {
    get: function(a) {
      var b = a.parentNode;
      return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex),
      null
    }
  }),
  eb.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"],
  function() {
    eb.propFix[this.toLowerCase()] = this
  }),
  cb.enctype || (eb.propFix.enctype = "encoding");
  var Dc = /[\t\r\n\f]/g;
  eb.fn.extend({
    addClass: function(a) {
      var b, c, d, e, f, g, h = 0,
      i = this.length,
      j = "string" == typeof a && a;
      if (eb.isFunction(a)) return this.each(function(b) {
        eb(this).addClass(a.call(this, b, this.className))
      });
      if (j) for (b = (a || "").match(tb) || []; i > h; h++) if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Dc, " ") : " ")) {
        for (f = 0; e = b[f++];) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
        g = eb.trim(d),
        c.className !== g && (c.className = g)
      }
      return this
    },
    removeClass: function(a) {
      var b, c, d, e, f, g, h = 0,
      i = this.length,
      j = 0 === arguments.length || "string" == typeof a && a;
      if (eb.isFunction(a)) return this.each(function(b) {
        eb(this).removeClass(a.call(this, b, this.className))
      });
      if (j) for (b = (a || "").match(tb) || []; i > h; h++) if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Dc, " ") : "")) {
        for (f = 0; e = b[f++];) for (; d.indexOf(" " + e + " ") >= 0;) d = d.replace(" " + e + " ", " ");
        g = a ? eb.trim(d) : "",
        c.className !== g && (c.className = g)
      }
      return this
    },
    toggleClass: function(a, b) {
      var c = typeof a;
      return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(eb.isFunction(a) ?
      function(c) {
        eb(this).toggleClass(a.call(this, c, this.className, b), b)
      }: function() {
        if ("string" === c) for (var b, d = 0,
        e = eb(this), f = a.match(tb) || []; b = f[d++];) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
        else(c === xb || "boolean" === c) && (this.className && eb._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "": eb._data(this, "__className__") || "")
      })
    },
    hasClass: function(a) {
      for (var b = " " + a + " ",
      c = 0,
      d = this.length; d > c; c++) if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(Dc, " ").indexOf(b) >= 0) return ! 0;
      return ! 1
    }
  }),
  eb.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
  function(a, b) {
    eb.fn[b] = function(a, c) {
      return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
    }
  }),
  eb.fn.extend({
    hover: function(a, b) {
      return this.mouseenter(a).mouseleave(b || a)
    },
    bind: function(a, b, c) {
      return this.on(a, null, b, c)
    },
    unbind: function(a, b) {
      return this.off(a, null, b)
    },
    delegate: function(a, b, c, d) {
      return this.on(b, a, c, d)
    },
    undelegate: function(a, b, c) {
      return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
    }
  });
  var Ec = eb.now(),
  Fc = /\?/,
  Gc = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
  eb.parseJSON = function(b) {
    if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
    var c, d = null,
    e = eb.trim(b + "");
    return e && !eb.trim(e.replace(Gc,
    function(a, b, e, f) {
      return c && b && (d = 0),
      0 === d ? a: (c = e || b, d += !f - !e, "")
    })) ? Function("return " + e)() : eb.error("Invalid JSON: " + b)
  },
  eb.parseXML = function(b) {
    var c, d;
    if (!b || "string" != typeof b) return null;
    try {
      a.DOMParser ? (d = new DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b))
    } catch(e) {
      c = void 0
    }
    return c && c.documentElement && !c.getElementsByTagName("parsererror").length || eb.error("Invalid XML: " + b),
    c
  };
  var Hc, Ic, Jc = /#.*$/,
  Kc = /([?&])_=[^&]*/,
  Lc = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
  Mc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
  Nc = /^(?:GET|HEAD)$/,
  Oc = /^\/\//,
  Pc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
  Qc = {},
  Rc = {},
  Sc = "*/".concat("*");
  try {
    Ic = location.href
  } catch(Tc) {
    Ic = ob.createElement("a"),
    Ic.href = "",
    Ic = Ic.href
  }
  Hc = Pc.exec(Ic.toLowerCase()) || [],
  eb.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: Ic,
      type: "GET",
      isLocal: Mc.test(Hc[1]),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": Sc,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /xml/,
        html: /html/,
        json: /json/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": eb.parseJSON,
        "text xml": eb.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function(a, b) {
      return b ? P(P(a, eb.ajaxSettings), b) : P(eb.ajaxSettings, a)
    },
    ajaxPrefilter: N(Qc),
    ajaxTransport: N(Rc),
    ajax: function(a, b) {
      function c(a, b, c, d) {
        var e, k, r, s, u, w = b;
        2 !== t && (t = 2, h && clearTimeout(h), j = void 0, g = d || "", v.readyState = a > 0 ? 4 : 0, e = a >= 200 && 300 > a || 304 === a, c && (s = Q(l, v, c)), s = R(l, s, v, e), e ? (l.ifModified && (u = v.getResponseHeader("Last-Modified"), u && (eb.lastModified[f] = u), u = v.getResponseHeader("etag"), u && (eb.etag[f] = u)), 204 === a || "HEAD" === l.type ? w = "nocontent": 304 === a ? w = "notmodified": (w = s.state, k = s.data, r = s.error, e = !r)) : (r = w, (a || !w) && (w = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || w) + "", e ? o.resolveWith(m, [k, w, v]) : o.rejectWith(m, [v, w, r]), v.statusCode(q), q = void 0, i && n.trigger(e ? "ajaxSuccess": "ajaxError", [v, l, e ? k: r]), p.fireWith(m, [v, w]), i && (n.trigger("ajaxComplete", [v, l]), --eb.active || eb.event.trigger("ajaxStop")))
      }
      "object" == typeof a && (b = a, a = void 0),
      b = b || {};
      var d, e, f, g, h, i, j, k, l = eb.ajaxSetup({},
      b),
      m = l.context || l,
      n = l.context && (m.nodeType || m.jquery) ? eb(m) : eb.event,
      o = eb.Deferred(),
      p = eb.Callbacks("once memory"),
      q = l.statusCode || {},
      r = {},
      s = {},
      t = 0,
      u = "canceled",
      v = {
        readyState: 0,
        getResponseHeader: function(a) {
          var b;
          if (2 === t) {
            if (!k) for (k = {}; b = Lc.exec(g);) k[b[1].toLowerCase()] = b[2];
            b = k[a.toLowerCase()]
          }
          return null == b ? null: b
        },
        getAllResponseHeaders: function() {
          return 2 === t ? g: null
        },
        setRequestHeader: function(a, b) {
          var c = a.toLowerCase();
          return t || (a = s[c] = s[c] || a, r[a] = b),
          this
        },
        overrideMimeType: function(a) {
          return t || (l.mimeType = a),
          this
        },
        statusCode: function(a) {
          var b;
          if (a) if (2 > t) for (b in a) q[b] = [q[b], a[b]];
          else v.always(a[v.status]);
          return this
        },
        abort: function(a) {
          var b = a || u;
          return j && j.abort(b),
          c(0, b),
          this
        }
      };
      if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, l.url = ((a || l.url || Ic) + "").replace(Jc, "").replace(Oc, Hc[1] + "//"), l.type = b.method || b.type || l.method || l.type, l.dataTypes = eb.trim(l.dataType || "*").toLowerCase().match(tb) || [""], null == l.crossDomain && (d = Pc.exec(l.url.toLowerCase()), l.crossDomain = !(!d || d[1] === Hc[1] && d[2] === Hc[2] && (d[3] || ("http:" === d[1] ? "80": "443")) === (Hc[3] || ("http:" === Hc[1] ? "80": "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = eb.param(l.data, l.traditional)), O(Qc, l, b, v), 2 === t) return v;
      i = l.global,
      i && 0 === eb.active++&&eb.event.trigger("ajaxStart"),
      l.type = l.type.toUpperCase(),
      l.hasContent = !Nc.test(l.type),
      f = l.url,
      l.hasContent || (l.data && (f = l.url += (Fc.test(f) ? "&": "?") + l.data, delete l.data), l.cache === !1 && (l.url = Kc.test(f) ? f.replace(Kc, "$1_=" + Ec++) : f + (Fc.test(f) ? "&": "?") + "_=" + Ec++)),
      l.ifModified && (eb.lastModified[f] && v.setRequestHeader("If-Modified-Since", eb.lastModified[f]), eb.etag[f] && v.setRequestHeader("If-None-Match", eb.etag[f])),
      (l.data && l.hasContent && l.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", l.contentType),
      v.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + Sc + "; q=0.01": "") : l.accepts["*"]);
      for (e in l.headers) v.setRequestHeader(e, l.headers[e]);
      if (l.beforeSend && (l.beforeSend.call(m, v, l) === !1 || 2 === t)) return v.abort();
      u = "abort";
      for (e in {
        success: 1,
        error: 1,
        complete: 1
      }) v[e](l[e]);
      if (j = O(Rc, l, b, v)) {
        v.readyState = 1,
        i && n.trigger("ajaxSend", [v, l]),
        l.async && l.timeout > 0 && (h = setTimeout(function() {
          v.abort("timeout")
        },
        l.timeout));
        try {
          t = 1,
          j.send(r, c)
        } catch(w) {
          if (! (2 > t)) throw w;
          c( - 1, w)
        }
      } else c( - 1, "No Transport");
      return v
    },
    getJSON: function(a, b, c) {
      return eb.get(a, b, c, "json")
    },
    getScript: function(a, b) {
      return eb.get(a, void 0, b, "script")
    }
  }),
  eb.each(["get", "post"],
  function(a, b) {
    eb[b] = function(a, c, d, e) {
      return eb.isFunction(c) && (e = e || d, d = c, c = void 0),
      eb.ajax({
        url: a,
        type: b,
        dataType: e,
        data: c,
        success: d
      })
    }
  }),
  eb.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"],
  function(a, b) {
    eb.fn[b] = function(a) {
      return this.on(b, a)
    }
  }),
  eb._evalUrl = function(a) {
    return eb.ajax({
      url: a,
      type: "GET",
      dataType: "script",
      async: !1,
      global: !1,
      "throws": !0
    })
  },
  eb.fn.extend({
    wrapAll: function(a) {
      if (eb.isFunction(a)) return this.each(function(b) {
        eb(this).wrapAll(a.call(this, b))
      });
      if (this[0]) {
        var b = eb(a, this[0].ownerDocument).eq(0).clone(!0);
        this[0].parentNode && b.insertBefore(this[0]),
        b.map(function() {
          for (var a = this; a.firstChild && 1 === a.firstChild.nodeType;) a = a.firstChild;
          return a
        }).append(this)
      }
      return this
    },
    wrapInner: function(a) {
      return this.each(eb.isFunction(a) ?
      function(b) {
        eb(this).wrapInner(a.call(this, b))
      }: function() {
        var b = eb(this),
        c = b.contents();
        c.length ? c.wrapAll(a) : b.append(a)
      })
    },
    wrap: function(a) {
      var b = eb.isFunction(a);
      return this.each(function(c) {
        eb(this).wrapAll(b ? a.call(this, c) : a)
      })
    },
    unwrap: function() {
      return this.parent().each(function() {
        eb.nodeName(this, "body") || eb(this).replaceWith(this.childNodes)
      }).end()
    }
  }),
  eb.expr.filters.hidden = function(a) {
    return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !cb.reliableHiddenOffsets() && "none" === (a.style && a.style.display || eb.css(a, "display"))
  },
  eb.expr.filters.visible = function(a) {
    return ! eb.expr.filters.hidden(a)
  };
  var Uc = /%20/g,
  Vc = /\[\]$/,
  Wc = /\r?\n/g,
  Xc = /^(?:submit|button|image|reset|file)$/i,
  Yc = /^(?:input|select|textarea|keygen)/i;
  eb.param = function(a, b) {
    var c, d = [],
    e = function(a, b) {
      b = eb.isFunction(b) ? b() : null == b ? "": b,
      d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
    };
    if (void 0 === b && (b = eb.ajaxSettings && eb.ajaxSettings.traditional), eb.isArray(a) || a.jquery && !eb.isPlainObject(a)) eb.each(a,
    function() {
      e(this.name, this.value)
    });
    else for (c in a) S(c, a[c], b, e);
    return d.join("&").replace(Uc, "+")
  },
  eb.fn.extend({
    serialize: function() {
      return eb.param(this.serializeArray())
    },
    serializeArray: function() {
      return this.map(function() {
        var a = eb.prop(this, "elements");
        return a ? eb.makeArray(a) : this
      }).filter(function() {
        var a = this.type;
        return this.name && !eb(this).is(":disabled") && Yc.test(this.nodeName) && !Xc.test(a) && (this.checked || !Eb.test(a))
      }).map(function(a, b) {
        var c = eb(this).val();
        return null == c ? null: eb.isArray(c) ? eb.map(c,
        function(a) {
          return {
            name: b.name,
            value: a.replace(Wc, "\r\n")
          }
        }) : {
          name: b.name,
          value: c.replace(Wc, "\r\n")
        }
      }).get()
    }
  }),
  eb.ajaxSettings.xhr = void 0 !== a.ActiveXObject ?
  function() {
    return ! this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && T() || U()
  }: T;
  var Zc = 0,
  $c = {},
  _c = eb.ajaxSettings.xhr();
  a.ActiveXObject && eb(a).on("unload",
  function() {
    for (var a in $c) $c[a](void 0, !0)
  }),
  cb.cors = !!_c && "withCredentials" in _c,
  _c = cb.ajax = !!_c,
  _c && eb.ajaxTransport(function(a) {
    if (!a.crossDomain || cb.cors) {
      var b;
      return {
        send: function(c, d) {
          var e, f = a.xhr(),
          g = ++Zc;
          if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields) for (e in a.xhrFields) f[e] = a.xhrFields[e];
          a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType),
          a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
          for (e in c) void 0 !== c[e] && f.setRequestHeader(e, c[e] + "");
          f.send(a.hasContent && a.data || null),
          b = function(c, e) {
            var h, i, j;
            if (b && (e || 4 === f.readyState)) if (delete $c[g], b = void 0, f.onreadystatechange = eb.noop, e) 4 !== f.readyState && f.abort();
            else {
              j = {},
              h = f.status,
              "string" == typeof f.responseText && (j.text = f.responseText);
              try {
                i = f.statusText
              } catch(k) {
                i = ""
              }
              h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = j.text ? 200 : 404
            }
            j && d(h, i, j, f.getAllResponseHeaders())
          },
          a.async ? 4 === f.readyState ? setTimeout(b) : f.onreadystatechange = $c[g] = b: b()
        },
        abort: function() {
          b && b(void 0, !0)
        }
      }
    }
  }),
  eb.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /(?:java|ecma)script/
    },
    converters: {
      "text script": function(a) {
        return eb.globalEval(a),
        a
      }
    }
  }),
  eb.ajaxPrefilter("script",
  function(a) {
    void 0 === a.cache && (a.cache = !1),
    a.crossDomain && (a.type = "GET", a.global = !1)
  }),
  eb.ajaxTransport("script",
  function(a) {
    if (a.crossDomain) {
      var b, c = ob.head || eb("head")[0] || ob.documentElement;
      return {
        send: function(d, e) {
          b = ob.createElement("script"),
          b.async = !0,
          a.scriptCharset && (b.charset = a.scriptCharset),
          b.src = a.url,
          b.onload = b.onreadystatechange = function(a, c) { (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || e(200, "success"))
          },
          c.insertBefore(b, c.firstChild)
        },
        abort: function() {
          b && b.onload(void 0, !0)
        }
      }
    }
  });
  var ad = [],
  bd = /(=)\?(?=&|$)|\?\?/;
  eb.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function() {
      var a = ad.pop() || eb.expando + "_" + Ec++;
      return this[a] = !0,
      a
    }
  }),
  eb.ajaxPrefilter("json jsonp",
  function(b, c, d) {
    var e, f, g, h = b.jsonp !== !1 && (bd.test(b.url) ? "url": "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && bd.test(b.data) && "data");
    return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = eb.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(bd, "$1" + e) : b.jsonp !== !1 && (b.url += (Fc.test(b.url) ? "&": "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
      return g || eb.error(e + " was not called"),
      g[0]
    },
    b.dataTypes[0] = "json", f = a[e], a[e] = function() {
      g = arguments
    },
    d.always(function() {
      a[e] = f,
      b[e] && (b.jsonpCallback = c.jsonpCallback, ad.push(e)),
      g && eb.isFunction(f) && f(g[0]),
      g = f = void 0
    }), "script") : void 0
  }),
  eb.parseHTML = function(a, b, c) {
    if (!a || "string" != typeof a) return null;
    "boolean" == typeof b && (c = b, b = !1),
    b = b || ob;
    var d = lb.exec(a),
    e = !c && [];
    return d ? [b.createElement(d[1])] : (d = eb.buildFragment([a], b, e), e && e.length && eb(e).remove(), eb.merge([], d.childNodes))
  };
  var cd = eb.fn.load;
  eb.fn.load = function(a, b, c) {
    if ("string" != typeof a && cd) return cd.apply(this, arguments);
    var d, e, f, g = this,
    h = a.indexOf(" ");
    return h >= 0 && (d = eb.trim(a.slice(h, a.length)), a = a.slice(0, h)),
    eb.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (f = "POST"),
    g.length > 0 && eb.ajax({
      url: a,
      type: f,
      dataType: "html",
      data: b
    }).done(function(a) {
      e = arguments,
      g.html(d ? eb("<div>").append(eb.parseHTML(a)).find(d) : a)
    }).complete(c &&
    function(a, b) {
      g.each(c, e || [a.responseText, b, a])
    }),
    this
  },
  eb.expr.filters.animated = function(a) {
    return eb.grep(eb.timers,
    function(b) {
      return a === b.elem
    }).length
  };
  var dd = a.document.documentElement;
  eb.offset = {
    setOffset: function(a, b, c) {
      var d, e, f, g, h, i, j, k = eb.css(a, "position"),
      l = eb(a),
      m = {};
      "static" === k && (a.style.position = "relative"),
      h = l.offset(),
      f = eb.css(a, "top"),
      i = eb.css(a, "left"),
      j = ("absolute" === k || "fixed" === k) && eb.inArray("auto", [f, i]) > -1,
      j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0),
      eb.isFunction(b) && (b = b.call(a, c, h)),
      null != b.top && (m.top = b.top - h.top + g),
      null != b.left && (m.left = b.left - h.left + e),
      "using" in b ? b.using.call(a, m) : l.css(m)
    }
  },
  eb.fn.extend({
    offset: function(a) {
      if (arguments.length) return void 0 === a ? this: this.each(function(b) {
        eb.offset.setOffset(this, a, b)
      });
      var b, c, d = {
        top: 0,
        left: 0
      },
      e = this[0],
      f = e && e.ownerDocument;
      return f ? (b = f.documentElement, eb.contains(b, e) ? (typeof e.getBoundingClientRect !== xb && (d = e.getBoundingClientRect()), c = V(f), {
        top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
        left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
      }) : d) : void 0
    },
    position: function() {
      if (this[0]) {
        var a, b, c = {
          top: 0,
          left: 0
        },
        d = this[0];
        return "fixed" === eb.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), eb.nodeName(a[0], "html") || (c = a.offset()), c.top += eb.css(a[0], "borderTopWidth", !0), c.left += eb.css(a[0], "borderLeftWidth", !0)),
        {
          top: b.top - c.top - eb.css(d, "marginTop", !0),
          left: b.left - c.left - eb.css(d, "marginLeft", !0)
        }
      }
    },
    offsetParent: function() {
      return this.map(function() {
        for (var a = this.offsetParent || dd; a && !eb.nodeName(a, "html") && "static" === eb.css(a, "position");) a = a.offsetParent;
        return a || dd
      })
    }
  }),
  eb.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  },
  function(a, b) {
    var c = /Y/.test(b);
    eb.fn[a] = function(d) {
      return Db(this,
      function(a, d, e) {
        var f = V(a);
        return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void(f ? f.scrollTo(c ? eb(f).scrollLeft() : e, c ? e: eb(f).scrollTop()) : a[d] = e)
      },
      a, d, arguments.length, null)
    }
  }),
  eb.each(["top", "left"],
  function(a, b) {
    eb.cssHooks[b] = A(cb.pixelPosition,
    function(a, c) {
      return c ? (c = bc(a, b), dc.test(c) ? eb(a).position()[b] + "px": c) : void 0
    })
  }),
  eb.each({
    Height: "height",
    Width: "width"
  },
  function(a, b) {
    eb.each({
      padding: "inner" + a,
      content: b,
      "": "outer" + a
    },
    function(c, d) {
      eb.fn[d] = function(d, e) {
        var f = arguments.length && (c || "boolean" != typeof d),
        g = c || (d === !0 || e === !0 ? "margin": "border");
        return Db(this,
        function(b, c, d) {
          var e;
          return eb.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? eb.css(b, c, g) : eb.style(b, c, d, g)
        },
        b, f ? d: void 0, f, null)
      }
    })
  }),
  eb.fn.size = function() {
    return this.length
  },
  eb.fn.andSelf = eb.fn.addBack,
  "function" == typeof define && define.amd && define("jquery", [],
  function() {
    return eb
  });
  var ed = a.jQuery,
  fd = a.$;
  return eb.noConflict = function(b) {
    return a.$ === eb && (a.$ = fd),
    b && a.jQuery === eb && (a.jQuery = ed),
    eb
  },
  typeof b === xb && (a.jQuery = a.$ = eb),
  eb
}),
!
function() {
  "use strict";
  function a(a) {
    a.fn.swiper = function(b) {
      var c;
      return a(this).each(function() {
        var a = new Swiper(this, b);
        c || (c = a)
      }),
      c
    }
  }
  window.Swiper = function(a, b) {
    function c() {
      return "horizontal" === m.params.direction
    }
    function d(a) {
      var b, c, d = function() {
        "undefined" != typeof m && null !== m && (void 0 !== m.imagesLoaded && m.imagesLoaded++, m.imagesLoaded === m.imagesToLoad.length && (m.update(), m.params.onImagesReady && m.params.onImagesReady(m)))
      };
      a.complete ? d() : (c = a.currentSrc || a.getAttribute("src"), c ? (b = new Image, b.onload = d, b.onerror = d, b.src = c) : d())
    }
    function e() {
      m.autoplayTimeoutId = setTimeout(function() {
        m.params.loop ? (m.fixLoop(), m._slideNext()) : m.isEnd ? b.autoplayStopOnLast ? m.stopAutoplay() : m._slideTo(0) : m._slideNext()
      },
      m.params.autoplay)
    }
    function f(a, b) {
      var c = n(a.target);
      if (!c.is(b)) if ("string" == typeof b) c = c.parents(b);
      else if (b.nodeType) {
        var d;
        return c.parents().each(function(a, c) {
          c === b && (d = b)
        }),
        d ? b: void 0
      }
      return 0 === c.length ? void 0 : c[0]
    }
    function g(a, b) {
      b = b || {};
      var c = window.MutationObserver || window.WebkitMutationObserver,
      d = new c(function(a) {
        a.forEach(function() {
          m.onResize()
        })
      });
      d.observe(a, {
        attributes: "undefined" == typeof b.attributes ? !0 : b.attributes,
        childList: "undefined" == typeof b.childList ? !0 : b.childList,
        characterData: "undefined" == typeof b.characterData ? !0 : b.characterData
      }),
      m.observers.push(d)
    }
    function h(a) {
      var b = a.keyCode || a.charCode;
      if (! (a.shiftKey || a.altKey || a.ctrlKey || a.metaKey)) {
        if (document.activeElement && document.activeElement.nodeName && ("input" === document.activeElement.nodeName.toLowerCase() || "textarea" === document.activeElement.nodeName.toLowerCase())) return ! 1;
        if (37 === b || 39 === b || 38 === b || 40 === b) {
          var d = !1;
          if (m.container.parents(".swiper-slide").length > 0 && 0 === m.container.parents(".swiper-slide-active").length) return;
          for (var e = {
            left: window.pageXOffset,
            top: window.pageYOffset
          },
          f = window.innerWidth, g = window.innerHeight, h = m.container.offset(), i = [[h.left, h.top], [h.left + m.width, h.top], [h.left, h.top + m.height], [h.left + m.width, h.top + m.height]], j = 0; j < i.length; j++) {
            var k = i[j];
            k[0] >= e.left && k[0] <= e.left + f && k[1] >= e.top && k[1] <= e.top + g && (d = !0)
          }
          if (!d) return
        }
        c() ? ((37 === b || 39 === b) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), 39 === b && m.slideNext(), 37 === b && m.slidePrev()) : ((38 === b || 40 === b) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), 40 === b && m.slideNext(), 38 === b && m.slidePrev())
      }
    }
    function i(a) {
      var b = m._wheelEvent,
      d = 0;
      if (a.detail) d = -a.detail;
      else if ("mousewheel" === b) if (m.params.mousewheelForceToAxis) if (c()) {
        if (! (Math.abs(a.wheelDeltaX) > Math.abs(a.wheelDeltaY))) return;
        d = a.wheelDeltaX
      } else {
        if (! (Math.abs(a.wheelDeltaY) > Math.abs(a.wheelDeltaX))) return;
        d = a.wheelDeltaY
      } else d = a.wheelDelta;
      else if ("DOMMouseScroll" === b) d = -a.detail;
      else if ("wheel" === b) if (m.params.mousewheelForceToAxis) if (c()) {
        if (! (Math.abs(a.deltaX) > Math.abs(a.deltaY))) return;
        d = -a.deltaX
      } else {
        if (! (Math.abs(a.deltaY) > Math.abs(a.deltaX))) return;
        d = -a.deltaY
      } else d = Math.abs(a.deltaX) > Math.abs(a.deltaY) ? -a.deltaX: -a.deltaY;
      if (m.params.freeMode) {
        var e = m.getWrapperTranslate() + d;
        if (e > 0 && (e = 0), e < m.maxTranslate() && (e = m.maxTranslate()), m.setWrapperTransition(0), m.setWrapperTranslate(e), m.updateProgress(), m.updateActiveIndex(), 0 === e || e === m.maxTranslate()) return
      } else(new Date).getTime() - m._lastWheelScrollTime > 60 && (0 > d ? m.slideNext() : m.slidePrev()),
      m._lastWheelScrollTime = (new Date).getTime();
      return m.params.autoplay && m.stopAutoplay(),
      a.preventDefault ? a.preventDefault() : a.returnValue = !1,
      !1
    }
    var j = {
      direction: "horizontal",
      touchEventsTarget: "container",
      initialSlide: 0,
      speed: 300,
      autoplay: !1,
      autoplayDisableOnInteraction: !0,
      freeMode: !1,
      freeModeMomentum: !0,
      freeModeMomentumRatio: 1,
      freeModeMomentumBounce: !0,
      freeModeMomentumBounceRatio: 1,
      effect: "slide",
      coverflow: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: !0
      },
      cube: {
        slideShadows: !0,
        shadow: !0,
        shadowOffset: 20,
        shadowScale: .94
      },
      scrollbar: null,
      scrollbarHide: !0,
      keyboardControl: !1,
      mousewheelControl: !1,
      mousewheelForceToAxis: !1,
      hashnav: !1,
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerColumn: 1,
      slidesPerColumnFill: "column",
      slidesPerGroup: 1,
      centeredSlides: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: .5,
      longSwipesMs: 300,
      followFinger: !0,
      onlyExternal: !1,
      threshold: 0,
      touchMoveStopPropagation: !0,
      pagination: null,
      paginationClickable: !1,
      paginationHide: !1,
      resistance: !0,
      resistanceRatio: .85,
      nextButton: null,
      prevButton: null,
      watchSlidesProgress: !1,
      watchVisibility: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      releaseFormElements: !0,
      slideToClickedSlide: !1,
      updateOnImagesReady: !0,
      loop: !1,
      loopAdditionalSlides: 0,
      loopedSlides: null,
      control: void 0,
      controlInverse: !1,
      allowSwipeToPrev: !0,
      allowSwipeToNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      slideClass: "swiper-slide",
      slideActiveClass: "swiper-slide-active",
      slideVisibleClass: "swiper-slide-visible",
      slideDuplicateClass: "swiper-slide-duplicate",
      slideNextClass: "swiper-slide-next",
      slidePrevClass: "swiper-slide-prev",
      wrapperClass: "swiper-wrapper",
      bulletClass: "swiper-pagination-bullet",
      bulletActiveClass: "swiper-pagination-bullet-active",
      buttonDisabledClass: "swiper-button-disabled",
      paginationHiddenClass: "swiper-pagination-hidden",
      observer: !1,
      observeParents: !1
    };
    b = b || {};
    for (var k in j) if ("undefined" == typeof b[k]) b[k] = j[k];
    else if ("object" == typeof b[k]) for (var l in j[k])"undefined" == typeof b[k][l] && (b[k][l] = j[k][l]);
    var m = this;
    m.params = b;
    var n;
    if (n = "undefined" == typeof Dom7 ? window.Dom7 || window.Zepto || window.jQuery: Dom7, n && (m.container = n(a), 0 !== m.container.length)) {
      if (m.container.length > 1) return void m.container.each(function() {
        new Swiper(this, b)
      });
      m.container[0].swiper = m,
      m.container.data("swiper", m),
      m.container.addClass("swiper-container-" + m.params.direction),
      m.params.freeMode && m.container.addClass("swiper-container-free-mode"),
      ["cube", "coverflow"].indexOf(m.params.effect) >= 0 && (m.support.transforms3d ? (m.params.watchSlidesProgress = !0, m.container.addClass("swiper-container-3d")) : m.params.effect = "slide"),
      "slide" !== m.params.effect && m.container.addClass("swiper-container-" + m.params.effect),
      "cube" === m.params.effect && (m.params.resistanceRatio = 0, m.params.slidesPerView = 1, m.params.slidesPerColumn = 1, m.params.slidesPerGroup = 1, m.params.centeredSlides = !1, m.params.spaceBetween = 0),
      "fade" === m.params.effect && (m.params.watchSlidesProgress = !0, m.params.spaceBetween = 0),
      m.params.grabCursor && m.support.touch && (m.params.grabCursor = !1),
      m.wrapper = m.container.children("." + m.params.wrapperClass),
      m.params.pagination && (m.paginationContainer = n(m.params.pagination), m.params.paginationClickable && m.paginationContainer.addClass("swiper-pagination-clickable")),
      m.rtl = c() && ("rtl" === m.container[0].dir.toLowerCase() || "rtl" === m.container.css("direction")),
      m.rtl && m.container.addClass("swiper-container-rtl"),
      m.rtl && (m.wrongRTL = "-webkit-box" === m.wrapper.css("display")),
      m.translate = 0,
      m.progress = 0,
      m.velocity = 0,
      m.lockSwipeToNext = function() {
        m.params.allowSwipeToNext = !1
      },
      m.lockSwipeToPrev = function() {
        m.params.allowSwipeToPrev = !1
      },
      m.lockSwipes = function() {
        m.params.allowSwipeToNext = m.params.allowSwipeToPrev = !1
      },
      m.unlockSwipeToNext = function() {
        m.params.allowSwipeToNext = !0
      },
      m.unlockSwipeToPrev = function() {
        m.params.allowSwipeToPrev = !0
      },
      m.unlockSwipes = function() {
        m.params.allowSwipeToNext = m.params.allowSwipeToPrev = !0
      },
      m.params.slidesPerColumn > 1 && m.container.addClass("swiper-container-multirow"),
      m.params.grabCursor && (m.container[0].style.cursor = "move", m.container[0].style.cursor = "-webkit-grab", m.container[0].style.cursor = "-moz-grab", m.container[0].style.cursor = "grab"),
      m.imagesToLoad = [],
      m.imagesLoaded = 0,
      m.preloadImages = function() {
        m.imagesToLoad = m.container.find("img");
        for (var a = 0; a < m.imagesToLoad.length; a++) d(m.imagesToLoad[a])
      },
      m.autoplayTimeoutId = void 0,
      m.autoplaying = !1,
      m.autoplayPaused = !1,
      m.startAutoplay = function() {
        return "undefined" != typeof m.autoplayTimeoutId ? !1 : void(m.params.autoplay && (m.autoplaying || (m.autoplaying = !0, m.params.onAutoplayStart && m.params.onAutoplayStart(m), e())))
      },
      m.stopAutoplay = function() {
        m.autoplayTimeoutId && (m.autoplayTimeoutId && clearTimeout(m.autoplayTimeoutId), m.autoplaying = !1, m.autoplayTimeoutId = void 0, m.params.onAutoplayStop && m.params.onAutoplayStop(m))
      },
      m.pauseAutoplay = function(a) {
        m.autoplayPaused || (m.autoplayTimeoutId && clearTimeout(m.autoplayTimeoutId), m.autoplayPaused = !0, 0 === a ? (m.autoplayPaused = !1, e()) : m.wrapper.transitionEnd(function() {
          m.autoplayPaused = !1,
          e()
        }))
      },
      m.updateContainerSize = function() {
        m.width = m.container[0].clientWidth,
        m.height = m.container[0].clientHeight,
        m.size = c() ? m.width: m.height
      },
      m.updateSlidesSize = function() {
        m.slides = m.wrapper.children("." + m.params.slideClass),
        m.snapGrid = [],
        m.slidesGrid = [],
        m.slidesSizesGrid = [];
        var a, b = m.params.spaceBetween,
        d = 0,
        e = 0,
        f = 0;
        "string" == typeof b && b.indexOf("%") >= 0 && (b = parseFloat(b.replace("%", "")) / 100 * m.size),
        m.virtualWidth = -b,
        m.slides.css(m.rtl ? {
          marginLeft: "",
          marginTop: ""
        }: {
          marginRight: "",
          marginBottom: ""
        });
        var g;
        m.params.slidesPerColumn > 1 && (g = Math.floor(m.slides.length / m.params.slidesPerColumn) === m.slides.length / m.params.slidesPerColumn ? m.slides.length: Math.ceil(m.slides.length / m.params.slidesPerColumn) * m.params.slidesPerColumn);
        var h;
        for (a = 0; a < m.slides.length; a++) {
          h = 0;
          var i = m.slides.eq(a);
          if (m.params.slidesPerColumn > 1) {
            var j, k, l, n, o = m.params.slidesPerColumn;
            "column" === m.params.slidesPerColumnFill ? (k = Math.floor(a / o), l = a - k * o, j = k + l * g / o, i.css({
              "-webkit-box-ordinal-group": j,
              "-moz-box-ordinal-group": j,
              "-ms-flex-order": j,
              "-webkit-order": j,
              order: j
            })) : (n = g / o, l = Math.floor(a / n), k = a - l * n),
            i.css({
              "margin-top": 0 !== l && m.params.spaceBetween && m.params.spaceBetween + "px"
            }).attr("data-swiper-column", k).attr("data-swiper-row", l)
          }
          "none" !== i.css("display") && ("auto" === m.params.slidesPerView ? h = c() ? i.outerWidth(!0) : i.outerHeight(!0) : (h = (m.size - (m.params.slidesPerView - 1) * b) / m.params.slidesPerView, c() ? m.slides[a].style.width = h + "px": m.slides[a].style.height = h + "px"), m.slides[a].swiperSlideSize = h, m.slidesSizesGrid.push(h), m.params.centeredSlides ? (d = d + h / 2 + e / 2 + b, 0 === a && (d = d - m.size / 2 - b), Math.abs(d) < .001 && (d = 0), f % m.params.slidesPerGroup === 0 && m.snapGrid.push(d), m.slidesGrid.push(d)) : (f % m.params.slidesPerGroup === 0 && m.snapGrid.push(d), m.slidesGrid.push(d), d = d + h + b), m.virtualWidth += h + b, e = h, f++)
        }
        m.virtualWidth = Math.max(m.virtualWidth, m.size);
        var p;
        if (m.rtl && m.wrongRTL && ("slide" === m.params.effect || "coverflow" === m.params.effect) && m.wrapper.css({
          width: m.virtualWidth + m.params.spaceBetween + "px"
        }), m.params.slidesPerColumn > 1 && (m.virtualWidth = (h + m.params.spaceBetween) * g, m.virtualWidth = Math.ceil(m.virtualWidth / m.params.slidesPerColumn) - m.params.spaceBetween, m.wrapper.css({
          width: m.virtualWidth + m.params.spaceBetween + "px"
        }), m.params.centeredSlides)) {
          for (p = [], a = 0; a < m.snapGrid.length; a++) m.snapGrid[a] < m.virtualWidth + m.snapGrid[0] && p.push(m.snapGrid[a]);
          m.snapGrid = p
        }
        if (!m.params.centeredSlides) {
          for (p = [], a = 0; a < m.snapGrid.length; a++) m.snapGrid[a] <= m.virtualWidth - m.size && p.push(m.snapGrid[a]);
          m.snapGrid = p,
          Math.floor(m.virtualWidth - m.size) > Math.floor(m.snapGrid[m.snapGrid.length - 1]) && m.snapGrid.push(m.virtualWidth - m.size)
        }
        0 === m.snapGrid.length && (m.snapGrid = [0]),
        0 !== m.params.spaceBetween && m.slides.css(c() ? m.rtl ? {
          marginLeft: b + "px"
        }: {
          marginRight: b + "px"
        }: {
          marginBottom: b + "px"
        }),
        m.params.watchSlidesProgress && m.updateSlidesOffset()
      },
      m.updateSlidesOffset = function() {
        for (var a = 0; a < m.slides.length; a++) m.slides[a].swiperSlideOffset = c() ? m.slides[a].offsetLeft: m.slides[a].offsetTop
      },
      m.update = function() {
        m.updateContainerSize(),
        m.updateSlidesSize(),
        m.updateProgress(),
        m.updatePagination(),
        m.updateClasses()
      },
      m.minTranslate = function() {
        return - m.snapGrid[0]
      },
      m.maxTranslate = function() {
        return - m.snapGrid[m.snapGrid.length - 1]
      },
      m.updateSlidesProgress = function(a) {
        if ("undefined" == typeof a && (a = m.translate || 0), 0 !== m.slides.length) {
          "undefined" == typeof m.slides[0].swiperSlideOffset && m.updateSlidesOffset();
          var b = m.params.centeredSlides ? -a + m.size / 2 : -a;
          m.rtl && (b = m.params.centeredSlides ? a - m.size / 2 : a),
          m.container[0].getBoundingClientRect(),
          c() ? "left": "top",
          c() ? "right": "bottom",
          m.slides.removeClass(m.params.slideVisibleClass);
          for (var d = 0; d < m.slides.length; d++) {
            var e = m.slides[d],
            f = m.params.centeredSlides === !0 ? e.swiperSlideSize / 2 : 0,
            g = (b - e.swiperSlideOffset - f) / (e.swiperSlideSize + m.params.spaceBetween);
            if (m.params.watchVisibility) {
              var h = -(b - e.swiperSlideOffset - f),
              i = h + m.slidesSizesGrid[d],
              j = h >= 0 && h < m.size || i > 0 && i <= m.size || 0 >= h && i >= m.size;
              j && m.slides.eq(d).addClass(m.params.slideVisibleClass)
            }
            e.progress = m.rtl ? -g: g
          }
        }
      },
      m.updateProgress = function(a) {
        "undefined" == typeof a && (a = m.translate || 0),
        m.progress = (a - m.minTranslate()) / (m.maxTranslate() - m.minTranslate()),
        m.isBeginning = m.isEnd = !1,
        m.progress <= 0 && (m.isBeginning = !0, m.params.onReachBeginning && m.params.onReachBeginning(m)),
        m.progress >= 1 && (m.isEnd = !0, m.params.onReachEnd && m.params.onReachEnd(m)),
        m.params.watchSlidesProgress && m.updateSlidesProgress(a),
        m.params.onProgress && m.params.onProgress(m, m.progress)
      },
      m.updateActiveIndex = function() {
        var a, b, c, d = m.rtl ? m.translate: -m.translate;
        for (b = 0; b < m.slidesGrid.length; b++)"undefined" != typeof m.slidesGrid[b + 1] ? d >= m.slidesGrid[b] && d < m.slidesGrid[b + 1] - (m.slidesGrid[b + 1] - m.slidesGrid[b]) / 2 ? a = b: d >= m.slidesGrid[b] && d < m.slidesGrid[b + 1] && (a = b + 1) : d >= m.slidesGrid[b] && (a = b); (0 > a || "undefined" == typeof a) && (a = 0),
        c = Math.floor(a / m.params.slidesPerGroup),
        c >= m.snapGrid.length && (c = m.snapGrid.length - 1),
        a !== m.activeIndex && (m.snapIndex = c, m.previousIndex = m.activeIndex, m.activeIndex = a, m.updateClasses())
      },
      m.updateClasses = function() {
        m.slides.removeClass(m.params.slideActiveClass + " " + m.params.slideNextClass + " " + m.params.slidePrevClass);
        var a = m.slides.eq(m.activeIndex);
        if (a.addClass(m.params.slideActiveClass), a.next("." + m.params.slideClass).addClass(m.params.slideNextClass), a.prev("." + m.params.slideClass).addClass(m.params.slidePrevClass), m.bullets && m.bullets.length > 0) {
          m.bullets.removeClass(m.params.bulletActiveClass);
          var b;
          m.params.loop ? (b = m.activeIndex - m.loopedSlides, b > m.slides.length - 1 - 2 * m.loopedSlides && (b -= m.slides.length - 2 * m.loopedSlides)) : b = "undefined" != typeof m.snapIndex ? m.snapIndex: m.activeIndex || 0,
          m.bullets.eq(b).addClass(m.params.bulletActiveClass)
        }
        m.params.loop || (m.params.prevButton && (m.isBeginning ? n(m.params.prevButton).addClass(m.params.buttonDisabledClass) : n(m.params.prevButton).removeClass(m.params.buttonDisabledClass)), m.params.nextButton && (m.isEnd ? n(m.params.nextButton).addClass(m.params.buttonDisabledClass) : n(m.params.nextButton).removeClass(m.params.buttonDisabledClass)))
      },
      m.updatePagination = function() {
        if (m.params.pagination && m.paginationContainer && m.paginationContainer.length > 0) {
          for (var a = "",
          b = m.params.loop ? m.slides.length - 2 * m.loopedSlides: m.snapGrid.length, c = 0; b > c; c++) a += '<span class="' + m.params.bulletClass + '"></span>';
          m.paginationContainer.html(a),
          m.bullets = m.paginationContainer.find("." + m.params.bulletClass)
        }
      },
      m.onResize = function() {
        m.updateContainerSize(),
        m.updateSlidesSize(),
        m.updateProgress(),
        m.updateClasses(),
        "auto" === m.params.slidesPerView && m.updatePagination(),
        m.isEnd ? m.slideTo(m.slides.length - 1, 0, !1, !0) : m.slideTo(m.activeIndex, 0, !1, !0),
        m.params.scrollbar && m.scrollbar && m.scrollbar.init()
      };
      var o = ["mousedown", "mousemove", "mouseup"];
      window.navigator.pointerEnabled ? o = ["pointerdown", "pointermove", "pointerup"] : window.navigator.msPointerEnabled && (o = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]),
      m.touchEvents = {
        start: m.support.touch || !m.params.simulateTouch ? "touchstart": o[0],
        move: m.support.touch || !m.params.simulateTouch ? "touchmove": o[1],
        end: m.support.touch || !m.params.simulateTouch ? "touchend": o[2]
      },
      (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && ("container" === m.params.touchEventsTarget ? m.container: m.wrapper).addClass("swiper-wp8-" + m.params.direction),
      m.events = function(a) {
        var b = a ? "off": "on",
        c = a ? "removeEventListener": "addEventListener",
        d = "container" === m.params.touchEventsTarget ? m.container: m.wrapper,
        e = m.support.touch ? d: n(document),
        f = m.params.nested ? !0 : !1;
        d[0][c](m.touchEvents.start, m.onTouchStart, !1),
        e[0][c](m.touchEvents.move, m.onTouchMove, f),
        e[0][c](m.touchEvents.end, m.onTouchEnd, !1),
        window[c]("resize", m.onResize),
        m.params.nextButton && n(m.params.nextButton)[b]("click", m.onClickNext),
        m.params.prevButton && n(m.params.prevButton)[b]("click", m.onClickPrev),
        m.params.pagination && m.params.paginationClickable && n(m.paginationContainer)[b]("click", "." + m.params.bulletClass, m.onClickIndex),
        (m.params.preventClicks || m.params.preventClicksPropagation) && d[0][c]("click", m.preventClicks, !0)
      },
      m.attachEvents = function() {
        m.events()
      },
      m.detachEvents = function() {
        m.events(!0)
      },
      m.allowClick = !0,
      m.preventClicks = function(a) {
        m.allowClick || (m.params.preventClicks && a.preventDefault(), m.params.preventClicksPropagation && (a.stopPropagation(), a.stopImmediatePropagation()))
      },
      m.onClickNext = function(a) {
        a.preventDefault(),
        m.slideNext()
      },
      m.onClickPrev = function(a) {
        a.preventDefault(),
        m.slidePrev()
      },
      m.onClickIndex = function(a) {
        a.preventDefault();
        var b = n(this).index() * m.params.slidesPerGroup;
        m.params.loop && (b += m.loopedSlides),
        m.slideTo(b)
      },
      m.updateClickedSlide = function(a) {
        var b = f(a, "." + m.params.slideClass);
        if (!b) return m.clickedSlide = void 0,
        void(m.clickedIndex = void 0);
        if (m.clickedSlide = b, m.clickedIndex = n(b).index(), m.params.slideToClickedSlide && void 0 !== m.clickedIndex && m.clickedIndex !== m.activeIndex) {
          var c, d = m.clickedIndex;
          if (m.params.loop) if (c = n(m.clickedSlide).attr("data-swiper-slide-index"), d > m.slides.length - m.params.slidesPerView) m.fixLoop(),
          d = m.wrapper.children("." + m.params.slideClass + '[data-swiper-slide-index="' + c + '"]').eq(0).index(),
          setTimeout(function() {
            m.slideTo(d)
          },
          0);
          else if (d < m.params.slidesPerView - 1) {
            m.fixLoop();
            var e = m.wrapper.children("." + m.params.slideClass + '[data-swiper-slide-index="' + c + '"]');
            d = e.eq(e.length - 1).index(),
            setTimeout(function() {
              m.slideTo(d)
            },
            0)
          } else m.slideTo(d);
          else m.slideTo(d)
        }
      };
      var p, q, r, s, t, u, v, w = {},
      x = {};
      m.animating = !1;
      var y, z, A = Date.now(),
      B = [],
      C = "input, select, textarea, button";
      if (m.onTouchStart = function(a) {
        if (a.originalEvent && (a = a.originalEvent), !("mousedown" === a.type && "which" in a && 3 === a.which || m.params.noSwiping && f(a, "." + m.params.noSwipingClass) || m.params.swipeHandler && !f(a, m.params.swipeHandler))) {
          if (p = !0, q = !1, s = void 0, w.x = x.x = "touchstart" === a.type ? a.targetTouches[0].pageX: a.pageX, w.y = x.y = "touchstart" === a.type ? a.targetTouches[0].pageY: a.pageY, r = Date.now(), m.allowClick = !0, m.updateContainerSize(), m.swipeDirection = void 0, m.params.threshold > 0 && (v = !1), "mousedown" === a.type) {
            var b = !0;
            n(a.target).is(C) && (b = !1),
            document.activeElement && n(document.activeElement).is(C) && document.activeElement.blur(),
            b && a.preventDefault()
          }
          m.params.onTouchStart && m.params.onTouchStart(m, a)
        }
      },
      m.onTouchMove = function(a) {
        if (a.originalEvent && (a = a.originalEvent), !a.preventedByNestedSwiper) {
          if (m.params.onlyExternal) return q = !0,
          void(m.allowClick = !1);
          if (m.params.onTouchMove && m.params.onTouchMove(m, a), m.allowClick = !1, p && !(a.targetTouches && a.targetTouches.length > 1)) {
            x.x = "touchmove" === a.type ? a.targetTouches[0].pageX: a.pageX,
            x.y = "touchmove" === a.type ? a.targetTouches[0].pageY: a.pageY;
            var d = 180 * Math.atan2(Math.abs(x.y - w.y), Math.abs(x.x - w.x)) / Math.PI;
            if ("undefined" == typeof s && (s = c() ? d > m.params.touchAngle: 90 - d > m.params.touchAngle), s) return void(p = !1);
            m.params.onSliderMove && m.params.onSliderMove(m, a),
            a.preventDefault(),
            m.params.touchMoveStopPropagation && !m.params.nested && a.stopPropagation(),
            q || (b.loop && m.fixLoop(), u = "cube" === m.params.effect ? (m.rtl ? -m.translate: m.translate) || 0 : m.getWrapperTranslate(), m.setWrapperTransition(0), m.animating && m.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"), m.params.autoplay && m.autoplaying && (m.params.autoplayDisableOnInteraction ? m.stopAutoplay() : m.pauseAutoplay()), z = !1, m.params.grabCursor && (m.container[0].style.cursor = "move", m.container[0].style.cursor = "-webkit-grabbing", m.container[0].style.cursor = "-moz-grabbin", m.container[0].style.cursor = "grabbing")),
            q = !0;
            var e = c() ? x.x - w.x: x.y - w.y;
            e *= m.params.touchRatio,
            m.rtl && (e = -e),
            m.swipeDirection = e > 0 ? "prev": "next",
            t = e + u;
            var f = !0;
            if (e > 0 && t > m.minTranslate() ? (f = !1, m.params.resistance && (t = m.minTranslate() - 1 + Math.pow( - m.minTranslate() + u + e, m.params.resistanceRatio))) : 0 > e && t < m.maxTranslate() && (f = !1, m.params.resistance && (t = m.maxTranslate() + 1 - Math.pow(m.maxTranslate() - u - e, m.params.resistanceRatio))), f && (a.preventedByNestedSwiper = !0), !m.params.allowSwipeToNext && "next" === m.swipeDirection && u > t && (t = u), !m.params.allowSwipeToPrev && "prev" === m.swipeDirection && t > u && (t = u), m.params.followFinger) {
              if (m.params.threshold > 0) {
                if (! (Math.abs(e) > m.params.threshold || v)) return void(t = u);
                if (!v) return v = !0,
                w.x = x.x,
                w.y = x.y,
                void(t = u)
              } (m.params.freeMode || m.params.watchSlidesProgress) && m.updateActiveIndex(),
              m.params.freeMode && (0 === B.length && B.push({
                position: w[c() ? "x": "y"],
                time: r
              }), B.push({
                position: x[c() ? "x": "y"],
                time: (new Date).getTime()
              })),
              m.updateProgress(t),
              m.setWrapperTranslate(t)
            }
          }
        }
      },
      m.onTouchEnd = function(a) {
        if (a.originalEvent && (a = a.originalEvent), p) {
          m.params.onTouchEnd && m.params.onTouchEnd(m, a),
          m.params.grabCursor && q && p && (m.container[0].style.cursor = "move", m.container[0].style.cursor = "-webkit-grab", m.container[0].style.cursor = "-moz-grab", m.container[0].style.cursor = "grab");
          var b = Date.now(),
          d = b - r;
          m.allowClick && (m.updateClickedSlide(a), m.params.onTap && m.params.onTap(m, a), 300 > d && b - A > 300 && (y && clearTimeout(y), y = setTimeout(function() {
            m && (m.params.paginationHide && m.paginationContainer.length > 0 && !n(a.target).hasClass(m.params.bulletClass) && m.paginationContainer.toggleClass(m.params.paginationHiddenClass), m.params.onClick && m.params.onClick(m, a))
          },
          300)), 300 > d && 300 > b - A && (y && clearTimeout(y), m.params.onDoubleTap && m.params.onDoubleTap(m, a))),
          A = Date.now(),
          setTimeout(function() {
            m && m.allowClick && (m.allowClick = !0)
          },
          0);
          var e = c() ? x.x - w.x: x.y - w.y;
          if (!p || !q || !m.swipeDirection || 0 === e || t === u) return void(p = q = !1);
          p = q = !1;
          var f;
          if (f = m.params.followFinger ? m.rtl ? m.translate: -m.translate: -t, m.params.freeMode) {
            if (f < -m.minTranslate()) return void m.slideTo(m.activeIndex);
            if (f > -m.maxTranslate()) return void m.slideTo(m.slides.length - 1);
            if (m.params.freeModeMomentum) {
              if (B.length > 1) {
                var g = B.pop(),
                h = B.pop(),
                i = g.position - h.position,
                j = g.time - h.time;
                m.velocity = i / j,
                m.velocity = m.velocity / 2,
                Math.abs(m.velocity) < .02 && (m.velocity = 0),
                (j > 150 || d > 300) && (m.velocity = 0)
              } else m.velocity = 0;
              B.length = 0;
              var k, l = 1e3 * m.params.freeModeMomentumRatio,
              o = m.velocity * l,
              s = m.translate + o,
              v = !1,
              C = 20 * Math.abs(m.velocity) * m.params.freeModeMomentumBounceRatio;
              s < m.maxTranslate() && (m.params.freeModeMomentumBounce ? (s + m.maxTranslate() < -C && (s = m.maxTranslate() - C), k = m.maxTranslate(), v = !0, z = !0) : s = m.maxTranslate()),
              s > m.minTranslate() && (m.params.freeModeMomentumBounce ? (s - m.minTranslate() > C && (s = m.minTranslate() + C), k = m.minTranslate(), v = !0, z = !0) : s = m.minTranslate()),
              0 !== m.velocity && (l = Math.abs((s - m.translate) / m.velocity)),
              m.params.freeModeMomentumBounce && v ? (m.updateProgress(k), m.setWrapperTranslate(s), m.setWrapperTransition(l), m.onTransitionStart(), m.animating = !0, m.wrapper.transitionEnd(function() {
                z && (m.params.onMomentumBounce && m.params.onMomentumBounce(m), m.setWrapperTranslate(k), m.setWrapperTransition(m.params.speed), m.wrapper.transitionEnd(function() {
                  m.onTransitionEnd()
                }))
              })) : m.velocity ? (m.updateProgress(s), m.setWrapperTranslate(s), m.setWrapperTransition(l), m.onTransitionStart(), m.animating || (m.animating = !0, m.wrapper.transitionEnd(function() {
                m.onTransitionEnd()
              }))) : m.updateProgress(s),
              m.updateActiveIndex()
            }
            return void((!m.params.freeModeMomentum || d >= m.params.longSwipesMs) && (m.updateProgress(), m.updateActiveIndex()))
          }
          var D, E = 0,
          F = m.slidesSizesGrid[0];
          for (D = 0; D < m.slidesGrid.length; D += m.params.slidesPerGroup)"undefined" != typeof m.slidesGrid[D + m.params.slidesPerGroup] ? f >= m.slidesGrid[D] && f < m.slidesGrid[D + m.params.slidesPerGroup] && (E = D, F = m.slidesGrid[D + m.params.slidesPerGroup] - m.slidesGrid[D]) : f >= m.slidesGrid[D] && (E = D, F = m.slidesGrid[m.slidesGrid.length - 1] - m.slidesGrid[m.slidesGrid.length - 2]);
          var G = (f - m.slidesGrid[E]) / F;
          if (d > m.params.longSwipesMs) {
            if (!m.params.longSwipes) return void m.slideTo(m.activeIndex);
            "next" === m.swipeDirection && m.slideTo(G >= m.params.longSwipesRatio ? E + m.params.slidesPerGroup: E),
            "prev" === m.swipeDirection && m.slideTo(G > 1 - m.params.longSwipesRatio ? E + m.params.slidesPerGroup: E)
          } else {
            if (!m.params.shortSwipes) return void m.slideTo(m.activeIndex);
            "next" === m.swipeDirection && m.slideTo(E + m.params.slidesPerGroup),
            "prev" === m.swipeDirection && m.slideTo(E)
          }
        }
      },
      m._slideTo = function(a, b) {
        return m.slideTo(a, b, !0, !0)
      },
      m.slideTo = function(a, b, d, e) {
        "undefined" == typeof d && (d = !0),
        "undefined" == typeof a && (a = 0),
        0 > a && (a = 0),
        m.snapIndex = Math.floor(a / m.params.slidesPerGroup),
        m.snapIndex >= m.snapGrid.length && (m.snapIndex = m.snapGrid.length - 1);
        var f = -m.snapGrid[m.snapIndex];
        m.params.autoplay && m.autoplaying && (e || !m.params.autoplayDisableOnInteraction ? m.pauseAutoplay(b) : m.stopAutoplay()),
        m.updateProgress(f);
        for (var g = 0; g < m.slidesGrid.length; g++) - f >= m.slidesGrid[g] && (a = g);
        return "undefined" == typeof b && (b = m.params.speed),
        m.previousIndex = m.activeIndex || 0,
        m.activeIndex = a,
        f === m.translate ? (m.updateClasses(), !1) : (d && m.onTransitionStart(), c() ? f: 0, c() ? 0 : f, 0 === b ? (m.setWrapperTransition(0), m.setWrapperTranslate(f), d && m.onTransitionEnd()) : (m.setWrapperTransition(b), m.setWrapperTranslate(f), m.animating || (m.animating = !0, m.wrapper.transitionEnd(function() {
          d && m.onTransitionEnd()
        }))), m.updateClasses(), void 0)
      },
      m.onTransitionStart = function() {
        m.params.onTransitionStart && m.params.onTransitionStart(m),
        m.params.onSlideChangeStart && m.activeIndex !== m.previousIndex && m.params.onSlideChangeStart(m)
      },
      m.onTransitionEnd = function() {
        m.animating = !1,
        m.setWrapperTransition(0),
        m.params.onTransitionEnd && m.params.onTransitionEnd(m),
        m.params.onSlideChangeEnd && m.activeIndex !== m.previousIndex && m.params.onSlideChangeEnd(m)
      },
      m.slideNext = function(a, b, c) {
        return m.params.loop ? m.animating ? !1 : (m.fixLoop(), void setTimeout(function() {
          return m.slideTo(m.activeIndex + 1, b, a, c)
        },
        0)) : m.slideTo(m.activeIndex + m.params.slidesPerGroup, b, a, c)
      },
      m._slideNext = function(a) {
        return m.slideNext(!0, a, !0)
      },
      m.slidePrev = function(a, b, c) {
        return m.params.loop ? m.animating ? !1 : (m.fixLoop(), void setTimeout(function() {
          return m.slideTo(m.activeIndex - 1, b, a, c)
        },
        0)) : m.slideTo(m.activeIndex - 1, b, a, c)
      },
      m._slidePrev = function(a) {
        return m.slidePrev(!0, a, !0)
      },
      m.slideReset = function(a, b) {
        return m.slideTo(m.activeIndex, b, a)
      },
      m.setWrapperTransition = function(a, b) {
        m.wrapper.transition(a),
        m.params.onSetTransition && m.params.onSetTransition(m, a),
        "slide" !== m.params.effect && m.effects[m.params.effect] && m.effects[m.params.effect].setTransition(a),
        m.params.scrollbar && m.scrollbar && m.scrollbar.setTransition(a),
        m.params.control && m.controller && m.controller.setTransition(a, b)
      },
      m.setWrapperTranslate = function(a, b, d) {
        var e = 0,
        f = 0,
        g = 0;
        c() ? e = m.rtl ? -a: a: f = a,
        m.wrapper.transform(m.support.transforms3d ? "translate3d(" + e + "px, " + f + "px, " + g + "px)": "translate(" + e + "px, " + f + "px)"),
        m.translate = c() ? e: f,
        b && m.updateActiveIndex(),
        "slide" !== m.params.effect && m.effects[m.params.effect] && m.effects[m.params.effect].setTranslate(m.translate),
        m.params.scrollbar && m.scrollbar && m.scrollbar.setTranslate(m.translate),
        m.params.control && m.controller && m.controller.setTranslate(m.translate, d),
        m.params.hashnav && m.hashnav && m.hashnav.setHash(),
        m.params.onSetTranslate && m.params.onSetTranslate(m, m.translate)
      },
      m.getTranslate = function(a, b) {
        var c, d, e, f;
        return "undefined" == typeof b && (b = "x"),
        e = window.getComputedStyle(a, null),
        window.WebKitCSSMatrix ? f = new WebKitCSSMatrix("none" === e.webkitTransform ? "": e.webkitTransform) : (f = e.MozTransform || e.OTransform || e.MsTransform || e.msTransform || e.transform || e.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), c = f.toString().split(",")),
        "x" === b && (d = window.WebKitCSSMatrix ? f.m41: parseFloat(16 === c.length ? c[12] : c[4])),
        "y" === b && (d = window.WebKitCSSMatrix ? f.m42: parseFloat(16 === c.length ? c[13] : c[5])),
        m.rtl && d && (d = -d),
        d || 0
      },
      m.getWrapperTranslate = function(a) {
        return "undefined" == typeof a && (a = c() ? "x": "y"),
        m.getTranslate(m.wrapper[0], a)
      },
      m.observers = [], m.initObservers = function() {
        if (m.params.observeParents) for (var a = m.container.parents(), b = 0; b < a.length; b++) g(a[b]);
        g(m.container[0], {
          childList: !1
        }),
        g(m.wrapper[0], {
          attributes: !1
        })
      },
      m.disconnectObservers = function() {
        for (var a = 0; a < m.observers.length; a++) m.observers[a].disconnect();
        m.observers = []
      },
      m.createLoop = function() {
        m.wrapper.children("." + m.params.slideClass + "." + m.params.slideDuplicateClass).remove();
        var a = m.wrapper.children("." + m.params.slideClass);
        m.loopedSlides = parseInt(m.params.loopedSlides || m.params.slidesPerView, 10),
        m.loopedSlides = m.loopedSlides + m.params.loopAdditionalSlides,
        m.loopedSlides > a.length && (m.loopedSlides = a.length);
        var b, c = [],
        d = [];
        for (a.each(function(b, e) {
          var f = n(this);
          b < m.loopedSlides && d.push(e),
          b < a.length && b >= a.length - m.loopedSlides && c.push(e),
          f.attr("data-swiper-slide-index", b)
        }), b = 0; b < d.length; b++) m.wrapper.append(n(d[b].cloneNode(!0)).addClass(m.params.slideDuplicateClass));
        for (b = c.length - 1; b >= 0; b--) m.wrapper.prepend(n(c[b].cloneNode(!0)).addClass(m.params.slideDuplicateClass))
      },
      m.deleteLoop = function() {
        m.wrapper.children("." + m.params.slideClass + "." + m.params.slideDuplicateClass).remove()
      },
      m.fixLoop = function() {
        var a;
        m.activeIndex < m.loopedSlides ? (a = m.slides.length - 3 * m.loopedSlides + m.activeIndex, a += m.loopedSlides, m.slideTo(a, 0, !1, !0)) : ("auto" === m.params.slidesPerView && m.activeIndex >= 2 * m.loopedSlides || m.activeIndex > m.slides.length - 2 * m.params.slidesPerView) && (a = -m.slides.length + m.activeIndex + m.loopedSlides, a += m.loopedSlides, m.slideTo(a, 0, !1, !0))
      },
      m.appendSlide = function(a) {
        if (m.params.loop && m.deleteLoop(), "object" == typeof a && a.length) for (var b = 0; b < a.length; b++) a[b] && m.wrapper.append(a[b]);
        else m.wrapper.append(a);
        m.params.loop && m.createLoop(),
        m.params.observer && m.support.observer || m.update()
      },
      m.prependSlide = function(a) {
        m.params.loop && m.deleteLoop();
        var b = m.activeIndex + 1;
        if ("object" == typeof a && a.length) {
          for (var c = 0; c < a.length; c++) a[c] && m.wrapper.prepend(a[c]);
          b = m.activeIndex + a.length
        } else m.wrapper.prepend(a);
        m.params.loop && m.createLoop(),
        m.params.observer && m.support.observer || m.update(),
        m.slideTo(b, 0, !1)
      },
      m.effects = {
        fade: {
          setTranslate: function() {
            for (var a = 0; a < m.slides.length; a++) {
              var b = m.slides.eq(a),
              d = b[0].swiperSlideOffset,
              e = -d - m.translate,
              f = 0;
              c() || (f = e, e = 0),
              b.css({
                opacity: 1 + Math.min(Math.max(b[0].progress, -1), 0)
              }).transform("translate3d(" + e + "px, " + f + "px, 0px)")
            }
          },
          setTransition: function(a) {
            m.slides.transition(a)
          }
        },
        cube: {
          setTranslate: function() {
            var a, b = 0;
            m.params.cube.shadow && (c() ? (a = m.wrapper.find(".swiper-cube-shadow"), 0 === a.length && (a = n('<div class="swiper-cube-shadow"></div>'), m.wrapper.append(a)), a.css({
              height: m.width + "px"
            })) : (a = m.container.find(".swiper-cube-shadow"), 0 === a.length && (a = n('<div class="swiper-cube-shadow"></div>'), m.container.append(a))));
            for (var d = 0; d < m.slides.length; d++) {
              var e = m.slides.eq(d),
              f = 90 * d,
              g = Math.floor(f / 360);
              m.rtl && (f = -f, g = Math.floor( - f / 360));
              var h = Math.max(Math.min(e[0].progress, 1), -1),
              i = 0,
              j = 0,
              k = 0;
              d % 4 === 0 ? (i = 4 * -g * m.size, k = 0) : (d - 1) % 4 === 0 ? (i = 0, k = 4 * -g * m.size) : (d - 2) % 4 === 0 ? (i = m.size + 4 * g * m.size, k = m.size) : (d - 3) % 4 === 0 && (i = -m.size, k = 3 * m.size + 4 * m.size * g),
              m.rtl && (i = -i),
              c() || (j = i, i = 0);
              var l = "rotateX(" + (c() ? 0 : -f) + "deg) rotateY(" + (c() ? f: 0) + "deg) translate3d(" + i + "px, " + j + "px, " + k + "px)";
              if (1 >= h && h > -1 && (b = 90 * d + 90 * h, m.rtl && (b = 90 * -d - 90 * h)), e.transform(l), m.params.cube.slideShadows) {
                var o = e.find(c() ? ".swiper-slide-shadow-left": ".swiper-slide-shadow-top"),
                p = e.find(c() ? ".swiper-slide-shadow-right": ".swiper-slide-shadow-bottom");
                0 === o.length && (o = n('<div class="swiper-slide-shadow-' + (c() ? "left": "top") + '"></div>'), e.append(o)),
                0 === p.length && (p = n('<div class="swiper-slide-shadow-' + (c() ? "right": "bottom") + '"></div>'), e.append(p)),
                e[0].progress,
                o.length && (o[0].style.opacity = -e[0].progress),
                p.length && (p[0].style.opacity = e[0].progress)
              }
            }
            if (m.wrapper.css({
              "-webkit-transform-origin": "50% 50% -" + m.size / 2 + "px",
              "-moz-transform-origin": "50% 50% -" + m.size / 2 + "px",
              "-ms-transform-origin": "50% 50% -" + m.size / 2 + "px",
              "transform-origin": "50% 50% -" + m.size / 2 + "px"
            }), m.params.cube.shadow) if (c()) a.transform("translate3d(0px, " + (m.width / 2 + m.params.cube.shadowOffset) + "px, " + -m.width / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + m.params.cube.shadowScale + ")");
            else {
              var q = Math.abs(b) - 90 * Math.floor(Math.abs(b) / 90),
              r = 1.5 - (Math.sin(2 * q * Math.PI / 360) / 2 + Math.cos(2 * q * Math.PI / 360) / 2),
              s = m.params.cube.shadowScale,
              t = m.params.cube.shadowScale / r,
              u = m.params.cube.shadowOffset;
              a.transform("scale3d(" + s + ", 1, " + t + ") translate3d(0px, " + (m.height / 2 + u) + "px, " + -m.height / 2 / t + "px) rotateX(-90deg)")
            }
            var v = m.isSafari || m.isUiWebView ? -m.size / 2 : 0;
            m.wrapper.transform("translate3d(0px,0," + v + "px) rotateX(" + (c() ? 0 : b) + "deg) rotateY(" + (c() ? -b: 0) + "deg)")
          },
          setTransition: function(a) {
            m.slides.transition(a).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(a),
            m.params.cube.shadow && !c() && m.container.find(".swiper-cube-shadow").transition(a)
          }
        },
        coverflow: {
          setTranslate: function() {
            for (var a = m.translate,
            b = c() ? -a + m.width / 2 : -a + m.height / 2, d = c() ? m.params.coverflow.rotate: -m.params.coverflow.rotate, e = m.params.coverflow.depth, f = 0, g = m.slides.length; g > f; f++) {
              var h = m.slides.eq(f),
              i = m.slidesSizesGrid[f],
              j = h[0].swiperSlideOffset,
              k = (b - j - i / 2) / i * m.params.coverflow.modifier,
              l = c() ? d * k: 0,
              o = c() ? 0 : d * k,
              p = -e * Math.abs(k),
              q = c() ? 0 : m.params.coverflow.stretch * k,
              r = c() ? m.params.coverflow.stretch * k: 0;
              Math.abs(r) < .001 && (r = 0),
              Math.abs(q) < .001 && (q = 0),
              Math.abs(p) < .001 && (p = 0),
              Math.abs(l) < .001 && (l = 0),
              Math.abs(o) < .001 && (o = 0);
              var s = "translate3d(" + r + "px," + q + "px," + p + "px)  rotateX(" + o + "deg) rotateY(" + l + "deg)";
              if (h.transform(s), h[0].style.zIndex = -Math.abs(Math.round(k)) + 1, m.params.coverflow.slideShadows) {
                var t = h.find(c() ? ".swiper-slide-shadow-left": ".swiper-slide-shadow-top"),
                u = h.find(c() ? ".swiper-slide-shadow-right": ".swiper-slide-shadow-bottom");
                0 === t.length && (t = n('<div class="swiper-slide-shadow-' + (c() ? "left": "top") + '"></div>'), h.append(t)),
                0 === u.length && (u = n('<div class="swiper-slide-shadow-' + (c() ? "right": "bottom") + '"></div>'), h.append(u)),
                t.length && (t[0].style.opacity = k > 0 ? k: 0),
                u.length && (u[0].style.opacity = -k > 0 ? -k: 0)
              }
            }
            if (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) {
              var v = m.wrapper.style;
              v.perspectiveOrigin = b + "px 50%"
            }
          },
          setTransition: function(a) {
            m.slides.transition(a).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(a)
          }
        }
      },
      m.scrollbar = {
        init: function() {
          if (m.params.scrollbar) {
            var a = m.scrollbar;
            a.track = n(m.params.scrollbar),
            a.drag = a.track.find(".swiper-scrollbar-drag"),
            0 === a.drag.length && (a.drag = n('<div class="swiper-scrollbar-drag"></div>'), a.track.append(a.drag)),
            a.drag[0].style.width = "",
            a.drag[0].style.height = "",
            a.trackSize = c() ? a.track[0].offsetWidth: a.track[0].offsetHeight,
            a.divider = m.size / m.virtualWidth,
            a.moveDivider = a.divider * (a.trackSize / m.size),
            a.dragSize = a.trackSize * a.divider,
            c() ? a.drag[0].style.width = a.dragSize + "px": a.drag[0].style.height = a.dragSize + "px",
            a.track[0].style.display = a.divider >= 1 ? "none": "",
            m.params.scrollbarHide && (a.track[0].style.opacity = 0)
          }
        },
        setTranslate: function() {
          if (m.params.scrollbar) {
            var a, b = m.scrollbar,
            d = (m.translate || 0, b.dragSize);
            a = (b.trackSize - b.dragSize) * m.progress,
            m.rtl && c() ? (a = -a, a > 0 ? (d = b.dragSize - a, a = 0) : -a + b.dragSize > b.trackSize && (d = b.trackSize + a)) : 0 > a ? (d = b.dragSize + a, a = 0) : a + b.dragSize > b.trackSize && (d = b.trackSize - a),
            c() ? (b.drag.transform("translate3d(" + a + "px, 0, 0)"), b.drag[0].style.width = d + "px") : (b.drag.transform("translate3d(0px, " + a + "px, 0)"), b.drag[0].style.height = d + "px"),
            m.params.scrollbarHide && (clearTimeout(b.timeout), b.track[0].style.opacity = 1, b.timeout = setTimeout(function() {
              b.track[0].style.opacity = 0,
              b.track.transition(400)
            },
            1e3))
          }
        },
        setTransition: function(a) {
          m.params.scrollbar && m.scrollbar.drag.transition(a)
        }
      },
      m.controller = {
        setTranslate: function(a, b) {
          var c, d, e = m.params.control;
          if (m.isArray(e)) for (var f = 0; f < e.length; f++) e[f] !== b && e[f] instanceof Swiper && (a = e[f].rtl && "horizontal" === e[f].params.direction ? -m.translate: m.translate, c = (e[f].maxTranslate() - e[f].minTranslate()) / (m.maxTranslate() - m.minTranslate()), d = (a - m.minTranslate()) * c + e[f].minTranslate(), m.params.controlInverse && (d = e[f].maxTranslate() - d), e[f].updateProgress(d), e[f].setWrapperTranslate(d, !1, m), e[f].updateActiveIndex());
          else e instanceof Swiper && b !== e && (a = e.rtl && "horizontal" === e.params.direction ? -m.translate: m.translate, c = (e.maxTranslate() - e.minTranslate()) / (m.maxTranslate() - m.minTranslate()), d = (a - m.minTranslate()) * c + e.minTranslate(), m.params.controlInverse && (d = e.maxTranslate() - d), e.updateProgress(d), e.setWrapperTranslate(d, !1, m), e.updateActiveIndex())
        },
        setTransition: function(a, b) {
          var c = m.params.control;
          if (m.isArray(c)) for (var d = 0; d < c.length; d++) c[d] !== b && c[d] instanceof Swiper && c[d].setWrapperTransition(a, m);
          else c instanceof Swiper && b !== c && c.setWrapperTransition(a, m)
        }
      },
      m.hashnav = {
        init: function() {
          if (m.params.hashnav) {
            m.hashnav.initialized = !0;
            var a = document.location.hash.replace("#", "");
            if (a) for (var b = 0,
            c = 0,
            d = m.slides.length; d > c; c++) {
              var e = m.slides.eq(c),
              f = e.attr("data-hash");
              if (f === a && !e.hasClass(m.params.slideDuplicateClass)) {
                var g = e.index();
                m._slideTo(g, b)
              }
            }
          }
        },
        setHash: function() {
          m.hashnav.initialized && m.params.hashnav && (document.location.hash = m.slides.eq(m.activeIndex).attr("data-hash") || "")
        }
      },
      m.disableKeyboardControl = function() {
        n(document).off("keydown", h)
      },
      m.enableKeyboardControl = function() {
        n(document).on("keydown", h)
      },
      m._wheelEvent = !1, m._lastWheelScrollTime = (new Date).getTime(), m.params.mousewheelControl) {
        if (void 0 !== document.onmousewheel && (m._wheelEvent = "mousewheel"), !m._wheelEvent) try {
          new WheelEvent("wheel"),
          m._wheelEvent = "wheel"
        } catch(D) {}
        m._wheelEvent || (m._wheelEvent = "DOMMouseScroll")
      }
      return m.disableMousewheelControl = function() {
        return m._wheelEvent ? (m.container.off(m._wheelEvent, i), !0) : !1
      },
      m.enableMousewheelControl = function() {
        return m._wheelEvent ? (m.container.on(m._wheelEvent, i), !0) : !1
      },
      m.init = function() {
        m.params.loop && m.createLoop(),
        m.updateContainerSize(),
        m.updateSlidesSize(),
        m.updatePagination(),
        m.params.scrollbar && m.scrollbar && m.scrollbar.init(),
        "slide" !== m.params.effect && m.effects[m.params.effect] && (m.params.loop || m.updateProgress(), m.effects[m.params.effect].setTranslate()),
        m.params.loop ? m.slideTo(m.params.initialSlide + m.loopedSlides, 0, !1) : m.slideTo(m.params.initialSlide, 0, !1),
        m.attachEvents(),
        m.params.observer && m.support.observer && m.initObservers(),
        m.params.updateOnImagesReady && m.preloadImages(),
        m.params.autoplay && m.startAutoplay(),
        m.params.keyboardControl && m.enableKeyboardControl && m.enableKeyboardControl(),
        m.params.mousewheelControl && m.enableMousewheelControl && m.enableMousewheelControl(),
        m.params.hashnav && m.hashnav && m.hashnav.init()
      },
      m.destroy = function(a) {
        m.detachEvents(),
        m.disconnectObservers(),
        m.params.keyboardControl && m.disableKeyboard && m.disableKeyboard(),
        m.params.mousewheelControl && m.disableMousewheel && m.disableMousewheel(),
        m.params.onDestroy && m.params.onDestroy(),
        a !== !1 && (m = null)
      },
      m.init(),
      m
    }
  },
  Swiper.prototype = {
    isSafari: function() {
      var a = navigator.userAgent.toLowerCase();
      return a.indexOf("safari") >= 0 && a.indexOf("chrome") < 0 && a.indexOf("android") < 0
    } (),
    isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),
    isArray: function(a) {
      return "[object Array]" === Object.prototype.toString.apply(a)
    },
    support: {
      touch: window.Modernizr && Modernizr.touch === !0 ||
      function() {
        return !! ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch)
      } (),
      transforms3d: window.Modernizr && Modernizr.csstransforms3d === !0 ||
      function() {
        var a = document.createElement("div").style;
        return "webkitPerspective" in a || "MozPerspective" in a || "OPerspective" in a || "MsPerspective" in a || "perspective" in a
      } (),
      flexbox: function() {
        for (var a = document.createElement("div").style, b = "WebkitBox msFlexbox MsFlexbox WebkitFlex MozBox fles".split(" "), c = 0; c < b.length; c++) if (b[c] in a) return ! 0
      } (),
      observer: function() {
        return "MutationObserver" in window || "WebkitMutationObserver" in window
      } ()
    }
  };
  for (var b = ["jQuery", "Zepto", "Dom7"], c = 0; c < b.length; c++) window[b[c]] && a(window[b[c]]);
  var d;
  d = "undefined" == typeof Dom7 ? window.Dom7 || window.Zepto || window.jQuery: Dom7,
  d && ("transitionEnd" in d.fn || ($.fn.transitionEnd = function(a) {
    function b(f) {
      if (f.target === this) for (a.call(this, f), c = 0; c < d.length; c++) e.off(d[c], b)
    }
    var c, d = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
    e = this;
    if (a) for (c = 0; c < d.length; c++) e.on(d[c], b);
    return this
  }), "transform" in d.fn || ($.fn.transform = function(a) {
    for (var b = 0; b < this.length; b++) {
      var c = this[b].style;
      c.webkitTransform = c.MsTransform = c.msTransform = c.MozTransform = c.OTransform = c.transform = a
    }
    return this
  }), "transition" in d.fn || ($.fn.transition = function(a) {
    "string" != typeof a && (a += "ms");
    for (var b = 0; b < this.length; b++) {
      var c = this[b].style;
      c.webkitTransitionDuration = c.MsTransitionDuration = c.msTransitionDuration = c.MozTransitionDuration = c.OTransitionDuration = c.transitionDuration = a
    }
    return this
  }))
} (),
"undefined" != typeof module ? module.exports = Swiper: "function" == typeof define && define.amd && define([],
function() {
  "use strict";
  return Swiper
}),
$(function() {
  var a = "那些年的春晚男神 - 凤凰娱乐",
  b = {
    zhushimao: "朱时茂",
    zhangmingmin: "张明敏",
    lining: "李宁",
    feixiang: "费翔",
    pananbang: "潘安邦",
    tuhonggang: "屠洪刚",
    xiexiaodong: "解晓东",
    caiguoqing: "蔡国庆",
    liudehua: "刘德华",
    xiaohudui: "小虎队",
    maoning: "毛宁",
    jinggangshan: "景岗山",
    guofucheng: "郭富城",
    linyilun: "林依轮",
    luozhongxu: "罗中旭",
    hanlei: "韩磊",
    renxianqi: "任贤齐",
    liming: "黎明",
    xietingfeng: "谢霆锋",
    wenzhaolun: "温兆伦",
    pucunxin: "濮存昕",
    zhenyijian: "郑伊健",
    chenxiaodong: "陈晓东",
    liyundi: "李云迪",
    wanglihong: "王力宏",
    zhoujielun: "周杰伦",
    linjunjie: "林俊杰",
    liuqian: "刘谦",
    lijian: "李健",
    hangeng: "韩庚",
    yif: "YIF",
    liminhao: "李敏镐"
  }; !
  function() {
    var a = navigator.userAgent.toLowerCase(),
    b = a.indexOf("android") > -1;
    b && $("body").addClass("android")
  } ();
  var c = function() {
    $(".swiper-container").css("height", $(document).height());
    var a = new Swiper(".swiper-container", {
      direction: "vertical",
      loop: !1,
      onSlideChangeEnd: function(a) {
        var b = a.activeIndex;
        "5" == b && ($("#userinfo").data("name") || a.slideTo(4)),
        "3" == b && ($("#page4").data("clicked") || a.slideTo(2)),
        2 > b || 3 == b ? $("#arrowdown").addClass("on") : $("#arrowdown").removeClass("on")
      }
    });
    return $("#golist").on("click",
    function() {
      a.slideTo(3),
      $("#page4").data("clicked", "1")
    }),
    a
  } ();
  $(".page .order").each(function() {
    var a = $(this),
    b = a.index();
    a.css("transition-delay", .6 * (b + 1) + "s")
  }),
  $(".js-lazyimg").each(function() {
    var a = $(this).data("lazy");
    $(this).attr("src", a)
  });
  var d = function(a) {
    var b = $("#userinfo"),
    c = b.find("#infoimg"),
    d = b.find("#userinfo-btn");
    $loading = b.find(".loading"),
    imgurl = $("#imgurl").attr("src"),
    b.data("name", a),
    c.attr("src", imgurl.replace("dot", a)),
    $loading.show(),
    d.hide(),
    c.load(function() {
      $loading.hide(),
      c.addClass("show"),
      d.show()
    })
  }; !
  function(c) {
    var e = $(".js-userlist"),
    f = 140,
    g = 184,
    h = .5;
    e.find("a").each(function() {
      var a = $(this).index(),
      b = -(a % 4) * f * h,
      c = -parseInt(a / 4) * g * h;
      $(this).css("background-position", b + "px " + c + "px")
    }).click(function() {
      var a = $(this).data("name");
      c.slideTo(5),
      d(a)
    }),
    $("#userinfo #goback").on("click",
    function() {
      var a = $("#userinfo").data("name"),
      b = $("a[data-name=" + a + "]").parents(".js-userlist").data("list");
      "1" == b && c.slideTo(3),
      c.slideTo("2" == b ? 4 : 3),
      $("#userinfo").removeData("name");
      var d = $("#infoimg").data("dot");
      $("#infoimg").removeClass("show").attr("src", d)
    }),
    $("#userinfo #share").on("click",
    function() {
      $("#sharemask").addClass("show");
      var a = $("#userinfo").data("name");
      document.title = "我吃掉了" + b[a] + "，你也来吃掉你的春晚男神吧！"
    }),
    $("#sharemask").on("click",
    function() {
      $(this).removeClass("show"),
      document.title = a
    })
  } (c)
});