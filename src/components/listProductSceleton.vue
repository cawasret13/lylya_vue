<template>
        <div class="list_products">
                <h1 style="text-align: center;font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;margin: 0;">Список товаров</h1>
                <div class="ls">
            
                            <div  v-for="products in 8" class="card">
                                <div class="icon">
                                <div style="padding: 2%;width: 96%;height: 96%;">
                                    <div class="load" style="width: 100%;height: 100%;border-top-right-radius:10px ;border-top-left-radius:10px ;"></div>
                                </div>
                                </div>
                                <div class="information">
                                    <div class="information_product">
                                        <div  style="width: 120px;height: 20px;" class="load"></div>
                                        <div  style="width: 50px;height: 20px;" class="load"></div>
                                    </div>
                                    <div class="button_add_cart">
                                        <div class="button_pad">
                                            <button class="but_add">В корзину</button>           
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                </div>
                <div class="amount_page">
                    <div class="load" style="width: 500px;height: 20px;"></div>
                </div>
            </div>
</template>
<style>
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
        width: 34%;
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
    }
    .butControll{
        width: 100%;
        height: 100%;
    }
</style>