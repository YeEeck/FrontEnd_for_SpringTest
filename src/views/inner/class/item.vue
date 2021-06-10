<template>
  <div class="exam_item_container">
    <span class="item_title">{{ title }}</span>
    <a-tag color="blue" class="exam_tip">{{ tip }}</a-tag>
    <span class="exam_sub"
      >上课地点:<span>{{ area }}</span></span
    >
    <span class="exam_sub"
      >上课时间:<span>{{ time }}</span></span
    >
    <span class="exam_sub"
      >任课老师:<span>{{ teacher }}</span></span
    >
    <div class="exam_bottom_bar">
      <a-button type="primary" class="bottom_bar_button" @click="edit"
        >编辑</a-button
      >
      <a-button type="primary" @click="del">删除</a-button>
    </div>
    <input type="text" v-model="id" v-show="false" />
  </div>
</template>

<script>
import { delClass } from "../../../network/class";
export default {
  name: "class-item",
  props: {
    title: String,
    tip: String,
    area: String,
    time: String,
    teacher: String,
    id: String,
  },
  data() {
    return {
      etitle: this.title,
      etip: this.tip,
      earea: this.area,
      etime: this.time,
      eteacher: this.teacher,
      Gid: this.id,
    };
  },
  methods: {
    del() {
      let self = this;
      this.$confirm({
        title: "确定要删除该课程吗？",
        content: "该操作将不可恢复，请谨慎操作",
        onOk() {
          const hide = self.$message.loading("正在删除...", 0);
          delClass({ id: self.Gid })
            .then((res) => {
              setTimeout(hide, 0);
              if (res.data.deleted == 1) {
                self.$message.success("删除成功");
              } else {
                self.$message.error("删除失败");
              }
              // self.$parent.updateData();
              self.$emit("upData");
            })
            .catch((err) => {
              setTimeout(hide, 0);
              self.$message.error(err);
              self.$message.error("连接异常");
              self.$parent.updateData();
            });
        },
        onCancel() {},
      });
    },
    edit() {
      // this.$parent.edit({
      //   title: this.etitle,
      //   tip: this.etip,
      //   area: this.earea,
      //   time: this.etime,
      //   teacher: this.eteacher,
      //   id: this.Gid,
      // });

      this.$emit("refreshData", {
        title: this.etitle,
        tip: this.etip,
        area: this.earea,
        time: this.etime,
        teacher: this.eteacher,
        id: this.Gid,
      });
    },
  },
};
</script>

<style>
.exam_item_container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  width: 32%;

  padding: 1rem;
  padding-left: 2rem;

  background-color: white;

  box-shadow: lightgray 1px 1px 5px;
  transition: box-shadow 0.5s;

  margin-bottom: 1rem;
  margin-right: 1.2%;
}

.exam_item_container:hover {
  box-shadow: rgb(190, 190, 190) 1px 1px 15px;
  transition: box-shadow 0.5s;
}

.item_title {
  /* text-align: left; */
  font-size: larger;
  font-weight: bold;
  margin-bottom: 0.5rem;
}
.exam_tip {
  width: fit-content;
  margin-bottom: 0.5rem;
}

.exam_sub {
  font-size: smaller;
  margin-bottom: 1px;
}

.exam_bottom_bar {
  height: 1rem;
  width: 100%;

  display: flex;
  justify-content: flex-start;
  margin-bottom: 1rem;
  margin-top: 5px;
}

.bottom_bar_button {
  margin-right: 10px;
}
</style>
