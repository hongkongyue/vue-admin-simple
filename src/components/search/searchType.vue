<template>
  <div id="" class="search">
    <!-- 搜索类目 -->
    <el-row :gutter="20">
      <el-col :span="4">
        <el-input placeholder="类目名称" v-model="formData.input1" type="text" size="small" clearable></el-input>
      </el-col>
      <el-col :span="20" class="btn_box">
        <el-button type="primary" size="small" @click="add()">新增类目</el-button>
        <el-button type="primary" size="small" @click="search()">查询</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Bus from "../../assets/utils/eventBus";
export default {
  data() {
    return {
      formData: {
        input1: "",
        input2: "",
      },
    };
  },
  mounted: function() {
  },
  methods: {
    add: function() {
      Bus.$emit("add", '');
    },
    search: function() {
      Bus.$emit("search", this.formData);
    },
  }
};
</script>

