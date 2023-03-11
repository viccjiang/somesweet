<template>
  <div ref="coupon" role="alert" aria-live="assertive" aria-atomic="true" class="toast ms-5 position-absolute position-fixed bottom-5 left-10" style="width:300px;z-index:1999" data-bs-autohide="true">
    <!-- <div class="toast-header">
      <img src="" class="rounded me-2" alt="">
      <strong class="me-auto">領取優惠碼</strong>
      <small>限時限量倒數中</small>
      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div> -->
    <div class="toast-body" >
      <button type="button" class="btn-close float-end" data-bs-dismiss="toast" aria-label="Close"></button>
      <div class="d-flex justify-content-center d-flex align-items-center">
        <img src="https://pic.sopili.net/pub/emoji/noto-emoji/png/128/emoji_u1f449.png" alt="複製優惠碼" width="20"
          height="20" />
        <span class="ms-2" id="coupon_save">2023</span>
        <button @click="copyCouponCode" class="coupon btn btn-outline-primary ms-3 btn-sm" id="coupon_btn">
          複製優惠碼
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Toast from 'bootstrap/js/dist/toast'

export default {
  data () {
    return {
      toast: ''
    }
  },
  methods: {
    copyCouponCode () {
      // 舊的寫法已淘汰 execCommand
      // 新的寫法 navigator.clipboard
      const select = (DOM) => document.querySelector(DOM)
      select('#coupon_btn').addEventListener('click', () => {
        navigator.clipboard.writeText(select('#coupon_save').textContent)
        this.showAlert()
      })
    },
    showAlert () {
      const Toast = this.$swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', this.$swal.stopTimer)
          toast.addEventListener('mouseleave', this.$swal.resumeTimer)
        }
      })
      Toast.fire({
        icon: 'success',
        title: '優惠碼複製成功'
      })
    },
    showCoupon () {
      this.toast.show()
    }
  },
  mounted () {
    this.copyCouponCode()
    this.toast = new Toast(this.$refs.coupon)
    // this.showCoupon()
  }
}
</script>

<style scoped>
</style>
