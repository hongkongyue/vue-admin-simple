<template>
  <div>
    <div class="goodsOrderListComponent">
      <table class="table">
        <tr class="bg_gray">
          <td>商品</td>
          <td>价格(元)/数量</td>
          <td>订单总额</td>
          <td>提货状态</td>
          <td>买家</td>
          <td>提货门店</td>
          <td>申请时间</td>
        </tr>

        <template v-for="(item,index) in orderList">
          <tr style="height:10px;" :key="index+'a'"></tr>
          <tr class="bg_gray order_tit" :key="index+'b'">
            <td colspan="2" class="tl">订单号：{{item.data1}}</td>
            <td colspan="4" class="tl">招金黄金</td>
            <td class="tr"><el-button @click="detail(item)" type="text" size="mini">查看详情</el-button></td>
          </tr>
          <template v-for="(itemB,indexB) in item.arr">
            <tr class="order_item" :key="indexB+item.data1">
              <td class="goodsInfo border_r">
                <div class="good_img"><img src="../../assets/imgs/img.jpg"></div>
                <div style="height:100%;padding-top:15px;">
                  <p class="name">投资金条{{item.data1}}</p>
                  <p class="size">规格：{{item.data1}}</p>
                </div>
              </td>
              <td class="border_r">
                ￥7000.00 <br>
                x1
              </td>
              <td :class="['border_r',indexB<item.arr.length-1 ? 'border_bot_none':'']">
                <div v-if="indexB>0"></div>
                <div v-if="indexB==0">{{item.data1}}</div>
              </td>
              <td :class="['border_r',indexB<item.arr.length-1 ? 'border_bot_none':'']">
                <div v-if="indexB>0"></div>
                <div v-if="indexB==0">{{item.data1}}</div>
              </td>
              <td :class="['border_r',indexB<item.arr.length-1 ? 'border_bot_none':'']">
                <div v-if="indexB>0"></div>
                <div v-if="indexB==0">
                  {{item.data1}} <br>
                  13345258012
                </div>
              </td>
              <td :class="['border_r',indexB<item.arr.length-1 ? 'border_bot_none':'']">
                <div v-if="indexB>0"></div>
                <div v-if="indexB==0">{{item.data1}}</div>
              </td>
              <td :class="['border_r',indexB<item.arr.length-1 ? 'border_bot_none':'']">
                <div v-if="indexB>0"></div>
                <div v-if="indexB==0">{{item.data1}}</div>
              </td>
            </tr>
          </template>
        </template>
        


      </table>

      <!-- 分页 -->
      <div class="page_box">
        <el-pagination :current-page.sync="pageNo" :page-size="pageSize" layout="prev, pager, next, jumper" :total="tableDataTotal"  background>
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import Bus from "../../assets/utils/eventBus";

export default {
  data(){
    return {
      pageNo:1,
      pageSize:10,
      tableDataTotal:20,
    }
  },
  watch:{
    pageNo:function(val){
      Bus.$emit('pageChange',val)
    }
  },
  props:[
    'orderList'
  ],
  methods:{
    detail:function(item){
      console.log(item);
      Bus.$emit('getDetail',item)
    }
  }
}
</script>

<style lang="less">
  .goodsOrderListComponent{
    .table{width:100%;font-size:12px;
      tr{display: table-row;vertical-align: inherit;border-color: inherit;height:25px;vertical-align:middle;}
      td{text-align:center;border:none;}
      .border_r{border-right:1px solid rgb(236, 236, 236);}
      .tl{text-align: left;padding-left:20px;}
      .tr{text-align:right;padding-right:20px;}
      .bg_gray{background-color:#f5f5f5;}
    }

    .order_tit{border:1px solid rgb(236, 236, 236) !important;}
    .order_item td{border:1px solid rgb(236, 236, 236) !important;border-top:none !important;}
    .order_item td.border_bot_none{border-bottom:none !important;}
    .goodsInfo{position:relative;padding-left:100px;height:100px;
      .good_img{height:80px;width:80px;position: absolute;left:10px;top:10px;
        img{width: 100%;height:100%;}
      }
      .size{margin-top:10px;}
    }






    .page_box{text-align:center;margin-top:20px;}
  }
</style>


