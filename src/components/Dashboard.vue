<template>
  <div>
    <products></products>
  </div>
</template>

<script>
  import Products from "./Product/Products";
  import {mapGetters} from "vuex";

  export default {
    name: "Home",
    components: {
      Products,
    },
    computed: {
      // mappear `this.user` to `this.$store.getters.user`
      ...mapGetters({
        user: 'USER'
      })
    }
  }
</script>

<style scoped>

</style>