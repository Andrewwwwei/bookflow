(function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const r of document.querySelectorAll('link[rel="modulepreload"]')) s(r);
    new MutationObserver(r => {
        for (const o of r) if (o.type === "childList") for (const i of o.addedNodes) i.tagName === "LINK" && i.rel === "modulepreload" && s(i)
    }).observe(document, {childList: !0, subtree: !0});

    function n(r) {
        const o = {};
        return r.integrity && (o.integrity = r.integrity), r.referrerPolicy && (o.referrerPolicy = r.referrerPolicy), r.crossOrigin === "use-credentials" ? o.credentials = "include" : r.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o
    }

    function s(r) {
        if (r.ep) return;
        r.ep = !0;
        const o = n(r);
        fetch(r.href, o)
    }
})();/**
 * @vue/shared v3.5.17
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **//*! #__NO_SIDE_EFFECTS__ */
function Js(e) {
    const t = Object.create(null);
    for (const n of e.split(",")) t[n] = 1;
    return n => n in t
}

const Z = {}, Mt = [], Ge = () => {
    }, _l = () => !1,
    Vn = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
    Gs = e => e.startsWith("onUpdate:"), he = Object.assign, Xs = (e, t) => {
        const n = e.indexOf(t);
        n > -1 && e.splice(n, 1)
    }, wl = Object.prototype.hasOwnProperty, G = (e, t) => wl.call(e, t), U = Array.isArray,
    Dt = e => Kn(e) === "[object Map]", To = e => Kn(e) === "[object Set]", $ = e => typeof e == "function",
    oe = e => typeof e == "string", yt = e => typeof e == "symbol", se = e => e !== null && typeof e == "object",
    Po = e => (se(e) || $(e)) && $(e.then) && $(e.catch), Lo = Object.prototype.toString, Kn = e => Lo.call(e),
    El = e => Kn(e).slice(8, -1), No = e => Kn(e) === "[object Object]",
    Qs = e => oe(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
    en = Js(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),
    Wn = e => {
        const t = Object.create(null);
        return n => t[n] || (t[n] = e(n))
    }, Sl = /-(\w)/g, Le = Wn(e => e.replace(Sl, (t, n) => n ? n.toUpperCase() : "")), Rl = /\B([A-Z])/g,
    Ot = Wn(e => e.replace(Rl, "-$1").toLowerCase()), zn = Wn(e => e.charAt(0).toUpperCase() + e.slice(1)),
    as = Wn(e => e ? `on${zn(e)}` : ""), pt = (e, t) => !Object.is(e, t), An = (e, ...t) => {
        for (let n = 0; n < e.length; n++) e[n](...t)
    }, As = (e, t, n, s = !1) => {
        Object.defineProperty(e, t, {configurable: !0, enumerable: !1, writable: s, value: n})
    }, Cs = e => {
        const t = parseFloat(e);
        return isNaN(t) ? e : t
    };
let wr;
const Jn = () => wr || (wr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});

function Ys(e) {
    if (U(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++) {
            const s = e[n], r = oe(s) ? Al(s) : Ys(s);
            if (r) for (const o in r) t[o] = r[o]
        }
        return t
    } else if (oe(e) || se(e)) return e
}

const vl = /;(?![^(]*\))/g, xl = /:([^]+)/, Ol = /\/\*[^]*?\*\//g;

function Al(e) {
    const t = {};
    return e.replace(Ol, "").split(vl).forEach(n => {
        if (n) {
            const s = n.split(xl);
            s.length > 1 && (t[s[0].trim()] = s[1].trim())
        }
    }), t
}

function Zs(e) {
    let t = "";
    if (oe(e)) t = e; else if (U(e)) for (let n = 0; n < e.length; n++) {
        const s = Zs(e[n]);
        s && (t += s + " ")
    } else if (se(e)) for (const n in e) e[n] && (t += n + " ");
    return t.trim()
}

const Cl = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Tl = Js(Cl);

function Io(e) {
    return !!e || e === ""
}

const Fo = e => !!(e && e.__v_isRef === !0),
    ht = e => oe(e) ? e : e == null ? "" : U(e) || se(e) && (e.toString === Lo || !$(e.toString)) ? Fo(e) ? ht(e.value) : JSON.stringify(e, Mo, 2) : String(e),
    Mo = (e, t) => Fo(t) ? Mo(e, t.value) : Dt(t) ? {[`Map(${t.size})`]: [...t.entries()].reduce((n, [s, r], o) => (n[fs(s, o) + " =>"] = r, n), {})} : To(t) ? {[`Set(${t.size})`]: [...t.values()].map(n => fs(n))} : yt(t) ? fs(t) : se(t) && !U(t) && !No(t) ? String(t) : t,
    fs = (e, t = "") => {
        var n;
        return yt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
    };
/**
 * @vue/reactivity v3.5.17
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/let we;

class Pl {
    constructor(t = !1) {
        this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = we, !t && we && (this.index = (we.scopes || (we.scopes = [])).push(this) - 1)
    }

    get active() {
        return this._active
    }

    pause() {
        if (this._active) {
            this._isPaused = !0;
            let t, n;
            if (this.scopes) for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].pause();
            for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].pause()
        }
    }

    resume() {
        if (this._active && this._isPaused) {
            this._isPaused = !1;
            let t, n;
            if (this.scopes) for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].resume();
            for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].resume()
        }
    }

    run(t) {
        if (this._active) {
            const n = we;
            try {
                return we = this, t()
            } finally {
                we = n
            }
        }
    }

    on() {
        ++this._on === 1 && (this.prevScope = we, we = this)
    }

    off() {
        this._on > 0 && --this._on === 0 && (we = this.prevScope, this.prevScope = void 0)
    }

    stop(t) {
        if (this._active) {
            this._active = !1;
            let n, s;
            for (n = 0, s = this.effects.length; n < s; n++) this.effects[n].stop();
            for (this.effects.length = 0, n = 0, s = this.cleanups.length; n < s; n++) this.cleanups[n]();
            if (this.cleanups.length = 0, this.scopes) {
                for (n = 0, s = this.scopes.length; n < s; n++) this.scopes[n].stop(!0);
                this.scopes.length = 0
            }
            if (!this.detached && this.parent && !t) {
                const r = this.parent.scopes.pop();
                r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index)
            }
            this.parent = void 0
        }
    }
}

function Ll() {
    return we
}

let ne;
const ds = new WeakSet;

class Do {
    constructor(t) {
        this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, we && we.active && we.effects.push(this)
    }

    pause() {
        this.flags |= 64
    }

    resume() {
        this.flags & 64 && (this.flags &= -65, ds.has(this) && (ds.delete(this), this.trigger()))
    }

    notify() {
        this.flags & 2 && !(this.flags & 32) || this.flags & 8 || ko(this)
    }

    run() {
        if (!(this.flags & 1)) return this.fn();
        this.flags |= 2, Er(this), Uo(this);
        const t = ne, n = Me;
        ne = this, Me = !0;
        try {
            return this.fn()
        } finally {
            jo(this), ne = t, Me = n, this.flags &= -3
        }
    }

    stop() {
        if (this.flags & 1) {
            for (let t = this.deps; t; t = t.nextDep) nr(t);
            this.deps = this.depsTail = void 0, Er(this), this.onStop && this.onStop(), this.flags &= -2
        }
    }

    trigger() {
        this.flags & 64 ? ds.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty()
    }

    runIfDirty() {
        Ts(this) && this.run()
    }

    get dirty() {
        return Ts(this)
    }
}

let Bo = 0, tn, nn;

function ko(e, t = !1) {
    if (e.flags |= 8, t) {
        e.next = nn, nn = e;
        return
    }
    e.next = tn, tn = e
}

function er() {
    Bo++
}

function tr() {
    if (--Bo > 0) return;
    if (nn) {
        let t = nn;
        for (nn = void 0; t;) {
            const n = t.next;
            t.next = void 0, t.flags &= -9, t = n
        }
    }
    let e;
    for (; tn;) {
        let t = tn;
        for (tn = void 0; t;) {
            const n = t.next;
            if (t.next = void 0, t.flags &= -9, t.flags & 1) try {
                t.trigger()
            } catch (s) {
                e || (e = s)
            }
            t = n
        }
    }
    if (e) throw e
}

function Uo(e) {
    for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t
}

function jo(e) {
    let t, n = e.depsTail, s = n;
    for (; s;) {
        const r = s.prevDep;
        s.version === -1 ? (s === n && (n = r), nr(s), Nl(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = r
    }
    e.deps = t, e.depsTail = n
}

function Ts(e) {
    for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && ($o(t.dep.computed) || t.dep.version !== t.version)) return !0;
    return !!e._dirty
}

function $o(e) {
    if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === an) || (e.globalVersion = an, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Ts(e)))) return;
    e.flags |= 2;
    const t = e.dep, n = ne, s = Me;
    ne = e, Me = !0;
    try {
        Uo(e);
        const r = e.fn(e._value);
        (t.version === 0 || pt(r, e._value)) && (e.flags |= 128, e._value = r, t.version++)
    } catch (r) {
        throw t.version++, r
    } finally {
        ne = n, Me = s, jo(e), e.flags &= -3
    }
}

function nr(e, t = !1) {
    const {dep: n, prevSub: s, nextSub: r} = e;
    if (s && (s.nextSub = r, e.prevSub = void 0), r && (r.prevSub = s, e.nextSub = void 0), n.subs === e && (n.subs = s, !s && n.computed)) {
        n.computed.flags &= -5;
        for (let o = n.computed.deps; o; o = o.nextDep) nr(o, !0)
    }
    !t && !--n.sc && n.map && n.map.delete(n.key)
}

function Nl(e) {
    const {prevDep: t, nextDep: n} = e;
    t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0)
}

let Me = !0;
const Ho = [];

function rt() {
    Ho.push(Me), Me = !1
}

function ot() {
    const e = Ho.pop();
    Me = e === void 0 ? !0 : e
}

function Er(e) {
    const {cleanup: t} = e;
    if (e.cleanup = void 0, t) {
        const n = ne;
        ne = void 0;
        try {
            t()
        } finally {
            ne = n
        }
    }
}

let an = 0;

class Il {
    constructor(t, n) {
        this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0
    }
}

class sr {
    constructor(t) {
        this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0
    }

    track(t) {
        if (!ne || !Me || ne === this.computed) return;
        let n = this.activeLink;
        if (n === void 0 || n.sub !== ne) n = this.activeLink = new Il(ne, this), ne.deps ? (n.prevDep = ne.depsTail, ne.depsTail.nextDep = n, ne.depsTail = n) : ne.deps = ne.depsTail = n, qo(n); else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
            const s = n.nextDep;
            s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = ne.depsTail, n.nextDep = void 0, ne.depsTail.nextDep = n, ne.depsTail = n, ne.deps === n && (ne.deps = s)
        }
        return n
    }

    trigger(t) {
        this.version++, an++, this.notify(t)
    }

    notify(t) {
        er();
        try {
            for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify()
        } finally {
            tr()
        }
    }
}

function qo(e) {
    if (e.dep.sc++, e.sub.flags & 4) {
        const t = e.dep.computed;
        if (t && !e.dep.subs) {
            t.flags |= 20;
            for (let s = t.deps; s; s = s.nextDep) qo(s)
        }
        const n = e.dep.subs;
        n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e
    }
}

const Ps = new WeakMap, Rt = Symbol(""), Ls = Symbol(""), fn = Symbol("");

function ue(e, t, n) {
    if (Me && ne) {
        let s = Ps.get(e);
        s || Ps.set(e, s = new Map);
        let r = s.get(n);
        r || (s.set(n, r = new sr), r.map = s, r.key = n), r.track()
    }
}

function tt(e, t, n, s, r, o) {
    const i = Ps.get(e);
    if (!i) {
        an++;
        return
    }
    const l = c => {
        c && c.trigger()
    };
    if (er(), t === "clear") i.forEach(l); else {
        const c = U(e), a = c && Qs(n);
        if (c && n === "length") {
            const u = Number(s);
            i.forEach((f, p) => {
                (p === "length" || p === fn || !yt(p) && p >= u) && l(f)
            })
        } else switch ((n !== void 0 || i.has(void 0)) && l(i.get(n)), a && l(i.get(fn)), t) {
            case"add":
                c ? a && l(i.get("length")) : (l(i.get(Rt)), Dt(e) && l(i.get(Ls)));
                break;
            case"delete":
                c || (l(i.get(Rt)), Dt(e) && l(i.get(Ls)));
                break;
            case"set":
                Dt(e) && l(i.get(Rt));
                break
        }
    }
    tr()
}

function Pt(e) {
    const t = J(e);
    return t === e ? t : (ue(t, "iterate", fn), Pe(e) ? t : t.map(ce))
}

function Gn(e) {
    return ue(e = J(e), "iterate", fn), e
}

const Fl = {
    __proto__: null, [Symbol.iterator]() {
        return hs(this, Symbol.iterator, ce)
    }, concat(...e) {
        return Pt(this).concat(...e.map(t => U(t) ? Pt(t) : t))
    }, entries() {
        return hs(this, "entries", e => (e[1] = ce(e[1]), e))
    }, every(e, t) {
        return Ye(this, "every", e, t, void 0, arguments)
    }, filter(e, t) {
        return Ye(this, "filter", e, t, n => n.map(ce), arguments)
    }, find(e, t) {
        return Ye(this, "find", e, t, ce, arguments)
    }, findIndex(e, t) {
        return Ye(this, "findIndex", e, t, void 0, arguments)
    }, findLast(e, t) {
        return Ye(this, "findLast", e, t, ce, arguments)
    }, findLastIndex(e, t) {
        return Ye(this, "findLastIndex", e, t, void 0, arguments)
    }, forEach(e, t) {
        return Ye(this, "forEach", e, t, void 0, arguments)
    }, includes(...e) {
        return ps(this, "includes", e)
    }, indexOf(...e) {
        return ps(this, "indexOf", e)
    }, join(e) {
        return Pt(this).join(e)
    }, lastIndexOf(...e) {
        return ps(this, "lastIndexOf", e)
    }, map(e, t) {
        return Ye(this, "map", e, t, void 0, arguments)
    }, pop() {
        return Gt(this, "pop")
    }, push(...e) {
        return Gt(this, "push", e)
    }, reduce(e, ...t) {
        return Sr(this, "reduce", e, t)
    }, reduceRight(e, ...t) {
        return Sr(this, "reduceRight", e, t)
    }, shift() {
        return Gt(this, "shift")
    }, some(e, t) {
        return Ye(this, "some", e, t, void 0, arguments)
    }, splice(...e) {
        return Gt(this, "splice", e)
    }, toReversed() {
        return Pt(this).toReversed()
    }, toSorted(e) {
        return Pt(this).toSorted(e)
    }, toSpliced(...e) {
        return Pt(this).toSpliced(...e)
    }, unshift(...e) {
        return Gt(this, "unshift", e)
    }, values() {
        return hs(this, "values", ce)
    }
};

function hs(e, t, n) {
    const s = Gn(e), r = s[t]();
    return s !== e && !Pe(e) && (r._next = r.next, r.next = () => {
        const o = r._next();
        return o.value && (o.value = n(o.value)), o
    }), r
}

const Ml = Array.prototype;

function Ye(e, t, n, s, r, o) {
    const i = Gn(e), l = i !== e && !Pe(e), c = i[t];
    if (c !== Ml[t]) {
        const f = c.apply(e, o);
        return l ? ce(f) : f
    }
    let a = n;
    i !== e && (l ? a = function (f, p) {
        return n.call(this, ce(f), p, e)
    } : n.length > 2 && (a = function (f, p) {
        return n.call(this, f, p, e)
    }));
    const u = c.call(i, a, s);
    return l && r ? r(u) : u
}

function Sr(e, t, n, s) {
    const r = Gn(e);
    let o = n;
    return r !== e && (Pe(e) ? n.length > 3 && (o = function (i, l, c) {
        return n.call(this, i, l, c, e)
    }) : o = function (i, l, c) {
        return n.call(this, i, ce(l), c, e)
    }), r[t](o, ...s)
}

function ps(e, t, n) {
    const s = J(e);
    ue(s, "iterate", fn);
    const r = s[t](...n);
    return (r === -1 || r === !1) && ir(n[0]) ? (n[0] = J(n[0]), s[t](...n)) : r
}

function Gt(e, t, n = []) {
    rt(), er();
    const s = J(e)[t].apply(e, n);
    return tr(), ot(), s
}

const Dl = Js("__proto__,__v_isRef,__isVue"),
    Vo = new Set(Object.getOwnPropertyNames(Symbol).filter(e => e !== "arguments" && e !== "caller").map(e => Symbol[e]).filter(yt));

function Bl(e) {
    yt(e) || (e = String(e));
    const t = J(this);
    return ue(t, "has", e), t.hasOwnProperty(e)
}

class Ko {
    constructor(t = !1, n = !1) {
        this._isReadonly = t, this._isShallow = n
    }

    get(t, n, s) {
        if (n === "__v_skip") return t.__v_skip;
        const r = this._isReadonly, o = this._isShallow;
        if (n === "__v_isReactive") return !r;
        if (n === "__v_isReadonly") return r;
        if (n === "__v_isShallow") return o;
        if (n === "__v_raw") return s === (r ? o ? zl : Go : o ? Jo : zo).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
        const i = U(t);
        if (!r) {
            let c;
            if (i && (c = Fl[n])) return c;
            if (n === "hasOwnProperty") return Bl
        }
        const l = Reflect.get(t, n, de(t) ? t : s);
        return (yt(n) ? Vo.has(n) : Dl(n)) || (r || ue(t, "get", n), o) ? l : de(l) ? i && Qs(n) ? l : l.value : se(l) ? r ? Qo(l) : Xn(l) : l
    }
}

class Wo extends Ko {
    constructor(t = !1) {
        super(!1, t)
    }

    set(t, n, s, r) {
        let o = t[n];
        if (!this._isShallow) {
            const c = mt(o);
            if (!Pe(s) && !mt(s) && (o = J(o), s = J(s)), !U(t) && de(o) && !de(s)) return c ? !1 : (o.value = s, !0)
        }
        const i = U(t) && Qs(n) ? Number(n) < t.length : G(t, n), l = Reflect.set(t, n, s, de(t) ? t : r);
        return t === J(r) && (i ? pt(s, o) && tt(t, "set", n, s) : tt(t, "add", n, s)), l
    }

    deleteProperty(t, n) {
        const s = G(t, n);
        t[n];
        const r = Reflect.deleteProperty(t, n);
        return r && s && tt(t, "delete", n, void 0), r
    }

    has(t, n) {
        const s = Reflect.has(t, n);
        return (!yt(n) || !Vo.has(n)) && ue(t, "has", n), s
    }

    ownKeys(t) {
        return ue(t, "iterate", U(t) ? "length" : Rt), Reflect.ownKeys(t)
    }
}

class kl extends Ko {
    constructor(t = !1) {
        super(!0, t)
    }

    set(t, n) {
        return !0
    }

    deleteProperty(t, n) {
        return !0
    }
}

const Ul = new Wo, jl = new kl, $l = new Wo(!0);
const Ns = e => e, vn = e => Reflect.getPrototypeOf(e);

function Hl(e, t, n) {
    return function (...s) {
        const r = this.__v_raw, o = J(r), i = Dt(o), l = e === "entries" || e === Symbol.iterator && i,
            c = e === "keys" && i, a = r[e](...s), u = n ? Ns : t ? Mn : ce;
        return !t && ue(o, "iterate", c ? Ls : Rt), {
            next() {
                const {value: f, done: p} = a.next();
                return p ? {value: f, done: p} : {value: l ? [u(f[0]), u(f[1])] : u(f), done: p}
            }, [Symbol.iterator]() {
                return this
            }
        }
    }
}

function xn(e) {
    return function (...t) {
        return e === "delete" ? !1 : e === "clear" ? void 0 : this
    }
}

function ql(e, t) {
    const n = {
        get(r) {
            const o = this.__v_raw, i = J(o), l = J(r);
            e || (pt(r, l) && ue(i, "get", r), ue(i, "get", l));
            const {has: c} = vn(i), a = t ? Ns : e ? Mn : ce;
            if (c.call(i, r)) return a(o.get(r));
            if (c.call(i, l)) return a(o.get(l));
            o !== i && o.get(r)
        }, get size() {
            const r = this.__v_raw;
            return !e && ue(J(r), "iterate", Rt), Reflect.get(r, "size", r)
        }, has(r) {
            const o = this.__v_raw, i = J(o), l = J(r);
            return e || (pt(r, l) && ue(i, "has", r), ue(i, "has", l)), r === l ? o.has(r) : o.has(r) || o.has(l)
        }, forEach(r, o) {
            const i = this, l = i.__v_raw, c = J(l), a = t ? Ns : e ? Mn : ce;
            return !e && ue(c, "iterate", Rt), l.forEach((u, f) => r.call(o, a(u), a(f), i))
        }
    };
    return he(n, e ? {add: xn("add"), set: xn("set"), delete: xn("delete"), clear: xn("clear")} : {
        add(r) {
            !t && !Pe(r) && !mt(r) && (r = J(r));
            const o = J(this);
            return vn(o).has.call(o, r) || (o.add(r), tt(o, "add", r, r)), this
        }, set(r, o) {
            !t && !Pe(o) && !mt(o) && (o = J(o));
            const i = J(this), {has: l, get: c} = vn(i);
            let a = l.call(i, r);
            a || (r = J(r), a = l.call(i, r));
            const u = c.call(i, r);
            return i.set(r, o), a ? pt(o, u) && tt(i, "set", r, o) : tt(i, "add", r, o), this
        }, delete(r) {
            const o = J(this), {has: i, get: l} = vn(o);
            let c = i.call(o, r);
            c || (r = J(r), c = i.call(o, r)), l && l.call(o, r);
            const a = o.delete(r);
            return c && tt(o, "delete", r, void 0), a
        }, clear() {
            const r = J(this), o = r.size !== 0, i = r.clear();
            return o && tt(r, "clear", void 0, void 0), i
        }
    }), ["keys", "values", "entries", Symbol.iterator].forEach(r => {
        n[r] = Hl(r, e, t)
    }), n
}

function rr(e, t) {
    const n = ql(e, t);
    return (s, r, o) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? s : Reflect.get(G(n, r) && r in s ? n : s, r, o)
}

const Vl = {get: rr(!1, !1)}, Kl = {get: rr(!1, !0)}, Wl = {get: rr(!0, !1)};
const zo = new WeakMap, Jo = new WeakMap, Go = new WeakMap, zl = new WeakMap;

function Jl(e) {
    switch (e) {
        case"Object":
        case"Array":
            return 1;
        case"Map":
        case"Set":
        case"WeakMap":
        case"WeakSet":
            return 2;
        default:
            return 0
    }
}

function Gl(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : Jl(El(e))
}

function Xn(e) {
    return mt(e) ? e : or(e, !1, Ul, Vl, zo)
}

function Xo(e) {
    return or(e, !1, $l, Kl, Jo)
}

function Qo(e) {
    return or(e, !0, jl, Wl, Go)
}

function or(e, t, n, s, r) {
    if (!se(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
    const o = Gl(e);
    if (o === 0) return e;
    const i = r.get(e);
    if (i) return i;
    const l = new Proxy(e, o === 2 ? s : n);
    return r.set(e, l), l
}

function Bt(e) {
    return mt(e) ? Bt(e.__v_raw) : !!(e && e.__v_isReactive)
}

function mt(e) {
    return !!(e && e.__v_isReadonly)
}

function Pe(e) {
    return !!(e && e.__v_isShallow)
}

function ir(e) {
    return e ? !!e.__v_raw : !1
}

function J(e) {
    const t = e && e.__v_raw;
    return t ? J(t) : e
}

function Xl(e) {
    return !G(e, "__v_skip") && Object.isExtensible(e) && As(e, "__v_skip", !0), e
}

const ce = e => se(e) ? Xn(e) : e, Mn = e => se(e) ? Qo(e) : e;

function de(e) {
    return e ? e.__v_isRef === !0 : !1
}

function Ql(e) {
    return Yo(e, !1)
}

function Yl(e) {
    return Yo(e, !0)
}

function Yo(e, t) {
    return de(e) ? e : new Zl(e, t)
}

class Zl {
    constructor(t, n) {
        this.dep = new sr, this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : J(t), this._value = n ? t : ce(t), this.__v_isShallow = n
    }

    get value() {
        return this.dep.track(), this._value
    }

    set value(t) {
        const n = this._rawValue, s = this.__v_isShallow || Pe(t) || mt(t);
        t = s ? t : J(t), pt(t, n) && (this._rawValue = t, this._value = s ? t : ce(t), this.dep.trigger())
    }
}

function kt(e) {
    return de(e) ? e.value : e
}

const ec = {
    get: (e, t, n) => t === "__v_raw" ? e : kt(Reflect.get(e, t, n)), set: (e, t, n, s) => {
        const r = e[t];
        return de(r) && !de(n) ? (r.value = n, !0) : Reflect.set(e, t, n, s)
    }
};

function Zo(e) {
    return Bt(e) ? e : new Proxy(e, ec)
}

class tc {
    constructor(t, n, s) {
        this.fn = t, this.setter = n, this._value = void 0, this.dep = new sr(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = an - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s
    }

    notify() {
        if (this.flags |= 16, !(this.flags & 8) && ne !== this) return ko(this, !0), !0
    }

    get value() {
        const t = this.dep.track();
        return $o(this), t && (t.version = this.dep.version), this._value
    }

    set value(t) {
        this.setter && this.setter(t)
    }
}

function nc(e, t, n = !1) {
    let s, r;
    return $(e) ? s = e : (s = e.get, r = e.set), new tc(s, r, n)
}

const On = {}, Dn = new WeakMap;
let Et;

function sc(e, t = !1, n = Et) {
    if (n) {
        let s = Dn.get(n);
        s || Dn.set(n, s = []), s.push(e)
    }
}

function rc(e, t, n = Z) {
    const {immediate: s, deep: r, once: o, scheduler: i, augmentJob: l, call: c} = n,
        a = F => r ? F : Pe(F) || r === !1 || r === 0 ? nt(F, 1) : nt(F);
    let u, f, p, g, b = !1, R = !1;
    if (de(e) ? (f = () => e.value, b = Pe(e)) : Bt(e) ? (f = () => a(e), b = !0) : U(e) ? (R = !0, b = e.some(F => Bt(F) || Pe(F)), f = () => e.map(F => {
        if (de(F)) return F.value;
        if (Bt(F)) return a(F);
        if ($(F)) return c ? c(F, 2) : F()
    })) : $(e) ? t ? f = c ? () => c(e, 2) : e : f = () => {
        if (p) {
            rt();
            try {
                p()
            } finally {
                ot()
            }
        }
        const F = Et;
        Et = u;
        try {
            return c ? c(e, 3, [g]) : e(g)
        } finally {
            Et = F
        }
    } : f = Ge, t && r) {
        const F = f, H = r === !0 ? 1 / 0 : r;
        f = () => nt(F(), H)
    }
    const v = Ll(), P = () => {
        u.stop(), v && v.active && Xs(v.effects, u)
    };
    if (o && t) {
        const F = t;
        t = (...H) => {
            F(...H), P()
        }
    }
    let C = R ? new Array(e.length).fill(On) : On;
    const I = F => {
        if (!(!(u.flags & 1) || !u.dirty && !F)) if (t) {
            const H = u.run();
            if (r || b || (R ? H.some((ee, K) => pt(ee, C[K])) : pt(H, C))) {
                p && p();
                const ee = Et;
                Et = u;
                try {
                    const K = [H, C === On ? void 0 : R && C[0] === On ? [] : C, g];
                    C = H, c ? c(t, 3, K) : t(...K)
                } finally {
                    Et = ee
                }
            }
        } else u.run()
    };
    return l && l(I), u = new Do(f), u.scheduler = i ? () => i(I, !1) : I, g = F => sc(F, !1, u), p = u.onStop = () => {
        const F = Dn.get(u);
        if (F) {
            if (c) c(F, 4); else for (const H of F) H();
            Dn.delete(u)
        }
    }, t ? s ? I(!0) : C = u.run() : i ? i(I.bind(null, !0), !0) : u.run(), P.pause = u.pause.bind(u), P.resume = u.resume.bind(u), P.stop = P, P
}

function nt(e, t = 1 / 0, n) {
    if (t <= 0 || !se(e) || e.__v_skip || (n = n || new Set, n.has(e))) return e;
    if (n.add(e), t--, de(e)) nt(e.value, t, n); else if (U(e)) for (let s = 0; s < e.length; s++) nt(e[s], t, n); else if (To(e) || Dt(e)) e.forEach(s => {
        nt(s, t, n)
    }); else if (No(e)) {
        for (const s in e) nt(e[s], t, n);
        for (const s of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, s) && nt(e[s], t, n)
    }
    return e
}

/**
 * @vue/runtime-core v3.5.17
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/function bn(e, t, n, s) {
    try {
        return s ? e(...s) : e()
    } catch (r) {
        Qn(r, t, n)
    }
}

function Xe(e, t, n, s) {
    if ($(e)) {
        const r = bn(e, t, n, s);
        return r && Po(r) && r.catch(o => {
            Qn(o, t, n)
        }), r
    }
    if (U(e)) {
        const r = [];
        for (let o = 0; o < e.length; o++) r.push(Xe(e[o], t, n, s));
        return r
    }
}

function Qn(e, t, n, s = !0) {
    const r = t ? t.vnode : null, {errorHandler: o, throwUnhandledErrorInProduction: i} = t && t.appContext.config || Z;
    if (t) {
        let l = t.parent;
        const c = t.proxy, a = `https://vuejs.org/error-reference/#runtime-${n}`;
        for (; l;) {
            const u = l.ec;
            if (u) {
                for (let f = 0; f < u.length; f++) if (u[f](e, c, a) === !1) return
            }
            l = l.parent
        }
        if (o) {
            rt(), bn(o, null, 10, [e, c, a]), ot();
            return
        }
    }
    oc(e, n, r, s, i)
}

function oc(e, t, n, s = !0, r = !1) {
    if (r) throw e;
    console.error(e)
}

const ge = [];
let We = -1;
const Ut = [];
let at = null, Lt = 0;
const ei = Promise.resolve();
let Bn = null;

function ti(e) {
    const t = Bn || ei;
    return e ? t.then(this ? e.bind(this) : e) : t
}

function ic(e) {
    let t = We + 1, n = ge.length;
    for (; t < n;) {
        const s = t + n >>> 1, r = ge[s], o = dn(r);
        o < e || o === e && r.flags & 2 ? t = s + 1 : n = s
    }
    return t
}

function lr(e) {
    if (!(e.flags & 1)) {
        const t = dn(e), n = ge[ge.length - 1];
        !n || !(e.flags & 2) && t >= dn(n) ? ge.push(e) : ge.splice(ic(t), 0, e), e.flags |= 1, ni()
    }
}

function ni() {
    Bn || (Bn = ei.then(ri))
}

function lc(e) {
    U(e) ? Ut.push(...e) : at && e.id === -1 ? at.splice(Lt + 1, 0, e) : e.flags & 1 || (Ut.push(e), e.flags |= 1), ni()
}

function Rr(e, t, n = We + 1) {
    for (; n < ge.length; n++) {
        const s = ge[n];
        if (s && s.flags & 2) {
            if (e && s.id !== e.uid) continue;
            ge.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2)
        }
    }
}

function si(e) {
    if (Ut.length) {
        const t = [...new Set(Ut)].sort((n, s) => dn(n) - dn(s));
        if (Ut.length = 0, at) {
            at.push(...t);
            return
        }
        for (at = t, Lt = 0; Lt < at.length; Lt++) {
            const n = at[Lt];
            n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2
        }
        at = null, Lt = 0
    }
}

const dn = e => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;

function ri(e) {
    try {
        for (We = 0; We < ge.length; We++) {
            const t = ge[We];
            t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), bn(t, t.i, t.i ? 15 : 14), t.flags & 4 || (t.flags &= -2))
        }
    } finally {
        for (; We < ge.length; We++) {
            const t = ge[We];
            t && (t.flags &= -2)
        }
        We = -1, ge.length = 0, si(), Bn = null, (ge.length || Ut.length) && ri()
    }
}

let Oe = null, oi = null;

function kn(e) {
    const t = Oe;
    return Oe = e, oi = e && e.type.__scopeId || null, t
}

function cc(e, t = Oe, n) {
    if (!t || e._n) return e;
    const s = (...r) => {
        s._d && Fr(-1);
        const o = kn(t);
        let i;
        try {
            i = e(...r)
        } finally {
            kn(o), s._d && Fr(1)
        }
        return i
    };
    return s._n = !0, s._c = !0, s._d = !0, s
}

function vr(e, t) {
    if (Oe === null) return e;
    const n = ts(Oe), s = e.dirs || (e.dirs = []);
    for (let r = 0; r < t.length; r++) {
        let [o, i, l, c = Z] = t[r];
        o && ($(o) && (o = {mounted: o, updated: o}), o.deep && nt(i), s.push({
            dir: o,
            instance: n,
            value: i,
            oldValue: void 0,
            arg: l,
            modifiers: c
        }))
    }
    return e
}

function _t(e, t, n, s) {
    const r = e.dirs, o = t && t.dirs;
    for (let i = 0; i < r.length; i++) {
        const l = r[i];
        o && (l.oldValue = o[i].value);
        let c = l.dir[s];
        c && (rt(), Xe(c, n, 8, [e.el, l, e, t]), ot())
    }
}

const uc = Symbol("_vte"), ac = e => e.__isTeleport;

function cr(e, t) {
    e.shapeFlag & 6 && e.component ? (e.transition = t, cr(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t
}/*! #__NO_SIDE_EFFECTS__ */
function ii(e, t) {
    return $(e) ? he({name: e.name}, t, {setup: e}) : e
}

