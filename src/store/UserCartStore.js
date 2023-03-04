import axios from 'axios' // 使用 pinia 只能用 axios，不能用 this 呼叫
import { defineStore } from 'pinia'

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default defineStore('cart', {
  state: () => {
    return {
      cartData: {},
      cartsLength: 0,
      status: {
        loadingItem: '' // 對應品項 id
      },
      // form: {
      //   user: {
      //     name: '',
      //     email: '',
      //     tel: '',
      //     address: '',
      //     shipping: ''
      //   },
      //   message: ''
      // },
      orders: []
    }
  },
  actions: {
    getCarts () {
      axios
        .get(`${VITE_APP_URL}api/${VITE_APP_PATH}/cart`)
        .then((res) => {
          this.cartData = res.data.data
          this.cartsLength = this.cartData.carts.length // 購物車 icon 判斷
          console.log(this.cartData, this.cartsLength)
        })
    },
    addToCart (id, qty = 1) {
      // 當沒有傳入該參數時，會使用預設值
      // this.status.loadingItem = id // 加入購物車之後 spinner 開啟
      const cart = {
        product_id: id,
        qty
      }
      console.log(id, qty)
      axios.post(`${VITE_APP_URL}api/${VITE_APP_PATH}/cart`, { data: cart })
        .then(res => {
          // this.status.loadingItem = '' // 加入購物車之後 spinner 關掉
          console.log('加入購物車', res.data)
          this.getCarts()
        })
    },
    updateCartItem (item) {
      // 購物車的 id, 產品的 id
      const data = {
        product_id: item.product.id,
        qty: item.qty
      }
      axios.put(`${VITE_APP_URL}api/${VITE_APP_PATH}/cart/${item.id}`, { data })
        .then(res => {
          console.log('更新購物車', res.data)
          this.getCarts()
        })
    },
    deleteItem (id) {
      axios.delete(`${VITE_APP_URL}api/${VITE_APP_PATH}/cart/${id}`)
        .then(res => {
          console.log(res)
          this.getCarts()
        })
    },
    deleteAllItem () {
      axios.delete(`${VITE_APP_URL}api/${VITE_APP_PATH}/carts`)
        .then(res => {
          console.log(res)
          this.getCarts()
        })
    }
    // createOrder () {
    //   const url = `${VITE_APP_URL}api/${VITE_APP_PATH}/order`
    //   const order = this.form
    //   axios.post(url, { data: order }).then((response) => {
    //     console.log(response)
    //     this.$router.push(`/order_payment/${response.data.orderId}`)
    //     this.$refs.form.resetForm()
    //     this.getCarts()
    //   }).catch((err) => {
    //     alert(err.data.message)
    //   })
    // },
    // getOrders () {
    //   const url = `${VITE_APP_URL}api/${VITE_APP_PATH}/orders`
    //   axios.get(url)
    //     .then(res => {
    //       console.log(res.data.orders)
    //       this.orders = res.data.orders
    //     })
    // }

  }

})
