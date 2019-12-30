<template>
  <!-- 支付详情 -->
  <div class="detail">
    <section class="payOrderDetailComponent">
      <el-row :gutter="20">
        <el-col :span="24"><span class="name">名目:</span>{{payDetail.data}}</el-col>
      </el-row>
      <!-- 商品购买支付详情 -->
      <el-row :gutter="20">
        <el-col :span="24">
          <el-table :data="payDetail.arr" style="width: 100%" :border='true' size="mini" :stripe="true">
            <el-table-column width="380" label="商品" align="center">
              <template slot-scope="scope">
                <div class="goodsInfo">
                  <div class="good_img"><img src="../../assets/imgs/img.jpg"></div>
                  <div style="height:100%;padding-top:15px;">
                    <p class="name">投资金条{{payDetail.data1}}</p>
                    <p class="size">规格：{{payDetail.data1}}</p>
                  </div>
                </div>
              </template>
            </el-table-column>
            <el-table-column prop="data1" label="价格" align="center"></el-table-column>
            <el-table-column prop="data1" label="数量" align="center"></el-table-column>
            <el-table-column prop="data1" label="小计" align="center"></el-table-column>
          </el-table>
          <div class="bot_txt">
            订单共{{payDetail.arr.length}}件产品,总计: ￥88.00 <br/>
            运费： ￥12.00 <br/>
            合计： ￥100.00 
          </div>
        </el-col>
      </el-row>

      <!-- 买金支付详情 -->
      <el-row :gutter="20">
        <el-col :span="24">
          <el-table :data="payDetail.arr" style="width: 100%" :border='true' size="mini" :stripe="true">
            <el-table-column prop="data1" label="单价(元/克)" align="center"></el-table-column>
            <el-table-column prop="data1" label="数量(克)" align="center"></el-table-column>
            <el-table-column prop="data1" label="锁定期(天)" align="center"></el-table-column>
            <el-table-column prop="data1" label="优惠(元/克)" align="center"></el-table-column>
            <el-table-column prop="data1" label="实际支付" align="center"></el-table-column>
          </el-table>
          <div class="bot_txt">
            支付方式： 余额+银行卡 <br>
            余额支付：¥500 <br>
            银行卡支付：¥36 <br>
            工商银行 4385743438574351 <br>
          </div>
        </el-col>
      </el-row>

      <!-- 卖金支付详情 -->
      <el-row :gutter="20">
        <el-col :span="24">
          <el-table :data="payDetail.arr" style="width: 100%" :border='true' size="mini" :stripe="true">
            <el-table-column prop="data1" label="单价(元/克)" align="center"></el-table-column>
            <el-table-column prop="data1" label="数量(克)" align="center"></el-table-column>
            <el-table-column prop="data1" label="合计" align="center"></el-table-column>
          </el-table>
        </el-col>
      </el-row>

      <!-- 提金支付详情 -->
      <el-row :gutter="20">
        <el-col :span="24">
          <el-table :data="payDetail.arr" style="width: 100%" :border='true' size="mini" :stripe="true">
            <el-table-column prop="data1" label="规格" align="center"></el-table-column>
            <el-table-column prop="data1" label="数量(克)" align="center"></el-table-column>
            <el-table-column prop="data1" label="手续费(元)" align="center"></el-table-column>
          </el-table>
          <div class="bot_txt">
            手续费总计： ￥320.00 <br>
            运费： ￥12.00 <br>
            合计： ￥332.00 
          </div>
        </el-col>
      </el-row>

    </section>
  </div>
</template>

<script>
import Bus from '../../assets/utils/eventBus'

export default {
  props:[
    'payDetail'
  ],
  methods:{
  }
}
</script>

<style lang="less">
  .payOrderDetailComponent{border:none !important;
    .goodsInfo{position:relative;padding-left:100px;height:100px;
      .good_img{height:80px;width:80px;position: absolute;left:10px;top:10px;
        img{width: 100%;height:100%;}
      }
      .name{display: block;width:100%;text-align:left;}
      .size{margin-top:10px;}
    }
    .bot_txt{text-align: right;margin-top:20px;line-height:26px;font-size:12px;}
  }
</style>

