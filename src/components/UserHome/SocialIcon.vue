<template >

  <div v-if="yScrollVaule < 500" class="rounded-4 social-iconposition-fixed end-0 fs-3 " :class="yScrollVaule < 500 ? 'd-none' : ''"  style="z-index:100">
    <a class="text-bk-bread text-opacity-50" href="#"><i class="bi bi-facebook"></i></a>
    <a class="text-bk-bread text-opacity-50" href="#"><i class="bi bi-instagram"></i></a>
    <a class="text-bk-bread text-opacity-50" href="#"><i class="bi bi-messenger"></i></a>
  </div>

  <div v-else class="rounded-4 social-icon d-none d-md-flex flex-column position-fixed end-0 fs-3 "  style="z-index:100">
    <a class="text-bk-bread text-opacity-50" href="#"><i class="bi bi-facebook"></i></a>
    <a class="text-bk-bread text-opacity-50" href="#"><i class="bi bi-instagram"></i></a>
    <a class="text-bk-bread text-opacity-50" href="#"><i class="bi bi-messenger"></i></a>
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

<style lang="scss">
.social-icon {
  top: 50%;
  transform: translateY(-50%);
  padding: 40px;
}
</style>
