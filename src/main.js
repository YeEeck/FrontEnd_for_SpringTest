import Vue from 'vue'
import { Button, Input, message, Icon, Table, Drawer, Divider, Modal, Tabs, Tag, Skeleton } from 'ant-design-vue';
import App from './App.vue'
import router from './router'
import Print from 'vue-print-nb'


Vue.component(Button.name, Button)
Vue.component(Input.name, Input)
Vue.component(Icon.name, Icon)
Vue.component(Table.name, Table)
Vue.component(Drawer.name, Drawer)
Vue.component(Divider.name, Divider)
Vue.component(Modal.name, Modal)
Vue.component(Tabs.name, Tabs)
Vue.component(Tag.name, Tag)
Vue.component(Skeleton.name, Skeleton)
// Vue.component(Menu.name, Menu)
// Vue.component(Layout.name, Layout)
Vue.use(Modal);
Vue.use(Tabs);
Vue.use(Print);

Vue.prototype.$message = message;
Vue.prototype.$confirm = Modal.confirm;


Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
