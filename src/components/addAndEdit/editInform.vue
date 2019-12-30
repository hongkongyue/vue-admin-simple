<template>
  <!-- 新增公告 -->
  <div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="公告名称" prop="input1">
        <el-input v-model="ruleForm.input1" placeholder="请输入公告名称" size="small"></el-input>
      </el-form-item>
      <el-form-item label="公告内容">
        <my-editor :contentDefault="contentDefault"></my-editor>
      </el-form-item>
      <el-form-item label="备注" >
        <el-input v-model="ruleForm.input2" placeholder="请输入备注" type="textarea" :autosize="{ minRows: 2, maxRows: 4}"></el-input>
      </el-form-item>
      <el-form-item label="上架状态">
        <el-radio v-model="ruleForm.input3" label="top">上架</el-radio>
        <el-radio v-model="ruleForm.input3" label="down">下架</el-radio>
      </el-form-item>
      <el-form-item  label="上架时间">
        <el-radio  v-model="ruleForm.input4" label="1">立即上架</el-radio>
        <el-radio  v-model="ruleForm.input4" label="2">定时上架</el-radio>
      </el-form-item>
      <el-form-item v-if="ruleForm.input4=='2'" label="设置定时上架">
        <el-date-picker
          v-model="ruleForm.input5"
          type="datetime"
          placeholder="选择日期时间"
          default-time="12:00:00"
          value-format="yyyy-MM-dd HH:mm:ss"
          size="small">
        </el-date-picker>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">确定</el-button>
        <el-button @click="cancelForm('ruleForm')">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>


<script>
import formRules from "../../assets/utils/formRules";
import Bus from "../../assets/utils/eventBus";
import { baseUrl } from "../../api/env.js";

import myEditorComponent from "../others/myEditor.vue";

export default {
  data() {
    return {
      ruleForm: {
        input1: "",
        input2: "",
        input3: "top",
        input4: "2",
        input5: "",
        contentCode: "" //公告内容代码
      },
      rules: {
        //表单验证规则
        input1: [{ validator: formRules.validateAssetType, trigger: "blur" }]
      },
      contentDefault: "编辑器默认内容" //编辑器默认内容
    };
  },
  components: {
    myEditor: myEditorComponent
  },
  props: [
    "detail", //公告信息
    "type" //edit
  ],
  mounted: function() {
    this.setOldData();
    // 获取编辑框代码
    Bus.$on("getEditorCode", contentCode => {
      this.ruleForm.contentCode = contentCode;
    });
  },
  watch: {
    detail:function(){
      this.setOldData();
    }
  },
  methods: {
    submitForm: function(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          if (this.type == "edit") {
            Bus.$emit("editSubmit", this.ruleForm);
          } else {
            Bus.$emit("addSubmit", this.ruleForm);
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    cancelForm: function(formName) {
      if (this.type == "edit") {
        Bus.$emit("editCancel", "");
      } else {
        Bus.$emit("addCancel", "");
      }
    },
    clearForm: function() {
      //清空表单
      this.ruleForm = {};
    },
    setOldData: function() {
      if (this.type == "edit") {
        this.ruleForm = {
          input1: this.detail.data1,
          input2: this.detail.data1,
          input3: this.detail.data1,
          input4: this.detail.data1,
          input5: this.detail.data1,
          contentCode: this.detail.data1
        };
        this.contentDefault = this.detail.data1;
      }
    }
  }
};
</script>

