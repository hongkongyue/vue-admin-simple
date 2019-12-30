<template>
  <div id="shopList">
    <search></search>
    <!-- 表格展示 -->
    <div class="table_box">
      <el-table id="tabledata_show" :data="tableData" style="width: 100%" :border='true' size="mini" :stripe="true">
        <el-table-column type="index" label="序号" width="50" align="center"></el-table-column>
        <el-table-column prop="data" label="门店名称" align="center"></el-table-column>
        <el-table-column prop="data" label="所属商家" align="center"></el-table-column>
        <el-table-column prop="data" label="联系人" align="center"></el-table-column>
        <el-table-column prop="data" label="联系方式" align="center"></el-table-column>
        <el-table-column prop="data" label="操作时间" align="center"></el-table-column>
        <el-table-column label="操作" width="170" align="center">
          <template slot-scope="scope">
            <el-button @click.native.prevent="detail(tableData[scope.$index])" type="text" size="mini">查看</el-button>
            <el-button @click.native.prevent="edit(tableData[scope.$index])" type="text" size="mini">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <div class="page_box">
        <el-pagination :current-page.sync="pageNo" :page-size="pageSize" layout="prev, pager, next, jumper" :total="tableDataTotal"  background>
        </el-pagination>
      </div>
    </div>
    
    <!-- 查看信息 -->
    <el-dialog class="detail_dialog" title="门店信息" top="10vh" :visible.sync="dialogDetail" width="1000px">
      <detail :detail='shopDetail'></detail>
    </el-dialog>

    <!-- 新增门店 -->
    <el-dialog class="add_edit_dialog" title="新增门店" top="10vh" :visible.sync="dialogAdd" width="1000px">
      <edit-shop></edit-shop>
    </el-dialog>

    <!-- 编辑门店 -->
    <el-dialog class="add_edit_dialog" title="编辑门店" top="10vh" :visible.sync="dialogEdit" width="1000px">
      <edit-shop type="edit" :oldInfo="shopDetail"></edit-shop>
    </el-dialog>



  </div>
</template>


<script>
import searchComponent from '../../components/search/searchShop.vue'
import shopDetailComponent from '../../components/detail/shopDetail.vue'
import editShopComponent from '../../components/addAndEdit/editShop.vue'

import Bus from '../../assets/utils/eventBus'

export default {
  data(){
    return {
      pageNo:1,
      pageSize:10,
      tableDataTotal:20,
      tableData:[],
      dialogDetail:false,
      dialogAdd:false,
      dialogEdit:false,
      shopDetail:'',      //商品详情
      
    }
  },
  computed:{
    
  },
  components:{
    search:searchComponent,
    detail:shopDetailComponent,
    editShop:editShopComponent,
  },
  mounted:function(){
    this.getList();
    // 查询
    Bus.$on('search',(params)=>{
      console.log('查询：'+params);
      this.getList();
    });
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
    // 查看
    detail:function(item){
      this.dialogDetail = true;
      this.getShopDetail();
    },
    edit:function(item){
      this.dialogEdit = true;
      this.getShopDetail();
    },

    // 查询列表
    getList:function(){
      this.tableData=[];
      for(var i=0;i<10;i++){
        this.tableData.push({ data: '模拟' + Math.floor(Math.random() * 10000) });
      }
    },
    // 获取门店详情
    getShopDetail:function(){
      this.shopDetail = {data1:'模拟数据' + Math.floor(Math.random() * 10000)}
    },

  }
}
</script>
