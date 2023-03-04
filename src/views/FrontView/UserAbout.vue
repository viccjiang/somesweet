<template>
  <!-- <p class="custom-class">about</p> -->
  <!-- <p class="custom-class">關於</p> -->
  <div class="container-fluid g-0 ">
    <div class="card border-0 rounded-0 bg-dark text-white mb-5">
      <div class="filters" style="
                height: 200px;
                background-image: url(https://storage.googleapis.com/vue-course-api.appspot.com/jiangs2023/1677835128592.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=DfruFqFRYdKd%2BbdWHRv%2FV%2BI%2Ff0qGSofdWE9RnxbSWRv5%2BxQgDDrKVK3jX1UI1aSBRRvLnrGd6R729OGPCuMw9PsLe%2FDsHRCjgVAPraqyOBLxeCwM%2BqaP3yPnYFdKzmj0iupJZQlgBfbBaxTvl%2F41TZEK48KD0NPabXxPgGPpZ3GTfD3diq6FBRsYHlHdAMtPI4vxzISpAUDLFMGT9g98hQR2dSugyUBzgwa8RiAppDvr5XIRygR6vVrpLjztd5V384oF6eTNrQABgiZ%2F0j%2B%2FPSojMCM6Pa2hG11tvQ0BgsPHsGWHWKeZisj3aSFUkqD%2FG24vTTp%2Bk1%2FvypiBjXiAxA%3D%3D);
                background-size: cover;
                background-position: center center;
                background-attachment: fixed;
              " />
      <div class="
                card-img-overlay
                d-flex
                flex-column
                justify-content-center
                align-item-center
              ">
        <h1 class="fs-3 card-title text-center fw-bold">
          <p class="fs-m fw-bold mb-2">關於我們</p>
          <p class="logoText fs-sm p-0 m-0">SOME SWEET <span class="fs-xs fw-lighter">/am</span></p>
        </h1>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="text-area mb-10">
      <p class="fs-lg lh-lg">清晨一點甜</p>
      <p class="fw-light lh-lg mb-3">
        「清晨一點甜，讓你的一天有好的開始」是我們甜點店的口號。我們深信，一份甜點的美味可以為人帶來無限的愉悅和滿足，就像清晨第一口甜點的滋味，可以為一整天注入能量和動力。因此，我們精選最優質的食材和最精湛的烘焙技術，製作出各式各樣的美味甜點，期望能為每一位客人帶來美好的味覺體驗。
      </p>

      <p class="fs-lg lh-lg">味覺饗宴</p>
      <p class="fw-light lh-lg mb-3">
        在我們的甜點店中，您可以找到各種風味的甜點，包括經典的法式糕點、現做的手工蛋糕、口感豐富的鬆餅、香氣四溢的麵包等等。不論您是要來單獨享用一份甜點，還是和好友一起分享，我們都為您準備了最合適的選擇。</p>

      <p class="fs-lg lh-lg">秉持精神</p>
      <p class="fw-light lh-lg mb-3">
        除了味道上的堅持，我們對於產品品質和衛生標準也十分嚴格。我們每日都會使用新鮮的食材和經過嚴格篩選的原材料，確保每一份甜點都是最新鮮、最美味的。此外，我們店內的衛生設備和環境也都經過精心打理，以確保每一位客人都能在舒適、安全的環境中品嚐美食。
      </p>

      <p class="fw-light lh-lg mb-3">
        總之，「清晨一點甜，讓你的一天有好的開始」是我們對於甜點的堅持和熱愛。我們期望能夠為每一位客人帶來美好的體驗，讓他們在忙碌的生活中找到一點甜蜜的片刻，讓一天的開始更加美好。</p>

    </div>

    <div class="photos text-area mb-10 ">
      <div class="row row-cols-1 row-cols-md-4 g-4 ">
        <div class="col ">
          <div class="card h-100 rounded-4 card-hover border-0">
          <RouterLink to="/products" class="stretched-link h-100">
            <img src="https://storage.googleapis.com/vue-course-api.appspot.com/jiangs2023/1677553984210.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Um%2BLTT8nTGNiV1EMfr1FCgwawka8clKeLoHJyaeDeyVHT%2BX2we6PmqhGxUd8Z5iME6i2pYQKc7boMVjbtfyuIinSc83OBiPqsBwzdWxMXdJWfUCRV3uITaSVhLy602OHSejjXYKvVEd4limNUh%2F9titBEwMtL%2Fx6GUQd08tGgOrgMmz92ENukvrMPCbJMXuxB5q5a54FiF9T8oXxljWATBA%2FmRC0qqXAxg0s6XcxpSw2k2VTnOqXTXv8lJCwPod5%2F1rpA1GT3b8SX6FDcGPi4GZPlldUoX9NZKWGQTpnCfJgCHzl8QodeMzC4h1GsxQIxolS%2Bw%2Bq%2FN%2BMdNap2Z4gDA%3D%3D" class="card-img-top h-100 p-4 rounded-5 object-fit" alt="...">
          </RouterLink>
          </div>
        </div>
        <div class="col ">
          <div class="card h-100 rounded-4 card-hover border-0">
            <RouterLink to="/products" class="stretched-link h-100">
            <img src="https://storage.googleapis.com/vue-course-api.appspot.com/jiangs2023/1677553098916.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=HFWWxE4FVrFEm%2BpsbTkTsDaard4l8qPOZPXkfBLCOGNxRb%2FV2aHWx3N%2B66%2F0gb1Hp%2BF9Rn7wuDFe0DDzqBOxHfBPHF4gvfF2LcrlfoWrI01Cp7Fv6FoLUSaZoEw0NSFZsmmVXCi29UwmBy7BLMWK3vTuSWS5sGBuiZXTbXZmTeFDTqhSGhNYm46axcOrTJSgbjpDX0iStZlswmSJmi4jGGgrIpoHbHqi2k0X3kQphbJvrYd%2F01a49iLqtPxRqYflsHhEaSZNSbkwyeVxCVWsxdhk0oZijuhizKyDLSO%2FDOTGMqtwNwDroK%2BHMwZ06TsakQygv47wPheKb2046P8t%2Fw%3D%3D" class="card-img-top h-100 p-4 rounded-5 object-fit" alt="..."></RouterLink>
          </div>
        </div>
        <div class="col ">
          <div class="card h-100 rounded-4 card-hover border-0">
            <RouterLink to="/products" class="stretched-link h-100">
            <img src="https://storage.googleapis.com/vue-course-api.appspot.com/jiangs2023/1677553813454.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=bLtayVWos8VlaE6d8kPfAeGZZmqBXzj3caiZmRsIIcyRmXeKdS%2FaqIPcaChPi%2FFOpqJAU1PQROV6upv06YjbzHMj5tMUgsvKxmGchIXr%2FKzuBHyWxmiCkI3xUESL3lErdsgC1N1tCVxfVzcqqUI8DscUg198Lf1IXwuUrWZKjA3TGgNAagqL%2BP8e4d6ABYSa4gEvDyx3TL6AZY2gDiQE8ob3ZdVZ%2Bh8tZxDTsrn6mWR%2BPwGTcHabnVlXZqEa5f5lEjY1qd%2FZsY%2BaSLfVIyqCRBjcHXo%2B6YfRK78I2qNP3MhaGTM63N8tGrOv%2Fh%2Fsp6qS0j9Je18ktg5wc%2FTZAOUVqg%3D%3D" class="card-img-top h-100 p-4 rounded-5 object-fit" alt="..."></RouterLink>
          </div>
        </div>
        <div class="col ">
          <div class="card h-100 rounded-4 card-hover border-0">
            <RouterLink to="/products" class="stretched-link h-100">
            <img src="https://storage.googleapis.com/vue-course-api.appspot.com/jiangs2023/1677553828896.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=f6duZ%2BpHLGnXlQ%2BtUQt4e6qJkLiEShjlO7yD4jOvlFNQlW2Wnd5i%2FkX1LsNEB4LBNSO4oRsAKH965OvFSU6wDt29gT%2FESdZJkN6IBjwM4LbwPwKqcVbwI8OJI6SAp8qnmSfLimHojhJOBT4gpVCfTDdCVzkR9msh6nK%2FT3JzULcPcM7a%2F9bN1Ov4GNpxJk8wS4aB3RLOxt6XbVno9Kg%2BYAOapSf3%2BeX8onORiLWElCS14FVxGYU0EjbKReGrPbfseHqEA%2F%2Bxen%2BEAayItGHwjoOvw29NpFpy6BMoBy%2BdVUL1VqRtyP6mK7r4olMn9cH0T7%2FnP3tgoTRiaISCTJZeVA%3D%3D" class="card-img-top h-100 p-4 rounded-5 object-fit" alt="..."></RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">

.card-hover img {
  filter: brightness(1);
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 15px 25px, rgba(0, 0, 0, 0.02) 0px 5px 10px;
}

.card-hover:hover img {
  filter: brightness(0.9);
  // height: 100%;
  // transform: scale(1.1);
  transition: 0.5s;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 15px 25px, rgba(0, 0, 0, 0.1) 0px 5px 10px;
}

</style>
