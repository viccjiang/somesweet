<template>
  <GoTop></GoTop>
  <SocialIcon></SocialIcon>
  <!-- ScroolDown -->
  <div class="position-absolute bottom-10 end-50" style="z-index:1000; margin-right:-30px" @click="scroll()"
    @keydown="enter">
    <span id="scrollArrow" class="btn fs-3 text-light ">
      <i class="bi bi-chevron-double-down"></i>
    </span>
  </div>

  <div class="section1 container-fluid g-0">
    <!-- hero banner -->
    <BannerSwiper></BannerSwiper>
  </div>

  <div class="container-fluid">
    <div class="row justify-content-center align-items-center bg-light">
      <div class="col-8 py-18">
        <p class="text-center fs-2 fw-bold mb-5"> 🌞 清晨一點甜，讓你的一天好開始 🌞</p>
        <p class="text-center fs-6 lh-lg">清晨一點甜 Some Sweet Bakery
          甜點店，是一家獨特且美味的甜點店，提供各種經典及創新的甜點與茶點。<br>我們的手工製作精緻烘焙品，以最新鮮的配料和細膩的製作工藝製作，令您的味蕾得到最完美的享受。<br>邀請您與朋友在清晨一點甜 Some Sweet
          Bakery 甜點店，享受美味的甜點和舒適的氛圍。</p>
      </div>
    </div>
  </div>
  <!-- 熱門商品 -->
  <div class="banner bg-cover">
    <div class="container top-section mb-10 ">
      <div class="section-title  p-10">
        <h3 class="text-center fs-6 fw-light mb-1">TOP POPULAR</h3>
        <h4 class="text-center mb-4  pb-3">熱門商品</h4>
      </div>
      <div class="row row-cols-1  row-cols-md-3 g-4">
        <div class="col">
          <div class="card card-hover h-100 rounded-5 border bg-light ">
            <img
              src="https://storage.googleapis.com/vue-course-api.appspot.com/jiangs2023/1677468903602.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=G2QFeBZMulWaizBKk%2Bs%2FXIW2jxLqe8kVyVDBkOg5UDst9ohqO%2FH%2BPx0ARJx5APHioQbkHh8egkQ5G9uoQEe7%2BaLsFlum2O6wxdrDqhiKce8aij9XaQPbngyuFjwvaBrqPqkpQwDaFXSDOy74rreZqiviSoFok2Wgnky8Wk5rnJ9qcEC2RTXypHDrgEmUzPg1zufV%2BaWHyhy6YKEp6qKa8maj2KC%2FqaXxAqVRTX9jGBTvlgm6PJOefrF55Ta%2FAGdkpA55y7Ds1xulher17%2BS33mqs23MtdPFB56jCAlhOnHjYFudbwQQzw7vyiiIuYzUx0JiZUc8UGtam4PgOIn4xNQ%3D%3D"
              class="card-img-top rounded-5 p-5" alt="...">
            <div class="card-body ">
              <h5 class="card-title">法式經典</h5>
              <RouterLink to="/products" class="stretched-link float-end btn-link fs-6 fw-medium">立即前往 <i class="bi bi-chevron-right"></i></RouterLink>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card card-hover h-100 rounded-5 border bg-light">
            <img
              src="https://storage.googleapis.com/vue-course-api.appspot.com/jiangs2023/1677469053444.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=fyqj%2BXWU9L09fcpXzFhYsJRqHOFiRrJ2CRPNng%2FUmPwpk%2BIRi9S8tSVBME%2F2QZvSSZONH2KUgAQJjf9zHhWITf%2FcGmN4h0xUuYhcrLryQHG2BJPC41p0AchpOGvIe5h4oAT2ep9aGyYZ7LrX7qLLz084fNmz4%2FqqKLb0Xz%2FESP656%2BztvH6g1K6HJca4H%2F%2BcluCGJxapb7kTysxXrmfyORD%2FdJ20x2U9RYm1EiVZ622F9ZIHXbR3NhdRpNi4Nl7PY8E2HYCGj55OUYVNtzokQb9KdtI9oSfCBNC%2FDq%2FaIpv0c5I25DTaR09qrwrqByFbHAFRTNDpBKNw3V2YWCGEWg%3D%3D"
              class="card-img-top rounded-5 p-5" alt="...">
            <div class="card-body ">
              <h5 class="card-title">派皮系列</h5>
              <RouterLink to="/products" class="stretched-link float-end btn-link fs-6 fw-medium">立即前往<i class="bi bi-chevron-right"></i></RouterLink>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card card-hover h-100 rounded-5 border bg-light">
            <img
              src="https://storage.googleapis.com/vue-course-api.appspot.com/jiangs2023/1677469135014.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=iv6KunfjUNSgeUWz%2BU2rVRjsV4nNRCzQ%2BGjeWoW0CA%2Fcj4JktG8VHYKz4HvwUTxY%2FR3I9bw92zPCOx0lY8aB075sC12ea6fNw14TQzBcDxeKqmKQh0ZxKcVSegod8wId8cNx8jEqXrJawUKjzzyDWhmWZpQOop3XDzx6beIa6PbaM%2B7MlKJwhGq9o0F3TlusilQdxeYYPAymUuJWTHG%2FzBcAJb1muSBWZRxG4nYekeQNUsd9xtsI3NNmJX%2BlUwCZSW%2FaahAMoksDRJ4IcsoZC%2FmJR0dHuRrW2W%2FQeZKFzPg5FQuxOa5RxutPuj1I%2FZ%2FtOyqCAFlgwLXZWAfKIiPp0w%3D%3D"
              class="card-img-top rounded-5 p-5" alt="...">
            <div class="card-body ">
              <h5 class="card-title">常溫點心</h5>
              <RouterLink to="/products" class=" stretched-link float-end btn-link fs-6 fw-medium">立即前往<i class="bi bi-chevron-right"></i></RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>

  <!-- 最新文章 -->
  <div class="bg-light">
    <div class="container  pb-10">
      <div class="section-title mb-10 pt-10">
        <h3 class="text-center fs-6 fw-light mb-1">NEW ARTICLES</h3>
        <h4 class="text-center mb-4 pb-3 m">最新文章</h4>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="card mb-3 rounded-4 card-hover border rounded-5">
            <div class="row g-0">
              <div class="col-md-6 p-5 ">
                <img :src="article[0]?.imageUrl" class="img-fluid rounded-4 position-relative" alt="...">
              </div>
              <div class="col-md-6">
                <div class="card-body h-100 d-flex flex-column ">
                  <h5 class="card-title">{{ article[0]?.title }}</h5>
                  <p class="card-text">{{ dateTranslate(article[0]?.create_at) }}</p>
                  <p class="card-text"><small class="text-muted">作者 : {{ article[0]?.author }}</small></p>
                  <RouterLink :to="`/blog/${article[0]?.id}`" class="stretched-link ">查看文章</RouterLink>
                  <div
                    class="position-absolute top-0 start-0  p-2 bg-danger border border-3 border-light text-white rounded-0">
                    NEW</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card mb-3 rounded-4 card-hover border rounded-5">
            <!-- d-flex flex-column flex-column-reverse flex-md-row -->
            <div class="row  g-0">
              <div class="col-md-6 p-5">
                <img :src="article[1]?.imageUrl" class="img-fluid rounded-4" alt="...">
              </div>
              <div class="col-md-6 ">
                <div class="card-body h-100 d-flex flex-column">
                  <h5 class="card-title">{{ article[1]?.title }}</h5>
                  <p class="card-text">{{ dateTranslate(article[1]?.create_at) }}</p>
                  <p class="card-text"><small class="text-muted">作者 : {{ article[1]?.author }}</small></p>
                  <RouterLink :to="`/blog/${article[1]?.id}`" class="stretched-link">查看文章</RouterLink>
                  <!-- <a href="#" >Go somewhere</a> -->
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
  <!-- 好評推薦 -->
  <div class="bg-light p-10 mb-10">
    <div class="container">
      <div class="section-title mb-10">
        <h3 class="text-center fs-6 fw-light mb-1">RECOMMENDATION</h3>
        <h4 class="text-center mb-4 pb-3">好評推薦</h4>
      </div>
      <RecommendSwiper></RecommendSwiper>
    </div>
  </div>
  <!-- 推薦商品 -->
  <div class="recommend banner recommend-bg-cover">
    <div class="container ">
      <div class="section-title mb-10 ">
        <h3 class="text-center fs-6 fw-light mb-1">WE RECOMMEND</h3>
        <h4 class="text-center mb-4 pb-3">推薦商品</h4>
      </div>
      <RecommendProductsSwiper></RecommendProductsSwiper>
    </div>
  </div>

  <CouponCopy ref="coupon"></CouponCopy>
  <div
    class="bg-bk-bread position-absolute position-fixed bottom-25 left-10 writing-mode rounded-4 p-4 border border-light border-2"
    style="margin-left:-10px;z-index:100"><a href="" @click.prevent="showToast()" class="text-white p-5">領 取 優 惠 碼</a>
  </div>
