<template>
  <div class="detail businessDetail">
    <section>
      <h3>公告信息</h3>
      <div class="con">
        <el-row :gutter="20">
          <el-col :span="8"><span class="name">公告名称:</span>{{detail.data1}}</el-col>
          <el-col :span="8"><span class="name">上架状态:</span>{{detail.data1}}</el-col>
          <el-col :span="8"><span class="name">上架时间:</span>{{detail.data1}}</el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="3"><span class="name">公告内容:</span></el-col>
          <el-col :span="21" style="padding-left:20px;">{{detail.data1}}</el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="3"><span class="name">备注:</span></el-col>
          <el-col :span="21" style="padding-left:20px;">{{detail.data1}}</el-col>
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
