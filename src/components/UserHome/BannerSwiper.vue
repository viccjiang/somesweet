<template>
  <!-- banner Swiper -->
  <div>
    <!-- :space-between="30" -->
    <swiper class="swiper-position " :slides-per-view="1" :modules="modules"
      :autoplay="{ delay: 2500, disableOnInteraction: false, }" :loop="true">
      <swiper-slide>
        <img
          src="https://storage.googleapis.com/vue-course-api.appspot.com/jiangs2023/1676615737276.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=M%2BeFpnrnt4TppWsuz1OvrggJwFCk4bzPZ4LAkhrddMNnm%2FDX9tku3%2BmOTDGmXvHkFNHG2p8300WxeBiXD0PV5k3R4Fme%2FvxZaAzQpkbLbaRb62hUC3y0rClJy4A2PB8hdkG71vqUS%2BbgtQCYWYpptBQ16Z61ToZGgWB0ATI3XR4Z6XFs33GnnqKdXemdty%2BZcsZzjUrVDDtaVhhzPgUnjx%2FpheX9nC2riVHFPL9R3zTy5ayNOFWj%2FTVBPqpSj8mtIc%2B4%2FHH1g8VOjT8RtP7RAmmrvvdhOcZuuJdk%2Fd8mmyFHBxWwYxNqzwhTqk2md%2F6ic28zKkziSqU3wF2nV2%2BvLw%3D%3D"
          alt="" class="">
        <div class="bannerText text-center">
          <p class="fs-3 fs-lg-1 fw-bold">法式烘焙 C'est la vie</p>
          <p class="fs-6 fs-lg-5 fw-light mb-5">生活就像一道道甜品，不品嚐怎麼知道哪道更適合</p>
          <RouterLink to="/products"><button type="button"
              class="callToActionBtn btn btn-outline-light rounded-pill  fs-5"> 前往購買 </button></RouterLink>
        </div>
      </swiper-slide>
      <swiper-slide>
        <img
          src="https://storage.googleapis.com/vue-course-api.appspot.com/jiangs2023/1678511321195.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=PIRmZmru97%2FjFS0mqhJM%2F1bLJ%2B74wFr9kT44c%2BZHiME08Hx4KtLCpiqtE5FplUzXomAzAnFgD7WLq3cL6vJsFrPhKPA9sAgEeQxjx20m2dCD0I%2FZD0XSBCLstAIeVzrMgfj4JFd5dmbkXQRShhfYFgMe8X0i%2FXDeX7gzGpZt371u0LIo15aJqa0Aocfvha1jteyVZsLRz2Iipi24K45czP4TiVxNcjydlREbXV1ncCt0TFtVon9wRAdArkvZF2UhSvPbKSD0AmlMsQUHIcyzIvfWN6fHYIt89hZjsQmI3yW1kI7MkSEUMyxlllHhEYFVEs%2BxD8VQv0q8XbkMAl4E2g%3D%3D"
          alt="" class="">
        <div class="bannerText text-center">
          <p class="fs-3 fs-lg-1 fw-bold">法式烘焙 C'est la vie</p>
          <p class="fs-6 fs-lg-5 fw-light mb-5">生活就像一道道甜品，不品嚐怎麼知道哪道更適合</p>
          <RouterLink to="/products"> <button type="button"
              class="callToActionBtn btn btn-outline-light rounded-pill  fs-5"> 前往購買 </button></RouterLink>
        </div>
      </swiper-slide>
      <swiper-slide>
        <img
          src="https://storage.googleapis.com/vue-course-api.appspot.com/jiangs2023/1678511907160.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=hyP2jkrb6AeH2rsQFuZ7tuCO1wo%2F%2Bo6NPHBNlAyfZSGYQlmVRpAc1ufO8%2BfTV%2BkNzFfZoxR%2FVTbXjHwIcYwrV195afCfP0kyNI3o7uyFZZRWema8sH7VWzpjhhtVhClffApw5QB%2B6gkT3dcHxLKDQ6a%2FcM3OmSClvebagEYzB8YpldMjHE4SDPCLs7wlwy7p5AQ%2BFH%2BukMxUBhavwRva%2FHNLUt0Pi%2FvSYAWc5f802dYtqntqsstj5UmOAqcYwGvqfn1fs2F2ajVwGPocSbDDkaPpbJomCPhDWX6kM76YAurP84KA0CmeXkCphnspG%2B2z1eTvDsxFe6tmOJmZfNKniQ%3D%3D"
          alt="">
        <div class="bannerText text-center">
          <p class="fs-3 fs-lg-1 fw-bold">法式烘焙 C'est la vie</p>
          <p class="fs-6 fs-lg-5 fw-light mb-5">生活就像一道道甜品，不品嚐怎麼知道哪道更適合</p>
          <RouterLink to="/products"> <button type="button"
              class="callToActionBtn btn btn-outline-light rounded-pill  fs-5"> 前往購買 </button></RouterLink>
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
  margin-top: 30px;
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
  top: 50%;
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
}</style>
