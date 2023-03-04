<!-- eslint-disable vue/no-parsing-error -->
<template>
  <!-- 2. 建立訂單(填寫資料) -->
  <UserCartStepComponent></UserCartStepComponent>
  <div>
    <div class="bg-light pt-5 pb-7 mt-5">
      <div class="container">
        <div class="row justify-content-center flex-column flex-md-row ">
          <!-- 訂單明細 -->
          <div class="col-md-5 sticky-lg-top position-lg-sticky h-50 ">
            <div class="border rounded-4 p-4 mb-4 ">
              <h4 class="mb-4">訂單明細</h4>

              <div class="d-flex " v-for="item in cartData.carts" :key="item.id">
                <img :src="item.product.imageUrl" alt="" class="me-2 my-1"
                  style="width: 48px; height: 48px; object-fit: cover">
                <div class="w-100">
                  <div class="d-flex justify-content-between fw-bold">
                    <p class="mb-0">{{ item.product.title }}</p>
                    <p class="mb-0">x {{ item.qty }}</p>
                  </div>
                  <div class="d-flex justify-content-between ">
                    <p class="text-muted mb-0"><small>NT${{ item.product.price }}</small></p>
                    <p class="mb-0">NT${{ item.final_total }}</p>
                  </div>
                </div>
              </div>

              <table class="table mt-4 border-top border-bottom text-muted ">
                <tbody>
                  <tr>
                    <th scope="row" class="border-0 px-0 pt-4 font-weight-normal">Subtotal</th>
                    <td class="text-end border-0 px-0 pt-4"> NT${{ cartData.total }} </td>
                  </tr>
                  <tr>
                    <th scope="row" class="border-0 px-0 pt-0 pb-4 font-weight-normal">套用優惠券</th>
                    <td class="text-end border-0 px-0 pt-0 pb-4"> NT${{ cartData.final_total }} </td>
                  </tr>
                </tbody>
              </table>
              <div class="d-flex justify-content-between mt-4">
                <p class="mb-0 h4 fw-bold">Total</p>
                <p class="mb-0 h4 fw-bold">NT${{ cartData.final_total }}</p>
              </div>
            </div>
          </div>
          <!-- 表單驗證的部分 -->
          <div class="col-md-7 ">
            <div class="row justify-content-center p-4 ">
              <h4 class="mb-4">填寫訂購資訊</h4>
              <FormView ref="form" class="border rounded-4 p-10" v-slot="{ errors }" @submit="createOrder">
                <div class="mb-3 ">
                  <label for="email" class="form-label">Email</label>
                  <FieldView id="email" name="email" label="信箱" type="email" class="form-control rounded-3"
                    :class="{ 'is-invalid': errors['email'] }" placeholder="請輸入 Email" rules="email|required"
                    v-model="form.user.email"></FieldView>
                  <error-message name="email" class="invalid-feedback"></error-message>
                </div>

                <div class="mb-3">
                  <label for="name" class="form-label">收件人姓名</label>
                  <FieldView id="name" name="name" label="姓名" type="text" class="form-control rounded-3"
                    :class="{ 'is-invalid': errors['name'] }" rules="required" v-model="form.user.name" placeholder="請輸入姓名">
                  </FieldView>
                  <error-message name="name" class="invalid-feedback"></error-message>
                </div>

                <div class="mb-3">
                  <label for="tel" class="form-label">收件人電話</label>
                  <FieldView id="tel" name="tel" label="電話" type="text" class="form-control rounded-3"
                    :class="{ 'is-invalid': errors['tel'] }" rules="required|min:8|max:10" v-model="form.user.tel"
                    placeholder="請輸入電話"></FieldView>
                  <error-message name="tel" class="invalid-feedback"></error-message>
                </div>

                <div class="mb-3">
                  <label for="address" class="form-label">收件人地址</label>
                  <FieldView id="address" name="address" label="地址" type="text" class="form-control rounded-3"
                    :class="{ 'is-invalid': errors['address'] }" rules="required" v-model="form.user.address"
                    placeholder="請輸入地址"></FieldView>
                  <error-message name="address" class="invalid-feedback"></error-message>
                </div>

                <div class="mb-3">
                  <label for="address" class="form-label">交易方式</label>
                  <FieldView id="name" name="trade" label="交易方式" class="form-select rounded-3" :class="{ 'is-invalid': errors['trade'] }"
                    placeholder="請輸入交易方式" rules="required" v-model="form.user.shipping" as="select">
                    <option value="">請選擇交易方式</option>
                    <option value="ATM">ATM</option>
                    <option value="匯款">匯款</option>
                    <option value="信用卡">信用卡</option>
                  </FieldView>
                  <error-message name="trade" class="invalid-feedback"></error-message>
                </div>

                <div class="mb-5">
                  <label for="message" class="form-label">留言</label>
                  <textarea id="message" class="form-control rounded-4" cols="30" rows="10"
                    v-model="form.user.message"></textarea>
                </div>
                <div class="text-end">
                  <button type="submit" class="btn btn-danger mb-5 ">送出訂單</button>
                </div>
              </FormView>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 查詢訂單 -->
<!-- <div class="container">
    <button type="button" class="btn btn-outline-danger" @click="getOrders">取得所有目前訂單 </button>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">訂單編號</th>
          <th scope="col">購買時間</th>
          <th scope="col">產品價格</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in orders" :key="item.id">
          <th scope="row">{{ item.id }}</th>
          <td>{{ item.create_at }}</td>
          <td>{{ item.total }}</td>
        </tr>
      </tbody>
    </table>
        </div> -->
</template>

<script>
import cartStore from '../../store/UserCartStore'
import { mapActions, mapState } from 'pinia'
import UserCartStepComponent from '../../components/UserCart/UserCartStepComponent.vue'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
  data () {
    return {
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
          shipping: ''
        },
        message: ''
      },
      orders: []
      // cart: []
    }
  },
  components: {
    UserCartStepComponent
  },
  methods: {
    // getCarts () {
    //   this.$http.get(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/cart`)
    //     .then(res => {
    //       this.cart = res.data.data
    //       console.log('購物車:', this.cart)
    //     })
    // },
    getOrders () {
      const url = `${VITE_APP_URL}api/${VITE_APP_PATH}/orders`
      this.$http.get(url)
        .then(res => {
          console.log(res.data.orders)
          this.orders = res.data.orders
        })
    },
    createOrder () {
      const url = `${VITE_APP_URL}api/${VITE_APP_PATH}/order`
      const order = this.form
      this.$http.post(url, { data: order }).then((response) => {
        console.log(response)
        if (response.data.success) {
          this.$router.push(`/order_payment/${response.data.orderId}`)
          this.$refs.form.resetForm()
        }
        this.getCarts()
      }).catch((err) => {
        alert(err.data.message)
      })
    },
    ...mapActions(cartStore, ['addToCart', 'getCarts', 'updateCartItem', 'deleteItem', 'deleteAllItem'])
  },
  computed: {
    ...mapState(cartStore, ['cartData', 'cartsLength'])
  },
  mounted () {
    this.getCarts()
  }
}

</script>
