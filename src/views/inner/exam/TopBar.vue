<template>
  <div class="exam_top_bar">
    <h1 style="display: inline">考务管理</h1>
    <div class="exam_topbar_button_out">
      <a-button
        type="primary"
        @click="showDrawerF"
        class="add_button"
      >
        <a-icon type="search" />
      </a-button>
      <a-button type="primary" @click="showDrawer" class="add_button">
        <a-icon type="plus" /> New Exam
      </a-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "top-bar"
};
</script>

<style>
.exam_top_bar {
  display: flex;
  justify-content: space-between;

  width: 95%;

  align-items: flex-start;

  margin-left: 5%;
}
.exam_topbar_button_out {
  width: 30rem;
  display: flex;
  justify-content: flex-end;
  margin-right: 5%;
}
.add_button {
  display: inline-block;
  margin-right: 5%;
}
</style>