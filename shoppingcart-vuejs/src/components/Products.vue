<template>
	<ul class="products">
	  <li v-for="product in products" class="product">
	    <div>
       <div class="product-img">
        <img :src=product.img>
       </div> 

       <div class="product-desc">
         <ul>
           <li><span>PRODUCT</span> : {{ product.title }}</li>
           <li><span>PRICE</span>  : ${{ product.price }}</li>
           <li><span>STORAGE</span> : {{ product.inventory }}</li>
           <el-button type="success" :disabled="!product.inventory"  
                      @click="addToCart(product)" class="buy-button">BUY ONE!
            </el-button>
         </ul>
       </div>
      </div>
	  </li>
	</ul>
	
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {

  computed: mapGetters({
    products: 'allProducts'
  }),
  methods: mapActions([
    'addToCart'
  ]),
  // trigger the asyn action step when at vue create life cicle stage
  created () {
    this.$store.dispatch('getAllProducts')
  }
}

</script>

<style>
.products{
  font-size: 2rem;
}

.product{
  min-height: 15rem;
  padding: 1rem;
  overflow: hidden; 
}

.product .product-img ,.product .product-desc{
  display: inline-block;
}

.product .product-img{
  width: 15rem;
  float: left;
  margin-right: 2rem;
}

.product .product-img img{
  width: 15rem;
}

.product .product-desc{
  width: 60%;
  height: 15rem;
  border: 1px dotted #d6d6e0;
  padding-left: 2rem;
  position: relative;
}

.product .product-desc ul{
  margin: auto 0.2rem;
}

.product .product-desc ul li{
   margin-top: 1.2rem;
   font-size: 1.6rem;
}

.product .product-desc ul li span{
   display: inline-block;
   width: 8rem;
}

.product .product-desc .buy-button{
  position: absolute;
  bottom: 0.8rem;
  left: 6rem;
}

/*Responsive Design*/
@media screen and (max-width: 1024px) {
  .product{
  padding: 1rem 0 0 0;
}

  .product .product-img{
  margin-right: 1rem;
 }

 .product .product-desc{
  width: 55%;
 }

 .product .product-desc ul{
  list-style: none;
  padding:0; 
}

}

@media screen and (max-width: 848px){
   .product{
     padding: 1rem 0 0 0;
  }

  .product .product-img{
  margin-right: 0;
 }

 .product .product-desc .buy-button{
  bottom: 0.5rem;
  left: 2rem;
 }

 .product .product-desc{
  width: 90%;
 }

 .product .product-desc ul li{
   margin-top: 1rem;
   font-size: 1.3rem;
 }
}

@media screen and (max-width: 685px){
  .product{
     padding: 1rem 0 0 0;
  }

  .product .product-img{
  margin-right: 0;
  }

  .product .product-desc{
  width: 80%;
}

 .product .product-desc ul{
  margin: 0;
}

 .product .product-desc ul li{
   margin-top: 1.3rem;
   font-size: 1.3rem;
 }

 .product .product-desc ul li span{
   width: 5rem;
}

}


</style>
