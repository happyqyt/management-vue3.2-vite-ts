<script lang="ts" setup>
import { User, SwitchButton } from '@element-plus/icons-vue'
import { logout } from '../../../service/user'

</script>

<template>
  <el-dropdown>
    <span class="el-dropdown-link flex items-center">
      <el-avatar :size="36" :src="$store.getters.userInfo?.avatar">
        <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" alt="avatar" />
      </el-avatar>
      <span class="ml-2">{{ $store.getters.userInfo?.name }}</span>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item :icon="User">个人中心</el-dropdown-item>
        <el-dropdown-item
          divided
          :icon="SwitchButton"
          @click="logout"
        >退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
