<template>
    <div class="posts">
      <div class="inputsection">
        <input class="input" placeholder="Create Post" v-model="comment" />
        <button class="btn" @click="postComment">Post</button>
      </div>
  
      <div v-for="(post, index) in posts" :key="index">
        <PostItem :post="post" />
      </div>
  
      <div v-if="localStoragePosts.length">
        <PostItem v-for="(post, index) in localStoragePosts" :post="post" :key="index" />
      </div>
    </div>
  </template>
  
  <script>
  import PostItem from '@/components/PostItem.vue';
  
  export default {
    data() {
      return {
        comment: '',
        posts: [{
        upvote: 105,
        image: "https://icdn.isrgrajan.com/in/2022/11/Virat-Kohli.jpg",
        title: "Virat Kohli always plays amazingly.",
        user: "theindependentonline",
        subreddit: "Sports",
        comment_count: " 30"
    }
    ,{
        upvote: 95,
        image: "https://hips.hearstapps.com/clv.h-cdn.co/assets/18/02/1515470256-levi-guzman-268866.jpg",
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, sint.",
        user: "theindependentonline",
        subreddit: "politics",
        comment_count: "15"
    }
    ,{
        upvote: 45,
        image: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_1200,q_50/lsci/db/PICTURES/CMS/357400/357408.jpg",
        title: "IPL 2022: MS Dhoni hands over CSK captaincy to Ravindra Jadeja",
        user: "theindependentonline",
        subreddit: "Sports",
        comment_count: "38"
    }
    ,{
        upvote: 44,
        image: "https://external-preview.redd.it/Px6sIQjon2ZS1XnxzNq8IuTnyI2ou6u7cA3xR4j3kyA.jpg?width=640&crop=smart&auto=webp&v=enabled&s=01eaad3c31b81b92288c9b9a77cf1bf2bd7c04a0",
        title: "Inspiring AI generated art in your new tab!",
        user: "theindependentonline",
        subreddit: "Trending",
        comment_count: "22"
    }
    ,{
        upvote: 15,
        image: "https://preview.redd.it/zsjbkytwmgva1.jpg?width=640&crop=smart&auto=webp&v=enabled&s=386fd92dbf1a135c440e25576e31c06b751df3de",
        title: "Scarcity of youth actors between the age group 25-30.",
        user: "theindependentonline",
        subreddit: "politics",
        comment_count: "34"
    }
    ,{
        upvote: 15,
        image: "https://preview.redd.it/xx7o8qvx7dva1.jpg?width=640&crop=smart&auto=webp&v=enabled&s=7e4ff838961a0f23b6524781561bc6cc0201cc9d",
        title: "Crypto slums (Rainy) by artist Mikael Mellbris.",
        user: "theindependentonline",
        subreddit: "politics",
        comment_count: "15"
    }
    ,{
        upvote: 15,
        image: "https://preview.redd.it/72xnxg5habsa1.jpg?width=640&crop=smart&auto=webp&v=enabled&s=44bcd75265c0399ec5cfa32eba364112647b5be0",
        title: "THIS DAY... AN ENTIRE DECADE AGO, THE PEAK FICTION WAS FIRST WITNESSED ON GLOBAL TELEVISION.",
        user: "theindependentonline",
        subreddit: "politics",
        comment_count: "15"
    }
    ,{
        upvote: 15,
        image: "https://external-preview.redd.it/qDdEEtYCf2ykhBCeaZFHmr1e3F2czTKEhIwDGDmp5PU.jpg?width=640&crop=smart&auto=webp&v=enabled&s=7bdf07e1bdf05f17e1aa0429d43a18f35b9094e5",
        title: "Streamline Your Voice-Over Business with Nimble CRM.",
        user: "theindependentonline",
        subreddit: "politics",
        comment_count: "15"
    }
    ,{
        upvote: 15,
        image: "https://preview.redd.it/11586tdo8ula1.jpg?width=640&crop=smart&auto=webp&v=enabled&s=ff6dcc8e77c1e0c0646434e14ebcb88d3899feb8",
        title: "Finally time to change the rear tire.",
        user: "theindependentonline",
        subreddit: "politics",
        comment_count: "15"
    }
    ,{
        upvote: 15,
        image: "https://preview.redd.it/ebr5gzg8hfia1.jpg?width=640&crop=smart&auto=webp&v=enabled&s=5d31c3f7e480a882949186ed55196e0c80c74114",
        title: "Hecate’s Art Journals Chief! Our scooters are only a means of transport;",
        user: "theindependentonline",
        subreddit: "politics",
        comment_count: "15"
    }
    ,{
        upvote: 15,
        image: "https://preview.redd.it/g9zn1ktdwfva1.png?width=640&crop=smart&auto=webp&v=enabled&s=0a5d441881ce1219fcab3bb15c43d74616fdfd38",
        title: "bklol for a reason",
        user: "theindependentonline",
        subreddit: "politics",
        comment_count: "15"
    }
    ,{
        upvote: 15,
        image: "https://external-preview.redd.it/LA_psPBk4F3KJTwjEZo1xVlHLtJ0hTiqWDTN_WNKopY.jpg?width=640&crop=smart&auto=webp&v=enabled&s=612421fa5e72cd7ecc4a40ac8a9f29023d436e0f",
        title: "Hey guys, after four years of development, we are happy to announce the release of the final version of Crash Test Oliver.",
        user: "theindependentonline",
        subreddit: "politics",
        comment_count: "15"
    }],
        localStoragePosts: [],
      };
    },
    mounted() {
      this.initializePosts();
    },
    methods: {
      initializePosts() {
    
      },
      postComment() {
        if (this.comment) {
          const obj = {
            upvote: 0,
            image: 'https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature-825x465.jpg',
            title: this.comment,
            user: 'theindependentonline',
            subreddit: 'general',
            comment_count: 0,
          };
  
          this.localStoragePosts.push(obj);
          this.comment = '';
        }
      },
    },
    components: {
      PostItem,
    },
  };
  </script>
  
  <style scoped>
  
  .posts {
    background-color: white;
    padding: 0.5em 1em;
    border-radius: 5px;
    box-shadow: -1px 0px 5px 5px #f4f5fa;
}

.inputsection {
    display: flex;
    background-color: #f4f5fa;
    padding: 1rem;
}

.input {
    width: 23rem;
    height: 2rem;
    margin-left: 7rem;
}

.btn {
    width: 7rem;
    margin-left: 1rem;
}

/* Responsive adjustments */

/* For smaller devices, adjust .posts and .inputsection width */
@media (max-width: 768px) {
  .posts {
    width: 90%;
    margin: 0 auto;
  }

  .inputsection {
    flex-direction: column;
    align-items: center;
  }

  .input {
    width: 100%;
    margin-left: 0;
    margin-bottom: 1rem;
  }

  .btn {
    width: 100%;
    margin-left: 0;
  }
}

/* For even smaller devices, further adjust .posts and .inputsection width */
@media (max-width: 480px) {
  .posts {
    width: 100%;
    margin: 0 auto;
  }

  .inputsection {
    padding: 0.5rem;
  }
}

  </style>
  