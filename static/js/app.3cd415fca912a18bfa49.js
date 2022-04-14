webpackJsonp(
    [1], {
        "9M+g": function(e, t) {},
        Jmt5: function(e, t) {},
        MuxF: function(e, t) {},
        NHnr: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var s = n("7+uW"),
                i = n("Dd8w"),
                c = n.n(i),
                o = n("NYxO"),
                a = {
                    props: ["selects"],
                    methods: c()({},
                        Object(o.b)({ removeSelectField: "removeSelectField" }), {
                            removeProvince: function(e) {
                                this.removeSelectField(e);
                            },
                        }
                    ),
                },
                l = {
                    render: function() {
                        var e = this,
                            t = e.$createElement,
                            s = e._self._c || t;
                        return s(
                            "div", { staticClass: "select-header select-header--child" }, [
                                s(
                                    "ul", { staticClass: "province-select" },
                                    e._l(e.selects, function(t, i) {
                                        return s(
                                            "li", { key: i, staticClass: "province-select__item" }, [
                                                s("p", { staticClass: "province-name" }, [
                                                    e._v(e._s(t)),
                                                ]),
                                                e._v(" "),
                                                s(
                                                    "div", {
                                                        staticClass: "delete-icon",
                                                        on: {
                                                            click: function(n) {
                                                                return e.removeProvince(t);
                                                            },
                                                        },
                                                    }, [
                                                        s("img", {
                                                            staticClass: "w-100",
                                                            attrs: { src: n("jGkA") },
                                                        }),
                                                    ]
                                                ),
                                            ]
                                        );
                                    }),
                                    0
                                ),
                            ]
                        );
                    },
                    staticRenderFns: [],
                };
            var r = {
                    data: function() {
                        return { openOption: !1, submit: !1 };
                    },
                    components: {
                        ChooseOptions: n("VU/8")(
                            a,
                            l, !1,
                            function(e) {
                                n("TaTX");
                            },
                            "data-v-8be96372",
                            null
                        ).exports,
                    },
                    computed: c()({},
                        Object(o.c)({
                            provinces: function(e) {
                                return e.provinces;
                            },
                            selects: function(e) {
                                return e.selects;
                            },
                        })
                    ),
                    mounted: function() {
                        this.$store.dispatch("getProvince");
                    },
                    methods: c()({},
                        Object(o.b)({
                            addSelectField: "addSelectField",
                            removeSelectField: "removeSelectField",
                        }), {
                            selectedProvince: function(e, t) {
                                e.target.checked ?
                                    this.addSelectField(t) :
                                    this.removeSelectField(t.name);
                            },
                            showChooseOption: function() {
                                (this.submit = !0), (this.openOption = !1);
                            },
                        }
                    ),
                },
                u = {
                    render: function() {
                        var e = this,
                            t = e.$createElement,
                            n = e._self._c || t;
                        return n("div", { staticClass: "province" }, [
                            n("div", { staticClass: "province-wrap" }, [
                                n("div", { staticClass: "select" }, [
                                    n(
                                        "div", {
                                            staticClass: "select-header",
                                            on: {
                                                click: function(t) {
                                                    e.openOption = !e.openOption;
                                                },
                                            },
                                        }, [
                                            n("p", { staticClass: "select-header__title" }, [
                                                e._v("Chọn tỉnh thành"),
                                            ]),
                                            e._v(" "),
                                            n("span", { staticClass: "select-header__icon" }),
                                        ]
                                    ),
                                    e._v(" "),
                                    e.openOption ?
                                    n("div", [
                                        n("div", { staticClass: "select-options" }, [
                                            n(
                                                "ul",
                                                e._l(e.provinces, function(t, s) {
                                                    return n(
                                                        "li", { key: s, staticClass: "options-item" }, [
                                                            n("input", {
                                                                staticClass: "options-item__check",
                                                                attrs: {
                                                                    type: "checkbox",
                                                                    id: "province" + s,
                                                                },
                                                                domProps: {
                                                                    checked: e.selects.some(function(e) {
                                                                        return e == t.name;
                                                                    }),
                                                                },
                                                                on: {
                                                                    change: function(n) {
                                                                        return e.selectedProvince(n, t);
                                                                    },
                                                                },
                                                            }),
                                                            e._v(" "),
                                                            n(
                                                                "label", {
                                                                    staticClass: "options-item__cont",
                                                                    attrs: { for: "province" + s },
                                                                }, [e._v(e._s(t.name))]
                                                            ),
                                                        ]
                                                    );
                                                }),
                                                0
                                            ),
                                        ]),
                                        e._v(" "),
                                        n("div", { staticClass: "options-action" }, [
                                            n(
                                                "button", {
                                                    staticClass: "btn btn--blue options-action__btn",
                                                    class: { "disabled-btn": e.selects.length <= 0 },
                                                    attrs: { disabled: e.selects.length <= 0 },
                                                    on: { click: e.showChooseOption },
                                                }, [e._v("\n            Đồng ý\n          ")]
                                            ),
                                            e._v(" "),
                                            n(
                                                "button", {
                                                    staticClass: "btn btn--white",
                                                    on: {
                                                        click: function(t) {
                                                            e.openOption = !1;
                                                        },
                                                    },
                                                }, [e._v("\n            Hủy\n          ")]
                                            ),
                                        ]),
                                    ]) :
                                    e._e(),
                                    e._v(" "),
                                    n(
                                        "div", [
                                            e.submit && e.selects.length > 0 && !e.openOption ?
                                            n("ChooseOptions", { attrs: { selects: e.selects } }) :
                                            e._e(),
                                        ],
                                        1
                                    ),
                                ]),
                            ]),
                        ]);
                    },
                    staticRenderFns: [],
                };
            var d = {
                    name: "App",
                    components: {
                        ProvinceSelect: n("VU/8")(
                            r,
                            u, !1,
                            function(e) {
                                n("aWDe");
                            },
                            "data-v-73c33514",
                            null
                        ).exports,
                    },
                },
                p = {
                    render: function() {
                        var e = this.$createElement,
                            t = this._self._c || e;
                        return t("div", { attrs: { id: "app" } }, [t("ProvinceSelect")], 1);
                    },
                    staticRenderFns: [],
                };
            var v = n("VU/8")(
                    d,
                    p, !1,
                    function(e) {
                        n("tO7P");
                    },
                    null,
                    null
                ).exports,
                m = n("mtWM"),
                f = n.n(m);
            s.default.use(o.a);
            var _ = new o.a.Store({
                    state: { provinces: [], selects: [] },
                    getters: {
                        getProvince: function(e) {
                            return e.provinces;
                        },
                        getSelectField: function(e) {
                            return e.selects;
                        },
                    },
                    actions: {
                        getProvince: function(e) {
                            e.state;
                            var t = e.commit;
                            f.a
                                .get("./data.json")
                                .then(function(e) {
                                    t("GET_PROVINCE", e.data);
                                })
                                .catch(function(e) {
                                    console.log("error");
                                });
                        },
                        addSelectField: function(e, t) {
                            e.state;
                            (0, e.commit)("ADD_SELECT_FIELD", t);
                        },
                        removeSelectField: function(e, t) {
                            e.state;
                            (0, e.commit)("REMOVE_SELECT_FIELD", t);
                        },
                    },
                    mutations: {
                        GET_PROVINCE: function(e, t) {
                            e.provinces = t;
                        },
                        ADD_SELECT_FIELD: function(e, t) {
                            e.selects.push(t.name);
                        },
                        REMOVE_SELECT_FIELD: function(e, t) {
                            var n = e.selects.indexOf(t);
                            e.selects.splice(n, 1);
                        },
                    },
                }),
                h = n("Tqaz");
            n("Jmt5"), n("9M+g"), n("MuxF");
            (s.default.config.productionTip = !1),
            s.default.use(h.a),
                s.default.use(h.b),
                new s.default({
                    el: "#app",
                    store: _,
                    components: { App: v },
                    template: "<App/>",
                });
        },
        TaTX: function(e, t) {},
        aWDe: function(e, t) {},
        jGkA: function(e, t) {
            e.exports =
                "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAuNSAwLjVMMTEuNSAxMS41TTExLjUgMC41TDAuNSAxMS41IiBzdHJva2U9IiM2NjY2NjYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K";
        },
        tO7P: function(e, t) {},
    }, ["NHnr"]
);
//# sourceMappingURL=app.3cd415fca912a18bfa49.js.map