<template>
  <div class="container mt-10 mb-10">
    <div class="position-relative m-4">
      <div class="progress" style="height: 1px;">
        <div class="progress-bar" role="progressbar" aria-label="Progress" style="" aria-valuenow="50"
          aria-valuemin="0" aria-valuemax="100"></div>
          <div class="progress-bar" role="progressbar" aria-label="Progress" style="" aria-valuenow="50"
          aria-valuemin="0" aria-valuemax="100"></div>
          <div class="progress-bar" role="progressbar" aria-label="Progress" style="" aria-valuenow="50"
          aria-valuemin="0" aria-valuemax="100"></div>
          <div class="progress-bar" role="progressbar" aria-label="Progress" style="" aria-valuenow="50"
          aria-valuemin="0" aria-valuemax="100"></div>

      </div>
      <button type="button" class="position-absolute top-0 start-0 translate-middle btn btn-sm  rounded-pill " :class="{ 'btn-primary': this.$route.path === '/cart' }"
        style="width: 2rem; height:2rem;" >1</button>
      <button type="button" class="position-absolute top-0 start-33 translate-middle btn btn-sm btn-bk-lighter rounded-pill" :class="{ 'btn-primary': this.$route.path === '/checkout' }"
        style="width: 2rem; height:2rem;">2</button>
      <button type="button" class="position-absolute top-0 start-66 translate-middle btn btn-sm btn-bk-lighter rounded-pill" :class="{ 'active': this.$route.name === 'order_payment' }"
        style="width: 2rem; height:2rem;">3</button>
      <button type="button" class="position-absolute top-0 start-100 translate-middle btn btn-sm btn-bk-lighter rounded-pill" :class="{ 'active': this.$route.path === '/order_completed' }"
        style="width: 2rem; height:2rem;">4</button>

    </div>

  </div>

  <!-- <ul class="timeline d-flex justify-content-center list-unstyled m-0">
    <li class="timeline-item" :class="{ 'active': this.$route.path === '/cart' }">
      <p class="timeline-pointer">1</p>
      STEP 1購物車(確認訂單)
    </li>
    <li class="timeline-item" :class="{ 'active': this.$route.path === '/checkout' }">
      <p class="timeline-pointer">2</p>
      STEP 2建立訂單(填寫資料)
    </li>
    <li class="timeline-item" :class="{ 'active': this.$route.name === 'order_payment' }">
      <p class="timeline-pointer">3</p>
      STEP 3建立訂單(確認付款)
    </li>
    <li class="timeline-item" :class="{ 'active': this.$route.path === '/order_completed' }">
      <p class="timeline-pointer">3</p>
      STEP 4完成訂單
    </li>
  </ul> -->
</template>
<script>
export default {
  props: ['order']
}
</script>

<style lang="scss"></style>
