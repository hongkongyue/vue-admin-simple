<template>
  <div>
    <!-- 搜索 -->
    <search></search>

    <!-- 表格展示 -->
    <div class="table_box">
      <el-table id="tabledata_show" v-loading="tableLoading" :data="tableData" style="width: 100%" :border='true' size="mini" :stripe="true">
        <el-table-column type="index" label="序号" width="50" align="center"></el-table-column>
        <el-table-column prop="data" label="轮播图名称" align="center"></el-table-column>
        <el-table-column prop="data" label="位置" align="center"></el-table-column>
        <el-table-column prop="data" label="阅读量" align="center"></el-table-column>
        <el-table-column prop="data" label="状态" align="center"></el-table-column>
        <el-table-column prop="data" label="操作时间" align="center"></el-table-column>
        <el-table-column label="操作" width="170" align="center">
          <template slot-scope="scope">
            <el-button @click.native.prevent="edit(tableData[scope.$index])" type="text" size="mini">编辑</el-button>
            <el-button @click.native.prevent="putaway(tableData[scope.$index])" type="text" size="mini">上架</el-button>
            <el-button @click.native.prevent="soldOut(tableData[scope.$index])" type="text" size="mini">下架</el-button>
            <el-button @click.native.prevent="del(tableData[scope.$index])" type="text" size="mini">删除</el-button>
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

    <!-- dialog新增轮播 -->
    <el-dialog v-cloak class="dialog_order_check" title="新增轮播图" top="10vh" :visible.sync="dialogAdd" width="1000px">
      <edit-slide ref="addSlide"></edit-slide>
    </el-dialog>

    <!-- dialog编辑轮播 -->
    <el-dialog v-cloak class="dialog_order_check" title="编辑轮播图" top="10vh" :visible.sync="dialogEdit" width="1000px">
      <edit-slide ref="editSlide" :slide-info="slideDetail" type="edit"></edit-slide>
    </el-dialog>

  </div>
</template>

<script>
import Bus from "../../assets/utils/eventBus";
import searchSlide from "../../components/search/searchSlide.vue";
import editSlideComponent from "../../components/addAndEdit/editSlide.vue";

export default {
  data() {
    return {
      tableData: [],
      params: "", //存放最近一次的查询条件
      pageNo: 1, //表格当前页码
      pageSize: 10, //每页几条
      tableDataTotal: 40, //表格总数据数
      tableLoading: false, //表格loading
      dialogAdd: false, //新增轮播弹框
      dialogEdit: false, //编辑轮播弹框
      slideDetail: {} //编辑轮播-初数据
    };
  },
  components: {
    search: searchSlide,
    editSlide: editSlideComponent
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
    });
    // 新增-取消
    Bus.$on("addCancel", params => {
      console.log("新增-取消" + params);
      this.dialogAdd = false;
    });
    //编辑-提交
    Bus.$on("editSubmit", params => {
      console.log("编辑-提交" + params);
      this.dialogEdit = false;
    });
    // 编辑-取消
    Bus.$on("editCancel", params => {
      console.log("编辑-取消" + params);
      this.dialogEdit = false;
    });
  },
  methods: {
    // 编辑
    edit: function() {
      this.dialogEdit = true;
      this.getDetail();
    },
    del: function(item) {
      //删除
      this.$confirm("是否确认删除？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
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
      this.slideDetail = {
        data1: "模拟数据" + Math.floor(Math.random() * 10000)
      };
    }
  }
};
</script>

