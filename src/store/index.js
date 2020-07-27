import Vue from 'vue'
import Vuex from 'vuex'
import products from '@/components/products.json'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart:[],
    products:products
  },
  getters:{
      cart(state){
        return state.cart
      },
      products(state){
        return state.products
      }
  },
  mutations: {
    ADD_TO_CART(state,payload){
      state.cart.push(payload)
    },
    ADD_TO_PRODUCTS(state,payload){
      state.products.push(payload)
    },
    REMOVE_FROM_CART(state,index){
      state.cart.splice(index,1)
    }
  },
  actions: {
    add_to_cart({commit},payload){
      commit('ADD_TO_CART',payload)
    },
    add_to_products({commit},payload){
      commit('ADD_TO_PRODUCTS',payload)
    },
    remove_from_cart({commit},index){
      commit('REMOVE_FROM_CART',index)
    }   
  },
  modules: {
  }
})
