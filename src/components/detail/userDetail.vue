<template>
  <div class="detail">
    <section>
      <h3>基本信息</h3>
      <div class="con">
        <el-row :gutter="20">
          <el-col :span="6"><span class="name">手机号:</span>{{userDetail.data}}</el-col>
          <el-col :span="6"><span class="name">性别:</span>{{userDetail.data}}</el-col>
          <el-col :span="6"><span class="name">年龄:</span>{{userDetail.data}}</el-col>
          <el-col :span="6"><span class="name">姓名:</span>{{userDetail.data}}</el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="6"><span class="name">身份证号:</span>{{userDetail.data}}</el-col>
          <el-col :span="6"><span class="name">开户行:</span>{{userDetail.data}}</el-col>
          <el-col :span="6"><span class="name">银行卡号:</span>{{userDetail.data}}</el-col>
          <el-col :span="6"><span class="name name_w140">银行卡预留手机号:</span>{{userDetail.data}}</el-col>
        </el-row>
      </div>
    </section>

    <section>
      <h3>交易信息</h3>
      <div class="con">
        <el-row :gutter="20">
          <el-col :span="8"><span class="name name_w140">累计交易额（元）:</span>{{userDetail.data}}</el-col>
          <el-col :span="8"><span class="name name_w140">待回购金额（元）:</span>{{userDetail.data}}</el-col>
          <el-col :span="8"><span class="name name_w140">预售金额（元）:</span>{{userDetail.data}}</el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8"><span class="name name_w140">累计交易数量（个）:</span>{{userDetail.data}}</el-col>
          <el-col :span="8"><span class="name name_w140">待回购数量（个）:</span>{{userDetail.data}}</el-col>
          <el-col :span="8"><span class="name name_w140">预售数量（个）:</span>{{userDetail.data}}</el-col>
        </el-row>
      </div>
    </section>
    <section>
      <h3>收货地址</h3>
      <div class="con">
        <el-table id="tabledata_show" :data="userDetail.address" style="width: 100%" :border='true' size="mini" :stripe="true">
          <el-table-column type="index" label="序号" width="50" align="center"></el-table-column>
          <el-table-column prop="local" label="收货人" align="center"></el-table-column>
          <el-table-column prop="local" label="联系电话" align="center"></el-table-column>
          <el-table-column prop="local" label="收货地址" align="center"></el-table-column>
        </el-table>
      </div>
    </section>


  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  computed:{
    ...mapState({
      userDetail:state => state.user.userDetail,   //查询参数
    })
  }
}
</script>

