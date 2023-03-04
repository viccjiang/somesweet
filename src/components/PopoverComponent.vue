<template>
  <!-- <button type="button" class="btn btn-lg btn-danger" data-bs-toggle="popover" data-bs-title="Popover title" data-bs-content="And here's some amazing content. It's very engaging. Right?">Click to toggle popover</button> -->
  <button type="button" ref="popover" class="btn btn-primary" @click="popoverShow">Click popover</button>
</template>

<script>
import Popover from 'bootstrap/js/dist/Popover'

export default {
  data () {
    return {
      popover: ''
    }
  },
  methods: {
    popoverShow () {
      this.popover.show()
    }
  },
  mounted () {
    this.popover = new Popover(this.$refs.popover, {
      content: '注意事項'
    })
    this.$router.beforeEach((to, from, next) => {
      this.popover.hide()
      next()
    })
  }

}
</script>

<style scoped lang="scss">

</style>
