<template>
  <div>
    <!-- 4. 完成訂單 -->
    <p>完成訂單</p>
  </div>
  <!-- 訂單表格 -->
  <div class="bg-light pt-5 pb-7 mt-5">
    <div class="container">
      此為您的訂單編號 {{ orderId }}
    </div>
    <p>該頁將在 <span>{{ count }}</span> 秒後自動跳轉 </p>
    <RouterLink to="/">點擊跳轉</RouterLink>
  </div>
</template>

<script>
// import cartStore from '../../store/UserCartStore'
// import { mapActions, mapState } from 'pinia'
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
  methods: {
    // 倒數功能
    countDown () {
      // 執行一次，count減1
      this.count--
      if (this.count === 0) {
        this.$router.push('/')
      }
      // 每秒執行一次
      setTimeout(() => {
        this.countDown()
      }, 1000)
    },
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
    this.countDown()
  }
}

</script>
