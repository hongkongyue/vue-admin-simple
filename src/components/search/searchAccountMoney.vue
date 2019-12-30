<template>
  <div id="" class="search">
    <!-- 搜索账户资金 -->
    <el-row :gutter="20">
      <el-col :span="4">
        <el-input placeholder="用户名" v-model="formData.input1" type="text" size="small" clearable></el-input>
      </el-col>
      <el-col :span="4">
        <el-select v-model="formData.input2" size="small" placeholder="用户类型-请选择">
          <el-option label="个人" value="1"></el-option>
          <el-option label="商家" value="2"></el-option>
        </el-select>
      </el-col>
      <el-col :span="16" class="btn_box">
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
    };
  },
  mounted: function() {
  },
  methods: {
    search: function() {
      Bus.$emit("search", this.formData);
    },
  }
};
</script>

