<template>
  <div class="container">
    <div class="row">
      <img :src="article.imageUrl" class="img-fluid w-50 " alt="">
      <!-- <p>{{ article.content }}</p> -->
      <div v-html="article.content"></div>
    </div>

  </div>
</template>

<script>
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
  data () {
    return {
      article: []
    }
  },
  methods: {
    getArticle () {
      const id = this.$route.params.id
      console.log(id)
      this.$http.get(`${VITE_APP_URL}api/${VITE_APP_PATH}/article/${id}`)
        .then(res => {
          console.log(res.data)
          this.article = res.data.article
        })
    }
  },
  mounted () {
    this.getArticle()
    console.log(this.$route.params.id)
  }
}
</script>
