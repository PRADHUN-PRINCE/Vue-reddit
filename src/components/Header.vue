<template>
    <div>
      <div class="header">
        <div class="header__left">
          <ul>
            <li>
              <a class="active">Popular</a>
            </li>
            <li>
              <a class="active2">Hot </a>
            </li>
            <li>
              <a class="active2">Rising </a>
            </li>
            <li>
              <a class="active3">Controversial</a>
            </li>
            <li>
              <a class="active4">Glided </a>
            </li>
          </ul>
        </div>
        <div class="header__right">
          <i class="fas fa-bell"></i>
          <div class="header__user">
            <span v-if="authenticated">Welcome, {{ username }}!</span>
      <button @click="logout" v-if="authenticated">Logout</button>

      <!-- Display registration and login buttons when not authenticated -->
      <button @click="showRegistrationForm" v-if="!authenticated">Register</button>
      <button @click="showLoginForm" v-if="!authenticated">Login</button>
    </div>

    <!-- Conditional rendering of registration and login forms -->
    <div v-if="showRegistration && !authenticated" class="floating-form">
      <form class="registration-form" @submit.prevent="register">
        <!-- Registration form content -->
        <label for="registrationUsername">Username:</label>
        <input type="text" v-model="registrationUsername" required />
        <label for="registrationPassword">Password:</label>
        <input type="password" v-model="registrationPassword" required />
        <button type="submit">Register</button>
      </form>
    </div>

    <div v-if="showLogin && !authenticated" class="floating-form">
      <form class="login-form" @submit.prevent="login">
        <!-- Login form content -->
        <label for="loginUsername">Username:</label>
        <input type="text" v-model="loginUsername" required />
        <label for="loginPassword">Password:</label>
        <input type="password" v-model="loginPassword" required />
        <button type="submit">Login</button>
      </form>
    </div>
</div>
</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showRegistration: false,
      showLogin: false,
      authenticated: false,
      username: "",
      registrationUsername: "",
      registrationPassword: "",
      loginUsername: "",
      loginPassword: "",
    };
  },
  methods: {
    showRegistrationForm() {
      this.showRegistration = true;
      this.showLogin = false;
    },
    showLoginForm() {
      this.showLogin = true;
      this.showRegistration = false;
    },
    handleLoginSuccess(username) {
      this.authenticated = true;
      this.username = username;
    },
    logout() {
      this.authenticated = false;
      this.username = "";
    },
    register() {
      // Registration logic
      const registrationData = {
        username: this.registrationUsername,
        password: this.registrationPassword,
      };

      // Store registration data in local storage
      localStorage.setItem("registrationData", JSON.stringify(registrationData));

      // Clear registration form
      this.registrationUsername = "";
      this.registrationPassword = "";

      // Show login form
      this.showRegistration = false;
      this.showLogin = true;
    },
    login() {
      // Login logic
      const storedRegistrationData = localStorage.getItem("registrationData");

      if (storedRegistrationData) {
        const { username, password } = JSON.parse(storedRegistrationData);

        // Check if login credentials match stored registration data
        if (this.loginUsername === username && this.loginPassword === password) {
          // Set authenticated state and welcome the user
          this.handleLoginSuccess(username);

          // Additional login logic if needed

          // Hide login form
          this.showLogin = false;
        } else {
          // Handle invalid login credentials
          alert("Invalid username or password");
        }
      } else {
        // Handle case where no registration data is stored
        alert("No registration data found");
      }
    },
  },
};
</script>
<style scoped>
.floating-form {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 1000; /* Adjust as needed */
}

.registration-form label,
.login-form label {
  display: block;
  margin-bottom: 8px;
}

.registration-form input,
.login-form input {
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
}

.registration-form button,
.login-form button {
  background-color: #007bff;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.login-form button:hover {
  background-color: #0056b3;
}
li{
    list-style-type: none;
    padding-left:10px;
    gap: 30px;
}
.floating-form {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 1000; /* Adjust as needed */
}

.header__user span {
  margin-right: 10px;
  color: #008000; /* Green color for the authenticated state */
}
  .header {
    font-size: small;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0.5em 0 2.5em;
  }
  
  .header a {
    text-decoration: none;
  }
  
  .header__left ul {
    display: flex;
    align-items: center;
  }
  
  .header__left li a {
    padding: 10px;
    margin: 10px;
    color: #808080;
    cursor: pointer;
  }
  
  .header__left li a:hover {
    color: red;
  }
  
  .header__right {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .header__right > * {
    margin-left: 10px;
  }
  
  .header__right > img {
    width: 25px;
    border-radius: 50%;
  }
  
  .header__right > i {
    font-size: medium;
    color: #808080;
  }
  
  .header__right > span {
    margin-right: 10px;
  }
  
  /* Responsive adjustments */
  
  /* For smaller devices, decrease font size and adjust margins */
  @media (max-width: 768px) {
    .header {
      font-size: x-small;
      margin: 0.3em 0 1.5em;
    }
  
    .header__left li a {
      padding: 5px;
      margin: 5px;
    }
  
    .header__right > * {
      margin-left: 5px;
    }
  
    .header__right > img {
      width: 20px;
    }
  
    .header__right > i {
      font-size: small;
    }
  }
  
  /* For even smaller devices, further decrease font size and margins */
  @media (max-width: 480px) {
    .header {
      font-size: xx-small;
      margin: 0.2em 0 1em;
    }
  
    .header__left li a {
      padding: 3px;
      margin: 3px;
    }
  
    .header__right > * {
      margin-left: 3px;
    }
  
    .header__right > img {
      width: 15px;
    }
  
    .header__right > i {
      font-size: x-small;
    }
  }
  </style>
  