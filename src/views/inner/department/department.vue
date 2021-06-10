<template>
  <div class="class_outer">
    <!-- 抽屉 -->
    <a-drawer
      title="创建新院系"
      :width="360"
      :visible="visible"
      :body-style="{ paddingBottom: '80px' }"
      @close="onClose"
      class="user_drawer"
    >
      <a-input
        v-model="title"
        placeholder="院系名称"
        style="margin-bottom: 1rem"
      >
      </a-input>
      <a-input
        v-model="type"
        placeholder="专业类别(用英文逗号分隔)"
        style="margin-bottom: 1rem"
      >
      </a-input>
      <a-input v-model="teacher" placeholder="院长" style="margin-bottom: 1rem">
      </a-input>
      <a-button type="primary" @click="addData">新建</a-button>
    </a-drawer>

    <a-drawer
      title="编辑课程"
      :width="360"
      :visible="visibleE"
      :body-style="{ paddingBottom: '80px' }"
      @close="onCloseE"
      class="user_drawer"
    >
      <a-input
        v-model="title"
        placeholder="学院名称"
        style="margin-bottom: 1rem"
      >
      </a-input>
      <a-input v-model="type" placeholder="专业" style="margin-bottom: 1rem">
      </a-input>
      <a-input v-model="teacher" placeholder="院长" style="margin-bottom: 1rem">
      </a-input>
      <a-button type="primary" @click="editData">提交</a-button>
    </a-drawer>
    <!-- 抽屉 -->

    <div class="exam_top_bar">
      <h1 style="display: inline">院系管理</h1>
      <div class="exam_topbar_button_out">
        <a-button
          type="primary"
          class="add_button"
          v-print="'#class_items_list'"
          >打印</a-button
        >
        <a-button type="primary" @click="showDrawer" class="add_button">
          <a-icon type="plus" /> New Class
        </a-button>
      </div>
    </div>

    <div class="class_items_list" id="class_items_list">
      <a-skeleton active v-show="loading" :paragraph="{ rows: 5 }" />
      <class-item
        v-for="(item, index) in list"
        v-show="fLoading"
        :title="item.title"
        :type="item.type"
        :teacher="item.teacher"
        :id="item._id"
        :key="index"
        @refreshData="edit"
        @upData="updateData"
      ></class-item>
    </div>
  </div>
</template>

<script>
import {
  addDepartment,
  editDepartment,
  getDepartment,
} from "../../../network/department";
import classItem from "./item";

export default {
  components: {
    classItem,
  },
  data() {
    return {
      list: [],
      loading: true,
      visible: false,

      title: "",
      type: "",
      teacher: "",

      visibleE: false,
      id: "",
    };
  },
  computed: {
    fLoading() {
      return !this.loading;
    },
    getTypes() {
      return this.type.split(",");
    },
  },
  activated() {
    this.updateData();
  },
  methods: {
    updateData() {
      this.loading = true;
      getDepartment()
        .then((res) => {
          this.list = res.data;
          this.loading = false;
        })
        .catch((err) => {
          console.log(err);
          this.$message.error("网络连接异常");
        });
    },
    addData() {
      const hide = this.$message.loading("正在添加...", 0);
      addDepartment({
        title: this.title,
        type: this.getTypes,
        teacher: this.teacher,
      })
        .then((res) => {
          if (res.data.success != false) {
            setTimeout(hide, 0);
            this.$message.success("添加成功");
            this.updateData();
          } else {
            setTimeout(hide, 0);
            this.$message.error("添加失败");
          }
        })
        .catch((err) => {
          setTimeout(hide, 0);
          this.$message.error(err);
          console.log(err);
          this.$message.error("添加失败，网络连接异常");
        });
      this.visible = false;
    },
    clear() {
      this.title = "";
      this.type = "";
      this.teacher = "";
    },
    edit(text) {
      this.title = text.title;
      this.type = text.type;
      this.teacher = text.teacher;
      this.id = text.id;
      this.showDrawerE();
    },
    editData() {
      const hide = this.$message.loading("正在提交修改...", 0);
      editDepartment({
        title: this.title,
        type: this.getTypes,
        teacher: this.teacher,
        _id: this.id,
      })
        .then((res) => {
          console.log(res);
          if (res.data.success != false) {
            setTimeout(hide, 0);
            this.$message.success("修改成功");
            //传入子组件的参数赋值给data后不会动态更新，导致编辑drawer中文本框不会跟随更新。重刷页面或重加载组件可以重新赋值。这里直接重刷了页面。
            this.$router.go(0);
          } else {
            setTimeout(hide, 0);
            this.$message.error("修改失败");
          }
        })
        .catch((err) => {
          setTimeout(hide, 0);
          this.$message.error(err);
          this.$message.error("网络连接异常");
        });
      this.visibleE = false;
    },
    showDrawer() {
      this.clear();
      this.visible = true;
    },
    onClose() {
      this.visible = false;
      this.clear();
    },
    showDrawerE() {
      this.visibleE = true;
    },
    onCloseE() {
      this.visibleE = false;
    },
  },
};
</script>

<style>
.class_outer {
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-direction: row;
  flex-wrap: wrap;

  align-content: flex-start;

  padding-top: 10px;

  background-color: rgb(245, 245, 245);

  position: fixed;
  left: 13rem;
  right: 0;
  top: 0;
  bottom: 0;

  padding: 1rem;
}
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
.class_items_list {
  padding-left: 7%;
  padding-right: 7%;
  /* padding-right: 5%; */

  width: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
  flex-wrap: wrap;

  align-content: flex-start;
}
.user_drawer {
  text-align: center;
}
.add_button {
  display: inline-block;
  margin-right: 5%;
}
</style>