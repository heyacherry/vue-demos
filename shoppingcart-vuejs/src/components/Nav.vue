<template>
   <nav class="nav">
   <el-row type="flex" class="row-bg" justify="center">
    <el-col :span="20" >
    <el-menu mode="horizontal" >
	  <el-menu-item index="1"><span class="logo-text">Life</span>SHOP</el-menu-item>
	  <el-menu-item index="2">TO BUY</el-menu-item>
	  <el-menu-item index="3">ABOUT</el-menu-item>
	  <el-menu-item index="4">BY CherryLiang</el-menu-item>
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
	font-size: 1.5rem;
	margin: 0 1.5rem;
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


</style>
