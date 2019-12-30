<template>
  <div class="add_edit">
    <el-form :model="formData" ref="ruleForm" :rules="rules" label-width="120px" class="demo-ruleForm">
				<!-- 新增门店 -->
				<section>
					<div class="con">
						<el-row :gutter="10">
							<el-col :span="8">
								<el-form-item label="门店名称" prop="input1">
										<el-input v-model="formData.input1" size="small" placeholder="请输入门店名称"></el-input>
								</el-form-item>
							</el-col>
              <el-col :span="8">
								<el-form-item label="所属商家" prop="input1">
									<el-select v-model="formData.input2" size="small" filterable remote :remote-method="remoteMethod" :loading="selectLoading" placeholder="所属商家-请选择">
                    <el-option
                      v-for="(item,index) in businessOptions"
                      :key="item.label"
                      :label="item.label"
                      :value="index">
                    </el-option>
                  </el-select>
								</el-form-item>
							</el-col>
							<el-col :span="8">
								<el-form-item label="门店地址" prop="input1">
										<el-input v-model="formData.input3" size="small" placeholder="请输入门店地址"></el-input>
								</el-form-item>
							</el-col>
						</el-row>
						<el-row :gutter="10">
							<el-col :span="8">
								<el-form-item label="门店联系方式" prop="input1">
										<el-input v-model="formData.input4" size="small" placeholder="请输入门店联系方式"></el-input>
								</el-form-item>
							</el-col>
							<el-col :span="16">
								<el-form-item label="营业时间" style="width:49%;display:inline-block;" prop="input1">
										<el-time-select
                      placeholder="起始时间"
                      v-model="formData.startTime"
                      size="small"
                      style="width:193px;"
                      :picker-options="{
                        start: '00:00',
                        step: '00:15',
                        end: '24:00'
                      }">
                    </el-time-select>
								</el-form-item>
                <el-form-item label="~" style="width:49%;display:inline-block;position:relative;left:-90px;" prop="input1">
                    <el-time-select
                      placeholder="结束时间"
                      v-model="formData.endTime"
                      size="small"
                      style="width:193px;"
                      :picker-options="{
                        start: '00:00',
                        step: '00:15',
                        end: '24:00',
                        minTime: formData.startTime
                      }">
                    </el-time-select>
								</el-form-item>
							</el-col>
						</el-row>
						<el-row :gutter="10">
              <el-col :span="8">
								<el-form-item label="联系人" prop="input1">
									<el-input v-model="formData.input6" size="small" placeholder="请输入联系人"></el-input>
								</el-form-item>
							</el-col>
							<el-col :span="8">
								<el-form-item label="联系方式" prop="input1">
									<el-input v-model="formData.input7" size="small" placeholder="请输入联系方式"></el-input>
								</el-form-item>
							</el-col>
						</el-row>
            <el-row :gutter="10">
              <el-col :span="24">
                <el-form-item label="服务说明" prop="input1">
                  <el-input
                    style="width:100%;"
                    type="textarea"
                    :autosize="{ minRows: 3, maxRows: 6}"
                    placeholder="请输入服务说明"
                    :clearable = 'true'
                    v-model="formData.input8">
                  </el-input>
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
                    v-model="formData.input9">
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
      formData: {
        input1: "",
        input2: "",
        input3: "",
        input4: "",
        input5: "",
        input6: "",
        input7: "",
        input8: "",
        input9: "",

        startTime:'',
        endTime:''
      },
      rules: {
        //输入规则
        input1: [{ validator: formRules.validateAssetType, trigger: "blur" }]
      },
      businessOptions:[{label:'默认选项1'},{label:'默认选项2'}], //搜索框数据
      selectLoading: false
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
    // 搜索商家
    remoteMethod: function(query) {
      if (query !== "") {
        this.selectLoading = true;
        setTimeout(() => {
          this.selectLoading = false;
          this.businessOptions = [{label:'模拟选项1'},{label:'模拟选项2'}]
        }, 200);
      } else {
        this.businessOptions = [];
      }
    },

    submitForm: function() {
      this.$refs["ruleForm"].validate(valid => {
        if (valid) {
          if (this.type == "edit") {
            Bus.$emit("editSubmit", this.formData);
          } else {
            Bus.$emit("addSubmit", this.formData);
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    cancel: function() {
      if (this.type == "edit") {
        Bus.$emit("editCancel", this.formData);
      } else {
        Bus.$emit("addCancel", "");
      }
    },
    // 填入旧数据
    setOldData: function() {
      if (this.type == "edit" && this.oldInfo) {
        this.formData = {
          input1: this.oldInfo.data1,
          input2: this.oldInfo.data1,
          input3: this.oldInfo.data1,
          input4: this.oldInfo.data1,
          input5: this.oldInfo.data1,
          input6: this.oldInfo.data1,
          input7: this.oldInfo.data1,
          input8: this.oldInfo.data1,
          input8: this.oldInfo.data1
        };
      }
    }
  }
};
</script>



