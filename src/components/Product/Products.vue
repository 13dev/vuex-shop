<template>   
    <div class="container mt-5 py-2">
        <h1 class="my-2">Produtos</h1>
       <div class="row">
           <div v-if="!products.length" class="text-center col">
               <h2>Nenhum produto encontrado! :/</h2>
           </div>
           <div v-for="product in products" :key="product.id" class="col-sm-6 col-md-4 p-2 d-flex align-items-stretch">
               <product :product="product"></product>
           </div>
       </div>
   </div>
</template>   

<script>
    import Product from "./Product";
    export default{
        components: {
            Product
        },
        computed: {
            products(){
                return this.$store.state.filteredProducts
                    ? this.$store.state.filteredProducts
                    : this.$store.state.products;
            }
        },
        created(){
            this.$store.dispatch('GET_PRODUCTS');
        }
    }
</script>