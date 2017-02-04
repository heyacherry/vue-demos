<template>
   <div class="wikipediaViewer">
   <section class="section-border" v-show="whethershow">
   	<a href="https://en.wikipedia.org/wiki/Special:Random" target="_target" class="ramdom-read">
   	<div class="search-icon"><img src="../assets/search.png"><span class="search">Ramdom Read on Wikipedia </span></div>
   	</a>
   </section>

   <section class="section-border" v-show="whethershow">
   <input type="text" name="search-text" class="search-text" placeholder="Input,Enter and Search.."
   	       v-model="searchkey" @keyup.enter="searchbykey">

   <router-link to="/search"><span id="search"></span></router-link>
   </section>

   <!--child component:bind the val and then props-->
   <!-- <search-result :show="!whethershow" :results="results"></search-result> -->
   <!-- route outlet -->
   <!-- component matched by the route will render here -->
   <transition name="fade" mode="out-in">
   <router-view :results="results"></router-view>
   </transition>

   </div>
</template>

<script>
// import SearchResult from "./SearchResult.vue";

// var $ = require('jquery'); CommonJS moudle
/*Expose jQuery to the global object*/
// window.jQuery = $;
import jQuery from "jquery"
var $ = window.$ = window.jQuery =jQuery

var api = "https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=";
var cb = '&callback=JSON_CALLBACK';


export default {
  name: 'WikipediaViewer',
  components: {
    $
    // SearchResult
  },

  data () {
    return {
    searchkey:"",
    searchwindow:"true",
    results:[],
    baseUrl:"https://en.wikipedia.org/wiki/?curid="
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
      var key = this.searchkey.trim();
      if(!key){
        console.log("==searchbykey--null value==");
        return;
      }
      
      $.ajax({
        url: api+key+cb,
        dataType: "jsonp",
        //jsonpCallback:"jsonCallback"
      })
      .done(res=>{
        // var that = this;
        Object.keys(res.query.pages).map(index=>{
          console.log(res.query.pages[index]);
          res.query.pages[index].url = this.baseUrl+res.query.pages[index].pageid;
          console.log(res.query.pages[index].url);
          this.results.push(res.query.pages[index]);
          // that.results.push(res.query.pages[index]);
        });
        console.log(this.results);
      });

      //simulate click event onto <router-link> --<a> tag
      $( "#search" ).trigger( "click" );
    }
  }

}


</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Arsenal|Cormorant');
.wikipediaViewer{
	margin-top: 4rem;
/*	border: 1px red solid;*/
}

.section-border{
	width: 35%;
  height: 7rem;
	border: 1.5px solid #7b1fa2;
  margin: 0 auto 4rem;
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
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
  -webkit-transition: all 0.1s;
  -o-transition: all 0.1s;
  transition: all 0.1s;
}

.section-border:hover{
  border: 1.5px solid #fff;
}

.ramdom-read:hover,.search-text:hover{
  border-radius: 3px;
  border-bottom: 5px solid #E91E63;
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
}

.fade-enter-active, .fade-leave-active{
  -webkit-transition:all .3s ease ;
  -o-transition: all .3s ease;
  transition: all .3s ease;
}
.fade-enter, .fade-leave-active{
  transform: translateX(10px);
  opacity:0;
}


/*Responsive Design*/
@media screen and (max-width: 880px) {
  .section-border{
  width: 75%;
  height: 7rem;
  border: 1.5px solid #7b1fa2;
  margin: 0 auto 4rem;

  }

  .search-text{
  font-size: 3rem; 
 }
}

@media screen and (max-width: 440px) {
  .section-border{
  width: 90%;
  height: 7rem;
  border: 1.5px solid #7b1fa2;
  margin: 0 auto 4rem;

  }
  
  .search-text{
   font-size: 2rem; 
  }
}

</style>