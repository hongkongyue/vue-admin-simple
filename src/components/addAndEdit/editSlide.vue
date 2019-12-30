<template>
  <div id="addSlideComponent">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="轮播图名称" prop="name">
        <el-input v-model="ruleForm.name" size="small" placeholder="请输入轮播图名称"></el-input>
      </el-form-item>
      <el-form-item label="图片上传">
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
      <el-form-item label="图片链接" prop="url">
        <el-input v-model="ruleForm.url" placeholder="请输入图片链接" size="small" type="textarea" :autosize="{ minRows: 2, maxRows: 4}"></el-input>
      </el-form-item>
      <el-form-item label="轮播备注" prop="remark">
        <el-input v-model="ruleForm.remark" placeholder="请输入备注" size="small" type="textarea" :autosize="{ minRows: 2, maxRows: 4}"></el-input>
      </el-form-item>
      <el-form-item label="发布状态">
        <el-radio v-model="ruleForm.status" label="top">上架</el-radio>
        <el-radio v-model="ruleForm.status" label="down">下架</el-radio>
      </el-form-item>
      <el-form-item  label="位置">
        <el-radio :disabled="type == 'edit'" v-model="ruleForm.terminal" label="APP">移动端</el-radio>
        <el-radio :disabled="type == 'edit'"  v-model="ruleForm.terminal" label="PC">PC端</el-radio>
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
        status:'top',    //发布状态
        terminal:'APP',        //PC("pc端"),APP("移动端");
      },
      rules: {     //表单验证规则
        name: [{ validator: formRules.validateAssetType, trigger: "blur" }]
      },
      actionUrl: baseUrl + '/common/upload',		//图片上传地址
    };
  },
  props:[
    'slideInfo',
    'type'        //edit
  ],
  mounted:function(){
    this.editSet();
  },
  watch:{
    slideInfo:function(){
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
          name: this.slideInfo.data1,  //
          url: this.slideInfo.data1,  //	
          remark: this.slideInfo.data1,  //		
          img: this.slideInfo.data1,    //图片
          status:this.slideInfo.data1,    //发布状态
          terminal:this.slideInfo.data1,     //PC("pc端"),APP("移动端");
        }
        // console.log(this.ruleForm);
      }
    },



  }
}
</script>

