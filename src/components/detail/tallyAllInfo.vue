<template>
  <!-- 批量结算信息 -->
  <div class="detail">
    <section class="tallyAllInfoComponent">
      <el-row :gutter="20">
        <el-col :span="24"><span class="name">交易时间:</span>{{tallInfo.data}}</el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="2"><span class="name">结算明细:</span></el-col>
        <el-col :span="22">
          <table class="tallyDetail">
            <tr>
              <td>商家</td>
              <td>项目</td>
              <td>购买结算</td>
              <td>退货结算</td>
              <td>合计</td>
            </tr>
            <template v-for="(item,index) in tallInfo.arr">
              <tr :key="index+'a'">
                <td rowspan="2">商家{{item.data1}}</td>
                <td>数量</td>
                <td>{{item.data1}}</td>
                <td>{{item.data1}}</td>
                <td>{{item.data1}}</td>
              </tr>
              <tr :key="index+'b'">
                <td>金额</td>
                <td>{{item.data1}}</td>
                <td>{{item.data1}}</td>
                <td>{{item.data1}}</td>
              </tr>
            </template>
          </table>
        </el-col>
      </el-row>
    </section>

    <div style="margin-top:40px;padding-left:110px;">
      <el-button type="default" style="margin-right:20px;" @click="cancel()">取消</el-button>
			<el-button type="primary" @click="submit()">确认</el-button>
    </div>
  </div>
</template>

<script>
import Bus from '../../assets/utils/eventBus'

export default {
  props:[
    'tallInfo'
  ],
  methods:{
    //确认
    submit:function(){
      Bus.$emit('tallyAllSubmit','')
    },
    cancel:function(){
      Bus.$emit('tallyAllCancel','')
    }
  }
}
</script>

<style lang="less">
  .tallyAllInfoComponent{border:none !important;
    .tallyDetail{width:80%;margin-left:20px;margin-top:5px;
      td{text-align:center;height: 30px;border:1px solid rgb(236, 236, 236)}
    }
  }
</style>

