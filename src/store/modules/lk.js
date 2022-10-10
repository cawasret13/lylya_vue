export default{
    state: {
      reg: true,
      status_reg: false, 
      auth: false,
      info_user: [{'id':'iu323jk3jh21k', 'name':'nello'}]
    },
    getters: {
        GetReg(state){
            return state.reg
        },
        GetStatusReg(state){
            return state.status_reg
        },
        GetInfoUser(state){
            return state.info_user
        },
        GetAuth(state){
          return state.auth
        }
    },
    mutations: {
      changeReg(state, data){
        state.reg = data
      },
      save_info_user(state, user){
          localStorage.setItem('id','g1g1gg')
      }
    },
    actions: {
       async createOrder(ctx, order){
        console.log()
        const arr_data = [{
            "products":order,
            '_id_user': JSON.parse(localStorage.getItem('id')),
            'delivery': JSON.parse(localStorage.getItem('delivery')),
          }]
          console.log(arr_data)
          const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(arr_data)
          };
          const response = await fetch("http://192.168.1.68:8000/api/order", requestOptions);
          console.log(response)
       }
    },
}