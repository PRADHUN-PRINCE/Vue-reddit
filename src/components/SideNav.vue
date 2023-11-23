<template>
    <div class="sidenav">
      <div class="sidenav__logo">
        <img src="https://www.logo.wine/a/logo/Reddit/Reddit-Logo.wine.svg" alt="logo" />
      </div>
      <div class="sidenav__search">
        <input v-model="search" type="text" name="search" placeholder="Search" />
        <i class="fas fa-search"></i>
      </div>
      <div class="sidenav__link">
        <ul class="sidenav__menu">
          <li v-for="(menu, index) in menus" :key="index">
            <a :href="menu.to">{{ menu.text }}</a>
          </li>
        </ul>
        <hr />
        <ul class="sidenav__subreddit">
          <li v-for="(subreddit, index) in subreddits" :key="index">
            <a :href="`/r/${subreddit}`">{{ subreddit }}</a>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        search: '',
        menus: [
          { to: '/r/popular', text: 'Popular' },
          { to: '/r/all', text: 'All' },
          { to: '/r/random', text: 'Random' }
        ],
        subreddits: [
          'askreddit',
          'worldnews',
          'videos',
          'funny',
          'todayilearned',
          'pics',
          'gaming',
          'movies',
          'news',
          'gifs',
          'aww',
          'mildlyinteresting',
          'television',
          'jokes',
          'science',
          'soccer',
          'internetisbeautiful',
          'showerthoughts',
          'detaisbeautiful'
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .sidenav {
    width: 200px;
    font-size: small;
    box-shadow: 2px 0px 1px 1px #f4f5fa;
  }
  
  .sidenav__logo {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .sidenav__logo > img {
    width: 60%;
    margin: 5px;
  }
  
  .sidenav__search {
    margin: 2em 0;
  }
  ul {
    list-style-type: none;
}
  
  .sidenav__search > input {
    padding: 8px 10px;
    border: 1px solid #f4f5fa;
    box-shadow: 0px 1px 0px 1px #f4f5fa;
    border-radius: 0px 50px 50px 0px;
    position: relative;
    outline-width: 0;
  }
  
  .sidenav__search > i {
    right: 30px;
    position: relative;
  }
  
  .sidenav a {
    text-decoration: none;
    color: #808080;
  }
  
  .sidenav__link li {
    padding: 10px 15px;
  }
  
  .sidenav hr {
    margin: 2em 0;
    border: 1px solid #f4f5fa;
  }
  
  div {
    float: none;
  }
  
  /* Responsive Styles */
  @media screen and (max-width: 768px) {
    .sidenav {
      width: 100%; /* Take the full width on smaller screens */
    }
  
    .sidenav__logo > img {
      width: 40%; /* Adjust the logo size for smaller screens */
    }
  
    .sidenav__search > input {
      border-radius: 50px; /* Remove the rounded corner for search input on smaller screens */
    }
  
    .sidenav__search > i {
      right: 15px; /* Adjust the position of the search icon for smaller screens */
    }
  
    
  }
  </style>
  