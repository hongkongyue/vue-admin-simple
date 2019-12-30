import { } from '../api/api.js'

const USERLIST = 'userList';
const USERSEARCHPARAMS = 'userSearchParams';
const USERDETAIL = 'userDetail';

let user = {
  state: {
    userList: [],      //用户列表数据
    userSearchParams: {},      //查询条件
    userDetail:{},    //用户详情
    
  },
  actions: {
    // 搜索首页数据
    getUserList(store, params) {
      console.log(params);
      let data = [{ data: '用户' + Math.floor(Math.random() * 10000) }, { data: '用户' + Math.floor(Math.random() * 10000) }];
      store.commit('userList', data);
    },
    // 获取用户详情
    getUserDetail(store,params){
      console.log(params);
      let data = { data: '详情' + Math.floor(Math.random() * 10000),address:[{local:'地址' + Math.floor(Math.random() * 10000)},{local:'地址' + Math.floor(Math.random() * 10000)}] };
      store.commit('userDetail', data);
    }
  },
  mutations: {
    //用户列表数据
    [USERLIST](state, Payload) {
      state.userList = Payload;
    },
    //查询条件
    [USERSEARCHPARAMS](state, Payload) {
      state.userList = Payload;
    },
    //用户详情
    [USERDETAIL](state, Payload) {
      state.userDetail = Payload;
    }
  }
};

export default user;