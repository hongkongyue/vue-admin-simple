<template>
  <div id="index">
    <el-container>
      <!-- 顶部 -->
      <el-header class="clearfix">
        <div class="fl logo">
          GES-后台管理系统
        </div>
        <div class="fr user">
          <el-button size="mini" type="danger" @click="login">立即登录</el-button>

          <el-dropdown @command="adminSet">
            <span class="el-dropdown-link">
              <span class="userPic"></span>
              超级管理员
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu class="admin_set" slot="dropdown">
              <el-dropdown-item command="loginOut">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>
      <el-container>
        <!-- 侧边导航 -->
        <el-aside>
          <el-row class="tac">
            <el-col :span="24">
              <!-- <h5>自定义颜色</h5> -->
              <el-menu :default-active="activePage" class="el-menu-vertical-demo" @select="selectOpen" background-color="#394a59" text-color="#fff"
                active-text-color="#ffd04b" :unique-opened="true" :router="true">
                <!-- 首页 -->
                <el-menu-item :index="homeSrc" >
                    <i class="el-icon-menu"></i>
                    <span slot="title">{{homeName}}</span>
                </el-menu-item>
                <el-submenu :index="itemA.name" class="level_1" v-for="(itemA,indexA) in menuData" :key="indexA">
                  <template slot="title">
                    <span>{{itemA.name}}</span>
                  </template>
                  <div v-for="(itemB,indexB) in itemA.childList" :key="indexB">
                      <el-menu-item v-if="!itemB.childList" :index="itemB.url" @click="goPage(itemB)">{{itemB.name}}</el-menu-item>
                      <el-submenu v-if="itemB.childList" :index="itemB.url" class="level_2">
                        <template slot="title">{{itemB.name}}</template>
                        <el-menu-item :index="itemC.url"  v-for="(itemC,indexC) in itemB.childList" :key="indexC" @click="goPage(itemC)">{{itemC.name}}</el-menu-item>
                      </el-submenu>
                  </div>
                </el-submenu>

              </el-menu>
            </el-col>
          </el-row>

        </el-aside>

        <!-- 主体部分 -->
        <el-main>
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item v-for="(item,index) in breadList" :key="index" v-if="item.meta.name!=''" :to="{ path: item.path }">{{item.meta.name}}</el-breadcrumb-item>
          </el-breadcrumb>
          <div class="content"><router-view></router-view></div>
          
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
// 模拟左侧菜单数据
var menuData = [
  {
    id: 1,
    name: "用户管理",
    sort: 1,
    childList: [
      {
        id: 2,
        name: "用户列表",
        url: "/user/userList"
      }
    ]
  },
  {
    id: 1,
    name: "商家管理",
    sort: 1,
    childList: [
      {
        id: 2,
        name: "商家列表",
        url: "/business/businessList"
      },
      {
        id: 3,
        name: "门店列表",
        url: "/business/shopList"
      }
    ]
  },
  {
    id: 1,
    name: "订单管理",
    sort: 1,
    childList: [
      {
        id: 2,
        name: "商品订单",
        url: "/order/goodsOrderList"
      },
      {
        id: 2,
        name: "自提订单",
        url: "/order/takeTheirList"
      },
      {
        id: 2,
        name: "买金订单",
        url: "/order/buyGoldList"
      },
      {
        id: 2,
        name: "卖金订单",
        url: "/order/sellGoldList"
      }
    ]
  },
  {
    id: 1,
    name: "财务管理",
    sort: 1,
    childList: [
      {
        id: 2,
        name: "结算订单",
        url: "/finance/tallyOrder"
      },
      {
        id: 2,
        name: "支付订单",
        url: "/finance/payOrder"
      },
      {
        id: 2,
        name: "提现管理",
        url: "/finance/withdraw"
      },
      {
        id: 2,
        name: "账户资金",
        url: "/finance/account"
      }
    ]
  },
  {
    id: 1,
    name: "商品管理",
    sort: 1,
    childList: [
      {
        id: 2,
        name: "商品列表",
        url: "/goods/goodsList"
      },
      {
        id: 2,
        name: "类目管理",
        url: "/goods/typeList"
      }
    ]
  },
  {
    id: 1,
    name: "运营管理",
    sort: 1,
    childList: [
      {
        id: 2,
        name: "轮播图",
        url: "/operate/slideList"
      },
      {
        id: 2,
        name: "平台公告",
        url: "/operate/informList"
      },
      {
        id: 2,
        name: "资讯",
        url: "/operate/newsList"
      },
      {
        id: 2,
        name: "银行列表",
        url: "/operate/bankList"
      },
      // {
      //   id: 2,
      //   name: "搜索设置",
      //   url: "/operate/searchSet"
      // },
      // {
      //   id: 2,
      //   name: "商品推荐",
      //   url: "/operate/recommend"
      // },
      // {
      //   id: 2,
      //   name: "首页设置",
      //   url: "/operate/homeSet"
      // }
    ]
  }
];

