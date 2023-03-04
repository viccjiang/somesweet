<template>
  <nav
    class="navbar navbar-expand-lg d-flex flex-wrap justify-content-center align-items-center">
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
      <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
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
        <div class="offcanvas offcanvas-end" ref="offcanvas" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1"
          style="overflow: auto" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            這裡是購物車
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
    ...mapActions(cartStore, [
      'getCarts',
      'addToCart'
    ]),
    showOffcanvas () {
      this.offcanvas.show()
    },
    hideOffcanvas () {
      this.offcanvas.hide()
    }
  },
  computed: {
    ...mapState(cartStore, ['cartData', 'cartsLength'])
  },
  mounted () {
    this.offcanvas = new Offcanvas(this.$refs.offcanvas)
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
}</style>
