<template>
  <div>
    <search></search>

    <!-- 表格展示 -->
    <div class="table_box">
      <el-table key="first" id="" :data="tableData" style="width: 100%" :border='true' size="mini" :stripe="true">
        <el-table-column type="index" label="序号" width="50" align="center"></el-table-column>
        <el-table-column prop="data" label="交易编号" align="center"></el-table-column>
        <el-table-column prop="data" label="交易流水号" align="center"></el-table-column>
        <el-table-column prop="data" label="支付渠道" align="center"></el-table-column>
        <el-table-column prop="data" label="订单编号" align="center"></el-table-column>
        <el-table-column prop="data" label="商家名称" align="center"></el-table-column>
        <el-table-column prop="data" label="名目" align="center"></el-table-column>
        <el-table-column prop="data" label="收支类型" align="center"></el-table-column>
        <el-table-column prop="data" label="交易金额" align="center"></el-table-column>
        <el-table-column prop="data" label="交易状态" align="center"></el-table-column>
        <el-table-column prop="data" label="创建时间" align="center"></el-table-column>
        <el-table-column prop="data" label="更新时间" align="center"></el-table-column>
        <el-table-column label="操作" width="60" align="center">
          <template slot-scope="scope">
            <el-button @click.native.prevent="detail(tableData[scope.$index])" type="text" size="mini">详情</el-button>
          </template>
        </el-table-column>
      </el-table>


      <!-- 分页 -->
      <div class="page_box">
        <el-pagination :current-page.sync="pageNo" :page-size="pageSize" layout="prev, pager, next, jumper" :total="tableDataTotal"  background>
        </el-pagination>
      </div>
    </div>

    <!-- 支付详情 -->
    <el-dialog class="detail_dialog" title="支付详情" top="10vh" :visible.sync="dialogDetail" width="1000px">
      <pay-detail :pay-detail="payDetail"></pay-detail>
    </el-dialog>


  </div>
</template>


<script>
import searchComponent from '../../components/search/searchPayOrder.vue'
import payDetailComponent from '../../components/detail/payOrderDetail.vue'
import Bus from '../../assets/utils/eventBus'

export default {
  data(){
    return {
      pageNo:1,
      pageSize:10,
      tableDataTotal:20,
      tableData:[],
      dialogDetail:false,
      payDetail:{},   //支付详情
    }
  },
  components:{
    search:searchComponent,
    payDetail:payDetailComponent
  },
  watch:{
    pageNo:function(val){
      this.getList();
    }
  },
  mounted:function(){
    this.getList();
    // 查询
    Bus.$on('search',params =>{
      console.log('查询'+params);
      
    })
  },
  methods:{
    // 查看
    detail:function(item){
      console.log('查询'+item);
      this.dialogDetail = true;
      this.getOrderDetail(item);
      
    },




    // 查询列表
    getList:function(){
      this.tableData=[];
      for(var i=0;i<10;i++){
        this.tableData.push({ data: '模拟' + Math.floor(Math.random() * 10000) });
      }
    },
    getOrderDetail:function(item){
      this.payDetail = {
        data:'模拟' + Math.floor(Math.random() * 10000),
        arr:[{data1:'模拟' + Math.floor(Math.random() * 10000)}]
      }
    }
  }
}
</script>

