/*
 * @Author       : zhucaiyun1@xdf.cn
 * @Date         : 2022-05-18 17:42:24
 * @LastEditors  : zhucaiyun1@xdf.cn
 * @LastEditTime : 2022-05-19 11:35:21
 * @Description  : 描述信息
 */
import Vue from 'vue'
import EmployeeQuery from './components/EmployeeQuery.vue'
let app1 = new Vue({
  el: '#app',
  components: {EmployeeQuery},
  data: {
    list: [
      { id: 1, name: 'it' },
      {id:2,name:'hr'},
      {id:3,name:'cooker'}
    ],

  },
  methods: {
    getParam: function (param: any) { 
      console.log(param)
    }
  },
  template: `<EmployeeQuery @query="getParam" :department="list"/>`
})