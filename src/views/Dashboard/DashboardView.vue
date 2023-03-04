
<template >
  <header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
    <RouterLink to="/admin" class="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6">
      <p class="logoText fs-xl p-0 m-0">SOME SWEET <span class="fs-xs fw-lighter">/am</span></p>
    </RouterLink>
    <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse"
      data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <!-- <input class="form-control form-control-dark  rounded-0 border-0" type="text" placeholder="Search"
      aria-label="Search"> -->
    <p class="text-white me-5 d-none d-lg-block" >管理者，您好</p>
    <!-- <div class="navbar-nav"> -->
      <!-- <div class="nav-item text-nowrap"> -->
      <!-- <div class="nav-link px-3 text-white">管理者，您好</div>
        <a class="nav-link px-3" @click="signOut">登出</a>
      </div> -->
    <!-- </div> -->
  </header>

  <div class="container-fluid">
    <div class="row">
      <!-- 左側欄 -->
      <nav id="sidebarMenu" class="bg-dark col-md-3 col-lg-2 d-md-block sidebar collapse">
        <div class="position-sticky pt-3 sidebar-sticky ">
          <ul class="nav flex-column text-start">
            <li class="nav-item ">
              <RouterLink to="/admin" class="nav-link p-5 " aria-current="page">
                <i class="bi bi-speedometer me-3"></i>
                後台首頁
              </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/admin/products" class="nav-link p-5 text-white" aria-current="page">
                <i class="bi bi-card-list me-3"></i>
                產品管理
              </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/admin/orders" class="nav-link p-5 text-white" aria-current="page">
                <i class="bi bi-basket me-3"></i>
                訂單管理
              </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/admin/coupons" class="nav-link p-5 text-white" aria-current="page">
                <i class="bi bi-ticket-perforated me-3"></i>
                優惠券管理
              </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/admin/articles" class="nav-link p-5 text-white" aria-current="page">
                <i class="bi bi-book me-3"></i>
                文章管理
              </RouterLink>
            </li>
            <li class="nav-item ">
              <RouterLink to="/" class="nav-link p-5 text-white">
                <i class="bi bi-box-arrow-left me-3"></i>
                回前台
              </RouterLink>
            </li>
            <li class="nav-item ">
              <RouterLink to="/admin/articles" class="nav-link p-5 text-white" @click="signOut" aria-current="page">
                <i class="bi bi-box-arrow-left me-3"></i>
                登出
              </RouterLink>
            </li>
          </ul>
        </div>
      </nav>
      <!-- 右側顯示欄 -->
      <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div
          class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 class="h2">管理者後台</h1>
          <div class="btn-toolbar mb-2 mb-md-0">
            <div class="btn-group me-2">
            </div>
          </div>
        </div>
        <!-- 後台各頁展示區 -->
        <RouterView v-if="check"></RouterView>
      </main>
    </div>
  </div>
</template>

<script>
import { RouterView, RouterLink } from 'vue-router'

// 來設置 Collapse 元件
import * as bootstrap from 'bootstrap'
let collapseList = null

const { VITE_APP_URL } = import.meta.env

export default {
  data () {
    return {
      check: false
    }
  },
  components: {
    // HelloWorld,
    RouterView,
    RouterLink
  },
  methods: {
    // 登出只需要清空 cookie 即可
    signOut () {
      document.cookie = `jiangvue3=;expires=${new Date()};`
      this.$router.push('/login')
    },
    checkAdmin () {
      const api = `${VITE_APP_URL}api/user/check`
      this.$http
        .post(api)
        .then((res) => {
          if (res.data.success) {
            this.check = true
          } else {
            this.$router.push('/login')
          }
        })
        .catch((err) => {
          console.dir(err.data.message)
          this.$router.push('/login')
        })
    }

  },

  // admin products 頁面在重新整理頁面後 噴錯在 DashboardView.vue 的 RouterView 添加上 v-if="check”。
  mounted () {
    // 透過 router beforeEach 來設置 Collapse 元件
    collapseList = new bootstrap.Collapse(document.getElementById('sidebarMenu'), { toggle: false })
    this.$router.beforeEach((to, from) => {
      collapseList.hide()
    })
    // 取出 cookie
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)jiangvue3\s*=\s*([^;]*).*$)|^.*$/, '$1')
    // token 加到 headers (axios 請求時，headers 預設帶上 token)
    this.$http.defaults.headers.common.Authorization = token
    // 驗證是否登入
    this.checkAdmin()
  }

  // admin products 頁面在重新整理頁面後，跳出請重新登入。Cookie 內是有 token 的，不過還是跳出重新登入。 解法是 dashboard 改成 created
  // created () {
  //   // 取出 cookie
  //   const token = document.cookie.replace(/(?:(?:^|.*;\s*)jiangvue3\s*=\s*([^;]*).*$)|^.*$/, '$1')
  //   // token 加到 headers (axios 請求時，headers 預設帶上 token)
  //   this.$http.defaults.headers.common.Authorization = token
  //   // 驗證是否登入
  //   this.checkAdmin()
  // }
}
</script>

<style scoped lang="scss">
body {
  font-size: .875rem;
}

.feather {
  width: 16px;
  height: 16px;
}

/*
 * Sidebar
 */

.sidebar {
  position: fixed;
  top: 0;
  /* rtl:raw:
  right: 0;
  */
  bottom: 0;
  /* rtl:remove */
  left: 0;
  z-index: 100;
  /* Behind the navbar */
  padding: 48px 0 0;
  /* Height of navbar */
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);
}

// @media (max-width: 767.98px) {
//   .sidebar {
//     top: 5rem;
//   }
// }

.sidebar-sticky {
  height: calc(100vh - 48px);
  overflow-x: hidden;
  overflow-y: auto;
  /* Scrollable contents if viewport is shorter than content. */
}

.sidebar a {
  color: #000000;
}

.sidebar a:hover {
  background-color: #949494;
  color: #000;
}

.sidebar .nav-link {
  font-weight: 500;
  color: #333;
}

.sidebar .nav-link .feather {
  margin-right: 4px;
  color: #727272;
}

.sidebar .nav-link.active {
  color: #ffffff;
}

.sidebar .nav-link:hover .feather,
.sidebar .nav-link.active .feather {
  color: inherit;
}

.sidebar-heading {
  font-size: .75rem;
}

/*
 * Navbar
 */

.navbar-brand {
  padding-top: .75rem;
  padding-bottom: .75rem;
  background-color: rgba(0, 0, 0, .25);
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .25);
}

.navbar .navbar-toggler {
  top: .25rem;
  right: 1rem;
}

.navbar .form-control {
  padding: .75rem 1rem;
}

.form-control-dark {
  color: #fff;
  background-color: rgba(255, 255, 255, .1);
  border-color: rgba(255, 255, 255, .1);
}

.form-control-dark:focus {
  border-color: transparent;
  box-shadow: 0 0 0 3px rgba(255, 255, 255, .25);
}</style>
