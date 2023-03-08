<template>
  <VueLoading :active="isLoading" loader="bars" color="#034D83" />
  <!-- 1. 購物車(確認訂單) -->
  <UserCartStepComponent v-if="cartsLength > 0"></UserCartStepComponent>
  <!-- 購物車列表沒東西 -->
  <div v-if="cartsLength == 0" class="text-center">
    <div class="card border-0 rounded-0 bg-dark text-white">
      <img style="
                            height: 70vh;
                            background-image: url(https://storage.googleapis.com/vue-course-api.appspot.com/jiangs2023/1678158943058.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Jn44%2B%2Bkd2gsFMtS91bnOaxSgmiZ1%2Byv%2B9wCGscJsTeCPU%2FnJc9ZMY5OM9AHec%2FYg0WQ%2BBMf2MqVBex%2Buondfr5cs8qgrLhRaqjzancMVsdSQh7%2Bt%2Bvve3ZpNoGtFIw29HggFVxqpBmJfWJU43sheDg966D5usj5PlkswQ7xutpIJwBZSAu4tuYZ%2BhVszThrE3rXRR9BRRfXvRxgiJpPlrlg3XxAbSE%2BvNgwq4iRl11eaE5fXuWGI8nRu4ORW%2FhG1SBtgGsYb0TAJ4jFPxNlDKjmI%2FBal2WrWD32jtOjvsSUbtxatHQ5OKx0vos6oW%2BIonUawlg6B%2FsNcChWBXVxDZw%3D%3D);
                            background-size: cover;
                            background-position: center bottom;
                            object-fit: cover;
                            background-attachment: fixed;
                            background-blend-mode: multiply;
                            background-color: rgba(0, 0, 0, 0.6);
                          " />
      <div class="
                            card-img-overlay
                            d-flex
                            flex-column
                            justify-content-center
                            align-item-center
                          ">
        <h2 class="card-title text-center ">
          購物車是空的 <br />請至 <RouterLink class="text-light fw-bold" to="/products">清晨甜點</RouterLink> 選購
        </h2>
        <div class="d-flex align-items-center justify-content-center mt-5">
          <button type="button" class="btn btn-outline-secondary me-5">
            <RouterLink class="text-light" to="/">返回首頁</RouterLink>
          </button>
          <button type="button" class="btn btn-light">
            <RouterLink class="text-dark" to="/products">繼續購物</RouterLink>
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- 購物車列表 -->
  <div class="container" v-if="cartsLength > 0">
    <div class="text-end mb-7">
      <!-- @click="deleteAllItem" -->
      <a v-if="cartsLength > 0" class="border-bottom border-danger text-danger" type="button"
        @click="openAllDelProductModal(cartData)"> <i class="bi bi-trash3 text-danger me-2"> </i>清空所有商品</a>
    </div>
    <table class="table align-middle table-hover">
      <thead>
        <tr>
          <th></th>
          <th>品名</th>
          <th style="width: 100px">數量</th>
          <th class="text-end">單價</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <template v-if="cartData.carts">
          <tr v-for="item in cartData.carts" :key="item.id">
            <td style="width:15%">
              <a href="#" @click.prevent="getProduct(item.product.id)"><img :src="item.product.imageUrl" alt=""
                  class="object-fit d-none d-md-block  rounded-4" style="width:100px ;height:100px"> </a>
            </td>
            <td>
              <a href="#" class="text-dark d-block" @click.prevent="getProduct(item.product.id)"> {{ item.product.title
              }}</a>
              <!-- <div class="text-success"> 已套用優惠券 </div> -->
            </td>
            <td>
              <div class="input-group input-group-sm">
                <select name="" id="" class="form-select" v-model="item.qty" @change="updateCartItem(item)">
                  <option :value="i" v-for="i in 20" :key="i + '1234578'">{{ i }}</option>
                </select>
              </div>
              <!-- <p>{{ item.product.unit }}</p> -->
            </td>
            <td class="text-end">
              <!-- <small class="text-success">折扣價：</small> -->
              {{ toThousands(item.total) }}
            </td>
            <td class=" text-end">
              <a href="" @click.prevent="openDelProductModal(item)"><i class="bi bi-trash3 text-danger"></i></a>
              <!-- <button type="button" class="btn btn-outline-danger btn-sm" @click="deleteItem(item.id)">
                x
              </button> -->
            </td>
          </tr>
        </template>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="3" class="text-end">總計</td>
          <td class="text-end">{{ toThousands(cartData.total) }}</td>
          <td></td>
        </tr>

        <tr>
          <td colspan="3" class="text-end text-success">折扣完總金額</td>
          <td class="text-end text-success">{{ toThousands(cartData.final_total) }}</td>
          <td></td>
        </tr>
      </tfoot>
    </table>
    <!-- 優惠券 -->
    <div class="row justify-content-end">
      <div class="col-12 col-md-5 ">
        <div class="coupon input-group mb-3 input-group-sm">
          <input type="text" class="form-control border-0 border-bottom" v-model="coupon_code" placeholder="請輸入優惠碼" />
          <div class="input-group-append">
            <button class="btn btn-primary rounded-0 border " :class="{ disabled: coupon_code === '' }" type="button"
              @click="addCouponCode">
              套用優惠碼
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container mt-10 mb-10" v-if="cartsLength > 0">
    <div class="row ">
      <div class="d-flex justify-content-between">
        <router-link to="/products" class="btn btn-outline-primary px-5">繼續選購</router-link>
        <router-link v-if="cartsLength > 0" to="/checkout" class="btn btn-danger px-5 text-white">下一步
        </router-link>
      </div>
    </div>
  </div>
  <DelModal :product="tempProduct" :cartData="tempCart" ref="delModal" id="delModal" @del-product="deleteItem" />
</template>

<script>
import VueLoading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'
import DelModal from '../../components/UserCart/UserCartDelModal.vue'
import cartStore from '../../store/UserCartStore'
import { mapActions, mapState } from 'pinia'
import UserCartStepComponent from '../../components/UserCart/UserCartStepComponent.vue'

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
  data () {
    return {
      products: [],
      tempProduct: {},
      tempCart: {},
      // cart: {},
      // productId: ''
      coupon_code: '',
      id: ''
      // isLoading: false
    }
  },
  components: {
    UserCartStepComponent,
    DelModal,
    VueLoading
  },
  methods: {
    getProducts () {
      // this.isLoading = true
      this.$http.get(`${VITE_APP_URL}api/${VITE_APP_PATH}/products/all`)
        .then(res => {
          console.log('產品列表:', res.data.products)
          this.products = res.data.products
          // this.isLoading = false
        })
    },
    getProduct (id) {
      this.$router.push(`/product/${id}`)
    },
    openDelProductModal (item) {
      this.tempProduct = { ...item }
      console.log(this.tempProduct)
      this.modal.show()
    },
    openAllDelProductModal (item) {
      this.tempCart = { ...item }
      console.log(this.cartData)
      this.modal.show()
    },
    // 套用優惠券
    addCouponCode () {
      const url = `${VITE_APP_URL}api/${VITE_APP_PATH}/coupon`
      const coupon = {
        code: this.coupon_code
      }
      this.$http
        .post(url, { data: coupon })
        .then((response) => {
          console.log(response)
          this.coupon_code = ''
          this.getCarts()
        })
    },
    ...mapActions(cartStore, ['addToCart', 'getCarts', 'updateCartItem', 'deleteItem', 'deleteAllItem', 'createOrder', 'getOrders', 'setModal', 'toThousands'])

  },
  computed: {
    ...mapState(cartStore, ['cartData', 'cartsLength', 'modal', 'isLoading'])
  },
  mounted () {
    this.getProducts()
    this.getCarts()
    // this.getOrders();
  }

}
</script>

<style scoped>
.steps li.active {
  background: #414666;
  color: #fff;
}

.steps li {
  background: rgba(237, 235, 234, .6);
  padding: 1rem;
  text-align: center;
  color: #6c757d;
}
</style>
