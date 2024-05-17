<template>
    <!-- <third1/>
    <third2/> -->
    <div :class="container">
        <div :class="leftContainer">
            <third1/>

        </div>
        <div :class="rightContainer">
            <third2/>

        </div>

    </div>

    
  

</template>
<script>
import third1 from './third1.vue';
import third2 from './third2.vue';
export default {
    setup() {
        let container = "container";
        let leftContainer = "left-container";
        let rightContainer = "right-container";

        return {
            container,
            leftContainer,
            rightContainer
        }
    },
    components: {
        third1,
        third2
    }
}


</script>
<style scoped>
.container{
    display: flex;
    background-color: rgb(33, 37, 41);
    border-radius: 5px;
    width: 64%;
    margin: auto;
}
.left-container{
    flex:2;
    
}
.right-container{
    flex:1;
}


</style>