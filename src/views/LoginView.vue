<template>
  <div class="container py-5 vh-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-xl-10">
        <div class="card" style="border-radius: 1rem;">
          <div class="row g-0">
            <div class="col-md-6 col-lg-5 d-none d-md-block">
              <img
                src="https://storage.googleapis.com/vue-course-api.appspot.com/jiangs2023/1673936209323.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=XKARezhpB%2BB4ydZYqOXEGO20Y84ZhUsdDDlSY2gSmws2bpL6XJ2Fb7bHCLQfejWFsuOxeBiMer4Vky8Q5FVqk3z%2FckqpgqNQb4OHOlnxahugf4uk6lW2FnhNOKhCbfj%2FUZ44%2BFA7FbkzS2Za3RVzNzHzzwo5kViMvdfZJR0vij0zd%2B8fIJoG0O3QJ%2B3X2lqD853pDZF2d5kxh6sJI7gH%2FRrwtLXWNjwINuKKuh5ugmNeLPLerFwqZDNG9UbB5vnjCamhTfrEbgMER%2B2FPU1ifmHAEUB1FQGgTgrBS2B2UK8XoLceVnINRUzqbZzc2AFoCbgwuNe9P9CBVwRcwHHaoQ%3D%3D"
                alt="login form" class="img-fluid h-100" style="border-radius: 1rem 0 0 1rem;" />
            </div>
            <div class="col-md-6 col-lg-7 d-flex align-items-center">
              <div class="card-body p-4 p-lg-5 text-black">
                <div class=" align-items-center">
                  <RouterLink to="/" class="">
                    <div class="d-flex justify-content-center" href="#">
                      <img src="../assets/Vector.svg" alt="Logo" width="60" height="60"
                        class="d-inline-block align-text-top me-3">
                      <div class="mb-5">
                        <p class="fs-xl fw-bold">清晨一點甜</p>
                        <p class="logoText fs-lg p-0 m-0">SOME SWEET <span class="fs-xs fw-lighter">/am</span></p>
                      </div>
                    </div>
                  </RouterLink>
                </div>
                <FormView class="form-signin p-0 mt-5 " v-slot="{ errors }" @submit="login">
                  <h6 class="fw-normal my-5 " style="letter-spacing: 1px;">管理者請先登入</h6>
                  <div class="form-floating mb-3">
                    <FieldView type="email" name="email" class="form-control" v-model="user.username" id="floatingInput"
                      :class="{ 'is-invalid': errors['email'],'is-valid':user.username && !errors['email'] }" rules="email" placeholder="name@example.com" required
                      autofocus />
                    <label for="floatingInput" class="text-muted">輸入 Email 帳號</label>
                    <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
                  </div>
                  <div class="form-floating">
                    <FieldView type="password" name="password" class="form-control" v-model="user.password"
                      id="floatingPassword" placeholder="Password" required />
                    <label for="floatingPassword" class="text-muted"> 輸入 Password 密碼</label>

                  </div>
                  <div class="d-flex d-grid gap-2">
                    <button class="btn btn-lg btn-outline-primary w-100 mt-3 mb-3" type="button" @click="goBack">
                      回到首頁
                    </button>
                    <button class="btn btn-lg btn-primary w-100 mt-3 mb-3">
                      立即登入
                    </button>
                  </div>

                  <div class="d-flex justify-content-between align-items-center">
                    <!-- Checkbox -->
                    <div class="form-check mb-0">
                      <input class="form-check-input me-2" type="checkbox" value="" id="formRemenber" />
                      <label class="form-check-label" for="formRemenber">
                        Remember me
                      </label>
                    </div>
                    <a href="#" class="small text-muted">Forgot password?</a>
                  </div>
                </FormView>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const { VITE_APP_URL } = import.meta.env

export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      const user = this.user
      this.$http.post(`${VITE_APP_URL}admin/signin`, user)
        .then((res) => {
          if (res.data.success) {
            // console.log(res)
            // 取出 token, expired
            const { token, expired } = res.data

            // 寫入 cookie token
            // expires 設置有效時間 (到期日)
            document.cookie = `jiangvue3=${token};expires=${new Date(expired)};`
            // console.log(token, expired)
            // // 轉址
            this.$router.push('/admin')
          } else {
            console.log(res.data.message)
            this.user.username = ''
            this.user.password = ''
          }
        }).catch((err) => {
          console.dir(err.data.message)
        })
    },
    goBack () {
      this.$router.push('/')
    }
  }
}

</script>

<style lang="scss" scoped>
// html,
// body {
//   height: 100%;
//   text-align: center;
// }

// body {
//   display: flex;
//   align-items: center;
//   justify-content: center;
// }

.form-signin {
  width: 100%;
  padding: 15px;
  margin: auto;
}
</style>
