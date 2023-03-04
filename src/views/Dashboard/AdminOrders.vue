<template >
  <div class="table-responsive">
    <table class="table table-hover mt-4">
      <thead>
        <tr>
          <th>購買時間</th>
          <th >Email</th>
          <th>購買款項</th>
          <th>應付金額</th>
          <th>是否付款</th>
          <th>編輯</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="item in orders" :key="item.id">
          <tr v-if="orders.length" :class="{ 'text-bk-gray': !item.is_paid }">
            <td>{{ item.create_at }}</td>
            <td ><span v-text="item.user.email" v-if="item.user"></span></td>
            <td>
              <ul class="list-unstyled">
                <li v-for="(product, i) in item.products" :key="i">
                  {{ product.product.title }} 數量：{{ product.qty }}
                  {{ product.product.unit }}
                </li>
              </ul>
            </td>
            <td class="text-right">{{ item.total }}</td>
            <td>

              <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" :id="`paidSwitch${item.id}`" v-model="item.is_paid"
                  @change="updatePaid(item)" />
                <label class="form-check-label" :for="`paidSwitch${item.id}`">
                  <span v-if="item.is_paid">已付款</span>
                  <span v-else>未付款</span>
                </label>

                <!-- <div class="form-check form-switch">
                  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
                  <label class="form-check-label" for="flexSwitchCheckChecked">Checked switch checkbox input</label>
                </div> -->

              </div>
            </td>
            <td>
              <button class="btn btn-outline-primary btn-sm m-1" type="button" @click="openModal(item)">
                <i class="bi bi-pencil-square"></i>
              </button>
              <button class="btn btn-outline-danger btn-sm m-1" type="button" @click="openDelOrderModal(item)">
                <i class="bi bi-trash3-fill"></i>
              </button>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
    <!-- 分頁元件 -->
    <Pagination :pages="pagination" @emitPages="getOrders"></Pagination>
  </div>
  <!-- 訂單元件 -->
  <OrderModal ref="orderModal" :order="tempOrder" @update-paid="updatePaid"></OrderModal>
  <!-- 刪除訂單元件 -->
  <DelModal ref="delModal" :order="tempOrder" @del-order="delOrder"></DelModal>
</template>

<script>
import DelModal from '../../components/Dashboard/AdminOrderDelModal.vue'
import OrderModal from '../../components/Dashboard/AdminOrderModal.vue'
import Pagination from '../../components/PaginationComponent.vue'

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
  data () {
    return {
      pagination: {},
      orders: {},
      tempOrder: {},
      page: 1
    }
  },
  components: {
    Pagination,
    OrderModal,
    DelModal
  },
  methods: {
    getOrders (page = 1) {
      this.page = page
      this.$http.get(`${VITE_APP_URL}api/${VITE_APP_PATH}/admin/orders?page=${page}`)
        .then(res => {
          // console.log(res)
          const { orders, pagination } = res.data
          this.orders = orders
          this.pagination = pagination
          console.log('後台訂單:', orders, '後台訂單分頁', pagination)
        })
    },
    openModal (item) {
      this.tempOrder = { ...item }
      const orderComponent = this.$refs.orderModal
      orderComponent.openModal()
    },
    openDelOrderModal (item) {
      this.tempOrder = { ...item }
      const delComponent = this.$refs.delModal
      delComponent.showModal()
    },
    updatePaid (item) {
      const paid = {
        is_paid: item.is_paid
      }
      this.$http.put(`${VITE_APP_URL}api/${VITE_APP_PATH}/admin/order/${item.id}`, { data: paid }).then((res) => {
        console.log(res)
        const orderComponent = this.$refs.orderModal

        orderComponent.hideModal()
        this.getOrders(this.page)
      }).catch((err) => {
        console.log(err)
      })
    },

    delOrder () {
      this.$http.delete(`${VITE_APP_URL}api/${VITE_APP_PATH}/admin/order/${this.tempOrder.id}`).then(() => {
        const delComponent = this.$refs.delModal
        delComponent.hideModal()
        this.getOrders(this.page)
      }).catch((err) => {
        console.log(err)
      })
    }
  },
  mounted () {
    this.getOrders()
  }
}

</script>
