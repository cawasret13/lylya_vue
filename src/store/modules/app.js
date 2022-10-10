export default{
    state: {
        activeMenu:false
    },
    getters: {
       getStatusMenu(state){
        return state.activeMenu
       }
    },
    mutations: {
        changeMenu(state, st){
            state.activeMenu = !state.activeMenu
        }
    },  
    actions: {
  
    },
}