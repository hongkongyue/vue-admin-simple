
<template>
  <!-- 商家列表 -->
  <div id="businessList">
    <search></search>
    <!-- 表格展示 -->
    <div class="table_box">
      <el-table id="tabledata_show" :data="tableData" style="width: 100%" :border='true' size="mini" :stripe="true">
        <el-table-column type="index" label="序号" width="50" align="center"></el-table-column>
        <el-table-column prop="data" label="企业名称" align="center"></el-table-column>
        <el-table-column prop="data" label="店铺名称" align="center"></el-table-column>
        <el-table-column prop="data" label="联系人" align="center"></el-table-column>
        <el-table-column prop="data" label="联系方式" align="center"></el-table-column>
        <el-table-column prop="data" label="操作时间" align="center"></el-table-column>
        <el-table-column label="操作" width="170" align="center">
          <template slot-scope="scope">
            <el-button @click.native.prevent="detail(tableData[scope.$index])" type="text" size="mini">查看</el-button>
            <el-button @click.native.prevent="edit(tableData[scope.$index])" type="text" size="mini">编辑</el-button>
            <el-button @click.native.prevent="runInfo(tableData[scope.$index])" type="text" size="mini">经营信息</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <div class="page_box">
        <el-pagination :current-page.sync="pageNo" :page-size="pageSize" layout="prev, pager, next, jumper" :total="tableDataTotal"  background>
        </el-pagination>
      </div>
    </div>

    <!-- 新增商家 -->
    <el-dialog class="add_edit_dialog" title="新增商家" top="10vh" :visible.sync="dialogAdd" width="1000px">
      <edit-business></edit-business>
    </el-dialog>

    <!-- 编辑商家 -->
    <el-dialog class="add_edit_dialog" title="编辑商家" top="10vh" :visible.sync="dialogEdit" width="1000px">
      <edit-business type="edit" :oldInfo="itemDetail"></edit-business>
    </el-dialog>

    <!-- 查看商家信息 -->
    <el-dialog class="detail_dialog" title="商家信息" top="10vh" :visible.sync="dialogDetail" width="1000px">
      <detail :detail='itemDetail'></detail>
    </el-dialog>

    <!-- 查看经营信息 -->
    <el-dialog class="detail_dialog" title="经营信息" top="10vh" :visible.sync="dialogRunInfo" width="1000px">
      <run-info :detail='runInfoDetail'></run-info>
    </el-dialog>
  </div>
</template>


<script>
import search from '../../components/search/searchBusiness.vue'
import editBusiness from '../../components/addAndEdit/editBusiness.vue'
import businessDetail from '../../components/detail/businessDetail.vue'
import businessRunInfo from '../../components/detail/businessRunInfo.vue'

import Bus from '../../assets/utils/eventBus'
export default {
  data(){
    return {
      tableData:[],
      pageNo:1,
      pageSize:10,
      tableDataTotal:20,
      dialogAdd:false,
      dialogEdit:false,
      dialogDetail:false,
      dialogRunInfo:false, 
      itemDetail:'',    //详情数据
      runInfoDetail:'',     //经营信息
    }
  },
  computed:{
  },
  components:{
    search:search,
    editBusiness:editBusiness,    //新增、编辑
    detail:businessDetail,        //详情
    runInfo:businessRunInfo       //经营信息
  },
  mounted:function(){
    this.getList();
    // 查询
    Bus.$on('search',formData=>{
      console.log('查询'+formData);
      this.getList();
    }),
    // 新增
    Bus.$on('add',()=>{
      this.dialogAdd = true;
      console.log('新增');
    }),
    // 新增-提交
    Bus.$on('addSubmit',()=>{
      this.dialogAdd = false;
      console.log('新增-提交');
    }),
    // 新增-取消
    Bus.$on('addCancel',()=>{
      this.dialogAdd = false;
      console.log('新增-取消');
    }),
    // 编辑-提交
    Bus.$on('editSubmit',()=>{
      this.dialogEdit = false;
      console.log('编辑-提交');
    }),
    // 编辑-取消
    Bus.$on('editCancel',()=>{
      this.dialogEdit = false;
      console.log('编辑-取消');
    })
    
  },
  watch:{
    pageNo:function(val){
      this.getList();
    }
  },
  methods:{
    // 查询列表
    getList:function(){
      this.tableData=[];
      for(var i=0;i<10;i++){
        this.tableData.push({ data: '模拟' + Math.floor(Math.random() * 10000) });
      }
    },
    // 查看
    detail:function(item){
      this.getBusinessDetail();
      this.dialogDetail = true;
    },
    // 编辑
    edit:function(item){
      this.getBusinessDetail();
      this.dialogEdit = true;
    },
    // 经营信息
    runInfo:function(item){
      this.getRunInfo();
      this.dialogRunInfo = true;
    },
    //获取详情数据
    getBusinessDetail:function(){
      this.itemDetail = {data1:'模拟数据' + Math.floor(Math.random() * 10000)}
    },
    //获取经营信息
    getRunInfo:function(){
      this.runInfoDetail = {data:'模拟数据' + Math.floor(Math.random() * 10000)}
    }
  }
}
</script>
