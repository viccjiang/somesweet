<!-- eslint-disable no-undef -->
<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-6">
        <img class="rounded-0 w-100" :src="productImg" :alt="product.title" style="
                                  height: 400px;
                                  background-size: cover;
                                  background-position: center center;
                                  object-fit: cover;
                                " />
        <div class="row">
          <div class="col-4">
            <img style="
                                        height: 100px;
                                        background-size: cover;
                                        background-position: center center;
                                        object-fit: cover;
                                      " class="w-100 p-0 rounded-0 mt-2" :src="product.imageUrl" alt="產品"
              @click="changeImg(product.imageUrl)" />
          </div>
          <div class="col-4" v-for="(img, key) in product.imagesUrl" :key="`圖_${key}`">
            <img style="
                                        height: 100px;
                                        background-size: cover;
                                        background-position: center center;
                                        object-fit: cover;
                                      " class="w-100 p-0 rounded-0 mt-2" :src="img" :alt="`圖_${key}`"
              @click="changeImg(img)" />
          </div>
        </div>
      </div>

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
        <h2 class="fw-bold h1 mb-1">{{ product.title }}</h2>
        <p class="mt-5 mb-0 text-muted text-start">
          <del>NT${{ product.origin_price }}</del>
        </p>
        <p class="h5 fw-bold text-start mb-5">
          NT${{ product.price }}
        </p>
        <div class="row align-items-center">
          <div>
            <div class="input-group mb-3">
              <select id="" class="form-select border-bottom border-0 rounded-0 me-3" v-model.number="qty">
                <option :value="num" v-for="num in 10" :key="`${num}${product.id}`">
                  {{ num }}
                </option>
              </select>
              <button type="button" class="btn btn-primary border-0 rounded-3" @click="addToCart(product.id, qty)">
                加入購物車
              </button>
            </div>
            <!-- 加入收藏 -->
          <!-- <a
              href="#"
              @click.prevent="addMyFavorite(product)"
              :class="{ active: myFavorite.includes(product.id) }"
              class="link-secondary d-block rounded border text-center mb-3 "
            >
              <p v-if="myFavorite.includes(product.id)" class="m-0 text-danger d-flex align-items-center justify-content-center">
                <i
                class="
                  fs-4
                  bi-suit-heart-fill
                  top-0
                  end-0
                  me-2
                  mt-1
                  text-danger
                "
              ></i>已加入收藏
              </p>
              <p v-else class="m-0  text-soft d-flex align-items-center justify-content-center"><i
                class="fs-4 bi bi-suit-heart top-0 end-0 me-2 mt-1 p-0"
              ></i>加入收藏</p>
                          </a> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cartStore from '../../store/UserCartStore'
import { mapActions, mapState } from 'pinia'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
  /* eslint-disable camelcase */
  data () {
    return {
      product: [], // 單一產品資訊
      id: '', // 單一產品的 id
      productImg: '',
      qty: 1 // 畫面上的輸入欄位顯示的預設值
    }
  },
  methods: {

    getProduct () {
      // $route 物件取值
      // $router 方法
      this.$http.get(`${VITE_APP_URL}api/${VITE_APP_PATH}/product/${this.id}`)
        .then(res => {
          console.log(res.data)
          const { product } = res.data
          this.product = product
          this.productImg = this.product.imageUrl
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

<style scoped></style>
