<template>
  <div id="" class="search">
    <!-- 搜索支付订单 -->
    <el-row :gutter="20">
      <el-col :span="4">
        <el-input placeholder="支付编号" v-model="formData.input1" type="text" size="small" clearable></el-input>
      </el-col>
      <el-col :span="4">
        <el-input placeholder="交易流水号" v-model="formData.input2" type="text" size="small" clearable></el-input>
      </el-col>
      <el-col :span="4">
        <el-input placeholder="订单编号" v-model="formData.input3" type="text" size="small" clearable></el-input>
      </el-col>
      <el-col :span="4">
        <el-input placeholder="商家名称" v-model="formData.input4" type="text" size="small" clearable></el-input>
      </el-col>
      <el-col :span="4">
        <el-select v-model="formData.input5" size="small" placeholder="支付渠道-请选择">
          <el-option label="银行卡" value="1"></el-option>
          <el-option label="余额+银行卡" value="2"></el-option>
          <el-option label="余额" value="3"></el-option>
        </el-select>
      </el-col>
      <el-col :span="4">
        <el-select v-model="formData.input6" size="small" placeholder="名目-请选择">
          <el-option label="商品购买" value="1"></el-option>
          <el-option label="买金" value="2"></el-option>
          <el-option label="卖金" value="3"></el-option>
          <el-option label="提金" value="4"></el-option>
        </el-select>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="4">
        <el-select v-model="formData.input7" size="small" placeholder="收支类型-请选择">
          <el-option label="收入" value="1"></el-option>
          <el-option label="支出" value="2"></el-option>
        </el-select>
      </el-col>
      <el-col :span="4">
        <el-select v-model="formData.input8" size="small" placeholder="交易状态-请选择">
          <el-option label="交易成功" value="1"></el-option>
          <el-option label="交易失败" value="2"></el-option>
          <el-option label="取消支付" value="3"></el-option>
        </el-select>
      </el-col>
      <el-col :span="12">
        <div class="block">
          <span class="demonstration">交易时间:</span>
          <el-date-picker v-model="formData.date" type="daterange" :clearable="false" size="small" value-format="yyyy-MM-dd" range-separator="至" :picker-options="pickerOptions1" start-placeholder="开始日期" end-placeholder="结束日期">
          </el-date-picker>
        </div>
      </el-col>
      <el-col :span="4" class="btn_box">
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
        input5: "",
        input6: "",
        input7: "",
        input8: "",
        date: dateDefault
      },
      //时间选择器配置项
      pickerOptions1: datePickLimit,
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