</template>

<script>
import SocialIcon from '../../components/UserHome/SocialIcon.vue'
import BannerSwiper from '../../components/UserHome/BannerSwiper.vue'
import RecommendSwiper from '../../components/UserHome/RecommendSwiper.vue'
import GoTop from '../../components/GoTop.vue'
import CouponCopy from '../../components/UserHome/CouponCopy.vue'
import RecommendProductsSwiper from '../../components/UserHome/RecommendProductsSwiper.vue'

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
  data () {
    return {
      article: []
    }
  },
  methods: {
    getArticles () {
      this.$http.get(`${VITE_APP_URL}api/${VITE_APP_PATH}/articles`)
        .then(res => {
          const { articles } = res.data
          this.article = articles
          console.log(this.article)
        })
    },
    scroll () {
      window.scrollBy({
        top: window.innerHeight - window.pageYOffset,
        behavior: 'smooth'
      })
    },
    dateTranslate (time) {
      const localDate = new Date(time * 1000)
      return localDate.toLocaleDateString()
    },
    showToast () {
      this.$refs.coupon.showCoupon()
    }
  },
  components: {
    BannerSwiper,
    RecommendSwiper,
    GoTop,
    CouponCopy,
    RecommendProductsSwiper,
    SocialIcon
  },
  mounted () {
    this.getArticles()
  }
}
</script>

