<template>
  <div class="main_inner">
    <side-bar />
    <div class="inner_view">
      <keep-alive>
        <router-view />
      </keep-alive>
    </div>
  </div>
</template>

<style>
/* .main_inner {
  margin-top: 20px;
  background-color: white;
} */
</style>

<script>
import SideBar from "../../components/content/SideBar";

export default {
  inject: ["changeMainTabShow"],

  components: {
    SideBar,
  },
  data() {
    return {};
  },

  mounted() {
    this.changeMainTabShow();
    history.pushState(null, null, document.URL);
    window.addEventListener("popstate", function () {
      history.pushState(null, null, document.URL);
    });
  },
};
</script>

<style>
.inner_view {
  margin-left: 13rem;
}
</style>