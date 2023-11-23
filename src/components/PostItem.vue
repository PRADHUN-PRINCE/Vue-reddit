<template>
    <div class="post">
      <div class="post__left">
        <button class="up" @click="upClicked"><i class="fas fa-caret-up"></i></button>
        <span>{{ vote }}</span>
        <button class="up" @click="downClicked"><i class="fas fa-caret-down"></i></button>
      </div>
      <div class="post__center">
        <img :src="post.image" alt="img" />
      </div>
      <div class="post__right">
        <h3>{{ post.title }}</h3>
        <span class="post__info">
          submitted an hour ago by {{ post.user }} to {{ post.subreddit }}
        </span>
        <p class="post__info">
          {{ post.comment_count }} comments | share | save | hide | report
        </p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      post: Object,
    },
    data() {
      return {
        vote: this.post.upvote,
      };
    },
    methods: {
      upClicked() {
        this.vote += 1;
      },
      downClicked() {
        this.vote -= 1;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Your component-specific styles here */
  .post {
    display: flex;
    align-items: center;
    margin: 1.5em 1em;
}

.post__left {
    width: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.post__left > i {
    font-size: large;
    color: #898ea2;
}

.post > div {
    margin-right: 20px;
}

.post__center > img {
    height: 60px;
    border-radius: 5px;
}

.post__right {
    width: 85%;
}

.post a {
    text-decoration: none;
    color: #464855;
}

.post__right > h3 a {
    font-weight: 600;
    font-size: medium;
    color: #464855;
    padding: 5px 0;
}

.post__right > .post__info {
    font-size: smaller;
    color: #898ea2;
}

.post__right > * {
    margin-bottom: 2px;
}

div {
    float: none;
}

p.post__info {
    margin-top: 4px;
}

.up {
    border: none;
    background-color: white;
}

/* Responsive Styles */
@media screen and (max-width: 768px) {
    /* Adjust the post layout for smaller screens or viewports */
    .post {
        flex-direction: column;
    }

    .post__left {
        width: 100%;
        margin-bottom: 10px;
    }

    .post__right {
        width: 100%;
    }

    .post__center > img {
        height: 40px; /* Adjust the image height for smaller screens */
    }

    /* Add any other responsive adjustments as needed */
}

  </style>
  