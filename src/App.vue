<template>
<div>
    <Nav></Nav>
    <HomePage></HomePage>
</div>
</template>

<script>
import HomePage from './pages/Home.vue'
import Nav from './components/nav.vue'
    export default{
        components:{
            HomePage,
            Nav
        }
    }
</script>

<style>
</style>