<template>
  <div style="width: 1200px; margin: 200px auto 0">
    <a-row type="flex" justify="space-around" align="middle">
      <a-col :span="9">
        <div style="margin-left: -100px">
          <!-- <img :src="logoImg" alt="kAPok应用级云原生平台" title="kAPok应用级云原生平台" width="600px" /> -->
        </div>
      </a-col>
      <a-col :span="8">
        <div>
          <LoginForm />
        </div>
        <p style="padding: 10px 0">
          <span style="color: #000000a6"> 推荐使用浏览器: </span>
          <img :src="chromeImg" alt="chrome" width="28px" height="28px" />
        </p>
      </a-col>
    </a-row>
  </div>
</template>

<script setup lang="ts">
// import logoImg from "@/assets/login/logo.png";
import chromeImg from "@/assets/login/chrome.jpg";
import LoginForm from "./login-form.vue";
defineOptions({
  name: "Login"
});
</script>

<style lang="scss" scoped></style>
