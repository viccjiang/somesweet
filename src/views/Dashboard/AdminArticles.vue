<template>
  <div>
    <div class="text-end mt-4">
      <button class="btn btn-primary" type="button" @click="openModal(true)">
        建立新的文章
      </button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th style="width: 200px">標題</th>
          <th style="width: 200px">作者</th>
          <th>描述</th>
          <th style="width: 100px">建立時間</th>
          <th style="width: 100px">是否公開</th>
          <th style="width: 120px">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="article in articles" :key="article.id">
          <td>{{ article.title }}</td>
          <td>{{ article.author }}</td>
          <td>{{ article.description }}</td>
          <td>{{ article.create_at }}</td>
          <td>
            <span v-if="article.isPublic">已上架</span>
            <span v-else>未上架</span>
          </td>
          <td>
              <button class="btn btn-outline-primary btn-sm me-1 mb-1" type="button" @click="getArticle(article.id)">
                <i
                class="bi bi-pencil-square"></i></button>
              <button class="btn btn-outline-danger btn-sm me-1 mb-1" type="button"  @click="openDelArticleModal(article)">
                <i
                class="bi bi-trash3-fill"></i></button>
          </td>
        </tr>
      </tbody>
    </table>
    <ArticleModal ref="articleModal" :article="tempArticle" :is-new="isNew" @update-article="updateArticle" ></ArticleModal>
    <ArticleDelModal ref="delModal" :article="tempArticle"  @del-article="delArticle" />
  </div>
</template>

<script>
import ArticleModal from '../../components/Dashboard/AdminArticleModal.vue'
import ArticleDelModal from '../../components/Dashboard/AdminArticleDelModal.vue'

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
  components: {
    ArticleModal,
    ArticleDelModal
  },
  data () {
    return {
      articles: [],
      tempArticle: {},
      page: 1,
      isNew: false // 判斷新增或編輯
    }
  },
  methods: {
    // 列表
    getArticles (page = 1) {
      this.page = page
      this.$http.get(`${VITE_APP_URL}api/${VITE_APP_PATH}/admin/articles?page=${page}`)
        .then(res => {
          console.log(res)
          const { articles, pagination } = res.data
          this.articles = articles
          this.pagination = pagination
          console.log(articles, pagination)
        })
    },
    // 編輯細節 請注意 api article 沒有 s
    getArticle (id) {
      this.$http.get(`${VITE_APP_URL}api/${VITE_APP_PATH}/admin/article/${id}`)
        .then(res => {
          console.log(res)
          if (res.data.success) {
            this.openModal(false, res.data.article)
            this.isNew = false
          }
        })
    },
    openModal (isNew, item) {
      if (isNew) {
        this.tempArticle = {
          isPublic: false,
          create_at: new Date().getTime() / 1000,
          tag: []
        }
        this.isNew = true
      } else {
        this.tempArticle = { ...item }
        this.isNew = false
      }
      this.$refs.articleModal.showModal()
    },
    openDelArticleModal (item) {
      this.tempArticle = { ...item }
      this.$refs.delModal.showModal()
    },
    updateArticle (item) {
      this.tempArticle = item
      let api = `${VITE_APP_URL}api/${VITE_APP_PATH}/admin/article`
      let httpMethod = 'post'

      if (!this.isNew) {
        api = `${VITE_APP_URL}api/${VITE_APP_PATH}/admin/article/${this.tempArticle.id}`
        httpMethod = 'put'
      }

      this.$http[httpMethod](api, { data: this.tempArticle })
        .then(res => {
          console.log(res)
          this.$refs.articleModal.hideModal()
          this.getArticles(this.page)
        })
    },
    delArticle () {
      this.$http.delete(`${VITE_APP_URL}api/${VITE_APP_PATH}/admin/article/${this.tempArticle.id}`)
        .then(res => {
          console.log(res)
          this.$refs.delModal.hideModal()
          this.getArticles(this.page)
        })
    }

  },
  mounted () {
    this.getArticles()
  }
}
</script>
