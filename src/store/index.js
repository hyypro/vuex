import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import qs from 'qs'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tableData: [], //定义表格数据
    editData: [] 
  },
  mutations: {
    // 获取表格数据
    'FETACH_DATA' (state, action) {
      state.tableData = action
    },

    'FETACH_EDIT' (state, action) {
      state.editData = action
    }
  },
  actions: {
   // 获取表格数据
   'FETACH_TABLE_DATA' ({ commit }) {
     axios.get('http://api.baxiaobu.com/index.php/home/v5/findUser')
       .then(res => {
         commit('FETACH_DATA', res.data.users)
       })
   },

   // 表格添加
   'FETACH_TABLE_ADD' (context, action) {
     axios.post('https://api.baxiaobu.com/index.php/home/v5/add', qs.stringify(action))
      .then(()=>{
        context.dispatch('FETACH_TABLE_DATA')
      })
   },

   //表格删除
   'FETACH_TABLE_DELETE' (context, action) {
    axios.post('https://api.baxiaobu.com/index.php/home/v5/deleteUser', qs.stringify({ id: action }))
    .then(()=>{
      context.dispatch('FETACH_TABLE_DATA')
    })
   },

   //表格回显
   'FETACH_EDIT_DATA' ({ commit }, action) {
    commit('FETACH_EDIT', { ...action })
   },

   //表格修改
   'FETACH_TABLE_EDIT' (context, action) {
    axios.post('http://api.baxiaobu.com/index.php/home/v5/updateUser', qs.stringify({ id: action.id, name: action.name, msg: action.msg }))
    .then(()=>{
      context.dispatch('FETACH_TABLE_DATA')
    })
   }
  },
  modules: {
  }
})
