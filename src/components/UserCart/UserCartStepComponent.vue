<template>
  <div class="container mb-5">
    <div class="row g-0 ">
      <ul class="steps row row-cols-4 row-cols-md-4 g-0 mb-4">
        <li class=""><small class="ls-3">STEP1</small><span>購物車(確認訂單)</span></li>
        <li class=""><small class="ls-3">STEP1</small><span>建立訂單(填寫資料)</span></li>
        <li class=""><small class="ls-3">STEP2</small><span>建立訂單(確認付款)</span></li>
        <li class=""><small class="ls-3">STEP3</small><span>完成訂單</span></li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {

    }
  },
  methods: {

  },
  computed: {

  },
  mounted () {

  }
}
</script>

<style scoped>
.steps li.active {
  background: #414666;
  color: #fff;
}

.steps li {
  background: rgba(237, 235, 234, .6);
  padding: 1rem;
  text-align: center;
  color: #6c757d;
}
</style>
