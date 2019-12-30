<template>
  <div class="add_edit">
    <el-form :model="fromData" ref="ruleForm" :rules="rules" label-width="120px" class="demo-ruleForm">
				<!-- 新增类目 -->
				<section>
					<div class="con">
						<el-row :gutter="10">
							<el-col :span="8">
								<el-form-item label="类目名称" prop="input1">
                  <el-input v-model="fromData.input1" size="small" placeholder="请输入类目名称"></el-input>
								</el-form-item>
							</el-col>
						</el-row>
						<el-row :gutter="10">
							<el-col :span="8">
								<el-form-item label="类目排序" prop="input2">
									<el-input-number v-model="fromData.input2" :min="1" label="排序" size="small"></el-input-number>
								</el-form-item>
							</el-col>
						</el-row>
            <el-row :gutter="10">
							<el-col :span="12">
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
                  <div v-if="fromData.img != ''" class="unpoad_imgview"><img :src="fromData.img"></div>
                </el-form-item>
							</el-col>
						</el-row>

            
					</div>
				</section>

        <el-form-item class="btn_box">
						<el-button type="default" style="margin-right:20px;" @click="cancel()">取消</el-button>
						<el-button type="primary" @click="submitForm()">确定</el-button>
				</el-form-item>
      </el-form>
  </div>
</template>
<style lang="less">
  .unpoad_imgview{
    img{height:100px;width:auto;}
  }
</style>

<script>
import formRules from "../../assets/utils/formRules";
import Bus from "../../assets/utils/eventBus";
import {baseUrl} from '../../api/env.js'
export default {
  data() {
    return {
      fromData: {
        input1: "",
        input2: "",
        img:'',
      },
      rules: {
        //输入规则
        input1: [{ validator: formRules.validateAssetType, trigger: "blur" }]
      },
      actionUrl: baseUrl + '/common/upload',		//图片上传地址
    };
  },
  props: [
    "type", //edit 编辑
    "oldInfo"
  ],
  mounted: function() {
    this.setOldData();
  },
  watch: {
    oldInfo: function() {
      this.setOldData();
    }
  },
  methods: {
    submitForm: function() {
      this.$refs["ruleForm"].validate(valid => {
        if (valid) {
          if (this.type == "edit") {
            Bus.$emit("editSubmit", this.fromData);
          } else {
            Bus.$emit("addSubmit", this.fromData);
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    cancel: function() {
      if (this.type == "edit") {
        Bus.$emit("editCancel", this.fromData);
      } else {
        Bus.$emit("addCancel", "");
      }
    },
    // 填入旧数据
    setOldData: function() {
      if (this.type == "edit" && this.oldInfo) {
        this.fromData = {
          input1: this.oldInfo.data1,
          input2: this.oldInfo.data1,
        };
      }
    },


    // 图片上传
    handleAvatarSuccess(res, file) {
      console.log(file);
      this.fromData.img = file.response.result["0"].domain + file.response.result["0"].path;
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
  }
};
</script>



