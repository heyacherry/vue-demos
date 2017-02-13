<template>
  <div class="cartList">
    <div class="cart-title">
    <div class="title">Your Cart</div>

    <div class="cart-title-img">
    <el-badge :value="12" class="cart-quantity">
    <img src="../../static/img/cart.png">
    </el-badge>
    </div>
    </div>

    <div v-show="cartList.length===0" class="cart-items">
    	<span>Your cart is empty!!</span>
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
    </div>
  </div>
	
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  methods: {
    deleteItem (id) {
      console.log(id)
      console.log(id.id)
      console.log(id.title)
    }
  },
  computed: mapGetters({
    cartList: 'getAddedProducts',
    cartAmount: 'getCartAmount'
  })
}
</script>

<style>
.cartList{
	margin: 1rem auto;
	width: 100%;
	border: 1px solid green;
}

.cart-title {
	height: 5rem;
	width: 100%;
	vertical-align: middle;
	border: 1px solid red;
}

.cart-title .title{
	font-size: 3rem;
	width: 60%;
	height: 100%;
	display: inline-block;
	text-align: right;
	float: left;
	border: 1px solid yellow;
}

.cart-title-img{
	border: 1px solid blue;
	display: inline-block;
	width: 38%;
	height: 100%;
	float: right;
}

.cart-title-img img{
	width: 3.5rem;
}

.cart-items{
	margin: 1rem auto;
	height: 50rem;
	width: 100%;
	text-align: left;
	border:1px solid blue;
}

.cart-items .el-table{
	width: 95%;
	margin: 1rem auto;
	min-height: 25rem;
	border:1px solid pink;
}


</style>
