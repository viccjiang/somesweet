<template>
  <nav class="navbar navbar-expand-lg d-flex flex-wrap justify-content-center align-items-center mt-5">
    <!-- logo -->
    <div class="container-fluid d-flex flex-row flex-lg-column justify-content-center align-items-center">
      <RouterLink to="/">
        <a class="d-flex navbar-brand m-0" href="#">
          <img src="../assets/Vector.svg" alt="Logo" width="" height="" class="d-inline-block align-text-top me-3">
          <div>
            <p class="fs-m fw-normal">清晨一點甜</p>
            <p class="logoText  fs-sm p-0 m-0">SOME SWEET <span class="fs-xs fw-lighter">/am</span></p>

          </div>
          <!-- <h1 class="logoText fw-bolder p-0 m-0">SOME SWEET<span class="fs-6 fw-lighter">/am</span></h1> -->
        </a>

      </RouterLink>
    </div>
    <!-- collapse -->
    <!-- 擋到字可以用 style="z-index:1000" ?-->
    <div class=" container-fluid navbarCollapse  d-flex flex-lg-row">
      <!-- 漢堡選單按鈕 -->
      <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
        <div class="position-lg-relative  d-flex flex-column justify-content-center align-items-center ">
          <!-- 選單列表 -->
          <ul class="navbar-nav mb-2 mb-lg-0 text-center ">
            <li class="navhover nav-item p-2">
              <RouterLink class="nav-link p-5" to="/home">首頁 </RouterLink>
            </li>
            <li class="navhover nav-item p-2">
              <RouterLink class="nav-link p-5" to="/about">關於我們</RouterLink>
            </li>
            <li class="navhover nav-item p-2">
              <RouterLink class="nav-link p-5" to="/products">清晨甜點</RouterLink>
            </li>
            <li class="navhover nav-item p-2">
              <RouterLink class="nav-link p-5" to="/cart">購物車</RouterLink>
            </li>
            <li class="navhover nav-item p-2">
              <RouterLink class="nav-link p-5" to="/blog">部落格</RouterLink>
            </li>
            <li class="navhover nav-item p-2">
              <RouterLink class="nav-link p-5" to="/faq">常見問題</RouterLink>
            </li>
            <li class="navhover nav-item p-2">
              <RouterLink class="nav-link p-5" to="/query_order">查詢訂單</RouterLink>
            </li>

          </ul>
          <!-- icon -->
          <!-- <nav class="nav-icon">
                <div class="navbar-nav d-flex justify-content-center align-items-center ">
                  <ul class="nav-icon-list d-inline-flex mb-2 mb-lg-0 text-center ">
                    <li class="nav-item px-2">

                      <RouterLink class="nav-link " to="/"><i class="bi bi-search"></i> </RouterLink>
                    </li>
                    <li class="nav-item px-2">

                      <RouterLink class="nav-link" to="/favorite"><i class="bi bi-heart"></i></RouterLink>
                    </li>
                    <li class="nav-icon-cart nav-item px-2">

                      <RouterLink class="nav-link" to="/cart"><i class="bi bi-cart2"></i></RouterLink>
                    </li>
                    <li class="nav-item px-2">

                      <RouterLink class="nav-link" to="/login"><i class="bi bi-person-circle"></i></RouterLink>
                    </li>
                  </ul>
                </div>
              </nav> -->
        </div>

      </div>
    </div>

  </nav>
  <!-- icon -->
  <nav class="sticky-top  bg-white position-lg-absolute top-lg-5 end-10  nav-icon">
    <div class="navbar-nav d-flex justify-content-center align-items-center">
      <ul class="nav-icon-list d-inline-flex mb-2 mb-lg-0 text-center p-0">
        <!-- <li class="nav-item px-5">
          <RouterLink class="nav-link " to="/"><i class="bi bi-search"></i> </RouterLink>
        </li> -->
        <li class="nav-item px-5">
          <RouterLink class="nav-link" to="/favorite"><i class="bi bi-heart"></i></RouterLink>
        </li>
        <li class="nav-item px-5">
          <a href="" class="nav-link position-relative" @click.prevent="showOffcanvas">
            <i class="bi bi-cart2"></i>
            <div class="
                                translate-middle
                                badge
                                rounded-pill
                                bg-danger
                                text-light
                                position-absolute
                                top-10
                                start-100
                              " style="font-size: 10px" v-if="cartsLength != 0">
              <!-- 購物車品項數量 (不重複) -->
              <!-- {{ cartData.carts.length }} -->
              <!-- 購物車品項數量總數 (重複) -->
              {{ cartsLength }}
            </div>
          </a>
          <!-- <RouterLink class="nav-link" to="/cart"><i class="bi bi-cart2"></i></RouterLink> -->
        </li>
        <!-- <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight">Toggle right offcanvas</button> -->
        <div class="offcanvas offcanvas-end " data-bs-scroll="true" data-bs-backdrop="false" ref="offcanvas"
          style="overflow: auto; z-index:2040" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
          <div class="bg-bk-lighter offcanvas-header text-primary">
            <h5 id="offcanvasRightLabel " class="text-center m-0">購物車</h5>
            <button type="button" class="btn-close btn-close-primary text-reset" data-bs-dismiss="offcanvas"
              aria-label="Close"></button>
          </div>
          <div v-if="cartsLength > 0">
            <div class="offcanvas-body d-flex flex-column justify-content-between">
              <div class="container">
                <div class="row border-bottom mb-3 d-flex" v-for="item in cartData.carts" :key="item.id">
                  <div class="d-flex p-0">
                    <!-- offcanvas 刪除單一品項 -->
                    <div class="col-2 d-flex align-items-center justify-content-center">
                      <p type="" class="btn btn-sm text-secondary text-start m-0" @click="deleteItem(item.id)">
                        <i class="bi bi-trash3"></i>
                      </p>
                    </div>
                    <!-- 連到細節頁面 -->
                    <a href="#" @click.prevent="getProduct(item.product_id)" class="
                          d-flex
                          align-items-center
                          justify-content-center
                          link-soft
                        ">
                      <div class="col-2 mb-2 me-2 rounded-3" style="
                            height: 50px;
                            width: 50px;
                            background-size: cover;
                            background-position: center;
                          " :style="{ backgroundImage: `url(${item.product.imageUrl})` }">
                        <!-- {{item.product.imageUrl}} -->
                      </div>
                      <div class="col fs-6 fw-normal text-start">
                        {{ item.product.title }}
                      </div>
                    </a>
                  </div>
                  <div class="border-top d-flex justify-content-center bg-light">
                    <div class="col d-flex flex-column ms-auto">
                      <div class="
                            price
                            d-flex
                            justify-content-md-between
                            flex-column flex-nowrap flex-md-row
                          ">
                        <!-- 數量 -->
                        <div class="
                              input-group
                              product-num-group
                              bg-light
                              mt-1
                              mb-4
                              my-md-0
                            ">
                          <!-- 減 -->
                          <div>
                            <button @click="updateCartItem(item, item.qty--)" class="btn border-0 bg-light" type="button">
                              <i class="bi bi-dash-lg"></i>
                            </button>
                          </div>
                          <!-- 數量 -->
                          <input type="text" class="
                                form-control
                                border-0
                                text-center
                                my-auto
                                shadow-none
                                bg-light
                                border
                              " aria-describedby="button-addon1" v-model.lazy="item.qty" />
                          <!-- 加 -->
                          <div>
                            <button @click="updateCartItem(item, item.qty++)" class="btn border-0" type="button">
                              <i class="bi bi-plus-lg"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="
                          col
                          d-flex
                          flex-column
                          ms-auto
                          text-end
                          fs-7
                          text-secondary
                          align-items-end
                          justify-content-center
                        ">
                      ${{ toThousands(item.final_total) }}
                    </div>
                  </div>
                </div>
              </div>
              <p class="text-end m-0 fs-6 text-danger mb-3">
                總計 $ {{ toThousands(cartData.final_total) }} 元
              </p>
              <RouterLink class="btn btn-primary text-center mt-auto text-white
                    p-3
                    d-grid
                    rounded-3

                  " to="/cart" @click="hideOffcanvas">結帳去</RouterLink>
              <!-- {{ cartData.carts }} -->
            </div>
          </div>
          <div v-else class="
                offcanvas-body
                d-flex
                flex-column
                align-items-center
                justify-content-center
              ">
            <div class="
                  text-center
                  d-flex
                  flex-column
                  align-items-center
                  justify-content-center
                ">
              <p class="m-0">你的購物車沒有商品</p>
              <div class="d-flex align-items-center justify-content-center">
                <RouterLink to="/"><button type="button" class="btn btn-outline-secondary m-2">
                    回首頁
                  </button></RouterLink>
                <RouterLink to="/products"><button type="button" class="btn btn-outline-secondary">
                    購物去
                  </button></RouterLink>
              </div>
            </div>
          </div>
        </div>
        <!-- <li>
          <RouterLink class="nav-link" to="/cart"><i class="bi bi-cart2"></i></RouterLink>
        </li> -->
        <li class="nav-item px-5">
          <RouterLink class="nav-link" to="/login"><i class="bi bi-person-circle"></i></RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import cartStore from '../store/UserCartStore'
