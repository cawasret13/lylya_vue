<template>
            <div class="cart_mobile">
                <a style="text-decoration: none;color: white;" href="/#/cart">
                <div style="opacity: 100%;">
                    <h1 style="margin: 0;text-align: center;font-size: 17px;">Перейти в корзину</h1>
                    <h2 style="margin: 0;text-align: center;">{{getAllPrice}}₽</h2>
                </div>
                </a>
            </div>
            <div class="list_products">
                <h1 v-if="getNameSub == ''" style="text-align: start;font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;margin: 0;">Список товаров</h1>
                <h1 v-else style="text-align: start;font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;margin: 0;">{{getNameSub}}</h1>
                <div class="ls">
            
                            <div    v-for="products in dataProduct" :key="products.id" class="card" >
                                <div class="icon">
                                    <div style="padding: 2%;width: 96%;height: 96%;">
                                       <img class="image" :src="products.image" alt="icon">
                                       <span v-if="products.amounts <0" class="st_product_xz">упс...</span>
                                       <span v-else-if="products.amounts == 0" class="st_product_none">Нет в наличии</span>
                                       <span v-else="products.amounts > 0" class="st_product_empty">В наличии</span>
                                    </div>
                                </div>
                                <div class="information">
                                    <div class="information_product">
                                        <h2 class="name">{{ products.name }}</h2>

                                        <h3 class="price">{{ products.price }}₽</h3>
                                    </div>
                                    <div class="button_add_cart">
                                        <div class="button_pad">
                                            <button v-if="!getTodoById(products.idProduct)" v-on:click="AddCart(products)" class="but_add">В корзину</button>
                                            <div v-if="getTodoById(products.idProduct)" class="butControll">
                                                <div class="contr">
                                                    <button v-on:click="minusCart(products.idProduct)" class="minus">-</button>
                                                    <h3 class="amount">{{getTodoById(products.idProduct).count}}</h3>
                                                    <button v-on:click="plusCart(products.idProduct)" class="plus">+</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                </div>
                <div class="amount_page">
                    <button v-on:click="loadProductBD(n)" class="but_page" v-bind:class=" n == getNowPage? 'active':'deactive'" v-for="n in getCount">{{n}}</button>
                </div>
            </div>
</template>
<script>
    import { mapActions, mapGetters } from 'vuex';
    export default{
        name: 'list_product',
        computed: mapGetters(['dataProduct', 'getCount','getNowPage','getTodoById','getNameSub','getAllPrice']),
        methods: mapActions(['loadProductBD','AddCart','minusCart','plusCart', 'OneShow']),

        async mounted(n) {
            this.OneShow()
            this.loadProductBD(n)
        },
    };
</script>
<style>
* {
  -webkit-tap-highlight-color: transparent;
}
    @keyframes ch_bg{
        0%{
            background-color: rgb(185, 185, 185);
        }
        50%{
            background-color: rgb(182, 175, 175);
        }
        100%{
            background-color: rgb(197, 197, 197);
        }
    }
    .load{
        animation: ch_bg 1s infinite;
    }
    .deactive{
        background-color: #f0f0f0;
    }
    .active{
        background-color: #fbc531;
        color: white;
    }
    .contr{
        display: inline-flex;
        align-items: baseline;
        justify-content: space-evenly;
        background-color: #fbc531;

        width: 100%;
        height: 100%;
        border: 0;
        border-radius: 7px;
        font-size: 18px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        cursor: pointer;
        color: white;
        font-weight: 500;
    }
    .amount{
        width: 50%;
        height: 100%;
        margin: 0;
        text-align: center;
    }
    .plus{
        font-size: 20px;
        height: 100%;
        width: 33%;
        border-bottom-right-radius: 7px;
        border-top-right-radius: 7px;
        border: 0;
        cursor: pointer;
    }
    .minus{
        font-size: 20px;
        height: 100%;
        width: 33%;
        border-bottom-left-radius: 7px;
        border-top-left-radius: 7px;
        border: 0;
        cursor: pointer;
        user-select: none;
    }
    .butControll{
        width: 100%;
        height: 100%;
        user-select: none;
    }
    .st_product_none{
        background-color:#eb5e4f;
        color: #c0392b;
        font-size: 12px;
        width: 57%;
        padding: 3%;
        border-radius: 10px;
        top: -25px;
        position: relative;
    }
    .st_product_empty{
        background-color:#2ecc71;
        color: #1b7240;
        font-size: 12px;
        width: 57%;
        padding: 3%;
        border-radius: 10px;
        top: -25px;
        position: relative;
    }
    .st_product_xz{
        background-color:#b6b6b6;
        color: #4d4d4d;
        font-size: 12px;
        width: 57%;
        padding: 3%;
        border-radius: 10px;
        top: -25px;
        position: relative;
    }
    .cart_mobile{
        z-index: 1;
    }
    </style>