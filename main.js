import Vue from 'vue'
import App from './App'
import uView from "uview-ui";
Vue.use(uView);
Vue.prototype.websiteUrl = 'http://kpqg8f.natappfree.cc'; //全局的Url变量
Vue.prototype.weatherArray = ['小雨','中雨','大雨','阵雨','雷阵雨','多云','阴','晴','小雪','中雪','暴雪']; 
Vue.prototype.iconArray = ['iconfont icon-tianqixiaoyu','iconfont icon-tianqizhongyu','iconfont icon-tianqidayu','iconfont icon-tianqi-zhenyu','iconfont icon-tianqileizhenyu','iconfont icon-tianqi-duoyun','iconfont icon-tianqi_yintian','iconfont icon-tianqi_qingtian','iconfont icon-tianqi_xiaoxue','iconfont icon-tianqi_zhongxue','iconfont icon-tianqi_daxue'];
Vue.prototype.sloganArray=['不经风雨，怎见彩虹','祝你开心，不止现在','生命在于运动','最美不过下雪天']
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
