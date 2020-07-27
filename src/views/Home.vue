<template>
  <div class="home">
      <b-container>
        <b-row  class="mb-3">
            <b-col cols="12" md="4" v-for="(item,index) in items" :key="index">
                  <b-card
                  
                  :title="item.name"
                  :img-src= "require(`@/assets/images/${item.image_url}`)"
                  img-alt="Image"
                  img-top
                  tag="article"
                  :price="item.price"
                  style="max-width: 20rem;"
                  class="mb-2"
                >
                  <b-card-text>
                  <p>  <b>Price: </b>{{item.price}}</p>
                     <p>  <b>brand: </b>{{item.brand}}</p>                    
                  </b-card-text>

                  <b-button v-b-tooltip.hover title="Click to add this item to your Cart"  @click="add_to_cart(item)" pill href="#" variant="success" class="mr-3">Add to Cart</b-button>
                   <b-button v-b-tooltip.hover title="Get more details" @click="viewItem(item)" pill href="#" variant="primary" class="px-4">Details</b-button>
                </b-card>
            </b-col>
        </b-row>
      </b-container>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
   
  },
  data(){
    return{
      items:this.$store.getters.products,
      cart:this.$store.getters.cart
    }
  },
  methods:{
    viewItem(item){
      this.$router.push({name:"About",params:{id:item.id}})
    }, 
            add_to_cart(item){
              if(this.cart.includes(item)){
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
