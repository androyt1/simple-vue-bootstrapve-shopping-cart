<template>
    <div>
            <b-navbar dark toggleable="lg" type="dark" variant="info">
    <b-navbar-brand to="/"><h2 style="color:#fff;">Androy Stores</h2></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item to="/">Store</b-nav-item>       
         <b-button style="background:white" class="ml-3">
        
            <b-badge to="/cart" variant="danger">{{cart}} <span class="sr-only">unread messages</span></b-badge>
        </b-button>
        <b-nav-item-dropdown text="Cart" right>
          <b-dropdown-item href="#" v-for="(item,index) in this.$store.getters.cart" :key="index">{{item.name}}</b-dropdown-item>
         
        </b-nav-item-dropdown>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
     

       
     
    </b-collapse>
  </b-navbar>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                items:[]
            }
        },
        computed:{
            cart(){
                return this.$store.getters.cart.length
            }
        },
       
    }
</script>

<style lang="scss" scoped>

</style>