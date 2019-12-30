<template>
  <div>
    <search></search>

    <!-- 表格展示 -->
    <div class="table_box">
      <el-table key="first" id="" :data="tableData" style="width: 100%" :border='true' size="mini" :stripe="true">
        <el-table-column type="index" label="序号" width="50" align="center"></el-table-column>
        <el-table-column prop="data" label="用户名" align="center"></el-table-column>
        <el-table-column prop="data" label="姓名" align="center"></el-table-column>
        <el-table-column prop="data" label="订单号" align="center"></el-table-column>
        <el-table-column prop="data" label="银行名称" align="center"></el-table-column>
        <el-table-column prop="data" label="银行账号" align="center"></el-table-column>
        <el-table-column prop="data" label="提现金额" align="center"></el-table-column>
        <el-table-column prop="data" label="付款状态" align="center"></el-table-column>
        <el-table-column prop="data" label="提现状态" align="center"></el-table-column>
        <el-table-column prop="data" label="提现时间" align="center"></el-table-column>
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
import searchComponent from '../../components/search/searchAccountMoney.vue'
import Bus from '../../assets/utils/eventBus'

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
    search:searchComponent
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
    }
  }
}
</script>

