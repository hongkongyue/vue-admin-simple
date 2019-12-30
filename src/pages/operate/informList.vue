<template>
  <div>
    <!-- 搜索 -->
    <search></search>

    <!-- 表格展示 -->
    <div class="table_box">
      <el-table id="tabledata_show" v-loading="tableLoading" :data="tableData" style="width: 100%" :border='true' size="mini" :stripe="true">
        <el-table-column type="index" label="序号" width="50" align="center"></el-table-column>
        <el-table-column prop="data" label="公告名称" align="center"></el-table-column>
        <el-table-column prop="data" label="推荐状态" align="center"></el-table-column>
        <el-table-column prop="data" label="上架状态" align="center"></el-table-column>
        <el-table-column prop="data" label="新增时间" align="center"></el-table-column>
        <el-table-column prop="data" label="操作时间" align="center"></el-table-column>
        <el-table-column label="操作" width="170" align="center">
          <template slot-scope="scope">
            <el-button @click.native.prevent="detail(tableData[scope.$index])" type="text" size="mini">查看</el-button>
            <el-button @click.native.prevent="edit(tableData[scope.$index])" type="text" size="mini">编辑</el-button>
            <el-button @click.native.prevent="recommend(tableData[scope.$index])" type="text" size="mini">推荐</el-button>
            <el-button @click.native.prevent="cancelRecommend(tableData[scope.$index])" type="text" size="mini">取消推荐</el-button>
            <el-button @click.native.prevent="putaway(tableData[scope.$index])" type="text" size="mini">上架</el-button>
            <el-button @click.native.prevent="soldOut(tableData[scope.$index])" type="text" size="mini">下架</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <div class="page_box">
        <el-pagination :current-page.sync="pageNo" :page-size="pageSize" layout="prev, pager, next, jumper" :total="tableDataTotal"
          background>
        </el-pagination>
      </div>
    </div>
    


    <!-- dialog新增公告 -->
    <el-dialog v-cloak class="dialog_order_check" title="新增公告" top="10vh" :visible.sync="dialogAdd" width="1000px">
      <edit-inform></edit-inform>
    </el-dialog>
    

    <!-- dialog编辑公告 -->
    <el-dialog v-cloak class="dialog_order_check" title="编辑公告" :detail="itemDetail" top="10vh" :visible.sync="dialogEdit" width="1000px">
      <edit-inform type="edit" :detail="itemDetail"></edit-inform>
    </el-dialog>

    <!-- 公告详情 -->
    <el-dialog class="detail_dialog" title="公告详情" top="10vh" :visible.sync="dialogDetail" width="1000px">
      <detail :detail="itemDetail"></detail>
    </el-dialog>

   
  </div>
</template>

<script>
import Bus from "../../assets/utils/eventBus";
import searchInform from "../../components/search/searchInform.vue";
import detailComponent from "../../components/detail/informDetail.vue";
import editInform from "../../components/addAndEdit/editInform.vue";


export default {
  data() {
    return {
      tableData: [],
      params: "", //存放最近一次的查询条件
      pageNo: 1, //表格当前页码
      pageSize: 10, //每页几条
      tableDataTotal: 40, //表格总数据数
      tableLoading: false, //表格loading
      itemDetail:{},
      dialogAdd:false,
      dialogEdit:false,
      dialogDetail:false,
    }
  },
  components: {
    search: searchInform,
    detail:detailComponent,
    editInform:editInform,
  },
  watch: {
    pageNo: function (val, oldVal) {
      this.getList();
    }
  },
  mounted: function() {
    this.getList();
    // 查询
    Bus.$on("search", params => {
      console.log("查询" + params);
      this.getList();
    });
    // 新增
    Bus.$on("add", params => {
      console.log("新增" + params);
      this.dialogAdd = true;
    });
    // 新增-提交
    Bus.$on("addSubmit", params => {
      console.log("新增-提交" + params);
      this.dialogAdd = false;
      this.getList();
    });
    // 新增-取消
    Bus.$on("addCancel", params => {
      console.log("新增-取消" + params);
      this.dialogAdd = false;
    });
    // 编辑-提交
    Bus.$on("editSubmit", params => {
      console.log("编辑-提交" + params);
      this.dialogEdit = false;
      this.getList();
    });
    // 编辑-取消
    Bus.$on("editCancel", params => {
      console.log("编辑-取消" + params);
      this.dialogEdit = false;
    });

    


  },
  methods: {
    // 查看
    detail:function(item){
      console.log('查看'+item);
      this.dialogDetail = true;
      this.getDetail();
    },
    // 编辑
    edit:function(item){
      console.log('查看'+item);
      this.dialogEdit = true;
      this.getDetail();
    },
    recommend:function(item) {
      //推荐
      this.$confirm("是否确认推荐？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          
        })
        .catch(() => {
          
        });
    },
    cancelRecommend:function(item) {
      //取消推荐
      this.$confirm("是否确认取消推荐？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          
        })
        .catch(() => {
          
        });
    },
    putaway: function(item) {
      //上架
      this.$confirm("是否确认上架？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          
        })
        .catch(() => {
          
        });
    },
    soldOut: function(item) {
      //下架
      this.$confirm("是否确认下架？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          
        })
        .catch(() => {
          
        });
    },
    
    
    

    // 查询列表
    getList: function() {
      this.tableData = [];
      for (var i = 0; i < 10; i++) {
        this.tableData.push({
          data: "模拟" + Math.floor(Math.random() * 10000)
        });
      }
    },
    // 获取商品详情
    getDetail: function() {
      this.itemDetail = {
        data1: "模拟数据" + Math.floor(Math.random() * 10000)
      };
    }
  }
};
</script>

