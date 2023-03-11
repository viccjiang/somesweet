<template>
   <div class="card border-0 rounded-0 bg-dark text-white mb-5">
    <div class="filters" style="
          height: 200px;
          background-image: url(https://storage.googleapis.com/vue-course-api.appspot.com/jiangs2023/1678434203376.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=UBxJyY3fDcVkO7rlmRtkVyg45j7wG48MPLwbDQ%2BX%2FGOaCmLtdpV8oOg5Li8RxP8i4JL%2F2CHbUd8fVB5av4GnkIKTm99zZZxLMIA5uBy4uYlHPOTrywCh151dgfP7EEpoYrIjmJvvx65x4%2Btp3N9RhCaEutJKc8UrsgVF40cDftAknYs0ZeiX13KTKKbRQ9YvfSvkervKwDN8wVaBsFbRpXkzs34wNXn2aSC7eIo0Dw7NTzklz%2B9%2BFtG70LgsTaec5F6XA6TsDuu9hJ%2B9FGQO2pR%2BKhWjrJ5yib6ut6iDqhq%2FwubbGxMqRvot9bE8MYuODGIRM1Vqa2pb1noRJ1jLAA%3D%3D);
          background-size: cover;
          background-position: center bottom;
          background-attachment: fixed;
        " />
    <div class="card-img-overlay d-flex flex-column justify-content-center align-item-center">
      <h1 class="card-title text-center fw-bold">訂單查詢</h1>
    </div>
  </div>
  <div class="banner bg-cover">
    <div  class="container  d-flex  justify-content-center align-items-center" style="height: 500px;">
    <div class="row d-flex justify-content-center align-items-center mb-5 " >
      <label class="mb-3 text-center mt-2 fs-2 fw-bold" for="orderId">請輸入訂單編號</label>
      <div class="col d-flex justify-content-center align-items-center mb-4">
        <div class="d-flex ">
          <input style="width:300px" type="text" placeholder="請輸入訂單編號" id="orderId"
            class="input-group-text bg-light text-soft" v-model.trim="orderId" />
          <button type="button" class="ms-2 btn btn-outline-primary" @click="getOrder">送出
          </button>
        </div>
      </div>
      <div v-if="orderUser.name" class="accordion mb-5" id="accordionPanelsStayOpenExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne">
              訂單編號：{{ orderId }}
            </button>
          </h2>
          <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show"
            aria-labelledby="panelsStayOpen-headingOne">
            <div class="accordion-body">
              <ul class="list-unstyled">
                <li>購買日期：{{ create_at }}</li>
                <li>姓名：{{ orderUser.name }}</li>
                <li>電話：{{ orderUser.tel }}</li>
                <li>地址：{{ orderUser.address }}</li>
                <li>信箱：{{ orderUser.email }}</li>
                <li>付款金額：{{ queryOrder[0]?.total }}</li>
                <li>付款狀態：{{ is_paid ? '已付款' : '未付款' }}</li>
                <!-- {{ queryOrder }} -->
                <div class="d-flex justify-content-end ">
                  <a href="#" v-if="orderId" class="btn btn-soft" @click.prevent="goOrderPage">前往訂單頁面</a>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  <VueLoading :active="isLoading"></VueLoading>

</template>

<script>import VueLoading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
export default {
  data () {
    return {
      order: {},
      orderId: '',
      queryOrder: [],
      create_at: '',
      orderUser: [],
      is_paid: '',
      orderProducts: [],
      isLoading: false
    }
  },
  components: {
    VueLoading
  },
  methods: {
    getCarts () {
      this.isLoading = true
      this.$http
        .get(`${VITE_APP_URL}api/${VITE_APP_PATH}/cart`)
        .then((res) => {
          this.isLoading = false
          console.log('購物車：', res)
          this.cartData = res.data.data
        })
    },
    getOrder () {
      if (!this.orderId) {
        return
      }
      const url = `${VITE_APP_URL}api/${VITE_APP_PATH}/orders`
      this.$http.get(url).then((res) => {
        if (res.data.success) {
          this.order = res.data.orders
          console.log(this.order)
          this.filterOrder()
          this.create_at = this.queryOrder[0].create_at
          this.create_at = new Date(this.create_at * 1000).toISOString().substring(0, 10)
          this.orderUser = this.queryOrder[0].user
          this.is_paid = this.queryOrder[0].is_paid
          this.orderProducts = this.queryOrder[0].products
        }
      })
    },
    filterOrder () {
      this.queryOrder = this.order.filter((order) => order.id === this.orderId)
      console.log(this.queryOrder)
    },
    // 訂單成立，送出表單
    goOrderPage () {
      this.$router.push(`/order_payment/${this.orderId}`)
    }
  },
  created () {
    this.getOrder()
  }
}
</script>

<style lang="scss">
.check-step span {
  width: 20px;
  height: 20px;
  padding: 6px 10px;
  justify-content: center;
  background: #236f6b;
  color: #fff;
  border-radius: 50%;
  margin-bottom: 5px;
}

.step-bar {
  width: 100%;
  height: 5px;
  background: #236f6b;
}

.step-bar-none {
  width: 100%;
  height: 5px;
  background: rgba(35, 111, 107, 0.2);
}

.banner {
  background-image: url(../../assets/Group103.jpg);
}

.bg-cover {
  background-attachment: fixed;
}

.bg-cover {
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

}
</style>
