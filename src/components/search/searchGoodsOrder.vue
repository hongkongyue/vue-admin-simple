<template>
  <div id="" class="search">
    <!-- 搜索门店 -->
    <el-row :gutter="20">
      <el-col :span="4">
        <el-input placeholder="订单编号" v-model="formData.input1" type="text" size="small" clearable></el-input>
      </el-col>
      <el-col :span="4">
        <el-input placeholder="商品名称" v-model="formData.input2" type="text" size="small" clearable></el-input>
      </el-col>
      <el-col :span="4">
        <el-input placeholder="用户名" v-model="formData.input3" type="text" size="small" clearable></el-input>
      </el-col>
      <el-col :span="4">
        <el-select v-model="formData.input4" size="small" style="width:100%;" filterable remote :remote-method="remoteMethod" :loading="selectLoading" placeholder="所属商家-请选择">
          <el-option
            v-for="(item,index) in businessOptions"
            :key="item.label"
            :label="item.label"
            :value="index">
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="4">
        <el-select v-model="formData.input5" size="small" placeholder="配送方式-请选择">
          <el-option label="门店自提" value="1"></el-option>
          <el-option label="快递配送" value="2"></el-option>
        </el-select>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12">
        <div class="block">
          <span class="demonstration">下单时间:</span>
          <el-date-picker v-model="formData.date" type="daterange" :clearable="false" size="small" value-format="yyyy-MM-dd" range-separator="至" :picker-options="pickerOptions1" start-placeholder="开始日期" end-placeholder="结束日期">
          </el-date-picker>
        </div>
      </el-col>
      <el-col :span="12" class="btn_box">
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
        date: dateDefault
      },
      //时间选择器配置项
      pickerOptions1: datePickLimit,
      businessOptions: [{ label: "默认选项1" }, { label: "默认选项2" }], //搜索框数据
      selectLoading: false
    };
  },
  mounted: function() {
    this.remoteMethod('a');
  },
  methods: {
    // 搜索商家
    remoteMethod: function(query) {
      if (query !== "") {
        this.selectLoading = true;
        setTimeout(() => {
          this.selectLoading = false;
          this.businessOptions = [
            { label: "模拟选项1" },
            { label: "模拟选项2" }
          ];
        }, 200);
      } else {
        this.businessOptions = [];
      }
    },

    search: function() {
      Bus.$emit("search", this.formData);
    },
  }
};
</script>

