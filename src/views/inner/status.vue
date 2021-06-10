<template>
  <div class="status_container">
    <div class="title_user">
      <h1 style="display: inline">奖惩和缺勤情况</h1>
      <div class="status_button_out">
        <a-button type="primary" @click="exportExcel" class="add_button"
          >导出</a-button
        >
        <a-button
          type="primary"
          class="add_button"
          v-print="'#status_table1'"
          v-show="showPrint1"
          >打印</a-button
        >
        <a-button
          type="primary"
          class="add_button"
          v-print="'#status_table2'"
          v-show="showPrint2"
          >打印</a-button
        >
        <a-button
          v-if="search_show"
          type="primary"
          @click="showDrawerF"
          class="add_button"
        >
          <a-icon type="search" />
        </a-button>
        <a-button type="primary" @click="showDrawer" class="add_button">
          <a-icon type="plus" /> New Record
        </a-button>
      </div>
    </div>
    <!-- Tab1的记录 -->
    <a-drawer
      title="添加新记录"
      :width="360"
      :visible="visible"
      :body-style="{ paddingBottom: '80px' }"
      @close="onClose"
      class="user_drawer"
    >
      <a-input
        v-model="newName"
        placeholder="学生姓名"
        style="margin-bottom: 1rem"
      >
      </a-input>
      <a-input v-model="newType" placeholder="专业" style="margin-bottom: 1rem">
      </a-input>
      <a-input
        v-model="newClass"
        placeholder="班级"
        style="margin-bottom: 1rem"
      >
      </a-input>
      <a-input
        v-model="newPType"
        placeholder="奖惩类型"
        style="margin-bottom: 1rem"
      >
      </a-input>
      <a-input
        v-model="newProject"
        placeholder="项目"
        style="margin-bottom: 1rem"
      >
      </a-input>
      <a-input
        v-model="newTime"
        placeholder="记录时间"
        style="margin-bottom: 1rem"
      >
      </a-input>
      <a-button type="primary" @click="addData">添加</a-button>
    </a-drawer>

    <a-drawer
      title="编辑记录"
      :width="360"
      :visible="visibleE"
      :body-style="{ paddingBottom: '80px' }"
      @close="onCloseE"
      class="user_drawer"
    >
      <a-input
        v-model="eName"
        placeholder="学生姓名"
        style="margin-bottom: 1rem"
      >
      </a-input>
      <a-input v-model="eType" placeholder="专业" style="margin-bottom: 1rem">
      </a-input>
      <a-input v-model="eClass" placeholder="班级" style="margin-bottom: 1rem">
      </a-input>
      <a-input
        v-model="ePType"
        placeholder="奖惩类型"
        style="margin-bottom: 1rem"
      >
      </a-input>
      <a-input
        v-model="eProject"
        placeholder="项目"
        style="margin-bottom: 1rem"
      >
      </a-input>
      <a-input
        v-model="eTime"
        placeholder="记录时间"
        style="margin-bottom: 1rem"
      >
      </a-input>
      <a-button type="primary" @click="editData">提交</a-button>
    </a-drawer>

    <a-drawer
      title="筛选记录"
      :width="360"
      :visible="visibleF"
      :body-style="{ paddingBottom: '80px' }"
      @close="onCloseF"
      class="user_drawer"
    >
      <a-input
        v-model="fName"
        placeholder="学生姓名"
        style="margin-bottom: 1rem"
      >
      </a-input>
      <a-input v-model="fType" placeholder="专业" style="margin-bottom: 1rem">
      </a-input>
      <a-input v-model="fClass" placeholder="班级" style="margin-bottom: 1rem">
      </a-input>
      <a-input
        v-model="fPType"
        placeholder="奖惩类型"
        style="margin-bottom: 1rem"
      >
      </a-input>
      <a-input
        v-model="fProject"
        placeholder="项目"
        style="margin-bottom: 1rem"
      >
      </a-input>
      <a-input
        v-model="fTime"
        placeholder="记录时间"
        style="margin-bottom: 1rem"
      >
      </a-input>
      <a-button type="primary" @click="filterData">筛选</a-button>
    </a-drawer>
    <!-- Tab1的记录 -->

    <!-- Tab2的记录 -->
    <a-drawer
      title="添加新缺勤记录"
      :width="360"
      :visible="visible2"
      :body-style="{ paddingBottom: '80px' }"
      @close="onClose"
      class="user_drawer"
    >
      <a-input
        v-model="newName2"
        placeholder="学生姓名"
        style="margin-bottom: 1rem"
      >
      </a-input>
      <a-input
        v-model="newType2"
        placeholder="专业"
        style="margin-bottom: 1rem"
      >
      </a-input>
      <a-input
        v-model="newSclass2"
        placeholder="班级"
        style="margin-bottom: 1rem"
      >
      </a-input>
      <a-input
        v-model="newidNo2"
        placeholder="身份证号"
        style="margin-bottom: 1rem"
      >
      </a-input>
      <a-input
        v-model="newTime2"
        placeholder="缺勤时间"
        style="margin-bottom: 1rem"
      >
      </a-input>
      <a-button type="primary" @click="addData2">添加</a-button>
    </a-drawer>

    <a-drawer
      title="编辑缺勤记录"
      :width="360"
      :visible="visibleE2"
      :body-style="{ paddingBottom: '80px' }"
      @close="onCloseE2"
      class="user_drawer"
    >
      <a-input
        v-model="eName2"
        placeholder="学生姓名"
        style="margin-bottom: 1rem"
      >
      </a-input>
      <a-input v-model="eType2" placeholder="专业" style="margin-bottom: 1rem">
      </a-input>
      <a-input
        v-model="eSclass2"
        placeholder="班级"
        style="margin-bottom: 1rem"
      >
      </a-input>
      <a-input
        v-model="eidNo2"
        placeholder="身份证号"
        style="margin-bottom: 1rem"
      >
      </a-input>
      <a-input
        v-model="eTime2"
        placeholder="缺勤时间"
        style="margin-bottom: 1rem"
      >
      </a-input>
      <a-button type="primary" @click="editData2">添加</a-button>
    </a-drawer>
    <!-- Tab2的记录 -->

    <a-tabs
      default-active-key="1"
      size="large"
      class="status_tab"
      :active-key="tab_key"
      @change="tabChange"
    >
      <a-tab-pane key="1" tab="奖惩情况"
        ><div class="status_table_out">
          <a-table
            :columns="columns_status"
            :data-source="data"
            :pagination="pagination"
            :loading="loading"
            bordered
            class="table1"
            id="status_table1"
          >
            <p slot="tags" slot-scope="text" class="do_p">
              <a-button @click="edit(text)">编辑</a-button>
              &nbsp;&nbsp;
              <a-button @click="del(text)">删除</a-button>
            </p>
          </a-table>
        </div>
      </a-tab-pane>
      <a-tab-pane key="2" tab="缺勤情况" force-render>
        <div class="status_table_out">
          <a-table
            :columns="columns_status2"
            :data-source="data2"
            :pagination="pagination"
            :loading="loading2"
            bordered
            class="table1"
            id="status_table2"
          >
            <p slot="tags" slot-scope="text" class="do_p">
              <a-button @click="edit2(text)">编辑</a-button>
              &nbsp;&nbsp;
              <a-button @click="del2(text)">删除</a-button>
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
import {
  getStatus,
  addStatus,
  delStatus,
  editStatus,
  fliterStatus,
  getAbsence,
  addAbsence,
  delAbsence,
  editAbsence,
} from "../../network/status";

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
    title: "奖惩类型",
    dataIndex: "Ptype",
    width: 120,
  },
  {
    title: "项目",
    dataIndex: "project",
  },
  {
    title: "记录时间",
    dataIndex: "time",
  },
  {
    title: "操作",
    scopedSlots: { customRender: "tags" },
    width: 180,
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
    title: "缺勤时间",
    dataIndex: "time",
  },
  {
    title: "操作",
    scopedSlots: { customRender: "tags" },
    width: 180,
  },
];
export default {
  data() {
    return {
      tab_key: "1",

      data: [],
      data2: [],
      pagination: {
        pageSize: 10,
      },

      columns_status,
      loading: true,
      visible: false,
      visibleE: false,
      visibleF: false,

      columns_status2,
      loading2: true,
      visible2: false,
      visibleE2: false,

      newName: "",
      newType: "",
      newClass: "",
      newPType: "",
      newProject: "",
      newTime: "",

      eName: "",
      eType: "",
      eClass: "",
      ePType: "",
      eProject: "",
      eTime: "",
      e_id: "",

      fName: "",
      fType: "",
      fClass: "",
      fPType: "",
      fProject: "",
      fTime: "",

      newName2: "",
      newType2: "",
      newSclass2: "",
      newidNo2: "",
      newTime2: "",

      eName2: "",
      eType2: "",
      eSclass2: "",
      eidNo2: "",
      eTime2: "",

      table_name: "#status_table1",
    };
  },
  computed: {
    search_show() {
      if (this.tab_key == "2") {
        return false;
      } else {
        return true;
      }
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
  },
  activated() {
    this.updateData();
    this.updateData2();
  },
  methods: {
    tabChange(key) {
      this.tab_key = key;
      if (key == 1) {
        this.table_name = "#status_table1";
      } else {
        this.table_name = "#status_table2";
      }
    },
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
    updateData() {
      this.loading = true;
      getStatus().then((res) => {
        console.log(res);
        this.data = res.data;
        this.loading = false;
      });
    },
    addData() {
      const hide = this.$message.loading("正在添加...", 0);
      addStatus({
        name: this.newName,
        type: this.newType,
        Sclass: this.newClass,
        pType: this.newPType,
        project: this.newProject,
        time: this.newTime,
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
    editData() {
      const hide = this.$message.loading("正在提交修改...", 0);
      editStatus({
        name: this.eName,
        type: this.eType,
        Sclass: this.eClass,
        pType: this.ePType,
        project: this.eProject,
        time: this.eTime,
        _id: this.e_id,
      })
        .then((res) => {
          console.log(res);
          if (res.data.success != false) {
            setTimeout(hide, 0);
            this.$message.success("修改成功");
            this.updateData();
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
    clear() {
      this.newName = "";
      this.newType = "";
      this.newClass = "";
      this.newPType = "";
      this.newProject = "";
      this.newTime = "";
    },
    del(text) {
      let self = this;
      this.$confirm({
        title: "确定要删除这个学生吗？",
        content: "该操作将不可恢复，请谨慎操作",
        onOk() {
          const hide = self.$message.loading("正在删除...", 0);
          delStatus({ id: text._id })
            .then((res) => {
              setTimeout(hide, 0);
              if (res.data.deleted == 1) {
                self.$message.success("删除成功");
              } else {
                self.$message.error("删除失败");
              }
              self.updateData();
            })
            .catch((err) => {
              setTimeout(hide, 0);
              self.$message.error(err);
              self.$message.error("连接异常");
              self.updateData();
            });
        },
        onCancel() {},
      });
    },

    filterData() {
      this.loading = true;
      fliterStatus({
        name: this.fName,
        type: this.fType,
        Sclass: this.fClass,
        pType: this.fPType,
        project: this.fProject,
        time: this.fTime,
      })
        .then((res) => {
          console.log(res);
          this.data = res.data.data;
          this.loading = false;
        })
        .catch((err) => {
          this.$message.error(err);
          this.$message.error("网络连接异常");
          this.loading = false;
        });
      this.visibleF = false;
    },

    edit(text) {
      this.eName = text.name;
      this.eType = text.type;
      this.eClass = text.Sclass;
      this.ePType = text.Ptype;
      this.eProject = text.project;
      this.eTime = text.time;
      this.e_id = text._id;
      this.showDrawerE();
    },

    showDrawer() {
      if (this.tab_key == 1) {
        this.visible = true;
      } else {
        this.visible2 = true;
      }
    },
    onClose() {
      if (this.tab_key == 1) {
        this.visible = false;
      } else {
        this.visible2 = false;
      }
    },
    showDrawerE() {
      this.visibleE = true;
    },
    onCloseE() {
      this.visibleE = false;
    },
    showDrawerF() {
      this.visibleF = true;
    },
    onCloseF() {
      this.visibleF = false;
    },

    showDrawerE2() {
      this.visibleE2 = true;
    },
    onCloseE2() {
      this.visibleE2 = false;
    },

    updateData2() {
      this.loading2 = true;
      getAbsence()
        .then((res) => {
          this.data2 = res.data;
          this.loading2 = false;
        })
        .catch((err) => {
          this.$message.error(err);
          this.$message.error("网络连接异常");
        });
    },

    addData2() {
      const hide = this.$message.loading("正在添加...", 0);
      addAbsence({
        name: this.newName2,
        type: this.newType2,
        Sclass: this.newSclass2,
        idNo: this.newidNo2,
        time: this.newTime2,
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
      this.newName2 = "";
      this.newType2 = "";
      this.newSclass2 = "";
      this.newidNo2 = "";
      this.newTime2 = "";
    },

    del2(text) {
      let self = this;
      this.$confirm({
        title: "确定要删除这个学生吗？",
        content: "该操作将不可恢复，请谨慎操作",
        onOk() {
          const hide = self.$message.loading("正在删除...", 0);
          delAbsence({ id: text._id })
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

    edit2(text) {
      this.eName2 = text.name;
      this.eType2 = text.type;
      this.eSclass2 = text.Sclass;
      this.eidNo2 = text.idNo;
      this.eTime2 = text.time;
      this.e_id = text._id;
      this.showDrawerE2();
    },

    editData2() {
      const hide = this.$message.loading("正在提交修改...", 0);
      editAbsence({
        name: this.eName2,
        type: this.eType2,
        Sclass: this.eSclass2,
        idNo: this.eidNo2,
        time: this.eTime2,
        _id: this.e_id,
      })
        .then((res) => {
          console.log(res);
          if (res.data.success != false) {
            setTimeout(hide, 0);
            this.$message.success("修改成功");
            this.updateData2();
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
      this.visibleE2 = false;
    },
  },
};
</script>

<style>
.add_button {
  display: inline-block;
  margin-right: 5%;
}

.status_button_out {
  width: 30rem;
  display: flex;
  justify-content: flex-end;
  margin-right: 5%;
}

.title_user {
  text-align: left;
  margin-left: 5%;

  display: flex;
  justify-content: space-between;
}

.status_container {
  padding-top: 1rem;
  text-align: left;

  background-color: rgb(245, 245, 245);

  position: fixed;
  left: 13rem;
  right: 0;
  top: 0;
  bottom: 0;
}
.status_tab {
  margin-left: 5%;
  width: 90%;
}
.status_tab td {
  background-color: white;
}

.do_p {
  margin-top: 7px;
  margin-bottom: 7px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.table1 .ant-table-tbody > tr > td {
  padding-top: 0px;
  padding-bottom: 0px;
}

.user_drawer {
  text-align: center;
}
</style>