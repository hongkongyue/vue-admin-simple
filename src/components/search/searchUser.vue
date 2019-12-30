<template>
  <div id="searchUser" class="search">
    <!-- 搜索用户 -->
    <el-row :gutter="20">
      <el-col :span="4">
        <el-input placeholder="用户名" v-model="formData.input1" type="text" size="small" clearable></el-input>
      </el-col>
      <el-col :span="4">
        <el-input placeholder="手机号" v-model="formData.input2" size="small" clearable></el-input>
      </el-col>
      <el-col :span="4">
        <el-select v-model="formData.input3" placeholder="注册来源" clearable size="small">
          <el-option value="1" label="IOS"></el-option>
          <el-option value="2" label="Android"></el-option>
        </el-select>
      </el-col>
      <el-col :span="12">
        <div class="block">
          <span class="demonstration">时间:</span>
          <el-date-picker v-model="formData.date" type="daterange" :clearable="false" size="small" value-format="yyyy-MM-dd" range-separator="至" :picker-options="pickerOptions1" start-placeholder="开始日期" end-placeholder="结束日期">
          </el-date-picker>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="24" class="btn_box">
        <el-button type="primary" size="small" @click="search()">查询</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {datePickLimit,dateDefault} from '../../assets/utils/dateOptions'
import {mapActions} from 'vuex'
export default {
  data(){
    return {
      formData:{
          input1:'',
          input2:'',
          input3:'',
          date:dateDefault
      },
      //时间选择器配置项
			pickerOptions1: datePickLimit
    }
  },
  methods:{
    ...mapActions([
      'getUserList'
    ]),
    search:function(){
      this.formData.pageNo = 1;
      this.formData.pageSize = 10;
      this.$parent.alerts(this.formData);
      this.getUserList(this.formData);
    }
  }
}
</script>

