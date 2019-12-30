<template>
  <div id="" class="search">
    <!-- 查询结算订单 -->
    <el-row :gutter="20">
      <el-col :span="4">
        <el-input placeholder="商品名称" v-model="formData.input1" type="text" size="small" clearable></el-input>
      </el-col>
      <el-col :span="4">
        <el-input placeholder="商家名称" v-model="formData.input2" type="text" size="small" clearable></el-input>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12">
        <el-radio-group v-model="state" size="small">
          <el-radio-button label="1">出售中</el-radio-button>
          <el-radio-button label="0">仓库中</el-radio-button>
        </el-radio-group>
      </el-col>
      <el-col :span="12" class="btn_box">
        <el-button type="primary" size="small" @click="search()">查询</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Bus from "../../assets/utils/eventBus";
export default {
  data() {
    return {
      formData: {
        input1: "",
        input2: "",
      },
      state:'1',       //结算状态
    };
  },
  watch:{
    state:function(val){
      Bus.$emit("stateChange", val);
    }
  },
  mounted: function() {
  },
  methods: {
    search: function() {
      Bus.$emit("search", this.formData);
    }
  }
};
</script>

