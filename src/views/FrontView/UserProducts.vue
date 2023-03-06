<template>
  <VueLoading :active="isLoading" loader="bars" color="#034D83"/>
  <GoTop></GoTop>
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
                <a href="#" class="list-group-item list-group-item-action rounded-0 p-3"
                  @click.prevent="selectCategory = ''; this.$route.params.selectCategory = '';">
                  <i class="bi bi-dash-lg"></i> 全部商品
                </a>
                <ul class="list-unstyled">
                  <li><a href="#" v-for="item in categories" :key="item"
                      class="list-group-item list-group-item-action rounded-0 p-3"
                      @click.prevent="selectCategory = item; this.$route.params.selectCategory = item;"><i
                        class="bi bi-dash-lg"></i> {{ item }}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-9">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
          <div class="col-md-4 " v-for="product in filterProducts" :key="product.id">
            <div class="product card h-100 p-5 rounded-4 products-img ">

              <img :src="product.imageUrl" class="card-img-top object-fit rounded-4 position-relative" :alt="product.title">
              <a href="#" @click.prevent="addMyFavorite(product)" :class="{ active: myFavorite.includes(product.id) }"
                class="link-secondary d-block rounded-0">

                <i v-if="myFavorite.includes(product.id)" style="z-index: 1" class="
                              fs-1
                              bi bi-bookmark-heart-fill
                              position-absolute
                              top-0
                              start-15
                              text-warning
                            "></i>
                <i v-else style="z-index: 1" class="
                              fs-1
                              bi bi-bookmark
                              position-absolute
                              top-0
                              start-15
                              text-white
                            "></i>
              </a>
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
              <button type="buttom" class="btn btn-primary mt-5 " :disabled="this.status.loadingItem === product.id"
                @click="() => addToCart(product.id)">
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
        <!-- <PaginationComponent class="mt-5 mb-5 float-end" :pages="pagination" @emit-pages="getProducts">
        </PaginationComponent> -->
        <!-- 分頁元件 -->
      </div>
    </div>
  </div>
</template>

<script>
import VueLoading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'
import cartStore from '../../store/UserCartStore.js'
import { mapActions, mapState } from 'pinia'
import storageMethods from '../../methods/LocalStorage'
import GoTop from '../../components/GoTop.vue'
// import PaginationComponent from '../../components/PaginationComponent.vue'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
export default {
  components: {
    GoTop,
    VueLoading
    // PaginationComponent
  },
  data () {
    return {
      productsAll: [],
      products: [],
      product: {},
      pagination: {},
      status: {
        loadingItem: '' // 對應品項 id
      },
      isLoading: false,
      categories: [], // 產品的分類項目
      selectCategory: '', // 選取分類項目按鈕後，selectCategory = item，用 computed 做切換
      myFavorite: storageMethods.get() || [] // 我的最愛，有品項的話就用 storageMethods.get() 取到內容，沒有的話就傳空陣列
    }
  },
  methods: {
    getAllProducts (page) {
      this.isLoading = true
      this.$http.get(`${VITE_APP_URL}api/${VITE_APP_PATH}/products/all`)
        .then(res => {
          console.log(res)
          this.productsAll = res.data.products
          console.log(this.productsAll)
          this.getCategories()
          const { selectCategory } = this.$route.params
          console.log(selectCategory)
          this.isLoading = false
          if (selectCategory) {
            this.selectCategory = selectCategory
          }
          if (this.selectCategory !== '') {
            this.pagination = {}
          } else {
            this.getProducts(page)
          }
        })
    },
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
    getCategories () {
      // Vue 3 雙向綁定 Proxy(new Proxy 物件)
      // new Set
      const categories = new Set() // 建在全新的空的物件上
      console.log(categories)
      this.productsAll.forEach((item) => {
        categories.add(item.category) // 把品項加入 categories
        // console.log(this.categories)
      })
      this.categories = [...categories] // 這裡要轉成純陣列的形式存回去  所以這裡要轉為 Proxy
      console.log(this.categories)
    },
    addMyFavorite (item) {
      // this.myFavorite.push(item.id);
      // this.myFavorite.includes(item.id) 原本是寫 item.id 存 id 就好，但後面要做其他事情可以先存整個物件
      if (this.myFavorite.includes(item.id)) {
        // 這裡意思是 如果我的最愛已經有這個品項，再按一次就代表取消
        this.myFavorite.splice(this.myFavorite.indexOf(item.id), 1)
        // emitter.emit('update-favorite'); // 更新最愛數量
      } else {
        this.myFavorite.push(item.id) // 否則沒有此品項 就把品項加入
        this.favShowAlert()
        // emitter.emit('update-favorite'); // 更新最愛數量
      }
      // storageMethods.save(this.myFavorite); // 儲存狀態
      // emitter.emit('update-favorite'); // 更新最愛數量
    },
    // showAlert () {
    //   // Use sweetalert2
    //   this.$swal.fire({
    //     position: 'center',
    //     icon: 'success',
    //     title: '已加入購物車',
    //     showConfirmButton: false,
    //     timer: 2000,
    //     iconColor: '#236F6B'
    //   })
    // },
    favShowAlert () {
      // Use sweetalert2
      this.$swal.fire({
        position: 'center',
        icon: 'success',
        title: '已加入收藏',
        showConfirmButton: false,
        timer: 2000,
        iconColor: '#236F6B'
      })
    },
    ...mapActions(cartStore, ['getCarts', 'addToCart', 'showAlert'])
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
    ...mapState(cartStore, ['cartData', 'cartsLength']),
    // 產生新的資料集 (裡面的值產生變化之後，資料重新運算)
    filterProducts () {
      return this.productsAll.filter((item) => item.category.match(this.selectCategory))
      // 如果選到的產品品項是一樣的就呈現
      // 監聽 this.products  this.selectCategory
      // 空字串，或任何符合結果都會是 “真值”
    }
  },
  watch: {
    selectCategory (newValue, preValue) {
      if (newValue === '' || preValue === '') {
        console.log(newValue, preValue)
        this.getAllProducts()
      }
    },
    // 監聽特定值
    myFavorite: {
      // 深層監聽
      handler () {
        storageMethods.save(this.myFavorite) // 把資料儲存
      },
      deep: true
    }
  },
  mounted () {
    // 進頁面先抓產品資料
    // this.getProducts()
    this.getAllProducts()
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
