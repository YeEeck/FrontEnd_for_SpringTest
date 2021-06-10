<template>
  <div class="exam_outer">
    <!-- 抽屉 -->
    <a-drawer
      title="创建新考试"
      :width="360"
      :visible="visible"
      :body-style="{ paddingBottom: '80px' }"
      @close="onClose"
      class="user_drawer"
    >
      <a-input
        v-model="newTitle"
        placeholder="考试名称"
        style="margin-bottom: 1rem"
      >
      </a-input>
      <a-input
        v-model="newTip"
        placeholder="考试类型"
        style="margin-bottom: 1rem"
      >
      </a-input>
      <a-input
        v-model="newArea"
        placeholder="考试地点"
        style="margin-bottom: 1rem"
      >
      </a-input>
      <a-input
        v-model="newTime"
        placeholder="考试时间"
        style="margin-bottom: 1rem"
      >
      </a-input>
      <a-input
        v-model="newTeacher"
        placeholder="监考老师"
        style="margin-bottom: 1rem"
      >
      </a-input>
      <a-button type="primary" @click="addData">新建</a-button>
    </a-drawer>

    <a-drawer
      title="编辑考试"
      :width="360"
      :visible="visibleE"
      :body-style="{ paddingBottom: '80px' }"
      @close="onCloseE"
      class="user_drawer"
    >
      <a-input
        v-model="eTitle"
        placeholder="考试名称"
        style="margin-bottom: 1rem"
      >
      </a-input>
      <a-input
        v-model="eTip"
        placeholder="考试类型"
        style="margin-bottom: 1rem"
      >
      </a-input>
      <a-input
        v-model="eArea"
        placeholder="考试地点"
        style="margin-bottom: 1rem"
      >
      </a-input>
      <a-input
        v-model="eTime"
        placeholder="考试时间"
        style="margin-bottom: 1rem"
      >
      </a-input>
      <a-input
        v-model="eTeacher"
        placeholder="监考老师"
        style="margin-bottom: 1rem"
      >
      </a-input>
      <a-button type="primary" @click="editData">提交</a-button>
    </a-drawer>
    <!-- 抽屉 -->

    <!-- 抽屉2 -->
    <a-drawer
      title="记录新成绩"
      :width="360"
      :visible="visible2"
      :body-style="{ paddingBottom: '80px' }"
      @close="onClose2"
      class="user_drawer"
    >
      <a-input
        v-model="name2"
        placeholder="学生姓名"
        style="margin-bottom: 1rem"
      >
      </a-input>
      <a-input v-model="type2" placeholder="专业" style="margin-bottom: 1rem">
      </a-input>
      <a-input v-model="Sclass2" placeholder="班级" style="margin-bottom: 1rem">
      </a-input>
      <a-input
        v-model="idNo2"
        placeholder="身份证号"
        style="margin-bottom: 1rem"
      >
      </a-input>
      <a-input v-model="exam2" placeholder="考试名" style="margin-bottom: 1rem">
      </a-input>
      <a-input
        v-model="score2"
        placeholder="考试成绩"
        style="margin-bottom: 1rem"
      >
      </a-input>
      <a-input
        v-model="time2"
        placeholder="登分时间"
        style="margin-bottom: 1rem"
      >
      </a-input>
      <a-button type="primary" @click="addData2">新建</a-button>
    </a-drawer>
    <!-- 抽屉2 -->

    <!-- 抽屉3 -->
    <a-drawer
      title="记录新成绩"
      :width="360"
      :visible="visible3"
      :body-style="{ paddingBottom: '80px' }"
      @close="onClose3"
      class="user_drawer"
    >
      <a-input
        v-model="name2"
        placeholder="学生姓名"
        style="margin-bottom: 1rem"
      >
      </a-input>
      <a-input v-model="type2" placeholder="专业" style="margin-bottom: 1rem">
      </a-input>
      <a-input v-model="Sclass2" placeholder="班级" style="margin-bottom: 1rem">
      </a-input>
      <a-input
        v-model="idNo2"
        placeholder="身份证号"
        style="margin-bottom: 1rem"
      >
      </a-input>
      <a-input v-model="exam2" placeholder="考试名" style="margin-bottom: 1rem">
      </a-input>
      <a-input
        v-model="score2"
        placeholder="考试成绩"
        style="margin-bottom: 1rem"
      >
      </a-input>
      <a-input
        v-model="time2"
        placeholder="登分时间"
        style="margin-bottom: 1rem"
      >
      </a-input>
      <a-button type="primary" @click="addData3">新建</a-button>
    </a-drawer>
    <!-- 抽屉3 -->

    <div class="exam_top_bar">
      <h1 style="display: inline">考务管理</h1>
      <div class="exam_topbar_button_out">
        <a-button
          type="primary"
          @click="exportExcel"
          class="add_button"
          v-show="showExport"
          >导出</a-button
        >
        <a-button
          type="primary"
          class="add_button"
          v-print="'#exam_table_out'"
          v-show="showPrint1"
          >打印</a-button
        >
        <a-button
          type="primary"
          class="add_button"
          v-print="'#exam_table1'"
          v-show="showPrint2"
          >打印</a-button
        >
        <a-button
          type="primary"
          class="add_button"
          v-print="'#exam_table2'"
          v-show="showPrint3"
          >打印</a-button
        >
        <a-button type="primary" @click="showDrawer" class="add_button">
          <a-icon type="plus" /> {{ addText }}
        </a-button>
      </div>
    </div>

    <a-tabs
      default-active-key="1"
      size="large"
      class="exam_tab"
      :active-key="tab_key"
      @change="tabChange"
    >
      <a-tab-pane key="1" tab="考试管理"
        ><div class="exam_table_out" id="exam_table_out">
          <div class="items_list">
            <a-skeleton active v-show="loading" :paragraph="{ rows: 5 }" />
            <exam-item
              v-for="(item, index) in list"
              v-show="fLoading"
              :title="item.title"
              :tip="item.tip"
              :area="item.area"
              :time="item.time"
              :teacher="item.teacher"
              :id="item._id"
              :key="index"
              @refreshData="edit"
              @upData="updateData"
            ></exam-item>
          </div>
        </div>
      </a-tab-pane>
      <a-tab-pane key="2" tab="成绩管理" force-render>
        <div class="exam_table_out2">
          <a-table
            :columns="columns_status"
            :data-source="data_score"
            :pagination="pagination"
            :loading="loading2"
            bordered
            class="table1"
            id="exam_table1"
          >
            <p slot="tags" slot-scope="text" class="do_p">
              <a-button @click="del2(text)">删除</a-button>
            </p>
          </a-table>
        </div>
      </a-tab-pane>
      <a-tab-pane key="3" tab="补考/重修管理" force-render>
        <div class="exam_table_out2">
          <a-table
            :columns="columns_status2"
            :data-source="data_score2"
            :pagination="pagination"
            :loading="loading3"
            bordered
            class="table1"
            id="exam_table2"
          >
            <p slot="tags" slot-scope="text" class="do_p">
              <a-button @click="del3(text)">删除</a-button>
            </p>
          </a-table>
        </div>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
