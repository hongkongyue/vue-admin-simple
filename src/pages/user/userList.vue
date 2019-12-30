<template>
  <div>
    <search></search>
    <!-- 表格展示 -->
    <div class="table_box">
      <el-table id="tabledata_show" :data="userList" style="width: 100%" :border='true' size="mini" :stripe="true">
        <el-table-column type="index" label="序号" width="50" align="center"></el-table-column>
        <el-table-column prop="data" label="用户名" align="center"></el-table-column>
        <el-table-column prop="data" label="手机号" align="center"></el-table-column>
        <el-table-column prop="data" label="注册来源" align="center"></el-table-column>
        <el-table-column prop="data" label="注册时间" align="center"></el-table-column>
        <el-table-column label="操作" width="170" align="center">
          <template slot-scope="scope">
            <el-button @click.native.prevent="detail(userList[scope.$index])" type="text" size="mini">查看</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <div class="page_box">
        <el-pagination :current-page.sync="pageNo" :page-size="pageSize" layout="prev, pager, next, jumper" :total="tableDataTotal"  background>
        </el-pagination>
      </div>
    </div>


    <!-- 详情 -->
    <el-dialog class="detail_dialog" title="用户信息" top="10vh" :visible.sync="dialogDetail" width="1000px">
      <detail></detail>
    </el-dialog>

  </div>
</template>


<script>
import {mapState,mapActions} from 'vuex'
import search from '../../components/search/searchUser.vue'
import detail from '../../components/detail/userDetail.vue'
export default {
  data(){
    return {
      pageNo:1,
      pageSize:10,
      tableDataTotal:20,
      dialogDetail:false,      //用户详情弹框
    }
  },
  computed:{
    ...mapState({
      userSearchParams:state => state.user.userSearchParams,   //查询参数
      userList:state => state.user.userList    //用户列表

      
    }),
  },
  components:{
    search:search,
    detail:detail
  },
  mounted:function(){
    this.getUserList({});
  },
  watch:{
    pageNo:function(val){
      this.$message('跳转页码了:'+val)
      let params = this.userSearchParams;
      params.pageNo=val;
      params.pageSize=this.pageSize;
      this.getUserList(params);
    }
  },
  methods:{
    ...mapActions([
      'getUserList',
      'getUserDetail'
    ]),
    // 详情
    alerts(msg){
        console.log(msg)
        alert(msg)
    },
    detail:function(item){
      this.dialogDetail = true;
      this.getUserDetail(item);
    }
  }
}
</script>
