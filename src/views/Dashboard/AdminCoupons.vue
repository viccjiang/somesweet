<template>
  <div>
    <div class="text-end mt-4">
      <button class="btn btn-primary" type="button" @click="openCouponModal(true)">
        建立新的優惠券
      </button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th>名稱</th>
          <th>折扣百分比</th>
          <th>到期日</th>
          <th>是否啟用</th>
          <th>編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, key) in coupons" :key="key">
          <td>{{ item.title }}</td>
          <td>{{ item.percent }}%</td>
          <td>{{ item.due_date }}</td>
          <td>
            <span v-if="item.is_enabled === 1" class="text-success">啟用</span>
            <span v-else-if="item.is_enabled === 0" class="text-muted">未啟用</span>
          </td>
          <td>
            <button class="btn btn-outline-primary btn-sm me-1 mb-1" @click="openCouponModal(false, item)"><i
                class="bi bi-pencil-square"></i></button>
            <button class="btn btn-outline-danger btn-sm me-1 mb-1" @click="openCouponDelModal(item)"><i
                class="bi bi-trash3-fill"></i></button>
          </td>
        </tr>
      </tbody>
    </table>
    <Pagination :pages="pagination" @emitPages="getCoupons"/>
    <AdminCouponModal ref="couponModal" :coupon="tempCoupon" :is-new="isNew" @update-coupon="updateCoupon" />
    <AdminCouponDelModal ref="delCouponModal" :coupon="tempCoupon" @del-coupon="delCoupon" />
  </div>
</template>

<script>
import AdminCouponDelModal from '../../components/Dashboard/AdminCouponDelModal.vue'
import AdminCouponModal from '../../components/Dashboard/AdminCouponModal.vue'
import Pagination from '../../components/PaginationComponent.vue'

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
  data () {
    return {
      coupons: {},
      tempCoupon: {
        title: '',
        is_enabled: 0,
        percent: 100,
        code: ''
      },
      isNew: false,
      pagination: {}
    }
  },
  components: {
    AdminCouponModal,
    AdminCouponDelModal,
    Pagination
  },
  methods: {
    getCoupons () {
      this.$http(`${VITE_APP_URL}api/${VITE_APP_PATH}/admin/coupons`)
        .then(res => {
          // console.log(res)
          const { coupons, pagination } = res.data
          this.coupons = coupons
          this.pagination = pagination
          // console.log(coupons)
        })
    },
    openCouponModal (status, item) {
      this.isNew = status
      console.log(status)
      // 若是新的優惠券的話
      if (this.isNew) {
        this.tempCoupon = {
          // 先預設到期日
          due_date: new Date().getTime() / 1000
        }
        console.log(this.tempCoupon)
      } else { // 不是新的優惠券
        this.tempCoupon = { ...item }
        console.log(this.tempCoupon)
      }
      this.$refs.couponModal.showModal()
    },
    // 內層傳出來，並且傳參數
    updateCoupon (tempCoupon) {
      // 如果 -> 新的就新增 POST ， 不是新的就是更新 PUT
      let api = `${VITE_APP_URL}api/${VITE_APP_PATH}/admin/coupon`
      let httpMethos = 'post'
      let data = tempCoupon
      console.log(tempCoupon)

      if (!this.isNew) {
        api = `${VITE_APP_URL}api/${VITE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`
        httpMethos = 'put'
        data = this.tempCoupon
        console.log(data)
      }
      this.$http[httpMethos](api, { data })
        .then(res => {
          if (res.data.success) {
            console.log(res)
            this.getCoupons()
            this.$refs.couponModal.hideModal()
          } else {
            console.log('資料不完整')
          }
        })
        .catch(err => {
          console.dir(err.response)
        })
    },

    openCouponDelModal (item) {
      this.tempCoupon = { ...item }
      this.$refs.delCouponModal.showModal()
    },
    delCoupon () {
      this.$http.delete(`${VITE_APP_URL}api/${VITE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`)
        .then(res => {
          console.log(res)
          this.$refs.delCouponModal.hideModal()
          this.getCoupons()
        })
    }
  },
  mounted () {
    this.getCoupons()
  }
}
</script>
