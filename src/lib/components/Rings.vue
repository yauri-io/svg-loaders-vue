<template>
  <component is="svg" v-bind="$props" viewBox="0 0 45 45">
    <g
        fill="none"
        fill-rule="evenodd"
        transform="translate(1 1)"
        stroke-width="2"
    >
      <circle cx="22" cy="22" r="6" stroke-opacity="0">
        <animate
            attributeName="r"
            begin="1.5s"
            dur="3s"
            values="6;22"
            calcMode="linear"
            repeatCount="indefinite"
        />
        <animate
            attributeName="stroke-opacity"
            begin="1.5s"
            dur="3s"
            values="1;0"
            calcMode="linear"
            repeatCount="indefinite"
        />
        <animate
            attributeName="stroke-width"
            begin="1.5s"
            dur="3s"
            values="2;0"
            calcMode="linear"
            repeatCount="indefinite"
        />
      </circle>
      <circle cx="22" cy="22" r="6" stroke-opacity="0">
        <animate
            attributeName="r"
            begin="3s"
            dur="3s"
            values="6;22"
            calcMode="linear"
            repeatCount="indefinite"
        />
        <animate
            attributeName="stroke-opacity"
            begin="3s"
            dur="3s"
            values="1;0"
            calcMode="linear"
            repeatCount="indefinite"
        />
        <animate
            attributeName="stroke-width"
            begin="3s"
            dur="3s"
            values="2;0"
            calcMode="linear"
            repeatCount="indefinite"
        />
      </circle>
      <circle cx="22" cy="22" r="8">
        <animate
            attributeName="r"
            begin="0s"
            dur="1.5s"
            values="6;1;2;3;4;5;6"
            calcMode="linear"
            repeatCount="indefinite"
        />
      </circle>
    </g>
  </component>
</template>

<script>
export default {
  name: "Rings",
  props: {
    width: {
      type: [Number, String],
      default: '100%'
    },
    height: {
      type: Number,
      default: 45
    },
    stroke: {
      type: String,
      default: "#000"
    }
  }
}
</script>
