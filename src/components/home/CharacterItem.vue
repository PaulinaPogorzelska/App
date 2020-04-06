<template>
<div>   
    <p>{{url}}</p>
</div>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default{
        props:['url'],
        created() {
            this.$store.dispatch("fetchCharacter", this.url);
        },
        computed: {
            ...mapGetters(['getOnePoke']),
        },
    }
</script>

<style>
</style>