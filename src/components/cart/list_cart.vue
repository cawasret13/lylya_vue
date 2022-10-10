<template>
    <div class="cart-m">
    <div class="ls_cart" v-bind:class="LenCart <= 0?'ls_ma':''">
        <h1 style="text-align: center;margin-bottom: 1%;">Товары в корзине</h1>
        <div v-if="LenCart > 0" class="ls">
            <div  v-for="product in allCart" class="product">
                <img class="img" :src="product.img" alt="">
                <div class="info_cart">
                    <div class="config">
                        <div><h1 class="name_product">{{product.name}}</h1></div>
                    </div>
                    <div class="controll">
                        <div class="controll_count">
                            <button class="minus" v-on:click="minusCart(product.id)">-</button>
                            <h3 style="margin: 0;">{{getTodoById(product.id).count}}</h3>
                            <button class="plus" v-on:click="plusCart(product.id)">+</button>
                        </div>
                        <button class="del">Y</button>
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="emptyCard">
            <img style="margin-top: 5%;" src="https://cdn.icon-icons.com/icons2/156/PNG/128/shopping_cart_full_22024.png" alt="">
            <h4 style="color:#b5b5b5">Хм... корзина пустая</h4><br>
            <h3>Предлгаю вам посомтреть на <a style="color:black" href="/">товары</a></h3>
        </div>
    </div>
    <div  v-if="LenCart > 0"  class="fin_panel">
        <h1>Конфигурация</h1>
        <div class="panel">
            <h3 style="text-align:center;margin-top: 0;">Ваш заказ</h3>
            <ol>
                <li v-for="prod in allCart">{{prod.name}}<br>
                {{getTodoById(prod.id).count}}x{{getTodoById(prod.id).price}}₽ = {{getTodoById(prod.id).count *getTodoById(prod.id).price}}₽
                </li>
            </ol>
            <hr>
            <h2><b>Итог: {{getAllPrice}} ₽ <b v-if="getDel == true"> + 25₽ = {{getAllPrice +25}}₽</b></b></h2>
            <div class="select_del">
                <button v-on:click="setDelFalse" class="sel_but" v-bind:class="getDel == false?'activeDel':''">Самовывоз</button>
                <button v-on:click="setDelTrue" class="sel_but" v-bind:class="getDel == true?'activeDel':''">Доставка</button>
            </div>
            <button v-on:click="createOrder(allCart)" class="button_finish">Заказать</button>
        </div>
    </div>
    </div>
</template>
<script>
    import { mapActions, mapGetters, mapMutations } from 'vuex';
    export default{
        name: 'cart_block',
        computed:mapGetters(['allCart','getAllPrice', 'getTodoById', 'LenCart', 'getDel']),
        methods: {
            ...mapActions(['plusCart', 'minusCart', 'OneShow','createOrder']),
            ...mapMutations(['setDelTrue', 'setDelFalse'])
        },
        async mounted() {
            this.OneShow()
        },
    }
</script>
    <style scoped>
    .activeDel{
        border: 2px solid #fbc531;
    }
    .del{
        padding: 2%;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        border: 0;
        background-color: rgb(255, 98, 98);
        margin-left: 50px;
        cursor: pointer;
    }
    .emptyCard{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    @import url('../../assets/css/cart.css');
</style>