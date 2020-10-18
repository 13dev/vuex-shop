<template>
    <div>
    <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
        <div class="col-md-5 p-lg-5 mx-auto my-5">
            <h1 class="display-4 font-weight-normal">New Iphone 12</h1>
            <p class="lead font-weight-normal">And an even wittier subheading to boot. Jumpstart your marketing efforts with this example based on Apple's marketing pages.</p>
            <a class="btn btn-outline-secondary btnn" href="#">Coming soon</a>
        </div>
        <div class="product-device box-shadow d-none d-md-block"></div>
        <div class="product-device product-device-2 box-shadow d-none d-md-block"></div>
    </div>

    <div class="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
        <div class="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
            <div class="my-3 py-3">
                <h2 class="display-5">Firebase</h2>
                <p class="lead">Firebase is a mobile and web application development platform developed by Firebase, Inc. in 2011, then acquired by Google in 2014</p>
            </div>
            <div class="box-shadow mx-auto bg-light firebase" ></div>
        </div>
        <div class="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div class="my-3 p-3">
                <h2 class="display-5">Vue.js</h2>
                <p class="lead">Vue.js is an open-source model–view–viewmodel JavaScript framework for building user interfaces and single-page applications.</p>
            </div>
            <div class="bg-dark box-shadow mx-auto vuejs" ></div>
        </div>
    </div>
    </div>
</template>

<script>
    import Products from "./Product/Products";
    import Cart from "./Cart";

    export default {
        name: "Home",
        components: {
            Cart,
            Products,
        }
    }
</script>

<style scoped>
    .vuejs {
        width: 80%;
        height: 300px;
        border-radius: 21px 21px 0px 0px;
        background-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png");
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center center;
    }
    .firebase {
        width: 80%;
        height: 330px;
        border-radius: 21px 21px 0px 0px;
        background-image: url("https://firebase.google.com/images/brand-guidelines/logo-standard.png?hl=pt-br");
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center center;
    }
.btnn {
    border-radius: 40px;
}
.product-device {
    position: absolute;
    right: 10%;
    bottom: -30%;
    width: 400px;
    height: 640px;
    border-radius: 21px;
    -webkit-transform: rotate(30deg);
    background-image: url(../assets/iphone11-pro-max-back.svg), none;
    transform: rotate(30deg);
    background-repeat: no-repeat;
}



.border-top { border-top: 1px solid #e5e5e5; }
.border-bottom { border-bottom: 1px solid #e5e5e5; }

.box-shadow { box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05); }

.flex-equal > * {
    -ms-flex: 1;
    -webkit-box-flex: 1;
    flex: 1;
}
@media (min-width: 768px) {
    .flex-md-equal > * {
        -ms-flex: 1;
        -webkit-box-flex: 1;
        flex: 1;
    }
}

.overflow-hidden { overflow: hidden; }
</style>