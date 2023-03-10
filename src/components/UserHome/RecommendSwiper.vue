<template>
  <div class="personcommend card mb-3 rounded-5 border-0">
    <swiper :slidesPerView="1" :loop="true" :autoplay="autoplay" :modules="modules" class="mySwiper">
      <swiper-slide class="swiper-slide d-flex justify-content-center align-items-center">
        <div class="d-flex justify-content-center align-items-center" style="max-width:800px">
          <!-- <img src="../../assets/ig.png" class="swiper-slide-img me-5" style="height:50px; width:50px; z-index:1000"
            alt="..."> -->
          <div class="avatar bgcover object-fit d-none d-md-block" style="height:150px"><img class="rounded-pill" src="https://storage.googleapis.com/vue-course-api.appspot.com/jiangs2023/1678412046132.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=d1h%2FpbbhQcgV6SAojbeD2ENk1k8WiweUg0Dw3CJe1wAwvG%2BkiJVmzr9%2FWpev4c6d6BC71jOiQY4IoFzEkHcMC8lZTtwyDJtRX%2FLyFPUnpGxqMQngRcLbSlNq%2BqmRJTWSRko6CuYVqv8ligZ1MBuMwzezVBlcQc0HbaxIe41MCMvAgR%2Bd4aybCcy8bJCThRXxg2nq8Xpteitj%2BcRMu1AMfGd7ecTroMjAXh8zkVhZP080zXtjtC4AFFXc1DepUfqZrxhN8VICAlFLdWtC2YLQF2KtkYesgrpzROqXkY8yNzDid54%2FMPW%2FMXvJgnqkfSPUVbufcVbuaTVVo7Kowp8XJw%3D%3D" alt=""></div>
          <div>
            <p>愛吃鬼的評價</p>
            <p>清晨一點甜甜點店提供的甜點種類多樣化，每一種都讓人垂涎三尺。甜點的味道非常好，口感柔軟、香甜可口，令人回味無窮。店員的服務態度也非常友善，讓人感受到溫暖的待遇。這裡是我非常喜愛的甜點店，強烈推薦！</p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="swiper-slide d-flex justify-content-center align-items-center">
        <div class="d-flex justify-content-center align-items-center" style="max-width:800px">
          <div class="avatar bgcover object-fit d-none d-md-block" style="height:150px;max-width:auto"> <img class="rounded-pill" src="https://storage.googleapis.com/vue-course-api.appspot.com/jiangs2023/1678412073450.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=PKtUW7qNOrk4j9qDQMJ2m%2F%2FxnrzfC5NbsUU5hvuEONs%2FeGqE8e16KSVCMEk3V3kqFHqTRax3vQK6TmnsDDnk4xJ%2Flo%2BfYSiYRGgsNPEUXW7rrmc4VtZ7VWov4R1iowxtpfmZKG6Nct%2FQzVsajbKdbuRVKJVbuuyS452%2FoO%2BT9HfFFzgaXkSCf3rICz9eMNZQsAoY%2FpIXnOoFHyJoC%2FPjOTniaBFkdHnWVlFTaXEMnA%2BcbJcSmE%2BIRahhISDiRyDxoXOK46BWZ9k%2FP8rGnFfgJhDgb095gocwcHFqWJoUAvggqt9yPUdc%2FlF24uScVTKWh%2BjR%2FrMarkKBEFsdneuqHg%3D%3D" alt=""></div>
          <div>
            <p>愛吃甜的評價</p>
            <p>這裡的甜點非常美味，種類也非常多樣化。店裡的裝修設計非常有特色，環境乾淨整潔，讓人感到舒適自在。店員的服務態度也非常友善，讓人感受到溫暖的待遇。店員的服務態度也非常好，令人感到非常溫暖和貼心。我強烈推薦這家甜點店！</p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="swiper-slide d-flex justify-content-center align-items-center">
        <div class="d-flex justify-content-center align-items-center" style="max-width:800px">
          <div class="avatar bgcover object-fit d-none d-md-block" style="height:150px;max-width:auto"><img class="rounded-pill" src="https://storage.googleapis.com/vue-course-api.appspot.com/jiangs2023/1677498676070.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Z%2Bux7kDMY1JwVlzMWBU1Vd8HOjaR6pwyq4IZIA68KIjJxVeGQ0WmSw0QxcXnrl6lA9a0gEJFlYdT0oI4K08%2FKUM%2Bp9uL%2FIWlRHfTjtagJRzUtBboCWomaT0Zk8TfMc%2FGSqWa8txB%2FSK7OsaX2OKXWMeg1ME1CFYNUaZiXu9WdQVGKJVGKA2V8zinIy5XHvOpmmiHF0kwlKI3a06TaKipcNz8gjdSJ299h2Wx309TukXkel%2B93XxvpQXaie0T9IGCsDhNj3xbNPyojK1H%2Bs%2Fhyztx6S%2BSJx%2B%2B672Vxdw6ucJnhyGD0jl2Cd%2BaTXY%2FwXHWf%2Fnphi3as6Vtzdw9GqFLEw%3D%3D" alt=""></div>
          <div>
            <p>愛甲滴的評價</p>
            <p>清晨一點甜甜點店的甜點真的是太好吃了！每次來都想多買一點帶回家，讓家人也品嘗一下。店員的服務態度也非常友善，讓人感受到溫暖的待遇。店裡的環境非常舒適，店員的態度也非常親切，這是我非常喜愛的甜點店之一。</p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="swiper-slide d-flex justify-content-center align-items-center">
        <div class="d-flex justify-content-center align-items-center" style="max-width:800px">
          <div class="avatar bgcover object-fit d-none d-md-block" style="height:150px;max-width:auto"><img class="rounded-pill" src="https://storage.googleapis.com/vue-course-api.appspot.com/jiangs2023/1678412202533.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=BL2%2FvI6uVpeeSczIW%2Fs1J8FjXAM34q0uqLOksjjao1oqwwB9QvZp%2FWE38dRBfr3UVJmjXJWIo1iL18Qmss9SErmbs876uiChD503KF411R%2BUxcoYcAIP2%2BjNwk9zoJN%2BU7q6pLAR6se3qbpEJu3ksRwO3mRnQMPpX20A5eIBj8tjHYHnqACxpUgwHzV%2BF5MmfZRDcurwYGDnqWV7ApX5%2BFqOjS44y9zlh5wg%2FsjbAoETH1MD%2FbK1Eoc1MgM5H5f2AxLPxqzE6KZA%2F37xYV7foLd8EgzW5Oai4GUdq1m%2Fnt7zARiQDQvPLlDCcTDFEWx8VynySSRuvs5lxa%2BjTiPS%2Fw%3D%3D" alt=""></div>
          <div>
            <p>愛吃SWEET的評價</p>
            <p>這裡的甜點非常美味，種類也非常多樣化。店裡的裝修設計非常有特色，環境乾淨整潔，讓人感到舒適自在。店員的服務態度也非常友善，讓人感受到溫暖的待遇。店員的服務態度也非常好，令人感到非常溫暖和貼心。我強烈推薦這家甜點店！</p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
    <!-- <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div> -->

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
import { Pagination, Navigation, Autoplay } from 'swiper'

export default {
  data () {
    return {
      modules: [Pagination, Navigation, Autoplay],
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      autoplay: {
        disableOnInteraction: false, // 使用者操作swiper之後，是否禁止autoplay
        delay: 2000 // 自動切換的時間間隔（單位ms）
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
.personcommend .swiper {
  /* position: relative; */
  max-width: 100%;
  height: 200px;
}

.personcommend .swiper-slide img {
  /* position: absolute;
  top:-10px;
  left: 10px; */
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.personcommend .swiper-button-next,
.swiper-button-prev {
  position: absolute;
  top: var(--swiper-navigation-top-offset, 50%);
  /* left: 800px; */
  /* right:300px; */
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

.personcommend .swiper-button-next:after,
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
  background: #034d83;

}

/* 讓分頁圓點移至下方 */
.personcommend .swiper-pagination {
  position: static;
  margin-bottom: 10px;
}

.avatar {
  margin-right: 20px;
  height: 50px;
  width: 50%;
}
</style>
