<template body>
    <header1/>
    <thescond/>
    <third/>


</template>
<script>
import header1 from './components/header1.vue';
import thescond from './components/thescond.vue';
import third from './components/third.vue';
export default {
    components: {
        header1,
        thescond,
        third
    }
}


</script>
<style>
body {
    margin: 0;
    padding: 0;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* text-align: center; */
    background-color: #606061;
    
}
</style>