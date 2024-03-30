import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");

/*
 *   1.文件切片 查找已上传切片
 *   2.切片上传
 *   3.请求合并
 *   4.后端合并 使用http库
 * */
