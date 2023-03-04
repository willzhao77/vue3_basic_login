<template>
    <div class="register">
      <div>
        <h1>LOGO</h1>
        <form @submit.prevent="submit">
          <div>
            <label for="name">用户名</label>
            <input v-model="name" name="name" type="text" />
          </div>
          <div>
            <label for="email">邮箱</label>
            <input v-model="email" name="email" type="email" />
          </div>
          <div>
            <label for="password">密码</label>
            <input v-model="password" name="password" type="password" />
          </div>
          <div>
            <label for="password">确认密码</label>
            <input v-model="password_confirmation" name="password_confirmation" type="password" />
          </div>
          <div>
            <button>注册</button>
          </div>
        </form>
        <p>
          已有账号？
          <RouterLink to="/login">Login</RouterLink>
        </p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import axios from "axios";
  import { useRouter } from "vue-router";
  
  const name = ref("");
  const email = ref("");
  const password = ref("");
  const password_confirmation = ref("");
  const router = useRouter();
  const validation = ref([]);
  
  const submit = async () => {
    await axios
      .post("/register", {
        name: name.value,
        email: email.value,
        password: password.value,
        password_confirmation: password_confirmation.value,
      })
      .then(() => {
        router.push({ path: "/login" });
      })
      .catch((error) => {
        validation.value = error.response.data;
      });
  };
  </script>
  
  <style scoped>
  .register {
    padding: 50px;
    background-color: #eee;
  }
  
  input {
    margin-left: 10px;
    height: 30px;
    float: right;
    clear: both;
  }
  
  button {
    margin-top: 10px;
  }
  
  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 250px;
  }
  </style>