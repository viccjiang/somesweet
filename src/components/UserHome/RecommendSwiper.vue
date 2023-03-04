<template>
  <div class="card mb-3 rounded-4 border-0">
    <swiper :slidesPerView="1" :spaceBetween="30" :loop="true"
    :pagination="{
      clickable: true,
      el: '.swiper-pagination',
    }" :navigation="navigation" :modules="modules" class="mySwiper">
      <swiper-slide class="swiper-slide d-flex justify-content-center align-items-center">
        <div class="d-flex justify-content-center align-items-center" style="width:500px">
          <!-- <img src="../../assets/ig.png" class="swiper-slide-img me-5" style="height:50px; width:50px; z-index:1000"
            alt="..."> -->
            <div class="avatar bgcover object-fit img-fluid"></div>
          <div>
            <p>愛吃鬼的評價</p>
            <p>清晨一點甜甜點店提供的甜點種類多樣化，每一種都讓人垂涎三尺。甜點的味道非常好，口感柔軟、香甜可口，令人回味無窮。店員的服務態度也非常友善，讓人感受到溫暖的待遇。這裡是我非常喜愛的甜點店，強烈推薦！</p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="d-flex justify-content-center align-items-center">
        <div class="d-flex justify-content-center align-items-center" style="width:500px">
          <img src="../../assets/ig.png" class="me-5" style="height:50px; width:50px" alt="...">
          <div>
            <p>愛吃甜的評價</p>
            <p>我在清晨一點甜甜點店購買了一塊草莓蛋糕，口感很好，但是價格略貴了一些。店裡的裝修很有氛圍，環境整潔舒適，但是店員的態度稍有些冷淡。總體而言，這是一家值得光顧的甜點店，但是價格有些偏高。</p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="d-flex justify-content-center align-items-center">
        <div class="d-flex justify-content-center align-items-center" style="width:500px">
          <img src="../../assets/ig.png" class="me-5" style="height:50px; width:50px" alt="...">
          <div >
            <p>愛甲滴的評價</p>
            <p>清晨一點甜甜點店的甜點真的是太好吃了！每次來都想多買一點帶回家，讓家人也品嘗一下。店裡的環境非常舒適，店員的態度也非常親切，這是我非常喜愛的甜點店之一。</p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="d-flex justify-content-center align-items-center">
        <div class="d-flex justify-content-center align-items-center" style="width:500px">
          <img src="../../assets/ig.png" class="me-5" style="height:50px; width:50px" alt="...">
          <div>
            <p>愛吃SWEET的評價</p>
            <p>這裡的甜點非常美味，種類也非常多樣化。店裡的裝修設計非常有特色，環境乾淨整潔，讓人感到舒適自在。店員的服務態度也非常好，令人感到非常溫暖和貼心。我強烈推薦這家甜點店！</p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="d-flex justify-content-center align-items-center">
        <div class="d-flex justify-content-center align-items-center" style="width:500px">
          <!-- <img src="../../assets/ig.png" class="avatar me-5" style="height:50px; width:50px" alt="..."> -->
          <div class="avatar bgcover object-fit img-fluid"></div>
          <div>

            <p>愛吃SWEET的評價</p>
            <p>清晨一點甜甜點店的甜點真的太好吃了！每次來都能發現新的驚喜，每一種甜點都是那麼令人愉悅。店裡的裝修非常別緻，環境也非常整潔，店員的態度也非常友好和熱情。這是我最喜愛的甜點店之一，強烈推薦！</p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

  </div>
  <div class="custom-style swiper-pagination mb-10"></div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Pagination, Navigation } from 'swiper'

export default {
  data () {
    return {
      modules: [Pagination, Navigation],
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  mounted () {

  }
}

</script>

<style >
.swiper {
  /* position: relative; */
  max-width: 100%;
  height: 200px;
}

.swiper-slide img {
  /* position: absolute;
  top:-10px;
  left: 10px; */
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper-button-next,
.swiper-button-prev {
  position: absolute;
  top: var(--swiper-navigation-top-offset, 50%);
  width: 40px;
  height: 40px;
  margin-top: calc(0px - (var(--swiper-navigation-size)/ 2));
  z-index: 10;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: #ffffff;
  background-color: #034d83;
;
  /* margin-left: -30px;
    margin-right: -30px; */

}

.swiper-button-next:after,
.swiper-button-prev:after {
  font-family: swiper-icons;
  font-size: 16px;
  font-weight: bold;
  text-transform: none !important;
  letter-spacing: 0;
  font-variant: initial;
  line-height: 1;
}

/* 將底部 pagination 分頁的 active 狀態改為想要的樣式 */
.custom-style .swiper-pagination-bullet-active {
  width: 20px;
  border-radius: 8px;
  background:#034d83;

}

/* 讓分頁圓點移至下方 */
.swiper-pagination {
  position: static;
  margin-bottom: 10px;
}

.avatar{
  margin-right: 20px;
  height: 70px;
  width: 50%;
  border-radius: 50%;
  background-image: url('https://storage.googleapis.com/vue-course-api.appspot.com/jiangs2023/1677498676070.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Z%2Bux7kDMY1JwVlzMWBU1Vd8HOjaR6pwyq4IZIA68KIjJxVeGQ0WmSw0QxcXnrl6lA9a0gEJFlYdT0oI4K08%2FKUM%2Bp9uL%2FIWlRHfTjtagJRzUtBboCWomaT0Zk8TfMc%2FGSqWa8txB%2FSK7OsaX2OKXWMeg1ME1CFYNUaZiXu9WdQVGKJVGKA2V8zinIy5XHvOpmmiHF0kwlKI3a06TaKipcNz8gjdSJ299h2Wx309TukXkel%2B93XxvpQXaie0T9IGCsDhNj3xbNPyojK1H%2Bs%2Fhyztx6S%2BSJx%2B%2B672Vxdw6ucJnhyGD0jl2Cd%2BaTXY%2FwXHWf%2Fnphi3as6Vtzdw9GqFLEw%3D%3D');
}

</style>