<style scoped lang="scss">
.banner {
  background-image: url(../../assets/Group103.jpg);
}

.bg-cover {
  background-attachment: fixed;
}

.bg-cover {
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

}

.recommend-bg-cover {
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

}

.writing-mode {
  writing-mode: vertical-rl
}

.intro-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.top-section .card-img-top {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.card-hover img {
  filter: brightness(1);
  overflow: hidden;
}

.card-hover:hover img {
  filter: brightness(0.9);
  // height: 100%;
  // transform: scale(1.1);
  transition: 0.5s;
}

.aboutBanner {
  // margin-top: 100px;
  height: 500px;
  background-color: #544c4a;
  position: relative;
}

.btn-link {
  padding-bottom: 10px;
  border-bottom: 3px solid transparent;
}

.btn-link:hover {
  border-bottom: 3px solid #034d83;
  transition: 0.4s;
}

/* Hero 頁尾 scrollDownArrow 動畫 */
#scrollArrow {
  animation: pulse 1.8s infinite;

}

@keyframes pulse {
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-20px);
  }

  100% {
    transform: translateY(0px);
  }
}

.card-hover  {
  box-shadow: rgba(0, 0, 0, 0.01) 0px 15px 30px, rgba(0, 0, 0, 0.01) 0px 5px 10px;
}

.card-hover:hover  {
  transition: 0.5s;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 15px 30px, rgba(0, 0, 0, 0.1) 0px 5px 10px;
}
</style>
