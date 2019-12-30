<template>
  <div id="searchUser" class="search">
    <!-- 搜索商家 -->
    <el-row :gutter="20">
      <el-col :span="4">
        <el-input placeholder="企业名称" v-model="formData.input1" type="text" size="small" clearable></el-input>
      </el-col>
      <el-col :span="4">
        <el-input placeholder="店铺名称" v-model="formData.input2" size="small" clearable></el-input>
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
import {datePickLimit,dateDefault} from '../../assets/utils/dateOptions'
import Bus from '../../assets/utils/eventBus'
export default {
  data(){
    return {
      formData:{
        input1:'',
        input2:'',
        date:dateDefault
      },
      //时间选择器配置项
			pickerOptions1: datePickLimit
    }
  },
  mounted:function(){
    
  },
  methods:{
    search:function(){
      Bus.$emit('search',this.formData); 
    },
    // 新增
    add:function(){
      Bus.$emit('add',''); 
    }
  }
}
</script>

