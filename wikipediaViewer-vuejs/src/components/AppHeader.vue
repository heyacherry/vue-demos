<template>
	 <header>
      <h1>Wikipedia Viewport</h1>
      <span class="author">BY <a href="https://www.freecodecamp.com/caiyiliang" target="_blank">CaiYiLiang</a></span>
    </header>
</template>

<script>
export default {

  name: 'AppHeader',

  data () {
    return {

    };
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Pacifico');

header{
    font-size: 1.8rem;
   font-family: 'Pacifico', cursive;
}

header .author{
  font-size: 1.5rem;
}

header .author a{
  text-decoration: none;
}

</style>