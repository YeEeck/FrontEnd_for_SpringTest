<template>
  <div class="user_out">
    <a-drawer
      title="添加新学生"
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
      <a-input v-model="newAge" placeholder="年龄" style="margin-bottom: 1rem">
      </a-input>
      <a-input v-model="newSex" placeholder="性别" style="margin-bottom: 1rem">
      </a-input>
      <a-input
        v-model="newId"
        placeholder="身份证号"
        style="margin-bottom: 1rem"
      >
      </a-input>
      <a-button type="primary" @click="addStudentNew">添加</a-button>
    </a-drawer>

    <a-drawer
      title="筛选"
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
      <a-input v-model="fAge" placeholder="年龄" style="margin-bottom: 1rem">
      </a-input>
      <a-input v-model="fSex" placeholder="性别" style="margin-bottom: 1rem">
      </a-input>
      <a-input v-model="fId" placeholder="身份证号" style="margin-bottom: 1rem">
      </a-input>
      <a-button type="primary" @click="fliterStudent">筛选</a-button>
    </a-drawer>

    <a-drawer
      title="编辑"
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
      <a-input v-model="eAge" placeholder="年龄" style="margin-bottom: 1rem">
      </a-input>
      <a-input v-model="eSex" placeholder="性别" style="margin-bottom: 1rem">
      </a-input>
      <a-input v-model="eId" placeholder="身份证号" style="margin-bottom: 1rem">
      </a-input>
      <a-button type="primary" @click="editStudent">修改</a-button>
    </a-drawer>

    <div class="title_user">
      <h1 style="display: inline">学生信息</h1>
      <div class="inner_button_out">
        <a-button type="primary" @click="exportExcel" class="add_button"
          >导出</a-button
        >
        <a-button type="primary" class="add_button" v-print="printConfig"
          >打印</a-button
        >
        <a-button type="primary" @click="showDrawerF" class="add_button">
          <a-icon type="search" />
        </a-button>
        <a-button type="primary" @click="showDrawer" class="add_button">
          <a-icon type="plus" /> New Student
        </a-button>
      </div>
    </div>

    <div class="table_out">
      <a-table
        :columns="columns"
        :data-source="data"
        :pagination="pagination"
        :loading="loading"
        bordered
        class="table1"
        id="table_user"
      >
        <p slot="tags" slot-scope="text" class="do_p">
          <a-button @click="edit(text)">编辑</a-button>
          &nbsp;&nbsp;
          <a-button @click="del(text)">删除</a-button>
        </p>
      </a-table>
    </div>
  </div>
</template>

<script>
import FileSaver from "file-saver";
import XLSX from "xlsx";

import {
  getStudents,
  addStudent,
  delStudent,
  editStudent,
  fliterStudent,
} from "../../network/user";

