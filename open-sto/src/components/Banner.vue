<template>
  <div class="banner">
   			<!-- Swiper -->
		    <div class="swiper-container">
		        <div class="swiper-wrapper">
		            <div class="swiper-slide"><img src="~staticPath/img/banner.png"/></div>
		            <div class="swiper-slide"><img src="~staticPath/img/banner.png"/></div>
		        </div>
		        <!-- Add Pagination -->
		        <!-- <div class="swiper-pagination"></div>
		        <div class="swiper-button-prev"></div>
    			<div class="swiper-button-next"></div> -->
		    </div>

		    <div class="news">
		    	<ul>
		    		<li v-for="(value,key) in news" >{{value.content}}</li>
		    	</ul>
		    </div>
  </div>
</template>
<script>
/*这里的staticPath是在webpack.base.conf.js文件里定义的路径别名*/
import 'staticPath/lib/swiper/swiper-3.4.2.min.js'
import 'staticPath/lib/swiper/swiper-3.4.0.min.css';

export default {
  name: 'banner',
  data(){
  	return {
  		news:[
  		{content:'国产航母最新进展 甲板拉起标语加紧舾装',time:'2017/10/16'},
  		{content:'印度"保护不丹论"遭驳斥 野心膨胀仍在继续增兵',time:'2017/10/16'},
  		{content:'新052D"中华神盾"舰下水 船厂继续下饺子',time:'2017/10/16'}
  		]
  	}
  },
  mounted () {
     // console.log('挂载好了');
     var mySwiper = new Swiper('.swiper-container', {
       		pagination: '.swiper-pagination',
	        nextButton: '.swiper-button-next',
	        prevButton: '.swiper-button-prev',
	        paginationClickable: true,
	        spaceBetween: 30,
	        centeredSlides: true,
	        autoplay: 2500,
	        autoplayDisableOnInteraction: false
     })
     // console.log('载入swiper了')
   }
   
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.banner{
	background: #0f88c1;
	height: 550px;
	position: relative;
	overflow: hidden;
}
.banner .news{
	position: absolute;
	bottom: 0px;
	left: 0px;
	right: 0px;
	background: #1a97d2;
	height: 50px
}
.news ul{
	width: 1170px;
	height: 50px;
	display: block;
	line-height: 50px;
	margin: 0 auto;
	padding-left: 30px;
	background: url('~staticPath/img/icon_news.png') no-repeat left center;
	background-size: auto 35%;
}
.news ul li{
	width: 370px;
	height: 50px;
	float: left;
	text-align: left;
	color: #fff;
	font-size: 12px;
	padding-right: 20px;
	overflow: hidden;
}
</style>
