<template>
    <nav class="site-header sticky-top py-1">
        <div class="container d-flex flex-column flex-md-row justify-content-between" style="align-items: center;">
            <router-link tag="a" to="/" class="py-2">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="24" height="24" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512">
                    <path d="M349.13 136.86c-40.32 0-57.36 19.24-85.44 19.24c-28.79 0-50.75-19.1-85.69-19.1c-34.2 0-70.67 20.88-93.83 56.45c-32.52 50.16-27 144.63 25.67 225.11c18.84 28.81 44 61.12 77 61.47h.6c28.68 0 37.2-18.78 76.67-19h.6c38.88 0 46.68 18.89 75.24 18.89h.6c33-.35 59.51-36.15 78.35-64.85c13.56-20.64 18.6-31 29-54.35c-76.19-28.92-88.43-136.93-13.08-178.34c-23-28.8-55.32-45.48-85.79-45.48z" fill="#626262"/>
                    <path d="M340.25 32c-24 1.63-52 16.91-68.4 36.86c-14.88 18.08-27.12 44.9-22.32 70.91h1.92c25.56 0 51.72-15.39 67-35.11c14.72-18.77 25.88-45.37 21.8-72.66z" fill="#626262"/>
                    <rect x="0" y="0" width="512" height="512" fill="rgba(0, 0, 0, 0)" />
                </svg>
            </router-link>
            <a class="py-2 d-none d-md-inline-block" href="#">
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control-sm mr-sm-2 search" type="search" placeholder="Search" aria-label="Search"
                           v-model="search"
                           @input="isTyping = true"
                    >
                </form>
            </a>
            <router-link tag="a" to="/Dashboard" class="py-2 d-none d-md-inline-block">
                Products
            </router-link>
            <a class="py-2 d-none d-md-inline-block" href="#">Enterprise</a>
            <a class="py-2 d-none d-md-inline-block" href="#">Support</a>
            <a class="py-2 d-none d-md-inline-block" href="#">Pricing</a>
            <a class="py-2 d-none d-md-inline-block" href="#" v-if="!user.loggedIn">
                <button
                        class="btn btn-outline-primary register-btn"
                        @click="register"
                >
                    <i class="fa fa-user-plus" aria-hidden="true"></i>
                    Register
                </button>
            </a>
            <a class="py-2 d-none d-md-inline-block" href="#" v-if="!user.loggedIn">
                <button
                        class="btn btn-outline-success login-btn"
                        @click="login"
                >
                    <i class="fa fa-sign-in" aria-hidden="true"></i>
                    Login
                </button>
            </a>
            <a class="py-2 d-none d-md-inline-block position-relative" href="#" v-if="user.loggedIn">
                <button
                        class="btn btn-primary cart-btn btn-sm"
                        @click="viewCart"
                >
                    <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                    Carrinho <small class="cart-total">{{ cartSize ? cartTotal + '€' : '' }}</small>
                    <span class="badge badge-notify">{{ cartSize }}</span>
                </button>
            </a>
            <a class="py-2 d-none d-md-inline-block dropdown" href="#" v-if="user.loggedIn">
                    <a class="nav-link dropdown-toggle btn-sm" href="#" id="navbardrop" data-toggle="dropdown">
                        Olá, {{ user.data.displayName }}
                    </a>
                    <div class="dropdown-menu" style="right: 0; left: auto;">
                        <a class="dropdown-item" href="#">
                            <i class="fa fa-user" aria-hidden="true"></i>
                            Perfil
                        </a>
                        <a class="dropdown-item" href="#">
                            <i class="fa fa-wrench" aria-hidden="true"></i>
                            Configurações
                        </a>
                        <a class="dropdown-item" @click="logout">
                            <i class="fa fa-sign-out" aria-hidden="true"></i>
                            Logout
                        </a>
                    </div>
            </a>
        </div>
    </nav>

<!--    <nav class="navbar navbar-expand-sm navbar-dark fixed-top bg-dark ">-->
<!--        <router-link tag="a" to="/" class="navbar-brand">Apple Company</router-link>-->
<!--        <router-link tag="a" to="/" class="navbar-brand1">-->
<!--            <img src="../assets/logo.png" alt="Logo" style="width:30px;">-->
<!--        </router-link>-->
<!--        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">-->
<!--            <span class="navbar-toggler-icon"></span>-->
<!--        </button>-->

<!--        <ul class="navbar-nav ml-auto">-->
<!--            <li class="nav-item" v-if="user.loggedIn" style="position: relative;">-->
<!--                <button-->
<!--                    class="btn btn-primary cart-btn"-->
<!--                    @click="viewCart"-->
<!--                >-->
<!--                    <i class="fa fa-shopping-cart" aria-hidden="true"></i>-->
<!--                    Carrinho <small class="cart-total">{{ cartSize ? cartTotal + '€' : '' }}</small>-->
<!--                    <span class="badge badge-notify">{{ cartSize }}</span>-->
<!--                </button>-->
<!--            </li>-->

