/*
 * @Author       : zhucaiyun1@xdf.cn
 * @Date         : 2022-05-19 15:10:22
 * @LastEditors  : zhucaiyun1@xdf.cn
 * @LastEditTime : 2022-05-19 15:12:09
 * @Description  : 描述信息
 */
import Vue from 'vue'
declare class EmployeeQuery extends Vue { 
  name: string
  selected: number
  department: {
    id: number,
    name: string
  }[]
  query():void
}
export as namespace EmployeeQuery

export = EmployeeQuery