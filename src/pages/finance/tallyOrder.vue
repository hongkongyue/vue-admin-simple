<template>
  <div>
    <search></search>

    <!-- 表格展示 -->
    <div class="table_box">
      <!-- -待结算 -->
      <el-table v-if="tallyTab == '0'" key="first" id="" :data="tableData" style="width: 100%" :border='true' size="mini" :stripe="true">
        <el-table-column type="index" label="序号" width="50" align="center"></el-table-column>
        <el-table-column prop="data" label="结算编号" align="center"></el-table-column>
        <el-table-column prop="data" label="订单编号" align="center"></el-table-column>
        <el-table-column prop="data" label="商家名称" align="center"></el-table-column>
        <el-table-column prop="data" label="应结算金额" align="center"></el-table-column>
        <el-table-column prop="data" label="结算类型" align="center"></el-table-column>
        <el-table-column prop="data" label="操作时间" align="center"></el-table-column>
        <el-table-column label="操作" width="170" align="center">
          <template slot-scope="scope">
            <el-button @click.native.prevent="tally(tableData[scope.$index])" type="text" size="mini">结算</el-button>
          </template>
        </el-table-column>
      </el-table>

      <!-- -已结算 -->
      <el-table v-if="tallyTab == '1'" key="second" id="" :data="tableData" style="width: 100%" :border='true' size="mini" :stripe="true">
        <el-table-column type="index" label="序号" width="50" align="center"></el-table-column>
        <el-table-column prop="data" label="批次号" align="center"></el-table-column>
        <el-table-column prop="data" label="结算编号" align="center"></el-table-column>
        <el-table-column prop="data" label="订单编号" align="center"></el-table-column>
        <el-table-column prop="data" label="商家名称" align="center"></el-table-column>
        <el-table-column prop="data" label="应结算金额(元)" align="center"></el-table-column>
        <el-table-column prop="data" label="结算类型" align="center"></el-table-column>
        <el-table-column prop="data" label="交易时间" align="center"></el-table-column>
        <el-table-column prop="data" label="结算时间" align="center"></el-table-column>
      </el-table>


      <!-- 分页 -->
      <div class="page_box">
        <el-pagination :current-page.sync="pageNo" :page-size="pageSize" layout="prev, pager, next, jumper" :total="tableDataTotal"  background>
        </el-pagination>
      </div>
    </div>

    <!-- 结算信息 -->
    <el-dialog class="detail_dialog" title="结算信息" top="10vh" :visible.sync="dialogTallyInfo" width="1000px">
      <tall-info :tall-info="tallInfo"></tall-info>
    </el-dialog>



  </div>
</template>

<script>
import searchComponent from '../../components/search/searchTallyOrder.vue'
import tallyAllInfo from '../../components/detail/tallyAllInfo.vue'
import Bus from '../../assets/utils/eventBus'

export default {
  data(){
    return {
      pageNo:1,
      pageSize:10,
      tableDataTotal:20,
      tableData:[],
      tallyTab:'0',      //结算状态  
      dialogTallyInfo:false,     //批量结算弹框
      tallInfo:{},    //结算信息
    }
  },
  components:{
    search:searchComponent,
    tallInfo:tallyAllInfo,
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
    });
    // 批量结算
    Bus.$on('tallyall',()=>{
      console.log('批量结算');
      this.getTallInfo();
      this.dialogTallyInfo = true;
    });
    // 结算状态改变  已结算、待结算
    Bus.$on('tallyStateChange',(state)=>{
      console.log('结算状态'+state);
      this.pageNo = 1;
      this.tallyTab = state;
      this.getList();
    });
    // 批量结算-提交
    Bus.$on('tallyAllSubmit',()=>{
      console.log('批量结算-提交');
      this.dialogTallyInfo = false;
      this.getList();
    });
    // 批量结算-取消
    Bus.$on('tallyAllCancel',()=>{
      console.log('批量结算-取消');
      this.dialogTallyInfo = false;
    });

    


    
  },
  methods:{
    // 结算
    tally:function(item){
      console.log('结算'+item);
      this.$confirm('是否确认结算?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.getList();
          this.$message({
            type: 'success',
            message: '结算成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消结算'
          });          
        });
    },




    // 查询列表
    getList:function(){
      this.tableData=[];
      for(var i=0;i<10;i++){
        this.tableData.push({ data: '模拟' + Math.floor(Math.random() * 10000) });
      }
    },
    // 获取批量结算信息
    getTallInfo:function(){
      this.tallInfo = {
        data: '模拟' + Math.floor(Math.random() * 10000),
        arr:[
          {data1:  Math.floor(Math.random() * 10000),},
          {data1:  Math.floor(Math.random() * 10000),},
          {data1:  Math.floor(Math.random() * 10000),}
        ]
      }
    }
  }
}
</script>