const columns = [
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
    title: "年龄",
    dataIndex: "age",
  },
  {
    title: "性别",
    dataIndex: "sex",
  },
  {
    title: "身份证号",
    dataIndex: "idNo",
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
      data: [],
      pagination: {
        pageSize: 10,
      },
      columns,
      loading: true,
      visible: false,
      visibleS: false,
      visibleE: false,
      visibleF: false,
      newName: "",
      newType: "",
      newClass: "",
      newAge: "",
      newSex: "",
      newId: "",
      eName: "",
      eType: "",
      eClass: "",
      eAge: "",
      eSex: "",
      eId: "",
      e_id: "",
      fName: "",
      fType: "",
      fClass: "",
      fAge: "",
      fSex: "",
      fId: "",

      printConfig:{
        id:"#table_user",
        popTitle: "学生信息"
      }
    };
  },
  activated() {
    this.loading = true;
    getStudents().then((res) => {
      console.log(res.data);
      this.data = res.data;
      this.loading = false;
    });
  },
  methods: {
    exportExcel() {
      var wb = XLSX.utils.table_to_book(document.querySelector("#table_user")); // 这个id是表格的id
      var wbout = XLSX.write(wb, {
        bookType: "xlsx",
        bookSST: true,
        type: "array",
      });
      try {
        FileSaver.saveAs(
          new Blob([wbout], { type: "application/octet-stream" }),
          "学生信息.xlsx"
        );
      } catch (e) {
        if (typeof console !== "undefined") console.log(e, wbout);
      }
      return wbout;
    },
    updateStudents() {
      this.loading = true;
      getStudents().then((res) => {
        this.data = res.data;
        this.loading = false;
      });
    },
    showDrawer() {
      this.visible = true;
    },
    onClose() {
      this.visible = false;
    },
    showDrawerS() {
      this.visibleS = true;
    },
    onCloseS() {
      this.visibleS = false;
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
    addStudentNew() {
      const hide = this.$message.loading("正在添加...", 0);
      addStudent({
        name: this.newName,
        type: this.newType,
        Sclass: this.newClass,
        age: this.newAge,
        sex: this.newSex,
        idNo: this.newId,
      })
        .then((res) => {
          console.log(res);
          if (res.data.success != false) {
            setTimeout(hide, 0);
            this.$message.success("添加成功");
            this.updateStudents();
          } else {
            setTimeout(hide, 0);
            this.$message.error("添加失败，学生已存在");
          }
        })
        .catch((err) => {
          setTimeout(hide, 0);
          this.$message.error(err);
          this.$message.error("添加失败，网络连接异常");
        });
      this.visible = false;
      this.clear();
    },

    clear() {
      this.newName = "";
      this.newType = "";
      this.newClass = "";
      this.newAge = "";
      this.newSex = "";
      this.newId = "";
    },

    edit(a) {
      this.eName = a.name;
      this.eType = a.type;
      this.eClass = a.Sclass;
      this.eAge = a.age;
      this.eSex = a.sex;
      this.eId = a.idNo;
      this.e_id = a._id;
      this.showDrawerE();
    },

    del(text) {
      let self = this;
      this.$confirm({
        title: "确定要删除这个学生吗？",
        content: "该操作将不可恢复，请谨慎操作",
        onOk() {
          const hide = self.$message.loading("正在删除...", 0);
          delStudent({ id: text._id })
            .then((res) => {
              setTimeout(hide, 0);
              if (res.data.success != false) {
                self.$message.success("删除成功");
              } else {
                self.$message.error("删除失败");
              }
              self.updateStudents();
            })
            .catch((err) => {
              setTimeout(hide, 0);
              self.$message.error(err);
              self.$message.error("连接异常");
              self.updateStudents();
            });
        },
        onCancel() {},
      });
    },

    editStudent() {
      const hide = this.$message.loading("正在提交修改...", 0);
      editStudent({
        name: this.eName,
        type: this.eType,
        Sclass: this.eClass,
        age: this.eAge,
        sex: this.eSex,
        idNo: this.eId,
        _id: this.e_id,
      })
        .then((res) => {
          console.log(res);
          if (res.data.success != false) {
            setTimeout(hide, 0);
            this.$message.success("修改成功");
            this.updateStudents();
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
    fliterStudent() {
      this.loading = true;
      fliterStudent({
        name: this.fName,
        type: this.fType,
        Sclass: this.fClass,
        age: this.fAge,
        sex: this.fSex,
        idNo: this.fId,
      })
        .then((res) => {
          console.log(res);
          this.data = res.data;
          this.loading = false;
        })
        .catch((err) => {
          this.$message.error(err);
          this.$message.error("网络连接异常");
          this.loading = false;
        });
      this.visibleF = false;
    },
  },
};
</script>

<style>
.user_out {
  padding-top: 1rem;

  background-color: rgb(245, 245, 245);

  position: fixed;
  left: 13rem;
  right: 0;
  top: 0;
  bottom: 0;
}

.table_out {
  width: 90%;
  margin-left: 5%;
  height: 90%;
}

.table_out td {
  background-color: white;
}
.title_user {
  text-align: left;
  margin-left: 5%;

  display: flex;
  justify-content: space-between;
}

.add_button {
  display: inline-block;
  margin-right: 5%;
}

.inner_button_out {
  width: 30rem;
  display: flex;
  justify-content: flex-end;
  margin-right: 5%;
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