import Vue from 'vue'
import Vuex from 'vuex'
import Api from '../Api'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        Api,
        products: null,
        cart: [],
        toast: {
            text: "",
            show: false
        },
        user: {
            loggedIn: false,
            data: null
        },
        filteredProducts: null,

    },
    getters: {
        USER(state) {
            return state.user
        },
        CART_SIZE(state) {
            return state.cart.length;
        },
        CART_TOTAL(state) {
            let total = state.cart.reduce((total, product) => {
                return total + (product.price * product.quantity);
            }, 0);

            return (+total).toFixed(2);
        },
        TOAST(state) {
            return state.toast;
        }
    },
    // state logic
    mutations: {
        FILTER_PRODUCTS(state, search) {
            state.filteredProducts = state.products.filter((item) => {
                return search
                    .toLowerCase()
                    .split(' ')
                    .every(v => item.name.toLowerCase().includes(v))
            });
        },
        SET_LOGGED_IN(state, value) {
            state.user.loggedIn = value;
        },
        SET_USER(state, data) {
            state.user.data = data;
        },
        SET_PRODUCTS(state, productsPayload) {
            state.products = productsPayload;
        },
        ADD_TO_CART(state, id) {
            let product = state.products.find(p => p.id === id);
            let cartProduct = state.cart.find(p => p.id === id);

            if (cartProduct) {
                cartProduct.quantity++;
                product.quantity--;
                return;
            }

            state.cart.push({
                ...product,
                stock: product.quantity--,
                quantity: 1,
            });

        },
        REMOVE_FROM_CART(state, id) {
            let product = state.products.find(p => p.id === id);
            let cartProduct = state.cart.find(p => p.id === id);

            cartProduct.quantity--;
            product.quantity++;
        },
        DELETE_FROM_CART(state, id) {
            let product = state.products.find(p => p.id === id);
            let index = state.cart.findIndex(p => p.id === id);

            product.quantity = state.cart[index].stock;
            state.cart.splice(index, 1);
        },
        SHOW_TOAST(state, text) {
            state.toast.show = true;
            state.toast.text = text;
        },
        HIDE_TOAST(state) {
            state.toast.show = false;
            state.toast.text = "";
        }
    },
    //Business logic
    actions: {
        FETCH_USER({ commit }, user) {
            commit('SET_LOGGED_IN', user !== null);

            if(!user) {
                commit('SET_USER', null);
                return;
            }

            commit('SET_USER', {
                displayName: user.displayName,
                email: user.email
            });

        },
        SHOW_TOAST({commit}, text) {
            commit('SHOW_TOAST', text);
        },
        GET_PRODUCTS({ commit }) {
            Api.getProducts().then((products) => {
                commit('SET_PRODUCTS', products);
            });
        },
        ADD_TO_CART({ commit }, productId) {
            Api.products("add", productId).then((id) => {
                commit('ADD_TO_CART', id);
                commit('SHOW_TOAST', "Adicionado ao carrinho!");
            });
        },
        REMOVE_FROM_CART({ commit }, productId) {
            Api.products("remove", productId).then((id) => {
                commit('REMOVE_FROM_CART', id);
                commit('SHOW_TOAST', "Removido do carrinho!");
            });
        },
        DELETE_FROM_CART({ commit }, productId) {
            Api.products("delete", productId).then((id) => {
                commit('DELETE_FROM_CART', id);
                commit('SHOW_TOAST', "Eliminado do carrinho!");
            });
        }
    },
});