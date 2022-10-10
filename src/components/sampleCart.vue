<template>
    <div id="cart">
                <div class="cart_info">
                    <h1 style="margin-top: 0; text-align: center;">Корзина</h1>
                    <div v-if="LenCart > 0" class="list_cart">
                        <div class="list_cart_product">
                            <div v-for="product in allCart" :key="product.id" class="cartProduct">
                                <div style="width: 20%;"><img :src="product.img" alt=""></div>
                                <div style="width: 40%;margin-left: 1%;">
                                    <h2 style="font-size: 12px;margin: 0;">{{product.name}}</h2>
                                    <h3 style="font-size: 10px;margin: 0;margin-top: 5px;">{{product.price}}₽</h3>
                                </div>
                                <div style="width: 40%;margin-left: 1%;display: flex;flex-direction: row;flex-wrap: nowrap;justify-content: space-evenly;align-items: center;">
                                    <button style="border: 0;padding: 2%;width: 30px;height: 30px;border-radius: 7px;font-size: 20px;display: flex;justify-content: center;" v-on:click="minusCart(product.id)">-</button>
                                    <h4>{{product.count}}</h4>
                                    <button style="border: 0;padding: 2%;width: 30px;height: 30px;border-radius: 7px;font-size: 20px;vertical-align:middle;" v-on:click="plusCart(product.id)">+</button>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div v-else class="emptyCart">
                            <img src="https://cdn.icon-icons.com/icons2/156/PNG/128/shopping_cart_full_22024.png" alt="">
                            <h5 style="margin: 0;color: rgb(192, 192, 191);margin-bottom: 2%;">Корзина пустая</h5>
                        </div>
                    <a style="text-decoration: none;" href="/#/cart"><div style="width: 100%;margin: auto;"><button class="in_cart"><h1 style="font-size: 16px;font-family: 'Montserrat', sans-serif;">Перейти в корзину</h1><h1 style="font-size: 20px;">{{getAllPrice}}₽</h1></button></div></a>
                </div>
            </div>
            
</template>
<script>
    import { mapActions, mapGetters } from 'vuex';
    export default{
        name: 'cart_block',
        computed:mapGetters(['allCart','getAllPrice', 'LenCart']),
        methods: mapActions(['plusCart', 'minusCart']),
    }


</script>
<style>
    .cart_mobile{
        display: none;
        position: fixed;
        position: sticky;
        top: 0;
        opacity: 85%;
        width: 96%;
        margin-bottom: 2%;
        height: 50px;
        background-color: #fbc531;
        padding: 1%;
        margin: 1%;
        border-radius: 7px;
        color: white;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    @media screen and (max-width: 900px) {
        .cart_info{
            display: none;
        }
        .cart_mobile{
            display: block;
        }
    }   
</style>