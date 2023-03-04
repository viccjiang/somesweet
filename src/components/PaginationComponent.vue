<template>
  <!-- 若所有頁數小於 1 時就不會顯示分頁 -->
  <nav aria-label="Page navigation example" v-if="pages.total_pages > 1">
    <ul class="pagination">
    <!-- 如果有前一頁就顯示有前一頁的那顆按鈕 -->
    <!-- :class="{ 'disabled': !pages.has_pre }" -->
      <li class="page-item" v-if="pages.has_pre" >
        <!-- 向外觸發外層事件 -->
        <a class="page-link" href="#" aria-label="Previous" @click.prevent="$emit('emitPages', pages.current_page - 1)">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li v-for="(item, index) in pages.total_pages" :key="index" class="page-item"
        :class="{ 'active': item === pages.current_page }">
        <span class="page-link" v-if="item === pages.current_page">{{ item }}</span>
        <a class="page-link" href="#" v-else @click.prevent="$emit('emitPages', item)">{{ item }}</a>
      </li>
      <!-- 如果有下一頁就顯示有下一頁的那顆按鈕 -->
      <!-- :class="{ 'disabled': !pages.has_next }" -->
      <li class="page-item" v-if="pages.has_next" >
      <!-- 向外觸發外層事件 -->
        <a class="page-link" href="#" aria-label="Next" @click.prevent="$emit('emitPages', pages.current_page + 1)">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>

// :pages="{ 頁碼資訊 }"
// @emitPages="更新頁面事件"

export default {
  props: ['pages'],
  data () {
    return {

    }
  },
  methods: {
    // updatePage (page) {
    //   if (this.pages.current_page === page) return
    //   this.$emit('emit-pages', page) // 對外發送事件
    // }
  },
  mounted () {
    // console.log('分頁元件接收到的值', this.pages)
  }
}
</script>
