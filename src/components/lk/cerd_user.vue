<template>
    <div class="info_user">
        <h1>id {{GetInfoUser[0].id}}</h1>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default{
        computed: mapGetters(['GetInfoUser'])
    }
</script>

<style scoped>
    @import url('../../assets/css/personal.css');
</style>