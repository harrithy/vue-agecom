<template>
    <header>
        <div class="header-container">
            <div class="boxer">
                <div class="boxer1">
                    <img src="https://cdn.aiqingyu1314.com/age/statics/images/logo.png?v=2024042101" alt="" class="picture">
                </div>
                <div class="boxer2">
                        <ul class="nav-list">
                            <li>{{ shouye }}</li>
                            <li>{{ menu }}</li>
                            <li>{{ week }}</li>
                            <li>{{ paihang }}</li>
                            <li>{{ download }}</li>
                            <!-- //使用v-for来完成导航栏内容的动态生成 -->
                            <!-- <li v-for="(item,index) in daohang" :key="index">{{ item }}</li> -->
                        </ul>
                </div>
                <div class="boxer3">
                    <input class="input" type="text" placeholder="输入番名搜索">
                </div>
            </div>



        </div>
    </header>


</template>
<script>
export default {
    setup(){
        //数据
        let shouye = "首页";
        let menu = "目录";
        let week = "一周更新";
        let paihang = "排行榜";
        let download = "客户端下载";
        //使用v-for来完成导航栏内容的动态生成
        let daohang = {
            shouye:"首页",
            menu :"目录",
            week : "一周更新",
            paihang : "排行榜",
            download : "客户端下载"
        }
        //方法

        //返回
        return{
            shouye,
            menu,
            week,
            paihang,
            download,
            daohang
        }

    }
}



</script>
<style scoped>
    .header-container {
        width: 100%;
        height: 72px;
        background-color: rgb(33, 37, 41);
        opacity: 1;
        justify-content: center;
        align-items: center;
        display: flex;
    }
    .boxer {
        width: 64%;
        height: 40px;
        margin: auto;
        display: flex;

    }
    .boxer1{
        
        height: 40px;
    }

    .boxer2 {
        
        height: 40px;
        margin-left: 10px;
        display: flex;
        
    }
    .picture {

        height: 40px;
    }
    .nav-list {
        list-style-type: none;
        padding: 0%;
        margin: 0%;
        justify-content: center;
        align-items: center;
        display: flex;
    }

    .nav-list li {
        display: inline;
        margin-left: 16px;
        margin-right: 16px;
        color: white;
    }
    .boxer3 {
        height: 40px;
        margin-left: 18%;
        display: flex;
        justify-content: center;
        align-items: center;
        
    }
    .input{
        height: 25px;
        border-radius: 5px 0 0 5px;
        border: none;
        
    }



</style>