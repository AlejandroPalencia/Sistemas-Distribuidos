import {loadData, saveItem} from '@/services/storage'


export const state=()=>({
    items: [],
    categories: ['Comida', 'Luz', 'Agua', 'Gas', 'Alquiler', 'Ocio', 'Ropa'],
    initialized: false,
    contador: 0
})

export const mutations={
    add(state, item){
        state.items.push(item)
        if(item.key>state.contador){
            state.contador=item.key
        }
    },
    remove(state,item){
        state.items.splice(state.items.index0f(item),1)
    },
    initialize(state){
        state.initialized=true
    }
}

export const actions = {
    async add({state, getters, dispatch, commit}, item){
        item.key=state.contador+1
        commit('add', item)
        saveItem(item)
    },
    async remove({state, getters, dispatch, commit}, item){
        commit('remove', item)
    },
    async initialize({state, getters, dispatch, commit}){
        if(!state.initialized){
            commit('initialize')
            const data=await loadData()
            data.forEach(d=>commit('add', d))
        }
    },
}
