<script setup>
import {
  Fold,
  Expand
} from '@element-plus/icons-vue'
</script>

<template>
  <el-tooltip
    effect="dark"
    :content="$store.getters.menuCollapse ? '展开' : '收起'"
    placement="bottom"
  >
    <el-icon class="cursor-pointer" :size="20" @click="$store.commit('setMenuCollapse', !$store.getters.menuCollapse)">
      <Fold v-if="!$store.getters.menuCollapse" />
      <Expand v-else />
    </el-icon>
  </el-tooltip>
</template>
