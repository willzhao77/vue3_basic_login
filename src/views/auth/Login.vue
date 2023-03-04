<template>
  <div class="login-container">
    <div class="login">
      <h1>Please login</h1>
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
          <button type="submit" class="btn btn-primary">登录</button>
        </div>
      </form>
      <p>
        还没有账号？
        <RouterLink to="/register">Register</RouterLink>
      </p>
    </div>
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
  .login-container {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .login {
      margin: 0 auto;
      padding: 50px;
      background-color: #eee;
      div {
        margin-top: 20px;
      }
    }

    input {
      margin-left: 10px;
    }

    button {
      margin: 10px 0;
    }
  }

  </style>