<template>
   <section class="section-result"> 
     <ul id="resultList" class="resultList">
       <li v-for="result in results" class="result">
       <a :href="result.url" target="_blank"> 
       <span class="title">{{result.title}} :</span>
       <br> 
       <span class="extract">{{result.extract}}</span></a>
       </li>
     </ul>
   </section>
</template>

<script>
export default {

  name: "SearchResult",
  props: ["results"],

  data () {
    return {

    };
  },

  methods:{
  	check(){
  		console.log(this.results);
  	}
  }
};
</script>

<style>
.resultList{
  width: 80%;
  height: auto;
  margin: 0 auto;
  text-align: left;
}

.result{
  border-top:0.8rem solid rgba(85, 24, 121, 0.92); /*rgba(245, 76, 70, 0.94)*/
  background-color: rgba(223, 220, 220, 0.27);
  list-style: none;
  margin-bottom: 2rem;
  padding:0.8rem;
  border-radius: 0.3rem;
}

.result .title{
  display: inline-block;
  font-size: 1.6rem;
  margin-bottom: 0.4rem;
  color:#4D606E;
}

.resultList .result a{
  text-decoration: none;
}

.result .extract{
  font-size: 1.3rem;
  color:#626568;
}

</style>