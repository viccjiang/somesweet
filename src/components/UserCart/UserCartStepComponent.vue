<template>
  <div class="container mb-5 mt-10">
    <ul class="steps row flex-nowrap  mb-4  ">
      <li class="col  rounded-4 me-2" :class="{ 'active': this.$route.path === '/cart' }"><span class="ms-2">1. 確認訂單</span>
      </li>
      <li class="col rounded-4 me-2" :class="{ 'active': this.$route.path === '/checkout' }"><span class="ms-2">2. 填寫資料</span>
        </li>
      <li class="col rounded-4 me-2" :class="{ 'active': this.$route.name === 'order_payment' }"><span class="ms-2">3. 確認付款</span>
        </li>
      <li class="col  rounded-4 " :class="{ 'active': this.$route.path === '/order_completed' }"><span class="ms-2">4. 完成訂單</span>
        </li>
    </ul>
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
