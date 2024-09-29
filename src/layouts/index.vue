<template>
  <a-layout>
    <a-layout-header> </a-layout-header>
    <a-layout style="height: calc(100vh - 64px)">
      <a-layout-sider width="276" style="background: #001529">
        <SideMenu />
      </a-layout-sider>
      <a-layout>
        <a-layout-content :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }">
          <BaseContent />
        </a-layout-content>
        <a-layout-footer style="text-align: center"> Ant Design ©2018 Created by Ant UED </a-layout-footer>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
import SideMenu from "./Menu/index.vue";
import BaseContent from "./Main/index.vue";
</script>
<style></style>
