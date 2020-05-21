import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tableData: [] //定义表格数据
  },
  mutations: {
    // 获取表格数据
    'FETACH_DATA' (state, action) {
      console.log(action)
      state.tableData = action
    }
  },
  actions: {
   // 获取表格数据
   'FETACH_TABLE_DATA' ({ commit }) {
     axios.get('http://api.baxiaobu.com/index.php/home/v5/findUser')
       .then(res => {
         commit('FETACH_DATA', res.data.users)
       })
   }
  },
  modules: {
  }
})
