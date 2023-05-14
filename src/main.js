import { createApp } from 'vue'
import website from './config/website'
import axios from './axios';
import router from './router/';
import store from './store';
import i18n from './lang/';
import { language, messages } from './lang/';
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Avue from '@smallwei/avue';
import '@smallwei/avue/lib/index.css';
import crudCommon from '@/mixins/crud.js'
import { getScreen } from './utils/util'
import './permission';
import error from './error';
import avueUeditor from 'avue-plugin-ueditor'
import basicBlock from 'components/basic-block/main.vue'
import basicContainer from 'components/basic-container/main.vue'
import App from './App.vue'
import 'animate.css'
import dayjs from 'dayjs'
import 'styles/common.scss';
import Mock from 'mockjs'
var data = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|1-10': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1
    }]
})
// 输出结果
console.log(data)

window.$crudCommon = crudCommon
window.axios = axios;
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.component('basicContainer', basicContainer)
app.component('basicBlock', basicBlock)
app.config.globalProperties.$dayjs = dayjs
app.config.globalProperties.website = website
app.config.globalProperties.getScreen = getScreen
app.use(error);
app.use(i18n)
app.use(store)
app.use(router)
app.use(ElementPlus, {
  locale: messages[language]
})
app.use(Avue, {
  axios,
  calcHeight: -165,
  locale: messages[language]
})
app.use(avueUeditor, { axios })
app.mount('#app')
