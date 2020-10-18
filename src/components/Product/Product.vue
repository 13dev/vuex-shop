<template>
    <div class="card" >
        <img class="card-img-top" style="object-fit: contain;" :class="!quantity ? 'deactivated' : ''" :src="product.cover" alt="cover" height="200">

       <div class="card-body d-flex flex-column">
           <h5 class="card-title">{{ product.name }}</h5>
           <div class="d-flex justify-content-between align-items-start">
               <p class="card-text">
                   Preço: <b>{{ product.price }}€</b>
               </p>

               <span
                   class="badge"
                   :class="quantity ? 'badge-primary' : 'badge-warning'"
               >
                   Em stock: {{ quantity }}
               </span>
           </div>
           <h6 class="card-subtitle mb-2 text-muted text-justify mt-auto">{{ product.description }}</h6>
           <button 
               class="btn mt-3 mt-auto btn-block ml-auto"
               style="width: auto;"
               :class=" quantity ? 'btn-success' :  'btn-danger' "
               @click="addToCart(product.id)"
               :disabled="!quantity || !user.loggedIn"
           >
               <i class="fa" :class="quantity ? 'fa-plus': 'fa-times'"></i>
               {{ user.loggedIn ? (quantity ? 'Adicionar' : 'Não disponível') : 'Faça Login' }}
           </button>


       </div> 
   </div>
</template>

<script>
    export default{
        props: ["product"],
        computed: {
            quantity() {
                return this.product.quantity;
            },
            user() {
                return this.$store.getters.USER;
            }
        },
        methods: {
            addToCart(id) {
                this.$store.dispatch('ADD_TO_CART', id);
            }
        }
    }
</script>

<style scoped>
    .card:hover, .card:active {
        box-shadow: 0 0 10px #bfbfbf;
    }

    .deactivated {
        -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
        filter: grayscale(100%);
        opacity: 0.8;
    }
</style>