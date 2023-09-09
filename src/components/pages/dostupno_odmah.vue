<template>
    <navigation_menu/>
    <img src="../../assets/tenisice-logo.png" alt="" loading="lazy" class="w-[150px] h-[150px] mt-4 ml-8">
    <div class="flex w-full justify-between">
      <div class="w-[20%] flex justify-center">
        <ul>
          <li class="mb-4">CATEGORIES</li>
          <li class="border-[0.5px] border-black w-[400%] opacity-[0.1]"></li>
          <li class="my-8">Air Jordan</li>
          <li class="my-8 mt-4">Yeezy</li>
          <li class="mb-8">Off White</li>
          <li class="border-[0.5px] border-black w-[400%] opacity-[0.1]"></li>
        </ul>
      </div>
      <div class="w-[80%] flex justify-center">
         
        <div class="dostupno_odmah" style="display: flex; flex-wrap: wrap; ">
            <div 
                class=""
                v-for="dostupnoodmah in dostupno_odmah.products"
                :key="dostupnoodmah.id"
                style="flex-basis: 33.33333%"
            >
                <img :src="dostupnoodmah.image" alt="" loading="lazy" class="inline">
                <h2>Price: {{ dostupnoodmah.price }}€</h2>
                <p>Name: {{ dostupnoodmah.name }}</p>
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
    import { onMounted } from 'vue';
    import { dostupno_odmah } from '../../stores/dostupnoodmah'
    import navigation_menu from "./navigation.vue"

    const dostupno = dostupno_odmah()

    onMounted(() =>{
        console.log("MOUNTED");

        dostupno.fetchProductsFromDB()
    })
</script>

<style scoped>
</style>