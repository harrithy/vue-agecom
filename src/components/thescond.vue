<template>
    <div class="thesecond">
        <div class="thesecond-content">
            <div class="one">{{ age }}</div>
            <div class="two">&nbsp;
                <a href="" :class="lianjie1">{{ wangzhi }}</a>
            </div>
            <div class="three">&nbsp;{{ guodu }}&nbsp;</div>
            <div class="four">
                <!-- 到时候请使用事件绑定 现在使用的是hover事件 -->
                <a href="https://www.guge.com/"  target="_blank" :class="[a1]">{{ liulanqi }}</a>
            </div>
            
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
            let four1 = "four"
            let a1 = "a1"
            let lianjie1 = "lianjie1"
            
            return {
                age,
                wangzhi,
                guodu,
                liulanqi,
                four1,
                a1,
                lianjie1
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
    .lianjie1{
        color: white;
        text-decoration: none;
    }
    .lianjie1:hover{
        text-decoration: underline;
    }
    .three{
        float: left;
    }
    .four{
        float: left;
          
    }
    .a1{
        color: red;
        text-decoration: none;  
    }
    .a1:hover{
        text-decoration: underline;
    }

</style>