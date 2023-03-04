<template >
  <div id="delOrderModal" ref="delCouponModal" class="modal fade" tabindex="-1" aria-labelledby="delOrderModalLabel"
    aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content border-0">
        <div class="modal-header bg-danger text-white">
          <h5 id="delOrderModalLabel" class="modal-title">
            <span>刪除訂單</span>
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          是否刪除
          <strong class="text-danger">{{ coupon.title }}</strong> 優惠券(刪除後將無法恢復)。
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            取消
          </button>
          <button type="button" class="btn btn-danger" @click="$emit('delCoupon')">
            確認刪除
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Modal from 'bootstrap/js/dist/modal'

export default {
  props: {
    coupon: {
      type: Object,
      default () { return {} }
    }
  },
  data () {
    return {
      modal: {}
    }
  },
  methods: {
    showModal () {
      this.modal.show()
    },
    hideModal () {
      this.modal.hide()
    }
  },
  mounted () {
    // console.log(this.$refs)
    this.modal = new Modal(this.$refs.delCouponModal)
  }

}

</script>
