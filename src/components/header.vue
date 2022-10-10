<template>
    <div id="header">
    <div class="content">
        <div><svg id="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36.77 8"><g id="icon"><path d="M1.65,10H0L2.26,2H4.77l2.28,8H5L3.34,3.67Z" transform="translate(0 -2)"/><path d="M9.57,9.21V10H7.73V2H9.57V5.41c0,.59,0,1.18-.05,1.77a10.15,10.15,0,0,1,.89-1.65l1.88-2.69V2h1.84v8H12.29V6.38c0-.61,0-1.11.05-1.49a8.61,8.61,0,0,1-.9,1.64Z" transform="translate(0 -2)"/><path d="M16.41,10H14.76L17,2h2.51l2.28,8h-2L18.09,3.67Z" transform="translate(0 -2)"/><path d="M24.33,9.21V10H22.49V2h1.84V5.41q0,.88-.06,1.77a10.93,10.93,0,0,1,.9-1.65L27,2.84V2h1.84v8H27V6.38a14.87,14.87,0,0,1,.06-1.49,9.88,9.88,0,0,1-.9,1.64Z" transform="translate(0 -2)"/><path d="M34.88,6.83H33.31L32,10H30l1.71-3.53A2.14,2.14,0,0,1,30.34,4.4,2.54,2.54,0,0,1,31,2.75,2.88,2.88,0,0,1,33.26,2h3.51v8H34.88Zm0-3.4h-1.1a3.47,3.47,0,0,0-.89.07.79.79,0,0,0-.43.33,1,1,0,0,0-.19.59,1,1,0,0,0,.21.63.92.92,0,0,0,.46.35,3.64,3.64,0,0,0,.8.07h1.14Z" transform="translate(0 -2)"/></g></svg></div>
        <div class="nav">
            <ul class="list_button">
                <li class="button_nav"><a href="/">Главная</a></li>
                <li class="button_nav"><a href="">Все товары</a></li>
                <li class="button_nav"><a href="#/cart">Корзина</a></li>
                <li class="button_nav"><a href="#/lk">Вход</a></li>
            </ul>
        </div>
        <div v-on:click="changeMenu(1)" class="menu">Меню</div>
       
    </div>
    </div>
    <div v-if="getStatusMenu == true" class="nav_mobile">
            <ul class="list_button">
                <li class="button_nav"><a href="/">Главная</a></li>
                <li class="button_nav"><a href="">Все товары</a></li>
                <li class="button_nav"><a href="#/cart">Корзина</a></li>
                <li class="button_nav"><a href="#/lk">Вход</a></li>
            </ul>
        </div>
</template>

<script>
    import {mapMutations,mapGetters} from 'vuex'
    export default{
        name: "header_sh",
        methods: mapMutations(['changeMenu']),
        computed: mapGetters(['getStatusMenu'])
    }
</script>