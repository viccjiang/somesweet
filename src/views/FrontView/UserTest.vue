<template>
  <!-- 1. 購物車(確認訂單) -->
  <section class="gsapLoop bg-warning">
    <ul class="loop d-flex justify-content-center align-items-center">
      <li class="fs-6 text-bk-bread">
        <span> 限時領取優惠碼 2023 test</span>

      </li>
    </ul>
  </section>
  <RecommendProductsSwiper></RecommendProductsSwiper>
  <div></div>
  <GoTop></GoTop>
  <div ref="coupon" role="alert" aria-live="assertive" aria-atomic="true" class="toast ms-5" style="width:300px"
    data-bs-autohide="false">
    <div class="toast-header">
      <img src="" class="rounded me-2" alt="">
      <strong class="me-auto">領取優惠碼</strong>
      <small>限時限量倒數中</small>
      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body">
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
  <div class="">

    <PopoverComponent></PopoverComponent>
    <p>cart</p>
  </div>
</template>

<script>
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import TextPlugin from 'gsap/TextPlugin'

import Toast from 'bootstrap/js/dist/toast'
import PopoverComponent from '../../components/PopoverComponent.vue'
import GoTop from '../../components/GoTop.vue'
import RecommendProductsSwiper from '../../components/UserHome/RecommendProductsSwiper.vue'

export default {
  data () {
    return {
      toast: ''
    }
  },
  components: {
    PopoverComponent,
    GoTop,
    RecommendProductsSwiper
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
    }
  },
  mounted () {
    gsap.registerPlugin(ScrollTrigger, TextPlugin)

    // 文字無限循環
    gsap.to('.loop', {
      xPercent: '-100',
      ease: 'none',
      duration: 5,
      repeat: -1
    })
    this.copyCouponCode()
    this.toast = new Toast(this.$refs.coupon)
    this.toast.show()
  }
}
</script>

<style lang="scss">
.gsapLoop {
  height: 50px;
  overflow: hidden;
  max-width: 100%;
  overflow: hidden;
}

.loop {
  display: inline-block;
  // font-family: "Dela Gothic One";
  // font-size: 16px;
  color: #000;
  white-space: nowrap;
  height: 100%;
  letter-spacing: 10px;

}

.loop>span {
  display: inline-block;

}

</style> >
