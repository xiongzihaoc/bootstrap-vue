<template>
  <div class="contain">
    <Nologin></Nologin>
    <div class="saveInfoBox">
      <h3 style="margin-bottom:20px;">基本信息</h3>
      <el-form
        ref="loginFormRef"
        :model="loginForm"
        :rules="Addrules"
        class="login-form"
        label-width="80px"
        label-position="left"
      >
        <el-form-item label="姓名" prop="name">
          <el-input ref="name" v-model="loginForm.name" placeholder="请输入姓名" type="text" />
        </el-form-item>
        <el-form-item label="电话" prop="phone">
          <el-input
            ref="phone"
            :disabled="true"
            v-model="loginForm.phone"
            placeholder="请输入电话"
            type="text"
          />
        </el-form-item>
        <el-form-item label="出生年月" prop="birth" style="wdith:100%">
          <el-date-picker
            v-model="loginForm.birth"
            type="date"
            placeholder="选择日期"
            style="width:100%"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-select v-model="loginForm.sex" placeholder="请选择性别" style="width:100%">
            <el-option label="男" value="男"></el-option>
            <el-option label="女" value="女"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="婚姻状况" prop="marriage">
          <el-select v-model="loginForm.marriage" placeholder="请选择" style="width:100%">
            <el-option label="未婚" value="未婚"></el-option>
            <el-option label="已婚" value="已婚"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="职业" prop="job">
          <el-select v-model="loginForm.job" placeholder="请选择职业" style="width:100%">
            <el-option v-for="item in jobList" :key="item.id" :label="item.name" :value="item.name"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="文化程度" prop="edu">
          <el-select v-model="loginForm.edu" placeholder="请选择职业" style="width:100%">
            <el-option v-for="item in eduList" :key="item.id" :label="item.name" :value="item.name"></el-option>
          </el-select>
        </el-form-item>
        <el-button
          class="loginBtn"
          type="danger"
          @click.native.prevent="handleLogin"
          @confirm="saveEnter"
        >保 存</el-button>
      </el-form>
    </div>
  </div>
</template>
<script>
import Nologin from "../commonmodule/nologin";
export default {
  components: { Nologin },
  data() {
    return {
      Addrules: {
        name: [{ required: true, message: "请输入姓名", trigger: "blur" }],
        docName: [
          { required: true, message: "请输入医生姓名", trigger: "blur" }
        ],
        phone: [{ required: true, message: "请输入手机号码", trigger: "blur" }],
        sex: [{ required: true, message: "请选择性别", trigger: "blur" }],
        birth: [{ required: true, message: "请选择出生日期", trigger: "blur" }],
        job: [{ required: true, message: "请选择职业", trigger: "blur" }],
        marriage: [
          { required: true, message: "请选择婚姻状况", trigger: "blur" }
        ],
        edu: [{ required: true, message: "请选择教育程度", trigger: "blur" }]
      },
      jobList: [
        { id: 1, name: "职员" },
        { id: 2, name: "企业职员" },
        { id: 3, name: "国家公职人员" },
        { id: 4, name: "务农" },
        { id: 5, name: "务工" },
        { id: 6, name: "科技技术员" },
        { id: 7, name: "教师" },
        { id: 8, name: "学生" },
        { id: 9, name: "无业" },
        { id: 10, name: "其他" }
      ],
      eduList: [
        { id: 1, name: "本科" },
        { id: 2, name: "大专" },
        { id: 3, name: "高中" },
        { id: 4, name: "初中" },
        { id: 5, name: "其他" }
      ],
      loginForm: {
        name: "",
        sex: "",
        phone: "",
        job: "",
        marriage: "",
        edu: "",
        birth: "",
        hasConfirm: ""
      },
      show: false
    };
  },
  methods: {
    saveEnter() {}
  }
};
</script>
<style scoped>
.contain {
  overflow: auto;
  height: 100%;
  background: #0088b3 url("../../assets/images/nbg.png") no-repeat bottom center;
  background-size: contain;
  padding-bottom: 20px;
}
.saveInfoBox {
  width: 90%;
  max-width: 800px;
  padding: 5%;
  background: rgba(255, 255, 255, 0.5);
  color: #000;
  border-radius: 8px;
  margin: 0 auto;
  margin-top: 3%;
}
h3 {
  font-size: 20px;
}
</style>