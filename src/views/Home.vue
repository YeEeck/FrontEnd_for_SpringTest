<template>
  <div class="home_view">
    <div class="main">
      <div class="img_div">
        <img class="login_img" src="../assets/LoginBackGround.png" />
      </div>
      <div class="home">
        <h1>学生信息管理系统</h1>
        <div id="navin">
          <router-link to="/home">登录</router-link> |
          <router-link to="/home/reg">注册</router-link>
        </div>
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style>
#nav {
  padding: 10px;
  font-size: large;
}

#navin {
  /* margin-top: 20px; */
}

#navin a {
  font-weight: bold;
  color: #2c3e50;
}

#navin a.router-link-exact-active {
  color: rgb(24, 144, 255);
}

.home_view {
  display: flex;
  height: 90%;
  align-items: center;
  justify-content: center;
}

.main {
  /* margin-top: 200px; */
  display: flex;
  align-items: center;
  justify-content: center;
}

.login_img {
  height: 200px;
  margin-right: 50px;
}

.img_div {
  background-color: #0099cc;
  padding: 50px;
  padding-top: 85px;
  padding-bottom: 85px;

  display: flex;
  justify-content: center;
  align-items: center;
}

.home {
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  align-items: center;
  padding: 50px;
  padding-bottom: 60px;
  padding-top: 60px;
  /* border-style: solid; */

  background-color: white;
}
</style>