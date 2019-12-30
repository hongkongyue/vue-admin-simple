<template>
  <div class="typeList">
    <search></search>

    <!-- 表格展示 -->
    <div class="table_box">
      <!-- -仓库中 -->
      <el-table key="first" id="" :data="tableData" style="width: 100%" :border='true' size="mini" :stripe="true">
        <el-table-column type="index" label="序号" width="50" align="center"></el-table-column>
        <el-table-column prop="data" label="类目名称" align="center"></el-table-column>
        <el-table-column prop="data" label="排序" align="center"></el-table-column>
        <el-table-column label="操作" width="170" align="center">
          <template slot-scope="scope">
            <el-button @click.native.prevent="edit(tableData[scope.$index])" type="text" size="mini">编辑</el-button>
            <el-button @click.native.prevent="del(tableData[scope.$index])" type="text" size="mini">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <div class="page_box">
        <el-pagination :current-page.sync="pageNo" :page-size="pageSize" layout="prev, pager, next, jumper" :total="tableDataTotal"  background>
        </el-pagination>
      </div>
    </div>

    <!-- 新增类目 -->
    <el-dialog class="add_edit_dialog" title="新增类目" top="10vh" :visible.sync="dialogAdd" width="1000px">
      <edit-type></edit-type>
    </el-dialog>

    <!-- 编辑类目 -->
    <el-dialog class="add_edit_dialog" title="编辑类目" top="10vh" :visible.sync="dialogEdit" width="1000px">
      <edit-type type="edit" :oldInfo="typeDetail"></edit-type>
    </el-dialog>

  </div>
</template>

<script>
import searchComponent from '../../components/search/searchType.vue'
import editTypeComponent from '../../components/addAndEdit/editType.vue'
import Bus from '../../assets/utils/eventBus'

export default {
  data(){
    return {
      pageNo:1,
      pageSize:10,
      tableDataTotal:20,
      tableData:[],
      dialogAdd:false,
      dialogEdit:false,
      typeDetail:{},
    }
  },
  components:{
    search:searchComponent,
    editType:editTypeComponent
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
    // 新增
    Bus.$on('add',params=>{
      console.log('新增'+params);
      this.dialogAdd = true;
    });
    // 新增提交
    Bus.$on('addSubmit',params =>{
      console.log('新增提交'+params);
      this.dialogAdd = false;
      this.getList();
    })
    // 新增取消
    Bus.$on('addCancel',params =>{
      console.log('新增取消'+params);
      this.dialogAdd = false;
    }),
    // 编辑提交
    Bus.$on('editSubmit',params =>{
      console.log('编辑提交'+params);
      this.dialogEdit = false;
      this.getList();
    })
    // 编辑取消
    Bus.$on('editCancel',params =>{
      console.log('编辑取消'+params);
      this.dialogEdit = false;
    })
    


    
  },
  methods:{
    // 编辑
    edit:function(item){
      console.log('编辑'+item);
      this.getDetail();
      this.dialogEdit = true;
    },
    // 删除
    del:function(item){
      console.log('删除'+item);
    },


    // 查询列表
    getList:function(){
      this.tableData=[];
      for(var i=0;i<10;i++){
        this.tableData.push({ data: '模拟' + Math.floor(Math.random() * 10000) });
      }
    },
    // 获取类目详情
    getDetail:function(){
      this.typeDetail = {data1:'模拟数据' + Math.floor(Math.random() * 10000)}
    },
  }
}
</script>

<style lang="less">

</style>

