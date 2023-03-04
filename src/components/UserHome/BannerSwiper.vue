<template><!-- banner Swiper -->
  <div>
    <swiper class="swiper-position" :slides-per-view="1" :space-between="30" :modules="modules"
      :autoplay="{ delay: 2500, disableOnInteraction: false, }" :loop="true" >
      <swiper-slide>
        <img
          src="https://storage.googleapis.com/vue-course-api.appspot.com/jiangs2023/1676615737276.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=M%2BeFpnrnt4TppWsuz1OvrggJwFCk4bzPZ4LAkhrddMNnm%2FDX9tku3%2BmOTDGmXvHkFNHG2p8300WxeBiXD0PV5k3R4Fme%2FvxZaAzQpkbLbaRb62hUC3y0rClJy4A2PB8hdkG71vqUS%2BbgtQCYWYpptBQ16Z61ToZGgWB0ATI3XR4Z6XFs33GnnqKdXemdty%2BZcsZzjUrVDDtaVhhzPgUnjx%2FpheX9nC2riVHFPL9R3zTy5ayNOFWj%2FTVBPqpSj8mtIc%2B4%2FHH1g8VOjT8RtP7RAmmrvvdhOcZuuJdk%2Fd8mmyFHBxWwYxNqzwhTqk2md%2F6ic28zKkziSqU3wF2nV2%2BvLw%3D%3D"
          alt="">
        <div class="bannerText text-center">
          <p class="fs-3 fs-lg-1 fw-bold">法式烘焙 C'est la vie</p>
          <p class="fs-6 fs-lg-5 fw-light mb-5">生活就像一道道甜品，不品嚐怎麼知道哪道更適合</p>
          <button type="button" class="callToActionBtn btn btn-outline-light rounded-pill  fs-5"> 前往購買 </button>
        </div>
      </swiper-slide>
      <swiper-slide>
        <img
          src="https://storage.googleapis.com/vue-course-api.appspot.com/jiangs2023/1676616124986.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=aLzNuEn2Ye5MTpzuPJdBjr08L0HZTsDB4CTXKUN9Su59E80t8oQNx6DPG81%2F5ze9iqLgCdXZoH9b5TucnGM7rAx3krWlhBxDfezdiGpxC6eocKVvrFHJPYZ4aQboTA3yFW15cqVaSkKvtRoVu2%2BAWKUod61HxvWWZEQpgsBqqhkGQsfcBjzWzCaApPWfF56%2B4toYOvZ4zeUBaAlG9TIk%2FNu7dzPK50NmhQ9EHaHINJPgd4tcViYJgmlNuZJgrBKG49gCAB0%2BMl2Y8N%2Bi%2F6cgoUP1NBQtUw36afVQTNftUsEKAgg2kdPFHUNTmsjMgIAKjCeHQUBzKZxiJjnyfCi4%2FA%3D%3D"
          alt="">
          <div class="bannerText text-center">
          <p class="fs-3 fs-lg-1 fw-bold">法式烘焙 C'est la vie</p>
          <p class="fs-6 fs-lg-5 fw-light mb-5">生活就像一道道甜品，不品嚐怎麼知道哪道更適合</p>
          <button type="button" class="callToActionBtn btn btn-outline-light rounded-pill  fs-5"> 前往購買 </button>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
// import { Navigation, Pagination } from 'swiper'
import { Autoplay } from 'swiper'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default {
  data () {
    return {
      // modules: [Navigation, Pagination]
      modules: [Autoplay]
    }
  },
  components: {
    Swiper,
    SwiperSlide
  }
}
</script>

<style scoped>

.callToActionBtn {
  margin-top: 50px;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
}

/* .swiper-position {
  position: relative;
} */

.bannerText {
  color: white;
  z-index: 999;
  position: absolute;
  top: 60%;
  left: 50%;
  /* 以文字中心來跟 banner 做定位 */
transform: translate(-50%, -50%);
}

.swiper {
  max-width: 100%;
  height: 80vh;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
