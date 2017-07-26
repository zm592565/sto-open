<template>
	<div class="footer">
		<div class="copyright">{{copyright}}</div>
		<div class="Empress">{{Empress}}</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		  name: 'bottom',
		  data () {
		    return {
		      copyright: '沪ICP备13037807号-1 版权所有：申通快递有限公司',
		      Empress:'技术支持联系电话  15162406378'
		    }
		  }
	}
</script>
<style type="text/css" scoped>
	
	.footer{
		width: 1200px;
		margin: 0 auto;
		clear: both;
		height: 50px;
		line-height: 50px;
		font-size: 12px;
		color: #999
	}
	
	.copyright{
		float: left;
	}
	.Empress{
		float: right;
	}
</style>