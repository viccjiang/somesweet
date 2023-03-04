<template >
  <!-- 資訊顯示區 -->
  <div class="row g-3">
    <div class="col-xl-6 col-sm-6 ">
      <div class="card">
        <div class="card-body p-3">
          <div class="row">
            <div class="col-8">
              <div class="numbers">
                <p class="text-sm mb-0 text-capitalize font-weight-bold">目前產品數 </p>
              </div>
            </div>
            <div class="col-4 text-end">
              <h5 class="font-weight-bolder mb-0">
                {{ Object.keys(products).length }}
                <!-- <span class="text-success text-sm font-weight-bolder">+55%</span> -->
              </h5>
              <!-- <p><i class="bi bi-list-ol"></i></p> -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-6 col-sm-6 ">
      <div class="card">
        <div class="card-body p-3">
          <div class="row">
            <div class="col-8">
              <div class="numbers">
                <p class="text-sm mb-0 text-capitalize font-weight-bold">目前訂單數 </p>
              </div>
            </div>
            <div class="col-4 text-end">
              <h5 class="font-weight-bolder mb-0">
                {{ orders.length }}
                <!-- <span class="text-success text-sm font-weight-bolder">+55%</span> -->
              </h5>
              <!-- <p><i class="bi bi-list-ol"></i></p> -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-6 col-sm-6 ">
      <div class="card">
        <div class="card-body p-3">
          <div class="row">
            <div class="col-8">
              <div class="numbers">
                <p class="text-sm mb-0 text-capitalize font-weight-bold">目前文章數 </p>
              </div>
            </div>
            <div class="col-4 text-end">
              <h5 class="font-weight-bolder mb-0">
                {{ articles.length }}
                <!-- <span class="text-success text-sm font-weight-bolder">+55%</span> -->
              </h5>
              <!-- <p><i class="bi bi-list-ol"></i></p> -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-6 col-sm-6 ">
      <div class="card">
        <div class="card-body p-3">
          <div class="row">
            <div class="col-8">
              <div class="numbers">
                <p class="text-sm mb-0 text-capitalize font-weight-bold">目前未付款 </p>
              </div>
            </div>
            <div class="col-4 text-end">
              <h5 class="font-weight-bolder mb-0">
                {{ Object.keys(orders).length }}
                <!-- <span class="text-success text-sm font-weight-bolder">+55%</span> -->
              </h5>
              <!-- <p><i class="bi bi-list-ol"></i></p> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
  data () {
    return {
      products: {},
      orders: {},
      articles: {}
    }
  },
  methods: {
    getAdminProducts () {
      const url = `${VITE_APP_URL}api/${VITE_APP_PATH}/admin/products/all`
      // 點擊分頁時滾到上方
      // window.scrollTo(0, 0)
      this.$http.get(url)
        .then((res) => {
          console.log(res)
          // 先把 products pagination資料存起來
          const { products } = res.data
          this.products = products
          console.log('後台產品: ', this.products)
        }).catch(() => {
          // console.dir(err.data.message)
          // this.$router.push('/login')
          // window.location = 'index.html'
        })
    },
    getAdminOrders () {
      this.$http.get(`${VITE_APP_URL}api/${VITE_APP_PATH}/admin/orders`)
        .then(res => {
          // console.log(res)
          const { orders } = res.data
          this.orders = orders
          console.log('後台訂單:', orders)
        })
    },
    getArticles () {
      this.$http.get(`${VITE_APP_URL}api/${VITE_APP_PATH}/admin/articles`)
        .then(res => {
          console.log(res)
          const { articles } = res.data
          this.articles = articles
          console.log('文章', articles)
        })
    }
  },
  mounted () {
    this.getAdminProducts()
    this.getAdminOrders()
    this.getArticles()
  }
}

</script>
