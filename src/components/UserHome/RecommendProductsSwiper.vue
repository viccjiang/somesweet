<template>
  <div class="we-recommend container mb-5 mt-5 ">
    <swiper class="swiper-container " :loop="true" :autoplay="autoplay" :breakpoints="breakpoints" :modules="modules"
      :navigation="{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }">
      <swiper-slide class="card border-0 rounded-4 h-100" v-for="item in randomSelects" :key="item.id">
        <div class="position-relative rounded-4 " style="
                  height: 300px;
                  background-position: center center;
                  background-size: cover;
                " :style="{ backgroundImage: `url(${item.imageUrl})` }">
          <div class="box bg-danger text-white position-absolute rounded-3 ms-3 mt-3">
            <p class="m-0">推薦</p>
          </div>
        </div>
        <div class="card-body">
          <h5 class=" card-title stretched-link p-0 cursor-pointer " @click="goRecommendPage(item.id)">
            {{ item.title }}
          </h5>
        </div>
      </swiper-slide>
      <div class="d-none d-lg-block top-50 end-50">
        <div class="swiper-button-prev "></div>
        <div class="swiper-button-next "></div>
      </div>

    </swiper>

  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

// import required modules
import { Navigation, Autoplay } from 'swiper'

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
      id: '',
      isLoading: false,
      randomSelects: [],
      qty: 1, // 畫面上的輸入欄位顯示的預設值
      // swiper rwd
      breakpoints: {
        1: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        992: {
          slidesPerView: 3.5,
          spaceBetween: 30
        }
      },
      autoplay: {
        disableOnInteraction: false, // 使用者操作swiper之後，是否禁止autoplay
        delay: 2000 // 自動切換的時間間隔（單位ms）
      },
      modules: [Autoplay, Navigation]
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  methods: {
    getProduct () {
      // $route 物件取值
      // $router 方法
      const { id } = this.$route.params // 這裡要用解構 airbnb 規則
      this.isLoading = true
      this.$http(`${VITE_APP_URL}api/${VITE_APP_PATH}/product/${id}`)
        .then((res) => {
          this.isLoading = false
          this.product = res.data.product // 賦值
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
    goRecommendPage (id) {
      this.$router.push(`/product/${id}`)
      // this.getLookLike();
      this.isLoading = true
      this.$http(`${VITE_APP_URL}api/${VITE_APP_PATH}/product/${id}`)
        .then((res) => {
          this.isLoading = false
          this.product = res.data.product // 賦值
          this.randomProducts = [] // 轉到新頁面要先清空原本的
          this.getLookLike()
        })
    },
    getLookLike () {
      const maxSize = this.products.length < 10 ? this.products.length : 10
      // 先新增一個類陣列，所以陣列的方法基本上不太能用
      const arrSet = new Set([]) // arrSet.size 是類陣列長度
      getRandomInt()
      for (let index = 0; arrSet.size < maxSize; index + 1) {
        // arrSet.size 不能寫死數字
        const num = getRandomInt(this.products.length) // 取得品項隨機數字
        arrSet.add(num)
      }
      arrSet.forEach((index) => {
        this.randomSelects.push(this.products[index])
      })
    },
    addCart () {
      const { id } = this.$route.params
      const url = `${VITE_APP_URL}api/${VITE_APP_PATH}/cart`
      const cart = {
        product_id: id,
        qty: this.qty
      }
      this.isLoading = true
      this.$http
        .post(url, { data: cart })
        .then((res) => {
          this.isLoading = false
          this.$httpMessageState(res, '加入購物車')
        })
        .catch((error) => {
          this.isLoading = false
          this.$httpMessageState(error.response, '加入購物車')
        })
    },
    getCart () {
      const url = `${VITE_APP_URL}api/${VITE_APP_PATH}/cart`
      this.isLoading = true
      this.$http.get(url).then((response) => {
        this.cart = response.data.data
        this.isLoading = false
      })
    },
    updateCartItem (item) {
      const data = {
        product_id: item.id,
        qty: item.qty
      }
      this.$http
        .put(`${VITE_APP_URL}api/${VITE_APP_PATH}/cart/${item.id}`, { data })
        .then(() => {
          this.getCart()
        })
    }
  },
  mounted () {
    this.id = this.$route.params.id
    this.getProducts()
  }
}
</script>

<style scoped lang='scss' >
.box {
  font-size: 16px;
  width: 60px;
  height: auto;
  left: 0px;
  justify-content: center;
  text-align: center;
  padding: 10px;
}

.we-recommend .swiper-container {
  --swiper-navigation-color: #fff;
  --swiper-navigation-size: 40px;
  /* 设置按钮大小 */
}

.we-recommend .swiper-img {
  filter: brightness(1);
  overflow: hidden;
}

.we-recommend .swiper-img:hover {
  filter: brightness(0.8);
  transition: 0.5s;
}

.we-recommend .swiper-button-next {
  position: absolute;
  top: var(--swiper-navigation-top-offset, 50%);
  /* left: 800px;
  /* right:300px; */
  width: 40px;
  height: 40px;
  margin-top: 50px;
  z-index: 10;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: #034d83;
  background-color: #fff;
  border: 1px solid #034d83;
  /* margin-left: -30px;
    margin-right: -30px; */

}

.we-recommend .swiper-button-next:after {
  font-family: swiper-icons;
  font-size: 16px;
  font-weight: bold;
  text-transform: none !important;
  letter-spacing: 0;
  font-variant: initial;
  line-height: 1;
}

.we-recommend .swiper-button-prev {
  position: absolute;
  top: var(--swiper-navigation-top-offset, 50%);
  left: 90%;
  // left: 825px;
  /* right:300px; */
  width: 40px;
  height: 40px;
  margin-top: 50px;
  z-index: 10;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: #034d83;
  background-color: #fff;
  border: 1px solid #034d83;
  /* margin-left: -30px;
    margin-right: -30px; */

}

.we-recommend .swiper-button-prev:after {
  font-family: swiper-icons;
  font-size: 16px;
  font-weight: bold;
  text-transform: none !important;
  letter-spacing: 0;
  font-variant: initial;
  line-height: 1;
}

.hover-view {
  filter: brightness(0.8);
  transition: 0.5s;
}

.hover-view:hover {
  filter: brightness(0.8);
  transition: 0.5s;
}
</style>
