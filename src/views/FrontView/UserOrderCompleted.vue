<template>
  <UserCartStepComponent></UserCartStepComponent>
  <div class="container mb-10">
    <!-- 4. 完成訂單 -->

    <div class="row justify-content-center">
      <div class="col-lg-8 bg-white py-5 px-2 px-lg-3 border rounded-5">
        <div class="text-center">
          <h2 class="d-flex flex-column mb-3"><span class="text-success fs-6 mb-2"><i
                class="bi bi-check-circle fs-1"></i></span>
            訂單支付完成 </h2>
          <div class="fs-3 text-secondary mb-4">
            <h5 class="mb-10">— 感謝您的訂購 —</h5>
            <p class="fs-4 mb-10">此為您的訂單編號 : {{ orderId }}</p>
            <p class="fs-6"> 從備貨到寄出商品為 7 個工作天（不包含假日） </p>
            <p class="fs-6 mb-10">再請留意簡訊通知</p>
          </div><a href="#/products" class=" btn btn-primary px-5 py-2">繼續選購</a>
        </div>
      </div>
    </div>

    <!-- <p>該頁將在 <span>{{ count }}</span> 秒後自動跳轉 </p>
    <RouterLink to="/">點擊跳轉</RouterLink> -->
  </div>
</template>

<script>
// import cartStore from '../../store/UserCartStore'
// import { mapActions, mapState } from 'pinia'
import UserCartStepComponent from '../../components/UserCart/UserCartStepComponent.vue'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
export default {
  data () {
    return {
      count: 10,
      order: {
        user: {}
      },
      orderId: ''
      // cart: []
    }
  },
  components: {
    UserCartStepComponent
  },
  methods: {
    // 倒數功能
    // countDown () {
    //   // 執行一次，count減1
    //   this.count--
    //   if (this.count === 0) {
    //     this.$router.push('/')
    //   }
    //   // 每秒執行一次
    //   setTimeout(() => {
    //     this.countDown()
    //   }, 1000)
    // },
    getOrder () {
      const url = `${VITE_APP_URL}api/${VITE_APP_PATH}/order/${this.orderId}`
      this.$http.get(url).then((res) => {
        if (res.data.success) {
          this.order = res.data.order
          console.log(this.order)
        }
      })
    },
    // getCarts () {
    //   this.$http.get(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/cart`)
    //     .then(res => {
    //       this.cart = res.data.data
    //       console.log('購物車:', this.cart)
    //     })
    // },
    payOrder () {
      const url = `${VITE_APP_URL}v2/api/${VITE_APP_PATH}/pay/${this.orderId}`
      this.$http.post(url).then((res) => {
        if (res.data.success) {
          this.order.is_paid = true
          this.$router.push('/order_completed')
          this.getOrder()
          // this.getCarts()
        }
      })
    }
  },
  created () {
    this.orderId = this.$route.query.id
    console.log(this.orderId)
    this.getOrder()
  },
  mounted () {
    // this.countDown()
  }
}

</script>
