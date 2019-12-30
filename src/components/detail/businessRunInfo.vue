<template>
  <div class="detail businessDetail">
    <section>
      <h3>数据概览</h3>
      <div class="con">
        <el-row :gutter="20">
          <el-col :span="8"><span class="name name_w140">待支付订单数:</span>{{detail.data}}</el-col>
          <el-col :span="8"><span class="name name_w140">预售中订单数:</span>{{detail.data}}</el-col>
          <el-col :span="8"><span class="name name_w140">待回购订单数:</span>{{detail.data}}</el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8"><span class="name name_w140">待发货订单数:</span>{{detail.data}}</el-col>
          <el-col :span="8"><span class="name name_w140">待支付金额:</span>{{detail.data}}</el-col>
          <el-col :span="8"><span class="name name_w140">预售中金额:</span>{{detail.data}}</el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8"><span class="name name_w140">待回购金额:</span>{{detail.data}}</el-col>
          <el-col :span="8"><span class="name name_w140">售后中订单数:</span>{{detail.data}}</el-col>
        </el-row>
      </div>
    </section>
    <section>
      <h3>交易趋势</h3>
      <div class="con">
        <div style="line-height:200px;background-color:#eaeaea;text-align:center;font-size:25px;">交易趋势图</div>
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


</style>
