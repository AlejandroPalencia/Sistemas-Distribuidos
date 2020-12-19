import {loadData} from '@/services/storage'

export const state=()=>({
    items: [],
    categories: ['Comida', 'Luz', 'Agua', 'Gas', 'Alquiler', 'Ocio', 'Ropa'],
    initialized: false
})

export const mutations={
    add(state, item){
        state.items.push(item)
    },
    remove(state,item){
        state.items.splice(state.items.index0f(item),1)
    },
    initialize(state){
        state.initialized=true
    }
}

export const actions = {
    async add({commit}, item){
        commit('add', item)
    },
    async remove({commit}, item){
        commit('remove', item)
    },
    async initialize({state, commit}){
        if(!state.initialized){
            commit('initialize')
            const data=await loadData()
            data.forEach(d=>commit('add', d))
            listenChanges((method, item)=> commit(method, item))
        }
    },
}
