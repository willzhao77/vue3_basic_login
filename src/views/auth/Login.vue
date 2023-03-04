<template>
    <div class="login">
      <h1>LOGO</h1>
      <form @submit.prevent="submit">
        <div>
          <label for="email">邮箱:</label>
          <input type="email" name="email" v-model="email" />
        </div>
        <div>
          <label for="password">密码:</label>
          <input type="password" name="password" v-model="password" />
        </div>
        <div>
          <button type="submit">登录</button>
        </div>
      </form>
      <p>
        还没有账号？
        <RouterLink to="/register">Register</RouterLink>
      </p>
    </div>
  </template>
     
  <script setup>
  import { ref } from "vue";
  import axios from "axios";
  import { useRouter } from "vue-router";
  
  const email = ref('');
  const password = ref('');
  const router = useRouter();
  
  const submit = async () => {
    const response = await axios.post('/login', {
      email: email.value,
      password: password.value,
    });
    localStorage.setItem('token', response.data.access_token);
    await router.push('home');
  };
  </script>
  
  <style lang="scss" scoped>
  .login {
    padding: 50px;
    background-color: #eee;
    form {
      padding: 20px;
      background-color: #aaa;
    }
  }
  
  input {
    margin-left: 10px;
  }
  
  button {
    margin-top: 10px;
  }
  </style>