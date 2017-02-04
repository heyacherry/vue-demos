<template>
  <footer>
  <div class="footerInfo">
  <div>Features:</div>
  <ul>
  	<li><a href="https://github.com/vuejs/vue" target="_blank">Vue</a> + 
  	    <a href="https://github.com/vuejs/vue-router/blob/dev/examples/named-routes/app.js" target="_blank">vue-router</a> + 
  	    <a href="http://api.jquery.com/jquery.ajax/" target="_blank">ajax(jsonp)</a> working together</li>
  	<li>Single-file Vue Components</li>
  	<li>Responsive Design</li>
  	<li><a href="https://github.com/CaiYiLiang/vue-demos/tree/master/wikipediaViewer-vuejs" target="_blank">Source Code</a></li>
  </ul>
  </div>
  </footer>
</template>

<script>
export default {

  name: 'AppFooter',

  data () {
    return {

    };
  }
};
</script>

<style>
footer{
	width: 100%;
	color: rgb(106, 27, 154);
	font-size: 1.8rem;
	margin-top: 4rem;
}

.footerInfo{
	width: 36%;
	height: 100%;
	margin: 0 auto;
	padding: 1rem;
	text-align: left;
}

.footerInfo ul li{
   margin-bottom: 0.5rem;
}


/*Responsive Design*/
@media screen and (max-width: 880px) {
	.footerInfo{
		width: 70%;
	} 
}

@media screen and (max-width: 440px) {
	.footerInfo{
		width: 90%;
	} 
}


</style>