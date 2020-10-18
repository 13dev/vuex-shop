<template>
    <div class="container py-2">
        <h1 class="my-2">Carrinho com <span class="badge badge-secondary">{{ CART_SIZE }} produtos.</span></h1>
        <div v-if="!CART_SIZE" class="alert alert-secondary my-5" role="alert">
            Carrinho vazio, adicione alguns produtos!.
        </div>
        <table v-else class="table table-striped mb-5">
          <thead class="thead-dark">
            <tr>
                <th scope="col">#</th>
                <th scope="col">Imagem</th>
                <th scope="col">Produto</th>
                <th scope="col">Preço</th>
                <th scope="col">Quantidade</th>
                <th scope="col">Eliminar</th>
                <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(product, index) in cart" :key="product.id">
              <th scope="row">{{index + 1}}</th>
                <th class="text-center">
                    <img :src="product.cover" alt="cover" class="rounded-circle" height="50" width="50"></th>
              <td>{{product.name}}</td>
              <td>{{product.price}}€</td>
              <td>
                  <button 
                      @click="remover(product.id)"
                      :disabled="product.quantity === 1"
                      class="btn btn-outline-danger btn-small">
                      -
                  </button>
                  <span class="mx-2">{{ product.quantity }}</span>
                  <button 
                      @click="adicionar(product.id)"
                      :disabled="product.quantity === product.stock"
                      class="btn btn-outline-success btn-small">
                      +
                  </button>
              </td>
              <td><button 
                  @click="eliminar(product.id)"
                  class="btn btn-danger btn-small">
                  Eliminar
              </button></td>
              <td>{{ (product.quantity * product.price).toFixed(2) }} €</td>
            </tr>
            
            <tr class="table-footer"> 
                <td colspan="6" class="total">Total:</td>
                <td>{{ CART_TOTAL }} €</td>
            </tr>
          </tbody>
        </table>
    </div>    
</template>
 
<script>
import { mapState, mapGetters } from 'vuex'

export default {
    data() {
        return {}
    },
    computed: {
        ...mapState([
            'cart'
        ]),
        ...mapGetters([
            'CART_SIZE',
            'CART_TOTAL'
        ])
    },
    methods: {
        adicionar(id) {
            this.$store.dispatch(
                'ADD_TO_CART',
                id
            );
        },
        remover(id) {
            this.$store.dispatch(
                'REMOVE_FROM_CART',
                id
            );
        },
        eliminar(id) {
            this.$store.dispatch(
                'DELETE_FROM_CART',
                id
            );
        }
    }
}
</script> 

<style scoped>

    .table-footer {
        font-size: 1.2em;
        font-weight: bold;
    }
    
    .total{
        text-align: right;
    }
</style>