function li(e) {
    e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0]
}

function sn(e, t, n, s, r = !1) {
    if (U(e)) {
        e.forEach((b, R) => sn(b, t && (U(t) ? t[R] : t), n, s, r));
        return
    }
    if (rn(s) && !r) {
        s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && sn(e, t, n, s.component.subTree);
        return
    }
    const o = s.shapeFlag & 4 ? ts(s.component) : s.el, i = r ? null : o, {i: l, r: c} = e, a = t && t.r,
        u = l.refs === Z ? l.refs = {} : l.refs, f = l.setupState, p = J(f), g = f === Z ? () => !1 : b => G(p, b);
    if (a != null && a !== c && (oe(a) ? (u[a] = null, g(a) && (f[a] = null)) : de(a) && (a.value = null)), $(c)) bn(c, l, 12, [i, u]); else {
        const b = oe(c), R = de(c);
        if (b || R) {
            const v = () => {
                if (e.f) {
                    const P = b ? g(c) ? f[c] : u[c] : c.value;
                    r ? U(P) && Xs(P, o) : U(P) ? P.includes(o) || P.push(o) : b ? (u[c] = [o], g(c) && (f[c] = u[c])) : (c.value = [o], e.k && (u[e.k] = c.value))
                } else b ? (u[c] = i, g(c) && (f[c] = i)) : R && (c.value = i, e.k && (u[e.k] = i))
            };
            i ? (v.id = -1, xe(v, n)) : v()
        }
    }
}

Jn().requestIdleCallback;
Jn().cancelIdleCallback;
const rn = e => !!e.type.__asyncLoader, ci = e => e.type.__isKeepAlive;

function fc(e, t) {
    ui(e, "a", t)
}

function dc(e, t) {
    ui(e, "da", t)
}

function ui(e, t, n = ae) {
    const s = e.__wdc || (e.__wdc = () => {
        let r = n;
        for (; r;) {
            if (r.isDeactivated) return;
            r = r.parent
        }
        return e()
    });
    if (Yn(t, s, n), n) {
        let r = n.parent;
        for (; r && r.parent;) ci(r.parent.vnode) && hc(s, t, n, r), r = r.parent
    }
}

function hc(e, t, n, s) {
    const r = Yn(t, e, s, !0);
    ai(() => {
        Xs(s[t], r)
    }, n)
}

function Yn(e, t, n = ae, s = !1) {
    if (n) {
        const r = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...i) => {
            rt();
            const l = _n(n), c = Xe(t, n, e, i);
            return l(), ot(), c
        });
        return s ? r.unshift(o) : r.push(o), o
    }
}

const it = e => (t, n = ae) => {
        (!pn || e === "sp") && Yn(e, (...s) => t(...s), n)
    }, pc = it("bm"), mc = it("m"), gc = it("bu"), yc = it("u"), bc = it("bum"), ai = it("um"), _c = it("sp"),
    wc = it("rtg"), Ec = it("rtc");

function Sc(e, t = ae) {
    Yn("ec", e, t)
}

const Rc = "components";

function vc(e, t) {
    return Oc(Rc, e, !0, t) || e
}

const xc = Symbol.for("v-ndc");

function Oc(e, t, n = !0, s = !1) {
    const r = Oe || ae;
    if (r) {
        const o = r.type;
        {
            const l = mu(o, !1);
            if (l && (l === t || l === Le(t) || l === zn(Le(t)))) return o
        }
        const i = xr(r[e] || o[e], t) || xr(r.appContext[e], t);
        return !i && s ? o : i
    }
}

function xr(e, t) {
    return e && (e[t] || e[Le(t)] || e[zn(Le(t))])
}

function Ac(e, t, n, s) {
    let r;
    const o = n, i = U(e);
    if (i || oe(e)) {
        const l = i && Bt(e);
        let c = !1, a = !1;
        l && (c = !Pe(e), a = mt(e), e = Gn(e)), r = new Array(e.length);
        for (let u = 0, f = e.length; u < f; u++) r[u] = t(c ? a ? Mn(ce(e[u])) : ce(e[u]) : e[u], u, void 0, o)
    } else if (typeof e == "number") {
        r = new Array(e);
        for (let l = 0; l < e; l++) r[l] = t(l + 1, l, void 0, o)
    } else if (se(e)) if (e[Symbol.iterator]) r = Array.from(e, (l, c) => t(l, c, void 0, o)); else {
        const l = Object.keys(e);
        r = new Array(l.length);
        for (let c = 0, a = l.length; c < a; c++) {
            const u = l[c];
            r[c] = t(e[u], u, c, o)
        }
    } else r = [];
    return r
}

const Is = e => e ? Pi(e) ? ts(e) : Is(e.parent) : null, on = he(Object.create(null), {
    $: e => e,
    $el: e => e.vnode.el,
    $data: e => e.data,
    $props: e => e.props,
    $attrs: e => e.attrs,
    $slots: e => e.slots,
    $refs: e => e.refs,
    $parent: e => Is(e.parent),
    $root: e => Is(e.root),
    $host: e => e.ce,
    $emit: e => e.emit,
    $options: e => di(e),
    $forceUpdate: e => e.f || (e.f = () => {
        lr(e.update)
    }),
    $nextTick: e => e.n || (e.n = ti.bind(e.proxy)),
    $watch: e => Jc.bind(e)
}), ms = (e, t) => e !== Z && !e.__isScriptSetup && G(e, t), Cc = {
    get({_: e}, t) {
        if (t === "__v_skip") return !0;
        const {ctx: n, setupState: s, data: r, props: o, accessCache: i, type: l, appContext: c} = e;
        let a;
        if (t[0] !== "$") {
            const g = i[t];
            if (g !== void 0) switch (g) {
                case 1:
                    return s[t];
                case 2:
                    return r[t];
                case 4:
                    return n[t];
                case 3:
                    return o[t]
            } else {
                if (ms(s, t)) return i[t] = 1, s[t];
                if (r !== Z && G(r, t)) return i[t] = 2, r[t];
                if ((a = e.propsOptions[0]) && G(a, t)) return i[t] = 3, o[t];
                if (n !== Z && G(n, t)) return i[t] = 4, n[t];
                Fs && (i[t] = 0)
            }
        }
        const u = on[t];
        let f, p;
        if (u) return t === "$attrs" && ue(e.attrs, "get", ""), u(e);
        if ((f = l.__cssModules) && (f = f[t])) return f;
        if (n !== Z && G(n, t)) return i[t] = 4, n[t];
        if (p = c.config.globalProperties, G(p, t)) return p[t]
    }, set({_: e}, t, n) {
        const {data: s, setupState: r, ctx: o} = e;
        return ms(r, t) ? (r[t] = n, !0) : s !== Z && G(s, t) ? (s[t] = n, !0) : G(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0)
    }, has({_: {data: e, setupState: t, accessCache: n, ctx: s, appContext: r, propsOptions: o}}, i) {
        let l;
        return !!n[i] || e !== Z && G(e, i) || ms(t, i) || (l = o[0]) && G(l, i) || G(s, i) || G(on, i) || G(r.config.globalProperties, i)
    }, defineProperty(e, t, n) {
        return n.get != null ? e._.accessCache[t] = 0 : G(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n)
    }
};

function Or(e) {
    return U(e) ? e.reduce((t, n) => (t[n] = null, t), {}) : e
}

let Fs = !0;

function Tc(e) {
    const t = di(e), n = e.proxy, s = e.ctx;
    Fs = !1, t.beforeCreate && Ar(t.beforeCreate, e, "bc");
    const {
        data: r,
        computed: o,
        methods: i,
        watch: l,
        provide: c,
        inject: a,
        created: u,
        beforeMount: f,
        mounted: p,
        beforeUpdate: g,
        updated: b,
        activated: R,
        deactivated: v,
        beforeDestroy: P,
        beforeUnmount: C,
        destroyed: I,
        unmounted: F,
        render: H,
        renderTracked: ee,
        renderTriggered: K,
        errorCaptured: pe,
        serverPrefetch: Ne,
        expose: ke,
        inheritAttrs: lt,
        components: bt,
        directives: Ue,
        filters: zt
    } = t;
    if (a && Pc(a, s, null), i) for (const Q in i) {
        const W = i[Q];
        $(W) && (s[Q] = W.bind(n))
    }
    if (r) {
        const Q = r.call(n, n);
        se(Q) && (e.data = Xn(Q))
    }
    if (Fs = !0, o) for (const Q in o) {
        const W = o[Q], Qe = $(W) ? W.bind(n, n) : $(W.get) ? W.get.bind(n, n) : Ge,
            ct = !$(W) && $(W.set) ? W.set.bind(n) : Ge, je = Fe({get: Qe, set: ct});
        Object.defineProperty(s, Q, {enumerable: !0, configurable: !0, get: () => je.value, set: ye => je.value = ye})
    }
    if (l) for (const Q in l) fi(l[Q], s, n, Q);
    if (c) {
        const Q = $(c) ? c.call(n) : c;
        Reflect.ownKeys(Q).forEach(W => {
            Cn(W, Q[W])
        })
    }
    u && Ar(u, e, "c");

    function ie(Q, W) {
        U(W) ? W.forEach(Qe => Q(Qe.bind(n))) : W && Q(W.bind(n))
    }

    if (ie(pc, f), ie(mc, p), ie(gc, g), ie(yc, b), ie(fc, R), ie(dc, v), ie(Sc, pe), ie(Ec, ee), ie(wc, K), ie(bc, C), ie(ai, F), ie(_c, Ne), U(ke)) if (ke.length) {
        const Q = e.exposed || (e.exposed = {});
        ke.forEach(W => {
            Object.defineProperty(Q, W, {get: () => n[W], set: Qe => n[W] = Qe})
        })
    } else e.exposed || (e.exposed = {});
    H && e.render === Ge && (e.render = H), lt != null && (e.inheritAttrs = lt), bt && (e.components = bt), Ue && (e.directives = Ue), Ne && li(e)
}

function Pc(e, t, n = Ge) {
    U(e) && (e = Ms(e));
    for (const s in e) {
        const r = e[s];
        let o;
        se(r) ? "default" in r ? o = st(r.from || s, r.default, !0) : o = st(r.from || s) : o = st(r), de(o) ? Object.defineProperty(t, s, {
            enumerable: !0,
            configurable: !0,
            get: () => o.value,
            set: i => o.value = i
        }) : t[s] = o
    }
}

function Ar(e, t, n) {
    Xe(U(e) ? e.map(s => s.bind(t.proxy)) : e.bind(t.proxy), t, n)
}

function fi(e, t, n, s) {
    let r = s.includes(".") ? xi(n, s) : () => n[s];
    if (oe(e)) {
        const o = t[e];
        $(o) && Tn(r, o)
    } else if ($(e)) Tn(r, e.bind(n)); else if (se(e)) if (U(e)) e.forEach(o => fi(o, t, n, s)); else {
        const o = $(e.handler) ? e.handler.bind(n) : t[e.handler];
        $(o) && Tn(r, o, e)
    }
}

function di(e) {
    const t = e.type, {mixins: n, extends: s} = t, {
        mixins: r,
        optionsCache: o,
        config: {optionMergeStrategies: i}
    } = e.appContext, l = o.get(t);
    let c;
    return l ? c = l : !r.length && !n && !s ? c = t : (c = {}, r.length && r.forEach(a => Un(c, a, i, !0)), Un(c, t, i)), se(t) && o.set(t, c), c
}

function Un(e, t, n, s = !1) {
    const {mixins: r, extends: o} = t;
    o && Un(e, o, n, !0), r && r.forEach(i => Un(e, i, n, !0));
    for (const i in t) if (!(s && i === "expose")) {
        const l = Lc[i] || n && n[i];
        e[i] = l ? l(e[i], t[i]) : t[i]
    }
    return e
}

const Lc = {
    data: Cr,
    props: Tr,
    emits: Tr,
    methods: Zt,
    computed: Zt,
    beforeCreate: me,
    created: me,
    beforeMount: me,
    mounted: me,
    beforeUpdate: me,
    updated: me,
    beforeDestroy: me,
    beforeUnmount: me,
    destroyed: me,
    unmounted: me,
    activated: me,
    deactivated: me,
    errorCaptured: me,
    serverPrefetch: me,
    components: Zt,
    directives: Zt,
    watch: Ic,
    provide: Cr,
    inject: Nc
};

function Cr(e, t) {
    return t ? e ? function () {
        return he($(e) ? e.call(this, this) : e, $(t) ? t.call(this, this) : t)
    } : t : e
}

function Nc(e, t) {
    return Zt(Ms(e), Ms(t))
}

