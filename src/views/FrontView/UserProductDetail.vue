<!-- eslint-disable no-undef -->
<template>
  <VueLoading :active="isLoading" loader="bars" color="#034D83" />
  <div class="banner bg-cover">
    <div class="container ">
      <div class="row">
        <!-- 左側欄 -->
        <div class="col-12 col-md-6  ">
          <img class="p-4 rounded-5 w-100 border" :src="productImg" :alt="product.title" style="
                                            height: 400px;
                                            background-size: cover;
                                            background-position: center center;
                                            object-fit: cover;
                                          " />
          <div class="row">
            <div class="col-4 p-5 cursor-pointer">
              <img style="
                                                  height: 100px;
                                                  background-size: cover;
                                                  background-position: center center;
                                                  object-fit: cover;
                                                " class="w-100 p-0 rounded-0 mt-2 border rounded-4"
                :src="product.imageUrl" alt="產品" @click="changeImg(product.imageUrl)" />
            </div>
            <div class="col-4 p-5 cursor-pointer" v-for="(img, key) in product.imagesUrl" :key="`圖_${key}`">
              <img style="
                                                  height: 100px;
                                                  background-size: cover;
                                                  background-position: center center;
                                                  object-fit: cover;
                                                " class="w-100 p-0 rounded-0 mt-2 border rounded-4" :src="img"
                :alt="`圖_${key}`" @click="changeImg(img)" />
            </div>
          </div>
        </div>
        <!-- 右側欄 -->
        <div class="col-12 col-md-6">
          <!-- 麵包屑 -->
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb bg-white px-0 mb-0 py-3 fs-6">
              <li class="breadcrumb-item">
                <RouterLink to="/" class="">回首頁</RouterLink>
              </li>
              <li class="breadcrumb-item">
                <RouterLink to="/products" class="">產品列表</RouterLink>
              </li>
              <li class="breadcrumb-item active" aria-current="page">產品細節</li>
            </ol>
          </nav>
          <!-- 產品細節介紹 -->
          <h2 class="fs-3 fw-bold h1 mb-1 ">{{ product.title }}</h2>
          <div class="d-flex justify-content-end align-items-end py-10">
            <p class=" text-muted text-start float-end">
              <del>NT${{ product.origin_price }}</del>
            </p>
            <p class="h3 fw-bold text-start ms-5 text-primary">
              NT${{ product.price }}
            </p>
          </div>
          <div class="row align-items-center">
            <div>
              <!-- 加入收藏 -->
              <a href="#" @click.prevent="addMyFavorite(product)" :class="{ active: myFavorite.includes(product.id) }"
                class="link-secondary d-block rounded border text-center mb-3 rounded-3">
                <p v-if="myFavorite.includes(product.id)"
                  class="m-0 text-danger d-flex align-items-center justify-content-center">
                  <i class="
                            fs-4
                            bi-suit-heart-fill
                            top-0
                            end-0
                            me-2
                            mt-1
                            text-danger
                          "></i>已加入收藏
                </p>
                <p v-else class="m-0  text-soft d-flex align-items-center justify-content-center"><i
                    class="fs-4 bi bi-suit-heart top-0 end-0 me-2 mt-1 p-0"></i>加入收藏</p>
              </a>
              <div class="input-group mb-3">
                <select id="" class="form-select border-bottom border-0 rounded-0 me-3 " v-model.number="qty">
                  <option :value="num" v-for="num in 10" :key="`${num}${product.id}`">
                    {{ num }}
                  </option>
                </select>
                <button type="button" class="btn btn-primary border-0 rounded-3" style="width:300px"
                  @click="addToCart(product.id, qty)">
                  加入購物車
                </button>
              </div>
            </div>
          </div>
          <ul class="list-unstyled">
            <li>
              付款後，從備貨到寄出商品為 7 個工作天。（不包含假日）
            </li>
          </ul>
          <hr />
          <ul class="list-unstyled text-danger">
            <li>此商品可領取折扣碼</li>
            <li>實際優惠折抵以購物車內的金額為準</li>
          </ul>
          <hr />
          <div class="text-secondary d-flex justify-content-end align-items-center">
            <span class="me-3">分享</span>
            <a href="https://viccjiang.github.io/somesweet/#/" class="link-dark">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-facebook me-3" viewBox="0 0 16 16">
                <path
                  d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
              </svg>
            </a>
            <a href="https://viccjiang.github.io/somesweet/#/" class="link-dark">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-instagram me-3" viewBox="0 0 16 16">
                <path
                  d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
              </svg>
            </a>
            <a href="https://viccjiang.github.io/somesweet/#/" class="link-dark">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter"
                viewBox="0 0 16 16">
                <path
                  d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="banner bg-cover pt-10">
    <div class="container mb-5">
      <div class="row  g-0" data-aos="fade-up" data-aos-duration="1000">
        <div class="col-md-4 ">
          <img
            src="https://storage.googleapis.com/vue-course-api.appspot.com/jiangs2023/1678412947710.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=CYhdBaempuovMGV3FPUTzGQmJcdxUexOR467IoCP9DarD7hVxsoChQoJEpcQonaOLAIf6LmfW%2BTKiosIMI%2B4pDVXs8aWEuPLztC1HvW4maWwvShTy%2B8P24ocifrgegJj%2BRZEwoxD%2BPQQnH6oblI5%2F88b5pGyuM%2FdIPGBkfR%2FrVm8AR9HQpwwWGKaFaew1lHn7AJqKGK4D1EPvBwobuXfA0kprnCJ%2FO4TZybWyjtAfGk%2Bj9dlqGmVgFECfYqGbe5FQc%2B%2BDXwjl5x2ViiDyvBOZy4YNR9x6bAIuMClxlX1UFV8F0qk9K6Bu%2FaYDcgd2UrjHD9HibNeAhMOtoUbZZecQw%3D%3D"
            :alt="product.title" class="img-fluid rounded-5 p-5 border " />
        </div>
        <div class="col-md-6 m-auto text-start p-5">
          <h4 class="mb-5">{{ product.title }}</h4>
          <p class="text-secondary">
            {{ product.description }}
          </p>
        </div>
      </div>
      <div class="row g-0   justify-content-between mt-10" data-aos="fade-up" data-aos-duration="1000">
        <div class="col-md-4 ">
          <img
            src="https://storage.googleapis.com/vue-course-api.appspot.com/jiangs2023/1678412966133.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=ofuv2yWPXt6RCDCGBCyvzZsL3r3QKMkCdAWXaJCr3XKCkozruqo20ZRjv9hItJC5aOOC5j5xRYk22xs1sc%2BGS9JqVumbx6gWqQln9hD%2FGv864nNMi6r59M03iyo70k8qioUgfKlPfwc2p1IYwTR%2BYi3UK793aePqWW3c58ompTHf5joUklU7URm4yKRIlpZ00zoWXHkF%2FsOG%2BuJQFA3VYmqp6UkaakCJtuKcCzflXWE78UdbX6ZrnFLFGLaco7nu%2F0owWQWFv5StN3sSiodp9M9ploeWsw2ray0419j6FLNuP2q7Kdpz6Po9RvSyWCu%2FPzkfofzecXdGbB%2FeqmTINw%3D%3D"
            alt="防疫樂活" class="img-fluid rounded-5 p-5 border" />
        </div>
        <div class="col-md-6 m-auto text-start m-0 p-5">
          <!-- <h4 class="mt-5 mb-5">{{ product.category }}</h4> -->
          <p class="text-secondary">
            {{ product.content }}
          </p>
        </div>
      </div>
    </div>
  </div>

  <UserProdectDetailLooklike></UserProdectDetailLooklike>
