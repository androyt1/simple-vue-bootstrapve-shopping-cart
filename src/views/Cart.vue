<template>
    <div>
        <b-container>
            <b-row>
                <b-col col="12" cols="10" offset-md="1" v-for="(item,index) in cart" :key="index">
                  <p>  {{item.name}}
                      <b-card-img :src="require(`@/assets/images/${item.image_url}`)" style="max-width:100px;height:auto;margin:0 150px;"></b-card-img>
                      {{item.price}}
                        <b-button @click="add(item)" class="ml-3"><strong>+</strong></b-button><span class="px-3">{{item.quantity}}</span><b-button @click="minus(item)" class="mr-3"><strong>-</strong></b-button>
                     <b-button @click="remove(item)" class="mx-3" pill variant="danger">Remove</b-button>
                        <strong>total: {{item.price * item.quantity}}</strong>
                  </p>
                </b-col>
                 
            </b-row>
            <b-row align-h="center">
               
  <b-button class="text-center" @click="shipping">
    Click to Continue
  </b-button>
            </b-row>
        </b-container>
        <div>
 

</div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                cart:this.$store.getters.cart,             
                total:0,
                quantity:1,
               
            }
        },
        computed:{
            isdisabled(){
                return !this.$store.getters.cart.length > 0
            }, 
                 
        },
      
        methods:{
            shipping(){
                this.$router.push({name:"Shipping"})
            },
            add(item){
                item.quantity=parseInt(item.quantity ) + 1
                item.total=(parseFloat(item.price)) * (parseFloat(item.quantity))
            },
              minus(item){
                  if(item.quantity <= 1){
                     
                  }
                  else{
                      
                item.quantity=parseInt(item.quantity) - 1
                item.total=(parseFloat(item.price)) * (parseFloat(item.quantity))
                  }
            },
            remove(item){
                if(this.$store.getters.cart.includes(item)){
                    this.$store.dispatch('remove_from_cart',item)
                     Toast.fire({
                    icon: 'success',
                    title: 'Item deleted from cart'
                })
                }
            },
           
            getTotal(item){
               return this.total=this.quantity * item.price
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>