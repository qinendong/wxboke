import Vue from 'vue'
import App from './App'
import store from './store'
import loding from './components/loding.vue'
import x2js from 'x2js' //xml数据处理插件
Vue.prototype.$x2js = new x2js() //创建x2js对象，挂到vue原型上
Vue.component('loding',loding)
Vue.config.productionTip = false
Vue.prototype.$store = store
App.mpType = 'app'
function loading(tf){
    if(tf){
        store.commit("switch_loading",tf)
    }else{
        store.commit("switch_loading")
    }
}
Vue.prototype.$loading = loading;
const app = new Vue({
	store,
    ...App
})
app.$mount()
