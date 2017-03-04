<template>
   <nav class="nav">
   <el-row type="flex" class="row-bg" justify="center">
    <el-col :span="20" >
    <el-menu mode="horizontal" >
	  <el-menu-item index="1"><router-link :to="{ name: 'Home' }"><span class="logo-text">Life</span>SHOP</router-link></el-menu-item>
	  <el-menu-item index="2"><router-link :to="{ name: 'Home' }">TO BUY</router-link></el-menu-item>
	  <el-menu-item index="3"><router-link :to="{ name: 'About' }">ABOUT</router-link></el-menu-item>
	  <el-menu-item index="4"><a href="https://github.com/CaiYiLiang" target="_blank">BY CaiYiLiang</a></el-menu-item>
	</el-menu>
   </el-col>
   </el-row>
   </nav>
	
</template>


<script>
</script>

<style>
.nav{
    margin-top: -1rem;
    width: 100%;
    background-color: #eef1f6;

}

.nav .el-menu{
	padding-left: 5%;
}

.nav .el-menu--horizontal .el-menu-item{
	text-align:center;
	font-size: 1.6rem;
	margin: 0 1.8rem;
}

.nav .el-menu--horizontal .el-menu-item .logo-text{
  font-size: 3rem;
  color: rgba(4, 144, 4, 0.7);
}

.nav .el-menu--horizontal .el-menu-item:hover{
    border-bottom: 5px solid #13ce66;
}

.nav .el-menu--horizontal .el-menu-item:first-child:hover{
    border-bottom:none;
}

.nav .el-menu--horizontal .el-menu-item:nth-child(2):before,
.nav .el-menu--horizontal .el-menu-item:nth-child(3):before,
.nav .el-menu--horizontal .el-menu-item:nth-child(4):before{
    content: "|";
    font-size: 1.8rem;
    margin-right: 1rem;
}

.nav .el-menu--horizontal .el-menu-item:nth-child(2):after,
.nav .el-menu--horizontal .el-menu-item:nth-child(3):after,
.nav .el-menu--horizontal .el-menu-item:nth-child(4):after{
    content: "|";
    font-size: 1.8rem;
    margin-left: 1rem;
}

.nav .el-menu--horizontal .el-menu-item a ,
.nav .el-menu--horizontal .el-menu-item:nth-child(4) a{
    text-decoration: none;
}

/*overwrite element-ui css*/
.el-menu--horizontal.el-menu--dark .el-submenu .el-menu-item.is-active, 
.el-menu-item.is-active {
    color: rgba(4, 144, 4, 0.7);
}

@media screen and (max-width: 880px){
  .nav .el-menu--horizontal .el-menu-item{
  margin: 0 1.5rem;
}

.nav .el-menu--horizontal .el-menu-item .logo-text{
  font-size: 2rem;
}

}

</style>