import { getHomeInfo } from "../api/api.js";
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      // 配置首页信息，和tab默认首页信息
      activePage: this.$route.path, //默认打开的页面-首页
      homeName  : "会员管理",         // 首页名称
      homeSrc   : "/",
      menuData: menuData, //菜单数据
      breadList: this.$route.matched, //面包屑数据
    };
  },
  watch:{
    $route:function(){      
      this.breadList = this.$route.matched;
    }
  },
  computed: {
    // 获取store中数据的两种方式
    ...mapState({
      homeInfo: state => state.home.homeInfo
    }),
    // test:function(){
    //   return this.$store.state.home.homeInfo
    // }

    //获取派生状态
    ...mapGetters([])
  },
  mounted: function() {
    
    this.getHomeInfo(this);
  },
  methods: {
    ...mapActions([
      "getHomeInfo" // 将 `this.getHomeInfo()` 映射为 `this.$store.dispatch('getHomeInfo')`
    ]),
    //控制右侧管理员功能跳转
    adminSet: function(command) {
      if (command == "loginOut") {
        this.$message("退出登录");
      }
    },
    // 左侧菜单路由跳转
    goPage: function(item) {
      // console.log(item);
      // this.$router.push({ path: item.url });
    },
    // 菜单激活回调	index: 选中菜单项的 index, indexPath: 选中菜单项的 index path
    selectOpen: function(index, path) {
      // console.log(index,path);
    },
    login: function() {
      this.$message("立即登录");
    }
  }
};
</script>

<style lang="less">
#index {
  height: 100%;
  .content {
    padding: 15px;
  }
  .el-main{padding:0px;}
  .el-breadcrumb{padding:8px 15px;background-color:#eaeaea; }
  .el-container {
    height: 100%;
  }
  .el-header {
    background: #1a2732;
    color: #fff;
  }
  .el-header .logo {
    line-height: 60px;
    font-size: 18px;
  }
  .el-header .user {
    height: 100%;
    margin-right: 30px;
  }
  .el-header .user .el-dropdown {
    height: 100%;
    color: #fff;
    margin-left: 40px;
  }
  .el-header .user .userPic {
    display: inline-block;
    width: 33px;
    height: 33px;
    border: 1px solid #fff;
    position: relative;
    top: 13px;
    margin-right: 5px;
    border-radius: 50%;
    background: url(../assets/imgs/img.jpg) center center no-repeat;
    background-size: 100% auto !important;
  }
  .el-header .user .el-dropdown-link {
    height: 100%;
    display: inline-block;
  }
  .admin_set {
    width: 150px;
  }

  .el-aside {
    width: 180px !important;
    background: #394a59;
  }
  .el-aside .el-menu {
    border-right: none;
  }
  .el-submenu .el-menu-item {
    min-width: auto !important;
  }
  .el-aside .el-submenu.is-opened .el-submenu__title {
    background: linear-gradient(#334556, #2c4257), #2a3f54;
  }
  .level_1.is-active {
    border-right: 5px solid #67c23a;
  }
  .level_1.is-opened {
    border-right: 5px solid #67c23a;
  }
  /* .el-aside .el-submenu .el-menu-item{min-width:180px !important;border-right:5px solid #1ABB9C;} */
  /* .el-aside .el-submenu.is-active .el-submenu__title,.el-aside .el-menu-item.is-active{border-right:5px solid rgb(255, 208, 75);} */
  .el-aside .el-submenu.is-active.is-opened .el-submenu__title {
    border-right: none;
  }
  .el-menu-item,.el-submenu__title{height:50px;line-height:50px;}
}
</style>

