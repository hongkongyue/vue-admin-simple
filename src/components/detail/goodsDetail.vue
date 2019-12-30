<template>
<!-- 商品详情 -->
  <div class="detail goodsDetail">
    <section>
      <h3>基本信息</h3>
      <div class="con">
        <el-row :gutter="20">
          <el-col :span="6"><span class="name">商品名称:</span>{{detail.data1}}</el-col>
          <el-col :span="6"><span class="name">商品类目:</span>{{detail.data1}}</el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="2"><span class="name">商品图:</span></el-col>
          <el-col :span="22" style="padding-left:20px;">
            <ul class="clearfix">
              <li v-for="index in 5" :key="index" class="fl img_box" ><img src="../../assets/imgs/img.jpg"></li>
            </ul>

          </el-col>
        </el-row>
      </div>
    </section>
    <section>
      <h3>规格价格</h3>
      <div class="con">
        <el-row :gutter="20">
          <el-col :span="2"><span class="name">规格明细:</span></el-col>
          <el-col :span="22" style="padding-left:20px;">
            <table class="table">
              <tr>
                <td v-for="n in 3" :key="n">长度</td>
                <td>价格(元)</td>
                <td>库存</td>
                <td>重量(kg)</td>
              </tr>
              <tr v-for="n in 4" :key="n">
                <td v-for="n in 3" :key="n">12</td>
                <td>200</td>
                <td>2455</td>
                <td>0.5</td>
              </tr>
            </table>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="2"><span class="name">规格图片:</span></el-col>
          <el-col :span="22" style="padding-left:20px;">
            <ul class="clearfix">
              <li v-for="index in 5" :key="index" class="fl img_box" ><img src="../../assets/imgs/img.jpg"><span class="pic_name">12cm</span></li>
            </ul>
          </el-col>
        </el-row>
      </div>
    </section>
    <section>
      <h3>其他信息</h3>
      <div class="con">
        <el-row :gutter="20">
          <el-col :span="24"><span class="name">商品状态:</span>{{detail.data1}}</el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="24"><span class="name">服务承诺:</span>{{detail.data1}}</el-col>
        </el-row>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props:[
    'detail'
  ]
}
</script>
<style lang="less">
  .goodsDetail{
    .img_box{width:100px;height:100px;margin-right:10px;margin-top:10px;text-align:center;position: relative;
      img{width:100%;height: 100%;}
      .pic_name{position:absolute;bottom:0px;left:0px;width:100%;line-height:1.5;background:rgba(0,0,0,.6);color:#fff;}
    }
    .table{width:100%;
      td{text-align:center;height: 30px;border:1px solid rgb(236, 236, 236)}
    }
  }
</style>

