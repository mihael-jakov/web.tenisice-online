<template>
    <navigation_menu/>
    <img src="../../assets/tenisice-logo.png" alt="" loading="lazy" class="w-[150px] h-[150px] mt-4 ml-8 max-[680px]:m-0 max-[480px]:block max-[480px]:mx-auto max-[480px]:mb-8">
    <div class="flex w-full justify-between max-[480px]:flex-col ">
      <div class="w-[20%] flex justify-center pl-4 max-[480px]:w-[100%] max-[480px]:pb-8">
        <ul class="max-[480px]:text-center">
          <li class="mb-4">CATEGORIES</li>
          <li class="border-[0.5px] border-black w-[200%] opacity-[0.1] max-[1450px]:w-[120%] max-[680px]:w-[100%]"></li>
          <li class="my-8">Air Jordan</li>
          <li class="my-8 mt-4">Yeezy</li>
          <li class="mb-8">Off White</li>
          <li class="border-[0.5px] border-black w-[200%] opacity-[0.1] max-[1450px]:w-[120%] max-[680px]:w-[100%]"></li>
        </ul>
      </div>
      <div class="w-[80%] flex pl-8 max-[480px]:w-[100%] max-[480px]:pl-0 overflow-hidden">
        <div class="" style="display: flex; flex-wrap: wrap; ">
            <div 
                class="flex text-center justify-center items-center flex-col basis-[20%] max-[1600px]:basis-[25%] max-[1600px]:basis-[25%] max-[1380px]:basis-[33%] max-[1000px]:basis-[50%] max-[680px]:basis-[100%] max-[480px]:basis-[50%] max-[380px]:basis-[100%]"
                v-for="dostupnoodmah in dostupno.products"
                :key="dostupnoodmah.id"
            >
                <img :src="dostupnoodmah.image" alt="" loading="lazy" class="inline w-[250px] h-[250px] object-cover max-[1000px]:w-[90%] max-[1000px]:h-[400px] max-[480px]:h-[220px] max-[480px]:w-[180px] max-[380px]:h-[150px] max-[380px]:w-[130px] max-[380px]:w-[90%] max-[380px]:h-[350px]">
                <p class="text-[15px] font-semibold mt-4">{{ dostupnoodmah.name }}</p>
                <div class="flex gap-4 items-center text-[1.3rem] my-2">
                  <p clas="">{{ dostupnoodmah.price }}€</p>
                  <p class="text-red line-through text-[0.7rem] font-semibold ">{{ dostupnoodmah.price_before }}€</p>
                </div>
            </div>
            
        </div>
      </div>
    </div>
</template>

<script>
    import { defineComponent } from 'vue';

  export default defineComponent({
        name:'dostupnoodmah'
    })
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