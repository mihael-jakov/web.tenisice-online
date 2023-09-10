<template>
    <navigation_menu/>
    <img src="../../assets/tenisice-logo.png" alt="" loading="lazy" class="w-[150px] h-[150px] mt-4 ml-8 max-[680px]:m-0 max-[480px]:block max-[480px]:mx-auto max-[480px]:mb-8">
    <div class="flex w-full flex-col justify-center max-[480px]:flex-col ">
      <div class="w-[100%] text-center flex justify-center pl-4 max-[480px]:w-[100%] max-[480px]:pb-8">
        <ul class="max-[480px]:text-center w-full" >
          <li class="mb-4" >CATEGORIES</li>
          <li class="flex justify-center items-center">
            <li>
              <li class="m-8" @click="air_jordan()">Air Jordan</li>
              <li class="m-8">Yeezy</li>
            </li>
            <li>
              <li class="m-8">Off White</li>
              <li class="m-8">Ostalo</li>
            </li>
          </li>
          
        </ul>
      </div>
      <div class="w-[full] flex pl-8 max-[480px]:w-[100%] max-[480px]:pl-0 overflow-hidden">
        <div class="" style="display: flex; flex-wrap: wrap; ">
            <div 
                class="flex-col basis-[20%] max-[1880px]:basis-[25%] max-[1440px]:basis-[33%] max-[1105px]:basis-[50%] max-[480px]:basis-[50%]"
                v-for="dostupnoodmah in dostupno.products"
                :key="dostupnoodmah.id"
                
            >
            <div class="flex text-center justify-center items-center flex-col">
              <img :src="dostupnoodmah.image" alt="" loading="lazy" class="inline w-[350px] h-[400px] object-cover max-[1105px]:w-[90%] max-[1105px]:h-[400px] max-[480px]:h-[220px] max-[480px]:w-[180px] max-[380px]:h-[250px] max-[380px]:w-[130px]">
                <p class="text-[15px] font-semibold mt-4 text-[18px] max-[380px]:mb-2 max-[380px]:max-w-[80%] ">{{ dostupnoodmah.name }}</p>
                <div class="flex gap-4 items-center text-[1.3rem] my-2 max-[380px]:mb-4">
                  <p clas="">{{ dostupnoodmah.price }}€</p>
                  <p class="text-red line-through text-[0.7rem] font-semibold ">{{ dostupnoodmah.price_before }}€</p>
                </div>
            </div>
                
            </div>
            
        </div>
      </div>
    </div>
</template>

<script>
    import { defineComponent } from 'vue';

  export default defineComponent({
        name:'dostupnoodmah',

});


</script>

<script setup>
    import navigation_menu from "./navigation.vue"
    import { onMounted } from 'vue';
    import { dostupno_odmah } from '../../stores/dostupnoodmah'

    const dostupno = dostupno_odmah()

    onMounted(() =>{
        console.log("MOUNTED");

        dostupno.fetchProductsFromDB()
    })
</script>

<style scoped>
</style>