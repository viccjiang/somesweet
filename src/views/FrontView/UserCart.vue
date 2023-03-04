<template>
  <!-- 1. 購物車(確認訂單) -->
  <UserCartStepComponent></UserCartStepComponent>
  <!-- 購物車列表 -->
  <div class="container" v-if="cartsLength > 0">
    <div class="text-start">
      <a v-if="cartsLength > 0" class="border-bottom border-danger text-danger" type="button" @click="deleteAllItem"> <i
          class="bi bi-trash3 text-danger me-2"> </i>清空所有商品</a>
    </div>
    <table class="table align-middle">
      <thead>
        <tr>
          <th></th>
          <th>品名</th>
          <th style="width: 100px">數量/單位</th>
          <th class="text-end">單價</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <template v-if="cartData.carts">
          <tr v-for="item in cartData.carts" :key="item.id">
            <td> <a href="#" @click.prevent="getProduct(item.product.id)"><img :src="item.product.imageUrl" alt=""
                  class="object-fit d-none d-md-block  rounded-4" style="width:100px ;height:100px"> </a> </td>
            <td>
              <a href="#" class="text-dark" @click.prevent="getProduct(item.product.id)"> {{ item.product.title }}</a>
              <!-- <div class="text-success"> 已套用優惠券 </div> -->
            </td>
            <td>
              <div class="input-group input-group-sm">
                <select name="" id="" class="form-select" v-model="item.qty" @change="updateCartItem(item)">
                  <option :value="i" v-for="i in 20" :key="i + '1234578'">{{ i }}</option>
                </select>
              </div>
              <p>{{ item.product.unit }}</p>
            </td>
            <td class="text-end">
              <!-- <small class="text-success">折扣價：</small> -->
              {{ item.total }}
            </td>
            <td class=" text-end">
              <a href="" @click.prevent="deleteItem(item.id)"><i class="bi bi-trash3 text-danger"></i></a>
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
          <td class="text-end">{{ cartData.total }}</td>
          <td></td>
        </tr>
        <tr>
          <td colspan="3" class="text-end text-success">折扣價</td>
          <td class="text-end text-success">{{ cartData.final_total }}</td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  </div>
  <div class="container">
    <div class="row ">
      <div class="d-flex justify-content-between">
        <router-link to="/products" class="btn btn-outline-primary px-5">繼續選購</router-link>
        <router-link v-if="cartsLength > 0" to="/checkout" class="btn btn-danger px-5">下一步
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import cartStore from '../../store/UserCartStore'
import { mapActions, mapState } from 'pinia'
import UserCartStepComponent from '../../components/UserCart/UserCartStepComponent.vue'

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
  data () {
    return {
      products: []
      // cart: {},
      // productId: ''
    }
  },
  components: {
    UserCartStepComponent
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
    ...mapActions(cartStore, ['addToCart', 'getCarts', 'updateCartItem', 'deleteItem', 'deleteAllItem', 'createOrder', 'getOrders'])

  },
  computed: {
    ...mapState(cartStore, ['cartData', 'cartsLength'])
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
