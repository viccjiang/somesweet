<template>
  <!-- 1. 購物車(確認訂單) -->
  <GoTop></GoTop>
  <div class="home">

    <PopoverComponent></PopoverComponent>
    <p>cart</p>
  </div>
</template>

<script>
import PopoverComponent from '../../components/PopoverComponent.vue'
import GoTop from '../../components/GoTop.vue'

export default {
  components: {
    PopoverComponent,
    GoTop
  }
}
</script>

<style scoped>
</style>