function Ms(e) {
    if (U(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
        return t
    }
    return e
}

function me(e, t) {
    return e ? [...new Set([].concat(e, t))] : t
}

function Zt(e, t) {
    return e ? he(Object.create(null), e, t) : t
}

function Tr(e, t) {
    return e ? U(e) && U(t) ? [...new Set([...e, ...t])] : he(Object.create(null), Or(e), Or(t ?? {})) : t
}

function Ic(e, t) {
    if (!e) return t;
    if (!t) return e;
    const n = he(Object.create(null), e);
    for (const s in t) n[s] = me(e[s], t[s]);
    return n
}

function hi() {
    return {
        app: null,
        config: {
            isNativeTag: _l,
            performance: !1,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {}
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null),
        optionsCache: new WeakMap,
        propsCache: new WeakMap,
        emitsCache: new WeakMap
    }
}

let Fc = 0;

function Mc(e, t) {
    return function (s, r = null) {
        $(s) || (s = he({}, s)), r != null && !se(r) && (r = null);
        const o = hi(), i = new WeakSet, l = [];
        let c = !1;
        const a = o.app = {
            _uid: Fc++,
            _component: s,
            _props: r,
            _container: null,
            _context: o,
            _instance: null,
            version: yu,
            get config() {
                return o.config
            },
            set config(u) {
            },
            use(u, ...f) {
                return i.has(u) || (u && $(u.install) ? (i.add(u), u.install(a, ...f)) : $(u) && (i.add(u), u(a, ...f))), a
            },
            mixin(u) {
                return o.mixins.includes(u) || o.mixins.push(u), a
            },
            component(u, f) {
                return f ? (o.components[u] = f, a) : o.components[u]
            },
            directive(u, f) {
                return f ? (o.directives[u] = f, a) : o.directives[u]
            },
            mount(u, f, p) {
                if (!c) {
                    const g = a._ceVNode || Ee(s, r);
                    return g.appContext = o, p === !0 ? p = "svg" : p === !1 && (p = void 0), e(g, u, p), c = !0, a._container = u, u.__vue_app__ = a, ts(g.component)
                }
            },
            onUnmount(u) {
                l.push(u)
            },
            unmount() {
                c && (Xe(l, a._instance, 16), e(null, a._container), delete a._container.__vue_app__)
            },
            provide(u, f) {
                return o.provides[u] = f, a
            },
            runWithContext(u) {
                const f = jt;
                jt = a;
                try {
                    return u()
                } finally {
                    jt = f
                }
            }
        };
        return a
    }
}

let jt = null;

function Cn(e, t) {
    if (ae) {
        let n = ae.provides;
        const s = ae.parent && ae.parent.provides;
        s === n && (n = ae.provides = Object.create(s)), n[e] = t
    }
}

function st(e, t, n = !1) {
    const s = ae || Oe;
    if (s || jt) {
        let r = jt ? jt._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
        if (r && e in r) return r[e];
        if (arguments.length > 1) return n && $(t) ? t.call(s && s.proxy) : t
    }
}

const pi = {}, mi = () => Object.create(pi), gi = e => Object.getPrototypeOf(e) === pi;

function Dc(e, t, n, s = !1) {
    const r = {}, o = mi();
    e.propsDefaults = Object.create(null), yi(e, t, r, o);
    for (const i in e.propsOptions[0]) i in r || (r[i] = void 0);
    n ? e.props = s ? r : Xo(r) : e.type.props ? e.props = r : e.props = o, e.attrs = o
}

function Bc(e, t, n, s) {
    const {props: r, attrs: o, vnode: {patchFlag: i}} = e, l = J(r), [c] = e.propsOptions;
    let a = !1;
    if ((s || i > 0) && !(i & 16)) {
        if (i & 8) {
            const u = e.vnode.dynamicProps;
            for (let f = 0; f < u.length; f++) {
                let p = u[f];
                if (Zn(e.emitsOptions, p)) continue;
                const g = t[p];
                if (c) if (G(o, p)) g !== o[p] && (o[p] = g, a = !0); else {
                    const b = Le(p);
                    r[b] = Ds(c, l, b, g, e, !1)
                } else g !== o[p] && (o[p] = g, a = !0)
            }
        }
    } else {
        yi(e, t, r, o) && (a = !0);
        let u;
        for (const f in l) (!t || !G(t, f) && ((u = Ot(f)) === f || !G(t, u))) && (c ? n && (n[f] !== void 0 || n[u] !== void 0) && (r[f] = Ds(c, l, f, void 0, e, !0)) : delete r[f]);
        if (o !== l) for (const f in o) (!t || !G(t, f)) && (delete o[f], a = !0)
    }
    a && tt(e.attrs, "set", "")
}

function yi(e, t, n, s) {
    const [r, o] = e.propsOptions;
    let i = !1, l;
    if (t) for (let c in t) {
        if (en(c)) continue;
        const a = t[c];
        let u;
        r && G(r, u = Le(c)) ? !o || !o.includes(u) ? n[u] = a : (l || (l = {}))[u] = a : Zn(e.emitsOptions, c) || (!(c in s) || a !== s[c]) && (s[c] = a, i = !0)
    }
    if (o) {
        const c = J(n), a = l || Z;
        for (let u = 0; u < o.length; u++) {
            const f = o[u];
            n[f] = Ds(r, c, f, a[f], e, !G(a, f))
        }
    }
    return i
}

function Ds(e, t, n, s, r, o) {
    const i = e[n];
    if (i != null) {
        const l = G(i, "default");
        if (l && s === void 0) {
            const c = i.default;
            if (i.type !== Function && !i.skipFactory && $(c)) {
                const {propsDefaults: a} = r;
                if (n in a) s = a[n]; else {
                    const u = _n(r);
                    s = a[n] = c.call(null, t), u()
                }
            } else s = c;
            r.ce && r.ce._setProp(n, s)
        }
        i[0] && (o && !l ? s = !1 : i[1] && (s === "" || s === Ot(n)) && (s = !0))
    }
    return s
}

const kc = new WeakMap;

function bi(e, t, n = !1) {
    const s = n ? kc : t.propsCache, r = s.get(e);
    if (r) return r;
    const o = e.props, i = {}, l = [];
    let c = !1;
    if (!$(e)) {
        const u = f => {
            c = !0;
            const [p, g] = bi(f, t, !0);
            he(i, p), g && l.push(...g)
        };
        !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u)
    }
    if (!o && !c) return se(e) && s.set(e, Mt), Mt;
    if (U(o)) for (let u = 0; u < o.length; u++) {
        const f = Le(o[u]);
        Pr(f) && (i[f] = Z)
    } else if (o) for (const u in o) {
        const f = Le(u);
        if (Pr(f)) {
            const p = o[u], g = i[f] = U(p) || $(p) ? {type: p} : he({}, p), b = g.type;
            let R = !1, v = !0;
            if (U(b)) for (let P = 0; P < b.length; ++P) {
                const C = b[P], I = $(C) && C.name;
                if (I === "Boolean") {
                    R = !0;
                    break
                } else I === "String" && (v = !1)
            } else R = $(b) && b.name === "Boolean";
            g[0] = R, g[1] = v, (R || G(g, "default")) && l.push(f)
        }
    }
    const a = [i, l];
    return se(e) && s.set(e, a), a
}

function Pr(e) {
    return e[0] !== "$" && !en(e)
}

const ur = e => e[0] === "_" || e === "$stable", ar = e => U(e) ? e.map(Je) : [Je(e)], Uc = (e, t, n) => {
    if (t._n) return t;
    const s = cc((...r) => ar(t(...r)), n);
    return s._c = !1, s
}, _i = (e, t, n) => {
    const s = e._ctx;
    for (const r in e) {
        if (ur(r)) continue;
        const o = e[r];
        if ($(o)) t[r] = Uc(r, o, s); else if (o != null) {
            const i = ar(o);
            t[r] = () => i
        }
    }
}, wi = (e, t) => {
    const n = ar(t);
    e.slots.default = () => n
}, Ei = (e, t, n) => {
    for (const s in t) (n || !ur(s)) && (e[s] = t[s])
}, jc = (e, t, n) => {
    const s = e.slots = mi();
    if (e.vnode.shapeFlag & 32) {
        const r = t.__;
        r && As(s, "__", r, !0);
        const o = t._;
        o ? (Ei(s, t, n), n && As(s, "_", o, !0)) : _i(t, s)
    } else t && wi(e, t)
}, $c = (e, t, n) => {
    const {vnode: s, slots: r} = e;
    let o = !0, i = Z;
    if (s.shapeFlag & 32) {
        const l = t._;
        l ? n && l === 1 ? o = !1 : Ei(r, t, n) : (o = !t.$stable, _i(t, r)), i = t
    } else t && (wi(e, t), i = {default: 1});
    if (o) for (const l in r) !ur(l) && i[l] == null && delete r[l]
}, xe = tu;

function Hc(e) {
    return qc(e)
}

function qc(e, t) {
    const n = Jn();
    n.__VUE__ = !0;
    const {
        insert: s,
        remove: r,
        patchProp: o,
        createElement: i,
        createText: l,
        createComment: c,
        setText: a,
        setElementText: u,
        parentNode: f,
        nextSibling: p,
        setScopeId: g = Ge,
        insertStaticContent: b
    } = e, R = (d, h, m, _ = null, S = null, E = null, T = void 0, A = null, O = !!h.dynamicChildren) => {
        if (d === h) return;
        d && !Xt(d, h) && (_ = w(d), ye(d, S, E, !0), d = null), h.patchFlag === -2 && (O = !1, h.dynamicChildren = null);
        const {type: x, ref: k, shapeFlag: N} = h;
        switch (x) {
            case es:
                v(d, h, m, _);
                break;
            case gt:
                P(d, h, m, _);
                break;
            case ys:
                d == null && C(h, m, _, T);
                break;
            case ze:
                bt(d, h, m, _, S, E, T, A, O);
                break;
            default:
                N & 1 ? H(d, h, m, _, S, E, T, A, O) : N & 6 ? Ue(d, h, m, _, S, E, T, A, O) : (N & 64 || N & 128) && x.process(d, h, m, _, S, E, T, A, O, D)
        }
        k != null && S ? sn(k, d && d.ref, E, h || d, !h) : k == null && d && d.ref != null && sn(d.ref, null, E, d, !0)
    }, v = (d, h, m, _) => {
        if (d == null) s(h.el = l(h.children), m, _); else {
            const S = h.el = d.el;
            h.children !== d.children && a(S, h.children)
        }
    }, P = (d, h, m, _) => {
        d == null ? s(h.el = c(h.children || ""), m, _) : h.el = d.el
    }, C = (d, h, m, _) => {
        [d.el, d.anchor] = b(d.children, h, m, _, d.el, d.anchor)
    }, I = ({el: d, anchor: h}, m, _) => {
        let S;
        for (; d && d !== h;) S = p(d), s(d, m, _), d = S;
        s(h, m, _)
    }, F = ({el: d, anchor: h}) => {
        let m;
        for (; d && d !== h;) m = p(d), r(d), d = m;
        r(h)
    }, H = (d, h, m, _, S, E, T, A, O) => {
        h.type === "svg" ? T = "svg" : h.type === "math" && (T = "mathml"), d == null ? ee(h, m, _, S, E, T, A, O) : Ne(d, h, S, E, T, A, O)
    }, ee = (d, h, m, _, S, E, T, A) => {
        let O, x;
        const {props: k, shapeFlag: N, transition: B, dirs: j} = d;
        if (O = d.el = i(d.type, E, k && k.is, k), N & 8 ? u(O, d.children) : N & 16 && pe(d.children, O, null, _, S, gs(d, E), T, A), j && _t(d, null, _, "created"), K(O, d, d.scopeId, T, _), k) {
            for (const te in k) te !== "value" && !en(te) && o(O, te, null, k[te], E, _);
            "value" in k && o(O, "value", null, k.value, E), (x = k.onVnodeBeforeMount) && Ve(x, _, d)
        }
        j && _t(d, null, _, "beforeMount");
        const V = Vc(S, B);
        V && B.beforeEnter(O), s(O, h, m), ((x = k && k.onVnodeMounted) || V || j) && xe(() => {
            x && Ve(x, _, d), V && B.enter(O), j && _t(d, null, _, "mounted")
        }, S)
    }, K = (d, h, m, _, S) => {
        if (m && g(d, m), _) for (let E = 0; E < _.length; E++) g(d, _[E]);
        if (S) {
            let E = S.subTree;
            if (h === E || Ai(E.type) && (E.ssContent === h || E.ssFallback === h)) {
                const T = S.vnode;
                K(d, T, T.scopeId, T.slotScopeIds, S.parent)
            }
        }
    }, pe = (d, h, m, _, S, E, T, A, O = 0) => {
        for (let x = O; x < d.length; x++) {
            const k = d[x] = A ? ft(d[x]) : Je(d[x]);
            R(null, k, h, m, _, S, E, T, A)
        }
    }, Ne = (d, h, m, _, S, E, T) => {
        const A = h.el = d.el;
        let {patchFlag: O, dynamicChildren: x, dirs: k} = h;
        O |= d.patchFlag & 16;
        const N = d.props || Z, B = h.props || Z;
        let j;
        if (m && wt(m, !1), (j = B.onVnodeBeforeUpdate) && Ve(j, m, h, d), k && _t(h, d, m, "beforeUpdate"), m && wt(m, !0), (N.innerHTML && B.innerHTML == null || N.textContent && B.textContent == null) && u(A, ""), x ? ke(d.dynamicChildren, x, A, m, _, gs(h, S), E) : T || W(d, h, A, null, m, _, gs(h, S), E, !1), O > 0) {
            if (O & 16) lt(A, N, B, m, S); else if (O & 2 && N.class !== B.class && o(A, "class", null, B.class, S), O & 4 && o(A, "style", N.style, B.style, S), O & 8) {
                const V = h.dynamicProps;
                for (let te = 0; te < V.length; te++) {
                    const X = V[te], be = N[X], _e = B[X];
                    (_e !== be || X === "value") && o(A, X, be, _e, S, m)
                }
            }
            O & 1 && d.children !== h.children && u(A, h.children)
        } else !T && x == null && lt(A, N, B, m, S);
        ((j = B.onVnodeUpdated) || k) && xe(() => {
            j && Ve(j, m, h, d), k && _t(h, d, m, "updated")
        }, _)
    }, ke = (d, h, m, _, S, E, T) => {
        for (let A = 0; A < h.length; A++) {
            const O = d[A], x = h[A], k = O.el && (O.type === ze || !Xt(O, x) || O.shapeFlag & 198) ? f(O.el) : m;
            R(O, x, k, null, _, S, E, T, !0)
        }
    }, lt = (d, h, m, _, S) => {
        if (h !== m) {
            if (h !== Z) for (const E in h) !en(E) && !(E in m) && o(d, E, h[E], null, S, _);
            for (const E in m) {
                if (en(E)) continue;
                const T = m[E], A = h[E];
                T !== A && E !== "value" && o(d, E, A, T, S, _)
            }
            "value" in m && o(d, "value", h.value, m.value, S)
        }
    }, bt = (d, h, m, _, S, E, T, A, O) => {
        const x = h.el = d ? d.el : l(""), k = h.anchor = d ? d.anchor : l("");
        let {patchFlag: N, dynamicChildren: B, slotScopeIds: j} = h;
        j && (A = A ? A.concat(j) : j), d == null ? (s(x, m, _), s(k, m, _), pe(h.children || [], m, k, S, E, T, A, O)) : N > 0 && N & 64 && B && d.dynamicChildren ? (ke(d.dynamicChildren, B, m, S, E, T, A), (h.key != null || S && h === S.subTree) && Si(d, h, !0)) : W(d, h, m, k, S, E, T, A, O)
    }, Ue = (d, h, m, _, S, E, T, A, O) => {
        h.slotScopeIds = A, d == null ? h.shapeFlag & 512 ? S.ctx.activate(h, m, _, T, O) : zt(h, m, _, S, E, T, O) : At(d, h, O)
    }, zt = (d, h, m, _, S, E, T) => {
        const A = d.component = au(d, _, S);
        if (ci(d) && (A.ctx.renderer = D), fu(A, !1, T), A.asyncDep) {
            if (S && S.registerDep(A, ie, T), !d.el) {
                const O = A.subTree = Ee(gt);
                P(null, O, h, m)
            }
        } else ie(A, d, h, m, S, E, T)
    }, At = (d, h, m) => {
        const _ = h.component = d.component;
        if (Zc(d, h, m)) if (_.asyncDep && !_.asyncResolved) {
            Q(_, h, m);
            return
        } else _.next = h, _.update(); else h.el = d.el, _.vnode = h
    }, ie = (d, h, m, _, S, E, T) => {
        const A = () => {
            if (d.isMounted) {
                let {next: N, bu: B, u: j, parent: V, vnode: te} = d;
                {
                    const He = Ri(d);
                    if (He) {
                        N && (N.el = te.el, Q(d, N, T)), He.asyncDep.then(() => {
                            d.isUnmounted || A()
                        });
                        return
                    }
                }
                let X = N, be;
                wt(d, !1), N ? (N.el = te.el, Q(d, N, T)) : N = te, B && An(B), (be = N.props && N.props.onVnodeBeforeUpdate) && Ve(be, V, N, te), wt(d, !0);
                const _e = Nr(d), $e = d.subTree;
                d.subTree = _e, R($e, _e, f($e.el), w($e), d, S, E), N.el = _e.el, X === null && eu(d, _e.el), j && xe(j, S), (be = N.props && N.props.onVnodeUpdated) && xe(() => Ve(be, V, N, te), S)
            } else {
                let N;
                const {el: B, props: j} = h, {bm: V, m: te, parent: X, root: be, type: _e} = d, $e = rn(h);
                wt(d, !1), V && An(V), !$e && (N = j && j.onVnodeBeforeMount) && Ve(N, X, h), wt(d, !0);
                {
                    be.ce && be.ce._def.shadowRoot !== !1 && be.ce._injectChildStyle(_e);
                    const He = d.subTree = Nr(d);
                    R(null, He, m, _, d, S, E), h.el = He.el
                }
                if (te && xe(te, S), !$e && (N = j && j.onVnodeMounted)) {
                    const He = h;
                    xe(() => Ve(N, X, He), S)
                }
                (h.shapeFlag & 256 || X && rn(X.vnode) && X.vnode.shapeFlag & 256) && d.a && xe(d.a, S), d.isMounted = !0, h = m = _ = null
            }
        };
        d.scope.on();
        const O = d.effect = new Do(A);
        d.scope.off();
        const x = d.update = O.run.bind(O), k = d.job = O.runIfDirty.bind(O);
        k.i = d, k.id = d.uid, O.scheduler = () => lr(k), wt(d, !0), x()
    }, Q = (d, h, m) => {
        h.component = d;
        const _ = d.vnode.props;
        d.vnode = h, d.next = null, Bc(d, h.props, _, m), $c(d, h.children, m), rt(), Rr(d), ot()
    }, W = (d, h, m, _, S, E, T, A, O = !1) => {
        const x = d && d.children, k = d ? d.shapeFlag : 0, N = h.children, {patchFlag: B, shapeFlag: j} = h;
        if (B > 0) {
            if (B & 128) {
                ct(x, N, m, _, S, E, T, A, O);
                return
            } else if (B & 256) {
                Qe(x, N, m, _, S, E, T, A, O);
                return
            }
        }
        j & 8 ? (k & 16 && Ce(x, S, E), N !== x && u(m, N)) : k & 16 ? j & 16 ? ct(x, N, m, _, S, E, T, A, O) : Ce(x, S, E, !0) : (k & 8 && u(m, ""), j & 16 && pe(N, m, _, S, E, T, A, O))
    }, Qe = (d, h, m, _, S, E, T, A, O) => {
        d = d || Mt, h = h || Mt;
        const x = d.length, k = h.length, N = Math.min(x, k);
        let B;
        for (B = 0; B < N; B++) {
            const j = h[B] = O ? ft(h[B]) : Je(h[B]);
            R(d[B], j, m, null, S, E, T, A, O)
        }
        x > k ? Ce(d, S, E, !0, !1, N) : pe(h, m, _, S, E, T, A, O, N)
    }, ct = (d, h, m, _, S, E, T, A, O) => {
        let x = 0;
        const k = h.length;
        let N = d.length - 1, B = k - 1;
        for (; x <= N && x <= B;) {
            const j = d[x], V = h[x] = O ? ft(h[x]) : Je(h[x]);
            if (Xt(j, V)) R(j, V, m, null, S, E, T, A, O); else break;
            x++
        }
        for (; x <= N && x <= B;) {
            const j = d[N], V = h[B] = O ? ft(h[B]) : Je(h[B]);
            if (Xt(j, V)) R(j, V, m, null, S, E, T, A, O); else break;
            N--, B--
        }
        if (x > N) {
            if (x <= B) {
                const j = B + 1, V = j < k ? h[j].el : _;
                for (; x <= B;) R(null, h[x] = O ? ft(h[x]) : Je(h[x]), m, V, S, E, T, A, O), x++
            }
        } else if (x > B) for (; x <= N;) ye(d[x], S, E, !0), x++; else {
            const j = x, V = x, te = new Map;
            for (x = V; x <= B; x++) {
                const ve = h[x] = O ? ft(h[x]) : Je(h[x]);
                ve.key != null && te.set(ve.key, x)
            }
            let X, be = 0;
            const _e = B - V + 1;
            let $e = !1, He = 0;
            const Jt = new Array(_e);
            for (x = 0; x < _e; x++) Jt[x] = 0;
            for (x = j; x <= N; x++) {
                const ve = d[x];
                if (be >= _e) {
                    ye(ve, S, E, !0);
                    continue
                }
                let qe;
                if (ve.key != null) qe = te.get(ve.key); else for (X = V; X <= B; X++) if (Jt[X - V] === 0 && Xt(ve, h[X])) {
                    qe = X;
                    break
                }
                qe === void 0 ? ye(ve, S, E, !0) : (Jt[qe - V] = x + 1, qe >= He ? He = qe : $e = !0, R(ve, h[qe], m, null, S, E, T, A, O), be++)
            }
            const br = $e ? Kc(Jt) : Mt;
            for (X = br.length - 1, x = _e - 1; x >= 0; x--) {
                const ve = V + x, qe = h[ve], _r = ve + 1 < k ? h[ve + 1].el : _;
                Jt[x] === 0 ? R(null, qe, m, _r, S, E, T, A, O) : $e && (X < 0 || x !== br[X] ? je(qe, m, _r, 2) : X--)
            }
        }
    }, je = (d, h, m, _, S = null) => {
        const {el: E, type: T, transition: A, children: O, shapeFlag: x} = d;
        if (x & 6) {
            je(d.component.subTree, h, m, _);
            return
        }
        if (x & 128) {
            d.suspense.move(h, m, _);
            return
        }
        if (x & 64) {
            T.move(d, h, m, D);
            return
        }
        if (T === ze) {
            s(E, h, m);
            for (let N = 0; N < O.length; N++) je(O[N], h, m, _);
            s(d.anchor, h, m);
            return
        }
        if (T === ys) {
            I(d, h, m);
            return
        }
        if (_ !== 2 && x & 1 && A) if (_ === 0) A.beforeEnter(E), s(E, h, m), xe(() => A.enter(E), S); else {
            const {leave: N, delayLeave: B, afterLeave: j} = A, V = () => {
                d.ctx.isUnmounted ? r(E) : s(E, h, m)
            }, te = () => {
                N(E, () => {
                    V(), j && j()
                })
            };
            B ? B(E, V, te) : te()
        } else s(E, h, m)
    }, ye = (d, h, m, _ = !1, S = !1) => {
        const {
            type: E,
            props: T,
            ref: A,
            children: O,
            dynamicChildren: x,
            shapeFlag: k,
            patchFlag: N,
            dirs: B,
            cacheIndex: j
        } = d;
        if (N === -2 && (S = !1), A != null && (rt(), sn(A, null, m, d, !0), ot()), j != null && (h.renderCache[j] = void 0), k & 256) {
            h.ctx.deactivate(d);
            return
        }
        const V = k & 1 && B, te = !rn(d);
        let X;
        if (te && (X = T && T.onVnodeBeforeUnmount) && Ve(X, h, d), k & 6) Rn(d.component, m, _); else {
            if (k & 128) {
                d.suspense.unmount(m, _);
                return
            }
            V && _t(d, null, h, "beforeUnmount"), k & 64 ? d.type.remove(d, h, m, D, _) : x && !x.hasOnce && (E !== ze || N > 0 && N & 64) ? Ce(x, h, m, !1, !0) : (E === ze && N & 384 || !S && k & 16) && Ce(O, h, m), _ && Ct(d)
        }
        (te && (X = T && T.onVnodeUnmounted) || V) && xe(() => {
            X && Ve(X, h, d), V && _t(d, null, h, "unmounted")
        }, m)
    }, Ct = d => {
        const {type: h, el: m, anchor: _, transition: S} = d;
        if (h === ze) {
            Tt(m, _);
            return
        }
        if (h === ys) {
            F(d);
            return
        }
        const E = () => {
            r(m), S && !S.persisted && S.afterLeave && S.afterLeave()
        };
        if (d.shapeFlag & 1 && S && !S.persisted) {
            const {leave: T, delayLeave: A} = S, O = () => T(m, E);
            A ? A(d.el, E, O) : O()
        } else E()
    }, Tt = (d, h) => {
        let m;
        for (; d !== h;) m = p(d), r(d), d = m;
        r(h)
    }, Rn = (d, h, m) => {
        const {bum: _, scope: S, job: E, subTree: T, um: A, m: O, a: x, parent: k, slots: {__: N}} = d;
        Lr(O), Lr(x), _ && An(_), k && U(N) && N.forEach(B => {
            k.renderCache[B] = void 0
        }), S.stop(), E && (E.flags |= 8, ye(T, d, h, m)), A && xe(A, h), xe(() => {
            d.isUnmounted = !0
        }, h), h && h.pendingBranch && !h.isUnmounted && d.asyncDep && !d.asyncResolved && d.suspenseId === h.pendingId && (h.deps--, h.deps === 0 && h.resolve())
    }, Ce = (d, h, m, _ = !1, S = !1, E = 0) => {
        for (let T = E; T < d.length; T++) ye(d[T], h, m, _, S)
    }, w = d => {
        if (d.shapeFlag & 6) return w(d.component.subTree);
        if (d.shapeFlag & 128) return d.suspense.next();
        const h = p(d.anchor || d.el), m = h && h[uc];
        return m ? p(m) : h
    };
    let M = !1;
    const L = (d, h, m) => {
        d == null ? h._vnode && ye(h._vnode, null, null, !0) : R(h._vnode || null, d, h, null, null, null, m), h._vnode = d, M || (M = !0, Rr(), si(), M = !1)
    }, D = {p: R, um: ye, m: je, r: Ct, mt: zt, mc: pe, pc: W, pbc: ke, n: w, o: e};
    return {render: L, hydrate: void 0, createApp: Mc(L)}
}

