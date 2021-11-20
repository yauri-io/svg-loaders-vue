<template>
  <component is="svg" v-bind="$props" viewBox="0 0 38 38">
    <defs>
      <linearGradient
        x1="8.042%"
        y1="0%"
        x2="65.682%"
        y2="23.865%"
        id="prefix__a"
      >
        <stop :stop-color="stopColor" stop-opacity="0" offset="0%" />
        <stop :stop-color="stopColor" stop-opacity="0.631" offset="63.146%" />
        <stop :stop-color="stopColor" offset="100%" />
      </linearGradient>
    </defs>
    <g transform="translate(1 1)" fill="none" fill-rule="evenodd">
      <path
        d="M36 18c0-9.94-8.06-18-18-18"
        stroke="url(#prefix__a)"
        stroke-width="2"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 18 18"
          to="360 18 18"
          dur="0.9s"
          repeatCount="indefinite"
        />
      </path>
      <circle fill="#fff" cx="36" cy="18" r="1">
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 18 18"
          to="360 18 18"
          dur="0.9s"
          repeatCount="indefinite"
        />
      </circle>
    </g>
  </component>
</template>

<script>
export default {
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
</script>
