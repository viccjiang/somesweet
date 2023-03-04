<template >
  <div id="delOrderModal" ref="delArticleModal" class="modal fade" tabindex="-1" aria-labelledby="delOrderModalLabel"
    aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content border-0">
        <div class="modal-header bg-danger text-white">
          <h5 id="delOrderModalLabel" class="modal-title">
            <span>刪除文章</span>
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          是否刪除
          <strong class="text-danger">{{ article.title }}</strong> 文章(刪除後將無法恢復)。
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            取消
          </button>
          <button type="button" class="btn btn-danger" @click="$emit('delArticle')">
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
    article: {
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
    this.modal = new Modal(this.$refs.delArticleModal)
  }

}

</script>
