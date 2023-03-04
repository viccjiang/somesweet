<template>
  <footer class="bg-bk-lighter text-dark">
    <div class="container row g-0 mx-auto fs-6 ls-2 text-center">
      <nav class="nav-item mb-4 d-none d-md-inline-block">
        <ul class="row justify-content-between list-unstyled m-0 mt-5">
          <li class="navhover col-md-2 p-1 col-lg-2">
            <RouterLink to="/" class="nav-link px-2 py-5">
              首頁
            </RouterLink>
          </li>
          <li class="navhover col-md-2 p-1 col-lg-2">
            <RouterLink
              to="/about"
              class="nav-link px-2 py-5"
            >
              關於我們
            </RouterLink>
          </li>
          <li class="navhover col-md-2 p-1 col-lg-2">
            <RouterLink
              to="/faq"
              class="nav-link px-2 py-5"
            >
              常見問答
            </RouterLink>
          </li>
          <li class="navhover col-md-2 p-1 col-lg-2">
            <RouterLink
              to="/products"
              class="nav-link px-2 py-5"
            >
              清晨甜點
            </RouterLink>
          </li>
          <li class="navhover col-md-2 p-1 col-lg-2">
            <RouterLink
              to="/cart"
              class="nav-link px-2 py-5"
            >
              購物車
            </RouterLink>
          </li>
          <li class="navhover col-md-2 p-1 col-lg-2">
            <RouterLink
              to="/blog"
              class="nav-link px-2 py-5"
            >
              部落格
            </RouterLink>
          </li>
        </ul>
      </nav>
      <div class="pt-3 pt-md-0 my-5">
        <RouterLink to="/">
        <a class="d-flex navbar-brand justify-content-center align-items-center" href="#">
          <img src="../assets/Vector.svg" alt="Logo" width="" height="" class="d-inline-block align-text-top me-3">
          <div>
            <p class="fs-m fw-bold text-start">清晨一點甜</p>
            <p class="logoText fs-sm p-0 m-0">SOME SWEET <span class="fs-xs fw-lighter">/am</span></p>

          </div>
          <!-- <h1 class="logoText fw-bolder p-0 m-0">SOME SWEET<span class="fs-6 fw-lighter">/am</span></h1> -->
        </a>

      </RouterLink>
      </div>
      <div class="mt-5">
        本網站僅供個人作品使用，不提供商業用途
        <span class="d-none d-md-inline-block"
          ><RouterLink class="p-0 nav-link link-bk-gray text-bk-gray" to="/login"
            >｜登入後台</RouterLink
          >
        </span>
      </div>
      <div class="mb-5">© 2022 re.HOUSE COPYRIGHT</div>
      <ul class="d-flex justify-content-center list-unstyled  mb-5 h4 py-3">
        <li>
          <a href="https://viccjiang.github.io/vue_week_07/#/" class="text-dark mx-3"><i class="bi bi-github"></i></a>
        </li>
        <li>
          <a href="https://viccjiang.github.io/vue_week_07/#/" class="text-dark  mx-3"
            ><i class="bi bi-instagram"></i
          ></a>
        </li>
        <li>
          <a href="https://viccjiang.github.io/vue_week_07/#/" class="text-dark  ms-3"
            ><i class="bi bi-messenger"></i
          ></a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
  // logo
  .brandlogo {
    font-family: "Expletus Sans", cursive;
    font-weight: Bold;
    font-size: 42px;
  }
  .brandlogos {
    font-family: "Expletus Sans", cursive;
    font-weight: 400;
    font-size: 30px;
    font-style: italic;
  }
  // footer
  .navhover a {
    position: relative;
  }
  .navhover ::after {
    content: " ";
    position: absolute;
    right: 50%;
    left: 50%;
    bottom: -5px;
    border-bottom: 3px solid #000000;
    transition: 0.3s;
  }
  .navhover :hover::after {
    right: 0%;
    left: 0%;
  }
</style>
