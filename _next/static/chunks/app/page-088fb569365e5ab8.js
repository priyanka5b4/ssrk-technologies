(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [931],
  {
    2160: function (e, t, a) {
      Promise.resolve().then(a.bind(a, 3416));
    },
    3416: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return v;
          },
        });
      var s = a(7437),
        i = a(2265),
        n = a(521),
        r = a(8614),
        l = a(7648),
        o = a(2869),
        c = a(1211),
        d = a(3284),
        m = a(6858),
        u = a(9219),
        x = a(2351),
        h = a(7760);
      function g() {
        return (0, s.jsxs)("div", {
          className: "relative w-full h-full overflow-hidden",
          children: [
            (0, s.jsx)(n.E.div, {
              initial: { scale: 0.8 },
              style: {
                backgroundImage: "url('./hero.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              },
              animate: { scale: 1 },
              transition: { duration: 1 },
              className:
                "absolute inset-0 bg-gradient-to-r from-[#E7FAF8] to-[#CFF1ED] rounded-[40%_60%_70%_30%/40%_50%_60%_50%]",
            }),
            (0, s.jsxs)("div", {
              className: "relative h-full p-8",
              children: [
                (0, s.jsxs)(n.E.div, {
                  initial: { y: 20, opacity: 0 },
                  animate: { y: 0, opacity: 1 },
                  transition: { delay: 0.2 },
                  className:
                    "absolute top-4 right-4 w-12 h-12 bg-white rounded-lg shadow-lg p-4",
                  children: [
                    (0, s.jsx)("div", {
                      className: "w-full h-1 bg-yellow-400 rounded mb-2",
                    }),
                    (0, s.jsxs)("div", {
                      className: "space-y-1",
                      children: [
                        (0, s.jsx)("div", {
                          className: "w-3/4 h-1 bg-gray-200 rounded",
                        }),
                        (0, s.jsx)("div", {
                          className: "w-1/2 h-1 bg-gray-200 rounded",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, s.jsx)(n.E.div, {
                  initial: { scale: 0, opacity: 0 },
                  animate: { scale: 1, opacity: 1 },
                  transition: { delay: 0.4 },
                  className:
                    "absolute top-12 left-8 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors",
                  children: (0, s.jsx)("div", {
                    className:
                      "w-6 h-6 border-2 border-[#5FE3D3] rounded-full relative",
                    children: (0, s.jsx)("div", {
                      className:
                        "absolute w-3 h-2 bg-[#5FE3D3] rotate-45 right-0 bottom-0 transform translate-x-1/2 translate-y-1/2",
                    }),
                  }),
                }),
                (0, s.jsx)(n.E.div, {
                  animate: { y: [0, -10, 0], rotate: [0, 5, 0] },
                  transition: {
                    duration: 4,
                    repeat: 1 / 0,
                    repeatType: "reverse",
                  },
                  className: "absolute top-1/4 right-1/4 cursor-pointer",
                  children: (0, s.jsx)("div", {
                    className:
                      "w-10 h-10 bg-yellow-400 rounded-lg hover:bg-yellow-300 transition-colors shadow-md",
                  }),
                }),
                (0, s.jsx)(n.E.div, {
                  animate: { y: [0, 10, 0], rotate: [0, -5, 0] },
                  transition: {
                    duration: 3,
                    repeat: 1 / 0,
                    repeatType: "reverse",
                    delay: 0.5,
                  },
                  className: "absolute bottom-1/3 left-1/4 cursor-pointer",
                  children: (0, s.jsx)("div", {
                    className:
                      "w-10 h-10 bg-[#5FE3D3] rounded-full hover:bg-[#4ED0C0] transition-colors shadow-md",
                  }),
                }),
              ],
            }),
          ],
        });
      }
      var f = a(5186),
        p = a(6818),
        y = a(2489);
      function b(e) {
        let { onClose: t } = e,
          [a, r] = (0, i.useState)({ name: "", email: "", message: "" }),
          l = (e) => {
            r((t) => ({ ...t, [e.target.name]: e.target.value }));
          };
        return (0, s.jsxs)(n.E.div, {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: 20 },
          children: [
            (0, s.jsxs)("div", {
              className: "flex justify-between items-center mb-4",
              children: [
                (0, s.jsx)("h2", {
                  className: "text-2xl font-bold text-gray-800",
                  children: "Contact Us",
                }),
                (0, s.jsx)("button", {
                  onClick: t,
                  className: "text-gray-500 hover:text-gray-700",
                  children: (0, s.jsx)(y.Z, { className: "h-6 w-6" }),
                }),
              ],
            }),
            (0, s.jsxs)("form", {
              onSubmit: (e) => {
                e.preventDefault(), console.log("Form submitted:", a), t();
              },
              className: "space-y-4",
              children: [
                (0, s.jsxs)("div", {
                  children: [
                    (0, s.jsx)("label", {
                      htmlFor: "name",
                      className: "block text-sm font-medium text-gray-700",
                      children: "Name",
                    }),
                    (0, s.jsx)(f.I, {
                      type: "text",
                      id: "name",
                      name: "name",
                      value: a.name,
                      onChange: l,
                      required: !0,
                      className: "mt-1 block w-full",
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  children: [
                    (0, s.jsx)("label", {
                      htmlFor: "email",
                      className: "block text-sm font-medium text-gray-700",
                      children: "Email",
                    }),
                    (0, s.jsx)(f.I, {
                      type: "email",
                      id: "email",
                      name: "email",
                      value: a.email,
                      onChange: l,
                      required: !0,
                      className: "mt-1 block w-full",
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  children: [
                    (0, s.jsx)("label", {
                      htmlFor: "message",
                      className: "block text-sm font-medium text-gray-700",
                      children: "Message",
                    }),
                    (0, s.jsx)(p.g, {
                      id: "message",
                      name: "message",
                      value: a.message,
                      onChange: l,
                      required: !0,
                      className: "mt-1 block w-full",
                      rows: 4,
                    }),
                  ],
                }),
                (0, s.jsx)(o.z, {
                  type: "button",
                  className:
                    "w-full bg-[#5FE3D3] hover:bg-[#4ED0C0] text-white",
                  onClick: () => {
                    (window.location.href =
                      "mailto:hr@ssrktechnologies.com?subject=Contact%20Us&body=Name:%20"
                        .concat(a.name, "%0AEmail:%20")
                        .concat(a.email, "%0AMessage:%20")
                        .concat(a.message)),
                      r({ name: "", email: "", message: "" });
                  },
                  children: "Send Message",
                }),
              ],
            }),
          ],
        });
      }
      function v() {
        let [e, t] = (0, i.useState)(!1);
        return (0, s.jsxs)("div", {
          className: "min-h-screen bg-white flex flex-col",
          children: [
            (0, s.jsx)(c.W, {}),
            (0, s.jsx)("main", {
              className:
                "flex-grow container mx-auto px-4 pt-20 lg:pt-32 pb-16",
              children: (0, s.jsxs)("div", {
                className: "grid lg:grid-cols-2 gap-12 items-center",
                children: [
                  (0, s.jsxs)(n.E.div, {
                    initial: { opacity: 0, x: -20 },
                    animate: { opacity: 1, x: 0 },
                    transition: { duration: 0.6 },
                    className: "space-y-6",
                    children: [
                      (0, s.jsx)(n.E.h1, {
                        className:
                          "text-4xl sm:text-5xl font-bold tracking-tight text-[#5FE3D3]",
                        initial: { opacity: 0, y: 20 },
                        animate: { opacity: 1, y: 0 },
                        transition: { delay: 0.2 },
                        children:
                          "Innovative IT solutions for your business success.",
                      }),
                      (0, s.jsx)(n.E.p, {
                        className: "text-gray-600 text-lg max-w-md",
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        transition: { delay: 0.4 },
                        children:
                          "We specialize in delivering cutting-edge solutions that streamline operations, enhance performance, and ensure sustainable growth. Let us help you transform your digital landscape and achieve a smarter, more efficient future.",
                      }),
                      (0, s.jsxs)(n.E.div, {
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        transition: { delay: 0.6 },
                        className: "space-x-4",
                        children: [
                          (0, s.jsxs)(o.z, {
                            className:
                              "bg-gray-800 hover:bg-gray-700 text-white rounded-full px-8 transition-all duration-300 ease-in-out transform hover:scale-105",
                            onClick: () => t(!0),
                            children: [
                              "GET STARTED",
                              (0, s.jsx)(m.Z, { className: "ml-2 h-4 w-4" }),
                            ],
                          }),
                          (0, s.jsx)(o.z, {
                            variant: "outline",
                            className:
                              "rounded-full px-8 transition-all duration-300 ease-in-out transform hover:scale-105",
                            children: "LEARN MORE",
                          }),
                        ],
                      }),
                      (0, s.jsx)(n.E.div, {
                        className: "flex space-x-4 pt-8",
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        transition: { delay: 0.8 },
                        children: [
                          { icon: u.Z, label: "Facebook" },
                          { icon: x.Z, label: "Twitter" },
                          { icon: h.Z, label: "Instagram" },
                        ].map((e) => {
                          let { icon: t, label: a } = e;
                          return (0, s.jsx)(
                            l.default,
                            {
                              href: "#",
                              className:
                                "text-gray-400 hover:text-[#5FE3D3] transition-colors duration-300",
                              "aria-label": a,
                              children: (0, s.jsx)(t, { className: "h-5 w-5" }),
                            },
                            a
                          );
                        }),
                      }),
                    ],
                  }),
                  (0, s.jsx)(n.E.div, {
                    initial: { opacity: 0, scale: 0.95 },
                    animate: { opacity: 1, scale: 1 },
                    transition: { duration: 0.8 },
                    className: "relative",
                    children: (0, s.jsx)("div", {
                      className: "relative w-full aspect-[4/3]",
                      children: (0, s.jsx)(g, {}),
                    }),
                  }),
                ],
              }),
            }),
            (0, s.jsx)(d.$, {}),
            (0, s.jsx)(r.M, {
              children:
                e &&
                (0, s.jsx)(n.E.div, {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  exit: { opacity: 0 },
                  className:
                    "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
                  onClick: () => t(!1),
                  children: (0, s.jsx)(n.E.div, {
                    initial: { scale: 0.9, y: 20 },
                    animate: { scale: 1, y: 0 },
                    exit: { scale: 0.9, y: 20 },
                    className: "bg-white p-8 rounded-lg max-w-md w-full m-4",
                    onClick: (e) => e.stopPropagation(),
                    children: (0, s.jsx)(b, { onClose: () => t(!1) }),
                  }),
                }),
            }),
          ],
        });
      }
    },
    3284: function (e, t, a) {
      "use strict";
      a.d(t, {
        $: function () {
          return c;
        },
      });
      var s = a(7437),
        i = a(7648),
        n = a(9219),
        r = a(2351),
        l = a(7760),
        o = a(598);
      function c() {
        return (0, s.jsx)("footer", {
          className: "bg-gray-100",
          children: (0, s.jsxs)("div", {
            className: "container mx-auto px-4 py-8",
            children: [
              (0, s.jsxs)("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-8",
                children: [
                  (0, s.jsxs)("div", {
                    children: [
                      (0, s.jsx)("h3", {
                        className: "text-lg font-semibold mb-4",
                        children: "About Us",
                      }),
                      (0, s.jsx)("p", {
                        className: "text-gray-600",
                        children:
                          "SSRK Technologies provides innovative solutions to help your company grow and succeed in today's competitive market.",
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    children: [
                      (0, s.jsx)("h3", {
                        className: "text-lg font-semibold mb-4",
                        children: "Quick Links",
                      }),
                      (0, s.jsxs)("ul", {
                        className: "space-y-2",
                        children: [
                          (0, s.jsx)(
                            "li",
                            {
                              children: (0, s.jsx)(
                                i.default,
                                {
                                  href: "\\",
                                  className:
                                    "text-gray-600 hover:text-[#5FE3D3] transition-colors",
                                  children: "Home",
                                },
                                "HOME-LINK"
                              ),
                            },
                            "HOME"
                          ),
                          ["About", "Service", "Contact", "Careers"].map((e) =>
                            (0, s.jsx)(
                              "li",
                              {
                                children: (0, s.jsx)(i.default, {
                                  href: "".concat(e.toLowerCase()),
                                  className:
                                    "text-gray-600 hover:text-[#5FE3D3] transition-colors",
                                  children: e,
                                }),
                              },
                              e
                            )
                          ),
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    children: [
                      (0, s.jsx)("h3", {
                        className: "text-lg font-semibold mb-4",
                        children: "Follow Us",
                      }),
                      (0, s.jsx)("div", {
                        className: "flex space-x-4",
                        children: [
                          { icon: n.Z, label: "Facebook" },
                          { icon: r.Z, label: "Twitter" },
                          { icon: l.Z, label: "Instagram" },
                          { icon: o.Z, label: "LinkedIn" },
                        ].map((e) => {
                          let { icon: t, label: a } = e;
                          return (0, s.jsx)(
                            i.default,
                            {
                              href: "#",
                              className:
                                "text-gray-600 hover:text-[#5FE3D3] transition-colors",
                              "aria-label": a,
                              children: (0, s.jsx)(t, { className: "h-6 w-6" }),
                            },
                            a
                          );
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, s.jsx)("div", {
                className:
                  "mt-8 pt-8 border-t border-gray-200 text-center text-gray-500",
                children: (0, s.jsx)("p", {
                  children:
                    "\xa9 2024 SSRK Technologies Inc. All rights reserved.",
                }),
              }),
            ],
          }),
        });
      }
    },
    1211: function (e, t, a) {
      "use strict";
      a.d(t, {
        W: function () {
          return m;
        },
      });
      var s = a(7437),
        i = a(2265),
        n = a(7648),
        r = a(521),
        l = a(8614),
        o = a(2489),
        c = a(8293);
      let d = ["HOME", "ABOUT", "SERVICE", "CAREERS", "CONTACT"];
      function m() {
        let [e, t] = (0, i.useState)(!1),
          [a, m] = (0, i.useState)(!1);
        return (
          (0, i.useEffect)(() => {
            let e = () => {
              m(window.scrollY > 20);
            };
            return (
              window.addEventListener("scroll", e),
              () => window.removeEventListener("scroll", e)
            );
          }, []),
          (0, s.jsxs)(r.E.header, {
            initial: { y: -20, opacity: 0 },
            animate: { y: 0, opacity: 1 },
            transition: { duration: 0.6 },
            className:
              "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ".concat(
                a ? "bg-white shadow-md" : "bg-transparent"
              ),
            children: [
              (0, s.jsx)("div", {
                className: "container mx-auto px-4",
                children: (0, s.jsxs)("div", {
                  className: "flex items-center justify-between h-20",
                  children: [
                    (0, s.jsxs)(n.default, {
                      href: "/",
                      className: "flex items-center",
                      children: [
                        (0, s.jsx)("div", {
                          className:
                            "w-10 h-10 bg-[#5FE3D3] rounded-full flex items-center justify-center",
                          children: (0, s.jsx)("span", {
                            className: "text-white font-bold text-xl",
                            children: "BS",
                          }),
                        }),
                        (0, s.jsx)("span", {
                          className: "ml-2 text-xl font-semibold text-gray-800",
                          children: "SSRK Technologies",
                        }),
                      ],
                    }),
                    (0, s.jsx)("nav", {
                      className: "hidden md:flex items-center space-x-8",
                      children: d.map((e, t) =>
                        (0, s.jsx)(
                          r.E.div,
                          {
                            initial: { opacity: 0, y: -10 },
                            animate: { opacity: 1, y: 0 },
                            transition: { delay: 0.1 * t },
                            children: (0, s.jsx)(n.default, {
                              href:
                                "HOME" === e ? "/" : "".concat(e.toLowerCase()),
                              className:
                                "text-sm text-gray-600 hover:text-[#5FE3D3] transition-colors",
                              children: e,
                            }),
                          },
                          e
                        )
                      ),
                    }),
                    (0, s.jsx)("button", {
                      className:
                        "md:hidden p-2 text-gray-600 focus:outline-none",
                      onClick: () => t(!e),
                      "aria-label": "Toggle menu",
                      children: e
                        ? (0, s.jsx)(o.Z, { className: "w-6 h-6" })
                        : (0, s.jsx)(c.Z, { className: "w-6 h-6" }),
                    }),
                  ],
                }),
              }),
              (0, s.jsx)(l.M, {
                children:
                  e &&
                  (0, s.jsx)(r.E.div, {
                    initial: { opacity: 0, height: 0 },
                    animate: { opacity: 1, height: "auto" },
                    exit: { opacity: 0, height: 0 },
                    className: "md:hidden bg-white",
                    children: (0, s.jsx)("nav", {
                      className: "container mx-auto px-4 py-4",
                      children: d.map((e, a) =>
                        (0, s.jsx)(
                          r.E.div,
                          {
                            initial: { opacity: 0, x: -10 },
                            animate: { opacity: 1, x: 0 },
                            transition: { delay: 0.1 * a },
                            children: (0, s.jsx)(n.default, {
                              href:
                                "HOME" === e ? "/" : "".concat(e.toLowerCase()),
                              className:
                                "block py-2 text-gray-600 hover:text-[#5FE3D3] transition-colors",
                              onClick: () => t(!1),
                              children: e,
                            }),
                          },
                          e
                        )
                      ),
                    }),
                  }),
              }),
            ],
          })
        );
      }
    },
    2869: function (e, t, a) {
      "use strict";
      a.d(t, {
        z: function () {
          return c;
        },
      });
      var s = a(7437),
        i = a(2265),
        n = a(5293),
        r = a(535),
        l = a(4508);
      let o = (0, r.j)(
          "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
          {
            variants: {
              variant: {
                default:
                  "bg-primary text-primary-foreground shadow hover:bg-primary/90",
                destructive:
                  "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
                outline:
                  "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
                secondary:
                  "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline",
              },
              size: {
                default: "h-9 px-4 py-2",
                sm: "h-8 rounded-md px-3 text-xs",
                lg: "h-10 rounded-md px-8",
                icon: "h-9 w-9",
              },
            },
            defaultVariants: { variant: "default", size: "default" },
          }
        ),
        c = i.forwardRef((e, t) => {
          let { className: a, variant: i, size: r, asChild: c = !1, ...d } = e,
            m = c ? n.g7 : "button";
          return (0, s.jsx)(m, {
            className: (0, l.cn)(o({ variant: i, size: r, className: a })),
            ref: t,
            ...d,
          });
        });
      c.displayName = "Button";
    },
    5186: function (e, t, a) {
      "use strict";
      a.d(t, {
        I: function () {
          return r;
        },
      });
      var s = a(7437),
        i = a(2265),
        n = a(4508);
      let r = i.forwardRef((e, t) => {
        let { className: a, type: i, ...r } = e;
        return (0, s.jsx)("input", {
          type: i,
          className: (0, n.cn)(
            "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            a
          ),
          ref: t,
          ...r,
        });
      });
      r.displayName = "Input";
    },
    6818: function (e, t, a) {
      "use strict";
      a.d(t, {
        g: function () {
          return r;
        },
      });
      var s = a(7437),
        i = a(2265),
        n = a(4508);
      let r = i.forwardRef((e, t) => {
        let { className: a, ...i } = e;
        return (0, s.jsx)("textarea", {
          className: (0, n.cn)(
            "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            a
          ),
          ref: t,
          ...i,
        });
      });
      r.displayName = "Textarea";
    },
    4508: function (e, t, a) {
      "use strict";
      a.d(t, {
        cn: function () {
          return n;
        },
      });
      var s = a(1994),
        i = a(3335);
      function n() {
        for (var e = arguments.length, t = Array(e), a = 0; a < e; a++)
          t[a] = arguments[a];
        return (0, i.m6)((0, s.W)(t));
      }
    },
    6858: function (e, t, a) {
      "use strict";
      a.d(t, {
        Z: function () {
          return s;
        },
      });
      let s = (0, a(9205).Z)("ArrowRight", [
        ["path", { d: "M5 12h14", key: "1ays0h" }],
        ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
      ]);
    },
  },
  function (e) {
    e.O(0, [94, 50, 971, 117, 744], function () {
      return e((e.s = 2160));
    }),
      (_N_E = e.O());
  },
]);
