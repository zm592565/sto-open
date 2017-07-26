<template>
  <div class="header">
    <!-- 在router-link遍历的时候，要给key指定一个唯一值，不然会有警告提示 -->
    <router-link v-for="(value,key) in menu" :key="key" :to="value.url">{{value.name}}</router-link>
    <div class="btn">
      <a :href="login_text.href">{{login_text.text}}</a> | <a :href="reg_text.href">{{reg_text.text}}</a>
    </div>
  </div>
</template>
<script>
import 'staticPath/css/header.css'
export default {
  name: 'top',

  /*设置默认导航数据*/
  props: {
    /*在设置默认值的时候，最好要指定类型*/
    menu: {
      type: Array,
      default: function () {
        return [
        {name: '首页',url: '/'}, 
        {name: '接口文档',url: '/about'}, 
        {name: '接口申请',url: '/jiekou'}, 
        {name: '联调',url: '/liantiao'},
        {name: '常见问题',url: '/ask'},
        {name: '联系我们',url: '/contact'},
        ]
      }
    }

  },
  data () {
    return {
      login_text: {text:'登录',href:'/login'},
      reg_text: {text:'注册',href:'/reg'},
      activeName:''
    }
  },

  /*页面加载完成之后执行*/
  mounted(){
       //alert(this.$route.query)
       console.info(this.$route.path);
       this.url=this.$route.path;/*给data里的url赋值*/
  },

  /*事件*/
   methods: {
      getRouteTo: function (gameName) {   
         this.activeName = gameName
      }


   }

}
</script>
<style scoped>

  /*路由默认就有一个选中样式如下*/
  .router-link-exact-active{
    color: orange
  }


</style>
