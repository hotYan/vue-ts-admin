<template>
  <RouterView v-slot="{ Component, route }">
    <!-- <Transition mode="out-in"> -->
    <KeepAlive>
      <component :is="Component" :key="route.fullPath" />
    </KeepAlive>
    <!-- </Transition> -->
  </RouterView>
</template>
<script setup lang="ts"></script>