<!--            <li class="nav-item dropdown" v-if="user.loggedIn">-->
<!--                <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">-->
<!--                    Olá {{ user.data.displayName }}-->
<!--                </a>-->
<!--                <div class="dropdown-menu" style="right: 0; left: auto;">-->
<!--                    <a class="dropdown-item" href="#">-->
<!--                        <i class="fa fa-user" aria-hidden="true"></i>-->
<!--                        Perfil-->
<!--                    </a>-->
<!--                    <a class="dropdown-item" href="#">-->
<!--                        <i class="fa fa-wrench" aria-hidden="true"></i>-->
<!--                        Configurações-->
<!--                    </a>-->
<!--                    <a class="dropdown-item" @click="logout">-->
<!--                        <i class="fa fa-sign-out" aria-hidden="true"></i>-->
<!--                        Logout-->
<!--                    </a>-->
<!--                </div>-->
<!--            </li>-->

<!--            <li class="nav-item" v-if="!user.loggedIn">-->
<!--                <button-->
<!--                    class="btn btn-success login-btn"-->
<!--                    @click="login"-->
<!--                >-->
<!--                    <i class="fa fa-sign-in" aria-hidden="true"></i>-->
<!--                    Login-->
<!--                </button>-->
<!--            </li>-->
<!--            <li class="nav-item" v-if="!user.loggedIn">-->
<!--                <button-->
<!--                    class="btn btn-outline-primary register-btn"-->
<!--                    @click="register"-->
<!--                >-->
<!--                    <i class="fa fa-user-plus" aria-hidden="true"></i>-->
<!--                    Register-->
<!--                </button>-->
<!--            </li>-->
<!--        </ul>-->
<!--    </nav>-->
</template>

<script>
    import { mapGetters } from "vuex";
    import firebase from "firebase";
    import { debounce } from 'vue-debounce'

    export default {
       name: 'Home',
        data() {
            return {
                search: null,
                isTyping: false,
            };
        },
        watch: {
            search: debounce(function() {
                this.isTyping = false;
            }, '1s'),
            isTyping: function(value) {
                if (!value) {
                    this.$store.commit('FILTER_PRODUCTS', this.search);
                }
            }
        },
        computed: {
            // mappear `this.user` to `this.$store.getters.user`
            ...mapGetters({
                user: 'USER',
                cartSize: 'CART_SIZE',
                cartTotal: 'CART_TOTAL',
            })
        },
        methods: {
            searchHandler() {
                console.log('22');

            },
           logout() {
               firebase
                   .auth()
                   .signOut()
                   .then(() => {
                       this.$store.commit('SET_USER', null);
                       this.$store.commit('SET_LOGGED_IN', false);
                       this.$store.dispatch('SHOW_TOAST', 'Logout efetuado com sucesso!');
                       this.$router.push('Login');
                    });
           },
            viewCart() {
                this.$router.push('Cart');
            },
           login() {
                this.$router.push('Login');
           },
            register() {
                this.$router.push('Register');
            }
        }
    }
</script>
<style scoped>

    .site-header {
        background-color: rgba(0, 0, 0, .85);
        -webkit-backdrop-filter: saturate(180%) blur(20px);
        backdrop-filter: saturate(180%) blur(20px);
    }
    .site-header a {
        color: #999;
        transition: ease-in-out color .15s;
    }
    .site-header a:hover {
        color: #fff;
        text-decoration: none;
    }
    .navbar-nav > li {
        margin: 0 5px;
    }
    #navbardrop{
        border: 1px solid;
        border-radius: 40px;
        padding: 6px 15px;

    }
    .login-btn, .register-btn {
        border-radius: 40px;

    }

    .navbar {
        position: relative;
    }
    .navbar-brand1 {
        filter: brightness(0) invert(1);
        position: absolute;
        left: 50%;
        margin-left: -15px !important;  /* 50% of your logo width */
        display: block;
    }

    .badge-notify{
        position: absolute;
        top: 0;
        border-radius: 40px;
        width: 22px;
        height: 22px;
        background-color: #28a745;
        border: 3px solid #262626;
        line-height: 0.90;
    }

    .cart-total {
        font-family: sans-serif!important;
        font-weight: 700;
        font-size: 12px;
    }

    .cart-btn {
        border-radius: 40px 0 40px 40px ;
    }

    .search {
        border-radius: 40px;
        border: 1px solid #626262;
        background-color: transparent;
        color: #d8d8d8;
    }
</style>