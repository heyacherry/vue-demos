<template>
   <div class="wikipediaViewer">
   <section class="section-border" v-show="whethershow">
   	<a href="https://en.wikipedia.org/wiki/Special:Random" target="_target" class="ramdom-read">
   	<div class="search-icon"><img src="../assets/search.png"><span class="search">Ramdom Read on Wikipedia </span></div>
   	</a>
   </section>

   <section class="section-border" v-show="whethershow">
   	<input type="text" name="search-text" class="search-text" placeholder="Search what you want to know..."
   	       v-model="searchkey" @keyup.enter="searchbykey">
   </section>

   <section class="section-result" v-show="!whethershow"> 
     <ul id="resultList">
       <li v-for="result in results"></li>
     </ul>
   </section>

  <button id="test" >Click</button>

   </div>
</template>

<script>
// var $ = require('jquery');
/*Expose jQuery to the global object*/
// window.jQuery = $;
import jQuery from "jquery"
var $ = window.$ = window.jQuery =jQuery

export default {
  name: 'WikipediaViewer',

  components: {
    $
  },

  data () {
    return {
    searchkey:"",
    searchwindow:"true",
    results:[],
    };
  },

  computed:{
    whethershow(){
      return this.results.length>0?false:true;
    }
  },


  methods: {
    searchbykey() {
      console.log("==searchbykey==");
      console.log(this.searchkey.trim());
    }
  },

 //  created: function () {
 // }

   mounted:function () {
      $("#test").click(()=> {
        console.log("jquery-click");
        this.results.push("1");
        console.log(this.results);
      });
 }
}

</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Arsenal|Cormorant');
.wikipediaViewer{
	margin-top: 4rem;
	border: 1px red solid;
}

.section-border{
	width: 35%;
  height: 7rem;
	border: 1.5px solid #7b1fa2;
  margin: 0 auto 4rem;

}

/*Add media query for the width -880px*/

/*search-text background*/
.ramdom-read ,.search-text{
	display: inline-block;
	width: 97.7%;
    height: 83%;
	border: 1px solid #9c27b0;
	margin: 0.5rem auto;
	background-color: #6a1b9a;
	color: #fff;
	text-decoration: none;
}

.search-icon {
	/*border: 1px solid white;*/
	margin: 1rem;
}

.search-icon img{
	vertical-align:bottom; /*To vertical-align with text*/
	margin-right: 1rem;
}

.search-icon .search{
    font-size: 2rem; 
    font-family: 'Arsenal', sans-serif;
	 font-family: 'Cormorant', serif;
}


/*search-text*/
.search-text{
	text-align: center;
	font-size: 2.5rem; 
    font-family: 'Arsenal', sans-serif;
	font-family: 'Cormorant', serif;
	color: #fff;
}

</style>