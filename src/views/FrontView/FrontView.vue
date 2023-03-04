  <!-- 前台進入點 -->
<template>
  <FrontNavbarComponent></FrontNavbarComponent>
  <router-view></router-view>
  <FrontFooterComponent></FrontFooterComponent>
</template>

<script>
import FrontNavbarComponent from '../../components/FrontNavbarComponent.vue'
import FrontFooterComponent from '../../components/FrontFooterComponent.vue'
import { RouterView } from 'vue-router'

// 來設置 Collapse 元件
import * as bootstrap from 'bootstrap'
let collapseList = null

export default {
  data () {
    return {

    }
  },
  components: {
    // HelloWorld,
    RouterView,
    FrontNavbarComponent,
    FrontFooterComponent
  },
  mounted () {
    // 透過 router beforeEach 來設置 Collapse 元件
    collapseList = new bootstrap.Collapse(document.getElementById('navbarSupportedContent'), { toggle: false })
    this.$router.beforeEach((to, from) => {
      collapseList.hide()
    })
  }
}
</script>

<style scoped lang="scss">

</style>
