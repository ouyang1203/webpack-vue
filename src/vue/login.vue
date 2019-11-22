<template>
    <div>
        <h3>这是登录组件，使用.vue文件创建出来的---{{msg}}</h3>
    </div>
</template>

<script>
//给VUE组件添加data和methods
export default{
    data(){
        return {
            msg:'login.vue中的data属性msg'
        };
    },
    methods:{
        show(){
            console.log("调用了login.vue中的show方法")
        }
    }
}
</script>

<style>

</style>