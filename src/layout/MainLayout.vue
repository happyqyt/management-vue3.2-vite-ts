<script setup lang="ts">
  import SideMenu from '@/components/layout/SideMenu.vue'
  import Header from '@/components/layout/Header.vue'
</script>

<template>
  <el-container>
    <el-aside class="vsn-aside vsn-layout-bg" :class="[$store.getters.menuCollapse ? 'vsn-aside-collapse' : '']">
      <a to="/" class="vsn-layout-bg cursor-pointer flex items-center shadow-lg vsn-logo-wrap">
        <img src="@/assets/images/logo.svg" alt="logo" />
        <span class="text-white ml-2">xxx后台管理系统</span>
      </a>
      <SideMenu class="vsn-layout-bg" />
    </el-aside>
    <el-container>
      <el-header class="vsn-header flex items-center shadow-md">
        <Header />
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<style lang="scss" scoped>
.vsn-aside {
  height: 100vh;
  width: $width-aside;
  transition: width $menu-animation-time;
  overflow-x: hidden;

  .vsn-logo-wrap {
    display: flex;
    height: $height-header;
    align-items: center;
    padding-left: 12px;
    padding-right: 12px;
    position: sticky;
    top: 0;
    z-index: 1;

    img {
      height: $height-header * .6;
      max-width: 100%;
      transition: width $menu-animation-time;
    }
    span {
      white-space: nowrap;
      opacity: 1;
      transition: opacity $menu-animation-time;
    }
  }

  // :deep(.el-menu) {
  //   width: $width-aside;
  // }
  &.vsn-aside-collapse {
    width: $width-aside-collapse;

    // :deep(.el-menu) {
    //   width: $width-aside-collapse;
    // }

    .vsn-logo-wrap {
      span {
        opacity: 0;
      }
    }
  }
}

.vsn-header {
  height: $height-header;
}

</style>
