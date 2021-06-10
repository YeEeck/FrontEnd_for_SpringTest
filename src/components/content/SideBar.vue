<template>
  <div class="side-bar">
    <div class="wrapper">
      <ul class="side-list" style="padding-left: 0px">
        <li class="item" @click="gotoUesr">
          <a-icon type="user" />
          学生信息
        </li>
        <li class="item" @click="gotoStatus">
          <a-icon type="trophy" />
          奖惩和缺勤情况
        </li>
        <li class="item" @click="gotoClass">
          <a-icon type="schedule" />
          选课管理
        </li>
        <li class="item" @click="gotoExam">
          <a-icon type="read" />
          考务管理
        </li>
        <li class="item" @click="gotoDepartment">
          <a-icon type="team" />
          院系管理
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  data() {
    return {};
  },
  methods: {
    // 路由跳转
    gotoUesr() {
      this.$router.push("/inner/user");
    },
    gotoStatus() {
      this.$router.push("/inner/status");
    },
    gotoExam() {
      this.$router.push("/inner/exam");
    },
    gotoClass() {
      this.$router.push("/inner/class");
    },
    gotoDepartment() {
      this.$router.push("/inner/department");
    },
  },
};
</script>

<style scoped>
@import "https://at.alicdn.com/t/font_2344063_9et4hciuv2.css";

.side-bar {
  position: fixed;
  top: 0;
  bottom: -0px;
  left: 0;
  background-color: rgb(48, 65, 86);
}

.side-list .item {
  list-style-type: none;
  color: rgb(191, 203, 217);
  cursor: pointer;
  font-size: 1em;
  width: 13rem;
  padding: 0 20px;
  height: 56px;
  line-height: 56px;
  transition: border-color 0.3s, background-color 0.3s, color 0.3s;
  box-sizing: border-box;
}

.side-list .item:hover {
  color: #fff;
  background: rgb(130, 174, 173);
  border-radius: 3px;
}

.side-list .item i {
  padding-right: 10px;
}
</style>