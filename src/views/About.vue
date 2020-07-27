<template>
  <div class="about">
      <b-container>
        <b-row class="mt-0">         
          <b-col cols="12" sm="12" md="8" offset-md="2">
             <strong><span class="text-center">
               <h1>Detail Page</h1>
         </span> </strong>
              <b-card-img :src="require(`@/assets/images/${product.image_url}`)" style="max-width:370px;height:auto"></b-card-img>
                <p class="mb-0 pb-0"><strong>Price: {{product.price}}</strong></p>
              <p style="opacity:0.8"><strong>Brand: {{product.brand}}</strong></p>
              <p>{{product.description}}</p>
               <b-button to="/" pill variant="primary" class="px-3 mr-4">Continue Shopping</b-button>
              <b-button @click="add_to_cart(product)" pill variant="success" class=" px-5">Add to Cart</b-button>              
               <h3 class="mt-3">{{product.name}}</h3>
          </b-col>   
            
       
        </b-row>
      </b-container>
  </div>
</template>
<script>
import products from '@/components/products'
export default {
  props:['id'],
  data(){
    return{
      product:products[this.id],
      cart:this.$store.getters.cart
    }
  },
  methods:{
    add_to_cart(product){
              if(this.cart.includes(product)){
                   Toast.fire({
                icon: 'warning',
                title: 'Item already in cart'
              })
              }else{
                this.$store.dispatch('add_to_cart',item)
                 Toast.fire({
                icon: 'success',
                title: 'Item added to Cart'
              })}
         }
  }
}
</script>
