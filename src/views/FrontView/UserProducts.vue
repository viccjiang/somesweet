<template>
  <div class="container-fluid g-0 ">
    <div class="card border-0 rounded-0 bg-dark text-white mb-5">
      <div class="filters" style="
                        height: 200px;
                        background-image: url(https://storage.googleapis.com/vue-course-api.appspot.com/jiangs2023/1677550181847.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=qQpOKJlmAipjojZQ7imN6J6MiWWuxRYaXwXr6MdPijbdIRTjWFssPopTl5JN%2FjlUul1ccEWNcVdj2qhABmca1qXPqK9FnT1jz92lk4l7rOonpF8%2F7lVw8i%2BDI3KhGnoYIBBfmyQyRsPKI%2B8mHHakw9uegGVuY%2BXfxGLcBuYGsxhNU9UTy1fj4%2Fc07ANvqKpCrE66j9O2KJE%2B5VlGoCK8pKmBlmMjyLUXNSmESrPdR9696BuSHjvmYXdBWtAC6ODZLqXHs7P7vskYx3e23oggxpMBveQQCm8u3tqgCu6kjOE7EYtYucOEmah6Nsbuw6pUMfIhrj5xbebroqyayFKz8g%3D%3D);
                        background-size: cover;
                        background-position: center center;
                        background-attachment: fixed;
                      " />
      <div class="
                        card-img-overlay
                        d-flex
                        flex-column
                        justify-content-center
                        align-item-center
                      ">
        <h1 class="fs-3 card-title text-center fw-bold">
          <p class="fs-m fw-bold mb-2">所有甜點</p>
          <p class="logoText fs-sm p-0 m-0">SOME SWEET <span class="fs-xs fw-lighter">/am</span></p>
        </h1>
      </div>
    </div>
  </div>
  <div class="container mt-md-5 mt-3 mb-7">
    <div class="row">
      <div class="col-md-3">
        <div class="accordion border border-bottom border-top-0 border-start-0 border-end-0 mb-3" id="accordionExample">
          <div class="card border-0">
            <div
              class="card-header px-0 py-4 bg-white border border-bottom-0 border-top border-start-0 border-end-0 rounded-0"
              id="headingOne" data-bs-toggle="collapse" data-bs-target="#collapseOne">
              <div class="d-flex justify-content-between align-items-center pe-1">
                <h4 class="mb-0">
                  產品類別
                </h4>
                <i class="bi bi-chevron-down"></i>
              </div>
            </div>
            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div class="card-body py-0">
                <ul class="list-unstyled">
                  <li><a href="#" class="py-2 d-block text-muted">法式經典</a></li>
                  <li><a href="#" class="py-2 d-block text-muted">常溫點心</a></li>
                  <li><a href="#" class="py-2 d-block text-muted">發酵麵包</a></li>
                  <li><a href="#" class="py-2 d-block text-muted">派皮系列</a></li>
                  <li><a href="#" class="py-2 d-block text-muted">巧克力糖</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-9">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
          <div class="col-md-4 " v-for="product in products" :key="product.id">
            <div class="product card h-100 p-5 rounded-4 products-img">
              <img :src="product.imageUrl" class="card-img-top object-fit rounded-4 " :alt="product.title">
              <div class="card-body d-flex flex-column ">
                <h5 class="fs-6 fw-bold card-title mb-6">{{ product.title }}</h5>
                <!-- <p class="card-text text-truncate mb-6">{{ product.content }}</p> -->
                <div class="d-flex mt-auto">
                  <span class="text-muted fs-xs me-auto"><del>NT${{ product.origin_price }} </del></span>
                  <p class="card-text mb-0 ">${{ product.price }} </p> <span
                    class="fs-xs d-flex align-items-end ms-1">NTD</span>
                </div>
                <small class="text-center border-0">
                  <router-link class="text-dark d-block" :to="`/product/${product.id}`">查 看 細 節</router-link>
                </small>

              </div>
              <button type="buttom" class="btn btn-primary mt-5 " :disabled="this.status.loadingItem === product.id" @click="() => addToCart(product.id)">
                <div v-if="this.status.loadingItem === product.id" class="spinner-border text-light spinner-border-sm"
                  role="status">
                </div>
                加入購物車
              </button>
            </div>
          </div>

        </div>
        <!-- 分頁 -->
        <!-- 分頁元件 -->
        <PaginationComponent class="mt-5 mb-5 float-end" :pages="pagination" @emit-pages="getProducts">
        </PaginationComponent>
        <!-- 分頁元件 -->
      </div>
    </div>
  </div>
</template>

<script>
import cartStore from '../../store/UserCartStore.js'
import { mapActions, mapState } from 'pinia'
import PaginationComponent from '../../components/PaginationComponent.vue'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
export default {
  components: {
    PaginationComponent
  },
  data () {
    return {
      products: [],
      product: {},
      pagination: {},
      status: {
        loadingItem: '' // 對應品項 id
      }
    }
  },
  methods: {
    // api 有 page 的
    getProducts (page = 1) {
      this.$http.get(`${VITE_APP_URL}api/${VITE_APP_PATH}/products?page=${page}`).then((res) => {
        // 點擊分頁時滾到上方
        window.scrollTo(0, 0)
        // 先把 products pagination資料存起來
        const { products, pagination } = res.data
        this.products = products
        this.pagination = pagination
        console.log(this.products, this.pagination)
      })
    },
    ...mapActions(cartStore, [
      'getCarts',
      'addToCart'
    ])
    // addToCart (id, qty = 1) {
    //   console.log(id, qty)
    //   // 當沒有傳入該參數時，會使用預設值
    //   const url = `${VITE_APP_URL}api/${VITE_APP_PATH}/cart`
    //   this.status.loadingItem = id // 加入購物車之後 spinner 開啟
    //   const data = {
    //     product_id: id,
    //     qty: 1
    //   }
    //   this.$http.post(url, { data })
    //     .then(res => {
    //       this.status.loadingItem = '' // 加入購物車之後 spinner 關掉
    //       console.log('加入購物車', res.data)
    //     })
    // }
  },
  computed: {
    ...mapState(cartStore, ['cartData', 'cartsLength'])
  },
  mounted () {
    // 進頁面先抓產品資料
    this.getProducts()
  }
}
</script>

<style scoped lang="scss">
.product .card-img-top {
  width: 100%;
  height: 200px;
}

.object-fit {
  object-fit: cover
}

.products-img .small,
.products-img small {
  transform: translate(-50%, 10%);
  opacity: 0;
}

.products-img .small,
.products-img small {
  position: absolute;
  left: 50%;
  bottom: 40%;
  transform: translate(-50%);
  width: calc(100%);
  background: #ffffffad;
  color: #414666;
  padding: 1rem;
  margin: 1rem 0;
  text-align: center;
  box-shadow: 0 2px 6px rgb(33 37 41 / 10%);
  text-transform: uppercase;
  font-size: .875rem;
  transition: all .3s ease-out;
  z-index: 2;
}

.products-img .small,
.products-img small {
  transform: translate(-50%, 10%);
  opacity: 1;
}

@media (min-width: 768px) {
  .products-img {
    background-position: center 70%;
    height: 300px;
  }

  .products-img .small,
  .products-img small {
    transform: translate(-50%, 10%);
    opacity: 0;
  }

  .products-img:hover:after {
    opacity: 1
  }

  .products-img:hover .small,
  .products-img:hover small {
    opacity: 1;
    transform: translate(-50%)
  }
}
</style>
