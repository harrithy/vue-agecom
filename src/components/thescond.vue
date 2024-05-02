<template>
    <div class="thesecond">
        <div class="thesecond-content">
            <div class="one">{{ age }}</div>
            <div class="two">{{ wangzhi }}</div>
            <div class="three">{{ guodu }}</div>
            <div class="four">&nbsp;{{ liulanqi }}</div>
        </div>


    </div>


</template>
<script>
    export default {
        setup() {
            let age = "AGE动漫 备用地址： "
            let wangzhi = "www.age.tv "
            let guodu =" 欢迎大家分享给身边朋友！为确保正常观看，请使用 "
            let liulanqi = " 谷歌浏览器"
            return {
                age,
                wangzhi,
                guodu,
                liulanqi
            }
        }

    }


</script>
<style scoped>
    .thesecond {
        width: 64%;
        height: 38.6px;
        margin: auto;
        margin-top: 8px;
        margin-bottom: 8px;
        background-color: rgb(33, 37, 41);
        border-radius: 4px;
        display: flex;

    }

    .thesecond-content {
        text-align: center;
        margin: auto;
        color: white;
        font-size: 14px;

    }
    .one{
        float: left;
        color: red;

    }
    .two{
        float: left;
    }
    .three{
        float: left;
    }
    .four{
        float: left;
        color: red;
    }

</style>