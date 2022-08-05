<script lang="ts" setup>
import menus from '../../assets/consts/menus'
</script>

<template>
  <el-menu
    class="vsn-sidemenu vsn-layout-bg"
    default-active="0"
    unique-opened
    router
    :collapse="$store.getters.menuCollapse"
  >
    <template v-for="(menu, ind) in menus" :key="'menu-' + ind">
      <el-sub-menu v-if="menu.children && menu.children.length > 0" :index="ind + ''">
        <template #title>
          <el-icon v-if="menu.icon">
            <component :is="menu.icon"></component>
          </el-icon>
          <span>{{menu.text}}</span>
        </template>
        <el-menu-item v-for="(submenu, ind2) in menu.children" :index="'menu-' + ind + '-' + ind2" :key="'menu-' + ind + '-' + ind2" :route="submenu.path">
          {{submenu.text}}
        </el-menu-item>
      </el-sub-menu>
      <el-menu-item v-else :index="ind + ''" :route="menu.path">
        <el-icon v-if="menu.icon">
          <component :is="menu.icon"></component>
        </el-icon>
        <span>{{menu.text}}</span>
      </el-menu-item>
    </template>
  </el-menu>
</template>

<!-- <style lang="scss" scoped>
.vsn-sidemenu {
  border-right: 0;
  // flex: 1;

  :deep(.el-menu-item), :deep(.el-sub-menu__title) {
    color: $color-layout-text;
    width: $width-aside;
    transition: width $menu-animation-time;
    padding-left: $menu-padding-left!important;

    &:hover, &.is-active {
      background-color: $color-layout-bg-active;
      color: $color-layout-text-active;
    }

    // span {
    //   transition: all $menu-animation-time;
    // }
  }

  :deep(.el-sub-menu) {
    .el-menu {
      background-color: $color-layout-sub-bg;
    }

    &.is-opened {
      > .el-sub-menu__title {
        color: $color-layout-text-active;
      }
    }
  }

  :deep(&.el-menu--collapse) {
    width: $width-aside-collapse!important;
  }

  :deep(&.el-menu--collapse > .el-menu-item),
  :deep(&.el-menu--collapse > .el-sub-menu__title),
  :deep(&.el-menu--collapse > .el-sub-menu > .el-sub-menu__title) {
    display: flex;
    justify-content: center;
    width: $width-aside-collapse;
  }
}
</style> -->

<style lang="scss">
.vsn-sidemenu {
  border-right: 0;

  .el-menu-item,
  .el-sub-menu__title {
    width: $width-aside;
    transition: width $menu-animation-time;
    padding-left: $menu-padding-left!important;
    color: $color-layout-text;

    &:hover, &.is-active {
      background-color: $color-layout-bg-active;
      color: $color-layout-text-active;
    }
  }

  .el-sub-menu {
    .el-menu {
      background-color: $color-layout-sub-bg;
    }

    &.is-opened {
      > .el-sub-menu__title {
        color: $color-layout-text-active;
      }
    }
  }

  &.el-menu--collapse {
    width: $width-aside-collapse!important;

    > .el-menu-item,
    > .el-sub-menu__title,
    > .el-sub-menu > .el-sub-menu__title {
      display: flex;
      justify-content: center;
      width: $width-aside-collapse;
    }
  }
}
</style>
