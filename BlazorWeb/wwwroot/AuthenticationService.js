!function(e) {
    var t = {};
    function r(n) {
        if (t[n])
            return t[n].exports;
        var o = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(o.exports, o, o.exports, r),
        o.l = !0,
        o.exports
    }
    r.m = e,
    r.c = t,
    r.d = function(e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }
    ,
    r.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    r.t = function(e, t) {
        if (1 & t && (e = r(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var n = Object.create(null);
        if (r.r(n),
        Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var o in e)
                r.d(n, o, function(t) {
                    return e[t]
                }
                .bind(null, o));
        return n
    }
    ,
    r.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return r.d(t, "a", t),
        t
    }
    ,
    r.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    r.p = "",
    r(r.s = 1)
}([function(e, t, r) {
    "use strict";
    r.r(t),
    r.d(t, "__extends", (function() {
        return o
    }
    )),
    r.d(t, "__assign", (function() {
        return i
    }
    )),
    r.d(t, "__rest", (function() {
        return a
    }
    )),
    r.d(t, "__decorate", (function() {
        return c
    }
    )),
    r.d(t, "__param", (function() {
        return s
    }
    )),
    r.d(t, "__metadata", (function() {
        return u
    }
    )),
    r.d(t, "__awaiter", (function() {
        return l
    }
    )),
    r.d(t, "__generator", (function() {
        return d
    }
    )),
    r.d(t, "__exportStar", (function() {
        return h
    }
    )),
    r.d(t, "__values", (function() {
        return p
    }
    )),
    r.d(t, "__read", (function() {
        return f
    }
    )),
    r.d(t, "__spread", (function() {
        return g
    }
    )),
    r.d(t, "__spreadArrays", (function() {
        return m
    }
    )),
    r.d(t, "__await", (function() {
        return y
    }
    )),
    r.d(t, "__asyncGenerator", (function() {
        return I
    }
    )),
    r.d(t, "__asyncDelegator", (function() {
        return v
    }
    )),
    r.d(t, "__asyncValues", (function() {
        return E
    }
    )),
    r.d(t, "__makeTemplateObject", (function() {
        return w
    }
    )),
    r.d(t, "__importStar", (function() {
        return _
    }
    )),
    r.d(t, "__importDefault", (function() {
        return T
    }
    ));
    /*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
    var n = function(e, t) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var r in t)
                t.hasOwnProperty(r) && (e[r] = t[r])
        }
        )(e, t)
    };
    function o(e, t) {
        function r() {
            this.constructor = e
        }
        n(e, t),
        e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype,
        new r)
    }
    var i = function() {
        return (i = Object.assign || function(e) {
            for (var t, r = 1, n = arguments.length; r < n; r++)
                for (var o in t = arguments[r])
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
        }
        ).apply(this, arguments)
    };
    function a(e, t) {
        var r = {};
        for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (n = Object.getOwnPropertySymbols(e); o < n.length; o++)
                t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
        }
        return r
    }
    function c(e, t, r, n) {
        var o, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
            a = Reflect.decorate(e, t, r, n);
        else
            for (var c = e.length - 1; c >= 0; c--)
                (o = e[c]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, r, a) : o(t, r)) || a);
        return i > 3 && a && Object.defineProperty(t, r, a),
        a
    }
    function s(e, t) {
        return function(r, n) {
            t(r, n, e)
        }
    }
    function u(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
            return Reflect.metadata(e, t)
    }
    function l(e, t, r, n) {
        return new (r || (r = Promise))((function(o, i) {
            function a(e) {
                try {
                    s(n.next(e))
                } catch (e) {
                    i(e)
                }
            }
            function c(e) {
                try {
                    s(n.throw(e))
                } catch (e) {
                    i(e)
                }
            }
            function s(e) {
                e.done ? o(e.value) : new r((function(t) {
                    t(e.value)
                }
                )).then(a, c)
            }
            s((n = n.apply(e, t || [])).next())
        }
        ))
    }
    function d(e, t) {
        var r, n, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0])
                    throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: c(0),
            throw: c(1),
            return: c(2)
        },
        "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }
        ),
        i;
        function c(i) {
            return function(c) {
                return function(i) {
                    if (r)
                        throw new TypeError("Generator is already executing.");
                    for (; a; )
                        try {
                            if (r = 1,
                            n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n),
                            0) : n.next) && !(o = o.call(n, i[1])).done)
                                return o;
                            switch (n = 0,
                            o && (i = [2 & i[0], o.value]),
                            i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++,
                                {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++,
                                n = i[1],
                                i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(),
                                a.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1],
                                    o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2],
                                    a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(),
                                a.trys.pop();
                                continue
                            }
                            i = t.call(e, a)
                        } catch (e) {
                            i = [6, e],
                            n = 0
                        } finally {
                            r = o = 0
                        }
                    if (5 & i[0])
                        throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, c])
            }
        }
    }
    function h(e, t) {
        for (var r in e)
            t.hasOwnProperty(r) || (t[r] = e[r])
    }
    function p(e) {
        var t = "function" == typeof Symbol && e[Symbol.iterator]
          , r = 0;
        return t ? t.call(e) : {
            next: function() {
                return e && r >= e.length && (e = void 0),
                {
                    value: e && e[r++],
                    done: !e
                }
            }
        }
    }
    function f(e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r)
            return e;
        var n, o, i = r.call(e), a = [];
        try {
            for (; (void 0 === t || t-- > 0) && !(n = i.next()).done; )
                a.push(n.value)
        } catch (e) {
            o = {
                error: e
            }
        } finally {
            try {
                n && !n.done && (r = i.return) && r.call(i)
            } finally {
                if (o)
                    throw o.error
            }
        }
        return a
    }
    function g() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e = e.concat(f(arguments[t]));
        return e
    }
    function m() {
        for (var e = 0, t = 0, r = arguments.length; t < r; t++)
            e += arguments[t].length;
        var n = Array(e)
          , o = 0;
        for (t = 0; t < r; t++)
            for (var i = arguments[t], a = 0, c = i.length; a < c; a++,
            o++)
                n[o] = i[a];
        return n
    }
    function y(e) {
        return this instanceof y ? (this.v = e,
        this) : new y(e)
    }
    function I(e, t, r) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var n, o = r.apply(e, t || []), i = [];
        return n = {},
        a("next"),
        a("throw"),
        a("return"),
        n[Symbol.asyncIterator] = function() {
            return this
        }
        ,
        n;
        function a(e) {
            o[e] && (n[e] = function(t) {
                return new Promise((function(r, n) {
                    i.push([e, t, r, n]) > 1 || c(e, t)
                }
                ))
            }
            )
        }
        function c(e, t) {
            try {
                (r = o[e](t)).value instanceof y ? Promise.resolve(r.value.v).then(s, u) : l(i[0][2], r)
            } catch (e) {
                l(i[0][3], e)
            }
            var r
        }
        function s(e) {
            c("next", e)
        }
        function u(e) {
            c("throw", e)
        }
        function l(e, t) {
            e(t),
            i.shift(),
            i.length && c(i[0][0], i[0][1])
        }
    }
    function v(e) {
        var t, r;
        return t = {},
        n("next"),
        n("throw", (function(e) {
            throw e
        }
        )),
        n("return"),
        t[Symbol.iterator] = function() {
            return this
        }
        ,
        t;
        function n(n, o) {
            t[n] = e[n] ? function(t) {
                return (r = !r) ? {
                    value: y(e[n](t)),
                    done: "return" === n
                } : o ? o(t) : t
            }
            : o
        }
    }
    function E(e) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var t, r = e[Symbol.asyncIterator];
        return r ? r.call(e) : (e = p(e),
        t = {},
        n("next"),
        n("throw"),
        n("return"),
        t[Symbol.asyncIterator] = function() {
            return this
        }
        ,
        t);
        function n(r) {
            t[r] = e[r] && function(t) {
                return new Promise((function(n, o) {
                    (function(e, t, r, n) {
                        Promise.resolve(n).then((function(t) {
                            e({
                                value: t,
                                done: r
                            })
                        }
                        ), t)
                    }
                    )(n, o, (t = e[r](t)).done, t.value)
                }
                ))
            }
        }
    }
    function w(e, t) {
        return Object.defineProperty ? Object.defineProperty(e, "raw", {
            value: t
        }) : e.raw = t,
        e
    }
    function _(e) {
        if (e && e.__esModule)
            return e;
        var t = {};
        if (null != e)
            for (var r in e)
                Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        return t.default = e,
        t
    }
    function T(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
}
, function(e, t, r) {
    "use strict";
    var n = this && this.__importStar || function(e) {
        if (e && e.__esModule)
            return e;
        var t = {};
        if (null != e)
            for (var r in e)
                Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        return t.default = e,
        t
    }
    ;
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const o = n(r(5))
      , i = r(2);
    var a, c;
    !function(e) {
        e.Success = "success",
        e.RequiresRedirect = "requiresRedirect"
    }(a || (a = {})),
    function(e) {
        e.Redirect = "redirect",
        e.Success = "success",
        e.Failure = "failure",
        e.OperationCompleted = "operationCompleted"
    }(c || (c = {}));
    class s {
        constructor(e) {
            this._settings = e;
            const t = location.href;
            this._msalApplication = new o.UserAgentApplication(this._settings),
            this._callbackPromise = this.createCallbackResult(t)
        }
        async getUser() {
            var e;
            return null === (e = this._msalApplication.getAccount()) || void 0 === e ? void 0 : e.idTokenClaims
        }
        async getAccessToken(e) {
            var t;
            try {
                const r = await this.getTokenCore(null === (t = e) || void 0 === t ? void 0 : t.scopes);
                return {
                    status: a.Success,
                    token: r
                }
            } catch (e) {
                return {
                    status: a.RequiresRedirect
                }
            }
        }
        async getTokenCore(e) {
            const t = {
                redirectUri: this._settings.auth.redirectUri,
                scopes: e || this._settings.defaultAccessTokenScopes
            }
              , r = await this._msalApplication.acquireTokenPopup(t);
            return {
                value: r.accessToken,
                grantedScopes: r.scopes,
                expires: r.expiresOn
            }
        }
        async signIn(e) {
            var t;
            try {
                this.purgeState();
                const r = {
                    redirectUri: this._settings.auth.redirectUri,
                    state: await this.saveState(e)
                };
                this._settings.defaultAccessTokenScopes && this._settings.defaultAccessTokenScopes.length > 0 && (r.scopes = this._settings.defaultAccessTokenScopes),
                this._settings.additionalScopesToConsent && this._settings.additionalScopesToConsent.length > 0 && (r.extraScopesToConsent = this._settings.additionalScopesToConsent);
                const n = await this.signInCore(r);
                if (!n)
                    return this.redirect();
                if (this.isMsalError(n))
                    return this.error(n.errorMessage);
                try {
                    (null === (t = this._settings.defaultAccessTokenScopes) || void 0 === t ? void 0 : t.length) > 0 && await this._msalApplication.acquireTokenRedirect(r)
                } catch (e) {
                    return this.error(e.errorMessage)
                }
                return this.success(e)
            } catch (e) {
                return this.error(e.message)
            }
        }
        async signInCore(e) {
            try {
                return await this._msalApplication.loginPopup(e)
            } catch (t) {
                if (!this.isMsalError(t) || t.errorCode === i.ClientAuthErrorMessage.userCancelledError.code)
                    return t;
                try {
                    this._msalApplication.loginRedirect(e)
                } catch (e) {
                    return e
                }
            }
        }
        completeSignIn() {
            return this._callbackPromise
        }
        async signOut(e) {
            this.purgeState();
            const t = await this.saveState(e);
            return sessionStorage.setItem(`${u._infrastructureKey}.LogoutState`, t),
            this._msalApplication.logout(),
            this.redirect()
        }
        async completeSignOut(e) {
            const t = sessionStorage.getItem(`${u._infrastructureKey}.LogoutState`)
              , r = new URL(e);
            r.search = `?state=${t}`;
            const n = await this.retrieveState(r.href, !0);
            return sessionStorage.removeItem(`${u._infrastructureKey}.LogoutState`),
            n ? this.success(n) : this.operationCompleted()
        }
        async saveState(e) {
            const t = await new Promise((e,t)=>{
                const r = new FileReader;
                r.onloadend = t=>{
                    var r, n;
                    return e((null === (n = null === (r = t) || void 0 === r ? void 0 : r.target) || void 0 === n ? void 0 : n.result).split(",")[1].replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, ""))
                }
                ,
                r.onerror = e=>{
                    var r, n;
                    return t(null === (n = null === (r = e.target) || void 0 === r ? void 0 : r.error) || void 0 === n ? void 0 : n.message)
                }
                ;
                const n = window.crypto.getRandomValues(new Uint8Array(32));
                r.readAsDataURL(new Blob([n]))
            }
            );
            return sessionStorage.setItem(`${u._infrastructureKey}.AuthorizeService.${t}`, JSON.stringify(e)),
            t
        }
        async retrieveState(e, t=!1) {
            const r = new URL(e)
              , n = r.hash && r.hash.length > 0 && new URLSearchParams(r.hash.substring(1));
            let o = n && n.getAll("state");
            if (o && o.length > 1)
                return;
            if (!(o && 0 != o.length || (o = r.searchParams && r.searchParams.getAll("state"),
            o && 1 === o.length)))
                return;
            const i = t ? o[0] : this._msalApplication.getAccountState(o[0])
              , a = `${u._infrastructureKey}.AuthorizeService.${i}`
              , c = sessionStorage.getItem(a);
            if (c) {
                return sessionStorage.removeItem(a),
                JSON.parse(c)
            }
        }
        purgeState() {
            var e;
            for (let t = 0; t < sessionStorage.length; t++) {
                const r = sessionStorage.key(t);
                (null === (e = r) || void 0 === e ? void 0 : e.startsWith(u._infrastructureKey)) && sessionStorage.removeItem(r)
            }
        }
        async createCallbackResult(e) {
            const t = (e,t)=>{
                this._msalApplication.handleRedirectCallback(t=>{
                    e(t)
                }
                , e=>{
                    t(e)
                }
                )
            }
            ;
            try {
                if (await new Promise(t),
                window === window.parent || window.opener) {
                    const t = await this.retrieveState(e);
                    return this.success(t)
                }
                return this.operationCompleted()
            } catch (e) {
                return this.isMsalError(e) ? this.error(e.errorMessage) : this.error(e)
            }
        }
        isMsalError(e) {
            var t;
            return null === (t = e) || void 0 === t ? void 0 : t.errorCode
        }
        error(e) {
            return {
                status: c.Failure,
                errorMessage: e
            }
        }
        success(e) {
            return {
                status: c.Success,
                state: e
            }
        }
        redirect() {
            return {
                status: c.Redirect
            }
        }
        operationCompleted() {
            return {
                status: c.OperationCompleted
            }
        }
    }
    class u {
        static async init(e) {
            u._initialized || (u._initialized = !0,
            u.instance = new s(e))
        }
        static getUser() {
            return u.instance.getUser()
        }
        static getAccessToken(e) {
            return u.instance.getAccessToken(e)
        }
        static signIn(e) {
            return u.instance.signIn(e)
        }
        static completeSignIn(e) {
            return u.instance.completeSignIn()
        }
        static signOut(e) {
            return u.instance.signOut(e)
        }
        static completeSignOut(e) {
            return u.instance.completeSignOut(e)
        }
    }
    t.AuthenticationService = u,
    u._infrastructureKey = "Microsoft.Authentication.WebAssembly.Msal",
    u._initialized = !1,
    window.AuthenticationService = u
}
, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = r(0)
      , o = r(3)
      , i = r(4);
    t.ClientAuthErrorMessage = {
        multipleMatchingTokens: {
            code: "multiple_matching_tokens",
            desc: "The cache contains multiple tokens satisfying the requirements. Call AcquireToken again providing more requirements like authority."
        },
        multipleCacheAuthorities: {
            code: "multiple_authorities",
            desc: "Multiple authorities found in the cache. Pass authority in the API overload."
        },
        endpointResolutionError: {
            code: "endpoints_resolution_error",
            desc: "Error: could not resolve endpoints. Please check network and try again."
        },
        popUpWindowError: {
            code: "popup_window_error",
            desc: "Error opening popup window. This can happen if you are using IE or if popups are blocked in the browser."
        },
        tokenRenewalError: {
            code: "token_renewal_error",
            desc: "Token renewal operation failed due to timeout."
        },
        invalidIdToken: {
            code: "invalid_id_token",
            desc: "Invalid ID token format."
        },
        invalidStateError: {
            code: "invalid_state_error",
            desc: "Invalid state."
        },
        nonceMismatchError: {
            code: "nonce_mismatch_error",
            desc: "Nonce is not matching, Nonce received: "
        },
        loginProgressError: {
            code: "login_progress_error",
            desc: "Login_In_Progress: Error during login call - login is already in progress."
        },
        acquireTokenProgressError: {
            code: "acquiretoken_progress_error",
            desc: "AcquireToken_In_Progress: Error during login call - login is already in progress."
        },
        userCancelledError: {
            code: "user_cancelled",
            desc: "User cancelled the flow."
        },
        callbackError: {
            code: "callback_error",
            desc: "Error occurred in token received callback function."
        },
        userLoginRequiredError: {
            code: "user_login_error",
            desc: "User login is required."
        },
        userDoesNotExistError: {
            code: "user_non_existent",
            desc: "User object does not exist. Please call a login API."
        },
        clientInfoDecodingError: {
            code: "client_info_decoding_error",
            desc: "The client info could not be parsed/decoded correctly. Please review the trace to determine the root cause."
        },
        clientInfoNotPopulatedError: {
            code: "client_info_not_populated_error",
            desc: "The service did not populate client_info in the response, Please verify with the service team"
        },
        nullOrEmptyIdToken: {
            code: "null_or_empty_id_token",
            desc: "The idToken is null or empty. Please review the trace to determine the root cause."
        },
        idTokenNotParsed: {
            code: "id_token_parsing_error",
            desc: "ID token cannot be parsed. Please review stack trace to determine root cause."
        },
        tokenEncodingError: {
            code: "token_encoding_error",
            desc: "The token to be decoded is not encoded correctly."
        },
        invalidInteractionType: {
            code: "invalid_interaction_type",
            desc: "The interaction type passed to the handler was incorrect or unknown"
        },
        cacheParseError: {
            code: "cannot_parse_cache",
            desc: "The cached token key is not a valid JSON and cannot be parsed"
        },
        blockTokenRequestsInHiddenIframe: {
            code: "block_token_requests",
            desc: "Token calls are blocked in hidden iframes"
        }
    };
    var a = function(e) {
        function r(t, n) {
            var o = e.call(this, t, n) || this;
            return o.name = "ClientAuthError",
            Object.setPrototypeOf(o, r.prototype),
            o
        }
        return n.__extends(r, e),
        r.createEndpointResolutionError = function(e) {
            var n = t.ClientAuthErrorMessage.endpointResolutionError.desc;
            return e && !i.StringUtils.isEmpty(e) && (n += " Details: " + e),
            new r(t.ClientAuthErrorMessage.endpointResolutionError.code,n)
        }
        ,
        r.createMultipleMatchingTokensInCacheError = function(e) {
            return new r(t.ClientAuthErrorMessage.multipleMatchingTokens.code,"Cache error for scope " + e + ": " + t.ClientAuthErrorMessage.multipleMatchingTokens.desc + ".")
        }
        ,
        r.createMultipleAuthoritiesInCacheError = function(e) {
            return new r(t.ClientAuthErrorMessage.multipleCacheAuthorities.code,"Cache error for scope " + e + ": " + t.ClientAuthErrorMessage.multipleCacheAuthorities.desc + ".")
        }
        ,
        r.createPopupWindowError = function(e) {
            var n = t.ClientAuthErrorMessage.popUpWindowError.desc;
            return e && !i.StringUtils.isEmpty(e) && (n += " Details: " + e),
            new r(t.ClientAuthErrorMessage.popUpWindowError.code,n)
        }
        ,
        r.createTokenRenewalTimeoutError = function(e) {
            var n = "URL navigated to is " + e + ", " + t.ClientAuthErrorMessage.tokenRenewalError.desc;
            return new r(t.ClientAuthErrorMessage.tokenRenewalError.code,n)
        }
        ,
        r.createInvalidIdTokenError = function(e) {
            return new r(t.ClientAuthErrorMessage.invalidIdToken.code,t.ClientAuthErrorMessage.invalidIdToken.desc + " Given token: " + e)
        }
        ,
        r.createInvalidStateError = function(e, n) {
            return new r(t.ClientAuthErrorMessage.invalidStateError.code,t.ClientAuthErrorMessage.invalidStateError.desc + " " + e + ", state expected : " + n + ".")
        }
        ,
        r.createNonceMismatchError = function(e, n) {
            return new r(t.ClientAuthErrorMessage.nonceMismatchError.code,t.ClientAuthErrorMessage.nonceMismatchError.desc + " " + e + ", nonce expected : " + n + ".")
        }
        ,
        r.createLoginInProgressError = function() {
            return new r(t.ClientAuthErrorMessage.loginProgressError.code,t.ClientAuthErrorMessage.loginProgressError.desc)
        }
        ,
        r.createAcquireTokenInProgressError = function() {
            return new r(t.ClientAuthErrorMessage.acquireTokenProgressError.code,t.ClientAuthErrorMessage.acquireTokenProgressError.desc)
        }
        ,
        r.createUserCancelledError = function() {
            return new r(t.ClientAuthErrorMessage.userCancelledError.code,t.ClientAuthErrorMessage.userCancelledError.desc)
        }
        ,
        r.createErrorInCallbackFunction = function(e) {
            return new r(t.ClientAuthErrorMessage.callbackError.code,t.ClientAuthErrorMessage.callbackError.desc + " " + e + ".")
        }
        ,
        r.createUserLoginRequiredError = function() {
            return new r(t.ClientAuthErrorMessage.userLoginRequiredError.code,t.ClientAuthErrorMessage.userLoginRequiredError.desc)
        }
        ,
        r.createUserDoesNotExistError = function() {
            return new r(t.ClientAuthErrorMessage.userDoesNotExistError.code,t.ClientAuthErrorMessage.userDoesNotExistError.desc)
        }
        ,
        r.createClientInfoDecodingError = function(e) {
            return new r(t.ClientAuthErrorMessage.clientInfoDecodingError.code,t.ClientAuthErrorMessage.clientInfoDecodingError.desc + " Failed with error: " + e)
        }
        ,
        r.createClientInfoNotPopulatedError = function(e) {
            return new r(t.ClientAuthErrorMessage.clientInfoNotPopulatedError.code,t.ClientAuthErrorMessage.clientInfoNotPopulatedError.desc + " Failed with error: " + e)
        }
        ,
        r.createIdTokenNullOrEmptyError = function(e) {
            return new r(t.ClientAuthErrorMessage.nullOrEmptyIdToken.code,t.ClientAuthErrorMessage.nullOrEmptyIdToken.desc + " Raw ID Token Value: " + e)
        }
        ,
        r.createIdTokenParsingError = function(e) {
            return new r(t.ClientAuthErrorMessage.idTokenNotParsed.code,t.ClientAuthErrorMessage.idTokenNotParsed.desc + " Failed with error: " + e)
        }
        ,
        r.createTokenEncodingError = function(e) {
            return new r(t.ClientAuthErrorMessage.tokenEncodingError.code,t.ClientAuthErrorMessage.tokenEncodingError.desc + " Attempted to decode: " + e)
        }
        ,
        r.createInvalidInteractionTypeError = function() {
            return new r(t.ClientAuthErrorMessage.invalidInteractionType.code,t.ClientAuthErrorMessage.invalidInteractionType.desc)
        }
        ,
        r.createCacheParseError = function(e) {
            var n = "invalid key: " + e + ", " + t.ClientAuthErrorMessage.cacheParseError.desc;
            return new r(t.ClientAuthErrorMessage.cacheParseError.code,n)
        }
        ,
        r.createBlockTokenRequestsInHiddenIframeError = function() {
            return new r(t.ClientAuthErrorMessage.blockTokenRequestsInHiddenIframe.code,t.ClientAuthErrorMessage.blockTokenRequestsInHiddenIframe.desc)
        }
        ,
        r
    }(o.AuthError);
    t.ClientAuthError = a
}
, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = r(0);
    t.AuthErrorMessage = {
        unexpectedError: {
            code: "unexpected_error",
            desc: "Unexpected error in authentication."
        },
        noWindowObjectError: {
            code: "no_window_object",
            desc: "No window object available. Details:"
        }
    };
    var o = function(e) {
        function r(t, n) {
            var o = e.call(this, n) || this;
            return Object.setPrototypeOf(o, r.prototype),
            o.errorCode = t,
            o.errorMessage = n,
            o.name = "AuthError",
            o
        }
        return n.__extends(r, e),
        r.createUnexpectedError = function(e) {
            return new r(t.AuthErrorMessage.unexpectedError.code,t.AuthErrorMessage.unexpectedError.desc + ": " + e)
        }
        ,
        r.createNoWindowObjectError = function(e) {
            return new r(t.AuthErrorMessage.noWindowObjectError.code,t.AuthErrorMessage.noWindowObjectError.desc + " " + e)
        }
        ,
        r
    }(Error);
    t.AuthError = o
}
, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function() {
        function e() {}
        return e.isEmpty = function(e) {
            return void 0 === e || !e || 0 === e.length
        }
        ,
        e
    }();
    t.StringUtils = n
}
, function(e, t, r) {
    "use strict";
    r.r(t);
    var n, o, i, a, c = r(0), s = function() {
        function e() {}
        return e.createNewGuid = function() {
            var t = window.crypto;
            if (t && t.getRandomValues) {
                var r = new Uint8Array(16);
                return t.getRandomValues(r),
                r[6] |= 64,
                r[6] &= 79,
                r[8] |= 128,
                r[8] &= 191,
                e.decimalToHex(r[0]) + e.decimalToHex(r[1]) + e.decimalToHex(r[2]) + e.decimalToHex(r[3]) + "-" + e.decimalToHex(r[4]) + e.decimalToHex(r[5]) + "-" + e.decimalToHex(r[6]) + e.decimalToHex(r[7]) + "-" + e.decimalToHex(r[8]) + e.decimalToHex(r[9]) + "-" + e.decimalToHex(r[10]) + e.decimalToHex(r[11]) + e.decimalToHex(r[12]) + e.decimalToHex(r[13]) + e.decimalToHex(r[14]) + e.decimalToHex(r[15])
            }
            for (var n = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx", o = "0123456789abcdef", i = 0, a = "", c = 0; c < 36; c++)
                "-" !== n[c] && "4" !== n[c] && (i = 16 * Math.random() | 0),
                "x" === n[c] ? a += o[i] : "y" === n[c] ? (i &= 3,
                a += o[i |= 8]) : a += n[c];
            return a
        }
        ,
        e.isGuid = function(e) {
            return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(e)
        }
        ,
        e.decimalToHex = function(e) {
            for (var t = e.toString(16); t.length < 2; )
                t = "0" + t;
            return t
        }
        ,
        e.base64Encode = function(e) {
            return btoa(encodeURIComponent(e).replace(/%([0-9A-F]{2})/g, (function(e, t) {
                return String.fromCharCode(Number("0x" + t))
            }
            )))
        }
        ,
        e.base64Decode = function(e) {
            var t = e.replace(/-/g, "+").replace(/_/g, "/");
            switch (t.length % 4) {
            case 0:
                break;
            case 2:
                t += "==";
                break;
            case 3:
                t += "=";
                break;
            default:
                throw new Error("Invalid base64 string")
            }
            return decodeURIComponent(atob(t).split("").map((function(e) {
                return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2)
            }
            )).join(""))
        }
        ,
        e.deserialize = function(e) {
            var t, r = /\+/g, n = /([^&=]+)=([^&]*)/g, o = function(e) {
                return decodeURIComponent(e.replace(r, " "))
            }, i = {};
            for (t = n.exec(e); t; )
                i[o(t[1])] = o(t[2]),
                t = n.exec(e);
            return i
        }
        ,
        e
    }(), u = function() {
        function e() {}
        return Object.defineProperty(e, "claims", {
            get: function() {
                return "claims"
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e, "clientId", {
            get: function() {
                return "clientId"
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e, "adalIdToken", {
            get: function() {
                return "adal.idtoken"
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e, "cachePrefix", {
            get: function() {
                return "msal"
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e, "scopes", {
            get: function() {
                return "scopes"
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e, "no_account", {
            get: function() {
                return "NO_ACCOUNT"
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e, "consumersUtid", {
            get: function() {
                return "9188040d-6c67-4c5b-b112-36a304b66dad"
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e, "upn", {
            get: function() {
                return "upn"
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e, "prompt_select_account", {
            get: function() {
                return "&prompt=select_account"
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e, "prompt_none", {
            get: function() {
                return "&prompt=none"
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e, "prompt", {
            get: function() {
                return "prompt"
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e, "response_mode_fragment", {
            get: function() {
                return "&response_mode=fragment"
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e, "resourceDelimiter", {
            get: function() {
                return "|"
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e, "cacheDelimiter", {
            get: function() {
                return "."
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e, "popUpWidth", {
            get: function() {
                return this._popUpWidth
            },
            set: function(e) {
                this._popUpWidth = e
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e, "popUpHeight", {
            get: function() {
                return this._popUpHeight
            },
            set: function(e) {
                this._popUpHeight = e
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e, "login", {
            get: function() {
                return "LOGIN"
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e, "renewToken", {
            get: function() {
                return "RENEW_TOKEN"
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e, "unknown", {
            get: function() {
                return "UNKNOWN"
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e, "homeAccountIdentifier", {
            get: function() {
                return "homeAccountIdentifier"
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e, "common", {
            get: function() {
                return "common"
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e, "openidScope", {
            get: function() {
                return "openid"
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e, "profileScope", {
            get: function() {
                return "profile"
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e, "interactionTypeRedirect", {
            get: function() {
                return "redirectInteraction"
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e, "interactionTypePopup", {
            get: function() {
                return "popupInteraction"
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e, "inProgress", {
            get: function() {
                return "inProgress"
            },
            enumerable: !0,
            configurable: !0
        }),
        e._popUpWidth = 483,
        e._popUpHeight = 600,
        e
    }();
    !function(e) {
        e.SCOPE = "scope",
        e.ERROR = "error",
        e.ERROR_DESCRIPTION = "error_description",
        e.ACCESS_TOKEN = "access_token",
        e.ID_TOKEN = "id_token",
        e.EXPIRES_IN = "expires_in",
        e.SESSION_STATE = "session_state",
        e.CLIENT_INFO = "client_info"
    }(n || (n = {})),
    function(e) {
        e.AUTHORITY = "authority",
        e.ACQUIRE_TOKEN_ACCOUNT = "acquireTokenAccount",
        e.SESSION_STATE = "session.state",
        e.STATE_LOGIN = "state.login",
        e.STATE_ACQ_TOKEN = "state.acquireToken",
        e.STATE_RENEW = "state.renew",
        e.NONCE_IDTOKEN = "nonce.idtoken",
        e.LOGIN_REQUEST = "login.request",
        e.RENEW_STATUS = "token.renew.status",
        e.URL_HASH = "urlHash",
        e.ANGULAR_LOGIN_REQUEST = "angular.login.request",
        e.INTERACTION_STATUS = "interaction_status",
        e.REDIRECT_REQUEST = "redirect_request"
    }(o || (o = {})),
    function(e) {
        e.IDTOKEN = "idtoken",
        e.CLIENT_INFO = "client.info"
    }(i || (i = {})),
    function(e) {
        e.LOGIN_ERROR = "login.error",
        e.ERROR = "error",
        e.ERROR_DESC = "error.description"
    }(a || (a = {}));
    var l, d = {
        "login.windows.net": "login.windows.net",
        "login.chinacloudapi.cn": "login.chinacloudapi.cn",
        "login.cloudgovapi.us": "login.cloudgovapi.us",
        "login.microsoftonline.com": "login.microsoftonline.com",
        "login.microsoftonline.de": "login.microsoftonline.de",
        "login.microsoftonline.us": "login.microsoftonline.us"
    };
    !function(e) {
        e.ACCOUNT = "account",
        e.SID = "sid",
        e.LOGIN_HINT = "login_hint",
        e.ID_TOKEN = "id_token",
        e.DOMAIN_HINT = "domain_hint",
        e.ORGANIZATIONS = "organizations",
        e.CONSUMERS = "consumers",
        e.ACCOUNT_ID = "accountIdentifier",
        e.HOMEACCOUNT_ID = "homeAccountIdentifier",
        e.LOGIN_REQ = "login_req",
        e.DOMAIN_REQ = "domain_req"
    }(l || (l = {}));
    var h = [l.SID, l.LOGIN_HINT]
      , p = {
        LOGIN: "login",
        SELECT_ACCOUNT: "select_account",
        CONSENT: "consent",
        NONE: "none"
    };
    var f, g = {
        code: "unexpected_error",
        desc: "Unexpected error in authentication."
    }, m = {
        code: "no_window_object",
        desc: "No window object available. Details:"
    }, y = function(e) {
        function t(r, n) {
            var o = e.call(this, n) || this;
            return Object.setPrototypeOf(o, t.prototype),
            o.errorCode = r,
            o.errorMessage = n,
            o.name = "AuthError",
            o
        }
        return c.__extends(t, e),
        t.createUnexpectedError = function(e) {
            return new t(g.code,g.desc + ": " + e)
        }
        ,
        t.createNoWindowObjectError = function(e) {
            return new t(m.code,m.desc + " " + e)
        }
        ,
        t
    }(Error), I = function() {
        function e() {}
        return e.isEmpty = function(e) {
            return void 0 === e || !e || 0 === e.length
        }
        ,
        e
    }(), v = {
        code: "multiple_matching_tokens",
        desc: "The cache contains multiple tokens satisfying the requirements. Call AcquireToken again providing more requirements like authority."
    }, E = {
        code: "multiple_authorities",
        desc: "Multiple authorities found in the cache. Pass authority in the API overload."
    }, w = {
        code: "endpoints_resolution_error",
        desc: "Error: could not resolve endpoints. Please check network and try again."
    }, _ = {
        code: "popup_window_error",
        desc: "Error opening popup window. This can happen if you are using IE or if popups are blocked in the browser."
    }, T = {
        code: "token_renewal_error",
        desc: "Token renewal operation failed due to timeout."
    }, S = {
        code: "invalid_id_token",
        desc: "Invalid ID token format."
    }, C = {
        code: "invalid_state_error",
        desc: "Invalid state."
    }, A = {
        code: "nonce_mismatch_error",
        desc: "Nonce is not matching, Nonce received: "
    }, k = {
        code: "login_progress_error",
        desc: "Login_In_Progress: Error during login call - login is already in progress."
    }, b = {
        code: "acquiretoken_progress_error",
        desc: "AcquireToken_In_Progress: Error during login call - login is already in progress."
    }, O = {
        code: "user_cancelled",
        desc: "User cancelled the flow."
    }, R = {
        code: "callback_error",
        desc: "Error occurred in token received callback function."
    }, P = {
        code: "user_login_error",
        desc: "User login is required."
    }, N = {
        code: "user_non_existent",
        desc: "User object does not exist. Please call a login API."
    }, U = {
        code: "client_info_decoding_error",
        desc: "The client info could not be parsed/decoded correctly. Please review the trace to determine the root cause."
    }, x = {
        code: "client_info_not_populated_error",
        desc: "The service did not populate client_info in the response, Please verify with the service team"
    }, M = {
        code: "null_or_empty_id_token",
        desc: "The idToken is null or empty. Please review the trace to determine the root cause."
    }, D = {
        code: "id_token_parsing_error",
        desc: "ID token cannot be parsed. Please review stack trace to determine root cause."
    }, L = {
        code: "token_encoding_error",
        desc: "The token to be decoded is not encoded correctly."
    }, q = {
        code: "invalid_interaction_type",
        desc: "The interaction type passed to the handler was incorrect or unknown"
    }, H = {
        code: "cannot_parse_cache",
        desc: "The cached token key is not a valid JSON and cannot be parsed"
    }, j = {
        code: "block_token_requests",
        desc: "Token calls are blocked in hidden iframes"
    }, G = function(e) {
        function t(r, n) {
            var o = e.call(this, r, n) || this;
            return o.name = "ClientAuthError",
            Object.setPrototypeOf(o, t.prototype),
            o
        }
        return c.__extends(t, e),
        t.createEndpointResolutionError = function(e) {
            var r = w.desc;
            return e && !I.isEmpty(e) && (r += " Details: " + e),
            new t(w.code,r)
        }
        ,
        t.createMultipleMatchingTokensInCacheError = function(e) {
            return new t(v.code,"Cache error for scope " + e + ": " + v.desc + ".")
        }
        ,
        t.createMultipleAuthoritiesInCacheError = function(e) {
            return new t(E.code,"Cache error for scope " + e + ": " + E.desc + ".")
        }
        ,
        t.createPopupWindowError = function(e) {
            var r = _.desc;
            return e && !I.isEmpty(e) && (r += " Details: " + e),
            new t(_.code,r)
        }
        ,
        t.createTokenRenewalTimeoutError = function(e) {
            var r = "URL navigated to is " + e + ", " + T.desc;
            return new t(T.code,r)
        }
        ,
        t.createInvalidIdTokenError = function(e) {
            return new t(S.code,S.desc + " Given token: " + e)
        }
        ,
        t.createInvalidStateError = function(e, r) {
            return new t(C.code,C.desc + " " + e + ", state expected : " + r + ".")
        }
        ,
        t.createNonceMismatchError = function(e, r) {
            return new t(A.code,A.desc + " " + e + ", nonce expected : " + r + ".")
        }
        ,
        t.createLoginInProgressError = function() {
            return new t(k.code,k.desc)
        }
        ,
        t.createAcquireTokenInProgressError = function() {
            return new t(b.code,b.desc)
        }
        ,
        t.createUserCancelledError = function() {
            return new t(O.code,O.desc)
        }
        ,
        t.createErrorInCallbackFunction = function(e) {
            return new t(R.code,R.desc + " " + e + ".")
        }
        ,
        t.createUserLoginRequiredError = function() {
            return new t(P.code,P.desc)
        }
        ,
        t.createUserDoesNotExistError = function() {
            return new t(N.code,N.desc)
        }
        ,
        t.createClientInfoDecodingError = function(e) {
            return new t(U.code,U.desc + " Failed with error: " + e)
        }
        ,
        t.createClientInfoNotPopulatedError = function(e) {
            return new t(x.code,x.desc + " Failed with error: " + e)
        }
        ,
        t.createIdTokenNullOrEmptyError = function(e) {
            return new t(M.code,M.desc + " Raw ID Token Value: " + e)
        }
        ,
        t.createIdTokenParsingError = function(e) {
            return new t(D.code,D.desc + " Failed with error: " + e)
        }
        ,
        t.createTokenEncodingError = function(e) {
            return new t(L.code,L.desc + " Attempted to decode: " + e)
        }
        ,
        t.createInvalidInteractionTypeError = function() {
            return new t(q.code,q.desc)
        }
        ,
        t.createCacheParseError = function(e) {
            var r = "invalid key: " + e + ", " + H.desc;
            return new t(H.code,r)
        }
        ,
        t.createBlockTokenRequestsInHiddenIframeError = function() {
            return new t(j.code,j.desc)
        }
        ,
        t
    }(y), K = {
        code: "no_config_set",
        desc: "Configuration has not been set. Please call the UserAgentApplication constructor with a valid Configuration object."
    }, F = {
        code: "storage_not_supported",
        desc: "The value for the cacheLocation is not supported."
    }, W = {
        code: "no_redirect_callbacks",
        desc: "No redirect callbacks have been set. Please call handleRedirectCallback() with the appropriate function arguments before continuing. More information is available here: https://github.com/AzureAD/microsoft-authentication-library-for-js/wiki/MSAL-basics."
    }, Q = {
        code: "invalid_callback_object",
        desc: "The object passed for the callback was invalid. More information is available here: https://github.com/AzureAD/microsoft-authentication-library-for-js/wiki/MSAL-basics."
    }, V = {
        code: "scopes_required",
        desc: "Scopes are required to obtain an access token."
    }, z = {
        code: "empty_input_scopes_error",
        desc: "Scopes cannot be passed as empty array."
    }, J = {
        code: "nonarray_input_scopes_error",
        desc: "Scopes cannot be passed as non-array."
    }, B = {
        code: "clientid_input_scopes_error",
        desc: "Client ID can only be provided as a single scope."
    }, $ = {
        code: "invalid_prompt_value",
        desc: "Supported prompt values are 'login', 'select_account', 'consent' and 'none'"
    }, Z = {
        code: "invalid_authority_type",
        desc: "The given authority is not a valid type of authority supported by MSAL. Please see here for valid authorities: <insert URL here>."
    }, X = {
        code: "authority_uri_insecure",
        desc: "Authority URIs must use https."
    }, Y = {
        code: "authority_uri_invalid_path",
        desc: "Given authority URI is invalid."
    }, ee = {
        code: "unsupported_authority_validation",
        desc: "The authority validation is not supported for this authority type."
    }, te = {
        code: "b2c_authority_uri_invalid_path",
        desc: "The given URI for the B2C authority is invalid."
    }, re = {
        code: "claims_request_parsing_error",
        desc: "Could not parse the given claims request object."
    }, ne = {
        code: "empty_request_error",
        desc: "Request object is required."
    }, oe = {
        code: "invalid_guid_sent_as_correlationId",
        desc: "Please set the correlationId as a valid guid"
    }, ie = {
        code: "telemetry_config_error",
        desc: "Telemetry config is not configured with required values"
    }, ae = function(e) {
        function t(r, n) {
            var o = e.call(this, r, n) || this;
            return o.name = "ClientConfigurationError",
            Object.setPrototypeOf(o, t.prototype),
            o
        }
        return c.__extends(t, e),
        t.createNoSetConfigurationError = function() {
            return new t(K.code,"" + K.desc)
        }
        ,
        t.createStorageNotSupportedError = function(e) {
            return new t(F.code,F.desc + " Given location: " + e)
        }
        ,
        t.createRedirectCallbacksNotSetError = function() {
            return new t(W.code,W.desc)
        }
        ,
        t.createInvalidCallbackObjectError = function(e) {
            return new t(Q.code,Q.desc + " Given value for callback function: " + e)
        }
        ,
        t.createEmptyScopesArrayError = function(e) {
            return new t(z.code,z.desc + " Given value: " + e + ".")
        }
        ,
        t.createScopesNonArrayError = function(e) {
            return new t(J.code,J.desc + " Given value: " + e + ".")
        }
        ,
        t.createClientIdSingleScopeError = function(e) {
            return new t(B.code,B.desc + " Given value: " + e + ".")
        }
        ,
        t.createScopesRequiredError = function(e) {
            return new t(V.code,V.desc + " Given value: " + e)
        }
        ,
        t.createInvalidPromptError = function(e) {
            return new t($.code,$.desc + " Given value: " + e)
        }
        ,
        t.createClaimsRequestParsingError = function(e) {
            return new t(re.code,re.desc + " Given value: " + e)
        }
        ,
        t.createEmptyRequestError = function() {
            var e = ne;
            return new t(e.code,e.desc)
        }
        ,
        t.createInvalidCorrelationIdError = function() {
            return new t(oe.code,oe.desc)
        }
        ,
        t.createTelemetryConfigError = function(e) {
            var r = ie
              , n = r.code
              , o = r.desc
              , i = {
                applicationName: "string",
                applicationVersion: "string",
                telemetryEmitter: "function"
            };
            return new t(n,o + " mising values: " + Object.keys(i).reduce((function(t, r) {
                return e[r] ? t : t.concat([r + " (" + i[r] + ")"])
            }
            ), []).join(","))
        }
        ,
        t
    }(G), ce = function() {
        function e() {}
        return e.isIntersectingScopes = function(e, t) {
            e = this.convertToLowerCase(e);
            for (var r = 0; r < t.length; r++)
                if (e.indexOf(t[r].toLowerCase()) > -1)
                    return !0;
            return !1
        }
        ,
        e.containsScope = function(e, t) {
            return e = this.convertToLowerCase(e),
            t.every((function(t) {
                return e.indexOf(t.toString().toLowerCase()) >= 0
            }
            ))
        }
        ,
        e.convertToLowerCase = function(e) {
            return e.map((function(e) {
                return e.toLowerCase()
            }
            ))
        }
        ,
        e.removeElement = function(e, t) {
            return e.filter((function(e) {
                return e !== t
            }
            ))
        }
        ,
        e.parseScope = function(e) {
            var t = "";
            if (e)
                for (var r = 0; r < e.length; ++r)
                    t += r !== e.length - 1 ? e[r] + " " : e[r];
            return t
        }
        ,
        e.validateInputScope = function(e, t, r) {
            if (e) {
                if (!Array.isArray(e))
                    throw ae.createScopesNonArrayError(e);
                if (e.length < 1)
                    throw ae.createEmptyScopesArrayError(e.toString());
                if (e.indexOf(r) > -1 && e.length > 1)
                    throw ae.createClientIdSingleScopeError(e.toString())
            } else if (t)
                throw ae.createScopesRequiredError(e)
        }
        ,
        e.getScopeFromState = function(e) {
            if (e) {
                var t = e.indexOf("|");
                if (t > -1 && t + 1 < e.length)
                    return e.substring(t + 1)
            }
            return ""
        }
        ,
        e.appendScopes = function(e, t) {
            return e ? t ? e.concat(t) : e : null
        }
        ,
        e
    }(), se = function() {
        function e() {}
        return e.createNavigateUrl = function(e) {
            var t = this.createNavigationUrlString(e)
              , r = e.authorityInstance.AuthorizationEndpoint;
            return r.indexOf("?") < 0 ? r += "?" : r += "&",
            "" + r + t.join("&")
        }
        ,
        e.createNavigationUrlString = function(e) {
            var t = e.scopes;
            -1 === t.indexOf(e.clientId) && t.push(e.clientId);
            var r = [];
            return r.push("response_type=" + e.responseType),
            this.translateclientIdUsedInScope(t, e.clientId),
            r.push("scope=" + encodeURIComponent(ce.parseScope(t))),
            r.push("client_id=" + encodeURIComponent(e.clientId)),
            r.push("redirect_uri=" + encodeURIComponent(e.redirectUri)),
            r.push("state=" + encodeURIComponent(e.state)),
            r.push("nonce=" + encodeURIComponent(e.nonce)),
            r.push("client_info=1"),
            r.push("x-client-SKU=" + e.xClientSku),
            r.push("x-client-Ver=" + e.xClientVer),
            e.promptValue && r.push("prompt=" + encodeURIComponent(e.promptValue)),
            e.claimsValue && r.push("claims=" + encodeURIComponent(e.claimsValue)),
            e.queryParameters && r.push(e.queryParameters),
            e.extraQueryParameters && r.push(e.extraQueryParameters),
            r.push("client-request-id=" + encodeURIComponent(e.correlationId)),
            r
        }
        ,
        e.translateclientIdUsedInScope = function(e, t) {
            var r = e.indexOf(t);
            r >= 0 && (e.splice(r, 1),
            -1 === e.indexOf("openid") && e.push("openid"),
            -1 === e.indexOf("profile") && e.push("profile"))
        }
        ,
        e.getDefaultRedirectUri = function() {
            return window.location.href.split("?")[0].split("#")[0]
        }
        ,
        e.replaceTenantPath = function(e, t) {
            e = e.toLowerCase();
            var r = this.GetUrlComponents(e)
              , n = r.PathSegments;
            return !t || 0 === n.length || n[0] !== u.common && n[0] !== l.ORGANIZATIONS || (n[0] = t),
            this.constructAuthorityUriFromObject(r, n)
        }
        ,
        e.constructAuthorityUriFromObject = function(e, t) {
            return this.CanonicalizeUri(e.Protocol + "//" + e.HostNameAndPort + "/" + t.join("/"))
        }
        ,
        e.GetUrlComponents = function(e) {
            if (!e)
                throw "Url required";
            var t = RegExp("^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?")
              , r = e.match(t);
            if (!r || r.length < 6)
                throw "Valid url required";
            var n = {
                Protocol: r[1],
                HostNameAndPort: r[4],
                AbsolutePath: r[5]
            }
              , o = n.AbsolutePath.split("/");
            return o = o.filter((function(e) {
                return e && e.length > 0
            }
            )),
            n.PathSegments = o,
            n
        }
        ,
        e.CanonicalizeUri = function(t) {
            return t && (t = t.toLowerCase()),
            t && !e.endsWith(t, "/") && (t += "/"),
            t
        }
        ,
        e.endsWith = function(e, t) {
            return !(!e || !t) && -1 !== e.indexOf(t, e.length - t.length)
        }
        ,
        e.urlRemoveQueryStringParameter = function(e, t) {
            if (I.isEmpty(e))
                return e;
            var r = new RegExp("(\\&" + t + "=)[^&]+");
            return e = e.replace(r, ""),
            r = new RegExp("(" + t + "=)[^&]+&"),
            e = e.replace(r, ""),
            r = new RegExp("(" + t + "=)[^&]+"),
            e = e.replace(r, "")
        }
        ,
        e.getHashFromUrl = function(e) {
            var t = e.indexOf("#")
              , r = e.indexOf("#/");
            return r > -1 ? e.substring(r + 2) : t > -1 ? e.substring(t + 1) : e
        }
        ,
        e.urlContainsHash = function(t) {
            var r = e.deserializeHash(t);
            return r.hasOwnProperty(n.ERROR_DESCRIPTION) || r.hasOwnProperty(n.ERROR) || r.hasOwnProperty(n.ACCESS_TOKEN) || r.hasOwnProperty(n.ID_TOKEN)
        }
        ,
        e.deserializeHash = function(t) {
            var r = e.getHashFromUrl(t);
            return s.deserialize(r)
        }
        ,
        e.getHostFromUri = function(e) {
            var t = String(e).replace(/^(https?:)\/\//, "");
            return t = t.split("/")[0]
        }
        ,
        e
    }(), ue = function(e, t, r, n, o) {
        this.authority = se.CanonicalizeUri(e),
        this.clientId = t,
        this.scopes = r,
        this.homeAccountIdentifier = s.base64Encode(n) + "." + s.base64Encode(o)
    }, le = function(e, t, r, n) {
        this.accessToken = e,
        this.idToken = t,
        this.expiresIn = r,
        this.homeAccountIdentifier = n
    }, de = function() {
        function e(e, t, r, n, o, i, a) {
            this.authorityInstance = e,
            this.clientId = t,
            this.nonce = s.createNewGuid(),
            this.scopes = o ? o.slice() : [t],
            this.state = i,
            this.correlationId = a,
            this.xClientSku = "MSAL.JS",
            this.xClientVer = "1.2.1",
            this.responseType = r,
            this.redirectUri = n
        }
        return Object.defineProperty(e.prototype, "authority", {
            get: function() {
                return this.authorityInstance ? this.authorityInstance.CanonicalAuthority : null
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype.populateQueryParams = function(t, r, n) {
            var o = {};
            r && (r.prompt && (this.promptValue = r.prompt),
            r.claimsRequest && (this.claimsValue = r.claimsRequest),
            e.isSSOParam(r) && (o = this.constructUnifiedCacheQueryParameter(r, null))),
            n && (o = this.constructUnifiedCacheQueryParameter(null, n)),
            o = this.addHintParameters(t, o);
            var i = r.extraQueryParameters;
            this.queryParameters = e.generateQueryParametersString(o),
            this.extraQueryParameters = e.generateQueryParametersString(i)
        }
        ,
        e.prototype.constructUnifiedCacheQueryParameter = function(e, t) {
            var r, n, o = {};
            if (e)
                if (e.account) {
                    var i = e.account;
                    i.sid ? (r = l.SID,
                    n = i.sid) : i.userName && (r = l.LOGIN_HINT,
                    n = i.userName)
                } else
                    e.sid ? (r = l.SID,
                    n = e.sid) : e.loginHint && (r = l.LOGIN_HINT,
                    n = e.loginHint);
            else
                t && (t.hasOwnProperty(u.upn) ? (r = l.ID_TOKEN,
                n = t.upn) : (r = l.ORGANIZATIONS,
                n = null));
            return o = this.addSSOParameter(r, n),
            e && e.account && e.account.homeAccountIdentifier && (o = this.addSSOParameter(l.HOMEACCOUNT_ID, e.account.homeAccountIdentifier, o)),
            o
        }
        ,
        e.prototype.addHintParameters = function(e, t) {
            if (e && !t[l.SID]) {
                if (!t[l.LOGIN_HINT] && e.sid && this.promptValue === p.NONE)
                    t = this.addSSOParameter(l.SID, e.sid, t);
                else
                    !t[l.LOGIN_HINT] && e.userName && !I.isEmpty(e.userName) && (t = this.addSSOParameter(l.LOGIN_HINT, e.userName, t));
                !t[l.DOMAIN_REQ] && !t[l.LOGIN_REQ] && (t = this.addSSOParameter(l.HOMEACCOUNT_ID, e.homeAccountIdentifier, t))
            }
            return t
        }
        ,
        e.prototype.addSSOParameter = function(e, t, r) {
            if (r || (r = {}),
            !t)
                return r;
            switch (e) {
            case l.SID:
                r[l.SID] = t;
                break;
            case l.ID_TOKEN:
                r[l.LOGIN_HINT] = t,
                r[l.DOMAIN_HINT] = l.ORGANIZATIONS;
                break;
            case l.LOGIN_HINT:
                r[l.LOGIN_HINT] = t;
                break;
            case l.ORGANIZATIONS:
                r[l.DOMAIN_HINT] = l.ORGANIZATIONS;
                break;
            case l.CONSUMERS:
                r[l.DOMAIN_HINT] = l.CONSUMERS;
                break;
            case l.HOMEACCOUNT_ID:
                var n = t.split(".")
                  , o = s.base64Decode(n[0])
                  , i = s.base64Decode(n[1]);
                r[l.LOGIN_REQ] = o,
                r[l.DOMAIN_REQ] = i,
                i === u.consumersUtid ? r[l.DOMAIN_HINT] = l.CONSUMERS : r[l.DOMAIN_HINT] = l.ORGANIZATIONS;
                break;
            case l.LOGIN_REQ:
                r[l.LOGIN_REQ] = t;
                break;
            case l.DOMAIN_REQ:
                r[l.DOMAIN_REQ] = t
            }
            return r
        }
        ,
        e.generateQueryParametersString = function(e) {
            var t = null;
            return e && Object.keys(e).forEach((function(r) {
                null == t ? t = r + "=" + encodeURIComponent(e[r]) : t += "&" + r + "=" + encodeURIComponent(e[r])
            }
            )),
            t
        }
        ,
        e.isSSOParam = function(e) {
            return e && (e.account || e.sid || e.loginHint)
        }
        ,
        e
    }(), he = function() {
        function e(e) {
            if (!e || I.isEmpty(e))
                return this.uid = "",
                void (this.utid = "");
            try {
                var t = s.base64Decode(e)
                  , r = JSON.parse(t);
                r && (r.hasOwnProperty("uid") && (this.uid = r.uid),
                r.hasOwnProperty("utid") && (this.utid = r.utid))
            } catch (e) {
                throw G.createClientInfoDecodingError(e)
            }
        }
        return Object.defineProperty(e.prototype, "uid", {
            get: function() {
                return this._uid ? this._uid : ""
            },
            set: function(e) {
                this._uid = e
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "utid", {
            get: function() {
                return this._utid ? this._utid : ""
            },
            set: function(e) {
                this._utid = e
            },
            enumerable: !0,
            configurable: !0
        }),
        e
    }(), pe = function() {
        function e() {}
        return e.decodeJwt = function(e) {
            if (I.isEmpty(e))
                return null;
            var t = /^([^\.\s]*)\.([^\.\s]+)\.([^\.\s]*)$/.exec(e);
            return !t || t.length < 4 ? null : {
                header: t[1],
                JWSPayload: t[2],
                JWSSig: t[3]
            }
        }
        ,
        e.extractIdToken = function(e) {
            var t = this.decodeJwt(e);
            if (!t)
                return null;
            try {
                var r = t.JWSPayload
                  , n = s.base64Decode(r);
                return n ? JSON.parse(n) : null
            } catch (e) {}
            return null
        }
        ,
        e
    }(), fe = function(e) {
        if (I.isEmpty(e))
            throw G.createIdTokenNullOrEmptyError(e);
        try {
            this.rawIdToken = e,
            this.claims = pe.extractIdToken(e),
            this.claims && (this.claims.hasOwnProperty("iss") && (this.issuer = this.claims.iss),
            this.claims.hasOwnProperty("oid") && (this.objectId = this.claims.oid),
            this.claims.hasOwnProperty("sub") && (this.subject = this.claims.sub),
            this.claims.hasOwnProperty("tid") && (this.tenantId = this.claims.tid),
            this.claims.hasOwnProperty("ver") && (this.version = this.claims.ver),
            this.claims.hasOwnProperty("preferred_username") && (this.preferredName = this.claims.preferred_username),
            this.claims.hasOwnProperty("name") && (this.name = this.claims.name),
            this.claims.hasOwnProperty("nonce") && (this.nonce = this.claims.nonce),
            this.claims.hasOwnProperty("exp") && (this.expiration = this.claims.exp),
            this.claims.hasOwnProperty("home_oid") && (this.homeObjectId = this.claims.home_oid),
            this.claims.hasOwnProperty("sid") && (this.sid = this.claims.sid),
            this.claims.hasOwnProperty("cloud_instance_host_name") && (this.cloudInstance = this.claims.cloud_instance_host_name))
        } catch (e) {
            throw G.createIdTokenParsingError(e)
        }
    }, ge = function(e, t) {
        this.key = e,
        this.value = t
    }, me = function(e) {
        function t(t, r, n) {
            var o = e.call(this, r) || this;
            return o.clientId = t,
            o.rollbackEnabled = !0,
            o.migrateCacheEntries(n),
            o
        }
        return c.__extends(t, e),
        t.prototype.migrateCacheEntries = function(t) {
            var r = this
              , n = u.cachePrefix + "." + i.IDTOKEN
              , o = u.cachePrefix + "." + i.CLIENT_INFO
              , c = u.cachePrefix + "." + a.ERROR
              , s = u.cachePrefix + "." + a.ERROR_DESC
              , l = [e.prototype.getItem.call(this, n), e.prototype.getItem.call(this, o), e.prototype.getItem.call(this, c), e.prototype.getItem.call(this, s)];
            [i.IDTOKEN, i.CLIENT_INFO, a.ERROR, a.ERROR_DESC].forEach((function(e, n) {
                return r.duplicateCacheEntry(e, l[n], t)
            }
            ))
        }
        ,
        t.prototype.duplicateCacheEntry = function(e, t, r) {
            t && this.setItem(e, t, r)
        }
        ,
        t.prototype.generateCacheKey = function(e, t) {
            try {
                return JSON.parse(e),
                e
            } catch (r) {
                return 0 === e.indexOf("" + u.cachePrefix) || 0 === e.indexOf(u.adalIdToken) ? e : t ? u.cachePrefix + "." + this.clientId + "." + e : u.cachePrefix + "." + e
            }
        }
        ,
        t.prototype.setItem = function(t, r, n, o) {
            e.prototype.setItem.call(this, this.generateCacheKey(t, !0), r, n),
            this.rollbackEnabled && e.prototype.setItem.call(this, this.generateCacheKey(t, !1), r, n)
        }
        ,
        t.prototype.getItem = function(t, r) {
            return e.prototype.getItem.call(this, this.generateCacheKey(t, !0), r)
        }
        ,
        t.prototype.removeItem = function(t) {
            e.prototype.removeItem.call(this, this.generateCacheKey(t, !0)),
            this.rollbackEnabled && e.prototype.removeItem.call(this, this.generateCacheKey(t, !1))
        }
        ,
        t.prototype.resetCacheItems = function() {
            var t, r = window[this.cacheLocation];
            for (t in r)
                r.hasOwnProperty(t) && -1 !== t.indexOf(u.cachePrefix) && e.prototype.removeItem.call(this, t)
        }
        ,
        t.prototype.resetTempCacheItems = function(e) {
            var t, r = window[this.cacheLocation];
            for (t in r)
                if (!e || -1 !== t.indexOf(e)) {
                    var n = t.split(u.resourceDelimiter)
                      , i = n.length > 1 ? n[n.length - 1] : null;
                    i !== e || this.tokenRenewalInProgress(i) || (this.removeItem(t),
                    this.setItemCookie(t, "", -1),
                    this.clearMsalCookie(e))
                }
            this.removeItem(o.INTERACTION_STATUS),
            this.removeItem(o.REDIRECT_REQUEST)
        }
        ,
        t.prototype.setItemCookie = function(t, r, n) {
            e.prototype.setItemCookie.call(this, this.generateCacheKey(t, !0), r, n),
            this.rollbackEnabled && e.prototype.setItemCookie.call(this, this.generateCacheKey(t, !1), r, n)
        }
        ,
        t.prototype.getItemCookie = function(t) {
            return e.prototype.getItemCookie.call(this, this.generateCacheKey(t, !0))
        }
        ,
        t.prototype.getAllAccessTokens = function(e, t) {
            var r = this;
            return Object.keys(window[this.cacheLocation]).reduce((function(n, o) {
                if (o.match(e) && o.match(t) && o.match(u.scopes)) {
                    var i = r.getItem(o);
                    if (i)
                        try {
                            var a = JSON.parse(o)
                              , c = new ge(a,JSON.parse(i));
                            return n.concat([c])
                        } catch (e) {
                            throw G.createCacheParseError(o)
                        }
                }
                return n
            }
            ), [])
        }
        ,
        t.prototype.tokenRenewalInProgress = function(e) {
            var t = this.getItem(o.RENEW_STATUS + "|" + e);
            return !(!t || t !== u.inProgress)
        }
        ,
        t.prototype.clearMsalCookie = function(e) {
            this.clearItemCookie(o.NONCE_IDTOKEN + "|" + e),
            this.clearItemCookie(o.STATE_LOGIN + "|" + e),
            this.clearItemCookie(o.LOGIN_REQUEST + "|" + e),
            this.clearItemCookie(o.STATE_ACQ_TOKEN + "|" + e)
        }
        ,
        t.generateAcquireTokenAccountKey = function(e, t) {
            return "" + o.ACQUIRE_TOKEN_ACCOUNT + u.resourceDelimiter + e + u.resourceDelimiter + t
        }
        ,
        t.generateAuthorityKey = function(e) {
            return "" + o.AUTHORITY + u.resourceDelimiter + e
        }
        ,
        t
    }(function() {
        function e(e) {
            if (!window)
                throw y.createNoWindowObjectError("Browser storage class could not find window object");
            if (!(void 0 !== window[e] && null != window[e]))
                throw ae.createStorageNotSupportedError(e);
            this.cacheLocation = e
        }
        return e.prototype.setItem = function(e, t, r) {
            window[this.cacheLocation].setItem(e, t),
            r && this.setItemCookie(e, t)
        }
        ,
        e.prototype.getItem = function(e, t) {
            return t && this.getItemCookie(e) ? this.getItemCookie(e) : window[this.cacheLocation].getItem(e)
        }
        ,
        e.prototype.removeItem = function(e) {
            return window[this.cacheLocation].removeItem(e)
        }
        ,
        e.prototype.clear = function() {
            return window[this.cacheLocation].clear()
        }
        ,
        e.prototype.setItemCookie = function(e, t, r) {
            var n = e + "=" + t + ";path=/;";
            r && (n += "expires=" + this.getCookieExpirationTime(r) + ";");
            document.cookie = n
        }
        ,
        e.prototype.getItemCookie = function(e) {
            for (var t = e + "=", r = document.cookie.split(";"), n = 0; n < r.length; n++) {
                for (var o = r[n]; " " === o.charAt(0); )
                    o = o.substring(1);
                if (0 === o.indexOf(t))
                    return o.substring(t.length, o.length)
            }
            return ""
        }
        ,
        e.prototype.clearItemCookie = function(e) {
            this.setItemCookie(e, "", -1)
        }
        ,
        e.prototype.getCookieExpirationTime = function(e) {
            var t = new Date;
            return new Date(t.getTime() + 24 * e * 60 * 60 * 1e3).toUTCString()
        }
        ,
        e
    }()), ye = function() {
        function e(e, t, r, n, o, i, a) {
            this.accountIdentifier = e,
            this.homeAccountIdentifier = t,
            this.userName = r,
            this.name = n,
            this.idToken = o,
            this.idTokenClaims = o,
            this.sid = i,
            this.environment = a
        }
        return e.createAccount = function(t, r) {
            var n, o = t.objectId || t.subject, i = r ? r.uid : "", a = r ? r.utid : "";
            return I.isEmpty(i) || I.isEmpty(a) || (n = s.base64Encode(i) + "." + s.base64Encode(a)),
            new e(o,n,t.preferredName,t.name,t.claims,t.sid,t.issuer)
        }
        ,
        e.compareAccounts = function(e, t) {
            return !(!e || !t) && !(!e.homeAccountIdentifier || !t.homeAccountIdentifier || e.homeAccountIdentifier !== t.homeAccountIdentifier)
        }
        ,
        e
    }(), Ie = function() {
        function e() {}
        return e.isInIframe = function() {
            return window.parent !== window
        }
        ,
        e.isInPopup = function() {
            return !(!window.opener || window.opener === window)
        }
        ,
        e.monitorWindowForHash = function(t, r, n) {
            return new Promise((function(o, i) {
                var a = r / e.POLLING_INTERVAL_MS
                  , c = 0
                  , s = setInterval((function() {
                    if (t.closed)
                        return clearInterval(s),
                        void i(G.createUserCancelledError());
                    var e;
                    try {
                        e = t.location.href
                    } catch (e) {}
                    e && "about:blank" !== e && (c++,
                    se.urlContainsHash(e) ? (clearInterval(s),
                    o(t.location.hash)) : c > a && (clearInterval(s),
                    i(G.createTokenRenewalTimeoutError(n))))
                }
                ), e.POLLING_INTERVAL_MS)
            }
            ))
        }
        ,
        e.loadFrame = function(t, r, n, o) {
            return o.info("LoadFrame: " + r),
            new Promise((function(i, a) {
                setTimeout((function() {
                    var n = e.addHiddenIFrame(r, o);
                    n ? ("" !== n.src && "about:blank" !== n.src || (n.src = t,
                    o.infoPii("Frame Name : " + r + " Navigated to: " + t)),
                    i(n)) : a("Unable to load iframe with name: " + r)
                }
                ), n)
            }
            ))
        }
        ,
        e.addHiddenIFrame = function(e, t) {
            if (void 0 === e)
                return null;
            t.info("Add msal frame to document:" + e);
            var r = document.getElementById(e);
            if (!r) {
                if (document.createElement && document.documentElement && -1 === window.navigator.userAgent.indexOf("MSIE 5.0")) {
                    var n = document.createElement("iframe");
                    n.setAttribute("id", e),
                    n.style.visibility = "hidden",
                    n.style.position = "absolute",
                    n.style.width = n.style.height = "0",
                    n.style.border = "0",
                    n.setAttribute("sandbox", "allow-scripts allow-same-origin allow-forms"),
                    r = document.getElementsByTagName("body")[0].appendChild(n)
                } else
                    document.body && document.body.insertAdjacentHTML && document.body.insertAdjacentHTML("beforeend", "<iframe name='" + e + "' id='" + e + "' style='display:none'></iframe>");
                window.frames && window.frames[e] && (r = window.frames[e])
            }
            return r
        }
        ,
        e.removeHiddenIframe = function(e) {
            document.body !== e.parentNode && document.body.removeChild(e)
        }
        ,
        e.getIframeWithHash = function(e) {
            var t = document.getElementsByTagName("iframe");
            return Array.apply(null, Array(t.length)).map((function(e, r) {
                return t.item(r)
            }
            )).filter((function(t) {
                try {
                    return t.contentWindow.location.hash === e
                } catch (e) {
                    return !1
                }
            }
            ))[0]
        }
        ,
        e.getPopups = function() {
            return window.openedWindows || (window.openedWindows = []),
            window.openedWindows
        }
        ,
        e.getPopUpWithHash = function(t) {
            return e.getPopups().filter((function(e) {
                try {
                    return e.location.hash === t
                } catch (e) {
                    return !1
                }
            }
            ))[0]
        }
        ,
        e.trackPopup = function(t) {
            e.getPopups().push(t)
        }
        ,
        e.closePopups = function() {
            e.getPopups().forEach((function(e) {
                return e.close()
            }
            ))
        }
        ,
        e.blockReloadInHiddenIframes = function() {
            if (se.urlContainsHash(window.location.hash) && e.isInIframe())
                throw G.createBlockTokenRequestsInHiddenIframeError()
        }
        ,
        e.checkIfBackButtonIsPressed = function(e) {
            var t = e.getItem(o.REDIRECT_REQUEST);
            if (t && !se.urlContainsHash(window.location.hash)) {
                var r = t.split(u.resourceDelimiter)
                  , n = r.length > 1 ? r[r.length - 1] : null;
                e.resetTempCacheItems(n)
            }
        }
        ,
        e.POLLING_INTERVAL_MS = 50,
        e
    }(), ve = function() {
        function e() {}
        return e.parseExpiresIn = function(e) {
            return e || (e = "3599"),
            parseInt(e, 10)
        }
        ,
        e.now = function() {
            return Math.round((new Date).getTime() / 1e3)
        }
        ,
        e
    }(), Ee = function() {
        function e() {}
        return e.validateRequest = function(e, t, r, n, o) {
            if (!t && !e)
                throw ae.createEmptyRequestError();
            if (n == u.interactionTypeRedirect && !o)
                throw ae.createRedirectCallbacksNotSetError();
            var i, a;
            e && (i = t ? ce.appendScopes(e.scopes, e.extraScopesToConsent) : e.scopes,
            ce.validateInputScope(i, !t, r),
            this.validatePromptParameter(e.prompt),
            a = this.validateEQParameters(e.extraQueryParameters, e.claimsRequest),
            this.validateClaimsRequest(e.claimsRequest));
            var s = this.validateAndGenerateState(e && e.state)
              , l = this.validateAndGenerateCorrelationId(e && e.correlationId);
            return c.__assign({}, e, {
                extraQueryParameters: a,
                scopes: i,
                state: s,
                correlationId: l
            })
        }
        ,
        e.validatePromptParameter = function(e) {
            if (e && [p.LOGIN, p.SELECT_ACCOUNT, p.CONSENT, p.NONE].indexOf(e) < 0)
                throw ae.createInvalidPromptError(e)
        }
        ,
        e.validateEQParameters = function(e, t) {
            var r = c.__assign({}, e);
            return r ? (t && delete r[u.claims],
            h.forEach((function(e) {
                r[e] && delete r[e]
            }
            )),
            r) : null
        }
        ,
        e.validateClaimsRequest = function(e) {
            if (e)
                try {
                    JSON.parse(e)
                } catch (e) {
                    throw ae.createClaimsRequestParsingError(e)
                }
        }
        ,
        e.validateAndGenerateState = function(e) {
            return I.isEmpty(e) ? s.createNewGuid() : s.createNewGuid() + "|" + e
        }
        ,
        e.validateAndGenerateCorrelationId = function(e) {
            if (e && !s.isGuid(e))
                throw ae.createInvalidCorrelationIdError();
            return s.isGuid(e) ? e : s.createNewGuid()
        }
        ,
        e
    }(), we = function() {
        function e() {}
        return e.setResponseIdToken = function(e, t) {
            if (!e)
                return null;
            if (!t)
                return e;
            var r = Number(t.expiration);
            return r && !e.expiresOn && (e.expiresOn = new Date(1e3 * r)),
            c.__assign({}, e, {
                idToken: t,
                idTokenClaims: t.claims,
                uniqueId: t.objectId || t.subject,
                tenantId: t.tenantId
            })
        }
        ,
        e
    }(), _e = function() {
        function e() {}
        return e.prototype.sendRequestAsync = function(e, t, r) {
            var n = this;
            return new Promise((function(r, o) {
                var i = new XMLHttpRequest;
                if (i.open(t, e, !0),
                i.onload = function(e) {
                    var t;
                    (i.status < 200 || i.status >= 300) && o(n.handleError(i.responseText));
                    try {
                        t = JSON.parse(i.responseText)
                    } catch (e) {
                        o(n.handleError(i.responseText))
                    }
                    r(t)
                }
                ,
                i.onerror = function(e) {
                    o(i.status)
                }
                ,
                "GET" !== t)
                    throw "not implemented";
                i.send()
            }
            ))
        }
        ,
        e.prototype.handleError = function(e) {
            var t;
            try {
                if ((t = JSON.parse(e)).error)
                    return t.error;
                throw e
            } catch (t) {
                return e
            }
        }
        ,
        e
    }();
    !function(e) {
        e[e.Aad = 0] = "Aad",
        e[e.Adfs = 1] = "Adfs",
        e[e.B2C = 2] = "B2C"
    }(f || (f = {}));
    var Te, Se = function() {
        function e(e, t) {
            this.IsValidationEnabled = t,
            this.CanonicalAuthority = e,
            this.validateAsUri()
        }
        return Object.defineProperty(e.prototype, "Tenant", {
            get: function() {
                return this.CanonicalAuthorityUrlComponents.PathSegments[0]
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "AuthorizationEndpoint", {
            get: function() {
                return this.validateResolved(),
                this.tenantDiscoveryResponse.AuthorizationEndpoint.replace("{tenant}", this.Tenant)
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "EndSessionEndpoint", {
            get: function() {
                return this.validateResolved(),
                this.tenantDiscoveryResponse.EndSessionEndpoint.replace("{tenant}", this.Tenant)
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "SelfSignedJwtAudience", {
            get: function() {
                return this.validateResolved(),
                this.tenantDiscoveryResponse.Issuer.replace("{tenant}", this.Tenant)
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype.validateResolved = function() {
            if (!this.tenantDiscoveryResponse)
                throw "Please call ResolveEndpointsAsync first"
        }
        ,
        Object.defineProperty(e.prototype, "CanonicalAuthority", {
            get: function() {
                return this.canonicalAuthority
            },
            set: function(e) {
                this.canonicalAuthority = se.CanonicalizeUri(e),
                this.canonicalAuthorityUrlComponents = null
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "CanonicalAuthorityUrlComponents", {
            get: function() {
                return this.canonicalAuthorityUrlComponents || (this.canonicalAuthorityUrlComponents = se.GetUrlComponents(this.CanonicalAuthority)),
                this.canonicalAuthorityUrlComponents
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "DefaultOpenIdConfigurationEndpoint", {
            get: function() {
                return this.CanonicalAuthority + "v2.0/.well-known/openid-configuration"
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype.validateAsUri = function() {
            var e;
            try {
                e = this.CanonicalAuthorityUrlComponents
            } catch (e) {
                throw Z
            }
            if (!e.Protocol || "https:" !== e.Protocol.toLowerCase())
                throw X;
            if (!e.PathSegments || e.PathSegments.length < 1)
                throw Y
        }
        ,
        e.prototype.DiscoverEndpoints = function(e) {
            return (new _e).sendRequestAsync(e, "GET", !0).then((function(e) {
                return {
                    AuthorizationEndpoint: e.authorization_endpoint,
                    EndSessionEndpoint: e.end_session_endpoint,
                    Issuer: e.issuer
                }
            }
            ))
        }
        ,
        e.prototype.resolveEndpointsAsync = function() {
            return c.__awaiter(this, void 0, void 0, (function() {
                var e, t;
                return c.__generator(this, (function(r) {
                    switch (r.label) {
                    case 0:
                        return [4, this.GetOpenIdConfigurationEndpointAsync()];
                    case 1:
                        return e = r.sent(),
                        t = this,
                        [4, this.DiscoverEndpoints(e)];
                    case 2:
                        return t.tenantDiscoveryResponse = r.sent(),
                        [2, this]
                    }
                }
                ))
            }
            ))
        }
        ,
        e
    }(), Ce = function(e) {
        function t(t, r) {
            return e.call(this, t, r) || this
        }
        return c.__extends(t, e),
        Object.defineProperty(t.prototype, "AadInstanceDiscoveryEndpointUrl", {
            get: function() {
                return t.AadInstanceDiscoveryEndpoint + "?api-version=1.0&authorization_endpoint=" + this.CanonicalAuthority + "oauth2/v2.0/authorize"
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "AuthorityType", {
            get: function() {
                return f.Aad
            },
            enumerable: !0,
            configurable: !0
        }),
        t.prototype.GetOpenIdConfigurationEndpointAsync = function() {
            return c.__awaiter(this, void 0, void 0, (function() {
                return c.__generator(this, (function(e) {
                    return !this.IsValidationEnabled || this.IsInTrustedHostList(this.CanonicalAuthorityUrlComponents.HostNameAndPort) ? [2, this.DefaultOpenIdConfigurationEndpoint] : [2, (new _e).sendRequestAsync(this.AadInstanceDiscoveryEndpointUrl, "GET", !0).then((function(e) {
                        return e.tenant_discovery_endpoint
                    }
                    ))]
                }
                ))
            }
            ))
        }
        ,
        t.prototype.IsInTrustedHostList = function(e) {
            return d[e.toLowerCase()]
        }
        ,
        t.AadInstanceDiscoveryEndpoint = "https://login.microsoftonline.com/common/discovery/instance",
        t
    }(Se), Ae = function(e) {
        function t(t, r) {
            var n = e.call(this, t, r) || this
              , o = se.GetUrlComponents(t)
              , i = o.PathSegments;
            if (i.length < 3)
                throw te;
            return n.CanonicalAuthority = "https://" + o.HostNameAndPort + "/" + i[0] + "/" + i[1] + "/" + i[2] + "/",
            n
        }
        return c.__extends(t, e),
        Object.defineProperty(t.prototype, "AuthorityType", {
            get: function() {
                return f.B2C
            },
            enumerable: !0,
            configurable: !0
        }),
        t.prototype.GetOpenIdConfigurationEndpointAsync = function() {
            return c.__awaiter(this, void 0, void 0, (function() {
                return c.__generator(this, (function(e) {
                    if (!this.IsValidationEnabled || this.IsInTrustedHostList(this.CanonicalAuthorityUrlComponents.HostNameAndPort))
                        return [2, this.DefaultOpenIdConfigurationEndpoint];
                    throw ee
                }
                ))
            }
            ))
        }
        ,
        t.B2C_PREFIX = "tfp",
        t
    }(Ce), ke = function() {
        function e() {}
        return e.DetectAuthorityFromUrl = function(e) {
            switch (e = se.CanonicalizeUri(e),
            se.GetUrlComponents(e).PathSegments[0]) {
            case "tfp":
                return f.B2C;
            default:
                return f.Aad
            }
        }
        ,
        e.CreateInstance = function(t, r) {
            if (I.isEmpty(t))
                return null;
            switch (e.DetectAuthorityFromUrl(t)) {
            case f.B2C:
                return new Ae(t,r);
            case f.Aad:
                return new Ce(t,r);
            default:
                throw Z
            }
        }
        ,
        e
    }();
    !function(e) {
        e[e.Error = 0] = "Error",
        e[e.Warning = 1] = "Warning",
        e[e.Info = 2] = "Info",
        e[e.Verbose = 3] = "Verbose"
    }(Te || (Te = {}));
    var be = function() {
        function e(e, t) {
            void 0 === t && (t = {}),
            this.level = Te.Info;
            var r = t.correlationId
              , n = void 0 === r ? "" : r
              , o = t.level
              , i = void 0 === o ? Te.Info : o
              , a = t.piiLoggingEnabled
              , c = void 0 !== a && a;
            this.localCallback = e,
            this.correlationId = n,
            this.level = i,
            this.piiLoggingEnabled = c
        }
        return e.prototype.logMessage = function(e, t, r) {
            if (!(e > this.level || !this.piiLoggingEnabled && r)) {
                var n, o = (new Date).toUTCString();
                n = I.isEmpty(this.correlationId) ? o + ":1.2.1-" + Te[e] + " " + t : o + ":" + this.correlationId + "-1.2.1-" + Te[e] + " " + t,
                this.executeCallback(e, n, r)
            }
        }
        ,
        e.prototype.executeCallback = function(e, t, r) {
            this.localCallback && this.localCallback(e, t, r)
        }
        ,
        e.prototype.error = function(e) {
            this.logMessage(Te.Error, e, !1)
        }
        ,
        e.prototype.errorPii = function(e) {
            this.logMessage(Te.Error, e, !0)
        }
        ,
        e.prototype.warning = function(e) {
            this.logMessage(Te.Warning, e, !1)
        }
        ,
        e.prototype.warningPii = function(e) {
            this.logMessage(Te.Warning, e, !0)
        }
        ,
        e.prototype.info = function(e) {
            this.logMessage(Te.Info, e, !1)
        }
        ,
        e.prototype.infoPii = function(e) {
            this.logMessage(Te.Info, e, !0)
        }
        ,
        e.prototype.verbose = function(e) {
            this.logMessage(Te.Verbose, e, !1)
        }
        ,
        e.prototype.verbosePii = function(e) {
            this.logMessage(Te.Verbose, e, !0)
        }
        ,
        e.prototype.isPiiLoggingEnabled = function() {
            return this.piiLoggingEnabled
        }
        ,
        e
    }()
      , Oe = {
        clientId: "",
        authority: null,
        validateAuthority: !0,
        redirectUri: function() {
            return se.getDefaultRedirectUri()
        },
        postLogoutRedirectUri: function() {
            return se.getDefaultRedirectUri()
        },
        navigateToLoginRequestUrl: !0
    }
      , Re = {
        cacheLocation: "sessionStorage",
        storeAuthStateInCookie: !1
    }
      , Pe = {
        logger: new be(null),
        loadFrameTimeout: 6e3,
        tokenRenewalOffsetSeconds: 300,
        navigateFrameWait: 500
    }
      , Ne = {
        isAngular: !1,
        unprotectedResources: new Array,
        protectedResourceMap: new Map
    };
    var Ue = {
        code: "server_unavailable",
        desc: "Server is temporarily unavailable."
    }
      , xe = {
        code: "unknown_server_error"
    }
      , Me = function(e) {
        function t(r, n) {
            var o = e.call(this, r, n) || this;
            return o.name = "ServerError",
            Object.setPrototypeOf(o, t.prototype),
            o
        }
        return c.__extends(t, e),
        t.createServerUnavailableError = function() {
            return new t(Ue.code,Ue.desc)
        }
        ,
        t.createUnknownServerError = function(e) {
            return new t(xe.code,e)
        }
        ,
        t
    }(y)
      , De = {
        code: "interaction_required"
    }
      , Le = {
        code: "consent_required"
    }
      , qe = {
        code: "login_required"
    }
      , He = function(e) {
        function t(r, n) {
            var o = e.call(this, r, n) || this;
            return o.name = "InteractionRequiredAuthError",
            Object.setPrototypeOf(o, t.prototype),
            o
        }
        return c.__extends(t, e),
        t.isInteractionRequiredError = function(e) {
            var t = [De.code, Le.code, qe.code];
            return e && t.indexOf(e) > -1
        }
        ,
        t.createLoginRequiredAuthError = function(e) {
            return new t(qe.code,e)
        }
        ,
        t.createInteractionRequiredAuthError = function(e) {
            return new t(De.code,e)
        }
        ,
        t.createConsentRequiredAuthError = function(e) {
            return new t(Le.code,e)
        }
        ,
        t
    }(Me);
    function je(e) {
        return {
            uniqueId: "",
            tenantId: "",
            tokenType: "",
            idToken: null,
            idTokenClaims: null,
            accessToken: "",
            scopes: null,
            expiresOn: null,
            account: null,
            accountState: e,
            fromCache: !1
        }
    }
    var Ge = "Microsoft.MSAL.correlation_id"
      , Ke = "Microsoft_MSAL_cache_event_count"
      , Fe = "Microsoft_MSAL_http_event_count"
      , We = "Microsoft_MSAL_ui_event_count"
      , Qe = function(e) {
        return "msal." + (e || "")
    }
      , Ve = function(e) {
        function t(t, r, n, o) {
            var i = e.call(this, Qe("default_event"), r) || this;
            return i.event[Qe("client_id")] = n,
            i.event[Qe("sdk_plaform")] = t.sdk,
            i.event[Qe("sdk_version")] = t.sdkVersion,
            i.event[Qe("application_name")] = t.applicationName,
            i.event[Qe("application_version")] = t.applicationVersion,
            i.event["" + We] = i.getEventCount(Qe("ui_event"), o),
            i.event["" + Fe] = i.getEventCount(Qe("http_event"), o),
            i.event["" + Ke] = i.getEventCount(Qe("cache_event"), o),
            i
        }
        return c.__extends(t, e),
        t.prototype.getEventCount = function(e, t) {
            return t[e] ? t[e] : 0
        }
        ,
        t
    }(function() {
        function e(e, t) {
            var r;
            this.startTimestamp = Date.now(),
            this.eventId = s.createNewGuid(),
            this.event = ((r = {})[Qe("event_name")] = e,
            r[Qe("start_time")] = this.startTimestamp,
            r[Qe("elapsed_time")] = -1,
            r["" + Ge] = t,
            r)
        }
        return e.prototype.setElapsedTime = function(e) {
            this.event[Qe("elapsed_time")] = e
        }
        ,
        e.prototype.stop = function() {
            this.setElapsedTime(+Date.now() - +this.startTimestamp)
        }
        ,
        Object.defineProperty(e.prototype, "telemetryCorrelationId", {
            get: function() {
                return this.event["" + Ge]
            },
            set: function(e) {
                this.event["" + Ge] = e
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "eventName", {
            get: function() {
                return this.event[Qe("event_name")]
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype.get = function() {
            return c.__assign({}, this.event, {
                eventId: this.eventId
            })
        }
        ,
        e
    }())
      , ze = function(e) {
        return e.telemetryCorrelationId + "-" + e.eventId + "-" + e.eventName
    }
      , Je = function() {
        function e(e, t) {
            this.completedEvents = {},
            this.inProgressEvents = {},
            this.eventCountByCorrelationId = {},
            this.onlySendFailureTelemetry = !1,
            this.telemetryPlatform = e.platform,
            this.clientId = e.clientId,
            this.onlySendFailureTelemetry = e.onlySendFailureTelemetry,
            this.telemetryEmitter = t
        }
        return e.prototype.startEvent = function(e) {
            if (this.telemetryEmitter) {
                var t = ze(e);
                this.inProgressEvents[t] = e
            }
        }
        ,
        e.prototype.stopEvent = function(e) {
            var t = ze(e);
            if (this.telemetryEmitter && this.inProgressEvents[t]) {
                e.stop(),
                this.incrementEventCount(e);
                var r = this.completedEvents[e.telemetryCorrelationId];
                this.completedEvents[e.telemetryCorrelationId] = (r || []).concat([e]),
                delete this.inProgressEvents[t]
            }
        }
        ,
        e.prototype.flush = function(e) {
            var t = this;
            if (this.telemetryEmitter && this.completedEvents[e]) {
                var r = this.getOrphanedEvents(e);
                r.forEach((function(e) {
                    return t.incrementEventCount(e)
                }
                ));
                var n = this.completedEvents[e].concat(r);
                delete this.completedEvents[e];
                var o = this.eventCountByCorrelationId[e];
                if (delete this.eventCountByCorrelationId[e],
                n && n.length) {
                    var i = new Ve(this.telemetryPlatform,e,this.clientId,o)
                      , a = n.concat([i]);
                    this.telemetryEmitter(a.map((function(e) {
                        return e.get()
                    }
                    )))
                }
            }
        }
        ,
        e.prototype.incrementEventCount = function(e) {
            var t, r = e.eventName, n = this.eventCountByCorrelationId[e.telemetryCorrelationId];
            n ? n[r] = n[r] ? n[r] + 1 : 1 : this.eventCountByCorrelationId[e.telemetryCorrelationId] = ((t = {})[r] = 1,
            t)
        }
        ,
        e.prototype.getOrphanedEvents = function(e) {
            var t = this;
            return Object.keys(this.inProgressEvents).reduce((function(r, n) {
                if (-1 !== n.indexOf(e)) {
                    var o = t.inProgressEvents[n];
                    return delete t.inProgressEvents[n],
                    r.concat([o])
                }
                return r
            }
            ), [])
        }
        ,
        e
    }()
      , Be = "id_token"
      , $e = "token"
      , Ze = "id_token token"
      , Xe = function() {
        function e(e) {
            var t, r, n, o, i, a, s, u;
            this.authResponseCallback = null,
            this.tokenReceivedCallback = null,
            this.errorReceivedCallback = null,
            this.config = (r = (t = e).auth,
            n = t.cache,
            o = void 0 === n ? {} : n,
            i = t.system,
            a = void 0 === i ? {} : i,
            s = t.framework,
            u = void 0 === s ? {} : s,
            {
                auth: c.__assign({}, Oe, r),
                cache: c.__assign({}, Re, o),
                system: c.__assign({}, Pe, a),
                framework: c.__assign({}, Ne, u)
            }),
            this.redirectCallbacksSet = !1,
            this.logger = this.config.system.logger,
            this.clientId = this.config.auth.clientId,
            this.inCookie = this.config.cache.storeAuthStateInCookie,
            this.telemetryManager = this.getTelemetryManagerFromConfig(this.config.system.telemetry, this.clientId),
            this.authority = this.config.auth.authority || "https://login.microsoftonline.com/common",
            this.cacheStorage = new me(this.clientId,this.config.cache.cacheLocation,this.inCookie),
            window.activeRenewals = {},
            window.renewStates = [],
            window.callbackMappedToRenewStates = {},
            window.promiseMappedToRenewStates = {},
            window.msal = this;
            var l = window.location.hash
              , d = se.urlContainsHash(l);
            Ie.checkIfBackButtonIsPressed(this.cacheStorage),
            !d || Ie.isInIframe() || Ie.isInPopup() || this.handleAuthenticationResponse(l)
        }
        return Object.defineProperty(e.prototype, "authority", {
            get: function() {
                return this.authorityInstance.CanonicalAuthority
            },
            set: function(e) {
                this.authorityInstance = ke.CreateInstance(e, this.config.auth.validateAuthority)
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype.getAuthorityInstance = function() {
            return this.authorityInstance
        }
        ,
        e.prototype.handleRedirectCallback = function(e, t) {
            if (!e)
                throw this.redirectCallbacksSet = !1,
                ae.createInvalidCallbackObjectError(e);
            t ? (this.tokenReceivedCallback = e,
            this.errorReceivedCallback = t,
            this.logger.warning("This overload for callback is deprecated - please change the format of the callbacks to a single callback as shown: (err: AuthError, response: AuthResponse).")) : this.authResponseCallback = e,
            this.redirectCallbacksSet = !0;
            var r = this.cacheStorage.getItem(o.URL_HASH);
            r && this.processCallBack(r, null)
        }
        ,
        e.prototype.urlContainsHash = function(e) {
            return se.urlContainsHash(e)
        }
        ,
        e.prototype.authResponseHandler = function(e, t, r) {
            if (e === u.interactionTypeRedirect)
                this.errorReceivedCallback ? this.tokenReceivedCallback(t) : this.authResponseCallback && this.authResponseCallback(null, t);
            else {
                if (e !== u.interactionTypePopup)
                    throw G.createInvalidInteractionTypeError();
                r(t)
            }
        }
        ,
        e.prototype.authErrorHandler = function(e, t, r, n) {
            if (this.cacheStorage.removeItem(o.INTERACTION_STATUS),
            e === u.interactionTypeRedirect)
                this.errorReceivedCallback ? this.errorReceivedCallback(t, r.accountState) : this.authResponseCallback(t, r);
            else {
                if (e !== u.interactionTypePopup)
                    throw G.createInvalidInteractionTypeError();
                n(t)
            }
        }
        ,
        e.prototype.loginRedirect = function(e) {
            var t = Ee.validateRequest(e, !0, this.clientId, u.interactionTypeRedirect, this.redirectCallbacksSet);
            this.acquireTokenInteractive(u.interactionTypeRedirect, !0, t, null, null)
        }
        ,
        e.prototype.acquireTokenRedirect = function(e) {
            var t = Ee.validateRequest(e, !1, this.clientId, u.interactionTypeRedirect, this.redirectCallbacksSet);
            this.acquireTokenInteractive(u.interactionTypeRedirect, !1, t, null, null)
        }
        ,
        e.prototype.loginPopup = function(e) {
            var t = this
              , r = Ee.validateRequest(e, !0, this.clientId, u.interactionTypePopup);
            return new Promise((function(e, n) {
                t.acquireTokenInteractive(u.interactionTypePopup, !0, r, e, n)
            }
            )).catch((function(e) {
                throw t.cacheStorage.resetTempCacheItems(r.state),
                e
            }
            ))
        }
        ,
        e.prototype.acquireTokenPopup = function(e) {
            var t = this
              , r = Ee.validateRequest(e, !1, this.clientId, u.interactionTypePopup);
            return new Promise((function(e, n) {
                t.acquireTokenInteractive(u.interactionTypePopup, !1, r, e, n)
            }
            )).catch((function(e) {
                throw t.cacheStorage.resetTempCacheItems(r.state),
                e
            }
            ))
        }
        ,
        e.prototype.acquireTokenInteractive = function(e, t, r, n, i) {
            var a = this;
            Ie.blockReloadInHiddenIframes();
            var c = this.cacheStorage.getItem(o.INTERACTION_STATUS);
            if (e === u.interactionTypeRedirect && this.cacheStorage.setItem(o.REDIRECT_REQUEST, "" + u.inProgress + u.resourceDelimiter + r.state),
            c === u.inProgress) {
                var s = t ? G.createLoginInProgressError() : G.createAcquireTokenInProgressError()
                  , l = je(this.getAccountState(r.state));
                return this.cacheStorage.resetTempCacheItems(r.state),
                void this.authErrorHandler(e, s, l, i)
            }
            var d = r && r.account && !t ? r.account : this.getAccount();
            if (d || de.isSSOParam(r))
                this.acquireTokenHelper(d, e, t, r, n, i);
            else {
                if (!t) {
                    this.logger.info("User login is required");
                    l = je(this.getAccountState(r.state));
                    return this.cacheStorage.resetTempCacheItems(r.state),
                    void this.authErrorHandler(e, G.createUserLoginRequiredError(), l, i)
                }
                if (this.extractADALIdToken() && !r.scopes) {
                    this.logger.info("ADAL's idToken exists. Extracting login information from ADAL's idToken ");
                    var h = this.buildIDTokenRequest(r);
                    this.silentLogin = !0,
                    this.acquireTokenSilent(h).then((function(t) {
                        a.silentLogin = !1,
                        a.logger.info("Unified cache call is successful"),
                        a.authResponseHandler(e, t, n)
                    }
                    ), (function(o) {
                        a.silentLogin = !1,
                        a.logger.error("Error occurred during unified cache ATS: " + o),
                        a.acquireTokenHelper(null, e, t, r, n, i)
                    }
                    ))
                } else
                    this.acquireTokenHelper(null, e, t, r, n, i)
            }
        }
        ,
        e.prototype.acquireTokenHelper = function(e, t, r, n, i, s) {
            var l = this;
            this.cacheStorage.setItem(o.INTERACTION_STATUS, u.inProgress);
            var d, h, p = n.scopes ? n.scopes.join(" ").toLowerCase() : this.clientId.toLowerCase(), f = n && n.authority ? ke.CreateInstance(n.authority, this.config.auth.validateAuthority) : this.authorityInstance;
            if (t === u.interactionTypePopup) {
                try {
                    h = this.openPopup("about:blank", "msal", u.popUpWidth, u.popUpHeight),
                    Ie.trackPopup(h)
                } catch (e) {
                    this.logger.info(_.code + ":" + _.desc),
                    this.cacheStorage.setItem(a.ERROR, _.code),
                    this.cacheStorage.setItem(a.ERROR_DESC, _.desc),
                    s && s(G.createPopupWindowError())
                }
                if (!h)
                    return
            }
            f.resolveEndpointsAsync().then((function() {
                return c.__awaiter(l, void 0, void 0, (function() {
                    var a, l, g, m, y;
                    return c.__generator(this, (function(c) {
                        switch (c.label) {
                        case 0:
                            if (a = r ? Be : this.getTokenType(e, n.scopes, !1),
                            r && ((l = this.cacheStorage.getItem("" + o.ANGULAR_LOGIN_REQUEST + u.resourceDelimiter + n.state)) && "" !== l ? this.cacheStorage.setItem("" + o.ANGULAR_LOGIN_REQUEST + u.resourceDelimiter + n.state, "") : l = window.location.href),
                            d = new de(f,this.clientId,a,this.getRedirectUri(n && n.redirectUri),n.scopes,n.state,n.correlationId),
                            this.updateCacheEntries(d, e, l),
                            d.populateQueryParams(e, n),
                            g = se.createNavigateUrl(d) + u.response_mode_fragment,
                            t === u.interactionTypeRedirect)
                                r || this.cacheStorage.setItem("" + o.STATE_ACQ_TOKEN + u.resourceDelimiter + n.state, d.state, this.inCookie);
                            else {
                                if (t !== u.interactionTypePopup)
                                    throw G.createInvalidInteractionTypeError();
                                window.renewStates.push(d.state),
                                window.requestType = r ? u.login : u.renewToken,
                                this.registerCallback(d.state, p, i, s)
                            }
                            if (this.navigateWindow(g, h),
                            !h)
                                return [3, 4];
                            c.label = 1;
                        case 1:
                            return c.trys.push([1, 3, , 4]),
                            [4, Ie.monitorWindowForHash(h, this.config.system.loadFrameTimeout, g)];
                        case 2:
                            return m = c.sent(),
                            this.handleAuthenticationResponse(m),
                            this.cacheStorage.removeItem(o.INTERACTION_STATUS),
                            this.logger.info("Closing popup window"),
                            this.config.framework.isAngular && (this.broadcast("msal:popUpHashChanged", m),
                            Ie.closePopups()),
                            [3, 4];
                        case 3:
                            return y = c.sent(),
                            s && s(y),
                            this.config.framework.isAngular ? this.broadcast("msal:popUpClosed", y.errorCode + u.resourceDelimiter + y.errorMessage) : (this.cacheStorage.removeItem(o.INTERACTION_STATUS),
                            h.close()),
                            [3, 4];
                        case 4:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            )).catch((function(e) {
                l.logger.warning("could not resolve endpoints"),
                l.cacheStorage.resetTempCacheItems(n.state),
                l.authErrorHandler(t, G.createEndpointResolutionError(e.toString), je(n.state), s),
                h && h.close()
            }
            ))
        }
        ,
        e.prototype.acquireTokenSilent = function(e) {
            var t = this
              , r = Ee.validateRequest(e, !1, this.clientId);
            return new Promise((function(e, n) {
                Ie.blockReloadInHiddenIframes();
                var o = r.scopes.join(" ").toLowerCase()
                  , i = r.account || t.getAccount()
                  , a = t.cacheStorage.getItem(u.adalIdToken);
                if (!i && !r.sid && !r.loginHint && I.isEmpty(a))
                    return t.logger.info("User login is required"),
                    n(G.createUserLoginRequiredError());
                var c = t.getTokenType(i, r.scopes, !0)
                  , s = new de(ke.CreateInstance(r.authority, t.config.auth.validateAuthority),t.clientId,c,t.getRedirectUri(r.redirectUri),r.scopes,r.state,r.correlationId);
                if (de.isSSOParam(r) || i)
                    s.populateQueryParams(i, r);
                else if (!i && !I.isEmpty(a)) {
                    var l = pe.extractIdToken(a);
                    t.logger.verbose("ADAL's idToken exists. Extracting login information from ADAL's idToken "),
                    s.populateQueryParams(i, null, l)
                }
                var d, h, p = r.claimsRequest || s.claimsValue;
                if (!p && !r.forceRefresh)
                    try {
                        h = t.getCachedToken(s, i)
                    } catch (e) {
                        d = e
                    }
                if (h)
                    return t.logger.info("Token is already in cache for scope:" + o),
                    e(h),
                    null;
                if (d)
                    return t.logger.infoPii(d.errorCode + ":" + d.errorMessage),
                    n(d),
                    null;
                var f = void 0;
                return f = p ? "Skipped cache lookup since claims were given." : r.forceRefresh ? "Skipped cache lookup since request.forceRefresh option was set to true" : "Token is not in cache for scope:" + o,
                t.logger.verbose(f),
                s.authorityInstance || (s.authorityInstance = r.authority ? ke.CreateInstance(r.authority, t.config.auth.validateAuthority) : t.authorityInstance),
                s.authorityInstance.resolveEndpointsAsync().then((function() {
                    window.activeRenewals[o] ? (t.logger.verbose("Renew token for scope: " + o + " is in progress. Registering callback"),
                    t.registerCallback(window.activeRenewals[o], o, e, n)) : r.scopes && r.scopes.indexOf(t.clientId) > -1 && 1 === r.scopes.length ? (t.logger.verbose("renewing idToken"),
                    t.silentLogin = !0,
                    t.renewIdToken(r.scopes, e, n, i, s)) : (t.logger.verbose("renewing accesstoken"),
                    t.renewToken(r.scopes, e, n, i, s))
                }
                )).catch((function(e) {
                    return t.logger.warning("could not resolve endpoints"),
                    n(G.createEndpointResolutionError(e.toString())),
                    null
                }
                ))
            }
            )).catch((function(e) {
                throw t.cacheStorage.resetTempCacheItems(r.state),
                e
            }
            ))
        }
        ,
        e.prototype.openPopup = function(e, t, r, n) {
            try {
                var i = window.screenLeft ? window.screenLeft : window.screenX
                  , a = window.screenTop ? window.screenTop : window.screenY
                  , c = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
                  , s = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
                  , u = c / 2 - r / 2 + i
                  , l = s / 2 - n / 2 + a
                  , d = window.open(e, t, "width=" + r + ", height=" + n + ", top=" + l + ", left=" + u);
                if (!d)
                    throw G.createPopupWindowError();
                return d.focus && d.focus(),
                d
            } catch (e) {
                throw this.logger.error("error opening popup " + e.message),
                this.cacheStorage.removeItem(o.INTERACTION_STATUS),
                G.createPopupWindowError(e.toString())
            }
        }
        ,
        e.prototype.loadIframeTimeout = function(e, t, r) {
            return c.__awaiter(this, void 0, void 0, (function() {
                var n, i, a, s;
                return c.__generator(this, (function(c) {
                    switch (c.label) {
                    case 0:
                        return n = window.activeRenewals[r],
                        this.logger.verbose("Set loading state to pending for: " + r + ":" + n),
                        this.cacheStorage.setItem("" + o.RENEW_STATUS + u.resourceDelimiter + n, u.inProgress),
                        [4, Ie.loadFrame(e, t, this.config.system.navigateFrameWait, this.logger)];
                    case 1:
                        i = c.sent(),
                        c.label = 2;
                    case 2:
                        return c.trys.push([2, 4, , 5]),
                        [4, Ie.monitorWindowForHash(i.contentWindow, this.config.system.loadFrameTimeout, e)];
                    case 3:
                        return (a = c.sent()) && this.handleAuthenticationResponse(a),
                        [3, 5];
                    case 4:
                        throw s = c.sent(),
                        this.cacheStorage.getItem("" + o.RENEW_STATUS + u.resourceDelimiter + n) === u.inProgress && (this.logger.verbose("Loading frame has timed out after: " + this.config.system.loadFrameTimeout / 1e3 + " seconds for scope " + r + ":" + n),
                        n && window.callbackMappedToRenewStates[n] && window.callbackMappedToRenewStates[n](null, s),
                        this.cacheStorage.removeItem("" + o.RENEW_STATUS + u.resourceDelimiter + n)),
                        Ie.removeHiddenIframe(i),
                        s;
                    case 5:
                        return Ie.removeHiddenIframe(i),
                        [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.navigateWindow = function(e, t) {
            if (!e || I.isEmpty(e))
                throw this.logger.info("Navigate url is empty"),
                y.createUnexpectedError("Navigate url is empty");
            var r = t || window
              , n = t ? "Navigated Popup window to:" + e : "Navigate to:" + e;
            this.logger.infoPii(n),
            r.location.assign(e)
        }
        ,
        e.prototype.registerCallback = function(e, t, r, n) {
            var o = this;
            window.activeRenewals[t] = e,
            window.promiseMappedToRenewStates[e] || (window.promiseMappedToRenewStates[e] = []),
            window.promiseMappedToRenewStates[e].push({
                resolve: r,
                reject: n
            }),
            window.callbackMappedToRenewStates[e] || (window.callbackMappedToRenewStates[e] = function(r, n) {
                window.activeRenewals[t] = null;
                for (var i = 0; i < window.promiseMappedToRenewStates[e].length; ++i)
                    try {
                        if (n)
                            window.promiseMappedToRenewStates[e][i].reject(n);
                        else {
                            if (!r)
                                throw o.cacheStorage.resetTempCacheItems(e),
                                y.createUnexpectedError("Error and response are both null");
                            window.promiseMappedToRenewStates[e][i].resolve(r)
                        }
                    } catch (e) {
                        o.logger.warning(e)
                    }
                window.promiseMappedToRenewStates[e] = null,
                window.callbackMappedToRenewStates[e] = null
            }
            )
        }
        ,
        e.prototype.logout = function() {
            var e = this;
            this.clearCache(),
            this.account = null;
            var t = "";
            this.getPostLogoutRedirectUri() && (t = "post_logout_redirect_uri=" + encodeURIComponent(this.getPostLogoutRedirectUri())),
            this.authorityInstance.resolveEndpointsAsync().then((function(r) {
                var n = r.EndSessionEndpoint ? r.EndSessionEndpoint + "?" + t : e.authority + "oauth2/v2.0/logout?" + t;
                e.navigateWindow(n)
            }
            ))
        }
        ,
        e.prototype.clearCache = function() {
            window.renewStates = [];
            for (var e = this.cacheStorage.getAllAccessTokens(u.clientId, u.homeAccountIdentifier), t = 0; t < e.length; t++)
                this.cacheStorage.removeItem(JSON.stringify(e[t].key));
            this.cacheStorage.resetCacheItems(),
            this.cacheStorage.clearMsalCookie()
        }
        ,
        e.prototype.clearCacheForScope = function(e) {
            for (var t = this.cacheStorage.getAllAccessTokens(u.clientId, u.homeAccountIdentifier), r = 0; r < t.length; r++) {
                var n = t[r];
                n.value.accessToken === e && this.cacheStorage.removeItem(JSON.stringify(n.key))
            }
        }
        ,
        e.prototype.isCallback = function(e) {
            return this.logger.info("isCallback will be deprecated in favor of urlContainsHash in MSAL.js v2.0."),
            se.urlContainsHash(e)
        }
        ,
        e.prototype.processCallBack = function(e, t, r) {
            var i, a;
            this.logger.info("Processing the callback from redirect response"),
            t || (t = this.getResponseState(e));
            try {
                i = this.saveTokenFromHash(e, t)
            } catch (e) {
                a = e
            }
            this.cacheStorage.removeItem(o.URL_HASH);
            try {
                this.cacheStorage.clearMsalCookie(t.state);
                var c = this.getAccountState(t.state);
                if (i) {
                    if (t.requestType === u.renewToken || i.accessToken ? (window.parent !== window ? this.logger.verbose("Window is in iframe, acquiring token silently") : this.logger.verbose("acquiring token interactive in progress"),
                    i.tokenType = n.ACCESS_TOKEN) : t.requestType === u.login && (i.tokenType = n.ID_TOKEN),
                    !r)
                        return void this.authResponseHandler(u.interactionTypeRedirect, i)
                } else if (!r)
                    return this.cacheStorage.resetTempCacheItems(t.state),
                    void this.authErrorHandler(u.interactionTypeRedirect, a, je(c));
                r(i, a)
            } catch (e) {
                throw this.logger.error("Error occurred in token received callback function: " + e),
                G.createErrorInCallbackFunction(e.toString())
            }
        }
        ,
        e.prototype.handleAuthenticationResponse = function(e) {
            var t = e || window.location.hash
              , r = Ie.getIframeWithHash(t)
              , n = Ie.getPopUpWithHash(t)
              , i = !(!r && !n)
              , a = this.getResponseState(t)
              , c = null;
            if (this.logger.info("Returned from redirect url"),
            i)
                c = window.callbackMappedToRenewStates[a.state];
            else {
                if (c = null,
                this.config.auth.navigateToLoginRequestUrl) {
                    if (this.cacheStorage.setItem(o.URL_HASH, t),
                    window.parent === window) {
                        var s = this.cacheStorage.getItem("" + o.LOGIN_REQUEST + u.resourceDelimiter + a.state, this.inCookie);
                        s && "null" !== s ? window.location.href = s : (this.logger.error("Unable to get valid login request url from cache, redirecting to home page"),
                        window.location.href = "/")
                    }
                    return
                }
                if (window.location.hash = "",
                !this.redirectCallbacksSet)
                    return void this.cacheStorage.setItem(o.URL_HASH, t)
            }
            this.processCallBack(t, a, c),
            i && Ie.closePopups()
        }
        ,
        e.prototype.getResponseState = function(e) {
            var t, r = se.deserializeHash(e);
            if (!r)
                throw y.createUnexpectedError("Hash was not parsed correctly.");
            if (!r.hasOwnProperty("state"))
                throw y.createUnexpectedError("Hash does not contain state.");
            if ((t = {
                requestType: u.unknown,
                state: r.state,
                stateMatch: !1
            }).state === this.cacheStorage.getItem("" + o.STATE_LOGIN + u.resourceDelimiter + t.state, this.inCookie) || t.state === this.silentAuthenticationState)
                return t.requestType = u.login,
                t.stateMatch = !0,
                t;
            if (t.state === this.cacheStorage.getItem("" + o.STATE_ACQ_TOKEN + u.resourceDelimiter + t.state, this.inCookie))
                return t.requestType = u.renewToken,
                t.stateMatch = !0,
                t;
            if (!t.stateMatch) {
                t.requestType = window.requestType;
                for (var n = window.renewStates, i = 0; i < n.length; i++)
                    if (n[i] === t.state) {
                        t.stateMatch = !0;
                        break
                    }
            }
            return t
        }
        ,
        e.prototype.getCachedToken = function(e, t) {
            var r = null
              , o = e.scopes
              , i = this.cacheStorage.getAllAccessTokens(this.clientId, t ? t.homeAccountIdentifier : null);
            if (0 === i.length)
                return null;
            var a = [];
            if (e.authority) {
                for (c = 0; c < i.length; c++) {
                    u = (s = i[c]).key.scopes.split(" ");
                    ce.containsScope(u, o) && se.CanonicalizeUri(s.key.authority) === e.authority && a.push(s)
                }
                if (0 === a.length)
                    return null;
                if (1 !== a.length)
                    throw G.createMultipleMatchingTokensInCacheError(o.toString());
                r = a[0]
            } else {
                for (var c = 0; c < i.length; c++) {
                    var s, u = (s = i[c]).key.scopes.split(" ");
                    ce.containsScope(u, o) && a.push(s)
                }
                if (1 === a.length)
                    r = a[0],
                    e.authorityInstance = ke.CreateInstance(r.key.authority, this.config.auth.validateAuthority);
                else {
                    if (a.length > 1)
                        throw G.createMultipleMatchingTokensInCacheError(o.toString());
                    var l = this.getUniqueAuthority(i, "authority");
                    if (l.length > 1)
                        throw G.createMultipleAuthoritiesInCacheError(o.toString());
                    e.authorityInstance = ke.CreateInstance(l[0], this.config.auth.validateAuthority)
                }
            }
            if (null != r) {
                var d = Number(r.value.expiresIn)
                  , h = this.config.system.tokenRenewalOffsetSeconds || 300;
                if (d && d > ve.now() + h) {
                    var p = new fe(r.value.idToken);
                    if (!t && !(t = this.getAccount()))
                        throw y.createUnexpectedError("Account should not be null here.");
                    var f = this.getAccountState(e.state)
                      , g = {
                        uniqueId: "",
                        tenantId: "",
                        tokenType: r.value.idToken === r.value.accessToken ? n.ID_TOKEN : n.ACCESS_TOKEN,
                        idToken: p,
                        idTokenClaims: p.claims,
                        accessToken: r.value.accessToken,
                        scopes: r.key.scopes.split(" "),
                        expiresOn: new Date(1e3 * d),
                        account: t,
                        accountState: f,
                        fromCache: !0
                    };
                    return we.setResponseIdToken(g, p),
                    g
                }
                return this.cacheStorage.removeItem(JSON.stringify(a[0].key)),
                null
            }
            return null
        }
        ,
        e.prototype.getUniqueAuthority = function(e, t) {
            var r = []
              , n = [];
            return e.forEach((function(e) {
                e.key.hasOwnProperty(t) && -1 === n.indexOf(e.key[t]) && (n.push(e.key[t]),
                r.push(e.key[t]))
            }
            )),
            r
        }
        ,
        e.prototype.extractADALIdToken = function() {
            var e = this.cacheStorage.getItem(u.adalIdToken);
            return I.isEmpty(e) ? null : pe.extractIdToken(e)
        }
        ,
        e.prototype.renewToken = function(e, t, r, n, o) {
            var i = e.join(" ").toLowerCase();
            this.logger.verbose("renewToken is called for scope:" + i);
            var a = "msalRenewFrame" + i
              , c = Ie.addHiddenIFrame(a, this.logger);
            this.updateCacheEntries(o, n),
            this.logger.verbose("Renew token Expected state: " + o.state);
            var s = se.urlRemoveQueryStringParameter(se.createNavigateUrl(o), u.prompt) + u.prompt_none + u.response_mode_fragment;
            window.renewStates.push(o.state),
            window.requestType = u.renewToken,
            this.registerCallback(o.state, i, t, r),
            this.logger.infoPii("Navigate to:" + s),
            c.src = "about:blank",
            this.loadIframeTimeout(s, a, i).catch((function(e) {
                return r(e)
            }
            ))
        }
        ,
        e.prototype.renewIdToken = function(e, t, r, n, o) {
            this.logger.info("renewidToken is called");
            var i = Ie.addHiddenIFrame("msalIdTokenFrame", this.logger);
            this.updateCacheEntries(o, n),
            this.logger.verbose("Renew Idtoken Expected state: " + o.state);
            var a = se.urlRemoveQueryStringParameter(se.createNavigateUrl(o), u.prompt) + u.prompt_none + u.response_mode_fragment;
            this.silentLogin ? (window.requestType = u.login,
            this.silentAuthenticationState = o.state) : (window.requestType = u.renewToken,
            window.renewStates.push(o.state)),
            this.registerCallback(o.state, this.clientId, t, r),
            this.logger.infoPii("Navigate to:" + a),
            i.src = "about:blank",
            this.loadIframeTimeout(a, "msalIdTokenFrame", this.clientId).catch((function(e) {
                return r(e)
            }
            ))
        }
        ,
        e.prototype.saveAccessToken = function(e, t, r, o, i) {
            var a, s, u = c.__assign({}, e), l = new he(o);
            if (r.hasOwnProperty(n.SCOPE)) {
                for (var d = (a = r[n.SCOPE]).split(" "), h = this.cacheStorage.getAllAccessTokens(this.clientId, t), p = 0; p < h.length; p++) {
                    var f = h[p];
                    if (f.key.homeAccountIdentifier === e.account.homeAccountIdentifier) {
                        var g = f.key.scopes.split(" ");
                        ce.isIntersectingScopes(g, d) && this.cacheStorage.removeItem(JSON.stringify(f.key))
                    }
                }
                var m = ve.parseExpiresIn(r[n.EXPIRES_IN]);
                s = ve.now() + m;
                var y = new ue(t,this.clientId,a,l.uid,l.utid)
                  , I = new le(r[n.ACCESS_TOKEN],i.rawIdToken,s.toString(),o);
                this.cacheStorage.setItem(JSON.stringify(y), JSON.stringify(I)),
                u.accessToken = r[n.ACCESS_TOKEN],
                u.scopes = d
            } else {
                a = this.clientId;
                y = new ue(t,this.clientId,a,l.uid,l.utid);
                s = Number(i.expiration);
                I = new le(r[n.ID_TOKEN],r[n.ID_TOKEN],s.toString(),o);
                this.cacheStorage.setItem(JSON.stringify(y), JSON.stringify(I)),
                u.scopes = [a],
                u.accessToken = r[n.ID_TOKEN]
            }
            return s ? u.expiresOn = new Date(1e3 * s) : this.logger.error("Could not parse expiresIn parameter"),
            u
        }
        ,
        e.prototype.saveTokenFromHash = function(e, t) {
            this.logger.info("State status:" + t.stateMatch + "; Request type:" + t.requestType);
            var r, c = {
                uniqueId: "",
                tenantId: "",
                tokenType: "",
                idToken: null,
                idTokenClaims: null,
                accessToken: null,
                scopes: [],
                expiresOn: null,
                account: null,
                accountState: "",
                fromCache: !1
            }, s = se.deserializeHash(e), l = "", d = "", h = null;
            if (s.hasOwnProperty(n.ERROR_DESCRIPTION) || s.hasOwnProperty(n.ERROR)) {
                if (this.logger.infoPii("Error :" + s[n.ERROR] + "; Error description:" + s[n.ERROR_DESCRIPTION]),
                this.cacheStorage.setItem(a.ERROR, s[n.ERROR]),
                this.cacheStorage.setItem(a.ERROR_DESC, s[n.ERROR_DESCRIPTION]),
                t.requestType === u.login && (this.cacheStorage.setItem(a.LOGIN_ERROR, s[n.ERROR_DESCRIPTION] + ":" + s[n.ERROR]),
                l = me.generateAuthorityKey(t.state)),
                t.requestType === u.renewToken) {
                    l = me.generateAuthorityKey(t.state);
                    var p = this.getAccount()
                      , f = void 0;
                    f = p && !I.isEmpty(p.homeAccountIdentifier) ? p.homeAccountIdentifier : u.no_account,
                    d = me.generateAcquireTokenAccountKey(f, t.state)
                }
                var g = s[n.ERROR]
                  , m = s[n.ERROR_DESCRIPTION];
                r = He.isInteractionRequiredError(g) || He.isInteractionRequiredError(m) ? new He(s[n.ERROR],s[n.ERROR_DESCRIPTION]) : new Me(s[n.ERROR],s[n.ERROR_DESCRIPTION])
            } else if (t.stateMatch) {
                this.logger.info("State is right"),
                s.hasOwnProperty(n.SESSION_STATE) && this.cacheStorage.setItem("" + o.SESSION_STATE + u.resourceDelimiter + t.state, s[n.SESSION_STATE]),
                c.accountState = this.getAccountState(t.state);
                var v = "";
                if (s.hasOwnProperty(n.ACCESS_TOKEN)) {
                    this.logger.info("Fragment has access token"),
                    s.hasOwnProperty(n.ID_TOKEN) ? (h = new fe(s[n.ID_TOKEN]),
                    c.idToken = h,
                    c.idTokenClaims = h.claims) : (h = new fe(this.cacheStorage.getItem(i.IDTOKEN)),
                    c = we.setResponseIdToken(c, h));
                    var E = this.populateAuthority(t.state, this.inCookie, this.cacheStorage, h);
                    if (!s.hasOwnProperty(n.CLIENT_INFO))
                        throw this.logger.warning("ClientInfo not received in the response from AAD"),
                        G.createClientInfoNotPopulatedError("ClientInfo not received in the response from the server");
                    v = s[n.CLIENT_INFO],
                    c.account = ye.createAccount(h, new he(v));
                    var w = void 0;
                    w = c.account && !I.isEmpty(c.account.homeAccountIdentifier) ? c.account.homeAccountIdentifier : u.no_account,
                    d = me.generateAcquireTokenAccountKey(w, t.state);
                    var _ = me.generateAcquireTokenAccountKey(u.no_account, t.state)
                      , T = this.cacheStorage.getItem(d)
                      , S = void 0;
                    I.isEmpty(T) ? I.isEmpty(this.cacheStorage.getItem(_)) || (c = this.saveAccessToken(c, E, s, v, h)) : (S = JSON.parse(T),
                    c.account && S && ye.compareAccounts(c.account, S) ? (c = this.saveAccessToken(c, E, s, v, h),
                    this.logger.info("The user object received in the response is the same as the one passed in the acquireToken request")) : this.logger.warning("The account object created from the response is not the same as the one passed in the acquireToken request"))
                }
                if (s.hasOwnProperty(n.ID_TOKEN)) {
                    this.logger.info("Fragment has id token"),
                    h = new fe(s[n.ID_TOKEN]),
                    c = we.setResponseIdToken(c, h),
                    s.hasOwnProperty(n.CLIENT_INFO) ? v = s[n.CLIENT_INFO] : this.logger.warning("ClientInfo not received in the response from AAD");
                    E = this.populateAuthority(t.state, this.inCookie, this.cacheStorage, h);
                    this.account = ye.createAccount(h, new he(v)),
                    c.account = this.account,
                    h && h.nonce ? h.nonce !== this.cacheStorage.getItem("" + o.NONCE_IDTOKEN + u.resourceDelimiter + t.state, this.inCookie) ? (this.account = null,
                    this.cacheStorage.setItem(a.LOGIN_ERROR, "Nonce Mismatch. Expected Nonce: " + this.cacheStorage.getItem("" + o.NONCE_IDTOKEN + u.resourceDelimiter + t.state, this.inCookie) + ",Actual Nonce: " + h.nonce),
                    this.logger.error("Nonce Mismatch.Expected Nonce: " + this.cacheStorage.getItem("" + o.NONCE_IDTOKEN + u.resourceDelimiter + t.state, this.inCookie) + ",Actual Nonce: " + h.nonce),
                    r = G.createNonceMismatchError(this.cacheStorage.getItem("" + o.NONCE_IDTOKEN + u.resourceDelimiter + t.state, this.inCookie), h.nonce)) : (this.cacheStorage.setItem(i.IDTOKEN, s[n.ID_TOKEN]),
                    this.cacheStorage.setItem(i.CLIENT_INFO, v),
                    this.saveAccessToken(c, E, s, v, h)) : (l = t.state,
                    d = t.state,
                    this.logger.error("Invalid id_token received in the response"),
                    r = G.createInvalidIdTokenError(h),
                    this.cacheStorage.setItem(a.ERROR, r.errorCode),
                    this.cacheStorage.setItem(a.ERROR_DESC, r.errorMessage))
                }
            } else {
                l = t.state,
                d = t.state;
                var C = this.cacheStorage.getItem("" + o.STATE_LOGIN + u.resourceDelimiter + t.state, this.inCookie);
                this.logger.error("State Mismatch.Expected State: " + C + ",Actual State: " + t.state),
                r = G.createInvalidStateError(t.state, C),
                this.cacheStorage.setItem(a.ERROR, r.errorCode),
                this.cacheStorage.setItem(a.ERROR_DESC, r.errorMessage)
            }
            if (this.cacheStorage.removeItem("" + o.RENEW_STATUS + u.resourceDelimiter + t.state),
            this.cacheStorage.resetTempCacheItems(t.state),
            this.inCookie && (this.cacheStorage.setItemCookie(l, "", -1),
            this.cacheStorage.clearMsalCookie(t.state)),
            r)
                throw r;
            if (!c)
                throw y.createUnexpectedError("Response is null");
            return c
        }
        ,
        e.prototype.populateAuthority = function(e, t, r, n) {
            var o = me.generateAuthorityKey(e)
              , i = r.getItem(o, t);
            return I.isEmpty(i) ? i : se.replaceTenantPath(i, n.tenantId)
        }
        ,
        e.prototype.getAccount = function() {
            if (this.account)
                return this.account;
            var e = this.cacheStorage.getItem(i.IDTOKEN)
              , t = this.cacheStorage.getItem(i.CLIENT_INFO);
            if (!I.isEmpty(e) && !I.isEmpty(t)) {
                var r = new fe(e)
                  , n = new he(t);
                return this.account = ye.createAccount(r, n),
                this.account
            }
            return null
        }
        ,
        e.prototype.getAccountState = function(e) {
            if (e) {
                var t = e.indexOf("|");
                if (t > -1 && t + 1 < e.length)
                    return e.substring(t + 1)
            }
            return e
        }
        ,
        e.prototype.getAllAccounts = function() {
            for (var e = [], t = this.cacheStorage.getAllAccessTokens(u.clientId, u.homeAccountIdentifier), r = 0; r < t.length; r++) {
                var n = new fe(t[r].value.idToken)
                  , o = new he(t[r].value.homeAccountIdentifier)
                  , i = ye.createAccount(n, o);
                e.push(i)
            }
            return this.getUniqueAccounts(e)
        }
        ,
        e.prototype.getUniqueAccounts = function(e) {
            if (!e || e.length <= 1)
                return e;
            for (var t = [], r = [], n = 0; n < e.length; ++n)
                e[n].homeAccountIdentifier && -1 === t.indexOf(e[n].homeAccountIdentifier) && (t.push(e[n].homeAccountIdentifier),
                r.push(e[n]));
            return r
        }
        ,
        e.prototype.broadcast = function(e, t) {
            var r = new CustomEvent(e,{
                detail: t
            });
            window.dispatchEvent(r)
        }
        ,
        e.prototype.getCachedTokenInternal = function(e, t, r, n) {
            var o = t || this.getAccount();
            if (!o)
                return null;
            var i = this.authorityInstance ? this.authorityInstance : ke.CreateInstance(this.authority, this.config.auth.validateAuthority)
              , a = this.getTokenType(o, e, !0)
              , c = new de(i,this.clientId,a,this.getRedirectUri(),e,r,n);
            return this.getCachedToken(c, t)
        }
        ,
        e.prototype.getScopesForEndpoint = function(e) {
            if (this.config.framework.unprotectedResources.length > 0)
                for (var t = 0; t < this.config.framework.unprotectedResources.length; t++)
                    if (e.indexOf(this.config.framework.unprotectedResources[t]) > -1)
                        return null;
            if (this.config.framework.protectedResourceMap.size > 0)
                for (var r = 0, n = Array.from(this.config.framework.protectedResourceMap.keys()); r < n.length; r++) {
                    var o = n[r];
                    if (e.indexOf(o) > -1)
                        return this.config.framework.protectedResourceMap.get(o)
                }
            return e.indexOf("http://") > -1 || e.indexOf("https://") > -1 ? se.getHostFromUri(e) === se.getHostFromUri(this.getRedirectUri()) ? new Array(this.clientId) : null : new Array(this.clientId)
        }
        ,
        e.prototype.getLoginInProgress = function() {
            return !!this.cacheStorage.getItem(o.URL_HASH) || this.cacheStorage.getItem(o.INTERACTION_STATUS) === u.inProgress
        }
        ,
        e.prototype.setInteractionInProgress = function(e) {
            e ? this.cacheStorage.setItem(o.INTERACTION_STATUS, u.inProgress) : this.cacheStorage.removeItem(o.INTERACTION_STATUS)
        }
        ,
        e.prototype.setloginInProgress = function(e) {
            this.setInteractionInProgress(e)
        }
        ,
        e.prototype.getAcquireTokenInProgress = function() {
            return this.cacheStorage.getItem(o.INTERACTION_STATUS) === u.inProgress
        }
        ,
        e.prototype.setAcquireTokenInProgress = function(e) {
            this.setInteractionInProgress(e)
        }
        ,
        e.prototype.getLogger = function() {
            return this.config.system.logger
        }
        ,
        e.prototype.getRedirectUri = function(e) {
            return e || ("function" == typeof this.config.auth.redirectUri ? this.config.auth.redirectUri() : this.config.auth.redirectUri)
        }
        ,
        e.prototype.getPostLogoutRedirectUri = function() {
            return "function" == typeof this.config.auth.postLogoutRedirectUri ? this.config.auth.postLogoutRedirectUri() : this.config.auth.postLogoutRedirectUri
        }
        ,
        e.prototype.getCurrentConfiguration = function() {
            if (!this.config)
                throw ae.createNoSetConfigurationError();
            return this.config
        }
        ,
        e.prototype.getTokenType = function(e, t, r) {
            return r ? ye.compareAccounts(e, this.getAccount()) ? t.indexOf(this.config.auth.clientId) > -1 ? Be : $e : t.indexOf(this.config.auth.clientId) > -1 ? Be : Ze : ye.compareAccounts(e, this.getAccount()) ? t.indexOf(this.clientId) > -1 ? Be : $e : Ze
        }
        ,
        e.prototype.setAccountCache = function(e, t) {
            var r = e ? this.getAccountId(e) : u.no_account
              , n = me.generateAcquireTokenAccountKey(r, t);
            this.cacheStorage.setItem(n, JSON.stringify(e))
        }
        ,
        e.prototype.setAuthorityCache = function(e, t) {
            var r = me.generateAuthorityKey(e);
            this.cacheStorage.setItem(r, se.CanonicalizeUri(t), this.inCookie)
        }
        ,
        e.prototype.updateCacheEntries = function(e, t, r) {
            r ? (this.cacheStorage.setItem("" + o.LOGIN_REQUEST + u.resourceDelimiter + e.state, r, this.inCookie),
            this.cacheStorage.setItem("" + o.STATE_LOGIN + u.resourceDelimiter + e.state, e.state, this.inCookie)) : this.setAccountCache(t, e.state),
            this.setAuthorityCache(e.state, e.authority),
            this.cacheStorage.setItem("" + o.NONCE_IDTOKEN + u.resourceDelimiter + e.state, e.nonce, this.inCookie)
        }
        ,
        e.prototype.getAccountId = function(e) {
            return I.isEmpty(e.homeAccountIdentifier) ? u.no_account : e.homeAccountIdentifier
        }
        ,
        e.prototype.buildIDTokenRequest = function(e) {
            return {
                scopes: [this.clientId],
                authority: this.authority,
                account: this.getAccount(),
                extraQueryParameters: e.extraQueryParameters
            }
        }
        ,
        e.prototype.getTelemetryManagerFromConfig = function(e, t) {
            if (!e)
                return null;
            var r = e.applicationName
              , n = e.applicationVersion
              , o = e.telemetryEmitter;
            if (!r || !n || !o)
                throw ae.createTelemetryConfigError(e);
            return new Je({
                platform: {
                    sdk: "msal.js",
                    sdkVersion: "1.2.1",
                    applicationName: r,
                    applicationVersion: n
                },
                clientId: t
            },o)
        }
        ,
        e
    }();
    r.d(t, "UserAgentApplication", (function() {
        return Xe
    }
    )),
    r.d(t, "Logger", (function() {
        return be
    }
    )),
    r.d(t, "LogLevel", (function() {
        return Te
    }
    )),
    r.d(t, "Account", (function() {
        return ye
    }
    )),
    r.d(t, "Constants", (function() {
        return u
    }
    )),
    r.d(t, "Authority", (function() {
        return Se
    }
    )),
    r.d(t, "CryptoUtils", (function() {
        return s
    }
    )),
    r.d(t, "AuthError", (function() {
        return y
    }
    )),
    r.d(t, "ClientAuthError", (function() {
        return G
    }
    )),
    r.d(t, "ServerError", (function() {
        return Me
    }
    )),
    r.d(t, "ClientConfigurationError", (function() {
        return ae
    }
    )),
    r.d(t, "InteractionRequiredAuthError", (function() {
        return He
    }
    ))
}
]);
