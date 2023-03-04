
<template>
  <div class="container">
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <template v-for="article in articles" :key="article.id">
        <div class="col" v-if="article.isPublic">
          <div class="card h-100">
            <img :src="article.imageUrl" class="card-img-top" />
            <div class="card-body">
              <h5 class="card-title">{{ article.title }}</h5>
              <div v-html="article.description"></div>
            </div>
            <div class="card-footer">
              <router-link
                :to="`/blog/${article.id}`"
                v-if="article.isPublic"
                class="btn btn-outline-primary"
              >
                文章頁面
              </router-link>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
export default {
  data () {
    return {
      articles: [],
      isLoading: false,
      isNew: false,
      tempArticle: {}
    }
  },
  methods: {
    getArticles (page = 1) {
      const api = `${VITE_APP_URL}api/${VITE_APP_PATH}/articles?page=${page}`

      this.$http.get(api).then((response) => {
        this.articles = response.data.articles
        this.pagination = response.data.pagination
      }).catch((error) => {
        console.log(error)
      })
    }
  },
  created () {
    this.getArticles()
  }
}
</script>
