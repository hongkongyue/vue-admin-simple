<template>
  <div class="detail goodsDetail">
    <div>
      <h5>所有规格</h5>
      <p>{{goodsAllSpecJson}}</p>
    </div><br>
    <div>
      <h5>商品列表</h5>
      <p>{{goodsList}}</p>
    </div>
    <section>
      <h3>测试编辑规格</h3>
      <div class="con">
        <table class="test_table">
          <tr>
            <td style="text-align:left;">
              <el-input v-for="(item,index) in goodsAllSpecJson" :key="index" style="width:100px;margin-right:10px;" size="mini" placeholder="规格名" v-model="item.specName"></el-input>
              <el-button v-if="goodsAllSpecJson.length<3" type="default" size="mini" @click="addSpec">添加规格</el-button>
            </td>
            <td width="100">价格</td>
            <td width="100">库存</td>
            <td width="100">重量</td>
          </tr>
          <tr v-for="(itemA,indexA) in goodsList" :key="indexA">
            <td style="text-align:left;"><el-input v-for="(itemB,indexB) in goodsAllSpecJson" :key="indexB" style="width:100px;margin-right:10px;" size="mini" placeholder="规格值" v-model="itemB.specValue[indexA]"></el-input></td>
            <td><el-input size="mini" placeholder="规格名" v-model="itemA.input1"></el-input></td>
            <td><el-input size="mini" placeholder="规格名" v-model="itemA.input2"></el-input></td>
            <td><el-input size="mini" placeholder="规格名" v-model="itemA.input3"></el-input></td>
          </tr>
        </table>

        <div style="margin-top:10px;"><el-button @click="addGoods" type="primary" size="mini">添加一行</el-button></div>

        <div style="margin-top:10px;"><el-button @click="submit" type="primary" size="mini">测试提交数据</el-button></div>


      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goodsAllSpecJson: [], //所有规格名称和值
      goodsList: [] //商品列表    [ { "specValue": [ { "name": "大小" }, { "name": "重量" }, { "name": "颜色" } ], "input1": "", "input2": "", "input3": "" }, { "specValue": [ { "name": "大小" }, { "name": "重量" }, { "name": "颜色" } ], "input1": "", "input2": "", "input3": "" } ]
    };
  },
  computed: {},
  watch: {
    // 所有规格变化
    goodsAllSpecJson: {
      handler: function(val,oldVal) {
        console.log(val);
        var _this = this;
        this.goodsList.forEach(function(ele, index){
          ele.specValue.forEach(function(ele2, index2) {
            _this.goodsList[index].specValue[index2].name =  _this.goodsAllSpecJson[index2].specName;
          });
        });
      },
      deep: true
    }
  },
  methods: {
    // 添加规格
    addSpec: function() {
      let addData = {
        specName: "",
        specValue:[]
      };
      this.goodsAllSpecJson.push(addData);
    },
    // 添加一行
    addGoods: function() {
      let addGoodsData = {
        specValue: this.goodsSpecValue(), //产品规格
        input1: "",
        input2: "",
        input3: ""
      };
      this.goodsList.push(addGoodsData);
    },

    // 提交
    submit:function(){
      let _this = this;
      this.goodsList.forEach(function(ele,index){
        ele.specValue.forEach(function(ele2, index2) {
          _this.goodsList[index].specValue[index2].value =  _this.goodsAllSpecJson[index2].specValue[index];
        });
      });
      console.log(this.goodsList);
      
    },


    // 商品列表规格
    goodsSpecValue: function() {
      let result = [];
      this.goodsAllSpecJson.forEach(ele => {
        let item = {
          name: ele.specName
        };
        result.push(item);
      });
      return result;
    }
  }
};
</script>
<style lang="less">
.test_table {
  width: 100%;
  tr {
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  }
  td {
    padding: 10px 10px;
    text-align: center;
  }
}
</style>

