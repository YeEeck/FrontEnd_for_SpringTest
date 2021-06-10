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
    <a-button type="primary" @click="reg">注册</a-button><br /><br />
  </div>
</template>

<script>
import { PostTest } from "../network/Reg";

export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    reg() {
      const hide = this.$message.loading("正在注册...", 0);
      this.res = "";
      this.tipClass = "normal_tip";
      this.loadingS = true;
      PostTest({ username: this.username, password: this.password }).then(
        (res) => {
          console.log(res);
          if (res.data.status == "true") {
            // this.res = "注册成功,正在跳转...";
            // this.tipClass = "right_tip";
            // this.loadingS = false;
            setTimeout(hide, 0);
            this.$message.success("注册成功,正在跳转...");
            setTimeout(() => {
              this.$router.push("/home");
            }, 1000);
          } else {
            // this.res = "用户已存在";
            // this.tipClass = "error_tip";
            // this.loadingS = false;
            setTimeout(hide, 0);
            this.$message.error("用户已存在或接口已被关闭");
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