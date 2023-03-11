<template >
  <div class="bg-light py-10">
    <div class="container ">
      <p class="fs-3 fw-bold py-2 text-dark text-start border-bottom mb-10">
        你可能也會喜歡
      </p>
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        <div v-for="item in randomProducts" :key="item" class="col">
          <div class="card h-100 rounded-4 p-5 card-hover">
            <div style="
                  height: 200px;
                  background-size: cover;
                  background-position: center;
                  object-fit: cover;
                " :style="`backgroundImage: url(${item.imageUrl})`" class="card-img-top rounded-4 p-5" alt="" />
            <div>
              <div class="card-body d-flex flex-column justify-content-between">
                <h5 class="card-title">{{ item.title }}</h5>
                <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->

              </div>

            </div>
            <a href="" class="btn btn-white stretched-link d-flex flex-column text-end mt-auto p-0"
                  @click.prevent="goProductPage(item.id)">查看更多</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
// 相同產品取得隨機數
function getRandomInt (max) {
  return Math.floor(Math.random() * max)
}
export default {
  data () {
    return {
      product: {},
      products: [], // 取得所有產品資料 存起來
      productImg: '',
      id: '',
      isLoading: false,
      randomProducts: []
    }
  },
  methods: {
    getProduct () {
      // $route 物件取值
      // $router 方法
      const { id } = this.$route.params
      this.isLoading = true
      this.$http(`${VITE_APP_URL}api/${VITE_APP_PATH}/product/${id}`)
        .then((res) => {
          this.isLoading = false
          this.product = res.data.product // 賦值
          this.productImg = this.product.imageUrl
          this.getProducts() // 先取得單一產品資訊，再取得所有產品資訊
        })
    },
    getProducts () {
      const url = `${VITE_APP_URL}api/${VITE_APP_PATH}/products/all`
      this.$http.get(url).then((res) => {
        this.products = res.data.products
        this.getLookLike()
      })
    },
    // 前往可能會喜歡頁面
    goProductPage (id) {
      this.$router.push(`/product/${id}`)
    },
    getLookLike () {
      const { category } = this.product // 先取出單一品項的分類
      // console.log(category)
      const filterProducts = this.products.filter((item) => item.category === category) // 取得相同品項
      const maxSize = filterProducts.length < 4 ? filterProducts.length : 4
      // 先新增一個類陣列，所以陣列的方法基本上不太能用
      const arrSet = new Set([])
      for (let index = 0; arrSet.size < maxSize; index + 1) {
        // arrSet.size 不能寫死數字
        const num = getRandomInt(filterProducts.length) // 取得取得相同品項數量的隨機數字
        arrSet.add(num) // 加入
      }
      // console.log(arrSet)
      arrSet.forEach((index) => {
        this.randomProducts.push(filterProducts[index])
      })
    }

  },
  mounted () {
    this.id = this.$route.params.id
    this.getProduct()
  }
}
</script>

<style scoped>
.card-hover  {
  box-shadow: rgba(0, 0, 0, 0.01) 0px 15px 30px, rgba(0, 0, 0, 0.01) 0px 5px 10px;
}

.card-hover:hover  {
  transition: 0.5s;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 15px 30px, rgba(0, 0, 0, 0.1) 0px 5px 10px;
}
</style>
