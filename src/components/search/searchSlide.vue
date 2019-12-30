<template>
  <div class="search">
    <el-row :gutter="20">
      <el-col :span="4">
        <el-input placeholder="轮播图名称" v-model="formData.name" size="small" clearable></el-input>
      </el-col>
      <el-col :span="4">
        <el-select v-model="formData.status" placeholder="状态-请选择" clearable size="small">
          <el-option value="top" label="上架中"></el-option>
          <el-option value="down" label="下架中"></el-option>
        </el-select>
      </el-col>
      <el-col :span="4">
        <el-select v-model="formData.status" placeholder="位置-请选择" clearable size="small">
          <el-option value="top" label="app"></el-option>
          <el-option value="down" label="PC"></el-option>
        </el-select>
      </el-col>
      <el-col :span="12">
        <div class="block">
          <span class="demonstration">操作时间:</span>
          <el-date-picker v-model="formData.date" type="daterange" :clearable="false" size="small" value-format="yyyy-MM-dd" range-separator="至" :picker-options="pickerOptions1" start-placeholder="开始日期" end-placeholder="结束日期">
          </el-date-picker>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="24" class="btn_box">
        <el-button type="primary" size="medium" @click="addOperate()">新增</el-button>
        <el-button type="primary" size="medium" @click="searchData()">查询</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Bus from "../../assets/utils/eventBus";
import { datePickLimit, dateDefault } from "../../assets/utils/dateOptions";

export default {
  data: function() {
    return {
      formData: {
        name: "",
        status: "",
        date: dateDefault //操作时间
      },
      //时间选择器配置项
      pickerOptions1: datePickLimit
    };
  },
  props: [
    //接收数据
    "urlParams" //权限控制
  ],
  methods: {
    addOperate: function() {
      //新增按钮
      Bus.$emit("add", this.formData);
    },
    searchData: function() {
      //查询按钮
      Bus.$emit("search", this.formData);
    }
  }
};
</script>

