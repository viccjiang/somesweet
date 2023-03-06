<template>
  <!-- 1. 購物車(確認訂單) -->
  <div></div>
  <GoTop></GoTop>
  <div ref="coupon" role="alert" aria-live="assertive" aria-atomic="true" class="toast ms-5" data-bs-autohide="false">
  <div class="toast-header">
    <img src="" class="rounded me-2" alt="">
    <strong class="me-auto">領取優惠碼</strong>
    <small>限時限量倒數中</small>
    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
  <div class="toast-body">
    code : XXXX
  </div>
</div>
  <div class="">

    <PopoverComponent></PopoverComponent>
    <p>cart</p>
  </div>
</template>

<script>
import Toast from 'bootstrap/js/dist/toast'
import PopoverComponent from '../../components/PopoverComponent.vue'
import GoTop from '../../components/GoTop.vue'

export default {
  data () {
    return {
      toast: ''
    }
  },
  components: {
    PopoverComponent,
    GoTop
  },
  mounted () {
    this.toast = new Toast(this.$refs.coupon)
    this.toast.show()
  }
}
</script>

<style scoped></style>