function gs({type: e, props: t}, n) {
    return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n
}

function wt({effect: e, job: t}, n) {
    n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5)
}

function Vc(e, t) {
    return (!e || e && !e.pendingBranch) && t && !t.persisted
}

function Si(e, t, n = !1) {
    const s = e.children, r = t.children;
    if (U(s) && U(r)) for (let o = 0; o < s.length; o++) {
        const i = s[o];
        let l = r[o];
        l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[o] = ft(r[o]), l.el = i.el), !n && l.patchFlag !== -2 && Si(i, l)), l.type === es && (l.el = i.el), l.type === gt && !l.el && (l.el = i.el)
    }
}

function Kc(e) {
    const t = e.slice(), n = [0];
    let s, r, o, i, l;
    const c = e.length;
    for (s = 0; s < c; s++) {
        const a = e[s];
        if (a !== 0) {
            if (r = n[n.length - 1], e[r] < a) {
                t[s] = r, n.push(s);
                continue
            }
            for (o = 0, i = n.length - 1; o < i;) l = o + i >> 1, e[n[l]] < a ? o = l + 1 : i = l;
            a < e[n[o]] && (o > 0 && (t[s] = n[o - 1]), n[o] = s)
        }
    }
    for (o = n.length, i = n[o - 1]; o-- > 0;) n[o] = i, i = t[i];
    return n
}

function Ri(e) {
    const t = e.subTree.component;
    if (t) return t.asyncDep && !t.asyncResolved ? t : Ri(t)
}

function Lr(e) {
    if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8
}

const Wc = Symbol.for("v-scx"), zc = () => st(Wc);

function Tn(e, t, n) {
    return vi(e, t, n)
}

function vi(e, t, n = Z) {
    const {immediate: s, deep: r, flush: o, once: i} = n, l = he({}, n), c = t && s || !t && o !== "post";
    let a;
    if (pn) {
        if (o === "sync") {
            const g = zc();
            a = g.__watcherHandles || (g.__watcherHandles = [])
        } else if (!c) {
            const g = () => {
            };
            return g.stop = Ge, g.resume = Ge, g.pause = Ge, g
        }
    }
    const u = ae;
    l.call = (g, b, R) => Xe(g, u, b, R);
    let f = !1;
    o === "post" ? l.scheduler = g => {
        xe(g, u && u.suspense)
    } : o !== "sync" && (f = !0, l.scheduler = (g, b) => {
        b ? g() : lr(g)
    }), l.augmentJob = g => {
        t && (g.flags |= 4), f && (g.flags |= 2, u && (g.id = u.uid, g.i = u))
    };
    const p = rc(e, t, l);
    return pn && (a ? a.push(p) : c && p()), p
}

function Jc(e, t, n) {
    const s = this.proxy, r = oe(e) ? e.includes(".") ? xi(s, e) : () => s[e] : e.bind(s, s);
    let o;
    $(t) ? o = t : (o = t.handler, n = t);
    const i = _n(this), l = vi(r, o.bind(s), n);
    return i(), l
}

function xi(e, t) {
    const n = t.split(".");
    return () => {
        let s = e;
        for (let r = 0; r < n.length && s; r++) s = s[n[r]];
        return s
    }
}

const Gc = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Le(t)}Modifiers`] || e[`${Ot(t)}Modifiers`];

function Xc(e, t, ...n) {
    if (e.isUnmounted) return;
    const s = e.vnode.props || Z;
    let r = n;
    const o = t.startsWith("update:"), i = o && Gc(s, t.slice(7));
    i && (i.trim && (r = n.map(u => oe(u) ? u.trim() : u)), i.number && (r = n.map(Cs)));
    let l, c = s[l = as(t)] || s[l = as(Le(t))];
    !c && o && (c = s[l = as(Ot(t))]), c && Xe(c, e, 6, r);
    const a = s[l + "Once"];
    if (a) {
        if (!e.emitted) e.emitted = {}; else if (e.emitted[l]) return;
        e.emitted[l] = !0, Xe(a, e, 6, r)
    }
}

function Oi(e, t, n = !1) {
    const s = t.emitsCache, r = s.get(e);
    if (r !== void 0) return r;
    const o = e.emits;
    let i = {}, l = !1;
    if (!$(e)) {
        const c = a => {
            const u = Oi(a, t, !0);
            u && (l = !0, he(i, u))
        };
        !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c)
    }
    return !o && !l ? (se(e) && s.set(e, null), null) : (U(o) ? o.forEach(c => i[c] = null) : he(i, o), se(e) && s.set(e, i), i)
}

function Zn(e, t) {
    return !e || !Vn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), G(e, t[0].toLowerCase() + t.slice(1)) || G(e, Ot(t)) || G(e, t))
}

function Nr(e) {
    const {
        type: t,
        vnode: n,
        proxy: s,
        withProxy: r,
        propsOptions: [o],
        slots: i,
        attrs: l,
        emit: c,
        render: a,
        renderCache: u,
        props: f,
        data: p,
        setupState: g,
        ctx: b,
        inheritAttrs: R
    } = e, v = kn(e);
    let P, C;
    try {
        if (n.shapeFlag & 4) {
            const F = r || s, H = F;
            P = Je(a.call(H, F, u, f, g, p, b)), C = l
        } else {
            const F = t;
            P = Je(F.length > 1 ? F(f, {attrs: l, slots: i, emit: c}) : F(f, null)), C = t.props ? l : Qc(l)
        }
    } catch (F) {
        ln.length = 0, Qn(F, e, 1), P = Ee(gt)
    }
    let I = P;
    if (C && R !== !1) {
        const F = Object.keys(C), {shapeFlag: H} = I;
        F.length && H & 7 && (o && F.some(Gs) && (C = Yc(C, o)), I = $t(I, C, !1, !0))
    }
    return n.dirs && (I = $t(I, null, !1, !0), I.dirs = I.dirs ? I.dirs.concat(n.dirs) : n.dirs), n.transition && cr(I, n.transition), P = I, kn(v), P
}

const Qc = e => {
    let t;
    for (const n in e) (n === "class" || n === "style" || Vn(n)) && ((t || (t = {}))[n] = e[n]);
    return t
}, Yc = (e, t) => {
    const n = {};
    for (const s in e) (!Gs(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
    return n
};

function Zc(e, t, n) {
    const {props: s, children: r, component: o} = e, {props: i, children: l, patchFlag: c} = t, a = o.emitsOptions;
    if (t.dirs || t.transition) return !0;
    if (n && c >= 0) {
        if (c & 1024) return !0;
        if (c & 16) return s ? Ir(s, i, a) : !!i;
        if (c & 8) {
            const u = t.dynamicProps;
            for (let f = 0; f < u.length; f++) {
                const p = u[f];
                if (i[p] !== s[p] && !Zn(a, p)) return !0
            }
        }
    } else return (r || l) && (!l || !l.$stable) ? !0 : s === i ? !1 : s ? i ? Ir(s, i, a) : !0 : !!i;
    return !1
}

function Ir(e, t, n) {
    const s = Object.keys(t);
    if (s.length !== Object.keys(e).length) return !0;
    for (let r = 0; r < s.length; r++) {
        const o = s[r];
        if (t[o] !== e[o] && !Zn(n, o)) return !0
    }
    return !1
}

function eu({vnode: e, parent: t}, n) {
    for (; t;) {
        const s = t.subTree;
        if (s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e) (e = t.vnode).el = n, t = t.parent; else break
    }
}

const Ai = e => e.__isSuspense;

function tu(e, t) {
    t && t.pendingBranch ? U(e) ? t.effects.push(...e) : t.effects.push(e) : lc(e)
}

const ze = Symbol.for("v-fgt"), es = Symbol.for("v-txt"), gt = Symbol.for("v-cmt"), ys = Symbol.for("v-stc"), ln = [];
let Ae = null;

function Te(e = !1) {
    ln.push(Ae = e ? null : [])
}

function nu() {
    ln.pop(), Ae = ln[ln.length - 1] || null
}

let hn = 1;

function Fr(e, t = !1) {
    hn += e, e < 0 && Ae && t && (Ae.hasOnce = !0)
}

function Ci(e) {
    return e.dynamicChildren = hn > 0 ? Ae || Mt : null, nu(), hn > 0 && Ae && Ae.push(e), e
}

function Ie(e, t, n, s, r, o) {
    return Ci(le(e, t, n, s, r, o, !0))
}

function su(e, t, n, s, r) {
    return Ci(Ee(e, t, n, s, r, !0))
}

function jn(e) {
    return e ? e.__v_isVNode === !0 : !1
}

function Xt(e, t) {
    return e.type === t.type && e.key === t.key
}

const Ti = ({key: e}) => e ?? null, Pn = ({
                                              ref: e,
                                              ref_key: t,
                                              ref_for: n
                                          }) => (typeof e == "number" && (e = "" + e), e != null ? oe(e) || de(e) || $(e) ? {
    i: Oe,
    r: e,
    k: t,
    f: !!n
} : e : null);

function le(e, t = null, n = null, s = 0, r = null, o = e === ze ? 0 : 1, i = !1, l = !1) {
    const c = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e,
        props: t,
        key: t && Ti(t),
        ref: t && Pn(t),
        scopeId: oi,
        slotScopeIds: null,
        children: n,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetStart: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag: o,
        patchFlag: s,
        dynamicProps: r,
        dynamicChildren: null,
        appContext: null,
        ctx: Oe
    };
    return l ? (fr(c, n), o & 128 && e.normalize(c)) : n && (c.shapeFlag |= oe(n) ? 8 : 16), hn > 0 && !i && Ae && (c.patchFlag > 0 || o & 6) && c.patchFlag !== 32 && Ae.push(c), c
}

const Ee = ru;

function ru(e, t = null, n = null, s = 0, r = null, o = !1) {
    if ((!e || e === xc) && (e = gt), jn(e)) {
        const l = $t(e, t, !0);
        return n && fr(l, n), hn > 0 && !o && Ae && (l.shapeFlag & 6 ? Ae[Ae.indexOf(e)] = l : Ae.push(l)), l.patchFlag = -2, l
    }
    if (gu(e) && (e = e.__vccOpts), t) {
        t = ou(t);
        let {class: l, style: c} = t;
        l && !oe(l) && (t.class = Zs(l)), se(c) && (ir(c) && !U(c) && (c = he({}, c)), t.style = Ys(c))
    }
    const i = oe(e) ? 1 : Ai(e) ? 128 : ac(e) ? 64 : se(e) ? 4 : $(e) ? 2 : 0;
    return le(e, t, n, s, r, i, o, !0)
}

function ou(e) {
    return e ? ir(e) || gi(e) ? he({}, e) : e : null
}

function $t(e, t, n = !1, s = !1) {
    const {props: r, ref: o, patchFlag: i, children: l, transition: c} = e, a = t ? lu(r || {}, t) : r, u = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e.type,
        props: a,
        key: a && Ti(a),
        ref: t && t.ref ? n && o ? U(o) ? o.concat(Pn(t)) : [o, Pn(t)] : Pn(t) : o,
        scopeId: e.scopeId,
        slotScopeIds: e.slotScopeIds,
        children: l,
        target: e.target,
        targetStart: e.targetStart,
        targetAnchor: e.targetAnchor,
        staticCount: e.staticCount,
        shapeFlag: e.shapeFlag,
        patchFlag: t && e.type !== ze ? i === -1 ? 16 : i | 16 : i,
        dynamicProps: e.dynamicProps,
        dynamicChildren: e.dynamicChildren,
        appContext: e.appContext,
        dirs: e.dirs,
        transition: c,
        component: e.component,
        suspense: e.suspense,
        ssContent: e.ssContent && $t(e.ssContent),
        ssFallback: e.ssFallback && $t(e.ssFallback),
        el: e.el,
        anchor: e.anchor,
        ctx: e.ctx,
        ce: e.ce
    };
    return c && s && cr(u, c.clone(u)), u
}

function iu(e = " ", t = 0) {
    return Ee(es, null, e, t)
}

function Ft(e = "", t = !1) {
    return t ? (Te(), su(gt, null, e)) : Ee(gt, null, e)
}

function Je(e) {
    return e == null || typeof e == "boolean" ? Ee(gt) : U(e) ? Ee(ze, null, e.slice()) : jn(e) ? ft(e) : Ee(es, null, String(e))
}

function ft(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : $t(e)
}

function fr(e, t) {
    let n = 0;
    const {shapeFlag: s} = e;
    if (t == null) t = null; else if (U(t)) n = 16; else if (typeof t == "object") if (s & 65) {
        const r = t.default;
        r && (r._c && (r._d = !1), fr(e, r()), r._c && (r._d = !0));
        return
    } else {
        n = 32;
        const r = t._;
        !r && !gi(t) ? t._ctx = Oe : r === 3 && Oe && (Oe.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024))
    } else $(t) ? (t = {default: t, _ctx: Oe}, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [iu(t)]) : n = 8);
    e.children = t, e.shapeFlag |= n
}

function lu(...e) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
        const s = e[n];
        for (const r in s) if (r === "class") t.class !== s.class && (t.class = Zs([t.class, s.class])); else if (r === "style") t.style = Ys([t.style, s.style]); else if (Vn(r)) {
            const o = t[r], i = s[r];
            i && o !== i && !(U(o) && o.includes(i)) && (t[r] = o ? [].concat(o, i) : i)
        } else r !== "" && (t[r] = s[r])
    }
    return t
}

function Ve(e, t, n, s = null) {
    Xe(e, t, 7, [n, s])
}

const cu = hi();
let uu = 0;

function au(e, t, n) {
    const s = e.type, r = (t ? t.appContext : e.appContext) || cu, o = {
        uid: uu++,
        vnode: e,
        type: s,
        parent: t,
        appContext: r,
        root: null,
        next: null,
        subTree: null,
        effect: null,
        update: null,
        job: null,
        scope: new Pl(!0),
        render: null,
        proxy: null,
        exposed: null,
        exposeProxy: null,
        withProxy: null,
        provides: t ? t.provides : Object.create(r.provides),
        ids: t ? t.ids : ["", 0, 0],
        accessCache: null,
        renderCache: [],
        components: null,
        directives: null,
        propsOptions: bi(s, r),
        emitsOptions: Oi(s, r),
        emit: null,
        emitted: null,
        propsDefaults: Z,
        inheritAttrs: s.inheritAttrs,
        ctx: Z,
        data: Z,
        props: Z,
        attrs: Z,
        slots: Z,
        refs: Z,
        setupState: Z,
        setupContext: null,
        suspense: n,
        suspenseId: n ? n.pendingId : 0,
        asyncDep: null,
        asyncResolved: !1,
        isMounted: !1,
        isUnmounted: !1,
        isDeactivated: !1,
        bc: null,
        c: null,
        bm: null,
        m: null,
        bu: null,
        u: null,
        um: null,
        bum: null,
        da: null,
        a: null,
        rtg: null,
        rtc: null,
        ec: null,
        sp: null
    };
    return o.ctx = {_: o}, o.root = t ? t.root : o, o.emit = Xc.bind(null, o), e.ce && e.ce(o), o
}

let ae = null, $n, Bs;
{
    const e = Jn(), t = (n, s) => {
        let r;
        return (r = e[n]) || (r = e[n] = []), r.push(s), o => {
            r.length > 1 ? r.forEach(i => i(o)) : r[0](o)
        }
    };
    $n = t("__VUE_INSTANCE_SETTERS__", n => ae = n), Bs = t("__VUE_SSR_SETTERS__", n => pn = n)
}
const _n = e => {
    const t = ae;
    return $n(e), e.scope.on(), () => {
        e.scope.off(), $n(t)
    }
}, Mr = () => {
    ae && ae.scope.off(), $n(null)
};

function Pi(e) {
    return e.vnode.shapeFlag & 4
}

let pn = !1;

function fu(e, t = !1, n = !1) {
    t && Bs(t);
    const {props: s, children: r} = e.vnode, o = Pi(e);
    Dc(e, s, o, t), jc(e, r, n || t);
    const i = o ? du(e, t) : void 0;
    return t && Bs(!1), i
}

function du(e, t) {
    const n = e.type;
    e.accessCache = Object.create(null), e.proxy = new Proxy(e.ctx, Cc);
    const {setup: s} = n;
    if (s) {
        rt();
        const r = e.setupContext = s.length > 1 ? pu(e) : null, o = _n(e), i = bn(s, e, 0, [e.props, r]), l = Po(i);
        if (ot(), o(), (l || e.sp) && !rn(e) && li(e), l) {
            if (i.then(Mr, Mr), t) return i.then(c => {
                Dr(e, c)
            }).catch(c => {
                Qn(c, e, 0)
            });
            e.asyncDep = i
        } else Dr(e, i)
    } else Li(e)
}

function Dr(e, t, n) {
    $(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : se(t) && (e.setupState = Zo(t)), Li(e)
}

function Li(e, t, n) {
    const s = e.type;
    e.render || (e.render = s.render || Ge);
    {
        const r = _n(e);
        rt();
        try {
            Tc(e)
        } finally {
            ot(), r()
        }
    }
}

const hu = {
    get(e, t) {
        return ue(e, "get", ""), e[t]
    }
};

function pu(e) {
    const t = n => {
        e.exposed = n || {}
    };
    return {attrs: new Proxy(e.attrs, hu), slots: e.slots, emit: e.emit, expose: t}
}

function ts(e) {
    return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Zo(Xl(e.exposed)), {
        get(t, n) {
            if (n in t) return t[n];
            if (n in on) return on[n](e)
        }, has(t, n) {
            return n in t || n in on
        }
    })) : e.proxy
}

function mu(e, t = !0) {
    return $(e) ? e.displayName || e.name : e.name || t && e.__name
}

function gu(e) {
    return $(e) && "__vccOpts" in e
}

const Fe = (e, t) => nc(e, t, pn);

function Ni(e, t, n) {
    const s = arguments.length;
    return s === 2 ? se(t) && !U(t) ? jn(t) ? Ee(e, null, [t]) : Ee(e, t) : Ee(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && jn(n) && (n = [n]), Ee(e, t, n))
}

const yu = "3.5.17";
/**
 * @vue/runtime-dom v3.5.17
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/let ks;
const Br = typeof window < "u" && window.trustedTypes;
if (Br) try {
    ks = Br.createPolicy("vue", {createHTML: e => e})
} catch {
}
const Ii = ks ? e => ks.createHTML(e) : e => e, bu = "http://www.w3.org/2000/svg",
    _u = "http://www.w3.org/1998/Math/MathML", et = typeof document < "u" ? document : null,
    kr = et && et.createElement("template"), wu = {
        insert: (e, t, n) => {
            t.insertBefore(e, n || null)
        },
        remove: e => {
            const t = e.parentNode;
            t && t.removeChild(e)
        },
        createElement: (e, t, n, s) => {
            const r = t === "svg" ? et.createElementNS(bu, e) : t === "mathml" ? et.createElementNS(_u, e) : n ? et.createElement(e, {is: n}) : et.createElement(e);
            return e === "select" && s && s.multiple != null && r.setAttribute("multiple", s.multiple), r
        },
        createText: e => et.createTextNode(e),
        createComment: e => et.createComment(e),
        setText: (e, t) => {
            e.nodeValue = t
        },
        setElementText: (e, t) => {
            e.textContent = t
        },
        parentNode: e => e.parentNode,
        nextSibling: e => e.nextSibling,
        querySelector: e => et.querySelector(e),
        setScopeId(e, t) {
            e.setAttribute(t, "")
        },
        insertStaticContent(e, t, n, s, r, o) {
            const i = n ? n.previousSibling : t.lastChild;
            if (r && (r === o || r.nextSibling)) for (; t.insertBefore(r.cloneNode(!0), n), !(r === o || !(r = r.nextSibling));) ; else {
                kr.innerHTML = Ii(s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e);
                const l = kr.content;
                if (s === "svg" || s === "mathml") {
                    const c = l.firstChild;
                    for (; c.firstChild;) l.appendChild(c.firstChild);
                    l.removeChild(c)
                }
                t.insertBefore(l, n)
            }
            return [i ? i.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild]
        }
    }, Eu = Symbol("_vtc");

function Su(e, t, n) {
    const s = e[Eu];
    s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t
}

const Ur = Symbol("_vod"), Ru = Symbol("_vsh"), vu = Symbol(""), xu = /(^|;)\s*display\s*:/;

function Ou(e, t, n) {
    const s = e.style, r = oe(n);
    let o = !1;
    if (n && !r) {
        if (t) if (oe(t)) for (const i of t.split(";")) {
            const l = i.slice(0, i.indexOf(":")).trim();
            n[l] == null && Ln(s, l, "")
        } else for (const i in t) n[i] == null && Ln(s, i, "");
        for (const i in n) i === "display" && (o = !0), Ln(s, i, n[i])
    } else if (r) {
        if (t !== n) {
            const i = s[vu];
            i && (n += ";" + i), s.cssText = n, o = xu.test(n)
        }
    } else t && e.removeAttribute("style");
    Ur in e && (e[Ur] = o ? s.display : "", e[Ru] && (s.display = "none"))
}

const jr = /\s*!important$/;

function Ln(e, t, n) {
    if (U(n)) n.forEach(s => Ln(e, t, s)); else if (n == null && (n = ""), t.startsWith("--")) e.setProperty(t, n); else {
        const s = Au(e, t);
        jr.test(n) ? e.setProperty(Ot(s), n.replace(jr, ""), "important") : e[s] = n
    }
}

const $r = ["Webkit", "Moz", "ms"], bs = {};

function Au(e, t) {
    const n = bs[t];
    if (n) return n;
    let s = Le(t);
    if (s !== "filter" && s in e) return bs[t] = s;
    s = zn(s);
    for (let r = 0; r < $r.length; r++) {
        const o = $r[r] + s;
        if (o in e) return bs[t] = o
    }
    return t
}

const Hr = "http://www.w3.org/1999/xlink";

function qr(e, t, n, s, r, o = Tl(t)) {
    s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Hr, t.slice(6, t.length)) : e.setAttributeNS(Hr, t, n) : n == null || o && !Io(n) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : yt(n) ? String(n) : n)
}

function Vr(e, t, n, s, r) {
    if (t === "innerHTML" || t === "textContent") {
        n != null && (e[t] = t === "innerHTML" ? Ii(n) : n);
        return
    }
    const o = e.tagName;
    if (t === "value" && o !== "PROGRESS" && !o.includes("-")) {
        const l = o === "OPTION" ? e.getAttribute("value") || "" : e.value,
            c = n == null ? e.type === "checkbox" ? "on" : "" : String(n);
        (l !== c || !("_value" in e)) && (e.value = c), n == null && e.removeAttribute(t), e._value = n;
        return
    }
    let i = !1;
    if (n === "" || n == null) {
        const l = typeof e[t];
        l === "boolean" ? n = Io(n) : n == null && l === "string" ? (n = "", i = !0) : l === "number" && (n = 0, i = !0)
    }
    try {
        e[t] = n
    } catch {
    }
    i && e.removeAttribute(r || t)
}

function Nt(e, t, n, s) {
    e.addEventListener(t, n, s)
}

function Cu(e, t, n, s) {
    e.removeEventListener(t, n, s)
}

const Kr = Symbol("_vei");

function Tu(e, t, n, s, r = null) {
    const o = e[Kr] || (e[Kr] = {}), i = o[t];
    if (s && i) i.value = s; else {
        const [l, c] = Pu(t);
        if (s) {
            const a = o[t] = Iu(s, r);
            Nt(e, l, a, c)
        } else i && (Cu(e, l, i, c), o[t] = void 0)
    }
}

const Wr = /(?:Once|Passive|Capture)$/;

function Pu(e) {
    let t;
    if (Wr.test(e)) {
        t = {};
        let s;
        for (; s = e.match(Wr);) e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0
    }
    return [e[2] === ":" ? e.slice(3) : Ot(e.slice(2)), t]
}

let _s = 0;
const Lu = Promise.resolve(), Nu = () => _s || (Lu.then(() => _s = 0), _s = Date.now());

function Iu(e, t) {
    const n = s => {
        if (!s._vts) s._vts = Date.now(); else if (s._vts <= n.attached) return;
        Xe(Fu(s, n.value), t, 5, [s])
    };
    return n.value = e, n.attached = Nu(), n
}

function Fu(e, t) {
    if (U(t)) {
        const n = e.stopImmediatePropagation;
        return e.stopImmediatePropagation = () => {
            n.call(e), e._stopped = !0
        }, t.map(s => r => !r._stopped && s && s(r))
    } else return t
}

const zr = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123,
    Mu = (e, t, n, s, r, o) => {
        const i = r === "svg";
        t === "class" ? Su(e, s, i) : t === "style" ? Ou(e, n, s) : Vn(t) ? Gs(t) || Tu(e, t, n, s, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Du(e, t, s, i)) ? (Vr(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && qr(e, t, s, i, o, t !== "value")) : e._isVueCE && (/[A-Z]/.test(t) || !oe(s)) ? Vr(e, Le(t), s, o, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), qr(e, t, s, i))
    };

function Du(e, t, n, s) {
    if (s) return !!(t === "innerHTML" || t === "textContent" || t in e && zr(t) && $(n));
    if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
    if (t === "width" || t === "height") {
        const r = e.tagName;
        if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE") return !1
    }
    return zr(t) && oe(n) ? !1 : t in e
}

const Jr = e => {
    const t = e.props["onUpdate:modelValue"] || !1;
    return U(t) ? n => An(t, n) : t
};

function Bu(e) {
    e.target.composing = !0
}

function Gr(e) {
    const t = e.target;
    t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")))
}

const ws = Symbol("_assign"), Xr = {
    created(e, {modifiers: {lazy: t, trim: n, number: s}}, r) {
        e[ws] = Jr(r);
        const o = s || r.props && r.props.type === "number";
        Nt(e, t ? "change" : "input", i => {
            if (i.target.composing) return;
            let l = e.value;
            n && (l = l.trim()), o && (l = Cs(l)), e[ws](l)
        }), n && Nt(e, "change", () => {
            e.value = e.value.trim()
        }), t || (Nt(e, "compositionstart", Bu), Nt(e, "compositionend", Gr), Nt(e, "change", Gr))
    }, mounted(e, {value: t}) {
        e.value = t ?? ""
    }, beforeUpdate(e, {value: t, oldValue: n, modifiers: {lazy: s, trim: r, number: o}}, i) {
        if (e[ws] = Jr(i), e.composing) return;
        const l = (o || e.type === "number") && !/^0\d/.test(e.value) ? Cs(e.value) : e.value, c = t ?? "";
        l !== c && (document.activeElement === e && e.type !== "range" && (s && t === n || r && e.value.trim() === c) || (e.value = c))
    }
}, ku = ["ctrl", "shift", "alt", "meta"], Uu = {
    stop: e => e.stopPropagation(),
    prevent: e => e.preventDefault(),
    self: e => e.target !== e.currentTarget,
    ctrl: e => !e.ctrlKey,
    shift: e => !e.shiftKey,
    alt: e => !e.altKey,
    meta: e => !e.metaKey,
    left: e => "button" in e && e.button !== 0,
    middle: e => "button" in e && e.button !== 1,
    right: e => "button" in e && e.button !== 2,
    exact: (e, t) => ku.some(n => e[`${n}Key`] && !t.includes(n))
}, ju = (e, t) => {
    const n = e._withMods || (e._withMods = {}), s = t.join(".");
    return n[s] || (n[s] = (r, ...o) => {
        for (let i = 0; i < t.length; i++) {
            const l = Uu[t[i]];
            if (l && l(r, t)) return
        }
        return e(r, ...o)
    })
}, $u = he({patchProp: Mu}, wu);
let Qr;

function Hu() {
    return Qr || (Qr = Hc($u))
}

const qu = (...e) => {
    const t = Hu().createApp(...e), {mount: n} = t;
    return t.mount = s => {
        const r = Ku(s);
        if (!r) return;
        const o = t._component;
        !$(o) && !o.render && !o.template && (o.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
        const i = n(r, !1, Vu(r));
        return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), i
    }, t
};

function Vu(e) {
    if (e instanceof SVGElement) return "svg";
    if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml"
}

function Ku(e) {
    return oe(e) ? document.querySelector(e) : e
}

const dr = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [s, r] of t) n[s] = r;
    return n
}, Wu = {
    name: "App", data() {
        return {isLoggedIn: !!localStorage.getItem("token")}
    }, methods: {
        onLoginSuccess() {
            this.isLoggedIn = !0
        }, logout() {
            localStorage.removeItem("token"), this.isLoggedIn = !1
        }
    }
}, zu = {id: "app"}, Ju = {key: 0, class: "user-bar"};

function Gu(e, t, n, s, r, o) {
    const i = vc("router-view");
    return Te(), Ie("div", zu, [r.isLoggedIn ? (Te(), Ie("div", Ju, [t[1] || (t[1] = le("span", null, "已登入", -1)), le("button", {onClick: t[0] || (t[0] = (...l) => o.logout && o.logout(...l))}, "登出")])) : Ft("", !0), Ee(i, {
        isLoggedIn: r.isLoggedIn,
        onLoginSuccess: o.onLoginSuccess
    }, null, 8, ["isLoggedIn", "onLoginSuccess"])])
}

const Xu = dr(Wu, [["render", Gu], ["__scopeId", "data-v-34cf03d7"]]);/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */
const It = typeof document < "u";

function Fi(e) {
    return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e
}

function Qu(e) {
    return e.__esModule || e[Symbol.toStringTag] === "Module" || e.default && Fi(e.default)
}

const z = Object.assign;

function Es(e, t) {
    const n = {};
    for (const s in t) {
        const r = t[s];
        n[s] = De(r) ? r.map(e) : e(r)
    }
    return n
}

const cn = () => {
    }, De = Array.isArray, Mi = /#/g, Yu = /&/g, Zu = /\//g, ea = /=/g, ta = /\?/g, Di = /\+/g, na = /%5B/g, sa = /%5D/g,
    Bi = /%5E/g, ra = /%60/g, ki = /%7B/g, oa = /%7C/g, Ui = /%7D/g, ia = /%20/g;

function hr(e) {
    return encodeURI("" + e).replace(oa, "|").replace(na, "[").replace(sa, "]")
}

function la(e) {
    return hr(e).replace(ki, "{").replace(Ui, "}").replace(Bi, "^")
}

function Us(e) {
    return hr(e).replace(Di, "%2B").replace(ia, "+").replace(Mi, "%23").replace(Yu, "%26").replace(ra, "`").replace(ki, "{").replace(Ui, "}").replace(Bi, "^")
}

