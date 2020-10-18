<template>
  <div>
    <navbar></navbar>
    <toast
        :show="toast.show"
        :text="toast.text"
        @hide-toast="hideToast"
    >
    </toast>
    <main>
      <router-view></router-view>
    </main>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Products from "./components/Product/Products";
import Cart from "./components/Cart";
import Toast from "./components/Toast";
import Footer from "./components/Footer";

export default {
  data() {
    return {};
  },

  components: {
    Navbar,
    Products,
    Cart,
    Toast,
    'app-footer': Footer,
  },
  computed: {
    toast() {
      return this.$store.getters.TOAST;
    }
  },
  methods: {
    hideToast() {
      this.$store.commit('HIDE_TOAST');
    }
  }
};
</script>
<style>
* {
  font-family: 'Raleway', 'Open Sans', sans-serif;
}
</style>
