<template>
  <div class="login-reg-panel">
    <div class="login-info-box">
      <h2>Have an account?</h2>
      <p>Lorem ipsum dolor sit amet</p>
      <button v-on:click="showLogin = !showLogin">change</button>
    </div>
    <div class="register-info-box">
      <h2>Don't have an account?</h2>
      <p>Lorem ipsum dolor sit amet</p>
      <button v-on:click="showLogin = !showLogin" for="log-login-show">Register</button>
    </div>
    <div class="white-panel">
      <div v-if="showLogin" class="login-show">
        <h2>LOGIN</h2>
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="button" value="Login" />
        <a href>Forgot password?</a>
      </div>
      <div v-else class="register-show">
        <h2>REGISTER</h2>
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
        <input type="button" value="Register" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: "empty",
  data() {
    return {
      showLogin: true
    };
  },
  methods: {
    Register() {
      console.log("Register");
    },
    Login() {}
  }
};
</script>
<style >
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
a {
  text-decoration: none;
  color: #444444;
}
.login-reg-panel {
  position: relative;
  /* top: 50%; */
  transform: translateY(25%);
  text-align: center;
  width: 70%;
  right: 0;
  left: 0;
  margin: auto;
  height: 400px;
  background-color: rgba(236, 48, 20, 0.9);
}
.white-panel {
  background-color: rgba(255, 255, 255, 1);
  height: 500px;
  position: absolute;
  top: -50px;
  width: 50%;
  right: calc(50% - 50px);
  transition: 0.3s ease-in-out;
  z-index: 0;
  box-shadow: 0 0 15px 9px #00000096;
}
.login-reg-panel input[type="radio"] {
  position: relative;
  display: none;
}
.login-reg-panel {
  color: #b8b8b8;
}
.login-reg-panel #label-login,
.login-reg-panel #label-register {
  border: 1px solid #9e9e9e;
  padding: 5px 5px;
  width: 150px;
  display: block;
  text-align: center;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 600;
  font-size: 18px;
}
.login-info-box {
  width: 30%;
  padding: 0 50px;
  top: 20%;
  left: 0;
  position: absolute;
  text-align: left;
}
.register-info-box {
  width: 30%;
  padding: 0 50px;
  top: 20%;
  right: 0;
  position: absolute;
  text-align: left;
}
.right-log {
  right: 50px !important;
}

.login-show,
.register-show {
  z-index: 1;
  display: block;
  opacity: 1;
  transition: 0.3s ease-in-out;
  color: #080404;
  text-align: left;
  padding: 50px;
}
.show-log-panel {
  display: block;
  opacity: 0.9;
}
.login-show input[type="text"],
.login-show input[type="password"] {
  width: 100%;
  display: block;
  margin: 20px 0;
  padding: 15px;
  border: 1px solid #b5b5b5;
  outline: none;
}
.login-show input[type="button"] {
  max-width: 150px;
  width: 100%;
  background: #444444;
  color: #f9f9f9;
  border: none;
  padding: 10px;
  text-transform: uppercase;
  border-radius: 2px;
  float: right;
  cursor: pointer;
}
.login-show a {
  display: inline-block;
  padding: 10px 0;
}

.register-show input[type="text"],
.register-show input[type="password"] {
  width: 100%;
  display: block;
  margin: 20px 0;
  padding: 15px;
  border: 1px solid #b5b5b5;
  outline: none;
}
.register-show input[type="button"] {
  max-width: 150px;
  width: 100%;
  background: #444444;
  color: #f9f9f9;
  border: none;
  padding: 10px;
  text-transform: uppercase;
  border-radius: 2px;
  float: right;
  cursor: pointer;
}
.credit {
  position: absolute;
  bottom: 10px;
  left: 10px;
  color: #3b3b25;
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 1px;
  z-index: 99;
}
a {
  text-decoration: none;
  color: #2c7715;
}
</style>
