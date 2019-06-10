<template>
  <div class="menu">
    <div class="menu__header">
      <img src="../assets/img/logo.svg" alt="logo" class="menu__logo">
    </div>
    <div class="menu__items">
      <MenuItem title="Dashboard" :isActive="false" :svgPath="iconPaths.dashboard"/>
      <MenuItem title="Favorites" :isActive="false" :svgPath="iconPaths.favorites"/>
      <MenuItem title="Search" :isActive="true" :svgPath="iconPaths.search"/>
      <MenuItem title="Messages" :isActive="false" :svgPath="iconPaths.messages"/>
      <MenuItem title="Settings" :isActive="false" :svgPath="iconPaths.settings"/>
    </div>
  </div>
</template>

<script>
import MenuItem from './MenuItem'
import icon_paths from '../assets/icon_paths.json'
export default {
  name: 'Menu',
  components: {MenuItem},
  computed: {
    iconPaths() {
      return icon_paths
    }
  },
}
</script>

<style lang="scss" scoped>
.menu {
  width: 100%;
  min-height: 100%;
  border-right: 1px solid lightgrey;
  box-shadow: 1px 0px 11px -4px rgba(163,163,163,.8);
}

.menu__header {
  height: 70px;
  background-color: #C70B0B;
  text-align: center;
}

.menu__logo {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}
</style>
