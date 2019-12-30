<template>
  <!-- 自提订单 -->
  <div id="takeTheirList">
    <search></search>
    <!-- tab -->
    <el-tabs style="margin-top:20px;" v-model="tabActiveName" @tab-click="tabsHandleClick" type="border-card" v-loading="tabLoading">
      <el-tab-pane label="全部" name="all"><order-list :order-list="orderList"></order-list></el-tab-pane>
      <el-tab-pane label="待门店确认" name="waitSure"><order-list :order-list="orderList"></order-list></el-tab-pane>
      <el-tab-pane label="调货中" name="readying"><order-list :order-list="orderList"></order-list></el-tab-pane>
      <el-tab-pane label="待提货" name="waitGet"><order-list :order-list="orderList"></order-list></el-tab-pane>
      <el-tab-pane label="已完成" name="done"><order-list :order-list="orderList"></order-list></el-tab-pane>
    </el-tabs>

    <!-- 订单详情 -->
    <el-dialog class="detail_dialog" title="订单详情" top="10vh" :visible.sync="dialogDetail" width="1000px">
      <detail :detail="orderDetail"></detail>
    </el-dialog>
    
  </div>
</template>

<script>
import searchComponent from "../../components/search/searchTakeTheirOrder.vue";
import takeTheirOrderList from "../../components/others/takeTheirOrderList.vue";
import takeTheirOrderDetail from "../../components/detail/goodsOrderDetail.vue";
import Bus from "../../assets/utils/eventBus";

export default {
  data() {
    return {
      tabActiveName: "all",     //当前tab
      tabLoading:false,
      orderList:[],
      dialogDetail:false,
      orderDetail:{},   //订单详情
    };
  },
  components: {
    search: searchComponent,
    orderList:takeTheirOrderList,
    detail:takeTheirOrderDetail
  },
  mounted:function(){
    this.getList();
    // 查询
    Bus.$on('search',params => {
      console.log('查询'+params);
      
      this.getList();
    });
    // 分页跳转
    Bus.$on('pageChange',val => {
      this.getList();
    });
    // 查看订单详情
    Bus.$on('getDetail',item => {
      this.getOrderDetail(item);
    });
    
  },
  methods: {
    // tabs切换
    tabsHandleClick:function() {
      console.log(this.tabActiveName);
      this.getList();
    },
    getList:function(){
      this.orderList = [
        {
          data1:'模拟'+Math.floor(Math.random() * 10000),
          state:'待付款',
          arr:[
            {data2:'模拟'+Math.floor(Math.random() * 10000)},
            {data2:'模拟'+Math.floor(Math.random() * 10000)}
          ]
        },
        {
          data1:'模拟'+Math.floor(Math.random() * 10000),
          state:'待发货门店自提',
          arr:[
            {data2:'模拟'+Math.floor(Math.random() * 10000)},
          ]
        },
        {
          data1:'模拟'+Math.floor(Math.random() * 10000),
          state:'待发货快递配送',
          arr:[
            {data2:'模拟'+Math.floor(Math.random() * 10000)},
            {data2:'模拟'+Math.floor(Math.random() * 10000)},
            {data2:'模拟'+Math.floor(Math.random() * 10000)},
          ]
        },
        {
          data1:'模拟'+Math.floor(Math.random() * 10000),
          state:'待收货',
          arr:[
            {data2:'模拟'+Math.floor(Math.random() * 10000)},
            {data2:'模拟'+Math.floor(Math.random() * 10000)}
          ]
        },
        {
          data1:'模拟'+Math.floor(Math.random() * 10000),
          state:'交易关闭',
          arr:[
            {data2:'模拟'+Math.floor(Math.random() * 10000)},
          ]
        },
        {
          data1:'模拟'+Math.floor(Math.random() * 10000),
          state:'交易完成',
          arr:[
            {data2:'模拟'+Math.floor(Math.random() * 10000)},
          ]
        }

      ]
    },
    getOrderDetail:function(item){
      this.dialogDetail = true;
      this.orderDetail = {data1:'模拟'+Math.floor(Math.random()*10000),state:item.state,arr:[{data1:'模拟'+Math.floor(Math.random()*10000)}]};
    }
  }
};
</script>

<style lang="less">
</style>