function ca(e) {
    return Us(e).replace(ea, "%3D")
}

function ua(e) {
    return hr(e).replace(Mi, "%23").replace(ta, "%3F")
}

function aa(e) {
    return e == null ? "" : ua(e).replace(Zu, "%2F")
}

function mn(e) {
    try {
        return decodeURIComponent("" + e)
    } catch {
    }
    return "" + e
}

const fa = /\/$/, da = e => e.replace(fa, "");

function Ss(e, t, n = "/") {
    let s, r = {}, o = "", i = "";
    const l = t.indexOf("#");
    let c = t.indexOf("?");
    return l < c && l >= 0 && (c = -1), c > -1 && (s = t.slice(0, c), o = t.slice(c + 1, l > -1 ? l : t.length), r = e(o)), l > -1 && (s = s || t.slice(0, l), i = t.slice(l, t.length)), s = ga(s ?? t, n), {
        fullPath: s + (o && "?") + o + i,
        path: s,
        query: r,
        hash: mn(i)
    }
}

function ha(e, t) {
    const n = t.query ? e(t.query) : "";
    return t.path + (n && "?") + n + (t.hash || "")
}

function Yr(e, t) {
    return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/"
}

function pa(e, t, n) {
    const s = t.matched.length - 1, r = n.matched.length - 1;
    return s > -1 && s === r && Ht(t.matched[s], n.matched[r]) && ji(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash
}

function Ht(e, t) {
    return (e.aliasOf || e) === (t.aliasOf || t)
}

function ji(e, t) {
    if (Object.keys(e).length !== Object.keys(t).length) return !1;
    for (const n in e) if (!ma(e[n], t[n])) return !1;
    return !0
}

function ma(e, t) {
    return De(e) ? Zr(e, t) : De(t) ? Zr(t, e) : e === t
}

function Zr(e, t) {
    return De(t) ? e.length === t.length && e.every((n, s) => n === t[s]) : e.length === 1 && e[0] === t
}

function ga(e, t) {
    if (e.startsWith("/")) return e;
    if (!e) return t;
    const n = t.split("/"), s = e.split("/"), r = s[s.length - 1];
    (r === ".." || r === ".") && s.push("");
    let o = n.length - 1, i, l;
    for (i = 0; i < s.length; i++) if (l = s[i], l !== ".") if (l === "..") o > 1 && o--; else break;
    return n.slice(0, o).join("/") + "/" + s.slice(i).join("/")
}

const ut = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0
};
var gn;
(function (e) {
    e.pop = "pop", e.push = "push"
})(gn || (gn = {}));
var un;
(function (e) {
    e.back = "back", e.forward = "forward", e.unknown = ""
})(un || (un = {}));

function ya(e) {
    if (!e) if (It) {
        const t = document.querySelector("base");
        e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "")
    } else e = "/";
    return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), da(e)
}

const ba = /^[^#]+#/;

function _a(e, t) {
    return e.replace(ba, "#") + t
}

function wa(e, t) {
    const n = document.documentElement.getBoundingClientRect(), s = e.getBoundingClientRect();
    return {behavior: t.behavior, left: s.left - n.left - (t.left || 0), top: s.top - n.top - (t.top || 0)}
}

const ns = () => ({left: window.scrollX, top: window.scrollY});

function Ea(e) {
    let t;
    if ("el" in e) {
        const n = e.el, s = typeof n == "string" && n.startsWith("#"),
            r = typeof n == "string" ? s ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
        if (!r) return;
        t = wa(r, e)
    } else t = e;
    "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY)
}

function eo(e, t) {
    return (history.state ? history.state.position - t : -1) + e
}

const js = new Map;

function Sa(e, t) {
    js.set(e, t)
}

function Ra(e) {
    const t = js.get(e);
    return js.delete(e), t
}

let va = () => location.protocol + "//" + location.host;

function $i(e, t) {
    const {pathname: n, search: s, hash: r} = t, o = e.indexOf("#");
    if (o > -1) {
        let l = r.includes(e.slice(o)) ? e.slice(o).length : 1, c = r.slice(l);
        return c[0] !== "/" && (c = "/" + c), Yr(c, "")
    }
    return Yr(n, e) + s + r
}

function xa(e, t, n, s) {
    let r = [], o = [], i = null;
    const l = ({state: p}) => {
        const g = $i(e, location), b = n.value, R = t.value;
        let v = 0;
        if (p) {
            if (n.value = g, t.value = p, i && i === b) {
                i = null;
                return
            }
            v = R ? p.position - R.position : 0
        } else s(g);
        r.forEach(P => {
            P(n.value, b, {delta: v, type: gn.pop, direction: v ? v > 0 ? un.forward : un.back : un.unknown})
        })
    };

    function c() {
        i = n.value
    }

    function a(p) {
        r.push(p);
        const g = () => {
            const b = r.indexOf(p);
            b > -1 && r.splice(b, 1)
        };
        return o.push(g), g
    }

    function u() {
        const {history: p} = window;
        p.state && p.replaceState(z({}, p.state, {scroll: ns()}), "")
    }

    function f() {
        for (const p of o) p();
        o = [], window.removeEventListener("popstate", l), window.removeEventListener("beforeunload", u)
    }

    return window.addEventListener("popstate", l), window.addEventListener("beforeunload", u, {passive: !0}), {
        pauseListeners: c,
        listen: a,
        destroy: f
    }
}

function to(e, t, n, s = !1, r = !1) {
    return {back: e, current: t, forward: n, replaced: s, position: window.history.length, scroll: r ? ns() : null}
}

function Oa(e) {
    const {history: t, location: n} = window, s = {value: $i(e, n)}, r = {value: t.state};
    r.value || o(s.value, {
        back: null,
        current: s.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null
    }, !0);

    function o(c, a, u) {
        const f = e.indexOf("#"),
            p = f > -1 ? (n.host && document.querySelector("base") ? e : e.slice(f)) + c : va() + e + c;
        try {
            t[u ? "replaceState" : "pushState"](a, "", p), r.value = a
        } catch (g) {
            console.error(g), n[u ? "replace" : "assign"](p)
        }
    }

    function i(c, a) {
        const u = z({}, t.state, to(r.value.back, c, r.value.forward, !0), a, {position: r.value.position});
        o(c, u, !0), s.value = c
    }

    function l(c, a) {
        const u = z({}, r.value, t.state, {forward: c, scroll: ns()});
        o(u.current, u, !0);
        const f = z({}, to(s.value, c, null), {position: u.position + 1}, a);
        o(c, f, !1), s.value = c
    }

    return {location: s, state: r, push: l, replace: i}
}

function Aa(e) {
    e = ya(e);
    const t = Oa(e), n = xa(e, t.state, t.location, t.replace);

    function s(o, i = !0) {
        i || n.pauseListeners(), history.go(o)
    }

    const r = z({location: "", base: e, go: s, createHref: _a.bind(null, e)}, t, n);
    return Object.defineProperty(r, "location", {
        enumerable: !0,
        get: () => t.location.value
    }), Object.defineProperty(r, "state", {enumerable: !0, get: () => t.state.value}), r
}

function Ca(e) {
    return typeof e == "string" || e && typeof e == "object"
}

function Hi(e) {
    return typeof e == "string" || typeof e == "symbol"
}

const qi = Symbol("");
var no;
(function (e) {
    e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated"
})(no || (no = {}));

function qt(e, t) {
    return z(new Error, {type: e, [qi]: !0}, t)
}

function Ze(e, t) {
    return e instanceof Error && qi in e && (t == null || !!(e.type & t))
}

const so = "[^/]+?", Ta = {sensitive: !1, strict: !1, start: !0, end: !0}, Pa = /[.+*?^${}()[\]/\\]/g;

function La(e, t) {
    const n = z({}, Ta, t), s = [];
    let r = n.start ? "^" : "";
    const o = [];
    for (const a of e) {
        const u = a.length ? [] : [90];
        n.strict && !a.length && (r += "/");
        for (let f = 0; f < a.length; f++) {
            const p = a[f];
            let g = 40 + (n.sensitive ? .25 : 0);
            if (p.type === 0) f || (r += "/"), r += p.value.replace(Pa, "\\$&"), g += 40; else if (p.type === 1) {
                const {value: b, repeatable: R, optional: v, regexp: P} = p;
                o.push({name: b, repeatable: R, optional: v});
                const C = P || so;
                if (C !== so) {
                    g += 10;
                    try {
                        new RegExp(`(${C})`)
                    } catch (F) {
                        throw new Error(`Invalid custom RegExp for param "${b}" (${C}): ` + F.message)
                    }
                }
                let I = R ? `((?:${C})(?:/(?:${C}))*)` : `(${C})`;
                f || (I = v && a.length < 2 ? `(?:/${I})` : "/" + I), v && (I += "?"), r += I, g += 20, v && (g += -8), R && (g += -20), C === ".*" && (g += -50)
            }
            u.push(g)
        }
        s.push(u)
    }
    if (n.strict && n.end) {
        const a = s.length - 1;
        s[a][s[a].length - 1] += .7000000000000001
    }
    n.strict || (r += "/?"), n.end ? r += "$" : n.strict && !r.endsWith("/") && (r += "(?:/|$)");
    const i = new RegExp(r, n.sensitive ? "" : "i");

    function l(a) {
        const u = a.match(i), f = {};
        if (!u) return null;
        for (let p = 1; p < u.length; p++) {
            const g = u[p] || "", b = o[p - 1];
            f[b.name] = g && b.repeatable ? g.split("/") : g
        }
        return f
    }

    function c(a) {
        let u = "", f = !1;
        for (const p of e) {
            (!f || !u.endsWith("/")) && (u += "/"), f = !1;
            for (const g of p) if (g.type === 0) u += g.value; else if (g.type === 1) {
                const {value: b, repeatable: R, optional: v} = g, P = b in a ? a[b] : "";
                if (De(P) && !R) throw new Error(`Provided param "${b}" is an array but it is not repeatable (* or + modifiers)`);
                const C = De(P) ? P.join("/") : P;
                if (!C) if (v) p.length < 2 && (u.endsWith("/") ? u = u.slice(0, -1) : f = !0); else throw new Error(`Missing required param "${b}"`);
                u += C
            }
        }
        return u || "/"
    }

    return {re: i, score: s, keys: o, parse: l, stringify: c}
}

function Na(e, t) {
    let n = 0;
    for (; n < e.length && n < t.length;) {
        const s = t[n] - e[n];
        if (s) return s;
        n++
    }
    return e.length < t.length ? e.length === 1 && e[0] === 80 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 80 ? 1 : -1 : 0
}

function Vi(e, t) {
    let n = 0;
    const s = e.score, r = t.score;
    for (; n < s.length && n < r.length;) {
        const o = Na(s[n], r[n]);
        if (o) return o;
        n++
    }
    if (Math.abs(r.length - s.length) === 1) {
        if (ro(s)) return 1;
        if (ro(r)) return -1
    }
    return r.length - s.length
}

function ro(e) {
    const t = e[e.length - 1];
    return e.length > 0 && t[t.length - 1] < 0
}

const Ia = {type: 0, value: ""}, Fa = /[a-zA-Z0-9_]/;

function Ma(e) {
    if (!e) return [[]];
    if (e === "/") return [[Ia]];
    if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);

    function t(g) {
        throw new Error(`ERR (${n})/"${a}": ${g}`)
    }

    let n = 0, s = n;
    const r = [];
    let o;

    function i() {
        o && r.push(o), o = []
    }

    let l = 0, c, a = "", u = "";

    function f() {
        a && (n === 0 ? o.push({
            type: 0,
            value: a
        }) : n === 1 || n === 2 || n === 3 ? (o.length > 1 && (c === "*" || c === "+") && t(`A repeatable param (${a}) must be alone in its segment. eg: '/:ids+.`), o.push({
            type: 1,
            value: a,
            regexp: u,
            repeatable: c === "*" || c === "+",
            optional: c === "*" || c === "?"
        })) : t("Invalid state to consume buffer"), a = "")
    }

    function p() {
        a += c
    }

    for (; l < e.length;) {
        if (c = e[l++], c === "\\" && n !== 2) {
            s = n, n = 4;
            continue
        }
        switch (n) {
            case 0:
                c === "/" ? (a && f(), i()) : c === ":" ? (f(), n = 1) : p();
                break;
            case 4:
                p(), n = s;
                break;
            case 1:
                c === "(" ? n = 2 : Fa.test(c) ? p() : (f(), n = 0, c !== "*" && c !== "?" && c !== "+" && l--);
                break;
            case 2:
                c === ")" ? u[u.length - 1] == "\\" ? u = u.slice(0, -1) + c : n = 3 : u += c;
                break;
            case 3:
                f(), n = 0, c !== "*" && c !== "?" && c !== "+" && l--, u = "";
                break;
            default:
                t("Unknown state");
                break
        }
    }
    return n === 2 && t(`Unfinished custom RegExp for param "${a}"`), f(), i(), r
}

function Da(e, t, n) {
    const s = La(Ma(e.path), n), r = z(s, {record: e, parent: t, children: [], alias: []});
    return t && !r.record.aliasOf == !t.record.aliasOf && t.children.push(r), r
}

function Ba(e, t) {
    const n = [], s = new Map;
    t = co({strict: !1, end: !0, sensitive: !1}, t);

    function r(f) {
        return s.get(f)
    }

    function o(f, p, g) {
        const b = !g, R = io(f);
        R.aliasOf = g && g.record;
        const v = co(t, f), P = [R];
        if ("alias" in f) {
            const F = typeof f.alias == "string" ? [f.alias] : f.alias;
            for (const H of F) P.push(io(z({}, R, {
                components: g ? g.record.components : R.components,
                path: H,
                aliasOf: g ? g.record : R
            })))
        }
        let C, I;
        for (const F of P) {
            const {path: H} = F;
            if (p && H[0] !== "/") {
                const ee = p.record.path, K = ee[ee.length - 1] === "/" ? "" : "/";
                F.path = p.record.path + (H && K + H)
            }
            if (C = Da(F, p, v), g ? g.alias.push(C) : (I = I || C, I !== C && I.alias.push(C), b && f.name && !lo(C) && i(f.name)), Ki(C) && c(C), R.children) {
                const ee = R.children;
                for (let K = 0; K < ee.length; K++) o(ee[K], C, g && g.children[K])
            }
            g = g || C
        }
        return I ? () => {
            i(I)
        } : cn
    }

    function i(f) {
        if (Hi(f)) {
            const p = s.get(f);
            p && (s.delete(f), n.splice(n.indexOf(p), 1), p.children.forEach(i), p.alias.forEach(i))
        } else {
            const p = n.indexOf(f);
            p > -1 && (n.splice(p, 1), f.record.name && s.delete(f.record.name), f.children.forEach(i), f.alias.forEach(i))
        }
    }

    function l() {
        return n
    }

    function c(f) {
        const p = ja(f, n);
        n.splice(p, 0, f), f.record.name && !lo(f) && s.set(f.record.name, f)
    }

    function a(f, p) {
        let g, b = {}, R, v;
        if ("name" in f && f.name) {
            if (g = s.get(f.name), !g) throw qt(1, {location: f});
            v = g.record.name, b = z(oo(p.params, g.keys.filter(I => !I.optional).concat(g.parent ? g.parent.keys.filter(I => I.optional) : []).map(I => I.name)), f.params && oo(f.params, g.keys.map(I => I.name))), R = g.stringify(b)
        } else if (f.path != null) R = f.path, g = n.find(I => I.re.test(R)), g && (b = g.parse(R), v = g.record.name); else {
            if (g = p.name ? s.get(p.name) : n.find(I => I.re.test(p.path)), !g) throw qt(1, {
                location: f,
                currentLocation: p
            });
            v = g.record.name, b = z({}, p.params, f.params), R = g.stringify(b)
        }
        const P = [];
        let C = g;
        for (; C;) P.unshift(C.record), C = C.parent;
        return {name: v, path: R, params: b, matched: P, meta: Ua(P)}
    }

    e.forEach(f => o(f));

    function u() {
        n.length = 0, s.clear()
    }

    return {addRoute: o, resolve: a, removeRoute: i, clearRoutes: u, getRoutes: l, getRecordMatcher: r}
}

function oo(e, t) {
    const n = {};
    for (const s of t) s in e && (n[s] = e[s]);
    return n
}

function io(e) {
    const t = {
        path: e.path,
        redirect: e.redirect,
        name: e.name,
        meta: e.meta || {},
        aliasOf: e.aliasOf,
        beforeEnter: e.beforeEnter,
        props: ka(e),
        children: e.children || [],
        instances: {},
        leaveGuards: new Set,
        updateGuards: new Set,
        enterCallbacks: {},
        components: "components" in e ? e.components || null : e.component && {default: e.component}
    };
    return Object.defineProperty(t, "mods", {value: {}}), t
}

