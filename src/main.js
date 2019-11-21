/**
 * 注意：在webpack中，使用import Vue from 'vue';导入的Vue函数功能不完整只提供了runtime-only的方式，并没有提供网页中的使用方式
 * 直接使用import Vue from 'vue';会报错，需要用方式二导入
 */
//方式一：指向Vue的实际路径
//import Vue from '../node_modules/vue/dist/vue.js'
//方式二：到webpack.config.js中新增模块reslove
import Vue from 'vue';

/**
 * var login = {
 *     template:'<h3>这是登录组件,由main.js中创建</h3>'
 * };
 * 默认webpack无法打包.vue文件，需要安装相关loader: npm i vue-loader vue-template-compiler -D
 */
import login from './vue/login.vue';


var vm = new Vue({
    el:'#app',
    data:{
        msg:'来自main.js的msg消息'
    },
    /**
     * render:function(createElement){
     *     return createElement(login);
     * }
     * 可以简写为下面这种方式(仅有一个参数的方法)
     */
    render:c=>c(login)
});