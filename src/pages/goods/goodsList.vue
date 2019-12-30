<template>
  <div class="goodsList">
    <search></search>

    <!-- 表格展示 -->
    <div class="table_box">
      <!-- -仓库中 -->
      <el-table v-if="stateTab == '0'" key="first" id="" :data="tableData" style="width: 100%" :border='true' size="mini" :stripe="true">
        <el-table-column type="index" label="序号" width="50" align="center"></el-table-column>
        <el-table-column prop="data" label="结算编号"     align="center"></el-table-column>
        <el-table-column prop="data" label="订单编号"    align="center"></el-table-column>
        <el-table-column prop="data" label="商家名称"     align="center"></el-table-column>
        <el-table-column prop="data" label="应结算金额"   align="center"></el-table-column>
        <el-table-column prop="data" label="结算类型"    align="center"></el-table-column>
        <el-table-column prop="data" label="操作时间"    align="center"></el-table-column>
        <el-table-column label="操作" width="170"        align="center">
          <template slot-scope="scope">
            <el-button @click.native.prevent="tally(tableData[scope.$index])" type="text" size="mini">结算</el-button>
          </template>
        </el-table-column>
      </el-table>

      <!-- -出售中 -->
      <el-table v-if="stateTab == '1'" key="second" id="" :data="tableData" style="width: 100%" :border='true' size="mini" :stripe="true">
        <el-table-column type="index" label="序号" width="50" align="center"></el-table-column>
        <el-table-column prop="data" label="商品编号" align="center"></el-table-column>
        <el-table-column prop="data" label="商家名称" align="center"></el-table-column>
        <el-table-column label="商品/价格" align="center" width="240">
          <template slot-scope="scope">
            <div class="goodsInfo">
              <div class="good_img"><img src="../../assets/imgs/img.jpg"></div>
              <div>
                <p class="name">投资金条{{tableData[scope.$index].data}}</p>
                <p class="size">￥8899.00</p>
              </div>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="data" label="访客数" align="center"></el-table-column>
        <el-table-column prop="data" label="浏览量" align="center"></el-table-column>
        <el-table-column prop="data" label="库存" align="center"></el-table-column>
        <el-table-column prop="data" label="总销量" align="center"></el-table-column>
        <el-table-column prop="data" label="创建时间" align="center"></el-table-column>
        <el-table-column label="操作" width="170" align="center">
          <template slot-scope="scope">
            <el-button @click.native.prevent="detail(tableData[scope.$index])" type="text" size="mini">查看</el-button>
          </template>
        </el-table-column>
      </el-table>

      <!-- 分页 -->
      <div class="page_box">
        <el-pagination :current-page.sync="pageNo" :page-size="pageSize" layout="prev, pager, next, jumper" :total="tableDataTotal"  background>
        </el-pagination>
      </div>
    </div>

    <!-- 查看详情 -->
    <el-dialog class="detail_dialog" title="商品信息" top="10vh" :visible.sync="dialogDetail" width="1000px">
      <goods-detail :detail="goodsDetail"></goods-detail>
    </el-dialog>

  </div>
</template>

<script>
import searchComponent from '../../components/search/searchGoods.vue'
import goodsDetail from '../../components/detail/goodsDetail.vue'
import Bus from '../../assets/utils/eventBus'

export default {
  data(){
    return {
      pageNo:1,
      pageSize:10,
      tableDataTotal:20,
      tableData:[],
      stateTab:'1',      //商品状态
      dialogDetail:false,
      goodsDetail:{},       //商品详情
    }
  },
  components:{
    search:searchComponent,
    goodsDetail:goodsDetail,
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
    // 状态改变  出售中、仓库中
    Bus.$on('stateChange',(state)=>{
      console.log('状态改变'+state);
      this.pageNo = 1;
      this.stateTab = state;
      this.getList();
    });

    


    
  },
  methods:{

    
    // 查看
    detail:function(item){
      this.dialogDetail = true;
      this.getDetail();
    },


    // 查询列表
    getList:function(){
      this.tableData=[];
      for(var i=0;i<10;i++){
        this.tableData.push({ data: '模拟' + Math.floor(Math.random() * 10000) });
      }
    },
    // 获取商品详情
    getDetail:function(){
      this.goodsDetail = {data1:'模拟数据' + Math.floor(Math.random() * 10000)}
    },

  }
}
</script>

<style lang="less">
  .goodsList{
    .goodsInfo{position:relative;padding-left:60px;height:50px;
      .good_img{height:50px;width:50px;position: absolute;left:0px;top:0px;
        img{width: 100%;height:100%;}
      }
      .name,.size{width:100%;overflow: hidden; text-overflow: ellipsis; white-space: nowrap;}
      .size{margin-top:5px;}
    }
  }
</style>

