<template>
  <div class="index">
    <Top></Top>
	   <div class="box">about</div>
	 <Bottom></Bottom>
  </div>
</template>
<script>
import Top from '@/components/top'
import Banner from '@/components/banner'
import Bottom from '@/components/bottom'
export default {
  name: 'about',
  components: {
	   Top,
	   Banner,
	   Bottom
	},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<style scoped>
  @import '~staticPath/css/index.css';
</style>
