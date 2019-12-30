<template>
  <!-- 商品订单详情 -->
  <div class="detail goodsOrderDetailComponent">
    <section>
      <h3>订单信息</h3>
      <div class="con">
        <el-row :gutter="20">
          <el-col :span="6"><span class="name">订单编号:</span>{{detail.data1}}</el-col>
          <el-col :span="6"><span class="name">下单时间:</span>{{detail.data1}}</el-col>
          <el-col :span="6"><span class="name">商品金额:</span>{{detail.data1}}</el-col>
          <el-col :span="6"><span class="name name_w140">运费:</span>{{detail.data1}}</el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="6"><span class="name">加工费:</span>{{detail.data1}}</el-col>
          <el-col :span="6"><span class="name">订单总额:</span>{{detail.data1}}</el-col>
          <el-col :span="6"><span class="name">买家:</span>{{detail.data1}}</el-col>
          <el-col :span="6"><span class="name">支付时间:</span>{{detail.data1}}</el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12"><span class="name">支付方式:</span>{{detail.data1}}</el-col>
        </el-row>
      </div>
    </section>
    <section>
      <h3>订单状态</h3>
      <div class="con">
        <el-row :gutter="20">
          <el-col :span="24"><span class="name">订单状态:</span>{{detail.data1}}  <small style="margin-left:20px;">(买家已下单，尚未支付。59分钟后订单关闭)</small></el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="24"><span class="name">发货状态:</span>{{detail.data1}}</el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="24"><span class="name">配送方式:</span>{{detail.data1}}  <small style="margin-left:20px;">门店确认中</small></el-col>
        </el-row>
      </div>
    </section>
    <section>
      <h3>收货地址</h3>
      <div class="con">
        <el-row :gutter="20">
          <el-col :span="6"><span class="name">收货人:</span>{{detail.data1}}</el-col>
          <el-col :span="6"><span class="name">联系方式:</span>{{detail.data1}}</el-col>
          <el-col :span="12"><span class="name">收货地址:</span>{{detail.data1}}</el-col>
        </el-row>
      </div>
    </section>
    <section>
      <h3>门店信息</h3>
      <div class="con">
        <el-row :gutter="20">
          <el-col :span="6"><span class="name">门店名称:</span>{{detail.data1}}</el-col>
          <el-col :span="6"><span class="name">联系方式:</span>{{detail.data1}}</el-col>
          <el-col :span="12"><span class="name">门店地址:</span>{{detail.data1}}</el-col>
        </el-row>
      </div>
    </section>
    <section>
      <h3>商品信息</h3>
      <div class="con">
        <el-table :data="detail.arr" style="width: 100%" :border='true' size="mini" :stripe="true">
          <el-table-column width="380" label="商品" align="center">
            <template slot-scope="scope">
              <div class="goodsInfo">
                <div class="good_img"><img src="../../assets/imgs/img.jpg"></div>
                <div style="height:100%;padding-top:15px;">
                  <p class="name">投资金条{{detail.data1}}</p>
                  <p class="size">规格：{{detail.data1}}</p>
                </div>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="data1" label="价格" align="center"></el-table-column>
          <el-table-column prop="data1" label="数量" align="center"></el-table-column>
          <el-table-column prop="data1" label="小计" align="center"></el-table-column>
          <el-table-column label="操作" align="center">
            <template slot-scope="scope">
              <el-button type="text" size="mini">退货</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data(){
    return {
    }
  },
  props:[
    'detail'
  ]
}
</script>
<style lang="less">
  .goodsOrderDetailComponent{
    .goodsInfo{position:relative;padding-left:100px;height:100px;
      .good_img{height:80px;width:80px;position: absolute;left:10px;top:10px;
        img{width: 100%;height:100%;}
      }
      .name{display: block;width:100%;text-align:left;}
      .size{margin-top:10px;}
    }
  }
</style>
