<template>
    Home page.
  </template>
  
  <script setup>
  import { onMounted } from "vue";
  import axios from "axios";
  import router from "../router";
  
  onMounted(() => {
    authentication()
  });
  
  axios.defaults.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
  
  const authentication = async () => {
    try {
      const req = await axios.get('/user')
    } catch (e) {
      await router.push('/')
    }
  }
  </script>
