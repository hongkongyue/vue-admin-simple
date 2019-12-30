import { getHomeInfo } from '../api/api.js'

const HOME_INFO = 'HOME_INFO';      //获取首页数据

let home = {
  state: {
    homeInfo: null,      //首页数据
  },
  actions: {
      // 获取首页数据
    getHomeInfo(store,_this) {
      getHomeInfo().then(res => {
        console.log(res);
        if(res.data.code=='0'){
          // _this.$message('请求成功');
        }
        store.commit('HOME_INFO', res);
      }).catch(err => {
        console.log(err);
      })
    }
  },
  mutations: {
    [HOME_INFO](state, payload) {
      state.homeInfo = payload;
    }
  }
};

export default home;