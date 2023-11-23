<template>
    <div class="main">
      <!-- <SideNav /> -->
      <Header />
      <Post  />
    </div>
  </template>
  
  <script>
  import Header from '@/components/Header.vue';
  import Post from '@/components/Post.vue';
  
  export default {
    components: {
      Header,
      Post,
    }
}
  </script>
  
  <style scoped>
  .main {
  flex: 1;
  background-color: #f4f5fa;
  padding: 10px 40px;
}

/* Responsive adjustments */

/* For smaller devices, decrease padding */
@media (max-width: 768px) {
  .main {
    padding: 10px 20px;
  }
}

/* For even smaller devices, further decrease padding */
@media (max-width: 480px) {
  .main {
    padding: 10px 10px;
  }
}
  </style>
  