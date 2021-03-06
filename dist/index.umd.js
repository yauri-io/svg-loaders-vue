(function (a, e) {
  typeof exports == "object" && typeof module != "undefined"
    ? e(exports, require("vue"))
    : typeof define == "function" && define.amd
    ? define(["exports", "vue"], e)
    : ((a = typeof globalThis != "undefined" ? globalThis : a || self),
      e(((a.index = a.index || {}), (a.index.js = {})), a.Vue));
})(this, function (a, e) {
  "use strict";
  var o = (t, n) => {
    for (const [i, r] of n) t[i] = r;
    return t;
  };
  const d = {
      name: "Audio",
      props: {
        width: { type: [Number, String], default: "100%" },
        height: { type: Number, default: 80 },
        fill: { type: String, default: "#000" },
      },
    },
    s = e.createElementVNode(
      "g",
      { transform: "matrix(1 0 0 -1 0 80)" },
      [
        e.createElementVNode("rect", { width: "10", height: "20", rx: "3" }, [
          e.createElementVNode("animate", {
            attributeName: "height",
            begin: "0s",
            dur: "4.3s",
            values:
              "20;45;57;80;64;32;66;45;64;23;66;13;64;56;34;34;2;23;76;79;20",
            calcMode: "linear",
            repeatCount: "indefinite",
          }),
        ]),
        e.createElementVNode(
          "rect",
          { x: "15", width: "10", height: "80", rx: "3" },
          [
            e.createElementVNode("animate", {
              attributeName: "height",
              begin: "0s",
              dur: "2s",
              values: "80;55;33;5;75;23;73;33;12;14;60;80",
              calcMode: "linear",
              repeatCount: "indefinite",
            }),
          ]
        ),
        e.createElementVNode(
          "rect",
          { x: "30", width: "10", height: "50", rx: "3" },
          [
            e.createElementVNode("animate", {
              attributeName: "height",
              begin: "0s",
              dur: "1.4s",
              values: "50;34;78;23;56;23;34;76;80;54;21;50",
              calcMode: "linear",
              repeatCount: "indefinite",
            }),
          ]
        ),
        e.createElementVNode(
          "rect",
          { x: "45", width: "10", height: "30", rx: "3" },
          [
            e.createElementVNode("animate", {
              attributeName: "height",
              begin: "0s",
              dur: "2s",
              values: "30;45;13;80;56;72;45;76;34;23;67;30",
              calcMode: "linear",
              repeatCount: "indefinite",
            }),
          ]
        ),
      ],
      -1
    );
  function m(t, n, i, r, c, l) {
    return (
      e.openBlock(),
      e.createBlock(
        e.resolveDynamicComponent("svg"),
        e.mergeProps(t.$props, { viewBox: "0 0 55 80" }),
        { default: e.withCtx(() => [s]), _: 1 },
        16
      )
    );
  }
  var p = o(d, [["render", m]]);
  const f = {
      name: "BallTriangle",
      props: {
        width: { type: [Number, String], default: "100%" },
        height: { type: Number, default: 57 },
        stroke: { type: String, default: "#000" },
      },
    },
    u = e.createElementVNode(
      "g",
      {
        transform: "translate(1 1)",
        "stroke-width": "2",
        fill: "none",
        "fill-rule": "evenodd",
      },
      [
        e.createElementVNode("circle", { cx: "5", cy: "50", r: "5" }, [
          e.createElementVNode("animate", {
            attributeName: "cy",
            begin: "0s",
            dur: "2.2s",
            values: "50;5;50;50",
            calcMode: "linear",
            repeatCount: "indefinite",
          }),
          e.createElementVNode("animate", {
            attributeName: "cx",
            begin: "0s",
            dur: "2.2s",
            values: "5;27;49;5",
            calcMode: "linear",
            repeatCount: "indefinite",
          }),
        ]),
        e.createElementVNode("circle", { cx: "27", cy: "5", r: "5" }, [
          e.createElementVNode("animate", {
            attributeName: "cy",
            begin: "0s",
            dur: "2.2s",
            from: "5",
            to: "5",
            values: "5;50;50;5",
            calcMode: "linear",
            repeatCount: "indefinite",
          }),
          e.createElementVNode("animate", {
            attributeName: "cx",
            begin: "0s",
            dur: "2.2s",
            from: "27",
            to: "27",
            values: "27;49;5;27",
            calcMode: "linear",
            repeatCount: "indefinite",
          }),
        ]),
        e.createElementVNode("circle", { cx: "49", cy: "50", r: "5" }, [
          e.createElementVNode("animate", {
            attributeName: "cy",
            begin: "0s",
            dur: "2.2s",
            values: "50;50;5;50",
            calcMode: "linear",
            repeatCount: "indefinite",
          }),
          e.createElementVNode("animate", {
            attributeName: "cx",
            from: "49",
            to: "49",
            begin: "0s",
            dur: "2.2s",
            values: "49;5;27;49",
            calcMode: "linear",
            repeatCount: "indefinite",
          }),
        ]),
      ],
      -1
    );
  function N(t, n, i, r, c, l) {
    return (
      e.openBlock(),
      e.createBlock(
        e.resolveDynamicComponent("svg"),
        e.mergeProps(t.$props, { viewBox: "0 0 57 57" }),
        { default: e.withCtx(() => [u]), _: 1 },
        16
      )
    );
  }
  var _ = o(f, [["render", N]]);
  const h = {
      name: "Bars",
      props: {
        width: { type: [Number, String], default: "100%" },
        height: { type: Number, default: 140 },
        fill: { type: String, default: "#000" },
      },
    },
    y = e.createElementVNode(
      "rect",
      { y: "10", width: "15", height: "120", rx: "6" },
      [
        e.createElementVNode("animate", {
          attributeName: "height",
          begin: "0.5s",
          dur: "1s",
          values: "120;110;100;90;80;70;60;50;40;140;120",
          calcMode: "linear",
          repeatCount: "indefinite",
        }),
        e.createElementVNode("animate", {
          attributeName: "y",
          begin: "0.5s",
          dur: "1s",
          values: "10;15;20;25;30;35;40;45;50;0;10",
          calcMode: "linear",
          repeatCount: "indefinite",
        }),
      ],
      -1
    ),
    g = e.createElementVNode(
      "rect",
      { x: "30", y: "10", width: "15", height: "120", rx: "6" },
      [
        e.createElementVNode("animate", {
          attributeName: "height",
          begin: "0.25s",
          dur: "1s",
          values: "120;110;100;90;80;70;60;50;40;140;120",
          calcMode: "linear",
          repeatCount: "indefinite",
        }),
        e.createElementVNode("animate", {
          attributeName: "y",
          begin: "0.25s",
          dur: "1s",
          values: "10;15;20;25;30;35;40;45;50;0;10",
          calcMode: "linear",
          repeatCount: "indefinite",
        }),
      ],
      -1
    ),
    b = e.createElementVNode(
      "rect",
      { x: "60", width: "15", height: "140", rx: "6" },
      [
        e.createElementVNode("animate", {
          attributeName: "height",
          begin: "0s",
          dur: "1s",
          values: "120;110;100;90;80;70;60;50;40;140;120",
          calcMode: "linear",
          repeatCount: "indefinite",
        }),
        e.createElementVNode("animate", {
          attributeName: "y",
          begin: "0s",
          dur: "1s",
          values: "10;15;20;25;30;35;40;45;50;0;10",
          calcMode: "linear",
          repeatCount: "indefinite",
        }),
      ],
      -1
    ),
    V = e.createElementVNode(
      "rect",
      { x: "90", y: "10", width: "15", height: "120", rx: "6" },
      [
        e.createElementVNode("animate", {
          attributeName: "height",
          begin: "0.25s",
          dur: "1s",
          values: "120;110;100;90;80;70;60;50;40;140;120",
          calcMode: "linear",
          repeatCount: "indefinite",
        }),
        e.createElementVNode("animate", {
          attributeName: "y",
          begin: "0.25s",
          dur: "1s",
          values: "10;15;20;25;30;35;40;45;50;0;10",
          calcMode: "linear",
          repeatCount: "indefinite",
        }),
      ],
      -1
    ),
    $ = e.createElementVNode(
      "rect",
      { x: "120", y: "10", width: "15", height: "120", rx: "6" },
      [
        e.createElementVNode("animate", {
          attributeName: "height",
          begin: "0.5s",
          dur: "1s",
          values: "120;110;100;90;80;70;60;50;40;140;120",
          calcMode: "linear",
          repeatCount: "indefinite",
        }),
        e.createElementVNode("animate", {
          attributeName: "y",
          begin: "0.5s",
          dur: "1s",
          values: "10;15;20;25;30;35;40;45;50;0;10",
          calcMode: "linear",
          repeatCount: "indefinite",
        }),
      ],
      -1
    );
  function E(t, n, i, r, c, l) {
    return (
      e.openBlock(),
      e.createBlock(
        e.resolveDynamicComponent("svg"),
        e.mergeProps(t.$props, { viewBox: "0 0 135 140" }),
        { default: e.withCtx(() => [y, g, b, V, $]), _: 1 },
        16
      )
    );
  }
  var C = o(h, [["render", E]]);
  const x = {
      name: "Circles",
      props: {
        width: { type: [Number, String], default: "100%" },
        height: { type: Number, default: 135 },
        fill: { type: String, default: "#000" },
      },
    },
    M = e.createElementVNode(
      "path",
      {
        d: "M67.447 58c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10zm9.448 9.447c0 5.523 4.477 10 10 10 5.522 0 10-4.477 10-10s-4.478-10-10-10c-5.523 0-10 4.477-10 10zm-9.448 9.448c-5.523 0-10 4.477-10 10 0 5.522 4.477 10 10 10s10-4.478 10-10c0-5.523-4.477-10-10-10zM58 67.447c0-5.523-4.477-10-10-10s-10 4.477-10 10 4.477 10 10 10 10-4.477 10-10z",
      },
      [
        e.createElementVNode("animateTransform", {
          attributeName: "transform",
          type: "rotate",
          from: "0 67 67",
          to: "-360 67 67",
          dur: "2.5s",
          repeatCount: "indefinite",
        }),
      ],
      -1
    ),
    k = e.createElementVNode(
      "path",
      {
        d: "M28.19 40.31c6.627 0 12-5.374 12-12 0-6.628-5.373-12-12-12-6.628 0-12 5.372-12 12 0 6.626 5.372 12 12 12zm30.72-19.825c4.686 4.687 12.284 4.687 16.97 0 4.686-4.686 4.686-12.284 0-16.97-4.686-4.687-12.284-4.687-16.97 0-4.687 4.686-4.687 12.284 0 16.97zm35.74 7.705c0 6.627 5.37 12 12 12 6.626 0 12-5.373 12-12 0-6.628-5.374-12-12-12-6.63 0-12 5.372-12 12zm19.822 30.72c-4.686 4.686-4.686 12.284 0 16.97 4.687 4.686 12.285 4.686 16.97 0 4.687-4.686 4.687-12.284 0-16.97-4.685-4.687-12.283-4.687-16.97 0zm-7.704 35.74c-6.627 0-12 5.37-12 12 0 6.626 5.373 12 12 12s12-5.374 12-12c0-6.63-5.373-12-12-12zm-30.72 19.822c-4.686-4.686-12.284-4.686-16.97 0-4.686 4.687-4.686 12.285 0 16.97 4.686 4.687 12.284 4.687 16.97 0 4.687-4.685 4.687-12.283 0-16.97zm-35.74-7.704c0-6.627-5.372-12-12-12-6.626 0-12 5.373-12 12s5.374 12 12 12c6.628 0 12-5.373 12-12zm-19.823-30.72c4.687-4.686 4.687-12.284 0-16.97-4.686-4.686-12.284-4.686-16.97 0-4.687 4.686-4.687 12.284 0 16.97 4.686 4.687 12.284 4.687 16.97 0z",
      },
      [
        e.createElementVNode("animateTransform", {
          attributeName: "transform",
          type: "rotate",
          from: "0 67 67",
          to: "360 67 67",
          dur: "8s",
          repeatCount: "indefinite",
        }),
      ],
      -1
    );
  function w(t, n, i, r, c, l) {
    return (
      e.openBlock(),
      e.createBlock(
        e.resolveDynamicComponent("svg"),
        e.mergeProps(t.$props, { viewBox: "0 0 135 135" }),
        { default: e.withCtx(() => [M, k]), _: 1 },
        16
      )
    );
  }
  var B = o(x, [["render", w]]);
  const S = {
      name: "Grid",
      props: {
        width: { type: [Number, String], default: "100%" },
        height: { type: Number, default: 105 },
        fill: { type: String, default: "#000" },
      },
    },
    T = e.createElementVNode(
      "circle",
      { cx: "12.5", cy: "12.5", r: "12.5" },
      [
        e.createElementVNode("animate", {
          attributeName: "fill-opacity",
          begin: "0s",
          dur: "1s",
          values: "1;.2;1",
          calcMode: "linear",
          repeatCount: "indefinite",
        }),
      ],
      -1
    ),
    D = e.createElementVNode(
      "circle",
      { cx: "12.5", cy: "52.5", r: "12.5", "fill-opacity": "0.5" },
      [
        e.createElementVNode("animate", {
          attributeName: "fill-opacity",
          begin: "100ms",
          dur: "1s",
          values: "1;.2;1",
          calcMode: "linear",
          repeatCount: "indefinite",
        }),
      ],
      -1
    ),
    P = e.createElementVNode(
      "circle",
      { cx: "52.5", cy: "12.5", r: "12.5" },
      [
        e.createElementVNode("animate", {
          attributeName: "fill-opacity",
          begin: "300ms",
          dur: "1s",
          values: "1;.2;1",
          calcMode: "linear",
          repeatCount: "indefinite",
        }),
      ],
      -1
    ),
    z = e.createElementVNode(
      "circle",
      { cx: "52.5", cy: "52.5", r: "12.5" },
      [
        e.createElementVNode("animate", {
          attributeName: "fill-opacity",
          begin: "600ms",
          dur: "1s",
          values: "1;.2;1",
          calcMode: "linear",
          repeatCount: "indefinite",
        }),
      ],
      -1
    ),
    R = e.createElementVNode(
      "circle",
      { cx: "92.5", cy: "12.5", r: "12.5" },
      [
        e.createElementVNode("animate", {
          attributeName: "fill-opacity",
          begin: "800ms",
          dur: "1s",
          values: "1;.2;1",
          calcMode: "linear",
          repeatCount: "indefinite",
        }),
      ],
      -1
    ),
    A = e.createElementVNode(
      "circle",
      { cx: "92.5", cy: "52.5", r: "12.5" },
      [
        e.createElementVNode("animate", {
          attributeName: "fill-opacity",
          begin: "400ms",
          dur: "1s",
          values: "1;.2;1",
          calcMode: "linear",
          repeatCount: "indefinite",
        }),
      ],
      -1
    ),
    G = e.createElementVNode(
      "circle",
      { cx: "12.5", cy: "92.5", r: "12.5" },
      [
        e.createElementVNode("animate", {
          attributeName: "fill-opacity",
          begin: "700ms",
          dur: "1s",
          values: "1;.2;1",
          calcMode: "linear",
          repeatCount: "indefinite",
        }),
      ],
      -1
    ),
    L = e.createElementVNode(
      "circle",
      { cx: "52.5", cy: "92.5", r: "12.5" },
      [
        e.createElementVNode("animate", {
          attributeName: "fill-opacity",
          begin: "500ms",
          dur: "1s",
          values: "1;.2;1",
          calcMode: "linear",
          repeatCount: "indefinite",
        }),
      ],
      -1
    ),
    O = e.createElementVNode(
      "circle",
      { cx: "92.5", cy: "92.5", r: "12.5" },
      [
        e.createElementVNode("animate", {
          attributeName: "fill-opacity",
          begin: "200ms",
          dur: "1s",
          values: "1;.2;1",
          calcMode: "linear",
          repeatCount: "indefinite",
        }),
      ],
      -1
    );
  function j(t, n, i, r, c, l) {
    return (
      e.openBlock(),
      e.createBlock(
        e.resolveDynamicComponent("svg"),
        e.mergeProps(t.$props, { viewBox: "0 0 105 105" }),
        { default: e.withCtx(() => [T, D, P, z, R, A, G, L, O]), _: 1 },
        16
      )
    );
  }
  var H = o(S, [["render", j]]);
  const q = {
      name: "Hearts",
      props: {
        width: { type: [Number, String], default: "100%" },
        height: { type: Number, default: 64 },
        fill: { type: String, default: "#000" },
      },
    },
    Y = e.createElementVNode(
      "path",
      {
        d: "M30.262 57.02L7.195 40.723c-5.84-3.976-7.56-12.06-3.842-18.063 3.715-6 11.467-7.65 17.306-3.68l4.52 3.76 2.6-5.274c3.717-6.002 11.47-7.65 17.305-3.68 5.84 3.97 7.56 12.054 3.842 18.062L34.49 56.118c-.897 1.512-2.793 1.915-4.228.9z",
        "fill-opacity": "0.5",
      },
      [
        e.createElementVNode("animate", {
          attributeName: "fill-opacity",
          begin: "0s",
          dur: "1.4s",
          values: "0.5;1;0.5",
          calcMode: "linear",
          repeatCount: "indefinite",
        }),
      ],
      -1
    ),
    F = e.createElementVNode(
      "path",
      {
        d: "M105.512 56.12l-14.44-24.272c-3.716-6.008-1.996-14.093 3.843-18.062 5.835-3.97 13.588-2.322 17.306 3.68l2.6 5.274 4.52-3.76c5.84-3.97 13.592-2.32 17.307 3.68 3.718 6.003 1.998 14.088-3.842 18.064L109.74 57.02c-1.434 1.014-3.33.61-4.228-.9z",
        "fill-opacity": "0.5",
      },
      [
        e.createElementVNode("animate", {
          attributeName: "fill-opacity",
          begin: "0.7s",
          dur: "1.4s",
          values: "0.5;1;0.5",
          calcMode: "linear",
          repeatCount: "indefinite",
        }),
      ],
      -1
    ),
    I = e.createElementVNode(
      "path",
      {
        d: "M67.408 57.834l-23.01-24.98c-5.864-6.15-5.864-16.108 0-22.248 5.86-6.14 15.37-6.14 21.234 0L70 16.168l4.368-5.562c5.863-6.14 15.375-6.14 21.235 0 5.863 6.14 5.863 16.098 0 22.247l-23.007 24.98c-1.43 1.556-3.757 1.556-5.188 0z",
      },
      null,
      -1
    );
  function J(t, n, i, r, c, l) {
    return (
      e.openBlock(),
      e.createBlock(
        e.resolveDynamicComponent("svg"),
        e.mergeProps(t.$props, { viewBox: "0 0 140 64" }),
        { default: e.withCtx(() => [Y, F, I]), _: 1 },
        16
      )
    );
  }
  var K = o(q, [["render", J]]);
  const Q = {
      name: "Oval",
      props: {
        width: { type: [Number, String], default: "100%" },
        height: { type: Number, default: 38 },
        stroke: { type: String, default: "#000" },
      },
    },
    U = e.createElementVNode(
      "g",
      {
        transform: "translate(1 1)",
        "stroke-width": "2",
        fill: "none",
        "fill-rule": "evenodd",
      },
      [
        e.createElementVNode("circle", {
          "stroke-opacity": "0.5",
          cx: "18",
          cy: "18",
          r: "18",
        }),
        e.createElementVNode("path", { d: "M36 18c0-9.94-8.06-18-18-18" }, [
          e.createElementVNode("animateTransform", {
            attributeName: "transform",
            type: "rotate",
            from: "0 18 18",
            to: "360 18 18",
            dur: "1s",
            repeatCount: "indefinite",
          }),
        ]),
      ],
      -1
    );
  function W(t, n, i, r, c, l) {
    return (
      e.openBlock(),
      e.createBlock(
        e.resolveDynamicComponent("svg"),
        e.mergeProps(t.$props, { viewBox: "0 0 38 38" }),
        { default: e.withCtx(() => [U]), _: 1 },
        16
      )
    );
  }
  var X = o(Q, [["render", W]]);
  const Z = {
      name: "Puff",
      props: {
        width: { type: [Number, String], default: "100%" },
        height: { type: Number, default: 44 },
        stroke: { type: String, default: "#000" },
      },
    },
    v = e.createElementVNode(
      "g",
      { fill: "none", "fill-rule": "evenodd", "stroke-width": "2" },
      [
        e.createElementVNode("circle", { cx: "22", cy: "22", r: "1" }, [
          e.createElementVNode("animate", {
            attributeName: "r",
            begin: "0s",
            dur: "1.8s",
            values: "1; 20",
            calcMode: "spline",
            keyTimes: "0; 1",
            keySplines: "0.165, 0.84, 0.44, 1",
            repeatCount: "indefinite",
          }),
          e.createElementVNode("animate", {
            attributeName: "stroke-opacity",
            begin: "0s",
            dur: "1.8s",
            values: "1; 0",
            calcMode: "spline",
            keyTimes: "0; 1",
            keySplines: "0.3, 0.61, 0.355, 1",
            repeatCount: "indefinite",
          }),
        ]),
        e.createElementVNode("circle", { cx: "22", cy: "22", r: "1" }, [
          e.createElementVNode("animate", {
            attributeName: "r",
            begin: "-0.9s",
            dur: "1.8s",
            values: "1; 20",
            calcMode: "spline",
            keyTimes: "0; 1",
            keySplines: "0.165, 0.84, 0.44, 1",
            repeatCount: "indefinite",
          }),
          e.createElementVNode("animate", {
            attributeName: "stroke-opacity",
            begin: "-0.9s",
            dur: "1.8s",
            values: "1; 0",
            calcMode: "spline",
            keyTimes: "0; 1",
            keySplines: "0.3, 0.61, 0.355, 1",
            repeatCount: "indefinite",
          }),
        ]),
      ],
      -1
    );
  function ee(t, n, i, r, c, l) {
    return (
      e.openBlock(),
      e.createBlock(
        e.resolveDynamicComponent("svg"),
        e.mergeProps(t.$props, { viewBox: "0 0 44 44" }),
        { default: e.withCtx(() => [v]), _: 1 },
        16
      )
    );
  }
  var te = o(Z, [["render", ee]]);
  const ae = {
      name: "Rings",
      props: {
        width: { type: [Number, String], default: "100%" },
        height: { type: Number, default: 45 },
        stroke: { type: String, default: "#000" },
      },
    },
    ie = e.createElementVNode(
      "g",
      {
        fill: "none",
        "fill-rule": "evenodd",
        transform: "translate(1 1)",
        "stroke-width": "2",
      },
      [
        e.createElementVNode(
          "circle",
          { cx: "22", cy: "22", r: "6", "stroke-opacity": "0" },
          [
            e.createElementVNode("animate", {
              attributeName: "r",
              begin: "1.5s",
              dur: "3s",
              values: "6;22",
              calcMode: "linear",
              repeatCount: "indefinite",
            }),
            e.createElementVNode("animate", {
              attributeName: "stroke-opacity",
              begin: "1.5s",
              dur: "3s",
              values: "1;0",
              calcMode: "linear",
              repeatCount: "indefinite",
            }),
            e.createElementVNode("animate", {
              attributeName: "stroke-width",
              begin: "1.5s",
              dur: "3s",
              values: "2;0",
              calcMode: "linear",
              repeatCount: "indefinite",
            }),
          ]
        ),
        e.createElementVNode(
          "circle",
          { cx: "22", cy: "22", r: "6", "stroke-opacity": "0" },
          [
            e.createElementVNode("animate", {
              attributeName: "r",
              begin: "3s",
              dur: "3s",
              values: "6;22",
              calcMode: "linear",
              repeatCount: "indefinite",
            }),
            e.createElementVNode("animate", {
              attributeName: "stroke-opacity",
              begin: "3s",
              dur: "3s",
              values: "1;0",
              calcMode: "linear",
              repeatCount: "indefinite",
            }),
            e.createElementVNode("animate", {
              attributeName: "stroke-width",
              begin: "3s",
              dur: "3s",
              values: "2;0",
              calcMode: "linear",
              repeatCount: "indefinite",
            }),
          ]
        ),
        e.createElementVNode("circle", { cx: "22", cy: "22", r: "8" }, [
          e.createElementVNode("animate", {
            attributeName: "r",
            begin: "0s",
            dur: "1.5s",
            values: "6;1;2;3;4;5;6",
            calcMode: "linear",
            repeatCount: "indefinite",
          }),
        ]),
      ],
      -1
    );
  function ne(t, n, i, r, c, l) {
    return (
      e.openBlock(),
      e.createBlock(
        e.resolveDynamicComponent("svg"),
        e.mergeProps(t.$props, { viewBox: "0 0 45 45" }),
        { default: e.withCtx(() => [ie]), _: 1 },
        16
      )
    );
  }
  var re = o(ae, [["render", ne]]);
  const oe = {
      name: "SpinningCircles",
      props: {
        width: { type: [Number, String], default: "100%" },
        height: { type: Number, default: 58 },
        stroke: { type: String, default: "#000" },
        fill: { type: String, default: "#000" },
      },
    },
    ce = ["stroke", "fill"],
    le = [
      e.createElementVNode(
        "circle",
        { cx: "42.601", cy: "11.462", r: "5" },
        [
          e.createElementVNode("animate", {
            attributeName: "fill-opacity",
            begin: "0s",
            dur: "1.3s",
            values: "1;0;0;0;0;0;0;0",
            calcMode: "linear",
            repeatCount: "indefinite",
          }),
        ],
        -1
      ),
      e.createElementVNode(
        "circle",
        { cx: "49.063", cy: "27.063", r: "5", "fill-opacity": "0" },
        [
          e.createElementVNode("animate", {
            attributeName: "fill-opacity",
            begin: "0s",
            dur: "1.3s",
            values: "0;1;0;0;0;0;0;0",
            calcMode: "linear",
            repeatCount: "indefinite",
          }),
        ],
        -1
      ),
      e.createElementVNode(
        "circle",
        { cx: "42.601", cy: "42.663", r: "5", "fill-opacity": "0" },
        [
          e.createElementVNode("animate", {
            attributeName: "fill-opacity",
            begin: "0s",
            dur: "1.3s",
            values: "0;0;1;0;0;0;0;0",
            calcMode: "linear",
            repeatCount: "indefinite",
          }),
        ],
        -1
      ),
      e.createElementVNode(
        "circle",
        { cx: "27", cy: "49.125", r: "5", "fill-opacity": "0" },
        [
          e.createElementVNode("animate", {
            attributeName: "fill-opacity",
            begin: "0s",
            dur: "1.3s",
            values: "0;0;0;1;0;0;0;0",
            calcMode: "linear",
            repeatCount: "indefinite",
          }),
        ],
        -1
      ),
      e.createElementVNode(
        "circle",
        { cx: "11.399", cy: "42.663", r: "5", "fill-opacity": "0" },
        [
          e.createElementVNode("animate", {
            attributeName: "fill-opacity",
            begin: "0s",
            dur: "1.3s",
            values: "0;0;0;0;1;0;0;0",
            calcMode: "linear",
            repeatCount: "indefinite",
          }),
        ],
        -1
      ),
      e.createElementVNode(
        "circle",
        { cx: "4.938", cy: "27.063", r: "5", "fill-opacity": "0" },
        [
          e.createElementVNode("animate", {
            attributeName: "fill-opacity",
            begin: "0s",
            dur: "1.3s",
            values: "0;0;0;0;0;1;0;0",
            calcMode: "linear",
            repeatCount: "indefinite",
          }),
        ],
        -1
      ),
      e.createElementVNode(
        "circle",
        { cx: "11.399", cy: "11.462", r: "5", "fill-opacity": "0" },
        [
          e.createElementVNode("animate", {
            attributeName: "fill-opacity",
            begin: "0s",
            dur: "1.3s",
            values: "0;0;0;0;0;0;1;0",
            calcMode: "linear",
            repeatCount: "indefinite",
          }),
        ],
        -1
      ),
      e.createElementVNode(
        "circle",
        { cx: "27", cy: "5", r: "5", "fill-opacity": "0" },
        [
          e.createElementVNode("animate", {
            attributeName: "fill-opacity",
            begin: "0s",
            dur: "1.3s",
            values: "0;0;0;0;0;0;0;1",
            calcMode: "linear",
            repeatCount: "indefinite",
          }),
        ],
        -1
      ),
    ];
  function de(t, n, i, r, c, l) {
    return (
      e.openBlock(),
      e.createBlock(
        e.resolveDynamicComponent("svg"),
        e.mergeProps(t.$props, { viewBox: "0 0 58 58" }),
        {
          default: e.withCtx(() => [
            e.createElementVNode(
              "g",
              {
                transform: "translate(2 1)",
                stroke: i.stroke,
                "stroke-width": "1.5",
                fill: i.fill,
                "fill-rule": "evenodd",
              },
              le,
              8,
              ce
            ),
          ]),
          _: 1,
        },
        16
      )
    );
  }
  var se = o(oe, [["render", de]]);
  const me = {
      name: "TailSpin",
      props: {
        width: { type: [Number, String], default: "100%" },
        height: { type: Number, default: 30 },
        stopColor: { type: String, default: "#000" },
      },
    },
    pe = {
      x1: "8.042%",
      y1: "0%",
      x2: "65.682%",
      y2: "23.865%",
      id: "prefix__a",
    },
    fe = ["stop-color"],
    ue = ["stop-color"],
    Ne = ["stop-color"],
    _e = e.createElementVNode(
      "g",
      { transform: "translate(1 1)", fill: "none", "fill-rule": "evenodd" },
      [
        e.createElementVNode(
          "path",
          {
            d: "M36 18c0-9.94-8.06-18-18-18",
            stroke: "url(#prefix__a)",
            "stroke-width": "2",
          },
          [
            e.createElementVNode("animateTransform", {
              attributeName: "transform",
              type: "rotate",
              from: "0 18 18",
              to: "360 18 18",
              dur: "0.9s",
              repeatCount: "indefinite",
            }),
          ]
        ),
        e.createElementVNode(
          "circle",
          { fill: "#fff", cx: "36", cy: "18", r: "1" },
          [
            e.createElementVNode("animateTransform", {
              attributeName: "transform",
              type: "rotate",
              from: "0 18 18",
              to: "360 18 18",
              dur: "0.9s",
              repeatCount: "indefinite",
            }),
          ]
        ),
      ],
      -1
    );
  function he(t, n, i, r, c, l) {
    return (
      e.openBlock(),
      e.createBlock(
        e.resolveDynamicComponent("svg"),
        e.mergeProps(t.$props, { viewBox: "0 0 38 38" }),
        {
          default: e.withCtx(() => [
            e.createElementVNode("defs", null, [
              e.createElementVNode("linearGradient", pe, [
                e.createElementVNode(
                  "stop",
                  {
                    "stop-color": i.stopColor,
                    "stop-opacity": "0",
                    offset: "0%",
                  },
                  null,
                  8,
                  fe
                ),
                e.createElementVNode(
                  "stop",
                  {
                    "stop-color": i.stopColor,
                    "stop-opacity": "0.631",
                    offset: "63.146%",
                  },
                  null,
                  8,
                  ue
                ),
                e.createElementVNode(
                  "stop",
                  { "stop-color": i.stopColor, offset: "100%" },
                  null,
                  8,
                  Ne
                ),
              ]),
            ]),
            _e,
          ]),
          _: 1,
        },
        16
      )
    );
  }
  var ye = o(me, [["render", he]]);
  const ge = {
      name: "ThreeDots",
      props: {
        width: { type: [Number, String], default: "100%" },
        height: { type: Number, default: 58 },
        fill: { type: String, default: "#000" },
      },
    },
    be = e.createElementVNode(
      "circle",
      { cx: "15", cy: "15", r: "15" },
      [
        e.createElementVNode("animate", {
          attributeName: "r",
          from: "15",
          to: "15",
          begin: "0s",
          dur: "0.8s",
          values: "15;9;15",
          calcMode: "linear",
          repeatCount: "indefinite",
        }),
        e.createElementVNode("animate", {
          attributeName: "fill-opacity",
          from: "1",
          to: "1",
          begin: "0s",
          dur: "0.8s",
          values: "1;.5;1",
          calcMode: "linear",
          repeatCount: "indefinite",
        }),
      ],
      -1
    ),
    Ve = e.createElementVNode(
      "circle",
      { cx: "60", cy: "15", r: "9", "fill-opacity": "0.3" },
      [
        e.createElementVNode("animate", {
          attributeName: "r",
          from: "9",
          to: "9",
          begin: "0s",
          dur: "0.8s",
          values: "9;15;9",
          calcMode: "linear",
          repeatCount: "indefinite",
        }),
        e.createElementVNode("animate", {
          attributeName: "fill-opacity",
          from: "0.5",
          to: "0.5",
          begin: "0s",
          dur: "0.8s",
          values: ".5;1;.5",
          calcMode: "linear",
          repeatCount: "indefinite",
        }),
      ],
      -1
    ),
    $e = e.createElementVNode(
      "circle",
      { cx: "105", cy: "15", r: "15" },
      [
        e.createElementVNode("animate", {
          attributeName: "r",
          from: "15",
          to: "15",
          begin: "0s",
          dur: "0.8s",
          values: "15;9;15",
          calcMode: "linear",
          repeatCount: "indefinite",
        }),
        e.createElementVNode("animate", {
          attributeName: "fill-opacity",
          from: "1",
          to: "1",
          begin: "0s",
          dur: "0.8s",
          values: "1;.5;1",
          calcMode: "linear",
          repeatCount: "indefinite",
        }),
      ],
      -1
    );
  function Ee(t, n, i, r, c, l) {
    return (
      e.openBlock(),
      e.createBlock(
        e.resolveDynamicComponent("svg"),
        e.mergeProps(t.$props, { viewBox: "0 0 120 30" }),
        { default: e.withCtx(() => [be, Ve, $e]), _: 1 },
        16
      )
    );
  }
  var Ce = o(ge, [["render", Ee]]);
  const xe = {
      name: "DualRing",
      props: {
        width: { type: [Number, String], default: "100%" },
        height: { type: Number, default: 50 },
        stroke: { type: String, default: "#000" },
      },
    },
    Me = ["stroke"],
    ke = [
      e.createElementVNode(
        "animateTransform",
        {
          attributeName: "transform",
          type: "rotate",
          repeatCount: "indefinite",
          dur: "1.1363636363636365s",
          keyTimes: "0;1",
          values: "0 50 50;360 50 50",
        },
        null,
        -1
      ),
    ];
  function we(t, n, i, r, c, l) {
    return (
      e.openBlock(),
      e.createBlock(
        e.resolveDynamicComponent("svg"),
        e.mergeProps(t.$props, {
          viewBox: "0 0 100 100",
          preserveAspectRatio: "xMidYMid",
        }),
        {
          default: e.withCtx(() => [
            e.createElementVNode(
              "circle",
              {
                cx: "50",
                cy: "50",
                r: "30",
                "stroke-width": "8",
                stroke: i.stroke,
                "stroke-dasharray": "47.12388980384689 47.12388980384689",
                fill: "none",
                "stroke-linecap": "round",
              },
              ke,
              8,
              Me
            ),
          ]),
          _: 1,
        },
        16
      )
    );
  }
  var Be = o(xe, [["render", we]]);
  (a.Audio = p),
    (a.BallTriangle = _),
    (a.Bars = C),
    (a.Circles = B),
    (a.DualRing = Be),
    (a.Grid = H),
    (a.Hearts = K),
    (a.Oval = X),
    (a.Puff = te),
    (a.Rings = re),
    (a.SpinningCircles = se),
    (a.TailSpin = ye),
    (a.ThreeDots = Ce),
    Object.defineProperty(a, "__esModule", { value: !0 }),
    (a[Symbol.toStringTag] = "Module");
});
