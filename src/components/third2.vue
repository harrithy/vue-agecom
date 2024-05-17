<template>
    <div class="div1">
        <div class="div2">
            最近更新
            <hr>
        </div>
    </div>
    <button @click="handleClick">按钮</button>

    
</template>
<script>
export default{
    setup(){
        function handleClick(){
            console.log('按钮被点击了');
        }
        return{
            handleClick
        }
    }
}

</script>
<style>
    .div1 {
        margin-top: 10px;
        margin-left: 12px;
        margin-right: 12px;
    }

    .div2 {
        font-size: 16px;
        color: white;
    }


</style>