import { mapActions, mapState } from 'pinia'

import Offcanvas from 'bootstrap/js/dist/offcanvas'
// const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
  data () {
    return {
      // cartData: {
      //   carts: []
      // },
      offcanvas: {}
      // cartsLength: 0
    }
  },
  methods: {
    // getCarts () {
    //   this.isLoading = true
    //   this.$http
    //     .get(`${VITE_APP_URL}api/${VITE_APP_PATH}/cart`)
    //     .then((res) => {
    //       this.cartData = res.data.data
    //       this.cartsLength = res.data.data.carts.length // 購物車 icon 判斷
    //       console.log(this.cartData, this.cartsLength)
    //     })
    // },
    getProduct (id) {
      this.$router.push(`/product/${id}`)
    },
    updateCartNum () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`
      this.isLoading = true
      this.$http.get(url).then((res) => {
        // 清單合併成一個加總數目的品項
        this.cartsLength = res.data.data.carts.length // 購物車 icon 判斷
        this.isLoading = false
      })
    },
    ...mapActions(cartStore, ['addToCart', 'getCarts', 'updateCartItem', 'deleteItem', 'deleteAllItem', 'createOrder', 'getOrders', 'setModal', 'toThousands']),
    showOffcanvas () {
      this.offcanvas.show()
    },
    hideOffcanvas () {
      this.offcanvas.hide()
    }
  },
  computed: {
    ...mapState(cartStore, ['cartData', 'cartsLength', 'modal'])
  },
  watch: {
    $route () {
      window.location.reload() // 其中 this.$router.go(0) 为刷新页面 但是不支援 iOS 系統
    }
  },
  mounted () {
    this.offcanvas = new Offcanvas(this.$refs.offcanvas, { backdrop: true })
    this.getCarts()
  }
}

</script>

<style scoped lang="scss">

.translate-middle {
  transform: translate(-47%, -15%) !important;
}

.navhover a {
  position: relative;
}

.navhover ::after {
  content: " ";
  position: absolute;
  right: 50%;
  left: 50%;
  bottom: 5px;
  border-bottom: 3px solid #034d83;
  transition: 0.3s;
}

.navhover :hover::after {
  right: 0;
  left: 0;
}

@media (max-width: 575.98px) {}

@media (max-width: 767.98px) {

  .custom-class {
    position: relative;
  }

  .navbarCollapse .navbar-toggler {
    position: absolute;
    top: 10px;
    right: 10px;
  }
}

@media (max-width: 991.98px) {
  .custom-class {
    position: relative;
  }

  .navbarCollapse .navbar-toggler {
    position: absolute;
    top: 10px;
    right: 10px;
  }
}
</style>
