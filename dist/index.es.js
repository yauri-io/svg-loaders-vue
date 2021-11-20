import {
  openBlock,
  createBlock,
  resolveDynamicComponent,
  mergeProps,
  withCtx,
  createElementVNode,
} from "vue";
var _export_sfc = (sfc, props) => {
  for (const [key, val] of props) {
    sfc[key] = val;
  }
  return sfc;
};
const _sfc_main$c = {
  name: "Audio",
  props: {
    width: {
      type: [Number, String],
      default: "100%",
    },
    height: {
      type: Number,
      default: 80,
    },
    fill: {
      type: String,
      default: "#000",
    },
  },
};
const _hoisted_1$c = /* @__PURE__ */ createElementVNode(
  "g",
  { transform: "matrix(1 0 0 -1 0 80)" },
  [
    /* @__PURE__ */ createElementVNode(
      "rect",
      {
        width: "10",
        height: "20",
        rx: "3",
      },
      [
        /* @__PURE__ */ createElementVNode("animate", {
          attributeName: "height",
          begin: "0s",
          dur: "4.3s",
          values:
            "20;45;57;80;64;32;66;45;64;23;66;13;64;56;34;34;2;23;76;79;20",
          calcMode: "linear",
          repeatCount: "indefinite",
        }),
      ]
    ),
    /* @__PURE__ */ createElementVNode(
      "rect",
      {
        x: "15",
        width: "10",
        height: "80",
        rx: "3",
      },
      [
        /* @__PURE__ */ createElementVNode("animate", {
          attributeName: "height",
          begin: "0s",
          dur: "2s",
          values: "80;55;33;5;75;23;73;33;12;14;60;80",
          calcMode: "linear",
          repeatCount: "indefinite",
        }),
      ]
    ),
    /* @__PURE__ */ createElementVNode(
      "rect",
      {
        x: "30",
        width: "10",
        height: "50",
        rx: "3",
      },
      [
        /* @__PURE__ */ createElementVNode("animate", {
          attributeName: "height",
          begin: "0s",
          dur: "1.4s",
          values: "50;34;78;23;56;23;34;76;80;54;21;50",
          calcMode: "linear",
          repeatCount: "indefinite",
        }),
      ]
    ),
    /* @__PURE__ */ createElementVNode(
      "rect",
      {
        x: "45",
        width: "10",
        height: "30",
        rx: "3",
      },
      [
        /* @__PURE__ */ createElementVNode("animate", {
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
function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
  return (
    openBlock(),
    createBlock(
      resolveDynamicComponent("svg"),
      mergeProps(_ctx.$props, { viewBox: "0 0 55 80" }),
      {
        default: withCtx(() => [_hoisted_1$c]),
        _: 1,
      },
      16
    )
  );
}
var Audio = /* @__PURE__ */ _export_sfc(_sfc_main$c, [
  ["render", _sfc_render$c],
]);
const _sfc_main$b = {
  name: "BallTriangle",
  props: {
    width: {
      type: [Number, String],
      default: "100%",
    },
    height: {
      type: Number,
      default: 57,
    },
    stroke: {
      type: String,
      default: "#000",
    },
  },
};
const _hoisted_1$b = /* @__PURE__ */ createElementVNode(
  "g",
  {
    transform: "translate(1 1)",
    "stroke-width": "2",
    fill: "none",
    "fill-rule": "evenodd",
  },
  [
    /* @__PURE__ */ createElementVNode(
      "circle",
      {
        cx: "5",
        cy: "50",
        r: "5",
      },
      [
        /* @__PURE__ */ createElementVNode("animate", {
          attributeName: "cy",
          begin: "0s",
          dur: "2.2s",
          values: "50;5;50;50",
          calcMode: "linear",
          repeatCount: "indefinite",
        }),
        /* @__PURE__ */ createElementVNode("animate", {
          attributeName: "cx",
          begin: "0s",
          dur: "2.2s",
          values: "5;27;49;5",
          calcMode: "linear",
          repeatCount: "indefinite",
        }),
      ]
    ),
    /* @__PURE__ */ createElementVNode(
      "circle",
      {
        cx: "27",
        cy: "5",
        r: "5",
      },
      [
        /* @__PURE__ */ createElementVNode("animate", {
          attributeName: "cy",
          begin: "0s",
          dur: "2.2s",
          from: "5",
          to: "5",
          values: "5;50;50;5",
          calcMode: "linear",
          repeatCount: "indefinite",
        }),
        /* @__PURE__ */ createElementVNode("animate", {
          attributeName: "cx",
          begin: "0s",
          dur: "2.2s",
          from: "27",
          to: "27",
          values: "27;49;5;27",
          calcMode: "linear",
          repeatCount: "indefinite",
        }),
      ]
    ),
    /* @__PURE__ */ createElementVNode(
      "circle",
      {
        cx: "49",
        cy: "50",
        r: "5",
      },
      [
        /* @__PURE__ */ createElementVNode("animate", {
          attributeName: "cy",
          begin: "0s",
          dur: "2.2s",
          values: "50;50;5;50",
          calcMode: "linear",
          repeatCount: "indefinite",
        }),
        /* @__PURE__ */ createElementVNode("animate", {
          attributeName: "cx",
          from: "49",
          to: "49",
          begin: "0s",
          dur: "2.2s",
          values: "49;5;27;49",
          calcMode: "linear",
          repeatCount: "indefinite",
        }),
      ]
    ),
  ],
  -1
);
function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
  return (
    openBlock(),
    createBlock(
      resolveDynamicComponent("svg"),
      mergeProps(_ctx.$props, { viewBox: "0 0 57 57" }),
      {
        default: withCtx(() => [_hoisted_1$b]),
        _: 1,
      },
      16
    )
  );
}
var BallTriangle = /* @__PURE__ */ _export_sfc(_sfc_main$b, [
  ["render", _sfc_render$b],
]);
const _sfc_main$a = {
  name: "Bars",
  props: {
    width: {
      type: [Number, String],
      default: "100%",
    },
    height: {
      type: Number,
      default: 140,
    },
    fill: {
      type: String,
      default: "#000",
    },
  },
};
const _hoisted_1$a = /* @__PURE__ */ createElementVNode(
  "rect",
  {
    y: "10",
    width: "15",
    height: "120",
    rx: "6",
  },
  [
    /* @__PURE__ */ createElementVNode("animate", {
      attributeName: "height",
      begin: "0.5s",
      dur: "1s",
      values: "120;110;100;90;80;70;60;50;40;140;120",
      calcMode: "linear",
      repeatCount: "indefinite",
    }),
    /* @__PURE__ */ createElementVNode("animate", {
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
const _hoisted_2$7 = /* @__PURE__ */ createElementVNode(
  "rect",
  {
    x: "30",
    y: "10",
    width: "15",
    height: "120",
    rx: "6",
  },
  [
    /* @__PURE__ */ createElementVNode("animate", {
      attributeName: "height",
      begin: "0.25s",
      dur: "1s",
      values: "120;110;100;90;80;70;60;50;40;140;120",
      calcMode: "linear",
      repeatCount: "indefinite",
    }),
    /* @__PURE__ */ createElementVNode("animate", {
      attributeName: "y",
      begin: "0.25s",
      dur: "1s",
      values: "10;15;20;25;30;35;40;45;50;0;10",
      calcMode: "linear",
      repeatCount: "indefinite",
    }),
  ],
  -1
);
const _hoisted_3$6 = /* @__PURE__ */ createElementVNode(
  "rect",
  {
    x: "60",
    width: "15",
    height: "140",
    rx: "6",
  },
  [
    /* @__PURE__ */ createElementVNode("animate", {
      attributeName: "height",
      begin: "0s",
      dur: "1s",
      values: "120;110;100;90;80;70;60;50;40;140;120",
      calcMode: "linear",
      repeatCount: "indefinite",
    }),
    /* @__PURE__ */ createElementVNode("animate", {
      attributeName: "y",
      begin: "0s",
      dur: "1s",
      values: "10;15;20;25;30;35;40;45;50;0;10",
      calcMode: "linear",
      repeatCount: "indefinite",
    }),
  ],
  -1
);
const _hoisted_4$3 = /* @__PURE__ */ createElementVNode(
  "rect",
  {
    x: "90",
    y: "10",
    width: "15",
    height: "120",
    rx: "6",
  },
  [
    /* @__PURE__ */ createElementVNode("animate", {
      attributeName: "height",
      begin: "0.25s",
      dur: "1s",
      values: "120;110;100;90;80;70;60;50;40;140;120",
      calcMode: "linear",
      repeatCount: "indefinite",
    }),
    /* @__PURE__ */ createElementVNode("animate", {
      attributeName: "y",
      begin: "0.25s",
      dur: "1s",
      values: "10;15;20;25;30;35;40;45;50;0;10",
      calcMode: "linear",
      repeatCount: "indefinite",
    }),
  ],
  -1
);
const _hoisted_5$3 = /* @__PURE__ */ createElementVNode(
  "rect",
  {
    x: "120",
    y: "10",
    width: "15",
    height: "120",
    rx: "6",
  },
  [
    /* @__PURE__ */ createElementVNode("animate", {
      attributeName: "height",
      begin: "0.5s",
      dur: "1s",
      values: "120;110;100;90;80;70;60;50;40;140;120",
      calcMode: "linear",
      repeatCount: "indefinite",
    }),
    /* @__PURE__ */ createElementVNode("animate", {
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
function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
  return (
    openBlock(),
    createBlock(
      resolveDynamicComponent("svg"),
      mergeProps(_ctx.$props, { viewBox: "0 0 135 140" }),
      {
        default: withCtx(() => [
          _hoisted_1$a,
          _hoisted_2$7,
          _hoisted_3$6,
          _hoisted_4$3,
          _hoisted_5$3,
        ]),
        _: 1,
      },
      16
    )
  );
}
var Bars = /* @__PURE__ */ _export_sfc(_sfc_main$a, [
  ["render", _sfc_render$a],
]);
const _sfc_main$9 = {
  name: "Circles",
  props: {
    width: {
      type: [Number, String],
      default: "100%",
    },
    height: {
      type: Number,
      default: 135,
    },
    fill: {
      type: String,
      default: "#000",
    },
  },
};
const _hoisted_1$9 = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M67.447 58c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10zm9.448 9.447c0 5.523 4.477 10 10 10 5.522 0 10-4.477 10-10s-4.478-10-10-10c-5.523 0-10 4.477-10 10zm-9.448 9.448c-5.523 0-10 4.477-10 10 0 5.522 4.477 10 10 10s10-4.478 10-10c0-5.523-4.477-10-10-10zM58 67.447c0-5.523-4.477-10-10-10s-10 4.477-10 10 4.477 10 10 10 10-4.477 10-10z",
  },
  [
    /* @__PURE__ */ createElementVNode("animateTransform", {
      attributeName: "transform",
      type: "rotate",
      from: "0 67 67",
      to: "-360 67 67",
      dur: "2.5s",
      repeatCount: "indefinite",
    }),
  ],
  -1
);
const _hoisted_2$6 = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M28.19 40.31c6.627 0 12-5.374 12-12 0-6.628-5.373-12-12-12-6.628 0-12 5.372-12 12 0 6.626 5.372 12 12 12zm30.72-19.825c4.686 4.687 12.284 4.687 16.97 0 4.686-4.686 4.686-12.284 0-16.97-4.686-4.687-12.284-4.687-16.97 0-4.687 4.686-4.687 12.284 0 16.97zm35.74 7.705c0 6.627 5.37 12 12 12 6.626 0 12-5.373 12-12 0-6.628-5.374-12-12-12-6.63 0-12 5.372-12 12zm19.822 30.72c-4.686 4.686-4.686 12.284 0 16.97 4.687 4.686 12.285 4.686 16.97 0 4.687-4.686 4.687-12.284 0-16.97-4.685-4.687-12.283-4.687-16.97 0zm-7.704 35.74c-6.627 0-12 5.37-12 12 0 6.626 5.373 12 12 12s12-5.374 12-12c0-6.63-5.373-12-12-12zm-30.72 19.822c-4.686-4.686-12.284-4.686-16.97 0-4.686 4.687-4.686 12.285 0 16.97 4.686 4.687 12.284 4.687 16.97 0 4.687-4.685 4.687-12.283 0-16.97zm-35.74-7.704c0-6.627-5.372-12-12-12-6.626 0-12 5.373-12 12s5.374 12 12 12c6.628 0 12-5.373 12-12zm-19.823-30.72c4.687-4.686 4.687-12.284 0-16.97-4.686-4.686-12.284-4.686-16.97 0-4.687 4.686-4.687 12.284 0 16.97 4.686 4.687 12.284 4.687 16.97 0z",
  },
  [
    /* @__PURE__ */ createElementVNode("animateTransform", {
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
function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
  return (
    openBlock(),
    createBlock(
      resolveDynamicComponent("svg"),
      mergeProps(_ctx.$props, { viewBox: "0 0 135 135" }),
      {
        default: withCtx(() => [_hoisted_1$9, _hoisted_2$6]),
        _: 1,
      },
      16
    )
  );
}
var Circles = /* @__PURE__ */ _export_sfc(_sfc_main$9, [
  ["render", _sfc_render$9],
]);
const _sfc_main$8 = {
  name: "Grid",
  props: {
    width: {
      type: [Number, String],
      default: "100%",
    },
    height: {
      type: Number,
      default: 105,
    },
    fill: {
      type: String,
      default: "#000",
    },
  },
};
const _hoisted_1$8 = /* @__PURE__ */ createElementVNode(
  "circle",
  {
    cx: "12.5",
    cy: "12.5",
    r: "12.5",
  },
  [
    /* @__PURE__ */ createElementVNode("animate", {
      attributeName: "fill-opacity",
      begin: "0s",
      dur: "1s",
      values: "1;.2;1",
      calcMode: "linear",
      repeatCount: "indefinite",
    }),
  ],
  -1
);
const _hoisted_2$5 = /* @__PURE__ */ createElementVNode(
  "circle",
  {
    cx: "12.5",
    cy: "52.5",
    r: "12.5",
    "fill-opacity": "0.5",
  },
  [
    /* @__PURE__ */ createElementVNode("animate", {
      attributeName: "fill-opacity",
      begin: "100ms",
      dur: "1s",
      values: "1;.2;1",
      calcMode: "linear",
      repeatCount: "indefinite",
    }),
  ],
  -1
);
const _hoisted_3$5 = /* @__PURE__ */ createElementVNode(
  "circle",
  {
    cx: "52.5",
    cy: "12.5",
    r: "12.5",
  },
  [
    /* @__PURE__ */ createElementVNode("animate", {
      attributeName: "fill-opacity",
      begin: "300ms",
      dur: "1s",
      values: "1;.2;1",
      calcMode: "linear",
      repeatCount: "indefinite",
    }),
  ],
  -1
);
const _hoisted_4$2 = /* @__PURE__ */ createElementVNode(
  "circle",
  {
    cx: "52.5",
    cy: "52.5",
    r: "12.5",
  },
  [
    /* @__PURE__ */ createElementVNode("animate", {
      attributeName: "fill-opacity",
      begin: "600ms",
      dur: "1s",
      values: "1;.2;1",
      calcMode: "linear",
      repeatCount: "indefinite",
    }),
  ],
  -1
);
const _hoisted_5$2 = /* @__PURE__ */ createElementVNode(
  "circle",
  {
    cx: "92.5",
    cy: "12.5",
    r: "12.5",
  },
  [
    /* @__PURE__ */ createElementVNode("animate", {
      attributeName: "fill-opacity",
      begin: "800ms",
      dur: "1s",
      values: "1;.2;1",
      calcMode: "linear",
      repeatCount: "indefinite",
    }),
  ],
  -1
);
const _hoisted_6$1 = /* @__PURE__ */ createElementVNode(
  "circle",
  {
    cx: "92.5",
    cy: "52.5",
    r: "12.5",
  },
  [
    /* @__PURE__ */ createElementVNode("animate", {
      attributeName: "fill-opacity",
      begin: "400ms",
      dur: "1s",
      values: "1;.2;1",
      calcMode: "linear",
      repeatCount: "indefinite",
    }),
  ],
  -1
);
const _hoisted_7$1 = /* @__PURE__ */ createElementVNode(
  "circle",
  {
    cx: "12.5",
    cy: "92.5",
    r: "12.5",
  },
  [
    /* @__PURE__ */ createElementVNode("animate", {
      attributeName: "fill-opacity",
      begin: "700ms",
      dur: "1s",
      values: "1;.2;1",
      calcMode: "linear",
      repeatCount: "indefinite",
    }),
  ],
  -1
);
const _hoisted_8$1 = /* @__PURE__ */ createElementVNode(
  "circle",
  {
    cx: "52.5",
    cy: "92.5",
    r: "12.5",
  },
  [
    /* @__PURE__ */ createElementVNode("animate", {
      attributeName: "fill-opacity",
      begin: "500ms",
      dur: "1s",
      values: "1;.2;1",
      calcMode: "linear",
      repeatCount: "indefinite",
    }),
  ],
  -1
);
const _hoisted_9$1 = /* @__PURE__ */ createElementVNode(
  "circle",
  {
    cx: "92.5",
    cy: "92.5",
    r: "12.5",
  },
  [
    /* @__PURE__ */ createElementVNode("animate", {
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
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  return (
    openBlock(),
    createBlock(
      resolveDynamicComponent("svg"),
      mergeProps(_ctx.$props, { viewBox: "0 0 105 105" }),
      {
        default: withCtx(() => [
          _hoisted_1$8,
          _hoisted_2$5,
          _hoisted_3$5,
          _hoisted_4$2,
          _hoisted_5$2,
          _hoisted_6$1,
          _hoisted_7$1,
          _hoisted_8$1,
          _hoisted_9$1,
        ]),
        _: 1,
      },
      16
    )
  );
}
var Grid = /* @__PURE__ */ _export_sfc(_sfc_main$8, [
  ["render", _sfc_render$8],
]);
const _sfc_main$7 = {
  name: "Hearts",
  props: {
    width: {
      type: [Number, String],
      default: "100%",
    },
    height: {
      type: Number,
      default: 64,
    },
    fill: {
      type: String,
      default: "#000",
    },
  },
};
const _hoisted_1$7 = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M30.262 57.02L7.195 40.723c-5.84-3.976-7.56-12.06-3.842-18.063 3.715-6 11.467-7.65 17.306-3.68l4.52 3.76 2.6-5.274c3.717-6.002 11.47-7.65 17.305-3.68 5.84 3.97 7.56 12.054 3.842 18.062L34.49 56.118c-.897 1.512-2.793 1.915-4.228.9z",
    "fill-opacity": "0.5",
  },
  [
    /* @__PURE__ */ createElementVNode("animate", {
      attributeName: "fill-opacity",
      begin: "0s",
      dur: "1.4s",
      values: "0.5;1;0.5",
      calcMode: "linear",
      repeatCount: "indefinite",
    }),
  ],
  -1
);
const _hoisted_2$4 = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M105.512 56.12l-14.44-24.272c-3.716-6.008-1.996-14.093 3.843-18.062 5.835-3.97 13.588-2.322 17.306 3.68l2.6 5.274 4.52-3.76c5.84-3.97 13.592-2.32 17.307 3.68 3.718 6.003 1.998 14.088-3.842 18.064L109.74 57.02c-1.434 1.014-3.33.61-4.228-.9z",
    "fill-opacity": "0.5",
  },
  [
    /* @__PURE__ */ createElementVNode("animate", {
      attributeName: "fill-opacity",
      begin: "0.7s",
      dur: "1.4s",
      values: "0.5;1;0.5",
      calcMode: "linear",
      repeatCount: "indefinite",
    }),
  ],
  -1
);
const _hoisted_3$4 = /* @__PURE__ */ createElementVNode(
  "path",
  {
    d: "M67.408 57.834l-23.01-24.98c-5.864-6.15-5.864-16.108 0-22.248 5.86-6.14 15.37-6.14 21.234 0L70 16.168l4.368-5.562c5.863-6.14 15.375-6.14 21.235 0 5.863 6.14 5.863 16.098 0 22.247l-23.007 24.98c-1.43 1.556-3.757 1.556-5.188 0z",
  },
  null,
  -1
);
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return (
    openBlock(),
    createBlock(
      resolveDynamicComponent("svg"),
      mergeProps(_ctx.$props, { viewBox: "0 0 140 64" }),
      {
        default: withCtx(() => [_hoisted_1$7, _hoisted_2$4, _hoisted_3$4]),
        _: 1,
      },
      16
    )
  );
}
var Hearts = /* @__PURE__ */ _export_sfc(_sfc_main$7, [
  ["render", _sfc_render$7],
]);
const _sfc_main$6 = {
  name: "Oval",
  props: {
    width: {
      type: [Number, String],
      default: "100%",
    },
    height: {
      type: Number,
      default: 38,
    },
    stroke: {
      type: String,
      default: "#000",
    },
  },
};
const _hoisted_1$6 = /* @__PURE__ */ createElementVNode(
  "g",
  {
    transform: "translate(1 1)",
    "stroke-width": "2",
    fill: "none",
    "fill-rule": "evenodd",
  },
  [
    /* @__PURE__ */ createElementVNode("circle", {
      "stroke-opacity": "0.5",
      cx: "18",
      cy: "18",
      r: "18",
    }),
    /* @__PURE__ */ createElementVNode(
      "path",
      { d: "M36 18c0-9.94-8.06-18-18-18" },
      [
        /* @__PURE__ */ createElementVNode("animateTransform", {
          attributeName: "transform",
          type: "rotate",
          from: "0 18 18",
          to: "360 18 18",
          dur: "1s",
          repeatCount: "indefinite",
        }),
      ]
    ),
  ],
  -1
);
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return (
    openBlock(),
    createBlock(
      resolveDynamicComponent("svg"),
      mergeProps(_ctx.$props, { viewBox: "0 0 38 38" }),
      {
        default: withCtx(() => [_hoisted_1$6]),
        _: 1,
      },
      16
    )
  );
}
var Oval = /* @__PURE__ */ _export_sfc(_sfc_main$6, [
  ["render", _sfc_render$6],
]);
const _sfc_main$5 = {
  name: "Puff",
  props: {
    width: {
      type: [Number, String],
      default: "100%",
    },
    height: {
      type: Number,
      default: 44,
    },
    stroke: {
      type: String,
      default: "#000",
    },
  },
};
const _hoisted_1$5 = /* @__PURE__ */ createElementVNode(
  "g",
  {
    fill: "none",
    "fill-rule": "evenodd",
    "stroke-width": "2",
  },
  [
    /* @__PURE__ */ createElementVNode(
      "circle",
      {
        cx: "22",
        cy: "22",
        r: "1",
      },
      [
        /* @__PURE__ */ createElementVNode("animate", {
          attributeName: "r",
          begin: "0s",
          dur: "1.8s",
          values: "1; 20",
          calcMode: "spline",
          keyTimes: "0; 1",
          keySplines: "0.165, 0.84, 0.44, 1",
          repeatCount: "indefinite",
        }),
        /* @__PURE__ */ createElementVNode("animate", {
          attributeName: "stroke-opacity",
          begin: "0s",
          dur: "1.8s",
          values: "1; 0",
          calcMode: "spline",
          keyTimes: "0; 1",
          keySplines: "0.3, 0.61, 0.355, 1",
          repeatCount: "indefinite",
        }),
      ]
    ),
    /* @__PURE__ */ createElementVNode(
      "circle",
      {
        cx: "22",
        cy: "22",
        r: "1",
      },
      [
        /* @__PURE__ */ createElementVNode("animate", {
          attributeName: "r",
          begin: "-0.9s",
          dur: "1.8s",
          values: "1; 20",
          calcMode: "spline",
          keyTimes: "0; 1",
          keySplines: "0.165, 0.84, 0.44, 1",
          repeatCount: "indefinite",
        }),
        /* @__PURE__ */ createElementVNode("animate", {
          attributeName: "stroke-opacity",
          begin: "-0.9s",
          dur: "1.8s",
          values: "1; 0",
          calcMode: "spline",
          keyTimes: "0; 1",
          keySplines: "0.3, 0.61, 0.355, 1",
          repeatCount: "indefinite",
        }),
      ]
    ),
  ],
  -1
);
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return (
    openBlock(),
    createBlock(
      resolveDynamicComponent("svg"),
      mergeProps(_ctx.$props, { viewBox: "0 0 44 44" }),
      {
        default: withCtx(() => [_hoisted_1$5]),
        _: 1,
      },
      16
    )
  );
}
var Puff = /* @__PURE__ */ _export_sfc(_sfc_main$5, [
  ["render", _sfc_render$5],
]);
const _sfc_main$4 = {
  name: "Rings",
  props: {
    width: {
      type: [Number, String],
      default: "100%",
    },
    height: {
      type: Number,
      default: 45,
    },
    stroke: {
      type: String,
      default: "#000",
    },
  },
};
const _hoisted_1$4 = /* @__PURE__ */ createElementVNode(
  "g",
  {
    fill: "none",
    "fill-rule": "evenodd",
    transform: "translate(1 1)",
    "stroke-width": "2",
  },
  [
    /* @__PURE__ */ createElementVNode(
      "circle",
      {
        cx: "22",
        cy: "22",
        r: "6",
        "stroke-opacity": "0",
      },
      [
        /* @__PURE__ */ createElementVNode("animate", {
          attributeName: "r",
          begin: "1.5s",
          dur: "3s",
          values: "6;22",
          calcMode: "linear",
          repeatCount: "indefinite",
        }),
        /* @__PURE__ */ createElementVNode("animate", {
          attributeName: "stroke-opacity",
          begin: "1.5s",
          dur: "3s",
          values: "1;0",
          calcMode: "linear",
          repeatCount: "indefinite",
        }),
        /* @__PURE__ */ createElementVNode("animate", {
          attributeName: "stroke-width",
          begin: "1.5s",
          dur: "3s",
          values: "2;0",
          calcMode: "linear",
          repeatCount: "indefinite",
        }),
      ]
    ),
    /* @__PURE__ */ createElementVNode(
      "circle",
      {
        cx: "22",
        cy: "22",
        r: "6",
        "stroke-opacity": "0",
      },
      [
        /* @__PURE__ */ createElementVNode("animate", {
          attributeName: "r",
          begin: "3s",
          dur: "3s",
          values: "6;22",
          calcMode: "linear",
          repeatCount: "indefinite",
        }),
        /* @__PURE__ */ createElementVNode("animate", {
          attributeName: "stroke-opacity",
          begin: "3s",
          dur: "3s",
          values: "1;0",
          calcMode: "linear",
          repeatCount: "indefinite",
        }),
        /* @__PURE__ */ createElementVNode("animate", {
          attributeName: "stroke-width",
          begin: "3s",
          dur: "3s",
          values: "2;0",
          calcMode: "linear",
          repeatCount: "indefinite",
        }),
      ]
    ),
    /* @__PURE__ */ createElementVNode(
      "circle",
      {
        cx: "22",
        cy: "22",
        r: "8",
      },
      [
        /* @__PURE__ */ createElementVNode("animate", {
          attributeName: "r",
          begin: "0s",
          dur: "1.5s",
          values: "6;1;2;3;4;5;6",
          calcMode: "linear",
          repeatCount: "indefinite",
        }),
      ]
    ),
  ],
  -1
);
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return (
    openBlock(),
    createBlock(
      resolveDynamicComponent("svg"),
      mergeProps(_ctx.$props, { viewBox: "0 0 45 45" }),
      {
        default: withCtx(() => [_hoisted_1$4]),
        _: 1,
      },
      16
    )
  );
}
var Rings = /* @__PURE__ */ _export_sfc(_sfc_main$4, [
  ["render", _sfc_render$4],
]);
const _sfc_main$3 = {
  name: "SpinningCircles",
  props: {
    width: {
      type: [Number, String],
      default: "100%",
    },
    height: {
      type: Number,
      default: 58,
    },
    stroke: {
      type: String,
      default: "#000",
    },
    fill: {
      type: String,
      default: "#000",
    },
  },
};
const _hoisted_1$3 = ["stroke", "fill"];
const _hoisted_2$3 = /* @__PURE__ */ createElementVNode(
  "circle",
  {
    cx: "42.601",
    cy: "11.462",
    r: "5",
  },
  [
    /* @__PURE__ */ createElementVNode("animate", {
      attributeName: "fill-opacity",
      begin: "0s",
      dur: "1.3s",
      values: "1;0;0;0;0;0;0;0",
      calcMode: "linear",
      repeatCount: "indefinite",
    }),
  ],
  -1
);
const _hoisted_3$3 = /* @__PURE__ */ createElementVNode(
  "circle",
  {
    cx: "49.063",
    cy: "27.063",
    r: "5",
    "fill-opacity": "0",
  },
  [
    /* @__PURE__ */ createElementVNode("animate", {
      attributeName: "fill-opacity",
      begin: "0s",
      dur: "1.3s",
      values: "0;1;0;0;0;0;0;0",
      calcMode: "linear",
      repeatCount: "indefinite",
    }),
  ],
  -1
);
const _hoisted_4$1 = /* @__PURE__ */ createElementVNode(
  "circle",
  {
    cx: "42.601",
    cy: "42.663",
    r: "5",
    "fill-opacity": "0",
  },
  [
    /* @__PURE__ */ createElementVNode("animate", {
      attributeName: "fill-opacity",
      begin: "0s",
      dur: "1.3s",
      values: "0;0;1;0;0;0;0;0",
      calcMode: "linear",
      repeatCount: "indefinite",
    }),
  ],
  -1
);
const _hoisted_5$1 = /* @__PURE__ */ createElementVNode(
  "circle",
  {
    cx: "27",
    cy: "49.125",
    r: "5",
    "fill-opacity": "0",
  },
  [
    /* @__PURE__ */ createElementVNode("animate", {
      attributeName: "fill-opacity",
      begin: "0s",
      dur: "1.3s",
      values: "0;0;0;1;0;0;0;0",
      calcMode: "linear",
      repeatCount: "indefinite",
    }),
  ],
  -1
);
const _hoisted_6 = /* @__PURE__ */ createElementVNode(
  "circle",
  {
    cx: "11.399",
    cy: "42.663",
    r: "5",
    "fill-opacity": "0",
  },
  [
    /* @__PURE__ */ createElementVNode("animate", {
      attributeName: "fill-opacity",
      begin: "0s",
      dur: "1.3s",
      values: "0;0;0;0;1;0;0;0",
      calcMode: "linear",
      repeatCount: "indefinite",
    }),
  ],
  -1
);
const _hoisted_7 = /* @__PURE__ */ createElementVNode(
  "circle",
  {
    cx: "4.938",
    cy: "27.063",
    r: "5",
    "fill-opacity": "0",
  },
  [
    /* @__PURE__ */ createElementVNode("animate", {
      attributeName: "fill-opacity",
      begin: "0s",
      dur: "1.3s",
      values: "0;0;0;0;0;1;0;0",
      calcMode: "linear",
      repeatCount: "indefinite",
    }),
  ],
  -1
);
const _hoisted_8 = /* @__PURE__ */ createElementVNode(
  "circle",
  {
    cx: "11.399",
    cy: "11.462",
    r: "5",
    "fill-opacity": "0",
  },
  [
    /* @__PURE__ */ createElementVNode("animate", {
      attributeName: "fill-opacity",
      begin: "0s",
      dur: "1.3s",
      values: "0;0;0;0;0;0;1;0",
      calcMode: "linear",
      repeatCount: "indefinite",
    }),
  ],
  -1
);
const _hoisted_9 = /* @__PURE__ */ createElementVNode(
  "circle",
  {
    cx: "27",
    cy: "5",
    r: "5",
    "fill-opacity": "0",
  },
  [
    /* @__PURE__ */ createElementVNode("animate", {
      attributeName: "fill-opacity",
      begin: "0s",
      dur: "1.3s",
      values: "0;0;0;0;0;0;0;1",
      calcMode: "linear",
      repeatCount: "indefinite",
    }),
  ],
  -1
);
const _hoisted_10 = [
  _hoisted_2$3,
  _hoisted_3$3,
  _hoisted_4$1,
  _hoisted_5$1,
  _hoisted_6,
  _hoisted_7,
  _hoisted_8,
  _hoisted_9,
];
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return (
    openBlock(),
    createBlock(
      resolveDynamicComponent("svg"),
      mergeProps(_ctx.$props, { viewBox: "0 0 58 58" }),
      {
        default: withCtx(() => [
          createElementVNode(
            "g",
            {
              transform: "translate(2 1)",
              stroke: $props.stroke,
              "stroke-width": "1.5",
              fill: $props.fill,
              "fill-rule": "evenodd",
            },
            _hoisted_10,
            8,
            _hoisted_1$3
          ),
        ]),
        _: 1,
      },
      16
    )
  );
}
var SpinningCircles = /* @__PURE__ */ _export_sfc(_sfc_main$3, [
  ["render", _sfc_render$3],
]);
const _sfc_main$2 = {
  name: "TailSpin",
  props: {
    width: {
      type: [Number, String],
      default: "100%",
    },
    height: {
      type: Number,
      default: 30,
    },
    stopColor: {
      type: String,
      default: "#000",
    },
  },
};
const _hoisted_1$2 = {
  x1: "8.042%",
  y1: "0%",
  x2: "65.682%",
  y2: "23.865%",
  id: "prefix__a",
};
const _hoisted_2$2 = ["stop-color"];
const _hoisted_3$2 = ["stop-color"];
const _hoisted_4 = ["stop-color"];
const _hoisted_5 = /* @__PURE__ */ createElementVNode(
  "g",
  {
    transform: "translate(1 1)",
    fill: "none",
    "fill-rule": "evenodd",
  },
  [
    /* @__PURE__ */ createElementVNode(
      "path",
      {
        d: "M36 18c0-9.94-8.06-18-18-18",
        stroke: "url(#prefix__a)",
        "stroke-width": "2",
      },
      [
        /* @__PURE__ */ createElementVNode("animateTransform", {
          attributeName: "transform",
          type: "rotate",
          from: "0 18 18",
          to: "360 18 18",
          dur: "0.9s",
          repeatCount: "indefinite",
        }),
      ]
    ),
    /* @__PURE__ */ createElementVNode(
      "circle",
      {
        fill: "#fff",
        cx: "36",
        cy: "18",
        r: "1",
      },
      [
        /* @__PURE__ */ createElementVNode("animateTransform", {
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
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return (
    openBlock(),
    createBlock(
      resolveDynamicComponent("svg"),
      mergeProps(_ctx.$props, { viewBox: "0 0 38 38" }),
      {
        default: withCtx(() => [
          createElementVNode("defs", null, [
            createElementVNode("linearGradient", _hoisted_1$2, [
              createElementVNode(
                "stop",
                {
                  "stop-color": $props.stopColor,
                  "stop-opacity": "0",
                  offset: "0%",
                },
                null,
                8,
                _hoisted_2$2
              ),
              createElementVNode(
                "stop",
                {
                  "stop-color": $props.stopColor,
                  "stop-opacity": "0.631",
                  offset: "63.146%",
                },
                null,
                8,
                _hoisted_3$2
              ),
              createElementVNode(
                "stop",
                {
                  "stop-color": $props.stopColor,
                  offset: "100%",
                },
                null,
                8,
                _hoisted_4
              ),
            ]),
          ]),
          _hoisted_5,
        ]),
        _: 1,
      },
      16
    )
  );
}
var TailSpin = /* @__PURE__ */ _export_sfc(_sfc_main$2, [
  ["render", _sfc_render$2],
]);
const _sfc_main$1 = {
  name: "ThreeDots",
  props: {
    width: {
      type: [Number, String],
      default: "100%",
    },
    height: {
      type: Number,
      default: 58,
    },
    fill: {
      type: String,
      default: "#000",
    },
  },
};
const _hoisted_1$1 = /* @__PURE__ */ createElementVNode(
  "circle",
  {
    cx: "15",
    cy: "15",
    r: "15",
  },
  [
    /* @__PURE__ */ createElementVNode("animate", {
      attributeName: "r",
      from: "15",
      to: "15",
      begin: "0s",
      dur: "0.8s",
      values: "15;9;15",
      calcMode: "linear",
      repeatCount: "indefinite",
    }),
    /* @__PURE__ */ createElementVNode("animate", {
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
const _hoisted_2$1 = /* @__PURE__ */ createElementVNode(
  "circle",
  {
    cx: "60",
    cy: "15",
    r: "9",
    "fill-opacity": "0.3",
  },
  [
    /* @__PURE__ */ createElementVNode("animate", {
      attributeName: "r",
      from: "9",
      to: "9",
      begin: "0s",
      dur: "0.8s",
      values: "9;15;9",
      calcMode: "linear",
      repeatCount: "indefinite",
    }),
    /* @__PURE__ */ createElementVNode("animate", {
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
);
const _hoisted_3$1 = /* @__PURE__ */ createElementVNode(
  "circle",
  {
    cx: "105",
    cy: "15",
    r: "15",
  },
  [
    /* @__PURE__ */ createElementVNode("animate", {
      attributeName: "r",
      from: "15",
      to: "15",
      begin: "0s",
      dur: "0.8s",
      values: "15;9;15",
      calcMode: "linear",
      repeatCount: "indefinite",
    }),
    /* @__PURE__ */ createElementVNode("animate", {
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
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (
    openBlock(),
    createBlock(
      resolveDynamicComponent("svg"),
      mergeProps(_ctx.$props, { viewBox: "0 0 120 30" }),
      {
        default: withCtx(() => [_hoisted_1$1, _hoisted_2$1, _hoisted_3$1]),
        _: 1,
      },
      16
    )
  );
}
var ThreeDots = /* @__PURE__ */ _export_sfc(_sfc_main$1, [
  ["render", _sfc_render$1],
]);
const _sfc_main = {
  name: "DualRing",
  props: {
    width: {
      type: [Number, String],
      default: "100%",
    },
    height: {
      type: Number,
      default: 50,
    },
    stroke: {
      type: String,
      default: "#000",
    },
  },
};
const _hoisted_1 = ["stroke"];
const _hoisted_2 = /* @__PURE__ */ createElementVNode(
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
);
const _hoisted_3 = [_hoisted_2];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (
    openBlock(),
    createBlock(
      resolveDynamicComponent("svg"),
      mergeProps(_ctx.$props, {
        viewBox: "0 0 100 100",
        preserveAspectRatio: "xMidYMid",
      }),
      {
        default: withCtx(() => [
          createElementVNode(
            "circle",
            {
              cx: "50",
              cy: "50",
              r: "30",
              "stroke-width": "8",
              stroke: $props.stroke,
              "stroke-dasharray": "47.12388980384689 47.12388980384689",
              fill: "none",
              "stroke-linecap": "round",
            },
            _hoisted_3,
            8,
            _hoisted_1
          ),
        ]),
        _: 1,
      },
      16
    )
  );
}
var DualRing = /* @__PURE__ */ _export_sfc(_sfc_main, [
  ["render", _sfc_render],
]);
export {
  Audio,
  BallTriangle,
  Bars,
  Circles,
  DualRing,
  Grid,
  Hearts,
  Oval,
  Puff,
  Rings,
  SpinningCircles,
  TailSpin,
  ThreeDots,
};
