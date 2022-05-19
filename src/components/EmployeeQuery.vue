<!--
 * @Author       : zhucaiyun1@xdf.cn
 * @Date         : 2022-05-19 10:42:54
 * @LastEditors  : zhucaiyun1@xdf.cn
 * @LastEditTime : 2022-05-19 11:36:25
 * @Description  : 描述信息
 JSX 元素隐式具有类型 "any"，因为不存在接口 "JSX.IntrinsicElements"
-->
<template>
  <div class="employee-query">
    <input type="text" v-model.trim="tempName">
    <select v-model.number="tempSelected">
      <option value="0">all</option>
      <option 
        v-for="options in department"
        :value="options.id"
        :key="options.id"
      >
        {{options.name}}
      </option>
    </select>
    <button @click="query">查询</button>
  </div>
</template>
<script lang="ts">
import {Vue, Component,Prop} from 'vue-property-decorator'
@Component
export default class EmployeeQuery extends Vue{
  @Prop({type: String, default: ''})
  name!: string

  @Prop({type: Number, default: 0})
  selected!: number

   @Prop({
        type: Array,
        default: () => []
    })
    department!: { name: string, id: number }[]
  tempName: string = this.name
  tempSelected: number = this.selected
  query() {
    this.$emit('query',{
      name: this.tempName,
      id: this.tempSelected
    })
  }
}
</script>