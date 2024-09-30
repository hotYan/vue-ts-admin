<template>
  <div class="loginform" style="width: 398px; height: 360px; border: 1px solid #f1f1f1; padding: 20px">
    <a-form layout="vertical" :model="loginForm" ref="loginFormModel" style="" @submit.prevent>
      <a-form-item label="用户名:" name="username" :rules="[{ required: true, message: '请输入用户名', trigger: 'blur' }]">
        <a-input size="large" v-model:value="loginForm.username" placeholder="用户名" @focus="failure = false"> </a-input>
      </a-form-item>
      <a-form-item label="密码:" name="password" :rules="[{ required: true, message: '请输入密码', trigger: 'blur' }]">
        <a-input-password size="large" v-model:value="loginForm.password" placeholder="密码" @focus="failure = false">
        </a-input-password>
      </a-form-item>
      <a-alert type="error" v-if="failure" :message="loginErr" banner closable />
      <a-form-item>
        <a-button
          size="large"
          type="primary"
          html-type="submit"
          class="login-form-button"
          :loading="submitLoading"
          @click="handleSubmit(loginFormModel)"
          style="margin-top: 30px; width: 100%"
        >
          登录
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup lang="ts">
import {
  ref,
  reactive,
  computed,
  onMounted,
  watch,
  // defineProps, withDefaults,
  defineEmits,
  defineExpose
} from "vue";
import { Login } from "@/api";
import { FormInstance } from "ant-design-vue";
defineOptions({
  name: "LoginForm"
});
const failure = ref(false);
const submitLoading = ref(false);
const loginFormModel = ref<FormInstance>();
const loginErr = ref("登录失败");
const loginForm = reactive({
  username: "",
  password: ""
});
//
const count = ref(0); //响应式的值
const state = reactive({ count: 0 }); //响应式对象
const handleSubmit = async (loginFormModel: FormInstance | undefined) => {
  if (!loginFormModel) return;
  try {
    await loginFormModel.validateFields();
    submitLoading.value = true;
    Login(loginForm)
      .then(res => {
        console.log(res, 22);
        submitLoading.value = false;
      })
      .finally(() => {
        submitLoading.value = false;
      });
  } catch (error) {
    console.log(error);
  }
};
const age = computed(() => state.count); //响应式计算属性
// const doubleAge = computed({
//   get() {
//     return state.count * 2;
//   },
//   set(val: number) {
//     state.count = val / 2;
//   }
// });
onMounted(() => {});
watch(count, () => {}); // 监听单个值
watch([count, age], () => {}); // 监听多个值
// const props = defineProps({ msg: String});// 没有默认值
// const props = withDefaults(defineProps<{ msg?: string }>(), { msg: "hello" }); // 带默认值
const emit = defineEmits(["click"]);
emit("click", count.value);
defineExpose();
</script>

<style lang="scss" scoped></style>
