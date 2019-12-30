<template>
  <div id="addSlideComponent">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="银行名称" prop="name">
        <el-input v-model="ruleForm.name" size="small" placeholder="请输入银行名称"></el-input>
      </el-form-item>
      <el-form-item label="银行代号" prop="name">
        <el-input v-model="ruleForm.name" size="small" placeholder="请输入银行代号"></el-input>
      </el-form-item>
      <el-form-item label="银行LOGO">
        <el-upload
          class="upload-demo"
          :action="actionUrl"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
          :show-file-list="false">
          <el-button size="mini" type="primary">点击上传</el-button>
          <div slot="tip" style="display:inline;margin-left:10px;" class="el-upload__tip">(只能上传jpg/png/bmp文件，且不超过10kb)</div>
        </el-upload>
        <div v-if="ruleForm.img != ''" class="unpoad_imgview"><img style="height:100px" :src="ruleForm.img"></div>
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
import {baseUrl} from '../../api/env.js'

export default {
  data() {
    return {
      ruleForm: {
        name: '',  //
        url: '',  //	
        remark: '',  //		
        img: '',    //图片
      },
      rules: {     //表单验证规则
        name: [{ validator: formRules.validateAssetType, trigger: "blur" }]
      },
      actionUrl: baseUrl + '/common/upload',		//图片上传地址
    };
  },
  props:[
    'detail',
    'type'        //edit
  ],
  mounted:function(){
    this.editSet();
  },
  watch:{
    detail:function(){
      this.editSet();
    }
  },
  methods: {
    submitForm: function (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if(this.ruleForm.img ==''){    //图片必须上传
            this.$message.error('图片必须上传');
            return false;
          }else{
            if(this.type=="edit"){
              Bus.$emit('editSubmit', this.ruleForm);
            }else{
              Bus.$emit('addSubmit', this.ruleForm);
            }
          }
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    cancelForm: function (formName) {
      if(this.type=="edit"){
        Bus.$emit('editCancel', '');
      }else{
        Bus.$emit('addCancel', '');
      }
    },
    clearForm: function () {     //清空表单
      this.ruleForm = {
        name: '',  //
        url: '',  //	
        remark: '',  //	
        img: '',    //图片
        status:'top',    //发布状态
      }
    },
    // 图片上传
    handleAvatarSuccess(res, file) {
      console.log(file);
      this.ruleForm.img = file.response.result["0"].domain + file.response.result["0"].path;
    },
    beforeAvatarUpload(file) {
      let picTypeYes = false;
      const isLimit = file.size / 1024 /1024 < 2;
      if(file.type === 'image/bmp' || file.type === 'image/png' || file.type === 'image/jpeg'){
        picTypeYes = true;
      }

      if (!picTypeYes) {
        this.$message.error('上传图片只能是 JPG/PNG/BMP 格式!');
      }
      if (!isLimit) {
        this.$message.error('上传图片大小不能超过 2M!');
      }
      return picTypeYes && isLimit;
    },
    editSet:function(){     //编辑时，自动填入数据
      // console.log(this.type);
      if(this.type=='edit'){
        this.ruleForm = {
          name: this.detail.data1,  //
          url: this.detail.data1,  //	
          remark: this.detail.data1,  //		
          img: this.detail.data1,    //图片
          status:this.detail.data1,    //发布状态
          terminal:this.detail.data1,     //PC("pc端"),APP("移动端");
        }
        // console.log(this.ruleForm);
      }
    },



  }
}
</script>

