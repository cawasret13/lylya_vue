<template>
    <Header />
    <div v-if="GetAuth == false">
        <CreateUser />
    </div>
    <div v-else>
        <Cerd_user />
    </div>
</template>
<script>
import Header from '@/components/header.vue';
import CreateUser from './forms/CreateUser.vue';
import { mapGetters } from 'vuex';
import Cerd_user from './lk/cerd_user.vue';
    export default {
    name: "Personal",
    computed: mapGetters(['GetAuth']),
    props: {
        msg: String,
    },
    components: { Header, CreateUser, Cerd_user },
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

