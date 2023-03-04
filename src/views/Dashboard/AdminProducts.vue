<template >

    <div class="">
      <div class="text-end mt-4">
        <button class="btn btn-primary" @click="openModal('new')">
          建立新的產品
        </button>
      </div>
      <table class="table table-hover mt-4">
        <thead>
          <tr>
            <th width="120">
              分類
            </th>
            <th>產品名稱</th>
            <th width="120">
              原價
            </th>
            <th width="120">
              售價
            </th>
            <th width="100">
              是否啟用
            </th>
            <th width="120">
              編輯
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item) in products" :key="item.id">
            <td>{{ item.category }}</td>
            <td>{{ item.title }}</td>
            <td class="text-end">
              {{ item.origin_price }}
            </td>
            <td class="text-end">
              {{ item.price }}
            </td>
            <td>
              <!-- <span v-if="item.is_enabled" class="text-success">啟用</span>
              <span v-else>未啟用</span> -->
              <span v-bind:class="{ 'text-success': item.is_enabled }">
                {{ item.is_enabled ? '啟用' : '未啟用' }}
              </span>
            </td>
            <td>
              <div class="">
                <button type="button" class="btn btn-outline-primary btn-sm m-1" @click="openModal('edit', item)">
                  <i class="bi bi-pencil-square"></i>
                </button>
                <button type="button" class="btn btn-outline-danger btn-sm m-1" @click="openModal('delete', item)">
                  <i class="bi bi-trash3-fill"></i>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- 分頁元件 -->
      <pagination :pages="pagination" @emit-pages="getData"></pagination>
      <!-- 分頁元件 -->
    </div>
    <productmodal ref="productModal" :product="tempProduct" :is-new="isNew" @update-product="updateProduct"
      @create-images="createImages">
    </productmodal>
    <!-- Modal -->
    <!-- <product-modal ref="product" :product="tempProduct" :is-new="isNew" @update="getData"></product-modal> -->
    <delproductmodal ref="delProductModal" :product="tempProduct" @del-product="delProduct"></delproductmodal>
    <!-- Modal -->
</template>

<script>

import pagination from '../../components/PaginationComponent.vue'
import productmodal from '../../components/Dashboard/AdminProductModal.vue'
import delproductmodal from '../../components/Dashboard/AdminProductDelModal.vue'

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
  components: {
    pagination,
    productmodal,
    delproductmodal
  },
  data () {
    return {
      products: [],
      tempProduct: {
        imagesUrl: []
      },
      pagination: {},
      isNew: false
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    // /v2/api/{api_path}/admin/products
    getData (page = 1) {
      const url = `${VITE_APP_URL}api/${VITE_APP_PATH}/admin/products?page=${page}`
      // 點擊分頁時滾到上方
      window.scrollTo(0, 0)
      this.$http.get(url)
        .then((response) => {
          console.log(response)
          // 先把 products pagination資料存起來
          const { products, pagination } = response.data
          this.products = products
          this.pagination = pagination
          console.log('後台產品: ', this.products)
          console.log('後台分頁: ', this.pagination)
        }).catch(() => {
          // console.dir(err.data.message)
          this.$router.push('/login')
          // window.location = 'index.html'
        })
    },
    openModal (status, product) {
      if (status === 'new') { // 傳入的變數是新增
        this.tempProduct = { // 帶入初始資料
          imagesUrl: []
        }
        this.isNew = true // 新增的
        this.$refs.productModal.showModal()
      } else if (status === 'edit') { // 傳入的變數是編輯
        this.tempProduct = { ...product } // 帶入當前要編輯的資料
        this.isNew = false // 不是新增的
        this.$refs.productModal.showModal()
      } else if (status === 'delete') { // 傳入的變數是刪除
        this.tempProduct = { ...product } // 帶入當前要刪除的資料
        this.$refs.delProductModal.showModal()
      }
    },
    updateProduct () {
      // 新增商品
      let api = `${VITE_APP_URL}api/${VITE_APP_PATH}/admin/product`
      let httpMethod = 'post'

      // 用 isNew 判斷 API 如何運行

      // 當不是新增商品時則切換成編輯商品 API
      if (!this.isNew) {
        api = `${VITE_APP_URL}api/${VITE_APP_PATH}/admin/product/${this.tempProduct.id}`
        httpMethod = 'put'
      }
      // 帶入請求方法變數 httpMethod
      this.$http[httpMethod](api, { data: this.tempProduct })
        .then((response) => {
          alert(response.data.message)
          // 重新取得列表
          this.getData()
          // 按下確定更新取值之後關閉 modal
          this.$refs.productModal.hideModal()
        }).catch((err) => {
          console.dir(err)
        })
    },
    delProduct () {
      this.$http.delete(`${VITE_APP_URL}api/${VITE_APP_PATH}/admin/product/${this.tempProduct.id}`).then((response) => {
        // 重新取得列表
        this.getData()
        // 按下確定更新取值之後關閉 modal
        this.$refs.delProductModal.hideModal()
        // this.$emit('update');
      }).catch((err) => {
        alert(err.data.message)
      })
    },
    createImages () {
      this.tempProduct.imagesUrl = []
      this.tempProduct.imagesUrl.push('')
    }
  }
}

</script>
