const index = r => require.ensure([], () => r(require('../pages/index.vue')), 'index');
const home = r => require.ensure([], () => r(require('../pages/home.vue')), 'index');
// 用户管理
const usrList = r => require.ensure([], () => r(require('../pages/user/userList.vue')), 'usrList');
// 商家管理
const businessList = r => require.ensure([], () => r(require('../pages/business/businessList.vue')), 'businessList');
const shopList = r => require.ensure([], () => r(require('../pages/business/shopList.vue')), 'shopList');
// 订单管理
const goodsOrderList = r => require.ensure([], () => r(require('../pages/order/goodsOrderList.vue')), 'goodsOrderList');
const takeTheirList = r => require.ensure([], () => r(require('../pages/order/takeTheirList.vue')), 'takeTheirList');
const buyGoldList = r => require.ensure([], () => r(require('../pages/order/buyGoldList.vue')), 'buyGoldList');
const sellGoldList = r => require.ensure([], () => r(require('../pages/order/sellGoldList.vue')), 'sellGoldList');
// finance    财务管理
const tallyOrder = r => require.ensure([], () => r(require('../pages/finance/tallyOrder.vue')), 'tallyOrder');
const payOrder = r => require.ensure([], () => r(require('../pages/finance/payOrder.vue')), 'payOrder');
const withdraw = r => require.ensure([], () => r(require('../pages/finance/withdraw.vue')), 'withdraw');
const account = r => require.ensure([], () => r(require('../pages/finance/account.vue')), 'account');
// goods    商品管理
const goodsList = r => require.ensure([], () => r(require('../pages/goods/goodsList.vue')), 'goodsList');
const typeList = r => require.ensure([], () => r(require('../pages/goods/typeList.vue')), 'typeList');
// operate    运营管理
const slideList = r => require.ensure([], () => r(require('../pages/operate/slideList.vue')), 'slideList');
const informList = r => require.ensure([], () => r(require('../pages/operate/informList.vue')), 'informList');
const newsList = r => require.ensure([], () => r(require('../pages/operate/newsList.vue')), 'newsList');
const bankList = r => require.ensure([], () => r(require('../pages/operate/bankList.vue')), 'bankList');
const searchSet = r => require.ensure([], () => r(require('../pages/operate/searchSet.vue')), 'searchSet');
const recommend = r => require.ensure([], () => r(require('../pages/operate/recommend.vue')), 'recommend');
const homeSet = r => require.ensure([], () => r(require('../pages/operate/homeSet.vue')), 'homeSet');



let routes = [
  {
    path:'/',     //首页
    component:index,
    meta:{
      name:'首页'
    },
    children:[
      {
        path:'/',
        meta:{
          name:''
        },
        component:home
      }
    ]
  },
  // 用户管理
  {
    path:'/',
    component:index,
    meta:{
      name:'用户管理'
    },
    children:[
      {
        path:'/user/userList',
        meta:{
          name:'用户列表'
        },
        component:usrList
      }
    ]
  },
  // 商家管理
  {
    path:'/',
    component:index,
    meta:{
      name:'商家管理'
    },
    children:[
      {
        path:'/business/businessList',
        meta:{
          name:'商家列表'
        },
        component:businessList
      },
      {
        path:'/business/shopList',
        meta:{
          name:'门店管理'
        },
        component:shopList
      }
    ]
  },
  // 订单管理
  {
    path:'/',
    component:index,
    meta:{
      name:'订单管理'
    },
    children:[
      {
        path:'/order/goodsOrderList',
        meta:{
          name:'商品订单'
        },
        component:goodsOrderList
      },
      {
        path:'/order/takeTheirList',
        meta:{
          name:'自提订单'
        },
        component:takeTheirList
      },
      {
        path:'/order/buyGoldList',
        meta:{
          name:'买金订单'
        },
        component:buyGoldList
      },
      {
        path:'/order/sellGoldList',
        meta:{
          name:'卖金订单'
        },
        component:sellGoldList
      }
    ]
  },
  // 财务管理
  {
    path:'/',
    component:index,
    meta:{
      name:'财务管理'
    },
    children:[
      {
        path:'/finance/tallyOrder',
        meta:{
          name:'结算订单'
        },
        component:tallyOrder
      },
      {
        path:'/finance/payOrder',
        meta:{
          name:'支付订单'
        },
        component:payOrder
      },
      {
        path:'/finance/withdraw',
        meta:{
          name:'提现管理'
        },
        component:withdraw
      },
      {
        path:'/finance/account',
        meta:{
          name:'账户资金'
        },
        component:account
      }
    ]
  },
  // 商品管理
  {
    path:'/',
    component:index,
    meta:{
      name:'商品管理'
    },
    children:[
      {
        path:'/goods/goodsList',
        meta:{
          name:'商品列表'
        },
        component:goodsList
      },
      {
        path:'/goods/typeList',
        meta:{
          name:'类目管理'
        },
        component:typeList
      }
    ]
  },
  // 运营管理
  {
    path:'/',
    component:index,
    meta:{
      name:'运营管理'
    },
    children:[
      {
        path:'/operate/slideList',
        meta:{
          name:'轮播图列表'
        },
        component:slideList
      },
      {
        path:'/operate/informList',
        meta:{
          name:'平台通知'
        },
        component:informList
      },
      {
        path:'/operate/newsList',
        meta:{
          name:'平台公告'
        },
        component:newsList
      },
      {
        path:'/operate/bankList',
        meta:{
          name:'银行列表'
        },
        component:bankList
      },
      {
        path:'/operate/searchSet',
        meta:{
          name:'搜索设置'
        },
        component:searchSet
      },
      {
        path:'/operate/recommend',
        meta:{
          name:'商品推荐'
        },
        component:recommend
      },
      {
        path:'/operate/homeSet',
        meta:{
          name:'首页设置'
        },
        component:homeSet
      },
    ]
  }
];
export default routes;