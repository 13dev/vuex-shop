<template>
    <div class="alert" v-show="isActive">
        {{text}}
    </div>
</template>

<script>
    export default{
        props:["show", "text"],
        data() {
            return {
                isActive: this.show,
                activeTimeout: {}
            };
        },
        mounted() {
            this.setTimeout();
        },
        watch: {
            show(value) {
                this.isActive = value
            },
            isActive(value) {
                if(this.show !== value){
                    this.$emit("hide-toast", value);
                }

                this.setTimeout();
            }
        },
        methods: {
            setTimeout() {
                clearTimeout(this.activeTimeout);

                if(this.isActive) {
                    this.activeTimeout = setTimeout(() => {
                        this.isActive = false
                    }, 4000)
                }
            }
         }
    }
</script>


<style scoped>
    .alert {
        width: 20%;
        background-color: rgb(40, 167, 69);
        box-shadow: 0 0 10px #23600963;
        text-align: center;
        font-weight: bold;
        color:white;
        position: fixed;
        top: 10%;
        right: -8%;
        transform: translateX(-50%);
        z-index: 1111;
    }
</style>
