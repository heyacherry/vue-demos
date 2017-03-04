<template>
	<el-row type="flex" justify="center" class="about-row" >
    <el-col :xs="20" :sm="20" :md="10" :lg="10">
    <div>Features:</div>
    <ul>
    <li><a href="http://element.eleme.io/#/en-US" target="_blank">Element-UI</a></li>
  	<li><a href="https://github.com/vuejs/vue" target="_blank">Vue</a> + 
  	    <a href="https://github.com/vuejs/vue-router/blob/dev/examples/named-routes/app.js" target="_blank">vue-router</a> + 
  	    <a href="https://vuex.vuejs.org/en/intro.html" target="_blank">vuex</a> working together</li>
  	<li>Single-file Vue Components</li>
  	<li>Responsive Design</li>
  	<li><a href="https://github.com/CaiYiLiang/vue-demos/tree/master/shoppingcart-vuejs" target="_blank">Source Code</a></li>
    </ul>
    </el-col>
    </el-row>
</template>

<script>
	
</script>

<style>
	.about-row{
		margin: 8rem;
    font-size: 2rem;
	}

  .about-row ul li{
    margin-top: 1rem;
    font-size: 1.6rem;
  }

  .about-row ul li a{
    text-decoration: none;
  }

</style>