function ka(e) {
    const t = {}, n = e.props || !1;
    if ("component" in e) t.default = n; else for (const s in e.components) t[s] = typeof n == "object" ? n[s] : n;
    return t
}

function lo(e) {
    for (; e;) {
        if (e.record.aliasOf) return !0;
        e = e.parent
    }
    return !1
}

function Ua(e) {
    return e.reduce((t, n) => z(t, n.meta), {})
}

function co(e, t) {
    const n = {};
    for (const s in e) n[s] = s in t ? t[s] : e[s];
    return n
}

function ja(e, t) {
    let n = 0, s = t.length;
    for (; n !== s;) {
        const o = n + s >> 1;
        Vi(e, t[o]) < 0 ? s = o : n = o + 1
    }
    const r = $a(e);
    return r && (s = t.lastIndexOf(r, s - 1)), s
}

function $a(e) {
    let t = e;
    for (; t = t.parent;) if (Ki(t) && Vi(e, t) === 0) return t
}

function Ki({record: e}) {
    return !!(e.name || e.components && Object.keys(e.components).length || e.redirect)
}

function Ha(e) {
    const t = {};
    if (e === "" || e === "?") return t;
    const s = (e[0] === "?" ? e.slice(1) : e).split("&");
    for (let r = 0; r < s.length; ++r) {
        const o = s[r].replace(Di, " "), i = o.indexOf("="), l = mn(i < 0 ? o : o.slice(0, i)),
            c = i < 0 ? null : mn(o.slice(i + 1));
        if (l in t) {
            let a = t[l];
            De(a) || (a = t[l] = [a]), a.push(c)
        } else t[l] = c
    }
    return t
}

function uo(e) {
    let t = "";
    for (let n in e) {
        const s = e[n];
        if (n = ca(n), s == null) {
            s !== void 0 && (t += (t.length ? "&" : "") + n);
            continue
        }
        (De(s) ? s.map(o => o && Us(o)) : [s && Us(s)]).forEach(o => {
            o !== void 0 && (t += (t.length ? "&" : "") + n, o != null && (t += "=" + o))
        })
    }
    return t
}

function qa(e) {
    const t = {};
    for (const n in e) {
        const s = e[n];
        s !== void 0 && (t[n] = De(s) ? s.map(r => r == null ? null : "" + r) : s == null ? s : "" + s)
    }
    return t
}

const Va = Symbol(""), ao = Symbol(""), pr = Symbol(""), Wi = Symbol(""), $s = Symbol("");

function Qt() {
    let e = [];

    function t(s) {
        return e.push(s), () => {
            const r = e.indexOf(s);
            r > -1 && e.splice(r, 1)
        }
    }

    function n() {
        e = []
    }

    return {add: t, list: () => e.slice(), reset: n}
}

function dt(e, t, n, s, r, o = i => i()) {
    const i = s && (s.enterCallbacks[r] = s.enterCallbacks[r] || []);
    return () => new Promise((l, c) => {
        const a = p => {
            p === !1 ? c(qt(4, {from: n, to: t})) : p instanceof Error ? c(p) : Ca(p) ? c(qt(2, {
                from: t,
                to: p
            })) : (i && s.enterCallbacks[r] === i && typeof p == "function" && i.push(p), l())
        }, u = o(() => e.call(s && s.instances[r], t, n, a));
        let f = Promise.resolve(u);
        e.length < 3 && (f = f.then(a)), f.catch(p => c(p))
    })
}

function Rs(e, t, n, s, r = o => o()) {
    const o = [];
    for (const i of e) for (const l in i.components) {
        let c = i.components[l];
        if (!(t !== "beforeRouteEnter" && !i.instances[l])) if (Fi(c)) {
            const u = (c.__vccOpts || c)[t];
            u && o.push(dt(u, n, s, i, l, r))
        } else {
            let a = c();
            o.push(() => a.then(u => {
                if (!u) throw new Error(`Couldn't resolve component "${l}" at "${i.path}"`);
                const f = Qu(u) ? u.default : u;
                i.mods[l] = u, i.components[l] = f;
                const g = (f.__vccOpts || f)[t];
                return g && dt(g, n, s, i, l, r)()
            }))
        }
    }
    return o
}

function fo(e) {
    const t = st(pr), n = st(Wi), s = Fe(() => {
            const c = kt(e.to);
            return t.resolve(c)
        }), r = Fe(() => {
            const {matched: c} = s.value, {length: a} = c, u = c[a - 1], f = n.matched;
            if (!u || !f.length) return -1;
            const p = f.findIndex(Ht.bind(null, u));
            if (p > -1) return p;
            const g = ho(c[a - 2]);
            return a > 1 && ho(u) === g && f[f.length - 1].path !== g ? f.findIndex(Ht.bind(null, c[a - 2])) : p
        }), o = Fe(() => r.value > -1 && Ga(n.params, s.value.params)),
        i = Fe(() => r.value > -1 && r.value === n.matched.length - 1 && ji(n.params, s.value.params));

    function l(c = {}) {
        if (Ja(c)) {
            const a = t[kt(e.replace) ? "replace" : "push"](kt(e.to)).catch(cn);
            return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => a), a
        }
        return Promise.resolve()
    }

    return {route: s, href: Fe(() => s.value.href), isActive: o, isExactActive: i, navigate: l}
}

function Ka(e) {
    return e.length === 1 ? e[0] : e
}

const Wa = ii({
    name: "RouterLink",
    compatConfig: {MODE: 3},
    props: {
        to: {type: [String, Object], required: !0},
        replace: Boolean,
        activeClass: String,
        exactActiveClass: String,
        custom: Boolean,
        ariaCurrentValue: {type: String, default: "page"},
        viewTransition: Boolean
    },
    useLink: fo,
    setup(e, {slots: t}) {
        const n = Xn(fo(e)), {options: s} = st(pr), r = Fe(() => ({
            [po(e.activeClass, s.linkActiveClass, "router-link-active")]: n.isActive,
            [po(e.exactActiveClass, s.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
        }));
        return () => {
            const o = t.default && Ka(t.default(n));
            return e.custom ? o : Ni("a", {
                "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: r.value
            }, o)
        }
    }
}), za = Wa;

function Ja(e) {
    if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
        if (e.currentTarget && e.currentTarget.getAttribute) {
            const t = e.currentTarget.getAttribute("target");
            if (/\b_blank\b/i.test(t)) return
        }
        return e.preventDefault && e.preventDefault(), !0
    }
}

function Ga(e, t) {
    for (const n in t) {
        const s = t[n], r = e[n];
        if (typeof s == "string") {
            if (s !== r) return !1
        } else if (!De(r) || r.length !== s.length || s.some((o, i) => o !== r[i])) return !1
    }
    return !0
}

function ho(e) {
    return e ? e.aliasOf ? e.aliasOf.path : e.path : ""
}

const po = (e, t, n) => e ?? t ?? n, Xa = ii({
    name: "RouterView",
    inheritAttrs: !1,
    props: {name: {type: String, default: "default"}, route: Object},
    compatConfig: {MODE: 3},
    setup(e, {attrs: t, slots: n}) {
        const s = st($s), r = Fe(() => e.route || s.value), o = st(ao, 0), i = Fe(() => {
            let a = kt(o);
            const {matched: u} = r.value;
            let f;
            for (; (f = u[a]) && !f.components;) a++;
            return a
        }), l = Fe(() => r.value.matched[i.value]);
        Cn(ao, Fe(() => i.value + 1)), Cn(Va, l), Cn($s, r);
        const c = Ql();
        return Tn(() => [c.value, l.value, e.name], ([a, u, f], [p, g, b]) => {
            u && (u.instances[f] = a, g && g !== u && a && a === p && (u.leaveGuards.size || (u.leaveGuards = g.leaveGuards), u.updateGuards.size || (u.updateGuards = g.updateGuards))), a && u && (!g || !Ht(u, g) || !p) && (u.enterCallbacks[f] || []).forEach(R => R(a))
        }, {flush: "post"}), () => {
            const a = r.value, u = e.name, f = l.value, p = f && f.components[u];
            if (!p) return mo(n.default, {Component: p, route: a});
            const g = f.props[u], b = g ? g === !0 ? a.params : typeof g == "function" ? g(a) : g : null,
                v = Ni(p, z({}, b, t, {
                    onVnodeUnmounted: P => {
                        P.component.isUnmounted && (f.instances[u] = null)
                    }, ref: c
                }));
            return mo(n.default, {Component: v, route: a}) || v
        }
    }
});

function mo(e, t) {
    if (!e) return null;
    const n = e(t);
    return n.length === 1 ? n[0] : n
}

const Qa = Xa;

function Ya(e) {
    const t = Ba(e.routes, e), n = e.parseQuery || Ha, s = e.stringifyQuery || uo, r = e.history, o = Qt(), i = Qt(),
        l = Qt(), c = Yl(ut);
    let a = ut;
    It && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
    const u = Es.bind(null, w => "" + w), f = Es.bind(null, aa), p = Es.bind(null, mn);

    function g(w, M) {
        let L, D;
        return Hi(w) ? (L = t.getRecordMatcher(w), D = M) : D = w, t.addRoute(D, L)
    }

    function b(w) {
        const M = t.getRecordMatcher(w);
        M && t.removeRoute(M)
    }

    function R() {
        return t.getRoutes().map(w => w.record)
    }

    function v(w) {
        return !!t.getRecordMatcher(w)
    }

    function P(w, M) {
        if (M = z({}, M || c.value), typeof w == "string") {
            const m = Ss(n, w, M.path), _ = t.resolve({path: m.path}, M), S = r.createHref(m.fullPath);
            return z(m, _, {params: p(_.params), hash: mn(m.hash), redirectedFrom: void 0, href: S})
        }
        let L;
        if (w.path != null) L = z({}, w, {path: Ss(n, w.path, M.path).path}); else {
            const m = z({}, w.params);
            for (const _ in m) m[_] == null && delete m[_];
            L = z({}, w, {params: f(m)}), M.params = f(M.params)
        }
        const D = t.resolve(L, M), Y = w.hash || "";
        D.params = u(p(D.params));
        const d = ha(s, z({}, w, {hash: la(Y), path: D.path})), h = r.createHref(d);
        return z({fullPath: d, hash: Y, query: s === uo ? qa(w.query) : w.query || {}}, D, {
            redirectedFrom: void 0,
            href: h
        })
    }

    function C(w) {
        return typeof w == "string" ? Ss(n, w, c.value.path) : z({}, w)
    }

    function I(w, M) {
        if (a !== w) return qt(8, {from: M, to: w})
    }

    function F(w) {
        return K(w)
    }

    function H(w) {
        return F(z(C(w), {replace: !0}))
    }

    function ee(w) {
        const M = w.matched[w.matched.length - 1];
        if (M && M.redirect) {
            const {redirect: L} = M;
            let D = typeof L == "function" ? L(w) : L;
            return typeof D == "string" && (D = D.includes("?") || D.includes("#") ? D = C(D) : {path: D}, D.params = {}), z({
                query: w.query,
                hash: w.hash,
                params: D.path != null ? {} : w.params
            }, D)
        }
    }

    function K(w, M) {
        const L = a = P(w), D = c.value, Y = w.state, d = w.force, h = w.replace === !0, m = ee(L);
        if (m) return K(z(C(m), {state: typeof m == "object" ? z({}, Y, m.state) : Y, force: d, replace: h}), M || L);
        const _ = L;
        _.redirectedFrom = M;
        let S;
        return !d && pa(s, D, L) && (S = qt(16, {
            to: _,
            from: D
        }), je(D, D, !0, !1)), (S ? Promise.resolve(S) : ke(_, D)).catch(E => Ze(E) ? Ze(E, 2) ? E : ct(E) : W(E, _, D)).then(E => {
            if (E) {
                if (Ze(E, 2)) return K(z({replace: h}, C(E.to), {
                    state: typeof E.to == "object" ? z({}, Y, E.to.state) : Y,
                    force: d
                }), M || _)
            } else E = bt(_, D, !0, h, Y);
            return lt(_, D, E), E
        })
    }

    function pe(w, M) {
        const L = I(w, M);
        return L ? Promise.reject(L) : Promise.resolve()
    }

    function Ne(w) {
        const M = Tt.values().next().value;
        return M && typeof M.runWithContext == "function" ? M.runWithContext(w) : w()
    }

    function ke(w, M) {
        let L;
        const [D, Y, d] = Za(w, M);
        L = Rs(D.reverse(), "beforeRouteLeave", w, M);
        for (const m of D) m.leaveGuards.forEach(_ => {
            L.push(dt(_, w, M))
        });
        const h = pe.bind(null, w, M);
        return L.push(h), Ce(L).then(() => {
            L = [];
            for (const m of o.list()) L.push(dt(m, w, M));
            return L.push(h), Ce(L)
        }).then(() => {
            L = Rs(Y, "beforeRouteUpdate", w, M);
            for (const m of Y) m.updateGuards.forEach(_ => {
                L.push(dt(_, w, M))
            });
            return L.push(h), Ce(L)
        }).then(() => {
            L = [];
            for (const m of d) if (m.beforeEnter) if (De(m.beforeEnter)) for (const _ of m.beforeEnter) L.push(dt(_, w, M)); else L.push(dt(m.beforeEnter, w, M));
            return L.push(h), Ce(L)
        }).then(() => (w.matched.forEach(m => m.enterCallbacks = {}), L = Rs(d, "beforeRouteEnter", w, M, Ne), L.push(h), Ce(L))).then(() => {
            L = [];
            for (const m of i.list()) L.push(dt(m, w, M));
            return L.push(h), Ce(L)
        }).catch(m => Ze(m, 8) ? m : Promise.reject(m))
    }

    function lt(w, M, L) {
        l.list().forEach(D => Ne(() => D(w, M, L)))
    }

    function bt(w, M, L, D, Y) {
        const d = I(w, M);
        if (d) return d;
        const h = M === ut, m = It ? history.state : {};
        L && (D || h ? r.replace(w.fullPath, z({scroll: h && m && m.scroll}, Y)) : r.push(w.fullPath, Y)), c.value = w, je(w, M, L, h), ct()
    }

    let Ue;

    function zt() {
        Ue || (Ue = r.listen((w, M, L) => {
            if (!Rn.listening) return;
            const D = P(w), Y = ee(D);
            if (Y) {
                K(z(Y, {replace: !0, force: !0}), D).catch(cn);
                return
            }
            a = D;
            const d = c.value;
            It && Sa(eo(d.fullPath, L.delta), ns()), ke(D, d).catch(h => Ze(h, 12) ? h : Ze(h, 2) ? (K(z(C(h.to), {force: !0}), D).then(m => {
                Ze(m, 20) && !L.delta && L.type === gn.pop && r.go(-1, !1)
            }).catch(cn), Promise.reject()) : (L.delta && r.go(-L.delta, !1), W(h, D, d))).then(h => {
                h = h || bt(D, d, !1), h && (L.delta && !Ze(h, 8) ? r.go(-L.delta, !1) : L.type === gn.pop && Ze(h, 20) && r.go(-1, !1)), lt(D, d, h)
            }).catch(cn)
        }))
    }

    let At = Qt(), ie = Qt(), Q;

    function W(w, M, L) {
        ct(w);
        const D = ie.list();
        return D.length ? D.forEach(Y => Y(w, M, L)) : console.error(w), Promise.reject(w)
    }

    function Qe() {
        return Q && c.value !== ut ? Promise.resolve() : new Promise((w, M) => {
            At.add([w, M])
        })
    }

    function ct(w) {
        return Q || (Q = !w, zt(), At.list().forEach(([M, L]) => w ? L(w) : M()), At.reset()), w
    }

    function je(w, M, L, D) {
        const {scrollBehavior: Y} = e;
        if (!It || !Y) return Promise.resolve();
        const d = !L && Ra(eo(w.fullPath, 0)) || (D || !L) && history.state && history.state.scroll || null;
        return ti().then(() => Y(w, M, d)).then(h => h && Ea(h)).catch(h => W(h, w, M))
    }

    const ye = w => r.go(w);
    let Ct;
    const Tt = new Set, Rn = {
        currentRoute: c,
        listening: !0,
        addRoute: g,
        removeRoute: b,
        clearRoutes: t.clearRoutes,
        hasRoute: v,
        getRoutes: R,
        resolve: P,
        options: e,
        push: F,
        replace: H,
        go: ye,
        back: () => ye(-1),
        forward: () => ye(1),
        beforeEach: o.add,
        beforeResolve: i.add,
        afterEach: l.add,
        onError: ie.add,
        isReady: Qe,
        install(w) {
            const M = this;
            w.component("RouterLink", za), w.component("RouterView", Qa), w.config.globalProperties.$router = M, Object.defineProperty(w.config.globalProperties, "$route", {
                enumerable: !0,
                get: () => kt(c)
            }), It && !Ct && c.value === ut && (Ct = !0, F(r.location).catch(Y => {
            }));
            const L = {};
            for (const Y in ut) Object.defineProperty(L, Y, {get: () => c.value[Y], enumerable: !0});
            w.provide(pr, M), w.provide(Wi, Xo(L)), w.provide($s, c);
            const D = w.unmount;
            Tt.add(w), w.unmount = function () {
                Tt.delete(w), Tt.size < 1 && (a = ut, Ue && Ue(), Ue = null, c.value = ut, Ct = !1, Q = !1), D()
            }
        }
    };

    function Ce(w) {
        return w.reduce((M, L) => M.then(() => Ne(L)), Promise.resolve())
    }

    return Rn
}

function Za(e, t) {
    const n = [], s = [], r = [], o = Math.max(t.matched.length, e.matched.length);
    for (let i = 0; i < o; i++) {
        const l = t.matched[i];
        l && (e.matched.find(a => Ht(a, l)) ? s.push(l) : n.push(l));
        const c = e.matched[i];
        c && (t.matched.find(a => Ht(a, c)) || r.push(c))
    }
    return [n, s, r]
}

function zi(e, t) {
    return function () {
        return e.apply(t, arguments)
    }
}

const {toString: ef} = Object.prototype, {getPrototypeOf: mr} = Object, {iterator: ss, toStringTag: Ji} = Symbol,
    rs = (e => t => {
        const n = ef.call(t);
        return e[n] || (e[n] = n.slice(8, -1).toLowerCase())
    })(Object.create(null)), Be = e => (e = e.toLowerCase(), t => rs(t) === e),
    os = e => t => typeof t === e, {isArray: Vt} = Array, yn = os("undefined");

function tf(e) {
    return e !== null && !yn(e) && e.constructor !== null && !yn(e.constructor) && Se(e.constructor.isBuffer) && e.constructor.isBuffer(e)
}

const Gi = Be("ArrayBuffer");

function nf(e) {
    let t;
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Gi(e.buffer), t
}

const sf = os("string"), Se = os("function"), Xi = os("number"), is = e => e !== null && typeof e == "object",
    rf = e => e === !0 || e === !1, Nn = e => {
        if (rs(e) !== "object") return !1;
        const t = mr(e);
        return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Ji in e) && !(ss in e)
    }, of = Be("Date"), lf = Be("File"), cf = Be("Blob"), uf = Be("FileList"), af = e => is(e) && Se(e.pipe), ff = e => {
        let t;
        return e && (typeof FormData == "function" && e instanceof FormData || Se(e.append) && ((t = rs(e)) === "formdata" || t === "object" && Se(e.toString) && e.toString() === "[object FormData]"))
    }, df = Be("URLSearchParams"), [hf, pf, mf, gf] = ["ReadableStream", "Request", "Response", "Headers"].map(Be),
    yf = e => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");

function wn(e, t, {allOwnKeys: n = !1} = {}) {
    if (e === null || typeof e > "u") return;
    let s, r;
    if (typeof e != "object" && (e = [e]), Vt(e)) for (s = 0, r = e.length; s < r; s++) t.call(null, e[s], s, e); else {
        const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e), i = o.length;
        let l;
        for (s = 0; s < i; s++) l = o[s], t.call(null, e[l], l, e)
    }
}

function Qi(e, t) {
    t = t.toLowerCase();
    const n = Object.keys(e);
    let s = n.length, r;
    for (; s-- > 0;) if (r = n[s], t === r.toLowerCase()) return r;
    return null
}

const St = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global,
    Yi = e => !yn(e) && e !== St;

function Hs() {
    const {caseless: e} = Yi(this) && this || {}, t = {}, n = (s, r) => {
        const o = e && Qi(t, r) || r;
        Nn(t[o]) && Nn(s) ? t[o] = Hs(t[o], s) : Nn(s) ? t[o] = Hs({}, s) : Vt(s) ? t[o] = s.slice() : t[o] = s
    };
    for (let s = 0, r = arguments.length; s < r; s++) arguments[s] && wn(arguments[s], n);
    return t
}

const bf = (e, t, n, {allOwnKeys: s} = {}) => (wn(t, (r, o) => {
    n && Se(r) ? e[o] = zi(r, n) : e[o] = r
}, {allOwnKeys: s}), e), _f = e => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), wf = (e, t, n, s) => {
    e.prototype = Object.create(t.prototype, s), e.prototype.constructor = e, Object.defineProperty(e, "super", {value: t.prototype}), n && Object.assign(e.prototype, n)
}, Ef = (e, t, n, s) => {
    let r, o, i;
    const l = {};
    if (t = t || {}, e == null) return t;
    do {
        for (r = Object.getOwnPropertyNames(e), o = r.length; o-- > 0;) i = r[o], (!s || s(i, e, t)) && !l[i] && (t[i] = e[i], l[i] = !0);
        e = n !== !1 && mr(e)
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t
}, Sf = (e, t, n) => {
    e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
    const s = e.indexOf(t, n);
    return s !== -1 && s === n
}, Rf = e => {
    if (!e) return null;
    if (Vt(e)) return e;
    let t = e.length;
    if (!Xi(t)) return null;
    const n = new Array(t);
    for (; t-- > 0;) n[t] = e[t];
    return n
}, vf = (e => t => e && t instanceof e)(typeof Uint8Array < "u" && mr(Uint8Array)), xf = (e, t) => {
    const s = (e && e[ss]).call(e);
    let r;
    for (; (r = s.next()) && !r.done;) {
        const o = r.value;
        t.call(e, o[0], o[1])
    }
}, Of = (e, t) => {
    let n;
    const s = [];
    for (; (n = e.exec(t)) !== null;) s.push(n);
    return s
}, Af = Be("HTMLFormElement"), Cf = e => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, s, r) {
    return s.toUpperCase() + r
}), go = (({hasOwnProperty: e}) => (t, n) => e.call(t, n))(Object.prototype), Tf = Be("RegExp"), Zi = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e), s = {};
    wn(n, (r, o) => {
        let i;
        (i = t(r, o, e)) !== !1 && (s[o] = i || r)
    }), Object.defineProperties(e, s)
}, Pf = e => {
    Zi(e, (t, n) => {
        if (Se(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1) return !1;
        const s = e[n];
        if (Se(s)) {
            if (t.enumerable = !1, "writable" in t) {
                t.writable = !1;
                return
            }
            t.set || (t.set = () => {
                throw Error("Can not rewrite read-only method '" + n + "'")
            })
        }
    })
}, Lf = (e, t) => {
    const n = {}, s = r => {
        r.forEach(o => {
            n[o] = !0
        })
    };
    return Vt(e) ? s(e) : s(String(e).split(t)), n
}, Nf = () => {
}, If = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;

function Ff(e) {
    return !!(e && Se(e.append) && e[Ji] === "FormData" && e[ss])
}

const Mf = e => {
        const t = new Array(10), n = (s, r) => {
            if (is(s)) {
                if (t.indexOf(s) >= 0) return;
                if (!("toJSON" in s)) {
                    t[r] = s;
                    const o = Vt(s) ? [] : {};
                    return wn(s, (i, l) => {
                        const c = n(i, r + 1);
                        !yn(c) && (o[l] = c)
                    }), t[r] = void 0, o
                }
            }
            return s
        };
        return n(e, 0)
    }, Df = Be("AsyncFunction"), Bf = e => e && (is(e) || Se(e)) && Se(e.then) && Se(e.catch),
    el = ((e, t) => e ? setImmediate : t ? ((n, s) => (St.addEventListener("message", ({source: r, data: o}) => {
        r === St && o === n && s.length && s.shift()()
    }, !1), r => {
        s.push(r), St.postMessage(n, "*")
    }))(`axios@${Math.random()}`, []) : n => setTimeout(n))(typeof setImmediate == "function", Se(St.postMessage)),
    kf = typeof queueMicrotask < "u" ? queueMicrotask.bind(St) : typeof process < "u" && process.nextTick || el,
    Uf = e => e != null && Se(e[ss]), y = {
        isArray: Vt,
        isArrayBuffer: Gi,
        isBuffer: tf,
        isFormData: ff,
        isArrayBufferView: nf,
        isString: sf,
        isNumber: Xi,
        isBoolean: rf,
        isObject: is,
        isPlainObject: Nn,
        isReadableStream: hf,
        isRequest: pf,
        isResponse: mf,
        isHeaders: gf,
        isUndefined: yn,
        isDate: of,
        isFile: lf,
        isBlob: cf,
        isRegExp: Tf,
        isFunction: Se,
        isStream: af,
        isURLSearchParams: df,
        isTypedArray: vf,
        isFileList: uf,
        forEach: wn,
        merge: Hs,
        extend: bf,
        trim: yf,
        stripBOM: _f,
        inherits: wf,
        toFlatObject: Ef,
        kindOf: rs,
        kindOfTest: Be,
        endsWith: Sf,
        toArray: Rf,
        forEachEntry: xf,
        matchAll: Of,
        isHTMLForm: Af,
        hasOwnProperty: go,
        hasOwnProp: go,
        reduceDescriptors: Zi,
        freezeMethods: Pf,
        toObjectSet: Lf,
        toCamelCase: Cf,
        noop: Nf,
        toFiniteNumber: If,
        findKey: Qi,
        global: St,
        isContextDefined: Yi,
        isSpecCompliantForm: Ff,
        toJSONObject: Mf,
        isAsyncFn: Df,
        isThenable: Bf,
        setImmediate: el,
        asap: kf,
        isIterable: Uf
    };

function q(e, t, n, s, r) {
    Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), s && (this.request = s), r && (this.response = r, this.status = r.status ? r.status : null)
}

