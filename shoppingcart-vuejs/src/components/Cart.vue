<template>
  <div class="cartList">
    <div class="cart-title">
    <div class="title">Your Cart</div>

    <div class="cart-title-img">
    <el-badge :value="cartQuantity" class="cart-quantity">
    <img src="../../static/img/cart.png">
    </el-badge>
    </div>
    </div>

    <div v-show="cartList.length===0" class="cart-items">
    	<span class="empty-cart">Sorry, your cart is empty!!</span>
    </div>

    <div v-show="cartList.length!==0" class="cart-items">
	     <el-table :data="cartList" stripe>
         <el-table-column prop="title" label="Product" > </el-table-column>
         <el-table-column prop="price" label="Price"></el-table-column>
         <el-table-column prop="quantity" label="Amount"></el-table-column>
         <el-table-column :context="_self" label="Dlete">
         <template scope="scope">
         <el-button size="small" type="danger"
          @click="deleteItem(scope.row)" icon="minus"></el-button>
         </template>
         </el-table-column>
         </el-table>

         <div class="cart-price">Total: $ {{ cartAmount }}</div>
         <el-button type="danger" class="pay">PAY !</el-button>
    </div>
  </div>
	
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  methods: {
    deleteItem ({ title }) {
      // console.log(title)
      this.$store.commit('DELETE_PRODUCT', title) // commit the mutation directly
    }
  },
  computed: mapGetters({
    cartList: 'getAddedProducts',
    cartQuantity: 'getTotalQuantity',
    cartAmount: 'getTotalPrice'
  })
}
</script>

<style>
.cartList{
	margin: 2.8rem auto;
	width: 100%;
  background-color: #eef1f6;
  border-radius: 10px;
}

.cart-title {
	height: 4.5rem;
	width: 100%;
	vertical-align: middle;
}

.cart-title .title{
	font-size: 3rem;
	width: 60%;
	height: 100%;
	display: inline-block;
	text-align: right;
	float: left;
  margin-top: 1rem;
}

.cart-title-img{
	display: inline-block;
  margin-top: 1rem;
	width: 38%;
	height: 100%;
	float: right;
}

.cart-title-img img{
	width: 4rem;
}

.cart-items{
	margin: 1rem auto;
	height: 35rem;
	width: 100%;
	text-align: left;
}

.cart-items .empty-cart{
  display: inline-block;
  width: 90%;
  text-align: center;
  font-size: 2rem;
  margin-top: 5rem;
}

.cart-items .el-table {
	width: 95%;
	margin: 1rem auto;
	min-height: 25rem;
}

.cart-items .cart-price ,
.cart-items .pay{
  display: inline-block;
}

.cart-items .cart-price {
	width: 50%;
	margin: 1.5rem auto;
	height: 3rem;
  text-align: center;
	font-size: 2rem;
}

.cart-items .pay{
  width: 30%;
}



</style>
