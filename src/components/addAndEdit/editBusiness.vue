<template>
  <div class="add_edit">
    <el-form :model="fromData" ref="ruleForm" :rules="rules" label-width="120px" class="demo-ruleForm">
				<!-- 新增企业账号 -->
				<!--企业信息-->
				<section>
					<!-- <h4>基本信息</h4> -->
					<div class="con">
						<el-row :gutter="10">
							<el-col :span="8">
								<el-form-item label="企业名称" prop="input1">
										<el-input v-model="fromData.input1" size="small" placeholder="请输入企业名称"></el-input>
								</el-form-item>
							</el-col>
							<el-col :span="8">
								<el-form-item label="统一信用代码" prop="input1">
										<el-input v-model="fromData.input2" size="small" placeholder="请输入统一信用代码"></el-input>
								</el-form-item>
							</el-col>
							<el-col :span="8">
								<el-form-item label="店铺名称" prop="input1">
										<el-input v-model="fromData.input3" size="small" placeholder="请输入店铺名称"></el-input>
								</el-form-item>
							</el-col>
						</el-row>
						<el-row :gutter="10">
							<el-col :span="8">
								<el-form-item label="法人姓名" prop="input1">
										<el-input v-model="fromData.input4" size="small" placeholder="请输入企业名称"></el-input>
								</el-form-item>
							</el-col>
							<el-col :span="8">
								<el-form-item label="法人身份证号" prop="input1">
										<el-input v-model="fromData.input5" size="small" placeholder="请输入统一信用代码"></el-input>
								</el-form-item>
							</el-col>
							<el-col :span="8">
								<el-form-item label="联系人" prop="input1">
										<el-input v-model="fromData.input6" size="small" placeholder="请输入店铺名称"></el-input>
								</el-form-item>
							</el-col>
						</el-row>
						<el-row :gutter="10">
							<el-col :span="8">
								<el-form-item label="联系方式" prop="input1">
									<el-input v-model="fromData.input7" size="small" placeholder="请输入企业规模"></el-input>
								</el-form-item>
							</el-col>
						</el-row>
						<el-row :gutter="10">
              <el-col :span="24">
                <el-form-item label="备注" prop="input1">
                  <el-input
                    style="width:100%;"
                    type="textarea"
                    :autosize="{ minRows: 3, maxRows: 6}"
                    placeholder="请输入备注内容"
                    :clearable = 'true'
                    v-model="fromData.input8">
                  </el-input>
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

<script>
import formRules from "../../assets/utils/formRules";
import Bus from "../../assets/utils/eventBus";
export default {
  data() {
    return {
      fromData: {
        input1: "",
        input2: "",
        input3: "",
        input4: "",
        input5: "",
        input6: "",
        input7: "",
        input8: ""
      },
      rules: {
        //输入规则
        input1: [{ validator: formRules.validateAssetType, trigger: "blur" }]
      }
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
          input3: this.oldInfo.data1,
          input4: this.oldInfo.data1,
          input5: this.oldInfo.data1,
          input6: this.oldInfo.data1,
          input7: this.oldInfo.data1,
          input8: this.oldInfo.data1
        };
      }
    }
  }
};
</script>



