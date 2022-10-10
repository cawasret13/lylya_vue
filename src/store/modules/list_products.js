export default{
    state: {
        list: [],
        count: 0,
        now_page:1,
        selectCategory:[],
        sub:''
    },
    getters: {
        dataProduct(state){
            return state.list
        },
        getCount(state){
            return state.count
        },
        getNowPage(state){
            return state.now_page
        },
        getSelect: (state) => (id) => {
            return state.selectCategory.find(todo => todo === id)
        },
        getNameSub(state){
            return state.sub
        }
    },
    mutations: {
        UpdateProducts(state , list){
            state.list = list['results']
            state.count = Math.round(list['count'] /40);
        },
        nowPage(state, page){
            state.now_page = page
        },
        addCategorySelect(state, id){
            if(state.selectCategory.find(todo => todo === id) == null){
                state.selectCategory.push(id)
            }else{
                state.selectCategory.splice(state.selectCategory.indexOf(id), 1)
            }
        },
        SelectSub(state,sub){
            state.sub = sub
            localStorage.setItem('sub', sub)
        }
    },
    actions: {
        async loadProductBD(ctx, page){
            if(page == null) page = 1;
            let sub = ''
            if(localStorage.getItem('sub') != null){
                sub = localStorage.getItem('sub')
            }
            const res = await fetch(
                `http://192.168.1.68:8000/api/products_category?format=json&page=${page}&sub=${sub}` 
            );
            const list = await res.json();
            ctx.commit('UpdateProducts', list)
            ctx.commit('nowPage', page)
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
            localStorage.setItem('sub', '')
        }
    },
}