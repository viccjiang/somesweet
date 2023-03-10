<template>
  <!-- <Loading :active="isLoading" loader="bars" color="#236F6B" /> -->
  <div class="card border-0 rounded-0 bg-dark text-white mb-5">
    <img class="filters" style="
                  height: 200px;
                  background-image: url(https://storage.googleapis.com/vue-course-api.appspot.com/jiangs2023/1678427520180.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=iiSXN5mn0QTpMZpCBona7iXC45A8l18MWoXV3f9zkFNXV47vzXChdxwu9AV0IoPn8ZEAiTgDHIUGAMcm9o7tFLdepA0zSQDRH7uVuFecAFC8WwDjdsW6atcFIgXJ3uS7Hxj8NLo98Z0GhE%2BkoNLEU%2BqsgqQie4yEQqMBm4CMhPBWWbPubph%2FPy78DCyigupkALfHCrkeE%2F23dLTuUHk%2B2SBwT9WsAp8znKZj%2FqKeCuBtzw%2BtGHdff34FmEM3%2Fa6eYoYePCg4A03db%2FHg9jPHcpf8zpJp4d2UuKcnM%2F1ToEU9zOC0NNmuH6876kGOdXsc9n4Pes7QbmNTZmkr5VzQvA%3D%3D);
                  background-size: cover;
                  background-position: top top;
                  background-attachment: fixed;
                " />
    <div class="
                  card-img-overlay
                  d-flex
                  flex-column
                  justify-content-center
                  align-item-center
                ">
      <h1 class="card-title text-center fw-bold">願望清單</h1>
    </div>
  </div>
  <div class="container mt-0 mt-md-10 mb-0 mb-md-10">
    <div class="
                  g-4
                  row row-cols-1 row-cols-md-2 row-cols-lg-3
                  flex-column
                  justify-content-center
                  flex-md-row
                ">
      <div class="d-flex flex-column justify-content-center align-items-center" v-if="favorites.length === 0">
        <h3 class="text-center mb-2 pb-3">目前沒有收藏任何商品</h3>
        <RouterLink to="/products" class="btn btn-soft mb-5 mb-md-0">
          <i class="bi bi-bag"></i> 來去收藏喜歡的商品
        </RouterLink>
      </div>
      <template v-else>

        <div class="col-md-4 " v-for="product in favorites" :key="product.id">
          <div class="product card h-100 p-5 rounded-4 products-img ">
            <div class="overflow-hidden rounded-4">
              <img :src="product.imageUrl" class="card-img-top object-fit rounded-4 position-relative card-imageUrl "
                :alt="product.title">
            </div>

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

        <!-- <div class="col" v-for="item in favorites" :key="item.id">
          <div class="card h-100 rounded-0 position-relative">
            <a href="#" @click.prevent="addMyFavorite(item)" :class="{ active: myFavorite.includes(item.id) }"
              class="link-secondary d-block rounded-0">
              <i v-if="myFavorite.includes(item.id)" style="z-index: 1" class="
                      fs-4
                      bi-suit-heart-fill
                      position-absolute
                      top-0
                      end-0
                      me-2
                      mt-1
                      text-danger
                    "></i>
              <i v-else style="z-index: 1" class="
                      fs-4
                      bi bi-suit-heart
                      position-absolute
                      top-0
                      end-0
                      me-2
                      mt-1
                      text-white
                    "></i>
            </a>
            <a href="#" class="img-card rounded-0" @click.prevent="getProduct(item.id)">
              <div class="card-imageUrl rounded-0" style="
                      height: 300px;
                      background-size: cover;
                      background-position: center;
                    " :style="{ backgroundImage: `url(${item.imageUrl})` }"></div>
            </a>
            <div class="card-body">
              <p class="badge bg-soft text-center text-light">
                {{ item.category }}
              </p>
              <h5 class="card-title mb-3">{{ item.title }}</h5>
              <div class="
                      mb-3
                      d-flex
                      flex-column
                      justify-content-end
                      align-items-start
                    ">
                <div class="h5 list-inline-item" v-if="!item.price">
                  {{ item.origin_price }} 元
                </div>
                <del class="fs-7 list-inline-item text-secondary" v-if="item.price">原價 NT$
                  {{ item.origin_price }} 元</del>
                <div class="fs-6 text-danger fw-bold" v-if="item.price">
                  NT$ {{ item.price }} 元
                </div>
              </div>
              <div class="d-grid d-md-flex justify-content-md-between">
                <button class="btn btn-outline-secondary rounded-0 border w-100 mb-3 mb-md-0" type="button"
                  @click="getProduct(item.id)">
                  查看更多
                </button>
                <button class="btn btn-soft text-light rounded-0 border-0 w-100" type="button"
                  :disabled="this.status.loadingItem === item.id" @click="addCart(item.id)">
                  <div v-if="this.status.loadingItem === item.id" class="spinner-border text-light spinner-border-sm"
                    role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                  加到購物車
                </button>
              </div>
            </div>
          </div>
        </div> -->
      </template>
    </div>
  </div>
  <div class="bg-light py-10">
    <div class="container ">
      <p class="fs-3 fw-bold py-2 text-dark text-start border-bottom mb-10">
        你可能也會喜歡
      </p>

        <RecommendSwiper ></RecommendSwiper>

    </div>
  </div>

</template>

<script>
import cartStore from '../../store/UserCartStore.js'
import { mapActions, mapState } from 'pinia'
import storageMethods from '../../methods/LocalStorage.js'
import RecommendSwiper from '../../components/UserHome/RecommendProductsSwiper.vue'

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
  data () {
    return {
      products: [], // getProducts
      product: {},
      pagination: {},
      status: {
        loadingItem: '' // 對應品項 id
      },
      categories: [], // 產品的分類項目
      selectCategory: '', // 選取分類項目按鈕後，selectCategory = item，用 computed 做切換
      myFavorite: storageMethods.get() || [], // 我的最愛，有品項的話就用 storageMethods.get() 取到內容，沒有的話就傳空陣列
      favorites: []
    }
  },
  components: {
    RecommendSwiper
  },
  methods: {
    getProducts () {
      const url = `${VITE_APP_URL}api/${VITE_APP_PATH}/products/all`
      this.isLoading = true
      this.$http.get(url).then((response) => {
        this.products = response.data.products
        this.isLoading = false
        if (response.data.success) {
          this.products = response.data.products
          this.getFavorites()
        }
      })
    },
    getFavorites () {
      this.favorites = [] // 先給我的最愛空陣列
      const favoriteIdArr = JSON.parse(localStorage.getItem('myFavorite')) || [] // 把 hexFavorite 欄位從 localStorage 取出時會是字串，所以要再用 JSON.parse 轉為物件
      // 加到 favorites 陣列裡
      for (let i = 0; i < this.products.length; i += 1) {
        for (let k = 0; k < favoriteIdArr.length; k += 1) {
          if (this.products[i].id === favoriteIdArr[k]) {
            this.favorites.push(this.products[i])
          }
        }
      }
    },
    addMyFavorite (item) {
      // this.myFavorite.push(item.id);
      // this.myFavorite.includes(item.id) 原本是寫 item.id 存 id 就好，但後面要做其他事情可以先存整個物件
      if (this.myFavorite.includes(item.id)) {
        // 這裡意思是 如果我的最愛已經有這個品項，再按一次就代表取消
        this.myFavorite.splice(this.myFavorite.indexOf(item.id), 1)
        this.getFavorites()
        this.getProducts()
        // emitter.emit('update-favorite'); // 更新最愛數量
      } else {
        this.myFavorite.push(item.id) // 否則沒有此品項 就把品項加入
        // emitter.emit('update-favorite'); // 更新最愛數量
      }
      // storageMethods.save(this.myFavorite); // 儲存狀態
      // emitter.emit('update-favorite'); // 更新最愛數量
    },
    getCategories () {
      // Vue 3 雙向綁定 Proxy(new Proxy 物件)
      // new Set
      // 這裡 Set 的 categories 屬於類陣列
      const categories = new Set() // 建在全新的空的物件上
      this.products.forEach((item) => {
        categories.add(item.category) // 把品項加入 categories
      })
      this.categories = [...categories] // 這裡要轉成純陣列的形式存回去  所以這裡要轉為 Proxy 的 categories
    },
    getProduct (id) {
      this.$router.push(`/product/${id}`)
    },
    addCart (id) {
      const url = `${VITE_APP_URL}api/${VITE_APP_PATH}/cart`
      this.status.loadingItem = id
      const cart = {
        product_id: id,
        qty: 1
      }
      this.$http.post(url, { data: cart }).then(() => {
        this.status.loadingItem = ''
      })
    },
    ...mapActions(cartStore, ['getCarts', 'addToCart', 'showAlert'])
  },
  watch: {
    // 監聽特定值
    myFavorite: {
      // 深層監聽
      handler () {
        storageMethods.save(this.myFavorite) // 把資料儲存
        // emitter.emit('update-favorite') // 更新最愛數量
      },
      deep: true
    }
  },
  computed: {
    ...mapState(cartStore, ['cartData', 'cartsLength']),
    // 產生新的資料集 (裡面的值產生變化之後，資料重新運算)
    filterProducts () {
      return this.products.filter((item) => item.category.match(this.selectCategory))
      // 如果選到的產品品項是一樣的就呈現
      // 監聽 this.products  this.selectCategory
      // 空字串，或任何符合結果都會是 “真值”
    }
  },
  created () {
    // 改為 mounted
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

.hover-color:hover {
  color: white;
}

.object-fit {
  object-fit: cover;
}

.img-card {
  width: 100%;
  overflow: hidden;
}

.card-imageUrl {
  overflow: hidden;
}

.card-imageUrl:hover {
  transform: scale(1.2);
  transition: .5s;
}

.card-hover:hover {
  .card-imageUrl {
    transition: all 0.5s ease-out;
    transform: scale(1.2);
  }
}
</style>
