<template>
  <div class="index">
    <Top></Top>
	   <Banner></Banner>
	   <div class="box clearfix"> 
        <dl>
          <dt>
            <img src="~staticPath/img/icon_order.png">
          </dt>
          <dd>
            <p>快件追踪</p>
            <abbr>共享接口，实现数据交互一体化提升作业效率及用户体验</abbr>
          </dd>
        </dl>
        <dl>
          <dt>
            <img src="~staticPath/img/icon_shop.png">
          </dt>
          <dd>
            <p>电商对接</p>
            <abbr>服务电商企业，为电商物流服务提供系统性支持</abbr>
          </dd>
        </dl>
        <dl>
          <dt>
            <img src="~staticPath/img/icon_api.png">
          </dt>
          <dd>
            <p>电子面单API(开发中)</p>
            <abbr>提供用户平台与申通平台有关使用电子面单功能的数据交互标准</abbr>
          </dd>
        </dl>
        <dl>
          <dt>
            <img src="~staticPath/img/icon_pencil.png">
          </dt>
          <dd>
            <p>大头笔(开发中)</p>
            <abbr>共享网点信息，让客户能更精确的选择发货和到达网点</abbr>
          </dd>
        </dl>
     </div>
     
    <div class="link_box">
      <dl><a href="#"><img src="~staticPath/img/logo_jd.png"/></a></dl>
      <dl><a href="#"><img src="~staticPath/img/logo_wps.png"/></a></dl>
      <dl><a href="#"><img src="~staticPath/img/icon_core.png"/></a></dl>
      <dl><a href="#"><img src="~staticPath/img/logo_see.png"/></a></dl>
      <dl><a href="#"><img src="~staticPath/img/logo_51.png"/></a></dl>
      <dl><a href="#"><img src="~staticPath/img/logo_e.png"/></a></dl>
      <dl><a href="#"><img src="~staticPath/img/logo_ago.png"/></a></dl>
      <dl><a href="#"><img src="~staticPath/img/logo_51.png"/></a></dl>
      <dl><a href="#"><img src="~staticPath/img/logo_e.png"/></a></dl>
      <dl><a href="#"><img src="~staticPath/img/logo_ago.png"/></a></dl>
      <dl><a href="#"><img src="~staticPath/img/logo_jd.png"/></a></dl>
      <dl><a href="#"><img src="~staticPath/img/logo_wps.png"/></a></dl>
      <dl><a href="#"><img src="~staticPath/img/icon_core.png"/></a></dl>
      <dl><a href="#"><img src="~staticPath/img/logo_see.png"/></a></dl>
    </div>

    <div>
      <p>test</p>
      <input class="input-text" type="text" name=""  v-model="msg">
    </div>
      <p>返回的结果：{{result}}</p>

	 <Bottom></Bottom>
  </div>
</template>
<script>


import Top from '@/components/top'
import Banner from '@/components/banner'
import Bottom from '@/components/bottom'



import axios from 'axios';
import $ from 'jquery';

export default {
  name: 'index',
  components: {
	   Top,
	   Banner,
	   Bottom
	},
  data () {
    return {
      msg: 1,
      aaa:55
    }
  },
  // watch:{
  //   // msg:function(){

  //   //    // axios.get('http://localhost/testimg/index.php?id='+this.msg)
  //   //    //    .then(function(respone){
  //   //    //        console.log(respone);
  //   //    //    })
  //   //    //    .catch(function(error){
  //   //    //        console.log(error);
  //   //    //    });
  //   // }
  // },


  /*生命周期*/
  beforeCreate:function(){

    console.info('在文档被渲染前输出');
    this.msg+'beforeCreate';

  },


  created:function(){

    console.info('页面被渲染完成后');
    this.msg+'created';
  },



  beforeMount:function() {
    
    console.info('页面被渲染完成后数据还没有挂载进去之前输出');
     this.msg+'beforeMount';
  },



  beforeUpdate:function(){

    console.info('在数据更新之前输出');

    this.msg+'beforeUpdate';

   



  },




  /*页面已经加载完成而且最新的数据已经被挂载进去之后*/
  mounted(){

    console.info('页面已经加载完成而且最新的数据已经被挂载进去之后');
    this.init();
    this.check;

    this.msg+'mounted';




  },


  /*过滤器*/
  filters: {
    capitalize: function (value) {
      alert(value);
    }
  },




  methods:{
      init(){
          console.log('页面加载完成');

      }
  },
  computed: {
    // 实时计算属性，在需要实时计算的时候可以使用这个属性，它和watch还是有不同的地方
    // 跨域请求，一定要在请求的地址页面加入header('Access-Control-Allow-Origin:*');
    result: function() {
          /*运行成功的get方法*/
          // axios.get('http://localhost/testimg/index.php?id='+this.msg)
          // .then(function(respone){
          //     console.log(respone);
          // })
          // .catch(function(error){
          //     console.log(error);
          // });


          /*使用ajax*/

          $.post("http://localhost/testimg/index.php", { name: this.msg, time: "text" },
           function(data){
             console.log('ajax请求');
             console.log(data);
          });







          /*POST方法*/
          /*post带入的数据*/
          var params = new URLSearchParams();
              params.append('param1', this.msg);
              params.append('param2', 'value2');
          axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
          axios.post('http://localhost/testimg/index.php', params)
            .then(function (response) {

              // console.log('加载中...');
              console.log(response.data.msg);
            })
            .catch(function (error) {
              console.log('报错');
            });


    },
    check:function(){
      console.log('测试如何调用computed里的方法')

    }
  }

}
</script>
<style scoped>
  @import '~staticPath/css/index.css';
  .input-text{
    border: 1px solid #ddd;
    height: 38px;
  }
</style>
