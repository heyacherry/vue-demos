<template>
    <section class="main">
		<el-row type="flex" class="row-bg" justify="center">
    <el-col :xs="11" :sm="13" :md="13" :lg="12">
      <product></product>
    </el-col>
    <el-col :xs="13" :sm="10" :md="9" :lg="8">
      <cart></cart>
    </el-col>
    </el-row>
	</section>
</template>

<script>
import Product from 'components/Products'
import Cart from 'components/Cart'

export default{
  name: 'Main',
  components: {
    Product,
    Cart
  }
}
</script>

<style>
.main{
    margin-top: 2rem;
}

.main .el-col{
  
}

.bg-purple {
    background-color: #eef1f6;
  }
</style>
