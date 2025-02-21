window.Modernizr = function(e, t, n) {
    function N(e) {
        f.cssText = e
    }
    function C(e, t) {
        return N(h.join(e + ";") + (t || ""))
    }
    function k(e, t) {
        return typeof e === t
    }
    function L(e, t) {
        return !!~("" + e).indexOf(t)
    }
    function A(e, t) {
        for (var r in e) {
            var i = e[r];
            if (!L(i, "-") && f[i] !== n)
                return t == "pfx" ? i : !0
        }
        return !1
    }
    function O(e, t, r) {
        for (var i in e) {
            var s = t[e[i]];
            if (s !== n)
                return r === !1 ? e[i] : k(s, "function") ? s.bind(r || t) : s
        }
        return !1
    }
    function M(e, t, n) {
        var r = e.charAt(0).toUpperCase() + e.slice(1)
          , i = (e + " " + d.join(r + " ") + r).split(" ");
        return k(t, "string") || k(t, "undefined") ? A(i, t) : (i = (e + " " + v.join(r + " ") + r).split(" "),
        O(i, t, n))
    }
    var r = "2.6.2", i = {}, s = !0, o = t.documentElement, u = "modernizr", a = t.createElement(u), f = a.style, l, c = {}.toString, h = " -webkit- -moz- -o- -ms- ".split(" "), p = "Webkit Moz O ms", d = p.split(" "), v = p.toLowerCase().split(" "), m = {}, g = {}, y = {}, b = [], w = b.slice, E, S = function(e, n, r, i) {
        var s, a, f, l, c = t.createElement("div"), h = t.body, p = h || t.createElement("body");
        if (parseInt(r, 10))
            while (r--)
                f = t.createElement("div"),
                f.id = i ? i[r] : u + (r + 1),
                c.appendChild(f);
        return s = ["&#173;", '<style id="s', u, '">', e, "</style>"].join(""),
        c.id = u,
        (h ? c : p).innerHTML += s,
        p.appendChild(c),
        h || (p.style.background = "",
        p.style.overflow = "hidden",
        l = o.style.overflow,
        o.style.overflow = "hidden",
        o.appendChild(p)),
        a = n(c, e),
        h ? c.parentNode.removeChild(c) : (p.parentNode.removeChild(p),
        o.style.overflow = l),
        !!a
    }, x = {}.hasOwnProperty, T;
    !k(x, "undefined") && !k(x.call, "undefined") ? T = function(e, t) {
        return x.call(e, t)
    }
    : T = function(e, t) {
        return t in e && k(e.constructor.prototype[t], "undefined")
    }
    ,
    Function.prototype.bind || (Function.prototype.bind = function(t) {
        var n = this;
        if (typeof n != "function")
            throw new TypeError;
        var r = w.call(arguments, 1)
          , i = function() {
            if (this instanceof i) {
                var e = function() {};
                e.prototype = n.prototype;
                var s = new e
                  , o = n.apply(s, r.concat(w.call(arguments)));
                return Object(o) === o ? o : s
            }
            return n.apply(t, r.concat(w.call(arguments)))
        };
        return i
    }
    ),
    m.touch = function() {
        var n;
        return "ontouchstart"in e || e.DocumentTouch && t instanceof DocumentTouch ? n = !0 : S(["@media (", h.join("touch-enabled),("), u, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(e) {
            n = e.offsetTop === 9
        }),
        n
    }
    ,
    m.csstransforms = function() {
        return !!M("transform")
    }
    ;
    for (var _ in m)
        T(m, _) && (E = _.toLowerCase(),
        i[E] = m[_](),
        b.push((i[E] ? "" : "no-") + E));
    return i.addTest = function(e, t) {
        if (typeof e == "object")
            for (var r in e)
                T(e, r) && i.addTest(r, e[r]);
        else {
            e = e.toLowerCase();
            if (i[e] !== n)
                return i;
            t = typeof t == "function" ? t() : t,
            typeof s != "undefined" && s && (o.className += " " + (t ? "" : "no-") + e),
            i[e] = t
        }
        return i
    }
    ,
    N(""),
    a = l = null,
    function(e, t) {
        function l(e, t) {
            var n = e.createElement("p")
              , r = e.getElementsByTagName("head")[0] || e.documentElement;
            return n.innerHTML = "x<style>" + t + "</style>",
            r.insertBefore(n.lastChild, r.firstChild)
        }
        function c() {
            var e = g.elements;
            return typeof e == "string" ? e.split(" ") : e
        }
        function h(e) {
            var t = a[e[o]];
            return t || (t = {},
            u++,
            e[o] = u,
            a[u] = t),
            t
        }
        function p(e, n, s) {
            n || (n = t);
            if (f)
                return n.createElement(e);
            s || (s = h(n));
            var o;
            return s.cache[e] ? o = s.cache[e].cloneNode() : i.test(e) ? o = (s.cache[e] = s.createElem(e)).cloneNode() : o = s.createElem(e),
            o.canHaveChildren && !r.test(e) ? s.frag.appendChild(o) : o
        }
        function d(e, n) {
            e || (e = t);
            if (f)
                return e.createDocumentFragment();
            n = n || h(e);
            var r = n.frag.cloneNode()
              , i = 0
              , s = c()
              , o = s.length;
            for (; i < o; i++)
                r.createElement(s[i]);
            return r
        }
        function v(e, t) {
            t.cache || (t.cache = {},
            t.createElem = e.createElement,
            t.createFrag = e.createDocumentFragment,
            t.frag = t.createFrag()),
            e.createElement = function(n) {
                return g.shivMethods ? p(n, e, t) : t.createElem(n)
            }
            ,
            e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + c().join().replace(/\w+/g, function(e) {
                return t.createElem(e),
                t.frag.createElement(e),
                'c("' + e + '")'
            }) + ");return n}")(g, t.frag)
        }
        function m(e) {
            e || (e = t);
            var n = h(e);
            return g.shivCSS && !s && !n.hasCSS && (n.hasCSS = !!l(e, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),
            f || v(e, n),
            e
        }
        var n = e.html5 || {}, r = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, i = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, s, o = "_html5shiv", u = 0, a = {}, f;
        (function() {
            try {
                var e = t.createElement("a");
                e.innerHTML = "<xyz></xyz>",
                s = "hidden"in e,
                f = e.childNodes.length == 1 || function() {
                    t.createElement("a");
                    var e = t.createDocumentFragment();
                    return typeof e.cloneNode == "undefined" || typeof e.createDocumentFragment == "undefined" || typeof e.createElement == "undefined"
                }()
            } catch (n) {
                s = !0,
                f = !0
            }
        }
        )();
        var g = {
            elements: n.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
            shivCSS: n.shivCSS !== !1,
            supportsUnknownElements: f,
            shivMethods: n.shivMethods !== !1,
            type: "default",
            shivDocument: m,
            createElement: p,
            createDocumentFragment: d
        };
        e.html5 = g,
        m(t)
    }(this, t),
    i._version = r,
    i._prefixes = h,
    i._domPrefixes = v,
    i._cssomPrefixes = d,
    i.testProp = function(e) {
        return A([e])
    }
    ,
    i.testAllProps = M,
    i.testStyles = S,
    o.className = o.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (s ? " js " + b.join(" ") : ""),
    i
}(this, this.document),
function(e, t, n) {
    function r(e) {
        return "[object Function]" == d.call(e)
    }
    function i(e) {
        return "string" == typeof e
    }
    function s() {}
    function o(e) {
        return !e || "loaded" == e || "complete" == e || "uninitialized" == e
    }
    function u() {
        var e = v.shift();
        m = 1,
        e ? e.t ? h(function() {
            ("c" == e.t ? k.injectCss : k.injectJs)(e.s, 0, e.a, e.x, e.e, 1)
        }, 0) : (e(),
        u()) : m = 0
    }
    function a(e, n, r, i, s, a, f) {
        function l(t) {
            if (!d && o(c.readyState) && (w.r = d = 1,
            !m && u(),
            c.onload = c.onreadystatechange = null,
            t)) {
                "img" != e && h(function() {
                    b.removeChild(c)
                }, 50);
                for (var r in T[n])
                    T[n].hasOwnProperty(r) && T[n][r].onload()
            }
        }
        var f = f || k.errorTimeout
          , c = t.createElement(e)
          , d = 0
          , g = 0
          , w = {
            t: r,
            s: n,
            e: s,
            a: a,
            x: f
        };
        1 === T[n] && (g = 1,
        T[n] = []),
        "object" == e ? c.data = n : (c.src = n,
        c.type = e),
        c.width = c.height = "0",
        c.onerror = c.onload = c.onreadystatechange = function() {
            l.call(this, g)
        }
        ,
        v.splice(i, 0, w),
        "img" != e && (g || 2 === T[n] ? (b.insertBefore(c, y ? null : p),
        h(l, f)) : T[n].push(c))
    }
    function f(e, t, n, r, s) {
        return m = 0,
        t = t || "j",
        i(e) ? a("c" == t ? E : w, e, t, this.i++, n, r, s) : (v.splice(this.i++, 0, e),
        1 == v.length && u()),
        this
    }
    function l() {
        var e = k;
        return e.loader = {
            load: f,
            i: 0
        },
        e
    }
    var c = t.documentElement, h = e.setTimeout, p = t.getElementsByTagName("script")[0], d = {}.toString, v = [], m = 0, g = "MozAppearance"in c.style, y = g && !!t.createRange().compareNode, b = y ? c : p.parentNode, c = e.opera && "[object Opera]" == d.call(e.opera), c = !!t.attachEvent && !c, w = g ? "object" : c ? "script" : "img", E = c ? "script" : w, S = Array.isArray || function(e) {
        return "[object Array]" == d.call(e)
    }
    , x = [], T = {}, N = {
        timeout: function(e, t) {
            return t.length && (e.timeout = t[0]),
            e
        }
    }, C, k;
    k = function(e) {
        function t(e) {
            var e = e.split("!"), t = x.length, n = e.pop(), r = e.length, n = {
                url: n,
                origUrl: n,
                prefixes: e
            }, i, s, o;
            for (s = 0; s < r; s++)
                o = e[s].split("="),
                (i = N[o.shift()]) && (n = i(n, o));
            for (s = 0; s < t; s++)
                n = x[s](n);
            return n
        }
        function o(e, i, s, o, u) {
            var a = t(e)
              , f = a.autoCallback;
            a.url.split(".").pop().split("?").shift(),
            a.bypass || (i && (i = r(i) ? i : i[e] || i[o] || i[e.split("/").pop().split("?")[0]]),
            a.instead ? a.instead(e, i, s, o, u) : (T[a.url] ? a.noexec = !0 : T[a.url] = 1,
            s.load(a.url, a.forceCSS || !a.forceJS && "css" == a.url.split(".").pop().split("?").shift() ? "c" : n, a.noexec, a.attrs, a.timeout),
            (r(i) || r(f)) && s.load(function() {
                l(),
                i && i(a.origUrl, u, o),
                f && f(a.origUrl, u, o),
                T[a.url] = 2
            })))
        }
        function u(e, t) {
            function n(e, n) {
                if (e) {
                    if (i(e))
                        n || (f = function() {
                            var e = [].slice.call(arguments);
                            l.apply(this, e),
                            c()
                        }
                        ),
                        o(e, f, t, 0, u);
                    else if (Object(e) === e)
                        for (p in h = function() {
                            var t = 0, n;
                            for (n in e)
                                e.hasOwnProperty(n) && t++;
                            return t
                        }(),
                        e)
                            e.hasOwnProperty(p) && (!n && !--h && (r(f) ? f = function() {
                                var e = [].slice.call(arguments);
                                l.apply(this, e),
                                c()
                            }
                            : f[p] = function(e) {
                                return function() {
                                    var t = [].slice.call(arguments);
                                    e && e.apply(this, t),
                                    c()
                                }
                            }(l[p])),
                            o(e[p], f, t, p, u))
                } else
                    !n && c()
            }
            var u = !!e.test, a = e.load || e.both, f = e.callback || s, l = f, c = e.complete || s, h, p;
            n(u ? e.yep : e.nope, !!a),
            a && n(a)
        }
        var a, f, c = this.yepnope.loader;
        if (i(e))
            o(e, 0, c, 0);
        else if (S(e))
            for (a = 0; a < e.length; a++)
                f = e[a],
                i(f) ? o(f, 0, c, 0) : S(f) ? k(f) : Object(f) === f && u(f, c);
        else
            Object(e) === e && u(e, c)
    }
    ,
    k.addPrefix = function(e, t) {
        N[e] = t
    }
    ,
    k.addFilter = function(e) {
        x.push(e)
    }
    ,
    k.errorTimeout = 1e4,
    null == t.readyState && t.addEventListener && (t.readyState = "loading",
    t.addEventListener("DOMContentLoaded", C = function() {
        t.removeEventListener("DOMContentLoaded", C, 0),
        t.readyState = "complete"
    }
    , 0)),
    e.yepnope = l(),
    e.yepnope.executeStack = u,
    e.yepnope.injectJs = function(e, n, r, i, a, f) {
        var l = t.createElement("script"), c, d, i = i || k.errorTimeout;
        l.src = e;
        for (d in r)
            l.setAttribute(d, r[d]);
        n = f ? u : n || s,
        l.onreadystatechange = l.onload = function() {
            !c && o(l.readyState) && (c = 1,
            n(),
            l.onload = l.onreadystatechange = null)
        }
        ,
        h(function() {
            c || (c = 1,
            n(1))
        }, i),
        a ? l.onload() : p.parentNode.insertBefore(l, p)
    }
    ,
    e.yepnope.injectCss = function(e, n, r, i, o, a) {
        var i = t.createElement("link"), f, n = a ? u : n || s;
        i.href = e,
        i.rel = "stylesheet",
        i.type = "text/css";
        for (f in r)
            i.setAttribute(f, r[f]);
        o || (p.parentNode.insertBefore(i, p),
        h(n, 0))
    }
}(this, document),
Modernizr.load = function() {
    yepnope.apply(window, [].slice.call(arguments, 0))
}
,
function(e, t) {
    function _(e) {
        var t = M[e] = {};
        return v.each(e.split(y), function(e, n) {
            t[n] = !0
        }),
        t
    }
    function H(e, n, r) {
        if (r === t && e.nodeType === 1) {
            var i = "data-" + n.replace(P, "-$1").toLowerCase();
            r = e.getAttribute(i);
            if (typeof r == "string") {
                try {
                    r = r === "true" ? !0 : r === "false" ? !1 : r === "null" ? null : +r + "" === r ? +r : D.test(r) ? v.parseJSON(r) : r
                } catch (s) {}
                v.data(e, n, r)
            } else
                r = t
        }
        return r
    }
    function B(e) {
        var t;
        for (t in e) {
            if (t === "data" && v.isEmptyObject(e[t]))
                continue;
            if (t !== "toJSON")
                return !1
        }
        return !0
    }
    function et() {
        return !1
    }
    function tt() {
        return !0
    }
    function ut(e) {
        return !e || !e.parentNode || e.parentNode.nodeType === 11
    }
    function at(e, t) {
        do
            e = e[t];
        while (e && e.nodeType !== 1);return e
    }
    function ft(e, t, n) {
        t = t || 0;
        if (v.isFunction(t))
            return v.grep(e, function(e, r) {
                var i = !!t.call(e, r, e);
                return i === n
            });
        if (t.nodeType)
            return v.grep(e, function(e, r) {
                return e === t === n
            });
        if (typeof t == "string") {
            var r = v.grep(e, function(e) {
                return e.nodeType === 1
            });
            if (it.test(t))
                return v.filter(t, r, !n);
            t = v.filter(t, r)
        }
        return v.grep(e, function(e, r) {
            return v.inArray(e, t) >= 0 === n
        })
    }
    function lt(e) {
        var t = ct.split("|")
          , n = e.createDocumentFragment();
        if (n.createElement)
            while (t.length)
                n.createElement(t.pop());
        return n
    }
    function Lt(e, t) {
        return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t))
    }
    function At(e, t) {
        if (t.nodeType !== 1 || !v.hasData(e))
            return;
        var n, r, i, s = v._data(e), o = v._data(t, s), u = s.events;
        if (u) {
            delete o.handle,
            o.events = {};
            for (n in u)
                for (r = 0,
                i = u[n].length; r < i; r++)
                    v.event.add(t, n, u[n][r])
        }
        o.data && (o.data = v.extend({}, o.data))
    }
    function Ot(e, t) {
        var n;
        if (t.nodeType !== 1)
            return;
        t.clearAttributes && t.clearAttributes(),
        t.mergeAttributes && t.mergeAttributes(e),
        n = t.nodeName.toLowerCase(),
        n === "object" ? (t.parentNode && (t.outerHTML = e.outerHTML),
        v.support.html5Clone && e.innerHTML && !v.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : n === "input" && Et.test(e.type) ? (t.defaultChecked = t.checked = e.checked,
        t.value !== e.value && (t.value = e.value)) : n === "option" ? t.selected = e.defaultSelected : n === "input" || n === "textarea" ? t.defaultValue = e.defaultValue : n === "script" && t.text !== e.text && (t.text = e.text),
        t.removeAttribute(v.expando)
    }
    function Mt(e) {
        return typeof e.getElementsByTagName != "undefined" ? e.getElementsByTagName("*") : typeof e.querySelectorAll != "undefined" ? e.querySelectorAll("*") : []
    }
    function _t(e) {
        Et.test(e.type) && (e.defaultChecked = e.checked)
    }
    function Qt(e, t) {
        if (t in e)
            return t;
        var n = t.charAt(0).toUpperCase() + t.slice(1)
          , r = t
          , i = Jt.length;
        while (i--) {
            t = Jt[i] + n;
            if (t in e)
                return t
        }
        return r
    }
    function Gt(e, t) {
        return e = t || e,
        v.css(e, "display") === "none" || !v.contains(e.ownerDocument, e)
    }
    function Yt(e, t) {
        var n, r, i = [], s = 0, o = e.length;
        for (; s < o; s++) {
            n = e[s];
            if (!n.style)
                continue;
            i[s] = v._data(n, "olddisplay"),
            t ? (!i[s] && n.style.display === "none" && (n.style.display = ""),
            n.style.display === "" && Gt(n) && (i[s] = v._data(n, "olddisplay", nn(n.nodeName)))) : (r = Dt(n, "display"),
            !i[s] && r !== "none" && v._data(n, "olddisplay", r))
        }
        for (s = 0; s < o; s++) {
            n = e[s];
            if (!n.style)
                continue;
            if (!t || n.style.display === "none" || n.style.display === "")
                n.style.display = t ? i[s] || "" : "none"
        }
        return e
    }
    function Zt(e, t, n) {
        var r = Rt.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }
    function en(e, t, n, r) {
        var i = n === (r ? "border" : "content") ? 4 : t === "width" ? 1 : 0
          , s = 0;
        for (; i < 4; i += 2)
            n === "margin" && (s += v.css(e, n + $t[i], !0)),
            r ? (n === "content" && (s -= parseFloat(Dt(e, "padding" + $t[i])) || 0),
            n !== "margin" && (s -= parseFloat(Dt(e, "border" + $t[i] + "Width")) || 0)) : (s += parseFloat(Dt(e, "padding" + $t[i])) || 0,
            n !== "padding" && (s += parseFloat(Dt(e, "border" + $t[i] + "Width")) || 0));
        return s
    }
    function tn(e, t, n) {
        var r = t === "width" ? e.offsetWidth : e.offsetHeight
          , i = !0
          , s = v.support.boxSizing && v.css(e, "boxSizing") === "border-box";
        if (r <= 0 || r == null) {
            r = Dt(e, t);
            if (r < 0 || r == null)
                r = e.style[t];
            if (Ut.test(r))
                return r;
            i = s && (v.support.boxSizingReliable || r === e.style[t]),
            r = parseFloat(r) || 0
        }
        return r + en(e, t, n || (s ? "border" : "content"), i) + "px"
    }
    function nn(e) {
        if (Wt[e])
            return Wt[e];
        var t = v("<" + e + ">").appendTo(i.body)
          , n = t.css("display");
        t.remove();
        if (n === "none" || n === "") {
            Pt = i.body.appendChild(Pt || v.extend(i.createElement("iframe"), {
                frameBorder: 0,
                width: 0,
                height: 0
            }));
            if (!Ht || !Pt.createElement)
                Ht = (Pt.contentWindow || Pt.contentDocument).document,
                Ht.write("<!doctype html><html><body>"),
                Ht.close();
            t = Ht.body.appendChild(Ht.createElement(e)),
            n = Dt(t, "display"),
            i.body.removeChild(Pt)
        }
        return Wt[e] = n,
        n
    }
    function fn(e, t, n, r) {
        var i;
        if (v.isArray(t))
            v.each(t, function(t, i) {
                n || sn.test(e) ? r(e, i) : fn(e + "[" + (typeof i == "object" ? t : "") + "]", i, n, r)
            });
        else if (!n && v.type(t) === "object")
            for (i in t)
                fn(e + "[" + i + "]", t[i], n, r);
        else
            r(e, t)
    }
    function Cn(e) {
        return function(t, n) {
            typeof t != "string" && (n = t,
            t = "*");
            var r, i, s, o = t.toLowerCase().split(y), u = 0, a = o.length;
            if (v.isFunction(n))
                for (; u < a; u++)
                    r = o[u],
                    s = /^\+/.test(r),
                    s && (r = r.substr(1) || "*"),
                    i = e[r] = e[r] || [],
                    i[s ? "unshift" : "push"](n)
        }
    }
    function kn(e, n, r, i, s, o) {
        s = s || n.dataTypes[0],
        o = o || {},
        o[s] = !0;
        var u, a = e[s], f = 0, l = a ? a.length : 0, c = e === Sn;
        for (; f < l && (c || !u); f++)
            u = a[f](n, r, i),
            typeof u == "string" && (!c || o[u] ? u = t : (n.dataTypes.unshift(u),
            u = kn(e, n, r, i, u, o)));
        return (c || !u) && !o["*"] && (u = kn(e, n, r, i, "*", o)),
        u
    }
    function Ln(e, n) {
        var r, i, s = v.ajaxSettings.flatOptions || {};
        for (r in n)
            n[r] !== t && ((s[r] ? e : i || (i = {}))[r] = n[r]);
        i && v.extend(!0, e, i)
    }
    function An(e, n, r) {
        var i, s, o, u, a = e.contents, f = e.dataTypes, l = e.responseFields;
        for (s in l)
            s in r && (n[l[s]] = r[s]);
        while (f[0] === "*")
            f.shift(),
            i === t && (i = e.mimeType || n.getResponseHeader("content-type"));
        if (i)
            for (s in a)
                if (a[s] && a[s].test(i)) {
                    f.unshift(s);
                    break
                }
        if (f[0]in r)
            o = f[0];
        else {
            for (s in r) {
                if (!f[0] || e.converters[s + " " + f[0]]) {
                    o = s;
                    break
                }
                u || (u = s)
            }
            o = o || u
        }
        if (o)
            return o !== f[0] && f.unshift(o),
            r[o]
    }
    function On(e, t) {
        var n, r, i, s, o = e.dataTypes.slice(), u = o[0], a = {}, f = 0;
        e.dataFilter && (t = e.dataFilter(t, e.dataType));
        if (o[1])
            for (n in e.converters)
                a[n.toLowerCase()] = e.converters[n];
        for (; i = o[++f]; )
            if (i !== "*") {
                if (u !== "*" && u !== i) {
                    n = a[u + " " + i] || a["* " + i];
                    if (!n)
                        for (r in a) {
                            s = r.split(" ");
                            if (s[1] === i) {
                                n = a[u + " " + s[0]] || a["* " + s[0]];
                                if (n) {
                                    n === !0 ? n = a[r] : a[r] !== !0 && (i = s[0],
                                    o.splice(f--, 0, i));
                                    break
                                }
                            }
                        }
                    if (n !== !0)
                        if (n && e["throws"])
                            t = n(t);
                        else
                            try {
                                t = n(t)
                            } catch (l) {
                                return {
                                    state: "parsererror",
                                    error: n ? l : "No conversion from " + u + " to " + i
                                }
                            }
                }
                u = i
            }
        return {
            state: "success",
            data: t
        }
    }
    function Fn() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }
    function In() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }
    function $n() {
        return setTimeout(function() {
            qn = t
        }, 0),
        qn = v.now()
    }
    function Jn(e, t) {
        v.each(t, function(t, n) {
            var r = (Vn[t] || []).concat(Vn["*"])
              , i = 0
              , s = r.length;
            for (; i < s; i++)
                if (r[i].call(e, t, n))
                    return
        })
    }
    function Kn(e, t, n) {
        var r, i = 0, s = 0, o = Xn.length, u = v.Deferred().always(function() {
            delete a.elem
        }), a = function() {
            var t = qn || $n()
              , n = Math.max(0, f.startTime + f.duration - t)
              , r = 1 - (n / f.duration || 0)
              , i = 0
              , s = f.tweens.length;
            for (; i < s; i++)
                f.tweens[i].run(r);
            return u.notifyWith(e, [f, r, n]),
            r < 1 && s ? n : (u.resolveWith(e, [f]),
            !1)
        }, f = u.promise({
            elem: e,
            props: v.extend({}, t),
            opts: v.extend(!0, {
                specialEasing: {}
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: qn || $n(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n, r) {
                var i = v.Tween(e, f.opts, t, n, f.opts.specialEasing[t] || f.opts.easing);
                return f.tweens.push(i),
                i
            },
            stop: function(t) {
                var n = 0
                  , r = t ? f.tweens.length : 0;
                for (; n < r; n++)
                    f.tweens[n].run(1);
                return t ? u.resolveWith(e, [f, t]) : u.rejectWith(e, [f, t]),
                this
            }
        }), l = f.props;
        Qn(l, f.opts.specialEasing);
        for (; i < o; i++) {
            r = Xn[i].call(f, e, l, f.opts);
            if (r)
                return r
        }
        return Jn(f, l),
        v.isFunction(f.opts.start) && f.opts.start.call(e, f),
        v.fx.timer(v.extend(a, {
            anim: f,
            queue: f.opts.queue,
            elem: e
        })),
        f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always)
    }
    function Qn(e, t) {
        var n, r, i, s, o;
        for (n in e) {
            r = v.camelCase(n),
            i = t[r],
            s = e[n],
            v.isArray(s) && (i = s[1],
            s = e[n] = s[0]),
            n !== r && (e[r] = s,
            delete e[n]),
            o = v.cssHooks[r];
            if (o && "expand"in o) {
                s = o.expand(s),
                delete e[r];
                for (n in s)
                    n in e || (e[n] = s[n],
                    t[n] = i)
            } else
                t[r] = i
        }
    }
    function Gn(e, t, n) {
        var r, i, s, o, u, a, f, l, c = this, h = e.style, p = {}, d = [], m = e.nodeType && Gt(e);
        n.queue || (f = v._queueHooks(e, "fx"),
        f.unqueued == null && (f.unqueued = 0,
        l = f.empty.fire,
        f.empty.fire = function() {
            f.unqueued || l()
        }
        ),
        f.unqueued++,
        c.always(function() {
            c.always(function() {
                f.unqueued--,
                v.queue(e, "fx").length || f.empty.fire()
            })
        })),
        e.nodeType === 1 && ("height"in t || "width"in t) && (n.overflow = [h.overflow, h.overflowX, h.overflowY],
        v.css(e, "display") === "inline" && v.css(e, "float") === "none" && (!v.support.inlineBlockNeedsLayout || nn(e.nodeName) === "inline" ? h.display = "inline-block" : h.zoom = 1)),
        n.overflow && (h.overflow = "hidden",
        v.support.shrinkWrapBlocks || c.done(function() {
            h.overflow = n.overflow[0],
            h.overflowX = n.overflow[1],
            h.overflowY = n.overflow[2]
        }));
        for (r in t) {
            s = t[r];
            if (Un.exec(s)) {
                delete t[r];
                if (s === (m ? "hide" : "show"))
                    continue;
                d.push(r)
            }
        }
        o = d.length;
        if (o) {
            u = v._data(e, "fxshow") || v._data(e, "fxshow", {}),
            m ? v(e).show() : c.done(function() {
                v(e).hide()
            }),
            c.done(function() {
                var t;
                v.removeData(e, "fxshow", !0);
                for (t in p)
                    v.style(e, t, p[t])
            });
            for (r = 0; r < o; r++)
                i = d[r],
                a = c.createTween(i, m ? u[i] : 0),
                p[i] = u[i] || v.style(e, i),
                i in u || (u[i] = a.start,
                m && (a.end = a.start,
                a.start = i === "width" || i === "height" ? 1 : 0))
        }
    }
    function Yn(e, t, n, r, i) {
        return new Yn.prototype.init(e,t,n,r,i)
    }
    function Zn(e, t) {
        var n, r = {
            height: e
        }, i = 0;
        t = t ? 1 : 0;
        for (; i < 4; i += 2 - t)
            n = $t[i],
            r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e),
        r
    }
    function tr(e) {
        return v.isWindow(e) ? e : e.nodeType === 9 ? e.defaultView || e.parentWindow : !1
    }
    var n, r, i = e.document, s = e.location, o = e.navigator, u = e.jQuery, a = e.$, f = Array.prototype.push, l = Array.prototype.slice, c = Array.prototype.indexOf, h = Object.prototype.toString, p = Object.prototype.hasOwnProperty, d = String.prototype.trim, v = function(e, t) {
        return new v.fn.init(e,t,n)
    }, m = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source, g = /\S/, y = /\s+/, b = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, w = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/, E = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, S = /^[\],:{}\s]*$/, x = /(?:^|:|,)(?:\s*\[)+/g, T = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, N = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g, C = /^-ms-/, k = /-([\da-z])/gi, L = function(e, t) {
        return (t + "").toUpperCase()
    }, A = function() {
        i.addEventListener ? (i.removeEventListener("DOMContentLoaded", A, !1),
        v.ready()) : i.readyState === "complete" && (i.detachEvent("onreadystatechange", A),
        v.ready())
    }, O = {};
    v.fn = v.prototype = {
        constructor: v,
        init: function(e, n, r) {
            var s, o, u, a;
            if (!e)
                return this;
            if (e.nodeType)
                return this.context = this[0] = e,
                this.length = 1,
                this;
            if (typeof e == "string") {
                e.charAt(0) === "<" && e.charAt(e.length - 1) === ">" && e.length >= 3 ? s = [null, e, null] : s = w.exec(e);
                if (s && (s[1] || !n)) {
                    if (s[1])
                        return n = n instanceof v ? n[0] : n,
                        a = n && n.nodeType ? n.ownerDocument || n : i,
                        e = v.parseHTML(s[1], a, !0),
                        E.test(s[1]) && v.isPlainObject(n) && this.attr.call(e, n, !0),
                        v.merge(this, e);
                    o = i.getElementById(s[2]);
                    if (o && o.parentNode) {
                        if (o.id !== s[2])
                            return r.find(e);
                        this.length = 1,
                        this[0] = o
                    }
                    return this.context = i,
                    this.selector = e,
                    this
                }
                return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e)
            }
            return v.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector,
            this.context = e.context),
            v.makeArray(e, this))
        },
        selector: "",
        jquery: "1.8.2",
        length: 0,
        size: function() {
            return this.length
        },
        toArray: function() {
            return l.call(this)
        },
        get: function(e) {
            return e == null ? this.toArray() : e < 0 ? this[this.length + e] : this[e]
        },
        pushStack: function(e, t, n) {
            var r = v.merge(this.constructor(), e);
            return r.prevObject = this,
            r.context = this.context,
            t === "find" ? r.selector = this.selector + (this.selector ? " " : "") + n : t && (r.selector = this.selector + "." + t + "(" + n + ")"),
            r
        },
        each: function(e, t) {
            return v.each(this, e, t)
        },
        ready: function(e) {
            return v.ready.promise().done(e),
            this
        },
        eq: function(e) {
            return e = +e,
            e === -1 ? this.slice(e) : this.slice(e, e + 1)
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        slice: function() {
            return this.pushStack(l.apply(this, arguments), "slice", l.call(arguments).join(","))
        },
        map: function(e) {
            return this.pushStack(v.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: f,
        sort: [].sort,
        splice: [].splice
    },
    v.fn.init.prototype = v.fn,
    v.extend = v.fn.extend = function() {
        var e, n, r, i, s, o, u = arguments[0] || {}, a = 1, f = arguments.length, l = !1;
        typeof u == "boolean" && (l = u,
        u = arguments[1] || {},
        a = 2),
        typeof u != "object" && !v.isFunction(u) && (u = {}),
        f === a && (u = this,
        --a);
        for (; a < f; a++)
            if ((e = arguments[a]) != null)
                for (n in e) {
                    r = u[n],
                    i = e[n];
                    if (u === i)
                        continue;
                    l && i && (v.isPlainObject(i) || (s = v.isArray(i))) ? (s ? (s = !1,
                    o = r && v.isArray(r) ? r : []) : o = r && v.isPlainObject(r) ? r : {},
                    u[n] = v.extend(l, o, i)) : i !== t && (u[n] = i)
                }
        return u
    }
    ,
    v.extend({
        noConflict: function(t) {
            return e.$ === v && (e.$ = a),
            t && e.jQuery === v && (e.jQuery = u),
            v
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? v.readyWait++ : v.ready(!0)
        },
        ready: function(e) {
            if (e === !0 ? --v.readyWait : v.isReady)
                return;
            if (!i.body)
                return setTimeout(v.ready, 1);
            v.isReady = !0;
            if (e !== !0 && --v.readyWait > 0)
                return;
            r.resolveWith(i, [v]),
            v.fn.trigger && v(i).trigger("ready").off("ready")
        },
        isFunction: function(e) {
            return v.type(e) === "function"
        },
        isArray: Array.isArray || function(e) {
            return v.type(e) === "array"
        }
        ,
        isWindow: function(e) {
            return e != null && e == e.window
        },
        isNumeric: function(e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        },
        type: function(e) {
            return e == null ? String(e) : O[h.call(e)] || "object"
        },
        isPlainObject: function(e) {
            if (!e || v.type(e) !== "object" || e.nodeType || v.isWindow(e))
                return !1;
            try {
                if (e.constructor && !p.call(e, "constructor") && !p.call(e.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (n) {
                return !1
            }
            var r;
            for (r in e)
                ;
            return r === t || p.call(e, r)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        error: function(e) {
            throw new Error(e)
        },
        parseHTML: function(e, t, n) {
            var r;
            return !e || typeof e != "string" ? null : (typeof t == "boolean" && (n = t,
            t = 0),
            t = t || i,
            (r = E.exec(e)) ? [t.createElement(r[1])] : (r = v.buildFragment([e], t, n ? null : []),
            v.merge([], (r.cacheable ? v.clone(r.fragment) : r.fragment).childNodes)))
        },
        parseJSON: function(t) {
            if (!t || typeof t != "string")
                return null;
            t = v.trim(t);
            if (e.JSON && e.JSON.parse)
                return e.JSON.parse(t);
            if (S.test(t.replace(T, "@").replace(N, "]").replace(x, "")))
                return (new Function("return " + t))();
            v.error("Invalid JSON: " + t)
        },
        parseXML: function(n) {
            var r, i;
            if (!n || typeof n != "string")
                return null;
            try {
                e.DOMParser ? (i = new DOMParser,
                r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"),
                r.async = "false",
                r.loadXML(n))
            } catch (s) {
                r = t
            }
            return (!r || !r.documentElement || r.getElementsByTagName("parsererror").length) && v.error("Invalid XML: " + n),
            r
        },
        noop: function() {},
        globalEval: function(t) {
            t && g.test(t) && (e.execScript || function(t) {
                e.eval.call(e, t)
            }
            )(t)
        },
        camelCase: function(e) {
            return e.replace(C, "ms-").replace(k, L)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, n, r) {
            var i, s = 0, o = e.length, u = o === t || v.isFunction(e);
            if (r) {
                if (u) {
                    for (i in e)
                        if (n.apply(e[i], r) === !1)
                            break
                } else
                    for (; s < o; )
                        if (n.apply(e[s++], r) === !1)
                            break
            } else if (u) {
                for (i in e)
                    if (n.call(e[i], i, e[i]) === !1)
                        break
            } else
                for (; s < o; )
                    if (n.call(e[s], s, e[s++]) === !1)
                        break;
            return e
        },
        trim: d && !d.call("﻿ ") ? function(e) {
            return e == null ? "" : d.call(e)
        }
        : function(e) {
            return e == null ? "" : (e + "").replace(b, "")
        }
        ,
        makeArray: function(e, t) {
            var n, r = t || [];
            return e != null && (n = v.type(e),
            e.length == null || n === "string" || n === "function" || n === "regexp" || v.isWindow(e) ? f.call(r, e) : v.merge(r, e)),
            r
        },
        inArray: function(e, t, n) {
            var r;
            if (t) {
                if (c)
                    return c.call(t, e, n);
                r = t.length,
                n = n ? n < 0 ? Math.max(0, r + n) : n : 0;
                for (; n < r; n++)
                    if (n in t && t[n] === e)
                        return n
            }
            return -1
        },
        merge: function(e, n) {
            var r = n.length
              , i = e.length
              , s = 0;
            if (typeof r == "number")
                for (; s < r; s++)
                    e[i++] = n[s];
            else
                while (n[s] !== t)
                    e[i++] = n[s++];
            return e.length = i,
            e
        },
        grep: function(e, t, n) {
            var r, i = [], s = 0, o = e.length;
            n = !!n;
            for (; s < o; s++)
                r = !!t(e[s], s),
                n !== r && i.push(e[s]);
            return i
        },
        map: function(e, n, r) {
            var i, s, o = [], u = 0, a = e.length, f = e instanceof v || a !== t && typeof a == "number" && (a > 0 && e[0] && e[a - 1] || a === 0 || v.isArray(e));
            if (f)
                for (; u < a; u++)
                    i = n(e[u], u, r),
                    i != null && (o[o.length] = i);
            else
                for (s in e)
                    i = n(e[s], s, r),
                    i != null && (o[o.length] = i);
            return o.concat.apply([], o)
        },
        guid: 1,
        proxy: function(e, n) {
            var r, i, s;
            return typeof n == "string" && (r = e[n],
            n = e,
            e = r),
            v.isFunction(e) ? (i = l.call(arguments, 2),
            s = function() {
                return e.apply(n, i.concat(l.call(arguments)))
            }
            ,
            s.guid = e.guid = e.guid || v.guid++,
            s) : t
        },
        access: function(e, n, r, i, s, o, u) {
            var a, f = r == null, l = 0, c = e.length;
            if (r && typeof r == "object") {
                for (l in r)
                    v.access(e, n, l, r[l], 1, o, i);
                s = 1
            } else if (i !== t) {
                a = u === t && v.isFunction(i),
                f && (a ? (a = n,
                n = function(e, t, n) {
                    return a.call(v(e), n)
                }
                ) : (n.call(e, i),
                n = null));
                if (n)
                    for (; l < c; l++)
                        n(e[l], r, a ? i.call(e[l], l, n(e[l], r)) : i, u);
                s = 1
            }
            return s ? e : f ? n.call(e) : c ? n(e[0], r) : o
        },
        now: function() {
            return (new Date).getTime()
        }
    }),
    v.ready.promise = function(t) {
        if (!r) {
            r = v.Deferred();
            if (i.readyState === "complete")
                setTimeout(v.ready, 1);
            else if (i.addEventListener)
                i.addEventListener("DOMContentLoaded", A, !1),
                e.addEventListener("load", v.ready, !1);
            else {
                i.attachEvent("onreadystatechange", A),
                e.attachEvent("onload", v.ready);
                var n = !1;
                try {
                    n = e.frameElement == null && i.documentElement
                } catch (s) {}
                n && n.doScroll && function o() {
                    if (!v.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (e) {
                            return setTimeout(o, 50)
                        }
                        v.ready()
                    }
                }()
            }
        }
        return r.promise(t)
    }
    ,
    v.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(e, t) {
        O["[object " + t + "]"] = t.toLowerCase()
    }),
    n = v(i);
    var M = {};
    v.Callbacks = function(e) {
        e = typeof e == "string" ? M[e] || _(e) : v.extend({}, e);
        var n, r, i, s, o, u, a = [], f = !e.once && [], l = function(t) {
            n = e.memory && t,
            r = !0,
            u = s || 0,
            s = 0,
            o = a.length,
            i = !0;
            for (; a && u < o; u++)
                if (a[u].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                    n = !1;
                    break
                }
            i = !1,
            a && (f ? f.length && l(f.shift()) : n ? a = [] : c.disable())
        }, c = {
            add: function() {
                if (a) {
                    var t = a.length;
                    (function r(t) {
                        v.each(t, function(t, n) {
                            var i = v.type(n);
                            i === "function" && (!e.unique || !c.has(n)) ? a.push(n) : n && n.length && i !== "string" && r(n)
                        })
                    }
                    )(arguments),
                    i ? o = a.length : n && (s = t,
                    l(n))
                }
                return this
            },
            remove: function() {
                return a && v.each(arguments, function(e, t) {
                    var n;
                    while ((n = v.inArray(t, a, n)) > -1)
                        a.splice(n, 1),
                        i && (n <= o && o--,
                        n <= u && u--)
                }),
                this
            },
            has: function(e) {
                return v.inArray(e, a) > -1
            },
            empty: function() {
                return a = [],
                this
            },
            disable: function() {
                return a = f = n = t,
                this
            },
            disabled: function() {
                return !a
            },
            lock: function() {
                return f = t,
                n || c.disable(),
                this
            },
            locked: function() {
                return !f
            },
            fireWith: function(e, t) {
                return t = t || [],
                t = [e, t.slice ? t.slice() : t],
                a && (!r || f) && (i ? f.push(t) : l(t)),
                this
            },
            fire: function() {
                return c.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!r
            }
        };
        return c
    }
    ,
    v.extend({
        Deferred: function(e) {
            var t = [["resolve", "done", v.Callbacks("once memory"), "resolved"], ["reject", "fail", v.Callbacks("once memory"), "rejected"], ["notify", "progress", v.Callbacks("memory")]]
              , n = "pending"
              , r = {
                state: function() {
                    return n
                },
                always: function() {
                    return i.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var e = arguments;
                    return v.Deferred(function(n) {
                        v.each(t, function(t, r) {
                            var s = r[0]
                              , o = e[t];
                            i[r[1]](v.isFunction(o) ? function() {
                                var e = o.apply(this, arguments);
                                e && v.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s + "With"](this === i ? n : this, [e])
                            }
                            : n[s])
                        }),
                        e = null
                    }).promise()
                },
                promise: function(e) {
                    return e != null ? v.extend(e, r) : r
                }
            }
              , i = {};
            return r.pipe = r.then,
            v.each(t, function(e, s) {
                var o = s[2]
                  , u = s[3];
                r[s[1]] = o.add,
                u && o.add(function() {
                    n = u
                }, t[e ^ 1][2].disable, t[2][2].lock),
                i[s[0]] = o.fire,
                i[s[0] + "With"] = o.fireWith
            }),
            r.promise(i),
            e && e.call(i, i),
            i
        },
        when: function(e) {
            var t = 0, n = l.call(arguments), r = n.length, i = r !== 1 || e && v.isFunction(e.promise) ? r : 0, s = i === 1 ? e : v.Deferred(), o = function(e, t, n) {
                return function(r) {
                    t[e] = this,
                    n[e] = arguments.length > 1 ? l.call(arguments) : r,
                    n === u ? s.notifyWith(t, n) : --i || s.resolveWith(t, n)
                }
            }, u, a, f;
            if (r > 1) {
                u = new Array(r),
                a = new Array(r),
                f = new Array(r);
                for (; t < r; t++)
                    n[t] && v.isFunction(n[t].promise) ? n[t].promise().done(o(t, f, n)).fail(s.reject).progress(o(t, a, u)) : --i
            }
            return i || s.resolveWith(f, n),
            s.promise()
        }
    }),
    v.support = function() {
        var t, n, r, s, o, u, a, f, l, c, h, p = i.createElement("div");
        p.setAttribute("className", "t"),
        p.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        n = p.getElementsByTagName("*"),
        r = p.getElementsByTagName("a")[0],
        r.style.cssText = "top:1px;float:left;opacity:.5";
        if (!n || !n.length)
            return {};
        s = i.createElement("select"),
        o = s.appendChild(i.createElement("option")),
        u = p.getElementsByTagName("input")[0],
        t = {
            leadingWhitespace: p.firstChild.nodeType === 3,
            tbody: !p.getElementsByTagName("tbody").length,
            htmlSerialize: !!p.getElementsByTagName("link").length,
            style: /top/.test(r.getAttribute("style")),
            hrefNormalized: r.getAttribute("href") === "/a",
            opacity: /^0.5/.test(r.style.opacity),
            cssFloat: !!r.style.cssFloat,
            checkOn: u.value === "on",
            optSelected: o.selected,
            getSetAttribute: p.className !== "t",
            enctype: !!i.createElement("form").enctype,
            html5Clone: i.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",
            boxModel: i.compatMode === "CSS1Compat",
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        },
        u.checked = !0,
        t.noCloneChecked = u.cloneNode(!0).checked,
        s.disabled = !0,
        t.optDisabled = !o.disabled;
        try {
            delete p.test
        } catch (d) {
            t.deleteExpando = !1
        }
        !p.addEventListener && p.attachEvent && p.fireEvent && (p.attachEvent("onclick", h = function() {
            t.noCloneEvent = !1
        }
        ),
        p.cloneNode(!0).fireEvent("onclick"),
        p.detachEvent("onclick", h)),
        u = i.createElement("input"),
        u.value = "t",
        u.setAttribute("type", "radio"),
        t.radioValue = u.value === "t",
        u.setAttribute("checked", "checked"),
        u.setAttribute("name", "t"),
        p.appendChild(u),
        a = i.createDocumentFragment(),
        a.appendChild(p.lastChild),
        t.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked,
        t.appendChecked = u.checked,
        a.removeChild(u),
        a.appendChild(p);
        if (p.attachEvent)
            for (l in {
                submit: !0,
                change: !0,
                focusin: !0
            })
                f = "on" + l,
                c = f in p,
                c || (p.setAttribute(f, "return;"),
                c = typeof p[f] == "function"),
                t[l + "Bubbles"] = c;
        return v(function() {
            var n, r, s, o, u = "padding:0;margin:0;border:0;display:block;overflow:hidden;", a = i.getElementsByTagName("body")[0];
            if (!a)
                return;
            n = i.createElement("div"),
            n.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",
            a.insertBefore(n, a.firstChild),
            r = i.createElement("div"),
            n.appendChild(r),
            r.innerHTML = "<table><tr><td></td><td>t</td></tr></table>",
            s = r.getElementsByTagName("td"),
            s[0].style.cssText = "padding:0;margin:0;border:0;display:none",
            c = s[0].offsetHeight === 0,
            s[0].style.display = "",
            s[1].style.display = "none",
            t.reliableHiddenOffsets = c && s[0].offsetHeight === 0,
            r.innerHTML = "",
            r.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",
            t.boxSizing = r.offsetWidth === 4,
            t.doesNotIncludeMarginInBodyOffset = a.offsetTop !== 1,
            e.getComputedStyle && (t.pixelPosition = (e.getComputedStyle(r, null) || {}).top !== "1%",
            t.boxSizingReliable = (e.getComputedStyle(r, null) || {
                width: "4px"
            }).width === "4px",
            o = i.createElement("div"),
            o.style.cssText = r.style.cssText = u,
            o.style.marginRight = o.style.width = "0",
            r.style.width = "1px",
            r.appendChild(o),
            t.reliableMarginRight = !parseFloat((e.getComputedStyle(o, null) || {}).marginRight)),
            typeof r.style.zoom != "undefined" && (r.innerHTML = "",
            r.style.cssText = u + "width:1px;padding:1px;display:inline;zoom:1",
            t.inlineBlockNeedsLayout = r.offsetWidth === 3,
            r.style.display = "block",
            r.style.overflow = "visible",
            r.innerHTML = "<div></div>",
            r.firstChild.style.width = "5px",
            t.shrinkWrapBlocks = r.offsetWidth !== 3,
            n.style.zoom = 1),
            a.removeChild(n),
            n = r = s = o = null
        }),
        a.removeChild(p),
        n = r = s = o = u = a = p = null,
        t
    }();
    var D = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/
      , P = /([A-Z])/g;
    v.extend({
        cache: {},
        deletedIds: [],
        uuid: 0,
        expando: "jQuery" + (v.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(e) {
            return e = e.nodeType ? v.cache[e[v.expando]] : e[v.expando],
            !!e && !B(e)
        },
        data: function(e, n, r, i) {
            if (!v.acceptData(e))
                return;
            var s, o, u = v.expando, a = typeof n == "string", f = e.nodeType, l = f ? v.cache : e, c = f ? e[u] : e[u] && u;
            if ((!c || !l[c] || !i && !l[c].data) && a && r === t)
                return;
            c || (f ? e[u] = c = v.deletedIds.pop() || v.guid++ : c = u),
            l[c] || (l[c] = {},
            f || (l[c].toJSON = v.noop));
            if (typeof n == "object" || typeof n == "function")
                i ? l[c] = v.extend(l[c], n) : l[c].data = v.extend(l[c].data, n);
            return s = l[c],
            i || (s.data || (s.data = {}),
            s = s.data),
            r !== t && (s[v.camelCase(n)] = r),
            a ? (o = s[n],
            o == null && (o = s[v.camelCase(n)])) : o = s,
            o
        },
        removeData: function(e, t, n) {
            if (!v.acceptData(e))
                return;
            var r, i, s, o = e.nodeType, u = o ? v.cache : e, a = o ? e[v.expando] : v.expando;
            if (!u[a])
                return;
            if (t) {
                r = n ? u[a] : u[a].data;
                if (r) {
                    v.isArray(t) || (t in r ? t = [t] : (t = v.camelCase(t),
                    t in r ? t = [t] : t = t.split(" ")));
                    for (i = 0,
                    s = t.length; i < s; i++)
                        delete r[t[i]];
                    if (!(n ? B : v.isEmptyObject)(r))
                        return
                }
            }
            if (!n) {
                delete u[a].data;
                if (!B(u[a]))
                    return
            }
            o ? v.cleanData([e], !0) : v.support.deleteExpando || u != u.window ? delete u[a] : u[a] = null
        },
        _data: function(e, t, n) {
            return v.data(e, t, n, !0)
        },
        acceptData: function(e) {
            var t = e.nodeName && v.noData[e.nodeName.toLowerCase()];
            return !t || t !== !0 && e.getAttribute("classid") === t
        }
    }),
    v.fn.extend({
        data: function(e, n) {
            var r, i, s, o, u, a = this[0], f = 0, l = null;
            if (e === t) {
                if (this.length) {
                    l = v.data(a);
                    if (a.nodeType === 1 && !v._data(a, "parsedAttrs")) {
                        s = a.attributes;
                        for (u = s.length; f < u; f++)
                            o = s[f].name,
                            o.indexOf("data-") || (o = v.camelCase(o.substring(5)),
                            H(a, o, l[o]));
                        v._data(a, "parsedAttrs", !0)
                    }
                }
                return l
            }
            return typeof e == "object" ? this.each(function() {
                v.data(this, e)
            }) : (r = e.split(".", 2),
            r[1] = r[1] ? "." + r[1] : "",
            i = r[1] + "!",
            v.access(this, function(n) {
                if (n === t)
                    return l = this.triggerHandler("getData" + i, [r[0]]),
                    l === t && a && (l = v.data(a, e),
                    l = H(a, e, l)),
                    l === t && r[1] ? this.data(r[0]) : l;
                r[1] = n,
                this.each(function() {
                    var t = v(this);
                    t.triggerHandler("setData" + i, r),
                    v.data(this, e, n),
                    t.triggerHandler("changeData" + i, r)
                })
            }, null, n, arguments.length > 1, null, !1))
        },
        removeData: function(e) {
            return this.each(function() {
                v.removeData(this, e)
            })
        }
    }),
    v.extend({
        queue: function(e, t, n) {
            var r;
            if (e)
                return t = (t || "fx") + "queue",
                r = v._data(e, t),
                n && (!r || v.isArray(n) ? r = v._data(e, t, v.makeArray(n)) : r.push(n)),
                r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = v.queue(e, t)
              , r = n.length
              , i = n.shift()
              , s = v._queueHooks(e, t)
              , o = function() {
                v.dequeue(e, t)
            };
            i === "inprogress" && (i = n.shift(),
            r--),
            i && (t === "fx" && n.unshift("inprogress"),
            delete s.stop,
            i.call(e, o, s)),
            !r && s && s.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return v._data(e, n) || v._data(e, n, {
                empty: v.Callbacks("once memory").add(function() {
                    v.removeData(e, t + "queue", !0),
                    v.removeData(e, n, !0)
                })
            })
        }
    }),
    v.fn.extend({
        queue: function(e, n) {
            var r = 2;
            return typeof e != "string" && (n = e,
            e = "fx",
            r--),
            arguments.length < r ? v.queue(this[0], e) : n === t ? this : this.each(function() {
                var t = v.queue(this, e, n);
                v._queueHooks(this, e),
                e === "fx" && t[0] !== "inprogress" && v.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                v.dequeue(this, e)
            })
        },
        delay: function(e, t) {
            return e = v.fx ? v.fx.speeds[e] || e : e,
            t = t || "fx",
            this.queue(t, function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(r)
                }
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, n) {
            var r, i = 1, s = v.Deferred(), o = this, u = this.length, a = function() {
                --i || s.resolveWith(o, [o])
            };
            typeof e != "string" && (n = e,
            e = t),
            e = e || "fx";
            while (u--)
                r = v._data(o[u], e + "queueHooks"),
                r && r.empty && (i++,
                r.empty.add(a));
            return a(),
            s.promise(n)
        }
    });
    var j, F, I, q = /[\t\r\n]/g, R = /\r/g, U = /^(?:button|input)$/i, z = /^(?:button|input|object|select|textarea)$/i, W = /^a(?:rea|)$/i, X = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, V = v.support.getSetAttribute;
    v.fn.extend({
        attr: function(e, t) {
            return v.access(this, v.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                v.removeAttr(this, e)
            })
        },
        prop: function(e, t) {
            return v.access(this, v.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = v.propFix[e] || e,
            this.each(function() {
                try {
                    this[e] = t,
                    delete this[e]
                } catch (n) {}
            })
        },
        addClass: function(e) {
            var t, n, r, i, s, o, u;
            if (v.isFunction(e))
                return this.each(function(t) {
                    v(this).addClass(e.call(this, t, this.className))
                });
            if (e && typeof e == "string") {
                t = e.split(y);
                for (n = 0,
                r = this.length; n < r; n++) {
                    i = this[n];
                    if (i.nodeType === 1)
                        if (!i.className && t.length === 1)
                            i.className = e;
                        else {
                            s = " " + i.className + " ";
                            for (o = 0,
                            u = t.length; o < u; o++)
                                s.indexOf(" " + t[o] + " ") < 0 && (s += t[o] + " ");
                            i.className = v.trim(s)
                        }
                }
            }
            return this
        },
        removeClass: function(e) {
            var n, r, i, s, o, u, a;
            if (v.isFunction(e))
                return this.each(function(t) {
                    v(this).removeClass(e.call(this, t, this.className))
                });
            if (e && typeof e == "string" || e === t) {
                n = (e || "").split(y);
                for (u = 0,
                a = this.length; u < a; u++) {
                    i = this[u];
                    if (i.nodeType === 1 && i.className) {
                        r = (" " + i.className + " ").replace(q, " ");
                        for (s = 0,
                        o = n.length; s < o; s++)
                            while (r.indexOf(" " + n[s] + " ") >= 0)
                                r = r.replace(" " + n[s] + " ", " ");
                        i.className = e ? v.trim(r) : ""
                    }
                }
            }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e
              , r = typeof t == "boolean";
            return v.isFunction(e) ? this.each(function(n) {
                v(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function() {
                if (n === "string") {
                    var i, s = 0, o = v(this), u = t, a = e.split(y);
                    while (i = a[s++])
                        u = r ? u : !o.hasClass(i),
                        o[u ? "addClass" : "removeClass"](i)
                } else if (n === "undefined" || n === "boolean")
                    this.className && v._data(this, "__className__", this.className),
                    this.className = this.className || e === !1 ? "" : v._data(this, "__className__") || ""
            })
        },
        hasClass: function(e) {
            var t = " " + e + " "
              , n = 0
              , r = this.length;
            for (; n < r; n++)
                if (this[n].nodeType === 1 && (" " + this[n].className + " ").replace(q, " ").indexOf(t) >= 0)
                    return !0;
            return !1
        },
        val: function(e) {
            var n, r, i, s = this[0];
            if (!arguments.length) {
                if (s)
                    return n = v.valHooks[s.type] || v.valHooks[s.nodeName.toLowerCase()],
                    n && "get"in n && (r = n.get(s, "value")) !== t ? r : (r = s.value,
                    typeof r == "string" ? r.replace(R, "") : r == null ? "" : r);
                return
            }
            return i = v.isFunction(e),
            this.each(function(r) {
                var s, o = v(this);
                if (this.nodeType !== 1)
                    return;
                i ? s = e.call(this, r, o.val()) : s = e,
                s == null ? s = "" : typeof s == "number" ? s += "" : v.isArray(s) && (s = v.map(s, function(e) {
                    return e == null ? "" : e + ""
                })),
                n = v.valHooks[this.type] || v.valHooks[this.nodeName.toLowerCase()];
                if (!n || !("set"in n) || n.set(this, s, "value") === t)
                    this.value = s
            })
        }
    }),
    v.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = e.attributes.value;
                    return !t || t.specified ? e.value : e.text
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i, s = e.selectedIndex, o = [], u = e.options, a = e.type === "select-one";
                    if (s < 0)
                        return null;
                    n = a ? s : 0,
                    r = a ? s + 1 : u.length;
                    for (; n < r; n++) {
                        i = u[n];
                        if (i.selected && (v.support.optDisabled ? !i.disabled : i.getAttribute("disabled") === null) && (!i.parentNode.disabled || !v.nodeName(i.parentNode, "optgroup"))) {
                            t = v(i).val();
                            if (a)
                                return t;
                            o.push(t)
                        }
                    }
                    return a && !o.length && u.length ? v(u[s]).val() : o
                },
                set: function(e, t) {
                    var n = v.makeArray(t);
                    return v(e).find("option").each(function() {
                        this.selected = v.inArray(v(this).val(), n) >= 0
                    }),
                    n.length || (e.selectedIndex = -1),
                    n
                }
            }
        },
        attrFn: {},
        attr: function(e, n, r, i) {
            var s, o, u, a = e.nodeType;
            if (!e || a === 3 || a === 8 || a === 2)
                return;
            if (i && v.isFunction(v.fn[n]))
                return v(e)[n](r);
            if (typeof e.getAttribute == "undefined")
                return v.prop(e, n, r);
            u = a !== 1 || !v.isXMLDoc(e),
            u && (n = n.toLowerCase(),
            o = v.attrHooks[n] || (X.test(n) ? F : j));
            if (r !== t) {
                if (r === null) {
                    v.removeAttr(e, n);
                    return
                }
                return o && "set"in o && u && (s = o.set(e, r, n)) !== t ? s : (e.setAttribute(n, r + ""),
                r)
            }
            return o && "get"in o && u && (s = o.get(e, n)) !== null ? s : (s = e.getAttribute(n),
            s === null ? t : s)
        },
        removeAttr: function(e, t) {
            var n, r, i, s, o = 0;
            if (t && e.nodeType === 1) {
                r = t.split(y);
                for (; o < r.length; o++)
                    i = r[o],
                    i && (n = v.propFix[i] || i,
                    s = X.test(i),
                    s || v.attr(e, i, ""),
                    e.removeAttribute(V ? i : n),
                    s && n in e && (e[n] = !1))
            }
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (U.test(e.nodeName) && e.parentNode)
                        v.error("type property can't be changed");
                    else if (!v.support.radioValue && t === "radio" && v.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            },
            value: {
                get: function(e, t) {
                    return j && v.nodeName(e, "button") ? j.get(e, t) : t in e ? e.value : null
                },
                set: function(e, t, n) {
                    if (j && v.nodeName(e, "button"))
                        return j.set(e, t, n);
                    e.value = t
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(e, n, r) {
            var i, s, o, u = e.nodeType;
            if (!e || u === 3 || u === 8 || u === 2)
                return;
            return o = u !== 1 || !v.isXMLDoc(e),
            o && (n = v.propFix[n] || n,
            s = v.propHooks[n]),
            r !== t ? s && "set"in s && (i = s.set(e, r, n)) !== t ? i : e[n] = r : s && "get"in s && (i = s.get(e, n)) !== null ? i : e[n]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var n = e.getAttributeNode("tabindex");
                    return n && n.specified ? parseInt(n.value, 10) : z.test(e.nodeName) || W.test(e.nodeName) && e.href ? 0 : t
                }
            }
        }
    }),
    F = {
        get: function(e, n) {
            var r, i = v.prop(e, n);
            return i === !0 || typeof i != "boolean" && (r = e.getAttributeNode(n)) && r.nodeValue !== !1 ? n.toLowerCase() : t
        },
        set: function(e, t, n) {
            var r;
            return t === !1 ? v.removeAttr(e, n) : (r = v.propFix[n] || n,
            r in e && (e[r] = !0),
            e.setAttribute(n, n.toLowerCase())),
            n
        }
    },
    V || (I = {
        name: !0,
        id: !0,
        coords: !0
    },
    j = v.valHooks.button = {
        get: function(e, n) {
            var r;
            return r = e.getAttributeNode(n),
            r && (I[n] ? r.value !== "" : r.specified) ? r.value : t
        },
        set: function(e, t, n) {
            var r = e.getAttributeNode(n);
            return r || (r = i.createAttribute(n),
            e.setAttributeNode(r)),
            r.value = t + ""
        }
    },
    v.each(["width", "height"], function(e, t) {
        v.attrHooks[t] = v.extend(v.attrHooks[t], {
            set: function(e, n) {
                if (n === "")
                    return e.setAttribute(t, "auto"),
                    n
            }
        })
    }),
    v.attrHooks.contenteditable = {
        get: j.get,
        set: function(e, t, n) {
            t === "" && (t = "false"),
            j.set(e, t, n)
        }
    }),
    v.support.hrefNormalized || v.each(["href", "src", "width", "height"], function(e, n) {
        v.attrHooks[n] = v.extend(v.attrHooks[n], {
            get: function(e) {
                var r = e.getAttribute(n, 2);
                return r === null ? t : r
            }
        })
    }),
    v.support.style || (v.attrHooks.style = {
        get: function(e) {
            return e.style.cssText.toLowerCase() || t
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    }),
    v.support.optSelected || (v.propHooks.selected = v.extend(v.propHooks.selected, {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex),
            null
        }
    })),
    v.support.enctype || (v.propFix.enctype = "encoding"),
    v.support.checkOn || v.each(["radio", "checkbox"], function() {
        v.valHooks[this] = {
            get: function(e) {
                return e.getAttribute("value") === null ? "on" : e.value
            }
        }
    }),
    v.each(["radio", "checkbox"], function() {
        v.valHooks[this] = v.extend(v.valHooks[this], {
            set: function(e, t) {
                if (v.isArray(t))
                    return e.checked = v.inArray(v(e).val(), t) >= 0
            }
        })
    });
    var $ = /^(?:textarea|input|select)$/i
      , J = /^([^\.]*|)(?:\.(.+)|)$/
      , K = /(?:^|\s)hover(\.\S+|)\b/
      , Q = /^key/
      , G = /^(?:mouse|contextmenu)|click/
      , Y = /^(?:focusinfocus|focusoutblur)$/
      , Z = function(e) {
        return v.event.special.hover ? e : e.replace(K, "mouseenter$1 mouseleave$1")
    };
    v.event = {
        add: function(e, n, r, i, s) {
            var o, u, a, f, l, c, h, p, d, m, g;
            if (e.nodeType === 3 || e.nodeType === 8 || !n || !r || !(o = v._data(e)))
                return;
            r.handler && (d = r,
            r = d.handler,
            s = d.selector),
            r.guid || (r.guid = v.guid++),
            a = o.events,
            a || (o.events = a = {}),
            u = o.handle,
            u || (o.handle = u = function(e) {
                return typeof v == "undefined" || !!e && v.event.triggered === e.type ? t : v.event.dispatch.apply(u.elem, arguments)
            }
            ,
            u.elem = e),
            n = v.trim(Z(n)).split(" ");
            for (f = 0; f < n.length; f++) {
                l = J.exec(n[f]) || [],
                c = l[1],
                h = (l[2] || "").split(".").sort(),
                g = v.event.special[c] || {},
                c = (s ? g.delegateType : g.bindType) || c,
                g = v.event.special[c] || {},
                p = v.extend({
                    type: c,
                    origType: l[1],
                    data: i,
                    handler: r,
                    guid: r.guid,
                    selector: s,
                    needsContext: s && v.expr.match.needsContext.test(s),
                    namespace: h.join(".")
                }, d),
                m = a[c];
                if (!m) {
                    m = a[c] = [],
                    m.delegateCount = 0;
                    if (!g.setup || g.setup.call(e, i, h, u) === !1)
                        e.addEventListener ? e.addEventListener(c, u, !1) : e.attachEvent && e.attachEvent("on" + c, u)
                }
                g.add && (g.add.call(e, p),
                p.handler.guid || (p.handler.guid = r.guid)),
                s ? m.splice(m.delegateCount++, 0, p) : m.push(p),
                v.event.global[c] = !0
            }
            e = null
        },
        global: {},
        remove: function(e, t, n, r, i) {
            var s, o, u, a, f, l, c, h, p, d, m, g = v.hasData(e) && v._data(e);
            if (!g || !(h = g.events))
                return;
            t = v.trim(Z(t || "")).split(" ");
            for (s = 0; s < t.length; s++) {
                o = J.exec(t[s]) || [],
                u = a = o[1],
                f = o[2];
                if (!u) {
                    for (u in h)
                        v.event.remove(e, u + t[s], n, r, !0);
                    continue
                }
                p = v.event.special[u] || {},
                u = (r ? p.delegateType : p.bindType) || u,
                d = h[u] || [],
                l = d.length,
                f = f ? new RegExp("(^|\\.)" + f.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                for (c = 0; c < d.length; c++)
                    m = d[c],
                    (i || a === m.origType) && (!n || n.guid === m.guid) && (!f || f.test(m.namespace)) && (!r || r === m.selector || r === "**" && m.selector) && (d.splice(c--, 1),
                    m.selector && d.delegateCount--,
                    p.remove && p.remove.call(e, m));
                d.length === 0 && l !== d.length && ((!p.teardown || p.teardown.call(e, f, g.handle) === !1) && v.removeEvent(e, u, g.handle),
                delete h[u])
            }
            v.isEmptyObject(h) && (delete g.handle,
            v.removeData(e, "events", !0))
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function(n, r, s, o) {
            if (!s || s.nodeType !== 3 && s.nodeType !== 8) {
                var u, a, f, l, c, h, p, d, m, g, y = n.type || n, b = [];
                if (Y.test(y + v.event.triggered))
                    return;
                y.indexOf("!") >= 0 && (y = y.slice(0, -1),
                a = !0),
                y.indexOf(".") >= 0 && (b = y.split("."),
                y = b.shift(),
                b.sort());
                if ((!s || v.event.customEvent[y]) && !v.event.global[y])
                    return;
                n = typeof n == "object" ? n[v.expando] ? n : new v.Event(y,n) : new v.Event(y),
                n.type = y,
                n.isTrigger = !0,
                n.exclusive = a,
                n.namespace = b.join("."),
                n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                h = y.indexOf(":") < 0 ? "on" + y : "";
                if (!s) {
                    u = v.cache;
                    for (f in u)
                        u[f].events && u[f].events[y] && v.event.trigger(n, r, u[f].handle.elem, !0);
                    return
                }
                n.result = t,
                n.target || (n.target = s),
                r = r != null ? v.makeArray(r) : [],
                r.unshift(n),
                p = v.event.special[y] || {};
                if (p.trigger && p.trigger.apply(s, r) === !1)
                    return;
                m = [[s, p.bindType || y]];
                if (!o && !p.noBubble && !v.isWindow(s)) {
                    g = p.delegateType || y,
                    l = Y.test(g + y) ? s : s.parentNode;
                    for (c = s; l; l = l.parentNode)
                        m.push([l, g]),
                        c = l;
                    c === (s.ownerDocument || i) && m.push([c.defaultView || c.parentWindow || e, g])
                }
                for (f = 0; f < m.length && !n.isPropagationStopped(); f++)
                    l = m[f][0],
                    n.type = m[f][1],
                    d = (v._data(l, "events") || {})[n.type] && v._data(l, "handle"),
                    d && d.apply(l, r),
                    d = h && l[h],
                    d && v.acceptData(l) && d.apply && d.apply(l, r) === !1 && n.preventDefault();
                return n.type = y,
                !o && !n.isDefaultPrevented() && (!p._default || p._default.apply(s.ownerDocument, r) === !1) && (y !== "click" || !v.nodeName(s, "a")) && v.acceptData(s) && h && s[y] && (y !== "focus" && y !== "blur" || n.target.offsetWidth !== 0) && !v.isWindow(s) && (c = s[h],
                c && (s[h] = null),
                v.event.triggered = y,
                s[y](),
                v.event.triggered = t,
                c && (s[h] = c)),
                n.result
            }
            return
        },
        dispatch: function(n) {
            n = v.event.fix(n || e.event);
            var r, i, s, o, u, a, f, c, h, p, d = (v._data(this, "events") || {})[n.type] || [], m = d.delegateCount, g = l.call(arguments), y = !n.exclusive && !n.namespace, b = v.event.special[n.type] || {}, w = [];
            g[0] = n,
            n.delegateTarget = this;
            if (b.preDispatch && b.preDispatch.call(this, n) === !1)
                return;
            if (m && (!n.button || n.type !== "click"))
                for (s = n.target; s != this; s = s.parentNode || this)
                    if (s.disabled !== !0 || n.type !== "click") {
                        u = {},
                        f = [];
                        for (r = 0; r < m; r++)
                            c = d[r],
                            h = c.selector,
                            u[h] === t && (u[h] = c.needsContext ? v(h, this).index(s) >= 0 : v.find(h, this, null, [s]).length),
                            u[h] && f.push(c);
                        f.length && w.push({
                            elem: s,
                            matches: f
                        })
                    }
            d.length > m && w.push({
                elem: this,
                matches: d.slice(m)
            });
            for (r = 0; r < w.length && !n.isPropagationStopped(); r++) {
                a = w[r],
                n.currentTarget = a.elem;
                for (i = 0; i < a.matches.length && !n.isImmediatePropagationStopped(); i++) {
                    c = a.matches[i];
                    if (y || !n.namespace && !c.namespace || n.namespace_re && n.namespace_re.test(c.namespace))
                        n.data = c.data,
                        n.handleObj = c,
                        o = ((v.event.special[c.origType] || {}).handle || c.handler).apply(a.elem, g),
                        o !== t && (n.result = o,
                        o === !1 && (n.preventDefault(),
                        n.stopPropagation()))
                }
            }
            return b.postDispatch && b.postDispatch.call(this, n),
            n.result
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return e.which == null && (e.which = t.charCode != null ? t.charCode : t.keyCode),
                e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, n) {
                var r, s, o, u = n.button, a = n.fromElement;
                return e.pageX == null && n.clientX != null && (r = e.target.ownerDocument || i,
                s = r.documentElement,
                o = r.body,
                e.pageX = n.clientX + (s && s.scrollLeft || o && o.scrollLeft || 0) - (s && s.clientLeft || o && o.clientLeft || 0),
                e.pageY = n.clientY + (s && s.scrollTop || o && o.scrollTop || 0) - (s && s.clientTop || o && o.clientTop || 0)),
                !e.relatedTarget && a && (e.relatedTarget = a === e.target ? n.toElement : a),
                !e.which && u !== t && (e.which = u & 1 ? 1 : u & 2 ? 3 : u & 4 ? 2 : 0),
                e
            }
        },
        fix: function(e) {
            if (e[v.expando])
                return e;
            var t, n, r = e, s = v.event.fixHooks[e.type] || {}, o = s.props ? this.props.concat(s.props) : this.props;
            e = v.Event(r);
            for (t = o.length; t; )
                n = o[--t],
                e[n] = r[n];
            return e.target || (e.target = r.srcElement || i),
            e.target.nodeType === 3 && (e.target = e.target.parentNode),
            e.metaKey = !!e.metaKey,
            s.filter ? s.filter(e, r) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                delegateType: "focusin"
            },
            blur: {
                delegateType: "focusout"
            },
            beforeunload: {
                setup: function(e, t, n) {
                    v.isWindow(this) && (this.onbeforeunload = n)
                },
                teardown: function(e, t) {
                    this.onbeforeunload === t && (this.onbeforeunload = null)
                }
            }
        },
        simulate: function(e, t, n, r) {
            var i = v.extend(new v.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? v.event.trigger(i, null, t) : v.event.dispatch.call(t, i),
            i.isDefaultPrevented() && n.preventDefault()
        }
    },
    v.event.handle = v.event.dispatch,
    v.removeEvent = i.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    }
    : function(e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] == "undefined" && (e[r] = null),
        e.detachEvent(r, n))
    }
    ,
    v.Event = function(e, t) {
        if (!(this instanceof v.Event))
            return new v.Event(e,t);
        e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? tt : et) : this.type = e,
        t && v.extend(this, t),
        this.timeStamp = e && e.timeStamp || v.now(),
        this[v.expando] = !0
    }
    ,
    v.Event.prototype = {
        preventDefault: function() {
            this.isDefaultPrevented = tt;
            var e = this.originalEvent;
            if (!e)
                return;
            e.preventDefault ? e.preventDefault() : e.returnValue = !1
        },
        stopPropagation: function() {
            this.isPropagationStopped = tt;
            var e = this.originalEvent;
            if (!e)
                return;
            e.stopPropagation && e.stopPropagation(),
            e.cancelBubble = !0
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = tt,
            this.stopPropagation()
        },
        isDefaultPrevented: et,
        isPropagationStopped: et,
        isImmediatePropagationStopped: et
    },
    v.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(e, t) {
        v.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this, i = e.relatedTarget, s = e.handleObj, o = s.selector;
                if (!i || i !== r && !v.contains(r, i))
                    e.type = s.origType,
                    n = s.handler.apply(this, arguments),
                    e.type = t;
                return n
            }
        }
    }),
    v.support.submitBubbles || (v.event.special.submit = {
        setup: function() {
            if (v.nodeName(this, "form"))
                return !1;
            v.event.add(this, "click._submit keypress._submit", function(e) {
                var n = e.target
                  , r = v.nodeName(n, "input") || v.nodeName(n, "button") ? n.form : t;
                r && !v._data(r, "_submit_attached") && (v.event.add(r, "submit._submit", function(e) {
                    e._submit_bubble = !0
                }),
                v._data(r, "_submit_attached", !0))
            })
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble,
            this.parentNode && !e.isTrigger && v.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function() {
            if (v.nodeName(this, "form"))
                return !1;
            v.event.remove(this, "._submit")
        }
    }),
    v.support.changeBubbles || (v.event.special.change = {
        setup: function() {
            if ($.test(this.nodeName)) {
                if (this.type === "checkbox" || this.type === "radio")
                    v.event.add(this, "propertychange._change", function(e) {
                        e.originalEvent.propertyName === "checked" && (this._just_changed = !0)
                    }),
                    v.event.add(this, "click._change", function(e) {
                        this._just_changed && !e.isTrigger && (this._just_changed = !1),
                        v.event.simulate("change", this, e, !0)
                    });
                return !1
            }
            v.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                $.test(t.nodeName) && !v._data(t, "_change_attached") && (v.event.add(t, "change._change", function(e) {
                    this.parentNode && !e.isSimulated && !e.isTrigger && v.event.simulate("change", this.parentNode, e, !0)
                }),
                v._data(t, "_change_attached", !0))
            })
        },
        handle: function(e) {
            var t = e.target;
            if (this !== t || e.isSimulated || e.isTrigger || t.type !== "radio" && t.type !== "checkbox")
                return e.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            return v.event.remove(this, "._change"),
            !$.test(this.nodeName)
        }
    }),
    v.support.focusinBubbles || v.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = 0
          , r = function(e) {
            v.event.simulate(t, e.target, v.event.fix(e), !0)
        };
        v.event.special[t] = {
            setup: function() {
                n++ === 0 && i.addEventListener(e, r, !0)
            },
            teardown: function() {
                --n === 0 && i.removeEventListener(e, r, !0)
            }
        }
    }),
    v.fn.extend({
        on: function(e, n, r, i, s) {
            var o, u;
            if (typeof e == "object") {
                typeof n != "string" && (r = r || n,
                n = t);
                for (u in e)
                    this.on(u, n, r, e[u], s);
                return this
            }
            r == null && i == null ? (i = n,
            r = n = t) : i == null && (typeof n == "string" ? (i = r,
            r = t) : (i = r,
            r = n,
            n = t));
            if (i === !1)
                i = et;
            else if (!i)
                return this;
            return s === 1 && (o = i,
            i = function(e) {
                return v().off(e),
                o.apply(this, arguments)
            }
            ,
            i.guid = o.guid || (o.guid = v.guid++)),
            this.each(function() {
                v.event.add(this, e, i, r, n)
            })
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function(e, n, r) {
            var i, s;
            if (e && e.preventDefault && e.handleObj)
                return i = e.handleObj,
                v(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler),
                this;
            if (typeof e == "object") {
                for (s in e)
                    this.off(s, n, e[s]);
                return this
            }
            if (n === !1 || typeof n == "function")
                r = n,
                n = t;
            return r === !1 && (r = et),
            this.each(function() {
                v.event.remove(this, e, r, n)
            })
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        live: function(e, t, n) {
            return v(this.context).on(e, this.selector, t, n),
            this
        },
        die: function(e, t) {
            return v(this.context).off(e, this.selector || "**", t),
            this
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return arguments.length === 1 ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        trigger: function(e, t) {
            return this.each(function() {
                v.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            if (this[0])
                return v.event.trigger(e, t, this[0], !0)
        },
        toggle: function(e) {
            var t = arguments
              , n = e.guid || v.guid++
              , r = 0
              , i = function(n) {
                var i = (v._data(this, "lastToggle" + e.guid) || 0) % r;
                return v._data(this, "lastToggle" + e.guid, i + 1),
                n.preventDefault(),
                t[i].apply(this, arguments) || !1
            };
            i.guid = n;
            while (r < t.length)
                t[r++].guid = n;
            return this.click(i)
        },
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),
    v.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        v.fn[t] = function(e, n) {
            return n == null && (n = e,
            e = null),
            arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
        ,
        Q.test(t) && (v.event.fixHooks[t] = v.event.keyHooks),
        G.test(t) && (v.event.fixHooks[t] = v.event.mouseHooks)
    }),
    function(e, t) {
        function nt(e, t, n, r) {
            n = n || [],
            t = t || g;
            var i, s, a, f, l = t.nodeType;
            if (!e || typeof e != "string")
                return n;
            if (l !== 1 && l !== 9)
                return [];
            a = o(t);
            if (!a && !r)
                if (i = R.exec(e))
                    if (f = i[1]) {
                        if (l === 9) {
                            s = t.getElementById(f);
                            if (!s || !s.parentNode)
                                return n;
                            if (s.id === f)
                                return n.push(s),
                                n
                        } else if (t.ownerDocument && (s = t.ownerDocument.getElementById(f)) && u(t, s) && s.id === f)
                            return n.push(s),
                            n
                    } else {
                        if (i[2])
                            return S.apply(n, x.call(t.getElementsByTagName(e), 0)),
                            n;
                        if ((f = i[3]) && Z && t.getElementsByClassName)
                            return S.apply(n, x.call(t.getElementsByClassName(f), 0)),
                            n
                    }
            return vt(e.replace(j, "$1"), t, n, r, a)
        }
        function rt(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return n === "input" && t.type === e
            }
        }
        function it(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return (n === "input" || n === "button") && t.type === e
            }
        }
        function st(e) {
            return N(function(t) {
                return t = +t,
                N(function(n, r) {
                    var i, s = e([], n.length, t), o = s.length;
                    while (o--)
                        n[i = s[o]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }
        function ot(e, t, n) {
            if (e === t)
                return n;
            var r = e.nextSibling;
            while (r) {
                if (r === t)
                    return -1;
                r = r.nextSibling
            }
            return 1
        }
        function ut(e, t) {
            var n, r, s, o, u, a, f, l = L[d][e];
            if (l)
                return t ? 0 : l.slice(0);
            u = e,
            a = [],
            f = i.preFilter;
            while (u) {
                if (!n || (r = F.exec(u)))
                    r && (u = u.slice(r[0].length)),
                    a.push(s = []);
                n = !1;
                if (r = I.exec(u))
                    s.push(n = new m(r.shift())),
                    u = u.slice(n.length),
                    n.type = r[0].replace(j, " ");
                for (o in i.filter)
                    (r = J[o].exec(u)) && (!f[o] || (r = f[o](r, g, !0))) && (s.push(n = new m(r.shift())),
                    u = u.slice(n.length),
                    n.type = o,
                    n.matches = r);
                if (!n)
                    break
            }
            return t ? u.length : u ? nt.error(e) : L(e, a).slice(0)
        }
        function at(e, t, r) {
            var i = t.dir
              , s = r && t.dir === "parentNode"
              , o = w++;
            return t.first ? function(t, n, r) {
                while (t = t[i])
                    if (s || t.nodeType === 1)
                        return e(t, n, r)
            }
            : function(t, r, u) {
                if (!u) {
                    var a, f = b + " " + o + " ", l = f + n;
                    while (t = t[i])
                        if (s || t.nodeType === 1) {
                            if ((a = t[d]) === l)
                                return t.sizset;
                            if (typeof a == "string" && a.indexOf(f) === 0) {
                                if (t.sizset)
                                    return t
                            } else {
                                t[d] = l;
                                if (e(t, r, u))
                                    return t.sizset = !0,
                                    t;
                                t.sizset = !1
                            }
                        }
                } else
                    while (t = t[i])
                        if (s || t.nodeType === 1)
                            if (e(t, r, u))
                                return t
            }
        }
        function ft(e) {
            return e.length > 1 ? function(t, n, r) {
                var i = e.length;
                while (i--)
                    if (!e[i](t, n, r))
                        return !1;
                return !0
            }
            : e[0]
        }
        function lt(e, t, n, r, i) {
            var s, o = [], u = 0, a = e.length, f = t != null;
            for (; u < a; u++)
                if (s = e[u])
                    if (!n || n(s, r, i))
                        o.push(s),
                        f && t.push(u);
            return o
        }
        function ct(e, t, n, r, i, s) {
            return r && !r[d] && (r = ct(r)),
            i && !i[d] && (i = ct(i, s)),
            N(function(s, o, u, a) {
                if (s && i)
                    return;
                var f, l, c, h = [], p = [], d = o.length, v = s || dt(t || "*", u.nodeType ? [u] : u, [], s), m = e && (s || !t) ? lt(v, h, e, u, a) : v, g = n ? i || (s ? e : d || r) ? [] : o : m;
                n && n(m, g, u, a);
                if (r) {
                    c = lt(g, p),
                    r(c, [], u, a),
                    f = c.length;
                    while (f--)
                        if (l = c[f])
                            g[p[f]] = !(m[p[f]] = l)
                }
                if (s) {
                    f = e && g.length;
                    while (f--)
                        if (l = g[f])
                            s[h[f]] = !(o[h[f]] = l)
                } else
                    g = lt(g === o ? g.splice(d, g.length) : g),
                    i ? i(null, o, g, a) : S.apply(o, g)
            })
        }
        function ht(e) {
            var t, n, r, s = e.length, o = i.relative[e[0].type], u = o || i.relative[" "], a = o ? 1 : 0, f = at(function(e) {
                return e === t
            }, u, !0), l = at(function(e) {
                return T.call(t, e) > -1
            }, u, !0), h = [function(e, n, r) {
                return !o && (r || n !== c) || ((t = n).nodeType ? f(e, n, r) : l(e, n, r))
            }
            ];
            for (; a < s; a++)
                if (n = i.relative[e[a].type])
                    h = [at(ft(h), n)];
                else {
                    n = i.filter[e[a].type].apply(null, e[a].matches);
                    if (n[d]) {
                        r = ++a;
                        for (; r < s; r++)
                            if (i.relative[e[r].type])
                                break;
                        return ct(a > 1 && ft(h), a > 1 && e.slice(0, a - 1).join("").replace(j, "$1"), n, a < r && ht(e.slice(a, r)), r < s && ht(e = e.slice(r)), r < s && e.join(""))
                    }
                    h.push(n)
                }
            return ft(h)
        }
        function pt(e, t) {
            var r = t.length > 0
              , s = e.length > 0
              , o = function(u, a, f, l, h) {
                var p, d, v, m = [], y = 0, w = "0", x = u && [], T = h != null, N = c, C = u || s && i.find.TAG("*", h && a.parentNode || a), k = b += N == null ? 1 : Math.E;
                T && (c = a !== g && a,
                n = o.el);
                for (; (p = C[w]) != null; w++) {
                    if (s && p) {
                        for (d = 0; v = e[d]; d++)
                            if (v(p, a, f)) {
                                l.push(p);
                                break
                            }
                        T && (b = k,
                        n = ++o.el)
                    }
                    r && ((p = !v && p) && y--,
                    u && x.push(p))
                }
                y += w;
                if (r && w !== y) {
                    for (d = 0; v = t[d]; d++)
                        v(x, m, a, f);
                    if (u) {
                        if (y > 0)
                            while (w--)
                                !x[w] && !m[w] && (m[w] = E.call(l));
                        m = lt(m)
                    }
                    S.apply(l, m),
                    T && !u && m.length > 0 && y + t.length > 1 && nt.uniqueSort(l)
                }
                return T && (b = k,
                c = N),
                x
            };
            return o.el = 0,
            r ? N(o) : o
        }
        function dt(e, t, n, r) {
            var i = 0
              , s = t.length;
            for (; i < s; i++)
                nt(e, t[i], n, r);
            return n
        }
        function vt(e, t, n, r, s) {
            var o, u, f, l, c, h = ut(e), p = h.length;
            if (!r && h.length === 1) {
                u = h[0] = h[0].slice(0);
                if (u.length > 2 && (f = u[0]).type === "ID" && t.nodeType === 9 && !s && i.relative[u[1].type]) {
                    t = i.find.ID(f.matches[0].replace($, ""), t, s)[0];
                    if (!t)
                        return n;
                    e = e.slice(u.shift().length)
                }
                for (o = J.POS.test(e) ? -1 : u.length - 1; o >= 0; o--) {
                    f = u[o];
                    if (i.relative[l = f.type])
                        break;
                    if (c = i.find[l])
                        if (r = c(f.matches[0].replace($, ""), z.test(u[0].type) && t.parentNode || t, s)) {
                            u.splice(o, 1),
                            e = r.length && u.join("");
                            if (!e)
                                return S.apply(n, x.call(r, 0)),
                                n;
                            break
                        }
                }
            }
            return a(e, h)(r, t, s, n, z.test(e)),
            n
        }
        function mt() {}
        var n, r, i, s, o, u, a, f, l, c, h = !0, p = "undefined", d = ("sizcache" + Math.random()).replace(".", ""), m = String, g = e.document, y = g.documentElement, b = 0, w = 0, E = [].pop, S = [].push, x = [].slice, T = [].indexOf || function(e) {
            var t = 0
              , n = this.length;
            for (; t < n; t++)
                if (this[t] === e)
                    return t;
            return -1
        }
        , N = function(e, t) {
            return e[d] = t == null || t,
            e
        }, C = function() {
            var e = {}
              , t = [];
            return N(function(n, r) {
                return t.push(n) > i.cacheLength && delete e[t.shift()],
                e[n] = r
            }, e)
        }, k = C(), L = C(), A = C(), O = "[\\x20\\t\\r\\n\\f]", M = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+", _ = M.replace("w", "w#"), D = "([*^$|!~]?=)", P = "\\[" + O + "*(" + M + ")" + O + "*(?:" + D + O + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + _ + ")|)|)" + O + "*\\]", H = ":(" + M + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + P + ")|[^:]|\\\\.)*|.*))\\)|)", B = ":(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + O + "*((?:-\\d)?\\d*)" + O + "*\\)|)(?=[^-]|$)", j = new RegExp("^" + O + "+|((?:^|[^\\\\])(?:\\\\.)*)" + O + "+$","g"), F = new RegExp("^" + O + "*," + O + "*"), I = new RegExp("^" + O + "*([\\x20\\t\\r\\n\\f>+~])" + O + "*"), q = new RegExp(H), R = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/, U = /^:not/, z = /[\x20\t\r\n\f]*[+~]/, W = /:not\($/, X = /h\d/i, V = /input|select|textarea|button/i, $ = /\\(?!\\)/g, J = {
            ID: new RegExp("^#(" + M + ")"),
            CLASS: new RegExp("^\\.(" + M + ")"),
            NAME: new RegExp("^\\[name=['\"]?(" + M + ")['\"]?\\]"),
            TAG: new RegExp("^(" + M.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + P),
            PSEUDO: new RegExp("^" + H),
            POS: new RegExp(B,"i"),
            CHILD: new RegExp("^:(only|nth|first|last)-child(?:\\(" + O + "*(even|odd|(([+-]|)(\\d*)n|)" + O + "*(?:([+-]|)" + O + "*(\\d+)|))" + O + "*\\)|)","i"),
            needsContext: new RegExp("^" + O + "*[>+~]|" + B,"i")
        }, K = function(e) {
            var t = g.createElement("div");
            try {
                return e(t)
            } catch (n) {
                return !1
            } finally {
                t = null
            }
        }, Q = K(function(e) {
            return e.appendChild(g.createComment("")),
            !e.getElementsByTagName("*").length
        }), G = K(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            e.firstChild && typeof e.firstChild.getAttribute !== p && e.firstChild.getAttribute("href") === "#"
        }), Y = K(function(e) {
            e.innerHTML = "<select></select>";
            var t = typeof e.lastChild.getAttribute("multiple");
            return t !== "boolean" && t !== "string"
        }), Z = K(function(e) {
            return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>",
            !e.getElementsByClassName || !e.getElementsByClassName("e").length ? !1 : (e.lastChild.className = "e",
            e.getElementsByClassName("e").length === 2)
        }), et = K(function(e) {
            e.id = d + 0,
            e.innerHTML = "<a name='" + d + "'></a><div name='" + d + "'></div>",
            y.insertBefore(e, y.firstChild);
            var t = g.getElementsByName && g.getElementsByName(d).length === 2 + g.getElementsByName(d + 0).length;
            return r = !g.getElementById(d),
            y.removeChild(e),
            t
        });
        try {
            x.call(y.childNodes, 0)[0].nodeType
        } catch (tt) {
            x = function(e) {
                var t, n = [];
                for (; t = this[e]; e++)
                    n.push(t);
                return n
            }
        }
        nt.matches = function(e, t) {
            return nt(e, null, null, t)
        }
        ,
        nt.matchesSelector = function(e, t) {
            return nt(t, null, null, [e]).length > 0
        }
        ,
        s = nt.getText = function(e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (i === 1 || i === 9 || i === 11) {
                    if (typeof e.textContent == "string")
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += s(e)
                } else if (i === 3 || i === 4)
                    return e.nodeValue
            } else
                for (; t = e[r]; r++)
                    n += s(t);
            return n
        }
        ,
        o = nt.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? t.nodeName !== "HTML" : !1
        }
        ,
        u = nt.contains = y.contains ? function(e, t) {
            var n = e.nodeType === 9 ? e.documentElement : e
              , r = t && t.parentNode;
            return e === r || !!(r && r.nodeType === 1 && n.contains && n.contains(r))
        }
        : y.compareDocumentPosition ? function(e, t) {
            return t && !!(e.compareDocumentPosition(t) & 16)
        }
        : function(e, t) {
            while (t = t.parentNode)
                if (t === e)
                    return !0;
            return !1
        }
        ,
        nt.attr = function(e, t) {
            var n, r = o(e);
            return r || (t = t.toLowerCase()),
            (n = i.attrHandle[t]) ? n(e) : r || Y ? e.getAttribute(t) : (n = e.getAttributeNode(t),
            n ? typeof e[t] == "boolean" ? e[t] ? t : null : n.specified ? n.value : null : null)
        }
        ,
        i = nt.selectors = {
            cacheLength: 50,
            createPseudo: N,
            match: J,
            attrHandle: G ? {} : {
                href: function(e) {
                    return e.getAttribute("href", 2)
                },
                type: function(e) {
                    return e.getAttribute("type")
                }
            },
            find: {
                ID: r ? function(e, t, n) {
                    if (typeof t.getElementById !== p && !n) {
                        var r = t.getElementById(e);
                        return r && r.parentNode ? [r] : []
                    }
                }
                : function(e, n, r) {
                    if (typeof n.getElementById !== p && !r) {
                        var i = n.getElementById(e);
                        return i ? i.id === e || typeof i.getAttributeNode !== p && i.getAttributeNode("id").value === e ? [i] : t : []
                    }
                }
                ,
                TAG: Q ? function(e, t) {
                    if (typeof t.getElementsByTagName !== p)
                        return t.getElementsByTagName(e)
                }
                : function(e, t) {
                    var n = t.getElementsByTagName(e);
                    if (e === "*") {
                        var r, i = [], s = 0;
                        for (; r = n[s]; s++)
                            r.nodeType === 1 && i.push(r);
                        return i
                    }
                    return n
                }
                ,
                NAME: et && function(e, t) {
                    if (typeof t.getElementsByName !== p)
                        return t.getElementsByName(name)
                }
                ,
                CLASS: Z && function(e, t, n) {
                    if (typeof t.getElementsByClassName !== p && !n)
                        return t.getElementsByClassName(e)
                }
            },
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
                ATTR: function(e) {
                    return e[1] = e[1].replace($, ""),
                    e[3] = (e[4] || e[5] || "").replace($, ""),
                    e[2] === "~=" && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    e[1] === "nth" ? (e[2] || nt.error(e[0]),
                    e[3] = +(e[3] ? e[4] + (e[5] || 1) : 2 * (e[2] === "even" || e[2] === "odd")),
                    e[4] = +(e[6] + e[7] || e[2] === "odd")) : e[2] && nt.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n;
                    if (J.CHILD.test(e[0]))
                        return null;
                    if (e[3])
                        e[2] = e[3];
                    else if (t = e[4])
                        q.test(t) && (n = ut(t, !0)) && (n = t.indexOf(")", t.length - n) - t.length) && (t = t.slice(0, n),
                        e[0] = e[0].slice(0, n)),
                        e[2] = t;
                    return e.slice(0, 3)
                }
            },
            filter: {
                ID: r ? function(e) {
                    return e = e.replace($, ""),
                    function(t) {
                        return t.getAttribute("id") === e
                    }
                }
                : function(e) {
                    return e = e.replace($, ""),
                    function(t) {
                        var n = typeof t.getAttributeNode !== p && t.getAttributeNode("id");
                        return n && n.value === e
                    }
                }
                ,
                TAG: function(e) {
                    return e === "*" ? function() {
                        return !0
                    }
                    : (e = e.replace($, "").toLowerCase(),
                    function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                    )
                },
                CLASS: function(e) {
                    var t = k[d][e];
                    return t || (t = k(e, new RegExp("(^|" + O + ")" + e + "(" + O + "|$)"))),
                    function(e) {
                        return t.test(e.className || typeof e.getAttribute !== p && e.getAttribute("class") || "")
                    }
                },
                ATTR: function(e, t, n) {
                    return function(r, i) {
                        var s = nt.attr(r, e);
                        return s == null ? t === "!=" : t ? (s += "",
                        t === "=" ? s === n : t === "!=" ? s !== n : t === "^=" ? n && s.indexOf(n) === 0 : t === "*=" ? n && s.indexOf(n) > -1 : t === "$=" ? n && s.substr(s.length - n.length) === n : t === "~=" ? (" " + s + " ").indexOf(n) > -1 : t === "|=" ? s === n || s.substr(0, n.length + 1) === n + "-" : !1) : !0
                    }
                },
                CHILD: function(e, t, n, r) {
                    return e === "nth" ? function(e) {
                        var t, i, s = e.parentNode;
                        if (n === 1 && r === 0)
                            return !0;
                        if (s) {
                            i = 0;
                            for (t = s.firstChild; t; t = t.nextSibling)
                                if (t.nodeType === 1) {
                                    i++;
                                    if (e === t)
                                        break
                                }
                        }
                        return i -= r,
                        i === n || i % n === 0 && i / n >= 0
                    }
                    : function(t) {
                        var n = t;
                        switch (e) {
                        case "only":
                        case "first":
                            while (n = n.previousSibling)
                                if (n.nodeType === 1)
                                    return !1;
                            if (e === "first")
                                return !0;
                            n = t;
                        case "last":
                            while (n = n.nextSibling)
                                if (n.nodeType === 1)
                                    return !1;
                            return !0
                        }
                    }
                },
                PSEUDO: function(e, t) {
                    var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || nt.error("unsupported pseudo: " + e);
                    return r[d] ? r(t) : r.length > 1 ? (n = [e, e, "", t],
                    i.setFilters.hasOwnProperty(e.toLowerCase()) ? N(function(e, n) {
                        var i, s = r(e, t), o = s.length;
                        while (o--)
                            i = T.call(e, s[o]),
                            e[i] = !(n[i] = s[o])
                    }) : function(e) {
                        return r(e, 0, n)
                    }
                    ) : r
                }
            },
            pseudos: {
                not: N(function(e) {
                    var t = []
                      , n = []
                      , r = a(e.replace(j, "$1"));
                    return r[d] ? N(function(e, t, n, i) {
                        var s, o = r(e, null, i, []), u = e.length;
                        while (u--)
                            if (s = o[u])
                                e[u] = !(t[u] = s)
                    }) : function(e, i, s) {
                        return t[0] = e,
                        r(t, null, s, n),
                        !n.pop()
                    }
                }),
                has: N(function(e) {
                    return function(t) {
                        return nt(e, t).length > 0
                    }
                }),
                contains: N(function(e) {
                    return function(t) {
                        return (t.textContent || t.innerText || s(t)).indexOf(e) > -1
                    }
                }),
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return t === "input" && !!e.checked || t === "option" && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    e.selected === !0
                },
                parent: function(e) {
                    return !i.pseudos.empty(e)
                },
                empty: function(e) {
                    var t;
                    e = e.firstChild;
                    while (e) {
                        if (e.nodeName > "@" || (t = e.nodeType) === 3 || t === 4)
                            return !1;
                        e = e.nextSibling
                    }
                    return !0
                },
                header: function(e) {
                    return X.test(e.nodeName)
                },
                text: function(e) {
                    var t, n;
                    return e.nodeName.toLowerCase() === "input" && (t = e.type) === "text" && ((n = e.getAttribute("type")) == null || n.toLowerCase() === t)
                },
                radio: rt("radio"),
                checkbox: rt("checkbox"),
                file: rt("file"),
                password: rt("password"),
                image: rt("image"),
                submit: it("submit"),
                reset: it("reset"),
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return t === "input" && e.type === "button" || t === "button"
                },
                input: function(e) {
                    return V.test(e.nodeName)
                },
                focus: function(e) {
                    var t = e.ownerDocument;
                    return e === t.activeElement && (!t.hasFocus || t.hasFocus()) && (!!e.type || !!e.href)
                },
                active: function(e) {
                    return e === e.ownerDocument.activeElement
                },
                first: st(function(e, t, n) {
                    return [0]
                }),
                last: st(function(e, t, n) {
                    return [t - 1]
                }),
                eq: st(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: st(function(e, t, n) {
                    for (var r = 0; r < t; r += 2)
                        e.push(r);
                    return e
                }),
                odd: st(function(e, t, n) {
                    for (var r = 1; r < t; r += 2)
                        e.push(r);
                    return e
                }),
                lt: st(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; --r >= 0; )
                        e.push(r);
                    return e
                }),
                gt: st(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t; )
                        e.push(r);
                    return e
                })
            }
        },
        f = y.compareDocumentPosition ? function(e, t) {
            return e === t ? (l = !0,
            0) : (!e.compareDocumentPosition || !t.compareDocumentPosition ? e.compareDocumentPosition : e.compareDocumentPosition(t) & 4) ? -1 : 1
        }
        : function(e, t) {
            if (e === t)
                return l = !0,
                0;
            if (e.sourceIndex && t.sourceIndex)
                return e.sourceIndex - t.sourceIndex;
            var n, r, i = [], s = [], o = e.parentNode, u = t.parentNode, a = o;
            if (o === u)
                return ot(e, t);
            if (!o)
                return -1;
            if (!u)
                return 1;
            while (a)
                i.unshift(a),
                a = a.parentNode;
            a = u;
            while (a)
                s.unshift(a),
                a = a.parentNode;
            n = i.length,
            r = s.length;
            for (var f = 0; f < n && f < r; f++)
                if (i[f] !== s[f])
                    return ot(i[f], s[f]);
            return f === n ? ot(e, s[f], -1) : ot(i[f], t, 1)
        }
        ,
        [0, 0].sort(f),
        h = !l,
        nt.uniqueSort = function(e) {
            var t, n = 1;
            l = h,
            e.sort(f);
            if (l)
                for (; t = e[n]; n++)
                    t === e[n - 1] && e.splice(n--, 1);
            return e
        }
        ,
        nt.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        a = nt.compile = function(e, t) {
            var n, r = [], i = [], s = A[d][e];
            if (!s) {
                t || (t = ut(e)),
                n = t.length;
                while (n--)
                    s = ht(t[n]),
                    s[d] ? r.push(s) : i.push(s);
                s = A(e, pt(i, r))
            }
            return s
        }
        ,
        g.querySelectorAll && function() {
            var e, t = vt, n = /'|\\/g, r = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g, i = [":focus"], s = [":active", ":focus"], u = y.matchesSelector || y.mozMatchesSelector || y.webkitMatchesSelector || y.oMatchesSelector || y.msMatchesSelector;
            K(function(e) {
                e.innerHTML = "<select><option selected=''></option></select>",
                e.querySelectorAll("[selected]").length || i.push("\\[" + O + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),
                e.querySelectorAll(":checked").length || i.push(":checked")
            }),
            K(function(e) {
                e.innerHTML = "<p test=''></p>",
                e.querySelectorAll("[test^='']").length && i.push("[*^$]=" + O + "*(?:\"\"|'')"),
                e.innerHTML = "<input type='hidden'/>",
                e.querySelectorAll(":enabled").length || i.push(":enabled", ":disabled")
            }),
            i = new RegExp(i.join("|")),
            vt = function(e, r, s, o, u) {
                if (!o && !u && (!i || !i.test(e))) {
                    var a, f, l = !0, c = d, h = r, p = r.nodeType === 9 && e;
                    if (r.nodeType === 1 && r.nodeName.toLowerCase() !== "object") {
                        a = ut(e),
                        (l = r.getAttribute("id")) ? c = l.replace(n, "\\$&") : r.setAttribute("id", c),
                        c = "[id='" + c + "'] ",
                        f = a.length;
                        while (f--)
                            a[f] = c + a[f].join("");
                        h = z.test(e) && r.parentNode || r,
                        p = a.join(",")
                    }
                    if (p)
                        try {
                            return S.apply(s, x.call(h.querySelectorAll(p), 0)),
                            s
                        } catch (v) {} finally {
                            l || r.removeAttribute("id")
                        }
                }
                return t(e, r, s, o, u)
            }
            ,
            u && (K(function(t) {
                e = u.call(t, "div");
                try {
                    u.call(t, "[test!='']:sizzle"),
                    s.push("!=", H)
                } catch (n) {}
            }),
            s = new RegExp(s.join("|")),
            nt.matchesSelector = function(t, n) {
                n = n.replace(r, "='$1']");
                if (!o(t) && !s.test(n) && (!i || !i.test(n)))
                    try {
                        var a = u.call(t, n);
                        if (a || e || t.document && t.document.nodeType !== 11)
                            return a
                    } catch (f) {}
                return nt(n, null, null, [t]).length > 0
            }
            )
        }(),
        i.pseudos.nth = i.pseudos.eq,
        i.filters = mt.prototype = i.pseudos,
        i.setFilters = new mt,
        nt.attr = v.attr,
        v.find = nt,
        v.expr = nt.selectors,
        v.expr[":"] = v.expr.pseudos,
        v.unique = nt.uniqueSort,
        v.text = nt.getText,
        v.isXMLDoc = nt.isXML,
        v.contains = nt.contains
    }(e);
    var nt = /Until$/
      , rt = /^(?:parents|prev(?:Until|All))/
      , it = /^.[^:#\[\.,]*$/
      , st = v.expr.match.needsContext
      , ot = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    v.fn.extend({
        find: function(e) {
            var t, n, r, i, s, o, u = this;
            if (typeof e != "string")
                return v(e).filter(function() {
                    for (t = 0,
                    n = u.length; t < n; t++)
                        if (v.contains(u[t], this))
                            return !0
                });
            o = this.pushStack("", "find", e);
            for (t = 0,
            n = this.length; t < n; t++) {
                r = o.length,
                v.find(e, this[t], o);
                if (t > 0)
                    for (i = r; i < o.length; i++)
                        for (s = 0; s < r; s++)
                            if (o[s] === o[i]) {
                                o.splice(i--, 1);
                                break
                            }
            }
            return o
        },
        has: function(e) {
            var t, n = v(e, this), r = n.length;
            return this.filter(function() {
                for (t = 0; t < r; t++)
                    if (v.contains(this, n[t]))
                        return !0
            })
        },
        not: function(e) {
            return this.pushStack(ft(this, e, !1), "not", e)
        },
        filter: function(e) {
            return this.pushStack(ft(this, e, !0), "filter", e)
        },
        is: function(e) {
            return !!e && (typeof e == "string" ? st.test(e) ? v(e, this.context).index(this[0]) >= 0 : v.filter(e, this).length > 0 : this.filter(e).length > 0)
        },
        closest: function(e, t) {
            var n, r = 0, i = this.length, s = [], o = st.test(e) || typeof e != "string" ? v(e, t || this.context) : 0;
            for (; r < i; r++) {
                n = this[r];
                while (n && n.ownerDocument && n !== t && n.nodeType !== 11) {
                    if (o ? o.index(n) > -1 : v.find.matchesSelector(n, e)) {
                        s.push(n);
                        break
                    }
                    n = n.parentNode
                }
            }
            return s = s.length > 1 ? v.unique(s) : s,
            this.pushStack(s, "closest", e)
        },
        index: function(e) {
            return e ? typeof e == "string" ? v.inArray(this[0], v(e)) : v.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
        },
        add: function(e, t) {
            var n = typeof e == "string" ? v(e, t) : v.makeArray(e && e.nodeType ? [e] : e)
              , r = v.merge(this.get(), n);
            return this.pushStack(ut(n[0]) || ut(r[0]) ? r : v.unique(r))
        },
        addBack: function(e) {
            return this.add(e == null ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    v.fn.andSelf = v.fn.addBack,
    v.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && t.nodeType !== 11 ? t : null
        },
        parents: function(e) {
            return v.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return v.dir(e, "parentNode", n)
        },
        next: function(e) {
            return at(e, "nextSibling")
        },
        prev: function(e) {
            return at(e, "previousSibling")
        },
        nextAll: function(e) {
            return v.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return v.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return v.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return v.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return v.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return v.sibling(e.firstChild)
        },
        contents: function(e) {
            return v.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : v.merge([], e.childNodes)
        }
    }, function(e, t) {
        v.fn[e] = function(n, r) {
            var i = v.map(this, t, n);
            return nt.test(e) || (r = n),
            r && typeof r == "string" && (i = v.filter(r, i)),
            i = this.length > 1 && !ot[e] ? v.unique(i) : i,
            this.length > 1 && rt.test(e) && (i = i.reverse()),
            this.pushStack(i, e, l.call(arguments).join(","))
        }
    }),
    v.extend({
        filter: function(e, t, n) {
            return n && (e = ":not(" + e + ")"),
            t.length === 1 ? v.find.matchesSelector(t[0], e) ? [t[0]] : [] : v.find.matches(e, t)
        },
        dir: function(e, n, r) {
            var i = []
              , s = e[n];
            while (s && s.nodeType !== 9 && (r === t || s.nodeType !== 1 || !v(s).is(r)))
                s.nodeType === 1 && i.push(s),
                s = s[n];
            return i
        },
        sibling: function(e, t) {
            var n = [];
            for (; e; e = e.nextSibling)
                e.nodeType === 1 && e !== t && n.push(e);
            return n
        }
    });
    var ct = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video"
      , ht = / jQuery\d+="(?:null|\d+)"/g
      , pt = /^\s+/
      , dt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
      , vt = /<([\w:]+)/
      , mt = /<tbody/i
      , gt = /<|&#?\w+;/
      , yt = /<(?:script|style|link)/i
      , bt = /<(?:script|object|embed|option|style)/i
      , wt = new RegExp("<(?:" + ct + ")[\\s/>]","i")
      , Et = /^(?:checkbox|radio)$/
      , St = /checked\s*(?:[^=]|=\s*.checked.)/i
      , xt = /\/(java|ecma)script/i
      , Tt = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g
      , Nt = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        area: [1, "<map>", "</map>"],
        _default: [0, "", ""]
    }
      , Ct = lt(i)
      , kt = Ct.appendChild(i.createElement("div"));
    Nt.optgroup = Nt.option,
    Nt.tbody = Nt.tfoot = Nt.colgroup = Nt.caption = Nt.thead,
    Nt.th = Nt.td,
    v.support.htmlSerialize || (Nt._default = [1, "X<div>", "</div>"]),
    v.fn.extend({
        text: function(e) {
            return v.access(this, function(e) {
                return e === t ? v.text(this) : this.empty().append((this[0] && this[0].ownerDocument || i).createTextNode(e))
            }, null, e, arguments.length)
        },
        wrapAll: function(e) {
            if (v.isFunction(e))
                return this.each(function(t) {
                    v(this).wrapAll(e.call(this, t))
                });
            if (this[0]) {
                var t = v(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]),
                t.map(function() {
                    var e = this;
                    while (e.firstChild && e.firstChild.nodeType === 1)
                        e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return v.isFunction(e) ? this.each(function(t) {
                v(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = v(this)
                  , n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = v.isFunction(e);
            return this.each(function(n) {
                v(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                v.nodeName(this, "body") || v(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function() {
            return this.domManip(arguments, !0, function(e) {
                (this.nodeType === 1 || this.nodeType === 11) && this.appendChild(e)
            })
        },
        prepend: function() {
            return this.domManip(arguments, !0, function(e) {
                (this.nodeType === 1 || this.nodeType === 11) && this.insertBefore(e, this.firstChild)
            })
        },
        before: function() {
            if (!ut(this[0]))
                return this.domManip(arguments, !1, function(e) {
                    this.parentNode.insertBefore(e, this)
                });
            if (arguments.length) {
                var e = v.clean(arguments);
                return this.pushStack(v.merge(e, this), "before", this.selector)
            }
        },
        after: function() {
            if (!ut(this[0]))
                return this.domManip(arguments, !1, function(e) {
                    this.parentNode.insertBefore(e, this.nextSibling)
                });
            if (arguments.length) {
                var e = v.clean(arguments);
                return this.pushStack(v.merge(this, e), "after", this.selector)
            }
        },
        remove: function(e, t) {
            var n, r = 0;
            for (; (n = this[r]) != null; r++)
                if (!e || v.filter(e, [n]).length)
                    !t && n.nodeType === 1 && (v.cleanData(n.getElementsByTagName("*")),
                    v.cleanData([n])),
                    n.parentNode && n.parentNode.removeChild(n);
            return this
        },
        empty: function() {
            var e, t = 0;
            for (; (e = this[t]) != null; t++) {
                e.nodeType === 1 && v.cleanData(e.getElementsByTagName("*"));
                while (e.firstChild)
                    e.removeChild(e.firstChild)
            }
            return this
        },
        clone: function(e, t) {
            return e = e == null ? !1 : e,
            t = t == null ? e : t,
            this.map(function() {
                return v.clone(this, e, t)
            })
        },
        html: function(e) {
            return v.access(this, function(e) {
                var n = this[0] || {}
                  , r = 0
                  , i = this.length;
                if (e === t)
                    return n.nodeType === 1 ? n.innerHTML.replace(ht, "") : t;
                if (typeof e == "string" && !yt.test(e) && (v.support.htmlSerialize || !wt.test(e)) && (v.support.leadingWhitespace || !pt.test(e)) && !Nt[(vt.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(dt, "<$1></$2>");
                    try {
                        for (; r < i; r++)
                            n = this[r] || {},
                            n.nodeType === 1 && (v.cleanData(n.getElementsByTagName("*")),
                            n.innerHTML = e);
                        n = 0
                    } catch (s) {}
                }
                n && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function(e) {
            return ut(this[0]) ? this.length ? this.pushStack(v(v.isFunction(e) ? e() : e), "replaceWith", e) : this : v.isFunction(e) ? this.each(function(t) {
                var n = v(this)
                  , r = n.html();
                n.replaceWith(e.call(this, t, r))
            }) : (typeof e != "string" && (e = v(e).detach()),
            this.each(function() {
                var t = this.nextSibling
                  , n = this.parentNode;
                v(this).remove(),
                t ? v(t).before(e) : v(n).append(e)
            }))
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, n, r) {
            e = [].concat.apply([], e);
            var i, s, o, u, a = 0, f = e[0], l = [], c = this.length;
            if (!v.support.checkClone && c > 1 && typeof f == "string" && St.test(f))
                return this.each(function() {
                    v(this).domManip(e, n, r)
                });
            if (v.isFunction(f))
                return this.each(function(i) {
                    var s = v(this);
                    e[0] = f.call(this, i, n ? s.html() : t),
                    s.domManip(e, n, r)
                });
            if (this[0]) {
                i = v.buildFragment(e, this, l),
                o = i.fragment,
                s = o.firstChild,
                o.childNodes.length === 1 && (o = s);
                if (s) {
                    n = n && v.nodeName(s, "tr");
                    for (u = i.cacheable || c - 1; a < c; a++)
                        r.call(n && v.nodeName(this[a], "table") ? Lt(this[a], "tbody") : this[a], a === u ? o : v.clone(o, !0, !0))
                }
                o = s = null,
                l.length && v.each(l, function(e, t) {
                    t.src ? v.ajax ? v.ajax({
                        url: t.src,
                        type: "GET",
                        dataType: "script",
                        async: !1,
                        global: !1,
                        "throws": !0
                    }) : v.error("no ajax") : v.globalEval((t.text || t.textContent || t.innerHTML || "").replace(Tt, "")),
                    t.parentNode && t.parentNode.removeChild(t)
                })
            }
            return this
        }
    }),
    v.buildFragment = function(e, n, r) {
        var s, o, u, a = e[0];
        return n = n || i,
        n = !n.nodeType && n[0] || n,
        n = n.ownerDocument || n,
        e.length === 1 && typeof a == "string" && a.length < 512 && n === i && a.charAt(0) === "<" && !bt.test(a) && (v.support.checkClone || !St.test(a)) && (v.support.html5Clone || !wt.test(a)) && (o = !0,
        s = v.fragments[a],
        u = s !== t),
        s || (s = n.createDocumentFragment(),
        v.clean(e, n, s, r),
        o && (v.fragments[a] = u && s)),
        {
            fragment: s,
            cacheable: o
        }
    }
    ,
    v.fragments = {},
    v.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        v.fn[e] = function(n) {
            var r, i = 0, s = [], o = v(n), u = o.length, a = this.length === 1 && this[0].parentNode;
            if ((a == null || a && a.nodeType === 11 && a.childNodes.length === 1) && u === 1)
                return o[t](this[0]),
                this;
            for (; i < u; i++)
                r = (i > 0 ? this.clone(!0) : this).get(),
                v(o[i])[t](r),
                s = s.concat(r);
            return this.pushStack(s, e, o.selector)
        }
    }),
    v.extend({
        clone: function(e, t, n) {
            var r, i, s, o;
            v.support.html5Clone || v.isXMLDoc(e) || !wt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (kt.innerHTML = e.outerHTML,
            kt.removeChild(o = kt.firstChild));
            if ((!v.support.noCloneEvent || !v.support.noCloneChecked) && (e.nodeType === 1 || e.nodeType === 11) && !v.isXMLDoc(e)) {
                Ot(e, o),
                r = Mt(e),
                i = Mt(o);
                for (s = 0; r[s]; ++s)
                    i[s] && Ot(r[s], i[s])
            }
            if (t) {
                At(e, o);
                if (n) {
                    r = Mt(e),
                    i = Mt(o);
                    for (s = 0; r[s]; ++s)
                        At(r[s], i[s])
                }
            }
            return r = i = null,
            o
        },
        clean: function(e, t, n, r) {
            var s, o, u, a, f, l, c, h, p, d, m, g, y = t === i && Ct, b = [];
            if (!t || typeof t.createDocumentFragment == "undefined")
                t = i;
            for (s = 0; (u = e[s]) != null; s++) {
                typeof u == "number" && (u += "");
                if (!u)
                    continue;
                if (typeof u == "string")
                    if (!gt.test(u))
                        u = t.createTextNode(u);
                    else {
                        y = y || lt(t),
                        c = t.createElement("div"),
                        y.appendChild(c),
                        u = u.replace(dt, "<$1></$2>"),
                        a = (vt.exec(u) || ["", ""])[1].toLowerCase(),
                        f = Nt[a] || Nt._default,
                        l = f[0],
                        c.innerHTML = f[1] + u + f[2];
                        while (l--)
                            c = c.lastChild;
                        if (!v.support.tbody) {
                            h = mt.test(u),
                            p = a === "table" && !h ? c.firstChild && c.firstChild.childNodes : f[1] === "<table>" && !h ? c.childNodes : [];
                            for (o = p.length - 1; o >= 0; --o)
                                v.nodeName(p[o], "tbody") && !p[o].childNodes.length && p[o].parentNode.removeChild(p[o])
                        }
                        !v.support.leadingWhitespace && pt.test(u) && c.insertBefore(t.createTextNode(pt.exec(u)[0]), c.firstChild),
                        u = c.childNodes,
                        c.parentNode.removeChild(c)
                    }
                u.nodeType ? b.push(u) : v.merge(b, u)
            }
            c && (u = c = y = null);
            if (!v.support.appendChecked)
                for (s = 0; (u = b[s]) != null; s++)
                    v.nodeName(u, "input") ? _t(u) : typeof u.getElementsByTagName != "undefined" && v.grep(u.getElementsByTagName("input"), _t);
            if (n) {
                m = function(e) {
                    if (!e.type || xt.test(e.type))
                        return r ? r.push(e.parentNode ? e.parentNode.removeChild(e) : e) : n.appendChild(e)
                }
                ;
                for (s = 0; (u = b[s]) != null; s++)
                    if (!v.nodeName(u, "script") || !m(u))
                        n.appendChild(u),
                        typeof u.getElementsByTagName != "undefined" && (g = v.grep(v.merge([], u.getElementsByTagName("script")), m),
                        b.splice.apply(b, [s + 1, 0].concat(g)),
                        s += g.length)
            }
            return b
        },
        cleanData: function(e, t) {
            var n, r, i, s, o = 0, u = v.expando, a = v.cache, f = v.support.deleteExpando, l = v.event.special;
            for (; (i = e[o]) != null; o++)
                if (t || v.acceptData(i)) {
                    r = i[u],
                    n = r && a[r];
                    if (n) {
                        if (n.events)
                            for (s in n.events)
                                l[s] ? v.event.remove(i, s) : v.removeEvent(i, s, n.handle);
                        a[r] && (delete a[r],
                        f ? delete i[u] : i.removeAttribute ? i.removeAttribute(u) : i[u] = null,
                        v.deletedIds.push(r))
                    }
                }
        }
    }),
    function() {
        var e, t;
        v.uaMatch = function(e) {
            e = e.toLowerCase();
            var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
            return {
                browser: t[1] || "",
                version: t[2] || "0"
            }
        }
        ,
        e = v.uaMatch(o.userAgent),
        t = {},
        e.browser && (t[e.browser] = !0,
        t.version = e.version),
        t.chrome ? t.webkit = !0 : t.webkit && (t.safari = !0),
        v.browser = t,
        v.sub = function() {
            function e(t, n) {
                return new e.fn.init(t,n)
            }
            v.extend(!0, e, this),
            e.superclass = this,
            e.fn = e.prototype = this(),
            e.fn.constructor = e,
            e.sub = this.sub,
            e.fn.init = function(r, i) {
                return i && i instanceof v && !(i instanceof e) && (i = e(i)),
                v.fn.init.call(this, r, i, t)
            }
            ,
            e.fn.init.prototype = e.fn;
            var t = e(i);
            return e
        }
    }();
    var Dt, Pt, Ht, Bt = /alpha\([^)]*\)/i, jt = /opacity=([^)]*)/, Ft = /^(top|right|bottom|left)$/, It = /^(none|table(?!-c[ea]).+)/, qt = /^margin/, Rt = new RegExp("^(" + m + ")(.*)$","i"), Ut = new RegExp("^(" + m + ")(?!px)[a-z%]+$","i"), zt = new RegExp("^([-+])=(" + m + ")","i"), Wt = {}, Xt = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Vt = {
        letterSpacing: 0,
        fontWeight: 400
    }, $t = ["Top", "Right", "Bottom", "Left"], Jt = ["Webkit", "O", "Moz", "ms"], Kt = v.fn.toggle;
    v.fn.extend({
        css: function(e, n) {
            return v.access(this, function(e, n, r) {
                return r !== t ? v.style(e, n, r) : v.css(e, n)
            }, e, n, arguments.length > 1)
        },
        show: function() {
            return Yt(this, !0)
        },
        hide: function() {
            return Yt(this)
        },
        toggle: function(e, t) {
            var n = typeof e == "boolean";
            return v.isFunction(e) && v.isFunction(t) ? Kt.apply(this, arguments) : this.each(function() {
                (n ? e : Gt(this)) ? v(this).show() : v(this).hide()
            })
        }
    }),
    v.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Dt(e, "opacity");
                        return n === "" ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": v.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, n, r, i) {
            if (!e || e.nodeType === 3 || e.nodeType === 8 || !e.style)
                return;
            var s, o, u, a = v.camelCase(n), f = e.style;
            n = v.cssProps[a] || (v.cssProps[a] = Qt(f, a)),
            u = v.cssHooks[n] || v.cssHooks[a];
            if (r === t)
                return u && "get"in u && (s = u.get(e, !1, i)) !== t ? s : f[n];
            o = typeof r,
            o === "string" && (s = zt.exec(r)) && (r = (s[1] + 1) * s[2] + parseFloat(v.css(e, n)),
            o = "number");
            if (r == null || o === "number" && isNaN(r))
                return;
            o === "number" && !v.cssNumber[a] && (r += "px");
            if (!u || !("set"in u) || (r = u.set(e, r, i)) !== t)
                try {
                    f[n] = r
                } catch (l) {}
        },
        css: function(e, n, r, i) {
            var s, o, u, a = v.camelCase(n);
            return n = v.cssProps[a] || (v.cssProps[a] = Qt(e.style, a)),
            u = v.cssHooks[n] || v.cssHooks[a],
            u && "get"in u && (s = u.get(e, !0, i)),
            s === t && (s = Dt(e, n)),
            s === "normal" && n in Vt && (s = Vt[n]),
            r || i !== t ? (o = parseFloat(s),
            r || v.isNumeric(o) ? o || 0 : s) : s
        },
        swap: function(e, t, n) {
            var r, i, s = {};
            for (i in t)
                s[i] = e.style[i],
                e.style[i] = t[i];
            r = n.call(e);
            for (i in t)
                e.style[i] = s[i];
            return r
        }
    }),
    e.getComputedStyle ? Dt = function(t, n) {
        var r, i, s, o, u = e.getComputedStyle(t, null), a = t.style;
        return u && (r = u[n],
        r === "" && !v.contains(t.ownerDocument, t) && (r = v.style(t, n)),
        Ut.test(r) && qt.test(n) && (i = a.width,
        s = a.minWidth,
        o = a.maxWidth,
        a.minWidth = a.maxWidth = a.width = r,
        r = u.width,
        a.width = i,
        a.minWidth = s,
        a.maxWidth = o)),
        r
    }
    : i.documentElement.currentStyle && (Dt = function(e, t) {
        var n, r, i = e.currentStyle && e.currentStyle[t], s = e.style;
        return i == null && s && s[t] && (i = s[t]),
        Ut.test(i) && !Ft.test(t) && (n = s.left,
        r = e.runtimeStyle && e.runtimeStyle.left,
        r && (e.runtimeStyle.left = e.currentStyle.left),
        s.left = t === "fontSize" ? "1em" : i,
        i = s.pixelLeft + "px",
        s.left = n,
        r && (e.runtimeStyle.left = r)),
        i === "" ? "auto" : i
    }
    ),
    v.each(["height", "width"], function(e, t) {
        v.cssHooks[t] = {
            get: function(e, n, r) {
                if (n)
                    return e.offsetWidth === 0 && It.test(Dt(e, "display")) ? v.swap(e, Xt, function() {
                        return tn(e, t, r)
                    }) : tn(e, t, r)
            },
            set: function(e, n, r) {
                return Zt(e, n, r ? en(e, t, r, v.support.boxSizing && v.css(e, "boxSizing") === "border-box") : 0)
            }
        }
    }),
    v.support.opacity || (v.cssHooks.opacity = {
        get: function(e, t) {
            return jt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style
              , r = e.currentStyle
              , i = v.isNumeric(t) ? "alpha(opacity=" + t * 100 + ")" : ""
              , s = r && r.filter || n.filter || "";
            n.zoom = 1;
            if (t >= 1 && v.trim(s.replace(Bt, "")) === "" && n.removeAttribute) {
                n.removeAttribute("filter");
                if (r && !r.filter)
                    return
            }
            n.filter = Bt.test(s) ? s.replace(Bt, i) : s + " " + i
        }
    }),
    v(function() {
        v.support.reliableMarginRight || (v.cssHooks.marginRight = {
            get: function(e, t) {
                return v.swap(e, {
                    display: "inline-block"
                }, function() {
                    if (t)
                        return Dt(e, "marginRight")
                })
            }
        }),
        !v.support.pixelPosition && v.fn.position && v.each(["top", "left"], function(e, t) {
            v.cssHooks[t] = {
                get: function(e, n) {
                    if (n) {
                        var r = Dt(e, t);
                        return Ut.test(r) ? v(e).position()[t] + "px" : r
                    }
                }
            }
        })
    }),
    v.expr && v.expr.filters && (v.expr.filters.hidden = function(e) {
        return e.offsetWidth === 0 && e.offsetHeight === 0 || !v.support.reliableHiddenOffsets && (e.style && e.style.display || Dt(e, "display")) === "none"
    }
    ,
    v.expr.filters.visible = function(e) {
        return !v.expr.filters.hidden(e)
    }
    ),
    v.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        v.cssHooks[e + t] = {
            expand: function(n) {
                var r, i = typeof n == "string" ? n.split(" ") : [n], s = {};
                for (r = 0; r < 4; r++)
                    s[e + $t[r] + t] = i[r] || i[r - 2] || i[0];
                return s
            }
        },
        qt.test(e) || (v.cssHooks[e + t].set = Zt)
    });
    var rn = /%20/g
      , sn = /\[\]$/
      , on = /\r?\n/g
      , un = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i
      , an = /^(?:select|textarea)/i;
    v.fn.extend({
        serialize: function() {
            return v.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ? v.makeArray(this.elements) : this
            }).filter(function() {
                return this.name && !this.disabled && (this.checked || an.test(this.nodeName) || un.test(this.type))
            }).map(function(e, t) {
                var n = v(this).val();
                return n == null ? null : v.isArray(n) ? v.map(n, function(e, n) {
                    return {
                        name: t.name,
                        value: e.replace(on, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(on, "\r\n")
                }
            }).get()
        }
    }),
    v.param = function(e, n) {
        var r, i = [], s = function(e, t) {
            t = v.isFunction(t) ? t() : t == null ? "" : t,
            i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        n === t && (n = v.ajaxSettings && v.ajaxSettings.traditional);
        if (v.isArray(e) || e.jquery && !v.isPlainObject(e))
            v.each(e, function() {
                s(this.name, this.value)
            });
        else
            for (r in e)
                fn(r, e[r], n, s);
        return i.join("&").replace(rn, "+")
    }
    ;
    var ln, cn, hn = /#.*$/, pn = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, dn = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/, vn = /^(?:GET|HEAD)$/, mn = /^\/\//, gn = /\?/, yn = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, bn = /([?&])_=[^&]*/, wn = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, En = v.fn.load, Sn = {}, xn = {}, Tn = ["*/"] + ["*"];
    try {
        cn = s.href
    } catch (Nn) {
        cn = i.createElement("a"),
        cn.href = "",
        cn = cn.href
    }
    ln = wn.exec(cn.toLowerCase()) || [],
    v.fn.load = function(e, n, r) {
        if (typeof e != "string" && En)
            return En.apply(this, arguments);
        if (!this.length)
            return this;
        var i, s, o, u = this, a = e.indexOf(" ");
        return a >= 0 && (i = e.slice(a, e.length),
        e = e.slice(0, a)),
        v.isFunction(n) ? (r = n,
        n = t) : n && typeof n == "object" && (s = "POST"),
        v.ajax({
            url: e,
            type: s,
            dataType: "html",
            data: n,
            complete: function(e, t) {
                r && u.each(r, o || [e.responseText, t, e])
            }
        }).done(function(e) {
            o = arguments,
            u.html(i ? v("<div>").append(e.replace(yn, "")).find(i) : e)
        }),
        this
    }
    ,
    v.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(e, t) {
        v.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    v.each(["get", "post"], function(e, n) {
        v[n] = function(e, r, i, s) {
            return v.isFunction(r) && (s = s || i,
            i = r,
            r = t),
            v.ajax({
                type: n,
                url: e,
                data: r,
                success: i,
                dataType: s
            })
        }
    }),
    v.extend({
        getScript: function(e, n) {
            return v.get(e, t, n, "script")
        },
        getJSON: function(e, t, n) {
            return v.get(e, t, n, "json")
        },
        ajaxSetup: function(e, t) {
            return t ? Ln(e, v.ajaxSettings) : (t = e,
            e = v.ajaxSettings),
            Ln(e, t),
            e
        },
        ajaxSettings: {
            url: cn,
            isLocal: dn.test(ln[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": Tn
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": e.String,
                "text html": !0,
                "text json": v.parseJSON,
                "text xml": v.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: Cn(Sn),
        ajaxTransport: Cn(xn),
        ajax: function(e, n) {
            function T(e, n, s, a) {
                var l, y, b, w, S, T = n;
                if (E === 2)
                    return;
                E = 2,
                u && clearTimeout(u),
                o = t,
                i = a || "",
                x.readyState = e > 0 ? 4 : 0,
                s && (w = An(c, x, s));
                if (e >= 200 && e < 300 || e === 304)
                    c.ifModified && (S = x.getResponseHeader("Last-Modified"),
                    S && (v.lastModified[r] = S),
                    S = x.getResponseHeader("Etag"),
                    S && (v.etag[r] = S)),
                    e === 304 ? (T = "notmodified",
                    l = !0) : (l = On(c, w),
                    T = l.state,
                    y = l.data,
                    b = l.error,
                    l = !b);
                else {
                    b = T;
                    if (!T || e)
                        T = "error",
                        e < 0 && (e = 0)
                }
                x.status = e,
                x.statusText = (n || T) + "",
                l ? d.resolveWith(h, [y, T, x]) : d.rejectWith(h, [x, T, b]),
                x.statusCode(g),
                g = t,
                f && p.trigger("ajax" + (l ? "Success" : "Error"), [x, c, l ? y : b]),
                m.fireWith(h, [x, T]),
                f && (p.trigger("ajaxComplete", [x, c]),
                --v.active || v.event.trigger("ajaxStop"))
            }
            typeof e == "object" && (n = e,
            e = t),
            n = n || {};
            var r, i, s, o, u, a, f, l, c = v.ajaxSetup({}, n), h = c.context || c, p = h !== c && (h.nodeType || h instanceof v) ? v(h) : v.event, d = v.Deferred(), m = v.Callbacks("once memory"), g = c.statusCode || {}, b = {}, w = {}, E = 0, S = "canceled", x = {
                readyState: 0,
                setRequestHeader: function(e, t) {
                    if (!E) {
                        var n = e.toLowerCase();
                        e = w[n] = w[n] || e,
                        b[e] = t
                    }
                    return this
                },
                getAllResponseHeaders: function() {
                    return E === 2 ? i : null
                },
                getResponseHeader: function(e) {
                    var n;
                    if (E === 2) {
                        if (!s) {
                            s = {};
                            while (n = pn.exec(i))
                                s[n[1].toLowerCase()] = n[2]
                        }
                        n = s[e.toLowerCase()]
                    }
                    return n === t ? null : n
                },
                overrideMimeType: function(e) {
                    return E || (c.mimeType = e),
                    this
                },
                abort: function(e) {
                    return e = e || S,
                    o && o.abort(e),
                    T(0, e),
                    this
                }
            };
            d.promise(x),
            x.success = x.done,
            x.error = x.fail,
            x.complete = m.add,
            x.statusCode = function(e) {
                if (e) {
                    var t;
                    if (E < 2)
                        for (t in e)
                            g[t] = [g[t], e[t]];
                    else
                        t = e[x.status],
                        x.always(t)
                }
                return this
            }
            ,
            c.url = ((e || c.url) + "").replace(hn, "").replace(mn, ln[1] + "//"),
            c.dataTypes = v.trim(c.dataType || "*").toLowerCase().split(y),
            c.crossDomain == null && (a = wn.exec(c.url.toLowerCase()) || !1,
            c.crossDomain = a && a.join(":") + (a[3] ? "" : a[1] === "http:" ? 80 : 443) !== ln.join(":") + (ln[3] ? "" : ln[1] === "http:" ? 80 : 443)),
            c.data && c.processData && typeof c.data != "string" && (c.data = v.param(c.data, c.traditional)),
            kn(Sn, c, n, x);
            if (E === 2)
                return x;
            f = c.global,
            c.type = c.type.toUpperCase(),
            c.hasContent = !vn.test(c.type),
            f && v.active++ === 0 && v.event.trigger("ajaxStart");
            if (!c.hasContent) {
                c.data && (c.url += (gn.test(c.url) ? "&" : "?") + c.data,
                delete c.data),
                r = c.url;
                if (c.cache === !1) {
                    var N = v.now()
                      , C = c.url.replace(bn, "$1_=" + N);
                    c.url = C + (C === c.url ? (gn.test(c.url) ? "&" : "?") + "_=" + N : "")
                }
            }
            (c.data && c.hasContent && c.contentType !== !1 || n.contentType) && x.setRequestHeader("Content-Type", c.contentType),
            c.ifModified && (r = r || c.url,
            v.lastModified[r] && x.setRequestHeader("If-Modified-Since", v.lastModified[r]),
            v.etag[r] && x.setRequestHeader("If-None-Match", v.etag[r])),
            x.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + (c.dataTypes[0] !== "*" ? ", " + Tn + "; q=0.01" : "") : c.accepts["*"]);
            for (l in c.headers)
                x.setRequestHeader(l, c.headers[l]);
            if (!c.beforeSend || c.beforeSend.call(h, x, c) !== !1 && E !== 2) {
                S = "abort";
                for (l in {
                    success: 1,
                    error: 1,
                    complete: 1
                })
                    x[l](c[l]);
                o = kn(xn, c, n, x);
                if (!o)
                    T(-1, "No Transport");
                else {
                    x.readyState = 1,
                    f && p.trigger("ajaxSend", [x, c]),
                    c.async && c.timeout > 0 && (u = setTimeout(function() {
                        x.abort("timeout")
                    }, c.timeout));
                    try {
                        E = 1,
                        o.send(b, T)
                    } catch (k) {
                        if (!(E < 2))
                            throw k;
                        T(-1, k)
                    }
                }
                return x
            }
            return x.abort()
        },
        active: 0,
        lastModified: {},
        etag: {}
    });
    var Mn = []
      , _n = /\?/
      , Dn = /(=)\?(?=&|$)|\?\?/
      , Pn = v.now();
    v.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Mn.pop() || v.expando + "_" + Pn++;
            return this[e] = !0,
            e
        }
    }),
    v.ajaxPrefilter("json jsonp", function(n, r, i) {
        var s, o, u, a = n.data, f = n.url, l = n.jsonp !== !1, c = l && Dn.test(f), h = l && !c && typeof a == "string" && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Dn.test(a);
        if (n.dataTypes[0] === "jsonp" || c || h)
            return s = n.jsonpCallback = v.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback,
            o = e[s],
            c ? n.url = f.replace(Dn, "$1" + s) : h ? n.data = a.replace(Dn, "$1" + s) : l && (n.url += (_n.test(f) ? "&" : "?") + n.jsonp + "=" + s),
            n.converters["script json"] = function() {
                return u || v.error(s + " was not called"),
                u[0]
            }
            ,
            n.dataTypes[0] = "json",
            e[s] = function() {
                u = arguments
            }
            ,
            i.always(function() {
                e[s] = o,
                n[s] && (n.jsonpCallback = r.jsonpCallback,
                Mn.push(s)),
                u && v.isFunction(o) && o(u[0]),
                u = o = t
            }),
            "script"
    }),
    v.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function(e) {
                return v.globalEval(e),
                e
            }
        }
    }),
    v.ajaxPrefilter("script", function(e) {
        e.cache === t && (e.cache = !1),
        e.crossDomain && (e.type = "GET",
        e.global = !1)
    }),
    v.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var n, r = i.head || i.getElementsByTagName("head")[0] || i.documentElement;
            return {
                send: function(s, o) {
                    n = i.createElement("script"),
                    n.async = "async",
                    e.scriptCharset && (n.charset = e.scriptCharset),
                    n.src = e.url,
                    n.onload = n.onreadystatechange = function(e, i) {
                        if (i || !n.readyState || /loaded|complete/.test(n.readyState))
                            n.onload = n.onreadystatechange = null,
                            r && n.parentNode && r.removeChild(n),
                            n = t,
                            i || o(200, "success")
                    }
                    ,
                    r.insertBefore(n, r.firstChild)
                },
                abort: function() {
                    n && n.onload(0, 1)
                }
            }
        }
    });
    var Hn, Bn = e.ActiveXObject ? function() {
        for (var e in Hn)
            Hn[e](0, 1)
    }
    : !1, jn = 0;
    v.ajaxSettings.xhr = e.ActiveXObject ? function() {
        return !this.isLocal && Fn() || In()
    }
    : Fn,
    function(e) {
        v.extend(v.support, {
            ajax: !!e,
            cors: !!e && "withCredentials"in e
        })
    }(v.ajaxSettings.xhr()),
    v.support.ajax && v.ajaxTransport(function(n) {
        if (!n.crossDomain || v.support.cors) {
            var r;
            return {
                send: function(i, s) {
                    var o, u, a = n.xhr();
                    n.username ? a.open(n.type, n.url, n.async, n.username, n.password) : a.open(n.type, n.url, n.async);
                    if (n.xhrFields)
                        for (u in n.xhrFields)
                            a[u] = n.xhrFields[u];
                    n.mimeType && a.overrideMimeType && a.overrideMimeType(n.mimeType),
                    !n.crossDomain && !i["X-Requested-With"] && (i["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (u in i)
                            a.setRequestHeader(u, i[u])
                    } catch (f) {}
                    a.send(n.hasContent && n.data || null),
                    r = function(e, i) {
                        var u, f, l, c, h;
                        try {
                            if (r && (i || a.readyState === 4)) {
                                r = t,
                                o && (a.onreadystatechange = v.noop,
                                Bn && delete Hn[o]);
                                if (i)
                                    a.readyState !== 4 && a.abort();
                                else {
                                    u = a.status,
                                    l = a.getAllResponseHeaders(),
                                    c = {},
                                    h = a.responseXML,
                                    h && h.documentElement && (c.xml = h);
                                    try {
                                        c.text = a.responseText
                                    } catch (e) {}
                                    try {
                                        f = a.statusText
                                    } catch (p) {
                                        f = ""
                                    }
                                    !u && n.isLocal && !n.crossDomain ? u = c.text ? 200 : 404 : u === 1223 && (u = 204)
                                }
                            }
                        } catch (d) {
                            i || s(-1, d)
                        }
                        c && s(u, f, c, l)
                    }
                    ,
                    n.async ? a.readyState === 4 ? setTimeout(r, 0) : (o = ++jn,
                    Bn && (Hn || (Hn = {},
                    v(e).unload(Bn)),
                    Hn[o] = r),
                    a.onreadystatechange = r) : r()
                },
                abort: function() {
                    r && r(0, 1)
                }
            }
        }
    });
    var qn, Rn, Un = /^(?:toggle|show|hide)$/, zn = new RegExp("^(?:([-+])=|)(" + m + ")([a-z%]*)$","i"), Wn = /queueHooks$/, Xn = [Gn], Vn = {
        "*": [function(e, t) {
            var n, r, i = this.createTween(e, t), s = zn.exec(t), o = i.cur(), u = +o || 0, a = 1, f = 20;
            if (s) {
                n = +s[2],
                r = s[3] || (v.cssNumber[e] ? "" : "px");
                if (r !== "px" && u) {
                    u = v.css(i.elem, e, !0) || n || 1;
                    do
                        a = a || ".5",
                        u /= a,
                        v.style(i.elem, e, u + r);
                    while (a !== (a = i.cur() / o) && a !== 1 && --f)
                }
                i.unit = r,
                i.start = u,
                i.end = s[1] ? u + (s[1] + 1) * n : n
            }
            return i
        }
        ]
    };
    v.Animation = v.extend(Kn, {
        tweener: function(e, t) {
            v.isFunction(e) ? (t = e,
            e = ["*"]) : e = e.split(" ");
            var n, r = 0, i = e.length;
            for (; r < i; r++)
                n = e[r],
                Vn[n] = Vn[n] || [],
                Vn[n].unshift(t)
        },
        prefilter: function(e, t) {
            t ? Xn.unshift(e) : Xn.push(e)
        }
    }),
    v.Tween = Yn,
    Yn.prototype = {
        constructor: Yn,
        init: function(e, t, n, r, i, s) {
            this.elem = e,
            this.prop = n,
            this.easing = i || "swing",
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = s || (v.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = Yn.propHooks[this.prop];
            return e && e.get ? e.get(this) : Yn.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = Yn.propHooks[this.prop];
            return this.options.duration ? this.pos = t = v.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : Yn.propHooks._default.set(this),
            this
        }
    },
    Yn.prototype.init.prototype = Yn.prototype,
    Yn.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return e.elem[e.prop] == null || !!e.elem.style && e.elem.style[e.prop] != null ? (t = v.css(e.elem, e.prop, !1, ""),
                !t || t === "auto" ? 0 : t) : e.elem[e.prop]
            },
            set: function(e) {
                v.fx.step[e.prop] ? v.fx.step[e.prop](e) : e.elem.style && (e.elem.style[v.cssProps[e.prop]] != null || v.cssHooks[e.prop]) ? v.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    },
    Yn.propHooks.scrollTop = Yn.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    v.each(["toggle", "show", "hide"], function(e, t) {
        var n = v.fn[t];
        v.fn[t] = function(r, i, s) {
            return r == null || typeof r == "boolean" || !e && v.isFunction(r) && v.isFunction(i) ? n.apply(this, arguments) : this.animate(Zn(t, !0), r, i, s)
        }
    }),
    v.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(Gt).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(e, t, n, r) {
            var i = v.isEmptyObject(e)
              , s = v.speed(t, n, r)
              , o = function() {
                var t = Kn(this, v.extend({}, e), s);
                i && t.stop(!0)
            };
            return i || s.queue === !1 ? this.each(o) : this.queue(s.queue, o)
        },
        stop: function(e, n, r) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop,
                t(r)
            };
            return typeof e != "string" && (r = n,
            n = e,
            e = t),
            n && e !== !1 && this.queue(e || "fx", []),
            this.each(function() {
                var t = !0
                  , n = e != null && e + "queueHooks"
                  , s = v.timers
                  , o = v._data(this);
                if (n)
                    o[n] && o[n].stop && i(o[n]);
                else
                    for (n in o)
                        o[n] && o[n].stop && Wn.test(n) && i(o[n]);
                for (n = s.length; n--; )
                    s[n].elem === this && (e == null || s[n].queue === e) && (s[n].anim.stop(r),
                    t = !1,
                    s.splice(n, 1));
                (t || !r) && v.dequeue(this, e)
            })
        }
    }),
    v.each({
        slideDown: Zn("show"),
        slideUp: Zn("hide"),
        slideToggle: Zn("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        v.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }),
    v.speed = function(e, t, n) {
        var r = e && typeof e == "object" ? v.extend({}, e) : {
            complete: n || !n && t || v.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !v.isFunction(t) && t
        };
        r.duration = v.fx.off ? 0 : typeof r.duration == "number" ? r.duration : r.duration in v.fx.speeds ? v.fx.speeds[r.duration] : v.fx.speeds._default;
        if (r.queue == null || r.queue === !0)
            r.queue = "fx";
        return r.old = r.complete,
        r.complete = function() {
            v.isFunction(r.old) && r.old.call(this),
            r.queue && v.dequeue(this, r.queue)
        }
        ,
        r
    }
    ,
    v.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    },
    v.timers = [],
    v.fx = Yn.prototype.init,
    v.fx.tick = function() {
        var e, t = v.timers, n = 0;
        for (; n < t.length; n++)
            e = t[n],
            !e() && t[n] === e && t.splice(n--, 1);
        t.length || v.fx.stop()
    }
    ,
    v.fx.timer = function(e) {
        e() && v.timers.push(e) && !Rn && (Rn = setInterval(v.fx.tick, v.fx.interval))
    }
    ,
    v.fx.interval = 13,
    v.fx.stop = function() {
        clearInterval(Rn),
        Rn = null
    }
    ,
    v.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    v.fx.step = {},
    v.expr && v.expr.filters && (v.expr.filters.animated = function(e) {
        return v.grep(v.timers, function(t) {
            return e === t.elem
        }).length
    }
    );
    var er = /^(?:body|html)$/i;
    v.fn.offset = function(e) {
        if (arguments.length)
            return e === t ? this : this.each(function(t) {
                v.offset.setOffset(this, e, t)
            });
        var n, r, i, s, o, u, a, f = {
            top: 0,
            left: 0
        }, l = this[0], c = l && l.ownerDocument;
        if (!c)
            return;
        return (r = c.body) === l ? v.offset.bodyOffset(l) : (n = c.documentElement,
        v.contains(n, l) ? (typeof l.getBoundingClientRect != "undefined" && (f = l.getBoundingClientRect()),
        i = tr(c),
        s = n.clientTop || r.clientTop || 0,
        o = n.clientLeft || r.clientLeft || 0,
        u = i.pageYOffset || n.scrollTop,
        a = i.pageXOffset || n.scrollLeft,
        {
            top: f.top + u - s,
            left: f.left + a - o
        }) : f)
    }
    ,
    v.offset = {
        bodyOffset: function(e) {
            var t = e.offsetTop
              , n = e.offsetLeft;
            return v.support.doesNotIncludeMarginInBodyOffset && (t += parseFloat(v.css(e, "marginTop")) || 0,
            n += parseFloat(v.css(e, "marginLeft")) || 0),
            {
                top: t,
                left: n
            }
        },
        setOffset: function(e, t, n) {
            var r = v.css(e, "position");
            r === "static" && (e.style.position = "relative");
            var i = v(e), s = i.offset(), o = v.css(e, "top"), u = v.css(e, "left"), a = (r === "absolute" || r === "fixed") && v.inArray("auto", [o, u]) > -1, f = {}, l = {}, c, h;
            a ? (l = i.position(),
            c = l.top,
            h = l.left) : (c = parseFloat(o) || 0,
            h = parseFloat(u) || 0),
            v.isFunction(t) && (t = t.call(e, n, s)),
            t.top != null && (f.top = t.top - s.top + c),
            t.left != null && (f.left = t.left - s.left + h),
            "using"in t ? t.using.call(e, f) : i.css(f)
        }
    },
    v.fn.extend({
        position: function() {
            if (!this[0])
                return;
            var e = this[0]
              , t = this.offsetParent()
              , n = this.offset()
              , r = er.test(t[0].nodeName) ? {
                top: 0,
                left: 0
            } : t.offset();
            return n.top -= parseFloat(v.css(e, "marginTop")) || 0,
            n.left -= parseFloat(v.css(e, "marginLeft")) || 0,
            r.top += parseFloat(v.css(t[0], "borderTopWidth")) || 0,
            r.left += parseFloat(v.css(t[0], "borderLeftWidth")) || 0,
            {
                top: n.top - r.top,
                left: n.left - r.left
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent || i.body;
                while (e && !er.test(e.nodeName) && v.css(e, "position") === "static")
                    e = e.offsetParent;
                return e || i.body
            })
        }
    }),
    v.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, n) {
        var r = /Y/.test(n);
        v.fn[e] = function(i) {
            return v.access(this, function(e, i, s) {
                var o = tr(e);
                if (s === t)
                    return o ? n in o ? o[n] : o.document.documentElement[i] : e[i];
                o ? o.scrollTo(r ? v(o).scrollLeft() : s, r ? s : v(o).scrollTop()) : e[i] = s
            }, e, i, arguments.length, null)
        }
    }),
    v.each({
        Height: "height",
        Width: "width"
    }, function(e, n) {
        v.each({
            padding: "inner" + e,
            content: n,
            "": "outer" + e
        }, function(r, i) {
            v.fn[i] = function(i, s) {
                var o = arguments.length && (r || typeof i != "boolean")
                  , u = r || (i === !0 || s === !0 ? "margin" : "border");
                return v.access(this, function(n, r, i) {
                    var s;
                    return v.isWindow(n) ? n.document.documentElement["client" + e] : n.nodeType === 9 ? (s = n.documentElement,
                    Math.max(n.body["scroll" + e], s["scroll" + e], n.body["offset" + e], s["offset" + e], s["client" + e])) : i === t ? v.css(n, r, i, u) : v.style(n, r, i, u)
                }, n, o ? i : t, o, null)
            }
        })
    }),
    e.jQuery = e.$ = v,
    typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function() {
        return v
    })
}(window),
function(e, t) {
    function i(t, n) {
        var r, i, o, u = t.nodeName.toLowerCase();
        return "area" === u ? (r = t.parentNode,
        i = r.name,
        !t.href || !i || r.nodeName.toLowerCase() !== "map" ? !1 : (o = e("img[usemap=#" + i + "]")[0],
        !!o && s(o))) : (/input|select|textarea|button|object/.test(u) ? !t.disabled : "a" === u ? t.href || n : n) && s(t)
    }
    function s(t) {
        return e.expr.filters.visible(t) && !e(t).parents().andSelf().filter(function() {
            return e.css(this, "visibility") === "hidden"
        }).length
    }
    var n = 0
      , r = /^ui-id-\d+$/;
    e.ui = e.ui || {};
    if (e.ui.version)
        return;
    e.extend(e.ui, {
        version: "1.9.1",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }),
    e.fn.extend({
        _focus: e.fn.focus,
        focus: function(t, n) {
            return typeof t == "number" ? this.each(function() {
                var r = this;
                setTimeout(function() {
                    e(r).focus(),
                    n && n.call(r)
                }, t)
            }) : this._focus.apply(this, arguments)
        },
        scrollParent: function() {
            var t;
            return e.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? t = this.parents().filter(function() {
                return /(relative|absolute|fixed)/.test(e.css(this, "position")) && /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
            }).eq(0) : t = this.parents().filter(function() {
                return /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
            }).eq(0),
            /fixed/.test(this.css("position")) || !t.length ? e(document) : t
        },
        zIndex: function(n) {
            if (n !== t)
                return this.css("zIndex", n);
            if (this.length) {
                var r = e(this[0]), i, s;
                while (r.length && r[0] !== document) {
                    i = r.css("position");
                    if (i === "absolute" || i === "relative" || i === "fixed") {
                        s = parseInt(r.css("zIndex"), 10);
                        if (!isNaN(s) && s !== 0)
                            return s
                    }
                    r = r.parent()
                }
            }
            return 0
        },
        uniqueId: function() {
            return this.each(function() {
                this.id || (this.id = "ui-id-" + ++n)
            })
        },
        removeUniqueId: function() {
            return this.each(function() {
                r.test(this.id) && e(this).removeAttr("id")
            })
        }
    }),
    e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function(n, r) {
        function u(t, n, r, s) {
            return e.each(i, function() {
                n -= parseFloat(e.css(t, "padding" + this)) || 0,
                r && (n -= parseFloat(e.css(t, "border" + this + "Width")) || 0),
                s && (n -= parseFloat(e.css(t, "margin" + this)) || 0)
            }),
            n
        }
        var i = r === "Width" ? ["Left", "Right"] : ["Top", "Bottom"]
          , s = r.toLowerCase()
          , o = {
            innerWidth: e.fn.innerWidth,
            innerHeight: e.fn.innerHeight,
            outerWidth: e.fn.outerWidth,
            outerHeight: e.fn.outerHeight
        };
        e.fn["inner" + r] = function(n) {
            return n === t ? o["inner" + r].call(this) : this.each(function() {
                e(this).css(s, u(this, n) + "px")
            })
        }
        ,
        e.fn["outer" + r] = function(t, n) {
            return typeof t != "number" ? o["outer" + r].call(this, t) : this.each(function() {
                e(this).css(s, u(this, t, !0, n) + "px")
            })
        }
    }),
    e.extend(e.expr[":"], {
        data: e.expr.createPseudo ? e.expr.createPseudo(function(t) {
            return function(n) {
                return !!e.data(n, t)
            }
        }) : function(t, n, r) {
            return !!e.data(t, r[3])
        }
        ,
        focusable: function(t) {
            return i(t, !isNaN(e.attr(t, "tabindex")))
        },
        tabbable: function(t) {
            var n = e.attr(t, "tabindex")
              , r = isNaN(n);
            return (r || n >= 0) && i(t, !r)
        }
    }),
    e(function() {
        var t = document.body
          , n = t.appendChild(n = document.createElement("div"));
        n.offsetHeight,
        e.extend(n.style, {
            minHeight: "100px",
            height: "auto",
            padding: 0,
            borderWidth: 0
        }),
        e.support.minHeight = n.offsetHeight === 100,
        e.support.selectstart = "onselectstart"in n,
        t.removeChild(n).style.display = "none"
    }),
    function() {
        var t = /msie ([\w.]+)/.exec(navigator.userAgent.toLowerCase()) || [];
        e.ui.ie = t.length ? !0 : !1,
        e.ui.ie6 = parseFloat(t[1], 10) === 6
    }(),
    e.fn.extend({
        disableSelection: function() {
            return this.bind((e.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(e) {
                e.preventDefault()
            })
        },
        enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        }
    }),
    e.extend(e.ui, {
        plugin: {
            add: function(t, n, r) {
                var i, s = e.ui[t].prototype;
                for (i in r)
                    s.plugins[i] = s.plugins[i] || [],
                    s.plugins[i].push([n, r[i]])
            },
            call: function(e, t, n) {
                var r, i = e.plugins[t];
                if (!i || !e.element[0].parentNode || e.element[0].parentNode.nodeType === 11)
                    return;
                for (r = 0; r < i.length; r++)
                    e.options[i[r][0]] && i[r][1].apply(e.element, n)
            }
        },
        contains: e.contains,
        hasScroll: function(t, n) {
            if (e(t).css("overflow") === "hidden")
                return !1;
            var r = n && n === "left" ? "scrollLeft" : "scrollTop"
              , i = !1;
            return t[r] > 0 ? !0 : (t[r] = 1,
            i = t[r] > 0,
            t[r] = 0,
            i)
        },
        isOverAxis: function(e, t, n) {
            return e > t && e < t + n
        },
        isOver: function(t, n, r, i, s, o) {
            return e.ui.isOverAxis(t, r, s) && e.ui.isOverAxis(n, i, o)
        }
    })
}(jQuery),
function(e, t) {
    var n = 0
      , r = Array.prototype.slice
      , i = e.cleanData;
    e.cleanData = function(t) {
        for (var n = 0, r; (r = t[n]) != null; n++)
            try {
                e(r).triggerHandler("remove")
            } catch (s) {}
        i(t)
    }
    ,
    e.widget = function(t, n, r) {
        var i, s, o, u, a = t.split(".")[0];
        t = t.split(".")[1],
        i = a + "-" + t,
        r || (r = n,
        n = e.Widget),
        e.expr[":"][i.toLowerCase()] = function(t) {
            return !!e.data(t, i)
        }
        ,
        e[a] = e[a] || {},
        s = e[a][t],
        o = e[a][t] = function(e, t) {
            if (!this._createWidget)
                return new o(e,t);
            arguments.length && this._createWidget(e, t)
        }
        ,
        e.extend(o, s, {
            version: r.version,
            _proto: e.extend({}, r),
            _childConstructors: []
        }),
        u = new n,
        u.options = e.widget.extend({}, u.options),
        e.each(r, function(t, i) {
            e.isFunction(i) && (r[t] = function() {
                var e = function() {
                    return n.prototype[t].apply(this, arguments)
                }
                  , r = function(e) {
                    return n.prototype[t].apply(this, e)
                };
                return function() {
                    var t = this._super, n = this._superApply, s;
                    return this._super = e,
                    this._superApply = r,
                    s = i.apply(this, arguments),
                    this._super = t,
                    this._superApply = n,
                    s
                }
            }())
        }),
        o.prototype = e.widget.extend(u, {
            widgetEventPrefix: u.widgetEventPrefix || t
        }, r, {
            constructor: o,
            namespace: a,
            widgetName: t,
            widgetBaseClass: i,
            widgetFullName: i
        }),
        s ? (e.each(s._childConstructors, function(t, n) {
            var r = n.prototype;
            e.widget(r.namespace + "." + r.widgetName, o, n._proto)
        }),
        delete s._childConstructors) : n._childConstructors.push(o),
        e.widget.bridge(t, o)
    }
    ,
    e.widget.extend = function(n) {
        var i = r.call(arguments, 1), s = 0, o = i.length, u, a;
        for (; s < o; s++)
            for (u in i[s])
                a = i[s][u],
                i[s].hasOwnProperty(u) && a !== t && (e.isPlainObject(a) ? n[u] = e.isPlainObject(n[u]) ? e.widget.extend({}, n[u], a) : e.widget.extend({}, a) : n[u] = a);
        return n
    }
    ,
    e.widget.bridge = function(n, i) {
        var s = i.prototype.widgetFullName;
        e.fn[n] = function(o) {
            var u = typeof o == "string"
              , a = r.call(arguments, 1)
              , f = this;
            return o = !u && a.length ? e.widget.extend.apply(null, [o].concat(a)) : o,
            u ? this.each(function() {
                var r, i = e.data(this, s);
                if (!i)
                    return e.error("cannot call methods on " + n + " prior to initialization; " + "attempted to call method '" + o + "'");
                if (!e.isFunction(i[o]) || o.charAt(0) === "_")
                    return e.error("no such method '" + o + "' for " + n + " widget instance");
                r = i[o].apply(i, a);
                if (r !== i && r !== t)
                    return f = r && r.jquery ? f.pushStack(r.get()) : r,
                    !1
            }) : this.each(function() {
                var t = e.data(this, s);
                t ? t.option(o || {})._init() : new i(o,this)
            }),
            f
        }
    }
    ,
    e.Widget = function() {}
    ,
    e.Widget._childConstructors = [],
    e.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function(t, r) {
            r = e(r || this.defaultElement || this)[0],
            this.element = e(r),
            this.uuid = n++,
            this.eventNamespace = "." + this.widgetName + this.uuid,
            this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t),
            this.bindings = e(),
            this.hoverable = e(),
            this.focusable = e(),
            r !== this && (e.data(r, this.widgetName, this),
            e.data(r, this.widgetFullName, this),
            this._on(this.element, {
                remove: function(e) {
                    e.target === r && this.destroy()
                }
            }),
            this.document = e(r.style ? r.ownerDocument : r.document || r),
            this.window = e(this.document[0].defaultView || this.document[0].parentWindow)),
            this._create(),
            this._trigger("create", null, this._getCreateEventData()),
            this._init()
        },
        _getCreateOptions: e.noop,
        _getCreateEventData: e.noop,
        _create: e.noop,
        _init: e.noop,
        destroy: function() {
            this._destroy(),
            this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),
            this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"),
            this.bindings.unbind(this.eventNamespace),
            this.hoverable.removeClass("ui-state-hover"),
            this.focusable.removeClass("ui-state-focus")
        },
        _destroy: e.noop,
        widget: function() {
            return this.element
        },
        option: function(n, r) {
            var i = n, s, o, u;
            if (arguments.length === 0)
                return e.widget.extend({}, this.options);
            if (typeof n == "string") {
                i = {},
                s = n.split("."),
                n = s.shift();
                if (s.length) {
                    o = i[n] = e.widget.extend({}, this.options[n]);
                    for (u = 0; u < s.length - 1; u++)
                        o[s[u]] = o[s[u]] || {},
                        o = o[s[u]];
                    n = s.pop();
                    if (r === t)
                        return o[n] === t ? null : o[n];
                    o[n] = r
                } else {
                    if (r === t)
                        return this.options[n] === t ? null : this.options[n];
                    i[n] = r
                }
            }
            return this._setOptions(i),
            this
        },
        _setOptions: function(e) {
            var t;
            for (t in e)
                this._setOption(t, e[t]);
            return this
        },
        _setOption: function(e, t) {
            return this.options[e] = t,
            e === "disabled" && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!t).attr("aria-disabled", t),
            this.hoverable.removeClass("ui-state-hover"),
            this.focusable.removeClass("ui-state-focus")),
            this
        },
        enable: function() {
            return this._setOption("disabled", !1)
        },
        disable: function() {
            return this._setOption("disabled", !0)
        },
        _on: function(t, n) {
            var r, i = this;
            n ? (t = r = e(t),
            this.bindings = this.bindings.add(t)) : (n = t,
            t = this.element,
            r = this.widget()),
            e.each(n, function(n, s) {
                function o() {
                    if (i.options.disabled === !0 || e(this).hasClass("ui-state-disabled"))
                        return;
                    return (typeof s == "string" ? i[s] : s).apply(i, arguments)
                }
                typeof s != "string" && (o.guid = s.guid = s.guid || o.guid || e.guid++);
                var u = n.match(/^(\w+)\s*(.*)$/)
                  , a = u[1] + i.eventNamespace
                  , f = u[2];
                f ? r.delegate(f, a, o) : t.bind(a, o)
            })
        },
        _off: function(e, t) {
            t = (t || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace,
            e.unbind(t).undelegate(t)
        },
        _delay: function(e, t) {
            function n() {
                return (typeof e == "string" ? r[e] : e).apply(r, arguments)
            }
            var r = this;
            return setTimeout(n, t || 0)
        },
        _hoverable: function(t) {
            this.hoverable = this.hoverable.add(t),
            this._on(t, {
                mouseenter: function(t) {
                    e(t.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function(t) {
                    e(t.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function(t) {
            this.focusable = this.focusable.add(t),
            this._on(t, {
                focusin: function(t) {
                    e(t.currentTarget).addClass("ui-state-focus")
                },
                focusout: function(t) {
                    e(t.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function(t, n, r) {
            var i, s, o = this.options[t];
            r = r || {},
            n = e.Event(n),
            n.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(),
            n.target = this.element[0],
            s = n.originalEvent;
            if (s)
                for (i in s)
                    i in n || (n[i] = s[i]);
            return this.element.trigger(n, r),
            !(e.isFunction(o) && o.apply(this.element[0], [n].concat(r)) === !1 || n.isDefaultPrevented())
        }
    },
    e.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(t, n) {
        e.Widget.prototype["_" + t] = function(r, i, s) {
            typeof i == "string" && (i = {
                effect: i
            });
            var o, u = i ? i === !0 || typeof i == "number" ? n : i.effect || n : t;
            i = i || {},
            typeof i == "number" && (i = {
                duration: i
            }),
            o = !e.isEmptyObject(i),
            i.complete = s,
            i.delay && r.delay(i.delay),
            o && e.effects && (e.effects.effect[u] || e.uiBackCompat !== !1 && e.effects[u]) ? r[t](i) : u !== t && r[u] ? r[u](i.duration, i.easing, s) : r.queue(function(n) {
                e(this)[t](),
                s && s.call(r[0]),
                n()
            })
        }
    }),
    e.uiBackCompat !== !1 && (e.Widget.prototype._getCreateOptions = function() {
        return e.metadata && e.metadata.get(this.element[0])[this.widgetName]
    }
    )
}(jQuery),
function(e, t) {
    var n = !1;
    e(document).mouseup(function(e) {
        n = !1
    }),
    e.widget("ui.mouse", {
        version: "1.9.1",
        options: {
            cancel: "input,textarea,button,select,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var t = this;
            this.element.bind("mousedown." + this.widgetName, function(e) {
                return t._mouseDown(e)
            }).bind("click." + this.widgetName, function(n) {
                if (!0 === e.data(n.target, t.widgetName + ".preventClickEvent"))
                    return e.removeData(n.target, t.widgetName + ".preventClickEvent"),
                    n.stopImmediatePropagation(),
                    !1
            }),
            this.started = !1
        },
        _mouseDestroy: function() {
            this.element.unbind("." + this.widgetName),
            this._mouseMoveDelegate && e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function(t) {
            if (n)
                return;
            this._mouseStarted && this._mouseUp(t),
            this._mouseDownEvent = t;
            var r = this
              , i = t.which === 1
              , s = typeof this.options.cancel == "string" && t.target.nodeName ? e(t.target).closest(this.options.cancel).length : !1;
            if (!i || s || !this._mouseCapture(t))
                return !0;
            this.mouseDelayMet = !this.options.delay,
            this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                r.mouseDelayMet = !0
            }, this.options.delay));
            if (this._mouseDistanceMet(t) && this._mouseDelayMet(t)) {
                this._mouseStarted = this._mouseStart(t) !== !1;
                if (!this._mouseStarted)
                    return t.preventDefault(),
                    !0
            }
            return !0 === e.data(t.target, this.widgetName + ".preventClickEvent") && e.removeData(t.target, this.widgetName + ".preventClickEvent"),
            this._mouseMoveDelegate = function(e) {
                return r._mouseMove(e)
            }
            ,
            this._mouseUpDelegate = function(e) {
                return r._mouseUp(e)
            }
            ,
            e(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate),
            t.preventDefault(),
            n = !0,
            !0
        },
        _mouseMove: function(t) {
            return !e.ui.ie || document.documentMode >= 9 || !!t.button ? this._mouseStarted ? (this._mouseDrag(t),
            t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1,
            this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)),
            !this._mouseStarted) : this._mouseUp(t)
        },
        _mouseUp: function(t) {
            return e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate),
            this._mouseStarted && (this._mouseStarted = !1,
            t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0),
            this._mouseStop(t)),
            !1
        },
        _mouseDistanceMet: function(e) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function(e) {
            return this.mouseDelayMet
        },
        _mouseStart: function(e) {},
        _mouseDrag: function(e) {},
        _mouseStop: function(e) {},
        _mouseCapture: function(e) {
            return !0
        }
    })
}(jQuery),
function(e, t) {
    e.widget("ui.draggable", e.ui.mouse, {
        version: "1.9.1",
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1
        },
        _create: function() {
            this.options.helper == "original" && !/^(?:r|a|f)/.test(this.element.css("position")) && (this.element[0].style.position = "relative"),
            this.options.addClasses && this.element.addClass("ui-draggable"),
            this.options.disabled && this.element.addClass("ui-draggable-disabled"),
            this._mouseInit()
        },
        _destroy: function() {
            this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),
            this._mouseDestroy()
        },
        _mouseCapture: function(t) {
            var n = this.options;
            return this.helper || n.disabled || e(t.target).is(".ui-resizable-handle") ? !1 : (this.handle = this._getHandle(t),
            this.handle ? (e(n.iframeFix === !0 ? "iframe" : n.iframeFix).each(function() {
                e('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({
                    width: this.offsetWidth + "px",
                    height: this.offsetHeight + "px",
                    position: "absolute",
                    opacity: "0.001",
                    zIndex: 1e3
                }).css(e(this).offset()).appendTo("body")
            }),
            !0) : !1)
        },
        _mouseStart: function(t) {
            var n = this.options;
            return this.helper = this._createHelper(t),
            this.helper.addClass("ui-draggable-dragging"),
            this._cacheHelperProportions(),
            e.ui.ddmanager && (e.ui.ddmanager.current = this),
            this._cacheMargins(),
            this.cssPosition = this.helper.css("position"),
            this.scrollParent = this.helper.scrollParent(),
            this.offset = this.positionAbs = this.element.offset(),
            this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            },
            e.extend(this.offset, {
                click: {
                    left: t.pageX - this.offset.left,
                    top: t.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }),
            this.originalPosition = this.position = this._generatePosition(t),
            this.originalPageX = t.pageX,
            this.originalPageY = t.pageY,
            n.cursorAt && this._adjustOffsetFromHelper(n.cursorAt),
            n.containment && this._setContainment(),
            this._trigger("start", t) === !1 ? (this._clear(),
            !1) : (this._cacheHelperProportions(),
            e.ui.ddmanager && !n.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t),
            this._mouseDrag(t, !0),
            e.ui.ddmanager && e.ui.ddmanager.dragStart(this, t),
            !0)
        },
        _mouseDrag: function(t, n) {
            this.position = this._generatePosition(t),
            this.positionAbs = this._convertPositionTo("absolute");
            if (!n) {
                var r = this._uiHash();
                if (this._trigger("drag", t, r) === !1)
                    return this._mouseUp({}),
                    !1;
                this.position = r.position
            }
            if (!this.options.axis || this.options.axis != "y")
                this.helper[0].style.left = this.position.left + "px";
            if (!this.options.axis || this.options.axis != "x")
                this.helper[0].style.top = this.position.top + "px";
            return e.ui.ddmanager && e.ui.ddmanager.drag(this, t),
            !1
        },
        _mouseStop: function(t) {
            var n = !1;
            e.ui.ddmanager && !this.options.dropBehaviour && (n = e.ui.ddmanager.drop(this, t)),
            this.dropped && (n = this.dropped,
            this.dropped = !1);
            var r = this.element[0]
              , i = !1;
            while (r && (r = r.parentNode))
                r == document && (i = !0);
            if (!i && this.options.helper === "original")
                return !1;
            if (this.options.revert == "invalid" && !n || this.options.revert == "valid" && n || this.options.revert === !0 || e.isFunction(this.options.revert) && this.options.revert.call(this.element, n)) {
                var s = this;
                e(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                    s._trigger("stop", t) !== !1 && s._clear()
                })
            } else
                this._trigger("stop", t) !== !1 && this._clear();
            return !1
        },
        _mouseUp: function(t) {
            return e("div.ui-draggable-iframeFix").each(function() {
                this.parentNode.removeChild(this)
            }),
            e.ui.ddmanager && e.ui.ddmanager.dragStop(this, t),
            e.ui.mouse.prototype._mouseUp.call(this, t)
        },
        cancel: function() {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(),
            this
        },
        _getHandle: function(t) {
            var n = !this.options.handle || !e(this.options.handle, this.element).length ? !0 : !1;
            return e(this.options.handle, this.element).find("*").andSelf().each(function() {
                this == t.target && (n = !0)
            }),
            n
        },
        _createHelper: function(t) {
            var n = this.options
              , r = e.isFunction(n.helper) ? e(n.helper.apply(this.element[0], [t])) : n.helper == "clone" ? this.element.clone().removeAttr("id") : this.element;
            return r.parents("body").length || r.appendTo(n.appendTo == "parent" ? this.element[0].parentNode : n.appendTo),
            r[0] != this.element[0] && !/(fixed|absolute)/.test(r.css("position")) && r.css("position", "absolute"),
            r
        },
        _adjustOffsetFromHelper: function(t) {
            typeof t == "string" && (t = t.split(" ")),
            e.isArray(t) && (t = {
                left: +t[0],
                top: +t[1] || 0
            }),
            "left"in t && (this.offset.click.left = t.left + this.margins.left),
            "right"in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left),
            "top"in t && (this.offset.click.top = t.top + this.margins.top),
            "bottom"in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var t = this.offsetParent.offset();
            this.cssPosition == "absolute" && this.scrollParent[0] != document && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(),
            t.top += this.scrollParent.scrollTop());
            if (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() == "html" && e.ui.ie)
                t = {
                    top: 0,
                    left: 0
                };
            return {
                top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if (this.cssPosition == "relative") {
                var e = this.element.position();
                return {
                    top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var t = this.options;
            t.containment == "parent" && (t.containment = this.helper[0].parentNode);
            if (t.containment == "document" || t.containment == "window")
                this.containment = [t.containment == "document" ? 0 : e(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, t.containment == "document" ? 0 : e(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, (t.containment == "document" ? 0 : e(window).scrollLeft()) + e(t.containment == "document" ? document : window).width() - this.helperProportions.width - this.margins.left, (t.containment == "document" ? 0 : e(window).scrollTop()) + (e(t.containment == "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
            if (!/^(document|window|parent)$/.test(t.containment) && t.containment.constructor != Array) {
                var n = e(t.containment)
                  , r = n[0];
                if (!r)
                    return;
                var i = n.offset()
                  , s = e(r).css("overflow") != "hidden";
                this.containment = [(parseInt(e(r).css("borderLeftWidth"), 10) || 0) + (parseInt(e(r).css("paddingLeft"), 10) || 0), (parseInt(e(r).css("borderTopWidth"), 10) || 0) + (parseInt(e(r).css("paddingTop"), 10) || 0), (s ? Math.max(r.scrollWidth, r.offsetWidth) : r.offsetWidth) - (parseInt(e(r).css("borderLeftWidth"), 10) || 0) - (parseInt(e(r).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (s ? Math.max(r.scrollHeight, r.offsetHeight) : r.offsetHeight) - (parseInt(e(r).css("borderTopWidth"), 10) || 0) - (parseInt(e(r).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom],
                this.relative_container = n
            } else
                t.containment.constructor == Array && (this.containment = t.containment)
        },
        _convertPositionTo: function(t, n) {
            n || (n = this.position);
            var r = t == "absolute" ? 1 : -1
              , i = this.options
              , s = this.cssPosition != "absolute" || this.scrollParent[0] != document && !!e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent
              , o = /(html|body)/i.test(s[0].tagName);
            return {
                top: n.top + this.offset.relative.top * r + this.offset.parent.top * r - (this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : o ? 0 : s.scrollTop()) * r,
                left: n.left + this.offset.relative.left * r + this.offset.parent.left * r - (this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : o ? 0 : s.scrollLeft()) * r
            }
        },
        _generatePosition: function(t) {
            var n = this.options
              , r = this.cssPosition != "absolute" || this.scrollParent[0] != document && !!e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent
              , i = /(html|body)/i.test(r[0].tagName)
              , s = t.pageX
              , o = t.pageY;
            if (this.originalPosition) {
                var u;
                if (this.containment) {
                    if (this.relative_container) {
                        var a = this.relative_container.offset();
                        u = [this.containment[0] + a.left, this.containment[1] + a.top, this.containment[2] + a.left, this.containment[3] + a.top]
                    } else
                        u = this.containment;
                    t.pageX - this.offset.click.left < u[0] && (s = u[0] + this.offset.click.left),
                    t.pageY - this.offset.click.top < u[1] && (o = u[1] + this.offset.click.top),
                    t.pageX - this.offset.click.left > u[2] && (s = u[2] + this.offset.click.left),
                    t.pageY - this.offset.click.top > u[3] && (o = u[3] + this.offset.click.top)
                }
                if (n.grid) {
                    var f = n.grid[1] ? this.originalPageY + Math.round((o - this.originalPageY) / n.grid[1]) * n.grid[1] : this.originalPageY;
                    o = u ? f - this.offset.click.top < u[1] || f - this.offset.click.top > u[3] ? f - this.offset.click.top < u[1] ? f + n.grid[1] : f - n.grid[1] : f : f;
                    var l = n.grid[0] ? this.originalPageX + Math.round((s - this.originalPageX) / n.grid[0]) * n.grid[0] : this.originalPageX;
                    s = u ? l - this.offset.click.left < u[0] || l - this.offset.click.left > u[2] ? l - this.offset.click.left < u[0] ? l + n.grid[0] : l - n.grid[0] : l : l
                }
            }
            return {
                top: o - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : i ? 0 : r.scrollTop()),
                left: s - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : i ? 0 : r.scrollLeft())
            }
        },
        _clear: function() {
            this.helper.removeClass("ui-draggable-dragging"),
            this.helper[0] != this.element[0] && !this.cancelHelperRemoval && this.helper.remove(),
            this.helper = null,
            this.cancelHelperRemoval = !1
        },
        _trigger: function(t, n, r) {
            return r = r || this._uiHash(),
            e.ui.plugin.call(this, t, [n, r]),
            t == "drag" && (this.positionAbs = this._convertPositionTo("absolute")),
            e.Widget.prototype._trigger.call(this, t, n, r)
        },
        plugins: {},
        _uiHash: function(e) {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    }),
    e.ui.plugin.add("draggable", "connectToSortable", {
        start: function(t, n) {
            var r = e(this).data("draggable")
              , i = r.options
              , s = e.extend({}, n, {
                item: r.element
            });
            r.sortables = [],
            e(i.connectToSortable).each(function() {
                var n = e.data(this, "sortable");
                n && !n.options.disabled && (r.sortables.push({
                    instance: n,
                    shouldRevert: n.options.revert
                }),
                n.refreshPositions(),
                n._trigger("activate", t, s))
            })
        },
        stop: function(t, n) {
            var r = e(this).data("draggable")
              , i = e.extend({}, n, {
                item: r.element
            });
            e.each(r.sortables, function() {
                this.instance.isOver ? (this.instance.isOver = 0,
                r.cancelHelperRemoval = !0,
                this.instance.cancelHelperRemoval = !1,
                this.shouldRevert && (this.instance.options.revert = !0),
                this.instance._mouseStop(t),
                this.instance.options.helper = this.instance.options._helper,
                r.options.helper == "original" && this.instance.currentItem.css({
                    top: "auto",
                    left: "auto"
                })) : (this.instance.cancelHelperRemoval = !1,
                this.instance._trigger("deactivate", t, i))
            })
        },
        drag: function(t, n) {
            var r = e(this).data("draggable")
              , i = this
              , s = function(t) {
                var n = this.offset.click.top
                  , r = this.offset.click.left
                  , i = this.positionAbs.top
                  , s = this.positionAbs.left
                  , o = t.height
                  , u = t.width
                  , a = t.top
                  , f = t.left;
                return e.ui.isOver(i + n, s + r, a, f, o, u)
            };
            e.each(r.sortables, function(s) {
                var o = !1
                  , u = this;
                this.instance.positionAbs = r.positionAbs,
                this.instance.helperProportions = r.helperProportions,
                this.instance.offset.click = r.offset.click,
                this.instance._intersectsWith(this.instance.containerCache) && (o = !0,
                e.each(r.sortables, function() {
                    return this.instance.positionAbs = r.positionAbs,
                    this.instance.helperProportions = r.helperProportions,
                    this.instance.offset.click = r.offset.click,
                    this != u && this.instance._intersectsWith(this.instance.containerCache) && e.ui.contains(u.instance.element[0], this.instance.element[0]) && (o = !1),
                    o
                })),
                o ? (this.instance.isOver || (this.instance.isOver = 1,
                this.instance.currentItem = e(i).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item", !0),
                this.instance.options._helper = this.instance.options.helper,
                this.instance.options.helper = function() {
                    return n.helper[0]
                }
                ,
                t.target = this.instance.currentItem[0],
                this.instance._mouseCapture(t, !0),
                this.instance._mouseStart(t, !0, !0),
                this.instance.offset.click.top = r.offset.click.top,
                this.instance.offset.click.left = r.offset.click.left,
                this.instance.offset.parent.left -= r.offset.parent.left - this.instance.offset.parent.left,
                this.instance.offset.parent.top -= r.offset.parent.top - this.instance.offset.parent.top,
                r._trigger("toSortable", t),
                r.dropped = this.instance.element,
                r.currentItem = r.element,
                this.instance.fromOutside = r),
                this.instance.currentItem && this.instance._mouseDrag(t)) : this.instance.isOver && (this.instance.isOver = 0,
                this.instance.cancelHelperRemoval = !0,
                this.instance.options.revert = !1,
                this.instance._trigger("out", t, this.instance._uiHash(this.instance)),
                this.instance._mouseStop(t, !0),
                this.instance.options.helper = this.instance.options._helper,
                this.instance.currentItem.remove(),
                this.instance.placeholder && this.instance.placeholder.remove(),
                r._trigger("fromSortable", t),
                r.dropped = !1)
            })
        }
    }),
    e.ui.plugin.add("draggable", "cursor", {
        start: function(t, n) {
            var r = e("body")
              , i = e(this).data("draggable").options;
            r.css("cursor") && (i._cursor = r.css("cursor")),
            r.css("cursor", i.cursor)
        },
        stop: function(t, n) {
            var r = e(this).data("draggable").options;
            r._cursor && e("body").css("cursor", r._cursor)
        }
    }),
    e.ui.plugin.add("draggable", "opacity", {
        start: function(t, n) {
            var r = e(n.helper)
              , i = e(this).data("draggable").options;
            r.css("opacity") && (i._opacity = r.css("opacity")),
            r.css("opacity", i.opacity)
        },
        stop: function(t, n) {
            var r = e(this).data("draggable").options;
            r._opacity && e(n.helper).css("opacity", r._opacity)
        }
    }),
    e.ui.plugin.add("draggable", "scroll", {
        start: function(t, n) {
            var r = e(this).data("draggable");
            r.scrollParent[0] != document && r.scrollParent[0].tagName != "HTML" && (r.overflowOffset = r.scrollParent.offset())
        },
        drag: function(t, n) {
            var r = e(this).data("draggable")
              , i = r.options
              , s = !1;
            if (r.scrollParent[0] != document && r.scrollParent[0].tagName != "HTML") {
                if (!i.axis || i.axis != "x")
                    r.overflowOffset.top + r.scrollParent[0].offsetHeight - t.pageY < i.scrollSensitivity ? r.scrollParent[0].scrollTop = s = r.scrollParent[0].scrollTop + i.scrollSpeed : t.pageY - r.overflowOffset.top < i.scrollSensitivity && (r.scrollParent[0].scrollTop = s = r.scrollParent[0].scrollTop - i.scrollSpeed);
                if (!i.axis || i.axis != "y")
                    r.overflowOffset.left + r.scrollParent[0].offsetWidth - t.pageX < i.scrollSensitivity ? r.scrollParent[0].scrollLeft = s = r.scrollParent[0].scrollLeft + i.scrollSpeed : t.pageX - r.overflowOffset.left < i.scrollSensitivity && (r.scrollParent[0].scrollLeft = s = r.scrollParent[0].scrollLeft - i.scrollSpeed)
            } else {
                if (!i.axis || i.axis != "x")
                    t.pageY - e(document).scrollTop() < i.scrollSensitivity ? s = e(document).scrollTop(e(document).scrollTop() - i.scrollSpeed) : e(window).height() - (t.pageY - e(document).scrollTop()) < i.scrollSensitivity && (s = e(document).scrollTop(e(document).scrollTop() + i.scrollSpeed));
                if (!i.axis || i.axis != "y")
                    t.pageX - e(document).scrollLeft() < i.scrollSensitivity ? s = e(document).scrollLeft(e(document).scrollLeft() - i.scrollSpeed) : e(window).width() - (t.pageX - e(document).scrollLeft()) < i.scrollSensitivity && (s = e(document).scrollLeft(e(document).scrollLeft() + i.scrollSpeed))
            }
            s !== !1 && e.ui.ddmanager && !i.dropBehaviour && e.ui.ddmanager.prepareOffsets(r, t)
        }
    }),
    e.ui.plugin.add("draggable", "snap", {
        start: function(t, n) {
            var r = e(this).data("draggable")
              , i = r.options;
            r.snapElements = [],
            e(i.snap.constructor != String ? i.snap.items || ":data(draggable)" : i.snap).each(function() {
                var t = e(this)
                  , n = t.offset();
                this != r.element[0] && r.snapElements.push({
                    item: this,
                    width: t.outerWidth(),
                    height: t.outerHeight(),
                    top: n.top,
                    left: n.left
                })
            })
        },
        drag: function(t, n) {
            var r = e(this).data("draggable")
              , i = r.options
              , s = i.snapTolerance
              , o = n.offset.left
              , u = o + r.helperProportions.width
              , a = n.offset.top
              , f = a + r.helperProportions.height;
            for (var l = r.snapElements.length - 1; l >= 0; l--) {
                var c = r.snapElements[l].left
                  , h = c + r.snapElements[l].width
                  , p = r.snapElements[l].top
                  , d = p + r.snapElements[l].height;
                if (!(c - s < o && o < h + s && p - s < a && a < d + s || c - s < o && o < h + s && p - s < f && f < d + s || c - s < u && u < h + s && p - s < a && a < d + s || c - s < u && u < h + s && p - s < f && f < d + s)) {
                    r.snapElements[l].snapping && r.options.snap.release && r.options.snap.release.call(r.element, t, e.extend(r._uiHash(), {
                        snapItem: r.snapElements[l].item
                    })),
                    r.snapElements[l].snapping = !1;
                    continue
                }
                if (i.snapMode != "inner") {
                    var v = Math.abs(p - f) <= s
                      , m = Math.abs(d - a) <= s
                      , g = Math.abs(c - u) <= s
                      , y = Math.abs(h - o) <= s;
                    v && (n.position.top = r._convertPositionTo("relative", {
                        top: p - r.helperProportions.height,
                        left: 0
                    }).top - r.margins.top),
                    m && (n.position.top = r._convertPositionTo("relative", {
                        top: d,
                        left: 0
                    }).top - r.margins.top),
                    g && (n.position.left = r._convertPositionTo("relative", {
                        top: 0,
                        left: c - r.helperProportions.width
                    }).left - r.margins.left),
                    y && (n.position.left = r._convertPositionTo("relative", {
                        top: 0,
                        left: h
                    }).left - r.margins.left)
                }
                var b = v || m || g || y;
                if (i.snapMode != "outer") {
                    var v = Math.abs(p - a) <= s
                      , m = Math.abs(d - f) <= s
                      , g = Math.abs(c - o) <= s
                      , y = Math.abs(h - u) <= s;
                    v && (n.position.top = r._convertPositionTo("relative", {
                        top: p,
                        left: 0
                    }).top - r.margins.top),
                    m && (n.position.top = r._convertPositionTo("relative", {
                        top: d - r.helperProportions.height,
                        left: 0
                    }).top - r.margins.top),
                    g && (n.position.left = r._convertPositionTo("relative", {
                        top: 0,
                        left: c
                    }).left - r.margins.left),
                    y && (n.position.left = r._convertPositionTo("relative", {
                        top: 0,
                        left: h - r.helperProportions.width
                    }).left - r.margins.left)
                }
                !r.snapElements[l].snapping && (v || m || g || y || b) && r.options.snap.snap && r.options.snap.snap.call(r.element, t, e.extend(r._uiHash(), {
                    snapItem: r.snapElements[l].item
                })),
                r.snapElements[l].snapping = v || m || g || y || b
            }
        }
    }),
    e.ui.plugin.add("draggable", "stack", {
        start: function(t, n) {
            var r = e(this).data("draggable").options
              , i = e.makeArray(e(r.stack)).sort(function(t, n) {
                return (parseInt(e(t).css("zIndex"), 10) || 0) - (parseInt(e(n).css("zIndex"), 10) || 0)
            });
            if (!i.length)
                return;
            var s = parseInt(i[0].style.zIndex) || 0;
            e(i).each(function(e) {
                this.style.zIndex = s + e
            }),
            this[0].style.zIndex = s + i.length
        }
    }),
    e.ui.plugin.add("draggable", "zIndex", {
        start: function(t, n) {
            var r = e(n.helper)
              , i = e(this).data("draggable").options;
            r.css("zIndex") && (i._zIndex = r.css("zIndex")),
            r.css("zIndex", i.zIndex)
        },
        stop: function(t, n) {
            var r = e(this).data("draggable").options;
            r._zIndex && e(n.helper).css("zIndex", r._zIndex)
        }
    })
}(jQuery),
jQuery.effects || function(e, t) {
    var n = e.uiBackCompat !== !1
      , r = "ui-effects-";
    e.effects = {
        effect: {}
    },
    function(t, n) {
        function p(e, t, n) {
            var r = a[t.type] || {};
            return e == null ? n || !t.def ? null : t.def : (e = r.floor ? ~~e : parseFloat(e),
            isNaN(e) ? t.def : r.mod ? (e + r.mod) % r.mod : 0 > e ? 0 : r.max < e ? r.max : e)
        }
        function d(e) {
            var n = o()
              , r = n._rgba = [];
            return e = e.toLowerCase(),
            h(s, function(t, i) {
                var s, o = i.re.exec(e), a = o && i.parse(o), f = i.space || "rgba";
                if (a)
                    return s = n[f](a),
                    n[u[f].cache] = s[u[f].cache],
                    r = n._rgba = s._rgba,
                    !1
            }),
            r.length ? (r.join() === "0,0,0,0" && t.extend(r, c.transparent),
            n) : c[e]
        }
        function v(e, t, n) {
            return n = (n + 1) % 1,
            n * 6 < 1 ? e + (t - e) * n * 6 : n * 2 < 1 ? t : n * 3 < 2 ? e + (t - e) * (2 / 3 - n) * 6 : e
        }
        var r = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor".split(" "), i = /^([\-+])=\s*(\d+\.?\d*)/, s = [{
            re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
            parse: function(e) {
                return [e[1], e[2], e[3], e[4]]
            }
        }, {
            re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
            parse: function(e) {
                return [e[1] * 2.55, e[2] * 2.55, e[3] * 2.55, e[4]]
            }
        }, {
            re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
            parse: function(e) {
                return [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)]
            }
        }, {
            re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
            parse: function(e) {
                return [parseInt(e[1] + e[1], 16), parseInt(e[2] + e[2], 16), parseInt(e[3] + e[3], 16)]
            }
        }, {
            re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
            space: "hsla",
            parse: function(e) {
                return [e[1], e[2] / 100, e[3] / 100, e[4]]
            }
        }], o = t.Color = function(e, n, r, i) {
            return new t.Color.fn.parse(e,n,r,i)
        }
        , u = {
            rgba: {
                props: {
                    red: {
                        idx: 0,
                        type: "byte"
                    },
                    green: {
                        idx: 1,
                        type: "byte"
                    },
                    blue: {
                        idx: 2,
                        type: "byte"
                    }
                }
            },
            hsla: {
                props: {
                    hue: {
                        idx: 0,
                        type: "degrees"
                    },
                    saturation: {
                        idx: 1,
                        type: "percent"
                    },
                    lightness: {
                        idx: 2,
                        type: "percent"
                    }
                }
            }
        }, a = {
            "byte": {
                floor: !0,
                max: 255
            },
            percent: {
                max: 1
            },
            degrees: {
                mod: 360,
                floor: !0
            }
        }, f = o.support = {}, l = t("<p>")[0], c, h = t.each;
        l.style.cssText = "background-color:rgba(1,1,1,.5)",
        f.rgba = l.style.backgroundColor.indexOf("rgba") > -1,
        h(u, function(e, t) {
            t.cache = "_" + e,
            t.props.alpha = {
                idx: 3,
                type: "percent",
                def: 1
            }
        }),
        o.fn = t.extend(o.prototype, {
            parse: function(r, i, s, a) {
                if (r === n)
                    return this._rgba = [null, null, null, null],
                    this;
                if (r.jquery || r.nodeType)
                    r = t(r).css(i),
                    i = n;
                var f = this
                  , l = t.type(r)
                  , v = this._rgba = [];
                i !== n && (r = [r, i, s, a],
                l = "array");
                if (l === "string")
                    return this.parse(d(r) || c._default);
                if (l === "array")
                    return h(u.rgba.props, function(e, t) {
                        v[t.idx] = p(r[t.idx], t)
                    }),
                    this;
                if (l === "object")
                    return r instanceof o ? h(u, function(e, t) {
                        r[t.cache] && (f[t.cache] = r[t.cache].slice())
                    }) : h(u, function(t, n) {
                        var i = n.cache;
                        h(n.props, function(e, t) {
                            if (!f[i] && n.to) {
                                if (e === "alpha" || r[e] == null)
                                    return;
                                f[i] = n.to(f._rgba)
                            }
                            f[i][t.idx] = p(r[e], t, !0)
                        }),
                        f[i] && e.inArray(null, f[i].slice(0, 3)) < 0 && (f[i][3] = 1,
                        n.from && (f._rgba = n.from(f[i])))
                    }),
                    this
            },
            is: function(e) {
                var t = o(e)
                  , n = !0
                  , r = this;
                return h(u, function(e, i) {
                    var s, o = t[i.cache];
                    return o && (s = r[i.cache] || i.to && i.to(r._rgba) || [],
                    h(i.props, function(e, t) {
                        if (o[t.idx] != null)
                            return n = o[t.idx] === s[t.idx],
                            n
                    })),
                    n
                }),
                n
            },
            _space: function() {
                var e = []
                  , t = this;
                return h(u, function(n, r) {
                    t[r.cache] && e.push(n)
                }),
                e.pop()
            },
            transition: function(e, t) {
                var n = o(e)
                  , r = n._space()
                  , i = u[r]
                  , s = this.alpha() === 0 ? o("transparent") : this
                  , f = s[i.cache] || i.to(s._rgba)
                  , l = f.slice();
                return n = n[i.cache],
                h(i.props, function(e, r) {
                    var i = r.idx
                      , s = f[i]
                      , o = n[i]
                      , u = a[r.type] || {};
                    if (o === null)
                        return;
                    s === null ? l[i] = o : (u.mod && (o - s > u.mod / 2 ? s += u.mod : s - o > u.mod / 2 && (s -= u.mod)),
                    l[i] = p((o - s) * t + s, r))
                }),
                this[r](l)
            },
            blend: function(e) {
                if (this._rgba[3] === 1)
                    return this;
                var n = this._rgba.slice()
                  , r = n.pop()
                  , i = o(e)._rgba;
                return o(t.map(n, function(e, t) {
                    return (1 - r) * i[t] + r * e
                }))
            },
            toRgbaString: function() {
                var e = "rgba("
                  , n = t.map(this._rgba, function(e, t) {
                    return e == null ? t > 2 ? 1 : 0 : e
                });
                return n[3] === 1 && (n.pop(),
                e = "rgb("),
                e + n.join() + ")"
            },
            toHslaString: function() {
                var e = "hsla("
                  , n = t.map(this.hsla(), function(e, t) {
                    return e == null && (e = t > 2 ? 1 : 0),
                    t && t < 3 && (e = Math.round(e * 100) + "%"),
                    e
                });
                return n[3] === 1 && (n.pop(),
                e = "hsl("),
                e + n.join() + ")"
            },
            toHexString: function(e) {
                var n = this._rgba.slice()
                  , r = n.pop();
                return e && n.push(~~(r * 255)),
                "#" + t.map(n, function(e) {
                    return e = (e || 0).toString(16),
                    e.length === 1 ? "0" + e : e
                }).join("")
            },
            toString: function() {
                return this._rgba[3] === 0 ? "transparent" : this.toRgbaString()
            }
        }),
        o.fn.parse.prototype = o.fn,
        u.hsla.to = function(e) {
            if (e[0] == null || e[1] == null || e[2] == null)
                return [null, null, null, e[3]];
            var t = e[0] / 255, n = e[1] / 255, r = e[2] / 255, i = e[3], s = Math.max(t, n, r), o = Math.min(t, n, r), u = s - o, a = s + o, f = a * .5, l, c;
            return o === s ? l = 0 : t === s ? l = 60 * (n - r) / u + 360 : n === s ? l = 60 * (r - t) / u + 120 : l = 60 * (t - n) / u + 240,
            f === 0 || f === 1 ? c = f : f <= .5 ? c = u / a : c = u / (2 - a),
            [Math.round(l) % 360, c, f, i == null ? 1 : i]
        }
        ,
        u.hsla.from = function(e) {
            if (e[0] == null || e[1] == null || e[2] == null)
                return [null, null, null, e[3]];
            var t = e[0] / 360
              , n = e[1]
              , r = e[2]
              , i = e[3]
              , s = r <= .5 ? r * (1 + n) : r + n - r * n
              , o = 2 * r - s;
            return [Math.round(v(o, s, t + 1 / 3) * 255), Math.round(v(o, s, t) * 255), Math.round(v(o, s, t - 1 / 3) * 255), i]
        }
        ,
        h(u, function(e, r) {
            var s = r.props
              , u = r.cache
              , a = r.to
              , f = r.from;
            o.fn[e] = function(e) {
                a && !this[u] && (this[u] = a(this._rgba));
                if (e === n)
                    return this[u].slice();
                var r, i = t.type(e), l = i === "array" || i === "object" ? e : arguments, c = this[u].slice();
                return h(s, function(e, t) {
                    var n = l[i === "object" ? e : t.idx];
                    n == null && (n = c[t.idx]),
                    c[t.idx] = p(n, t)
                }),
                f ? (r = o(f(c)),
                r[u] = c,
                r) : o(c)
            }
            ,
            h(s, function(n, r) {
                if (o.fn[n])
                    return;
                o.fn[n] = function(s) {
                    var o = t.type(s), u = n === "alpha" ? this._hsla ? "hsla" : "rgba" : e, a = this[u](), f = a[r.idx], l;
                    return o === "undefined" ? f : (o === "function" && (s = s.call(this, f),
                    o = t.type(s)),
                    s == null && r.empty ? this : (o === "string" && (l = i.exec(s),
                    l && (s = f + parseFloat(l[2]) * (l[1] === "+" ? 1 : -1))),
                    a[r.idx] = s,
                    this[u](a)))
                }
            })
        }),
        h(r, function(e, n) {
            t.cssHooks[n] = {
                set: function(e, r) {
                    var i, s, u = "";
                    if (t.type(r) !== "string" || (i = d(r))) {
                        r = o(i || r);
                        if (!f.rgba && r._rgba[3] !== 1) {
                            s = n === "backgroundColor" ? e.parentNode : e;
                            while ((u === "" || u === "transparent") && s && s.style)
                                try {
                                    u = t.css(s, "backgroundColor"),
                                    s = s.parentNode
                                } catch (a) {}
                            r = r.blend(u && u !== "transparent" ? u : "_default")
                        }
                        r = r.toRgbaString()
                    }
                    try {
                        e.style[n] = r
                    } catch (l) {}
                }
            },
            t.fx.step[n] = function(e) {
                e.colorInit || (e.start = o(e.elem, n),
                e.end = o(e.end),
                e.colorInit = !0),
                t.cssHooks[n].set(e.elem, e.start.transition(e.end, e.pos))
            }
        }),
        t.cssHooks.borderColor = {
            expand: function(e) {
                var t = {};
                return h(["Top", "Right", "Bottom", "Left"], function(n, r) {
                    t["border" + r + "Color"] = e
                }),
                t
            }
        },
        c = t.Color.names = {
            aqua: "#00ffff",
            black: "#000000",
            blue: "#0000ff",
            fuchsia: "#ff00ff",
            gray: "#808080",
            green: "#008000",
            lime: "#00ff00",
            maroon: "#800000",
            navy: "#000080",
            olive: "#808000",
            purple: "#800080",
            red: "#ff0000",
            silver: "#c0c0c0",
            teal: "#008080",
            white: "#ffffff",
            yellow: "#ffff00",
            transparent: [null, null, null, 0],
            _default: "#ffffff"
        }
    }(jQuery),
    function() {
        function i() {
            var t = this.ownerDocument.defaultView ? this.ownerDocument.defaultView.getComputedStyle(this, null) : this.currentStyle, n = {}, r, i;
            if (t && t.length && t[0] && t[t[0]]) {
                i = t.length;
                while (i--)
                    r = t[i],
                    typeof t[r] == "string" && (n[e.camelCase(r)] = t[r])
            } else
                for (r in t)
                    typeof t[r] == "string" && (n[r] = t[r]);
            return n
        }
        function s(t, n) {
            var i = {}, s, o;
            for (s in n)
                o = n[s],
                t[s] !== o && !r[s] && (e.fx.step[s] || !isNaN(parseFloat(o))) && (i[s] = o);
            return i
        }
        var n = ["add", "remove", "toggle"]
          , r = {
            border: 1,
            borderBottom: 1,
            borderColor: 1,
            borderLeft: 1,
            borderRight: 1,
            borderTop: 1,
            borderWidth: 1,
            margin: 1,
            padding: 1
        };
        e.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(t, n) {
            e.fx.step[n] = function(e) {
                if (e.end !== "none" && !e.setAttr || e.pos === 1 && !e.setAttr)
                    jQuery.style(e.elem, n, e.end),
                    e.setAttr = !0
            }
        }),
        e.effects.animateClass = function(t, r, o, u) {
            var a = e.speed(r, o, u);
            return this.queue(function() {
                var r = e(this), o = r.attr("class") || "", u, f = a.children ? r.find("*").andSelf() : r;
                f = f.map(function() {
                    var t = e(this);
                    return {
                        el: t,
                        start: i.call(this)
                    }
                }),
                u = function() {
                    e.each(n, function(e, n) {
                        t[n] && r[n + "Class"](t[n])
                    })
                }
                ,
                u(),
                f = f.map(function() {
                    return this.end = i.call(this.el[0]),
                    this.diff = s(this.start, this.end),
                    this
                }),
                r.attr("class", o),
                f = f.map(function() {
                    var t = this
                      , n = e.Deferred()
                      , r = jQuery.extend({}, a, {
                        queue: !1,
                        complete: function() {
                            n.resolve(t)
                        }
                    });
                    return this.el.animate(this.diff, r),
                    n.promise()
                }),
                e.when.apply(e, f.get()).done(function() {
                    u(),
                    e.each(arguments, function() {
                        var t = this.el;
                        e.each(this.diff, function(e) {
                            t.css(e, "")
                        })
                    }),
                    a.complete.call(r[0])
                })
            })
        }
        ,
        e.fn.extend({
            _addClass: e.fn.addClass,
            addClass: function(t, n, r, i) {
                return n ? e.effects.animateClass.call(this, {
                    add: t
                }, n, r, i) : this._addClass(t)
            },
            _removeClass: e.fn.removeClass,
            removeClass: function(t, n, r, i) {
                return n ? e.effects.animateClass.call(this, {
                    remove: t
                }, n, r, i) : this._removeClass(t)
            },
            _toggleClass: e.fn.toggleClass,
            toggleClass: function(n, r, i, s, o) {
                return typeof r == "boolean" || r === t ? i ? e.effects.animateClass.call(this, r ? {
                    add: n
                } : {
                    remove: n
                }, i, s, o) : this._toggleClass(n, r) : e.effects.animateClass.call(this, {
                    toggle: n
                }, r, i, s)
            },
            switchClass: function(t, n, r, i, s) {
                return e.effects.animateClass.call(this, {
                    add: n,
                    remove: t
                }, r, i, s)
            }
        })
    }(),
    function() {
        function i(t, n, r, i) {
            e.isPlainObject(t) && (n = t,
            t = t.effect),
            t = {
                effect: t
            },
            n == null && (n = {}),
            e.isFunction(n) && (i = n,
            r = null,
            n = {});
            if (typeof n == "number" || e.fx.speeds[n])
                i = r,
                r = n,
                n = {};
            return e.isFunction(r) && (i = r,
            r = null),
            n && e.extend(t, n),
            r = r || n.duration,
            t.duration = e.fx.off ? 0 : typeof r == "number" ? r : r in e.fx.speeds ? e.fx.speeds[r] : e.fx.speeds._default,
            t.complete = i || n.complete,
            t
        }
        function s(t) {
            return !t || typeof t == "number" || e.fx.speeds[t] ? !0 : typeof t == "string" && !e.effects.effect[t] ? n && e.effects[t] ? !1 : !0 : !1
        }
        e.extend(e.effects, {
            version: "1.9.1",
            save: function(e, t) {
                for (var n = 0; n < t.length; n++)
                    t[n] !== null && e.data(r + t[n], e[0].style[t[n]])
            },
            restore: function(e, n) {
                var i, s;
                for (s = 0; s < n.length; s++)
                    n[s] !== null && (i = e.data(r + n[s]),
                    i === t && (i = ""),
                    e.css(n[s], i))
            },
            setMode: function(e, t) {
                return t === "toggle" && (t = e.is(":hidden") ? "show" : "hide"),
                t
            },
            getBaseline: function(e, t) {
                var n, r;
                switch (e[0]) {
                case "top":
                    n = 0;
                    break;
                case "middle":
                    n = .5;
                    break;
                case "bottom":
                    n = 1;
                    break;
                default:
                    n = e[0] / t.height
                }
                switch (e[1]) {
                case "left":
                    r = 0;
                    break;
                case "center":
                    r = .5;
                    break;
                case "right":
                    r = 1;
                    break;
                default:
                    r = e[1] / t.width
                }
                return {
                    x: r,
                    y: n
                }
            },
            createWrapper: function(t) {
                if (t.parent().is(".ui-effects-wrapper"))
                    return t.parent();
                var n = {
                    width: t.outerWidth(!0),
                    height: t.outerHeight(!0),
                    "float": t.css("float")
                }
                  , r = e("<div></div>").addClass("ui-effects-wrapper").css({
                    fontSize: "100%",
                    background: "transparent",
                    border: "none",
                    margin: 0,
                    padding: 0
                })
                  , i = {
                    width: t.width(),
                    height: t.height()
                }
                  , s = document.activeElement;
                try {
                    s.id
                } catch (o) {
                    s = document.body
                }
                return t.wrap(r),
                (t[0] === s || e.contains(t[0], s)) && e(s).focus(),
                r = t.parent(),
                t.css("position") === "static" ? (r.css({
                    position: "relative"
                }),
                t.css({
                    position: "relative"
                })) : (e.extend(n, {
                    position: t.css("position"),
                    zIndex: t.css("z-index")
                }),
                e.each(["top", "left", "bottom", "right"], function(e, r) {
                    n[r] = t.css(r),
                    isNaN(parseInt(n[r], 10)) && (n[r] = "auto")
                }),
                t.css({
                    position: "relative",
                    top: 0,
                    left: 0,
                    right: "auto",
                    bottom: "auto"
                })),
                t.css(i),
                r.css(n).show()
            },
            removeWrapper: function(t) {
                var n = document.activeElement;
                return t.parent().is(".ui-effects-wrapper") && (t.parent().replaceWith(t),
                (t[0] === n || e.contains(t[0], n)) && e(n).focus()),
                t
            },
            setTransition: function(t, n, r, i) {
                return i = i || {},
                e.each(n, function(e, n) {
                    var s = t.cssUnit(n);
                    s[0] > 0 && (i[n] = s[0] * r + s[1])
                }),
                i
            }
        }),
        e.fn.extend({
            effect: function() {
                function a(n) {
                    function u() {
                        e.isFunction(i) && i.call(r[0]),
                        e.isFunction(n) && n()
                    }
                    var r = e(this)
                      , i = t.complete
                      , s = t.mode;
                    (r.is(":hidden") ? s === "hide" : s === "show") ? u() : o.call(r[0], t, u)
                }
                var t = i.apply(this, arguments)
                  , r = t.mode
                  , s = t.queue
                  , o = e.effects.effect[t.effect]
                  , u = !o && n && e.effects[t.effect];
                return e.fx.off || !o && !u ? r ? this[r](t.duration, t.complete) : this.each(function() {
                    t.complete && t.complete.call(this)
                }) : o ? s === !1 ? this.each(a) : this.queue(s || "fx", a) : u.call(this, {
                    options: t,
                    duration: t.duration,
                    callback: t.complete,
                    mode: t.mode
                })
            },
            _show: e.fn.show,
            show: function(e) {
                if (s(e))
                    return this._show.apply(this, arguments);
                var t = i.apply(this, arguments);
                return t.mode = "show",
                this.effect.call(this, t)
            },
            _hide: e.fn.hide,
            hide: function(e) {
                if (s(e))
                    return this._hide.apply(this, arguments);
                var t = i.apply(this, arguments);
                return t.mode = "hide",
                this.effect.call(this, t)
            },
            __toggle: e.fn.toggle,
            toggle: function(t) {
                if (s(t) || typeof t == "boolean" || e.isFunction(t))
                    return this.__toggle.apply(this, arguments);
                var n = i.apply(this, arguments);
                return n.mode = "toggle",
                this.effect.call(this, n)
            },
            cssUnit: function(t) {
                var n = this.css(t)
                  , r = [];
                return e.each(["em", "px", "%", "pt"], function(e, t) {
                    n.indexOf(t) > 0 && (r = [parseFloat(n), t])
                }),
                r
            }
        })
    }(),
    function() {
        var t = {};
        e.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(e, n) {
            t[n] = function(t) {
                return Math.pow(t, e + 2)
            }
        }),
        e.extend(t, {
            Sine: function(e) {
                return 1 - Math.cos(e * Math.PI / 2)
            },
            Circ: function(e) {
                return 1 - Math.sqrt(1 - e * e)
            },
            Elastic: function(e) {
                return e === 0 || e === 1 ? e : -Math.pow(2, 8 * (e - 1)) * Math.sin(((e - 1) * 80 - 7.5) * Math.PI / 15)
            },
            Back: function(e) {
                return e * e * (3 * e - 2)
            },
            Bounce: function(e) {
                var t, n = 4;
                while (e < ((t = Math.pow(2, --n)) - 1) / 11)
                    ;
                return 1 / Math.pow(4, 3 - n) - 7.5625 * Math.pow((t * 3 - 2) / 22 - e, 2)
            }
        }),
        e.each(t, function(t, n) {
            e.easing["easeIn" + t] = n,
            e.easing["easeOut" + t] = function(e) {
                return 1 - n(1 - e)
            }
            ,
            e.easing["easeInOut" + t] = function(e) {
                return e < .5 ? n(e * 2) / 2 : 1 - n(e * -2 + 2) / 2
            }
        })
    }()
}(jQuery),
function(e, t) {
    e.effects.effect.highlight = function(t, n) {
        var r = e(this)
          , i = ["backgroundImage", "backgroundColor", "opacity"]
          , s = e.effects.setMode(r, t.mode || "show")
          , o = {
            backgroundColor: r.css("backgroundColor")
        };
        s === "hide" && (o.opacity = 0),
        e.effects.save(r, i),
        r.show().css({
            backgroundImage: "none",
            backgroundColor: t.color || "#ffff99"
        }).animate(o, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: function() {
                s === "hide" && r.hide(),
                e.effects.restore(r, i),
                n()
            }
        })
    }
}(jQuery),
function(e, t) {
    var n = function() {
        var t = e._data(document, "events");
        return t && t.click && e.grep(t.click, function(e) {
            return e.namespace === "rails"
        }).length
    };
    n() && e.error("jquery-ujs has already been loaded!");
    var r;
    e.rails = r = {
        linkClickSelector: "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with]",
        inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
        formSubmitSelector: "form",
        formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type])",
        disableSelector: "input[data-disable-with], button[data-disable-with], textarea[data-disable-with]",
        enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled",
        requiredInputSelector: "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",
        fileInputSelector: "input:file",
        linkDisableSelector: "a[data-disable-with]",
        CSRFProtection: function(t) {
            var n = e('meta[name="csrf-token"]').attr("content");
            n && t.setRequestHeader("X-CSRF-Token", n)
        },
        fire: function(t, n, r) {
            var i = e.Event(n);
            return t.trigger(i, r),
            i.result !== !1
        },
        confirm: function(e) {
            return confirm(e)
        },
        ajax: function(t) {
            return e.ajax(t)
        },
        href: function(e) {
            return e.attr("href")
        },
        handleRemote: function(n) {
            var i, s, o, u, a, f, l, c;
            if (r.fire(n, "ajax:before")) {
                u = n.data("cross-domain"),
                a = u === t ? null : u,
                f = n.data("with-credentials") || null,
                l = n.data("type") || e.ajaxSettings && e.ajaxSettings.dataType;
                if (n.is("form")) {
                    i = n.attr("method"),
                    s = n.attr("action"),
                    o = n.serializeArray();
                    var h = n.data("ujs:submit-button");
                    h && (o.push(h),
                    n.data("ujs:submit-button", null))
                } else
                    n.is(r.inputChangeSelector) ? (i = n.data("method"),
                    s = n.data("url"),
                    o = n.serialize(),
                    n.data("params") && (o = o + "&" + n.data("params"))) : (i = n.data("method"),
                    s = r.href(n),
                    o = n.data("params") || null);
                c = {
                    type: i || "GET",
                    data: o,
                    dataType: l,
                    beforeSend: function(e, i) {
                        return i.dataType === t && e.setRequestHeader("accept", "*/*;q=0.5, " + i.accepts.script),
                        r.fire(n, "ajax:beforeSend", [e, i])
                    },
                    success: function(e, t, r) {
                        n.trigger("ajax:success", [e, t, r])
                    },
                    complete: function(e, t) {
                        n.trigger("ajax:complete", [e, t])
                    },
                    error: function(e, t, r) {
                        n.trigger("ajax:error", [e, t, r])
                    },
                    xhrFields: {
                        withCredentials: f
                    },
                    crossDomain: a
                },
                s && (c.url = s);
                var p = r.ajax(c);
                return n.trigger("ajax:send", p),
                p
            }
            return !1
        },
        handleMethod: function(n) {
            var i = r.href(n)
              , s = n.data("method")
              , o = n.attr("target")
              , u = e("meta[name=csrf-token]").attr("content")
              , a = e("meta[name=csrf-param]").attr("content")
              , f = e('<form method="post" action="' + i + '"></form>')
              , l = '<input name="_method" value="' + s + '" type="hidden" />';
            a !== t && u !== t && (l += '<input name="' + a + '" value="' + u + '" type="hidden" />'),
            o && f.attr("target", o),
            f.hide().append(l).appendTo("body"),
            f.submit()
        },
        disableFormElements: function(t) {
            t.find(r.disableSelector).each(function() {
                var t = e(this)
                  , n = t.is("button") ? "html" : "val";
                t.data("ujs:enable-with", t[n]()),
                t[n](t.data("disable-with")),
                t.prop("disabled", !0)
            })
        },
        enableFormElements: function(t) {
            t.find(r.enableSelector).each(function() {
                var t = e(this)
                  , n = t.is("button") ? "html" : "val";
                t.data("ujs:enable-with") && t[n](t.data("ujs:enable-with")),
                t.prop("disabled", !1)
            })
        },
        allowAction: function(e) {
            var t = e.data("confirm"), n = !1, i;
            return t ? (r.fire(e, "confirm") && (n = r.confirm(t),
            i = r.fire(e, "confirm:complete", [n])),
            n && i) : !0
        },
        blankInputs: function(t, n, r) {
            var i = e(), s, o, u = n || "input,textarea", a = t.find(u);
            return a.each(function() {
                s = e(this),
                o = s.is(":checkbox,:radio") ? s.is(":checked") : s.val();
                if (!o == !r) {
                    if (s.is(":radio") && a.filter('input:radio:checked[name="' + s.attr("name") + '"]').length)
                        return !0;
                    i = i.add(s)
                }
            }),
            i.length ? i : !1
        },
        nonBlankInputs: function(e, t) {
            return r.blankInputs(e, t, !0)
        },
        stopEverything: function(t) {
            return e(t.target).trigger("ujs:everythingStopped"),
            t.stopImmediatePropagation(),
            !1
        },
        callFormSubmitBindings: function(n, r) {
            var i = n.data("events")
              , s = !0;
            return i !== t && i.submit !== t && e.each(i.submit, function(e, t) {
                if (typeof t.handler == "function")
                    return s = t.handler(r)
            }),
            s
        },
        disableElement: function(e) {
            e.data("ujs:enable-with", e.html()),
            e.html(e.data("disable-with")),
            e.bind("click.railsDisable", function(e) {
                return r.stopEverything(e)
            })
        },
        enableElement: function(e) {
            e.data("ujs:enable-with") !== t && (e.html(e.data("ujs:enable-with")),
            e.data("ujs:enable-with", !1)),
            e.unbind("click.railsDisable")
        }
    },
    r.fire(e(document), "rails:attachBindings") && (e.ajaxPrefilter(function(e, t, n) {
        e.crossDomain || r.CSRFProtection(n)
    }),
    e(document).delegate(r.linkDisableSelector, "ajax:complete", function() {
        r.enableElement(e(this))
    }),
    e(document).delegate(r.linkClickSelector, "click.rails", function(n) {
        var i = e(this)
          , s = i.data("method")
          , o = i.data("params");
        if (!r.allowAction(i))
            return r.stopEverything(n);
        i.is(r.linkDisableSelector) && r.disableElement(i);
        if (i.data("remote") !== t) {
            if ((n.metaKey || n.ctrlKey) && (!s || s === "GET") && !o)
                return !0;
            var u = r.handleRemote(i);
            return u === !1 ? r.enableElement(i) : u.error(function() {
                r.enableElement(i)
            }),
            !1
        }
        if (i.data("method"))
            return r.handleMethod(i),
            !1
    }),
    e(document).delegate(r.inputChangeSelector, "change.rails", function(t) {
        var n = e(this);
        return r.allowAction(n) ? (r.handleRemote(n),
        !1) : r.stopEverything(t)
    }),
    e(document).delegate(r.formSubmitSelector, "submit.rails", function(n) {
        var i = e(this)
          , s = i.data("remote") !== t
          , o = r.blankInputs(i, r.requiredInputSelector)
          , u = r.nonBlankInputs(i, r.fileInputSelector);
        if (!r.allowAction(i))
            return r.stopEverything(n);
        if (o && i.attr("novalidate") == t && r.fire(i, "ajax:aborted:required", [o]))
            return r.stopEverything(n);
        if (s) {
            if (u) {
                setTimeout(function() {
                    r.disableFormElements(i)
                }, 13);
                var a = r.fire(i, "ajax:aborted:file", [u]);
                return a || setTimeout(function() {
                    r.enableFormElements(i)
                }, 13),
                a
            }
            return !e.support.submitBubbles && e().jquery < "1.7" && r.callFormSubmitBindings(i, n) === !1 ? r.stopEverything(n) : (r.handleRemote(i),
            !1)
        }
        setTimeout(function() {
            r.disableFormElements(i)
        }, 13)
    }),
    e(document).delegate(r.formInputClickSelector, "click.rails", function(t) {
        var n = e(this);
        if (!r.allowAction(n))
            return r.stopEverything(t);
        var i = n.attr("name")
          , s = i ? {
            name: i,
            value: n.val()
        } : null;
        n.closest("form").data("ujs:submit-button", s)
    }),
    e(document).delegate(r.formSubmitSelector, "ajax:beforeSend.rails", function(t) {
        this == t.target && r.disableFormElements(e(this))
    }),
    e(document).delegate(r.formSubmitSelector, "ajax:complete.rails", function(t) {
        this == t.target && r.enableFormElements(e(this))
    }),
    e(function() {
        csrf_token = e("meta[name=csrf-token]").attr("content"),
        csrf_param = e("meta[name=csrf-param]").attr("content"),
        e('form input[name="' + csrf_param + '"]').val(csrf_token)
    }))
}(jQuery),
function(e, t, n) {
    function f(e) {
        var t = {}
          , r = /^jQuery\d+$/;
        return n.each(e.attributes, function(e, n) {
            n.specified && !r.test(n.name) && (t[n.name] = n.value)
        }),
        t
    }
    function l(e, r) {
        var i = this
          , s = n(i);
        if (i.value == s.attr("placeholder") && s.hasClass("placeholder"))
            if (s.data("placeholder-password")) {
                s = s.hide().next().show().attr("id", s.removeAttr("id").data("placeholder-id"));
                if (e === !0)
                    return s[0].value = r;
                s.focus()
            } else
                i.value = "",
                s.removeClass("placeholder"),
                i == t.activeElement && i.select()
    }
    function c() {
        var e, t = this, r = n(t), i = r, s = this.id;
        if (t.value == "") {
            if (t.type == "password") {
                if (!r.data("placeholder-textinput")) {
                    try {
                        e = r.clone().attr({
                            type: "text"
                        })
                    } catch (o) {
                        e = n("<input>").attr(n.extend(f(this), {
                            type: "text"
                        }))
                    }
                    e.removeAttr("name").data({
                        "placeholder-password": !0,
                        "placeholder-id": s
                    }).bind("focus.placeholder", l),
                    r.data({
                        "placeholder-textinput": e,
                        "placeholder-id": s
                    }).before(e)
                }
                r = r.removeAttr("id").hide().prev().attr("id", s).show()
            }
            r.addClass("placeholder"),
            r[0].value = r.attr("placeholder")
        } else
            r.removeClass("placeholder")
    }
    var r = "placeholder"in t.createElement("input"), i = "placeholder"in t.createElement("textarea"), s = n.fn, o = n.valHooks, u, a;
    r && i ? (a = s.placeholder = function() {
        return this
    }
    ,
    a.input = a.textarea = !0) : (a = s.placeholder = function() {
        var e = this;
        return e.filter((r ? "textarea" : ":input") + "[placeholder]").not(".placeholder").bind({
            "focus.placeholder": l,
            "blur.placeholder": c
        }).data("placeholder-enabled", !0).trigger("blur.placeholder"),
        e
    }
    ,
    a.input = r,
    a.textarea = i,
    u = {
        get: function(e) {
            var t = n(e);
            return t.data("placeholder-enabled") && t.hasClass("placeholder") ? "" : e.value
        },
        set: function(e, r) {
            var i = n(e);
            return i.data("placeholder-enabled") ? (r == "" ? (e.value = r,
            e != t.activeElement && c.call(e)) : i.hasClass("placeholder") ? l.call(e, !0, r) || (e.value = r) : e.value = r,
            i) : e.value = r
        }
    },
    r || (o.input = u),
    i || (o.textarea = u),
    n(function() {
        n(t).delegate("form", "submit.placeholder", function() {
            var e = n(".placeholder", this).each(l);
            setTimeout(function() {
                e.each(c)
            }, 10)
        })
    }),
    n(e).bind("beforeunload.placeholder", function() {
        n(".placeholder").each(function() {
            this.value = ""
        })
    }))
}(this, document, jQuery),
function(e) {
    e.nano = function(t, n) {
        return t.replace(/\{([\w\.]*)\}/g, function(t, r) {
            var i = r.split(".")
              , s = n[i.shift()];
            return e.each(i, function() {
                s = s[this]
            }),
            s === null || s === undefined ? "" : s
        })
    }
}(jQuery),
function(e, t, n) {
    function i(e) {
        return e
    }
    function s(e) {
        return decodeURIComponent(e.replace(r, " "))
    }
    var r = /\+/g
      , o = e.cookie = function(r, u, a) {
        if (u !== n) {
            a = e.extend({}, o.defaults, a),
            u === null && (a.expires = -1);
            if (typeof a.expires == "number") {
                var f = a.expires
                  , l = a.expires = new Date;
                l.setDate(l.getDate() + f)
            }
            return u = o.json ? JSON.stringify(u) : String(u),
            t.cookie = [encodeURIComponent(r), "=", o.raw ? u : encodeURIComponent(u), a.expires ? "; expires=" + a.expires.toUTCString() : "", a.path ? "; path=" + a.path : "", a.domain ? "; domain=" + a.domain : "", a.secure ? "; secure" : ""].join("")
        }
        var c = o.raw ? i : s
          , h = t.cookie.split("; ");
        for (var p = 0, d = h.length; p < d; p++) {
            var v = h[p].split("=");
            if (c(v.shift()) === r) {
                var m = c(v.join("="));
                return o.json ? JSON.parse(m) : m
            }
        }
        return null
    }
    ;
    o.defaults = {},
    e.removeCookie = function(t, n) {
        return e.cookie(t) !== null ? (e.cookie(t, null, n),
        !0) : !1
    }
}(jQuery, document),
function() {
    var e, t, n;
    e = (typeof require == "function" ? require("jquery") : void 0) || window.jQuery,
    t = [],
    n = function() {
        var n, r, i, s;
        s = [];
        for (r = 0,
        i = t.length; r < i; r++)
            n = t[r],
            s.push(n(e));
        return s
    }
    ,
    e(n),
    e.fn.ready = function(e) {
        return t.push(e)
    }
    ,
    e.setReadyEvent = function(t) {
        return e(document).off(".turbolinks").on(t + ".turbolinks", n)
    }
    ,
    e.setReadyEvent("page:load")
}
.call(this),
function(e, t) {
    "use strict";
    var n = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
    e.fn.imagesLoaded = function(r) {
        function c() {
            var t = e(f)
              , n = e(l);
            s && (l.length ? s.reject(u, t, n) : s.resolve(u)),
            e.isFunction(r) && r.call(i, u, t, n)
        }
        function h(t, r) {
            if (t.src === n || e.inArray(t, a) !== -1)
                return;
            a.push(t),
            r ? l.push(t) : f.push(t),
            e.data(t, "imagesLoaded", {
                isBroken: r,
                src: t.src
            }),
            o && s.notifyWith(e(t), [r, u, e(f), e(l)]),
            u.length === a.length && (setTimeout(c),
            u.unbind(".imagesLoaded"))
        }
        var i = this
          , s = e.isFunction(e.Deferred) ? e.Deferred() : 0
          , o = e.isFunction(s.notify)
          , u = i.find("img").add(i.filter("img"))
          , a = []
          , f = []
          , l = [];
        return e.isPlainObject(r) && e.each(r, function(e, t) {
            e === "callback" ? r = t : s && s[e](t)
        }),
        u.length ? u.bind("load.imagesLoaded error.imagesLoaded", function(e) {
            h(e.target, e.type === "error")
        }).each(function(r, i) {
            var s = i.src
              , o = e.data(i, "imagesLoaded");
            if (o && o.src === s) {
                h(i, o.isBroken);
                return
            }
            if (i.complete && i.naturalWidth !== t) {
                h(i, i.naturalWidth === 0 || i.naturalHeight === 0);
                return
            }
            if (i.readyState || i.complete)
                i.src = n,
                i.src = s
        }) : c(),
        s ? s.promise(i) : i
    }
}(jQuery);
if (typeof jwplayer == "undefined") {
    var jwplayer = function(e) {
        if (jwplayer.api)
            return jwplayer.api.selectPlayer(e)
    }
      , $jw = jwplayer;
    jwplayer.version = "5.10.2295 (Licensed version)",
    jwplayer.vid = document.createElement("video"),
    jwplayer.audio = document.createElement("audio"),
    jwplayer.source = document.createElement("source"),
    function(e) {
        function t(t) {
            if (!e.utils.exists(t))
                return;
            var n = t.indexOf("://")
              , r = t.indexOf("?");
            return n > 0 && (r < 0 || r > n)
        }
        e.utils = function() {}
        ,
        e.utils.typeOf = function(e) {
            var t = typeof e;
            return t === "object" && (e ? e instanceof Array && (t = "array") : t = "null"),
            t
        }
        ,
        e.utils.extend = function() {
            var t = e.utils.extend.arguments;
            if (t.length > 1) {
                for (var n = 1; n < t.length; n++)
                    for (var r in t[n])
                        t[0][r] = t[n][r];
                return t[0]
            }
            return null
        }
        ,
        e.utils.clone = function(t) {
            var n, r = e.utils.clone.arguments;
            if (r.length == 1)
                switch (e.utils.typeOf(r[0])) {
                case "object":
                    n = {};
                    for (var i in r[0])
                        n[i] = e.utils.clone(r[0][i]);
                    break;
                case "array":
                    n = [];
                    for (var i in r[0])
                        n[i] = e.utils.clone(r[0][i]);
                    break;
                default:
                    return r[0]
                }
            return n
        }
        ,
        e.utils.extension = function(e) {
            if (!e)
                return "";
            e = e.substring(e.lastIndexOf("/") + 1, e.length),
            e = e.split("?")[0];
            if (e.lastIndexOf(".") > -1)
                return e.substr(e.lastIndexOf(".") + 1, e.length).toLowerCase();
            return
        }
        ,
        e.utils.html = function(e, t) {
            e.innerHTML = t
        }
        ,
        e.utils.wrap = function(e, t) {
            e.parentNode && e.parentNode.replaceChild(t, e),
            t.appendChild(e)
        }
        ,
        e.utils.ajax = function(t, n, r) {
            var i;
            window.XMLHttpRequest ? i = new XMLHttpRequest : i = new ActiveXObject("Microsoft.XMLHTTP"),
            i.onreadystatechange = function() {
                if (i.readyState === 4)
                    if (i.status === 200) {
                        if (n) {
                            if (!e.utils.exists(i.responseXML))
                                try {
                                    if (window.DOMParser) {
                                        var s = (new DOMParser).parseFromString(i.responseText, "text/xml");
                                        s && (i = e.utils.extend({}, i, {
                                            responseXML: s
                                        }))
                                    } else
                                        s = new ActiveXObject("Microsoft.XMLDOM"),
                                        s.async = "false",
                                        s.loadXML(i.responseText),
                                        i = e.utils.extend({}, i, {
                                            responseXML: s
                                        })
                                } catch (o) {
                                    r && r(t)
                                }
                            n(i)
                        }
                    } else
                        r && r(t)
            }
            ;
            try {
                i.open("GET", t, !0),
                i.send(null)
            } catch (s) {
                r && r(t)
            }
            return i
        }
        ,
        e.utils.load = function(e, t, n) {
            e.onreadystatechange = function() {
                e.readyState === 4 && (e.status === 200 ? t && t() : n && n())
            }
        }
        ,
        e.utils.find = function(e, t) {
            return e.getElementsByTagName(t)
        }
        ,
        e.utils.append = function(e, t) {
            e.appendChild(t)
        }
        ,
        e.utils.isIE = function() {
            return typeof window.ActiveXObject != "undefined"
        }
        ,
        e.utils.userAgentMatch = function(e) {
            var t = navigator.userAgent.toLowerCase();
            return t.match(e) !== null
        }
        ,
        e.utils.isIOS = function() {
            return e.utils.userAgentMatch(/iP(hone|ad|od)/i)
        }
        ,
        e.utils.isIPad = function() {
            return e.utils.userAgentMatch(/iPad/i)
        }
        ,
        e.utils.isIPod = function() {
            return e.utils.userAgentMatch(/iP(hone|od)/i)
        }
        ,
        e.utils.isAndroid = function() {
            return e.utils.userAgentMatch(/android/i)
        }
        ,
        e.utils.isLegacyAndroid = function() {
            return e.utils.userAgentMatch(/android 2.[012]/i)
        }
        ,
        e.utils.isBlackberry = function() {
            return e.utils.userAgentMatch(/blackberry/i)
        }
        ,
        e.utils.isMobile = function() {
            return e.utils.userAgentMatch(/(iP(hone|ad|od))|android/i)
        }
        ,
        e.utils.getFirstPlaylistItemFromConfig = function(e) {
            var t = {}, n;
            return e.playlist && e.playlist.length ? n = e.playlist[0] : n = e,
            t.file = n.file,
            t.levels = n.levels,
            t.streamer = n.streamer,
            t.playlistfile = n.playlistfile,
            t.provider = n.provider,
            t.provider || (t.file && (t.file.toLowerCase().indexOf("youtube.com") > -1 || t.file.toLowerCase().indexOf("youtu.be") > -1) && (t.provider = "youtube"),
            t.streamer && t.streamer.toLowerCase().indexOf("rtmp://") == 0 && (t.provider = "rtmp"),
            n.type && (t.provider = n.type.toLowerCase())),
            t.provider == "audio" && (t.provider = "sound"),
            t
        }
        ,
        e.utils.getOuterHTML = function(e) {
            if (e.outerHTML)
                return e.outerHTML;
            try {
                return (new XMLSerializer).serializeToString(e)
            } catch (t) {
                return ""
            }
        }
        ,
        e.utils.setOuterHTML = function(e, t) {
            if (e.outerHTML)
                e.outerHTML = t;
            else {
                var n = document.createElement("div");
                n.innerHTML = t;
                var r = document.createRange();
                r.selectNodeContents(n);
                var i = r.extractContents();
                e.parentNode.insertBefore(i, e),
                e.parentNode.removeChild(e)
            }
        }
        ,
        e.utils.hasFlash = function() {
            if (typeof navigator.plugins != "undefined" && typeof navigator.plugins["Shockwave Flash"] != "undefined")
                return !0;
            if (typeof window.ActiveXObject != "undefined")
                try {
                    return new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),
                    !0
                } catch (e) {}
            return !1
        }
        ,
        e.utils.getPluginName = function(e) {
            return e.lastIndexOf("/") >= 0 && (e = e.substring(e.lastIndexOf("/") + 1, e.length)),
            e.lastIndexOf("-") >= 0 && (e = e.substring(0, e.lastIndexOf("-"))),
            e.lastIndexOf(".swf") >= 0 && (e = e.substring(0, e.lastIndexOf(".swf"))),
            e.lastIndexOf(".js") >= 0 && (e = e.substring(0, e.lastIndexOf(".js"))),
            e
        }
        ,
        e.utils.getPluginVersion = function(e) {
            return e.lastIndexOf("-") >= 0 ? e.lastIndexOf(".js") >= 0 ? e.substring(e.lastIndexOf("-") + 1, e.lastIndexOf(".js")) : e.lastIndexOf(".swf") >= 0 ? e.substring(e.lastIndexOf("-") + 1, e.lastIndexOf(".swf")) : e.substring(e.lastIndexOf("-") + 1) : ""
        }
        ,
        e.utils.getAbsolutePath = function(n, r) {
            e.utils.exists(r) || (r = document.location.href);
            if (!e.utils.exists(n))
                return undefined;
            if (t(n))
                return n;
            var i = r.substring(0, r.indexOf("://") + 3), s = r.substring(i.length, r.indexOf("/", i.length + 1)), o;
            if (n.indexOf("/") === 0)
                o = n.split("/");
            else {
                var u = r.split("?")[0];
                u = u.substring(i.length + s.length + 1, u.lastIndexOf("/")),
                o = u.split("/").concat(n.split("/"))
            }
            var f = [];
            for (var l = 0; l < o.length; l++) {
                if (!o[l] || !e.utils.exists(o[l]) || o[l] == ".")
                    continue;
                o[l] == ".." ? f.pop() : f.push(o[l])
            }
            return i + s + "/" + f.join("/")
        }
        ,
        e.utils.pluginPathType = {
            ABSOLUTE: "ABSOLUTE",
            RELATIVE: "RELATIVE",
            CDN: "CDN"
        },
        e.utils.getPluginPathType = function(t) {
            if (typeof t != "string")
                return;
            t = t.split("?")[0];
            var n = t.indexOf("://");
            if (n > 0)
                return e.utils.pluginPathType.ABSOLUTE;
            var r = t.indexOf("/")
              , i = e.utils.extension(t);
            return n < 0 && r < 0 && (!i || !isNaN(i)) ? e.utils.pluginPathType.CDN : e.utils.pluginPathType.RELATIVE
        }
        ,
        e.utils.mapEmpty = function(e) {
            for (var t in e)
                return !1;
            return !0
        }
        ,
        e.utils.mapLength = function(e) {
            var t = 0;
            for (var n in e)
                t++;
            return t
        }
        ,
        e.utils.log = function(e, t) {
            typeof console != "undefined" && typeof console.log != "undefined" && (t ? console.log(e, t) : console.log(e))
        }
        ,
        e.utils.css = function(t, n, r) {
            if (e.utils.exists(t))
                for (var i in n)
                    try {
                        if (typeof n[i] == "undefined")
                            continue;
                        if (typeof n[i] == "number" && i != "zIndex" && i != "opacity") {
                            if (isNaN(n[i]))
                                continue;
                            i.match(/color/i) ? n[i] = "#" + e.utils.strings.pad(n[i].toString(16), 6) : n[i] = Math.ceil(n[i]) + "px"
                        }
                        t.style[i] = n[i]
                    } catch (s) {}
        }
        ,
        e.utils.isYouTube = function(e) {
            return e.indexOf("youtube.com") > -1 || e.indexOf("youtu.be") > -1
        }
        ,
        e.utils.transform = function(t, n, r, i, s) {
            e.utils.exists(n) || (n = 1),
            e.utils.exists(r) || (r = 1),
            e.utils.exists(i) || (i = 0),
            e.utils.exists(s) || (s = 0);
            if (n == 1 && r == 1 && i == 0 && s == 0)
                t.style.webkitTransform = "",
                t.style.MozTransform = "",
                t.style.OTransform = "";
            else {
                var o = "scale(" + n + "," + r + ") translate(" + i + "px," + s + "px)";
                t.style.webkitTransform = o,
                t.style.MozTransform = o,
                t.style.OTransform = o
            }
        }
        ,
        e.utils.stretch = function(t, n, r, i, s, o) {
            if (typeof r == "undefined" || typeof i == "undefined" || typeof s == "undefined" || typeof o == "undefined")
                return;
            var u = r / s
              , a = i / o
              , f = 0
              , l = 0
              , c = !1
              , h = {};
            n.parentElement && (n.parentElement.style.overflow = "hidden"),
            e.utils.transform(n);
            switch (t.toUpperCase()) {
            case e.utils.stretching.NONE:
                h.width = s,
                h.height = o,
                h.top = (i - h.height) / 2,
                h.left = (r - h.width) / 2;
                break;
            case e.utils.stretching.UNIFORM:
                u > a ? (h.width = s * a,
                h.height = o * a,
                h.width / r > .95 && (c = !0,
                u = Math.ceil(100 * r / h.width) / 100,
                a = 1,
                h.width = r)) : (h.width = s * u,
                h.height = o * u,
                h.height / i > .95 && (c = !0,
                u = 1,
                a = Math.ceil(100 * i / h.height) / 100,
                h.height = i)),
                h.top = (i - h.height) / 2,
                h.left = (r - h.width) / 2;
                break;
            case e.utils.stretching.FILL:
                u > a ? (h.width = s * u,
                h.height = o * u) : (h.width = s * a,
                h.height = o * a),
                h.top = (i - h.height) / 2,
                h.left = (r - h.width) / 2;
                break;
            case e.utils.stretching.EXACTFIT:
                h.width = s,
                h.height = o;
                var p = Math.round(s / 2 * (1 - 1 / u))
                  , d = Math.round(o / 2 * (1 - 1 / a));
                c = !0,
                h.top = h.left = 0;
                break;
            default:
            }
            c && e.utils.transform(n, u, a, p, d),
            e.utils.css(n, h)
        }
        ,
        e.utils.stretching = {
            NONE: "NONE",
            FILL: "FILL",
            UNIFORM: "UNIFORM",
            EXACTFIT: "EXACTFIT"
        },
        e.utils.deepReplaceKeyName = function(t, n, r) {
            switch (e.utils.typeOf(t)) {
            case "array":
                for (var i = 0; i < t.length; i++)
                    t[i] = e.utils.deepReplaceKeyName(t[i], n, r);
                break;
            case "object":
                for (var s in t) {
                    var o, u;
                    if (n instanceof Array && r instanceof Array) {
                        if (n.length != r.length)
                            continue;
                        o = n,
                        u = r
                    } else
                        o = [n],
                        u = [r];
                    var a = s;
                    for (var i = 0; i < o.length; i++)
                        a = a.replace(new RegExp(n[i],"g"), r[i]);
                    t[a] = e.utils.deepReplaceKeyName(t[s], n, r),
                    s != a && delete t[s]
                }
            }
            return t
        }
        ,
        e.utils.isInArray = function(e, t) {
            if (!!e && e instanceof Array) {
                for (var n = 0; n < e.length; n++)
                    if (t === e[n])
                        return !0;
                return !1
            }
            return !1
        }
        ,
        e.utils.exists = function(e) {
            switch (typeof e) {
            case "string":
                return e.length > 0;
            case "object":
                return e !== null;
            case "undefined":
                return !1
            }
            return !0
        }
        ,
        e.utils.empty = function(e) {
            if (typeof e.hasChildNodes == "function")
                while (e.hasChildNodes())
                    e.removeChild(e.firstChild)
        }
        ,
        e.utils.parseDimension = function(e) {
            return typeof e == "string" ? e === "" ? 0 : e.lastIndexOf("%") > -1 ? e : parseInt(e.replace("px", ""), 10) : e
        }
        ,
        e.utils.getDimensions = function(t) {
            return t && t.style ? {
                x: e.utils.parseDimension(t.style.left),
                y: e.utils.parseDimension(t.style.top),
                width: e.utils.parseDimension(t.style.width),
                height: e.utils.parseDimension(t.style.height)
            } : {}
        }
        ,
        e.utils.getElementWidth = function(t) {
            return t ? t == document.body ? e.utils.parentNode(t).clientWidth : t.clientWidth > 0 ? t.clientWidth : t.style ? e.utils.parseDimension(t.style.width) : null : null
        }
        ,
        e.utils.getElementHeight = function(t) {
            return t ? t == document.body ? e.utils.parentNode(t).clientHeight : t.clientHeight > 0 ? t.clientHeight : t.style ? e.utils.parseDimension(t.style.height) : null : null
        }
        ,
        e.utils.timeFormat = function(e) {
            return str = "00:00",
            e > 0 && (str = Math.floor(e / 60) < 10 ? "0" + Math.floor(e / 60) + ":" : Math.floor(e / 60) + ":",
            str += Math.floor(e % 60) < 10 ? "0" + Math.floor(e % 60) : Math.floor(e % 60)),
            str
        }
        ,
        e.utils.useNativeFullscreen = function() {
            return navigator && navigator.vendor && navigator.vendor.indexOf("Apple") == 0
        }
        ,
        e.utils.parentNode = function(e) {
            return e ? e.parentNode ? e.parentNode : e.parentElement ? e.parentElement : e : document.body
        }
        ,
        e.utils.getBoundingClientRect = function(e) {
            return typeof e.getBoundingClientRect == "function" ? e.getBoundingClientRect() : {
                left: e.offsetLeft + document.body.scrollLeft,
                top: e.offsetTop + document.body.scrollTop,
                width: e.offsetWidth,
                height: e.offsetHeight
            }
        }
        ,
        e.utils.translateEventResponse = function(t, n) {
            var r = e.utils.extend({}, n);
            t == e.api.events.JWPLAYER_FULLSCREEN && !r.fullscreen ? (r.fullscreen = r.message == "true" ? !0 : !1,
            delete r.message) : typeof r.data == "object" ? (r = e.utils.extend(r, r.data),
            delete r.data) : typeof r.metadata == "object" && e.utils.deepReplaceKeyName(r.metadata, ["__dot__", "__spc__", "__dsh__"], [".", " ", "-"]);
            var i = ["position", "duration", "offset"];
            for (var s in i)
                r[i[s]] && (r[i[s]] = Math.round(r[i[s]] * 1e3) / 1e3);
            return r
        }
        ,
        e.utils.saveCookie = function(e, t) {
            document.cookie = "jwplayer." + e + "=" + t + "; path=/"
        }
        ,
        e.utils.getCookies = function() {
            var e = {}
              , t = document.cookie.split("; ");
            for (var n = 0; n < t.length; n++) {
                var r = t[n].split("=");
                r[0].indexOf("jwplayer.") == 0 && (e[r[0].substring(9, r[0].length)] = r[1])
            }
            return e
        }
        ,
        e.utils.readCookie = function(t) {
            return e.utils.getCookies()[t]
        }
    }(jwplayer),
    function(e) {
        e.events = function() {}
        ,
        e.events.COMPLETE = "COMPLETE",
        e.events.ERROR = "ERROR"
    }(jwplayer),
    function(jwplayer) {
        jwplayer.events.eventdispatcher = function(debug) {
            var _debug = debug, _listeners, _globallisteners;
            this.resetEventListeners = function() {
                _listeners = {},
                _globallisteners = []
            }
            ,
            this.resetEventListeners(),
            this.addEventListener = function(type, listener, count) {
                try {
                    jwplayer.utils.exists(_listeners[type]) || (_listeners[type] = []),
                    typeof listener == "string" && eval("listener = " + listener),
                    _listeners[type].push({
                        listener: listener,
                        count: count
                    })
                } catch (err) {
                    jwplayer.utils.log("error", err)
                }
                return !1
            }
            ,
            this.removeEventListener = function(e, t) {
                if (!_listeners[e])
                    return;
                try {
                    for (var n = 0; n < _listeners[e].length; n++)
                        if (_listeners[e][n].listener.toString() == t.toString()) {
                            _listeners[e].splice(n, 1);
                            break
                        }
                } catch (r) {
                    jwplayer.utils.log("error", r)
                }
                return !1
            }
            ,
            this.addGlobalListener = function(listener, count) {
                try {
                    typeof listener == "string" && eval("listener = " + listener),
                    _globallisteners.push({
                        listener: listener,
                        count: count
                    })
                } catch (err) {
                    jwplayer.utils.log("error", err)
                }
                return !1
            }
            ,
            this.removeGlobalListener = function(e) {
                if (!e)
                    return;
                try {
                    for (var t = 0; t < _globallisteners.length; t++)
                        if (_globallisteners[t].listener.toString() == e.toString()) {
                            _globallisteners.splice(t, 1);
                            break
                        }
                } catch (n) {
                    jwplayer.utils.log("error", n)
                }
                return !1
            }
            ,
            this.sendEvent = function(e, t) {
                jwplayer.utils.exists(t) || (t = {}),
                _debug && jwplayer.utils.log(e, t);
                if (typeof _listeners[e] != "undefined")
                    for (var n = 0; n < _listeners[e].length; n++) {
                        try {
                            _listeners[e][n].listener(t)
                        } catch (r) {
                            jwplayer.utils.log("There was an error while handling a listener: " + r.toString(), _listeners[e][n].listener)
                        }
                        _listeners[e][n] && (_listeners[e][n].count === 1 ? delete _listeners[e][n] : _listeners[e][n].count > 0 && (_listeners[e][n].count = _listeners[e][n].count - 1))
                    }
                for (var i = 0; i < _globallisteners.length; i++) {
                    try {
                        _globallisteners[i].listener(t)
                    } catch (r) {
                        jwplayer.utils.log("There was an error while handling a listener: " + r.toString(), _globallisteners[i].listener)
                    }
                    _globallisteners[i] && (_globallisteners[i].count === 1 ? delete _globallisteners[i] : _globallisteners[i].count > 0 && (_globallisteners[i].count = _globallisteners[i].count - 1))
                }
            }
        }
    }(jwplayer),
    function(e) {
        var t = {};
        e.utils.animations = function() {}
        ,
        e.utils.animations.transform = function(e, t) {
            e.style.webkitTransform = t,
            e.style.MozTransform = t,
            e.style.OTransform = t,
            e.style.msTransform = t
        }
        ,
        e.utils.animations.transformOrigin = function(e, t) {
            e.style.webkitTransformOrigin = t,
            e.style.MozTransformOrigin = t,
            e.style.OTransformOrigin = t,
            e.style.msTransformOrigin = t
        }
        ,
        e.utils.animations.rotate = function(t, n) {
            e.utils.animations.transform(t, ["rotate(", n, "deg)"].join(""))
        }
        ,
        e.utils.cancelAnimation = function(e) {
            delete t[e.id]
        }
        ,
        e.utils.fadeTo = function(n, r, i, s, o, u) {
            if (t[n.id] != u && e.utils.exists(u))
                return;
            if (n.style.opacity == r)
                return;
            var f = (new Date).getTime();
            u > f && setTimeout(function() {
                e.utils.fadeTo(n, r, i, s, 0, u)
            }, u - f),
            n.style.display == "none" && (n.style.display = "block"),
            e.utils.exists(s) || (s = n.style.opacity === "" ? 1 : n.style.opacity);
            if (n.style.opacity == r && n.style.opacity !== "" && e.utils.exists(u)) {
                r === 0 && (n.style.display = "none");
                return
            }
            e.utils.exists(u) || (u = f,
            t[n.id] = u),
            e.utils.exists(o) || (o = 0);
            var l = i > 0 ? (f - u) / (i * 1e3) : 0;
            l = l > 1 ? 1 : l;
            var c = r - s
              , h = s + l * c;
            h > 1 ? h = 1 : h < 0 && (h = 0),
            n.style.opacity = h;
            if (o > 0) {
                t[n.id] = u + o * 1e3,
                e.utils.fadeTo(n, r, i, s, 0, t[n.id]);
                return
            }
            setTimeout(function() {
                e.utils.fadeTo(n, r, i, s, 0, u)
            }, 10)
        }
    }(jwplayer),
    function(e) {
        e.utils.arrays = function() {}
        ,
        e.utils.arrays.indexOf = function(e, t) {
            for (var n = 0; n < e.length; n++)
                if (e[n] == t)
                    return n;
            return -1
        }
        ,
        e.utils.arrays.remove = function(t, n) {
            var r = e.utils.arrays.indexOf(t, n);
            r > -1 && t.splice(r, 1)
        }
    }(jwplayer),
    function(e) {
        e.utils.extensionmap = {
            "3gp": {
                html5: "video/3gpp",
                flash: "video"
            },
            "3gpp": {
                html5: "video/3gpp"
            },
            "3g2": {
                html5: "video/3gpp2",
                flash: "video"
            },
            "3gpp2": {
                html5: "video/3gpp2"
            },
            flv: {
                flash: "video"
            },
            f4a: {
                html5: "audio/mp4"
            },
            f4b: {
                html5: "audio/mp4",
                flash: "video"
            },
            f4v: {
                html5: "video/mp4",
                flash: "video"
            },
            mov: {
                html5: "video/quicktime",
                flash: "video"
            },
            m4a: {
                html5: "audio/mp4",
                flash: "video"
            },
            m4b: {
                html5: "audio/mp4"
            },
            m4p: {
                html5: "audio/mp4"
            },
            m4v: {
                html5: "video/mp4",
                flash: "video"
            },
            mp4: {
                html5: "video/mp4",
                flash: "video"
            },
            rbs: {
                flash: "sound"
            },
            aac: {
                html5: "audio/aac",
                flash: "video"
            },
            mp3: {
                html5: "audio/mp3",
                flash: "sound"
            },
            ogg: {
                html5: "audio/ogg"
            },
            oga: {
                html5: "audio/ogg"
            },
            ogv: {
                html5: "video/ogg"
            },
            webm: {
                html5: "video/webm"
            },
            m3u8: {
                html5: "audio/x-mpegurl"
            },
            gif: {
                flash: "image"
            },
            jpeg: {
                flash: "image"
            },
            jpg: {
                flash: "image"
            },
            swf: {
                flash: "image"
            },
            png: {
                flash: "image"
            },
            wav: {
                html5: "audio/x-wav"
            }
        }
    }(jwplayer),
    function(e) {
        function r(n, r) {
            return e.utils.exists(r) ? e.utils.extend(r, t[n]) : r = t[n],
            r
        }
        function i(t, i) {
            if (n[t.tagName.toLowerCase()] && !e.utils.exists(i))
                return n[t.tagName.toLowerCase()](t);
            i = r("element", i);
            var s = {};
            for (var o in i)
                if (o != "length") {
                    var u = t.getAttribute(o);
                    e.utils.exists(u) && (s[i[o]] = u)
                }
            var a = t.style["#background-color"];
            return a && a != "transparent" && a != "rgba(0, 0, 0, 0)" && (s.screencolor = a),
            s
        }
        function s(t, n) {
            n = r("media", n);
            var s = []
              , u = e.utils.selectors("source", t);
            for (var f in u)
                isNaN(f) || s.push(o(u[f]));
            var l = i(t, n);
            return e.utils.exists(l.file) && (s[0] = {
                file: l.file
            }),
            l.levels = s,
            l
        }
        function o(e, t) {
            t = r("source", t);
            var n = i(e, t);
            return n.width = n.width ? n.width : 0,
            n.bitrate = n.bitrate ? n.bitrate : 0,
            n
        }
        function u(e, t) {
            t = r("video", t);
            var n = s(e, t);
            return n
        }
        e.utils.mediaparser = function() {}
        ;
        var t = {
            element: {
                width: "width",
                height: "height",
                id: "id",
                "class": "className",
                name: "name"
            },
            media: {
                src: "file",
                preload: "preload",
                autoplay: "autostart",
                loop: "repeat",
                controls: "controls"
            },
            source: {
                src: "file",
                type: "type",
                media: "media",
                "data-jw-width": "width",
                "data-jw-bitrate": "bitrate"
            },
            video: {
                poster: "image"
            }
        }
          , n = {};
        e.utils.mediaparser.parseMedia = function(e) {
            return i(e)
        }
        ,
        n.media = s,
        n.audio = s,
        n.source = o,
        n.video = u
    }(jwplayer),
    function(e) {
        e.utils.loaderstatus = {
            NEW: "NEW",
            LOADING: "LOADING",
            ERROR: "ERROR",
            COMPLETE: "COMPLETE"
        },
        e.utils.scriptloader = function(t) {
            var n = e.utils.loaderstatus.NEW
              , r = new e.events.eventdispatcher;
            e.utils.extend(this, r),
            this.load = function() {
                if (n == e.utils.loaderstatus.NEW) {
                    n = e.utils.loaderstatus.LOADING;
                    var i = document.createElement("script");
                    i.onload = function(t) {
                        n = e.utils.loaderstatus.COMPLETE,
                        r.sendEvent(e.events.COMPLETE)
                    }
                    ,
                    i.onerror = function(t) {
                        n = e.utils.loaderstatus.ERROR,
                        r.sendEvent(e.events.ERROR)
                    }
                    ,
                    i.onreadystatechange = function() {
                        if (i.readyState == "loaded" || i.readyState == "complete")
                            n = e.utils.loaderstatus.COMPLETE,
                            r.sendEvent(e.events.COMPLETE)
                    }
                    ,
                    document.getElementsByTagName("head")[0].appendChild(i),
                    i.src = t
                }
            }
            ,
            this.getStatus = function() {
                return n
            }
        }
    }(jwplayer),
    function(e) {
        e.utils.selectors = function(t, n) {
            e.utils.exists(n) || (n = document),
            t = e.utils.strings.trim(t);
            var r = t.charAt(0);
            if (r == "#")
                return n.getElementById(t.substr(1));
            if (r == ".")
                return n.getElementsByClassName ? n.getElementsByClassName(t.substr(1)) : e.utils.selectors.getElementsByTagAndClass("*", t.substr(1));
            if (t.indexOf(".") > 0) {
                var i = t.split(".");
                return e.utils.selectors.getElementsByTagAndClass(i[0], i[1])
            }
            return n.getElementsByTagName(t)
        }
        ,
        e.utils.selectors.getElementsByTagAndClass = function(t, n, r) {
            var i = [];
            e.utils.exists(r) || (r = document);
            var s = r.getElementsByTagName(t);
            for (var o = 0; o < s.length; o++)
                if (e.utils.exists(s[o].className)) {
                    var u = s[o].className.split(" ");
                    for (var f = 0; f < u.length; f++)
                        u[f] == n && i.push(s[o])
                }
            return i
        }
    }(jwplayer),
    function(e) {
        e.utils.strings = function() {}
        ,
        e.utils.strings.trim = function(e) {
            return e.replace(/^\s*/, "").replace(/\s*$/, "")
        }
        ,
        e.utils.strings.pad = function(e, t, n) {
            n || (n = "0");
            while (e.length < t)
                e = n + e;
            return e
        }
        ,
        e.utils.strings.serialize = function(e) {
            return e == null ? null : e == "true" ? !0 : e == "false" ? !1 : isNaN(Number(e)) || e.length > 5 || e.length == 0 ? e : Number(e)
        }
        ,
        e.utils.strings.seconds = function(e) {
            e = e.replace(",", ".");
            var t = e.split(":")
              , n = 0;
            return e.substr(-1) == "s" ? n = Number(e.substr(0, e.length - 1)) : e.substr(-1) == "m" ? n = Number(e.substr(0, e.length - 1)) * 60 : e.substr(-1) == "h" ? n = Number(e.substr(0, e.length - 1)) * 3600 : t.length > 1 ? (n = Number(t[t.length - 1]),
            n += Number(t[t.length - 2]) * 60,
            t.length == 3 && (n += Number(t[t.length - 3]) * 3600)) : n = Number(e),
            n
        }
        ,
        e.utils.strings.xmlAttribute = function(e, t) {
            for (var n = 0; n < e.attributes.length; n++)
                if (e.attributes[n].name && e.attributes[n].name.toLowerCase() == t.toLowerCase())
                    return e.attributes[n].value.toString();
            return ""
        }
        ,
        e.utils.strings.jsonToString = function(t) {
            var n = n || {};
            if (n && n.stringify)
                return n.stringify(t);
            var r = typeof t;
            if (r == "object" && t !== null) {
                var i = []
                  , s = t && t.constructor == Array;
                for (var o in t) {
                    var u = t[o];
                    switch (typeof u) {
                    case "string":
                        u = '"' + u.replace(/"/g, '\\"') + '"';
                        break;
                    case "object":
                        e.utils.exists(u) && (u = e.utils.strings.jsonToString(u))
                    }
                    s ? typeof u != "function" && i.push(String(u)) : typeof u != "function" && i.push('"' + o + '":' + String(u))
                }
                return s ? "[" + String(i) + "]" : "{" + String(i) + "}"
            }
            if (r != "string")
                return String(t);
            t = '"' + t.replace(/"/g, '\\"') + '"'
        }
    }(jwplayer),
    function(e) {
        function n(e) {
            var n = ["true", "false", "t", "f"];
            return n.toString().indexOf(e.toLowerCase().replace(" ", "")) >= 0 ? "boolean" : t.test(e) ? "color" : !isNaN(parseInt(e, 10)) && parseInt(e, 10).toString().length == e.length ? "integer" : !isNaN(parseFloat(e)) && parseFloat(e).toString().length == e.length ? "float" : "string"
        }
        function r(t, n) {
            if (!e.utils.exists(n))
                return t;
            switch (n) {
            case "color":
                if (t.length > 0)
                    return i(t);
                return null;
            case "integer":
                return parseInt(t, 10);
            case "float":
                return parseFloat(t);
            case "boolean":
                if (t.toLowerCase() == "true")
                    return !0;
                if (t == "1")
                    return !0;
                return !1
            }
            return t
        }
        function i(e) {
            switch (e.toLowerCase()) {
            case "blue":
                return parseInt("0000FF", 16);
            case "green":
                return parseInt("00FF00", 16);
            case "red":
                return parseInt("FF0000", 16);
            case "cyan":
                return parseInt("00FFFF", 16);
            case "magenta":
                return parseInt("FF00FF", 16);
            case "yellow":
                return parseInt("FFFF00", 16);
            case "black":
                return parseInt("000000", 16);
            case "white":
                return parseInt("FFFFFF", 16);
            default:
                return e = e.replace(/(#|0x)?([0-9A-F]{3,6})$/gi, "$2"),
                e.length == 3 && (e = e.charAt(0) + e.charAt(0) + e.charAt(1) + e.charAt(1) + e.charAt(2) + e.charAt(2)),
                parseInt(e, 16)
            }
            return parseInt("000000", 16)
        }
        var t = new RegExp(/^(#|0x)[0-9a-fA-F]{3,6}/);
        e.utils.typechecker = function(t, i) {
            return i = e.utils.exists(i) ? i : n(t),
            r(t, i)
        }
    }(jwplayer),
    function(e) {
        e.utils.parsers = function() {}
        ,
        e.utils.parsers.localName = function(e) {
            return e ? e.localName ? e.localName : e.baseName ? e.baseName : "" : ""
        }
        ,
        e.utils.parsers.textContent = function(e) {
            return e ? e.textContent ? e.textContent : e.text ? e.text : "" : ""
        }
    }(jwplayer),
    function(e) {
        e.utils.parsers.jwparser = function() {}
        ,
        e.utils.parsers.jwparser.PREFIX = "jwplayer",
        e.utils.parsers.jwparser.parseEntry = function(t, n) {
            for (var r = 0; r < t.childNodes.length; r++)
                t.childNodes[r].prefix == e.utils.parsers.jwparser.PREFIX && (n[e.utils.parsers.localName(t.childNodes[r])] = e.utils.strings.serialize(e.utils.parsers.textContent(t.childNodes[r])),
                e.utils.parsers.localName(t.childNodes[r]) == "file" && n.levels && delete n.levels),
                !n.file && String(n.link).toLowerCase().indexOf("youtube") > -1 && (n.file = n.link);
            return n
        }
        ,
        e.utils.parsers.jwparser.getProvider = function(t) {
            if (t.type)
                return t.type;
            if (t.file.indexOf("youtube.com/w") > -1 || t.file.indexOf("youtube.com/v") > -1 || t.file.indexOf("youtu.be/") > -1)
                return "youtube";
            if (t.streamer && t.streamer.indexOf("rtmp") == 0)
                return "rtmp";
            if (t.streamer && t.streamer.indexOf("http") == 0)
                return "http";
            var n = e.utils.strings.extension(t.file);
            return extensions.hasOwnProperty(n) ? extensions[n] : ""
        }
    }(jwplayer),
    function(e) {
        e.utils.parsers.mediaparser = function() {}
        ,
        e.utils.parsers.mediaparser.PREFIX = "media",
        e.utils.parsers.mediaparser.parseGroup = function(t, n) {
            var r = !1;
            for (var i = 0; i < t.childNodes.length; i++)
                if (t.childNodes[i].prefix == e.utils.parsers.mediaparser.PREFIX) {
                    if (!e.utils.parsers.localName(t.childNodes[i]))
                        continue;
                    switch (e.utils.parsers.localName(t.childNodes[i]).toLowerCase()) {
                    case "content":
                        r || (n.file = e.utils.strings.xmlAttribute(t.childNodes[i], "url")),
                        e.utils.strings.xmlAttribute(t.childNodes[i], "duration") && (n.duration = e.utils.strings.seconds(e.utils.strings.xmlAttribute(t.childNodes[i], "duration"))),
                        e.utils.strings.xmlAttribute(t.childNodes[i], "start") && (n.start = e.utils.strings.seconds(e.utils.strings.xmlAttribute(t.childNodes[i], "start"))),
                        t.childNodes[i].childNodes && t.childNodes[i].childNodes.length > 0 && (n = e.utils.parsers.mediaparser.parseGroup(t.childNodes[i], n));
                        if (e.utils.strings.xmlAttribute(t.childNodes[i], "width") || e.utils.strings.xmlAttribute(t.childNodes[i], "bitrate") || e.utils.strings.xmlAttribute(t.childNodes[i], "url"))
                            n.levels || (n.levels = []),
                            n.levels.push({
                                width: e.utils.strings.xmlAttribute(t.childNodes[i], "width"),
                                bitrate: e.utils.strings.xmlAttribute(t.childNodes[i], "bitrate"),
                                file: e.utils.strings.xmlAttribute(t.childNodes[i], "url")
                            });
                        break;
                    case "title":
                        n.title = e.utils.parsers.textContent(t.childNodes[i]);
                        break;
                    case "description":
                        n.description = e.utils.parsers.textContent(t.childNodes[i]);
                        break;
                    case "keywords":
                        n.tags = e.utils.parsers.textContent(t.childNodes[i]);
                        break;
                    case "thumbnail":
                        n.image = e.utils.strings.xmlAttribute(t.childNodes[i], "url");
                        break;
                    case "credit":
                        n.author = e.utils.parsers.textContent(t.childNodes[i]);
                        break;
                    case "player":
                        var s = t.childNodes[i].url;
                        if (s.indexOf("youtube.com") >= 0 || s.indexOf("youtu.be") >= 0)
                            r = !0,
                            n.file = e.utils.strings.xmlAttribute(t.childNodes[i], "url");
                        break;
                    case "group":
                        e.utils.parsers.mediaparser.parseGroup(t.childNodes[i], n)
                    }
                }
            return n
        }
    }(jwplayer),
    function(e) {
        function t(t) {
            var n = {};
            for (var r = 0; r < t.childNodes.length; r++) {
                if (!e.utils.parsers.localName(t.childNodes[r]))
                    continue;
                switch (e.utils.parsers.localName(t.childNodes[r]).toLowerCase()) {
                case "enclosure":
                    n.file = e.utils.strings.xmlAttribute(t.childNodes[r], "url");
                    break;
                case "title":
                    n.title = e.utils.parsers.textContent(t.childNodes[r]);
                    break;
                case "pubdate":
                    n.date = e.utils.parsers.textContent(t.childNodes[r]);
                    break;
                case "description":
                    n.description = e.utils.parsers.textContent(t.childNodes[r]);
                    break;
                case "link":
                    n.link = e.utils.parsers.textContent(t.childNodes[r]);
                    break;
                case "category":
                    n.tags ? n.tags += e.utils.parsers.textContent(t.childNodes[r]) : n.tags = e.utils.parsers.textContent(t.childNodes[r])
                }
            }
            return n = e.utils.parsers.mediaparser.parseGroup(t, n),
            n = e.utils.parsers.jwparser.parseEntry(t, n),
            new e.html5.playlistitem(n)
        }
        e.utils.parsers.rssparser = function() {}
        ,
        e.utils.parsers.rssparser.parse = function(n) {
            var r = [];
            for (var i = 0; i < n.childNodes.length; i++)
                if (e.utils.parsers.localName(n.childNodes[i]).toLowerCase() == "channel")
                    for (var s = 0; s < n.childNodes[i].childNodes.length; s++)
                        e.utils.parsers.localName(n.childNodes[i].childNodes[s]).toLowerCase() == "item" && r.push(t(n.childNodes[i].childNodes[s]));
            return r
        }
    }(jwplayer),
    function(e) {
        var t = {}
          , n = {};
        e.plugins = function() {}
        ,
        e.plugins.loadPlugins = function(r, i) {
            return n[r] = new e.plugins.pluginloader(new e.plugins.model(t),i),
            n[r]
        }
        ,
        e.plugins.registerPlugin = function(r, i, s) {
            var o = e.utils.getPluginName(r);
            if (t[o])
                t[o].registerPlugin(r, i, s);
            else {
                e.utils.log("A plugin (" + r + ") was registered with the player that was not loaded. Please check your configuration.");
                for (var u in n)
                    n[u].pluginFailed()
            }
        }
    }(jwplayer),
    function(e) {
        e.plugins.model = function(t) {
            this.addPlugin = function(n) {
                var r = e.utils.getPluginName(n);
                return t[r] || (t[r] = new e.plugins.plugin(n)),
                t[r]
            }
        }
    }(jwplayer),
    function(e) {
        e.plugins.pluginmodes = {
            FLASH: "FLASH",
            JAVASCRIPT: "JAVASCRIPT",
            HYBRID: "HYBRID"
        },
        e.plugins.plugin = function(t) {
            function f() {
                switch (e.utils.getPluginPathType(t)) {
                case e.utils.pluginPathType.ABSOLUTE:
                    return t;
                case e.utils.pluginPathType.RELATIVE:
                    return e.utils.getAbsolutePath(t, window.location.href);
                case e.utils.pluginPathType.CDN:
                    var r = e.utils.getPluginName(t)
                      , i = e.utils.getPluginVersion(t)
                      , s = window.location.href.indexOf("https://") == 0 ? n.replace("http://", "https://secure") : n;
                    return s + "/" + e.version.split(".")[0] + "/" + r + "/" + r + (i !== "" ? "-" + i : "") + ".js"
                }
            }
            function l(t) {
                o = setTimeout(function() {
                    r = e.utils.loaderstatus.COMPLETE,
                    u.sendEvent(e.events.COMPLETE)
                }, 1e3)
            }
            function c(t) {
                r = e.utils.loaderstatus.ERROR,
                u.sendEvent(e.events.ERROR)
            }
            var n = "http://lp.longtailvideo.com", r = e.utils.loaderstatus.NEW, i, s, o, u = new e.events.eventdispatcher;
            e.utils.extend(this, u),
            this.load = function() {
                if (r == e.utils.loaderstatus.NEW) {
                    if (t.lastIndexOf(".swf") > 0) {
                        i = t,
                        r = e.utils.loaderstatus.COMPLETE,
                        u.sendEvent(e.events.COMPLETE);
                        return
                    }
                    r = e.utils.loaderstatus.LOADING;
                    var n = new e.utils.scriptloader(f());
                    n.addEventListener(e.events.COMPLETE, l),
                    n.addEventListener(e.events.ERROR, c),
                    n.load()
                }
            }
            ,
            this.registerPlugin = function(t, n, f) {
                o && (clearTimeout(o),
                o = undefined),
                n && f ? (i = f,
                s = n) : typeof n == "string" ? i = n : typeof n == "function" ? s = n : !n && !f && (i = t),
                r = e.utils.loaderstatus.COMPLETE,
                u.sendEvent(e.events.COMPLETE)
            }
            ,
            this.getStatus = function() {
                return r
            }
            ,
            this.getPluginName = function() {
                return e.utils.getPluginName(t)
            }
            ,
            this.getFlashPath = function() {
                if (i)
                    switch (e.utils.getPluginPathType(i)) {
                    case e.utils.pluginPathType.ABSOLUTE:
                        return i;
                    case e.utils.pluginPathType.RELATIVE:
                        if (t.lastIndexOf(".swf") > 0)
                            return e.utils.getAbsolutePath(i, window.location.href);
                        return e.utils.getAbsolutePath(i, f());
                    case e.utils.pluginPathType.CDN:
                        if (i.indexOf("-") > -1)
                            return i + "h";
                        return i + "-h"
                    }
                return null
            }
            ,
            this.getJS = function() {
                return s
            }
            ,
            this.getPluginmode = function() {
                if (typeof i != "undefined" && typeof s != "undefined")
                    return e.plugins.pluginmodes.HYBRID;
                if (typeof i != "undefined")
                    return e.plugins.pluginmodes.FLASH;
                if (typeof s != "undefined")
                    return e.plugins.pluginmodes.JAVASCRIPT
            }
            ,
            this.getNewInstance = function(e, t, n) {
                return new s(e,t,n)
            }
            ,
            this.getURL = function() {
                return t
            }
        }
    }(jwplayer),
    function(e) {
        e.plugins.pluginloader = function(t, n) {
            function f() {
                o || (o = !0,
                i = e.utils.loaderstatus.COMPLETE,
                u.sendEvent(e.events.COMPLETE))
            }
            function l() {
                if (!o) {
                    var t = 0;
                    for (plugin in r) {
                        var n = r[plugin].getStatus();
                        (n == e.utils.loaderstatus.LOADING || n == e.utils.loaderstatus.NEW) && t++
                    }
                    t == 0 && f()
                }
            }
            var r = {}
              , i = e.utils.loaderstatus.NEW
              , s = !1
              , o = !1
              , u = new e.events.eventdispatcher;
            e.utils.extend(this, u),
            this.setupPlugins = function(e, t, n) {
                var i = {
                    length: 0,
                    plugins: {}
                }
                  , s = {
                    length: 0,
                    plugins: {}
                };
                for (var o in r) {
                    var u = r[o].getPluginName();
                    r[o].getFlashPath() && (i.plugins[r[o].getFlashPath()] = t.plugins[o],
                    i.plugins[r[o].getFlashPath()].pluginmode = r[o].getPluginmode(),
                    i.length++);
                    if (r[o].getJS()) {
                        var a = document.createElement("div");
                        a.id = e.id + "_" + u,
                        a.style.position = "absolute",
                        a.style.zIndex = s.length + 10,
                        s.plugins[u] = r[o].getNewInstance(e, t.plugins[o], a),
                        s.length++,
                        typeof s.plugins[u].resize != "undefined" && (e.onReady(n(s.plugins[u], a, !0)),
                        e.onResize(n(s.plugins[u], a)))
                    }
                }
                return e.plugins = s.plugins,
                i
            }
            ,
            this.load = function() {
                i = e.utils.loaderstatus.LOADING,
                s = !0;
                for (var o in n)
                    e.utils.exists(o) && (r[o] = t.addPlugin(o),
                    r[o].addEventListener(e.events.COMPLETE, l),
                    r[o].addEventListener(e.events.ERROR, l));
                for (o in r)
                    r[o].load();
                s = !1,
                l()
            }
            ,
            this.pluginFailed = function() {
                f()
            }
            ,
            this.getStatus = function() {
                return i
            }
        }
    }(jwplayer),
    function(e) {
        var t = [];
        e.api = function(t) {
            function p(e, t) {
                return function(n, r, i, s) {
                    if (e.renderingMode == "flash" || e.renderingMode == "html5") {
                        var u;
                        r ? (h[n] = r,
                        u = "jwplayer('" + e.id + "').callback('" + n + "')") : !r && h[n] && delete h[n],
                        o.jwDockSetButton(n, u, i, s)
                    }
                    return t
                }
            }
            function d(t) {
                a = [],
                e.utils.getOuterHTML(t.container) != l && e.api.destroyPlayer(t.id, l)
            }
            function v(e) {
                return function(t) {
                    var n = t.newstate
                      , i = t.oldstate;
                    if (n == e) {
                        var s = r[n];
                        if (s)
                            for (var o = 0; o < s.length; o++)
                                typeof s[o] == "function" && s[o].call(this, {
                                    oldstate: i,
                                    newstate: n
                                })
                    }
                }
            }
            function m(e, t) {
                return function(n) {
                    if (e == n.component) {
                        var r = i[e][t];
                        if (r)
                            for (var s = 0; s < r.length; s++)
                                typeof r[s] == "function" && r[s].call(this, n)
                    }
                }
            }
            function g(e, t, n) {
                var r = [];
                t || (t = 0),
                n || (n = e.length - 1);
                for (var i = t; i <= n; i++)
                    r.push(e[i]);
                return r
            }
            this.container = t,
            this.id = t.id;
            var n = {}
              , r = {}
              , i = {}
              , s = []
              , o = undefined
              , u = !1
              , a = []
              , f = undefined
              , l = e.utils.getOuterHTML(t)
              , c = {}
              , h = {};
            return this.getBuffer = function() {
                return this.callInternal("jwGetBuffer")
            }
            ,
            this.getContainer = function() {
                return this.container
            }
            ,
            this.getPlugin = function(t) {
                var n = this
                  , r = {};
                return t == "dock" ? e.utils.extend(r, {
                    setButton: p(n, r),
                    show: function() {
                        return n.callInternal("jwDockShow"),
                        r
                    },
                    hide: function() {
                        return n.callInternal("jwDockHide"),
                        r
                    },
                    onShow: function(t) {
                        return n.componentListener("dock", e.api.events.JWPLAYER_COMPONENT_SHOW, t),
                        r
                    },
                    onHide: function(t) {
                        return n.componentListener("dock", e.api.events.JWPLAYER_COMPONENT_HIDE, t),
                        r
                    }
                }) : t == "controlbar" ? e.utils.extend(r, {
                    show: function() {
                        return n.callInternal("jwControlbarShow"),
                        r
                    },
                    hide: function() {
                        return n.callInternal("jwControlbarHide"),
                        r
                    },
                    onShow: function(t) {
                        return n.componentListener("controlbar", e.api.events.JWPLAYER_COMPONENT_SHOW, t),
                        r
                    },
                    onHide: function(t) {
                        return n.componentListener("controlbar", e.api.events.JWPLAYER_COMPONENT_HIDE, t),
                        r
                    }
                }) : t == "display" ? e.utils.extend(r, {
                    show: function() {
                        return n.callInternal("jwDisplayShow"),
                        r
                    },
                    hide: function() {
                        return n.callInternal("jwDisplayHide"),
                        r
                    },
                    onShow: function(t) {
                        return n.componentListener("display", e.api.events.JWPLAYER_COMPONENT_SHOW, t),
                        r
                    },
                    onHide: function(t) {
                        return n.componentListener("display", e.api.events.JWPLAYER_COMPONENT_HIDE, t),
                        r
                    }
                }) : this.plugins[t]
            }
            ,
            this.callback = function(e) {
                if (h[e])
                    return h[e]()
            }
            ,
            this.getDuration = function() {
                return this.callInternal("jwGetDuration")
            }
            ,
            this.getFullscreen = function() {
                return this.callInternal("jwGetFullscreen")
            }
            ,
            this.getHeight = function() {
                return this.callInternal("jwGetHeight")
            }
            ,
            this.getLockState = function() {
                return this.callInternal("jwGetLockState")
            }
            ,
            this.getMeta = function() {
                return this.getItemMeta()
            }
            ,
            this.getMute = function() {
                return this.callInternal("jwGetMute")
            }
            ,
            this.getPlaylist = function() {
                var t = this.callInternal("jwGetPlaylist");
                this.renderingMode == "flash" && e.utils.deepReplaceKeyName(t, ["__dot__", "__spc__", "__dsh__"], [".", " ", "-"]);
                for (var n = 0; n < t.length; n++)
                    e.utils.exists(t[n].index) || (t[n].index = n);
                return t
            }
            ,
            this.getPlaylistItem = function(t) {
                return e.utils.exists(t) || (t = this.getCurrentItem()),
                this.getPlaylist()[t]
            }
            ,
            this.getPosition = function() {
                return this.callInternal("jwGetPosition")
            }
            ,
            this.getRenderingMode = function() {
                return this.renderingMode
            }
            ,
            this.getState = function() {
                return this.callInternal("jwGetState")
            }
            ,
            this.getVolume = function() {
                return this.callInternal("jwGetVolume")
            }
            ,
            this.getWidth = function() {
                return this.callInternal("jwGetWidth")
            }
            ,
            this.setFullscreen = function(t) {
                return e.utils.exists(t) ? this.callInternal("jwSetFullscreen", t) : this.callInternal("jwSetFullscreen", !this.callInternal("jwGetFullscreen")),
                this
            }
            ,
            this.setMute = function(t) {
                return e.utils.exists(t) ? this.callInternal("jwSetMute", t) : this.callInternal("jwSetMute", !this.callInternal("jwGetMute")),
                this
            }
            ,
            this.lock = function() {
                return this
            }
            ,
            this.unlock = function() {
                return this
            }
            ,
            this.load = function(e) {
                return this.callInternal("jwLoad", e),
                this
            }
            ,
            this.playlistItem = function(e) {
                return this.callInternal("jwPlaylistItem", e),
                this
            }
            ,
            this.playlistPrev = function() {
                return this.callInternal("jwPlaylistPrev"),
                this
            }
            ,
            this.playlistNext = function() {
                return this.callInternal("jwPlaylistNext"),
                this
            }
            ,
            this.resize = function(e, t) {
                if (this.renderingMode == "html5")
                    o.jwResize(e, t);
                else {
                    this.container.width = e,
                    this.container.height = t;
                    var n = document.getElementById(this.id + "_wrapper");
                    n && (n.style.width = e + "px",
                    n.style.height = t + "px")
                }
                return this
            }
            ,
            this.play = function(t) {
                return typeof t == "undefined" ? (t = this.getState(),
                t == e.api.events.state.PLAYING || t == e.api.events.state.BUFFERING ? this.callInternal("jwPause") : this.callInternal("jwPlay")) : this.callInternal("jwPlay", t),
                this
            }
            ,
            this.pause = function(t) {
                return typeof t == "undefined" ? (t = this.getState(),
                t == e.api.events.state.PLAYING || t == e.api.events.state.BUFFERING ? this.callInternal("jwPause") : this.callInternal("jwPlay")) : this.callInternal("jwPause", t),
                this
            }
            ,
            this.stop = function() {
                return this.callInternal("jwStop"),
                this
            }
            ,
            this.seek = function(e) {
                return this.callInternal("jwSeek", e),
                this
            }
            ,
            this.setVolume = function(e) {
                return this.callInternal("jwSetVolume", e),
                this
            }
            ,
            this.loadInstream = function(t, n) {
                return f = new e.api.instream(this,o,t,n),
                f
            }
            ,
            this.onBufferChange = function(t) {
                return this.eventListener(e.api.events.JWPLAYER_MEDIA_BUFFER, t)
            }
            ,
            this.onBufferFull = function(t) {
                return this.eventListener(e.api.events.JWPLAYER_MEDIA_BUFFER_FULL, t)
            }
            ,
            this.onError = function(t) {
                return this.eventListener(e.api.events.JWPLAYER_ERROR, t)
            }
            ,
            this.onFullscreen = function(t) {
                return this.eventListener(e.api.events.JWPLAYER_FULLSCREEN, t)
            }
            ,
            this.onMeta = function(t) {
                return this.eventListener(e.api.events.JWPLAYER_MEDIA_META, t)
            }
            ,
            this.onMute = function(t) {
                return this.eventListener(e.api.events.JWPLAYER_MEDIA_MUTE, t)
            }
            ,
            this.onPlaylist = function(t) {
                return this.eventListener(e.api.events.JWPLAYER_PLAYLIST_LOADED, t)
            }
            ,
            this.onPlaylistItem = function(t) {
                return this.eventListener(e.api.events.JWPLAYER_PLAYLIST_ITEM, t)
            }
            ,
            this.onReady = function(t) {
                return this.eventListener(e.api.events.API_READY, t)
            }
            ,
            this.onResize = function(t) {
                return this.eventListener(e.api.events.JWPLAYER_RESIZE, t)
            }
            ,
            this.onComplete = function(t) {
                return this.eventListener(e.api.events.JWPLAYER_MEDIA_COMPLETE, t)
            }
            ,
            this.onSeek = function(t) {
                return this.eventListener(e.api.events.JWPLAYER_MEDIA_SEEK, t)
            }
            ,
            this.onTime = function(t) {
                return this.eventListener(e.api.events.JWPLAYER_MEDIA_TIME, t)
            }
            ,
            this.onVolume = function(t) {
                return this.eventListener(e.api.events.JWPLAYER_MEDIA_VOLUME, t)
            }
            ,
            this.onBeforePlay = function(t) {
                return this.eventListener(e.api.events.JWPLAYER_MEDIA_BEFOREPLAY, t)
            }
            ,
            this.onBeforeComplete = function(t) {
                return this.eventListener(e.api.events.JWPLAYER_MEDIA_BEFORECOMPLETE, t)
            }
            ,
            this.onBuffer = function(t) {
                return this.stateListener(e.api.events.state.BUFFERING, t)
            }
            ,
            this.onPause = function(t) {
                return this.stateListener(e.api.events.state.PAUSED, t)
            }
            ,
            this.onPlay = function(t) {
                return this.stateListener(e.api.events.state.PLAYING, t)
            }
            ,
            this.onIdle = function(t) {
                return this.stateListener(e.api.events.state.IDLE, t)
            }
            ,
            this.remove = function() {
                if (!u)
                    throw "Cannot call remove() before player is ready";
                d(this)
            }
            ,
            this.setup = function(t) {
                if (e.embed) {
                    var n = this.id;
                    d(this);
                    var r = e(n);
                    return r.config = t,
                    new e.embed(r)
                }
                return this
            }
            ,
            this.registerPlugin = function(t, n, r) {
                e.plugins.registerPlugin(t, n, r)
            }
            ,
            this.setPlayer = function(e, t) {
                o = e,
                this.renderingMode = t
            }
            ,
            this.stateListener = function(t, n) {
                return r[t] || (r[t] = [],
                this.eventListener(e.api.events.JWPLAYER_PLAYER_STATE, v(t))),
                r[t].push(n),
                this
            }
            ,
            this.detachMedia = function() {
                if (this.renderingMode == "html5")
                    return this.callInternal("jwDetachMedia")
            }
            ,
            this.attachMedia = function() {
                if (this.renderingMode == "html5")
                    return this.callInternal("jwAttachMedia")
            }
            ,
            this.componentListener = function(e, t, n) {
                return i[e] || (i[e] = {}),
                i[e][t] || (i[e][t] = [],
                this.eventListener(t, m(e, t))),
                i[e][t].push(n),
                this
            }
            ,
            this.addInternalListener = function(t, n) {
                try {
                    t.jwAddEventListener(n, 'function(dat) { jwplayer("' + this.id + '").dispatchEvent("' + n + '", dat); }')
                } catch (r) {
                    e.utils.log("Could not add internal listener")
                }
            }
            ,
            this.eventListener = function(e, t) {
                return n[e] || (n[e] = [],
                o && u && this.addInternalListener(o, e)),
                n[e].push(t),
                this
            }
            ,
            this.dispatchEvent = function(e) {
                if (n[e]) {
                    var t = _utils.translateEventResponse(e, arguments[1]);
                    for (var r = 0; r < n[e].length; r++)
                        typeof n[e][r] == "function" && n[e][r].call(this, t)
                }
            }
            ,
            this.dispatchInstreamEvent = function(e) {
                f && f.dispatchEvent(e, arguments)
            }
            ,
            this.callInternal = function() {
                if (u) {
                    var e = arguments[0]
                      , t = [];
                    for (var n = 1; n < arguments.length; n++)
                        t.push(arguments[n]);
                    return typeof o != "undefined" && typeof o[e] == "function" ? t.length == 2 ? o[e](t[0], t[1]) : t.length == 1 ? o[e](t[0]) : o[e]() : null
                }
                a.push(arguments)
            }
            ,
            this.playerReady = function(t) {
                u = !0,
                o || this.setPlayer(document.getElementById(t.id)),
                this.container = document.getElementById(this.id);
                for (var r in n)
                    this.addInternalListener(o, r);
                this.eventListener(e.api.events.JWPLAYER_PLAYLIST_ITEM, function(e) {
                    c = {}
                }),
                this.eventListener(e.api.events.JWPLAYER_MEDIA_META, function(t) {
                    e.utils.extend(c, t.metadata)
                }),
                this.dispatchEvent(e.api.events.API_READY);
                while (a.length > 0)
                    this.callInternal.apply(this, a.shift())
            }
            ,
            this.getItemMeta = function() {
                return c
            }
            ,
            this.getCurrentItem = function() {
                return this.callInternal("jwGetPlaylistIndex")
            }
            ,
            this
        }
        ,
        e.api.selectPlayer = function(t) {
            var n;
            e.utils.exists(t) || (t = 0),
            t.nodeType ? n = t : typeof t == "string" && (n = document.getElementById(t));
            if (n) {
                var r = e.api.playerById(n.id);
                return r ? r : e.api.addPlayer(new e.api(n))
            }
            return typeof t == "number" ? e.getPlayers()[t] : null
        }
        ,
        e.api.events = {
            API_READY: "jwplayerAPIReady",
            JWPLAYER_READY: "jwplayerReady",
            JWPLAYER_FULLSCREEN: "jwplayerFullscreen",
            JWPLAYER_RESIZE: "jwplayerResize",
            JWPLAYER_ERROR: "jwplayerError",
            JWPLAYER_MEDIA_BEFOREPLAY: "jwplayerMediaBeforePlay",
            JWPLAYER_MEDIA_BEFORECOMPLETE: "jwplayerMediaBeforeComplete",
            JWPLAYER_COMPONENT_SHOW: "jwplayerComponentShow",
            JWPLAYER_COMPONENT_HIDE: "jwplayerComponentHide",
            JWPLAYER_MEDIA_BUFFER: "jwplayerMediaBuffer",
            JWPLAYER_MEDIA_BUFFER_FULL: "jwplayerMediaBufferFull",
            JWPLAYER_MEDIA_ERROR: "jwplayerMediaError",
            JWPLAYER_MEDIA_LOADED: "jwplayerMediaLoaded",
            JWPLAYER_MEDIA_COMPLETE: "jwplayerMediaComplete",
            JWPLAYER_MEDIA_SEEK: "jwplayerMediaSeek",
            JWPLAYER_MEDIA_TIME: "jwplayerMediaTime",
            JWPLAYER_MEDIA_VOLUME: "jwplayerMediaVolume",
            JWPLAYER_MEDIA_META: "jwplayerMediaMeta",
            JWPLAYER_MEDIA_MUTE: "jwplayerMediaMute",
            JWPLAYER_PLAYER_STATE: "jwplayerPlayerState",
            JWPLAYER_PLAYLIST_LOADED: "jwplayerPlaylistLoaded",
            JWPLAYER_PLAYLIST_ITEM: "jwplayerPlaylistItem",
            JWPLAYER_INSTREAM_CLICK: "jwplayerInstreamClicked",
            JWPLAYER_INSTREAM_DESTROYED: "jwplayerInstreamDestroyed"
        },
        e.api.events.state = {
            BUFFERING: "BUFFERING",
            IDLE: "IDLE",
            PAUSED: "PAUSED",
            PLAYING: "PLAYING"
        },
        e.api.playerById = function(e) {
            for (var n = 0; n < t.length; n++)
                if (t[n].id == e)
                    return t[n];
            return null
        }
        ,
        e.api.addPlayer = function(e) {
            for (var n = 0; n < t.length; n++)
                if (t[n] == e)
                    return e;
            return t.push(e),
            e
        }
        ,
        e.api.destroyPlayer = function(n, r) {
            var i = -1;
            for (var s = 0; s < t.length; s++)
                if (t[s].id == n) {
                    i = s;
                    continue
                }
            if (i >= 0) {
                try {
                    t[i].callInternal("jwDestroy")
                } catch (o) {}
                var u = document.getElementById(t[i].id);
                document.getElementById(t[i].id + "_wrapper") && (u = document.getElementById(t[i].id + "_wrapper"));
                if (u)
                    if (r)
                        e.utils.setOuterHTML(u, r);
                    else {
                        var f = document.createElement("div")
                          , l = u.id;
                        u.id.indexOf("_wrapper") == u.id.length - 8 && (newID = u.id.substring(0, u.id.length - 8)),
                        f.setAttribute("id", l),
                        u.parentNode.replaceChild(f, u)
                    }
                t.splice(i, 1)
            }
            return null
        }
        ,
        e.getPlayers = function() {
            return t.slice(0)
        }
    }(jwplayer);
    var _userPlayerReady = typeof playerReady == "function" ? playerReady : undefined;
    playerReady = function(e) {
        var t = jwplayer.api.playerById(e.id);
        t ? t.playerReady(e) : jwplayer.api.selectPlayer(e.id).playerReady(e),
        _userPlayerReady && _userPlayerReady.call(this, e)
    }
    ,
    function(e) {
        e.api.instream = function(t, n, r, i) {
            function h() {
                s.callInternal("jwLoadInstream", r, i)
            }
            function p(e, t) {
                o.jwInstreamAddEventListener(t, 'function(dat) { jwplayer("' + s.id + '").dispatchInstreamEvent("' + t + '", dat); }')
            }
            function d(e, t) {
                return l[e] || (l[e] = [],
                p(o, e)),
                l[e].push(t),
                this
            }
            function v(t, n) {
                return c[t] || (c[t] = [],
                d(e.api.events.JWPLAYER_PLAYER_STATE, m(t))),
                c[t].push(n),
                this
            }
            function m(e) {
                return function(t) {
                    var n = t.newstate
                      , r = t.oldstate;
                    if (n == e) {
                        var i = c[n];
                        if (i)
                            for (var s = 0; s < i.length; s++)
                                typeof i[s] == "function" && i[s].call(this, {
                                    oldstate: r,
                                    newstate: n,
                                    type: t.type
                                })
                    }
                }
            }
            var s = t
              , o = n
              , u = r
              , f = i
              , l = {}
              , c = {};
            this.dispatchEvent = function(e, t) {
                if (l[e]) {
                    var n = _utils.translateEventResponse(e, t[1]);
                    for (var r = 0; r < l[e].length; r++)
                        typeof l[e][r] == "function" && l[e][r].call(this, n)
                }
            }
            ,
            this.onError = function(t) {
                return d(e.api.events.JWPLAYER_ERROR, t)
            }
            ,
            this.onFullscreen = function(t) {
                return d(e.api.events.JWPLAYER_FULLSCREEN, t)
            }
            ,
            this.onMeta = function(t) {
                return d(e.api.events.JWPLAYER_MEDIA_META, t)
            }
            ,
            this.onMute = function(t) {
                return d(e.api.events.JWPLAYER_MEDIA_MUTE, t)
            }
            ,
            this.onComplete = function(t) {
                return d(e.api.events.JWPLAYER_MEDIA_COMPLETE, t)
            }
            ,
            this.onSeek = function(t) {
                return d(e.api.events.JWPLAYER_MEDIA_SEEK, t)
            }
            ,
            this.onTime = function(t) {
                return d(e.api.events.JWPLAYER_MEDIA_TIME, t)
            }
            ,
            this.onVolume = function(t) {
                return d(e.api.events.JWPLAYER_MEDIA_VOLUME, t)
            }
            ,
            this.onBuffer = function(t) {
                return v(e.api.events.state.BUFFERING, t)
            }
            ,
            this.onPause = function(t) {
                return v(e.api.events.state.PAUSED, t)
            }
            ,
            this.onPlay = function(t) {
                return v(e.api.events.state.PLAYING, t)
            }
            ,
            this.onIdle = function(t) {
                return v(e.api.events.state.IDLE, t)
            }
            ,
            this.onInstreamClick = function(t) {
                return d(e.api.events.JWPLAYER_INSTREAM_CLICK, t)
            }
            ,
            this.onInstreamDestroyed = function(t) {
                return d(e.api.events.JWPLAYER_INSTREAM_DESTROYED, t)
            }
            ,
            this.play = function(e) {
                o.jwInstreamPlay(e)
            }
            ,
            this.pause = function(e) {
                o.jwInstreamPause(e)
            }
            ,
            this.seek = function(e) {
                o.jwInstreamSeek(e)
            }
            ,
            this.destroy = function() {
                o.jwInstreamDestroy()
            }
            ,
            this.getState = function() {
                return o.jwInstreamGetState()
            }
            ,
            this.getDuration = function() {
                return o.jwInstreamGetDuration()
            }
            ,
            this.getPosition = function() {
                return o.jwInstreamGetPosition()
            }
            ,
            h()
        }
    }(jwplayer),
    function(e) {
        function n() {
            if (!document.body)
                return setTimeout(n, 15);
            var r = t.selectors.getElementsByTagAndClass("video", "jwplayer");
            for (var i = 0; i < r.length; i++) {
                var s = r[i];
                s.id == "" && (s.id = "jwplayer_" + Math.round(Math.random() * 1e5)),
                e(s.id).setup({})
            }
        }
        var t = e.utils;
        e.embed = function(n) {
            function u(e, t) {
                for (var n in t)
                    typeof e[n] == "function" && e[n].call(e, t[n])
            }
            function f() {
                if (o.getStatus() == t.loaderstatus.COMPLETE) {
                    for (var r = 0; r < s.modes.length; r++)
                        if (s.modes[r].type && e.embed[s.modes[r].type]) {
                            var i = s.modes[r].config
                              , f = s;
                            if (i) {
                                f = t.extend(t.clone(s), i);
                                var l = ["file", "levels", "playlist"];
                                for (var p = 0; p < l.length; p++) {
                                    var v = l[p];
                                    if (t.exists(i[v]))
                                        for (var m = 0; m < l.length; m++)
                                            if (m != p) {
                                                var g = l[m];
                                                t.exists(f[g]) && !t.exists(i[g]) && delete f[g]
                                            }
                                }
                            }
                            var y = new e.embed[s.modes[r].type](document.getElementById(n.id),s.modes[r],f,o,n);
                            if (y.supportsConfig())
                                return y.embed(),
                                u(n, s.events),
                                n
                        }
                    t.log("No suitable players found"),
                    new e.embed.logo(t.extend({
                        hide: !0
                    }, s.components.logo),"none",n.id)
                }
            }
            var r = {
                width: 400,
                height: 300,
                components: {
                    controlbar: {
                        position: "over"
                    }
                }
            }
              , i = t.mediaparser.parseMedia(n.container)
              , s = new e.embed.config(t.extend(r, i, n.config),this)
              , o = e.plugins.loadPlugins(n.id, s.plugins);
            return o.addEventListener(e.events.COMPLETE, f),
            o.addEventListener(e.events.ERROR, f),
            o.load(),
            n
        }
        ,
        n()
    }(jwplayer),
    function(e) {
        function n(e) {
            var n = [{
                type: "flash",
                src: e ? e : "/jwplayer/player.swf"
            }, {
                type: "html5"
            }, {
                type: "download"
            }];
            return t.isAndroid() && (n[0] = n.splice(1, 1, n[0])[0]),
            n
        }
        function i(e) {
            var t = e.toLowerCase()
              , n = ["left", "right", "top", "bottom"];
            for (var r = 0; r < n.length; r++)
                if (t == n[r])
                    return !0;
            return !1
        }
        function s(e) {
            var t = !1;
            return t = e instanceof Array || typeof e == "object" && !e.position && !e.size,
            t
        }
        function o(e) {
            if (typeof e == "string")
                if (parseInt(e).toString() == e || e.toLowerCase().indexOf("px") > -1)
                    return parseInt(e);
            return e
        }
        function a(e) {
            var n = {};
            switch (t.typeOf(e.plugins)) {
            case "object":
                for (var r in e.plugins)
                    n[t.getPluginName(r)] = r;
                break;
            case "string":
                var i = e.plugins.split(",");
                for (var s = 0; s < i.length; s++)
                    n[t.getPluginName(i[s])] = i[s]
            }
            return n
        }
        function f(e, n, r, i) {
            t.typeOf(e[n]) != "object" && (e[n] = {});
            var s = e[n][r];
            t.typeOf(s) != "object" && (e[n][r] = s = {});
            if (i)
                if (n == "plugins") {
                    var o = t.getPluginName(r);
                    s[i] = e[o + "." + i],
                    delete e[o + "." + i]
                } else
                    s[i] = e[r + "." + i],
                    delete e[r + "." + i]
        }
        var t = e.utils
          , r = {
            players: "modes",
            autoplay: "autostart"
        }
          , u = ["playlist", "dock", "controlbar", "logo", "display"];
        e.embed.deserialize = function(e) {
            var n = a(e);
            for (var r in n)
                f(e, "plugins", n[r]);
            for (var i in e)
                if (i.indexOf(".") > -1) {
                    var s = i.split(".")
                      , o = s[0]
                      , i = s[1];
                    t.isInArray(u, o) ? f(e, "components", o, i) : n[o] && f(e, "plugins", n[o], i)
                }
            return e
        }
        ,
        e.embed.config = function(i, a) {
            var f = t.extend({}, i), l;
            s(f.playlist) && (l = f.playlist,
            delete f.playlist),
            f = e.embed.deserialize(f),
            f.height = o(f.height),
            f.width = o(f.width);
            if (typeof f.plugins == "string") {
                var p = f.plugins.split(",");
                typeof f.plugins != "object" && (f.plugins = {});
                for (var d = 0; d < p.length; d++) {
                    var v = t.getPluginName(p[d]);
                    typeof f[v] == "object" ? (f.plugins[p[d]] = f[v],
                    delete f[v]) : f.plugins[p[d]] = {}
                }
            }
            for (var m = 0; m < u.length; m++) {
                var y = u[m];
                t.exists(f[y]) && (typeof f[y] != "object" ? (f.components[y] || (f.components[y] = {}),
                y == "logo" ? f.components[y].file = f[y] : f.components[y].position = f[y],
                delete f[y]) : (f.components[y] || (f.components[y] = {}),
                t.extend(f.components[y], f[y]),
                delete f[y])),
                typeof f[y + "size"] != "undefined" && (f.components[y] || (f.components[y] = {}),
                f.components[y].size = f[y + "size"],
                delete f[y + "size"])
            }
            typeof f.icons != "undefined" && (f.components.display || (f.components.display = {}),
            f.components.display.icons = f.icons,
            delete f.icons);
            for (var b in r)
                f[b] && (f[r[b]] || (f[r[b]] = f[b]),
                delete f[b]);
            var w;
            return f.flashplayer && !f.modes ? (w = n(f.flashplayer),
            delete f.flashplayer) : f.modes ? (typeof f.modes == "string" ? w = n(f.modes) : f.modes instanceof Array ? w = f.modes : typeof f.modes == "object" && f.modes.type && (w = [f.modes]),
            delete f.modes) : w = n(),
            f.modes = w,
            l && (f.playlist = l),
            f
        }
    }(jwplayer),
    function(e) {
        e.embed.download = function(t, n, r, i, s) {
            function o(t, n, r) {
                if (r)
                    return !1;
                var i = ["image", "sound", "youtube", "http"];
                if (n && i.toString().indexOf(n) > -1)
                    return !0;
                if (!n || n && n == "video") {
                    var s = e.utils.extension(t);
                    if (s && e.utils.extensionmap[s])
                        return !0
                }
                return !1
            }
            this.embed = function() {
                function g(e) {
                    _imageWidth = i.display_image.naturalWidth,
                    _imageHeight = i.display_image.naturalHeight,
                    y()
                }
                function y() {
                    e.utils.stretch(e.utils.stretching.UNIFORM, i.display_image, o, u, _imageWidth, _imageHeight)
                }
                var n = e.utils.extend({}, r)
                  , i = {}
                  , o = r.width ? r.width : 480;
                typeof o != "number" && (o = parseInt(o, 10));
                var u = r.height ? r.height : 320;
                typeof u != "number" && (u = parseInt(u, 10));
                var l, h, p, d = {};
                r.playlist && r.playlist.length ? (d.file = r.playlist[0].file,
                h = r.playlist[0].image,
                d.levels = r.playlist[0].levels) : (d.file = r.file,
                h = r.image,
                d.levels = r.levels),
                d.file ? l = d.file : d.levels && d.levels.length && (l = d.levels[0].file),
                p = l ? "pointer" : "auto";
                var v = {
                    display: {
                        style: {
                            cursor: p,
                            width: o,
                            height: u,
                            backgroundColor: "#000",
                            position: "relative",
                            textDecoration: "none",
                            border: "none",
                            display: "block"
                        }
                    },
                    display_icon: {
                        style: {
                            cursor: p,
                            position: "absolute",
                            display: l ? "block" : "none",
                            top: 0,
                            left: 0,
                            border: 0,
                            margin: 0,
                            padding: 0,
                            zIndex: 3,
                            width: 50,
                            height: 50,
                            backgroundImage: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAALdJREFUeNrs18ENgjAYhmFouDOCcQJGcARHgE10BDcgTOIosAGwQOuPwaQeuFRi2p/3Sb6EC5L3QCxZBgAAAOCorLW1zMn65TrlkH4NcV7QNcUQt7Gn7KIhxA+qNIR81spOGkL8oFJDyLJRdosqKDDkK+iX5+d7huzwM40xptMQMkjIOeRGo+VkEVvIPfTGIpKASfYIfT9iCHkHrBEzf4gcUQ56aEzuGK/mw0rHpy4AAACAf3kJMACBxjAQNRckhwAAAABJRU5ErkJggg==)"
                        }
                    },
                    display_iconBackground: {
                        style: {
                            cursor: p,
                            position: "absolute",
                            display: l ? "block" : "none",
                            top: (u - 50) / 2,
                            left: (o - 50) / 2,
                            border: 0,
                            width: 50,
                            height: 50,
                            margin: 0,
                            padding: 0,
                            zIndex: 2,
                            backgroundImage: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAEpJREFUeNrszwENADAIA7DhX8ENoBMZ5KR10EryckCJiIiIiIiIiIiIiIiIiIiIiIh8GmkRERERERERERERERERERERERGRHSPAAPlXH1phYpYaAAAAAElFTkSuQmCC)"
                        }
                    },
                    display_image: {
                        style: {
                            width: o,
                            height: u,
                            display: h ? "block" : "none",
                            position: "absolute",
                            cursor: p,
                            left: 0,
                            top: 0,
                            margin: 0,
                            padding: 0,
                            textDecoration: "none",
                            zIndex: 1,
                            border: "none"
                        }
                    }
                }
                  , m = function(n, r, i) {
                    var s = document.createElement(n);
                    return i ? s.id = i : s.id = t.id + "_jwplayer_" + r,
                    e.utils.css(s, v[r].style),
                    s
                };
                i.display = m("a", "display", t.id),
                l && i.display.setAttribute("href", e.utils.getAbsolutePath(l)),
                i.display_image = m("img", "display_image"),
                i.display_image.setAttribute("alt", "Click to download..."),
                h && i.display_image.setAttribute("src", e.utils.getAbsolutePath(h)),
                i.display_icon = m("div", "display_icon"),
                i.display_iconBackground = m("div", "display_iconBackground"),
                i.display.appendChild(i.display_image),
                i.display_iconBackground.appendChild(i.display_icon),
                i.display.appendChild(i.display_iconBackground),
                _css = e.utils.css,
                _hide = function(e) {
                    _css(e, {
                        display: "none"
                    })
                }
                ,
                i.display_image.onerror = function(e) {
                    _hide(i.display_image)
                }
                ,
                i.display_image.onload = g,
                t.parentNode.replaceChild(i.display, t);
                var w = r.plugins && r.plugins.logo ? r.plugins.logo : {};
                i.display.appendChild(new e.embed.logo(r.components.logo,"download",t.id)),
                s.container = document.getElementById(s.id),
                s.setPlayer(i.display, "download")
            }
            ,
            this.supportsConfig = function() {
                if (!r)
                    return !0;
                var t = e.utils.getFirstPlaylistItemFromConfig(r);
                if (typeof t.file == "undefined" && typeof t.levels == "undefined")
                    return !0;
                if (t.file)
                    return o(t.file, t.provider, t.playlistfile);
                if (t.levels && t.levels.length)
                    for (var n = 0; n < t.levels.length; n++)
                        if (t.levels[n].file && o(t.levels[n].file, t.provider, t.playlistfile))
                            return !0
            }
        }
    }(jwplayer),
    function(e) {
        e.embed.flash = function(t, n, r, i, s) {
            function o(e, t, n) {
                var r = document.createElement("param");
                r.setAttribute("name", t),
                r.setAttribute("value", n),
                e.appendChild(r)
            }
            function u(t, n, r) {
                return function(i) {
                    r && document.getElementById(s.id + "_wrapper").appendChild(n);
                    var o = document.getElementById(s.id).getPluginConfig("display");
                    t.resize(o.width, o.height);
                    var u = {
                        left: o.x,
                        top: o.y
                    };
                    e.utils.css(n, u)
                }
            }
            function f(e) {
                if (!e)
                    return {};
                var t = {};
                for (var n in e) {
                    var r = e[n];
                    for (var i in r)
                        t[n + "." + i] = r[i]
                }
                return t
            }
            function l(e, t) {
                if (e[t]) {
                    var n = e[t];
                    for (var r in n) {
                        var i = n[r];
                        if (typeof i == "string")
                            e[r] || (e[r] = i);
                        else
                            for (var s in i)
                                e[r + "." + s] || (e[r + "." + s] = i[s])
                    }
                    delete e[t]
                }
            }
            function c(t) {
                if (!t)
                    return {};
                var n = {}
                  , r = [];
                for (var i in t) {
                    var s = e.utils.getPluginName(i)
                      , o = t[i];
                    r.push(i);
                    for (var u in o)
                        n[s + "." + u] = o[u]
                }
                return n.plugins = r.join(","),
                n
            }
            function h(t) {
                var n = t.netstreambasepath ? "" : "netstreambasepath=" + encodeURIComponent(window.location.href.split("#")[0]) + "&";
                for (var r in t)
                    typeof t[r] == "object" ? n += r + "=" + encodeURIComponent("[[JSON]]" + e.utils.strings.jsonToString(t[r])) + "&" : n += r + "=" + encodeURIComponent(t[r]) + "&";
                return n.substring(0, n.length - 1)
            }
            this.embed = function() {
                r.id = s.id;
                var f, p = e.utils.extend({}, r), d = p.width, v = p.height;
                t.id + "_wrapper" == t.parentNode.id ? f = document.getElementById(t.id + "_wrapper") : (f = document.createElement("div"),
                f.id = t.id + "_wrapper",
                e.utils.wrap(t, f),
                e.utils.css(f, {
                    position: "relative",
                    width: d,
                    height: v
                }));
                var y = i.setupPlugins(s, p, u);
                y.length > 0 ? e.utils.extend(p, c(y.plugins)) : delete p.plugins;
                var w = ["height", "width", "modes", "events"];
                for (var E = 0; E < w.length; E++)
                    delete p[w[E]];
                var S = "opaque";
                p.wmode && (S = p.wmode),
                l(p, "components"),
                l(p, "providers"),
                typeof p["dock.position"] != "undefined" && p["dock.position"].toString().toLowerCase() == "false" && (p.dock = p["dock.position"],
                delete p["dock.position"]);
                var x = e.utils.getCookies();
                for (var T in x)
                    typeof p[T] == "undefined" && (p[T] = x[T]);
                var N = "#000000", C;
                if (e.utils.isIE()) {
                    var L = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" bgcolor="' + N + '" width="100%" height="100%" id="' + t.id + '" name="' + t.id + '" tabindex=0"">';
                    L += '<param name="movie" value="' + n.src + '">',
                    L += '<param name="allowfullscreen" value="true">',
                    L += '<param name="allowscriptaccess" value="always">',
                    L += '<param name="seamlesstabbing" value="true">',
                    L += '<param name="wmode" value="' + S + '">',
                    L += '<param name="flashvars" value="' + h(p) + '">',
                    L += "</object>",
                    e.utils.setOuterHTML(t, L),
                    C = document.getElementById(t.id)
                } else {
                    var A = document.createElement("object");
                    A.setAttribute("type", "application/x-shockwave-flash"),
                    A.setAttribute("data", n.src),
                    A.setAttribute("width", "100%"),
                    A.setAttribute("height", "100%"),
                    A.setAttribute("bgcolor", "#000000"),
                    A.setAttribute("id", t.id),
                    A.setAttribute("name", t.id),
                    A.setAttribute("tabindex", 0),
                    o(A, "allowfullscreen", "true"),
                    o(A, "allowscriptaccess", "always"),
                    o(A, "seamlesstabbing", "true"),
                    o(A, "wmode", S),
                    o(A, "flashvars", h(p)),
                    t.parentNode.replaceChild(A, t),
                    C = A
                }
                s.container = C,
                s.setPlayer(C, "flash")
            }
            ,
            this.supportsConfig = function() {
                if (e.utils.hasFlash()) {
                    if (!r)
                        return !0;
                    var t = e.utils.getFirstPlaylistItemFromConfig(r);
                    if (typeof t.file == "undefined" && typeof t.levels == "undefined")
                        return !0;
                    if (t.file)
                        return flashCanPlay(t.file, t.provider);
                    if (t.levels && t.levels.length)
                        for (var n = 0; n < t.levels.length; n++)
                            if (t.levels[n].file && flashCanPlay(t.levels[n].file, t.provider))
                                return !0
                }
                return !1
            }
            ,
            flashCanPlay = function(t, n) {
                var r = ["video", "http", "sound", "image"];
                if (n && r.toString().indexOf(n) < 0)
                    return !0;
                var i = e.utils.extension(t);
                return i ? e.utils.exists(e.utils.extensionmap[i]) && !e.utils.exists(e.utils.extensionmap[i].flash) ? !1 : !0 : !0
            }
        }
    }(jwplayer),
    function(e) {
        e.embed.html5 = function(t, n, r, i, s) {
            function o(e, n, r) {
                return function(i) {
                    var s = document.getElementById(t.id + "_displayarea");
                    r && s.appendChild(n),
                    e.resize(s.clientWidth, s.clientHeight),
                    n.left = s.style.left,
                    n.top = s.style.top
                }
            }
            this.embed = function() {
                if (!e.html5)
                    return null;
                i.setupPlugins(s, r, o),
                t.innerHTML = "";
                var n = e.utils.extend({
                    screencolor: "0x000000"
                }, r)
                  , u = ["plugins", "modes", "events"];
                for (var l = 0; l < u.length; l++)
                    delete n[u[l]];
                n.levels && !n.sources && (n.sources = r.levels),
                n.skin && n.skin.toLowerCase().indexOf(".zip") > 0 && (n.skin = n.skin.replace(/\.zip/i, ".xml"));
                var h = new (e.html5(t).setup)(n);
                s.container = document.getElementById(s.id),
                s.setPlayer(h, "html5")
            }
            ,
            this.supportsConfig = function() {
                if (!!e.vid.canPlayType) {
                    if (!r)
                        return !0;
                    var t = e.utils.getFirstPlaylistItemFromConfig(r);
                    if (typeof t.file == "undefined" && typeof t.levels == "undefined")
                        return !0;
                    if (t.file)
                        return html5CanPlay(e.vid, t.file, t.provider, t.playlistfile);
                    if (t.levels && t.levels.length)
                        for (var n = 0; n < t.levels.length; n++)
                            if (t.levels[n].file && html5CanPlay(e.vid, t.levels[n].file, t.provider, t.playlistfile))
                                return !0
                }
                return !1
            }
            ,
            html5CanPlay = function(t, n, r, i) {
                if (i)
                    return !1;
                if (r && r == "youtube")
                    return !0;
                if (r && r != "video" && r != "http" && r != "sound")
                    return !1;
                if (navigator.userAgent.match(/BlackBerry/i) !== null)
                    return !1;
                var s = e.utils.extension(n);
                return !e.utils.exists(s) || !e.utils.exists(e.utils.extensionmap[s]) ? !0 : e.utils.exists(e.utils.extensionmap[s].html5) ? e.utils.isLegacyAndroid() && s.match(/m4v|mp4/) ? !0 : browserCanPlay(t, e.utils.extensionmap[s].html5) : !1
            }
            ,
            browserCanPlay = function(e, t) {
                return t ? e.canPlayType(t) ? !0 : t == "audio/mp3" && navigator.userAgent.match(/safari/i) ? e.canPlayType("audio/mpeg") : !1 : !0
            }
        }
    }(jwplayer),
    function(e) {
        e.embed.logo = function(t, n, r) {
            function u() {
                f(),
                c(),
                h()
            }
            function f() {
                if (i.prefix) {
                    var n = e.version.split(/\W/).splice(0, 2).join("/");
                    i.prefix.indexOf(n) < 0 && (i.prefix += n + "/")
                }
                o = e.utils.extend({}, i, t)
            }
            function l() {
                var e = {
                    border: "none",
                    textDecoration: "none",
                    position: "absolute",
                    cursor: "pointer",
                    zIndex: 10
                };
                e.display = o.hide ? "none" : "block";
                var t = o.position.toLowerCase().split("-");
                for (var n in t)
                    e[t[n]] = o.margin;
                return e
            }
            function c() {
                s = document.createElement("img"),
                s.id = r + "_jwplayer_logo",
                s.style.display = "none",
                s.onload = function(e) {
                    _css(s, l()),
                    d()
                }
                ;
                if (!o.file)
                    return;
                o.file.indexOf("http://") === 0 ? s.src = o.file : s.src = o.prefix + o.file
            }
            function h() {
                o.link ? (s.onmouseover = v,
                s.onmouseout = d,
                s.onclick = p) : this.mouseEnabled = !1
            }
            function p(e) {
                typeof e != "undefined" && (e.preventDefault(),
                e.stopPropagation()),
                o.link && window.open(o.link, o.linktarget);
                return
            }
            function d(e) {
                o.link && (s.style.opacity = o.out);
                return
            }
            function v(e) {
                o.hide && (s.style.opacity = o.over);
                return
            }
            var i = {
                prefix: "http://l.longtailvideo.com/" + n + "/",
                file: "",
                link: "",
                linktarget: "_top",
                margin: 8,
                out: .5,
                over: 1,
                timeout: 5,
                hide: !1,
                position: "bottom-left"
            };
            _css = e.utils.css;
            var s, o;
            u();
            if (!o.file)
                return;
            return s
        }
    }(jwplayer),
    function(e) {
        e.html5 = function(t) {
            var n = t;
            return this.setup = function(t) {
                return e.utils.extend(this, new e.html5.api(n,t)),
                this
            }
            ,
            this
        }
    }(jwplayer),
    function(e) {
        var t = e.utils
          , n = t.css
          , r = t.isIOS();
        e.html5.view = function(i, s, o) {
            function L() {
                function e() {
                    return u.skin.getComponentSettings("display") && u.skin.getComponentSettings("display").backgroundcolor ? u.skin.getComponentSettings("display").backgroundcolor : parseInt("000000", 16)
                }
                h = document.createElement("div"),
                h.id = f.id,
                h.className = f.className,
                _videowrapper = document.createElement("div"),
                _videowrapper.id = h.id + "_video_wrapper",
                f.id = h.id + "_video",
                n(h, {
                    position: "relative",
                    height: l.height,
                    width: l.width,
                    padding: 0,
                    backgroundColor: e(),
                    zIndex: 0
                }),
                n(f, {
                    width: "100%",
                    height: "100%",
                    top: 0,
                    left: 0,
                    zIndex: 1,
                    margin: "auto",
                    display: "block"
                }),
                n(_videowrapper, {
                    overflow: "hidden",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0
                }),
                t.wrap(f, h),
                t.wrap(f, _videowrapper),
                m = document.createElement("div"),
                m.id = h.id + "_displayarea",
                h.appendChild(m),
                _instreamArea = document.createElement("div"),
                _instreamArea.id = h.id + "_instreamarea",
                n(_instreamArea, {
                    overflow: "hidden",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    zIndex: 100,
                    background: "000000",
                    display: "none"
                }),
                h.appendChild(_instreamArea)
            }
            function A() {
                for (var e = 0; e < l.plugins.order.length; e++) {
                    var n = l.plugins.order[e];
                    t.exists(l.plugins.object[n].getDisplayElement) && (l.plugins.object[n].height = t.parseDimension(l.plugins.object[n].getDisplayElement().style.height),
                    l.plugins.object[n].width = t.parseDimension(l.plugins.object[n].getDisplayElement().style.width),
                    l.plugins.config[n].currentPosition = l.plugins.config[n].position)
                }
                _()
            }
            function O(e) {
                S = l.fullscreen
            }
            function M(t) {
                if (C)
                    return;
                switch (t.newstate) {
                case e.api.events.state.PLAYING:
                    l.getMedia() && l.getMedia().hasChrome() && (m.style.display = "none");
                    break;
                default:
                    m.style.display = "block"
                }
                q()
            }
            function _(e) {
                var n = l.getMedia() ? l.getMedia().getDisplayElement() : null;
                if (t.exists(n)) {
                    w != n && (w && w.parentNode && w.parentNode.replaceChild(n, w),
                    w = n);
                    for (var r = 0; r < l.plugins.order.length; r++) {
                        var i = l.plugins.order[r];
                        t.exists(l.plugins.object[i].getDisplayElement) && (l.plugins.config[i].currentPosition = l.plugins.config[i].position)
                    }
                }
                P(l.width, l.height)
            }
            function D(t) {
                switch (t.keyCode) {
                case 27:
                    u.jwGetFullscreen() && u.jwSetFullscreen(!1);
                    break;
                case 32:
                    u.jwGetState() != e.api.events.state.IDLE && u.jwGetState() != e.api.events.state.PAUSED ? u.jwPause() : u.jwPlay()
                }
            }
            function P(e, i) {
                if (h.style.display == "none")
                    return;
                var s = [].concat(l.plugins.order);
                s.reverse(),
                g = s.length + 2;
                if (S && $())
                    try {
                        l.fullscreen && !l.getMedia().getDisplayElement().webkitDisplayingFullscreen && (l.fullscreen = !1)
                    } catch (o) {}
                if (!l.fullscreen) {
                    p = e,
                    v = i,
                    typeof e == "string" && e.indexOf("%") > 0 ? p = t.getElementWidth(t.parentNode(h)) * parseInt(e.replace("%"), "") / 100 : p = e,
                    typeof i == "string" && i.indexOf("%") > 0 ? v = t.getElementHeight(t.parentNode(h)) * parseInt(i.replace("%"), "") / 100 : v = i;
                    var u = {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        width: p,
                        height: v,
                        position: "absolute"
                    };
                    n(m, u);
                    var a = {}, f;
                    try {
                        f = l.plugins.object.display.getDisplayElement()
                    } catch (o) {}
                    f && (a.width = t.parseDimension(f.style.width),
                    a.height = t.parseDimension(f.style.height));
                    var y = t.extend({}, u, a, {
                        zIndex: _instreamArea.style.zIndex,
                        display: _instreamArea.style.display
                    });
                    n(_instreamArea, y),
                    n(h, {
                        height: v,
                        width: p
                    });
                    var w = B(j, s);
                    if (w.length > 0) {
                        g += w.length;
                        var E = w.indexOf("playlist")
                          , N = w.indexOf("controlbar");
                        E >= 0 && N >= 0 && (w[E] = w.splice(N, 1, w[E])[0]),
                        B(F, w, !0)
                    }
                    x = t.getElementWidth(m),
                    T = t.getElementHeight(m)
                } else
                    !$() && !r && B(I, s, !0);
                q()
            }
            function B(r, i, s) {
                H = 0;
                var o = [];
                for (var u = 0; u < i.length; u++) {
                    var f = i[u];
                    if (t.exists(l.plugins.object[f].getDisplayElement))
                        if (l.plugins.config[f].currentPosition != e.html5.view.positions.NONE) {
                            var c = r(f, g--);
                            if (!c)
                                o.push(f);
                            else {
                                var h = c.width
                                  , p = c.height;
                                s && (delete c.width,
                                delete c.height),
                                n(l.plugins.object[f].getDisplayElement(), c),
                                l.plugins.object[f].resize(h, p)
                            }
                        } else
                            n(l.plugins.object[f].getDisplayElement(), {
                                display: "none"
                            })
                }
                return o
            }
            function j(e, n) {
                if (t.exists(l.plugins.object[e].getDisplayElement) && l.plugins.config[e].position && V(l.plugins.config[e].position)) {
                    t.exists(l.plugins.object[e].getDisplayElement().parentNode) || h.appendChild(l.plugins.object[e].getDisplayElement());
                    var r = R(e);
                    return r.zIndex = n,
                    r
                }
                return !1
            }
            function F(e, n) {
                return t.exists(l.plugins.object[e].getDisplayElement().parentNode) || m.appendChild(l.plugins.object[e].getDisplayElement()),
                {
                    position: "absolute",
                    width: t.getElementWidth(m) - t.parseDimension(m.style.right),
                    height: t.getElementHeight(m) - t.parseDimension(m.style.bottom),
                    zIndex: n
                }
            }
            function I(e, t) {
                return {
                    position: "fixed",
                    width: l.width,
                    height: l.height,
                    zIndex: t
                }
            }
            function V(t) {
                return [e.html5.view.positions.TOP, e.html5.view.positions.RIGHT, e.html5.view.positions.BOTTOM, e.html5.view.positions.LEFT].toString().indexOf(t.toUpperCase()) > -1
            }
            function $() {
                return u.jwGetState() != e.api.events.state.IDLE && !E && l.getMedia() && l.getMedia().getDisplayElement() && l.getMedia().getDisplayElement().webkitSupportsFullscreen && t.useNativeFullscreen() ? !0 : !1
            }
            var u = i, f = s, l = o, h, p, v, m, g, y, w, E = !1, S = !1, x, T, N, C, k;
            this.setup = function() {
                l && l.getMedia() && (f = l.getMedia().getDisplayElement()),
                L(),
                A(),
                u.jwAddEventListener(e.api.events.JWPLAYER_PLAYER_STATE, M),
                u.jwAddEventListener(e.api.events.JWPLAYER_MEDIA_LOADED, _),
                u.jwAddEventListener(e.api.events.JWPLAYER_MEDIA_BEFOREPLAY, O),
                u.jwAddEventListener(e.api.events.JWPLAYER_MEDIA_META, function(e) {
                    q()
                });
                var n;
                t.exists(window.onresize) && (n = window.onresize),
                window.onresize = function(e) {
                    if (t.exists(n))
                        try {
                            n(e)
                        } catch (r) {}
                    if (u.jwGetFullscreen()) {
                        if (!$()) {
                            var i = t.getBoundingClientRect(document.body);
                            l.width = Math.abs(i.left) + Math.abs(i.right),
                            l.height = window.innerHeight,
                            P(l.width, l.height)
                        }
                    } else
                        P(l.width, l.height)
                }
            }
            ;
            var H, q = this.resizeMedia = function() {
                m.style.position = "absolute";
                var i = l.getMedia() ? l.getMedia().getDisplayElement() : k;
                if (!i)
                    return;
                if (i && i.tagName.toLowerCase() == "video") {
                    if (!i.videoWidth || !i.videoHeight) {
                        i.style.width = m.style.width,
                        i.style.height = m.style.height;
                        return
                    }
                    i.style.position = "absolute",
                    t.fadeTo(i, 1, .25),
                    i.parentNode && (i.parentNode.style.left = m.style.left,
                    i.parentNode.style.top = m.style.top);
                    if (l.fullscreen && u.jwGetStretching() == e.utils.stretching.EXACTFIT && !t.isMobile()) {
                        var s = document.createElement("div");
                        t.stretch(e.utils.stretching.UNIFORM, s, t.getElementWidth(m), t.getElementHeight(m), x, T),
                        t.stretch(e.utils.stretching.EXACTFIT, i, t.parseDimension(s.style.width), t.parseDimension(s.style.height), i.videoWidth ? i.videoWidth : 400, i.videoHeight ? i.videoHeight : 300),
                        n(i, {
                            left: s.style.left,
                            top: s.style.top
                        })
                    } else
                        r || t.stretch(u.jwGetStretching(), i, t.getElementWidth(m), t.getElementHeight(m), i.videoWidth ? i.videoWidth : 400, i.videoHeight ? i.videoHeight : 300)
                } else {
                    var o = l.plugins.object.display.getDisplayElement();
                    o ? l.getMedia().resize(t.parseDimension(o.style.width), t.parseDimension(o.style.height)) : l.getMedia().resize(t.parseDimension(m.style.width), t.parseDimension(m.style.height))
                }
            }
            , R = this.getComponentPosition = function(n) {
                var r = {
                    position: "absolute",
                    margin: 0,
                    padding: 0,
                    top: null
                }
                  , i = l.plugins.config[n].currentPosition.toLowerCase();
                switch (i.toUpperCase()) {
                case e.html5.view.positions.TOP:
                    r.top = t.parseDimension(m.style.top),
                    r.left = t.parseDimension(m.style.left),
                    r.width = t.getElementWidth(m) - t.parseDimension(m.style.left) - t.parseDimension(m.style.right),
                    r.height = l.plugins.object[n].height,
                    m.style[i] = t.parseDimension(m.style[i]) + l.plugins.object[n].height + "px",
                    m.style.height = t.getElementHeight(m) - r.height + "px";
                    break;
                case e.html5.view.positions.RIGHT:
                    r.top = t.parseDimension(m.style.top),
                    r.right = t.parseDimension(m.style.right),
                    r.width = l.plugins.object[n].width,
                    r.height = t.getElementHeight(m) - t.parseDimension(m.style.top) - t.parseDimension(m.style.bottom),
                    m.style.width = t.getElementWidth(m) - r.width + "px";
                    break;
                case e.html5.view.positions.BOTTOM:
                    r.left = t.parseDimension(m.style.left),
                    r.width = t.getElementWidth(m) - t.parseDimension(m.style.left) - t.parseDimension(m.style.right),
                    r.height = l.plugins.object[n].height,
                    r.bottom = t.parseDimension(m.style.bottom + H),
                    H += r.height,
                    m.style.height = t.getElementHeight(m) - r.height + "px";
                    break;
                case e.html5.view.positions.LEFT:
                    r.top = t.parseDimension(m.style.top),
                    r.left = t.parseDimension(m.style.left),
                    r.width = l.plugins.object[n].width,
                    r.height = t.getElementHeight(m) - t.parseDimension(m.style.top) - t.parseDimension(m.style.bottom),
                    m.style[i] = t.parseDimension(m.style[i]) + l.plugins.object[n].width + "px",
                    m.style.width = t.getElementWidth(m) - r.width + "px";
                    break;
                default:
                }
                return r
            }
            ;
            this.resize = P;
            var U, z, W, X = this.fullscreen = function(e) {
                if (r)
                    return;
                var i;
                try {
                    i = l.getMedia().getDisplayElement()
                } catch (s) {}
                e && (z = l.width,
                W = l.height);
                var o = {
                    position: "fixed",
                    width: "100%",
                    height: "100%",
                    top: 0,
                    left: 0,
                    zIndex: 2147483e3
                }
                  , u = {
                    position: "relative",
                    height: z,
                    width: W,
                    zIndex: 0
                };
                if ($() && i && i.webkitSupportsFullscreen) {
                    if (e && !i.webkitDisplayingFullscreen)
                        try {
                            n(i, o),
                            t.transform(i),
                            U = m.style.display,
                            m.style.display = "none",
                            i.webkitEnterFullscreen()
                        } catch (a) {}
                    else if (!e) {
                        n(i, u),
                        q();
                        if (i.webkitDisplayingFullscreen)
                            try {
                                i.webkitExitFullscreen()
                            } catch (a) {}
                        m.style.display = U
                    }
                    E = !1
                } else {
                    if (e) {
                        document.onkeydown = D,
                        clearInterval(y);
                        var f = t.getBoundingClientRect(document.body);
                        l.width = Math.abs(f.left) + Math.abs(f.right),
                        l.height = window.innerHeight,
                        n(h, o),
                        o.zIndex = 1,
                        l.getMedia() && l.getMedia().getDisplayElement() && n(l.getMedia().getDisplayElement(), o),
                        o.zIndex = 2,
                        n(m, o),
                        E = !0
                    } else
                        document.onkeydown = "",
                        l.width = p,
                        l.height = v,
                        n(h, u),
                        E = !1;
                    P(l.width, l.height)
                }
            }
            ;
            this.setupInstream = function(e, n) {
                t.css(_instreamArea, {
                    display: "block",
                    position: "absolute"
                }),
                m.style.display = "none",
                _instreamArea.appendChild(e),
                k = n,
                C = !0
            }
            ;
            var J = this.destroyInstream = function() {
                _instreamArea.style.display = "none",
                _instreamArea.innerHTML = "",
                m.style.display = "block",
                k = null,
                C = !1,
                P(l.width, l.height)
            }
        }
        ,
        e.html5.view.positions = {
            TOP: "TOP",
            RIGHT: "RIGHT",
            BOTTOM: "BOTTOM",
            LEFT: "LEFT",
            OVER: "OVER",
            NONE: "NONE"
        }
    }(jwplayer),
    function(e) {
        var t = {
            backgroundcolor: "",
            margin: 10,
            font: "Arial,sans-serif",
            fontsize: 10,
            fontcolor: parseInt("000000", 16),
            fontstyle: "normal",
            fontweight: "bold",
            buttoncolor: parseInt("ffffff", 16),
            position: e.html5.view.positions.BOTTOM,
            idlehide: !1,
            hideplaylistcontrols: !1,
            forcenextprev: !1,
            layout: {
                left: {
                    position: "left",
                    elements: [{
                        name: "play",
                        type: "button"
                    }, {
                        name: "divider",
                        type: "divider"
                    }, {
                        name: "prev",
                        type: "button"
                    }, {
                        name: "divider",
                        type: "divider"
                    }, {
                        name: "next",
                        type: "button"
                    }, {
                        name: "divider",
                        type: "divider"
                    }, {
                        name: "elapsed",
                        type: "text"
                    }]
                },
                center: {
                    position: "center",
                    elements: [{
                        name: "time",
                        type: "slider"
                    }]
                },
                right: {
                    position: "right",
                    elements: [{
                        name: "duration",
                        type: "text"
                    }, {
                        name: "blank",
                        type: "button"
                    }, {
                        name: "divider",
                        type: "divider"
                    }, {
                        name: "mute",
                        type: "button"
                    }, {
                        name: "volume",
                        type: "slider"
                    }, {
                        name: "divider",
                        type: "divider"
                    }, {
                        name: "fullscreen",
                        type: "button"
                    }]
                }
            }
        };
        _utils = e.utils,
        _css = _utils.css,
        _hide = function(e) {
            _css(e, {
                display: "none"
            })
        }
        ,
        _show = function(e) {
            _css(e, {
                display: "block"
            })
        }
        ,
        e.html5.controlbar = function(n, r) {
            function M() {
                return x || (x = i.skin.getSkinElement("controlbar", "background"),
                x || (x = {
                    width: 0,
                    height: 0,
                    src: null
                })),
                x
            }
            function _() {
                f = 0,
                l = 0,
                u = 0;
                if (!w) {
                    var e = {
                        height: M().height,
                        backgroundColor: s.backgroundcolor
                    };
                    o = document.createElement("div"),
                    o.id = i.id + "_jwplayer_controlbar",
                    _css(o, e)
                }
                var t = i.skin.getSkinElement("controlbar", "capLeft")
                  , n = i.skin.getSkinElement("controlbar", "capRight");
                t && $("capLeft", "left", !1, o),
                U("background", o, {
                    position: "absolute",
                    height: M().height,
                    left: t ? t.width : 0,
                    zIndex: 0
                }, "img"),
                M().src && (y.background.src = M().src),
                U("elements", o, {
                    position: "relative",
                    height: M().height,
                    zIndex: 1
                }),
                n && $("capRight", "right", !1, o)
            }
            function D() {
                var e = ["timeSlider", "volumeSlider", "timeSliderRail", "volumeSliderRail"];
                for (var t in e) {
                    var n = e[t];
                    typeof y[n] != "undefined" && (E[n] = _utils.getBoundingClientRect(y[n]))
                }
            }
            function H(t) {
                if (T)
                    return;
                clearTimeout(N);
                if (s.position == e.html5.view.positions.OVER || i.jwGetFullscreen())
                    switch (i.jwGetState()) {
                    case e.api.events.state.PAUSED:
                    case e.api.events.state.IDLE:
                        o && o.style.opacity < 1 && (!s.idlehide || _utils.exists(t)) && (P = !1,
                        setTimeout(function() {
                            P || j()
                        }, 100)),
                        s.idlehide && (N = setTimeout(function() {
                            B()
                        }, 2e3));
                        break;
                    default:
                        P = !0,
                        t && j(),
                        N = setTimeout(function() {
                            B()
                        }, 2e3)
                    }
                else
                    j()
            }
            function B() {
                T || (q(),
                o.style.opacity == 1 && (_utils.cancelAnimation(o),
                _utils.fadeTo(o, 0, .1, 1, 0)))
            }
            function j() {
                T || (I(),
                o.style.opacity == 0 && (_utils.cancelAnimation(o),
                _utils.fadeTo(o, 1, .1, 0, 0)))
            }
            function F(e) {
                return function() {
                    k && C != e && (C = e,
                    O.sendEvent(e, {
                        component: "controlbar",
                        boundingRect: R()
                    }))
                }
            }
            function R() {
                return s.position == e.html5.view.positions.OVER || i.jwGetFullscreen() ? _utils.getDimensions(o) : {
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0
                }
            }
            function U(e, t, n, r) {
                var i;
                return w ? i = document.getElementById(o.id + "_" + e) : (r || (r = "div"),
                i = document.createElement(r),
                y[e] = i,
                i.id = o.id + "_" + e,
                t.appendChild(i)),
                _utils.exists(n) && _css(i, n),
                i
            }
            function z() {
                if (i.jwGetHeight() <= 40) {
                    s.layout = _utils.clone(s.layout);
                    for (var e = 0; e < s.layout.left.elements.length; e++)
                        s.layout.left.elements[e].name == "fullscreen" && s.layout.left.elements.splice(e, 1);
                    for (e = 0; e < s.layout.right.elements.length; e++)
                        s.layout.right.elements[e].name == "fullscreen" && s.layout.right.elements.splice(e, 1);
                    ot()
                }
                W(s.layout.left),
                W(s.layout.center),
                W(s.layout.right)
            }
            function W(e, t) {
                var n = e.position == "right" ? "right" : "left"
                  , r = _utils.extend([], e.elements);
                _utils.exists(t) && r.reverse();
                var e = U(e.position + "Group", y.elements, {
                    "float": "left",
                    styleFloat: "left",
                    cssFloat: "left",
                    height: "100%"
                });
                for (var i = 0; i < r.length; i++)
                    V(r[i], n, e)
            }
            function X() {
                return u++
            }
            function V(e, t, n) {
                var r, s, o, u, a;
                n || (n = y.elements);
                if (e.type == "divider") {
                    $("divider" + X(), t, !0, n, undefined, e.width, e.element);
                    return
                }
                switch (e.name) {
                case "play":
                    $("playButton", t, !1, n),
                    $("pauseButton", t, !0, n),
                    Y("playButton", "jwPlay"),
                    Y("pauseButton", "jwPause");
                    break;
                case "prev":
                    $("prevButton", t, !0, n),
                    Y("prevButton", "jwPlaylistPrev");
                    break;
                case "stop":
                    $("stopButton", t, !0, n),
                    Y("stopButton", "jwStop");
                    break;
                case "next":
                    $("nextButton", t, !0, n),
                    Y("nextButton", "jwPlaylistNext");
                    break;
                case "elapsed":
                    $("elapsedText", t, !0, n, null, null, i.skin.getSkinElement("controlbar", "elapsedBackground"));
                    break;
                case "time":
                    s = _utils.exists(i.skin.getSkinElement("controlbar", "timeSliderCapLeft")) ? i.skin.getSkinElement("controlbar", "timeSliderCapLeft").width : 0,
                    o = _utils.exists(i.skin.getSkinElement("controlbar", "timeSliderCapRight")) ? i.skin.getSkinElement("controlbar", "timeSliderCapRight").width : 0,
                    r = t == "left" ? s : o,
                    a = {
                        height: M().height,
                        position: "relative",
                        "float": "left",
                        styleFloat: "left",
                        cssFloat: "left"
                    };
                    var f = U("timeSlider", n, a);
                    $("timeSliderCapLeft", t, !0, f, "relative"),
                    $("timeSliderRail", t, !1, f, "relative"),
                    $("timeSliderBuffer", t, !1, f, "absolute"),
                    $("timeSliderProgress", t, !1, f, "absolute"),
                    $("timeSliderThumb", t, !1, f, "absolute"),
                    $("timeSliderCapRight", t, !0, f, "relative"),
                    Z("time");
                    break;
                case "fullscreen":
                    $("fullscreenButton", t, !1, n),
                    $("normalscreenButton", t, !0, n),
                    Y("fullscreenButton", "jwSetFullscreen", !0),
                    Y("normalscreenButton", "jwSetFullscreen", !1);
                    break;
                case "volume":
                    s = _utils.exists(i.skin.getSkinElement("controlbar", "volumeSliderCapLeft")) ? i.skin.getSkinElement("controlbar", "volumeSliderCapLeft").width : 0,
                    o = _utils.exists(i.skin.getSkinElement("controlbar", "volumeSliderCapRight")) ? i.skin.getSkinElement("controlbar", "volumeSliderCapRight").width : 0,
                    r = t == "left" ? s : o,
                    u = i.skin.getSkinElement("controlbar", "volumeSliderRail").width + s + o,
                    a = {
                        height: M().height,
                        position: "relative",
                        width: u,
                        "float": "left",
                        styleFloat: "left",
                        cssFloat: "left"
                    };
                    var l = U("volumeSlider", n, a);
                    $("volumeSliderCapLeft", t, !1, l, "relative"),
                    $("volumeSliderRail", t, !1, l, "relative"),
                    $("volumeSliderProgress", t, !1, l, "absolute"),
                    $("volumeSliderThumb", t, !1, l, "absolute"),
                    $("volumeSliderCapRight", t, !1, l, "relative"),
                    Z("volume");
                    break;
                case "mute":
                    $("muteButton", t, !1, n),
                    $("unmuteButton", t, !0, n),
                    Y("muteButton", "jwSetMute", !0),
                    Y("unmuteButton", "jwSetMute", !1);
                    break;
                case "duration":
                    $("durationText", t, !0, n, null, null, i.skin.getSkinElement("controlbar", "durationBackground"))
                }
            }
            function $(e, t, n, r, o, u, a) {
                if (_utils.exists(i.skin.getSkinElement("controlbar", e)) || e.indexOf("Text") > 0 || e.indexOf("divider") === 0) {
                    var c = {
                        height: "100%",
                        position: o ? o : "relative",
                        display: "block",
                        "float": "left",
                        styleFloat: "left",
                        cssFloat: "left"
                    };
                    (e.indexOf("next") === 0 || e.indexOf("prev") === 0) && (i.jwGetPlaylist().length < 2 || s.hideplaylistcontrols.toString() == "true") && s.forcenextprev.toString() != "true" && (n = !1,
                    c.display = "none");
                    var h;
                    if (e.indexOf("Text") > 0)
                        e.innerhtml = "00:00",
                        c.font = s.fontsize + "px/" + (M().height + 1) + "px " + s.font,
                        c.color = s.fontcolor,
                        c.textAlign = "center",
                        c.fontWeight = s.fontweight,
                        c.fontStyle = s.fontstyle,
                        c.cursor = "default",
                        a && (c.background = "url(" + a.src + ") no-repeat center",
                        c.backgroundSize = "100% " + M().height + "px"),
                        c.padding = "0 5px";
                    else if (e.indexOf("divider") === 0)
                        if (u)
                            isNaN(parseInt(u)) || (h = parseInt(u));
                        else if (a) {
                            var p = i.skin.getSkinElement("controlbar", a);
                            p && (c.background = "url(" + p.src + ") repeat-x center left",
                            h = p.width)
                        } else
                            c.background = "url(" + i.skin.getSkinElement("controlbar", "divider").src + ") repeat-x center left",
                            h = i.skin.getSkinElement("controlbar", "divider").width;
                    else
                        c.background = "url(" + i.skin.getSkinElement("controlbar", e).src + ") repeat-x center left",
                        h = i.skin.getSkinElement("controlbar", e).width;
                    t == "left" ? n && (f += h) : t == "right" && n && (l += h),
                    _utils.typeOf(r) == "undefined" && (r = y.elements),
                    c.width = h;
                    if (w)
                        _css(y[e], c);
                    else {
                        var d = U(e, r, c);
                        _utils.exists(i.skin.getSkinElement("controlbar", e + "Over")) && (d.onmouseover = function(t) {
                            d.style.backgroundImage = ["url(", i.skin.getSkinElement("controlbar", e + "Over").src, ")"].join("")
                        }
                        ,
                        d.onmouseout = function(t) {
                            d.style.backgroundImage = ["url(", i.skin.getSkinElement("controlbar", e).src, ")"].join("")
                        }
                        ),
                        e.indexOf("divider") == 0 && d.setAttribute("class", "divider"),
                        d.innerHTML = "&nbsp;"
                    }
                }
            }
            function J() {
                i.jwAddEventListener(e.api.events.JWPLAYER_PLAYLIST_LOADED, K),
                i.jwAddEventListener(e.api.events.JWPLAYER_PLAYLIST_ITEM, Q),
                i.jwAddEventListener(e.api.events.JWPLAYER_MEDIA_BUFFER, tt),
                i.jwAddEventListener(e.api.events.JWPLAYER_PLAYER_STATE, rt),
                i.jwAddEventListener(e.api.events.JWPLAYER_MEDIA_TIME, st),
                i.jwAddEventListener(e.api.events.JWPLAYER_MEDIA_MUTE, nt),
                i.jwAddEventListener(e.api.events.JWPLAYER_MEDIA_VOLUME, ft),
                i.jwAddEventListener(e.api.events.JWPLAYER_MEDIA_COMPLETE, it)
            }
            function K() {
                s.hideplaylistcontrols || (i.jwGetPlaylist().length > 1 || s.forcenextprev.toString() == "true" ? (_show(y.nextButton),
                _show(y.prevButton)) : (_hide(y.nextButton),
                _hide(y.prevButton)),
                at(),
                G())
            }
            function Q(e) {
                d = i.jwGetPlaylist()[e.index].duration,
                S = -1,
                st({
                    id: i.id,
                    duration: d,
                    position: 0
                }),
                tt({
                    id: i.id,
                    bufferProgress: 0
                })
            }
            function G() {
                st({
                    id: i.id,
                    duration: i.jwGetDuration(),
                    position: 0
                }),
                tt({
                    id: i.id,
                    bufferProgress: 0
                }),
                nt({
                    id: i.id,
                    mute: i.jwGetMute()
                }),
                rt({
                    id: i.id,
                    newstate: e.api.events.state.IDLE
                }),
                ft({
                    id: i.id,
                    volume: i.jwGetVolume()
                })
            }
            function Y(e, t, n) {
                if (w)
                    return;
                if (_utils.exists(i.skin.getSkinElement("controlbar", e))) {
                    var r = y[e];
                    _utils.exists(r) && (_css(r, {
                        cursor: "pointer"
                    }),
                    t == "fullscreen" ? r.onmouseup = function(e) {
                        e.stopPropagation(),
                        i.jwSetFullscreen(!i.jwGetFullscreen())
                    }
                    : r.onmouseup = function(e) {
                        e.stopPropagation(),
                        _utils.exists(n) ? i[t](n) : i[t]()
                    }
                    )
                }
            }
            function Z(e) {
                if (w)
                    return;
                var t = y[e + "Slider"];
                _css(y.elements, {
                    cursor: "pointer"
                }),
                _css(t, {
                    cursor: "pointer"
                }),
                t.onmousedown = function(t) {
                    c = e
                }
                ,
                t.onmouseup = function(e) {
                    e.stopPropagation(),
                    et(e.pageX)
                }
                ,
                t.onmousemove = function(t) {
                    if (c == "time") {
                        h = !0;
                        var n = t.pageX - E[e + "Slider"].left - window.pageXOffset;
                        _css(y[c + "SliderThumb"], {
                            left: n
                        })
                    }
                }
            }
            function et(t) {
                h = !1;
                var n;
                if (c == "time") {
                    n = t - E.timeSliderRail.left + window.pageXOffset;
                    var r = n / E.timeSliderRail.width * d;
                    r < 0 ? r = 0 : r > d && (r = d - 3),
                    (i.jwGetState() == e.api.events.state.PAUSED || i.jwGetState() == e.api.events.state.IDLE) && i.jwPlay(),
                    i.jwSeek(r)
                } else if (c == "volume") {
                    n = t - E.volumeSliderRail.left - window.pageXOffset;
                    var s = Math.round(n / E.volumeSliderRail.width * 100);
                    s < 10 ? s = 0 : s > 100 && (s = 100),
                    i.jwGetMute() && i.jwSetMute(!1),
                    i.jwSetVolume(s)
                }
                c = "none"
            }
            function tt(e) {
                _utils.exists(e.bufferPercent) && (v = e.bufferPercent);
                if (E.timeSliderRail) {
                    var t = i.skin.getSkinElement("controlbar", "timeSliderCapLeft")
                      , n = E.timeSliderRail.width
                      , r = isNaN(Math.round(n * v / 100)) ? 0 : Math.round(n * v / 100);
                    _css(y.timeSliderBuffer, {
                        width: r,
                        left: t ? t.width : 0
                    })
                }
            }
            function nt(e) {
                e.mute ? (_hide(y.muteButton),
                _show(y.unmuteButton),
                _hide(y.volumeSliderProgress)) : (_show(y.muteButton),
                _hide(y.unmuteButton),
                _show(y.volumeSliderProgress))
            }
            function rt(t) {
                t.newstate == e.api.events.state.BUFFERING || t.newstate == e.api.events.state.PLAYING ? (_show(y.pauseButton),
                _hide(y.playButton)) : (_hide(y.pauseButton),
                _show(y.playButton)),
                H(),
                t.newstate == e.api.events.state.IDLE ? (_hide(y.timeSliderBuffer),
                _hide(y.timeSliderProgress),
                _hide(y.timeSliderThumb),
                st({
                    id: i.id,
                    duration: i.jwGetDuration(),
                    position: 0
                })) : (_show(y.timeSliderBuffer),
                t.newstate != e.api.events.state.BUFFERING && (_show(y.timeSliderProgress),
                _show(y.timeSliderThumb)))
            }
            function it(e) {
                tt({
                    bufferPercent: 0
                }),
                st(_utils.extend(e, {
                    position: 0,
                    duration: d
                }))
            }
            function st(e) {
                _utils.exists(e.position) && (p = e.position);
                var t = !1;
                _utils.exists(e.duration) && e.duration != d && (d = e.duration,
                t = !0);
                var n = p === d === 0 ? 0 : p / d
                  , r = E.timeSliderRail;
                if (r) {
                    var s = isNaN(Math.round(r.width * n)) ? 0 : Math.round(r.width * n)
                      , o = i.skin.getSkinElement("controlbar", "timeSliderCapLeft")
                      , u = s + (o ? o.width : 0);
                    y.timeSliderProgress && (_css(y.timeSliderProgress, {
                        width: s,
                        left: o ? o.width : 0
                    }),
                    h || y.timeSliderThumb && (y.timeSliderThumb.style.left = u + "px"))
                }
                y.durationText && (y.durationText.innerHTML = _utils.timeFormat(d));
                if (y.elapsedText) {
                    var a = _utils.timeFormat(p);
                    y.elapsedText.innerHTML = a,
                    S != a.length && (t = !0,
                    S = a.length)
                }
                t && at()
            }
            function ot() {
                var e = y.elements.childNodes, t, n;
                for (var r = 0; r < e.length; r++) {
                    var i = e[r].childNodes;
                    for (var s in i) {
                        if (isNaN(parseInt(s, 10)))
                            continue;
                        i[s].id.indexOf(o.id + "_divider") === 0 && n && n.id.indexOf(o.id + "_divider") === 0 && i[s].style.backgroundImage == n.style.backgroundImage ? i[s].style.display = "none" : i[s].id.indexOf(o.id + "_divider") === 0 && t && t.style.display != "none" && (i[s].style.display = "block"),
                        i[s].style.display != "none" && (n = i[s]),
                        t = i[s]
                    }
                }
            }
            function ut() {
                i.jwGetFullscreen() ? (_show(y.normalscreenButton),
                _hide(y.fullscreenButton)) : (_hide(y.normalscreenButton),
                _show(y.fullscreenButton)),
                i.jwGetState() == e.api.events.state.BUFFERING || i.jwGetState() == e.api.events.state.PLAYING ? (_show(y.pauseButton),
                _hide(y.playButton)) : (_hide(y.pauseButton),
                _show(y.playButton)),
                i.jwGetMute() == 1 ? (_hide(y.muteButton),
                _show(y.unmuteButton),
                _hide(y.volumeSliderProgress)) : (_show(y.muteButton),
                _hide(y.unmuteButton),
                _show(y.volumeSliderProgress))
            }
            function at() {
                ot(),
                ut();
                var t = {
                    width: m
                }
                  , n = {
                    "float": "left",
                    styleFloat: "left",
                    cssFloat: "left"
                };
                if (s.position == e.html5.view.positions.OVER || i.jwGetFullscreen())
                    t.left = s.margin,
                    t.width -= 2 * s.margin,
                    t.top = g - M().height - s.margin,
                    t.height = M().height;
                var r = i.skin.getSkinElement("controlbar", "capLeft")
                  , u = i.skin.getSkinElement("controlbar", "capRight");
                n.width = t.width - (r ? r.width : 0) - (u ? u.width : 0);
                var f = _utils.getBoundingClientRect(y.leftGroup).width
                  , l = _utils.getBoundingClientRect(y.rightGroup).width
                  , c = n.width - f - l - 1
                  , h = c
                  , p = i.skin.getSkinElement("controlbar", "timeSliderCapLeft")
                  , d = i.skin.getSkinElement("controlbar", "timeSliderCapRight");
                return _utils.exists(p) && (h -= p.width),
                _utils.exists(d) && (h -= d.width),
                y.timeSlider.style.width = c + "px",
                y.timeSliderRail.style.width = h + "px",
                _css(o, t),
                _css(y.elements, n),
                _css(y.background, n),
                D(),
                t
            }
            function ft(e) {
                if (_utils.exists(y.volumeSliderRail)) {
                    var t = isNaN(e.volume / 100) ? 1 : e.volume / 100
                      , n = _utils.parseDimension(y.volumeSliderRail.style.width)
                      , r = isNaN(Math.round(n * t)) ? 0 : Math.round(n * t)
                      , s = _utils.parseDimension(y.volumeSliderRail.style.right)
                      , o = _utils.exists(i.skin.getSkinElement("controlbar", "volumeSliderCapLeft")) ? i.skin.getSkinElement("controlbar", "volumeSliderCapLeft").width : 0;
                    _css(y.volumeSliderProgress, {
                        width: r,
                        left: o
                    });
                    if (y.volumeSliderThumb) {
                        var u = r - Math.round(_utils.parseDimension(y.volumeSliderThumb.style.width) / 2);
                        u = Math.min(Math.max(u, 0), n - _utils.parseDimension(y.volumeSliderThumb.style.width)),
                        _css(y.volumeSliderThumb, {
                            left: u
                        })
                    }
                    _utils.exists(y.volumeSliderCapLeft) && _css(y.volumeSliderCapLeft, {
                        left: 0
                    })
                }
            }
            function lt() {
                try {
                    var e = i.id.indexOf("_instream") > 0 ? i.id.replace("_instream", "") : i.id;
                    A = document.getElementById(e),
                    A.addEventListener("mousemove", H)
                } catch (t) {
                    _utils.log("Could not add mouse listeners to controlbar: " + t)
                }
            }
            function ct() {
                _(),
                z(),
                D(),
                w = !0,
                J(),
                s.idlehide = s.idlehide.toString().toLowerCase() == "true",
                s.position == e.html5.view.positions.OVER && s.idlehide ? (o.style.opacity = 0,
                k = !0) : (o.style.opacity = 1,
                setTimeout(function() {
                    k = !0,
                    I()
                }, 1)),
                lt(),
                G()
            }
            window.controlbar = this;
            var i = n
              , s = _utils.extend({}, t, i.skin.getComponentSettings("controlbar"), r);
            if (s.position == e.html5.view.positions.NONE || typeof e.html5.view.positions[s.position] == "undefined")
                return;
            _utils.mapLength(i.skin.getComponentLayout("controlbar")) > 0 && (s.layout = i.skin.getComponentLayout("controlbar"));
            var o, u, f, l, c = "none", h, p, d, v, m, g, y = {}, w = !1, E = {}, S = -1, x, T = !1, N, C, k = !1, L = !1, A, O = new e.html5.eventdispatcher;
            _utils.extend(this, O),
            this.getDisplayElement = function() {
                return o
            }
            ,
            this.resize = function(e, t) {
                lt(),
                _utils.cancelAnimation(o),
                m = e,
                g = t,
                L != i.jwGetFullscreen() && (L = i.jwGetFullscreen(),
                L || H(),
                C = undefined);
                var n = at();
                return st({
                    id: i.id,
                    duration: d,
                    position: p
                }),
                tt({
                    id: i.id,
                    bufferPercent: v
                }),
                n
            }
            ,
            this.show = function() {
                T && (T = !1,
                _show(o),
                I())
            }
            ,
            this.hide = function() {
                T || (T = !0,
                _hide(o),
                q())
            }
            ;
            var P, I = F(e.api.events.JWPLAYER_COMPONENT_SHOW), q = F(e.api.events.JWPLAYER_COMPONENT_HIDE);
            return ct(),
            this
        }
    }(jwplayer),
    function(e) {
        var t = ["width", "height", "state", "playlist", "item", "position", "buffer", "duration", "volume", "mute", "fullscreen"]
          , n = e.utils;
        e.html5.controller = function(t, r, s, o) {
            function S(e) {
                y ? E.sendEvent(e.type, e) : g.push(e)
            }
            function x(t) {
                if (!y) {
                    y = !0,
                    E.sendEvent(e.api.events.JWPLAYER_READY, t),
                    e.utils.exists(window.playerReady) && playerReady(t),
                    e.utils.exists(window[s.config.playerReady]) && window[s.config.playerReady](t);
                    while (g.length > 0) {
                        var n = g.shift();
                        E.sendEvent(n.type, n)
                    }
                    s.config.autostart && !e.utils.isIOS() && F();
                    while (z.length > 0) {
                        var r = z.shift();
                        X(r.method, r.arguments)
                    }
                }
            }
            function T() {
                try {
                    m = T;
                    if (!d) {
                        d = !0,
                        E.sendEvent(e.api.events.JWPLAYER_MEDIA_BEFOREPLAY),
                        d = !1;
                        if (v) {
                            v = !1,
                            m = null;
                            return
                        }
                    }
                    return _(a.item),
                    a.playlist[a.item].levels[0].file.length > 0 && (h || a.state == e.api.events.state.IDLE ? (a.getMedia().load(a.playlist[a.item]),
                    h = !1) : a.state == e.api.events.state.PAUSED && a.getMedia().play()),
                    !0
                } catch (t) {
                    E.sendEvent(e.api.events.JWPLAYER_ERROR, t),
                    m = null
                }
                return !1
            }
            function N() {
                try {
                    if (a.playlist[a.item].levels[0].file.length > 0)
                        switch (a.state) {
                        case e.api.events.state.PLAYING:
                        case e.api.events.state.BUFFERING:
                            a.getMedia() && a.getMedia().pause();
                            break;
                        default:
                            d && (v = !0)
                        }
                    return !0
                } catch (t) {
                    E.sendEvent(e.api.events.JWPLAYER_ERROR, t)
                }
                return !1
            }
            function C(t) {
                try {
                    if (a.playlist[a.item].levels[0].file.length > 0) {
                        typeof t != "number" && (t = parseFloat(t));
                        switch (a.state) {
                        case e.api.events.state.IDLE:
                            p < 0 && (p = a.playlist[a.item].start,
                            a.playlist[a.item].start = t),
                            d || T();
                            break;
                        case e.api.events.state.PLAYING:
                        case e.api.events.state.PAUSED:
                        case e.api.events.state.BUFFERING:
                            a.seek(t)
                        }
                    }
                    return !0
                } catch (n) {
                    E.sendEvent(e.api.events.JWPLAYER_ERROR, n)
                }
                return !1
            }
            function k(t) {
                m = null,
                n.exists(t) || (t = !0);
                try {
                    return (a.state != e.api.events.state.IDLE || t) && a.getMedia() && a.getMedia().stop(t),
                    d && (v = !0),
                    !0
                } catch (r) {
                    E.sendEvent(e.api.events.JWPLAYER_ERROR, r)
                }
                return !1
            }
            function L() {
                try {
                    a.playlist[a.item].levels[0].file.length > 0 && (a.config.shuffle ? _(O()) : a.item + 1 == a.playlist.length ? _(0) : _(a.item + 1));
                    if (a.state != e.api.events.state.IDLE) {
                        var t = a.state;
                        a.state = e.api.events.state.IDLE,
                        E.sendEvent(e.api.events.JWPLAYER_PLAYER_STATE, {
                            oldstate: t,
                            newstate: e.api.events.state.IDLE
                        })
                    }
                    return T(),
                    !0
                } catch (n) {
                    E.sendEvent(e.api.events.JWPLAYER_ERROR, n)
                }
                return !1
            }
            function A() {
                try {
                    a.playlist[a.item].levels[0].file.length > 0 && (a.config.shuffle ? _(O()) : a.item === 0 ? _(a.playlist.length - 1) : _(a.item - 1));
                    if (a.state != e.api.events.state.IDLE) {
                        var t = a.state;
                        a.state = e.api.events.state.IDLE,
                        E.sendEvent(e.api.events.JWPLAYER_PLAYER_STATE, {
                            oldstate: t,
                            newstate: e.api.events.state.IDLE
                        })
                    }
                    return T(),
                    !0
                } catch (n) {
                    E.sendEvent(e.api.events.JWPLAYER_ERROR, n)
                }
                return !1
            }
            function O() {
                var e = null;
                if (a.playlist.length > 1)
                    while (!n.exists(e))
                        e = Math.floor(Math.random() * a.playlist.length),
                        e == a.item && (e = null);
                else
                    e = 0;
                return e
            }
            function M(t) {
                if (!a.playlist || !a.playlist[t])
                    return !1;
                try {
                    if (a.playlist[t].levels[0].file.length > 0) {
                        var n = a.state;
                        n !== e.api.events.state.IDLE && (a.playlist[a.item] && a.playlist[a.item].provider == a.playlist[t].provider ? k(!1) : k()),
                        _(t),
                        T()
                    }
                    return !0
                } catch (r) {
                    E.sendEvent(e.api.events.JWPLAYER_ERROR, r)
                }
                return !1
            }
            function _(t) {
                if (!a.playlist[t])
                    return;
                a.setActiveMediaProvider(a.playlist[t]),
                a.item != t && (a.item = t,
                h = !0,
                E.sendEvent(e.api.events.JWPLAYER_PLAYLIST_ITEM, {
                    index: t
                }))
            }
            function D(t) {
                try {
                    _(a.item);
                    var n = a.getMedia();
                    switch (typeof t) {
                    case "number":
                        n.volume(t);
                        break;
                    case "string":
                        n.volume(parseInt(t, 10))
                    }
                    return a.setVolume(t),
                    !0
                } catch (r) {
                    E.sendEvent(e.api.events.JWPLAYER_ERROR, r)
                }
                return !1
            }
            function P(t) {
                try {
                    _(a.item);
                    var n = a.getMedia();
                    return typeof t == "undefined" ? (n.mute(!a.mute),
                    a.setMute(!a.mute)) : t.toString().toLowerCase() == "true" ? (n.mute(!0),
                    a.setMute(!0)) : (n.mute(!1),
                    a.setMute(!1)),
                    !0
                } catch (r) {
                    E.sendEvent(e.api.events.JWPLAYER_ERROR, r)
                }
                return !1
            }
            function H(t, n) {
                try {
                    return a.width = t,
                    a.height = n,
                    f.resize(t, n),
                    E.sendEvent(e.api.events.JWPLAYER_RESIZE, {
                        width: a.width,
                        height: a.height
                    }),
                    !0
                } catch (r) {
                    E.sendEvent(e.api.events.JWPLAYER_ERROR, r)
                }
                return !1
            }
            function B(t, n) {
                try {
                    return typeof t == "undefined" && (t = !a.fullscreen),
                    typeof n == "undefined" && (n = !0),
                    t != a.fullscreen && (a.fullscreen = t.toString().toLowerCase() == "true",
                    f.fullscreen(a.fullscreen),
                    n && E.sendEvent(e.api.events.JWPLAYER_FULLSCREEN, {
                        fullscreen: a.fullscreen
                    }),
                    E.sendEvent(e.api.events.JWPLAYER_RESIZE, {
                        width: a.width,
                        height: a.height
                    })),
                    !0
                } catch (r) {
                    E.sendEvent(e.api.events.JWPLAYER_ERROR, r)
                }
                return !1
            }
            function j(t) {
                try {
                    return k(),
                    d && (v = !1),
                    a.loadPlaylist(t),
                    a.playlist[a.item].provider ? (_(a.item),
                    a.config.autostart.toString().toLowerCase() == "true" && !n.isIOS() && !d && T(),
                    !0) : !1
                } catch (r) {
                    E.sendEvent(e.api.events.JWPLAYER_ERROR, r)
                }
                return !1
            }
            function F(e) {
                n.isIOS() || (_(a.item),
                a.config.autostart.toString().toLowerCase() == "true" && !n.isIOS() && T())
            }
            function I(e) {
                B(e.fullscreen, !1)
            }
            function q() {
                try {
                    return a.getMedia().detachMedia()
                } catch (e) {
                    return null
                }
            }
            function R() {
                try {
                    var e = a.getMedia().attachMedia();
                    typeof m == "function" && m()
                } catch (t) {
                    return null
                }
            }
            function U() {
                if (a.state != e.api.events.state.IDLE)
                    return;
                m = U;
                switch (a.config.repeat.toUpperCase()) {
                case e.html5.controller.repeatoptions.SINGLE:
                    T();
                    break;
                case e.html5.controller.repeatoptions.ALWAYS:
                    a.item == a.playlist.length - 1 && !a.config.shuffle ? M(0) : L();
                    break;
                case e.html5.controller.repeatoptions.LIST:
                    a.item == a.playlist.length - 1 && !a.config.shuffle ? (k(),
                    _(0)) : L();
                    break;
                default:
                    k()
                }
            }
            function W(e) {
                return function() {
                    y ? X(e, arguments) : z.push({
                        method: e,
                        arguments: arguments
                    })
                }
            }
            function X(e, t) {
                var n = [];
                for (i = 0; i < t.length; i++)
                    n.push(t[i]);
                e.apply(this, n)
            }
            var u = t, a = s, f = o, l = r, h = !0, p = -1, d = !1, v = !1, m, g = [], y = !1, w = n.exists(a.config.debug) && a.config.debug.toString().toLowerCase() == "console", E = new e.html5.eventdispatcher(l.id,w);
            n.extend(this, E),
            a.addGlobalListener(S),
            a.addEventListener(e.api.events.JWPLAYER_MEDIA_BUFFER_FULL, function() {
                a.getMedia().play()
            }),
            a.addEventListener(e.api.events.JWPLAYER_MEDIA_TIME, function(e) {
                e.position >= a.playlist[a.item].start && p >= 0 && (a.playlist[a.item].start = p,
                p = -1)
            }),
            a.addEventListener(e.api.events.JWPLAYER_MEDIA_COMPLETE, function(e) {
                setTimeout(U, 25)
            }),
            a.addEventListener(e.api.events.JWPLAYER_PLAYLIST_LOADED, F),
            a.addEventListener(e.api.events.JWPLAYER_FULLSCREEN, I),
            e.html5.controller.repeatoptions = {
                LIST: "LIST",
                ALWAYS: "ALWAYS",
                SINGLE: "SINGLE",
                NONE: "NONE"
            };
            var z = [];
            this.play = W(T),
            this.pause = W(N),
            this.seek = W(C),
            this.stop = W(k),
            this.next = W(L),
            this.prev = W(A),
            this.item = W(M),
            this.setVolume = W(D),
            this.setMute = W(P),
            this.resize = W(H),
            this.setFullscreen = W(B),
            this.load = W(j),
            this.playerReady = x,
            this.detachMedia = q,
            this.attachMedia = R,
            this.beforePlay = function() {
                return d
            }
            ,
            this.destroy = function() {
                a.getMedia() && a.getMedia().destroy()
            }
        }
    }(jwplayer),
    function(e) {
        e.html5.defaultSkin = function() {
            return this.text = '<?xml version="1.0" ?><skin author="LongTail Video" name="Five" version="1.1"><components><component name="controlbar"><settings><setting name="margin" value="20"/><setting name="fontsize" value="11"/><setting name="fontcolor" value="0x000000"/></settings><layout><group position="left"><button name="play"/><divider name="divider"/><button name="prev"/><divider name="divider"/><button name="next"/><divider name="divider"/><text name="elapsed"/></group><group position="center"><slider name="time"/></group><group position="right"><text name="duration"/><divider name="divider"/><button name="blank"/><divider name="divider"/><button name="mute"/><slider name="volume"/><divider name="divider"/><button name="fullscreen"/></group></layout><elements><element name="background" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAIAAABvFaqvAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAElJREFUOI3t1LERACAMQlFgGvcfxNIhHMK4gsUvUviOmgtNsiAZkBSEKxKEnCYkkQrJn/YwbUNiSDDYRZaQRDaShv+oX9GBZEIuK+8hXVLs+/YAAAAASUVORK5CYII="/><element name="blankButton" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAYCAYAAAAyJzegAAAAFElEQVQYV2P8//8/AzpgHBUc7oIAGZdH0RjKN8EAAAAASUVORK5CYII="/><element name="capLeft" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAYCAYAAAA7zJfaAAAAQElEQVQIWz3LsRGAMADDQJ0XB5bMINABZ9GENGrszxhjT2WLSqxEJG2JQrTMdV2q5LpOAvyRaVmsi7WdeZ/7+AAaOTq7BVrfOQAAAABJRU5ErkJggg=="/><element name="capRight" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAYCAYAAAA7zJfaAAAAQElEQVQIWz3LsRGAMADDQJ0XB5bMINABZ9GENGrszxhjT2WLSqxEJG2JQrTMdV2q5LpOAvyRaVmsi7WdeZ/7+AAaOTq7BVrfOQAAAABJRU5ErkJggg=="/><element name="divider" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAYCAIAAAC0rgCNAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADhJREFUCB0FwcENgEAAw7Aq+893g8APUILNOQcbFRktVGqUVFRkWNz3xTa2sUaLNUosKlRUvvf5AdbWOTtzmzyWAAAAAElFTkSuQmCC"/><element name="playButton" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAYCAYAAAAVibZIAAAANUlEQVR42u2RsQkAAAjD/NTTPaW6dXLrINJA1kBpGPMAjDWmOgp1HFQXx+b1KOefO4oxY57R73YnVYCQUCQAAAAASUVORK5CYII="/><element name="pauseButton" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAYCAYAAAAVibZIAAAAIUlEQVQ4jWNgGAWjYOiD/0gYG3/U0FFDB4Oho2AUDAYAAEwiL9HrpdMVAAAAAElFTkSuQmCC"/><element name="prevButton" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAYCAYAAAAVibZIAAAAQklEQVQ4y2NgGAWjYOiD/1AMA/JAfB5NjCJD/YH4PRaLyDa0H4lNNUP/DxlD59PCUBCIp3ZEwYA+NZLUKBgFgwEAAN+HLX9sB8u8AAAAAElFTkSuQmCC"/><element name="nextButton" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAYCAYAAAAVibZIAAAAQElEQVQ4y2NgGAWjYOiD/0B8Hojl0cT+U2ooCL8HYn9qGwrD/bQw9P+QMXQ+tSMqnpoRBUpS+tRMUqNgFAwGAADxZy1/mHvFnAAAAABJRU5ErkJggg=="/><element name="timeSliderRail" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAOElEQVRIDe3BwQkAIRADwAhhw/nU/kWwUK+KPITMABFh19Y+F0acY8CJvX9wYpXgRElwolSIiMf9ZWEDhtwurFsAAAAASUVORK5CYII="/><element name="timeSliderBuffer" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAN0lEQVRIDe3BwQkAMQwDMBcc55mRe9zi7RR+FCwBEWG39vcfGHFm4MTuhhMlwYlVBSdKhYh43AW/LQMKm1spzwAAAABJRU5ErkJggg=="/><element name="timeSliderProgress" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAIElEQVRIiWNgGAWjYBTQBfynMR61YCRYMApGwSigMQAAiVWPcbq6UkIAAAAASUVORK5CYII="/><element name="timeSliderThumb" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAYCAYAAAA/OUfnAAAAO0lEQVQYlWP4//8/Awwz0JgDBP/BeN6Cxf/hnI2btiI4u/fsQ3AOHjqK4Jw4eQbBOX/hEoKDYjSd/AMA4cS4mfLsorgAAAAASUVORK5CYII="/><element name="muteButton" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAYCAYAAADKx8xXAAAAJklEQVQ4y2NgGAUjDcwH4v/kaPxPikZkxcNVI9mBQ5XoGAWDFwAAsKAXKQQmfbUAAAAASUVORK5CYII="/><element name="unmuteButton" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAYCAYAAADKx8xXAAAAMklEQVQ4y2NgGAWDHPyntub5xBr6Hwv/Pzk2/yfVG/8psRFE25Oq8T+tQnsIaB4FVAcAi2YVysVY52AAAAAASUVORK5CYII="/><element name="volumeSliderRail" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYAgMAAACdGdVrAAAACVBMVEUAAACmpqampqbBXAu8AAAAAnRSTlMAgJsrThgAAAArSURBVAhbY2AgErBAyA4I2QEhOyBkB4TsYOhAoaCCUCUwDTDtMMNgRuMHAFB5FoGH5T0UAAAAAElFTkSuQmCC"/><element name="volumeSliderProgress" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYAgMAAACdGdVrAAAACVBMVEUAAAAAAAAAAACDY+nAAAAAAnRSTlMAgJsrThgAAAArSURBVAhbY2AgErBAyA4I2QEhOyBkB4TsYOhAoaCCUCUwDTDtMMNgRuMHAFB5FoGH5T0UAAAAAElFTkSuQmCC"/><element name="volumeSliderCapRight" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAYCAYAAAAyJzegAAAAFElEQVQYV2P8//8/AzpgHBUc7oIAGZdH0RjKN8EAAAAASUVORK5CYII="/><element name="fullscreenButton" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAQklEQVRIiWNgGAWjYMiD/0iYFDmSLbDHImdPLQtgBpEiR7Zl2NijAA5oEkT/0Whi5UiyAJ8BVMsHNMtoo2AUDAIAAGdcIN3IDNXoAAAAAElFTkSuQmCC"/><element name="normalscreenButton" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAP0lEQVRIx2NgGAWjYMiD/1RSQ5QB/wmIUWzJfzx8qhj+n4DYCAY0DyJ7PBbYU8sHMEvwiZFtODXUjIJRMJgBACpWIN2ZxdPTAAAAAElFTkSuQmCC"/></elements></component><component name="display"><elements><element name="background" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyAQMAAAAk8RryAAAABlBMVEUAAAAAAAClZ7nPAAAAAnRSTlOZpuml+rYAAAASSURBVBhXY2AYJuA/GBwY6jQAyDyoK8QcL4QAAAAASUVORK5CYII="/><element name="playIcon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAiUlEQVR42u3XSw2AMBREURwgAQlIQAISKgUpSEFKJeCg5b0E0kWBTVcD9ySTsL0Jn9IBAAAA+K2UUrBlW/Rr5ZDoIeeuoFkxJD9ss03aIXXQqB9SttoG7ZA6qNcOKdttiwcJh9RB+iFl4SshkRBuLR72+9cvH0SOKI2HRo7x/Fi1/uoCAAAAwLsD8ki99IlO2dQAAAAASUVORK5CYII="/><element name="muteIcon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAVUlEQVR42u3WMQrAIAxAUW/g/SdvGmvpoOBeSHgPsjj5QTANAACARCJilIhYM0tEvJM+Ik3Id9E957kQIb+F3OdCPC0hPkQriqWx9hp/x/QGAABQyAPLB22VGrpLDgAAAABJRU5ErkJggg=="/><element name="errorIcon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAA/0lEQVR42u2U0QmEMBAF7cASLMESUoIlpARLSCkpwRJSgiWkhOvAXD4WsgRkyaG5DbyB+Yvg8KITAAAAAAAYk+u61mwk15EjPtlEfihmqIiZR1Qx80ghjgdUuiHXGHSVsoag0x6x8DUoyjD5KovmEJ9NTDMRPIT0mtdIUkjlonuNohO+Ha99DTmkuGgKCTcvebAzx82ZoCWC3/3aIMWSRucaxcjORSFY4xpFdjYJGp1rFGcyCYZ/RVh6AUnfcNZ2zih3/mGj1jVCdiNDwyrq1rA/xMdeEXvDVdnYc1vDc3uPkDObXrlaxbNHSOohQhr/WOeLEWfWTgAAAAAAADzNF9sHJ7PJ57MlAAAAAElFTkSuQmCC"/><element name="bufferIcon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAACBklEQVR42u3Zv0sCYRzH8USTzOsHHEWGkC1HgaDgkktGDjUYtDQ01RDSljQ1BLU02+rk1NTm2NLq4Nx/0L/h9fnCd3j4cnZe1/U8xiO8h3uurufF0/3COd/3/0UWYiEWYiEWYiGJQ+J8xuPxKhXjEMZANinjIZhkGuVRNioE4wVURo4JkHm0xKWmhRAc1bh1EyCUw5BcBIjHiApKa4CErko6DEJwuRo6IRKzyJD8FJAyI3Zp2zRImiBcRhlfo5RtlxCcE3CcDNpGrhYIT2IhAJKilO0VRmzJ32fAMTpBTS0QMfGwlcuKMRftE0DJ0wCJdcOsCkBdXP3Mh9CEFUBTPS9mDZJBG6io4aqVzMdCokCw9H3kT6j/C/9iDdSeUMNC7DkyyxAs/Rk6Qss8FPWRZgdVtUH4DjxEn1zxh+/zj1wHlf4MQhNGrwqA6sY40U8JonRJwEQh+AO3AvCG6gHv4U7IY4krxkroWoAOkoQMGfCBrgIm+YBGqPENpIJ66CJg3x66Y0gnSUidAEEnNr9jjLiWMn5DiWP0OC/oAsCgkq43xBdGDMQr7YASP/vEkHvdl1+JOCcEV5sC4hGEOzTlPuKgd0b0xD4JkRcOgnRRTjdErkYhAsQVq6IdUuPJtmk7BCL3t/h88cx91pKQkI/pkDx6pmYTIjEoxiHsN1YWYiEWYiEWknhflZ5IErA5nr8AAAAASUVORK5CYII="/></elements></component><component name="dock"><settings><setting name="fontcolor" value="0xffffff"/></settings><elements><element name="button" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyAQMAAAAk8RryAAAABlBMVEUAAAAAAAClZ7nPAAAAAnRSTlOZpuml+rYAAAASSURBVBhXY2AYJuA/GBwY6jQAyDyoK8QcL4QAAAAASUVORK5CYII="/></elements></component><component name="playlist"><settings><setting name="backgroundcolor" value="0xe8e8e8"/></settings><elements><element name="item" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAIAAAC1nk4lAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAHBJREFUaN7t2MENwCAMBEEe9N8wSKYC/D8YV7CyJoRkVtVImxkZPQInMxoP0XiIxkM0HsGbjjSNBx544IEHHnjggUe/6UQeey0PIh7XTftGxKPj4eXCtLsHHh+ZxkO0Iw8PR55Ni8ZD9Hu/EAoP0dc5RRg9qeRjVF8AAAAASUVORK5CYII="/><element name="sliderCapTop" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAHCAYAAADnCQYGAAAAFUlEQVQokWP8//8/A7UB46ihI9hQAKt6FPPXhVGHAAAAAElFTkSuQmCC"/><element name="sliderRail" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAUCAYAAABiS3YzAAAAKElEQVQ4y2P4//8/Az68bNmy/+iYkB6GUUNHDR01dNTQUUNHDaXcUABUDOKhcxnsSwAAAABJRU5ErkJggg=="/><element name="sliderThumb" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAUCAYAAABiS3YzAAAAJUlEQVQ4T2P4//8/Ay4MBP9xYbz6Rg0dNXTU0FFDRw0dNZRyQwHH4NBa7GJsXAAAAABJRU5ErkJggg=="/><element name="sliderCapBottom" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAHCAYAAADnCQYGAAAAFUlEQVQokWP8//8/A7UB46ihI9hQAKt6FPPXhVGHAAAAAElFTkSuQmCC"/></elements></component></components></skin>',
            this.xml = null,
            window.DOMParser ? (parser = new DOMParser,
            this.xml = parser.parseFromString(this.text, "text/xml")) : (this.xml = new ActiveXObject("Microsoft.XMLDOM"),
            this.xml.async = "false",
            this.xml.loadXML(this.text)),
            this
        }
    }(jwplayer),
    function(e) {
        _utils = e.utils,
        _css = _utils.css,
        _hide = function(e) {
            _css(e, {
                display: "none"
            })
        }
        ,
        _show = function(e) {
            _css(e, {
                display: "block"
            })
        }
        ,
        e.html5.display = function(t, n) {
            function M() {
                o.display = P("div", "display"),
                o.display_text = P("div", "display_text"),
                o.display.appendChild(o.display_text),
                o.display_image = P("img", "display_image"),
                o.display_image.onerror = function(e) {
                    _hide(o.display_image)
                }
                ,
                o.display_image.onload = _,
                o.display_icon = P("div", "display_icon"),
                o.display_iconBackground = P("div", "display_iconBackground"),
                o.display.appendChild(o.display_image),
                o.display_iconBackground.appendChild(o.display_icon),
                o.display.appendChild(o.display_iconBackground),
                H(),
                setTimeout(function() {
                    N = !0,
                    i.icons.toString() == "true" && J()
                }, 1)
            }
            function _(t) {
                l = o.display_image.naturalWidth,
                c = o.display_image.naturalHeight,
                D();
                if (s.jwGetState() == e.api.events.state.IDLE || s.jwGetPlaylist()[s.jwGetPlaylistIndex()].provider == "sound")
                    _css(o.display_image, {
                        display: "block",
                        opacity: 0
                    }),
                    _utils.fadeTo(o.display_image, 1, .1);
                E = !1
            }
            function D() {
                if (s.jwGetFullscreen() && s.jwGetStretching() == e.utils.stretching.EXACTFIT) {
                    var t = document.createElement("div");
                    _utils.stretch(e.utils.stretching.UNIFORM, t, u, f, k, L),
                    _utils.stretch(e.utils.stretching.EXACTFIT, o.display_image, _utils.parseDimension(t.style.width), _utils.parseDimension(t.style.height), l, c),
                    _css(o.display_image, {
                        left: t.style.left,
                        top: t.style.top
                    })
                } else
                    _utils.stretch(s.jwGetStretching(), o.display_image, u, f, l, c)
            }
            function P(e, t) {
                var n = document.createElement(e);
                return n.id = s.id + "_jwplayer_" + t,
                _css(n, O[t].style),
                n
            }
            function H() {
                for (var e in o)
                    _utils.exists(O[e].click) && (o[e].onclick = O[e].click)
            }
            function B(t) {
                typeof t.preventDefault != "undefined" ? t.preventDefault() : t.returnValue = !1;
                if (typeof C == "function") {
                    C(t);
                    return
                }
                s.jwGetState() != e.api.events.state.PLAYING ? s.jwPlay() : s.jwPause()
            }
            function j(e) {
                if (d) {
                    F();
                    return
                }
                o.display_icon.style.backgroundImage = ["url(", s.skin.getSkinElement("display", e).src, ")"].join(""),
                _css(o.display_icon, {
                    width: s.skin.getSkinElement("display", e).width,
                    height: s.skin.getSkinElement("display", e).height,
                    top: (s.skin.getSkinElement("display", "background").height - s.skin.getSkinElement("display", e).height) / 2,
                    left: (s.skin.getSkinElement("display", "background").width - s.skin.getSkinElement("display", e).width) / 2
                }),
                I(),
                _utils.exists(s.skin.getSkinElement("display", e + "Over")) ? (o.display_icon.onmouseover = function(t) {
                    o.display_icon.style.backgroundImage = ["url(", s.skin.getSkinElement("display", e + "Over").src, ")"].join("")
                }
                ,
                o.display_icon.onmouseout = function(t) {
                    o.display_icon.style.backgroundImage = ["url(", s.skin.getSkinElement("display", e).src, ")"].join("")
                }
                ) : (o.display_icon.onmouseover = null,
                o.display_icon.onmouseout = null)
            }
            function F() {
                i.icons.toString() == "true" && (_hide(o.display_icon),
                _hide(o.display_iconBackground),
                K())
            }
            function I() {
                !T && i.icons.toString() == "true" && (_show(o.display_icon),
                _show(o.display_iconBackground),
                J())
            }
            function q(e) {
                d = !0,
                F(),
                o.display_text.innerHTML = e.message,
                _show(o.display_text),
                o.display_text.style.top = (f - _utils.getBoundingClientRect(o.display_text).height) / 2 + "px"
            }
            function R() {
                S = !1,
                o.display_image.style.display = "none"
            }
            function U() {
                y = ""
            }
            function z(t) {
                (t.type == e.api.events.JWPLAYER_PLAYER_STATE || t.type == e.api.events.JWPLAYER_PLAYLIST_ITEM) && d && (d = !1,
                _hide(o.display_text));
                var n = s.jwGetState();
                if (n == y)
                    return;
                y = n,
                g >= 0 && clearTimeout(g),
                b || s.jwGetState() == e.api.events.state.PLAYING || s.jwGetState() == e.api.events.state.PAUSED ? X(s.jwGetState()) : g = setTimeout(W(s.jwGetState()), 500)
            }
            function W(e) {
                return function() {
                    X(e)
                }
            }
            function X(t) {
                _utils.exists(p) && (clearInterval(p),
                p = null,
                _utils.animations.rotate(o.display_icon, 0));
                switch (t) {
                case e.api.events.state.BUFFERING:
                    _utils.isIPod() ? (R(),
                    F()) : (s.jwGetPlaylist()[s.jwGetPlaylistIndex()].provider == "sound" && V(),
                    h = 0,
                    p = setInterval(function() {
                        h += v,
                        _utils.animations.rotate(o.display_icon, h % 360)
                    }, m),
                    j("bufferIcon"),
                    b = !0);
                    break;
                case e.api.events.state.PAUSED:
                    _utils.isIPod() || (s.jwGetPlaylist()[s.jwGetPlaylistIndex()].provider != "sound" && _css(o.display_image, {
                        background: "transparent no-repeat center center"
                    }),
                    j("playIcon"),
                    b = !0);
                    break;
                case e.api.events.state.IDLE:
                    s.jwGetPlaylist()[s.jwGetPlaylistIndex()] && s.jwGetPlaylist()[s.jwGetPlaylistIndex()].image ? V() : R(),
                    j("playIcon"),
                    b = !0;
                    break;
                default:
                    s.jwGetPlaylist()[s.jwGetPlaylistIndex()] && s.jwGetPlaylist()[s.jwGetPlaylistIndex()].provider == "sound" ? _utils.isIPod() ? (R(),
                    b = !1) : V() : (R(),
                    b = !1),
                    s.jwGetMute() && i.showmute ? j("muteIcon") : F()
                }
                g = -1
            }
            function V() {
                if (s.jwGetPlaylist()[s.jwGetPlaylistIndex()]) {
                    var e = s.jwGetPlaylist()[s.jwGetPlaylistIndex()].image;
                    e && (e != x ? (x = e,
                    E = !0,
                    o.display_image.src = _utils.getAbsolutePath(e)) : !E && !S && (S = !0,
                    o.display_image.style.opacity = 0,
                    o.display_image.style.display = "block",
                    _utils.fadeTo(o.display_image, 1, .1)))
                }
            }
            function $(e) {
                return function() {
                    if (!N)
                        return;
                    !T && w != e && (w = e,
                    A.sendEvent(e, {
                        component: "display",
                        boundingRect: _utils.getDimensions(o.display_iconBackground)
                    }))
                }
            }
            var r = {
                icons: !0,
                showmute: !1
            }, i = _utils.extend({}, r, n), s = t, o = {}, u, f, l, c, h, p, d, v = _utils.exists(s.skin.getComponentSettings("display").bufferrotation) ? parseInt(s.skin.getComponentSettings("display").bufferrotation, 10) : 15, m = _utils.exists(s.skin.getComponentSettings("display").bufferinterval) ? parseInt(s.skin.getComponentSettings("display").bufferinterval, 10) : 100, g = -1, y = e.api.events.state.IDLE, b = !0, w, E = !1, S = !0, x = "", T = !1, N = !1, C, k, L, A = new e.html5.eventdispatcher;
            _utils.extend(this, A);
            var O = {
                display: {
                    style: {
                        cursor: "pointer",
                        top: 0,
                        left: 0,
                        overflow: "hidden"
                    },
                    click: B
                },
                display_icon: {
                    style: {
                        cursor: "pointer",
                        position: "absolute",
                        top: (s.skin.getSkinElement("display", "background").height - s.skin.getSkinElement("display", "playIcon").height) / 2,
                        left: (s.skin.getSkinElement("display", "background").width - s.skin.getSkinElement("display", "playIcon").width) / 2,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        zIndex: 3,
                        display: "none"
                    }
                },
                display_iconBackground: {
                    style: {
                        cursor: "pointer",
                        position: "absolute",
                        top: (f - s.skin.getSkinElement("display", "background").height) / 2,
                        left: (u - s.skin.getSkinElement("display", "background").width) / 2,
                        border: 0,
                        backgroundImage: ["url(", s.skin.getSkinElement("display", "background").src, ")"].join(""),
                        width: s.skin.getSkinElement("display", "background").width,
                        height: s.skin.getSkinElement("display", "background").height,
                        margin: 0,
                        padding: 0,
                        zIndex: 2,
                        display: "none"
                    }
                },
                display_image: {
                    style: {
                        display: "none",
                        width: u,
                        height: f,
                        position: "absolute",
                        cursor: "pointer",
                        left: 0,
                        top: 0,
                        margin: 0,
                        padding: 0,
                        textDecoration: "none",
                        zIndex: 1
                    }
                },
                display_text: {
                    style: {
                        zIndex: 4,
                        position: "relative",
                        opacity: .8,
                        backgroundColor: parseInt("000000", 16),
                        color: parseInt("ffffff", 16),
                        textAlign: "center",
                        fontFamily: "Arial,sans-serif",
                        padding: "0 5px",
                        fontSize: 14
                    }
                }
            };
            s.jwAddEventListener(e.api.events.JWPLAYER_PLAYER_STATE, z),
            s.jwAddEventListener(e.api.events.JWPLAYER_MEDIA_MUTE, z),
            s.jwAddEventListener(e.api.events.JWPLAYER_PLAYLIST_LOADED, U),
            s.jwAddEventListener(e.api.events.JWPLAYER_PLAYLIST_ITEM, z),
            s.jwAddEventListener(e.api.events.JWPLAYER_ERROR, q),
            M(),
            this.getDisplayElement = function() {
                return o.display
            }
            ,
            this.resize = function(e, t) {
                if (s.jwGetFullscreen() && _utils.isMobile())
                    return;
                _css(o.display, {
                    width: e,
                    height: t
                }),
                _css(o.display_text, {
                    width: e - 10,
                    top: (t - _utils.getBoundingClientRect(o.display_text).height) / 2
                }),
                _css(o.display_iconBackground, {
                    top: (t - s.skin.getSkinElement("display", "background").height) / 2,
                    left: (e - s.skin.getSkinElement("display", "background").width) / 2
                });
                if (u != e || f != t)
                    u = e,
                    f = t,
                    w = undefined,
                    J();
                s.jwGetFullscreen() || (k = e,
                L = t),
                D(),
                z({})
            }
            ,
            this.show = function() {
                T && (T = !1,
                X(s.jwGetState()))
            }
            ,
            this.hide = function() {
                T || (F(),
                T = !0)
            }
            ;
            var J = $(e.api.events.JWPLAYER_COMPONENT_SHOW)
              , K = $(e.api.events.JWPLAYER_COMPONENT_HIDE);
            return this.setAlternateClickHandler = function(e) {
                C = e
            }
            ,
            this.revertAlternateClickHandler = function() {
                C = undefined
            }
            ,
            this
        }
    }(jwplayer),
    function(e) {
        var t = e.utils
          , n = t.css;
        e.html5.dock = function(r, i) {
            function s() {
                return {
                    align: e.html5.view.positions.RIGHT
                }
            }
            function S(e) {
                return "url(" + e + ") no-repeat center center"
            }
            function x(e) {}
            function T(n, i) {
                P();
                if (f.length > 0) {
                    var s = 10, p = s, g = -1, y = r.skin.getSkinElement("dock", "button").height, b = r.skin.getSkinElement("dock", "button").width, w = n - b - s, E, S;
                    o.align == e.html5.view.positions.LEFT && (g = 1,
                    w = s);
                    for (var x = 0; x < f.length; x++) {
                        var T = Math.floor(p / i);
                        p + y + s > (T + 1) * i && (p = (T + 1) * i + s,
                        T = Math.floor(p / i));
                        var N = u[f[x]].div;
                        N.style.top = p % i + "px",
                        N.style.left = w + (r.skin.getSkinElement("dock", "button").width + s) * T * g + "px";
                        var C = {
                            x: t.parseDimension(N.style.left),
                            y: t.parseDimension(N.style.top),
                            width: b,
                            height: y
                        };
                        if (!E || C.x <= E.x && C.y <= E.y)
                            E = C;
                        if (!S || C.x >= S.x && C.y >= S.y)
                            S = C;
                        N.style.width = b + "px",
                        N.style.height = y + "px",
                        p += r.skin.getSkinElement("dock", "button").height + s
                    }
                    v = {
                        x: E.x,
                        y: E.y,
                        width: S.x - E.x + S.width,
                        height: E.y - S.y + S.height
                    }
                }
                if (d != r.jwGetFullscreen() || l != n || h != i)
                    l = n,
                    h = i,
                    d = r.jwGetFullscreen(),
                    m = undefined,
                    setTimeout(L, 1)
            }
            function N(e) {
                return function() {
                    !p && m != e && f.length > 0 && (m = e,
                    w.sendEvent(e, {
                        component: "dock",
                        boundingRect: v
                    }))
                }
            }
            function C(n) {
                t.isMobile() ? n.newstate == e.api.events.state.IDLE ? O() : M() : k()
            }
            function k(n) {
                if (p)
                    return;
                clearTimeout(y);
                if (i.position == e.html5.view.positions.OVER || r.jwGetFullscreen())
                    switch (r.jwGetState()) {
                    case e.api.events.state.PAUSED:
                    case e.api.events.state.IDLE:
                        E && E.style.opacity < 1 && (!i.idlehide || t.exists(n)) && D(),
                        i.idlehide && (y = setTimeout(function() {
                            _()
                        }, 2e3));
                        break;
                    default:
                        t.exists(n) && D(),
                        y = setTimeout(function() {
                            _()
                        }, 2e3)
                    }
                else
                    D()
            }
            function _() {
                p || (A(),
                E.style.opacity == 1 && (t.cancelAnimation(E),
                t.fadeTo(E, 0, .1, 1, 0)))
            }
            function D() {
                p || (L(),
                E.style.opacity == 0 && (t.cancelAnimation(E),
                t.fadeTo(E, 1, .1, 0, 0)))
            }
            function P() {
                try {
                    g = document.getElementById(r.id),
                    g.addEventListener("mousemove", k)
                } catch (e) {
                    t.log("Could not add mouse listeners to dock: " + e)
                }
            }
            var o = t.extend({}, s(), i);
            if (o.align == "FALSE")
                return;
            var u = {}, f = [], l, h, p = !1, d = !1, v = {
                x: 0,
                y: 0,
                width: 0,
                height: 0
            }, m, g, y, w = new e.html5.eventdispatcher;
            t.extend(this, w);
            var E = document.createElement("div");
            E.id = r.id + "_jwplayer_dock",
            E.style.opacity = 1,
            P(),
            r.jwAddEventListener(e.api.events.JWPLAYER_PLAYER_STATE, C),
            this.getDisplayElement = function() {
                return E
            }
            ,
            this.setButton = function(n, i, s, o) {
                !i && u[n] ? (t.arrays.remove(f, n),
                E.removeChild(u[n].div),
                delete u[n]) : i && (u[n] || (u[n] = {}),
                u[n].handler = i,
                u[n].outGraphic = s,
                u[n].overGraphic = o,
                u[n].div || (f.push(n),
                u[n].div = document.createElement("div"),
                u[n].div.style.position = "absolute",
                E.appendChild(u[n].div),
                u[n].div.appendChild(document.createElement("div")),
                u[n].div.childNodes[0].style.position = "relative",
                u[n].div.childNodes[0].style.width = "100%",
                u[n].div.childNodes[0].style.height = "100%",
                u[n].div.childNodes[0].style.zIndex = 10,
                u[n].div.childNodes[0].style.cursor = "pointer",
                u[n].div.appendChild(document.createElement("img")),
                u[n].div.childNodes[1].style.position = "absolute",
                u[n].div.childNodes[1].style.left = 0,
                u[n].div.childNodes[1].style.top = 0,
                r.skin.getSkinElement("dock", "button") && (u[n].div.childNodes[1].src = r.skin.getSkinElement("dock", "button").src),
                u[n].div.childNodes[1].style.zIndex = 9,
                u[n].div.childNodes[1].style.cursor = "pointer",
                u[n].div.onmouseover = function() {
                    u[n].overGraphic && (u[n].div.childNodes[0].style.background = S(u[n].overGraphic)),
                    r.skin.getSkinElement("dock", "buttonOver") && (u[n].div.childNodes[1].src = r.skin.getSkinElement("dock", "buttonOver").src)
                }
                ,
                u[n].div.onmouseout = function() {
                    u[n].outGraphic && (u[n].div.childNodes[0].style.background = S(u[n].outGraphic)),
                    r.skin.getSkinElement("dock", "button") && (u[n].div.childNodes[1].src = r.skin.getSkinElement("dock", "button").src)
                }
                ,
                r.skin.getSkinElement("dock", "button") && (u[n].div.childNodes[1].src = r.skin.getSkinElement("dock", "button").src)),
                u[n].outGraphic ? u[n].div.childNodes[0].style.background = S(u[n].outGraphic) : u[n].overGraphic && (u[n].div.childNodes[0].style.background = S(u[n].overGraphic)),
                i && (u[n].div.onclick = function(t) {
                    t.preventDefault(),
                    e(r.id).callback(n),
                    u[n].overGraphic && (u[n].div.childNodes[0].style.background = S(u[n].overGraphic)),
                    r.skin.getSkinElement("dock", "button") && (u[n].div.childNodes[1].src = r.skin.getSkinElement("dock", "button").src)
                }
                )),
                T(l, h)
            }
            ;
            var L = N(e.api.events.JWPLAYER_COMPONENT_SHOW)
              , A = N(e.api.events.JWPLAYER_COMPONENT_HIDE);
            this.resize = T;
            var O = function() {
                n(E, {
                    display: "block"
                }),
                p && (p = !1,
                L())
            }
              , M = function() {
                n(E, {
                    display: "none"
                }),
                p || (A(),
                p = !0)
            };
            return this.hide = M,
            this.show = O,
            this
        }
    }(jwplayer),
    function(e) {
        e.html5.eventdispatcher = function(t, n) {
            var r = new e.events.eventdispatcher(n);
            e.utils.extend(this, r),
            this.sendEvent = function(n, i) {
                e.utils.exists(i) || (i = {}),
                e.utils.extend(i, {
                    id: t,
                    version: e.version,
                    type: n
                }),
                r.sendEvent(n, i)
            }
        }
    }(jwplayer),
    function(e) {
        var t = e.utils;
        e.html5.instream = function(n, r, i, s) {
            function L() {
                _fakemodel = new e.html5.model(this,c.getMedia() ? c.getMedia().getDisplayElement() : c.container,c),
                N = new e.html5.eventdispatcher,
                l.jwAddEventListener(e.api.events.JWPLAYER_RESIZE, B),
                l.jwAddEventListener(e.api.events.JWPLAYER_FULLSCREEN, B)
            }
            function A() {
                _fakemodel.setMute(c.mute),
                _fakemodel.setVolume(c.volume)
            }
            function O() {
                E || (E = new e.html5.mediavideo(_fakemodel,c.getMedia() ? c.getMedia().getDisplayElement() : c.container),
                E.addGlobalListener(M),
                E.addEventListener(e.api.events.JWPLAYER_MEDIA_META, P),
                E.addEventListener(e.api.events.JWPLAYER_MEDIA_COMPLETE, D),
                E.addEventListener(e.api.events.JWPLAYER_MEDIA_BUFFER_FULL, _)),
                E.attachMedia()
            }
            function M(e) {
                T && H(e.type, e)
            }
            function _(e) {
                T && E.play()
            }
            function D(e) {
                T && setTimeout(function() {
                    k.jwInstreamDestroy(!0)
                }, 10)
            }
            function P(e) {
                e.metadata.width && e.metadata.height && h.resizeMedia()
            }
            function H(e, t, n) {
                (T || n) && N.sendEvent(e, t)
            }
            function B() {
                var e = c.plugins.object.display.getDisplayElement().style;
                if (S) {
                    var n = c.plugins.object.controlbar.getDisplayElement().style;
                    S.resize(t.parseDimension(e.width), t.parseDimension(e.height)),
                    _css(S.getDisplayElement(), t.extend({}, n, {
                        zIndex: 1001,
                        opacity: 1
                    }))
                }
                x && (x.resize(t.parseDimension(e.width), t.parseDimension(e.height)),
                _css(x.getDisplayElement(), t.extend({}, e, {
                    zIndex: 1e3
                }))),
                h && h.resizeMedia()
            }
            var o = {
                controlbarseekable: "always",
                controlbarpausable: !0,
                controlbarstoppable: !0,
                playlistclickable: !0
            }, u, f, l = n, c = r, h = i, p = s, d, v, m, g, y, w, E, S, x, T = !1, N, C, k = this;
            return this.load = function(n, r) {
                A(),
                T = !0,
                f = t.extend(o, r),
                u = e.html5.playlistitem(n),
                O(),
                C = document.createElement("div"),
                C.id = k.id + "_instream_container",
                p.detachMedia(),
                d = E.getDisplayElement(),
                w = c.playlist[c.item],
                y = l.jwGetState(),
                (y == e.api.events.state.BUFFERING || y == e.api.events.state.PLAYING) && d.pause(),
                v = d.src ? d.src : d.currentSrc,
                m = d.innerHTML,
                g = d.currentTime,
                x = new e.html5.display(k,t.extend({}, c.plugins.config.display)),
                x.setAlternateClickHandler(function(t) {
                    _fakemodel.state == e.api.events.state.PAUSED ? k.jwInstreamPlay() : H(e.api.events.JWPLAYER_INSTREAM_CLICK, t)
                }),
                C.appendChild(x.getDisplayElement());
                if (!t.isMobile()) {
                    S = new e.html5.controlbar(k,t.extend({}, c.plugins.config.controlbar, {}));
                    if (c.plugins.config.controlbar.position == e.html5.view.positions.OVER)
                        C.appendChild(S.getDisplayElement());
                    else {
                        var i = c.plugins.object.controlbar.getDisplayElement().parentNode;
                        i.appendChild(S.getDisplayElement())
                    }
                }
                h.setupInstream(C, d),
                B(),
                E.load(u)
            }
            ,
            this.jwInstreamDestroy = function(t) {
                if (!T)
                    return;
                T = !1,
                y != e.api.events.state.IDLE ? (E.load(w, !1),
                E.stop(!1)) : E.stop(!0),
                E.detachMedia(),
                h.destroyInstream();
                if (S)
                    try {
                        S.getDisplayElement().parentNode.removeChild(S.getDisplayElement())
                    } catch (n) {}
                H(e.api.events.JWPLAYER_INSTREAM_DESTROYED, {
                    reason: t ? "complete" : "destroyed"
                }, !0),
                p.attachMedia();
                if (y == e.api.events.state.BUFFERING || y == e.api.events.state.PLAYING)
                    d.play(),
                    c.playlist[c.item] == w && c.getMedia().seek(g);
                return
            }
            ,
            this.jwInstreamAddEventListener = function(e, t) {
                N.addEventListener(e, t)
            }
            ,
            this.jwInstreamRemoveEventListener = function(e, t) {
                N.removeEventListener(e, t)
            }
            ,
            this.jwInstreamPlay = function() {
                if (!T)
                    return;
                E.play(!0)
            }
            ,
            this.jwInstreamPause = function() {
                if (!T)
                    return;
                E.pause(!0)
            }
            ,
            this.jwInstreamSeek = function(e) {
                if (!T)
                    return;
                E.seek(e)
            }
            ,
            this.jwInstreamGetState = function() {
                return T ? _fakemodel.state : undefined
            }
            ,
            this.jwInstreamGetPosition = function() {
                return T ? _fakemodel.position : undefined
            }
            ,
            this.jwInstreamGetDuration = function() {
                return T ? _fakemodel.duration : undefined
            }
            ,
            this.playlistClickable = function() {
                return !T || f.playlistclickable.toString().toLowerCase() == "true"
            }
            ,
            this.jwPlay = function(e) {
                f.controlbarpausable.toString().toLowerCase() == "true" && this.jwInstreamPlay()
            }
            ,
            this.jwPause = function(e) {
                f.controlbarpausable.toString().toLowerCase() == "true" && this.jwInstreamPause()
            }
            ,
            this.jwStop = function() {
                f.controlbarstoppable.toString().toLowerCase() == "true" && (this.jwInstreamDestroy(),
                l.jwStop())
            }
            ,
            this.jwSeek = function(e) {
                switch (f.controlbarseekable.toLowerCase()) {
                case "always":
                    this.jwInstreamSeek(e);
                    break;
                case "backwards":
                    _fakemodel.position > e && this.jwInstreamSeek(e)
                }
            }
            ,
            this.jwGetPosition = function() {}
            ,
            this.jwGetDuration = function() {}
            ,
            this.jwGetWidth = l.jwGetWidth,
            this.jwGetHeight = l.jwGetHeight,
            this.jwGetFullscreen = l.jwGetFullscreen,
            this.jwSetFullscreen = l.jwSetFullscreen,
            this.jwGetVolume = function() {
                return c.volume
            }
            ,
            this.jwSetVolume = function(e) {
                E.volume(e),
                l.jwSetVolume(e)
            }
            ,
            this.jwGetMute = function() {
                return c.mute
            }
            ,
            this.jwSetMute = function(e) {
                E.mute(e),
                l.jwSetMute(e)
            }
            ,
            this.jwGetState = function() {
                return _fakemodel.state
            }
            ,
            this.jwGetPlaylist = function() {
                return [u]
            }
            ,
            this.jwGetPlaylistIndex = function() {
                return 0
            }
            ,
            this.jwGetStretching = function() {
                return c.config.stretching
            }
            ,
            this.jwAddEventListener = function(e, t) {
                N.addEventListener(e, t)
            }
            ,
            this.jwRemoveEventListener = function(e, t) {
                N.removeEventListener(e, t)
            }
            ,
            this.skin = l.skin,
            this.id = l.id + "_instream",
            L(),
            this
        }
    }(jwplayer),
    function(e) {
        var t = {
            prefix: "",
            file: "",
            link: "",
            linktarget: "_top",
            margin: 8,
            out: .5,
            over: 1,
            timeout: 5,
            hide: !0,
            position: "bottom-left"
        };
        _css = e.utils.css,
        e.html5.logo = function(n, r) {
            function l() {
                c(),
                i.jwAddEventListener(e.api.events.JWPLAYER_PLAYER_STATE, E),
                h(),
                p()
            }
            function c() {
                if (t.prefix) {
                    var i = n.version.split(/\W/).splice(0, 2).join("/");
                    t.prefix.indexOf(i) < 0 && (t.prefix += i + "/")
                }
                r.position == e.html5.view.positions.OVER && (r.position = t.position);
                try {
                    window.location.href.indexOf("https") == 0 && (t.prefix = t.prefix.replace("http://l.longtailvideo.com", "https://securel.longtailvideo.com"))
                } catch (s) {}
                o = e.utils.extend({}, t, r)
            }
            function h() {
                u = document.createElement("img"),
                u.id = i.id + "_jwplayer_logo",
                u.style.display = "none",
                u.onload = function(e) {
                    _css(u, g()),
                    v()
                }
                ;
                if (!o.file)
                    return;
                o.file.indexOf("/") >= 0 ? u.src = o.file : u.src = o.prefix + o.file
            }
            function p() {
                o.link ? (u.onmouseover = m,
                u.onmouseout = v,
                u.onclick = d) : this.mouseEnabled = !1
            }
            function d(e) {
                typeof e != "undefined" && e.stopPropagation();
                if (!f)
                    return;
                i.jwPause(),
                i.jwSetFullscreen(!1),
                o.link && window.open(o.link, o.linktarget);
                return
            }
            function v(e) {
                o.link && f && (u.style.opacity = o.out);
                return
            }
            function m(e) {
                f && (u.style.opacity = o.over);
                return
            }
            function g() {
                var e = {
                    textDecoration: "none",
                    position: "absolute",
                    cursor: "pointer"
                };
                e.display = o.hide.toString() == "true" && !f ? "none" : "block";
                var t = o.position.toLowerCase().split("-");
                for (var n in t)
                    e[t[n]] = parseInt(o.margin);
                return e
            }
            function y() {
                o.hide.toString() == "true" && (u.style.display = "block",
                u.style.opacity = 0,
                e.utils.fadeTo(u, o.out, .1, parseFloat(u.style.opacity)),
                s = setTimeout(function() {
                    w()
                }, o.timeout * 1e3)),
                f = !0
            }
            function w() {
                f = !1,
                o.hide.toString() == "true" && e.utils.fadeTo(u, 0, .1, parseFloat(u.style.opacity))
            }
            function E(t) {
                t.newstate == e.api.events.state.BUFFERING && (clearTimeout(s),
                y())
            }
            var i = n, s, o, u, f = !1;
            l();
            if (!o.file)
                return;
            return this.resize = function(e, t) {}
            ,
            this.getDisplayElement = function() {
                return u
            }
            ,
            this
        }
    }(jwplayer),
    function(e) {
        var t = {
            ended: e.api.events.state.IDLE,
            playing: e.api.events.state.PLAYING,
            pause: e.api.events.state.PAUSED,
            buffering: e.api.events.state.BUFFERING
        }, n = e.utils, r = n.isMobile(), i, s, o = {};
        e.html5.mediavideo = function(u, l) {
            function D(e, t) {
                return p[e] ? p[e] : (p[e] = function(e) {
                    n.exists(e.target.parentNode) && t(e)
                }
                ,
                p[e])
            }
            function P() {
                E = e.api.events.state.IDLE,
                k = !0,
                w = H(),
                w.setAttribute("x-webkit-airplay", "allow"),
                y.parentNode && (w.id = y.id,
                y.parentNode.replaceChild(w, y))
            }
            function H() {
                var e = o[m.id];
                e || (y.tagName.toLowerCase() == "video" ? e = y : e = document.createElement("video"),
                o[m.id] = e,
                e.id || (e.id = y.id));
                for (var t in h)
                    e.addEventListener(t, D(t, h[t]), !0);
                return e
            }
            function B(t) {
                if (t == e.api.events.state.PAUSED && E == e.api.events.state.IDLE)
                    return;
                if (r)
                    switch (t) {
                    case e.api.events.state.PLAYING:
                        G();
                        break;
                    case e.api.events.state.BUFFERING:
                    case e.api.events.state.PAUSED:
                        Y()
                    }
                if (E != t) {
                    var n = E;
                    m.state = E = t,
                    Z(e.api.events.JWPLAYER_PLAYER_STATE, {
                        oldstate: n,
                        newstate: t
                    })
                }
            }
            function j(e) {}
            function F(t) {
                var n = Math.round(w.volume * 100);
                Z(e.api.events.JWPLAYER_MEDIA_VOLUME, {
                    volume: n
                }, !0),
                Z(e.api.events.JWPLAYER_MEDIA_MUTE, {
                    mute: w.muted
                }, !0)
            }
            function I(t) {
                if (!k)
                    return;
                var r;
                if (n.exists(t) && t.lengthComputable && t.total)
                    r = t.loaded / t.total * 100;
                else if (n.exists(w.buffered) && w.buffered.length > 0) {
                    var i = w.buffered.length - 1;
                    i >= 0 && (r = w.buffered.end(i) / w.duration * 100)
                }
                n.useNativeFullscreen() && n.exists(w.webkitDisplayingFullscreen) && m.fullscreen != w.webkitDisplayingFullscreen && Z(e.api.events.JWPLAYER_FULLSCREEN, {
                    fullscreen: w.webkitDisplayingFullscreen
                }, !0),
                O === !1 && E == e.api.events.state.BUFFERING && (Z(e.api.events.JWPLAYER_MEDIA_BUFFER_FULL),
                O = !0),
                A || (r == 100 && (A = !0),
                n.exists(r) && r > m.buffer && (m.buffer = Math.round(r),
                Z(e.api.events.JWPLAYER_MEDIA_BUFFER, {
                    bufferPercent: Math.round(r)
                })))
            }
            function q(t) {
                if (!k)
                    return;
                if (n.exists(t) && n.exists(t.target)) {
                    L > 0 && !isNaN(t.target.duration) && (isNaN(m.duration) || m.duration < 1) && (t.target.duration == Infinity ? m.duration = 0 : m.duration = Math.round(t.target.duration * 10) / 10),
                    !S && w.readyState > 0 && B(e.api.events.state.PLAYING);
                    if (E == e.api.events.state.PLAYING) {
                        if (w.readyState > 0 && (N > -1 || !S)) {
                            S = !0;
                            try {
                                w.currentTime != N && N > -1 && (w.currentTime = N,
                                N = -1)
                            } catch (r) {}
                            w.volume = m.volume / 100,
                            w.muted = m.mute
                        }
                        m.position = m.duration > 0 ? Math.round(t.target.currentTime * 10) / 10 : 0,
                        Z(e.api.events.JWPLAYER_MEDIA_TIME, {
                            position: m.position,
                            duration: m.duration
                        });
                        if (m.position >= m.duration && (m.position > 0 || m.duration > 0)) {
                            J();
                            return
                        }
                    }
                }
                I(t)
            }
            function R(e) {}
            function U(e) {
                if (!k)
                    return;
                i && s && (w.style.width = i,
                w.style.height = s,
                i = _previousHieght = 0),
                t[e.type] && (e.type == "ended" ? J() : B(t[e.type]))
            }
            function z(t) {
                if (!k)
                    return;
                var n = Math.round(w.duration * 10) / 10
                  , r = {
                    height: w.videoHeight,
                    width: w.videoWidth,
                    duration: n
                };
                L || (m.duration < n || isNaN(m.duration)) && w.duration != Infinity && (m.duration = n),
                Z(e.api.events.JWPLAYER_MEDIA_META, {
                    metadata: r
                })
            }
            function W(t) {
                if (!k)
                    return;
                if (E == e.api.events.state.IDLE)
                    return;
                var r = "There was an error: ";
                if (t.target.error && t.target.tagName.toLowerCase() == "video" || t.target.parentNode.error && t.target.parentNode.tagName.toLowerCase() == "video") {
                    var i = n.exists(t.target.error) ? t.target.error : t.target.parentNode.error;
                    switch (i.code) {
                    case i.MEDIA_ERR_ABORTED:
                        n.log("User aborted the video playback.");
                        return;
                    case i.MEDIA_ERR_NETWORK:
                        r = "A network error caused the video download to fail part-way: ";
                        break;
                    case i.MEDIA_ERR_DECODE:
                        r = "The video playback was aborted due to a corruption problem or because the video used features your browser did not support: ";
                        break;
                    case i.MEDIA_ERR_SRC_NOT_SUPPORTED:
                        r = "The video could not be loaded, either because the server or network failed or because the format is not supported: ";
                        break;
                    default:
                        r = "An unknown error occurred: "
                    }
                } else {
                    if (t.target.tagName.toLowerCase() != "source") {
                        n.log("An unknown error occurred.  Continuing...");
                        return
                    }
                    M--;
                    if (M > 0)
                        return;
                    if (n.userAgentMatch(/firefox/i)) {
                        n.log("The video could not be loaded, either because the server or network failed or because the format is not supported."),
                        _(!1);
                        return
                    }
                    r = "The video could not be loaded, either because the server or network failed or because the format is not supported: "
                }
                _(!1),
                r += X(),
                _error = !0,
                Z(e.api.events.JWPLAYER_ERROR, {
                    message: r
                });
                return
            }
            function X() {
                var t = "";
                for (var n in x.levels) {
                    var r = x.levels[n]
                      , i = y.ownerDocument.createElement("source");
                    t += e.utils.getAbsolutePath(r.file),
                    n < x.levels.length - 1 && (t += ", ")
                }
                return t
            }
            function V() {
                n.exists(T) || (T = setInterval(function() {
                    I()
                }, 100))
            }
            function $() {
                clearInterval(T),
                T = null
            }
            function J() {
                E == e.api.events.state.PLAYING && (_(!1),
                Z(e.api.events.JWPLAYER_MEDIA_BEFORECOMPLETE),
                Z(e.api.events.JWPLAYER_MEDIA_COMPLETE))
            }
            function K(t) {
                n.exists(w.webkitDisplayingFullscreen) && m.fullscreen && !w.webkitDisplayingFullscreen && Z(e.api.events.JWPLAYER_FULLSCREEN, {
                    fullscreen: !1
                }, !0)
            }
            function Q(e) {
                if (e.length > 0 && n.userAgentMatch(/Safari/i) && !n.userAgentMatch(/Chrome/i)) {
                    var t = -1;
                    for (var r = 0; r < e.length; r++)
                        switch (n.extension(e[r].file)) {
                        case "mp4":
                            t < 0 && (t = r);
                            break;
                        case "webm":
                            e.splice(r, 1)
                        }
                    if (t > 0) {
                        var i = e.splice(t, 1)[0];
                        e.unshift(i)
                    }
                }
            }
            function G() {
                setTimeout(function() {
                    w.setAttribute("controls", "controls")
                }, 100)
            }
            function Y() {
                setTimeout(function() {
                    w.removeAttribute("controls")
                }, 250)
            }
            function Z(e, t, n) {
                if (k || n)
                    t ? v.sendEvent(e, t) : v.sendEvent(e)
            }
            var h = {
                abort: j,
                canplay: U,
                canplaythrough: U,
                durationchange: z,
                emptied: j,
                ended: U,
                error: W,
                loadeddata: z,
                loadedmetadata: z,
                loadstart: U,
                pause: U,
                play: j,
                playing: U,
                progress: I,
                ratechange: j,
                seeked: U,
                seeking: U,
                stalled: U,
                suspend: U,
                timeupdate: q,
                volumechange: F,
                waiting: U,
                canshowcurrentframe: j,
                dataunavailable: j,
                empty: j,
                load: R,
                loadedfirstframe: j,
                webkitfullscreenchange: K
            }
              , p = {}
              , v = new e.html5.eventdispatcher;
            n.extend(this, v);
            var m = u, y = l, w, E, S, x, T, N, C = !1, k = !1, L = !1, A, O, M;
            P(),
            this.load = function(t, o) {
                typeof o == "undefined" && (o = !0);
                if (!k)
                    return;
                x = t,
                L = x.duration > 0,
                m.duration = x.duration,
                n.empty(w),
                w.style.display = "block",
                w.style.opacity = 1,
                i && s && (w.style.width = i,
                w.style.height = s,
                i = _previousHieght = 0),
                M = 0,
                Q(t.levels);
                if (t.levels && t.levels.length > 0)
                    if (t.levels.length == 1 || n.isIOS())
                        w.src = t.levels[0].file;
                    else {
                        w.src && w.removeAttribute("src");
                        for (var u = 0; u < t.levels.length; u++) {
                            var l = w.ownerDocument.createElement("source");
                            l.src = t.levels[u].file,
                            w.appendChild(l),
                            M++
                        }
                    }
                else
                    w.src = t.file;
                w.volume = m.volume / 100,
                w.muted = m.mute,
                r && G(),
                A = O = S = !1,
                m.buffer = 0,
                n.exists(t.start) || (t.start = 0),
                N = t.start > 0 ? t.start : -1,
                Z(e.api.events.JWPLAYER_MEDIA_LOADED),
                (!r && t.levels.length == 1 || !C) && w.load(),
                C = !1,
                o && (B(e.api.events.state.BUFFERING),
                Z(e.api.events.JWPLAYER_MEDIA_BUFFER, {
                    bufferPercent: 0
                }),
                V()),
                w.videoWidth > 0 && w.videoHeight > 0 && z()
            }
            ,
            this.play = function() {
                if (!k)
                    return;
                V(),
                O ? B(e.api.events.state.PLAYING) : (w.load(),
                B(e.api.events.state.BUFFERING)),
                w.play()
            }
            ,
            this.pause = function() {
                if (!k)
                    return;
                w.pause(),
                B(e.api.events.state.PAUSED)
            }
            ,
            this.seek = function(e) {
                if (!k)
                    return;
                !S && w.readyState > 0 ? !(m.duration <= 0 || isNaN(m.duration)) && !(m.position <= 0 || isNaN(m.position)) && (w.currentTime = e,
                w.play()) : N = e
            }
            ;
            var _ = this.stop = function(t) {
                if (!k)
                    return;
                n.exists(t) || (t = !0),
                $();
                if (t) {
                    O = !1;
                    var r = navigator.userAgent;
                    if (w.webkitSupportsFullscreen)
                        try {
                            w.webkitExitFullscreen()
                        } catch (o) {}
                    w.style.opacity = 0,
                    Y(),
                    n.isIE() ? w.src = "" : w.removeAttribute("src"),
                    n.empty(w),
                    w.load(),
                    C = !0
                }
                if (n.isIPod())
                    i = w.style.width,
                    s = w.style.height,
                    w.style.width = 0,
                    w.style.height = 0;
                else if (n.isIPad()) {
                    w.style.display = "none";
                    try {
                        w.webkitExitFullscreen()
                    } catch (u) {}
                }
                B(e.api.events.state.IDLE)
            }
            ;
            this.fullscreen = function(e) {
                e === !0 ? this.resize("100%", "100%") : this.resize(m.config.width, m.config.height)
            }
            ,
            this.resize = function(e, t) {}
            ,
            this.volume = function(t) {
                r || (w.volume = t / 100,
                Z(e.api.events.JWPLAYER_MEDIA_VOLUME, {
                    volume: t / 100
                }))
            }
            ,
            this.mute = function(t) {
                r || (w.muted = t,
                Z(e.api.events.JWPLAYER_MEDIA_MUTE, {
                    mute: t
                }))
            }
            ,
            this.getDisplayElement = function() {
                return w
            }
            ,
            this.hasChrome = function() {
                return r && E == e.api.events.state.PLAYING
            }
            ,
            this.detachMedia = function() {
                return k = !1,
                this.getDisplayElement()
            }
            ,
            this.attachMedia = function() {
                k = !0
            }
            ,
            this.destroy = function() {
                if (w && w.parentNode) {
                    $();
                    for (var e in h)
                        w.removeEventListener(e, D(e, h[e]), !0);
                    n.empty(w),
                    y = w.parentNode,
                    w.parentNode.removeChild(w),
                    delete o[m.id],
                    w = null
                }
            }
        }
    }(jwplayer),
    function(e) {
        var t = {
            ended: e.api.events.state.IDLE,
            playing: e.api.events.state.PLAYING,
            pause: e.api.events.state.PAUSED,
            buffering: e.api.events.state.BUFFERING
        }
          , n = e.utils.css;
        e.html5.mediayoutube = function(t, r) {
            function c(t) {
                if (u != t) {
                    var n = u;
                    s.state = t,
                    u = t,
                    i.sendEvent(e.api.events.JWPLAYER_PLAYER_STATE, {
                        oldstate: n,
                        newstate: t
                    })
                }
            }
            function h(e) {
                var t = e.levels[0].file;
                t = ["http://www.youtube.com/v/", p(t), "&amp;hl=en_US&amp;fs=1&autoplay=1"].join(""),
                f = document.createElement("object"),
                f.id = o.id,
                f.style.position = "absolute";
                var n = {
                    movie: t,
                    allowfullscreen: "true",
                    allowscriptaccess: "always"
                };
                for (var r in n) {
                    var i = document.createElement("param");
                    i.name = r,
                    i.value = n[r],
                    f.appendChild(i)
                }
                l = document.createElement("embed"),
                f.appendChild(l);
                var s = {
                    src: t,
                    type: "application/x-shockwave-flash",
                    allowfullscreen: "true",
                    allowscriptaccess: "always",
                    width: f.width,
                    height: f.height
                };
                for (var u in s)
                    l.setAttribute(u, s[u]);
                f.appendChild(l),
                f.style.zIndex = 2147483e3,
                o != f && o.parentNode && o.parentNode.replaceChild(f, o),
                o = f
            }
            function p(e) {
                var t = e.split(/\?|\#\!/)
                  , n = "";
                for (var r = 0; r < t.length; r++)
                    t[r].substr(0, 2) == "v=" && (n = t[r].substr(2));
                return n == "" && (e.indexOf("/v/") >= 0 ? n = e.substr(e.indexOf("/v/") + 3) : e.indexOf("youtu.be") >= 0 ? n = e.substr(e.indexOf("youtu.be/") + 9) : n = e),
                n.indexOf("?") > -1 && (n = n.substr(0, n.indexOf("?"))),
                n.indexOf("&") > -1 && (n = n.substr(0, n.indexOf("&"))),
                n
            }
            var i = new e.html5.eventdispatcher;
            e.utils.extend(this, i);
            var s = t, o = document.getElementById(r.id), u = e.api.events.state.IDLE, f, l;
            return this.getDisplayElement = this.detachMedia = function() {
                return o
            }
            ,
            this.attachMedia = function() {}
            ,
            this.play = function() {
                u == e.api.events.state.IDLE ? (i.sendEvent(e.api.events.JWPLAYER_MEDIA_BUFFER, {
                    bufferPercent: 100
                }),
                i.sendEvent(e.api.events.JWPLAYER_MEDIA_BUFFER_FULL),
                c(e.api.events.state.PLAYING)) : u == e.api.events.state.PAUSED && c(e.api.events.state.PLAYING)
            }
            ,
            this.pause = function() {
                c(e.api.events.state.PAUSED)
            }
            ,
            this.seek = function(e) {}
            ,
            this.stop = function(t) {
                _utils.exists(t) || (t = !0),
                s.position = 0,
                c(e.api.events.state.IDLE),
                t && n(o, {
                    display: "none"
                })
            }
            ,
            this.volume = function(t) {
                s.setVolume(t),
                i.sendEvent(e.api.events.JWPLAYER_MEDIA_VOLUME, {
                    volume: Math.round(t)
                })
            }
            ,
            this.mute = function(t) {
                o.muted = t,
                i.sendEvent(e.api.events.JWPLAYER_MEDIA_MUTE, {
                    mute: t
                })
            }
            ,
            this.resize = function(e, t) {
                e * t > 0 && f && (f.width = l.width = e,
                f.height = l.height = t)
            }
            ,
            this.fullscreen = function(e) {
                e === !0 ? this.resize("100%", "100%") : this.resize(s.config.width, s.config.height)
            }
            ,
            this.load = function(t) {
                h(t),
                n(f, {
                    display: "block"
                }),
                c(e.api.events.state.BUFFERING),
                i.sendEvent(e.api.events.JWPLAYER_MEDIA_BUFFER, {
                    bufferPercent: 0
                }),
                i.sendEvent(e.api.events.JWPLAYER_MEDIA_LOADED),
                this.play()
            }
            ,
            this.hasChrome = function() {
                return u != e.api.events.state.IDLE
            }
            ,
            this.embed = l,
            this
        }
    }(jwplayer),
    function(jwplayer) {
        var _configurableStateVariables = ["width", "height", "start", "duration", "volume", "mute", "fullscreen", "item", "plugins", "stretching"]
          , _utils = jwplayer.utils;
        jwplayer.html5.model = function(api, container, options) {
            function _loadExternal(e) {
                var t = new jwplayer.html5.playlistloader;
                t.addEventListener(jwplayer.api.events.JWPLAYER_PLAYLIST_LOADED, function(e) {
                    _model.playlist = new jwplayer.html5.playlist(e),
                    _loadComplete(!0)
                }),
                t.addEventListener(jwplayer.api.events.JWPLAYER_ERROR, function(e) {
                    _model.playlist = new jwplayer.html5.playlist({
                        playlist: []
                    }),
                    _loadComplete(!1)
                }),
                t.load(e)
            }
            function _loadComplete() {
                _model.config.shuffle ? _model.item = _getShuffleItem() : (_model.config.item >= _model.playlist.length ? _model.config.item = _model.playlist.length - 1 : _model.config.item < 0 && (_model.config.item = 0),
                _model.item = _model.config.item),
                _model.position = 0,
                _model.duration = _model.playlist.length > 0 ? _model.playlist[_model.item].duration : 0,
                _eventDispatcher.sendEvent(jwplayer.api.events.JWPLAYER_PLAYLIST_LOADED, {
                    playlist: _model.playlist
                }),
                _eventDispatcher.sendEvent(jwplayer.api.events.JWPLAYER_PLAYLIST_ITEM, {
                    index: _model.item
                })
            }
            function _getShuffleItem() {
                var e = null;
                if (_model.playlist.length > 1)
                    while (!jwplayer.utils.exists(e))
                        e = Math.floor(Math.random() * _model.playlist.length),
                        e == _model.item && (e = null);
                else
                    e = 0;
                return e
            }
            function forward(e) {
                switch (e.type) {
                case jwplayer.api.events.JWPLAYER_MEDIA_LOADED:
                    _container = _media.getDisplayElement();
                    break;
                case jwplayer.api.events.JWPLAYER_MEDIA_MUTE:
                    this.mute = e.mute;
                    break;
                case jwplayer.api.events.JWPLAYER_MEDIA_VOLUME:
                    this.volume = e.volume
                }
                _eventDispatcher.sendEvent(e.type, e)
            }
            var _api = api, _container = container, _cookies = _utils.getCookies(), _model = {
                id: _container.id,
                playlist: [],
                state: jwplayer.api.events.state.IDLE,
                position: 0,
                buffer: 0,
                container: _container,
                config: {
                    width: 480,
                    height: 320,
                    item: -1,
                    skin: undefined,
                    file: undefined,
                    image: undefined,
                    start: 0,
                    duration: 0,
                    bufferlength: 5,
                    volume: _cookies.volume ? _cookies.volume : 90,
                    mute: _cookies.mute && _cookies.mute.toString().toLowerCase() == "true" ? !0 : !1,
                    fullscreen: !1,
                    repeat: "",
                    stretching: jwplayer.utils.stretching.UNIFORM,
                    autostart: !1,
                    debug: undefined,
                    screencolor: undefined
                }
            }, _media, _eventDispatcher = new jwplayer.html5.eventdispatcher, _components = ["display", "logo", "controlbar", "playlist", "dock"];
            jwplayer.utils.extend(_model, _eventDispatcher);
            for (var option in options) {
                if (typeof options[option] == "string") {
                    var type = /color$/.test(option) ? "color" : null;
                    options[option] = jwplayer.utils.typechecker(options[option], type)
                }
                var config = _model.config
                  , path = option.split(".");
                for (var edge in path)
                    edge == path.length - 1 ? config[path[edge]] = options[option] : (jwplayer.utils.exists(config[path[edge]]) || (config[path[edge]] = {}),
                    config = config[path[edge]])
            }
            for (var index in _configurableStateVariables) {
                var configurableStateVariable = _configurableStateVariables[index];
                _model[configurableStateVariable] = _model.config[configurableStateVariable]
            }
            var pluginorder = _components.concat([]);
            if (jwplayer.utils.exists(_model.plugins) && typeof _model.plugins == "string") {
                var userplugins = _model.plugins.split(",");
                for (var userplugin in userplugins)
                    typeof userplugins[userplugin] == "string" && pluginorder.push(userplugins[userplugin].replace(/^\s+|\s+$/g, ""))
            }
            jwplayer.utils.isMobile() ? (pluginorder = ["display", "logo", "dock", "playlist"],
            jwplayer.utils.exists(_model.config.repeat) || (_model.config.repeat = "list")) : _model.config.chromeless && (pluginorder = ["logo", "dock", "playlist"],
            jwplayer.utils.exists(_model.config.repeat) || (_model.config.repeat = "list")),
            _model.plugins = {
                order: pluginorder,
                config: {},
                object: {}
            };
            if (typeof _model.config.components != "undefined")
                for (var component in _model.config.components)
                    _model.plugins.config[component] = _model.config.components[component];
            var playlistVisible = !1;
            for (var pluginIndex in _model.plugins.order) {
                var pluginName = _model.plugins.order[pluginIndex]
                  , pluginConfig = jwplayer.utils.exists(_model.plugins.config[pluginName]) ? _model.plugins.config[pluginName] : {};
                _model.plugins.config[pluginName] = jwplayer.utils.exists(_model.plugins.config[pluginName]) ? jwplayer.utils.extend(_model.plugins.config[pluginName], pluginConfig) : pluginConfig,
                jwplayer.utils.exists(_model.plugins.config[pluginName].position) ? (pluginName == "playlist" && (playlistVisible = !0),
                _model.plugins.config[pluginName].position = _model.plugins.config[pluginName].position.toString().toUpperCase()) : pluginName == "playlist" ? _model.plugins.config[pluginName].position = jwplayer.html5.view.positions.NONE : _model.plugins.config[pluginName].position = jwplayer.html5.view.positions.OVER
            }
            _model.plugins.config.controlbar && playlistVisible && (_model.plugins.config.controlbar.hideplaylistcontrols = !0);
            if (typeof _model.plugins.config.dock != "undefined") {
                if (typeof _model.plugins.config.dock != "object") {
                    var position = _model.plugins.config.dock.toString().toUpperCase();
                    _model.plugins.config.dock = {
                        position: position
                    }
                }
                typeof _model.plugins.config.dock.position != "undefined" && (_model.plugins.config.dock.align = _model.plugins.config.dock.position,
                _model.plugins.config.dock.position = jwplayer.html5.view.positions.OVER);
                if (typeof _model.plugins.config.dock.idlehide == "undefined")
                    try {
                        _model.plugins.config.dock.idlehide = _model.plugins.config.controlbar.idlehide
                    } catch (e) {}
            }
            _model.loadPlaylist = function(arg) {
                var input;
                if (typeof arg == "string")
                    if (arg.indexOf("[") == 0 || arg.indexOf("{") == "0")
                        try {
                            input = eval(arg)
                        } catch (err) {
                            input = arg
                        }
                    else
                        input = arg;
                else
                    input = arg;
                var config;
                switch (jwplayer.utils.typeOf(input)) {
                case "object":
                    config = input;
                    break;
                case "array":
                    config = {
                        playlist: input
                    };
                    break;
                default:
                    config = {
                        file: input
                    }
                }
                _model.playlist = new jwplayer.html5.playlist(config),
                _model.item = _model.config.item >= 0 ? _model.config.item : 0,
                !_model.playlist[0].provider && _model.playlist[0].file ? _loadExternal(_model.playlist[0].file) : _loadComplete()
            }
            ;
            var _mediaProviders = {};
            return _model.setActiveMediaProvider = function(e) {
                e.provider == "audio" && (e.provider = "sound");
                var t = e.provider
                  , n = _media ? _media.getDisplayElement() : null;
                if (t == "sound" || t == "http" || t == "")
                    t = "video";
                if (!jwplayer.utils.exists(_mediaProviders[t])) {
                    switch (t) {
                    case "video":
                        _media = new jwplayer.html5.mediavideo(_model,n ? n : _container);
                        break;
                    case "youtube":
                        _media = new jwplayer.html5.mediayoutube(_model,n ? n : _container)
                    }
                    if (!jwplayer.utils.exists(_media))
                        return !1;
                    _media.addGlobalListener(forward),
                    _mediaProviders[t] = _media
                } else
                    _media != _mediaProviders[t] && (_media && _media.stop(),
                    _media = _mediaProviders[t]);
                return !0
            }
            ,
            _model.getMedia = function() {
                return _media
            }
            ,
            _model.seek = function(e) {
                return _eventDispatcher.sendEvent(jwplayer.api.events.JWPLAYER_MEDIA_SEEK, {
                    position: _model.position,
                    offset: e
                }),
                _media.seek(e)
            }
            ,
            _model.setVolume = function(e) {
                _utils.saveCookie("volume", e),
                _model.volume = e
            }
            ,
            _model.setMute = function(e) {
                _utils.saveCookie("mute", e),
                _model.mute = e
            }
            ,
            _model.setupPlugins = function() {
                if (!jwplayer.utils.exists(_model.plugins) || !jwplayer.utils.exists(_model.plugins.order) || _model.plugins.order.length == 0)
                    return jwplayer.utils.log("No plugins to set up"),
                    _model;
                for (var e = 0; e < _model.plugins.order.length; e++)
                    try {
                        var t = _model.plugins.order[e];
                        jwplayer.utils.exists(jwplayer.html5[t]) ? t == "playlist" ? _model.plugins.object[t] = new jwplayer.html5.playlistcomponent(_api,_model.plugins.config[t]) : _model.plugins.object[t] = new jwplayer.html5[t](_api,_model.plugins.config[t]) : _model.plugins.order.splice(plugin, plugin + 1),
                        typeof _model.plugins.object[t].addGlobalListener == "function" && _model.plugins.object[t].addGlobalListener(forward)
                    } catch (n) {
                        jwplayer.utils.log("Could not setup " + t)
                    }
            }
            ,
            _model
        }
    }(jwplayer),
    function(e) {
        e.html5.playlist = function(t) {
            var n = [];
            if (t.playlist && t.playlist instanceof Array && t.playlist.length > 0)
                for (var r in t.playlist)
                    isNaN(parseInt(r)) || n.push(new e.html5.playlistitem(t.playlist[r]));
            else
                n.push(new e.html5.playlistitem(t));
            return n
        }
    }(jwplayer),
    function(e) {
        var t = {
            size: 180,
            position: e.html5.view.positions.NONE,
            itemheight: 60,
            thumbs: !0,
            fontcolor: "#000000",
            overcolor: "",
            activecolor: "",
            backgroundcolor: "#f8f8f8",
            font: "_sans",
            fontsize: "",
            fontstyle: "",
            fontweight: ""
        }
          , n = {
            _sans: "Arial, Helvetica, sans-serif",
            _serif: "Times, Times New Roman, serif",
            _typewriter: "Courier New, Courier, monospace"
        };
        _utils = e.utils,
        _css = _utils.css,
        _hide = function(e) {
            _css(e, {
                display: "none"
            })
        }
        ,
        _show = function(e) {
            _css(e, {
                display: "block"
            })
        }
        ,
        e.html5.playlistcomponent = function(r, i) {
            function g() {
                u = document.createElement("div"),
                u.id = s.id + "_jwplayer_playlistcomponent",
                u.style.overflow = "hidden";
                switch (o.position) {
                case e.html5.view.positions.RIGHT:
                case e.html5.view.positions.LEFT:
                    u.style.width = o.size + "px";
                    break;
                case e.html5.view.positions.TOP:
                case e.html5.view.positions.BOTTOM:
                    u.style.height = o.size + "px"
                }
                O(),
                m.item && (o.itemheight = m.item.height),
                u.style.backgroundColor = "#C6C6C6",
                s.jwAddEventListener(e.api.events.JWPLAYER_PLAYLIST_LOADED, x),
                s.jwAddEventListener(e.api.events.JWPLAYER_PLAYLIST_ITEM, L),
                s.jwAddEventListener(e.api.events.JWPLAYER_PLAYER_STATE, A)
            }
            function y() {
                var e = document.createElement("ul");
                return _css(e, {
                    width: u.style.width,
                    minWidth: u.style.width,
                    height: u.style.height,
                    backgroundColor: o.backgroundcolor,
                    backgroundImage: m.background ? "url(" + m.background.src + ")" : "",
                    color: o.fontcolor,
                    listStyle: "none",
                    margin: 0,
                    padding: 0,
                    fontFamily: n[o.font] ? n[o.font] : n._sans,
                    fontSize: (o.fontsize ? o.fontsize : 11) + "px",
                    fontStyle: o.fontstyle,
                    fontWeight: o.fontweight,
                    overflowY: "auto"
                }),
                e
            }
            function w(e) {
                return function() {
                    var t = d.getElementsByClassName("item")[e]
                      , n = o.fontcolor
                      , r = m.item ? "url(" + m.item.src + ")" : "";
                    e == s.jwGetPlaylistIndex() && (o.activecolor !== "" && (n = o.activecolor),
                    m.itemActive && (r = "url(" + m.itemActive.src + ")")),
                    _css(t, {
                        color: o.overcolor !== "" ? o.overcolor : n,
                        backgroundImage: m.itemOver ? "url(" + m.itemOver.src + ")" : r
                    })
                }
            }
            function E(e) {
                return function() {
                    var t = d.getElementsByClassName("item")[e]
                      , n = o.fontcolor
                      , r = m.item ? "url(" + m.item.src + ")" : "";
                    e == s.jwGetPlaylistIndex() && (o.activecolor !== "" && (n = o.activecolor),
                    m.itemActive && (r = "url(" + m.itemActive.src + ")")),
                    _css(t, {
                        color: n,
                        backgroundImage: r
                    })
                }
            }
            function S(t) {
                var n = h[t]
                  , r = document.createElement("li");
                r.className = "item",
                _css(r, {
                    height: o.itemheight,
                    display: "block",
                    cursor: "pointer",
                    backgroundImage: m.item ? "url(" + m.item.src + ")" : "",
                    backgroundSize: "100% " + o.itemheight + "px"
                }),
                r.onmouseover = w(t),
                r.onmouseout = E(t);
                var i = document.createElement("div")
                  , s = new Image
                  , u = 0
                  , c = 0
                  , p = 0;
                k() && (n.image || n["playlist.image"] || m.itemImage) && (s.className = "image",
                m.itemImage ? (u = (o.itemheight - m.itemImage.height) / 2,
                c = m.itemImage.width,
                p = m.itemImage.height) : (c = o.itemheight * 4 / 3,
                p = o.itemheight),
                _css(i, {
                    height: p,
                    width: c,
                    "float": "left",
                    styleFloat: "left",
                    cssFloat: "left",
                    margin: "0 5px 0 0",
                    background: "black",
                    overflow: "hidden",
                    margin: u + "px",
                    position: "relative"
                }),
                _css(s, {
                    position: "relative"
                }),
                i.appendChild(s),
                s.onload = function() {
                    e.utils.stretch(e.utils.stretching.FILL, s, c, p, this.naturalWidth, this.naturalHeight)
                }
                ,
                n["playlist.image"] ? s.src = n["playlist.image"] : n.image ? s.src = n.image : m.itemImage && (s.src = m.itemImage.src),
                r.appendChild(i));
                var d = f - c - u * 2;
                l < o.itemheight * h.length && (d -= 15);
                var v = document.createElement("div");
                _css(v, {
                    position: "relative",
                    height: "100%",
                    overflow: "hidden"
                });
                var g = document.createElement("span");
                n.duration > 0 && (g.className = "duration",
                _css(g, {
                    fontSize: (o.fontsize ? o.fontsize : 11) + "px",
                    fontWeight: o.fontweight ? o.fontweight : "bold",
                    width: "40px",
                    height: o.fontsize ? o.fontsize + 10 : 20,
                    lineHeight: 24,
                    "float": "right",
                    styleFloat: "right",
                    cssFloat: "right"
                }),
                g.innerHTML = _utils.timeFormat(n.duration),
                v.appendChild(g));
                var y = document.createElement("span");
                y.className = "title",
                _css(y, {
                    padding: "5px 5px 0 " + (u ? 0 : "5px"),
                    height: o.fontsize ? o.fontsize + 10 : 20,
                    lineHeight: o.fontsize ? o.fontsize + 10 : 20,
                    overflow: "hidden",
                    "float": "left",
                    styleFloat: "left",
                    cssFloat: "left",
                    width: (n.duration > 0 ? d - 50 : d) - 10 + "px",
                    fontSize: (o.fontsize ? o.fontsize : 13) + "px",
                    fontWeight: o.fontweight ? o.fontweight : "bold"
                }),
                y.innerHTML = n ? n.title : "",
                v.appendChild(y);
                if (n.description) {
                    var b = document.createElement("span");
                    b.className = "description",
                    _css(b, {
                        display: "block",
                        "float": "left",
                        styleFloat: "left",
                        cssFloat: "left",
                        margin: 0,
                        paddingLeft: y.style.paddingLeft,
                        paddingRight: y.style.paddingRight,
                        lineHeight: (o.fontsize ? o.fontsize + 4 : 16) + "px",
                        overflow: "hidden",
                        position: "relative"
                    }),
                    b.innerHTML = n.description,
                    v.appendChild(b)
                }
                return r.appendChild(v),
                r
            }
            function x(e) {
                u.innerHTML = "",
                h = T();
                if (!h)
                    return;
                items = [],
                d = y();
                for (var t = 0; t < h.length; t++) {
                    var n = S(t);
                    n.onclick = N(t),
                    d.appendChild(n),
                    items.push(n)
                }
                v = s.jwGetPlaylistIndex(),
                E(v)(),
                u.appendChild(d);
                if (_utils.isIOS() && window.iScroll) {
                    d.style.height = o.itemheight * h.length + "px";
                    var r = new iScroll(u.id)
                }
            }
            function T() {
                var e = s.jwGetPlaylist()
                  , t = [];
                for (var n = 0; n < e.length; n++)
                    e[n]["ova.hidden"] || t.push(e[n]);
                return t
            }
            function N(e) {
                return function() {
                    s.jwPlaylistItem(e),
                    s.jwPlay(!0)
                }
            }
            function C() {
                d.scrollTop = s.jwGetPlaylistIndex() * o.itemheight
            }
            function k() {
                return o.thumbs.toString().toLowerCase() == "true"
            }
            function L(e) {
                v >= 0 && (E(v)(),
                v = e.index),
                E(e.index)(),
                C()
            }
            function A() {
                if (o.position == e.html5.view.positions.OVER)
                    switch (s.jwGetState()) {
                    case e.api.events.state.IDLE:
                        _show(u);
                        break;
                    default:
                        _hide(u)
                    }
            }
            function O() {
                for (var e in m)
                    m[e] = M(e)
            }
            function M(e) {
                return s.skin.getSkinElement("playlist", e)
            }
            var s = r
              , o = e.utils.extend({}, t, s.skin.getComponentSettings("playlist"), i);
            if (o.position == e.html5.view.positions.NONE || typeof e.html5.view.positions[o.position] == "undefined")
                return;
            var u, f, l, h, p, d, v = -1, m = {
                background: undefined,
                item: undefined,
                itemOver: undefined,
                itemImage: undefined,
                itemActive: undefined
            };
            return this.getDisplayElement = function() {
                return u
            }
            ,
            this.resize = function(e, t) {
                f = e,
                l = t;
                if (s.jwGetFullscreen())
                    _hide(u);
                else {
                    var n = {
                        display: "block",
                        width: f,
                        height: l
                    };
                    _css(u, n)
                }
            }
            ,
            this.show = function() {
                _show(u)
            }
            ,
            this.hide = function() {
                _hide(u)
            }
            ,
            g(),
            this
        }
    }(jwplayer),
    function(e) {
        function t(t) {
            if (e.utils.isYouTube(t.file))
                return "youtube";
            var n = e.utils.extension(t.file), r;
            if (n && e.utils.extensionmap[n]) {
                if (n == "m3u8")
                    return "video";
                r = e.utils.extensionmap[n].html5
            } else
                t.type && (r = t.type);
            if (r) {
                var i = r.split("/")[0];
                if (i == "audio")
                    return "sound";
                if (i == "video")
                    return i
            }
            return ""
        }
        e.html5.playlistitem = function(n) {
            var r = {
                author: "",
                date: "",
                description: "",
                image: "",
                link: "",
                mediaid: "",
                tags: "",
                title: "",
                provider: "",
                file: "",
                streamer: "",
                duration: -1,
                start: 0,
                currentLevel: -1,
                levels: []
            }
              , i = e.utils.extend({}, r, n);
            return i.type && (i.provider = i.type,
            delete i.type),
            i.levels.length === 0 && (i.levels[0] = new e.html5.playlistitemlevel(i)),
            i.provider ? i.provider = i.provider.toLowerCase() : i.provider = t(i.levels[0]),
            i
        }
    }(jwplayer),
    function(e) {
        e.html5.playlistitemlevel = function(t) {
            var n = {
                file: "",
                streamer: "",
                bitrate: 0,
                width: 0
            };
            for (var r in n)
                e.utils.exists(t[r]) && (n[r] = t[r]);
            return n
        }
    }(jwplayer),
    function(e) {
        e.html5.playlistloader = function() {
            function n(n) {
                var i = [];
                try {
                    var i = e.utils.parsers.rssparser.parse(n.responseXML.firstChild);
                    t.sendEvent(e.api.events.JWPLAYER_PLAYLIST_LOADED, {
                        playlist: new e.html5.playlist({
                            playlist: i
                        })
                    })
                } catch (s) {
                    r("Could not parse the playlist")
                }
            }
            function r(n) {
                t.sendEvent(e.api.events.JWPLAYER_ERROR, {
                    message: n ? n : "Could not load playlist an unknown reason."
                })
            }
            var t = new e.html5.eventdispatcher;
            e.utils.extend(this, t),
            this.load = function(t) {
                e.utils.ajax(t, n, r)
            }
        }
    }(jwplayer),
    function(e) {
        e.html5.skin = function() {
            var t = {}
              , n = !1;
            this.load = function(r, i) {
                new e.html5.skinloader(r,function(e) {
                    n = !0,
                    t = e,
                    i()
                }
                ,function() {
                    new e.html5.skinloader("",function(e) {
                        n = !0,
                        t = e,
                        i()
                    }
                    )
                }
                )
            }
            ,
            this.getSkinElement = function(r, i) {
                if (n)
                    try {
                        return t[r].elements[i]
                    } catch (s) {
                        e.utils.log("No such skin component / element: ", [r, i])
                    }
                return null
            }
            ,
            this.getComponentSettings = function(e) {
                return n && t && t[e] ? t[e].settings : null
            }
            ,
            this.getComponentLayout = function(e) {
                return n ? t[e].layout : null
            }
        }
    }(jwplayer),
    function(e) {
        e.html5.skinloader = function(t, n, r) {
            function h() {
                typeof l != "string" || l === "" ? p(e.html5.defaultSkin().xml) : e.utils.ajax(e.utils.getAbsolutePath(l), function(t) {
                    try {
                        if (e.utils.exists(t.responseXML)) {
                            p(t.responseXML);
                            return
                        }
                    } catch (n) {
                        m()
                    }
                    p(e.html5.defaultSkin().xml)
                }, function(t) {
                    p(e.html5.defaultSkin().xml)
                })
            }
            function p(t) {
                var n = t.getElementsByTagName("component");
                if (n.length === 0)
                    return;
                for (var r = 0; r < n.length; r++) {
                    var s = n[r].getAttribute("name")
                      , o = {
                        settings: {},
                        elements: {},
                        layout: {}
                    };
                    i[s] = o;
                    var f = n[r].getElementsByTagName("elements")[0].getElementsByTagName("element");
                    for (var l = 0; l < f.length; l++)
                        v(f[l], s);
                    var c = n[r].getElementsByTagName("settings")[0];
                    if (c && c.childNodes.length > 0) {
                        var h = c.getElementsByTagName("setting");
                        for (var p = 0; p < h.length; p++) {
                            var m = h[p].getAttribute("name")
                              , g = h[p].getAttribute("value")
                              , y = /color$/.test(m) ? "color" : null;
                            i[s].settings[m] = e.utils.typechecker(g, y)
                        }
                    }
                    var w = n[r].getElementsByTagName("layout")[0];
                    if (w && w.childNodes.length > 0) {
                        var E = w.getElementsByTagName("group");
                        for (var S = 0; S < E.length; S++) {
                            var x = E[S];
                            i[s].layout[x.getAttribute("position")] = {
                                elements: []
                            };
                            for (var T = 0; T < x.attributes.length; T++) {
                                var N = x.attributes[T];
                                i[s].layout[x.getAttribute("position")][N.name] = N.value
                            }
                            var C = x.getElementsByTagName("*");
                            for (var k = 0; k < C.length; k++) {
                                var L = C[k];
                                i[s].layout[x.getAttribute("position")].elements.push({
                                    type: L.tagName
                                });
                                for (var A = 0; A < L.attributes.length; A++) {
                                    var O = L.attributes[A];
                                    i[s].layout[x.getAttribute("position")].elements[k][O.name] = O.value
                                }
                                e.utils.exists(i[s].layout[x.getAttribute("position")].elements[k].name) || (i[s].layout[x.getAttribute("position")].elements[k].name = L.tagName)
                            }
                        }
                    }
                    u = !1,
                    d()
                }
            }
            function d() {
                clearInterval(f),
                c || (f = setInterval(function() {
                    g()
                }, 100))
            }
            function v(t, n) {
                var r = new Image, s = t.getAttribute("name"), u = t.getAttribute("src"), f;
                if (u.indexOf("data:image/png;base64,") === 0)
                    f = u;
                else {
                    var h = e.utils.getAbsolutePath(l)
                      , p = h.substr(0, h.lastIndexOf("/"));
                    f = [p, n, u].join("/")
                }
                i[n].elements[s] = {
                    height: 0,
                    width: 0,
                    src: "",
                    ready: !1,
                    image: r
                },
                r.onload = function(e) {
                    y(r, s, n)
                }
                ,
                r.onerror = function(e) {
                    c = !0,
                    d(),
                    o()
                }
                ,
                r.src = f
            }
            function m() {
                for (var e in i) {
                    var t = i[e];
                    for (var n in t.elements) {
                        var r = t.elements[n]
                          , s = r.image;
                        s.onload = null,
                        s.onerror = null,
                        delete r.image,
                        delete t.elements[n]
                    }
                    delete i[e]
                }
            }
            function g() {
                for (var e in i)
                    if (e != "properties")
                        for (var t in i[e].elements)
                            if (!i[e].elements[t].ready)
                                return;
                u === !1 && (clearInterval(f),
                s(i))
            }
            function y(t, n, r) {
                i[r] && i[r].elements[n] ? (i[r].elements[n].height = t.height,
                i[r].elements[n].width = t.width,
                i[r].elements[n].src = t.src,
                i[r].elements[n].ready = !0,
                d()) : e.utils.log("Loaded an image for a missing element: " + r + "." + n)
            }
            var i = {}, s = n, o = r, u = !0, f, l = t, c = !1;
            h()
        }
    }(jwplayer),
    function(e) {
        e.html5.api = function(t, n) {
            function f() {
                s.state == e.api.events.state.PLAYING || s.state == e.api.events.state.BUFFERING ? u.pause() : u.play()
            }
            function l(e) {
                return function() {
                    return s[e]
                }
            }
            function c(e, t, n) {
                return function() {
                    var r = s.plugins.object[e];
                    r && r[t] && typeof r[t] == "function" && r[t].apply(r, n)
                }
            }
            function p(e) {
                return function() {
                    if (h && typeof h[e] == "function")
                        return h[e].apply(this, arguments);
                    _utils.log("Could not call instream method - instream API not initialized")
                }
            }
            function d() {
                s.config.playlistfile ? (s.addEventListener(e.api.events.JWPLAYER_PLAYLIST_LOADED, v),
                s.loadPlaylist(s.config.playlistfile)) : typeof s.config.playlist == "string" ? (s.addEventListener(e.api.events.JWPLAYER_PLAYLIST_LOADED, v),
                s.loadPlaylist(s.config.playlist)) : (s.loadPlaylist(s.config),
                setTimeout(v, 25))
            }
            function v(t) {
                s.removeEventListener(e.api.events.JWPLAYER_PLAYLIST_LOADED, v),
                s.setupPlugins(),
                o.setup();
                var t = {
                    id: r.id,
                    version: r.version
                };
                u.playerReady(t)
            }
            var r = {}
              , i = document.createElement("div");
            t.parentNode.replaceChild(i, t),
            i.id = t.id,
            r.version = e.version,
            r.id = i.id;
            var s = new e.html5.model(r,i,n)
              , o = new e.html5.view(r,i,s)
              , u = new e.html5.controller(r,i,s,o);
            r.skin = new e.html5.skin,
            r.jwPlay = function(e) {
                typeof e == "undefined" ? f() : e.toString().toLowerCase() == "true" ? u.play() : u.pause()
            }
            ,
            r.jwPause = function(e) {
                typeof e == "undefined" ? f() : e.toString().toLowerCase() == "true" ? u.pause() : u.play()
            }
            ,
            r.jwStop = u.stop,
            r.jwSeek = u.seek,
            r.jwPlaylistItem = function(e) {
                if (!h)
                    return u.item(e);
                if (h.playlistClickable())
                    return h.jwInstreamDestroy(),
                    u.item(e)
            }
            ,
            r.jwPlaylistNext = u.next,
            r.jwPlaylistPrev = u.prev,
            r.jwResize = u.resize,
            r.jwLoad = u.load,
            r.jwDetachMedia = u.detachMedia,
            r.jwAttachMedia = u.attachMedia,
            r.jwGetPlaylistIndex = l("item"),
            r.jwGetPosition = l("position"),
            r.jwGetDuration = l("duration"),
            r.jwGetBuffer = l("buffer"),
            r.jwGetWidth = l("width"),
            r.jwGetHeight = l("height"),
            r.jwGetFullscreen = l("fullscreen"),
            r.jwSetFullscreen = u.setFullscreen,
            r.jwGetVolume = l("volume"),
            r.jwSetVolume = u.setVolume,
            r.jwGetMute = l("mute"),
            r.jwSetMute = u.setMute,
            r.jwGetStretching = function() {
                return s.stretching.toUpperCase()
            }
            ,
            r.jwGetState = l("state"),
            r.jwGetVersion = function() {
                return r.version
            }
            ,
            r.jwGetPlaylist = function() {
                return s.playlist
            }
            ,
            r.jwAddEventListener = u.addEventListener,
            r.jwRemoveEventListener = u.removeEventListener,
            r.jwSendEvent = u.sendEvent,
            r.jwDockSetButton = function(e, t, n, r) {
                s.plugins.object.dock && s.plugins.object.dock.setButton && s.plugins.object.dock.setButton(e, t, n, r)
            }
            ,
            r.jwControlbarShow = c("controlbar", "show"),
            r.jwControlbarHide = c("controlbar", "hide"),
            r.jwDockShow = c("dock", "show"),
            r.jwDockHide = c("dock", "hide"),
            r.jwDisplayShow = c("display", "show"),
            r.jwDisplayHide = c("display", "hide");
            var h;
            return r.jwLoadInstream = function(t, n) {
                h || (h = new e.html5.instream(r,s,o,u)),
                setTimeout(function() {
                    h.load(t, n)
                }, 10)
            }
            ,
            r.jwInstreamDestroy = function() {
                h && h.jwInstreamDestroy()
            }
            ,
            r.jwInstreamAddEventListener = p("jwInstreamAddEventListener"),
            r.jwInstreamRemoveEventListener = p("jwInstreamRemoveEventListener"),
            r.jwInstreamGetState = p("jwInstreamGetState"),
            r.jwInstreamGetDuration = p("jwInstreamGetDuration"),
            r.jwInstreamGetPosition = p("jwInstreamGetPosition"),
            r.jwInstreamPlay = p("jwInstreamPlay"),
            r.jwInstreamPause = p("jwInstreamPause"),
            r.jwInstreamSeek = p("jwInstreamSeek"),
            r.jwDestroy = function() {
                u.destroy()
            }
            ,
            r.jwGetLevel = function() {}
            ,
            r.jwGetBandwidth = function() {}
            ,
            r.jwGetLockState = function() {}
            ,
            r.jwLock = function() {}
            ,
            r.jwUnlock = function() {}
            ,
            s.config.chromeless && !e.utils.isIOS() ? d() : r.skin.load(s.config.skin, d),
            r
        }
    }(jwplayer)
}
(function(e, t) {
    "object" == typeof exports ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.IPv6 = t()
}
)(this, function() {
    return {
        best: function(e) {
            e = e.toLowerCase().split(":");
            var t = e.length
              , n = 8;
            "" === e[0] && "" === e[1] && "" === e[2] ? (e.shift(),
            e.shift()) : "" === e[0] && "" === e[1] ? e.shift() : "" === e[t - 1] && "" === e[t - 2] && e.pop(),
            t = e.length,
            -1 !== e[t - 1].indexOf(".") && (n = 7);
            var r;
            for (r = 0; r < t && "" !== e[r]; r++)
                ;
            if (r < n)
                for (e.splice(r, 1, "0000"); e.length < n; )
                    e.splice(r, 0, "0000");
            for (r = 0; r < n; r++) {
                for (var t = e[r].split(""), i = 0; 3 > i; i++) {
                    if (!("0" === t[0] && 1 < t.length))
                        break;
                    t.splice(0, 1)
                }
                e[r] = t.join("")
            }
            var t = -1
              , s = i = 0
              , o = -1
              , u = !1;
            for (r = 0; r < n; r++)
                u ? "0" === e[r] ? s += 1 : (u = !1,
                s > i && (t = o,
                i = s)) : "0" == e[r] && (u = !0,
                o = r,
                s = 1);
            s > i && (t = o,
            i = s),
            1 < i && e.splice(t, i, ""),
            t = e.length,
            n = "",
            "" === e[0] && (beststr = ":");
            for (r = 0; r < t; r++) {
                n += e[r];
                if (r === t - 1)
                    break;
                n += ":"
            }
            return "" === e[t - 1] && (n += ":"),
            n
        }
    }
}),
function(e) {
    function t(e) {
        throw RangeError(x[e])
    }
    function n(e, t) {
        for (var n = e.length; n--; )
            e[n] = t(e[n]);
        return e
    }
    function r(e) {
        for (var t = [], n = 0, r = e.length, i, s; n < r; )
            i = e.charCodeAt(n++),
            55296 == (i & 63488) && n < r ? (s = e.charCodeAt(n++),
            56320 == (s & 64512) ? t.push(((i & 1023) << 10) + (s & 1023) + 65536) : t.push(i, s)) : t.push(i);
        return t
    }
    function i(e) {
        return n(e, function(e) {
            var t = "";
            return 65535 < e && (e -= 65536,
            t += C(e >>> 10 & 1023 | 55296),
            e = 56320 | e & 1023),
            t += C(e)
        }).join("")
    }
    function s(e, t, n) {
        var r = 0;
        e = n ? N(e / g) : e >> 1;
        for (e += N(e / t); e > T * v >> 1; r += p)
            e = N(e / T);
        return N(r + (T + 1) * e / (e + m))
    }
    function o(e) {
        var n = [], r = e.length, o, u = 0, a = b, f = y, l, c, m, g, E;
        l = e.lastIndexOf(w),
        0 > l && (l = 0);
        for (c = 0; c < l; ++c)
            128 <= e.charCodeAt(c) && t("not-basic"),
            n.push(e.charCodeAt(c));
        for (l = 0 < l ? l + 1 : 0; l < r; ) {
            c = u,
            o = 1;
            for (m = p; ; m += p) {
                l >= r && t("invalid-input"),
                g = e.charCodeAt(l++),
                g = 10 > g - 48 ? g - 22 : 26 > g - 65 ? g - 65 : 26 > g - 97 ? g - 97 : p,
                (g >= p || g > N((h - u) / o)) && t("overflow"),
                u += g * o,
                E = m <= f ? d : m >= f + v ? v : m - f;
                if (g < E)
                    break;
                g = p - E,
                o > N(h / g) && t("overflow"),
                o *= g
            }
            o = n.length + 1,
            f = s(u - c, o, 0 == c),
            N(u / o) > h - a && t("overflow"),
            a += N(u / o),
            u %= o,
            n.splice(u++, 0, a)
        }
        return i(n)
    }
    function u(e) {
        var n, i, o, u, a, f, l, c, m, g = [], E, S, x;
        e = r(e),
        E = e.length,
        n = b,
        i = 0,
        a = y;
        for (f = 0; f < E; ++f)
            m = e[f],
            128 > m && g.push(C(m));
        for ((o = u = g.length) && g.push(w); o < E; ) {
            l = h;
            for (f = 0; f < E; ++f)
                m = e[f],
                m >= n && m < l && (l = m);
            S = o + 1,
            l - n > N((h - i) / S) && t("overflow"),
            i += (l - n) * S,
            n = l;
            for (f = 0; f < E; ++f)
                if (m = e[f],
                m < n && ++i > h && t("overflow"),
                m == n) {
                    c = i;
                    for (l = p; ; l += p) {
                        m = l <= a ? d : l >= a + v ? v : l - a;
                        if (c < m)
                            break;
                        x = c - m,
                        c = p - m,
                        g.push(C(m + x % c + 22 + 75 * (26 > m + x % c) - 0)),
                        c = N(x / c)
                    }
                    g.push(C(c + 22 + 75 * (26 > c) - 0)),
                    a = s(i, S, o == u),
                    i = 0,
                    ++o
                }
            ++i,
            ++n
        }
        return g.join("")
    }
    var a, f = "function" == typeof define && "object" == typeof define.amd && define.amd && define, l = "object" == typeof exports && exports, c = "object" == typeof module && module, h = 2147483647, p = 36, d = 1, v = 26, m = 38, g = 700, y = 72, b = 128, w = "-", E = /[^ -~]/, S = /^xn--/, x = {
        overflow: "Overflow: input needs wider integers to process.",
        "not-basic": "Illegal input >= 0x80 (not a basic code point)",
        "invalid-input": "Invalid input"
    }, T = p - d, N = Math.floor, C = String.fromCharCode, k;
    a = {
        version: "1.1.1",
        ucs2: {
            decode: r,
            encode: i
        },
        decode: o,
        encode: u,
        toASCII: function(e) {
            return n(e.split("."), function(e) {
                return E.test(e) ? "xn--" + u(e) : e
            }).join(".")
        },
        toUnicode: function(e) {
            return n(e.split("."), function(e) {
                return S.test(e) ? o(e.slice(4).toLowerCase()) : e
            }).join(".")
        }
    };
    if (l)
        if (c && c.exports == l)
            c.exports = a;
        else
            for (k in a)
                a.hasOwnProperty(k) && (l[k] = a[k]);
    else
        f ? define("punycode", a) : e.punycode = a
}(this),
function(e, t) {
    "object" == typeof exports ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.SecondLevelDomains = t()
}(this, function() {
    var e = Object.prototype.hasOwnProperty
      , t = {
        list: {
            ac: "com|gov|mil|net|org",
            ae: "ac|co|gov|mil|name|net|org|pro|sch",
            af: "com|edu|gov|net|org",
            al: "com|edu|gov|mil|net|org",
            ao: "co|ed|gv|it|og|pb",
            ar: "com|edu|gob|gov|int|mil|net|org|tur",
            at: "ac|co|gv|or",
            au: "asn|com|csiro|edu|gov|id|net|org",
            ba: "co|com|edu|gov|mil|net|org|rs|unbi|unmo|unsa|untz|unze",
            bb: "biz|co|com|edu|gov|info|net|org|store|tv",
            bh: "biz|cc|com|edu|gov|info|net|org",
            bn: "com|edu|gov|net|org",
            bo: "com|edu|gob|gov|int|mil|net|org|tv",
            br: "adm|adv|agr|am|arq|art|ato|b|bio|blog|bmd|cim|cng|cnt|com|coop|ecn|edu|eng|esp|etc|eti|far|flog|fm|fnd|fot|fst|g12|ggf|gov|imb|ind|inf|jor|jus|lel|mat|med|mil|mus|net|nom|not|ntr|odo|org|ppg|pro|psc|psi|qsl|rec|slg|srv|tmp|trd|tur|tv|vet|vlog|wiki|zlg",
            bs: "com|edu|gov|net|org",
            bz: "du|et|om|ov|rg",
            ca: "ab|bc|mb|nb|nf|nl|ns|nt|nu|on|pe|qc|sk|yk",
            ck: "biz|co|edu|gen|gov|info|net|org",
            cn: "ac|ah|bj|com|cq|edu|fj|gd|gov|gs|gx|gz|ha|hb|he|hi|hl|hn|jl|js|jx|ln|mil|net|nm|nx|org|qh|sc|sd|sh|sn|sx|tj|tw|xj|xz|yn|zj",
            co: "com|edu|gov|mil|net|nom|org",
            cr: "ac|c|co|ed|fi|go|or|sa",
            cy: "ac|biz|com|ekloges|gov|ltd|name|net|org|parliament|press|pro|tm",
            "do": "art|com|edu|gob|gov|mil|net|org|sld|web",
            dz: "art|asso|com|edu|gov|net|org|pol",
            ec: "com|edu|fin|gov|info|med|mil|net|org|pro",
            eg: "com|edu|eun|gov|mil|name|net|org|sci",
            er: "com|edu|gov|ind|mil|net|org|rochest|w",
            es: "com|edu|gob|nom|org",
            et: "biz|com|edu|gov|info|name|net|org",
            fj: "ac|biz|com|info|mil|name|net|org|pro",
            fk: "ac|co|gov|net|nom|org",
            fr: "asso|com|f|gouv|nom|prd|presse|tm",
            gg: "co|net|org",
            gh: "com|edu|gov|mil|org",
            gn: "ac|com|gov|net|org",
            gr: "com|edu|gov|mil|net|org",
            gt: "com|edu|gob|ind|mil|net|org",
            gu: "com|edu|gov|net|org",
            hk: "com|edu|gov|idv|net|org",
            id: "ac|co|go|mil|net|or|sch|web",
            il: "ac|co|gov|idf|k12|muni|net|org",
            "in": "ac|co|edu|ernet|firm|gen|gov|i|ind|mil|net|nic|org|res",
            iq: "com|edu|gov|i|mil|net|org",
            ir: "ac|co|dnssec|gov|i|id|net|org|sch",
            it: "edu|gov",
            je: "co|net|org",
            jo: "com|edu|gov|mil|name|net|org|sch",
            jp: "ac|ad|co|ed|go|gr|lg|ne|or",
            ke: "ac|co|go|info|me|mobi|ne|or|sc",
            kh: "com|edu|gov|mil|net|org|per",
            ki: "biz|com|de|edu|gov|info|mob|net|org|tel",
            km: "asso|com|coop|edu|gouv|k|medecin|mil|nom|notaires|pharmaciens|presse|tm|veterinaire",
            kn: "edu|gov|net|org",
            kr: "ac|busan|chungbuk|chungnam|co|daegu|daejeon|es|gangwon|go|gwangju|gyeongbuk|gyeonggi|gyeongnam|hs|incheon|jeju|jeonbuk|jeonnam|k|kg|mil|ms|ne|or|pe|re|sc|seoul|ulsan",
            kw: "com|edu|gov|net|org",
            ky: "com|edu|gov|net|org",
            kz: "com|edu|gov|mil|net|org",
            lb: "com|edu|gov|net|org",
            lk: "assn|com|edu|gov|grp|hotel|int|ltd|net|ngo|org|sch|soc|web",
            lr: "com|edu|gov|net|org",
            lv: "asn|com|conf|edu|gov|id|mil|net|org",
            ly: "com|edu|gov|id|med|net|org|plc|sch",
            ma: "ac|co|gov|m|net|org|press",
            mc: "asso|tm",
            me: "ac|co|edu|gov|its|net|org|priv",
            mg: "com|edu|gov|mil|nom|org|prd|tm",
            mk: "com|edu|gov|inf|name|net|org|pro",
            ml: "com|edu|gov|net|org|presse",
            mn: "edu|gov|org",
            mo: "com|edu|gov|net|org",
            mt: "com|edu|gov|net|org",
            mv: "aero|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro",
            mw: "ac|co|com|coop|edu|gov|int|museum|net|org",
            mx: "com|edu|gob|net|org",
            my: "com|edu|gov|mil|name|net|org|sch",
            nf: "arts|com|firm|info|net|other|per|rec|store|web",
            ng: "biz|com|edu|gov|mil|mobi|name|net|org|sch",
            ni: "ac|co|com|edu|gob|mil|net|nom|org",
            np: "com|edu|gov|mil|net|org",
            nr: "biz|com|edu|gov|info|net|org",
            om: "ac|biz|co|com|edu|gov|med|mil|museum|net|org|pro|sch",
            pe: "com|edu|gob|mil|net|nom|org|sld",
            ph: "com|edu|gov|i|mil|net|ngo|org",
            pk: "biz|com|edu|fam|gob|gok|gon|gop|gos|gov|net|org|web",
            pl: "art|bialystok|biz|com|edu|gda|gdansk|gorzow|gov|info|katowice|krakow|lodz|lublin|mil|net|ngo|olsztyn|org|poznan|pwr|radom|slupsk|szczecin|torun|warszawa|waw|wroc|wroclaw|zgora",
            pr: "ac|biz|com|edu|est|gov|info|isla|name|net|org|pro|prof",
            ps: "com|edu|gov|net|org|plo|sec",
            pw: "belau|co|ed|go|ne|or",
            ro: "arts|com|firm|info|nom|nt|org|rec|store|tm|www",
            rs: "ac|co|edu|gov|in|org",
            sb: "com|edu|gov|net|org",
            sc: "com|edu|gov|net|org",
            sh: "co|com|edu|gov|net|nom|org",
            sl: "com|edu|gov|net|org",
            st: "co|com|consulado|edu|embaixada|gov|mil|net|org|principe|saotome|store",
            sv: "com|edu|gob|org|red",
            sz: "ac|co|org",
            tr: "av|bbs|bel|biz|com|dr|edu|gen|gov|info|k12|name|net|org|pol|tel|tsk|tv|web",
            tt: "aero|biz|cat|co|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel",
            tw: "club|com|ebiz|edu|game|gov|idv|mil|net|org",
            mu: "ac|co|com|gov|net|or|org",
            mz: "ac|co|edu|gov|org",
            na: "co|com",
            nz: "ac|co|cri|geek|gen|govt|health|iwi|maori|mil|net|org|parliament|school",
            pa: "abo|ac|com|edu|gob|ing|med|net|nom|org|sld",
            pt: "com|edu|gov|int|net|nome|org|publ",
            py: "com|edu|gov|mil|net|org",
            qa: "com|edu|gov|mil|net|org",
            re: "asso|com|nom",
            ru: "ac|adygeya|altai|amur|arkhangelsk|astrakhan|bashkiria|belgorod|bir|bryansk|buryatia|cbg|chel|chelyabinsk|chita|chukotka|chuvashia|com|dagestan|e-burg|edu|gov|grozny|int|irkutsk|ivanovo|izhevsk|jar|joshkar-ola|kalmykia|kaluga|kamchatka|karelia|kazan|kchr|kemerovo|khabarovsk|khakassia|khv|kirov|koenig|komi|kostroma|kranoyarsk|kuban|kurgan|kursk|lipetsk|magadan|mari|mari-el|marine|mil|mordovia|mosreg|msk|murmansk|nalchik|net|nnov|nov|novosibirsk|nsk|omsk|orenburg|org|oryol|penza|perm|pp|pskov|ptz|rnd|ryazan|sakhalin|samara|saratov|simbirsk|smolensk|spb|stavropol|stv|surgut|tambov|tatarstan|tom|tomsk|tsaritsyn|tsk|tula|tuva|tver|tyumen|udm|udmurtia|ulan-ude|vladikavkaz|vladimir|vladivostok|volgograd|vologda|voronezh|vrn|vyatka|yakutia|yamal|yekaterinburg|yuzhno-sakhalinsk",
            rw: "ac|co|com|edu|gouv|gov|int|mil|net",
            sa: "com|edu|gov|med|net|org|pub|sch",
            sd: "com|edu|gov|info|med|net|org|tv",
            se: "a|ac|b|bd|c|d|e|f|g|h|i|k|l|m|n|o|org|p|parti|pp|press|r|s|t|tm|u|w|x|y|z",
            sg: "com|edu|gov|idn|net|org|per",
            sn: "art|com|edu|gouv|org|perso|univ",
            sy: "com|edu|gov|mil|net|news|org",
            th: "ac|co|go|in|mi|net|or",
            tj: "ac|biz|co|com|edu|go|gov|info|int|mil|name|net|nic|org|test|web",
            tn: "agrinet|com|defense|edunet|ens|fin|gov|ind|info|intl|mincom|nat|net|org|perso|rnrt|rns|rnu|tourism",
            tz: "ac|co|go|ne|or",
            ua: "biz|cherkassy|chernigov|chernovtsy|ck|cn|co|com|crimea|cv|dn|dnepropetrovsk|donetsk|dp|edu|gov|if|in|ivano-frankivsk|kh|kharkov|kherson|khmelnitskiy|kiev|kirovograd|km|kr|ks|kv|lg|lugansk|lutsk|lviv|me|mk|net|nikolaev|od|odessa|org|pl|poltava|pp|rovno|rv|sebastopol|sumy|te|ternopil|uzhgorod|vinnica|vn|zaporizhzhe|zhitomir|zp|zt",
            ug: "ac|co|go|ne|or|org|sc",
            uk: "ac|bl|british-library|co|cym|gov|govt|icnet|jet|lea|ltd|me|mil|mod|national-library-scotland|nel|net|nhs|nic|nls|org|orgn|parliament|plc|police|sch|scot|soc",
            us: "dni|fed|isa|kids|nsn",
            uy: "com|edu|gub|mil|net|org",
            ve: "co|com|edu|gob|info|mil|net|org|web",
            vi: "co|com|k12|net|org",
            vn: "ac|biz|com|edu|gov|health|info|int|name|net|org|pro",
            ye: "co|com|gov|ltd|me|net|org|plc",
            yu: "ac|co|edu|gov|org",
            za: "ac|agric|alt|bourse|city|co|cybernet|db|edu|gov|grondar|iaccess|imt|inca|landesign|law|mil|net|ngo|nis|nom|olivetti|org|pix|school|tm|web",
            zm: "ac|co|com|edu|gov|net|org|sch"
        },
        has_expression: null,
        is_expression: null,
        has: function(e) {
            return !!e.match(t.has_expression)
        },
        is: function(e) {
            return !!e.match(t.is_expression)
        },
        get: function(e) {
            return (e = e.match(t.has_expression)) && e[1] || null
        },
        init: function() {
            var n = "", r;
            for (r in t.list)
                e.call(t.list, r) && (n += "|(" + ("(" + t.list[r] + ")." + r) + ")");
            t.has_expression = RegExp("\\.(" + n.substr(1) + ")$", "i"),
            t.is_expression = RegExp("^(" + n.substr(1) + ")$", "i")
        }
    };
    return t.init(),
    t
}),
function(e, t) {
    "object" == typeof exports ? module.exports = t(require("./punycode"), require("./IPv6"), require("./SecondLevelDomains")) : "function" == typeof define && define.amd ? define(["./punycode", "./IPv6", "./SecondLevelDomains"], t) : e.URI = t(e.punycode, e.IPv6, e.SecondLevelDomains)
}(this, function(e, t, n) {
    function r(e, t) {
        return this instanceof r ? (void 0 === e && (e = "undefined" != typeof location ? location.href + "" : ""),
        this.href(e),
        void 0 !== t ? this.absoluteTo(t) : this) : new r(e,t)
    }
    function i(e) {
        return e.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1")
    }
    function s(e) {
        return String(Object.prototype.toString.call(e)).slice(8, -1)
    }
    function o(e) {
        return "Array" === s(e)
    }
    function u(e, t) {
        var n, r;
        if (o(t)) {
            n = 0;
            for (r = t.length; n < r; n++)
                if (!u(e, t[n]))
                    return !1;
            return !0
        }
        var i = s(t);
        n = 0;
        for (r = e.length; n < r; n++)
            if ("RegExp" === i) {
                if ("string" == typeof e[n] && e[n].match(t))
                    return !0
            } else if (e[n] === t)
                return !0;
        return !1
    }
    function a(e, t) {
        if (!o(e) || !o(t) || e.length !== t.length)
            return !1;
        e.sort(),
        t.sort();
        for (var n = 0, r = e.length; n < r; n++)
            if (e[n] !== t[n])
                return !1;
        return !0
    }
    function f(e) {
        return encodeURIComponent(e).replace(/[!'()*]/g, escape).replace(/\*/g, "%2A")
    }
    var l = r.prototype
      , c = Object.prototype.hasOwnProperty;
    r._parts = function() {
        return {
            protocol: null,
            username: null,
            password: null,
            hostname: null,
            urn: null,
            port: null,
            path: null,
            query: null,
            fragment: null,
            duplicateQueryParameters: r.duplicateQueryParameters
        }
    }
    ,
    r.duplicateQueryParameters = !1,
    r.protocol_expression = /^[a-z][a-z0-9-+-]*$/i,
    r.idn_expression = /[^a-z0-9\.-]/i,
    r.punycode_expression = /(xn--)/i,
    r.ip4_expression = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
    r.ip6_expression = /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/,
    r.find_uri_expression = /\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?\u00ab\u00bb\u201c\u201d\u2018\u2019]))/ig,
    r.defaultPorts = {
        http: "80",
        https: "443",
        ftp: "21",
        gopher: "70",
        ws: "80",
        wss: "443"
    },
    r.invalid_hostname_characters = /[^a-zA-Z0-9\.-]/,
    r.encode = f,
    r.decode = decodeURIComponent,
    r.iso8859 = function() {
        r.encode = escape,
        r.decode = unescape
    }
    ,
    r.unicode = function() {
        r.encode = f,
        r.decode = decodeURIComponent
    }
    ,
    r.characters = {
        pathname: {
            encode: {
                expression: /%(24|26|2B|2C|3B|3D|3A|40)/ig,
                map: {
                    "%24": "$",
                    "%26": "&",
                    "%2B": "+",
                    "%2C": ",",
                    "%3B": ";",
                    "%3D": "=",
                    "%3A": ":",
                    "%40": "@"
                }
            },
            decode: {
                expression: /[\/\?#]/g,
                map: {
                    "/": "%2F",
                    "?": "%3F",
                    "#": "%23"
                }
            }
        },
        reserved: {
            encode: {
                expression: /%(21|23|24|26|27|28|29|2A|2B|2C|2F|3A|3B|3D|3F|40|5B|5D)/ig,
                map: {
                    "%3A": ":",
                    "%2F": "/",
                    "%3F": "?",
                    "%23": "#",
                    "%5B": "[",
                    "%5D": "]",
                    "%40": "@",
                    "%21": "!",
                    "%24": "$",
                    "%26": "&",
                    "%27": "'",
                    "%28": "(",
                    "%29": ")",
                    "%2A": "*",
                    "%2B": "+",
                    "%2C": ",",
                    "%3B": ";",
                    "%3D": "="
                }
            }
        }
    },
    r.encodeQuery = function(e) {
        return r.encode(e + "").replace(/%20/g, "+")
    }
    ,
    r.decodeQuery = function(e) {
        return r.decode((e + "").replace(/\+/g, "%20"))
    }
    ,
    r.recodePath = function(e) {
        e = (e + "").split("/");
        for (var t = 0, n = e.length; t < n; t++)
            e[t] = r.encodePathSegment(r.decode(e[t]));
        return e.join("/")
    }
    ,
    r.decodePath = function(e) {
        e = (e + "").split("/");
        for (var t = 0, n = e.length; t < n; t++)
            e[t] = r.decodePathSegment(e[t]);
        return e.join("/")
    }
    ;
    var h = {
        encode: "encode",
        decode: "decode"
    }, p, d = function(e, t) {
        return function(n) {
            return r[t](n + "").replace(r.characters[e][t].expression, function(n) {
                return r.characters[e][t].map[n]
            })
        }
    };
    for (p in h)
        r[p + "PathSegment"] = d("pathname", h[p]);
    r.encodeReserved = d("reserved", "encode"),
    r.parse = function(e, t) {
        var n;
        return t || (t = {}),
        n = e.indexOf("#"),
        -1 < n && (t.fragment = e.substring(n + 1) || null,
        e = e.substring(0, n)),
        n = e.indexOf("?"),
        -1 < n && (t.query = e.substring(n + 1) || null,
        e = e.substring(0, n)),
        "//" === e.substring(0, 2) ? (t.protocol = "",
        e = e.substring(2),
        e = r.parseAuthority(e, t)) : (n = e.indexOf(":"),
        -1 < n && (t.protocol = e.substring(0, n),
        t.protocol && !t.protocol.match(r.protocol_expression) ? t.protocol = void 0 : "file" === t.protocol ? e = e.substring(n + 3) : "//" === e.substring(n + 1, n + 3) ? (e = e.substring(n + 3),
        e = r.parseAuthority(e, t)) : (e = e.substring(n + 1),
        t.urn = !0))),
        t.path = e,
        t
    }
    ,
    r.parseHost = function(e, t) {
        var n = e.indexOf("/"), r;
        return -1 === n && (n = e.length),
        "[" === e.charAt(0) ? (r = e.indexOf("]"),
        t.hostname = e.substring(1, r) || null,
        t.port = e.substring(r + 2, n) || null) : e.indexOf(":") !== e.lastIndexOf(":") ? (t.hostname = e.substring(0, n) || null,
        t.port = null) : (r = e.substring(0, n).split(":"),
        t.hostname = r[0] || null,
        t.port = r[1] || null),
        t.hostname && "/" !== e.substring(n).charAt(0) && (n++,
        e = "/" + e),
        e.substring(n) || "/"
    }
    ,
    r.parseAuthority = function(e, t) {
        return e = r.parseUserinfo(e, t),
        r.parseHost(e, t)
    }
    ,
    r.parseUserinfo = function(e, t) {
        var n = e.indexOf("@")
          , i = e.indexOf("/");
        return -1 < n && (-1 === i || n < i) ? (i = e.substring(0, n).split(":"),
        t.username = i[0] ? r.decode(i[0]) : null,
        i.shift(),
        t.password = i[0] ? r.decode(i.join(":")) : null,
        e = e.substring(n + 1)) : (t.username = null,
        t.password = null),
        e
    }
    ,
    r.parseQuery = function(e) {
        if (!e)
            return {};
        e = e.replace(/&+/g, "&").replace(/^\?*&*|&+$/g, "");
        if (!e)
            return {};
        var t = {};
        e = e.split("&");
        for (var n = e.length, i, s, o = 0; o < n; o++)
            i = e[o].split("="),
            s = r.decodeQuery(i.shift()),
            i = i.length ? r.decodeQuery(i.join("=")) : null,
            t[s] ? ("string" == typeof t[s] && (t[s] = [t[s]]),
            t[s].push(i)) : t[s] = i;
        return t
    }
    ,
    r.build = function(e) {
        var t = "";
        return e.protocol && (t += e.protocol + ":"),
        !e.urn && (t || e.hostname) && (t += "//"),
        t += r.buildAuthority(e) || "",
        "string" == typeof e.path && ("/" !== e.path.charAt(0) && "string" == typeof e.hostname && (t += "/"),
        t += e.path),
        "string" == typeof e.query && e.query && (t += "?" + e.query),
        "string" == typeof e.fragment && e.fragment && (t += "#" + e.fragment),
        t
    }
    ,
    r.buildHost = function(e) {
        var t = "";
        return e.hostname ? (r.ip6_expression.test(e.hostname) ? t = e.port ? t + ("[" + e.hostname + "]:" + e.port) : t + e.hostname : (t += e.hostname,
        e.port && (t += ":" + e.port)),
        t) : ""
    }
    ,
    r.buildAuthority = function(e) {
        return r.buildUserinfo(e) + r.buildHost(e)
    }
    ,
    r.buildUserinfo = function(e) {
        var t = "";
        return e.username && (t += r.encode(e.username),
        e.password && (t += ":" + r.encode(e.password)),
        t += "@"),
        t
    }
    ,
    r.buildQuery = function(e, t) {
        var n = "", i, s, u, a;
        for (s in e)
            if (c.call(e, s) && s)
                if (o(e[s])) {
                    i = {},
                    u = 0;
                    for (a = e[s].length; u < a; u++)
                        void 0 !== e[s][u] && void 0 === i[e[s][u] + ""] && (n += "&" + r.buildQueryParameter(s, e[s][u]),
                        !0 !== t && (i[e[s][u] + ""] = !0))
                } else
                    void 0 !== e[s] && (n += "&" + r.buildQueryParameter(s, e[s]));
        return n.substring(1)
    }
    ,
    r.buildQueryParameter = function(e, t) {
        return r.encodeQuery(e) + (null !== t ? "=" + r.encodeQuery(t) : "")
    }
    ,
    r.addQuery = function(e, t, n) {
        if ("object" == typeof t)
            for (var i in t)
                c.call(t, i) && r.addQuery(e, i, t[i]);
        else {
            if ("string" != typeof t)
                throw new TypeError("URI.addQuery() accepts an object, string as the name parameter");
            void 0 === e[t] ? e[t] = n : ("string" == typeof e[t] && (e[t] = [e[t]]),
            o(n) || (n = [n]),
            e[t] = e[t].concat(n))
        }
    }
    ,
    r.removeQuery = function(e, t, n) {
        var i;
        if (o(t)) {
            n = 0;
            for (i = t.length; n < i; n++)
                e[t[n]] = void 0
        } else if ("object" == typeof t)
            for (i in t)
                c.call(t, i) && r.removeQuery(e, i, t[i]);
        else {
            if ("string" != typeof t)
                throw new TypeError("URI.addQuery() accepts an object, string as the first parameter");
            if (void 0 !== n) {
                if (e[t] === n)
                    e[t] = void 0;
                else if (o(e[t])) {
                    i = e[t];
                    var s = {}, u, a;
                    if (o(n)) {
                        u = 0;
                        for (a = n.length; u < a; u++)
                            s[n[u]] = !0
                    } else
                        s[n] = !0;
                    u = 0;
                    for (a = i.length; u < a; u++)
                        void 0 !== s[i[u]] && (i.splice(u, 1),
                        a--,
                        u--);
                    e[t] = i
                }
            } else
                e[t] = void 0
        }
    }
    ,
    r.hasQuery = function(e, t, n, i) {
        if ("object" == typeof t) {
            for (var f in t)
                if (c.call(t, f) && !r.hasQuery(e, f, t[f]))
                    return !1;
            return !0
        }
        if ("string" != typeof t)
            throw new TypeError("URI.hasQuery() accepts an object, string as the name parameter");
        switch (s(n)) {
        case "Undefined":
            return t in e;
        case "Boolean":
            return e = Boolean(o(e[t]) ? e[t].length : e[t]),
            n === e;
        case "Function":
            return !!n(e[t], t, e);
        case "Array":
            return o(e[t]) ? (i ? u : a)(e[t], n) : !1;
        case "RegExp":
            return o(e[t]) ? i ? u(e[t], n) : !1 : Boolean(e[t] && e[t].match(n));
        case "Number":
            n = String(n);
        case "String":
            return o(e[t]) ? i ? u(e[t], n) : !1 : e[t] === n;
        default:
            throw new TypeError("URI.hasQuery() accepts undefined, boolean, string, number, RegExp, Function as the value parameter")
        }
    }
    ,
    r.commonPath = function(e, t) {
        var n = Math.min(e.length, t.length), r;
        for (r = 0; r < n; r++)
            if (e.charAt(r) !== t.charAt(r)) {
                r--;
                break
            }
        if (1 > r)
            return e.charAt(0) === t.charAt(0) && "/" === e.charAt(0) ? "/" : "";
        if ("/" !== e.charAt(r) || "/" !== t.charAt(r))
            r = e.substring(0, r).lastIndexOf("/");
        return e.substring(0, r + 1)
    }
    ,
    r.withinString = function(e, t) {
        return e.replace(r.find_uri_expression, t)
    }
    ,
    r.ensureValidHostname = function(t) {
        if (t.match(r.invalid_hostname_characters)) {
            if (!e)
                throw new TypeError("Hostname '" + t + "' contains characters other than [A-Z0-9.-] and Punycode.js is not available");
            if (e.toASCII(t).match(r.invalid_hostname_characters))
                throw new TypeError("Hostname '" + t + "' contains characters other than [A-Z0-9.-]")
        }
    }
    ,
    l.build = function(e) {
        if (!0 === e)
            this._deferred_build = !0;
        else if (void 0 === e || this._deferred_build)
            this._string = r.build(this._parts),
            this._deferred_build = !1;
        return this
    }
    ,
    l.clone = function() {
        return new r(this)
    }
    ,
    l.valueOf = l.toString = function() {
        return this.build(!1)._string
    }
    ,
    h = {
        protocol: "protocol",
        username: "username",
        password: "password",
        hostname: "hostname",
        port: "port"
    },
    d = function(e) {
        return function(t, n) {
            return void 0 === t ? this._parts[e] || "" : (this._parts[e] = t,
            this.build(!n),
            this)
        }
    }
    ;
    for (p in h)
        l[p] = d(h[p]);
    h = {
        query: "?",
        fragment: "#"
    },
    d = function(e, t) {
        return function(n, r) {
            return void 0 === n ? this._parts[e] || "" : (null !== n && (n += "",
            n.charAt(0) === t && (n = n.substring(1))),
            this._parts[e] = n,
            this.build(!r),
            this)
        }
    }
    ;
    for (p in h)
        l[p] = d(p, h[p]);
    h = {
        search: ["?", "query"],
        hash: ["#", "fragment"]
    },
    d = function(e, t) {
        return function(n, r) {
            var i = this[e](n, r);
            return "string" == typeof i && i.length ? t + i : i
        }
    }
    ;
    for (p in h)
        l[p] = d(h[p][1], h[p][0]);
    l.pathname = function(e, t) {
        if (void 0 === e || !0 === e) {
            var n = this._parts.path || (this._parts.urn ? "" : "/");
            return e ? r.decodePath(n) : n
        }
        return this._parts.path = e ? r.recodePath(e) : "/",
        this.build(!t),
        this
    }
    ,
    l.path = l.pathname,
    l.href = function(e, t) {
        var n;
        if (void 0 === e)
            return this.toString();
        this._string = "",
        this._parts = r._parts();
        var i = e instanceof r
          , s = "object" == typeof e && (e.hostname || e.path);
        !i && s && void 0 !== e.pathname && (e = e.toString());
        if ("string" == typeof e)
            this._parts = r.parse(e, this._parts);
        else {
            if (!i && !s)
                throw new TypeError("invalid input");
            for (n in i = i ? e._parts : e,
            i)
                c.call(this._parts, n) && (this._parts[n] = i[n])
        }
        return this.build(!t),
        this
    }
    ,
    l.is = function(e) {
        var t = !1
          , i = !1
          , s = !1
          , o = !1
          , u = !1
          , a = !1
          , f = !1
          , l = !this._parts.urn;
        this._parts.hostname && (l = !1,
        i = r.ip4_expression.test(this._parts.hostname),
        s = r.ip6_expression.test(this._parts.hostname),
        t = i || s,
        u = (o = !t) && n && n.has(this._parts.hostname),
        a = o && r.idn_expression.test(this._parts.hostname),
        f = o && r.punycode_expression.test(this._parts.hostname));
        switch (e.toLowerCase()) {
        case "relative":
            return l;
        case "absolute":
            return !l;
        case "domain":
        case "name":
            return o;
        case "sld":
            return u;
        case "ip":
            return t;
        case "ip4":
        case "ipv4":
        case "inet4":
            return i;
        case "ip6":
        case "ipv6":
        case "inet6":
            return s;
        case "idn":
            return a;
        case "url":
            return !this._parts.urn;
        case "urn":
            return !!this._parts.urn;
        case "punycode":
            return f
        }
        return null
    }
    ;
    var v = l.protocol
      , m = l.port
      , g = l.hostname;
    l.protocol = function(e, t) {
        if (void 0 !== e && e && (e = e.replace(/:(\/\/)?$/, ""),
        e.match(/[^a-zA-z0-9\.+-]/)))
            throw new TypeError("Protocol '" + e + "' contains characters other than [A-Z0-9.+-]");
        return v.call(this, e, t)
    }
    ,
    l.scheme = l.protocol,
    l.port = function(e, t) {
        if (this._parts.urn)
            return void 0 === e ? "" : this;
        if (void 0 !== e && (0 === e && (e = null),
        e && (e += "",
        ":" === e.charAt(0) && (e = e.substring(1)),
        e.match(/[^0-9]/))))
            throw new TypeError("Port '" + e + "' contains characters other than [0-9]");
        return m.call(this, e, t)
    }
    ,
    l.hostname = function(e, t) {
        if (this._parts.urn)
            return void 0 === e ? "" : this;
        if (void 0 !== e) {
            var n = {};
            r.parseHost(e, n),
            e = n.hostname
        }
        return g.call(this, e, t)
    }
    ,
    l.host = function(e, t) {
        return this._parts.urn ? void 0 === e ? "" : this : void 0 === e ? this._parts.hostname ? r.buildHost(this._parts) : "" : (r.parseHost(e, this._parts),
        this.build(!t),
        this)
    }
    ,
    l.authority = function(e, t) {
        return this._parts.urn ? void 0 === e ? "" : this : void 0 === e ? this._parts.hostname ? r.buildAuthority(this._parts) : "" : (r.parseAuthority(e, this._parts),
        this.build(!t),
        this)
    }
    ,
    l.userinfo = function(e, t) {
        if (this._parts.urn)
            return void 0 === e ? "" : this;
        if (void 0 === e) {
            if (!this._parts.username)
                return "";
            var n = r.buildUserinfo(this._parts);
            return n.substring(0, n.length - 1)
        }
        return "@" !== e[e.length - 1] && (e += "@"),
        r.parseUserinfo(e, this._parts),
        this.build(!t),
        this
    }
    ,
    l.resource = function(e, t) {
        var n;
        return void 0 === e ? this.path() + this.search() + this.hash() : (n = r.parse(e),
        this._parts.path = n.path,
        this._parts.query = n.query,
        this._parts.fragment = n.fragment,
        this.build(!t),
        this)
    }
    ,
    l.subdomain = function(e, t) {
        if (this._parts.urn)
            return void 0 === e ? "" : this;
        if (void 0 === e) {
            if (!this._parts.hostname || this.is("IP"))
                return "";
            var n = this._parts.hostname.length - this.domain().length - 1;
            return this._parts.hostname.substring(0, n) || ""
        }
        return n = this._parts.hostname.length - this.domain().length,
        n = this._parts.hostname.substring(0, n),
        n = RegExp("^" + i(n)),
        e && "." !== e.charAt(e.length - 1) && (e += "."),
        e && r.ensureValidHostname(e),
        this._parts.hostname = this._parts.hostname.replace(n, e),
        this.build(!t),
        this
    }
    ,
    l.domain = function(e, t) {
        if (this._parts.urn)
            return void 0 === e ? "" : this;
        "boolean" == typeof e && (t = e,
        e = void 0);
        if (void 0 === e) {
            if (!this._parts.hostname || this.is("IP"))
                return "";
            var n = this._parts.hostname.match(/\./g);
            return n && 2 > n.length ? this._parts.hostname : (n = this._parts.hostname.length - this.tld(t).length - 1,
            n = this._parts.hostname.lastIndexOf(".", n - 1) + 1,
            this._parts.hostname.substring(n) || "")
        }
        if (!e)
            throw new TypeError("cannot set domain empty");
        return r.ensureValidHostname(e),
        !this._parts.hostname || this.is("IP") ? this._parts.hostname = e : (n = RegExp(i(this.domain()) + "$"),
        this._parts.hostname = this._parts.hostname.replace(n, e)),
        this.build(!t),
        this
    }
    ,
    l.tld = function(e, t) {
        if (this._parts.urn)
            return void 0 === e ? "" : this;
        "boolean" == typeof e && (t = e,
        e = void 0);
        if (void 0 === e) {
            if (!this._parts.hostname || this.is("IP"))
                return "";
            var r = this._parts.hostname.lastIndexOf(".")
              , r = this._parts.hostname.substring(r + 1);
            return !0 !== t && n && n.list[r.toLowerCase()] ? n.get(this._parts.hostname) || r : r
        }
        if (!e)
            throw new TypeError("cannot set TLD empty");
        if (e.match(/[^a-zA-Z0-9-]/)) {
            if (!n || !n.is(e))
                throw new TypeError("TLD '" + e + "' contains characters other than [A-Z0-9]");
            r = RegExp(i(this.tld()) + "$"),
            this._parts.hostname = this._parts.hostname.replace(r, e)
        } else {
            if (!this._parts.hostname || this.is("IP"))
                throw new ReferenceError("cannot set TLD on non-domain host");
            r = RegExp(i(this.tld()) + "$"),
            this._parts.hostname = this._parts.hostname.replace(r, e)
        }
        return this.build(!t),
        this
    }
    ,
    l.directory = function(e, t) {
        if (this._parts.urn)
            return void 0 === e ? "" : this;
        if (void 0 === e || !0 === e) {
            if (!this._parts.path && !this._parts.hostname)
                return "";
            if ("/" === this._parts.path)
                return "/";
            var n = this._parts.path.length - this.filename().length - 1
              , n = this._parts.path.substring(0, n) || (this._parts.hostname ? "/" : "");
            return e ? r.decodePath(n) : n
        }
        return n = this._parts.path.length - this.filename().length,
        n = this._parts.path.substring(0, n),
        n = RegExp("^" + i(n)),
        this.is("relative") || (e || (e = "/"),
        "/" !== e.charAt(0) && (e = "/" + e)),
        e && "/" !== e.charAt(e.length - 1) && (e += "/"),
        e = r.recodePath(e),
        this._parts.path = this._parts.path.replace(n, e),
        this.build(!t),
        this
    }
    ,
    l.filename = function(e, t) {
        if (this._parts.urn)
            return void 0 === e ? "" : this;
        if (void 0 === e || !0 === e) {
            if (!this._parts.path || "/" === this._parts.path)
                return "";
            var n = this._parts.path.lastIndexOf("/")
              , n = this._parts.path.substring(n + 1);
            return e ? r.decodePathSegment(n) : n
        }
        n = !1,
        "/" === e.charAt(0) && (e = e.substring(1)),
        e.match(/\.?\//) && (n = !0);
        var s = RegExp(i(this.filename()) + "$");
        return e = r.recodePath(e),
        this._parts.path = this._parts.path.replace(s, e),
        n ? this.normalizePath(t) : this.build(!t),
        this
    }
    ,
    l.suffix = function(e, t) {
        if (this._parts.urn)
            return void 0 === e ? "" : this;
        if (void 0 === e || !0 === e) {
            if (!this._parts.path || "/" === this._parts.path)
                return "";
            var n = this.filename()
              , s = n.lastIndexOf(".");
            return -1 === s ? "" : (n = n.substring(s + 1),
            n = /^[a-z0-9%]+$/i.test(n) ? n : "",
            e ? r.decodePathSegment(n) : n)
        }
        "." === e.charAt(0) && (e = e.substring(1));
        if (n = this.suffix())
            s = e ? RegExp(i(n) + "$") : RegExp(i("." + n) + "$");
        else {
            if (!e)
                return this;
            this._parts.path += "." + r.recodePath(e)
        }
        return s && (e = r.recodePath(e),
        this._parts.path = this._parts.path.replace(s, e)),
        this.build(!t),
        this
    }
    ,
    l.segment = function(e, t, n) {
        var r = this._parts.urn ? ":" : "/"
          , i = this.path()
          , s = "/" === i.substring(0, 1)
          , i = i.split(r);
        "number" != typeof e && (n = t,
        t = e,
        e = void 0);
        if (void 0 !== e && "number" != typeof e)
            throw Error("Bad segment '" + e + "', must be 0-based integer");
        s && i.shift(),
        0 > e && (e = Math.max(i.length + e, 0));
        if (void 0 === t)
            return void 0 === e ? i : i[e];
        if (null === e || void 0 === i[e]) {
            if (o(t))
                i = t;
            else if (t || "string" == typeof t && t.length)
                "" === i[i.length - 1] ? i[i.length - 1] = t : i.push(t)
        } else
            t || "string" == typeof t && t.length ? i[e] = t : i.splice(e, 1);
        return s && i.unshift(""),
        this.path(i.join(r), n)
    }
    ;
    var y = l.query;
    return l.query = function(e, t) {
        if (!0 === e)
            return r.parseQuery(this._parts.query);
        if ("function" == typeof e) {
            var n = r.parseQuery(this._parts.query)
              , i = e.call(this, n);
            return this._parts.query = r.buildQuery(i || n, this._parts.duplicateQueryParameters),
            this.build(!t),
            this
        }
        return void 0 !== e && "string" != typeof e ? (this._parts.query = r.buildQuery(e, this._parts.duplicateQueryParameters),
        this.build(!t),
        this) : y.call(this, e, t)
    }
    ,
    l.setQuery = function(e, t, n) {
        var i = r.parseQuery(this._parts.query);
        if ("object" == typeof e)
            for (var s in e)
                c.call(e, s) && (i[s] = e[s]);
        else {
            if ("string" != typeof e)
                throw new TypeError("URI.addQuery() accepts an object, string as the name parameter");
            i[e] = void 0 !== t ? t : null
        }
        return this._parts.query = r.buildQuery(i, this._parts.duplicateQueryParameters),
        "string" != typeof e && (n = t),
        this.build(!n),
        this
    }
    ,
    l.addQuery = function(e, t, n) {
        var i = r.parseQuery(this._parts.query);
        return r.addQuery(i, e, void 0 === t ? null : t),
        this._parts.query = r.buildQuery(i, this._parts.duplicateQueryParameters),
        "string" != typeof e && (n = t),
        this.build(!n),
        this
    }
    ,
    l.removeQuery = function(e, t, n) {
        var i = r.parseQuery(this._parts.query);
        return r.removeQuery(i, e, t),
        this._parts.query = r.buildQuery(i, this._parts.duplicateQueryParameters),
        "string" != typeof e && (n = t),
        this.build(!n),
        this
    }
    ,
    l.hasQuery = function(e, t, n) {
        var i = r.parseQuery(this._parts.query);
        return r.hasQuery(i, e, t, n)
    }
    ,
    l.setSearch = l.setQuery,
    l.addSearch = l.addQuery,
    l.removeSearch = l.removeQuery,
    l.hasSearch = l.hasQuery,
    l.normalize = function() {
        return this._parts.urn ? this.normalizeProtocol(!1).normalizeQuery(!1).normalizeFragment(!1).build() : this.normalizeProtocol(!1).normalizeHostname(!1).normalizePort(!1).normalizePath(!1).normalizeQuery(!1).normalizeFragment(!1).build()
    }
    ,
    l.normalizeProtocol = function(e) {
        return "string" == typeof this._parts.protocol && (this._parts.protocol = this._parts.protocol.toLowerCase(),
        this.build(!e)),
        this
    }
    ,
    l.normalizeHostname = function(n) {
        return this._parts.hostname && (this.is("IDN") && e ? this._parts.hostname = e.toASCII(this._parts.hostname) : this.is("IPv6") && t && (this._parts.hostname = t.best(this._parts.hostname)),
        this._parts.hostname = this._parts.hostname.toLowerCase(),
        this.build(!n)),
        this
    }
    ,
    l.normalizePort = function(e) {
        return "string" == typeof this._parts.protocol && this._parts.port === r.defaultPorts[this._parts.protocol] && (this._parts.port = null,
        this.build(!e)),
        this
    }
    ,
    l.normalizePath = function(e) {
        if (this._parts.urn || !this._parts.path || "/" === this._parts.path)
            return this;
        var t, n = this._parts.path, i, s;
        "/" !== n.charAt(0) && ("." === n.charAt(0) && n.substring(0, n.indexOf("/")),
        t = !0,
        n = "/" + n);
        for (n = n.replace(/(\/(\.\/)+)|\/{2,}/g, "/"); ; ) {
            i = n.indexOf("/../");
            if (-1 === i)
                break;
            if (0 === i) {
                n = n.substring(3);
                break
            }
            s = n.substring(0, i).lastIndexOf("/"),
            -1 === s && (s = i),
            n = n.substring(0, s) + n.substring(i + 3)
        }
        return t && this.is("relative") && (n = n.substring(1)),
        n = r.recodePath(n),
        this._parts.path = n,
        this.build(!e),
        this
    }
    ,
    l.normalizePathname = l.normalizePath,
    l.normalizeQuery = function(e) {
        return "string" == typeof this._parts.query && (this._parts.query.length ? this.query(r.parseQuery(this._parts.query)) : this._parts.query = null,
        this.build(!e)),
        this
    }
    ,
    l.normalizeFragment = function(e) {
        return this._parts.fragment || (this._parts.fragment = null,
        this.build(!e)),
        this
    }
    ,
    l.normalizeSearch = l.normalizeQuery,
    l.normalizeHash = l.normalizeFragment,
    l.iso8859 = function() {
        var e = r.encode
          , t = r.decode;
        return r.encode = escape,
        r.decode = decodeURIComponent,
        this.normalize(),
        r.encode = e,
        r.decode = t,
        this
    }
    ,
    l.unicode = function() {
        var e = r.encode
          , t = r.decode;
        return r.encode = f,
        r.decode = unescape,
        this.normalize(),
        r.encode = e,
        r.decode = t,
        this
    }
    ,
    l.readable = function() {
        var t = this.clone();
        t.username("").password("").normalize();
        var n = "";
        t._parts.protocol && (n += t._parts.protocol + "://"),
        t._parts.hostname && (t.is("punycode") && e ? (n += e.toUnicode(t._parts.hostname),
        t._parts.port && (n += ":" + t._parts.port)) : n += t.host()),
        t._parts.hostname && t._parts.path && "/" !== t._parts.path.charAt(0) && (n += "/"),
        n += t.path(!0);
        if (t._parts.query) {
            for (var i = "", s = 0, o = t._parts.query.split("&"), u = o.length; s < u; s++) {
                var a = (o[s] || "").split("=")
                  , i = i + ("&" + r.decodeQuery(a[0]).replace(/&/g, "%26"));
                void 0 !== a[1] && (i += "=" + r.decodeQuery(a[1]).replace(/&/g, "%26"))
            }
            n += "?" + i.substring(1)
        }
        return n += t.hash()
    }
    ,
    l.absoluteTo = function(e) {
        var t = this.clone(), n = ["protocol", "username", "password", "hostname", "port"], i, s;
        if (this._parts.urn)
            throw Error("URNs do not have any generally defined hierachical components");
        e instanceof r || (e = new r(e)),
        t._parts.protocol || (t._parts.protocol = e._parts.protocol);
        if (this._parts.hostname)
            return t;
        i = 0;
        for (s; s = n[i]; i++)
            t._parts[s] = e._parts[s];
        n = ["query", "path"],
        i = 0;
        for (s; s = n[i]; i++)
            !t._parts[s] && e._parts[s] && (t._parts[s] = e._parts[s]);
        return "/" !== t.path().charAt(0) && (e = e.directory(),
        t._parts.path = (e ? e + "/" : "") + t._parts.path,
        t.normalizePath()),
        t.build(),
        t
    }
    ,
    l.relativeTo = function(e) {
        var t = this.clone(), n = ["protocol", "username", "password", "hostname", "port"], s;
        if (t._parts.urn)
            throw Error("URNs do not have any generally defined hierachical components");
        e instanceof r || (e = new r(e));
        if ("/" !== t.path().charAt(0) || "/" !== e.path().charAt(0))
            throw Error("Cannot calculate common path from non-relative URLs");
        s = r.commonPath(t.path(), e.path());
        for (var o = 0, u; u = n[o]; o++)
            t._parts[u] = null;
        if ("/" === s)
            return t;
        if (!s)
            return this.clone();
        e = e.directory(),
        n = t.directory();
        if (e === n)
            return t._parts.path = t.filename(),
            t.build();
        e.substring(s.length),
        n = n.substring(s.length);
        if (e + "/" === s)
            return n && (n += "/"),
            t._parts.path = n + t.filename(),
            t.build();
        n = "../",
        s = RegExp("^" + i(s));
        for (e = e.replace(s, "/").match(/\//g).length - 1; e--; )
            n += "../";
        return t._parts.path = t._parts.path.replace(s, n),
        t.build()
    }
    ,
    l.equals = function(e) {
        var t = this.clone();
        e = new r(e);
        var n = {}, i = {}, s = {}, u;
        t.normalize(),
        e.normalize();
        if (t.toString() === e.toString())
            return !0;
        n = t.query(),
        i = e.query(),
        t.query(""),
        e.query("");
        if (t.toString() !== e.toString() || n.length !== i.length)
            return !1;
        n = r.parseQuery(n),
        i = r.parseQuery(i);
        for (u in n)
            if (c.call(n, u)) {
                if (o(n[u])) {
                    if (!a(n[u], i[u]))
                        return !1
                } else if (n[u] !== i[u])
                    return !1;
                s[u] = !0
            }
        for (u in i)
            if (c.call(i, u) && !s[u])
                return !1;
        return !0
    }
    ,
    l.duplicateQueryParameters = function(e) {
        return this._parts.duplicateQueryParameters = !!e,
        this
    }
    ,
    r
}),
function(e, t) {
    "object" == typeof exports ? module.exports = t(require("./URI")) : "function" == typeof define && define.amd ? define(["./URI"], t) : e.URITemplate = t(e.URI)
}(this, function(e) {
    function t(e) {
        return t._cache[e] ? t._cache[e] : this instanceof t ? (this.expression = e,
        t._cache[e] = this,
        this) : new t(e)
    }
    function n(e) {
        this.data = e,
        this.cache = {}
    }
    var r = Object.prototype.hasOwnProperty
      , i = t.prototype
      , s = {
        "": {
            prefix: "",
            separator: ",",
            named: !1,
            empty_name_separator: !1,
            encode: "encode"
        },
        "+": {
            prefix: "",
            separator: ",",
            named: !1,
            empty_name_separator: !1,
            encode: "encodeReserved"
        },
        "#": {
            prefix: "#",
            separator: ",",
            named: !1,
            empty_name_separator: !1,
            encode: "encodeReserved"
        },
        ".": {
            prefix: ".",
            separator: ".",
            named: !1,
            empty_name_separator: !1,
            encode: "encode"
        },
        "/": {
            prefix: "/",
            separator: "/",
            named: !1,
            empty_name_separator: !1,
            encode: "encode"
        },
        ";": {
            prefix: ";",
            separator: ";",
            named: !0,
            empty_name_separator: !1,
            encode: "encode"
        },
        "?": {
            prefix: "?",
            separator: "&",
            named: !0,
            empty_name_separator: !0,
            encode: "encode"
        },
        "&": {
            prefix: "&",
            separator: "&",
            named: !0,
            empty_name_separator: !0,
            encode: "encode"
        }
    };
    return t._cache = {},
    t.EXPRESSION_PATTERN = /\{([^a-zA-Z0-9%_]?)([^\}]+)(\}|$)/g,
    t.VARIABLE_PATTERN = /^([^*:]+)((\*)|:(\d+))?$/,
    t.VARIABLE_NAME_PATTERN = /[^a-zA-Z0-9%_]/,
    t.expand = function(e, n) {
        var r = s[e.operator], i = r.named ? "Named" : "Unnamed", o = e.variables, u = [], a, f, l;
        for (l = 0; f = o[l]; l++)
            a = n.get(f.name),
            a.val.length ? u.push(t["expand" + i](a, r, f.explode, f.explode && r.separator || ",", f.maxlength, f.name)) : a.type && u.push("");
        return u.length ? r.prefix + u.join(r.separator) : ""
    }
    ,
    t.expandNamed = function(t, n, r, i, s, o) {
        var u = ""
          , a = n.encode;
        n = n.empty_name_separator;
        var l = !t[a].length, c = 2 === t.type ? "" : e[a](o), h, p, d;
        p = 0;
        for (d = t.val.length; p < d; p++)
            s ? (h = e[a](t.val[p][1].substring(0, s)),
            2 === t.type && (c = e[a](t.val[p][0].substring(0, s)))) : l ? (h = e[a](t.val[p][1]),
            2 === t.type ? (c = e[a](t.val[p][0]),
            t[a].push([c, h])) : t[a].push([void 0, h])) : (h = t[a][p][1],
            2 === t.type && (c = t[a][p][0])),
            u && (u += i),
            r ? u += c + (n || h ? "=" : "") + h : (p || (u += e[a](o) + (n || h ? "=" : "")),
            2 === t.type && (u += c + ","),
            u += h);
        return u
    }
    ,
    t.expandUnnamed = function(t, n, r, i, s) {
        var o = ""
          , u = n.encode;
        n = n.empty_name_separator;
        var a = !t[u].length, l, c, h, p;
        h = 0;
        for (p = t.val.length; h < p; h++)
            s ? c = e[u](t.val[h][1].substring(0, s)) : a ? (c = e[u](t.val[h][1]),
            t[u].push([2 === t.type ? e[u](t.val[h][0]) : void 0, c])) : c = t[u][h][1],
            o && (o += i),
            2 === t.type && (l = s ? e[u](t.val[h][0].substring(0, s)) : t[u][h][0],
            o += l,
            o = r ? o + (n || c ? "=" : "") : o + ","),
            o += c;
        return o
    }
    ,
    i.expand = function(e) {
        var r = "";
        (!this.parts || !this.parts.length) && this.parse(),
        e instanceof n || (e = new n(e));
        for (var i = 0, s = this.parts.length; i < s; i++)
            r += "string" == typeof this.parts[i] ? this.parts[i] : t.expand(this.parts[i], e);
        return r
    }
    ,
    i.parse = function() {
        var e = this.expression, n = t.EXPRESSION_PATTERN, r = t.VARIABLE_PATTERN, i = t.VARIABLE_NAME_PATTERN, o = [], u = 0, a, f, l;
        for (n.lastIndex = 0; ; ) {
            f = n.exec(e);
            if (null === f) {
                o.push(e.substring(u));
                break
            }
            o.push(e.substring(u, f.index)),
            u = f.index + f[0].length;
            if (!s[f[1]])
                throw Error('Unknown Operator "' + f[1] + '" in "' + f[0] + '"');
            if (!f[3])
                throw Error('Unclosed Expression "' + f[0] + '"');
            a = f[2].split(",");
            for (var c = 0, h = a.length; c < h; c++) {
                l = a[c].match(r);
                if (null === l)
                    throw Error('Invalid Variable "' + a[c] + '" in "' + f[0] + '"');
                if (l[1].match(i))
                    throw Error('Invalid Variable Name "' + l[1] + '" in "' + f[0] + '"');
                a[c] = {
                    name: l[1],
                    explode: !!l[3],
                    maxlength: l[4] && parseInt(l[4], 10)
                }
            }
            if (!a.length)
                throw Error('Expression Missing Variable(s) "' + f[0] + '"');
            o.push({
                expression: f[0],
                operator: f[1],
                variables: a
            })
        }
        return o.length || o.push(e),
        this.parts = o,
        this
    }
    ,
    n.prototype.get = function(e) {
        var t = this.data, n = {
            type: 0,
            val: [],
            encode: [],
            encodeReserved: []
        }, i;
        if (void 0 !== this.cache[e])
            return this.cache[e];
        this.cache[e] = n,
        t = "[object Function]" === String(Object.prototype.toString.call(t)) ? t(e) : "[object Function]" === String(Object.prototype.toString.call(t[e])) ? t[e](e) : t[e];
        if (void 0 !== t && null !== t)
            if ("[object Array]" === String(Object.prototype.toString.call(t))) {
                i = 0;
                for (e = t.length; i < e; i++)
                    void 0 !== t[i] && null !== t[i] && n.val.push([void 0, String(t[i])]);
                n.val.length && (n.type = 3)
            } else if ("[object Object]" === String(Object.prototype.toString.call(t))) {
                for (i in t)
                    r.call(t, i) && void 0 !== t[i] && null !== t[i] && n.val.push([i, String(t[i])]);
                n.val.length && (n.type = 2)
            } else
                n.type = 1,
                n.val.push([void 0, String(t)]);
        return n
    }
    ,
    e.expand = function(n, r) {
        var i = (new t(n)).expand(r);
        return new e(i)
    }
    ,
    t
}),
function(e, t) {
    "object" == typeof exports ? module.exports = t(require("jquery", "./URI")) : "function" == typeof define && define.amd ? define(["jquery", "./URI"], t) : t(e.jQuery, e.URI)
}(this, function(e, t) {
    function n(e) {
        return e.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1")
    }
    function r(t) {
        var n;
        return e.each(["src", "href", "action"], function(e, r) {
            return r in t ? (n = r,
            !1) : !0
        }),
        "input" === t.nodeName.toLowerCase() && "image" !== t.type ? void 0 : n ? n : "src"
    }
    function i(t, n) {
        var i, u, a;
        return !r(t) || !n ? !1 : (i = n.match(f),
        !i || !i[5] && ":" !== i[2] && !o[i[2]] ? !1 : (a = e(t).uri(),
        i[5] ? a.is(i[5]) : ":" === i[2] ? (u = i[1].toLowerCase() + ":",
        o[u] ? o[u](a, i[4]) : !1) : (u = i[1].toLowerCase(),
        s[u] ? o[i[2]](a[u](), i[4], u) : !1)))
    }
    var s = {}
      , o = {
        "=": function(e, t) {
            return e === t
        },
        "^=": function(e, t) {
            return !!(e + "").match(RegExp("^" + n(t), "i"))
        },
        "$=": function(e, t) {
            return !!(e + "").match(RegExp(n(t) + "$", "i"))
        },
        "*=": function(e, t, r) {
            return "directory" == r && (e += "/"),
            !!(e + "").match(RegExp(n(t), "i"))
        },
        "equals:": function(e, t) {
            return e.equals(t)
        },
        "is:": function(e, t) {
            return e.is(t)
        }
    };
    e.each("authority directory domain filename fragment hash host hostname href password path pathname port protocol query resource scheme search subdomain suffix tld username".split(" "), function(t, n) {
        s[n] = !0,
        e.attrHooks["uri:" + n] = {
            get: function(t) {
                return e(t).uri()[n]()
            },
            set: function(t, r) {
                return e(t).uri()[n](r),
                r
            }
        }
    });
    var u = function(t, n) {
        return e(t).uri().href(n).toString()
    };
    e.each(["src", "href", "action", "uri"], function(t, n) {
        e.attrHooks[n] = {
            set: u
        }
    }),
    e.attrHooks.uri.get = function(t) {
        return e(t).uri()
    }
    ,
    e.fn.uri = function(e) {
        var n = this.first()
          , i = n.get(0)
          , s = r(i);
        if (!s)
            throw Error('Element "' + i.nodeName + '" does not have either property: href, src, action');
        if (void 0 !== e) {
            var o = n.data("uri");
            if (o)
                return o.href(e);
            e instanceof t || (e = t(e))
        } else {
            if (e = n.data("uri"))
                return e;
            e = t(n.attr(s))
        }
        return e._dom_element = i,
        e._dom_attribute = s,
        e.normalize(),
        n.data("uri", e),
        e
    }
    ,
    t.prototype.build = function(e) {
        if (this._dom_element)
            this._string = t.build(this._parts),
            this._deferred_build = !1,
            this._dom_element.setAttribute(this._dom_attribute, this._string),
            this._dom_element[this._dom_attribute] = this._string;
        else if (!0 === e)
            this._deferred_build = !0;
        else if (void 0 === e || this._deferred_build)
            this._string = t.build(this._parts),
            this._deferred_build = !1;
        return this
    }
    ;
    var a, f = /^([a-zA-Z]+)\s*([\^\$*]?=|:)\s*(['"]?)(.+)\3|^\s*([a-zA-Z0-9]+)\s*$/;
    return a = e.expr.createPseudo ? e.expr.createPseudo(function(e) {
        return function(t) {
            return i(t, e)
        }
    }) : function(e, t, n) {
        return i(e, n[3])
    }
    ,
    e.expr[":"].uri = a,
    {}
}),
function() {
    var Turbolinks, anchoredLink, applyFetchReplacement, assets, assetsChanged, browserCompatibleDocumentParser, browserSupportsPushState, cacheCurrentPage, changePage, constrainPageCacheTo, createDocument, crossOriginLink, currentState, executeScriptTags, extractAssets, extractLink, extractTitleAndBody, fetchHistory, fetchReplacement, getReferrer, handleClick, ignoreClick, initialized, installClickHandlerLast, intersection, noTurbolink, nonHtmlLink, nonStandardClick, pageBookmarks, pageCache, recallScrollPosition, referer, reflectNewUrl, reflectRedirectedUrl, rememberCurrentAssets, rememberCurrentState, rememberCurrentUrl, rememberInitialPage, resetScrollPosition, samePageLink, triggerEvent, visit, visitAndSaveBookmark, visitOrLoadBookmark, willVisit, indexOf = [].indexOf || function(e) {
        for (var t = 0, n = this.length; t < n; t++)
            if (t in this && this[t] === e)
                return t;
        return -1
    }
    ;
    initialized = !1,
    currentState = null,
    referer = document.location.href,
    assets = [],
    pageCache = [],
    pageBookmarks = {},
    createDocument = null,
    Turbolinks = {},
    this.pageCache = pageCache,
    visit = function(e) {
        return browserSupportsPushState ? (cacheCurrentPage(),
        reflectNewUrl(e),
        fetchReplacement(e)) : document.location.href = e
    }
    ,
    visitAndSaveBookmark = function(e, t) {
        return browserSupportsPushState ? (cacheCurrentPage(t),
        reflectNewUrl(e),
        fetchReplacement(e)) : document.location.href = e
    }
    ,
    visitOrLoadBookmark = function(e, t) {
        var n;
        return browserSupportsPushState ? (cacheCurrentPage(),
        reflectNewUrl(e),
        n = pageBookmarks[t],
        n ? (changePage(n.title, createDocument("<html>" + n.body + "</html>").body),
        recallScrollPosition(n),
        n.popCallback && n.popCallback(),
        triggerEvent("page:restore"),
        pageBookmarks[t] = null) : fetchReplacement(e)) : document.location.href = e
    }
    ,
    willVisit = function(e) {
        return browserSupportsPushState ? (cacheCurrentPage(),
        reflectNewUrl(e),
        currentState = window.history.state,
        ga_track("pageview")) : document.location.href = e
    }
    ,
    fetchReplacement = function(e) {
        var t;
        return triggerEvent("page:fetch"),
        t = new XMLHttpRequest,
        t.open("GET", e, !0),
        t.setRequestHeader("Accept", "text/html, application/xhtml+xml, application/xml"),
        t.setRequestHeader("X-XHR-Referer", referer),
        t.onload = function(n) {
            return function() {
                if (window.location.href === e)
                    return Turbolinks.__atomgas_doLater__(e, function() {
                        return applyFetchReplacement(t)
                    })
            }
        }(this),
        t.onabort = function() {}
        ,
        t.send()
    }
    ,
    applyFetchReplacement = function(e) {
        var t;
        return t = createDocument(e.responseText),
        assetsChanged(t) ? document.location.href = url : (changePage.apply(null, extractTitleAndBody(t)),
        reflectRedirectedUrl(e),
        resetScrollPosition(),
        triggerEvent("page:load"))
    }
    ,
    Turbolinks.__atomgas_doLater__ = function(e) {
        return e()
    }
    ,
    fetchHistory = function(e) {
        var t;
        return cacheCurrentPage(),
        (t = pageCache[e.position]) ? (changePage(t.title, createDocument("<html>" + t.body + "</html>").body),
        recallScrollPosition(t),
        t.popCallback && t.popCallback(),
        triggerEvent("page:restore")) : fetchReplacement(document.location.href)
    }
    ,
    cacheCurrentPage = function(e) {
        return rememberInitialPage(),
        pageCache[currentState.position] = {
            url: document.location.href,
            body: document.body.outerHTML,
            title: document.title,
            positionY: window.pageYOffset,
            positionX: window.pageXOffset
        },
        $(".turbolink_scroller").length > 0 && (pageCache[currentState.position].positionXTS = $(".turbolink_scroller").scrollLeft(),
        pageCache[currentState.position].positionYTS = $(".turbolink_scroller").scrollTop()),
        this.TurbolinkPopCallback && (pageCache[currentState.position].popCallback = this.TurbolinkPopCallback,
        this.TurbolinkPopCallback = null),
        e && (pageBookmarks[e] = pageCache[currentState.position]),
        constrainPageCacheTo(10)
    }
    ,
    constrainPageCacheTo = function(e) {
        return delete pageCache[currentState.position - e]
    }
    ,
    changePage = function(e, t) {
        return document.title = e,
        document.documentElement.replaceChild(t, document.body),
        executeScriptTags(),
        currentState = window.history.state,
        triggerEvent("page:change")
    }
    ,
    executeScriptTags = function() {
        var i, len, ref, ref1, results, script;
        ref = document.body.getElementsByTagName("script"),
        results = [];
        for (i = 0,
        len = ref.length; i < len; i++)
            script = ref[i],
            ((ref1 = script.type) === "" || ref1 === "text/javascript") && results.push(eval(script.innerHTML));
        return results
    }
    ,
    reflectNewUrl = function(e) {
        if (e !== document.location.href)
            return referer = document.location.href,
            window.history.pushState({
                turbolinks: !0,
                position: currentState.position + 1
            }, "", e)
    }
    ,
    reflectRedirectedUrl = function(e) {
        var t;
        if (t = e.getResponseHeader("X-XHR-Current-Location"))
            return window.history.replaceState(currentState, "", t)
    }
    ,
    rememberCurrentUrl = function() {
        return window.history.replaceState({
            turbolinks: !0,
            position: window.history.length - 1
        }, "", document.location.href)
    }
    ,
    rememberCurrentState = function() {
        return currentState = window.history.state
    }
    ,
    rememberCurrentAssets = function() {
        return assets = extractAssets(document)
    }
    ,
    rememberInitialPage = function() {
        if (!initialized)
            return rememberCurrentUrl(),
            rememberCurrentState(),
            createDocument = browserCompatibleDocumentParser(),
            initialized = !0
    }
    ,
    recallScrollPosition = function(e) {
        window.scrollTo(e.positionX, e.positionY);
        if ((e.positionXTS || e.positionYTS) && $(".turbolink_scroller").length > 0)
            return $(".turbolink_scroller").scrollLeft(e.positionXTS),
            $(".turbolink_scroller").scrollTop(e.positionYTS)
    }
    ,
    resetScrollPosition = function() {
        return window.scrollTo(0, 0)
    }
    ,
    triggerEvent = function(e) {
        var t;
        return t = document.createEvent("Events"),
        t.initEvent(e, !0, !0),
        document.dispatchEvent(t)
    }
    ,
    extractAssets = function(e) {
        var t, n, r, i, s;
        i = e.head.childNodes,
        s = [];
        for (t = 0,
        n = i.length; t < n; t++)
            r = i[t],
            (r.src || r.href) && s.push(r.src || r.href);
        return s
    }
    ,
    assetsChanged = function(e) {
        return intersection(extractAssets(e), assets).length !== assets.length,
        !1
    }
    ,
    intersection = function(e, t) {
        var n, r, i, s, o;
        e.length > t.length && (i = [t, e],
        e = i[0],
        t = i[1]),
        s = [];
        for (n = 0,
        r = e.length; n < r; n++)
            o = e[n],
            indexOf.call(t, o) >= 0 && s.push(o);
        return s
    }
    ,
    extractTitleAndBody = function(e) {
        var t;
        return t = e.querySelector("title"),
        [t != null ? t.textContent : void 0, e.body]
    }
    ,
    browserCompatibleDocumentParser = function() {
        var e, t, n, r;
        return e = function(e) {
            return (new DOMParser).parseFromString(e, "text/html")
        }
        ,
        t = function(e) {
            var t;
            return t = document.implementation.createHTMLDocument(""),
            t.open("replace"),
            t.write(e),
            t.close,
            t
        }
        ,
        window.DOMParser && (r = e("<html><body><p>test")),
        (r != null ? (n = r.body) != null ? n.childNodes.length : void 0 : void 0) === 1 ? e : t
    }
    ,
    installClickHandlerLast = function(e) {
        if (!e.defaultPrevented)
            return document.removeEventListener("click", handleClick),
            document.addEventListener("click", handleClick)
    }
    ,
    handleClick = function(e) {
        var t;
        if (!e.defaultPrevented) {
            t = extractLink(e);
            if (t != null && t.nodeName === "A" && !ignoreClick(e, t))
                return document.getElementsByTagName("body")[0].className.match(/no-replace-state/) && (initialized = !0),
                t.getAttribute("data-save-bookmark") ? visitAndSaveBookmark(t.href, t.getAttribute("data-save-bookmark")) : t.getAttribute("data-load-bookmark") ? visitOrLoadBookmark(t.href, t.getAttribute("data-load-bookmark")) : visit(t.href),
                e.preventDefault()
        }
    }
    ,
    extractLink = function(e) {
        var t;
        t = e.target;
        while (t != null && t !== document && t.nodeName !== "A")
            t = t.parentNode;
        return t
    }
    ,
    samePageLink = function(e) {
        return e.href === document.location.href
    }
    ,
    crossOriginLink = function(e) {
        return location.protocol !== e.protocol || location.host !== e.host
    }
    ,
    anchoredLink = function(e) {
        return (e.hash && e.href.replace(e.hash, "")) === location.href.replace(location.hash, "") || e.href === location.href + "#"
    }
    ,
    nonHtmlLink = function(e) {
        return e.href.match(/\.[a-z]+(\?.*)?$/g) && !e.href.match(/\.html?(\?.*)?$/g)
    }
    ,
    noTurbolink = function(e) {
        var t;
        while (!t && e !== document)
            t = e.getAttribute("data-no-turbolink") != null,
            e = e.parentNode;
        return t
    }
    ,
    nonStandardClick = function(e) {
        return e.which > 1 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey
    }
    ,
    ignoreClick = function(e, t) {
        return crossOriginLink(t) || anchoredLink(t) || nonHtmlLink(t) || noTurbolink(t) || nonStandardClick(e)
    }
    ,
    getReferrer = function() {
        return referer === document.location.href ? "" : referer
    }
    ,
    browserSupportsPushState = window.history && window.history.pushState && window.history.replaceState && window.history.state !== void 0,
    browserSupportsPushState && (rememberCurrentAssets(),
    document.addEventListener("click", installClickHandlerLast, !0),
    window.addEventListener("popstate", function(e) {
        var t;
        if ((t = e.state) != null ? t.turbolinks : void 0)
            return fetchHistory(e.state)
    })),
    this.Turbolinks = Turbolinks,
    this.Turbolinks.visit = visit,
    this.Turbolinks.willVisit = willVisit,
    this.Turbolinks.fetchHistory = fetchHistory,
    this.Turbolinks.getReferrer = getReferrer
}
.call(this),
function() {
    jQuery(function(e) {
        var t, n, r, i;
        if (e("time b")[0] != null) {
            t = e("time").data("timezone-offset") * 1e3;
            if (e("body").hasClass("eu") || e("body").hasClass("japan"))
                e("body").hasClass("shop-closed") || e("body").hasClass("products") || e("body").hasClass("cart") || e("body").hasClass("cart_page") ? e("#time-zone-name").text(e("body").hasClass("eu") ? "CET" : "TYO") : (t = realGEROffset * 1e3,
                e("#time-zone-name").text("GER"));
            return n = null,
            i = function(e, t) {
                var n;
                return t == null && (t = 2),
                "" + function() {
                    var r, i, s;
                    s = [];
                    for (n = r = 0,
                    i = t - ("" + e).length; 0 <= i ? r < i : r > i; n = 0 <= i ? ++r : --r)
                        s.push(0);
                    return s
                }().join("") + e
            }
            ,
            r = function() {
                var s, o, u, a, f, l;
                return s = new Date,
                l = s.getTimezoneOffset() * 60 * 1e3,
                s.setTime(s.getTime() + t + l),
                o,
                e("body").hasClass("eu") ? o = i(s.getDate()) + "/" + i(s.getMonth() + 1) + "/" + s.getFullYear() : o = i(s.getMonth() + 1) + "/" + i(s.getDate()) + "/" + s.getFullYear(),
                a = s.getHours(),
                f = a === 12 ? "12" : i(a % 12),
                u = f + ":" + i(s.getMinutes()) + (a >= 12 ? "pm" : "am"),
                e("time b").html(o + " " + u),
                n = window.setTimeout(r, 1e4)
            }
            ,
            r(),
            e(document).one("page:fetch", function() {
                return window.clearTimeout(n)
            })
        }
    })
}
.call(this),
function() {
    var e, t, n;
    this.Turbolinks.__atomgas_doLater__ = function(e, t) {
        return $("body, body *").promise().done(function() {
            return t()
        })
    }
    ,
    e = 500,
    t = 500,
    n = {
        init: function() {
            var e;
            this.setupTransitions(),
            $(document).on("page:fetch", function(e) {
                return function() {
                    return e.performfadeOut()
                }
            }(this)).on("page:change", function(e) {
                return function() {
                    return n.setCurrentLangToggle(n.currentLang()),
                    e.storeLocation(),
                    e.performfadeIn()
                }
            }(this)),
            this.storeLocation(),
            n.setCurrentLangToggle(n.currentLang()),
            (e = location.search.match(/utm_medium=([a-z]+)/)) && $.cookie("origin", e[1]);
            if (document.referrer.match(/facebook.com\//))
                return $.cookie("origin", "facebook")
        },
        GBPtoEUR: function(e) {
            return e * EU_RATE
        },
        addDelim: function(e, t) {
            return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, t)
        },
        setCurrentLang: function(e) {
            return $.cookie("lang", e, {
                path: "/"
            }),
            $.cookie("langChanged", 1, {
                path: "/"
            })
        },
        currentLang: function() {
            var e;
            return e = "en",
            $.cookie("lang") === null ? e : $.cookie("lang")
        },
        storeLocation: function() {
            return this.previousLocationPathname = this.currentLocationPathname || location.pathname,
            this.currentLocationPathname = location.pathname
        },
        showLanguageSetter: function(e, t) {
            var r, i;
            return r = $('<ul id="language-setter"><li class="en">UK</li><li class="de">DE</li><li class="fr">FR</li></ul>'),
            r.attr("class", n.currentLang()),
            $("body").append(r),
            i = $("#language-setter"),
            i.css({
                top: e - i.height() - 6,
                left: t
            }),
            i.animate({
                opacity: 1
            }, 100, function() {
                return $("body").unbind("click.langSetter"),
                $("body").on("click.langSetter", function(e) {
                    return function(e) {
                        if ($(e.target).attr("id") === "current-lang") {
                            i.css("opacity") === "1" && (console.log(i.css("opacity")),
                            n.hideLanguageSetter());
                            return
                        }
                        return n.hideLanguageSetter(),
                        e.stopImmediatePropagation(),
                        !1
                    }
                }(this))
            }),
            i.find("li").click(function() {
                var e;
                return e = $(this).attr("class").toLowerCase(),
                n.setCurrentLang(e),
                n.setCurrentLangToggle(e),
                n.hideLanguageSetter(),
                window.location.reload(),
                !1
            })
        },
        setCurrentLangToggle: function(e) {
            var t;
            return t = e.toUpperCase(),
            t === "EN" && (t = "UK"),
            $("#current-lang").attr("class", e.toLowerCase()).text(t)
        },
        hideLanguageSetter: function() {
            return $("body").unbind("click.langSetter"),
            $("#language-setter").animate({
                opacity: 0
            }, 0, function() {
                return $(this).remove()
            })
        },
        showCookieNotice: function() {
            var e, t;
            if ($.cookie("hasShownCookieNotice") === null)
                return $.cookie("hasShownCookieNotice", 1, {
                    expires: 365
                }),
                e = $("#eu_cookie_notice"),
                t = e.height(),
                e.css({
                    top: 0,
                    height: 0
                }).animate({
                    height: t
                }, 400, function(t) {
                    return function() {
                        return e.css("z-index", 2e3)
                    }
                }(this)),
                e.find(".close").click(function(e) {
                    return function() {
                        return e.hideCookieNotice(),
                        !1
                    }
                }(this))
        },
        hideCookieNotice: function() {
            return $("#eu_cookie_notice").animate({
                height: 0
            }, "fast", function(e) {
                return function() {
                    return $(e).remove()
                }
            }(this))
        },
        addTransition: function(e, t) {
            return t = $.extend({
                from: /.*/,
                to: /.*/
            }, t, {
                label: e
            }),
            this._transitions.push(t)
        },
        setupTransitions: function() {
            var r;
            return this._transitions = [],
            r = {
                label: "DEFAULT",
                fadeOut: function(t) {
                    return function() {
                        return $("#wrap > *").animate({
                            opacity: 0
                        }, e, function() {
                            return $("#wrap").addClass("loading")
                        }),
                        {}
                    }
                }(this),
                fadeIn: function(t) {
                    t || (t = {}),
                    n.performExtraFadeIns(t),
                    $("#wrap").css({
                        opacity: 1
                    }).removeClass("loading"),
                    $("#wrap > *:not(footer,object,embed,.arrow)").css({
                        opacity: 0
                    }).animate({
                        opacity: 1
                    }, e);
                    if (t.headerAndFooter == null)
                        return $("header, footer").animate({
                            opacity: 1
                        }, e)
                }
            },
            location.host.split(".")[0] !== "archive" && (this.addTransition("HOME -> *", {
                from: /^\/(index)?$/,
                fadeOut: function() {
                    return $("header, #background-image, #wrap > *").animate({
                        opacity: 0
                    }, t - 100),
                    {
                        background: function() {
                            var e;
                            return e = $("body").css("backgroundColor"),
                            $("body").css({
                                backgroundColor: "#000"
                            }).animate({
                                backgroundColor: "#FFF"
                            }, t)
                        },
                        headerAndFooter: function() {
                            return $("header, footer").css({
                                opacity: 0
                            }).animate({
                                opacity: 1
                            }, e)
                        }
                    }
                }
            }),
            this.addTransition("* -> HOME", {
                to: /^\/(index)?$/,
                fadeOut: "header, footer, #wrap > *",
                fadeIn: function() {
                    return $("header").show(),
                    $("body").css({
                        opacity: 0,
                        backgroundColor: "#FFF"
                    }).animate({
                        opacity: 1,
                        backgroundColor: "#000"
                    }, t),
                    r.fadeIn()
                }
            })),
            this.addTransition("SHOP ROUTES", {
                to: /^\/shop\/(cart|sizing|terms|faq|privacy)$/,
                fadeOut: r.fadeOut
            }),
            this.addTransition("PREVIEW ALL -> DETAIL", {
                from: /^\/previews\/[^\/]+\/all/,
                to: /^(?!\/previews\/[^\/]+\/all)/,
                fadeOut: "#wrap > *, footer, header"
            }),
            this.addTransition("SHOP/PREVIEW ALL -> *", {
                from: /^(\/shop\/all)|(\/previews\/[^\/]+\/all)/,
                fadeOut: "#wrap > *, footer",
                fadeIn: "#wrap > *, footer"
            }),
            this.addTransition("PRODUCT -> PRODUCT", {
                from: /^\/shop\/(?!all)([^\/]+)\/([^\/]+).*$/,
                to: /^\/shop\/(?!all)([^\/]+)\/([^\/]+)$/,
                fadeOut: "article, #details",
                fadeIn: "article, #details",
                loader: "#wrap"
            }),
            this.addTransition("PRODUCT -> STYLE", {
                from: /^\/shop\/(?!all)[^\/]+\/([^\/]+).*$/,
                to: /^\/shop\/(?!all)([^\/]+)\/([^\/]+)\/([^\/]+)$/,
                fadeOut: "",
                fadeIn: function() {
                    return $("article figure img").css({
                        opacity: 1
                    })
                },
                loader: "article figure img"
            }),
            this.addTransition("LOOKBOOK -> PREVIEW", {
                from: /^\/lookbooks/,
                to: /^\/previews/,
                fadeOut: "#wrap > *, footer, header",
                fadeIn: "#wrap > *, footer, header"
            }),
            this.addTransition("* -> LOGO FOOTER", {
                to: /^(\/previews\/\w+\/(?!all).*)|(\/news\/\w+\/images)|(\/random\/\w+)|(\/lookbooks)|(\/lookbook\/\d+)/,
                fadeOut: "#wrap > *:not(footer), header, body > footer"
            }),
            this.addTransition("* -> FOOTER CHANGED", {
                from: /^(?!(\/news)|(\/stores)|(\/about)|(\/mailinglist)|(\/contact))/,
                to: /^(\/news)|(\/stores)|(\/about)/,
                fadeOut: "#wrap > *, footer",
                fadeIn: "#wrap > *, footer"
            }),
            this.addTransition("* -> FOOTER CHANGED 1", {
                from: /^(\/news)|(\/stores)|(\/about)|(\/mailinglist)|(\/contact)/,
                to: /^(\/shop)|(\/collections)|(\/previews)/,
                fadeOut: "#wrap > *, footer",
                fadeIn: "#wrap > *, footer"
            }),
            this.addTransition("DEFAULT", r)
        },
        performExtraFadeIns: function(e) {
            return $.each(e, function(e, t) {
                return t.call()
            })
        },
        performTransition: function(t, r, i) {
            var s, o, u;
            s = r[t];
            if ($.type(s) === "string")
                return o = 1,
                u = 0,
                t === "fadeOut" ? (u = 1,
                o = 0) : $(r.loader || "#wrap").removeClass("loading"),
                i && n.performExtraFadeIns(i),
                $(s).css({
                    opacity: u
                }).animate({
                    opacity: o
                }, e, function() {
                    if (t === "fadeOut")
                        return $(r.loader || "#wrap").addClass("loading")
                }),
                {};
            if ($.type(s) === "function")
                return s(i);
            throw s + " was not string or function"
        },
        transitionFor: function(e, t, n) {
            var r, i, s, o;
            s = this._transitions;
            for (r = 0,
            i = s.length; r < i; r++) {
                o = s[r];
                if (o[e] != null && o.from.test("" + t) && o.to.test("" + n))
                    return o
            }
        },
        performfadeOut: function() {
            var e;
            return e = this.transitionFor("fadeOut", this.currentLocationPathname, location.pathname),
            this.extraFadeIns = this.performTransition("fadeOut", e)
        },
        performfadeIn: function() {
            var e;
            return e = this.transitionFor("fadeIn", this.previousLocationPathname, location.pathname),
            this.performTransition("fadeIn", e, this.extraFadeIns)
        }
    },
    jQuery(function() {
        if (this.Supreme == null)
            return n.init(),
            this.Supreme = n
    })
}
.call(this),
function() {
    var e, t, n, r, i = [].slice;
    t = /^([^\/@\s\\]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i,
    n = /^\s?$/,
    e = function(e) {
        var r;
        return r = e.val(),
        /email/.test(e.attr("id")) ? t.test(r) : !n.test(r)
    }
    ,
    r = function() {
        var t, n, s, o, u, a, f;
        f = 1 <= arguments.length ? i.call(arguments, 0) : [],
        r = !0;
        for (s = 0,
        u = f.length; s < u; s++)
            a = f[s],
            o = $("#" + a),
            n = (t = o.data("error-display")) ? $(t) : o.parent(),
            e(o) ? n.removeClass("error") : (r = !1,
            n.addClass("error"));
        return r
    }
    ,
    this.Validator = {
        valid: r
    }
}
.call(this),
function() {
    var e = function(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    };
    this.BaseImageViewer = function() {
        function t(t, n, r, i, s) {
            var o, u;
            this.controller = t,
            this.imageSelector = n,
            this.data = r,
            this.imageLoader = i,
            this.mouseUpListener = e(this.mouseUpListener, this),
            this.mouseDownListener = e(this.mouseDownListener, this),
            this.mouseMoveListener = e(this.mouseMoveListener, this),
            this.imageDidLoad = e(this.imageDidLoad, this),
            this.showImage = e(this.showImage, this),
            this.showInitialImage = e(this.showInitialImage, this),
            this.setImageData = e(this.setImageData, this),
            this.initialImageLoaded = e(this.initialImageLoaded, this),
            this.clickListener = e(this.clickListener, this),
            o = {
                centerSmallImageVertically: !1,
                smallImageContainer: "#container",
                smallImageLoaderContainer: "#container",
                fadeSmallImage: !0,
                smallImagePadding: 40
            },
            this.options = $.extend(o, s || {}),
            this._mousePositionActionsEnabled = !0,
            this.urlsLoaded = [],
            BaseImageController.isTouchDevice() || ($("#wrap #container").live("mousemove", this.mouseMoveListener),
            $("#wrap #container").live("mousedown", this.mouseDownListener),
            $("#wrap #container").live("mouseup", this.mouseUpListener),
            $("#wrap #container").live("click", this.clickListener),
            $("#wrap").find(".controls").live("mousemove", function() {
                return $("#cursor-image").hide()
            }),
            $("#wrap").find(".button").live("mousemove", function() {
                return $("#cursor-image").hide()
            })),
            $("footer").hover(function(e) {
                return function() {
                    return e.setMousePositionActionsEnabled(!1)
                }
            }(this), function(e) {
                return function(t) {
                    return e.setMousePositionActionsEnabled(!0)
                }
            }(this)),
            this.spinnerPromise = new $.Deferred,
            this.spinnerPromise.done(function(e) {
                return function() {
                    return $(e.options.smallImageContainer).addClass("loading")
                }
            }(this)),
            setTimeout(function(e) {
                return function() {
                    return e.spinnerPromise.resolve()
                }
            }(this), 100),
            u = $(this.imageSelector)[0],
            $.browser.msie && (u.src = u.src + "?forceLoadEvent"),
            u != null && (u.onload = this.initialImageLoaded),
            this.imageLoader.imageLoaded(u) && this.initialImageLoaded()
        }
        return t.prototype.clickListener = function(e) {
            e.preventDefault();
            switch (this.mouseAction(e)) {
            case "prevImage":
                this.controller.showPrevImage();
                break;
            case "nextImage":
                this.controller.showNextImage();
                break;
            case "zoomImage":
                this.controller.tryShowingLightbox()
            }
            return this.controller.cursorForAction(this.mouseAction(e))
        }
        ,
        t.prototype.destroy = function() {
            var e;
            return $(this.imageSelector).off("mouseover"),
            $(this.imageSelector).off("mouseout"),
            $(document).off("mousemove"),
            $(document).off("click"),
            $("footer").off("hover"),
            (e = this.imageLoader) != null ? e.cancel() : void 0
        }
        ,
        t.prototype.initialImageLoaded = function() {
            var e;
            this.spinnerPromise.reject(),
            e = $(this.imageSelector);
            if (e[0] != null)
                return this.showInitialImage()
        }
        ,
        t.prototype.setImageData = function(e) {
            var t, n;
            return n = e.naturalWidth || e.width,
            t = e.naturalHeight || e.height,
            $(e).data("width", n).data("height", t)
        }
        ,
        t.prototype.showInitialImage = function() {
            var e;
            return e = $(this.imageSelector),
            this.setImageData(e[0]),
            this.imageDidLoad($(this.imageSelector)[0]),
            e.animate({
                opacity: 1
            }),
            $(this.options.smallImageContainer).removeClass("loading"),
            $("#wrap footer").show(),
            this.imageLoader.preloadAll()
        }
        ,
        t.prototype.on = function(e, t) {
            return $(this).bind(e, t)
        }
        ,
        t.prototype.off = function(e, t) {
            return $(this).unbind(e, t)
        }
        ,
        t.prototype.setMousePositionActionsEnabled = function(e) {
            this._mousePositionActionsEnabled = e
        }
        ,
        t.prototype.showImage = function(e) {
            var t;
            t = this.controller.zoomedImageUrl(this.index) || this.controller.imageUrl(this.index);
            if ($(this.imageSelector).attr("src") !== t)
                return this.imageLoader.loadImage({
                    url: t,
                    selector: this.imageSelector,
                    displayCompletedCallback: function(e) {
                        return function(t) {
                            return e.controller.isChangingImage = !1
                        }
                    }(this),
                    loadingCompletedCallback: this.imageDidLoad,
                    loadingSelector: this.options.smallImageLoaderContainer,
                    noFadeOut: !this.options.fadeSmallImage,
                    noFadeIn: !this.options.fadeSmallImage
                })
        }
        ,
        t.prototype.imageDidLoad = function(e) {
            return $("#wrap img").css("visibility", "visible"),
            this.imageLoader.didLoad(e)
        }
        ,
        t.prototype.mouseAction = function(e) {
            if (!this._mousePositionActionsEnabled)
                return "noop";
            if (e.pageX < $(window).width() / 3) {
                if (this.controller.hasPrevImage())
                    return "prevImage"
            } else if (e.pageX > $(window).width() / 3 * 2) {
                if (this.controller.hasNextImage())
                    return "nextImage"
            } else if (this.controller.hasZoom())
                return "zoomImage"
        }
        ,
        t.prototype.mouseMoveListener = function(e) {
            return this.controller.setCursorImageLocation(e),
            this.controller.cursorForAction(this.mouseAction(e))
        }
        ,
        t.prototype.mouseDownListener = function(e) {
            var t;
            t = $("#cursor-image");
            if (t[0] != null && typeof t.attr("class") != "undefined")
                return t.attr("class", t.attr("class").replace("-down", "")),
                t.attr("class", t.attr("class") + "-down")
        }
        ,
        t.prototype.mouseUpListener = function(e) {
            var t;
            t = $("#cursor-image");
            if (t[0] != null && typeof t.attr("class") != "undefined")
                return t.attr("class", t.attr("class").replace("-down", ""))
        }
        ,
        t
    }()
}
.call(this),
function() {
    var e = function(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    }
      , t = function(e, t) {
        function i() {
            this.constructor = e
        }
        for (var r in t)
            n.call(t, r) && (e[r] = t[r]);
        return i.prototype = t.prototype,
        e.prototype = new i,
        e.__super__ = t.prototype,
        e
    }
      , n = {}.hasOwnProperty;
    this.PreviewImageViewer = function(n) {
        function r(t, n, i, s, o) {
            this.setPageDimensions = e(this.setPageDimensions, this),
            this.resizeImage = e(this.resizeImage, this),
            this.showImage = e(this.showImage, this),
            this.imageDidLoad = e(this.imageDidLoad, this),
            this.calculatePageDimensions = e(this.calculatePageDimensions, this),
            this.maxDefaultHeight = e(this.maxDefaultHeight, this),
            r.__super__.constructor.call(this, t, n, i, s, o)
        }
        return t(r, n),
        r.prototype.maxDefaultHeight = function() {
            var e, t;
            return e = $("#container").data("images"),
            t = 700,
            $.each(e, function(e) {
                return function(e, n) {
                    if (n.customDefaultHeight > t)
                        return t = n.customDefaultHeight
                }
            }(this)),
            t
        }
        ,
        r.prototype.calculatePageDimensions = function() {
            var e, t;
            return e = {},
            t = this.maxDefaultHeight() + 75,
            $(window).height() > 800 ? (e.wrapHeight = $(window).height() - 25,
            e.wrapHeight > t && (e.wrapHeight = t),
            e.headerNegativeMargin = -((e.wrapHeight + 30) / 2)) : (e.wrapHeight = $(window).height() - 65,
            e.headerNegativeMargin = -((e.wrapHeight + 5) / 2)),
            e.containerHeight = e.wrapHeight - 55,
            e.containerMarginBottom = e.containerHeight / 30,
            e
        }
        ,
        r.prototype.imageDidLoad = function(e) {
            var t, n, i;
            return i = this.calculatePageDimensions(),
            this.setPageDimensions(i),
            this.resizeImage(e, i),
            n = $(e).hasClass("movie") ? $(e).height() : e.height,
            t = (i.containerHeight - n) / 2,
            $(e).css({
                marginTop: t
            }),
            r.__super__.imageDidLoad.call(this, e)
        }
        ,
        r.prototype.showImage = function(e) {
            var t;
            return t = this.controller.zoomedImageUrl(this.index) || this.controller.imageUrl(this.index),
            $(this.imageSelector).attr("src") !== t && t.match(/\.(mp4|flv)$/) ? this.imageLoader.loadVideo({
                url: t,
                height: this.data[e].customDefaultHeight,
                width: this.data[e].customDefaultWidth,
                selector: this.imageSelector,
                displayCompletedCallback: function(e) {
                    return function(t) {
                        return e.controller.isChangingImage = !1
                    }
                }(this),
                loadingCompletedCallback: this.imageDidLoad,
                loadingSelector: this.options.smallImageLoaderContainer
            }) : r.__super__.showImage.call(this, e)
        }
        ,
        r.prototype.mouseAction = function(e) {
            if (!($("div.movie:visible").length > 0))
                return r.__super__.mouseAction.call(this, e);
            if (!this._mousePositionActionsEnabled)
                return "noop";
            if (e.pageX < $("div.movie:visible").offset().left) {
                if (this.controller.hasPrevImage())
                    return "prevImage"
            } else if (e.pageX > $("div.movie:visible").offset().left + $("div.movie:visible").width() && this.controller.hasNextImage())
                return "nextImage"
        }
        ,
        r.prototype.resizeImage = function(e, t) {
            var n, r, i;
            return i = this.controller.getImageDataRecord(e) || {},
            r = $(window).width() - 42,
            i.customDefaultWidth ? r = i.customDefaultWidth < r ? i.customDefaultWidth : r : i.customDefaultHeight || r > 1200 && (r = 1200),
            n = t.containerHeight - 10,
            i.customDefaultHeight ? n = i.customDefaultHeight < n ? i.customDefaultHeight || n : n : i.customDefaultWidth || n > 700 && (n = 700),
            BaseImageController.resizeImageToAspectFit(e, r, n)
        }
        ,
        r.prototype.setPageDimensions = function(e) {
            return $("#wrap").css({
                height: e.wrapHeight
            }),
            $("#container").css({
                marginBottom: e.containerMarginBottom,
                height: e.containerHeight
            }),
            $("#header").css({
                marginTop: e.headerNegativeMargin,
                marginBottom: 0
            })
        }
        ,
        r
    }(this.BaseImageViewer)
}
.call(this),
function() {
    var e = function(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    }
      , t = function(e, t) {
        function i() {
            this.constructor = e
        }
        for (var r in t)
            n.call(t, r) && (e[r] = t[r]);
        return i.prototype = t.prototype,
        e.prototype = new i,
        e.__super__ = t.prototype,
        e
    }
      , n = {}.hasOwnProperty;
    this.PreviewTouchImageViewer = function(n) {
        function r(t, n, i, s, o, u) {
            this.swipeCallback = e(this.swipeCallback, this),
            this.setPageDimensions = e(this.setPageDimensions, this),
            this.displayVideo = e(this.displayVideo, this),
            this.showImage = e(this.showImage, this),
            this.sizeSlider = e(this.sizeSlider, this),
            this.resizeImage = e(this.resizeImage, this),
            this.positionAndAdjustFooter = e(this.positionAndAdjustFooter, this),
            this.positionAndAdjustHeader = e(this.positionAndAdjustHeader, this),
            this.orientationChanged = e(this.orientationChanged, this),
            this.isLandscape = e(this.isLandscape, this),
            this.imageLoaded = e(this.imageLoaded, this),
            this.clicked = e(this.clicked, this);
            var a, f, l, c, h;
            r.__super__.constructor.call(this, t, n, i, s, o),
            $("#wrap #container").on("click", this.clicked),
            a = $("#container[data-images]"),
            c = function() {
                var e, t, n, r;
                n = a.data("images"),
                r = [];
                for (e = 0,
                t = n.length; e < t; e += 1)
                    l = n[e],
                    (l.zoomedImageUrl || l.imageUrl).match(/\.(mp4|flv)$/) ? (h = l.customDefaultWidth || 1024,
                    f = l.customDefaultHeight || 576,
                    h > 938 && (f = Math.ceil(f * 938 / h)),
                    r.push('<li><div class="movie" id="img-main" style="height:' + f + 'px"><div id="tmp_video" data-video="' + (l.zoomedImageUrl || l.imageUrl).split("/").reverse()[0] + '"></div></div>')) : r.push('<li><img data-src="' + (l.zoomedImageUrl || l.imageUrl) + '"></li>');
                return r
            }(),
            a.html('<div id="slider"><ul>' + c.join("") + "</ul></div>"),
            this.length = a.data("images").length,
            $.each(a.find("ul li img"), function(e) {
                return function(t, n) {
                    return n.onload = function() {
                        return e.imageLoaded(n)
                    }
                    ,
                    $(n).attr("src", $(n).data("src"))
                }
            }(this)),
            this.sizeSlider(),
            this.swipe = new Swipe(document.getElementById("slider"),{
                callback: this.swipeCallback
            }),
            $("#slider ul li").css({
                verticalAlign: "middle"
            }),
            this.swipe.slide(u, 0)
        }
        return t(r, n),
        r.prototype.isMobileBreakpointActive = function() {
            var e;
            return e = window.getComputedStyle(document.querySelector("body"), ":before").getPropertyValue("content").replace(/\"/g, ""),
            e
        }
        ,
        r.prototype.mouseAction = function(e) {
            var t;
            t = r.__super__.mouseAction.call(this, e);
            if (t)
                return t;
            if ($(e.target).is("#slider ul li img") && this.controller.hasZoom())
                return "zoomImage"
        }
        ,
        r.prototype.clicked = function(e) {
            switch (this.mouseAction(e)) {
            case "prevImage":
                return this.controller.backControlClicked(e);
            case "nextImage":
                return this.controller.forwardControlClicked(e);
            case "zoomImage":
            }
        }
        ,
        r.prototype.imageLoaded = function(e) {
            var t, n, r;
            return n = {
                width: $("#slider").width(),
                height: $("#slider").height()
            },
            this.positionAndAdjustHeader(),
            r = e.naturalWidth || e.width,
            t = e.naturalHeight || e.height,
            $(e).data("width", r).data("height", t),
            this.positionAndAdjustFooter(),
            this.resizeImage(e)
        }
        ,
        r.prototype.isLandscape = function() {
            return $(window).height() < $(window).width()
        }
        ,
        r.prototype.orientationChanged = function() {
            var e;
            return e = $("#container[data-images]"),
            $.each(e.find("ul li img"), function(e) {
                return function(e, t) {
                    return $(t).hide()
                }
            }(this)),
            this.sizeSlider(),
            this.positionAndAdjustHeader(),
            setTimeout(function(t) {
                return function() {
                    return $.each(e.find("ul li img"), function(e, n) {
                        return setTimeout(function() {
                            return t.resizeImage(n)
                        }, 0),
                        $(n).show(),
                        $(n).parent().css({
                            verticalAlign: "middle"
                        })
                    })
                }
            }(this), 0)
        }
        ,
        r.prototype.positionAndAdjustHeader = function() {
            var e, t, n;
            n = {
                width: $("#slider").width(),
                height: $("#slider").height()
            },
            e = 85,
            t = ($(window).height() - n.height - e) / 2;
            if (!this.isMobileBreakpointActive())
                return $("#header").css({
                    height: t,
                    margin: 0
                })
        }
        ,
        r.prototype.positionAndAdjustFooter = function() {
            var e;
            return this.isMobileBreakpointActive() ? (this.isLandscape() ? e = 0 : e = $("#container").height() / 17.5,
            $("#wrap #container").css({
                height: "auto"
            }),
            $("#wrap footer").show()) : (this.isLandscape() ? e = $(window).height() * .06 : e = $("#container").height() / 17.5,
            $("#wrap #container").css({
                height: "auto",
                marginBottom: e
            }),
            $("#wrap footer").show())
        }
        ,
        r.prototype.resizeImage = function(e) {
            var t, n;
            if (!this.isMobileBreakpointActive())
                return n = {
                    width: $("#slider").width(),
                    height: $("#slider").height()
                },
                t = this.controller.getImageDataRecord(e),
                t && t.customDefaultWidth && t.customDefaultWidth < n.width && (n.width = t.customDefaultWidth),
                t && t.customDefaultHeight && t.customDefaultHeight < n.height && (n.height = t.customDefaultHeight),
                BaseImageController.resizeImageToAspectFit(e, n.width - 4, n.height),
                $(e).css({
                    marginTop: Math.max(0, $("#container[data-images]").height() / 2 - this.height / 2)
                })
        }
        ,
        r.prototype.sizeSlider = function() {
            var e;
            return this.isMobileBreakpointActive() ? (e = {
                width: $(window).width(),
                height: window.innerHeight - 200
            },
            e.height > 700 && (e.height = 700),
            $("#slider").css({
                width: e.width
            }),
            $("#slider ul li").css({
                width: e.width
            })) : (e = {
                width: $(window).width(),
                height: window.innerHeight - 130
            },
            e.height > 700 && (e.height = 700),
            $("#slider").css({
                width: e.width,
                height: e.height
            }),
            $("#slider ul").css({
                height: e.height
            }),
            $("#slider ul li").css({
                width: e.width,
                height: e.height
            }))
        }
        ,
        r.prototype.showImage = function(e) {
            this.swipe.slide(e),
            e < this.length - 1 && $("#tmp_video").length > 0 && jwplayer("tmp_video").remove();
            if (e === this.length - 1 && $("#tmp_video").length > 0)
                return this.displayVideo()
        }
        ,
        r.prototype.displayVideo = function() {
            var e, t;
            return t = $("#tmp_video").data("video"),
            e = jwplayer("tmp_video").setup({
                file: "http://d3o425gsw3lvjf.cloudfront.net/" + t,
                image: "http://images.supremenewyork.com/assets/splash/" + t.replace(/\.(mp4|flv)$/, ".jpg") + "?c=2",
                modes: [{
                    type: "flash",
                    src: "http://images.supremenewyork.com/assets/jwplayer/jw_player.swf"
                }, {
                    type: "html5"
                }],
                width: "100%",
                height: "100%",
                skin: "http://images.supremenewyork.com/assets/jwplayer/bekle/bekle.xml"
            })
        }
        ,
        r.prototype.setPageDimensions = function(e) {
            if (!this.isMobileBreakpointActive())
                return r.__super__.setPageDimensions.call(this, e)
        }
        ,
        r.prototype.swipeCallback = function() {
            this.controller.isChangingImage = !1,
            this.controller.index = this.swipe.getPos(),
            this.controller.pushImageState(),
            this.controller.adjustControls(this.controller.index),
            this.controller.index === this.length - 1 && $("#tmp_video").length > 0 && this.displayVideo();
            if (this.controller.index < this.length - 1 && $("#tmp_video").length > 0)
                return jwplayer("tmp_video").remove()
        }
        ,
        r
    }(this.PreviewImageViewer)
}
.call(this),
function() {
    jQuery(function(e) {
        return window.mapsHaveLoaded = !1,
        window.mapsLoadedCallback = function() {
            return window.mapsHaveLoaded = !0,
            e("body").trigger("mapsLoaded")
        }
        ,
        window.loadMaps = function() {
            var e;
            return e = document.createElement("script"),
            e.type = "text/javascript",
            e.src = "//maps.googleapis.com/maps/api/js?key=AIzaSyBWKeU3LuhGgegdTQa7u0LrPuR-8QeZ9mM&sensor=false&v=3.10&callback=mapsLoadedCallback",
            document.body.appendChild(e)
        }
    })
}
.call(this),
function() {
    var e = function(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    };
    this.Marque = function() {
        function t(t) {
            var n;
            this.selector = t,
            this.marquee = e(this.marquee, this),
            this.speed = 3,
            this.interval = 60,
            this.paused = !1,
            this.secondItemShown = !1,
            this.timeoutId = null,
            this.draggedItem = null,
            this.otherItem = null,
            this.draggedItemIndex = null,
            $("body").css({
                padding: 0
            }),
            n = $(this.selector),
            n.css({
                position: "absolute",
                left: $(window).width()
            }),
            n.after(n.clone().data("clone", !0).hide()),
            this.makeDraggable(this.selector),
            this.timeoutId = window.setTimeout(this.marquee, this.interval)
        }
        return t.prototype.stop = function() {
            return window.clearTimeout(this.timeoutId),
            $(this.selector).off("mousedown").off("mouseup").off("drag")
        }
        ,
        t.prototype.makeDraggable = function(e) {
            return $(e).draggable({
                axis: "x",
                stop: function(e) {
                    return function() {
                        return e.paused = !1,
                        !0
                    }
                }(this),
                start: function(e) {
                    return function(t) {
                        return e.draggedItem = $(t.target),
                        e.draggedItemIndex = e.draggedItem.index(),
                        e.otherItem = e.draggedItemIndex === 0 ? $(e.selector + ":last-of-type") : $(e.selector + ":first-of-type"),
                        e.paused = !0,
                        !0
                    }
                }(this)
            }).on("drag", function(e) {
                return function(t) {
                    return e.draggedItemIndex === 0 ? e.otherItem.css({
                        left: e.draggedItem.offset().left + e.draggedItem.width()
                    }) : e.otherItem.css({
                        left: e.draggedItem.offset().left - e.otherItem.width()
                    })
                }
            }(this))
        }
        ,
        t.prototype.marquee = function() {
            var e, t;
            return this.paused || (t = $(this.selector + ":first-of-type"),
            e = t.offset(),
            t.css({
                left: e.left - this.speed
            }),
            $(this.selector + ":last-of-type").css({
                left: e.left - this.speed + t.width()
            }),
            e.left < 0 && !this.secondItemShown && (this.secondItemShown = !0,
            $(this.selector).show()),
            e.left < 0 && e.left < -t.width() && (t.parent().append(t.remove()),
            this.makeDraggable($(this.selector + ":last-of-type")))),
            this.timeoutId = window.setTimeout(this.marquee, this.interval)
        }
        ,
        t
    }()
}
.call(this),
function() {
    jQuery(function() {
        var e, t;
        return $("#current-lang").click(function() {
            var e;
            return e = 10,
            Supreme.showLanguageSetter($(this).offset().top - e, $(this).offset().left - e)
        }),
        $("body").on("click", ".shop_link", function() {
            return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) ? window.location = "/mobile/" : Turbolinks.visit($(this).get(0).href),
            !1
        }),
        $("body").on("click", ".comment_release", function() {
            return $(".release_comment_form").slideToggle(),
            $(".release_comment_form_successful").hide(),
            !1
        }),
        $(document).on("submit", ".release_comment_form", function() {
            return $('.release_comment_form input[type="submit"]').prop("disabled", !0),
            $.post($(this).attr("action"), $(".release_comment_form").serialize(), function() {
                return $('.release_comment_form input[type="submit"]').prop("disabled", !1),
                $("#body").val(""),
                $(".release_comment_form").fadeOut(function() {
                    return $(".release_comment_form_successful").fadeIn(function() {
                        return setTimeout(function() {
                            if ($(".release_comment_form_successful").is(":visible"))
                                return $(".release_comment_form_successful").fadeOut()
                        }, 5e3)
                    })
                })
            }),
            !1
        }),
        $("body").on("click", ".approve_release", function() {
            return $(".approve_release").text() !== "Release approved" && $.post(this.href, function() {
                return $(".approve_release").text("release approved").css({
                    cursor: "text",
                    backgroundColor: "white",
                    color: "black"
                })
            }),
            !1
        }),
        $("body").on("click", ".lookbook_link", function() {
            return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) ? window.location = "/mobile/#lookbook" : Turbolinks.visit($(this).get(0).href),
            !1
        }),
        $("body").hasClass("eu") && $("body").hasClass("home") && setTimeout(function() {
            return Supreme.showCookieNotice()
        }, 1e3),
        $("input, textarea").placeholder(),
        t = function(e, t, n) {
            return t == null && (t = $(window).width()),
            n == null && (n = $(window).height()),
            e.width / t > e.height / n ? t = Math.round(n * (e.width / e.height)) : n = Math.round(t / (e.width / e.height)),
            e.width = t,
            e.height = n
        }
        ,
        $("body.home #background-image")[0] != null && (e = $("body.home #background-image")[0],
        e.onload = function() {
            return t(this),
            $(this).css({
                display: "block"
            }).animate({
                opacity: 1
            }, 1200)
        }
        ,
        e.src = $("#background-image").data("image"),
        $(e).css({
            opacity: 0
        }),
        $(window).on("resize", function() {
            return t($("#background-image")[0])
        }),
        $(document).one("page:change", function() {
            return $(window).off("resize")
        }),
        $("body.home header").fadeIn(1e3).css({
            display: "block"
        }),
        $("body.home #wrap").fadeIn(1e3),
        $("body.home").animate({
            backgroundColor: "#000"
        }, 1e3)),
        $("img").live("dragstart", function(e) {
            return e.preventDefault()
        })
    })
}
.call(this),
function() {
    jQuery(function(e) {
        return this.newsControlsCallback = function() {
            if (e(".news_container figure:not(.controls_callback_applied)")[0] != null)
                return e(".news_container figure:not(.controls_callback_applied)").each(function(t) {
                    return function(n, r) {
                        var i, s, o, u;
                        return e(r).addClass("controls_callback_applied"),
                        s = null,
                        n = null,
                        u = t.Turbolinks.willVisit,
                        o = function(t, o) {
                            var u;
                            return u = function(u) {
                                return n += t,
                                e(r).attr("data-index", n),
                                e(o).animate({
                                    opacity: 0
                                }, 500, function() {
                                    return this.onload = function() {
                                        return e(o).css("margin-top", (280 - e(o).height()) / 2 + "px"),
                                        e(this).animate({
                                            opacity: 1
                                        })
                                    }
                                    ,
                                    this.src = s[n]
                                }),
                                e(o).parent().attr("href") && e(o).parent().attr("href", e(o).parent().attr("href").replace(/image=\d+/, "image=" + n)),
                                i(n),
                                u.preventDefault(),
                                !1
                            }
                        }
                        ,
                        i = function(t) {
                            e(r).parent(".news_container").find(".controls a.back")[t < 1 ? "addClass" : "removeClass"]("hidden-placeholder"),
                            e(r).parent(".news_container").find(".controls a.forward")[t < s.length - 1 ? "removeClass" : "addClass"]("hidden-placeholder"),
                            e(r).parent(".news_container").find(".controls span").html(t + 1),
                            s[t].title != null && e("footer .description h2").html(s[t].title);
                            if (s[t].caption != null)
                                return e("footer .description p").html(s[t].caption)
                        }
                        ,
                        e(r).parent(".news_container").find(".controls a").attr("data-no-turbolink", ""),
                        s = e(r).data("image-urls"),
                        n = e(r).data("index"),
                        e(r).parent(".news_container").find(".controls a.back").on("click", o(-1, "#" + e(r).attr("id") + " img")),
                        e(r).parent(".news_container").find(".controls a.forward").on("click", o(1, "#" + e(r).attr("id") + " img"))
                    }
                }(this))
        }
        ,
        this.newsControlsCallback()
    })
}
.call(this),
function() {
    jQuery(function(e) {
        var t, n, r, i, s, o, u, a, f, l, c, h, p, d;
        if (e("body.stores")[0] != null)
            return window.loadMaps(),
            n = {
                store_1: {
                    lat: 40.723981,
                    lng: -73.996206
                },
                store_2: {
                    lat: 34.079298,
                    lng: -118.361576
                },
                store_3: {
                    lat: 35.65312923421094,
                    lng: 139.7053174674511
                },
                store_4: {
                    lat: 34.67107367572279,
                    lng: 135.49581840634346
                },
                store_5: {
                    lat: 33.587066,
                    lng: 130.394994
                },
                store_6: {
                    lat: 35.6691815041263,
                    lng: 139.70672965049744
                },
                store_7: {
                    lat: 35.166156,
                    lng: 136.904849
                },
                store_8: {
                    lat: 51.512704,
                    lng: -0.134369
                },
                store_9: {
                    lat: 35.66268558323531,
                    lng: 139.69990074634552
                },
                store_10: {
                    lat: 48.8592932,
                    lng: 2.3604969
                },
                store_11: {
                    lat: 40.7145752,
                    lng: -73.9622777
                }
            },
            t = function(t) {
                var n;
                return n = e(t).clone(),
                n.children("img").remove(),
                n.children("br").remove(),
                n.html()
            }
            ,
            r = function(e) {
                return e.target.tagName === "A" ? e.stopPropagation() : c(e)
            }
            ,
            i = function(t, r) {
                var i, s, o, u;
                return i = "store_" + t,
                u = new google.maps.LatLng(n[i].lat,n[i].lng),
                s = new google.maps.Map(e("#" + r)[0],a(u)),
                o = new google.maps.Marker({
                    map: s,
                    draggable: !1,
                    position: u,
                    icon: "/images/map-marker.gif"
                })
            }
            ,
            s = function(e, t) {
                return setTimeout(d, 100, e, t)
            }
            ,
            o = function() {
                var t;
                return t = e("#store-modal"),
                t.children("img").attr("src", "")
            }
            ,
            u = function() {
                return e("#store-modal-background").fadeOut({
                    duration: 100,
                    complete: function() {
                        return o()
                    }
                })
            }
            ,
            l = function(e) {
                var t;
                return t = (new Date).getTime(),
                "store-map-" + e + "-" + t
            }
            ,
            a = function(e) {
                return {
                    zoom: 16,
                    center: e,
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    scrollwheel: !1,
                    streetViewControl: !1,
                    mapTypeControl: !1,
                    styles: f()
                }
            }
            ,
            f = function() {
                return [{
                    featureType: "all",
                    stylers: [{
                        saturation: -100
                    }, {
                        gamma: .5
                    }]
                }, {
                    featureType: "poi",
                    elementType: "labels",
                    stylers: [{
                        visibility: "off"
                    }]
                }]
            }
            ,
            c = function(n) {
                var r, i, o;
                return e(n.currentTarget).data("store-path") ? this.Turbolinks.visit(window.location.href.replace("/stores", e(n.currentTarget).data("store-path"))) : (o = e(n.currentTarget).data("store-id"),
                r = e("#store-modal"),
                r.children(".address").html(t(n.currentTarget)),
                r.children("img").attr("src", e(n.currentTarget).data("zoomed-image")),
                r.css("top", e("article img").offset().top - e(window).scrollTop() + "px"),
                i = l(o),
                r.children(".map").remove(),
                r.append("<div class='map' id='" + i + "'></div>"),
                e("#store-modal-background").fadeIn({
                    duration: 100,
                    complete: function() {
                        return s(o, i)
                    }
                }))
            }
            ,
            h = function(e) {
                if (e.target.id === "store-modal-background" || e.target.className === "spacer")
                    return u()
            }
            ,
            p = function(e) {
                return u()
            }
            ,
            d = function(t, n) {
                return window.mapsHaveLoaded ? i(t, n) : e("body").one("mapsLoaded", function() {
                    return i(t, n)
                })
            }
            ,
            e("article").on("click", r),
            e("#store-modal-background").on("click", h),
            e("#store-modal-background").find("img").on("click", p),
            e(".move-out").mouseout(function(t) {
                return e(this).removeClass("move-out")
            }),
            e(document).keydown(function(e) {
                if (e.which === 27)
                    return u()
            })
    })
}
.call(this),
window.Swipe = function(e, t) {
    if (!e)
        return null;
    var n = this;
    this.options = t || {},
    this.index = this.options.startSlide || 0,
    this.speed = this.options.speed || 300,
    this.callback = this.options.callback || function() {}
    ,
    this.delay = this.options.auto || 0,
    this.container = e,
    this.element = this.container.children[0],
    this.container.style.overflow = "hidden",
    this.element.style.listStyle = "none",
    this.element.style.margin = 0,
    this.setup(),
    this.begin(),
    this.element.addEventListener && (this.element.addEventListener("touchstart", this, !1),
    this.element.addEventListener("touchmove", this, !1),
    this.element.addEventListener("touchend", this, !1),
    this.element.addEventListener("touchcancel", this, !1),
    this.element.addEventListener("webkitTransitionEnd", this, !1),
    this.element.addEventListener("msTransitionEnd", this, !1),
    this.element.addEventListener("oTransitionEnd", this, !1),
    this.element.addEventListener("transitionend", this, !1),
    window.addEventListener("resize", this, !1))
}
,
Swipe.prototype = {
    setup: function() {
        this.slides = this.element.children,
        this.length = this.slides.length;
        if (this.length < 2)
            return null;
        this.width = Math.ceil("getBoundingClientRect"in this.container ? this.container.getBoundingClientRect().width : this.container.offsetWidth);
        if (!this.width)
            return null;
        this.container.style.visibility = "hidden",
        this.element.style.width = Math.ceil(this.slides.length * this.width) + "px";
        var e = this.slides.length;
        while (e--) {
            var t = this.slides[e];
            t.style.width = this.width + "px",
            t.style.display = "table-cell",
            t.style.verticalAlign = "top"
        }
        this.slide(this.index, 0),
        this.container.style.visibility = "visible"
    },
    slide: function(e, t) {
        var n = this.element.style;
        t == undefined && (t = this.speed),
        n.webkitTransitionDuration = n.MozTransitionDuration = n.msTransitionDuration = n.OTransitionDuration = n.transitionDuration = t + "ms",
        n.MozTransform = n.webkitTransform = "translate3d(" + -(e * this.width) + "px,0,0)",
        n.msTransform = n.OTransform = "translateX(" + -(e * this.width) + "px)",
        this.index = e
    },
    getPos: function() {
        return this.index
    },
    prev: function(e) {
        this.delay = e || 0,
        clearTimeout(this.interval),
        this.index && this.slide(this.index - 1, this.speed)
    },
    next: function(e) {
        this.delay = e || 0,
        clearTimeout(this.interval),
        this.index < this.length - 1 ? this.slide(this.index + 1, this.speed) : this.slide(0, this.speed)
    },
    begin: function() {
        var e = this;
        this.interval = this.delay ? setTimeout(function() {
            e.next(e.delay)
        }, this.delay) : 0
    },
    stop: function() {
        this.delay = 0,
        clearTimeout(this.interval)
    },
    resume: function() {
        this.delay = this.options.auto || 0,
        this.begin()
    },
    handleEvent: function(e) {
        switch (e.type) {
        case "touchstart":
            this.onTouchStart(e);
            break;
        case "touchmove":
            this.onTouchMove(e);
            break;
        case "touchcancel":
        case "touchend":
            this.onTouchEnd(e);
            break;
        case "webkitTransitionEnd":
        case "msTransitionEnd":
        case "oTransitionEnd":
        case "transitionend":
            this.transitionEnd(e);
            break;
        case "resize":
            this.setup()
        }
    },
    transitionEnd: function(e) {
        this.delay && this.begin(),
        this.callback(e, this.index, this.slides[this.index])
    },
    onTouchStart: function(e) {
        this.start = {
            pageX: e.touches[0].pageX,
            pageY: e.touches[0].pageY,
            time: Number(new Date)
        },
        this.isScrolling = undefined,
        this.deltaX = 0,
        this.element.style.MozTransitionDuration = this.element.style.webkitTransitionDuration = 0,
        e.stopPropagation()
    },
    onTouchMove: function(e) {
        if (e.touches.length > 1 || e.scale && e.scale !== 1)
            return;
        this.deltaX = e.touches[0].pageX - this.start.pageX,
        typeof this.isScrolling == "undefined" && (this.isScrolling = !!(this.isScrolling || Math.abs(this.deltaX) < Math.abs(e.touches[0].pageY - this.start.pageY))),
        this.isScrolling || (e.preventDefault(),
        clearTimeout(this.interval),
        this.deltaX = this.deltaX / (!this.index && this.deltaX > 0 || this.index == this.length - 1 && this.deltaX < 0 ? Math.abs(this.deltaX) / this.width + 1 : 1),
        this.element.style.MozTransform = this.element.style.webkitTransform = "translate3d(" + (this.deltaX - this.index * this.width) + "px,0,0)",
        e.stopPropagation())
    },
    onTouchEnd: function(e) {
        var t = Number(new Date) - this.start.time < 250 && Math.abs(this.deltaX) > 20 || Math.abs(this.deltaX) > this.width / 2
          , n = !this.index && this.deltaX > 0 || this.index == this.length - 1 && this.deltaX < 0;
        this.isScrolling || this.slide(this.index + (t && !n ? this.deltaX < 0 ? 1 : -1 : 0), this.speed),
        e.stopPropagation()
    }
},
function() {
    jQuery(function(e) {
        var t, n, r;
        if (e(".preview-item #container[data-images]")[0] != null)
            return r = Modernizr.touch && Modernizr.csstransforms,
            e(".controls a").attr("data-no-turbolink", ""),
            n = e(".preview-item #container[data-images]").data("index"),
            window.imc = t = new this.PreviewImageController("#img-main",n,{
                centerSmallImageVertically: !0,
                smallImageLoaderContainer: ""
            }),
            e(".preview-item #container[data-images] a").click(function(e) {
                return function(e) {
                    return !1
                }
            }(this))
    })
}
.call(this),
function() {
    jQuery(document).ready(function() {
        var e, t, n;
        if ($("#lookbook-items")[0] != null)
            return t = function() {
                var t, n, r, i;
                r = $("#lookbook-items li a[data-image-url]"),
                i = [];
                for (t = 0,
                n = r.length; t < n; t += 1)
                    e = r[t],
                    i.push({
                        url: $(e).attr("href"),
                        imageUrl: $(e).data("image-url"),
                        zoomedImageUrl: $(e).data("zoomed-image-url")
                    });
                return i
            }(),
            n = new this.LookBookImageController("#img-main",$("#img-main-link").data("index"),t,{
                fadeSmallImage: !1
            })
    })
}
.call(this),
function() {
    var e, t, n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g = [].indexOf || function(e) {
        for (var t = 0, n = this.length; t < n; t++)
            if (t in this && this[t] === e)
                return t;
        return -1
    }
    ;
    o = {},
    f = 0,
    p = !1,
    a = function() {
        return $("#shop-scroller-container").scrollLeft() + $("#shop-scroller-container").width() >= $("#shop-scroller").width()
    }
    ,
    u = function() {
        return $("#shop-scroller-container").scrollLeft() === 0
    }
    ,
    v = function(e) {
        var t, n, r, i, s, o, l;
        return t = e.parent(),
        l = 663,
        s = $("#left-scroller-arrow"),
        o = $("#right-scroller-arrow"),
        s.hide(),
        o.hide(),
        $(".arrow").on("mousedown", function(e) {
            if ($(this).hasClass("left") && u())
                return;
            if ($(this).hasClass("right") && a())
                return;
            return $(this).addClass("mousedown")
        }).on("mouseleave", function(e) {
            return $(this).removeClass("mousedown")
        }),
        $(".arrow").on("mouseup", function(e) {
            return $(this).removeClass("mousedown")
        }).on("mouseleave", function(e) {
            return $(this).removeClass("mousedown")
        }),
        t.css({
            overflow: "hidden"
        }),
        t.scrollLeft(e.width()),
        s.on("click", function(e) {
            return function(e) {
                return e.preventDefault()
            }
        }(this)),
        o.on("click", function(e) {
            return function(e) {
                return e.preventDefault(),
                t.stop().animate({
                    scrollLeft: t.scrollLeft() + l
                }, 400, "easeOutCirc", function() {
                    p = !0,
                    a() && o.removeClass("enabled");
                    if (u())
                        return s.removeClass("enabled")
                })
            }
        }(this)),
        s.on("click", function(e) {
            return function(e) {
                return e.preventDefault(),
                t.stop().animate({
                    scrollLeft: t.scrollLeft() - l
                }, 400, "easeOutCirc", function() {
                    p = !0,
                    u() && s.removeClass("enabled");
                    if (a())
                        return o.removeClass("enabled")
                })
            }
        }(this)),
        t.on("scroll", function(e) {
            return function() {
                a() && o.removeClass("enabled"),
                u() && s.removeClass("enabled");
                if (p)
                    return f = t.scrollLeft()
            }
        }(this)),
        o.on("mouseenter", function(e) {
            return function(e) {
                return a() ? o.removeClass("enabled") : o.addClass("enabled")
            }
        }(this)),
        o.on("mouseleave", function(e) {
            return function(e) {
                return a() ? o.removeClass("enabled") : o.removeClass("enabled")
            }
        }(this)),
        s.on("mouseenter", function(e) {
            return function(e) {
                return u() ? s.removeClass("enabled") : s.addClass("enabled")
            }
        }(this)),
        s.on("mouseleave", function(e) {
            return function(e) {
                return u() ? s.removeClass("enabled") : s.removeClass("enabled")
            }
        }(this)),
        n = 2.4,
        Modernizr.touch && (n = .8),
        i = t.find("li").css("visibility", "hidden"),
        r = t.find("img"),
        r.imagesLoaded(function() {
            return i.css("visibility", "visible"),
            p = !1,
            f > 0 ? (s.show(),
            o.show(),
            t.addClass("webkit-scroll"),
            t.css({
                overflow: "auto"
            }),
            t.scrollLeft(f),
            s.removeClass("loading").attr("style", ""),
            o.removeClass("loading").attr("style", "")) : t.delay(500).animate({
                scrollLeft: 0
            }, e.width() / n, "easeOutSine", function() {
                return s.show(),
                o.show(),
                t.addClass("webkit-scroll"),
                t.css({
                    overflow: "auto"
                }),
                s.removeClass("loading").attr("style", ""),
                o.removeClass("loading").attr("style", "")
            })
        }),
        t.on("mousedown", function() {
            return p = !0
        })
    }
    ,
    t = function() {
        var e, t, n, r, i, s;
        return i = $.parseJSON($.cookie("pure_cart")),
        e = i != null ? i.cookie : void 0,
        t = i != null ? i.total : void 0,
        s = (e || "").split("--"),
        r = s[0],
        n = s[1],
        [r, t, n]
    }
    ,
    i = function() {
        var e, n, r, i;
        return r = t(),
        n = r[0],
        i = r[1],
        e = r[2],
        ("" + n).length === 0 || /^0\s/.test("" + n)
    }
    ,
    l = function(e, t) {
        var n, i, s, o;
        n = 0;
        for (i = 0,
        s = e.length; i < s; i++)
            o = e[i],
            r(o) && n++;
        return n >= t
    }
    ,
    n = function(e) {
        var n, r, s, o, u, a, f, l, c;
        a = t(),
        s = a[0],
        c = a[1],
        r = a[2];
        if (i())
            return !1;
        l = function() {
            var e, t, n, i;
            n = r != null ? r.split("-") : void 0,
            i = [];
            for (e = 0,
            t = n.length; e < t; e += 1)
                u = n[e],
                i.push(parseInt(u.split(",")[1], 10));
            return i
        }();
        for (n = 0,
        o = e.length; n < o; n++) {
            f = e[n];
            if (g.call(l, f) >= 0)
                return !0
        }
        return !1
    }
    ,
    r = function(e) {
        return n([e])
    }
    ,
    s = function(e) {
        var n, r, i, s, o, u, a, f;
        u = t(),
        i = u[0],
        f = u[1],
        r = u[2],
        a = function() {
            var e, t, n, i;
            n = r != null ? r.split("-") : void 0,
            i = [];
            for (e = 0,
            t = n.length; e < t; e += 1)
                o = n[e],
                i.push($.map(o.split(","), function(e) {
                    return parseInt(e, 10)
                }));
            return i
        }();
        for (n = 0,
        s = a.length; n < s; n++) {
            o = a[n];
            if (o[1] === e)
                return o[0]
        }
    }
    ,
    m = null,
    e = function(e) {
        var t, i, s, o;
        return i = function() {
            var e, n, r, i;
            r = $("body.products ul.styles a"),
            i = [];
            for (e = 0,
            n = r.length; e < n; e += 1)
                t = r[e],
                i.push($(t).data("style-id"));
            return i
        }(),
        o = jQuery.unique(i),
        s = $("#details").data("style-limited-with-count"),
        $(e).data("sold-out") ? "sold_out" : r($(e).data("style-id")) ? "remove" : n(i) && $("#details").data("style-limited") || s > 1 && l(o, s) ? "style_limited" : "add"
    }
    ,
    h = function(t) {
        var n;
        return this.Turbolinks.willVisit($(t).attr("href")),
        m != null && m.abort(),
        c(t),
        e(t) === "add" && (n = $(t).attr("href"),
        m = $.getScript(n)),
        $(t).closest("ul").find("a").removeClass("selected"),
        $(t).addClass("selected"),
        $('p[itemprop="model"]').html($(t).data("style-name")),
        $("article figure img").attr({
            src: $(t).data("images").detail_url
        }),
        $(t).data("description") && $(".description").html($(t).data("description")),
        $("#zoom-holder").css({
            background: "url(" + $(t).data("images").zoomed_url + ") 0 0  no-repeat"
        }),
        $("#zoom-holder").attr("data-background-image", $(t).data("images").zoomed_url)
    }
    ,
    c = function(t) {
        var n;
        switch (e(t)) {
        case "sold_out":
            return $("#cart-controls form, #cctrl form").replaceWith($("script#cart-controls-sold-out").html());
        case "remove":
            return n = s($(t).data("style-id")),
            $("#cart-controls form, #cctrl form").replaceWith($.nano($("script#cart-controls-remove").html(), {
                size_id: n
            }));
        case "style_limited":
            return $("#cart-controls form, #cctrl form").replaceWith($("script#cart-controls-limited").html())
        }
    }
    ,
    d = this.Turbolinks.visit,
    $(document).bind("page:change", function() {
        var e;
        if ((e = $("ul#shop-scroller"))[0] != null)
            return p = !1,
            v(e)
    }),
    jQuery(function() {
        var e, n, r, s, u, a, f, l, p, m, g, y, b, w, E, S, x, T, N, C, k, L;
        return (C = $("ul#shop-scroller"))[0] != null && v(C),
        T = $("body.products ul.styles a"),
        T[0] != null && (T.attr("data-no-tubolink", "data-no-tubolink"),
        f = function() {
            var e, t, r;
            r = [];
            for (e = 0,
            t = T.length; e < t; e++)
                n = T[e],
                r.push($(n).data("images").detail_url);
            return r
        }(),
        w = new this.Loader(f,1),
        w.preloadAll(),
        T.off("click").on("click", function(e) {
            return h(this),
            e.preventDefault()
        }),
        c($("body.products ul.styles a.selected")[0])),
        $("#cart")[0] != null && (i() ? ($("#cart").addClass("hidden"),
        $("#container").removeClass("has-cart")) : (S = t(),
        b = S[0],
        N = S[1],
        g = S[2],
        $("#items-count").html(b.replace("+", " ")),
        $("#subtotal").html(N),
        $("#subtotal_eu").length > 0 && $("#subtotal_eu").html(Supreme.addDelim(Math.round(Supreme.GBPtoEUR(N.replace("£", "").replace(",", ""))), ",") + "&euro;"),
        N.length >= 4 && ($("#subtotal").addClass("four-chars"),
        $("#subtotal_eu").addClass("four-chars")),
        $("#cart").removeClass("hidden"),
        $("#container").addClass("has-cart"))),
        $("form#cart-addf, form#cart-remove").on("ajax:beforeSend", function(e) {
            return function(t, n) {
                return $(e).find("input, button, select").attr("disabled", !0)
            }
        }(this)).on("ajax:error", function(e) {
            return function(e, t, n) {
                return d(window.location.href)
            }
        }(this)),
        $("body").unbind("cart:add").bind("cart:add", function() {
            var e;
            return e = $("#subtotal").closest("li"),
            e.effect("highlight", {
                color: "#FFAC9E"
            }, 1500)
        }),
        $("body").unbind("cart:remove").bind("cart:remove", function() {
            var e, n;
            return e = t(),
            n = (e || "").split("--"),
            b = n[0],
            N = n[1],
            g = n[2],
            $("#cart-header #items-count").html(b.replace("+", " ")),
            $("#cart-total p span").html(N)
        }),
        $("#cart-body")[0] != null && ($(".cart-remove form").on("submit", function() {
            return $(this).closest("tr").fadeOut(500),
            $(document).one("page:load", function() {
                if (i())
                    return d(location.protocol + "//" + location.hostname + "/shop")
            })
        }),
        $(".cart-qty select").on("change", function() {
            return $(this).parent("form").submit()
        })),
        $("form#checkout_form")[0] != null && (floatingLabel.init({}),
        floatingLabel.evaluateInputs(),
        $("form#checkout_form input[type=text], form#checkout_form input[type=email], form#checkout_form select").on("focus", function() {
            return $(this).closest(".input").addClass("focus")
        }).on("blur", function() {
            return $(this).closest(".input").removeClass("focus")
        }),
        $("body").hasClass("us") && $("#order_tel").mask("000-000-0000", {
            autoclear: !1
        }),
        $("body").hasClass("us") && $("#order_billing_country").val() === "USA" && !$("body").hasClass("payment_page") && $("#order_billing_zip").on("keyup", function(e) {
            var t, n;
            t = n = $(this).val();
            if (n.length >= 4)
                return n.length > 4 && (n = n.substring(0, 4)),
                $.ajax({
                    url: "https://supreme-images.s3.amazonaws.com/us-zipcodes/" + n + ".js",
                    success: function(e, r, i) {
                        var s, u, a, f;
                        o[n] = e;
                        if (t.length === 5) {
                            f = [];
                            for (u = 0,
                            a = e.length; u < a; u++)
                                s = e[u],
                                s.zipcode === t ? ($("#order_billing_city").val(s.city),
                                $("#order_billing_state").val(s.state),
                                floatingLabel.evaluateInputs(),
                                f.push(k())) : f.push(void 0);
                            return f
                        }
                    },
                    cache: !0,
                    dataType: "jsonp",
                    jsonpCallback: "w"
                })
        }),
        $("#credit_card_number").validateCreditCard(function(e) {
            var t;
            if (e.luhn_valid)
                return t = e.card_type.name,
                t === "amex" && (t = "american_express"),
                t === "mastercard" && (t = "master"),
                $("#credit_card_type").val(t)
        }, {
            accept: ["visa", "amex", "mastercard", "maestro"]
        }),
        $("body").hasClass("us") && ($("#checkout_form").validate({
            errorElement: "span",
            highlight: function(e, t, n) {
                return $(e).parent().addClass("error")
            },
            unhighlight: function(e, t, n) {
                return $(e).parent().removeClass("error")
            },
            errorPlacement: function(e, t) {
                return e.appendTo(t.parent())
            },
            errorClass: "error js",
            success: function(e) {
                return e.remove()
            }
        }),
        $.validator.addMethod("first_and_last", function(e) {
            return FIRST_AND_LAST_NAME_FORMAT.test(e)
        }, "must contain first and last name"),
        $.validator.addMethod("tel", function(e) {
            return TEL_FORMAT.test(e.replace(/-|\(|\)|\s/g, ""))
        }, "must be a 10-digit phone number"),
        $.validator.addMethod("zipcode", function(e) {
            return $("#order_billing_country").val() === "CANADA" ? CANADA_ZIP.test(e.toUpperCase()) : US_ZIP.test(e)
        }, function() {
            return $("#order_billing_country").val() === "CANADA" ? "must be a valid canadian zipcode" : "must be a 5 digit US zipcode"
        }),
        jQuery.extend(jQuery.validator.messages, {
            required: "required",
            remote: "Please fix this field.",
            email: "name@domain.com"
        })),
        L = function() {
            return $.get("/store_credits/verify", {
                email: $("#order_email").val()
            }, function(e) {
                return $("#pay").after(e),
                $("#pay").fadeOut(100, function() {
                    return $("#pay").hide(),
                    $("#store_credits").fadeIn(100),
                    $("form#checkout_form").attr("data-verified", "done"),
                    $("#store_credit").click(function(e) {
                        return $("#store_credit_id").val($(this).attr("store_credit_id")),
                        $.rails.enableFormElements($("form#checkout_form")),
                        checkoutJsonCall(),
                        !1
                    }),
                    $("no_store_credit").click(function(e) {
                        return $.rails.enableFormElements($("form#checkout_form")),
                        checkoutJsonCall(),
                        !1
                    })
                })
            }).fail(function() {
                return $("form#checkout_form").attr("data-verified", "done"),
                $.rails.enableFormElements($("form#checkout_form")),
                checkoutJsonCall()
            })
        }
        ,
        r = !1,
        s = !1,
        x = function(e) {
            return e.stopPropagation(),
            $("#checkout_form .button").val() === "processing, please wait..." ? !1 : ($(".g-recaptcha").length > 0 && !r ? grecaptcha.execute() : $("form#checkout_form").attr("data-verified") !== "done" ? ($.rails.disableFormElements($("form#checkout_form")),
            L()) : checkoutJsonCall(),
            !1)
        }
        ,
        window.checkoutAfterCaptcha = function(e) {
            return window.pookyCallback && window.pookyCallback(),
            r = !0,
            $("form#checkout_form").attr("data-verified") !== "done" ? ($.rails.disableFormElements($("form#checkout_form")),
            L()) : checkoutJsonCall(),
            !1
        }
        ,
        window.checkoutJsonCall = function(e) {
            var t;
            return t = $("#checkout_form .button").val(),
            t === "processing, please wait..." ? !0 : ($("#checkout_form .button").val($("#checkout_form .button").attr("disable_with")),
            s ? !0 : (s = !0,
            $.post("/checkout.json", $("#checkout_form").serialize()).done(function(e) {
                var t, n, r, i, o;
                if (e.status === "paid")
                    return $("body").addClass("cart-confirm"),
                    $("#content").replaceWith(e.page);
                if (e.status === "paypal")
                    return location.href = e.redirect_url;
                if (e.status === "failed" && e.errors) {
                    e.errors.credit_card ? ($(".errors-placeholder").hide(),
                    $("#cart-cc .errors").length ? $("#cart-cc .errors").text(e.errors.credit_card) : $("#cart-cc fieldset").prepend('<div class="errors">' + e.errors.credit_card + "</div>")) : ($(".errors-placeholder").show(),
                    $("#cart-cc .errors").text(""));
                    if (e.errors.order) {
                        e.errors.order.includes("terms") ? $(".has-checkbox.terms").addClass("error") : $(".has-checkbox.terms").removeClass("error"),
                        $("#cart-address .input").removeClass("error");
                        if (e.order_errors) {
                            i = e.order_errors;
                            for (n in i)
                                o = i[n],
                                t = $("#order_" + n),
                                n === "billing_address" && (t = $("#bo")),
                                r = t.closest(".input"),
                                r.addClass("error")
                        }
                    } else
                        $(".has-checkbox.terms").removeClass("error");
                    return $("#cart-address .errors").length ? $("#cart-address .errors").text(e.errors.order) : $("#cart-address fieldset .input:first").before('<div class="errors">' + e.errors.order + "</div>"),
                    s = !1,
                    $.rails.enableFormElements($("form#checkout_form")),
                    $("#pay .checkout").val("process payment")
                }
                if (e.status === "failed")
                    return $("body").removeClass("checkout_page").addClass("cart-confirm"),
                    $("#content").replaceWith(e.page);
                if (e.status === "dup")
                    return location.href = "http://www.supremenewyork.com/shop/cart?dup=true";
                if (e.status === "outOfStock")
                    return e.mp && ga_track("Purchase Attempt", "mp_only", e.mp),
                    location.href = "http://www.supremenewyork.com/shop/cart";
                if (e.status === "canada")
                    return location.href = "http://www.supremenewyork.com/shop/cart?canada=true";
                if (e.status === "blocked_country")
                    return location.href = "http://www.supremenewyork.com/shop/cart?blocked_country=true";
                if (e.status === "queued")
                    return window.pollOrderStatus(e.slug)
            }).fail(function(e, n, r) {
                return $("#checkout_form .button").val(t)
            }),
            s = !1,
            $.rails.enableFormElements($("form#checkout_form"))))
        }
        ,
        window.pollOrderStatus = function(e) {
            var t;
            return t = function() {
                return $("#pay .button").addClass("processing"),
                $.get("/checkout/" + e + "/status.json").done(function(e) {
                    return e.status === "queued" ? window.setTimeout(t, 3e3) : ($("#pay .button").removeClass("processing"),
                    $("body").addClass("cart-confirm"),
                    $("#content").replaceWith(e.page),
                    u())
                }).fail(function(e, n, r) {
                    return $("#pay .button").removeClass("processing"),
                    window.setTimeout(t, 9e3)
                })
            }
            ,
            window.setTimeout(t, 3e3)
        }
        ,
        $("form#checkout_form").on("submit", function(e) {
            return x(e)
        }),
        $("checkout_form.checkout").click(function(e) {
            return x(e)
        }),
        $("#store_credits .checkout").click(function(e) {
            return $("#pay").show(),
            $("#store_credits").fadeOut(100)
        }),
        k = function() {
            var e, t, n, r, i, s, o;
            if ($("body").hasClass("payment_page"))
                return !1;
            window.update_shipping_cnt || (window.update_shipping_cnt = 0),
            window.update_shipping_cnt += 1;
            if (window.update_shipping_cnt > 7)
                return !1;
            e = $("form#checkout_form").serializeArray(),
            t = {};
            for (n = 0,
            r = e.length; n < r; n++)
                s = e[n],
                i = s.name,
                o = s.value,
                /number|verification_value/.test(i) || (t[i] = o);
            return t.cnt = window.update_shipping_cnt,
            $("#shipping").text("calculating..."),
            $("#shipping-eu").hide(),
            $.ajax({
                url: $("form#checkout_form").attr("action") + ".js",
                data: t,
                success: function(e, t, n) {
                    $("#cart-totals").replaceWith(e);
                    if ($("body").hasClass("us"))
                        return $("#surchage_info_tooltip").remove(),
                        $("body").append('<div id="surchage_info_tooltip">Canadian Surcharge covers all Goods and Services Tax (GST), Harmonized Sales Tax (HST) as well as Duty and Brokerage.<br><br>Canadian customers will not incur any additional charges upon delivery.</div>'),
                        $("#surchage_info").on("click", function(e) {
                            return e.preventDefault()
                        }),
                        $("#surchage_info").on("mouseenter", function(e) {
                            return $("#surchage_info_tooltip").css({
                                position: "absolute",
                                top: $("#surchage_info").offset().top,
                                left: $("#surchage_info").offset().left + 20
                            }).show(),
                            setTimeout(function() {
                                return $("#surchage_info_tooltip").css("opacity", 1)
                            }, 10)
                        }),
                        $("#surchage_info").on("mouseleave", function(e) {
                            return $("#surchage_info_tooltip").css("opacity", 0),
                            setTimeout(function() {
                                return $("#surchage_info_tooltip").hide()
                            }, 100)
                        })
                },
                dataType: "html"
            })
        }
        ,
        a = function(e) {
            return e = e.replace(/[^\d]/g, ""),
            e.match(/^5[1-5]\d/) ? "mastercard" : e.match(/^4\d/) || e.match(/^4\d/) ? "visa" : e.match(/^3[47]\d/) ? "american_express" : e.match(/^35(28|29|[3-8]\d)\d$/) ? "jcb" : "UNKNOWN"
        }
        ,
        $("#credit_card_type").length === 0 && $("#cn, #cnb").on("keyup", function(e) {
            var t, n;
            e.preventDefault(),
            n = $(this),
            t = a(n.val());
            if (t === "UNKNOWN") {
                $("#cn, #cnb").unmask();
                return
            }
            return t === "american_express" ? $("#cnb, #nnb").mask("9999 999999 99999", {
                autoclear: !1
            }).trigger("focus.mask") : $("#cnb, #nnb").mask("9999 9999 9999 9999", {
                autoclear: !1
            }).trigger("focus.mask"),
            $("#cart-vval, #cvc").removeClass("visa").removeClass("master").removeClass("american_express").addClass(t)
        }),
        $("#credit_card_type").on("change", function() {
            return $("#credit_card_type").val() === "visa" ? $("#cnb").unmask().mask("9999 9999 9999 9999", {
                autoclear: !1
            }) : $("#credit_card_type").val() === "american_express" ? $("#cnb").unmask().mask("9999 999999 99999", {
                autoclear: !1
            }) : $("#credit_card_type").val() === "master" ? $("#cnb").unmask().mask("9999 9999 9999 9999", {
                autoclear: !1
            }) : $("#cnb").unmask(),
            $("#credit_card_type").val() === "cod" || $("#credit_card_type").val() === "paypal" ? ($("#card_details").hide(),
            $("#credit_card_type").val() === "paypal" && $("#paypal_message").show(),
            k()) : ($("#cart-vval, #cvc").removeClass("visa").removeClass("master").removeClass("american_express").addClass($(this).val()),
            $("#card_details").show(),
            $("#paypal_message").hide(),
            k())
        }).trigger("change"),
        $("#order_billing_country").on("change", function() {
            if (!$("body").hasClass("payment_page"))
                return $("#state_label").text($(this).val() === "USA" ? "state" : "province"),
                $("#order_billing_state").html($("#states-" + $(this).val()).html())
        }),
        $(".checkbox").iCheck({
            checkboxClass: "icheckbox_minimal",
            radioClass: "iradio_minimal",
            increaseArea: "20%"
        }),
        $("label.terms a").click(function(e) {
            return window.location = $(this).attr("href"),
            !1
        }),
        $("#order_billing_country, #order_billing_state").on("change", k)),
        u = function() {
            return $("input#join-mailinglist").on("change", function() {
                var e, t;
                return t = $("input#join-mailinglist")[0],
                e = {
                    commit: t.checked ? "subscribe" : "unsubscribe"
                },
                $("body").hasClass("eu") && (e.eu_order_mailing_list = 1),
                $.post("/order_mailinglist", e)
            })
        }
        ,
        u(),
        y = $("#img-main").width(),
        E = 1350 / -y,
        m = function() {
            var e, t;
            return y = $("#img-main").width(),
            E = 1350 / -y,
            e = 458,
            $("#zoom-lens").show(),
            t = $("#zoom-holder").attr("data-background-image"),
            $("#zoom-holder").css({
                position: "absolute",
                left: e
            }).show(),
            $("#zoom-lens").on("click", l),
            $(document).on("mousemove", p),
            $("#zoom-holder").css("background-image", "url('" + t + "')")
        }
        ,
        l = function() {
            return $("#zoom-lens").hide(),
            $("#zoom-holder").hide(),
            $(document).unbind("mousemove"),
            $("body").removeClass("zooming")
        }
        ,
        p = function(e) {
            var t, n, r, i, s, o, u;
            return n = $(".products article figure img"),
            s = n.offset(),
            o = e.pageX - s.left,
            u = e.pageY - s.top,
            (o < 0 || o > y || u < 0 || u > y) && l(),
            r = o - 75,
            i = u - 75,
            r = Math.min(Math.max(0, r), y - 150),
            i = Math.min(Math.max(0, i), y - 150),
            $("#zoom-lens").css({
                top: i,
                left: r
            }),
            $("body").addClass("zooming"),
            t = $("#zoom-holder").css("background-image"),
            $("#zoom-holder").css({
                backgroundPosition: r * E + "px " + i * E + "px"
            }),
            $("#zoom-holder").css({
                backgroundColor: "#fff"
            }),
            $("#zoom-holder").css({
                backgroundImage: t
            }),
            e.stopPropagation()
        }
        ,
        $(".products article figure img").on("click", function(e) {
            return m(),
            p(e)
        }),
        $("#order_mailing_list, #eu_order_mailing_list").iCheck({
            checkboxClass: "icheckbox_minimal",
            radioClass: "iradio_minimal",
            increaseArea: "20%"
        }),
        $("#order_mailing_list, #eu_order_mailing_list").on("ifChecked", function(e) {
            return $(this).closest("p").find("label").addClass("active")
        }),
        $("#order_mailing_list, #eu_order_mailing_list").on("ifUnchecked", function(e) {
            return $(this).closest("p").find("label").removeClass("active")
        }),
        e = null,
        $("#mailinglist input[type=submit]").click(function() {
            return e = this
        }),
        $("#mailinglist").on("ajax:error", function(e) {
            return function(t, n, r) {
                return e.Turbolinks.visit("/")
            }
        }(this)),
        $("#mailinglist").on("submit", function(t) {
            return function(n) {
                return t.Validator.valid("email") ? ($("#_dx").val((new Date).getMonth()),
                ga_track("event", "mailinglist", e.value),
                $("#wrap").animate({
                    opacity: 0
                })) : (n.preventDefault(),
                !1)
            }
        }(this))
    })
}
.call(this),
function() {
    jQuery(function() {
        var e;
        return $("#form-contact")[0] != null && ($("#form-contact").on("submit", function(e) {
            return function(t) {
                return e.Validator.valid("first_name", "last_name", "email", "message") ? (ga_track("event", "message", "sent"),
                $("#wrap").animate({
                    opacity: 0
                })) : (t.preventDefault(),
                !1)
            }
        }(this)),
        $("#form-contact").on("ajax:error", function(e) {
            return function(t, n, r) {
                return e.Turbolinks.visit("/")
            }
        }(this))),
        $("#form-mailinglist")[0] != null && ($(".checkbox").iCheck({
            checkboxClass: "icheckbox_minimal",
            radioClass: "iradio_minimal",
            increaseArea: "20%"
        }),
        $("#order-mailing-list-fieldset .checkbox").on("ifChecked", function(e) {
            return $("#order-mailing-list-label label").addClass("active")
        }),
        $("#order-mailing-list-fieldset .checkbox").on("ifUnchecked", function(e) {
            return $("#order-mailing-list-label label").removeClass("active")
        }),
        e = null,
        $("#form-mailinglist input[type=submit]").click(function() {
            return e = this
        }),
        $("#form-mailinglist").on("submit", function(t) {
            return function(n) {
                return t.Validator.valid("email") ? ($("#_dx").val((new Date).getMonth()),
                ga_track("event", "mailinglist", e.value),
                $("#wrap").animate({
                    opacity: 0
                })) : (n.preventDefault(),
                !1)
            }
        }(this)),
        $("input[name=mailinglist]").on("click", function(e) {
            return function(e) {
                return $("input[name=mailinglist]:checked").val() === "jp" ? ($("#order-mailing-list-fieldset").css("visibility", "hidden"),
                $("#order-mailing-list-label").css("visibility", "hidden"),
                $("#eu-order-mailing-list-fieldset").css("visibility", "hidden"),
                $("#eu-order-mailing-list-label").css("visibility", "hidden")) : ($("#order-mailing-list-fieldset").css("visibility", "visible"),
                $("#order-mailing-list-label").css("visibility", "visible"),
                $("#eu-order-mailing-list-fieldset").css("visibility", "visible"),
                $("#eu-order-mailing-list-label").css("visibility", "visible"))
            }
        }(this)),
        $("#form-mailinglist").on("ajax:error", function(e) {
            return function(t, n, r) {
                return e.Turbolinks.visit("/")
            }
        }(this))),
        $("input#mailing_list, input#order_mailing_list").on("click", function() {
            return $.post($("#mailinglist_settings").data("update-url"), {
                mailinglist: this.id,
                subscribe: this.checked
            }),
            ga_track("event", "update_mailinglist", (this.checked ? "subscribe" : "unsubscribe") + this.id)
        }),
        $("#update_mailinglist_settings").on("click", function() {
            var e;
            return $(this).css({
                backgroundColor: "gray"
            }),
            e = function(e) {
                return function() {
                    return $(e).css({
                        backgroundColor: "red"
                    })
                }
            }(this),
            window.setTimeout(e, 700)
        })
    })
}
.call(this),
function() {
    jQuery(function() {
        var e, t;
        return $("#show-form")[0] != null && $("#show-form").click(function() {
            return $("#friend-mail span").css({
                display: "inline-block"
            }),
            $("#embed_code").hide(),
            $("#show-embed").hide(),
            $(this).hide(),
            !1
        }),
        $("#show-embed")[0] != null && $("#show-embed").click(function() {
            return $("#embed_code").show(),
            $("#show-form").show(),
            $("#friend-mail span").hide(),
            $(this).hide(),
            !1
        }),
        $("#wrap .scrollitem")[0] != null && (e = window.getComputedStyle(document.querySelector("body"), ":before").getPropertyValue("content").replace(/\"/g, ""),
        e || (t = new this.Marque("#wrap .scrollitem"),
        $(document).one("page:change", function() {
            return t.stop()
        })),
        $("#wrap .scrollitem img").hover(function() {
            var e, t, n;
            return t = $(this).attr("alt").split(": "),
            n = t[0],
            e = t[1],
            e = e.indexOf(",") !== -1 ? "<strong>" + e.replace(/,/, "</strong><br />") : e,
            $("footer .description h2").html(n),
            $("footer .description p").html(e)
        })),
        $("form#friend-mail").on("submit", function(e) {
            return Validator.valid("to-email", "from-email") || !1,
            ga_track("event", "random", "share", $("footer .description h2").html())
        })
    })
}
.call(this),
function() {
    var e, t;
    String.prototype.titleize = function() {
        return this.charAt(0).toUpperCase() + this.slice(1)
    }
    ,
    e = function(e) {
        return e["Product Color"] = $("p.style").text(),
        e["Product Cost"] = $("p.price").text().replace(/[^\d\.]/, ""),
        e.Currency = $("p.price span").data("currency"),
        e["Product Name"] = $("#details h1").text(),
        e.Category = $("#details h1").data("category"),
        e["Sold Out?"] = $(".button.sold-out").length > 0,
        e["Product Number"] = $("#details h1").data("ino"),
        e["Release Week"] = $("#details h1").data("rw"),
        e["Release Date"] = $("#details h1").data("rd"),
        e
    }
    ,
    t = typeof exports != "undefined" && exports !== null ? exports : this,
    t.ga_track = function() {
        var t, n, r, i, s, o;
        n = [].slice.call(arguments),
        t = n.shift(),
        n[0] === "mp_only" && (o = !0,
        n.shift()),
        i = [],
        t.match(/ecommerce/) ? (typeof ga != "undefined" && ga !== null && ga("require", "ecommerce", "ecommerce.js"),
        typeof ga_eu != "undefined" && ga_eu !== null && ga_eu("require", "ecommerce", "ecommerce.js"),
        i = [t]) : i = ["send", t],
        typeof ga != "undefined" && ga !== null && !o && ga.apply(ga, i.concat(n)),
        typeof ga_eu != "undefined" && ga_eu !== null && !o && ga_eu.apply(ga, i.concat(n)),
        typeof mixpanel != "undefined" && mixpanel !== null && (s = {
            URL: location.pathname,
            "Page Name": document.title.replace("Supreme: ", ""),
            Season: "FW17",
            "Device Type": "Desktop",
            "Event Name": t
        },
        s["Site Region"] = $("body").hasClass("us") ? "US" : $("body").hasClass("eu") ? "EU" : "JP",
        t === "Add to Cart Attempt" && (s = e(s),
        s["Product Size"] = "Medium",
        mixpanel.track("Add to Cart Attempt", s)),
        t === "Purchase Attempt" && $.each(n[0], function(e, t) {
            return mixpanel.track("Purchase Attempt", $.extend(s, t))
        }),
        (t === "Purchase Success" || t === "Checkout View") && mixpanel.track(t, $.extend(s, n[0])),
        t === "pageview" && (location.pathname.match(/^\/shop\/?$/) || location.pathname.match(/^\/shop\/all/) ? (location.pathname.match(/shop\/all\/[a-z]/i) ? s["Shop View Type"] = location.pathname.split("/").slice(-1)[0].titleize() : location.pathname.match(/shop\/all/i) ? s["Shop View Type"] = "All" : s["Shop View Type"] = "Tile",
        r = "Shop View") : location.pathname.match(/^\/shop/) && location.pathname.split("/").length > 3 ? (r = "Product View",
        s = e(s)) : !(location.pathname.match(/^\/preview/) && location.pathname.split("/").length > 3) && !location.pathname.match(/^\/shop/) && !location.pathname.match(/^\/checkout/) && (r = "Menu Page View"),
        s["Event Name"] = r,
        mixpanel.track(r, s)));
        if (typeof _gaq != "undefined" && _gaq !== null && !o)
            return t = t.replace("ecommerce:send", "trans"),
            t = t.replace("ecommerce:", ""),
            t = t.replace("addTransaction", "addTrans"),
            t.match(/^add/) ? t = "_" + t : t = "_track" + t.titleize(),
            _gaq.push([t].concat(n))
    }
}
.call(this),
function() {
    var e, t = function(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    };
    e = this.Turbolinks.willVisit,
    this.BaseImageController = function() {
        function n(e, n, r, i) {
            var s, o, u, a, f, l;
            this.imageSelector = e,
            this.index = n,
            this.data = r,
            this.imageUrl = t(this.imageUrl, this),
            this.zoomedImageUrl = t(this.zoomedImageUrl, this),
            this.tryShowingLightbox = t(this.tryShowingLightbox, this),
            this.showImageAtIndex = t(this.showImageAtIndex, this),
            this.showCursor = t(this.showCursor, this),
            this.setCursorImageLocation = t(this.setCursorImageLocation, this),
            this.pushImageState = t(this.pushImageState, this),
            this.newLightbox = t(this.newLightbox, this),
            this.newImageViewer = t(this.newImageViewer, this),
            this.keyUpListener = t(this.keyUpListener, this),
            this.getImageDataRecord = t(this.getImageDataRecord, this),
            f = function() {
                var e, t, n, r;
                n = this.data,
                r = [];
                for (e = 0,
                t = n.length; e < t; e += 1)
                    o = n[e],
                    r.push(o.imageUrl);
                return r
            }
            .call(this),
            l = this.data;
            for (u = 0,
            a = l.length; u < a; u += 1)
                o = l[u],
                o.zoomedImageUrl != null && f.push(o.zoomedImageUrl);
            s = new Loader(f,this.index + 1),
            this.setupCursor(),
            this.imageViewer = this.newImageViewer(s, i),
            this.lightbox = this.newLightbox(s),
            this.isChangingImage = !1,
            $(window).on("keyup", this.keyUpListener)
        }
        return n.centerImage = function(e, t) {
            return $(e).css({
                marginTop: Math.max(0, t / 2 - e.height / 2)
            })
        }
        ,
        n.isTouchDevice = function() {
            return Modernizr.touch && Modernizr.csstransforms
        }
        ,
        n.resizedImageDimensions = function(e, t, n, r) {
            var i;
            if (e > n || t > r)
                e / n < t / r ? i = r / t : i = n / e,
                e *= i,
                t *= i;
            return {
                width: e,
                height: t
            }
        }
        ,
        n.resizeImageToAspectFit = function(e, t, n) {
            var r, i, s, o, u, a;
            return t == null && (t = null),
            n == null && (n = null),
            t == null && (t = $(window).width() - 88),
            n == null && (n = $(window).height() - 88),
            r = $(e),
            o = r.data("width"),
            s = r.data("height"),
            u = this.resizedImageDimensions(o, s, t, n),
            n > 980 && (n = 900),
            a = u.width,
            i = u.height,
            e.width = a,
            e.height = i,
            $(e).css({
                width: a,
                height: i
            })
        }
        ,
        n.prototype.cursorForAction = function(e) {
            switch (e) {
            case "prevImage":
                return this.showCursor("left");
            case "nextImage":
                return this.showCursor("right");
            case "zoomImage":
                return this.showCursor("zoom");
            default:
                return this.cursorImage.hide()
            }
        }
        ,
        n.prototype.destroy = function() {
            return this.imageViewer.destroy(),
            this.lightbox.hide(),
            $(window).off("keyup")
        }
        ,
        n.prototype.getImageDataRecord = function(e) {
            var t, n, r;
            return t = $(e),
            r = null,
            n = $("#container").data("images"),
            $.each(n, function(e) {
                return function(e, n) {
                    if (n.zoomedImageUrl === t.attr("src") || n.imageUrl === t.attr("src"))
                        return r = n
                }
            }(this)),
            r
        }
        ,
        n.prototype.hasNextImage = function() {
            return this.index < this.data.length - 1
        }
        ,
        n.prototype.hasPrevImage = function() {
            return this.index > 0
        }
        ,
        n.prototype.hasZoom = function() {
            return this.data[this.index].zoomedImageUrl != null
        }
        ,
        n.prototype.keyUpListener = function(e) {
            if (e.which === 27) {
                if (this.lightbox.isVisible())
                    return this.lightbox.hide()
            } else {
                if (e.which === 39)
                    return this.showNextImage();
                if (e.which === 37)
                    return this.showPrevImage();
                if (e.which === 32)
                    return this.lightbox.isVisible() ? this.lightbox.hide() : this.tryShowingLightbox()
            }
        }
        ,
        n.prototype.newImageViewer = function(e, t) {
            return new BaseImageViewer(this,this.imageSelector,this.data,e,t)
        }
        ,
        n.prototype.newLightbox = function(e) {
            return new BaseLightbox(this.data,e,this.lightboxOptions())
        }
        ,
        n.prototype.pushImageState = function() {
            if (this.data[this.index].url != null)
                return e(this.data[this.index].url)
        }
        ,
        n.prototype.setupCursor = function() {
            if ($("#cursor-image")[0] == null)
                return this.cursorImage = $('<span id="cursor-image" />').appendTo("body").css({
                    position: "absolute",
                    zIndex: 1e4
                }).hide()
        }
        ,
        n.prototype.setCursorImageLocation = function(e) {
            var t;
            return t = this.cursorImage.attr("class"),
            t === "left" ? this.cursorImage.css({
                top: Math.min($(window).height() - 15 - 9, e.pageY),
                left: Math.min($(window).width() + 15 + 9, e.pageX - 20)
            }) : t === "right" ? this.cursorImage.css({
                top: Math.min($(window).height() - 15 - 9, e.pageY),
                left: Math.min($(window).width() - 15 - 9, e.pageX + 17)
            }) : t === "zoom" ? this.cursorImage.css({
                top: Math.min($(window).height() - 15 - 9, e.pageY - 24),
                left: Math.min($(window).width() - 15 - 9, e.pageX - 8)
            }) : this.cursorImage.css({
                top: Math.min($(window).height() - 15 - 9, e.pageY),
                left: Math.min($(window).width() - 15 - 9, e.pageX + 17)
            })
        }
        ,
        n.prototype.showCursor = function(e) {
            return this.cursorImage.show().attr("class", e)
        }
        ,
        n.prototype.showImageAtIndex = function(e, t) {
            return this.index = e,
            this.imageViewer.showImage(this.index),
            this.lightbox.setScrollingFromMousePosEnabled(!1),
            this.lightbox.visible && this.lightbox.showImageWithSrc(this.data[this.index].zoomedImageUrl, this.data[this.index].imageUrl, t),
            this.pushImageState(),
            $(this).trigger("image:changed")
        }
        ,
        n.prototype.showNextImage = function() {
            if (this.isChangingImage)
                return;
            this.isChangingImage = !0;
            if (this.hasNextImage())
                return this.showImageAtIndex(this.index + 1)
        }
        ,
        n.prototype.showPrevImage = function() {
            if (this.isChangingImage)
                return;
            this.isChangingImage = !0;
            if (this.hasPrevImage())
                return this.showImageAtIndex(this.index - 1)
        }
        ,
        n.prototype.tryShowingLightbox = function() {
            if (this.lightbox.tryShow(this.index))
                return setTimeout(function(e) {
                    return function() {
                        return e.cursorImage.hide()
                    }
                }(this), 10)
        }
        ,
        n.prototype.zoomedImageUrl = function(e) {
            return this.data[this.index].zoomedImageUrl
        }
        ,
        n.prototype.imageUrl = function(e) {
            return this.data[this.index].imageUrl
        }
        ,
        n
    }()
}
.call(this),
function() {
    var e, t = function(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    };
    e = function(e, t) {
        var n, r, i;
        for (n = r = 0,
        i = e.length; r < i; n = r += 1)
            if (e[n] === t)
                return e.slice(n, 1);
        return e
    }
    ,
    this.Loader = function() {
        function n(e, n) {
            var r;
            this.imageUrls = e,
            this.loadVideo = t(this.loadVideo, this),
            this.loadImage = t(this.loadImage, this),
            this.imgOnLoad = t(this.imgOnLoad, this),
            this.preloadAll = t(this.preloadAll, this),
            r = $(this.arrayRotateToIndex(this.imageUrls, n)),
            this.imageUrls = $.filter(r, function(e, t) {
                return !t.match(/(mp4|flv)$/)
            }),
            this.videoUrls = $.filter(r, function(e, t) {
                return t.match(/(mp4|flv)$/)
            }),
            this.images = [],
            this.imageUrlsLoaded = {},
            this.loaded = 0,
            this.allLoaded = !1,
            this.canceled = null
        }
        return n.prototype.arrayRotateToIndex = function(e, t) {
            return e.slice(t).concat(e.slice(0, t))
        }
        ,
        n.prototype.preloadNow = function(t, n) {
            var r, i, s;
            t = this.arrayRotateToIndex(t, n),
            this.cancel();
            for (r = 0,
            i = t.length; r < i; r++)
                s = t[r],
                this.imageUrls = e(this.imageUrls, s),
                this.imageUrls.unshift(s);
            return this.preloadAll()
        }
        ,
        n.prototype.preloadAll = function() {
            var e, t, n, r, i, s, o;
            this.canceled = !1,
            s = [];
            for (t = r = 0,
            i = Math.min(3, this.imageUrls.length); r < i; t = r += 1)
                n = new Image,
                e = this,
                o = this.imageUrls.shift(),
                n.onload = function() {
                    return e.imgOnLoad(this)
                }
                ,
                n.src = o,
                n.mark = "" + t,
                s.push(this.images.push(n));
            return s
        }
        ,
        n.prototype.imgOnLoad = function(e) {
            this.loaded++,
            this.didLoad(e);
            if (!(this.imageUrls.length > 0))
                return this.allLoaded = !0;
            if (!this.canceled)
                return e.src = this.imageUrls.shift()
        }
        ,
        n.prototype.didLoad = function(e) {
            return this.imageUrlsLoaded[URI(e.src).path()] = !0
        }
        ,
        n.prototype.isPreloaded = function(e) {
            return this.imageUrlsLoaded[URI(e).path()]
        }
        ,
        n.prototype.cancel = function() {
            var e, t, n;
            this.canceled = !0;
            for (e = t = 0,
            n = this.images.length; t < n; e = t += 1)
                delete this.images[e];
            return !0
        }
        ,
        n.prototype.loadImage = function(e) {
            var t, n, r, i, s, o, u, a, f, l, c, h;
            e == null && (e = {}),
            a = $.extend({
                noFadeOut: !1,
                noFadeIn: !1
            }, e),
            c = a.url,
            f = a.selector,
            r = a.loadingSelector,
            n = a.loadingCompletedCallback,
            t = a.displayCompletedCallback,
            o = a.noFadeOut,
            s = a.noFadeIn,
            u = $(f);
            if (u[0] == null)
                return;
            l = f.replace(/[^\w]/, "-") + "-loading",
            $("#" + l).remove(),
            c.match(/(mp4|flv)$/) && (h = c,
            c = "http://images.supremenewyork.com/assets/splash/" + h.split(/[\\\/]/).pop().split(".")[0] + ".jpg"),
            i = $('<img src="' + c + '" id="' + l + '"/>').insertAfter(u),
            $.each(u.prop("attributes"), function() {
                var e;
                if ((e = this.name) !== "id" && e !== "src" && e !== "width" && e !== "height")
                    return i.attr(this.name, this.value)
            }),
            i.addClass("image-viewer-loading"),
            i.imagesLoaded(function(e) {
                return function() {
                    var e, o;
                    return o = i[0].naturalWidth || i[0].width,
                    e = i[0].naturalHeight || i[0].height,
                    i.data("width", o).data("height", e),
                    $(f).promise().done(function() {
                        var e;
                        n != null && n(i[0]),
                        $(r).removeClass("loading"),
                        e = u.attr("id"),
                        $(u).remove(),
                        i.attr("id", e).removeClass("image-viewer-loading");
                        if (!s)
                            return i.css({
                                opacity: 0
                            }).animate({
                                opacity: 1
                            }, 200, function() {
                                if (t != null)
                                    return t(i[0])
                            });
                        if (t != null)
                            return t(i[0])
                    })
                }
            }(this));
            if (!o)
                return $(f).animate({
                    opacity: 0
                }, 200, function(e) {
                    return function() {
                        if (!e.imageLoaded(i[0]))
                            return $(r).addClass("loading")
                    }
                }(this));
            s || $(f).css({
                opacity: 0
            });
            if (!this.imageLoaded(i[0]))
                return $(r).addClass("loading")
        }
        ,
        n.prototype.loadVideo = function(e) {
            var t, n, r, i, s, o, u, a, f, l, c, h, p, d;
            e == null && (e = {}),
            a = $.extend({}, e),
            c = a.url,
            r = a.height,
            d = a.width,
            f = a.selector,
            s = a.loadingSelector,
            i = a.loadingCompletedCallback,
            n = a.displayCompletedCallback,
            u = $(f);
            if (u[0] == null)
                return;
            return l = f.replace(/[^\w]/, "-") + "-loading",
            $("#" + l).remove(),
            p = "video-" + Date.now(),
            r = r || 576,
            d = d || 1024,
            o = $('<div class="movie" id="' + l + '" style="height:' + r + "px;width:" + d + 'px;"><div id="' + p + '"></div></div>').insertAfter(u),
            o.addClass("image-viewer-loading"),
            h = !1,
            t = function(e, t) {
                return setTimeout(t, e)
            }
            ,
            t(100, function() {
                var e;
                return e = jwplayer(p).setup({
                    file: "http://d3o425gsw3lvjf.cloudfront.net/" + c.split(/[\\\/]/).pop(),
                    image: "http://images.supremenewyork.com/assets/splash/" + c.split(/[\\\/]/).pop().split(".")[0] + ".jpg?c=2",
                    modes: [{
                        type: "flash",
                        src: "http://images.supremenewyork.com/assets/jwplayer/jw_player.swf"
                    }, {
                        type: "html5"
                    }],
                    width: "100%",
                    height: "100%",
                    skin: "http://images.supremenewyork.com/assets/jwplayer/bekle/bekle.xml"
                })
            }),
            $(f).animate({
                opacity: 0
            }, 200, function(e) {
                return function() {
                    var e;
                    return h = !0,
                    i != null && i(o[0]),
                    $(s).removeClass("loading"),
                    e = u.attr("id"),
                    $(u).remove(),
                    o.attr("id", e),
                    $(f).animate({
                        opacity: 100
                    }, 200).removeClass("image-viewer-loading"),
                    o.css({
                        opacity: 0
                    }).animate({
                        opacity: 1
                    }, 200, function() {
                        if (n != null)
                            return n(o[0])
                    })
                }
            }(this))
        }
        ,
        n.prototype.imageLoaded = function(e) {
            return e && (typeof e.complete != "undefined" ? e.complete : !isNaN(e.width + e.height) && e.width + e.height !== 0)
        }
        ,
        n
    }()
}
.call(this),
function() {
    var e, t = function(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    }, n = function(e, t) {
        function i() {
            this.constructor = e
        }
        for (var n in t)
            r.call(t, n) && (e[n] = t[n]);
        return i.prototype = t.prototype,
        e.prototype = new i,
        e.__super__ = t.prototype,
        e
    }, r = {}.hasOwnProperty;
    e = this.Turbolinks.willVisit,
    this.LookBookImageController = function(r) {
        function i(e, n, r, s) {
            this.updateCount = t(this.updateCount, this),
            this.thumbnailHovered = t(this.thumbnailHovered, this),
            this.thumbnailClicked = t(this.thumbnailClicked, this),
            this.showImageAtIndex = t(this.showImageAtIndex, this),
            this.pushImageState = t(this.pushImageState, this),
            this.newLightbox = t(this.newLightbox, this),
            this.mainImageClicked = t(this.mainImageClicked, this),
            this.keyUpListener = t(this.keyUpListener, this),
            i.__super__.constructor.call(this, e, n, r, s),
            this.imageViewer.setMousePositionActionsEnabled(!1),
            $(this.lightbox).on("lightbox:hide", function(e) {
                return function(t) {
                    return e.imageViewer.setMousePositionActionsEnabled(!1)
                }
            }(this)),
            $(this.lightbox).on("lightbox:show", function(e) {
                return function(t) {
                    return e.imageViewer.setMousePositionActionsEnabled(!0)
                }
            }(this)),
            $(this).on("image:changed", function(e) {
                return function(t) {
                    return $("footer .description p").html($("#lookbook-items li:nth-of-type(" + (e.index + 1) + ") a").data("caption"))
                }
            }(this)),
            $(document).one("page:change", function(e) {
                return function() {
                    return e.destroy()
                }
            }(this)),
            $("#lookbook-items a").attr("data-no-turbolink", "").hover(this.thumbnailHovered).click(this.thumbnailClicked),
            $("#img-main-link").on("click", this.mainImageClicked)
        }
        return n(i, r),
        i.prototype.keyUpListener = function(e) {}
        ,
        i.prototype.mainImageClicked = function(e) {
            return this.lightbox.tryShow(this.index),
            e.preventDefault(),
            !1
        }
        ,
        i.prototype.newLightbox = function(e) {
            var t;
            return t = {
                containerClass: "lightbox-lookbook",
                scaleZoomedImage: !1,
                imagePadding: 0
            },
            new window.LookBookLightbox(this,this.data,e,t)
        }
        ,
        i.prototype.pushImageState = function() {
            document.title = document.title.replace(/\d+\/\d+/, this.index + 1 + "/" + this.data.length);
            if (this.data[this.index].url != null)
                return e(this.data[this.index].url)
        }
        ,
        i.prototype.showImageAtIndex = function(e, t) {
            return i.__super__.showImageAtIndex.call(this, e, t),
            this.updateCount(e)
        }
        ,
        i.prototype.thumbnailClicked = function(e) {
            var t;
            return t = $(e.delegateTarget),
            this.showImageAtIndex(t.parent().index()),
            $("footer .description p").html(t.data("caption")),
            e.preventDefault()
        }
        ,
        i.prototype.thumbnailHovered = function(e) {
            var t;
            return $("span#count").toggleClass("count-red"),
            t = $(e.delegateTarget),
            this.updateCount(t.parent().index())
        }
        ,
        i.prototype.updateCount = function(e) {
            return $("span#count").html(e + 1)
        }
        ,
        i
    }(this.BaseImageController)
}
.call(this),
function() {
    var e, t = function(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    }, n = function(e, t) {
        function i() {
            this.constructor = e
        }
        for (var n in t)
            r.call(t, n) && (e[n] = t[n]);
        return i.prototype = t.prototype,
        e.prototype = new i,
        e.__super__ = t.prototype,
        e
    }, r = {}.hasOwnProperty;
    e = this.Turbolinks.willVisit,
    this.PreviewImageController = function(r) {
        function i(e, n, r) {
            this.pushImageState = t(this.pushImageState, this),
            this.newImageViewer = t(this.newImageViewer, this),
            this.newLightbox = t(this.newLightbox, this),
            this.imageViewerChanged = t(this.imageViewerChanged, this),
            this.forwardControlClicked = t(this.forwardControlClicked, this),
            this.documentFetched = t(this.documentFetched, this),
            this.backControlClicked = t(this.backControlClicked, this),
            this.adjustControls = t(this.adjustControls, this),
            this.mixpanel = t(this.mixpanel, this),
            window.preview_scale_ratio = window.screen.width > 321 ? .58 : .5,
            i.__super__.constructor.call(this, e, n, $(".preview-item #container[data-images]").data("images"), r),
            $(".controls a.back").on("click", this.backControlClicked),
            $(".controls a.forward").on("click", this.forwardControlClicked),
            $(this).on("image:changed", this.imageViewerChanged),
            $(document).one("page:change", this.documentFetched),
            this.mixpanel(),
            $(".preview-item #container[data-images] a").click(function(e) {
                return function(e) {
                    return !1
                }
            }(this))
        }
        return n(i, r),
        i.prototype.mixpanel = function() {
            var e, t;
            if ($("footer").data("color-name") && mixpanel)
                return e = $("html").hasClass("touch") ? "Mobile" : "Desktop",
                t = {
                    URL: location.pathname,
                    "Page Name": document.title,
                    Season: $("#container").data("season-no"),
                    "Device Type": e,
                    "Product Name": $(".description h2").text(),
                    "Product Color": $("footer").data("color-name"),
                    "Preview Origin": window.preview_origin || "Direct Link"
                },
                window.preview_origin !== "View All" && (t["Grid Number"] = $("#container").data("grid-no")),
                mixpanel.track("Preview Image", t)
        }
        ,
        i.prototype.adjustControls = function(e) {
            return $(".controls a").removeClass("hidden-placeholder"),
            e === 0 && $(".controls a.back").addClass("hidden-placeholder"),
            e === this.data.length - 1 && $(".controls a.forward").addClass("hidden-placeholder"),
            $(".controls span").html(e + 1),
            $("footer").data("color-name", this.data[e].color),
            $("footer .description h2").html(this.data[e].title),
            $("footer .description p").html(this.data[e].caption),
            this.mixpanel()
        }
        ,
        i.prototype.backControlClicked = function(e) {
            return this.showPrevImage(),
            e.preventDefault()
        }
        ,
        i.prototype.documentFetched = function() {
            return this.destroy(),
            $(window).off("resize")
        }
        ,
        i.prototype.forwardControlClicked = function(e) {
            return this.showNextImage(),
            e.preventDefault()
        }
        ,
        i.prototype.imageViewerChanged = function(e) {
            return this.adjustControls(this.index)
        }
        ,
        i.prototype.newLightbox = function(e) {
            var t;
            return t = {
                containerClass: "opaque",
                scaleZoomedImage: !0,
                imagePadding: $("html").hasClass("touch") ? 8 : 88
            },
            new window.PreviewLightbox(this,this.data,e,t)
        }
        ,
        i.prototype.newImageViewer = function(e, t) {
            return this.data[this.index].imageUrl.includes("mp4") ? $("#new_embed_row").fadeIn("slow") : $("#new_embed_row").hide(),
            BaseImageController.isTouchDevice() ? (new PreviewTouchImageViewer(this,this.imageSelector,this.data,e,t,this.index),
            $(window).on("orientationchange", function(n) {
                return function() {
                    return n.newImageViewer(e, t)
                }
            }(this))) : new PreviewImageViewer(this,this.imageSelector,this.data,e,t)
        }
        ,
        i.prototype.pushImageState = function() {
            document.title = "Supreme " + this.data[this.index].title,
            this.data[this.index].imageUrl.includes("mp4") ? $("#new_embed_row").fadeIn("slow") : $("#new_embed_row").hide();
            if (this.data[this.index].url != null)
                return e(this.data[this.index].url)
        }
        ,
        i
    }(this.BaseImageController)
}
.call(this),
function() {
    var e, t = function(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    };
    e = this.Turbolinks.willVisit,
    this.BaseLightbox = function() {
        function e(e, n, r) {
            this.data = e,
            this.imageLoader = n,
            this.options = r,
            this.tryShow = t(this.tryShow, this),
            this.showImageWithSrc = t(this.showImageWithSrc, this),
            this.show = t(this.show, this),
            this.scrollFromMousePos = t(this.scrollFromMousePos, this),
            this.isVisible = t(this.isVisible, this),
            this.imageDidLoad = t(this.imageDidLoad, this),
            this.hide = t(this.hide, this),
            this.hasZoom = t(this.hasZoom, this),
            this.destroy = t(this.destroy, this),
            this.addLightboxToDom = t(this.addLightboxToDom, this),
            this.options.imagePadding == null && console.log("WARNING: BaseLightbox initialized without imagePadding"),
            this.visible = !1,
            this._scrollBigImageIntervalId = null
        }
        return e.prototype.addLightboxToDom = function() {
            return $('<div id="lightbox-container" class="' + this.options.lightboxContainerClass + '" style="display: none">\n  <div class="inner loading">\n      <a href="#" class="close"></a>\n      <img id="lightbox-image" />\n    </div>\n  </div>').appendTo($("body"))
        }
        ,
        e.prototype.destroy = function() {
            return $(this).off("lightbox:show").off("lightbox:hide")
        }
        ,
        e.prototype.hasZoom = function(e) {
            return this.data[e].zoomedImageUrl != null
        }
        ,
        e.prototype.hide = function() {
            if (this.visible)
                return this.visible = !1,
                $("#lightbox-image").off("mouseover"),
                $("#lightbox-image").off("mouseout"),
                $(window).off("resize"),
                $("#lightbox-container").remove(),
                $(this).trigger("lightbox:hide")
        }
        ,
        e.prototype.imageDidLoad = function(e) {
            return this.options.scaleZoomedImage ? (BaseImageController.resizeImageToAspectFit(e, $(window).width() - this.options.imagePadding, $(window).height() - this.options.imagePadding),
            BaseImageController.centerImage(e, $(window).height())) : $(window).height() < $(e).data("height") ? $(e).css({
                marginTop: 0
            }) : BaseImageController.centerImage(e, $(window).height()),
            $("#lightbox-container").show(),
            this.imageLoader.didLoad(e)
        }
        ,
        e.prototype.isVisible = function() {
            return this.visible
        }
        ,
        e.prototype.scrollFromMousePos = function(e) {
            var t, n, r, i;
            return n = $("#lightbox-image"),
            i = $(window).height(),
            t = (e - i / 2) / 25,
            r = parseFloat(n.css("margin-top") || 0) - t,
            r = Math.min(0, Math.max(i - n.height(), r)),
            n.css({
                marginTop: r
            })
        }
        ,
        e.prototype.setScrollingFromMousePosEnabled = function(e) {
            if (!e)
                return window.clearInterval(this._scrollBigImageIntervalId),
                this._scrollBigImageIntervalId = null;
            if (this._scrollBigImageIntervalId == null)
                return this._scrollBigImageIntervalId = window.setInterval(function(e) {
                    return function() {
                        return e.lightbox.scrollFromMousePos(e.mouseY)
                    }
                }(this), 10)
        }
        ,
        e.prototype.shouldScrollFromMousePos = function() {
            return this.visible && $(window).height() < $("#lightbox-image").height()
        }
        ,
        e.prototype.show = function(e) {
            var t, n, r, i, s;
            this.visible = !0,
            this.addLightboxToDom(),
            $(window).on("resize", function(e) {
                return function() {
                    return e.imageDidLoad($("#lightbox-image")[0])
                }
            }(this));
            if (this.imageLoader != null && !this.imageLoader.allLoaded) {
                this.imageLoader.cancel(),
                i = [],
                s = this.data;
                for (t = 0,
                r = s.length; t < r; t += 1)
                    n = s[t],
                    n.zoomedImageUrl != null && i.push(n.zoomedImageUrl);
                this.imageLoader.imageLoaded($("#lightbox-image")[0]) ? this.imageLoader.preloadNow(i, e) : $("#lightbox-image").one("load", function(t) {
                    return function() {
                        return t.imageLoader.preloadNow(i, e)
                    }
                }(this))
            }
            return this.showImageWithSrc(this.data[e].zoomedImageUrl, this.data[e].imageUrl, !0),
            $(this).trigger("lightbox:show")
        }
        ,
        e.prototype.showImageWithSrc = function(e, t, n) {
            return !this.options.scaleZoomedImage || this.imageLoader.isPreloaded(e) ? this.imageLoader.loadImage({
                url: e,
                selector: "#lightbox-image",
                loadingSelector: "#lightbox-container .inner",
                loadingCompletedCallback: function(e) {
                    return function(t) {
                        return e.imageDidLoad(t)
                    }
                }(this),
                noFadeOut: n,
                noFadeIn: n
            }) : this.imageLoader.loadImage({
                url: t,
                selector: "#lightbox-image",
                loadingSelector: "#lightbox-container .inner",
                loadingCompletedCallback: function(e) {
                    return function(t) {
                        return e.imageDidLoad(t)
                    }
                }(this),
                displayCompletedCallback: function(t) {
                    return function(n) {
                        return t.imageLoader.loadImage({
                            url: e,
                            selector: "#lightbox-image",
                            loadingSelector: "#lightbox-container .inner",
                            loadingCompletedCallback: function(e) {
                                return t.imageDidLoad(e)
                            },
                            noFadeOut: !0,
                            noFadeIn: !0
                        })
                    }
                }(this),
                noFadeOut: n,
                noFadeIn: n
            })
        }
        ,
        e.prototype.tryShow = function(e) {
            if (this.hasZoom(e) && !this.visible)
                return this.show(e)
        }
        ,
        e
    }()
}
.call(this),
function() {
    var e = function(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    }
      , t = function(e, t) {
        function i() {
            this.constructor = e
        }
        for (var r in t)
            n.call(t, r) && (e[r] = t[r]);
        return i.prototype = t.prototype,
        e.prototype = new i,
        e.__super__ = t.prototype,
        e
    }
      , n = {}.hasOwnProperty;
    this.LookBookLightbox = function(n) {
        function r(t, n, i, s) {
            this.controller = t,
            this.scroll = e(this.scroll, this),
            this.mouseMoved = e(this.mouseMoved, this),
            this.imageDidLoad = e(this.imageDidLoad, this),
            this.imageClicked = e(this.imageClicked, this),
            this.canScrollVertically = e(this.canScrollVertically, this),
            this.actionForMousePos = e(this.actionForMousePos, this),
            this.mouseUpListener = e(this.mouseUpListener, this),
            this.mouseDownListener = e(this.mouseDownListener, this),
            r.__super__.constructor.call(this, n, i, s),
            $("body").on("click", "#lightbox-container", this.imageClicked),
            $("body").on("mousemove", "#lightbox-container", this.mouseMoved),
            $("body").on("mousedown", "#lightbox-container", this.mouseDownListener),
            $("body").on("mouseup", "#lightbox-container", this.mouseUpListener),
            this.imageHeight = 1248,
            this.canScrollVertically() && (this.scrollInterval = setInterval(this.scroll, 40),
            this.scrollVelocity = 0)
        }
        return t(r, n),
        r.prototype.mouseDownListener = function(e) {
            var t;
            t = $("#cursor-image");
            if (t[0] != null && typeof t.attr("class") != "undefined")
                return t.attr("class", t.attr("class").replace("-down", "")),
                t.attr("class", t.attr("class") + "-down")
        }
        ,
        r.prototype.mouseUpListener = function(e) {
            var t;
            t = $("#cursor-image");
            if (t[0] != null && typeof t.attr("class") != "undefined")
                return t.attr("class", t.attr("class").replace("-down", ""))
        }
        ,
        r.prototype.actionForMousePos = function(e, t) {
            var n, r, i;
            n = $("#lightbox-container img"),
            r = n.position().left,
            i = n.position().left + n.width();
            if (e < r && this.controller.hasPrevImage())
                return "prevImage";
            if (e > i && this.controller.hasNextImage())
                return "nextImage"
        }
        ,
        r.prototype.canScrollVertically = function() {
            var e;
            return !1
        }
        ,
        r.prototype.imageClicked = function(e) {
            switch (this.actionForMousePos(e.pageX, e.pageY)) {
            case "prevImage":
                return this.controller.showPrevImage();
            case "nextImage":
                return this.controller.showNextImage();
            default:
                return this.controller.showNextImage(),
                this.hide()
            }
        }
        ,
        r.prototype.imageDidLoad = function(e) {
            var t;
            return r.__super__.imageDidLoad.call(this, e),
            t = Math.min(this.imageHeight, $(window).height()),
            $("#lightbox-container").css("height", t),
            $("#lightbox-container img").css("height", t),
            $("#lightbox-container .inner").css("height", "auto")
        }
        ,
        r.prototype.mouseMoved = function(e) {
            this.controller.setCursorImageLocation(e),
            this.controller.cursorForAction(this.actionForMousePos(e.pageX, e.pageY));
            if (this.canScrollVertically())
                return this.scrollVelocity = Math.round((e.pageY - $(window).height() / 2) / 10)
        }
        ,
        r.prototype.scroll = function() {
            var e, t, n;
            if ($("body").hasClass("previews"))
                return;
            return n = parseInt($("#lightbox-container .inner").css("top")) || 0,
            n -= this.scrollVelocity * 1,
            t = 0,
            e = -(this.imageHeight - $(window).height()),
            n < e && (n = e),
            n > t && (n = t),
            $("#lightbox-container .inner").css("top", n)
        }
        ,
        r
    }(this.BaseLightbox)
}
.call(this),
function() {
    var e = function(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    }
      , t = function(e, t) {
        function i() {
            this.constructor = e
        }
        for (var r in t)
            n.call(t, r) && (e[r] = t[r]);
        return i.prototype = t.prototype,
        e.prototype = new i,
        e.__super__ = t.prototype,
        e
    }
      , n = {}.hasOwnProperty;
    this.PreviewLightbox = function(n) {
        function r(t, n, i, s) {
            this.controller = t,
            this.hide = e(this.hide, this),
            this.show = e(this.show, this),
            this.touchDeviceOrientationChanged = e(this.touchDeviceOrientationChanged, this),
            this.closeIconClicked = e(this.closeIconClicked, this),
            this.closeIconTapped = e(this.closeIconTapped, this),
            this.imageClicked = e(this.imageClicked, this),
            this.addLightboxToDom = e(this.addLightboxToDom, this),
            r.__super__.constructor.call(this, n, i, s),
            $("html").hasClass("touch") || $("body").on("click", "#lightbox-image", this.imageClicked),
            $(window).on("orientationchange", this.touchDeviceOrientationChanged)
        }
        return t(r, n),
        r.prototype.addLightboxToDom = function() {
            r.__super__.addLightboxToDom.call(this),
            $("#lightbox-container").height($(window).height());
            if ($("html").hasClass("touch"))
                return $("#lightbox-container").find(".close").on("touchstart", this.closeIconTapped),
                $("#lightbox-container").find(".close").on("click", this.closeIconClicked)
        }
        ,
        r.prototype.imageClicked = function(e) {
            return e.preventDefault(),
            this.hide()
        }
        ,
        r.prototype.closeIconTapped = function(e) {
            return e.preventDefault(),
            this.hide()
        }
        ,
        r.prototype.closeIconClicked = function(e) {
            return e.preventDefault()
        }
        ,
        r.prototype.touchDeviceOrientationChanged = function() {
            return this.hide()
        }
        ,
        r.prototype.show = function(e) {
            r.__super__.show.call(this, e);
            if ($("html").hasClass("touch"))
                return document.body.style.opacity = .9999,
                setTimeout(function() {
                    return document.body.style.opacity = 1
                }, 1),
                setTimeout(function() {
                    return window.scrollTo(0, 0)
                }, 100)
        }
        ,
        r.prototype.hide = function() {
            return r.__super__.hide.call(this)
        }
        ,
        r
    }(this.BaseLightbox)
}
.call(this),
function(e) {
    function w(e, t, n) {
        var r = e[0];
        o = /er/.test(n) ? f : /bl/.test(n) ? u : s,
        active = n == l ? {
            checked: r[s],
            disabled: r[u],
            indeterminate: e.attr(f) == "true" || e.attr(a) == "false"
        } : r[o];
        if (/^(ch|di|in)/.test(n) && !active)
            E(e, o);
        else if (/^(un|en|de)/.test(n) && active)
            S(e, o);
        else if (n == l)
            for (var o in active)
                active[o] ? E(e, o, !0) : S(e, o, !0);
        else if (!t || n == "toggle")
            t || e[m]("ifClicked"),
            active ? r[c] !== i && S(e, o) : E(e, o)
    }
    function E(r, l, h) {
        var p = r[0]
          , m = r.parent()
          , g = l == s
          , b = l == f
          , w = b ? a : g ? o : "enabled"
          , E = T(p, w + N(p[c]))
          , x = T(p, l + N(p[c]));
        if (p[l] !== !0) {
            if (!h && l == s && p[c] == i && p.name) {
                var k = r.closest("form")
                  , L = 'input[name="' + p.name + '"]';
                L = k.length ? k.find(L) : e(L),
                L.each(function() {
                    this !== p && e.data(this, t) && S(e(this), l)
                })
            }
            b ? (p[l] = !0,
            p[s] && S(r, s, "force")) : (h || (p[l] = !0),
            g && p[f] && S(r, f, !1)),
            C(r, g, l, h)
        }
        p[u] && !!T(p, y, !0) && m.find("." + n).css(y, "default"),
        m[d](x || T(p, l)),
        m[v](E || T(p, w) || "")
    }
    function S(e, t, r) {
        var i = e[0]
          , l = e.parent()
          , h = t == s
          , p = t == f
          , m = p ? a : h ? o : "enabled"
          , g = T(i, m + N(i[c]))
          , b = T(i, t + N(i[c]));
        if (i[t] !== !1) {
            if (p || !r || r == "force")
                i[t] = !1;
            C(e, h, m, r)
        }
        !i[u] && !!T(i, y, !0) && l.find("." + n).css(y, "pointer"),
        l[v](b || T(i, t) || ""),
        l[d](g || T(i, m))
    }
    function x(n, r) {
        if (e.data(n, t)) {
            var i = e(n);
            i.parent().html(i.attr("style", e.data(n, t).s || "")[m](r || "")),
            i.off(".i").unwrap(),
            e(g + '[for="' + n.id + '"]').add(i.closest(g)).off(".i")
        }
    }
    function T(n, r, i) {
        if (e.data(n, t))
            return e.data(n, t).o[r + (i ? "" : "Class")]
    }
    function N(e) {
        return e.charAt(0).toUpperCase() + e.slice(1)
    }
    function C(e, t, n, r) {
        r || (t && e[m]("ifToggled"),
        e[m]("ifChanged")[m]("if" + N(n)))
    }
    var t = "iCheck"
      , n = t + "-helper"
      , r = "checkbox"
      , i = "radio"
      , s = "checked"
      , o = "un" + s
      , u = "disabled"
      , a = "determinate"
      , f = "in" + a
      , l = "update"
      , c = "type"
      , h = "click"
      , p = "touchbegin.i touchend.i"
      , d = "addClass"
      , v = "removeClass"
      , m = "trigger"
      , g = "label"
      , y = "cursor"
      , b = /ipad|iphone|ipod|android|blackberry|windows phone|opera mini/i.test(navigator.userAgent);
    e.fn[t] = function(o, a) {
        var y = ":" + r + ", :" + i
          , T = e()
          , N = function(t) {
            t.each(function() {
                var t = e(this);
                t.is(y) ? T = T.add(t) : T = T.add(t.find(y))
            })
        };
        if (/^(check|uncheck|toggle|indeterminate|determinate|disable|enable|update|destroy)$/i.test(o))
            return o = o.toLowerCase(),
            N(this),
            T.each(function() {
                o == "destroy" ? x(this, "ifDestroyed") : w(e(this), !0, o),
                e.isFunction(a) && a()
            });
        if (typeof o == "object" || !o) {
            var C = e.extend({
                checkedClass: s,
                disabledClass: u,
                indeterminateClass: f,
                labelHover: !0
            }, o)
              , k = C.handle
              , L = C.hoverClass || "hover"
              , A = C.focusClass || "focus"
              , O = C.activeClass || "active"
              , M = !!C.labelHover
              , _ = C.labelHoverClass || "hover"
              , D = ("" + C.increaseArea).replace("%", "") | 0;
            if (k == r || k == i)
                y = ":" + k;
            return D < -50 && (D = -50),
            N(this),
            T.each(function() {
                x(this);
                var o = e(this)
                  , a = this
                  , f = a.id
                  , y = -D + "%"
                  , T = 100 + D * 2 + "%"
                  , N = {
                    position: "absolute",
                    top: y,
                    left: y,
                    display: "block",
                    width: T,
                    height: T,
                    margin: 0,
                    padding: 0,
                    background: "#fff",
                    border: 0,
                    opacity: 0
                }
                  , k = b ? {
                    position: "absolute",
                    visibility: "hidden"
                } : D ? N : {
                    position: "absolute",
                    opacity: 0
                }
                  , P = a[c] == r ? C.checkboxClass || "i" + r : C.radioClass || "i" + i
                  , H = e(g + '[for="' + f + '"]').add(o.closest(g))
                  , B = o.wrap('<div class="' + P + '"/>')[m]("ifCreated").parent().append(C.insert)
                  , j = e('<ins class="' + n + '"/>').css(N).appendTo(B);
                o.data(t, {
                    o: C,
                    s: o.attr("style")
                }).css(k),
                !!C.inheritClass && B[d](a.className),
                !!C.inheritID && f && B.attr("id", t + "-" + f),
                B.css("position") == "static" && B.css("position", "relative"),
                w(o, !0, l),
                H.length && H.on(h + ".i mouseenter.i mouseleave.i " + p, function(t) {
                    var n = t[c]
                      , r = e(this);
                    if (!a[u]) {
                        n == h ? w(o, !1, !0) : M && (/ve|nd/.test(n) ? (B[v](L),
                        r[v](_)) : (B[d](L),
                        r[d](_)));
                        if (!b)
                            return !1;
                        t.stopPropagation()
                    }
                }),
                o.on(h + ".i focus.i blur.i keyup.i keydown.i keypress.i", function(e) {
                    var t = e[c]
                      , n = e.keyCode;
                    if (t == h)
                        return !1;
                    if (t == "keydown" && n == 32) {
                        if (a[c] != i || !a[s])
                            a[s] ? S(o, s) : E(o, s);
                        return !1
                    }
                    t == "keyup" && a[c] == i ? !a[s] && E(o, s) : /us|ur/.test(t) && B[t == "blur" ? v : d](A)
                }),
                j.on(h + " mousedown mouseup mouseover mouseout " + p, function(e) {
                    var t = e[c]
                      , n = /wn|up/.test(t) ? O : L;
                    if (!a[u]) {
                        t == h ? w(o, !1, !0) : (/wn|er|in/.test(t) ? B[d](n) : B[v](n + " " + O),
                        H.length && M && n == L && H[/ut|nd/.test(t) ? v : d](_));
                        if (!b)
                            return !1;
                        e.stopPropagation()
                    }
                })
            })
        }
        return this
    }
}(jQuery),
function() {
    var e, t = [].indexOf || function(e) {
        for (var t = 0, n = this.length; t < n; t++)
            if (t in this && this[t] === e)
                return t;
        return -1
    }
    ;
    e = jQuery,
    e.fn.validateCreditCard = function(n, r) {
        var i, s, o, u, a, f, l, c, h, p, d, v;
        o = [{
            name: "amex",
            pattern: /^3[47]/,
            valid_length: [15]
        }, {
            name: "diners_club_carte_blanche",
            pattern: /^30[0-5]/,
            valid_length: [14]
        }, {
            name: "diners_club_international",
            pattern: /^36/,
            valid_length: [14]
        }, {
            name: "jcb",
            pattern: /^35(2[89]|[3-8][0-9])/,
            valid_length: [16]
        }, {
            name: "laser",
            pattern: /^(6304|670[69]|6771)/,
            valid_length: [16, 17, 18, 19]
        }, {
            name: "visa_electron",
            pattern: /^(4026|417500|4508|4844|491(3|7))/,
            valid_length: [16]
        }, {
            name: "visa",
            pattern: /^4/,
            valid_length: [16]
        }, {
            name: "mastercard",
            pattern: /^5[1-5]/,
            valid_length: [16]
        }, {
            name: "maestro",
            pattern: /^(5018|5020|5038|6304|6759|676[1-3])/,
            valid_length: [12, 13, 14, 15, 16, 17, 18, 19]
        }, {
            name: "discover",
            pattern: /^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)/,
            valid_length: [16]
        }],
        r == null && (r = {}),
        r.accept == null && (r.accept = function() {
            var e, t, n;
            n = [];
            for (e = 0,
            t = o.length; e < t; e++)
                i = o[e],
                n.push(i.name);
            return n
        }()),
        p = r.accept;
        for (a = 0,
        c = p.length; a < c; a++) {
            s = p[a];
            if (t.call(function() {
                var e, t, n;
                n = [];
                for (e = 0,
                t = o.length; e < t; e++)
                    i = o[e],
                    n.push(i.name);
                return n
            }(), s) < 0)
                throw "Credit card type '" + s + "' is not supported"
        }
        return u = function(e) {
            var n, u, a;
            a = function() {
                var e, n, s, u;
                u = [];
                for (e = 0,
                n = o.length; e < n; e++)
                    i = o[e],
                    (s = i.name,
                    t.call(r.accept, s) >= 0) && u.push(i);
                return u
            }();
            for (n = 0,
            u = a.length; n < u; n++) {
                s = a[n];
                if (e.match(s.pattern))
                    return s
            }
            return null
        }
        ,
        l = function(e) {
            var t, n, r, i, s, o;
            o = 0,
            s = e.split("").reverse();
            for (i = n = 0,
            r = s.length; n < r; i = ++n)
                t = s[i],
                t = +t,
                i % 2 ? (t *= 2,
                t < 10 ? o += t : o += t - 9) : o += t;
            return o % 10 === 0
        }
        ,
        f = function(e, n) {
            var r;
            return r = e.length,
            t.call(n.valid_length, r) >= 0
        }
        ,
        v = function(e) {
            var t, r;
            return s = u(e),
            r = !1,
            t = !1,
            s != null && (r = l(e),
            t = f(e, s)),
            n({
                card_type: s,
                luhn_valid: r,
                length_valid: t
            })
        }
        ,
        d = function() {
            var t;
            return t = h(e(this).val()),
            v(t)
        }
        ,
        h = function(e) {
            return e.replace(/[ -]/g, "")
        }
        ,
        this.bind("input", function() {
            return e(this).unbind("keyup"),
            d.call(this)
        }),
        this.bind("keyup", function() {
            return d.call(this)
        }),
        this.length !== 0 && d.call(this),
        this
    }
}
.call(this),
function(e) {
    e.extend(e.fn, {
        validate: function(n) {
            if (!this.length)
                return n && n.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."),
                void 0;
            var r = e.data(this[0], "validator");
            return r ? r : (this.attr("novalidate", "novalidate"),
            r = new e.validator(n,this[0]),
            e.data(this[0], "validator", r),
            r.settings.onsubmit && (this.validateDelegate(":submit", "click", function(n) {
                r.settings.submitHandler && (r.submitButton = n.target),
                e(n.target).hasClass("cancel") && (r.cancelSubmit = !0),
                void 0 !== e(n.target).attr("formnovalidate") && (r.cancelSubmit = !0)
            }),
            this.submit(function(n) {
                function s() {
                    var s;
                    return r.settings.submitHandler ? (r.submitButton && (s = e("<input type='hidden'/>").attr("name", r.submitButton.name).val(e(r.submitButton).val()).appendTo(r.currentForm)),
                    r.settings.submitHandler.call(r, r.currentForm, n),
                    r.submitButton && s.remove(),
                    !1) : !0
                }
                return r.settings.debug && n.preventDefault(),
                r.cancelSubmit ? (r.cancelSubmit = !1,
                s()) : r.form() ? r.pendingRequest ? (r.formSubmitted = !0,
                !1) : s() : (r.focusInvalid(),
                !1)
            })),
            r)
        },
        valid: function() {
            if (e(this[0]).is("form"))
                return this.validate().form();
            var n = !0
              , r = e(this[0].form).validate();
            return this.each(function() {
                n = n && r.element(this)
            }),
            n
        },
        removeAttrs: function(n) {
            var r = {}
              , i = this;
            return e.each(n.split(/\s/), function(e, t) {
                r[t] = i.attr(t),
                i.removeAttr(t)
            }),
            r
        },
        rules: function(n, r) {
            var i = this[0];
            if (n) {
                var s = e.data(i.form, "validator").settings
                  , o = s.rules
                  , u = e.validator.staticRules(i);
                switch (n) {
                case "add":
                    e.extend(u, e.validator.normalizeRule(r)),
                    delete u.messages,
                    o[i.name] = u,
                    r.messages && (s.messages[i.name] = e.extend(s.messages[i.name], r.messages));
                    break;
                case "remove":
                    if (!r)
                        return delete o[i.name],
                        u;
                    var a = {};
                    return e.each(r.split(/\s/), function(e, t) {
                        a[t] = u[t],
                        delete u[t]
                    }),
                    a
                }
            }
            var f = e.validator.normalizeRules(e.extend({}, e.validator.classRules(i), e.validator.attributeRules(i), e.validator.dataRules(i), e.validator.staticRules(i)), i);
            if (f.required) {
                var l = f.required;
                delete f.required,
                f = e.extend({
                    required: l
                }, f)
            }
            return f
        }
    }),
    e.extend(e.expr[":"], {
        blank: function(n) {
            return !e.trim("" + e(n).val())
        },
        filled: function(n) {
            return !!e.trim("" + e(n).val())
        },
        unchecked: function(n) {
            return !e(n).prop("checked")
        }
    }),
    e.validator = function(n, r) {
        this.settings = e.extend(!0, {}, e.validator.defaults, n),
        this.currentForm = r,
        this.init()
    }
    ,
    e.validator.format = function(n, r) {
        return 1 === arguments.length ? function() {
            var r = e.makeArray(arguments);
            return r.unshift(n),
            e.validator.format.apply(this, r)
        }
        : (arguments.length > 2 && r.constructor !== Array && (r = e.makeArray(arguments).slice(1)),
        r.constructor !== Array && (r = [r]),
        e.each(r, function(e, t) {
            n = n.replace(RegExp("\\{" + e + "\\}", "g"), function() {
                return t
            })
        }),
        n)
    }
    ,
    e.extend(e.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            validClass: "valid",
            errorElement: "label",
            focusInvalid: !0,
            errorContainer: e([]),
            errorLabelContainer: e([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function(e) {
                this.lastActive = e,
                this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, e, this.settings.errorClass, this.settings.validClass),
                this.addWrapper(this.errorsFor(e)).hide())
            },
            onfocusout: function(e) {
                this.checkable(e) || !(e.name in this.submitted) && this.optional(e) || this.element(e)
            },
            onkeyup: function(e, t) {
                (9 !== t.which || "" !== this.elementValue(e)) && (e.name in this.submitted || e === this.lastElement) && this.element(e)
            },
            onclick: function(e) {
                e.name in this.submitted ? this.element(e) : e.parentNode.name in this.submitted && this.element(e.parentNode)
            },
            highlight: function(n, r, i) {
                "radio" === n.type ? this.findByName(n.name).addClass(r).removeClass(i) : e(n).addClass(r).removeClass(i)
            },
            unhighlight: function(n, r, i) {
                "radio" === n.type ? this.findByName(n.name).removeClass(r).addClass(i) : e(n).removeClass(r).addClass(i)
            }
        },
        setDefaults: function(n) {
            e.extend(e.validator.defaults, n)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date (ISO).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            creditcard: "Please enter a valid credit card number.",
            equalTo: "Please enter the same value again.",
            maxlength: e.validator.format("Please enter no more than {0} characters."),
            minlength: e.validator.format("Please enter at least {0} characters."),
            rangelength: e.validator.format("Please enter a value between {0} and {1} characters long."),
            range: e.validator.format("Please enter a value between {0} and {1}."),
            max: e.validator.format("Please enter a value less than or equal to {0}."),
            min: e.validator.format("Please enter a value greater than or equal to {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function() {
                function n(n) {
                    var r = e.data(this[0].form, "validator")
                      , i = "on" + n.type.replace(/^validate/, "");
                    r.settings[i] && r.settings[i].call(r, this[0], n)
                }
                this.labelContainer = e(this.settings.errorLabelContainer),
                this.errorContext = this.labelContainer.length && this.labelContainer || e(this.currentForm),
                this.containers = e(this.settings.errorContainer).add(this.settings.errorLabelContainer),
                this.submitted = {},
                this.valueCache = {},
                this.pendingRequest = 0,
                this.pending = {},
                this.invalid = {},
                this.reset();
                var r = this.groups = {};
                e.each(this.settings.groups, function(n, i) {
                    "string" == typeof i && (i = i.split(/\s/)),
                    e.each(i, function(e, t) {
                        r[t] = n
                    })
                });
                var i = this.settings.rules;
                e.each(i, function(n, r) {
                    i[n] = e.validator.normalizeRule(r)
                }),
                e(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout keyup", n).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", n),
                this.settings.invalidHandler && e(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler)
            },
            form: function() {
                return this.checkForm(),
                e.extend(this.submitted, this.errorMap),
                this.invalid = e.extend({}, this.errorMap),
                this.valid() || e(this.currentForm).triggerHandler("invalid-form", [this]),
                this.showErrors(),
                this.valid()
            },
            checkForm: function() {
                this.prepareForm();
                for (var e = 0, t = this.currentElements = this.elements(); t[e]; e++)
                    this.check(t[e]);
                return this.valid()
            },
            element: function(n) {
                n = this.validationTargetFor(this.clean(n)),
                this.lastElement = n,
                this.prepareElement(n),
                this.currentElements = e(n);
                var r = this.check(n) !== !1;
                return r ? delete this.invalid[n.name] : this.invalid[n.name] = !0,
                this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)),
                this.showErrors(),
                r
            },
            showErrors: function(n) {
                if (n) {
                    e.extend(this.errorMap, n),
                    this.errorList = [];
                    for (var r in n)
                        this.errorList.push({
                            message: n[r],
                            element: this.findByName(r)[0]
                        });
                    this.successList = e.grep(this.successList, function(e) {
                        return !(e.name in n)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function() {
                e.fn.resetForm && e(this.currentForm).resetForm(),
                this.submitted = {},
                this.lastElement = null,
                this.prepareForm(),
                this.hideErrors(),
                this.elements().removeClass(this.settings.errorClass).removeData("previousValue")
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid)
            },
            objectLength: function(e) {
                var t = 0;
                for (var n in e)
                    t++;
                return t
            },
            hideErrors: function() {
                this.addWrapper(this.toHide).hide()
            },
            valid: function() {
                return 0 === this.size()
            },
            size: function() {
                return this.errorList.length
            },
            focusInvalid: function() {
                if (this.settings.focusInvalid)
                    try {
                        e(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                    } catch (n) {}
            },
            findLastActive: function() {
                var n = this.lastActive;
                return n && 1 === e.grep(this.errorList, function(e) {
                    return e.element.name === n.name
                }).length && n
            },
            elements: function() {
                var n = this
                  , r = {};
                return e(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function() {
                    return !this.name && n.settings.debug && window.console && console.error("%o has no name assigned", this),
                    this.name in r || !n.objectLength(e(this).rules()) ? !1 : (r[this.name] = !0,
                    !0)
                })
            },
            clean: function(n) {
                return e(n)[0]
            },
            errors: function() {
                var n = this.settings.errorClass.replace(" ", ".");
                return e(this.settings.errorElement + "." + n, this.errorContext)
            },
            reset: function() {
                this.successList = [],
                this.errorList = [],
                this.errorMap = {},
                this.toShow = e([]),
                this.toHide = e([]),
                this.currentElements = e([])
            },
            prepareForm: function() {
                this.reset(),
                this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function(e) {
                this.reset(),
                this.toHide = this.errorsFor(e)
            },
            elementValue: function(n) {
                var r = e(n).attr("type")
                  , i = e(n).val();
                return "radio" === r || "checkbox" === r ? e("input[name='" + e(n).attr("name") + "']:checked").val() : "string" == typeof i ? i.replace(/\r/g, "") : i
            },
            check: function(n) {
                n = this.validationTargetFor(this.clean(n));
                var r, i = e(n).rules(), s = !1, o = this.elementValue(n);
                for (var u in i) {
                    var a = {
                        method: u,
                        parameters: i[u]
                    };
                    try {
                        if (r = e.validator.methods[u].call(this, o, n, a.parameters),
                        "dependency-mismatch" === r) {
                            s = !0;
                            continue
                        }
                        if (s = !1,
                        "pending" === r)
                            return this.toHide = this.toHide.not(this.errorsFor(n)),
                            void 0;
                        if (!r)
                            return this.formatAndAdd(n, a),
                            !1
                    } catch (f) {
                        throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + n.id + ", check the '" + a.method + "' method.", f),
                        f
                    }
                }
                return s ? void 0 : (this.objectLength(i) && this.successList.push(n),
                !0)
            },
            customDataMessage: function(n, r) {
                return e(n).data("msg-" + r.toLowerCase()) || n.attributes && e(n).attr("data-msg-" + r.toLowerCase())
            },
            customMessage: function(e, t) {
                var n = this.settings.messages[e];
                return n && (n.constructor === String ? n : n[t])
            },
            findDefined: function() {
                for (var e = 0; arguments.length > e; e++)
                    if (void 0 !== arguments[e])
                        return arguments[e];
                return void 0
            },
            defaultMessage: function(n, r) {
                return this.findDefined(this.customMessage(n.name, r), this.customDataMessage(n, r), !this.settings.ignoreTitle && n.title || void 0, e.validator.messages[r], "<strong>Warning: No message defined for " + n.name + "</strong>")
            },
            formatAndAdd: function(n, r) {
                var i = this.defaultMessage(n, r.method)
                  , s = /\$?\{(\d+)\}/g;
                "function" == typeof i ? i = i.call(this, r.parameters, n) : s.test(i) && (i = e.validator.format(i.replace(s, "{$1}"), r.parameters)),
                this.errorList.push({
                    message: i,
                    element: n
                }),
                this.errorMap[n.name] = i,
                this.submitted[n.name] = i
            },
            addWrapper: function(e) {
                return this.settings.wrapper && (e = e.add(e.parent(this.settings.wrapper))),
                e
            },
            defaultShowErrors: function() {
                var e, t;
                for (e = 0; this.errorList[e]; e++) {
                    var n = this.errorList[e];
                    this.settings.highlight && this.settings.highlight.call(this, n.element, this.settings.errorClass, this.settings.validClass),
                    this.showLabel(n.element, n.message)
                }
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)),
                this.settings.success)
                    for (e = 0; this.successList[e]; e++)
                        this.showLabel(this.successList[e]);
                if (this.settings.unhighlight)
                    for (e = 0,
                    t = this.validElements(); t[e]; e++)
                        this.settings.unhighlight.call(this, t[e], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow),
                this.hideErrors(),
                this.addWrapper(this.toShow).show()
            },
            validElements: function() {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function() {
                return e(this.errorList).map(function() {
                    return this.element
                })
            },
            showLabel: function(n, r) {
                var i = this.errorsFor(n);
                i.length ? (i.removeClass(this.settings.validClass).addClass(this.settings.errorClass),
                i.html(r)) : (i = e("<" + this.settings.errorElement + ">").attr("for", this.idOrName(n)).addClass(this.settings.errorClass).html(r || ""),
                this.settings.wrapper && (i = i.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()),
                this.labelContainer.append(i).length || (this.settings.errorPlacement ? this.settings.errorPlacement(i, e(n)) : i.insertAfter(n))),
                !r && this.settings.success && (i.text(""),
                "string" == typeof this.settings.success ? i.addClass(this.settings.success) : this.settings.success(i, n)),
                this.toShow = this.toShow.add(i)
            },
            errorsFor: function(n) {
                var r = this.idOrName(n);
                return this.errors().filter(function() {
                    return e(this).attr("for") === r
                })
            },
            idOrName: function(e) {
                return this.groups[e.name] || (this.checkable(e) ? e.name : e.id || e.name)
            },
            validationTargetFor: function(e) {
                return this.checkable(e) && (e = this.findByName(e.name).not(this.settings.ignore)[0]),
                e
            },
            checkable: function(e) {
                return /radio|checkbox/i.test(e.type)
            },
            findByName: function(n) {
                return e(this.currentForm).find("[name='" + n + "']")
            },
            getLength: function(n, r) {
                switch (r.nodeName.toLowerCase()) {
                case "select":
                    return e("option:selected", r).length;
                case "input":
                    if (this.checkable(r))
                        return this.findByName(r.name).filter(":checked").length
                }
                return n.length
            },
            depend: function(e, t) {
                return this.dependTypes[typeof e] ? this.dependTypes[typeof e](e, t) : !0
            },
            dependTypes: {
                "boolean": function(e) {
                    return e
                },
                string: function(n, r) {
                    return !!e(n, r.form).length
                },
                "function": function(e, t) {
                    return e(t)
                }
            },
            optional: function(n) {
                var r = this.elementValue(n);
                return !e.validator.methods.required.call(this, r, n) && "dependency-mismatch"
            },
            startRequest: function(e) {
                this.pending[e.name] || (this.pendingRequest++,
                this.pending[e.name] = !0)
            },
            stopRequest: function(n, r) {
                this.pendingRequest--,
                0 > this.pendingRequest && (this.pendingRequest = 0),
                delete this.pending[n.name],
                r && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (e(this.currentForm).submit(),
                this.formSubmitted = !1) : !r && 0 === this.pendingRequest && this.formSubmitted && (e(this.currentForm).triggerHandler("invalid-form", [this]),
                this.formSubmitted = !1)
            },
            previousValue: function(n) {
                return e.data(n, "previousValue") || e.data(n, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(n, "remote")
                })
            }
        },
        classRuleSettings: {
            required: {
                required: !0
            },
            email: {
                email: !0
            },
            url: {
                url: !0
            },
            date: {
                date: !0
            },
            dateISO: {
                dateISO: !0
            },
            number: {
                number: !0
            },
            digits: {
                digits: !0
            },
            creditcard: {
                creditcard: !0
            }
        },
        addClassRules: function(n, r) {
            n.constructor === String ? this.classRuleSettings[n] = r : e.extend(this.classRuleSettings, n)
        },
        classRules: function(n) {
            var r = {}
              , i = e(n).attr("class");
            return i && e.each(i.split(" "), function() {
                this in e.validator.classRuleSettings && e.extend(r, e.validator.classRuleSettings[this])
            }),
            r
        },
        attributeRules: function(n) {
            var r = {}
              , i = e(n)
              , s = i[0].getAttribute("type");
            for (var o in e.validator.methods) {
                var u;
                "required" === o ? (u = i.get(0).getAttribute(o),
                "" === u && (u = !0),
                u = !!u) : u = i.attr(o),
                /min|max/.test(o) && (null === s || /number|range|text/.test(s)) && (u = Number(u)),
                u ? r[o] = u : s === o && "range" !== s && (r[o] = !0)
            }
            return r.maxlength && /-1|2147483647|524288/.test(r.maxlength) && delete r.maxlength,
            r
        },
        dataRules: function(n) {
            var r, i, s = {}, o = e(n);
            for (r in e.validator.methods)
                i = o.data("rule-" + r.toLowerCase()),
                void 0 !== i && (s[r] = i);
            return s
        },
        staticRules: function(n) {
            var r = {}
              , i = e.data(n.form, "validator");
            return i.settings.rules && (r = e.validator.normalizeRule(i.settings.rules[n.name]) || {}),
            r
        },
        normalizeRules: function(n, r) {
            return e.each(n, function(s, o) {
                if (o === !1)
                    return delete n[s],
                    void 0;
                if (o.param || o.depends) {
                    var u = !0;
                    switch (typeof o.depends) {
                    case "string":
                        u = !!e(o.depends, r.form).length;
                        break;
                    case "function":
                        u = o.depends.call(r, r)
                    }
                    u ? n[s] = void 0 !== o.param ? o.param : !0 : delete n[s]
                }
            }),
            e.each(n, function(s, o) {
                n[s] = e.isFunction(o) ? o(r) : o
            }),
            e.each(["minlength", "maxlength"], function() {
                n[this] && (n[this] = Number(n[this]))
            }),
            e.each(["rangelength", "range"], function() {
                var r;
                n[this] && (e.isArray(n[this]) ? n[this] = [Number(n[this][0]), Number(n[this][1])] : "string" == typeof n[this] && (r = n[this].split(/[\s,]+/),
                n[this] = [Number(r[0]), Number(r[1])]))
            }),
            e.validator.autoCreateRanges && (n.min && n.max && (n.range = [n.min, n.max],
            delete n.min,
            delete n.max),
            n.minlength && n.maxlength && (n.rangelength = [n.minlength, n.maxlength],
            delete n.minlength,
            delete n.maxlength)),
            n
        },
        normalizeRule: function(n) {
            if ("string" == typeof n) {
                var r = {};
                e.each(n.split(/\s/), function() {
                    r[this] = !0
                }),
                n = r
            }
            return n
        },
        addMethod: function(n, r, i) {
            e.validator.methods[n] = r,
            e.validator.messages[n] = void 0 !== i ? i : e.validator.messages[n],
            3 > r.length && e.validator.addClassRules(n, e.validator.normalizeRule(n))
        },
        methods: {
            required: function(n, r, i) {
                if (!this.depend(i, r))
                    return "dependency-mismatch";
                if ("select" === r.nodeName.toLowerCase()) {
                    var s = e(r).val();
                    return s && s.length > 0
                }
                return this.checkable(r) ? this.getLength(n, r) > 0 : e.trim(n).length > 0
            },
            email: function(e, t) {
                return this.optional(t) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(e)
            },
            url: function(e, t) {
                return this.optional(t) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(e)
            },
            date: function(e, t) {
                return this.optional(t) || !/Invalid|NaN/.test("" + new Date(e))
            },
            dateISO: function(e, t) {
                return this.optional(t) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(e)
            },
            number: function(e, t) {
                return this.optional(t) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(e)
            },
            digits: function(e, t) {
                return this.optional(t) || /^\d+$/.test(e)
            },
            creditcard: function(e, t) {
                if (this.optional(t))
                    return "dependency-mismatch";
                if (/[^0-9 \-]+/.test(e))
                    return !1;
                var n = 0
                  , r = 0
                  , i = !1;
                e = e.replace(/\D/g, "");
                for (var s = e.length - 1; s >= 0; s--) {
                    var o = e.charAt(s);
                    r = parseInt(o, 10),
                    i && (r *= 2) > 9 && (r -= 9),
                    n += r,
                    i = !i
                }
                return 0 === n % 10
            },
            minlength: function(n, r, i) {
                var s = e.isArray(n) ? n.length : this.getLength(e.trim(n), r);
                return this.optional(r) || s >= i
            },
            maxlength: function(n, r, i) {
                var s = e.isArray(n) ? n.length : this.getLength(e.trim(n), r);
                return this.optional(r) || i >= s
            },
            rangelength: function(n, r, i) {
                var s = e.isArray(n) ? n.length : this.getLength(e.trim(n), r);
                return this.optional(r) || s >= i[0] && i[1] >= s
            },
            min: function(e, t, n) {
                return this.optional(t) || e >= n
            },
            max: function(e, t, n) {
                return this.optional(t) || n >= e
            },
            range: function(e, t, n) {
                return this.optional(t) || e >= n[0] && n[1] >= e
            },
            equalTo: function(n, r, i) {
                var s = e(i);
                return this.settings.onfocusout && s.unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
                    e(r).valid()
                }),
                n === s.val()
            },
            remote: function(n, r, i) {
                if (this.optional(r))
                    return "dependency-mismatch";
                var s = this.previousValue(r);
                if (this.settings.messages[r.name] || (this.settings.messages[r.name] = {}),
                s.originalMessage = this.settings.messages[r.name].remote,
                this.settings.messages[r.name].remote = s.message,
                i = "string" == typeof i && {
                    url: i
                } || i,
                s.old === n)
                    return s.valid;
                s.old = n;
                var o = this;
                this.startRequest(r);
                var u = {};
                return u[r.name] = n,
                e.ajax(e.extend(!0, {
                    url: i,
                    mode: "abort",
                    port: "validate" + r.name,
                    dataType: "json",
                    data: u,
                    success: function(i) {
                        o.settings.messages[r.name].remote = s.originalMessage;
                        var u = i === !0 || "true" === i;
                        if (u) {
                            var a = o.formSubmitted;
                            o.prepareElement(r),
                            o.formSubmitted = a,
                            o.successList.push(r),
                            delete o.invalid[r.name],
                            o.showErrors()
                        } else {
                            var f = {}
                              , l = i || o.defaultMessage(r, "remote");
                            f[r.name] = s.message = e.isFunction(l) ? l(n) : l,
                            o.invalid[r.name] = !0,
                            o.showErrors(f)
                        }
                        s.valid = u,
                        o.stopRequest(r, u)
                    }
                }, i)),
                "pending"
            }
        }
    }),
    e.format = e.validator.format
}(jQuery),
function(e) {
    var t = {};
    if (e.ajaxPrefilter)
        e.ajaxPrefilter(function(e, n, r) {
            var i = e.port;
            "abort" === e.mode && (t[i] && t[i].abort(),
            t[i] = r)
        });
    else {
        var n = e.ajax;
        e.ajax = function(r) {
            var s = ("mode"in r ? r : e.ajaxSettings).mode
              , o = ("port"in r ? r : e.ajaxSettings).port;
            return "abort" === s ? (t[o] && t[o].abort(),
            t[o] = n.apply(this, arguments),
            t[o]) : n.apply(this, arguments)
        }
    }
}(jQuery),
function(e) {
    e.extend(e.fn, {
        validateDelegate: function(n, r, i) {
            return this.bind(r, function(r) {
                var o = e(r.target);
                return o.is(n) ? i.apply(o, arguments) : void 0
            })
        }
    })
}(jQuery),
function() {
    function e(e) {
        return e.replace(/<.[^<>]*?>/g, " ").replace(/&nbsp;|&#160;/gi, " ").replace(/[.(),;:!?%#$'"_+=\/\-]*/g, "")
    }
    jQuery.validator.addMethod("maxWords", function(n, r, i) {
        return this.optional(r) || i >= e(n).match(/\b\w+\b/g).length
    }, jQuery.validator.format("Please enter {0} words or less.")),
    jQuery.validator.addMethod("minWords", function(n, r, i) {
        return this.optional(r) || e(n).match(/\b\w+\b/g).length >= i
    }, jQuery.validator.format("Please enter at least {0} words.")),
    jQuery.validator.addMethod("rangeWords", function(n, r, i) {
        var s = e(n)
          , o = /\b\w+\b/g;
        return this.optional(r) || s.match(o).length >= i[0] && s.match(o).length <= i[1]
    }, jQuery.validator.format("Please enter between {0} and {1} words."))
}(),
jQuery.validator.addMethod("letterswithbasicpunc", function(e, t) {
    return this.optional(t) || /^[a-z\-.,()'"\s]+$/i.test(e)
}, "Letters or punctuation only please"),
jQuery.validator.addMethod("alphanumeric", function(e, t) {
    return this.optional(t) || /^\w+$/i.test(e)
}, "Letters, numbers, and underscores only please"),
jQuery.validator.addMethod("lettersonly", function(e, t) {
    return this.optional(t) || /^[a-z]+$/i.test(e)
}, "Letters only please"),
jQuery.validator.addMethod("nowhitespace", function(e, t) {
    return this.optional(t) || /^\S+$/i.test(e)
}, "No white space please"),
jQuery.validator.addMethod("ziprange", function(e, t) {
    return this.optional(t) || /^90[2-5]\d\{2\}-\d{4}$/.test(e)
}, "Your ZIP-code must be in the range 902xx-xxxx to 905-xx-xxxx"),
jQuery.validator.addMethod("zipcodeUS", function(e, t) {
    return this.optional(t) || /\d{5}-\d{4}$|^\d{5}$/.test(e)
}, "The specified US ZIP Code is invalid"),
jQuery.validator.addMethod("integer", function(e, t) {
    return this.optional(t) || /^-?\d+$/.test(e)
}, "A positive or negative non-decimal number please"),
jQuery.validator.addMethod("vinUS", function(e) {
    if (17 !== e.length)
        return !1;
    var t, n, r, i, s, o, u = ["A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "P", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"], a = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 7, 9, 2, 3, 4, 5, 6, 7, 8, 9], f = [8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2], l = 0;
    for (t = 0; 17 > t; t++) {
        if (i = f[t],
        r = e.slice(t, t + 1),
        8 === t && (o = r),
        isNaN(r)) {
            for (n = 0; u.length > n; n++)
                if (r.toUpperCase() === u[n]) {
                    r = a[n],
                    r *= i,
                    isNaN(o) && 8 === n && (o = u[n]);
                    break
                }
        } else
            r *= i;
        l += r
    }
    return s = l % 11,
    10 === s && (s = "X"),
    s === o ? !0 : !1
}, "The specified vehicle identification number (VIN) is invalid."),
jQuery.validator.addMethod("dateITA", function(e, t) {
    var n = !1
      , r = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
    if (r.test(e)) {
        var i = e.split("/")
          , s = parseInt(i[0], 10)
          , o = parseInt(i[1], 10)
          , u = parseInt(i[2], 10)
          , a = new Date(u,o - 1,s);
        n = a.getFullYear() === u && a.getMonth() === o - 1 && a.getDate() === s ? !0 : !1
    } else
        n = !1;
    return this.optional(t) || n
}, "Please enter a correct date"),
jQuery.validator.addMethod("iban", function(e, t) {
    if (this.optional(t))
        return !0;
    if (!/^([a-zA-Z0-9]{4} ){2,8}[a-zA-Z0-9]{1,4}|[a-zA-Z0-9]{12,34}$/.test(e))
        return !1;
    var n = e.replace(/ /g, "").toUpperCase()
      , r = n.substring(0, 2)
      , i = {
        AL: "\\d{8}[\\dA-Z]{16}",
        AD: "\\d{8}[\\dA-Z]{12}",
        AT: "\\d{16}",
        AZ: "[\\dA-Z]{4}\\d{20}",
        BE: "\\d{12}",
        BH: "[A-Z]{4}[\\dA-Z]{14}",
        BA: "\\d{16}",
        BR: "\\d{23}[A-Z][\\dA-Z]",
        BG: "[A-Z]{4}\\d{6}[\\dA-Z]{8}",
        CR: "\\d{17}",
        HR: "\\d{17}",
        CY: "\\d{8}[\\dA-Z]{16}",
        CZ: "\\d{20}",
        DK: "\\d{14}",
        DO: "[A-Z]{4}\\d{20}",
        EE: "\\d{16}",
        FO: "\\d{14}",
        FI: "\\d{14}",
        FR: "\\d{10}[\\dA-Z]{11}\\d{2}",
        GE: "[\\dA-Z]{2}\\d{16}",
        DE: "\\d{18}",
        GI: "[A-Z]{4}[\\dA-Z]{15}",
        GR: "\\d{7}[\\dA-Z]{16}",
        GL: "\\d{14}",
        GT: "[\\dA-Z]{4}[\\dA-Z]{20}",
        HU: "\\d{24}",
        IS: "\\d{22}",
        IE: "[\\dA-Z]{4}\\d{14}",
        IL: "\\d{19}",
        IT: "[A-Z]\\d{10}[\\dA-Z]{12}",
        KZ: "\\d{3}[\\dA-Z]{13}",
        KW: "[A-Z]{4}[\\dA-Z]{22}",
        LV: "[A-Z]{4}[\\dA-Z]{13}",
        LB: "\\d{4}[\\dA-Z]{20}",
        LI: "\\d{5}[\\dA-Z]{12}",
        LT: "\\d{16}",
        LU: "\\d{3}[\\dA-Z]{13}",
        MK: "\\d{3}[\\dA-Z]{10}\\d{2}",
        MT: "[A-Z]{4}\\d{5}[\\dA-Z]{18}",
        MR: "\\d{23}",
        MU: "[A-Z]{4}\\d{19}[A-Z]{3}",
        MC: "\\d{10}[\\dA-Z]{11}\\d{2}",
        MD: "[\\dA-Z]{2}\\d{18}",
        ME: "\\d{18}",
        NL: "[A-Z]{4}\\d{10}",
        NO: "\\d{11}",
        PK: "[\\dA-Z]{4}\\d{16}",
        PS: "[\\dA-Z]{4}\\d{21}",
        PL: "\\d{24}",
        PT: "\\d{21}",
        RO: "[A-Z]{4}[\\dA-Z]{16}",
        SM: "[A-Z]\\d{10}[\\dA-Z]{12}",
        SA: "\\d{2}[\\dA-Z]{18}",
        RS: "\\d{18}",
        SK: "\\d{20}",
        SI: "\\d{15}",
        ES: "\\d{20}",
        SE: "\\d{20}",
        CH: "\\d{5}[\\dA-Z]{12}",
        TN: "\\d{20}",
        TR: "\\d{5}[\\dA-Z]{17}",
        AE: "\\d{3}\\d{16}",
        GB: "[A-Z]{4}\\d{14}",
        VG: "[\\dA-Z]{4}\\d{16}"
    }
      , s = i[r];
    if (s !== void 0) {
        var o = RegExp("^[A-Z]{2}\\d{2}" + s + "$", "");
        if (!o.test(n))
            return !1
    }
    for (var u, a = n.substring(4, n.length) + n.substring(0, 4), f = "", l = !0, c = 0; a.length > c; c++)
        u = a.charAt(c),
        "0" !== u && (l = !1),
        l || (f += "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(u));
    for (var h = "", p = "", d = 0; f.length > d; d++) {
        var v = f.charAt(d);
        p = "" + h + v,
        h = p % 97
    }
    return 1 === h
}, "Please specify a valid IBAN"),
jQuery.validator.addMethod("dateNL", function(e, t) {
    return this.optional(t) || /^(0?[1-9]|[12]\d|3[01])[\.\/\-](0?[1-9]|1[012])[\.\/\-]([12]\d)?(\d\d)$/.test(e)
}, "Please enter a correct date"),
jQuery.validator.addMethod("phoneNL", function(e, t) {
    return this.optional(t) || /^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)[1-9]((\s|\s?\-\s?)?[0-9]){8}$/.test(e)
}, "Please specify a valid phone number."),
jQuery.validator.addMethod("mobileNL", function(e, t) {
    return this.optional(t) || /^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)6((\s|\s?\-\s?)?[0-9]){8}$/.test(e)
}, "Please specify a valid mobile number"),
jQuery.validator.addMethod("postalcodeNL", function(e, t) {
    return this.optional(t) || /^[1-9][0-9]{3}\s?[a-zA-Z]{2}$/.test(e)
}, "Please specify a valid postal code"),
jQuery.validator.addMethod("bankaccountNL", function(e, t) {
    if (this.optional(t))
        return !0;
    if (!/^[0-9]{9}|([0-9]{2} ){3}[0-9]{3}$/.test(e))
        return !1;
    for (var n = e.replace(/ /g, ""), r = 0, i = n.length, s = 0; i > s; s++) {
        var o = i - s
          , u = n.substring(s, s + 1);
        r += o * u
    }
    return 0 === r % 11
}, "Please specify a valid bank account number"),
jQuery.validator.addMethod("giroaccountNL", function(e, t) {
    return this.optional(t) || /^[0-9]{1,7}$/.test(e)
}, "Please specify a valid giro account number"),
jQuery.validator.addMethod("bankorgiroaccountNL", function(e, t) {
    return this.optional(t) || $.validator.methods.bankaccountNL.call(this, e, t) || $.validator.methods.giroaccountNL.call(this, e, t)
}, "Please specify a valid bank or giro account number"),
jQuery.validator.addMethod("time", function(e, t) {
    return this.optional(t) || /^([01]\d|2[0-3])(:[0-5]\d){1,2}$/.test(e)
}, "Please enter a valid time, between 00:00 and 23:59"),
jQuery.validator.addMethod("time12h", function(e, t) {
    return this.optional(t) || /^((0?[1-9]|1[012])(:[0-5]\d){1,2}(\ ?[AP]M))$/i.test(e)
}, "Please enter a valid time in 12-hour am/pm format"),
jQuery.validator.addMethod("phoneUS", function(e, t) {
    return e = e.replace(/\s+/g, ""),
    this.optional(t) || e.length > 9 && e.match(/^(\+?1-?)?(\([2-9]\d{2}\)|[2-9]\d{2})-?[2-9]\d{2}-?\d{4}$/)
}, "Please specify a valid phone number"),
jQuery.validator.addMethod("phoneUK", function(e, t) {
    return e = e.replace(/\(|\)|\s+|-/g, ""),
    this.optional(t) || e.length > 9 && e.match(/^(?:(?:(?:00\s?|\+)44\s?)|(?:\(?0))(?:\d{2}\)?\s?\d{4}\s?\d{4}|\d{3}\)?\s?\d{3}\s?\d{3,4}|\d{4}\)?\s?(?:\d{5}|\d{3}\s?\d{3})|\d{5}\)?\s?\d{4,5})$/)
}, "Please specify a valid phone number"),
jQuery.validator.addMethod("mobileUK", function(e, t) {
    return e = e.replace(/\(|\)|\s+|-/g, ""),
    this.optional(t) || e.length > 9 && e.match(/^(?:(?:(?:00\s?|\+)44\s?|0)7(?:[45789]\d{2}|624)\s?\d{3}\s?\d{3})$/)
}, "Please specify a valid mobile number"),
jQuery.validator.addMethod("phonesUK", function(e, t) {
    return e = e.replace(/\(|\)|\s+|-/g, ""),
    this.optional(t) || e.length > 9 && e.match(/^(?:(?:(?:00\s?|\+)44\s?|0)(?:1\d{8,9}|[23]\d{9}|7(?:[45789]\d{8}|624\d{6})))$/)
}, "Please specify a valid uk phone number"),
jQuery.validator.addMethod("postcodeUK", function(e, t) {
    return this.optional(t) || /^((([A-PR-UWYZ][0-9])|([A-PR-UWYZ][0-9][0-9])|([A-PR-UWYZ][A-HK-Y][0-9])|([A-PR-UWYZ][A-HK-Y][0-9][0-9])|([A-PR-UWYZ][0-9][A-HJKSTUW])|([A-PR-UWYZ][A-HK-Y][0-9][ABEHMNPRVWXY]))\s?([0-9][ABD-HJLNP-UW-Z]{2})|(GIR)\s?(0AA))$/i.test(e)
}, "Please specify a valid UK postcode"),
jQuery.validator.addMethod("strippedminlength", function(e, t, n) {
    return jQuery(e).text().length >= n
}, jQuery.validator.format("Please enter at least {0} characters")),
jQuery.validator.addMethod("email2", function(e, t) {
    return this.optional(t) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(e)
}, jQuery.validator.messages.email),
jQuery.validator.addMethod("url2", function(e, t) {
    return this.optional(t) || /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(e)
}, jQuery.validator.messages.url),
jQuery.validator.addMethod("creditcardtypes", function(e, t, n) {
    if (/[^0-9\-]+/.test(e))
        return !1;
    e = e.replace(/\D/g, "");
    var r = 0;
    return n.mastercard && (r |= 1),
    n.visa && (r |= 2),
    n.amex && (r |= 4),
    n.dinersclub && (r |= 8),
    n.enroute && (r |= 16),
    n.discover && (r |= 32),
    n.jcb && (r |= 64),
    n.unknown && (r |= 128),
    n.all && (r = 255),
    1 & r && /^(5[12345])/.test(e) ? 16 === e.length : 2 & r && /^(4)/.test(e) ? 16 === e.length : 4 & r && /^(3[47])/.test(e) ? 15 === e.length : 8 & r && /^(3(0[012345]|[68]))/.test(e) ? 14 === e.length : 16 & r && /^(2(014|149))/.test(e) ? 15 === e.length : 32 & r && /^(6011)/.test(e) ? 16 === e.length : 64 & r && /^(3)/.test(e) ? 16 === e.length : 64 & r && /^(2131|1800)/.test(e) ? 15 === e.length : 128 & r ? !0 : !1
}, "Please enter a valid credit card number."),
jQuery.validator.addMethod("ipv4", function(e, t) {
    return this.optional(t) || /^(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)$/i.test(e)
}, "Please enter a valid IP v4 address."),
jQuery.validator.addMethod("ipv6", function(e, t) {
    return this.optional(t) || /^((([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))$/i.test(e)
}, "Please enter a valid IP v6 address."),
jQuery.validator.addMethod("pattern", function(e, t, n) {
    return this.optional(t) ? !0 : ("string" == typeof n && (n = RegExp("^(?:" + n + ")$")),
    n.test(e))
}, "Invalid format."),
jQuery.validator.addMethod("require_from_group", function(e, t, n) {
    var r = this
      , i = n[1]
      , s = $(i, t.form).filter(function() {
        return r.elementValue(this)
    }).length >= n[0];
    if (!$(t).data("being_validated")) {
        var o = $(i, t.form);
        o.data("being_validated", !0),
        o.valid(),
        o.data("being_validated", !1)
    }
    return s
}, jQuery.format("Please fill at least {0} of these fields.")),
jQuery.validator.addMethod("skip_or_fill_minimum", function(e, t, n) {
    var r = this
      , i = n[0]
      , s = n[1]
      , o = $(s, t.form).filter(function() {
        return r.elementValue(this)
    }).length
      , u = o >= i || 0 === o;
    if (!$(t).data("being_validated")) {
        var a = $(s, t.form);
        a.data("being_validated", !0),
        a.valid(),
        a.data("being_validated", !1)
    }
    return u
}, jQuery.format("Please either skip these fields or fill at least {0} of them.")),
jQuery.validator.addMethod("accept", function(e, t, n) {
    var r, i, s = "string" == typeof n ? n.replace(/\s/g, "").replace(/,/g, "|") : "image/*", o = this.optional(t);
    if (o)
        return o;
    if ("file" === $(t).attr("type") && (s = s.replace(/\*/g, ".*"),
    t.files && t.files.length))
        for (r = 0; t.files.length > r; r++)
            if (i = t.files[r],
            !i.type.match(RegExp(".?(" + s + ")$", "i")))
                return !1;
    return !0
}, jQuery.format("Please enter a value with a valid mimetype.")),
jQuery.validator.addMethod("extension", function(e, t, n) {
    return n = "string" == typeof n ? n.replace(/,/g, "|") : "png|jpe?g|gif",
    this.optional(t) || e.match(RegExp(".(" + n + ")$", "i"))
}, jQuery.format("Please enter a value with a valid extension.")),
"use strict",
function(e, t, n) {
    typeof define == "function" && define.amd ? define(["jquery"], e) : typeof exports == "object" ? module.exports = e(require("jquery")) : e(t || n)
}(function(e) {
    var t = function(t, n, r) {
        var i = {
            invalid: [],
            getCaret: function() {
                try {
                    var e, n = 0, r = t.get(0), s = document.selection, o = r.selectionStart;
                    if (s && navigator.appVersion.indexOf("MSIE 10") === -1)
                        e = s.createRange(),
                        e.moveStart("character", -i.val().length),
                        n = e.text.length;
                    else if (o || o === "0")
                        n = o;
                    return n
                } catch (u) {}
            },
            setCaret: function(e) {
                try {
                    if (t.is(":focus")) {
                        var n, r = t.get(0);
                        r.setSelectionRange ? r.setSelectionRange(e, e) : (n = r.createTextRange(),
                        n.collapse(!0),
                        n.moveEnd("character", e),
                        n.moveStart("character", e),
                        n.select())
                    }
                } catch (i) {}
            },
            events: function() {
                t.on("keydown.mask", function(e) {
                    t.data("mask-keycode", e.keyCode || e.which),
                    t.data("mask-previus-value", t.val()),
                    t.data("mask-previus-caret-pos", i.getCaret()),
                    i.maskDigitPosMapOld = i.maskDigitPosMap
                }).on(e.jMaskGlobals.useInput ? "input.mask" : "keyup.mask", i.behaviour).on("paste.mask drop.mask", function() {
                    setTimeout(function() {
                        t.keydown().keyup()
                    }, 100)
                }).on("change.mask", function() {
                    t.data("changed", !0)
                }).on("blur.mask", function() {
                    o !== i.val() && !t.data("changed") && t.trigger("change"),
                    t.data("changed", !1)
                }).on("blur.mask", function() {
                    o = i.val()
                }).on("focus.mask", function(t) {
                    r.selectOnFocus === !0 && e(t.target).select(),
                    e("#billing-info").find("label").removeClass("active"),
                    e(this).closest("tr").find("label:not(#address_2_spaceholder)").addClass("active")
                }).on("focusout.mask", function() {
                    r.clearIfNotMatch && !u.test(i.val()) && i.val("")
                })
            },
            getRegexMask: function() {
                var e = [], t, r, i, o, u, a;
                for (var f = 0; f < n.length; f++)
                    t = s.translation[n.charAt(f)],
                    t ? (r = t.pattern.toString().replace(/.{1}$|^.{1}/g, ""),
                    i = t.optional,
                    o = t.recursive,
                    o ? (e.push(n.charAt(f)),
                    u = {
                        digit: n.charAt(f),
                        pattern: r
                    }) : e.push(!i && !o ? r : r + "?")) : e.push(n.charAt(f).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"));
                return a = e.join(""),
                u && (a = a.replace(new RegExp("(" + u.digit + "(.*" + u.digit + ")?)"), "($1)?").replace(new RegExp(u.digit,"g"), u.pattern)),
                new RegExp(a)
            },
            destroyEvents: function() {
                var e = ["input", "keydown", "keyup", "paste", "drop", "blur", "focusout", ""];
                for (var n = 0; n < e.length; n++)
                    t.off(e[n] = ".mask")
            },
            val: function(e) {
                var n = t.is("input"), r = n ? "val" : "text", i;
                return arguments.length > 0 ? (t[r]() !== e && t[r](e),
                i = t) : i = t[r](),
                i
            },
            calculateCaretPosition: function() {
                var e = t.data("mask-previus-value") || ""
                  , n = i.getMasked()
                  , r = i.getCaret();
                if (e !== n) {
                    var s = t.data("mask-previus-caret-pos") || 0
                      , o = n.length
                      , u = e.length
                      , a = 0
                      , f = 0
                      , l = 0
                      , c = 0
                      , h = 0;
                    for (h = r; h < o; h++) {
                        if (!i.maskDigitPosMap[h])
                            break;
                        f++
                    }
                    for (h = r - 1; h >= 0; h--) {
                        if (!i.maskDigitPosMap[h])
                            break;
                        a++
                    }
                    for (h = r - 1; h >= 0; h--)
                        i.maskDigitPosMap[h] && l++;
                    for (h = s - 1; h >= 0; h--)
                        i.maskDigitPosMapOld[h] && c++;
                    if (r > u)
                        r = o;
                    else if (s >= r && s !== u) {
                        if (!i.maskDigitPosMapOld[r]) {
                            var d = r;
                            r -= c - l,
                            r -= a,
                            i.maskDigitPosMap[r] && (r = d)
                        }
                    } else
                        r > s && (r += l - c,
                        r += f)
                }
                return r
            },
            behaviour: function(n) {
                n = n || window.event,
                i.invalid = [];
                var r = t.data("mask-keycode");
                if (e.inArray(r, s.byPassKeys) === -1) {
                    var o = i.getMasked()
                      , u = i.getCaret();
                    return setTimeout(function() {
                        i.setCaret(i.calculateCaretPosition())
                    }, 10),
                    i.val(o),
                    i.setCaret(u),
                    i.callbacks(n)
                }
            },
            getMasked: function(e, t) {
                var o = [], u = t === undefined ? i.val() : t + "", a = 0, f = n.length, l = 0, c = u.length, h = 1, d = "push", v = -1, m = 0, g = [], y, b;
                r.reverse ? (d = "unshift",
                h = -1,
                y = 0,
                a = f - 1,
                l = c - 1,
                b = function() {
                    return a > -1 && l > -1
                }
                ) : (y = f - 1,
                b = function() {
                    return a < f && l < c
                }
                );
                var w;
                while (b()) {
                    var E = n.charAt(a)
                      , S = u.charAt(l)
                      , x = s.translation[E];
                    x ? (S.match(x.pattern) ? (o[d](S),
                    x.recursive && (v === -1 ? v = a : a === y && (a = v - h),
                    y === v && (a -= h)),
                    a += h) : S === w ? (m--,
                    w = undefined) : x.optional ? (a += h,
                    l -= h) : x.fallback ? (o[d](x.fallback),
                    a += h,
                    l -= h) : i.invalid.push({
                        p: l,
                        v: S,
                        e: x.pattern
                    }),
                    l += h) : (e || o[d](E),
                    S === E ? (g.push(l),
                    l += h) : (w = E,
                    g.push(l + m),
                    m++),
                    a += h)
                }
                var T = n.charAt(y);
                f === c + 1 && !s.translation[T] && o.push(T);
                var N = o.join("");
                return i.mapMaskdigitPositions(N, g, c),
                N
            },
            mapMaskdigitPositions: function(e, t, n) {
                var s = r.reverse ? e.length - n : 0;
                i.maskDigitPosMap = {};
                for (var o = 0; o < t.length; o++)
                    i.maskDigitPosMap[t[o] + s] = 1
            },
            callbacks: function(e) {
                var s = i.val()
                  , u = s !== o
                  , a = [s, e, t, r]
                  , f = function(e, t, n) {
                    typeof r[e] == "function" && t && r[e].apply(this, n)
                };
                f("onChange", u === !0, a),
                f("onKeyPress", u === !0, a),
                f("onComplete", s.length === n.length, a),
                f("onInvalid", i.invalid.length > 0, [s, e, t, i.invalid, r])
            }
        };
        t = e(t);
        var s = this, o = i.val(), u;
        n = typeof n == "function" ? n(i.val(), undefined, t, r) : n,
        s.mask = n,
        s.options = r,
        s.remove = function() {
            var e = i.getCaret();
            return i.destroyEvents(),
            i.val(s.getCleanVal()),
            i.setCaret(e),
            t
        }
        ,
        s.getCleanVal = function() {
            return i.getMasked(!0)
        }
        ,
        s.getMaskedVal = function(e) {
            return i.getMasked(!1, e)
        }
        ,
        s.init = function(o) {
            o = o || !1,
            r = r || {},
            s.clearIfNotMatch = e.jMaskGlobals.clearIfNotMatch,
            s.byPassKeys = e.jMaskGlobals.byPassKeys,
            s.translation = e.extend({}, e.jMaskGlobals.translation, r.translation),
            s = e.extend(!0, {}, s, r),
            u = i.getRegexMask();
            if (o)
                i.events(),
                i.val(i.getMasked());
            else {
                r.placeholder && t.attr("placeholder", r.placeholder),
                t.data("mask") && t.attr("autocomplete", "off");
                for (var a = 0, f = !0; a < n.length; a++) {
                    var l = s.translation[n.charAt(a)];
                    if (l && l.recursive) {
                        f = !1;
                        break
                    }
                }
                f && t.attr("maxlength", n.length),
                i.destroyEvents(),
                i.events();
                var c = i.getCaret();
                i.val(i.getMasked()),
                i.setCaret(c)
            }
        }
        ,
        s.init(!t.is("input"))
    };
    e.maskWatchers = {};
    var n = function() {
        var n = e(this)
          , i = {}
          , s = "data-mask-"
          , o = n.attr("data-mask");
        n.attr(s + "reverse") && (i.reverse = !0),
        n.attr(s + "clearifnotmatch") && (i.clearIfNotMatch = !0),
        n.attr(s + "selectonfocus") === "true" && (i.selectOnFocus = !0);
        if (r(n, o, i))
            return n.data("mask", new t(this,o,i))
    }
      , r = function(t, n, r) {
        r = r || {};
        var i = e(t).data("mask")
          , s = JSON.stringify
          , o = e(t).val() || e(t).text();
        try {
            return typeof n == "function" && (n = n(o)),
            typeof i != "object" || s(i.options) !== s(r) || i.mask !== n
        } catch (u) {}
    }
      , i = function(e) {
        var t = document.createElement("div"), n;
        return e = "on" + e,
        n = e in t,
        n || (t.setAttribute(e, "return;"),
        n = typeof t[e] == "function"),
        t = null,
        n
    };
    e.fn.mask = function(n, i) {
        i = i || {};
        var s = this.selector
          , o = e.jMaskGlobals
          , u = o.watchInterval
          , a = i.watchInputs || o.watchInputs
          , f = function() {
            if (r(this, n, i))
                return e(this).data("mask", new t(this,n,i))
        };
        return e(this).each(f),
        s && s !== "" && a && (clearInterval(e.maskWatchers[s]),
        e.maskWatchers[s] = setInterval(function() {
            e(document).find(s).each(f)
        }, u)),
        this
    }
    ,
    e.fn.masked = function(e) {
        return this.data("mask").getMaskedVal(e)
    }
    ,
    e.fn.unmask = function() {
        return clearInterval(e.maskWatchers[this.selector]),
        delete e.maskWatchers[this.selector],
        this.each(function() {
            var t = e(this).data("mask");
            t && t.remove().removeData("mask")
        })
    }
    ,
    e.fn.cleanVal = function() {
        return this.data("mask").getCleanVal()
    }
    ,
    e.applyDataMask = function(t) {
        t = t || e.jMaskGlobals.maskElements;
        var r = t instanceof e ? t : e(t);
        r.filter(e.jMaskGlobals.dataMaskAttr).each(n)
    }
    ;
    var s = {
        maskElements: "input,td,span,div",
        dataMaskAttr: "*[data-mask]",
        dataMask: !0,
        watchInterval: 300,
        watchInputs: !0,
        useInput: !/Chrome\/[2-4][0-9]|SamsungBrowser/.test(window.navigator.userAgent) && i("input"),
        watchDataMask: !1,
        byPassKeys: [9, 16, 17, 18, 36, 37, 38, 39, 40, 91],
        translation: {
            0: {
                pattern: /\d/
            },
            9: {
                pattern: /\d/,
                optional: !0
            },
            "#": {
                pattern: /\d/,
                recursive: !0
            },
            A: {
                pattern: /[a-zA-Z0-9]/
            },
            S: {
                pattern: /[a-zA-Z]/
            }
        }
    };
    e.jMaskGlobals = e.jMaskGlobals || {},
    s = e.jMaskGlobals = e.extend(!0, {}, s, e.jMaskGlobals),
    s.dataMask && e.applyDataMask(),
    setInterval(function() {
        e.jMaskGlobals.watchDataMask && e.applyDataMask()
    }, s.watchInterval)
}, window.jQuery, window.Zepto),
function(e) {
    if (typeof exports == "object" && typeof module != "undefined")
        module.exports = e();
    else if (typeof define == "function" && define.amd)
        define([], e);
    else {
        var t;
        typeof window != "undefined" ? t = window : typeof global != "undefined" ? t = global : typeof self != "undefined" ? t = self : t = this,
        t.floatingLabel = e()
    }
}(function() {
    var e, t, n;
    return function r(e, t, n) {
        function i(o, u) {
            if (!t[o]) {
                if (!e[o]) {
                    var a = typeof require == "function" && require;
                    if (!u && a)
                        return a(o, !0);
                    if (s)
                        return s(o, !0);
                    var f = new Error("Cannot find module '" + o + "'");
                    throw f.code = "MODULE_NOT_FOUND",
                    f
                }
                var l = t[o] = {
                    exports: {}
                };
                e[o][0].call(l.exports, function(t) {
                    var n = e[o][1][t];
                    return i(n ? n : t)
                }, l, l.exports, r, e, t, n)
            }
            return t[o].exports
        }
        var s = typeof require == "function" && require;
        for (var o = 0; o < n.length; o++)
            i(n[o]);
        return i
    }({
        1: [function(e, t, n) {
            "use strict";
            t.exports = {
                config: {
                    floatingClassName: "floating",
                    delegateEvents: !1
                },
                init: function(t) {
                    this._eventsDelegated = !1;
                    if (t instanceof Object)
                        for (var n in t)
                            window.Object.hasOwnProperty.call(t, n) && window.Object.hasOwnProperty.call(this.config, n) && (this.config[n] = t[n]);
                    window.addEventListener ? window.addEventListener("DOMContentLoaded", this.evaluateInputs.bind(this), !1) : document.onreadystatechange = this.evaluateInputs.bind(this)
                },
                evaluateInputs: function() {
                    function r(e, n) {
                        e.value.length ? (t.addClass(n, t.config.floatingClassName),
                        t.addClass(e, t.config.floatingClassName)) : (t.removeClass(n, t.config.floatingClassName),
                        t.removeClass(e, t.config.floatingClassName))
                    }
                    function i(e) {
                        e || (e = window.event);
                        var t = e.target || e.srcElement
                          , n = t.getAttribute("id")
                          , i = document.querySelector('label[for="' + n + '"]')
                          , s = /text|password|url|email|tel|search|number/i;
                        if (!i)
                            return;
                        (t.nodeName === "INPUT" && s.test(t.getAttribute("type")) || t.nodeName === "TEXTAREA") && r(t, i)
                    }
                    var t = this
                      , n = document.querySelectorAll('input[type="text"], input[type="password"], input[type="email"], input[type="search"], input[type="url"], input[type="tel"], input[type="number"], textarea');
                    for (var s = 0; s < n.length; s++)
                        if (n[s]instanceof window.Element && window.Object.hasOwnProperty.call(n, s)) {
                            var o = n[s]
                              , u = o.getAttribute("id")
                              , a = document.querySelector('label[for="' + u + '"]');
                            if (!a)
                                continue;
                            r(o, a),
                            this.removeEventListener(o, "keyup", i, !1),
                            this.removeEventListener(o, "input", i, !1),
                            this.config.delegateEvents || (this.addEventListener(o, "keyup", i, !1),
                            this.addEventListener(o, "input", i, !1))
                        }
                    this.config.delegateEvents && !this._eventsDelegated && (this.addEventListener(document.body, "keyup", i, !1),
                    this.addEventListener(document.body, "input", i, !1),
                    this._eventsDelegated = !0)
                },
                getPreviousSibling: function(t) {
                    t = t.previousSibling;
                    while (t && t.nodeType !== 1)
                        t = t.previousSibling;
                    return t
                },
                addClass: function(t, n) {
                    return t.classList ? t.classList.add(n) : t.className += " " + n,
                    t
                },
                removeClass: function(t, n) {
                    return t && (t.classList ? t.classList.remove(n) : t.className = t.className.replace(new RegExp("(^|\\b)" + n.split(" ").join("|") + "(\\b|$)","gi"), " ")),
                    t
                },
                hasClass: function(t, n) {
                    return t.classList ? t.classList.contains(n) : (new RegExp("(^| )" + n + "( |$)","gi")).test(t.className)
                },
                addEventListener: function(t, n, r, i) {
                    return i || (i = !1),
                    t.addEventListener ? (t.addEventListener(n, r, i),
                    t) : (n === "focus" && (n = "focusin"),
                    t.attachEvent("on" + n, function() {
                        r.call(t)
                    }),
                    t)
                },
                removeEventListener: function(t, n, r, i) {
                    return i || (i = !1),
                    t.removeEventListener ? t.removeEventListener(n, r, i) : (n === "focus" && (n = "focusin"),
                    t.detachEvent("on" + n, function() {
                        r.call(t)
                    })),
                    t
                }
            }
        }
        , {}]
    }, {}, [1])(1)
});
