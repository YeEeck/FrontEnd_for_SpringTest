<template>
  <div id="app">
    <div class="background" v-if="showMainTab">
      <img :src="imgSrc" width="100%" height="100%" alt="" />
    </div>
    <div id="nav" v-show="showMainTab">
      <router-link to="/home">主页</router-link> |
      <router-link to="/about">关于</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgSrc: require("../src/assets/backImg.jpg"),
      showMainTab: true,
    };
  },
  provide() {
    return {
      changeMainTabShow: this.changeMainTabShow,
    };
  },

  methods: {
    changeMainTabShow() {
      this.showMainTab = false;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}


#nav {
  margin: 0 auto;
  padding: 10px;

  font-size: large;

  background-color: white;

  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  width: 200px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: rgb(24, 144, 255);
}

#nav a.router-link-active {
  color: rgb(24, 144, 255);
}

.background {
  width: 100%;
  height: 100%;
  z-index: -1;
  position: absolute;
}
</style>
