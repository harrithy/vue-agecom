<template>
    <div class="div1">
        <div class="div2">
            最近更新
            <hr>
        </div>
        <div>
            <div class="container">
                <div class="container1">
                    <div><img src="../pic/1.png" alt="" @mouseover="isHover = true" @mouseleave="isHover = false"
                        :style="{ transform: isHover ? 'scale(1.2)' : 'scale(1)' }" class="enl"></div>
                    <p>声优广播前的幕前幕后</p>
                    <!-- <div class="p1">声优广播前的幕前幕后</div> -->
                </div>
                <div class="container1">
                    <img src="../pic/2.png" alt="">
                    <p>失忆投捕</p>
                </div>
                <div class="container1">
                    <img src="../pic/3.png" alt="">
                    <p>竞轮少女！</p>
                </div>
                <div class="container1">
                    <img src="../pic/4.png" alt="">
                    <p>被称为废物的原英雄，被家里流放后随心所欲地活下去</p>
                    <!-- <div class="test">被称为废物的原英雄，被家里流放后随心所欲地活下去</div> -->
                </div>
                <div class="container1">
                    <img src="../pic/5.png" alt="">
                    <p>末班列车去哪里?</p>
                </div>
            </div>
            <div class="container2">
                <div class="container1">
                    <img src="../pic/6.png" alt="">
                    <p>沙漠大冒险:剧集</p>
                </div>
                <div class="container1">
                    <img src="../pic/7.png" alt="">
                    <p>狼与香辛料 行商邂逅贤狼</p>
                </div>
                <div class="container1">
                    <img src="../pic/8.png" alt="">
                    <p>我回来了，欢迎回来</p>
                </div>
                <div class="container1">
                    <img src="../pic/9.png" alt="">
                    <p>转生为第七王子，随心所欲的魔法学习之路</p>
                </div>
                <div class="container1">
                    <img src="../pic/10.png" alt="">
                    <p>月光下的异世界之旅 第二季</p>
                </div>
            </div>
        </div>
        <div>
            <third11 />
        </div>
        <div>
            <third12 />
        </div>
        <div class="container">
                <div class="container1">
                    <div style="width: 100%; height: 200px;"><img src="../pic/11.png" alt=""></div>
                    <div class="p2"><p>声优广播前的幕前幕后</p></div>
                </div>
                
                <div class="container1">
                    <div style="width: 100%; height: 200px;"><img src="../pic/11.png" alt=""></div>
                    <div class="p2"><p>声优广播前的幕前幕后</p></div>
                </div>
                <div class="container1">
                    <div style="width: 100%; height: 200px;"><img src="../pic/11.png" alt=""></div>
                    <div class="p2"><p>声优广播前的幕前幕后1111111111111111111111111111111111111111111</p></div>
                </div>
            </div>
            
    </div>


</template>
<script>
    import third11 from './third11.vue'
    import third12 from './third12.vue'
    export default {
        data() {
            return {
                img1: '../pic/1.png',
                isHover: false,
            }

        },
        components: {
            third11,
            third12
        }
    }
</script>
<style scoped>
    .div1 {
        margin-top: 10px;
        margin-left: 15px;

    }

    .div2 {
        font-size: 16px;
        color: white;
    }

    hr {
        color: white;
    }

    .container {
        display: flex;
        margin-top: 15px;
    }

    .container2 {
        display: flex;
        margin-top: 10px;
    }

    .container1 {
        flex: 1;
        margin: 5px;
        overflow: hidden;

    }

    img {
        width: 100%;
        height: 200px;
    }

    .p1 {
        margin: 0;
        color: white;
        text-align: center;
        font-size: 13px;
    }

    .container1 p {
        margin: auto;
        color: white;
        text-align: center;
        font-size: 13px;
        /* width: 100%; */
        /* text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap; */

    }

    .enl {
        transition: transform 1s;
    }
    .p2{
       
        /* text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap; */
        display: flex;
        border: 1px solid white;
        width: 100%;
        
    }
 

</style>