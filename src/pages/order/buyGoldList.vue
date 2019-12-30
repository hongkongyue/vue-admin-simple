<template>
  <div>
    <search></search>
    <!-- 表格展示 -->
    <div class="table_box">
      <el-table id="tabledata_show" :data="tableData" style="width: 100%" :border='true' size="mini" :stripe="true">
        <el-table-column type="index" label="序号" width="50" align="center"></el-table-column>
        <el-table-column prop="data" label="订单编号" align="center"></el-table-column>
        <el-table-column prop="data" label="商户名称" align="center"></el-table-column>
        <el-table-column prop="data" label="用户名" align="center"></el-table-column>
        <el-table-column prop="data" label="数量(g)" align="center"></el-table-column>
        <el-table-column prop="data" label="锁定期限(天)" align="center"></el-table-column>
        <el-table-column prop="data" label="单价(元/克)" align="center"></el-table-column>
        <el-table-column prop="data" label="优惠金额(元/克)" align="center"></el-table-column>
        <el-table-column prop="data" label="订单金额" align="center"></el-table-column>
        <el-table-column prop="data" label="实付金额" align="center"></el-table-column>
        <el-table-column prop="data" label="订单状态" align="center"></el-table-column>
        <el-table-column prop="data" label="交易时间" align="center"></el-table-column>
        <el-table-column prop="data" label="更新时间" align="center"></el-table-column>
      </el-table>
      <!-- 分页 -->
      <div class="page_box">
        <el-pagination :current-page.sync="pageNo" :page-size="pageSize" layout="prev, pager, next, jumper" :total="tableDataTotal"  background>
        </el-pagination>
      </div>
    </div>



  </div>
</template>

<script>
import searchBuyGoldOrder from '../../components/search/searchBuyGoldOrder.vue'
import Bus from "../../assets/utils/eventBus";

export default {
  data(){
    return {
      pageNo:1,
      pageSize:10,
      tableDataTotal:20,
      tableData:[],
    }
  },
  components:{
    search:searchBuyGoldOrder
  },
  watch:{
    pageNo:function(val){
      this.getList();
    }
  },
  mounted:function(){
    this.getList();
    // 查询
    Bus.$on('search',params=>{
      console.log('查询'+params);
      this.getList();
    })
  },
  methods:{
    // 查询列表
    getList:function(){
      this.tableData=[];
      for(var i=0;i<10;i++){
        this.tableData.push({ data: '模拟' + Math.floor(Math.random() * 10000) });
      }
    },
  }
}
</script>
