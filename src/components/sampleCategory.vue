<template>
    <div id="category">
        <h1 style="margin: 0;text-align: start;">Каталог</h1>
            <div class="bar_cotygory">
                <div class="category_button" v-on:click="SelectSub(''),loadProductBD(1)">Все товары </div>
                <div v-for="category in list_category" :key="category">
                    <div v-on:click="addCategorySelect(category.id_category)" class="category_button"><div>{{category.name_category}}</div><div style="font-size: 12px;" v-if="getSelect(category.id_category) == category.id_category">▼</div></div>
                    <div v-bind:class="getSelect(category.id_category) == category.id_category?'cat_open':'cat_close'">
                        <div v-for="sub in list_subcategory"><div v-if="sub._id == category.id_category" class="category_button podcat" v-on:click="SelectSub(sub.name),loadProductBD(1)">{{sub.name}}</div></div>
                    </div>
                </div>
            <!-- <div class="category_button podcat">Огурец</div> -->
        </div>

    </div>
</template>
<script>
import ListProduct from './listProduct.vue'
import {mapMutations, mapGetters,mapActions} from 'vuex'
    export default{
        name: 'Category_bar',
        data(){
            return {
                list_category: [],
                list_subcategory: [],
            }
        },
        created(){
            this.loadCategory(),
            this.loadSubCategory()
        },
        components:{
            ListProduct
        },
        computed: mapGetters(['getSelect']),
        methods:{
            ...mapMutations(['addCategorySelect','SelectSub']),
            ...mapActions(['loadProductBD']),
            async loadCategory(){
                this.list_category = await fetch(
                    `http://192.168.1.68:8000/api/category`
                ).then(response => response.json())
            },
            async loadSubCategory(){
                this.list_subcategory = await fetch(
                    `http://192.168.1.68:8000/api/subcategory`
                ).then(response => response.json())
            }
        }
}
</script>
<style>
.cat_close{
    display: none;
    opacity: 0%;
}
.cat_open{
    display: block;
}
</style>