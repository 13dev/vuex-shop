<template>
    <div v-if="user">
        <cart></cart>
    </div>
</template>

<script>
    import Cart from "./Cart";
    import { mapGetters } from "vuex";

    export default {
        name: "ViewCart",
        components: {
            Cart,
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