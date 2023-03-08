import axios from 'axios' // 使用 pinia 只能用 axios，不能用 this 呼叫
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

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
      orders: [],
      modal: '',
      isLoading: false
    }
  },
  actions: {
    getCarts () {
      this.isLoading = true
      axios
        .get(`${VITE_APP_URL}api/${VITE_APP_PATH}/cart`)
        .then((res) => {
          this.isLoading = false
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
          this.showAlert()
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
          console.log(id)
          console.log(res)
          this.getCarts()
          this.modal.hide()
        })
    },
    deleteAllItem () {
      axios.delete(`${VITE_APP_URL}api/${VITE_APP_PATH}/carts`)
        .then(res => {
          console.log(res)
          this.getCarts()
          this.modal.hide()
        })
    },
    setModal (item) {
      this.modal = item
      console.log(this.modal)
    },
    showAlert () {
      // Use sweetalert2
      // Swal.fire({
      //   position: 'top-end',
      //   icon: 'success',
      //   title: '已加入購物車',
      //   showConfirmButton: false,
      //   timer: 2000,
      //   iconColor: '#236F6B',
      //   width: 300,
      //   // padding: '3em',
      //   color: '#236F6B'
      //   // background: '#fff url(/images/trees.png)',
      // })
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      Toast.fire({
        icon: 'success',
        title: '已加入購物車'
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
