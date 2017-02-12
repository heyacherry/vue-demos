<template>
	<ul class="products">
	  <li v-for="product in products" class="product">
	    <div>
       <div class="product-img">
        <img :src=product.img>
       </div> 

       <div class="product-desc">
         <ul>
           <li>PRODUCT: {{ product.title }}</li>
           <li>PRICE: $ {{ product.price }}</li>
           <li>STORAGE: {{ product.inventory }}</li>
           <el-button type="success" :disabled="!product.inventory"  
                      @click="addToCart(product)">BUY ONE!
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
    'addToCart' // mapAction写法 ??
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
  margin: 1rem;
}

.product{
  border: 1px solid red;
  min-height: 15rem;
  padding: 1rem;
  margin-bottom: 1.8rem;
  overflow: hidden; 
}

.product .product-img ,.product .product-desc{
  display: inline-block;
}

.product .product-img{
  width: 15rem;
  border: 1px solid red;
  float: left;
  margin-right: 2rem;
}

.product .product-img img{
  width: 15rem;
}

.product .product-desc{
  width: 65%;
  height: 15rem;
  border: 1px solid blue;
}

</style>
