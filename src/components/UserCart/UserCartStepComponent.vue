<template>
  <div class="container mb-5">
    <ul class="steps row flex-nowrap  mb-4  ">
      <li class="col  rounded-4 me-2" :class="{ 'active': this.$route.path === '/cart' }"><small class="ls-3">STEP
          1</small><span>確認訂單</span></li>
      <li class="col rounded-4 me-2" :class="{ 'active': this.$route.path === '/checkout' }"><small class="ls-3">STEP
          2</small><span>填寫資料</span></li>
      <li class="col rounded-4 me-2" :class="{ 'active': this.$route.name === 'order_payment' }"><small class="ls-3">STEP
          3</small><span>確認付款</span></li>
      <li class="col  rounded-4 me-2" :class="{ 'active': this.$route.path === '/order_completed' }"><small class="ls-3">STEP
          4</small><span>完成訂單</span></li>
    </ul>
  </div>
</template>

<script>

console.log(location.pathname)

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
.cursor {
  cursor: pointer;
}

.steps li.active {
  background: #034d83;
  color: #fff;
}

.steps li {
  background: rgba(237, 235, 234, .6);
  padding: 1rem;
  text-align: center;
  color: #6c757d;

}

.steps .steps-item{
  width: 50px;
}
</style>
