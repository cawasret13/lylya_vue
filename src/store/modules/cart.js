export default{
    state: {
        cart: [],
        price: 0,
        deliver: false
    },
    getters: {
       allCart(state){
        return state.cart.reverse()
       },
       getTodoById: (state) => (id) => {
        return state.cart.find(todo => todo.id === id)
      },
      getAllPrice(state){
        return state.price
      },
      LenCart(state){
        return state.cart.length
      },
      getDel(state){
            return state.deliver
      }
       
    },
    mutations: {
        ADDProduct(state, arr){
            state.cart.push(arr)
            const index = state.cart.findIndex(todo => todo.id === arr.id);
            state.price += state.cart[index].price;
            localStorage.setItem('carts', JSON.stringify(state.cart))
            localStorage.setItem('price_cart', state.price)

        },
        plusCount(state, id){
            const index = state.cart.findIndex(todo => todo.id === id);
            state.cart[index].count = state.cart[index].count + 1
            state.price += state.cart[index].price;
            localStorage.setItem('carts', JSON.stringify(state.cart))
            localStorage.setItem('price_cart', state.price)

        },
        minusCount(state, id){
            const index = state.cart.findIndex(todo => todo.id === id);
            state.cart[index].count = state.cart[index].count - 1;
            state.price -= state.cart[index].price;
            if(state.cart[index].count == 0) state.cart.splice(index, 1);
            localStorage.setItem('carts', JSON.stringify(state.cart))
            localStorage.setItem('price_cart', state.price)

        },
        SetList(state, list){
            const arr =[]
            list.forEach((item) => {
                arr.push(item);
            });
            state.cart = arr
        },
        setPrice(state, price){
            state.price = price
        }
        ,
        setDelTrue(state){
            state.deliver = true
            localStorage.setItem('delivery', JSON.stringify(state.deliver))
        },
        setDelFalse(state){
            state.deliver = false
            localStorage.setItem('delivery', JSON.stringify(state.deliver))
        },
        setDel(state, data){
            state.deliver = data
        }
    },
    actions: {
        async OneShow(ctx){
                ctx.commit('SetList', JSON.parse(localStorage.getItem('carts')))
                ctx.commit('setPrice', JSON.parse(localStorage.getItem('price_cart')))
                ctx.commit('setDel', JSON.parse(localStorage.getItem('delivery')))
        },
        AddCart(ctx, id) {
            const arr = {
                'id': id.idProduct,
                'name': id.name,
                'price' : id.price,
                'img' : id.image,
                'count': 1
            }
            ctx.commit('ADDProduct', arr)
        },
        plusCart(ctx, id) {
            ctx.commit('plusCount', id)
        }, 
        minusCart(ctx, id) {
            ctx.commit('minusCount', id)
        }, 
    },
}