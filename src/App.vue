<template>
  
  <HelloWorld/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    
    HelloWorld
}
}
</script>

<style>
/* Base styles (no specific responsiveness) */
* {
    box-sizing: border-box; /* Ensures padding and border are included in the element's total width and height */
}

body {
    margin: 0;
    font-family: Arial, sans-serif;
}

/* Your existing styles here */

/* Responsive Styles */

/* Adjust layout for small screens */
@media screen and (max-width: 576px) {
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

    /* Add any other responsive adjustments for small screens */
}

/* Adjust layout for medium screens */
@media screen and (min-width: 577px) and (max-width: 768px) {
    /* Add specific styles for medium-sized screens */
}

/* Adjust layout for large screens */
@media screen and (min-width: 769px) {
    /* Add specific styles for larger screens */
}

</style>