</template>

<script>
import VueLoading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'
import storageMethods from '../../methods/LocalStorage'
import cartStore from '../../store/UserCartStore'
import UserProdectDetailLooklike from '../../components/UserProduct/UserProdectDetailLooklike.vue'
import { mapActions, mapState } from 'pinia'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
  /* eslint-disable camelcase */
  data () {
    return {
      isLoading: false,
      product: [], // 單一產品資訊
      id: '', // 單一產品的 id
      productImg: '',
      qty: 1, // 畫面上的輸入欄位顯示的預設值
      myFavorite: storageMethods.get() || [] // 我的最愛，有品項的話就用 storageMethods.get() 取到內容，沒有的話就傳空陣列
    }
  },
  components: {
    VueLoading,
    UserProdectDetailLooklike
  },
  methods: {

    getProduct () {
      // $route 物件取值
      // $router 方法
      this.isLoading = true
      this.$http.get(`${VITE_APP_URL}api/${VITE_APP_PATH}/product/${this.id}`)
        .then(res => {
          console.log(res.data)
          const { product } = res.data
          this.product = product
          this.productImg = this.product.imageUrl
          this.isLoading = false
          console.log(this.product)
        })
    },
    ...mapActions(cartStore, ['addToCart', 'getCarts']),
    // getCarts () {
    //   this.$http.get(`${VITE_APP_URL}api/${VITE_APP_PATH}/cart`)
    //     .then(res => {
    //       console.log('購物車:', res.data)
    //       this.cart = res.data.data
    //     })
    // },
    changeImg (img) {
      this.productImg = img
    },
    addMyFavorite (item) {
      // this.myFavorite.push(item.id);
      // this.myFavorite.includes(item.id) 原本是寫 item.id 存 id 就好，但後面要做其他事情可以先存整個物件
      if (this.myFavorite.includes(item.id)) {
        // 這裡意思是 如果我的最愛已經有這個品項，再按一次就代表取消
        this.myFavorite.splice(this.myFavorite.indexOf(item.id), 1)
      } else {
        this.myFavorite.push(item.id) // 否則沒有此品項 就把品項加入
        this.favShowAlert()
      }
    },
    favShowAlert () {
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
        title: '已加入蒐藏清單'
      })
    }
  },
  watch: {
    // 監聽特定值
    myFavorite: {
      // 深層監聽
      handler () {
        storageMethods.save(this.myFavorite) // 把資料儲存
      },
      deep: true
    }
  },
  computed: {
    ...mapState(cartStore, ['cartData', 'cartsLength'])
  },
  created () {
    this.id = this.$route.params.id
    console.log(this.$route.params.id)

    // this.getCarts()
  },
  mounted () {
    this.getProduct()
  }
}
</script>

<style scoped>
.banner {
  background-image: url(../../assets/Group103.jpg);
}

.bg-cover {
  background-attachment: fixed;
}

.bg-cover {
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

}
</style>