import FileSaver from "file-saver";
import XLSX from "xlsx";
import examItem from "./item";
import {
  getExam,
  addExam,
  editExam,
  getScore,
  addScore,
  delScore,
  getpaScore,
  addpaScore,
  delpaScore,
} from "../../../network/exam";
const columns_status = [
  {
    title: "学生姓名",
    dataIndex: "name",
    scopedSlots: { customRender: "name" },
  },
  {
    title: "专业",
    dataIndex: "type",
  },
  {
    title: "班级",
    dataIndex: "Sclass",
  },
  {
    title: "身份证号",
    dataIndex: "idNo",
  },
  {
    title: "考试",
    dataIndex: "exam",
  },
  {
    title: "成绩",
    dataIndex: "score",
  },
  {
    title: "记录时间",
    dataIndex: "time",
  },
  {
    title: "操作",
    scopedSlots: { customRender: "tags" },
    width: 90,
  },
];

const columns_status2 = [
  {
    title: "学生姓名",
    dataIndex: "name",
    scopedSlots: { customRender: "name" },
  },
  {
    title: "专业",
    dataIndex: "type",
  },
  {
    title: "班级",
    dataIndex: "Sclass",
  },
  {
    title: "身份证号",
    dataIndex: "idNo",
  },
  {
    title: "考试",
    dataIndex: "exam",
  },
  {
    title: "补考成绩",
    dataIndex: "score",
  },
  {
    title: "记录时间",
    dataIndex: "time",
  },
  {
    title: "操作",
    scopedSlots: { customRender: "tags" },
    width: 90,
  },
];
export default {
  components: {
    examItem,
  },

  data() {
    return {
      pagination: {
        pageSize: 10,
      },
      addText: "New Exam",
      columns_status,
      columns_status2,
      loading: true,
      list: [],
      data_score: [],
      data_score2: [],
      visible: false,
      visibleE: false,

      tab_key: "1",

      flush: true,

      newTitle: "",
      newTip: "",
      newArea: "",
      newTime: "",
      newTeacher: "",

      eTitle: "",
      eTip: "",
      eArea: "",
      eTime: "",
      eTeacher: "",
      e_id: "",

      loading2: true,
      visible2: false,

      name2: "",
      type2: "",
      Sclass2: "",
      idNo2: "",
      exam2: "",
      score2: "",
      time2: "",

      loading3: true,
      visible3: false,

      table_name: "#exam_table1",
      showExport: false,
    };
  },
  activated() {
    this.updateData();
    this.updateData2();
    this.updateData3();
  },
  computed: {
    fLoading() {
      return !this.loading;
    },
    showPrint1() {
      if (this.tab_key == "1") {
        return true;
      } else {
        return false;
      }
    },
    showPrint2() {
      if (this.tab_key == "2") {
        return true;
      } else {
        return false;
      }
    },
    showPrint3() {
      if (this.tab_key == "3") {
        return true;
      } else {
        return false;
      }
    },
  },
  watch: {
    tab_key: function (val) {
      if (val == 1) {
        this.addText = "New Exam";
      } else if (val == 2) {
        this.addText = "New Score";
      } else {
        this.addText = "New Record";
      }
    },
  },
  methods: {
    exportExcel() {
      var wb = XLSX.utils.table_to_book(
        document.querySelector(this.table_name)
      ); // 这个id是表格的id
      var wbout = XLSX.write(wb, {
        bookType: "xlsx",
        bookSST: true,
        type: "array",
      });
      try {
        FileSaver.saveAs(
          new Blob([wbout], { type: "application/octet-stream" }),
          this.table_name + ".xlsx"
        );
      } catch (e) {
        if (typeof console !== "undefined") console.log(e, wbout);
      }
      return wbout;
    },
    tabChange(key) {
      this.tab_key = key;
      if (key == 2) {
        this.table_name = "#exam_table1";
        this.showExport = true;
      } else if (key == 3) {
        this.table_name = "#exam_table2";
        this.showExport = true;
      } else {
        this.showExport = false;
      }
    },
    updateData() {
      this.loading = true;
      getExam()
        .then((res) => {
          this.list = res.data;
          this.loading = false;
        })
        .catch((err) => {
          console.log(err);
          this.$message.error("网络连接异常");
        });
    },
    edit(text) {
      this.eTitle = text.title;
      this.eTip = text.tip;
      this.eArea = text.area;
      this.eTime = text.time;
      this.eTeacher = text.teacher;
      this.e_id = text.id;
      this.showDrawerE();
    },
    editData() {
      const hide = this.$message.loading("正在提交修改...", 0);
      editExam({
        title: this.eTitle,
        tip: this.eTip,
        area: this.eArea,
        time: this.eTime,
        teacher: this.eTeacher,
        _id: this.e_id,
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
      if (this.tab_key == 1) {
        this.visible = true;
      } else if (this.tab_key == 2) {
        this.visible2 = true;
      } else {
        this.visible3 = true;
      }
    },
    onClose() {
      this.visible = false;
    },
    showDrawerE() {
      this.visibleE = true;
    },
    onCloseE() {
      this.visibleE = false;
    },
    onClose2() {
      this.visible2 = false;
    },
    onClose3() {
      this.visible3 = false;
    },
    addData() {
      const hide = this.$message.loading("正在添加...", 0);
      addExam({
        newTitle: this.newTitle,
        newTip: this.newTip,
        newArea: this.newArea,
        newTime: this.newTime,
        newTeacher: this.newTeacher,
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
      this.clear();
    },

    clear() {
      this.newTitle = "";
      this.newTip = "";
      this.newArea = "";
      this.newTime = "";
      this.newTeacher = "";
    },

    updateData2() {
      this.loading2 = true;
      getScore()
        .then((res) => {
          this.data_score = res.data;
          this.loading2 = false;
        })
        .catch((err) => {
          console.log(err);
          this.$message.error("网络连接异常");
        });
    },

    addData2() {
      const hide = this.$message.loading("正在添加...", 0);
      addScore({
        name: this.name2,
        type: this.type2,
        Sclass: this.Sclass2,
        idNo: this.idNo2,
        exam: this.exam2,
        score: this.score2,
        time: this.time2,
      })
        .then((res) => {
          if (res.data.success != false) {
            setTimeout(hide, 0);
            this.$message.success("添加成功");
            this.updateData2();
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
      this.visible2 = false;
      this.clear2();
    },
    clear2() {
      this.name2 = "";
      this.type2 = "";
      this.Sclass2 = "";
      this.idNo2 = "";
      this.exam2 = "";
      this.score2 = "";
      this.time2 = "";
    },

    del2(text) {
      let self = this;
      this.$confirm({
        title: "确定要删除这个学生吗？",
        content: "该操作将不可恢复，请谨慎操作",
        onOk() {
          const hide = self.$message.loading("正在删除...", 0);
          delScore({ id: text._id })
            .then((res) => {
              setTimeout(hide, 0);
              if (res.data.deleted == 1) {
                self.$message.success("删除成功");
              } else {
                self.$message.error("删除失败");
              }
              self.updateData2();
            })
            .catch((err) => {
              setTimeout(hide, 0);
              self.$message.error(err);
              self.$message.error("连接异常");
              self.updateData2();
            });
        },
        onCancel() {},
      });
    },

    updateData3() {
      this.loading3 = true;
      getpaScore()
        .then((res) => {
          this.data_score2 = res.data;
          this.loading3 = false;
        })
        .catch((err) => {
          console.log(err);
          this.$message.error("网络连接异常");
        });
    },
    addData3() {
      const hide = this.$message.loading("正在添加...", 0);
      addpaScore({
        name: this.name2,
        type: this.type2,
        Sclass: this.Sclass2,
        idNo: this.idNo2,
        exam: this.exam2,
        score: this.score2,
        time: this.time2,
      })
        .then((res) => {
          if (res.data.success != false) {
            setTimeout(hide, 0);
            this.$message.success("添加成功");
            this.updateData3();
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
      this.visible3 = false;
      this.clear2();
    },
    del3(text) {
      let self = this;
      this.$confirm({
        title: "确定要删除这个学生吗？",
        content: "该操作将不可恢复，请谨慎操作",
        onOk() {
          const hide = self.$message.loading("正在删除...", 0);
          delpaScore({ id: text._id })
            .then((res) => {
              setTimeout(hide, 0);
              if (res.data.deleted == 1) {
                self.$message.success("删除成功");
              } else {
                self.$message.error("删除失败");
              }
              self.updateData3();
            })
            .catch((err) => {
              setTimeout(hide, 0);
              self.$message.error(err);
              self.$message.error("连接异常");
              self.updateData3();
            });
        },
        onCancel() {},
      });
    },
  },
};
</script>

<style>
.exam_outer {
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

.items_list {
  padding-left: 1rem;
  /* padding-right: 5%; */

  width: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
  flex-wrap: wrap;

  align-content: flex-start;
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
.add_button {
  display: inline-block;
  margin-right: 5%;
}
.exam_tab {
  width: 90%;
  text-align: left;
}
.exam_table_out2 td {
  background-color: white;
}
.table1 .ant-table-tbody > tr > td {
  padding-top: 0px;
  padding-bottom: 0px;
}
.do_p {
  margin-top: 7px;
  margin-bottom: 7px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.user_drawer {
  text-align: center;
}
</style>