<template>
    <Header />
    <!-- <Search /> -->
        <div class="content_list">
            <SampleCategory />
            <ListProduct />
            <SampleCart />
        </div>
    <Footer />

</template>
<script>
import Header from '@/components/header.vue';
import Footer from '@/components/footer.vue';
import SampleCategory from '@/components/sampleCategory.vue';
import ListProduct from '@/components/listProduct.vue';
import SampleCart from '@/components/sampleCart.vue';
import Search from '@/components/search.vue';
    export default {
    name: "Products",
    props: {
        msg: String,
    },
    components: { Header, Footer, SampleCategory, ListProduct, SampleCart, Search },
    created(){
    }
}
</script>
<style>
    @import url('../assets/css/style_app.css');
    @import url('../assets/css/style_card.css');
    @import url('../assets/css/style_footer.css');
    @import url('../assets/css/style_header.css');
    @import url('../assets/css/style_list.css');
</style>