y.inherits(q, Error, {
    toJSON: function () {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: y.toJSONObject(this.config),
            code: this.code,
            status: this.status
        }
    }
});
const tl = q.prototype, nl = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(e => {
    nl[e] = {value: e}
});
Object.defineProperties(q, nl);
Object.defineProperty(tl, "isAxiosError", {value: !0});
q.from = (e, t, n, s, r, o) => {
    const i = Object.create(tl);
    return y.toFlatObject(e, i, function (c) {
        return c !== Error.prototype
    }, l => l !== "isAxiosError"), q.call(i, e.message, t, n, s, r), i.cause = e, i.name = e.name, o && Object.assign(i, o), i
};
const jf = null;

function qs(e) {
    return y.isPlainObject(e) || y.isArray(e)
}

function sl(e) {
    return y.endsWith(e, "[]") ? e.slice(0, -2) : e
}

function yo(e, t, n) {
    return e ? e.concat(t).map(function (r, o) {
        return r = sl(r), !n && o ? "[" + r + "]" : r
    }).join(n ? "." : "") : t
}

function $f(e) {
    return y.isArray(e) && !e.some(qs)
}

const Hf = y.toFlatObject(y, {}, null, function (t) {
    return /^is[A-Z]/.test(t)
});

function ls(e, t, n) {
    if (!y.isObject(e)) throw new TypeError("target must be an object");
    t = t || new FormData, n = y.toFlatObject(n, {metaTokens: !0, dots: !1, indexes: !1}, !1, function (R, v) {
        return !y.isUndefined(v[R])
    });
    const s = n.metaTokens, r = n.visitor || u, o = n.dots, i = n.indexes,
        c = (n.Blob || typeof Blob < "u" && Blob) && y.isSpecCompliantForm(t);
    if (!y.isFunction(r)) throw new TypeError("visitor must be a function");

    function a(b) {
        if (b === null) return "";
        if (y.isDate(b)) return b.toISOString();
        if (y.isBoolean(b)) return b.toString();
        if (!c && y.isBlob(b)) throw new q("Blob is not supported. Use a Buffer instead.");
        return y.isArrayBuffer(b) || y.isTypedArray(b) ? c && typeof Blob == "function" ? new Blob([b]) : Buffer.from(b) : b
    }

    function u(b, R, v) {
        let P = b;
        if (b && !v && typeof b == "object") {
            if (y.endsWith(R, "{}")) R = s ? R : R.slice(0, -2), b = JSON.stringify(b); else if (y.isArray(b) && $f(b) || (y.isFileList(b) || y.endsWith(R, "[]")) && (P = y.toArray(b))) return R = sl(R), P.forEach(function (I, F) {
                !(y.isUndefined(I) || I === null) && t.append(i === !0 ? yo([R], F, o) : i === null ? R : R + "[]", a(I))
            }), !1
        }
        return qs(b) ? !0 : (t.append(yo(v, R, o), a(b)), !1)
    }

    const f = [], p = Object.assign(Hf, {defaultVisitor: u, convertValue: a, isVisitable: qs});

    function g(b, R) {
        if (!y.isUndefined(b)) {
            if (f.indexOf(b) !== -1) throw Error("Circular reference detected in " + R.join("."));
            f.push(b), y.forEach(b, function (P, C) {
                (!(y.isUndefined(P) || P === null) && r.call(t, P, y.isString(C) ? C.trim() : C, R, p)) === !0 && g(P, R ? R.concat(C) : [C])
            }), f.pop()
        }
    }

    if (!y.isObject(e)) throw new TypeError("data must be an object");
    return g(e), t
}

function bo(e) {
    const t = {"!": "%21", "'": "%27", "(": "%28", ")": "%29", "~": "%7E", "%20": "+", "%00": "\0"};
    return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (s) {
        return t[s]
    })
}

function gr(e, t) {
    this._pairs = [], e && ls(e, this, t)
}

const rl = gr.prototype;
rl.append = function (t, n) {
    this._pairs.push([t, n])
};
rl.toString = function (t) {
    const n = t ? function (s) {
        return t.call(this, s, bo)
    } : bo;
    return this._pairs.map(function (r) {
        return n(r[0]) + "=" + n(r[1])
    }, "").join("&")
};

function qf(e) {
    return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
}

function ol(e, t, n) {
    if (!t) return e;
    const s = n && n.encode || qf;
    y.isFunction(n) && (n = {serialize: n});
    const r = n && n.serialize;
    let o;
    if (r ? o = r(t, n) : o = y.isURLSearchParams(t) ? t.toString() : new gr(t, n).toString(s), o) {
        const i = e.indexOf("#");
        i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + o
    }
    return e
}

class _o {
    constructor() {
        this.handlers = []
    }

    use(t, n, s) {
        return this.handlers.push({
            fulfilled: t,
            rejected: n,
            synchronous: s ? s.synchronous : !1,
            runWhen: s ? s.runWhen : null
        }), this.handlers.length - 1
    }

    eject(t) {
        this.handlers[t] && (this.handlers[t] = null)
    }

    clear() {
        this.handlers && (this.handlers = [])
    }

    forEach(t) {
        y.forEach(this.handlers, function (s) {
            s !== null && t(s)
        })
    }
}

const il = {silentJSONParsing: !0, forcedJSONParsing: !0, clarifyTimeoutError: !1},
    Vf = typeof URLSearchParams < "u" ? URLSearchParams : gr, Kf = typeof FormData < "u" ? FormData : null,
    Wf = typeof Blob < "u" ? Blob : null, zf = {
        isBrowser: !0,
        classes: {URLSearchParams: Vf, FormData: Kf, Blob: Wf},
        protocols: ["http", "https", "file", "blob", "url", "data"]
    }, yr = typeof window < "u" && typeof document < "u", Vs = typeof navigator == "object" && navigator || void 0,
    Jf = yr && (!Vs || ["ReactNative", "NativeScript", "NS"].indexOf(Vs.product) < 0),
    Gf = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function",
    Xf = yr && window.location.href || "http://localhost", Qf = Object.freeze(Object.defineProperty({
        __proto__: null,
        hasBrowserEnv: yr,
        hasStandardBrowserEnv: Jf,
        hasStandardBrowserWebWorkerEnv: Gf,
        navigator: Vs,
        origin: Xf
    }, Symbol.toStringTag, {value: "Module"})), fe = {...Qf, ...zf};

function Yf(e, t) {
    return ls(e, new fe.classes.URLSearchParams, Object.assign({
        visitor: function (n, s, r, o) {
            return fe.isNode && y.isBuffer(n) ? (this.append(s, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments)
        }
    }, t))
}

function Zf(e) {
    return y.matchAll(/\w+|\[(\w*)]/g, e).map(t => t[0] === "[]" ? "" : t[1] || t[0])
}

function ed(e) {
    const t = {}, n = Object.keys(e);
    let s;
    const r = n.length;
    let o;
    for (s = 0; s < r; s++) o = n[s], t[o] = e[o];
    return t
}

function ll(e) {
    function t(n, s, r, o) {
        let i = n[o++];
        if (i === "__proto__") return !0;
        const l = Number.isFinite(+i), c = o >= n.length;
        return i = !i && y.isArray(r) ? r.length : i, c ? (y.hasOwnProp(r, i) ? r[i] = [r[i], s] : r[i] = s, !l) : ((!r[i] || !y.isObject(r[i])) && (r[i] = []), t(n, s, r[i], o) && y.isArray(r[i]) && (r[i] = ed(r[i])), !l)
    }

    if (y.isFormData(e) && y.isFunction(e.entries)) {
        const n = {};
        return y.forEachEntry(e, (s, r) => {
            t(Zf(s), r, n, 0)
        }), n
    }
    return null
}

function td(e, t, n) {
    if (y.isString(e)) try {
        return (t || JSON.parse)(e), y.trim(e)
    } catch (s) {
        if (s.name !== "SyntaxError") throw s
    }
    return (n || JSON.stringify)(e)
}

const En = {
    transitional: il,
    adapter: ["xhr", "http", "fetch"],
    transformRequest: [function (t, n) {
        const s = n.getContentType() || "", r = s.indexOf("application/json") > -1, o = y.isObject(t);
        if (o && y.isHTMLForm(t) && (t = new FormData(t)), y.isFormData(t)) return r ? JSON.stringify(ll(t)) : t;
        if (y.isArrayBuffer(t) || y.isBuffer(t) || y.isStream(t) || y.isFile(t) || y.isBlob(t) || y.isReadableStream(t)) return t;
        if (y.isArrayBufferView(t)) return t.buffer;
        if (y.isURLSearchParams(t)) return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
        let l;
        if (o) {
            if (s.indexOf("application/x-www-form-urlencoded") > -1) return Yf(t, this.formSerializer).toString();
            if ((l = y.isFileList(t)) || s.indexOf("multipart/form-data") > -1) {
                const c = this.env && this.env.FormData;
                return ls(l ? {"files[]": t} : t, c && new c, this.formSerializer)
            }
        }
        return o || r ? (n.setContentType("application/json", !1), td(t)) : t
    }],
    transformResponse: [function (t) {
        const n = this.transitional || En.transitional, s = n && n.forcedJSONParsing, r = this.responseType === "json";
        if (y.isResponse(t) || y.isReadableStream(t)) return t;
        if (t && y.isString(t) && (s && !this.responseType || r)) {
            const i = !(n && n.silentJSONParsing) && r;
            try {
                return JSON.parse(t)
            } catch (l) {
                if (i) throw l.name === "SyntaxError" ? q.from(l, q.ERR_BAD_RESPONSE, this, null, this.response) : l
            }
        }
        return t
    }],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {FormData: fe.classes.FormData, Blob: fe.classes.Blob},
    validateStatus: function (t) {
        return t >= 200 && t < 300
    },
    headers: {common: {Accept: "application/json, text/plain, */*", "Content-Type": void 0}}
};
y.forEach(["delete", "get", "head", "post", "put", "patch"], e => {
    En.headers[e] = {}
});
const nd = y.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]),
    sd = e => {
        const t = {};
        let n, s, r;
        return e && e.split(`
`).forEach(function (i) {
            r = i.indexOf(":"), n = i.substring(0, r).trim().toLowerCase(), s = i.substring(r + 1).trim(), !(!n || t[n] && nd[n]) && (n === "set-cookie" ? t[n] ? t[n].push(s) : t[n] = [s] : t[n] = t[n] ? t[n] + ", " + s : s)
        }), t
    }, wo = Symbol("internals");

function Yt(e) {
    return e && String(e).trim().toLowerCase()
}

function In(e) {
    return e === !1 || e == null ? e : y.isArray(e) ? e.map(In) : String(e)
}

function rd(e) {
    const t = Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let s;
    for (; s = n.exec(e);) t[s[1]] = s[2];
    return t
}

const od = e => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());

function vs(e, t, n, s, r) {
    if (y.isFunction(s)) return s.call(this, t, n);
    if (r && (t = n), !!y.isString(t)) {
        if (y.isString(s)) return t.indexOf(s) !== -1;
        if (y.isRegExp(s)) return s.test(t)
    }
}

function id(e) {
    return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, s) => n.toUpperCase() + s)
}

function ld(e, t) {
    const n = y.toCamelCase(" " + t);
    ["get", "set", "has"].forEach(s => {
        Object.defineProperty(e, s + n, {
            value: function (r, o, i) {
                return this[s].call(this, t, r, o, i)
            }, configurable: !0
        })
    })
}

