<template>
    <navigation_menu/>
    <h1 class="text-[2rem] text-white uppercase font-bold py-32 pt-[5em] text-center bg-[#131313]">TENISICE</h1>
    <div class="flex w-full flex-col items-start justify-center max-[480px]:flex-col !overflow-x-hidden bg-[#131313]">
      <div class="flex w-full flex-row items-start justify-center max-[480px]:flex-col">
        <ul class="flex text-white justify-start gap-[2em] w-[100%] pl-[2rem]">
        <li class="text-[1.5rem]">MODEL :</li>
        <button @click="yeezy_active" class="span_dot flex items-center gap-[10px]">YEEZY</button>
        <button @click="offwhite_active" class="span_dot flex items-center gap-[10px]">OFF WHITE</button>
        <button @click="ostalo_active" class="span_dot flex items-center gap-[10px]">OSTALO</button>
      </ul>
      <ul class="flex text-white justify-end items-center gap-[2em] w-[100%] pr-[2rem]">
        <li class="text-[1.5rem]">DOSTUPNOST :</li>
        <router-link to="/store"  class="border-b">ODMAH</router-link>
      </ul>
      </div>
      
      <div class="w-[full] flex pl-8 max-[480px]:w-[100%] max-[480px]:pl-0 overflow-hidden">
        <ul class="tenisice_visibility"  :class="{'air_jordan':air_jordan, 'yeezy':yeezy, 'offwhite':offwhite, 'ostalo':ostalo}" style="display: flex; flex-wrap: wrap; ">
            <li 
                class="flex-col basis-[20%] max-[1880px]:basis-[25%] max-[1440px]:basis-[33%] max-[1105px]:basis-[50%] max-[480px]:basis-[50%] KEY FOR-LOOP"
                v-for="naruciti_jordan in dostupno_jordan.products"
                :key="naruciti_jordan.id"
                @click="gotoproductpage(naruciti_jordan.id)"
            >
           
              <div class="flex text-start justify-start items-start flex-col py-8  max-[480px]:px-2 cursor-pointer">
                <div class="w-full max-[400px]:w-auto images">
                    <img :src="naruciti_jordan.image2" alt="" loading="lazy" class="image1 inline w-[350px] h-[400px] object-cover max-[1105px]:w-[90%] max-[1105px]:hidden">
                  <img :src="naruciti_jordan.image" alt="" loading="lazy" class="image2 inline w-[350px] h-[400px] object-cover max-[1105px]:w-[90%] max-[1105px]:h-[400px] max-[480px]:h-[220px] max-[480px]:w-[180px] max-[380px]:h-[250px] max-[380px]:w-[full]">
                </div>
                <p class="text-[1.2rem] my-2 leading-[1.5] font-semibold text-[white] mt-4 w-[80%] max-[480px]:w-full">{{ naruciti_jordan.name }}</p>
                <!--<div class="w-min text-white px-2 py-1 border border-white my-2">42</div>-->
                <div class="flex gap-4 items-center my-2 max-[380px]:mb-4 text-start ">
                  <p class="line-through text-[white] text-[13px]">{{ naruciti_jordan.price_before }}€</p>
                  <p class="text-[1.4rem] text-[white]">{{ naruciti_jordan.price }}€</p>
                </div>
              </div>
            </li>
            
          </ul>
      </div>
    </div>
    <footer_page/>
</template>

<script>
</script>
<script setup>
    import navigation_menu from "./navigation.vue"
    import footer_page from "../pages/footer.vue"
    import { naruciti_jordan } from '../../stores/naruciti_jordan'
    import { onMounted } from 'vue';
    const dostupno_jordan = naruciti_jordan();

    onMounted(() =>{
       dostupno_jordan.fetchProductsFromDB()
    })
</script>

<style scoped>

.images .image1 {
    position: absolute;
    object-fit: cover;
    opacity: 0;
    transition: opacity .2s;
  }
  .images:hover .image1{
    opacity: 1;
  }

</style>