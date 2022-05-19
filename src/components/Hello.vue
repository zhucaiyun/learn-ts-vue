<!--
 * @Author       : zhucaiyun1@xdf.cn
 * @Date         : 2022-05-18 18:33:17
 * @LastEditors  : zhucaiyun1@xdf.cn
 * @LastEditTime : 2022-05-18 19:22:15
 * @Description  : 描述信息
-->
<template>
  <div class="h1-blue">
    Hello {{name}}
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name:'hello',
  data() {
    return {
      name: 'vue and ts'
    }
  }
})
</script>
<style>
  .h1-blue {
    color: palevioletred;
  }
</style>