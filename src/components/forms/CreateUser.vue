<template>
    <div v-if="GetStatusReg == false">
        <div v-if="GetReg == false"  class="createUser">
            <h1 style = "text-align: center;">Регистрация</h1>
            <form class="form">
                <input type="text" placeholder="Фамилия*" name="" class="input">
                <input type="text" placeholder="Имя*" name="" class="input">
                <input type="tel" placeholder="Телефон*" name="" class="input">
                <input type="email" placeholder="Почта*" name="" class="input">
                <input type="text" placeholder="Адрес (улица, номер дома)" name="" class="input">
                <input type="text" placeholder="Логин*" name="" class="input">
                <input type="password" placeholder="Пароль*" name="" class="input">
                <input type="password" placeholder="Пароль повторно*" name="" class="input">
                <div style="display: inline-flex;"><p>Обработка персональных данных  </p><input type="checkbox"></div>
                <button  class="button_form" type="submit">Зарегистрироваться</button>
                <h4 style="cursor: pointer;" v-on:click="changeReg(true)">Вход</h4>
            </form>
        
        </div>
        <div v-else class="loginUser">
            <h1 style = "text-align: center;">Вход</h1>
            <form class="form">
                <input type="text" placeholder="Логин*" name="" class="input">
                <input type="password" placeholder="Пароль*" name="" class="input">
                <button class="button_form" type="submit">Войти</button>
                <h4 style="cursor: pointer;" v-on:click="changeReg(false)">Регистрация</h4>
            </form>
            
        </div>
    </div>
    <div v-else class="lk">
        <h1>Ваше имя</h1>
    </div>
</template>

<script>
    import {mapGetters, mapMutations} from 'vuex'
    export default{
        computed: mapGetters(['GetReg','GetStatusReg']),
        methods:{
            ...mapMutations(['changeReg'])
        }
    }
</script>

<style scoped>
    @import url('../../assets/css/personal.css');
</style>