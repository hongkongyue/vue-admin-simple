<template>
  <div class="detail businessDetail">
    <section>
      <h3>基本信息</h3>
      <div class="con">
        <el-row :gutter="20">
          <el-col :span="6"><span class="name">企业信息:</span>{{detail.data1}}</el-col>
          <el-col :span="6"><span class="name">统一社会信用代码:</span>{{detail.data1}}</el-col>
          <el-col :span="6"><span class="name">店铺名称:</span>{{detail.data1}}</el-col>
          <el-col :span="6"><span class="name">法人姓名:</span>{{detail.data1}}</el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="6"><span class="name">法人身份证号:</span>{{detail.data1}}</el-col>
          <el-col :span="6"><span class="name">联系人:</span>{{detail.data1}}</el-col>
          <el-col :span="6"><span class="name">联系方式:</span>{{detail.data1}}</el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="24"><span class="name">备注:</span>{{detail.data1}}</el-col>
        </el-row>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props:[
    'detail'
  ]
}
</script>

<style>
  .businessDetail .name{width:120px;}
</style>
