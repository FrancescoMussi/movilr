<template>
  <svg class="svg" width="50px" height="50px" viewBox="0 0 88 88" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>Icon-Dash</title>
    <desc>Created with Sketch.</desc>
    <defs></defs>
    <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="Icon-Dash" fill="#3B3B3B" fill-rule="nonzero">
        <path :class="{'svg__active': isActive}" :d="svgPath" id="Shape"></path>
      </g>
    </g>
  </svg>
</template>

<script>
export default {
  name: "SvgIcon",
  props: {
    svgPath: String,
    isActive: Boolean
  }
}
</script>

<style lang="scss" scoped>
.svg {
  width: 0.9rem;
  margin-right: 7px;
  vertical-align: middle;
  margin-bottom: 2px;
}

.svg__active {
  fill: #C70B0B;
}
</style>
