<template>
    <section class="main">
		<el-row type="flex" class="row-bg" justify="center">
    <el-col :span="12">
      <product></product>
    </el-col>
    <el-col :span="8" class="bg-purple">
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
   border: 1px solid green;
}

.bg-purple {
    background-color: #eef1f6;
  }
</style>