let Re = class {
    constructor(t) {
        t && this.set(t)
    }

    set(t, n, s) {
        const r = this;

        function o(l, c, a) {
            const u = Yt(c);
            if (!u) throw new Error("header name must be a non-empty string");
            const f = y.findKey(r, u);
            (!f || r[f] === void 0 || a === !0 || a === void 0 && r[f] !== !1) && (r[f || c] = In(l))
        }

        const i = (l, c) => y.forEach(l, (a, u) => o(a, u, c));
        if (y.isPlainObject(t) || t instanceof this.constructor) i(t, n); else if (y.isString(t) && (t = t.trim()) && !od(t)) i(sd(t), n); else if (y.isObject(t) && y.isIterable(t)) {
            let l = {}, c, a;
            for (const u of t) {
                if (!y.isArray(u)) throw TypeError("Object iterator must return a key-value pair");
                l[a = u[0]] = (c = l[a]) ? y.isArray(c) ? [...c, u[1]] : [c, u[1]] : u[1]
            }
            i(l, n)
        } else t != null && o(n, t, s);
        return this
    }

    get(t, n) {
        if (t = Yt(t), t) {
            const s = y.findKey(this, t);
            if (s) {
                const r = this[s];
                if (!n) return r;
                if (n === !0) return rd(r);
                if (y.isFunction(n)) return n.call(this, r, s);
                if (y.isRegExp(n)) return n.exec(r);
                throw new TypeError("parser must be boolean|regexp|function")
            }
        }
    }

    has(t, n) {
        if (t = Yt(t), t) {
            const s = y.findKey(this, t);
            return !!(s && this[s] !== void 0 && (!n || vs(this, this[s], s, n)))
        }
        return !1
    }

    delete(t, n) {
        const s = this;
        let r = !1;

        function o(i) {
            if (i = Yt(i), i) {
                const l = y.findKey(s, i);
                l && (!n || vs(s, s[l], l, n)) && (delete s[l], r = !0)
            }
        }

        return y.isArray(t) ? t.forEach(o) : o(t), r
    }

    clear(t) {
        const n = Object.keys(this);
        let s = n.length, r = !1;
        for (; s--;) {
            const o = n[s];
            (!t || vs(this, this[o], o, t, !0)) && (delete this[o], r = !0)
        }
        return r
    }

    normalize(t) {
        const n = this, s = {};
        return y.forEach(this, (r, o) => {
            const i = y.findKey(s, o);
            if (i) {
                n[i] = In(r), delete n[o];
                return
            }
            const l = t ? id(o) : String(o).trim();
            l !== o && delete n[o], n[l] = In(r), s[l] = !0
        }), this
    }

    concat(...t) {
        return this.constructor.concat(this, ...t)
    }

    toJSON(t) {
        const n = Object.create(null);
        return y.forEach(this, (s, r) => {
            s != null && s !== !1 && (n[r] = t && y.isArray(s) ? s.join(", ") : s)
        }), n
    }

    [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]()
    }

    toString() {
        return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`)
    }

    getSetCookie() {
        return this.get("set-cookie") || []
    }

    get [Symbol.toStringTag]() {
        return "AxiosHeaders"
    }

    static from(t) {
        return t instanceof this ? t : new this(t)
    }

    static concat(t, ...n) {
        const s = new this(t);
        return n.forEach(r => s.set(r)), s
    }

    static accessor(t) {
        const s = (this[wo] = this[wo] = {accessors: {}}).accessors, r = this.prototype;

        function o(i) {
            const l = Yt(i);
            s[l] || (ld(r, i), s[l] = !0)
        }

        return y.isArray(t) ? t.forEach(o) : o(t), this
    }
};
Re.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
y.reduceDescriptors(Re.prototype, ({value: e}, t) => {
    let n = t[0].toUpperCase() + t.slice(1);
    return {
        get: () => e, set(s) {
            this[n] = s
        }
    }
});
y.freezeMethods(Re);

function xs(e, t) {
    const n = this || En, s = t || n, r = Re.from(s.headers);
    let o = s.data;
    return y.forEach(e, function (l) {
        o = l.call(n, o, r.normalize(), t ? t.status : void 0)
    }), r.normalize(), o
}

function cl(e) {
    return !!(e && e.__CANCEL__)
}

function Kt(e, t, n) {
    q.call(this, e ?? "canceled", q.ERR_CANCELED, t, n), this.name = "CanceledError"
}

y.inherits(Kt, q, {__CANCEL__: !0});

function ul(e, t, n) {
    const s = n.config.validateStatus;
    !n.status || !s || s(n.status) ? e(n) : t(new q("Request failed with status code " + n.status, [q.ERR_BAD_REQUEST, q.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4], n.config, n.request, n))
}

function cd(e) {
    const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
    return t && t[1] || ""
}

function ud(e, t) {
    e = e || 10;
    const n = new Array(e), s = new Array(e);
    let r = 0, o = 0, i;
    return t = t !== void 0 ? t : 1e3, function (c) {
        const a = Date.now(), u = s[o];
        i || (i = a), n[r] = c, s[r] = a;
        let f = o, p = 0;
        for (; f !== r;) p += n[f++], f = f % e;
        if (r = (r + 1) % e, r === o && (o = (o + 1) % e), a - i < t) return;
        const g = u && a - u;
        return g ? Math.round(p * 1e3 / g) : void 0
    }
}

function ad(e, t) {
    let n = 0, s = 1e3 / t, r, o;
    const i = (a, u = Date.now()) => {
        n = u, r = null, o && (clearTimeout(o), o = null), e.apply(null, a)
    };
    return [(...a) => {
        const u = Date.now(), f = u - n;
        f >= s ? i(a, u) : (r = a, o || (o = setTimeout(() => {
            o = null, i(r)
        }, s - f)))
    }, () => r && i(r)]
}

const Hn = (e, t, n = 3) => {
        let s = 0;
        const r = ud(50, 250);
        return ad(o => {
            const i = o.loaded, l = o.lengthComputable ? o.total : void 0, c = i - s, a = r(c), u = i <= l;
            s = i;
            const f = {
                loaded: i,
                total: l,
                progress: l ? i / l : void 0,
                bytes: c,
                rate: a || void 0,
                estimated: a && l && u ? (l - i) / a : void 0,
                event: o,
                lengthComputable: l != null,
                [t ? "download" : "upload"]: !0
            };
            e(f)
        }, n)
    }, Eo = (e, t) => {
        const n = e != null;
        return [s => t[0]({lengthComputable: n, total: e, loaded: s}), t[1]]
    }, So = e => (...t) => y.asap(() => e(...t)),
    fd = fe.hasStandardBrowserEnv ? ((e, t) => n => (n = new URL(n, fe.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(new URL(fe.origin), fe.navigator && /(msie|trident)/i.test(fe.navigator.userAgent)) : () => !0,
    dd = fe.hasStandardBrowserEnv ? {
        write(e, t, n, s, r, o) {
            const i = [e + "=" + encodeURIComponent(t)];
            y.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()), y.isString(s) && i.push("path=" + s), y.isString(r) && i.push("domain=" + r), o === !0 && i.push("secure"), document.cookie = i.join("; ")
        }, read(e) {
            const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
            return t ? decodeURIComponent(t[3]) : null
        }, remove(e) {
            this.write(e, "", Date.now() - 864e5)
        }
    } : {
        write() {
        }, read() {
            return null
        }, remove() {
        }
    };

function hd(e) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
}

function pd(e, t) {
    return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e
}

function al(e, t, n) {
    let s = !hd(t);
    return e && (s || n == !1) ? pd(e, t) : t
}

const Ro = e => e instanceof Re ? {...e} : e;

function xt(e, t) {
    t = t || {};
    const n = {};

    function s(a, u, f, p) {
        return y.isPlainObject(a) && y.isPlainObject(u) ? y.merge.call({caseless: p}, a, u) : y.isPlainObject(u) ? y.merge({}, u) : y.isArray(u) ? u.slice() : u
    }

    function r(a, u, f, p) {
        if (y.isUndefined(u)) {
            if (!y.isUndefined(a)) return s(void 0, a, f, p)
        } else return s(a, u, f, p)
    }

    function o(a, u) {
        if (!y.isUndefined(u)) return s(void 0, u)
    }

    function i(a, u) {
        if (y.isUndefined(u)) {
            if (!y.isUndefined(a)) return s(void 0, a)
        } else return s(void 0, u)
    }

    function l(a, u, f) {
        if (f in t) return s(a, u);
        if (f in e) return s(void 0, a)
    }

    const c = {
        url: o,
        method: o,
        data: o,
        baseURL: i,
        transformRequest: i,
        transformResponse: i,
        paramsSerializer: i,
        timeout: i,
        timeoutMessage: i,
        withCredentials: i,
        withXSRFToken: i,
        adapter: i,
        responseType: i,
        xsrfCookieName: i,
        xsrfHeaderName: i,
        onUploadProgress: i,
        onDownloadProgress: i,
        decompress: i,
        maxContentLength: i,
        maxBodyLength: i,
        beforeRedirect: i,
        transport: i,
        httpAgent: i,
        httpsAgent: i,
        cancelToken: i,
        socketPath: i,
        responseEncoding: i,
        validateStatus: l,
        headers: (a, u, f) => r(Ro(a), Ro(u), f, !0)
    };
    return y.forEach(Object.keys(Object.assign({}, e, t)), function (u) {
        const f = c[u] || r, p = f(e[u], t[u], u);
        y.isUndefined(p) && f !== l || (n[u] = p)
    }), n
}

const fl = e => {
        const t = xt({}, e);
        let {data: n, withXSRFToken: s, xsrfHeaderName: r, xsrfCookieName: o, headers: i, auth: l} = t;
        t.headers = i = Re.from(i), t.url = ol(al(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), l && i.set("Authorization", "Basic " + btoa((l.username || "") + ":" + (l.password ? unescape(encodeURIComponent(l.password)) : "")));
        let c;
        if (y.isFormData(n)) {
            if (fe.hasStandardBrowserEnv || fe.hasStandardBrowserWebWorkerEnv) i.setContentType(void 0); else if ((c = i.getContentType()) !== !1) {
                const [a, ...u] = c ? c.split(";").map(f => f.trim()).filter(Boolean) : [];
                i.setContentType([a || "multipart/form-data", ...u].join("; "))
            }
        }
        if (fe.hasStandardBrowserEnv && (s && y.isFunction(s) && (s = s(t)), s || s !== !1 && fd(t.url))) {
            const a = r && o && dd.read(o);
            a && i.set(r, a)
        }
        return t
    }, md = typeof XMLHttpRequest < "u", gd = md && function (e) {
        return new Promise(function (n, s) {
            const r = fl(e);
            let o = r.data;
            const i = Re.from(r.headers).normalize();
            let {responseType: l, onUploadProgress: c, onDownloadProgress: a} = r, u, f, p, g, b;

            function R() {
                g && g(), b && b(), r.cancelToken && r.cancelToken.unsubscribe(u), r.signal && r.signal.removeEventListener("abort", u)
            }

            let v = new XMLHttpRequest;
            v.open(r.method.toUpperCase(), r.url, !0), v.timeout = r.timeout;

            function P() {
                if (!v) return;
                const I = Re.from("getAllResponseHeaders" in v && v.getAllResponseHeaders()), H = {
                    data: !l || l === "text" || l === "json" ? v.responseText : v.response,
                    status: v.status,
                    statusText: v.statusText,
                    headers: I,
                    config: e,
                    request: v
                };
                ul(function (K) {
                    n(K), R()
                }, function (K) {
                    s(K), R()
                }, H), v = null
            }

            "onloadend" in v ? v.onloadend = P : v.onreadystatechange = function () {
                !v || v.readyState !== 4 || v.status === 0 && !(v.responseURL && v.responseURL.indexOf("file:") === 0) || setTimeout(P)
            }, v.onabort = function () {
                v && (s(new q("Request aborted", q.ECONNABORTED, e, v)), v = null)
            }, v.onerror = function () {
                s(new q("Network Error", q.ERR_NETWORK, e, v)), v = null
            }, v.ontimeout = function () {
                let F = r.timeout ? "timeout of " + r.timeout + "ms exceeded" : "timeout exceeded";
                const H = r.transitional || il;
                r.timeoutErrorMessage && (F = r.timeoutErrorMessage), s(new q(F, H.clarifyTimeoutError ? q.ETIMEDOUT : q.ECONNABORTED, e, v)), v = null
            }, o === void 0 && i.setContentType(null), "setRequestHeader" in v && y.forEach(i.toJSON(), function (F, H) {
                v.setRequestHeader(H, F)
            }), y.isUndefined(r.withCredentials) || (v.withCredentials = !!r.withCredentials), l && l !== "json" && (v.responseType = r.responseType), a && ([p, b] = Hn(a, !0), v.addEventListener("progress", p)), c && v.upload && ([f, g] = Hn(c), v.upload.addEventListener("progress", f), v.upload.addEventListener("loadend", g)), (r.cancelToken || r.signal) && (u = I => {
                v && (s(!I || I.type ? new Kt(null, e, v) : I), v.abort(), v = null)
            }, r.cancelToken && r.cancelToken.subscribe(u), r.signal && (r.signal.aborted ? u() : r.signal.addEventListener("abort", u)));
            const C = cd(r.url);
            if (C && fe.protocols.indexOf(C) === -1) {
                s(new q("Unsupported protocol " + C + ":", q.ERR_BAD_REQUEST, e));
                return
            }
            v.send(o || null)
        })
    }, yd = (e, t) => {
        const {length: n} = e = e ? e.filter(Boolean) : [];
        if (t || n) {
            let s = new AbortController, r;
            const o = function (a) {
                if (!r) {
                    r = !0, l();
                    const u = a instanceof Error ? a : this.reason;
                    s.abort(u instanceof q ? u : new Kt(u instanceof Error ? u.message : u))
                }
            };
            let i = t && setTimeout(() => {
                i = null, o(new q(`timeout ${t} of ms exceeded`, q.ETIMEDOUT))
            }, t);
            const l = () => {
                e && (i && clearTimeout(i), i = null, e.forEach(a => {
                    a.unsubscribe ? a.unsubscribe(o) : a.removeEventListener("abort", o)
                }), e = null)
            };
            e.forEach(a => a.addEventListener("abort", o));
            const {signal: c} = s;
            return c.unsubscribe = () => y.asap(l), c
        }
    }, bd = function* (e, t) {
        let n = e.byteLength;
        if (n < t) {
            yield e;
            return
        }
        let s = 0, r;
        for (; s < n;) r = s + t, yield e.slice(s, r), s = r
    }, _d = async function* (e, t) {
        for await(const n of wd(e)) yield* bd(n, t)
    }, wd = async function* (e) {
        if (e[Symbol.asyncIterator]) {
            yield* e;
            return
        }
        const t = e.getReader();
        try {
            for (; ;) {
                const {done: n, value: s} = await t.read();
                if (n) break;
                yield s
            }
        } finally {
            await t.cancel()
        }
    }, vo = (e, t, n, s) => {
        const r = _d(e, t);
        let o = 0, i, l = c => {
            i || (i = !0, s && s(c))
        };
        return new ReadableStream({
            async pull(c) {
                try {
                    const {done: a, value: u} = await r.next();
                    if (a) {
                        l(), c.close();
                        return
                    }
                    let f = u.byteLength;
                    if (n) {
                        let p = o += f;
                        n(p)
                    }
                    c.enqueue(new Uint8Array(u))
                } catch (a) {
                    throw l(a), a
                }
            }, cancel(c) {
                return l(c), r.return()
            }
        }, {highWaterMark: 2})
    }, cs = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function",
    dl = cs && typeof ReadableStream == "function",
    Ed = cs && (typeof TextEncoder == "function" ? (e => t => e.encode(t))(new TextEncoder) : async e => new Uint8Array(await new Response(e).arrayBuffer())),
    hl = (e, ...t) => {
        try {
            return !!e(...t)
        } catch {
            return !1
        }
    }, Sd = dl && hl(() => {
        let e = !1;
        const t = new Request(fe.origin, {
            body: new ReadableStream, method: "POST", get duplex() {
                return e = !0, "half"
            }
        }).headers.has("Content-Type");
        return e && !t
    }), xo = 64 * 1024, Ks = dl && hl(() => y.isReadableStream(new Response("").body)), qn = {stream: Ks && (e => e.body)};
cs && (e => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach(t => {
        !qn[t] && (qn[t] = y.isFunction(e[t]) ? n => n[t]() : (n, s) => {
            throw new q(`Response type '${t}' is not supported`, q.ERR_NOT_SUPPORT, s)
        })
    })
})(new Response);
const Rd = async e => {
    if (e == null) return 0;
    if (y.isBlob(e)) return e.size;
    if (y.isSpecCompliantForm(e)) return (await new Request(fe.origin, {
        method: "POST",
        body: e
    }).arrayBuffer()).byteLength;
    if (y.isArrayBufferView(e) || y.isArrayBuffer(e)) return e.byteLength;
    if (y.isURLSearchParams(e) && (e = e + ""), y.isString(e)) return (await Ed(e)).byteLength
}, vd = async (e, t) => {
    const n = y.toFiniteNumber(e.getContentLength());
    return n ?? Rd(t)
}, xd = cs && (async e => {
    let {
        url: t,
        method: n,
        data: s,
        signal: r,
        cancelToken: o,
        timeout: i,
        onDownloadProgress: l,
        onUploadProgress: c,
        responseType: a,
        headers: u,
        withCredentials: f = "same-origin",
        fetchOptions: p
    } = fl(e);
    a = a ? (a + "").toLowerCase() : "text";
    let g = yd([r, o && o.toAbortSignal()], i), b;
    const R = g && g.unsubscribe && (() => {
        g.unsubscribe()
    });
    let v;
    try {
        if (c && Sd && n !== "get" && n !== "head" && (v = await vd(u, s)) !== 0) {
            let H = new Request(t, {method: "POST", body: s, duplex: "half"}), ee;
            if (y.isFormData(s) && (ee = H.headers.get("content-type")) && u.setContentType(ee), H.body) {
                const [K, pe] = Eo(v, Hn(So(c)));
                s = vo(H.body, xo, K, pe)
            }
        }
        y.isString(f) || (f = f ? "include" : "omit");
        const P = "credentials" in Request.prototype;
        b = new Request(t, {
            ...p,
            signal: g,
            method: n.toUpperCase(),
            headers: u.normalize().toJSON(),
            body: s,
            duplex: "half",
            credentials: P ? f : void 0
        });
        let C = await fetch(b, p);
        const I = Ks && (a === "stream" || a === "response");
        if (Ks && (l || I && R)) {
            const H = {};
            ["status", "statusText", "headers"].forEach(Ne => {
                H[Ne] = C[Ne]
            });
            const ee = y.toFiniteNumber(C.headers.get("content-length")), [K, pe] = l && Eo(ee, Hn(So(l), !0)) || [];
            C = new Response(vo(C.body, xo, K, () => {
                pe && pe(), R && R()
            }), H)
        }
        a = a || "text";
        let F = await qn[y.findKey(qn, a) || "text"](C, e);
        return !I && R && R(), await new Promise((H, ee) => {
            ul(H, ee, {
                data: F,
                headers: Re.from(C.headers),
                status: C.status,
                statusText: C.statusText,
                config: e,
                request: b
            })
        })
    } catch (P) {
        throw R && R(), P && P.name === "TypeError" && /Load failed|fetch/i.test(P.message) ? Object.assign(new q("Network Error", q.ERR_NETWORK, e, b), {cause: P.cause || P}) : q.from(P, P && P.code, e, b)
    }
}), Ws = {http: jf, xhr: gd, fetch: xd};
y.forEach(Ws, (e, t) => {
    if (e) {
        try {
            Object.defineProperty(e, "name", {value: t})
        } catch {
        }
        Object.defineProperty(e, "adapterName", {value: t})
    }
});
const Oo = e => `- ${e}`, Od = e => y.isFunction(e) || e === null || e === !1, pl = {
    getAdapter: e => {
        e = y.isArray(e) ? e : [e];
        const {length: t} = e;
        let n, s;
        const r = {};
        for (let o = 0; o < t; o++) {
            n = e[o];
            let i;
            if (s = n, !Od(n) && (s = Ws[(i = String(n)).toLowerCase()], s === void 0)) throw new q(`Unknown adapter '${i}'`);
            if (s) break;
            r[i || "#" + o] = s
        }
        if (!s) {
            const o = Object.entries(r).map(([l, c]) => `adapter ${l} ` + (c === !1 ? "is not supported by the environment" : "is not available in the build"));
            let i = t ? o.length > 1 ? `since :
` + o.map(Oo).join(`
`) : " " + Oo(o[0]) : "as no adapter specified";
            throw new q("There is no suitable adapter to dispatch the request " + i, "ERR_NOT_SUPPORT")
        }
        return s
    }, adapters: Ws
};

function Os(e) {
    if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted) throw new Kt(null, e)
}

function Ao(e) {
    return Os(e), e.headers = Re.from(e.headers), e.data = xs.call(e, e.transformRequest), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), pl.getAdapter(e.adapter || En.adapter)(e).then(function (s) {
        return Os(e), s.data = xs.call(e, e.transformResponse, s), s.headers = Re.from(s.headers), s
    }, function (s) {
        return cl(s) || (Os(e), s && s.response && (s.response.data = xs.call(e, e.transformResponse, s.response), s.response.headers = Re.from(s.response.headers))), Promise.reject(s)
    })
}

const ml = "1.10.0", us = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
    us[e] = function (s) {
        return typeof s === e || "a" + (t < 1 ? "n " : " ") + e
    }
});
const Co = {};
us.transitional = function (t, n, s) {
    function r(o, i) {
        return "[Axios v" + ml + "] Transitional option '" + o + "'" + i + (s ? ". " + s : "")
    }

    return (o, i, l) => {
        if (t === !1) throw new q(r(i, " has been removed" + (n ? " in " + n : "")), q.ERR_DEPRECATED);
        return n && !Co[i] && (Co[i] = !0, console.warn(r(i, " has been deprecated since v" + n + " and will be removed in the near future"))), t ? t(o, i, l) : !0
    }
};
us.spelling = function (t) {
    return (n, s) => (console.warn(`${s} is likely a misspelling of ${t}`), !0)
};

function Ad(e, t, n) {
    if (typeof e != "object") throw new q("options must be an object", q.ERR_BAD_OPTION_VALUE);
    const s = Object.keys(e);
    let r = s.length;
    for (; r-- > 0;) {
        const o = s[r], i = t[o];
        if (i) {
            const l = e[o], c = l === void 0 || i(l, o, e);
            if (c !== !0) throw new q("option " + o + " must be " + c, q.ERR_BAD_OPTION_VALUE);
            continue
        }
        if (n !== !0) throw new q("Unknown option " + o, q.ERR_BAD_OPTION)
    }
}

const Fn = {assertOptions: Ad, validators: us}, Ke = Fn.validators;
let vt = class {
    constructor(t) {
        this.defaults = t || {}, this.interceptors = {request: new _o, response: new _o}
    }

    async request(t, n) {
        try {
            return await this._request(t, n)
        } catch (s) {
            if (s instanceof Error) {
                let r = {};
                Error.captureStackTrace ? Error.captureStackTrace(r) : r = new Error;
                const o = r.stack ? r.stack.replace(/^.+\n/, "") : "";
                try {
                    s.stack ? o && !String(s.stack).endsWith(o.replace(/^.+\n.+\n/, "")) && (s.stack += `
` + o) : s.stack = o
                } catch {
                }
            }
            throw s
        }
    }

    _request(t, n) {
        typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = xt(this.defaults, n);
        const {transitional: s, paramsSerializer: r, headers: o} = n;
        s !== void 0 && Fn.assertOptions(s, {
            silentJSONParsing: Ke.transitional(Ke.boolean),
            forcedJSONParsing: Ke.transitional(Ke.boolean),
            clarifyTimeoutError: Ke.transitional(Ke.boolean)
        }, !1), r != null && (y.isFunction(r) ? n.paramsSerializer = {serialize: r} : Fn.assertOptions(r, {
            encode: Ke.function,
            serialize: Ke.function
        }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), Fn.assertOptions(n, {
            baseUrl: Ke.spelling("baseURL"),
            withXsrfToken: Ke.spelling("withXSRFToken")
        }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
        let i = o && y.merge(o.common, o[n.method]);
        o && y.forEach(["delete", "get", "head", "post", "put", "patch", "common"], b => {
            delete o[b]
        }), n.headers = Re.concat(i, o);
        const l = [];
        let c = !0;
        this.interceptors.request.forEach(function (R) {
            typeof R.runWhen == "function" && R.runWhen(n) === !1 || (c = c && R.synchronous, l.unshift(R.fulfilled, R.rejected))
        });
        const a = [];
        this.interceptors.response.forEach(function (R) {
            a.push(R.fulfilled, R.rejected)
        });
        let u, f = 0, p;
        if (!c) {
            const b = [Ao.bind(this), void 0];
            for (b.unshift.apply(b, l), b.push.apply(b, a), p = b.length, u = Promise.resolve(n); f < p;) u = u.then(b[f++], b[f++]);
            return u
        }
        p = l.length;
        let g = n;
        for (f = 0; f < p;) {
            const b = l[f++], R = l[f++];
            try {
                g = b(g)
            } catch (v) {
                R.call(this, v);
                break
            }
        }
        try {
            u = Ao.call(this, g)
        } catch (b) {
            return Promise.reject(b)
        }
        for (f = 0, p = a.length; f < p;) u = u.then(a[f++], a[f++]);
        return u
    }

    getUri(t) {
        t = xt(this.defaults, t);
        const n = al(t.baseURL, t.url, t.allowAbsoluteUrls);
        return ol(n, t.params, t.paramsSerializer)
    }
};
y.forEach(["delete", "get", "head", "options"], function (t) {
    vt.prototype[t] = function (n, s) {
        return this.request(xt(s || {}, {method: t, url: n, data: (s || {}).data}))
    }
});
y.forEach(["post", "put", "patch"], function (t) {
    function n(s) {
        return function (o, i, l) {
            return this.request(xt(l || {}, {
                method: t,
                headers: s ? {"Content-Type": "multipart/form-data"} : {},
                url: o,
                data: i
            }))
        }
    }

    vt.prototype[t] = n(), vt.prototype[t + "Form"] = n(!0)
});
let Cd = class gl {
    constructor(t) {
        if (typeof t != "function") throw new TypeError("executor must be a function.");
        let n;
        this.promise = new Promise(function (o) {
            n = o
        });
        const s = this;
        this.promise.then(r => {
            if (!s._listeners) return;
            let o = s._listeners.length;
            for (; o-- > 0;) s._listeners[o](r);
            s._listeners = null
        }), this.promise.then = r => {
            let o;
            const i = new Promise(l => {
                s.subscribe(l), o = l
            }).then(r);
            return i.cancel = function () {
                s.unsubscribe(o)
            }, i
        }, t(function (o, i, l) {
            s.reason || (s.reason = new Kt(o, i, l), n(s.reason))
        })
    }

    throwIfRequested() {
        if (this.reason) throw this.reason
    }

    subscribe(t) {
        if (this.reason) {
            t(this.reason);
            return
        }
        this._listeners ? this._listeners.push(t) : this._listeners = [t]
    }

    unsubscribe(t) {
        if (!this._listeners) return;
        const n = this._listeners.indexOf(t);
        n !== -1 && this._listeners.splice(n, 1)
    }

    toAbortSignal() {
        const t = new AbortController, n = s => {
            t.abort(s)
        };
        return this.subscribe(n), t.signal.unsubscribe = () => this.unsubscribe(n), t.signal
    }

    static source() {
        let t;
        return {
            token: new gl(function (r) {
                t = r
            }), cancel: t
        }
    }
};

function Td(e) {
    return function (n) {
        return e.apply(null, n)
    }
}

function Pd(e) {
    return y.isObject(e) && e.isAxiosError === !0
}

const zs = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
};
Object.entries(zs).forEach(([e, t]) => {
    zs[t] = e
});

function yl(e) {
    const t = new vt(e), n = zi(vt.prototype.request, t);
    return y.extend(n, vt.prototype, t, {allOwnKeys: !0}), y.extend(n, t, null, {allOwnKeys: !0}), n.create = function (r) {
        return yl(xt(e, r))
    }, n
}

const re = yl(En);
re.Axios = vt;
re.CanceledError = Kt;
re.CancelToken = Cd;
re.isCancel = cl;
re.VERSION = ml;
re.toFormData = ls;
re.AxiosError = q;
re.Cancel = re.CanceledError;
re.all = function (t) {
    return Promise.all(t)
};
re.spread = Td;
re.isAxiosError = Pd;
re.mergeConfig = xt;
re.AxiosHeaders = Re;
re.formToJSON = e => ll(y.isHTMLForm(e) ? new FormData(e) : e);
re.getAdapter = pl.getAdapter;
re.HttpStatusCode = zs;
re.default = re;
const {
    Axios: eh,
    AxiosError: th,
    CanceledError: nh,
    isCancel: sh,
    CancelToken: rh,
    VERSION: oh,
    all: ih,
    Cancel: lh,
    isAxiosError: ch,
    spread: uh,
    toFormData: ah,
    AxiosHeaders: fh,
    HttpStatusCode: dh,
    formToJSON: hh,
    getAdapter: ph,
    mergeConfig: mh
} = re, Sn = "/api", Wt = re.create();
Wt.interceptors.request.use(e => {
    const t = localStorage.getItem("token");
    return t && (e.headers.Authorization = `Bearer ${t}`), e
});
const Ld = e => Wt.post(`${Sn}/auth/register`, e), Nd = e => Wt.post(`${Sn}/auth/login`, e),
    Id = () => Wt.get(`${Sn}/book/list`), Fd = e => Wt.post(`${Sn}/borrow/${e}`),
    Md = e => Wt.post(`${Sn}/return/${e}`), Dd = {
        name: "LoginRegister", data() {
            return {phoneNumber: "", password: "", isLogin: !0, message: ""}
        }, methods: {
            async handleSubmit() {
                this.message = "";
                try {
                    if (this.isLogin) {
                        const e = await Nd({phoneNumber: this.phoneNumber, password: this.password});
                        localStorage.setItem("token", e.data.token || ""), this.message = "登入成功！", this.$emit("login-success"), this.$router.push("/books")
                    } else await Ld({
                        phoneNumber: this.phoneNumber,
                        password: this.password
                    }), this.message = "註冊成功，請登入！", this.isLogin = !0
                } catch (e) {
                    this.message = e.response?.data?.message || "操作失敗"
                }
            }
        }
    }, Bd = {class: "login-register"}, kd = {type: "submit"}, Ud = {key: 0, class: "message"};

function jd(e, t, n, s, r, o) {
    return Te(), Ie("div", Bd, [le("h2", null, ht(r.isLogin ? "登入" : "註冊"), 1), le("form", {onSubmit: t[2] || (t[2] = ju((...i) => o.handleSubmit && o.handleSubmit(...i), ["prevent"]))}, [le("div", null, [t[4] || (t[4] = le("label", null, "手機號碼：", -1)), vr(le("input", {
        "onUpdate:modelValue": t[0] || (t[0] = i => r.phoneNumber = i),
        type: "text",
        required: ""
    }, null, 512), [[Xr, r.phoneNumber]])]), le("div", null, [t[5] || (t[5] = le("label", null, "密碼：", -1)), vr(le("input", {
        "onUpdate:modelValue": t[1] || (t[1] = i => r.password = i),
        type: "password",
        required: ""
    }, null, 512), [[Xr, r.password]])]), le("button", kd, ht(r.isLogin ? "登入" : "註冊"), 1)], 32), le("button", {
        onClick: t[3] || (t[3] = i => r.isLogin = !r.isLogin),
        style: {"margin-top": "10px"}
    }, ht(r.isLogin ? "還沒有帳號？註冊" : "已有帳號？登入"), 1), r.message ? (Te(), Ie("div", Ud, ht(r.message), 1)) : Ft("", !0)])
}

const $d = dr(Dd, [["render", jd], ["__scopeId", "data-v-7f7d1551"]]), Hd = {
        name: "BookList", data() {
            return {books: [], message: ""}
        }, computed: {
            isLoggedIn() {
                return !!localStorage.getItem("token")
            }
        }, methods: {
            async fetchBooks() {
                try {
                    const e = await Id();
                    this.books = e.data
                } catch {
                    this.message = "取得書籍失敗"
                }
            }, async borrow(e) {
                if (this.message = "", !this.isLoggedIn) {
                    this.message = "請先登入才能借書", this.$router.push("/");
                    return
                }
                try {
                    await Fd(e.inventoryId || e.id), this.message = "借閱成功", this.fetchBooks()
                } catch (t) {
                    this.message = t.response?.data?.message || "借閱失敗"
                }
            }, async returnBook(e) {
                if (this.message = "", !this.isLoggedIn) {
                    this.message = "請先登入才能還書", this.$router.push("/");
                    return
                }
                try {
                    await Md(e.inventoryId || e.id), this.message = "還書成功", this.fetchBooks()
                } catch (t) {
                    this.message = t.response?.data?.message || "還書失敗"
                }
            }
        }, mounted() {
            this.fetchBooks()
        }
    }, qd = {class: "book-list"}, Vd = {key: 0, class: "warn"}, Kd = ["onClick"], Wd = ["onClick"],
    zd = {key: 1, class: "message"};

function Jd(e, t, n, s, r, o) {
    return Te(), Ie("div", qd, [t[0] || (t[0] = le("h2", null, "書籍列表", -1)), o.isLoggedIn ? Ft("", !0) : (Te(), Ie("div", Vd, "請先登入才能借閱或還書。")), le("ul", null, [(Te(!0), Ie(ze, null, Ac(r.books, i => (Te(), Ie("li", {
        key: i.id,
        class: "book-item"
    }, [le("span", null, ht(i.title) + "（" + ht(i.status === "BORROWED" ? "已借閱" : "可借閱") + "）", 1), i.status !== "BORROWED" ? (Te(), Ie("button", {
        key: 0,
        onClick: l => o.borrow(i)
    }, "借閱", 8, Kd)) : Ft("", !0), i.status === "BORROWED" ? (Te(), Ie("button", {
        key: 1,
        onClick: l => o.returnBook(i)
    }, "還書", 8, Wd)) : Ft("", !0)]))), 128))]), r.message ? (Te(), Ie("div", zd, ht(r.message), 1)) : Ft("", !0)])
}

const Gd = dr(Hd, [["render", Jd], ["__scopeId", "data-v-2829823a"]]),
    Xd = [{path: "/", name: "Login", component: $d}, {path: "/books", name: "BookList", component: Gd}],
    Qd = Ya({history: Aa(), routes: Xd}), bl = qu(Xu);
bl.use(Qd);
bl.mount("#app");
