<template>
    <Header />
    <List_cart />
    <Footer />
</template>
<script>
import List_cart from "./cart/list_cart.vue";
import Header from "./header.vue";
import Footer from "./footer.vue";
import { mapActions } from 'vuex'
export default{
    components:{
    List_cart,
    Header,
    Footer
    ,methods: mapActions(['OneShow']),
    async mounted() {
        OneShow()
    },
}
}
</script>