<template>
  <div class="menu-item">
    <SvgIcon :svgPath="svgPath" :isActive="isActive" />
    <span class="menu-item__title" :class="{ active: isActive }">{{
      title
    }}</span>
  </div>
</template>

<script>
import SvgIcon from "./SvgIcon";
export default {
  name: "MenuItem",
  components: { SvgIcon },
  props: {
    title: String,
    isActive: Boolean,
    svgPath: String
  },
};
</script>

<style lang="scss" scoped>
.menu-item {
  height: 50px;
  line-height: 50px;
  width: 100%;
  border-bottom: 1px solid #dddddd;
  padding-left: 1.3rem;
}
.menu-item__title {
  text-transform: uppercase;
  font-size: 0.75rem;
}
</style>
