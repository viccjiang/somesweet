import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'

import axios from 'axios'
import VueAxios from 'vue-axios'
import CKEditor from '@ckeditor/ckeditor5-vue'

// VeeValidate
import {
  Form, Field, ErrorMessage, defineRule, configure
} from 'vee-validate'
import AllRules from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'

import App from './App.vue'
import router from './router'

import './assets/all.scss'

// VeeValidate 定義規則
Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule])
})
// VeeValidate 設定
configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
  validateOnInput: true // 當輸入任何內容直接進行驗證
})
// 設定語系
setLocale('zh_TW')

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(CKEditor)
app.use(VueAxios, axios)
app.use(router)
app.component('FormView', Form) // 改為兩個字母
app.component('FieldView', Field) // 改為兩個字母
app.component('ErrorMessage', ErrorMessage)
app.mount('#app')
