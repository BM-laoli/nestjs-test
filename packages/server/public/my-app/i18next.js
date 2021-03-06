!(function (e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define(t)
    : ((e = 'undefined' != typeof globalThis ? globalThis : e || self).i18next =
        t());
})(this, function () {
  'use strict';
  function e(t) {
    return (e =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              'function' == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? 'symbol'
              : typeof e;
          })(t);
  }
  function t(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = n),
      e
    );
  }
  function n(e) {
    for (var n = 1; n < arguments.length; n++) {
      var o = null != arguments[n] ? Object(arguments[n]) : {},
        r = Object.keys(o);
      'function' == typeof Object.getOwnPropertySymbols &&
        (r = r.concat(
          Object.getOwnPropertySymbols(o).filter(function (e) {
            return Object.getOwnPropertyDescriptor(o, e).enumerable;
          }),
        )),
        r.forEach(function (n) {
          t(e, n, o[n]);
        });
    }
    return e;
  }
  function o(e, t) {
    if (!(e instanceof t))
      throw new TypeError('Cannot call a class as a function');
  }
  function r(e, t) {
    for (var n = 0; n < t.length; n++) {
      var o = t[n];
      (o.enumerable = o.enumerable || !1),
        (o.configurable = !0),
        'value' in o && (o.writable = !0),
        Object.defineProperty(e, o.key, o);
    }
  }
  function i(e, t, n) {
    return t && r(e.prototype, t), n && r(e, n), e;
  }
  function a(e) {
    if (void 0 === e)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called",
      );
    return e;
  }
  function s(t, n) {
    return !n || ('object' !== e(n) && 'function' != typeof n) ? a(t) : n;
  }
  function u(e) {
    return (u = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
  }
  function l(e, t) {
    return (l =
      Object.setPrototypeOf ||
      function (e, t) {
        return (e.__proto__ = t), e;
      })(e, t);
  }
  function c(e, t) {
    if ('function' != typeof t && null !== t)
      throw new TypeError('Super expression must either be null or a function');
    (e.prototype = Object.create(t && t.prototype, {
      constructor: {value: e, writable: !0, configurable: !0},
    })),
      t && l(e, t);
  }
  var f = {
      type: 'logger',
      log: function (e) {
        this.output('log', e);
      },
      warn: function (e) {
        this.output('warn', e);
      },
      error: function (e) {
        this.output('error', e);
      },
      output: function (e, t) {
        console && console[e] && console[e].apply(console, t);
      },
    },
    p = new ((function () {
      function e(t) {
        var n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        o(this, e), this.init(t, n);
      }
      return (
        i(e, [
          {
            key: 'init',
            value: function (e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              (this.prefix = t.prefix || 'i18next:'),
                (this.logger = e || f),
                (this.options = t),
                (this.debug = t.debug);
            },
          },
          {
            key: 'setDebug',
            value: function (e) {
              this.debug = e;
            },
          },
          {
            key: 'log',
            value: function () {
              for (
                var e = arguments.length, t = new Array(e), n = 0;
                n < e;
                n++
              )
                t[n] = arguments[n];
              return this.forward(t, 'log', '', !0);
            },
          },
          {
            key: 'warn',
            value: function () {
              for (
                var e = arguments.length, t = new Array(e), n = 0;
                n < e;
                n++
              )
                t[n] = arguments[n];
              return this.forward(t, 'warn', '', !0);
            },
          },
          {
            key: 'error',
            value: function () {
              for (
                var e = arguments.length, t = new Array(e), n = 0;
                n < e;
                n++
              )
                t[n] = arguments[n];
              return this.forward(t, 'error', '');
            },
          },
          {
            key: 'deprecate',
            value: function () {
              for (
                var e = arguments.length, t = new Array(e), n = 0;
                n < e;
                n++
              )
                t[n] = arguments[n];
              return this.forward(t, 'warn', 'WARNING DEPRECATED: ', !0);
            },
          },
          {
            key: 'forward',
            value: function (e, t, n, o) {
              return o && !this.debug
                ? null
                : ('string' == typeof e[0] &&
                    (e[0] = ''.concat(n).concat(this.prefix, ' ').concat(e[0])),
                  this.logger[t](e));
            },
          },
          {
            key: 'create',
            value: function (t) {
              return new e(
                this.logger,
                n(
                  {},
                  {prefix: ''.concat(this.prefix, ':').concat(t, ':')},
                  this.options,
                ),
              );
            },
          },
        ]),
        e
      );
    })())(),
    g = (function () {
      function e() {
        o(this, e), (this.observers = {});
      }
      return (
        i(e, [
          {
            key: 'on',
            value: function (e, t) {
              var n = this;
              return (
                e.split(' ').forEach(function (e) {
                  (n.observers[e] = n.observers[e] || []),
                    n.observers[e].push(t);
                }),
                this
              );
            },
          },
          {
            key: 'off',
            value: function (e, t) {
              this.observers[e] &&
                (t
                  ? (this.observers[e] = this.observers[e].filter(function (e) {
                      return e !== t;
                    }))
                  : delete this.observers[e]);
            },
          },
          {
            key: 'emit',
            value: function (e) {
              for (
                var t = arguments.length,
                  n = new Array(t > 1 ? t - 1 : 0),
                  o = 1;
                o < t;
                o++
              )
                n[o - 1] = arguments[o];
              this.observers[e] &&
                [].concat(this.observers[e]).forEach(function (e) {
                  e.apply(void 0, n);
                });
              this.observers['*'] &&
                [].concat(this.observers['*']).forEach(function (t) {
                  t.apply(t, [e].concat(n));
                });
            },
          },
        ]),
        e
      );
    })();
  function h() {
    var e,
      t,
      n = new Promise(function (n, o) {
        (e = n), (t = o);
      });
    return (n.resolve = e), (n.reject = t), n;
  }
  function d(e) {
    return null == e ? '' : '' + e;
  }
  function v(e, t, n) {
    function o(e) {
      return e && e.indexOf('###') > -1 ? e.replace(/###/g, '.') : e;
    }
    function r() {
      return !e || 'string' == typeof e;
    }
    for (
      var i = 'string' != typeof t ? [].concat(t) : t.split('.');
      i.length > 1;

    ) {
      if (r()) return {};
      var a = o(i.shift());
      !e[a] && n && (e[a] = new n()),
        (e = Object.prototype.hasOwnProperty.call(e, a) ? e[a] : {});
    }
    return r() ? {} : {obj: e, k: o(i.shift())};
  }
  function y(e, t, n) {
    var o = v(e, t, Object);
    o.obj[o.k] = n;
  }
  function m(e, t) {
    var n = v(e, t),
      o = n.obj,
      r = n.k;
    if (o) return o[r];
  }
  function b(e, t, n) {
    var o = m(e, n);
    return void 0 !== o ? o : m(t, n);
  }
  function k(e) {
    return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
  }
  var x = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
    '/': '&#x2F;',
  };
  function S(e) {
    return 'string' == typeof e
      ? e.replace(/[&<>"'\/]/g, function (e) {
          return x[e];
        })
      : e;
  }
  var w =
      'undefined' != typeof window &&
      window.navigator &&
      window.navigator.userAgent &&
      window.navigator.userAgent.indexOf('MSIE') > -1,
    O = [' ', ',', '?', '!', ';'];
  var L = (function (e) {
      function t(e) {
        var n,
          r =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : {ns: ['translation'], defaultNS: 'translation'};
        return (
          o(this, t),
          (n = s(this, u(t).call(this))),
          w && g.call(a(n)),
          (n.data = e || {}),
          (n.options = r),
          void 0 === n.options.keySeparator && (n.options.keySeparator = '.'),
          void 0 === n.options.ignoreJSONStructure &&
            (n.options.ignoreJSONStructure = !0),
          n
        );
      }
      return (
        c(t, g),
        i(t, [
          {
            key: 'addNamespaces',
            value: function (e) {
              this.options.ns.indexOf(e) < 0 && this.options.ns.push(e);
            },
          },
          {
            key: 'removeNamespaces',
            value: function (e) {
              var t = this.options.ns.indexOf(e);
              t > -1 && this.options.ns.splice(t, 1);
            },
          },
          {
            key: 'getResource',
            value: function (e, t, n) {
              var o =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : {},
                r =
                  void 0 !== o.keySeparator
                    ? o.keySeparator
                    : this.options.keySeparator,
                i =
                  void 0 !== o.ignoreJSONStructure
                    ? o.ignoreJSONStructure
                    : this.options.ignoreJSONStructure,
                a = [e, t];
              n && 'string' != typeof n && (a = a.concat(n)),
                n && 'string' == typeof n && (a = a.concat(r ? n.split(r) : n)),
                e.indexOf('.') > -1 && (a = e.split('.'));
              var s = m(this.data, a);
              return s || !i || 'string' != typeof n
                ? s
                : (function e(t, n) {
                    var o =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : '.';
                    if (t) {
                      if (t[n]) return t[n];
                      for (
                        var r = n.split(o), i = t, a = 0;
                        a < r.length;
                        ++a
                      ) {
                        if (!i) return;
                        if ('string' == typeof i[r[a]] && a + 1 < r.length)
                          return;
                        if (void 0 === i[r[a]]) {
                          for (
                            var s = 2, u = r.slice(a, a + s).join(o), l = i[u];
                            void 0 === l && r.length > a + s;

                          )
                            s++, (l = i[(u = r.slice(a, a + s).join(o))]);
                          if (void 0 === l) return;
                          if ('string' == typeof l) return l;
                          if (u && 'string' == typeof l[u]) return l[u];
                          var c = r.slice(a + s).join(o);
                          return c ? e(l, c, o) : void 0;
                        }
                        i = i[r[a]];
                      }
                      return i;
                    }
                  })(this.data && this.data[e] && this.data[e][t], n, r);
            },
          },
          {
            key: 'addResource',
            value: function (e, t, n, o) {
              var r =
                  arguments.length > 4 && void 0 !== arguments[4]
                    ? arguments[4]
                    : {silent: !1},
                i = this.options.keySeparator;
              void 0 === i && (i = '.');
              var a = [e, t];
              n && (a = a.concat(i ? n.split(i) : n)),
                e.indexOf('.') > -1 && ((o = t), (t = (a = e.split('.'))[1])),
                this.addNamespaces(t),
                y(this.data, a, o),
                r.silent || this.emit('added', e, t, n, o);
            },
          },
          {
            key: 'addResources',
            value: function (e, t, n) {
              var o =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : {silent: !1};
              for (var r in n)
                ('string' != typeof n[r] &&
                  '[object Array]' !== Object.prototype.toString.apply(n[r])) ||
                  this.addResource(e, t, r, n[r], {silent: !0});
              o.silent || this.emit('added', e, t, n);
            },
          },
          {
            key: 'addResourceBundle',
            value: function (e, t, o, r, i) {
              var a =
                  arguments.length > 5 && void 0 !== arguments[5]
                    ? arguments[5]
                    : {silent: !1},
                s = [e, t];
              e.indexOf('.') > -1 &&
                ((r = o), (o = t), (t = (s = e.split('.'))[1])),
                this.addNamespaces(t);
              var u = m(this.data, s) || {};
              r
                ? (function e(t, n, o) {
                    for (var r in n)
                      '__proto__' !== r &&
                        'constructor' !== r &&
                        (r in t
                          ? 'string' == typeof t[r] ||
                            t[r] instanceof String ||
                            'string' == typeof n[r] ||
                            n[r] instanceof String
                            ? o && (t[r] = n[r])
                            : e(t[r], n[r], o)
                          : (t[r] = n[r]));
                    return t;
                  })(u, o, i)
                : (u = n({}, u, o)),
                y(this.data, s, u),
                a.silent || this.emit('added', e, t, o);
            },
          },
          {
            key: 'removeResourceBundle',
            value: function (e, t) {
              this.hasResourceBundle(e, t) && delete this.data[e][t],
                this.removeNamespaces(t),
                this.emit('removed', e, t);
            },
          },
          {
            key: 'hasResourceBundle',
            value: function (e, t) {
              return void 0 !== this.getResource(e, t);
            },
          },
          {
            key: 'getResourceBundle',
            value: function (e, t) {
              return (
                t || (t = this.options.defaultNS),
                'v1' === this.options.compatibilityAPI
                  ? n({}, {}, this.getResource(e, t))
                  : this.getResource(e, t)
              );
            },
          },
          {
            key: 'getDataByLanguage',
            value: function (e) {
              return this.data[e];
            },
          },
          {
            key: 'hasLanguageSomeTranslations',
            value: function (e) {
              var t = this.getDataByLanguage(e);
              return !!((t && Object.keys(t)) || []).find(function (e) {
                return t[e] && Object.keys(t[e]).length > 0;
              });
            },
          },
          {
            key: 'toJSON',
            value: function () {
              return this.data;
            },
          },
        ]),
        t
      );
    })(),
    N = {
      processors: {},
      addPostProcessor: function (e) {
        this.processors[e.name] = e;
      },
      handle: function (e, t, n, o, r) {
        var i = this;
        return (
          e.forEach(function (e) {
            i.processors[e] && (t = i.processors[e].process(t, n, o, r));
          }),
          t
        );
      },
    },
    R = {},
    j = (function (t) {
      function r(e) {
        var t,
          n,
          i,
          l,
          c =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (
          o(this, r),
          (t = s(this, u(r).call(this))),
          w && g.call(a(t)),
          (n = [
            'resourceStore',
            'languageUtils',
            'pluralResolver',
            'interpolator',
            'backendConnector',
            'i18nFormat',
            'utils',
          ]),
          (i = e),
          (l = a(t)),
          n.forEach(function (e) {
            i[e] && (l[e] = i[e]);
          }),
          (t.options = c),
          void 0 === t.options.keySeparator && (t.options.keySeparator = '.'),
          (t.logger = p.create('translator')),
          t
        );
      }
      return (
        c(r, g),
        i(
          r,
          [
            {
              key: 'changeLanguage',
              value: function (e) {
                e && (this.language = e);
              },
            },
            {
              key: 'exists',
              value: function (e) {
                var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {interpolation: {}};
                if (null == e) return !1;
                var n = this.resolve(e, t);
                return n && void 0 !== n.res;
              },
            },
            {
              key: 'extractFromKey',
              value: function (e, t) {
                var n =
                  void 0 !== t.nsSeparator
                    ? t.nsSeparator
                    : this.options.nsSeparator;
                void 0 === n && (n = ':');
                var o =
                    void 0 !== t.keySeparator
                      ? t.keySeparator
                      : this.options.keySeparator,
                  r = t.ns || this.options.defaultNS,
                  i = n && e.indexOf(n) > -1,
                  a = !(
                    this.options.userDefinedKeySeparator ||
                    t.keySeparator ||
                    this.options.userDefinedNsSeparator ||
                    t.nsSeparator ||
                    (function (e, t, n) {
                      (t = t || ''), (n = n || '');
                      var o = O.filter(function (e) {
                        return t.indexOf(e) < 0 && n.indexOf(e) < 0;
                      });
                      if (0 === o.length) return !0;
                      var r = new RegExp(
                          '('.concat(
                            o
                              .map(function (e) {
                                return '?' === e ? '\\?' : e;
                              })
                              .join('|'),
                            ')',
                          ),
                        ),
                        i = !r.test(e);
                      if (!i) {
                        var a = e.indexOf(n);
                        a > 0 && !r.test(e.substring(0, a)) && (i = !0);
                      }
                      return i;
                    })(e, n, o)
                  );
                if (i && !a) {
                  var s = e.match(this.interpolator.nestingRegexp);
                  if (s && s.length > 0) return {key: e, namespaces: r};
                  var u = e.split(n);
                  (n !== o ||
                    (n === o && this.options.ns.indexOf(u[0]) > -1)) &&
                    (r = u.shift()),
                    (e = u.join(o));
                }
                return (
                  'string' == typeof r && (r = [r]), {key: e, namespaces: r}
                );
              },
            },
            {
              key: 'translate',
              value: function (t, o, i) {
                var a = this;
                if (
                  ('object' !== e(o) &&
                    this.options.overloadTranslationOptionHandler &&
                    (o =
                      this.options.overloadTranslationOptionHandler(arguments)),
                  o || (o = {}),
                  null == t)
                )
                  return '';
                Array.isArray(t) || (t = [String(t)]);
                var s =
                    void 0 !== o.keySeparator
                      ? o.keySeparator
                      : this.options.keySeparator,
                  u = this.extractFromKey(t[t.length - 1], o),
                  l = u.key,
                  c = u.namespaces,
                  f = c[c.length - 1],
                  p = o.lng || this.language,
                  g =
                    o.appendNamespaceToCIMode ||
                    this.options.appendNamespaceToCIMode;
                if (p && 'cimode' === p.toLowerCase()) {
                  if (g) {
                    var h = o.nsSeparator || this.options.nsSeparator;
                    return f + h + l;
                  }
                  return l;
                }
                var d = this.resolve(t, o),
                  v = d && d.res,
                  y = (d && d.usedKey) || l,
                  m = (d && d.exactUsedKey) || l,
                  b = Object.prototype.toString.apply(v),
                  k =
                    void 0 !== o.joinArrays
                      ? o.joinArrays
                      : this.options.joinArrays,
                  x = !this.i18nFormat || this.i18nFormat.handleAsObject;
                if (
                  x &&
                  v &&
                  'string' != typeof v &&
                  'boolean' != typeof v &&
                  'number' != typeof v &&
                  [
                    '[object Number]',
                    '[object Function]',
                    '[object RegExp]',
                  ].indexOf(b) < 0 &&
                  ('string' != typeof k || '[object Array]' !== b)
                ) {
                  if (!o.returnObjects && !this.options.returnObjects)
                    return (
                      this.options.returnedObjectHandler ||
                        this.logger.warn(
                          'accessing an object - but returnObjects options is not enabled!',
                        ),
                      this.options.returnedObjectHandler
                        ? this.options.returnedObjectHandler(
                            y,
                            v,
                            n({}, o, {ns: c}),
                          )
                        : "key '"
                            .concat(l, ' (')
                            .concat(
                              this.language,
                              ")' returned an object instead of string.",
                            )
                    );
                  if (s) {
                    var S = '[object Array]' === b,
                      w = S ? [] : {},
                      O = S ? m : y;
                    for (var L in v)
                      if (Object.prototype.hasOwnProperty.call(v, L)) {
                        var N = ''.concat(O).concat(s).concat(L);
                        (w[L] = this.translate(
                          N,
                          n({}, o, {joinArrays: !1, ns: c}),
                        )),
                          w[L] === N && (w[L] = v[L]);
                      }
                    v = w;
                  }
                } else if (x && 'string' == typeof k && '[object Array]' === b)
                  (v = v.join(k)) && (v = this.extendTranslation(v, t, o, i));
                else {
                  var R = !1,
                    j = !1,
                    C = void 0 !== o.count && 'string' != typeof o.count,
                    P = r.hasDefaultValue(o),
                    E = C ? this.pluralResolver.getSuffix(p, o.count, o) : '',
                    F = o['defaultValue'.concat(E)] || o.defaultValue;
                  !this.isValidLookup(v) && P && ((R = !0), (v = F)),
                    this.isValidLookup(v) || ((j = !0), (v = l));
                  var I =
                      (o.missingKeyNoValueFallbackToKey ||
                        this.options.missingKeyNoValueFallbackToKey) &&
                      j
                        ? void 0
                        : v,
                    A = P && F !== v && this.options.updateMissing;
                  if (j || R || A) {
                    if (
                      (this.logger.log(
                        A ? 'updateKey' : 'missingKey',
                        p,
                        f,
                        l,
                        A ? F : v,
                      ),
                      s)
                    ) {
                      var T = this.resolve(l, n({}, o, {keySeparator: !1}));
                      T &&
                        T.res &&
                        this.logger.warn(
                          'Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.',
                        );
                    }
                    var V = [],
                      D = this.languageUtils.getFallbackCodes(
                        this.options.fallbackLng,
                        o.lng || this.language,
                      );
                    if ('fallback' === this.options.saveMissingTo && D && D[0])
                      for (var U = 0; U < D.length; U++) V.push(D[U]);
                    else
                      'all' === this.options.saveMissingTo
                        ? (V = this.languageUtils.toResolveHierarchy(
                            o.lng || this.language,
                          ))
                        : V.push(o.lng || this.language);
                    var K = function (e, t, n) {
                      a.options.missingKeyHandler
                        ? a.options.missingKeyHandler(e, f, t, A ? n : I, A, o)
                        : a.backendConnector &&
                          a.backendConnector.saveMissing &&
                          a.backendConnector.saveMissing(
                            e,
                            f,
                            t,
                            A ? n : I,
                            A,
                            o,
                          ),
                        a.emit('missingKey', e, f, t, v);
                    };
                    this.options.saveMissing &&
                      (this.options.saveMissingPlurals && C
                        ? V.forEach(function (e) {
                            a.pluralResolver
                              .getSuffixes(e)
                              .forEach(function (t) {
                                K([e], l + t, o['defaultValue'.concat(t)] || F);
                              });
                          })
                        : K(V, l, F));
                  }
                  (v = this.extendTranslation(v, t, o, d, i)),
                    j &&
                      v === l &&
                      this.options.appendNamespaceToMissingKey &&
                      (v = ''.concat(f, ':').concat(l)),
                    (j || R) &&
                      this.options.parseMissingKeyHandler &&
                      (v = this.options.parseMissingKeyHandler(v));
                }
                return v;
              },
            },
            {
              key: 'extendTranslation',
              value: function (e, t, o, r, i) {
                var a = this;
                if (this.i18nFormat && this.i18nFormat.parse)
                  e = this.i18nFormat.parse(
                    e,
                    o,
                    r.usedLng,
                    r.usedNS,
                    r.usedKey,
                    {resolved: r},
                  );
                else if (!o.skipInterpolation) {
                  o.interpolation &&
                    this.interpolator.init(
                      n({}, o, {
                        interpolation: n(
                          {},
                          this.options.interpolation,
                          o.interpolation,
                        ),
                      }),
                    );
                  var s,
                    u =
                      (o.interpolation && o.interpolation.skipOnVariables) ||
                      this.options.interpolation.skipOnVariables;
                  if (u) {
                    var l = e.match(this.interpolator.nestingRegexp);
                    s = l && l.length;
                  }
                  var c =
                    o.replace && 'string' != typeof o.replace ? o.replace : o;
                  if (
                    (this.options.interpolation.defaultVariables &&
                      (c = n(
                        {},
                        this.options.interpolation.defaultVariables,
                        c,
                      )),
                    (e = this.interpolator.interpolate(
                      e,
                      c,
                      o.lng || this.language,
                      o,
                    )),
                    u)
                  ) {
                    var f = e.match(this.interpolator.nestingRegexp);
                    s < (f && f.length) && (o.nest = !1);
                  }
                  !1 !== o.nest &&
                    (e = this.interpolator.nest(
                      e,
                      function () {
                        for (
                          var e = arguments.length, n = new Array(e), r = 0;
                          r < e;
                          r++
                        )
                          n[r] = arguments[r];
                        return i && i[0] === n[0] && !o.context
                          ? (a.logger.warn(
                              'It seems you are nesting recursively key: '
                                .concat(n[0], ' in key: ')
                                .concat(t[0]),
                            ),
                            null)
                          : a.translate.apply(a, n.concat([t]));
                      },
                      o,
                    )),
                    o.interpolation && this.interpolator.reset();
                }
                var p = o.postProcess || this.options.postProcess,
                  g = 'string' == typeof p ? [p] : p;
                return (
                  null != e &&
                    g &&
                    g.length &&
                    !1 !== o.applyPostProcessor &&
                    (e = N.handle(
                      g,
                      e,
                      t,
                      this.options && this.options.postProcessPassResolved
                        ? n({i18nResolved: r}, o)
                        : o,
                      this,
                    )),
                  e
                );
              },
            },
            {
              key: 'resolve',
              value: function (e) {
                var t,
                  n,
                  o,
                  r,
                  i,
                  a = this,
                  s =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                return (
                  'string' == typeof e && (e = [e]),
                  e.forEach(function (e) {
                    if (!a.isValidLookup(t)) {
                      var u = a.extractFromKey(e, s),
                        l = u.key;
                      n = l;
                      var c = u.namespaces;
                      a.options.fallbackNS &&
                        (c = c.concat(a.options.fallbackNS));
                      var f = void 0 !== s.count && 'string' != typeof s.count,
                        p =
                          void 0 !== s.context &&
                          ('string' == typeof s.context ||
                            'number' == typeof s.context) &&
                          '' !== s.context,
                        g = s.lngs
                          ? s.lngs
                          : a.languageUtils.toResolveHierarchy(
                              s.lng || a.language,
                              s.fallbackLng,
                            );
                      c.forEach(function (e) {
                        a.isValidLookup(t) ||
                          ((i = e),
                          !R[''.concat(g[0], '-').concat(e)] &&
                            a.utils &&
                            a.utils.hasLoadedNamespace &&
                            !a.utils.hasLoadedNamespace(i) &&
                            ((R[''.concat(g[0], '-').concat(e)] = !0),
                            a.logger.warn(
                              'key "'
                                .concat(n, '" for languages "')
                                .concat(
                                  g.join(', '),
                                  '" won\'t get resolved as namespace "',
                                )
                                .concat(i, '" was not yet loaded'),
                              'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!',
                            )),
                          g.forEach(function (n) {
                            if (!a.isValidLookup(t)) {
                              r = n;
                              var i,
                                u,
                                c = l,
                                g = [c];
                              if (a.i18nFormat && a.i18nFormat.addLookupKeys)
                                a.i18nFormat.addLookupKeys(g, l, n, e, s);
                              else
                                f &&
                                  (i = a.pluralResolver.getSuffix(
                                    n,
                                    s.count,
                                    s,
                                  )),
                                  f && p && g.push(c + i),
                                  p &&
                                    g.push(
                                      (c += ''
                                        .concat(a.options.contextSeparator)
                                        .concat(s.context)),
                                    ),
                                  f && g.push((c += i));
                              for (; (u = g.pop()); )
                                a.isValidLookup(t) ||
                                  ((o = u), (t = a.getResource(n, e, u, s)));
                            }
                          }));
                      });
                    }
                  }),
                  {res: t, usedKey: n, exactUsedKey: o, usedLng: r, usedNS: i}
                );
              },
            },
            {
              key: 'isValidLookup',
              value: function (e) {
                return !(
                  void 0 === e ||
                  (!this.options.returnNull && null === e) ||
                  (!this.options.returnEmptyString && '' === e)
                );
              },
            },
            {
              key: 'getResource',
              value: function (e, t, n) {
                var o =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : {};
                return this.i18nFormat && this.i18nFormat.getResource
                  ? this.i18nFormat.getResource(e, t, n, o)
                  : this.resourceStore.getResource(e, t, n, o);
              },
            },
          ],
          [
            {
              key: 'hasDefaultValue',
              value: function (e) {
                for (var t in e)
                  if (
                    Object.prototype.hasOwnProperty.call(e, t) &&
                    'defaultValue' === t.substring(0, 'defaultValue'.length) &&
                    void 0 !== e[t]
                  )
                    return !0;
                return !1;
              },
            },
          ],
        ),
        r
      );
    })();
  function C(e) {
    return e.charAt(0).toUpperCase() + e.slice(1);
  }
  var P = (function () {
      function e(t) {
        o(this, e),
          (this.options = t),
          (this.supportedLngs = this.options.supportedLngs || !1),
          (this.logger = p.create('languageUtils'));
      }
      return (
        i(e, [
          {
            key: 'getScriptPartFromCode',
            value: function (e) {
              if (!e || e.indexOf('-') < 0) return null;
              var t = e.split('-');
              return 2 === t.length
                ? null
                : (t.pop(),
                  'x' === t[t.length - 1].toLowerCase()
                    ? null
                    : this.formatLanguageCode(t.join('-')));
            },
          },
          {
            key: 'getLanguagePartFromCode',
            value: function (e) {
              if (!e || e.indexOf('-') < 0) return e;
              var t = e.split('-');
              return this.formatLanguageCode(t[0]);
            },
          },
          {
            key: 'formatLanguageCode',
            value: function (e) {
              if ('string' == typeof e && e.indexOf('-') > -1) {
                var t = [
                    'hans',
                    'hant',
                    'latn',
                    'cyrl',
                    'cans',
                    'mong',
                    'arab',
                  ],
                  n = e.split('-');
                return (
                  this.options.lowerCaseLng
                    ? (n = n.map(function (e) {
                        return e.toLowerCase();
                      }))
                    : 2 === n.length
                    ? ((n[0] = n[0].toLowerCase()),
                      (n[1] = n[1].toUpperCase()),
                      t.indexOf(n[1].toLowerCase()) > -1 &&
                        (n[1] = C(n[1].toLowerCase())))
                    : 3 === n.length &&
                      ((n[0] = n[0].toLowerCase()),
                      2 === n[1].length && (n[1] = n[1].toUpperCase()),
                      'sgn' !== n[0] &&
                        2 === n[2].length &&
                        (n[2] = n[2].toUpperCase()),
                      t.indexOf(n[1].toLowerCase()) > -1 &&
                        (n[1] = C(n[1].toLowerCase())),
                      t.indexOf(n[2].toLowerCase()) > -1 &&
                        (n[2] = C(n[2].toLowerCase()))),
                  n.join('-')
                );
              }
              return this.options.cleanCode || this.options.lowerCaseLng
                ? e.toLowerCase()
                : e;
            },
          },
          {
            key: 'isSupportedCode',
            value: function (e) {
              return (
                ('languageOnly' === this.options.load ||
                  this.options.nonExplicitSupportedLngs) &&
                  (e = this.getLanguagePartFromCode(e)),
                !this.supportedLngs ||
                  !this.supportedLngs.length ||
                  this.supportedLngs.indexOf(e) > -1
              );
            },
          },
          {
            key: 'getBestMatchFromCodes',
            value: function (e) {
              var t,
                n = this;
              return e
                ? (e.forEach(function (e) {
                    if (!t) {
                      var o = n.formatLanguageCode(e);
                      (n.options.supportedLngs && !n.isSupportedCode(o)) ||
                        (t = o);
                    }
                  }),
                  !t &&
                    this.options.supportedLngs &&
                    e.forEach(function (e) {
                      if (!t) {
                        var o = n.getLanguagePartFromCode(e);
                        if (n.isSupportedCode(o)) return (t = o);
                        t = n.options.supportedLngs.find(function (e) {
                          if (0 === e.indexOf(o)) return e;
                        });
                      }
                    }),
                  t || (t = this.getFallbackCodes(this.options.fallbackLng)[0]),
                  t)
                : null;
            },
          },
          {
            key: 'getFallbackCodes',
            value: function (e, t) {
              if (!e) return [];
              if (
                ('function' == typeof e && (e = e(t)),
                'string' == typeof e && (e = [e]),
                '[object Array]' === Object.prototype.toString.apply(e))
              )
                return e;
              if (!t) return e.default || [];
              var n = e[t];
              return (
                n || (n = e[this.getScriptPartFromCode(t)]),
                n || (n = e[this.formatLanguageCode(t)]),
                n || (n = e[this.getLanguagePartFromCode(t)]),
                n || (n = e.default),
                n || []
              );
            },
          },
          {
            key: 'toResolveHierarchy',
            value: function (e, t) {
              var n = this,
                o = this.getFallbackCodes(
                  t || this.options.fallbackLng || [],
                  e,
                ),
                r = [],
                i = function (e) {
                  e &&
                    (n.isSupportedCode(e)
                      ? r.push(e)
                      : n.logger.warn(
                          'rejecting language code not found in supportedLngs: '.concat(
                            e,
                          ),
                        ));
                };
              return (
                'string' == typeof e && e.indexOf('-') > -1
                  ? ('languageOnly' !== this.options.load &&
                      i(this.formatLanguageCode(e)),
                    'languageOnly' !== this.options.load &&
                      'currentOnly' !== this.options.load &&
                      i(this.getScriptPartFromCode(e)),
                    'currentOnly' !== this.options.load &&
                      i(this.getLanguagePartFromCode(e)))
                  : 'string' == typeof e && i(this.formatLanguageCode(e)),
                o.forEach(function (e) {
                  r.indexOf(e) < 0 && i(n.formatLanguageCode(e));
                }),
                r
              );
            },
          },
        ]),
        e
      );
    })(),
    E = [
      {
        lngs: [
          'ach',
          'ak',
          'am',
          'arn',
          'br',
          'fil',
          'gun',
          'ln',
          'mfe',
          'mg',
          'mi',
          'oc',
          'pt',
          'pt-BR',
          'tg',
          'tl',
          'ti',
          'tr',
          'uz',
          'wa',
        ],
        nr: [1, 2],
        fc: 1,
      },
      {
        lngs: [
          'af',
          'an',
          'ast',
          'az',
          'bg',
          'bn',
          'ca',
          'da',
          'de',
          'dev',
          'el',
          'en',
          'eo',
          'es',
          'et',
          'eu',
          'fi',
          'fo',
          'fur',
          'fy',
          'gl',
          'gu',
          'ha',
          'hi',
          'hu',
          'hy',
          'ia',
          'it',
          'kk',
          'kn',
          'ku',
          'lb',
          'mai',
          'ml',
          'mn',
          'mr',
          'nah',
          'nap',
          'nb',
          'ne',
          'nl',
          'nn',
          'no',
          'nso',
          'pa',
          'pap',
          'pms',
          'ps',
          'pt-PT',
          'rm',
          'sco',
          'se',
          'si',
          'so',
          'son',
          'sq',
          'sv',
          'sw',
          'ta',
          'te',
          'tk',
          'ur',
          'yo',
        ],
        nr: [1, 2],
        fc: 2,
      },
      {
        lngs: [
          'ay',
          'bo',
          'cgg',
          'fa',
          'ht',
          'id',
          'ja',
          'jbo',
          'ka',
          'km',
          'ko',
          'ky',
          'lo',
          'ms',
          'sah',
          'su',
          'th',
          'tt',
          'ug',
          'vi',
          'wo',
          'zh',
        ],
        nr: [1],
        fc: 3,
      },
      {
        lngs: ['be', 'bs', 'cnr', 'dz', 'hr', 'ru', 'sr', 'uk'],
        nr: [1, 2, 5],
        fc: 4,
      },
      {lngs: ['ar'], nr: [0, 1, 2, 3, 11, 100], fc: 5},
      {lngs: ['cs', 'sk'], nr: [1, 2, 5], fc: 6},
      {lngs: ['csb', 'pl'], nr: [1, 2, 5], fc: 7},
      {lngs: ['cy'], nr: [1, 2, 3, 8], fc: 8},
      {lngs: ['fr'], nr: [1, 2], fc: 9},
      {lngs: ['ga'], nr: [1, 2, 3, 7, 11], fc: 10},
      {lngs: ['gd'], nr: [1, 2, 3, 20], fc: 11},
      {lngs: ['is'], nr: [1, 2], fc: 12},
      {lngs: ['jv'], nr: [0, 1], fc: 13},
      {lngs: ['kw'], nr: [1, 2, 3, 4], fc: 14},
      {lngs: ['lt'], nr: [1, 2, 10], fc: 15},
      {lngs: ['lv'], nr: [1, 2, 0], fc: 16},
      {lngs: ['mk'], nr: [1, 2], fc: 17},
      {lngs: ['mnk'], nr: [0, 1, 2], fc: 18},
      {lngs: ['mt'], nr: [1, 2, 11, 20], fc: 19},
      {lngs: ['or'], nr: [2, 1], fc: 2},
      {lngs: ['ro'], nr: [1, 2, 20], fc: 20},
      {lngs: ['sl'], nr: [5, 1, 2, 3], fc: 21},
      {lngs: ['he', 'iw'], nr: [1, 2, 20, 21], fc: 22},
    ],
    F = {
      1: function (e) {
        return Number(e > 1);
      },
      2: function (e) {
        return Number(1 != e);
      },
      3: function (e) {
        return 0;
      },
      4: function (e) {
        return Number(
          e % 10 == 1 && e % 100 != 11
            ? 0
            : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)
            ? 1
            : 2,
        );
      },
      5: function (e) {
        return Number(
          0 == e
            ? 0
            : 1 == e
            ? 1
            : 2 == e
            ? 2
            : e % 100 >= 3 && e % 100 <= 10
            ? 3
            : e % 100 >= 11
            ? 4
            : 5,
        );
      },
      6: function (e) {
        return Number(1 == e ? 0 : e >= 2 && e <= 4 ? 1 : 2);
      },
      7: function (e) {
        return Number(
          1 == e
            ? 0
            : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)
            ? 1
            : 2,
        );
      },
      8: function (e) {
        return Number(1 == e ? 0 : 2 == e ? 1 : 8 != e && 11 != e ? 2 : 3);
      },
      9: function (e) {
        return Number(e >= 2);
      },
      10: function (e) {
        return Number(1 == e ? 0 : 2 == e ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4);
      },
      11: function (e) {
        return Number(
          1 == e || 11 == e
            ? 0
            : 2 == e || 12 == e
            ? 1
            : e > 2 && e < 20
            ? 2
            : 3,
        );
      },
      12: function (e) {
        return Number(e % 10 != 1 || e % 100 == 11);
      },
      13: function (e) {
        return Number(0 !== e);
      },
      14: function (e) {
        return Number(1 == e ? 0 : 2 == e ? 1 : 3 == e ? 2 : 3);
      },
      15: function (e) {
        return Number(
          e % 10 == 1 && e % 100 != 11
            ? 0
            : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20)
            ? 1
            : 2,
        );
      },
      16: function (e) {
        return Number(e % 10 == 1 && e % 100 != 11 ? 0 : 0 !== e ? 1 : 2);
      },
      17: function (e) {
        return Number(1 == e || (e % 10 == 1 && e % 100 != 11) ? 0 : 1);
      },
      18: function (e) {
        return Number(0 == e ? 0 : 1 == e ? 1 : 2);
      },
      19: function (e) {
        return Number(
          1 == e
            ? 0
            : 0 == e || (e % 100 > 1 && e % 100 < 11)
            ? 1
            : e % 100 > 10 && e % 100 < 20
            ? 2
            : 3,
        );
      },
      20: function (e) {
        return Number(
          1 == e ? 0 : 0 == e || (e % 100 > 0 && e % 100 < 20) ? 1 : 2,
        );
      },
      21: function (e) {
        return Number(
          e % 100 == 1
            ? 1
            : e % 100 == 2
            ? 2
            : e % 100 == 3 || e % 100 == 4
            ? 3
            : 0,
        );
      },
      22: function (e) {
        return Number(
          1 == e ? 0 : 2 == e ? 1 : (e < 0 || e > 10) && e % 10 == 0 ? 2 : 3,
        );
      },
    },
    I = ['v1', 'v2', 'v3'],
    A = {zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5};
  var T = (function () {
      function e(t) {
        var n,
          r =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        o(this, e),
          (this.languageUtils = t),
          (this.options = r),
          (this.logger = p.create('pluralResolver')),
          (this.options.compatibilityJSON &&
            'v4' !== this.options.compatibilityJSON) ||
            ('undefined' != typeof Intl && Intl.PluralRules) ||
            ((this.options.compatibilityJSON = 'v3'),
            this.logger.error(
              'Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.',
            )),
          (this.rules =
            ((n = {}),
            E.forEach(function (e) {
              e.lngs.forEach(function (t) {
                n[t] = {numbers: e.nr, plurals: F[e.fc]};
              });
            }),
            n));
      }
      return (
        i(e, [
          {
            key: 'addRule',
            value: function (e, t) {
              this.rules[e] = t;
            },
          },
          {
            key: 'getRule',
            value: function (e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              if (this.shouldUseIntlApi())
                try {
                  return new Intl.PluralRules(e, {
                    type: t.ordinal ? 'ordinal' : 'cardinal',
                  });
                } catch (e) {
                  return;
                }
              return (
                this.rules[e] ||
                this.rules[this.languageUtils.getLanguagePartFromCode(e)]
              );
            },
          },
          {
            key: 'needsPlural',
            value: function (e) {
              var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                n = this.getRule(e, t);
              return this.shouldUseIntlApi()
                ? n && n.resolvedOptions().pluralCategories.length > 1
                : n && n.numbers.length > 1;
            },
          },
          {
            key: 'getPluralFormsOfKey',
            value: function (e, t) {
              var n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {};
              return this.getSuffixes(e, n).map(function (e) {
                return ''.concat(t).concat(e);
              });
            },
          },
          {
            key: 'getSuffixes',
            value: function (e) {
              var t = this,
                n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                o = this.getRule(e, n);
              return o
                ? this.shouldUseIntlApi()
                  ? o
                      .resolvedOptions()
                      .pluralCategories.sort(function (e, t) {
                        return A[e] - A[t];
                      })
                      .map(function (e) {
                        return ''.concat(t.options.prepend).concat(e);
                      })
                  : o.numbers.map(function (o) {
                      return t.getSuffix(e, o, n);
                    })
                : [];
            },
          },
          {
            key: 'getSuffix',
            value: function (e, t) {
              var n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {},
                o = this.getRule(e, n);
              return o
                ? this.shouldUseIntlApi()
                  ? ''.concat(this.options.prepend).concat(o.select(t))
                  : this.getSuffixRetroCompatible(o, t)
                : (this.logger.warn('no plural rule found for: '.concat(e)),
                  '');
            },
          },
          {
            key: 'getSuffixRetroCompatible',
            value: function (e, t) {
              var n = this,
                o = e.noAbs ? e.plurals(t) : e.plurals(Math.abs(t)),
                r = e.numbers[o];
              this.options.simplifyPluralSuffix &&
                2 === e.numbers.length &&
                1 === e.numbers[0] &&
                (2 === r ? (r = 'plural') : 1 === r && (r = ''));
              var i = function () {
                return n.options.prepend && r.toString()
                  ? n.options.prepend + r.toString()
                  : r.toString();
              };
              return 'v1' === this.options.compatibilityJSON
                ? 1 === r
                  ? ''
                  : 'number' == typeof r
                  ? '_plural_'.concat(r.toString())
                  : i()
                : 'v2' === this.options.compatibilityJSON
                ? i()
                : this.options.simplifyPluralSuffix &&
                  2 === e.numbers.length &&
                  1 === e.numbers[0]
                ? i()
                : this.options.prepend && o.toString()
                ? this.options.prepend + o.toString()
                : o.toString();
            },
          },
          {
            key: 'shouldUseIntlApi',
            value: function () {
              return !I.includes(this.options.compatibilityJSON);
            },
          },
        ]),
        e
      );
    })(),
    V = (function () {
      function e() {
        var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        o(this, e),
          (this.logger = p.create('interpolator')),
          (this.options = t),
          (this.format =
            (t.interpolation && t.interpolation.format) ||
            function (e) {
              return e;
            }),
          this.init(t);
      }
      return (
        i(e, [
          {
            key: 'init',
            value: function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              e.interpolation || (e.interpolation = {escapeValue: !0});
              var t = e.interpolation;
              (this.escape = void 0 !== t.escape ? t.escape : S),
                (this.escapeValue = void 0 === t.escapeValue || t.escapeValue),
                (this.useRawValueToEscape =
                  void 0 !== t.useRawValueToEscape && t.useRawValueToEscape),
                (this.prefix = t.prefix
                  ? k(t.prefix)
                  : t.prefixEscaped || '{{'),
                (this.suffix = t.suffix
                  ? k(t.suffix)
                  : t.suffixEscaped || '}}'),
                (this.formatSeparator = t.formatSeparator
                  ? t.formatSeparator
                  : t.formatSeparator || ','),
                (this.unescapePrefix = t.unescapeSuffix
                  ? ''
                  : t.unescapePrefix || '-'),
                (this.unescapeSuffix = this.unescapePrefix
                  ? ''
                  : t.unescapeSuffix || ''),
                (this.nestingPrefix = t.nestingPrefix
                  ? k(t.nestingPrefix)
                  : t.nestingPrefixEscaped || k('$t(')),
                (this.nestingSuffix = t.nestingSuffix
                  ? k(t.nestingSuffix)
                  : t.nestingSuffixEscaped || k(')')),
                (this.nestingOptionsSeparator = t.nestingOptionsSeparator
                  ? t.nestingOptionsSeparator
                  : t.nestingOptionsSeparator || ','),
                (this.maxReplaces = t.maxReplaces ? t.maxReplaces : 1e3),
                (this.alwaysFormat =
                  void 0 !== t.alwaysFormat && t.alwaysFormat),
                this.resetRegExp();
            },
          },
          {
            key: 'reset',
            value: function () {
              this.options && this.init(this.options);
            },
          },
          {
            key: 'resetRegExp',
            value: function () {
              var e = ''.concat(this.prefix, '(.+?)').concat(this.suffix);
              this.regexp = new RegExp(e, 'g');
              var t = ''
                .concat(this.prefix)
                .concat(this.unescapePrefix, '(.+?)')
                .concat(this.unescapeSuffix)
                .concat(this.suffix);
              this.regexpUnescape = new RegExp(t, 'g');
              var n = ''
                .concat(this.nestingPrefix, '(.+?)')
                .concat(this.nestingSuffix);
              this.nestingRegexp = new RegExp(n, 'g');
            },
          },
          {
            key: 'interpolate',
            value: function (e, t, o, r) {
              var i,
                a,
                s,
                u = this,
                l =
                  (this.options &&
                    this.options.interpolation &&
                    this.options.interpolation.defaultVariables) ||
                  {};
              function c(e) {
                return e.replace(/\$/g, '$$$$');
              }
              var f = function (e) {
                if (e.indexOf(u.formatSeparator) < 0) {
                  var i = b(t, l, e);
                  return u.alwaysFormat
                    ? u.format(i, void 0, o, n({}, r, t, {interpolationkey: e}))
                    : i;
                }
                var a = e.split(u.formatSeparator),
                  s = a.shift().trim(),
                  c = a.join(u.formatSeparator).trim();
                return u.format(
                  b(t, l, s),
                  c,
                  o,
                  n({}, r, t, {interpolationkey: s}),
                );
              };
              this.resetRegExp();
              var p =
                  (r && r.missingInterpolationHandler) ||
                  this.options.missingInterpolationHandler,
                g =
                  (r && r.interpolation && r.interpolation.skipOnVariables) ||
                  this.options.interpolation.skipOnVariables;
              return (
                [
                  {
                    regex: this.regexpUnescape,
                    safeValue: function (e) {
                      return c(e);
                    },
                  },
                  {
                    regex: this.regexp,
                    safeValue: function (e) {
                      return u.escapeValue ? c(u.escape(e)) : c(e);
                    },
                  },
                ].forEach(function (t) {
                  for (s = 0; (i = t.regex.exec(e)); ) {
                    if (void 0 === (a = f(i[1].trim())))
                      if ('function' == typeof p) {
                        var n = p(e, i, r);
                        a = 'string' == typeof n ? n : '';
                      } else {
                        if (g) {
                          a = i[0];
                          continue;
                        }
                        u.logger.warn(
                          'missed to pass in variable '
                            .concat(i[1], ' for interpolating ')
                            .concat(e),
                        ),
                          (a = '');
                      }
                    else
                      'string' == typeof a ||
                        u.useRawValueToEscape ||
                        (a = d(a));
                    var o = t.safeValue(a);
                    if (
                      ((e = e.replace(i[0], o)),
                      g
                        ? ((t.regex.lastIndex += o.length),
                          (t.regex.lastIndex -= i[0].length))
                        : (t.regex.lastIndex = 0),
                      ++s >= u.maxReplaces)
                    )
                      break;
                  }
                }),
                e
              );
            },
          },
          {
            key: 'nest',
            value: function (e, t) {
              var o,
                r,
                i = this,
                a =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {},
                s = n({}, a);
              function u(e, t) {
                var o = this.nestingOptionsSeparator;
                if (e.indexOf(o) < 0) return e;
                var r = e.split(new RegExp(''.concat(o, '[ ]*{'))),
                  i = '{'.concat(r[1]);
                (e = r[0]),
                  (i = (i = this.interpolate(i, s)).replace(/'/g, '"'));
                try {
                  (s = JSON.parse(i)), t && (s = n({}, t, s));
                } catch (t) {
                  return (
                    this.logger.warn(
                      'failed parsing options string in nesting for key '.concat(
                        e,
                      ),
                      t,
                    ),
                    ''.concat(e).concat(o).concat(i)
                  );
                }
                return delete s.defaultValue, e;
              }
              for (
                s.applyPostProcessor = !1, delete s.defaultValue;
                (o = this.nestingRegexp.exec(e));

              ) {
                var l = [],
                  c = !1;
                if (
                  -1 !== o[0].indexOf(this.formatSeparator) &&
                  !/{.*}/.test(o[1])
                ) {
                  var f = o[1].split(this.formatSeparator).map(function (e) {
                    return e.trim();
                  });
                  (o[1] = f.shift()), (l = f), (c = !0);
                }
                if (
                  (r = t(u.call(this, o[1].trim(), s), s)) &&
                  o[0] === e &&
                  'string' != typeof r
                )
                  return r;
                'string' != typeof r && (r = d(r)),
                  r ||
                    (this.logger.warn(
                      'missed to resolve '
                        .concat(o[1], ' for nesting ')
                        .concat(e),
                    ),
                    (r = '')),
                  c &&
                    (r = l.reduce(function (e, t) {
                      return i.format(
                        e,
                        t,
                        a.lng,
                        n({}, a, {interpolationkey: o[1].trim()}),
                      );
                    }, r.trim())),
                  (e = e.replace(o[0], r)),
                  (this.regexp.lastIndex = 0);
              }
              return e;
            },
          },
        ]),
        e
      );
    })();
  function D(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
    return o;
  }
  function U(e, t) {
    return (
      (function (e) {
        if (Array.isArray(e)) return e;
      })(e) ||
      (function (e, t) {
        if ('undefined' != typeof Symbol && Symbol.iterator in Object(e)) {
          var n = [],
            o = !0,
            r = !1,
            i = void 0;
          try {
            for (
              var a, s = e[Symbol.iterator]();
              !(o = (a = s.next()).done) &&
              (n.push(a.value), !t || n.length !== t);
              o = !0
            );
          } catch (e) {
            (r = !0), (i = e);
          } finally {
            try {
              o || null == s.return || s.return();
            } finally {
              if (r) throw i;
            }
          }
          return n;
        }
      })(e, t) ||
      (function (e, t) {
        if (e) {
          if ('string' == typeof e) return D(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === n && e.constructor && (n = e.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(e)
              : 'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? D(e, t)
              : void 0
          );
        }
      })(e, t) ||
      (function () {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      })()
    );
  }
  var K = (function () {
    function e() {
      var t =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      o(this, e),
        (this.logger = p.create('formatter')),
        (this.options = t),
        (this.formats = {
          number: function (e, t, n) {
            return new Intl.NumberFormat(t, n).format(e);
          },
          currency: function (e, t, o) {
            return new Intl.NumberFormat(
              t,
              n({}, o, {style: 'currency'}),
            ).format(e);
          },
          datetime: function (e, t, o) {
            return new Intl.DateTimeFormat(t, n({}, o)).format(e);
          },
          relativetime: function (e, t, o) {
            return new Intl.RelativeTimeFormat(t, n({}, o)).format(
              e,
              o.range || 'day',
            );
          },
          list: function (e, t, o) {
            return new Intl.ListFormat(t, n({}, o)).format(e);
          },
        }),
        this.init(t);
    }
    return (
      i(e, [
        {
          key: 'init',
          value: function (e) {
            var t = (
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {interpolation: {}}
            ).interpolation;
            this.formatSeparator = t.formatSeparator
              ? t.formatSeparator
              : t.formatSeparator || ',';
          },
        },
        {
          key: 'add',
          value: function (e, t) {
            this.formats[e] = t;
          },
        },
        {
          key: 'format',
          value: function (e, t, o, r) {
            var i = this;
            return t.split(this.formatSeparator).reduce(function (e, t) {
              var a = (function (e) {
                  var t = e.toLowerCase(),
                    n = {};
                  if (e.indexOf('(') > -1) {
                    var o = e.split('(');
                    t = o[0].toLowerCase();
                    var r = o[1].substring(0, o[1].length - 1);
                    'currency' === t && r.indexOf(':') < 0
                      ? n.currency || (n.currency = r.trim())
                      : 'relativetime' === t && r.indexOf(':') < 0
                      ? n.range || (n.range = r.trim())
                      : r.split(';').forEach(function (e) {
                          if (e) {
                            var t = U(e.split(':'), 2),
                              o = t[0],
                              r = t[1];
                            'false' === r.trim() && (n[o.trim()] = !1),
                              'true' === r.trim() && (n[o.trim()] = !0),
                              isNaN(r.trim()) ||
                                (n[o.trim()] = parseInt(r.trim(), 10)),
                              n[o.trim()] || (n[o.trim()] = r.trim());
                          }
                        });
                  }
                  return {formatName: t, formatOptions: n};
                })(t),
                s = a.formatName,
                u = a.formatOptions;
              if (i.formats[s]) {
                var l = e;
                try {
                  var c =
                      (r &&
                        r.formatParams &&
                        r.formatParams[r.interpolationkey]) ||
                      {},
                    f = c.locale || c.lng || r.locale || r.lng || o;
                  l = i.formats[s](e, f, n({}, u, r, c));
                } catch (e) {
                  i.logger.warn(e);
                }
                return l;
              }
              return (
                i.logger.warn('there was no format function for '.concat(s)), e
              );
            }, e);
          },
        },
      ]),
      e
    );
  })();
  var M = (function (e) {
    function t(e, n, r) {
      var i,
        l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      return (
        o(this, t),
        (i = s(this, u(t).call(this))),
        w && g.call(a(i)),
        (i.backend = e),
        (i.store = n),
        (i.services = r),
        (i.languageUtils = r.languageUtils),
        (i.options = l),
        (i.logger = p.create('backendConnector')),
        (i.state = {}),
        (i.queue = []),
        i.backend && i.backend.init && i.backend.init(r, l.backend, l),
        i
      );
    }
    return (
      c(t, g),
      i(t, [
        {
          key: 'queueLoad',
          value: function (e, t, n, o) {
            var r = this,
              i = [],
              a = [],
              s = [],
              u = [];
            return (
              e.forEach(function (e) {
                var o = !0;
                t.forEach(function (t) {
                  var s = ''.concat(e, '|').concat(t);
                  !n.reload && r.store.hasResourceBundle(e, t)
                    ? (r.state[s] = 2)
                    : r.state[s] < 0 ||
                      (1 === r.state[s]
                        ? a.indexOf(s) < 0 && a.push(s)
                        : ((r.state[s] = 1),
                          (o = !1),
                          a.indexOf(s) < 0 && a.push(s),
                          i.indexOf(s) < 0 && i.push(s),
                          u.indexOf(t) < 0 && u.push(t)));
                }),
                  o || s.push(e);
              }),
              (i.length || a.length) &&
                this.queue.push({
                  pending: a,
                  loaded: {},
                  errors: [],
                  callback: o,
                }),
              {toLoad: i, pending: a, toLoadLanguages: s, toLoadNamespaces: u}
            );
          },
        },
        {
          key: 'loaded',
          value: function (e, t, n) {
            var o = e.split('|'),
              r = o[0],
              i = o[1];
            t && this.emit('failedLoading', r, i, t),
              n && this.store.addResourceBundle(r, i, n),
              (this.state[e] = t ? -1 : 2);
            var a = {};
            this.queue.forEach(function (n) {
              var o, s, u, l, c, f;
              (o = n.loaded),
                (s = i),
                (l = v(o, [r], Object)),
                (c = l.obj),
                (f = l.k),
                (c[f] = c[f] || []),
                u && (c[f] = c[f].concat(s)),
                u || c[f].push(s),
                (function (e, t) {
                  for (var n = e.indexOf(t); -1 !== n; )
                    e.splice(n, 1), (n = e.indexOf(t));
                })(n.pending, e),
                t && n.errors.push(t),
                0 !== n.pending.length ||
                  n.done ||
                  (Object.keys(n.loaded).forEach(function (e) {
                    a[e] || (a[e] = []),
                      n.loaded[e].length &&
                        n.loaded[e].forEach(function (t) {
                          a[e].indexOf(t) < 0 && a[e].push(t);
                        });
                  }),
                  (n.done = !0),
                  n.errors.length ? n.callback(n.errors) : n.callback());
            }),
              this.emit('loaded', a),
              (this.queue = this.queue.filter(function (e) {
                return !e.done;
              }));
          },
        },
        {
          key: 'read',
          value: function (e, t, n) {
            var o = this,
              r =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : 0,
              i =
                arguments.length > 4 && void 0 !== arguments[4]
                  ? arguments[4]
                  : 350,
              a = arguments.length > 5 ? arguments[5] : void 0;
            return e.length
              ? this.backend[n](e, t, function (s, u) {
                  s && u && r < 5
                    ? setTimeout(function () {
                        o.read.call(o, e, t, n, r + 1, 2 * i, a);
                      }, i)
                    : a(s, u);
                })
              : a(null, {});
          },
        },
        {
          key: 'prepareLoading',
          value: function (e, t) {
            var n = this,
              o =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              r = arguments.length > 3 ? arguments[3] : void 0;
            if (!this.backend)
              return (
                this.logger.warn(
                  'No backend was added via i18next.use. Will not load resources.',
                ),
                r && r()
              );
            'string' == typeof e &&
              (e = this.languageUtils.toResolveHierarchy(e)),
              'string' == typeof t && (t = [t]);
            var i = this.queueLoad(e, t, o, r);
            if (!i.toLoad.length) return i.pending.length || r(), null;
            i.toLoad.forEach(function (e) {
              n.loadOne(e);
            });
          },
        },
        {
          key: 'load',
          value: function (e, t, n) {
            this.prepareLoading(e, t, {}, n);
          },
        },
        {
          key: 'reload',
          value: function (e, t, n) {
            this.prepareLoading(e, t, {reload: !0}, n);
          },
        },
        {
          key: 'loadOne',
          value: function (e) {
            var t = this,
              n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : '',
              o = e.split('|'),
              r = o[0],
              i = o[1];
            this.read(r, i, 'read', void 0, void 0, function (o, a) {
              o &&
                t.logger.warn(
                  ''
                    .concat(n, 'loading namespace ')
                    .concat(i, ' for language ')
                    .concat(r, ' failed'),
                  o,
                ),
                !o &&
                  a &&
                  t.logger.log(
                    ''
                      .concat(n, 'loaded namespace ')
                      .concat(i, ' for language ')
                      .concat(r),
                    a,
                  ),
                t.loaded(e, o, a);
            });
          },
        },
        {
          key: 'saveMissing',
          value: function (e, t, o, r, i) {
            var a =
              arguments.length > 5 && void 0 !== arguments[5]
                ? arguments[5]
                : {};
            this.services.utils &&
            this.services.utils.hasLoadedNamespace &&
            !this.services.utils.hasLoadedNamespace(t)
              ? this.logger.warn(
                  'did not save key "'
                    .concat(o, '" as the namespace "')
                    .concat(t, '" was not yet loaded'),
                  'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!',
                )
              : null != o &&
                '' !== o &&
                (this.backend &&
                  this.backend.create &&
                  this.backend.create(
                    e,
                    t,
                    o,
                    r,
                    null,
                    n({}, a, {isUpdate: i}),
                  ),
                e && e[0] && this.store.addResource(e[0], t, o, r));
          },
        },
      ]),
      t
    );
  })();
  function H(e) {
    return (
      'string' == typeof e.ns && (e.ns = [e.ns]),
      'string' == typeof e.fallbackLng && (e.fallbackLng = [e.fallbackLng]),
      'string' == typeof e.fallbackNS && (e.fallbackNS = [e.fallbackNS]),
      e.supportedLngs &&
        e.supportedLngs.indexOf('cimode') < 0 &&
        (e.supportedLngs = e.supportedLngs.concat(['cimode'])),
      e
    );
  }
  function B() {}
  return new ((function (t) {
    function r() {
      var e,
        t,
        n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        i = arguments.length > 1 ? arguments[1] : void 0;
      if (
        (o(this, r),
        (e = s(this, u(r).call(this))),
        w && g.call(a(e)),
        (e.options = H(n)),
        (e.services = {}),
        (e.logger = p),
        (e.modules = {external: []}),
        (t = a(e)),
        Object.getOwnPropertyNames(Object.getPrototypeOf(t)).forEach(function (
          e,
        ) {
          'function' == typeof t[e] && (t[e] = t[e].bind(t));
        }),
        i && !e.isInitialized && !n.isClone)
      ) {
        if (!e.options.initImmediate) return e.init(n, i), s(e, a(e));
        setTimeout(function () {
          e.init(n, i);
        }, 0);
      }
      return e;
    }
    return (
      c(r, g),
      i(r, [
        {
          key: 'init',
          value: function () {
            var t = this,
              o =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              r = arguments.length > 1 ? arguments[1] : void 0;
            'function' == typeof o && ((r = o), (o = {})),
              !o.defaultNS &&
                o.ns &&
                ('string' == typeof o.ns
                  ? (o.defaultNS = o.ns)
                  : o.ns.indexOf('translation') < 0 && (o.defaultNS = o.ns[0]));
            var i = {
              debug: !1,
              initImmediate: !0,
              ns: ['translation'],
              defaultNS: ['translation'],
              fallbackLng: ['dev'],
              fallbackNS: !1,
              supportedLngs: !1,
              nonExplicitSupportedLngs: !1,
              load: 'all',
              preload: !1,
              simplifyPluralSuffix: !0,
              keySeparator: '.',
              nsSeparator: ':',
              pluralSeparator: '_',
              contextSeparator: '_',
              partialBundledLanguages: !1,
              saveMissing: !1,
              updateMissing: !1,
              saveMissingTo: 'fallback',
              saveMissingPlurals: !0,
              missingKeyHandler: !1,
              missingInterpolationHandler: !1,
              postProcess: !1,
              postProcessPassResolved: !1,
              returnNull: !0,
              returnEmptyString: !0,
              returnObjects: !1,
              joinArrays: !1,
              returnedObjectHandler: !1,
              parseMissingKeyHandler: !1,
              appendNamespaceToMissingKey: !1,
              appendNamespaceToCIMode: !1,
              overloadTranslationOptionHandler: function (t) {
                var n = {};
                if (
                  ('object' === e(t[1]) && (n = t[1]),
                  'string' == typeof t[1] && (n.defaultValue = t[1]),
                  'string' == typeof t[2] && (n.tDescription = t[2]),
                  'object' === e(t[2]) || 'object' === e(t[3]))
                ) {
                  var o = t[3] || t[2];
                  Object.keys(o).forEach(function (e) {
                    n[e] = o[e];
                  });
                }
                return n;
              },
              interpolation: {
                escapeValue: !0,
                format: function (e, t, n, o) {
                  return e;
                },
                prefix: '{{',
                suffix: '}}',
                formatSeparator: ',',
                unescapePrefix: '-',
                nestingPrefix: '$t(',
                nestingSuffix: ')',
                nestingOptionsSeparator: ',',
                maxReplaces: 1e3,
                skipOnVariables: !0,
              },
            };
            function a(e) {
              return e ? ('function' == typeof e ? new e() : e) : null;
            }
            if (
              ((this.options = n({}, i, this.options, H(o))),
              void 0 !== o.keySeparator &&
                (this.options.userDefinedKeySeparator = o.keySeparator),
              void 0 !== o.nsSeparator &&
                (this.options.userDefinedNsSeparator = o.nsSeparator),
              !this.options.isClone)
            ) {
              var s;
              this.modules.logger
                ? p.init(a(this.modules.logger), this.options)
                : p.init(null, this.options),
                this.modules.formatter
                  ? (s = this.modules.formatter)
                  : 'undefined' != typeof Intl && (s = K);
              var u = new P(this.options);
              this.store = new L(this.options.resources, this.options);
              var l = this.services;
              (l.logger = p),
                (l.resourceStore = this.store),
                (l.languageUtils = u),
                (l.pluralResolver = new T(u, {
                  prepend: this.options.pluralSeparator,
                  compatibilityJSON: this.options.compatibilityJSON,
                  simplifyPluralSuffix: this.options.simplifyPluralSuffix,
                })),
                !s ||
                  (this.options.interpolation.format &&
                    this.options.interpolation.format !==
                      i.interpolation.format) ||
                  ((l.formatter = a(s)),
                  l.formatter.init(l, this.options),
                  (this.options.interpolation.format = l.formatter.format.bind(
                    l.formatter,
                  ))),
                (l.interpolator = new V(this.options)),
                (l.utils = {
                  hasLoadedNamespace: this.hasLoadedNamespace.bind(this),
                }),
                (l.backendConnector = new M(
                  a(this.modules.backend),
                  l.resourceStore,
                  l,
                  this.options,
                )),
                l.backendConnector.on('*', function (e) {
                  for (
                    var n = arguments.length,
                      o = new Array(n > 1 ? n - 1 : 0),
                      r = 1;
                    r < n;
                    r++
                  )
                    o[r - 1] = arguments[r];
                  t.emit.apply(t, [e].concat(o));
                }),
                this.modules.languageDetector &&
                  ((l.languageDetector = a(this.modules.languageDetector)),
                  l.languageDetector.init(
                    l,
                    this.options.detection,
                    this.options,
                  )),
                this.modules.i18nFormat &&
                  ((l.i18nFormat = a(this.modules.i18nFormat)),
                  l.i18nFormat.init && l.i18nFormat.init(this)),
                (this.translator = new j(this.services, this.options)),
                this.translator.on('*', function (e) {
                  for (
                    var n = arguments.length,
                      o = new Array(n > 1 ? n - 1 : 0),
                      r = 1;
                    r < n;
                    r++
                  )
                    o[r - 1] = arguments[r];
                  t.emit.apply(t, [e].concat(o));
                }),
                this.modules.external.forEach(function (e) {
                  e.init && e.init(t);
                });
            }
            if (
              ((this.format = this.options.interpolation.format),
              r || (r = B),
              this.options.fallbackLng &&
                !this.services.languageDetector &&
                !this.options.lng)
            ) {
              var c = this.services.languageUtils.getFallbackCodes(
                this.options.fallbackLng,
              );
              c.length > 0 && 'dev' !== c[0] && (this.options.lng = c[0]);
            }
            this.services.languageDetector ||
              this.options.lng ||
              this.logger.warn(
                'init: no languageDetector is used and no lng is defined',
              );
            [
              'getResource',
              'hasResourceBundle',
              'getResourceBundle',
              'getDataByLanguage',
            ].forEach(function (e) {
              t[e] = function () {
                var n;
                return (n = t.store)[e].apply(n, arguments);
              };
            });
            [
              'addResource',
              'addResources',
              'addResourceBundle',
              'removeResourceBundle',
            ].forEach(function (e) {
              t[e] = function () {
                var n;
                return (n = t.store)[e].apply(n, arguments), t;
              };
            });
            var f = h(),
              g = function () {
                var e = function (e, n) {
                  t.isInitialized &&
                    !t.initializedStoreOnce &&
                    t.logger.warn(
                      'init: i18next is already initialized. You should call init just once!',
                    ),
                    (t.isInitialized = !0),
                    t.options.isClone || t.logger.log('initialized', t.options),
                    t.emit('initialized', t.options),
                    f.resolve(n),
                    r(e, n);
                };
                if (
                  t.languages &&
                  'v1' !== t.options.compatibilityAPI &&
                  !t.isInitialized
                )
                  return e(null, t.t.bind(t));
                t.changeLanguage(t.options.lng, e);
              };
            return (
              this.options.resources || !this.options.initImmediate
                ? g()
                : setTimeout(g, 0),
              f
            );
          },
        },
        {
          key: 'loadResources',
          value: function (e) {
            var t = this,
              n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : B,
              o = 'string' == typeof e ? e : this.language;
            if (
              ('function' == typeof e && (n = e),
              !this.options.resources || this.options.partialBundledLanguages)
            ) {
              if (o && 'cimode' === o.toLowerCase()) return n();
              var r = [],
                i = function (e) {
                  e &&
                    t.services.languageUtils
                      .toResolveHierarchy(e)
                      .forEach(function (e) {
                        r.indexOf(e) < 0 && r.push(e);
                      });
                };
              if (o) i(o);
              else
                this.services.languageUtils
                  .getFallbackCodes(this.options.fallbackLng)
                  .forEach(function (e) {
                    return i(e);
                  });
              this.options.preload &&
                this.options.preload.forEach(function (e) {
                  return i(e);
                }),
                this.services.backendConnector.load(r, this.options.ns, n);
            } else n(null);
          },
        },
        {
          key: 'reloadResources',
          value: function (e, t, n) {
            var o = h();
            return (
              e || (e = this.languages),
              t || (t = this.options.ns),
              n || (n = B),
              this.services.backendConnector.reload(e, t, function (e) {
                o.resolve(), n(e);
              }),
              o
            );
          },
        },
        {
          key: 'use',
          value: function (e) {
            if (!e)
              throw new Error(
                'You are passing an undefined module! Please check the object you are passing to i18next.use()',
              );
            if (!e.type)
              throw new Error(
                'You are passing a wrong module! Please check the object you are passing to i18next.use()',
              );
            return (
              'backend' === e.type && (this.modules.backend = e),
              ('logger' === e.type || (e.log && e.warn && e.error)) &&
                (this.modules.logger = e),
              'languageDetector' === e.type &&
                (this.modules.languageDetector = e),
              'i18nFormat' === e.type && (this.modules.i18nFormat = e),
              'postProcessor' === e.type && N.addPostProcessor(e),
              'formatter' === e.type && (this.modules.formatter = e),
              '3rdParty' === e.type && this.modules.external.push(e),
              this
            );
          },
        },
        {
          key: 'changeLanguage',
          value: function (e, t) {
            var n = this;
            this.isLanguageChangingTo = e;
            var o = h();
            this.emit('languageChanging', e);
            var r = function (e) {
                if (
                  ((n.language = e),
                  (n.languages =
                    n.services.languageUtils.toResolveHierarchy(e)),
                  (n.resolvedLanguage = void 0),
                  !(['cimode', 'dev'].indexOf(e) > -1))
                )
                  for (var t = 0; t < n.languages.length; t++) {
                    var o = n.languages[t];
                    if (
                      !(['cimode', 'dev'].indexOf(o) > -1) &&
                      n.store.hasLanguageSomeTranslations(o)
                    ) {
                      n.resolvedLanguage = o;
                      break;
                    }
                  }
              },
              i = function (i) {
                e || i || !n.services.languageDetector || (i = []);
                var a =
                  'string' == typeof i
                    ? i
                    : n.services.languageUtils.getBestMatchFromCodes(i);
                a &&
                  (n.language || r(a),
                  n.translator.language || n.translator.changeLanguage(a),
                  n.services.languageDetector &&
                    n.services.languageDetector.cacheUserLanguage(a)),
                  n.loadResources(a, function (e) {
                    !(function (e, i) {
                      i
                        ? (r(i),
                          n.translator.changeLanguage(i),
                          (n.isLanguageChangingTo = void 0),
                          n.emit('languageChanged', i),
                          n.logger.log('languageChanged', i))
                        : (n.isLanguageChangingTo = void 0),
                        o.resolve(function () {
                          return n.t.apply(n, arguments);
                        }),
                        t &&
                          t(e, function () {
                            return n.t.apply(n, arguments);
                          });
                    })(e, a);
                  });
              };
            return (
              e ||
              !this.services.languageDetector ||
              this.services.languageDetector.async
                ? !e &&
                  this.services.languageDetector &&
                  this.services.languageDetector.async
                  ? this.services.languageDetector.detect(i)
                  : i(e)
                : i(this.services.languageDetector.detect()),
              o
            );
          },
        },
        {
          key: 'getFixedT',
          value: function (t, o, r) {
            var i = this,
              a = function t(o, a) {
                var s;
                if ('object' !== e(a)) {
                  for (
                    var u = arguments.length,
                      l = new Array(u > 2 ? u - 2 : 0),
                      c = 2;
                    c < u;
                    c++
                  )
                    l[c - 2] = arguments[c];
                  s = i.options.overloadTranslationOptionHandler(
                    [o, a].concat(l),
                  );
                } else s = n({}, a);
                (s.lng = s.lng || t.lng),
                  (s.lngs = s.lngs || t.lngs),
                  (s.ns = s.ns || t.ns);
                var f = i.options.keySeparator || '.',
                  p = r ? ''.concat(r).concat(f).concat(o) : o;
                return i.t(p, s);
              };
            return (
              'string' == typeof t ? (a.lng = t) : (a.lngs = t),
              (a.ns = o),
              (a.keyPrefix = r),
              a
            );
          },
        },
        {
          key: 't',
          value: function () {
            var e;
            return (
              this.translator &&
              (e = this.translator).translate.apply(e, arguments)
            );
          },
        },
        {
          key: 'exists',
          value: function () {
            var e;
            return (
              this.translator &&
              (e = this.translator).exists.apply(e, arguments)
            );
          },
        },
        {
          key: 'setDefaultNamespace',
          value: function (e) {
            this.options.defaultNS = e;
          },
        },
        {
          key: 'hasLoadedNamespace',
          value: function (e) {
            var t = this,
              n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
            if (!this.isInitialized)
              return (
                this.logger.warn(
                  'hasLoadedNamespace: i18next was not initialized',
                  this.languages,
                ),
                !1
              );
            if (!this.languages || !this.languages.length)
              return (
                this.logger.warn(
                  'hasLoadedNamespace: i18n.languages were undefined or empty',
                  this.languages,
                ),
                !1
              );
            var o = this.resolvedLanguage || this.languages[0],
              r = !!this.options && this.options.fallbackLng,
              i = this.languages[this.languages.length - 1];
            if ('cimode' === o.toLowerCase()) return !0;
            var a = function (e, n) {
              var o =
                t.services.backendConnector.state[''.concat(e, '|').concat(n)];
              return -1 === o || 2 === o;
            };
            if (n.precheck) {
              var s = n.precheck(this, a);
              if (void 0 !== s) return s;
            }
            return (
              !!this.hasResourceBundle(o, e) ||
              !this.services.backendConnector.backend ||
              !(!a(o, e) || (r && !a(i, e)))
            );
          },
        },
        {
          key: 'loadNamespaces',
          value: function (e, t) {
            var n = this,
              o = h();
            return this.options.ns
              ? ('string' == typeof e && (e = [e]),
                e.forEach(function (e) {
                  n.options.ns.indexOf(e) < 0 && n.options.ns.push(e);
                }),
                this.loadResources(function (e) {
                  o.resolve(), t && t(e);
                }),
                o)
              : (t && t(), Promise.resolve());
          },
        },
        {
          key: 'loadLanguages',
          value: function (e, t) {
            var n = h();
            'string' == typeof e && (e = [e]);
            var o = this.options.preload || [],
              r = e.filter(function (e) {
                return o.indexOf(e) < 0;
              });
            return r.length
              ? ((this.options.preload = o.concat(r)),
                this.loadResources(function (e) {
                  n.resolve(), t && t(e);
                }),
                n)
              : (t && t(), Promise.resolve());
          },
        },
        {
          key: 'dir',
          value: function (e) {
            if (
              (e ||
                (e =
                  this.resolvedLanguage ||
                  (this.languages && this.languages.length > 0
                    ? this.languages[0]
                    : this.language)),
              !e)
            )
              return 'rtl';
            return [
              'ar',
              'shu',
              'sqr',
              'ssh',
              'xaa',
              'yhd',
              'yud',
              'aao',
              'abh',
              'abv',
              'acm',
              'acq',
              'acw',
              'acx',
              'acy',
              'adf',
              'ads',
              'aeb',
              'aec',
              'afb',
              'ajp',
              'apc',
              'apd',
              'arb',
              'arq',
              'ars',
              'ary',
              'arz',
              'auz',
              'avl',
              'ayh',
              'ayl',
              'ayn',
              'ayp',
              'bbz',
              'pga',
              'he',
              'iw',
              'ps',
              'pbt',
              'pbu',
              'pst',
              'prp',
              'prd',
              'ug',
              'ur',
              'ydd',
              'yds',
              'yih',
              'ji',
              'yi',
              'hbo',
              'men',
              'xmn',
              'fa',
              'jpr',
              'peo',
              'pes',
              'prs',
              'dv',
              'sam',
              'ckb',
            ].indexOf(this.services.languageUtils.getLanguagePartFromCode(e)) >=
              0
              ? 'rtl'
              : 'ltr';
          },
        },
        {
          key: 'createInstance',
          value: function () {
            return new r(
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
              arguments.length > 1 ? arguments[1] : void 0,
            );
          },
        },
        {
          key: 'cloneInstance',
          value: function () {
            var e = this,
              t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              o =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : B,
              i = n({}, this.options, t, {isClone: !0}),
              a = new r(i);
            return (
              ['store', 'services', 'language'].forEach(function (t) {
                a[t] = e[t];
              }),
              (a.services = n({}, this.services)),
              (a.services.utils = {
                hasLoadedNamespace: a.hasLoadedNamespace.bind(a),
              }),
              (a.translator = new j(a.services, a.options)),
              a.translator.on('*', function (e) {
                for (
                  var t = arguments.length,
                    n = new Array(t > 1 ? t - 1 : 0),
                    o = 1;
                  o < t;
                  o++
                )
                  n[o - 1] = arguments[o];
                a.emit.apply(a, [e].concat(n));
              }),
              a.init(i, o),
              (a.translator.options = a.options),
              (a.translator.backendConnector.services.utils = {
                hasLoadedNamespace: a.hasLoadedNamespace.bind(a),
              }),
              a
            );
          },
        },
        {
          key: 'toJSON',
          value: function () {
            return {
              options: this.options,
              store: this.store,
              language: this.language,
              languages: this.languages,
              resolvedLanguage: this.resolvedLanguage,
            };
          },
        },
      ]),
      r
    );
  })())();
});
