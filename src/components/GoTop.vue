<template>
  <div @click="goTop">
    <div class="position-fixed end-0  bottom-5  cursor-pointer" style="z-index:100"
      :class="yScrollVaule < 50 ? 'd-none' : ''">
        <i class="bi bi-arrow-up-circle-fill px-5 px-md-10 py-2 rounded-1 fs-1 text-primary" style="opacity:0.5"></i>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      yScrollVaule: ''
    }
  },
  methods: {
    scrollWatch () {
      // 取得scrollY數值
      this.yScrollVaule = window.scrollY
    },
    goTop () {
      document.documentElement.scrollTop = 0
    }

  },
  mounted () {
    // 監聽scroll，scrollWatch會寫入轉動網頁的y軸
    window.addEventListener('scroll', this.scrollWatch)
  }
}
</script>
