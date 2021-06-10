<template>
  <div class="container">
    <a-input
      type="text"
      v-model="username"
      class="username_input"
      placeholder="用户名"
    /><br /><br />
    <a-input
      type="password"
      v-model="password"
      class="username_input"
      placeholder="密码"
    /><br /><br />
    <a-button type="primary" @click="login">登录</a-button><br /><br />
  </div>
</template>

<script>
import { PostTest } from "../network/login";

export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      const hide = this.$message.loading("正在登录...", 0);
      this.res = "";
      this.tipClass = "normal_tip";
      this.loadingS = true;
      PostTest({ username: this.username, password: this.password }).then(
        (res) => {
          if (res.data.status == "true") {
            // this.res = "登录成功";
            // this.tipClass = "right_tip";
            // this.loadingS = false;
            setTimeout(hide, 0);
            this.$message.success("登录成功");
            setTimeout(() => {
              this.$router.push("/inner");
            }, 1000);
          } else {
            // this.res = "用户名或密码错误";
            // this.tipClass = "error_tip";
            // this.loadingS = false;
            setTimeout(hide, 0);
            this.$message.error("用户名或密码错误");
          }
        }
      );
    },
  },
  computed: {
    getLoadRes() {
      return !this.loadingS;
    },
  },
};
</script>

<style>
.res_tip {
  height: 80px;
}

.username_input {
  width: 300px;
}

.container {
  margin-top: 1em;
}

.error_tip {
  color: red;
  font-weight: bold;
}

.right_tip {
  color: #42b983;
  font-weight: bold;
}

input {
  outline: none;
  border-width: 1px;
  border-radius: 10px;
  padding-left: 1em;
}

.load_img {
  height: 80px;
}
</style>