<template>
  <div id="" class="search">
    <!-- 搜索平台公告 -->
    <el-row :gutter="20">
      <el-col :span="4">
        <el-input placeholder="资讯名称" v-model="formData.input1" type="text" size="small" clearable></el-input>
      </el-col>
      <el-col :span="4">
        <el-select v-model="formData.input3" size="small" placeholder="推荐状态-请选择">
          <el-option label="推荐中" value="1"></el-option>
          <el-option label="未推荐" value="2"></el-option>
        </el-select>
      </el-col>
      <el-col :span="4">
        <el-select v-model="formData.input4" size="small" placeholder="上架状态-请选择">
          <el-option label="上架中" value="1"></el-option>
          <el-option label="已下架" value="2"></el-option>
          <el-option label="定时上架" value="3"></el-option>
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
        <el-button type="primary" size="small" @click="add()">新增</el-button>
        <el-button type="primary" size="small" @click="search()">查询</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { datePickLimit, dateDefault } from "../../assets/utils/dateOptions";
import Bus from "../../assets/utils/eventBus";
export default {
  data() {
    return {
      formData: {
        input1: "",
        input2: "",
        input3: "",
        input4: "",
        date: dateDefault
      },
      //时间选择器配置项
      pickerOptions1: datePickLimit,
    };
  },
  mounted: function() {
  },
  methods: {
    add: function() {
      Bus.$emit("add", '');
    },
    search: function() {
      Bus.$emit("search", this.formData);
    },
  }
};
</script>

