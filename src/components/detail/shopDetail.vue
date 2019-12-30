<template>
  <!-- 门店信息 -->
  <div class="detail">
    <section>
      <h3>基本信息</h3>
      <div class="con">
        <el-row :gutter="20">
          <el-col :span="6"><span class="name">门店名称:</span>{{detail.data1}}</el-col>
          <el-col :span="6"><span class="name">所属商家:</span>{{detail.data1}}</el-col>
          <el-col :span="6"><span class="name">门店地址:</span>{{detail.data1}}</el-col>
          <el-col :span="6"><span class="name name_w140">门店电话:</span>{{detail.data1}}</el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="6"><span class="name">联系人:</span>{{detail.data1}}</el-col>
          <el-col :span="6"><span class="name">联系电话:</span>{{detail.data1}}</el-col>
          <el-col :span="12"><span class="name">营业时间:</span>{{detail.data1}} ~ {{detail.data1}}</el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="24"><span class="name">服务说明:</span>{{detail.data1}}</el-col>
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

