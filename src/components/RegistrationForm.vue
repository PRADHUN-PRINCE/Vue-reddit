<template>
    <form class="registration-form" @submit.prevent="register">
      <label for="username">Username:</label>
      <input type="text" v-model="username" required />
      <label for="password">Password:</label>
      <input type="password" v-model="password" required />
      <button type="submit">Register</button>
    </form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: "",
        password: "",
      };
    },
    methods: {
      register() {
        localStorage.setItem("username", this.username);
        localStorage.setItem("password", this.password);
        this.$emit("registration-success");
      },
    },
  };
  </script>
  
  <style scoped>
  .registration-form {
    max-width: 300px;
    margin: 20px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .registration-form label {
    display: block;
    margin-bottom: 8px;
  }
  
  .registration-form input {
    width: 100%;
    padding: 8px;
    margin-bottom: 16px;
    box-sizing: border-box;
  }
  
  .registration-form button {
    background-color: #4caf50;
    color: #fff;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .registration-form button:hover {
    background-color: #45a049;
  }
  </style>
  