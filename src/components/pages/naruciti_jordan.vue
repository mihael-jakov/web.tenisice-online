<template>
    <navigation_menu/>
    <h1 class="text-[2rem] text-white uppercase font-bold py-32 pt-[5em] text-center bg-[#131313]">TENISICE</h1>
    <div class="flex w-full flex-col items-start justify-center max-[480px]:flex-col !overflow-x-hidden bg-[#131313]">
      <div class="flex w-full flex-row items-start justify-center max-[480px]:flex-col">
      <ul class="flex text-white justify-end items-center w-[100%] pr-[2rem]">
        <router-link to="/dostupnost_pick">NATRAG</router-link>
      </ul>
      </div>
      
      <div class="w-[full] flex pl-8 max-[480px]:w-[100%] max-[480px]:pl-0 overflow-hidden">
        <ul class="tenisice_visibility" style="display: flex; flex-wrap: wrap; ">
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
<script setup>
    import navigation_menu from "./navigation.vue"
    import footer_page from "../pages/footer.vue"
    import { naruciti_jordan } from '../../stores/naruciti_jordan'
    import { onMounted } from 'vue';
    import { useRouter } from "vue-router"

    const dostupno_jordan = naruciti_jordan();
  
    
    const router = useRouter()

    const gotoproductpage = (id) => {
      router.push({ name: 'productsdetail', params: { id }})
    }

    onMounted(() =>{
       dostupno_jordan.fetchProductsFromDB();
       if (localStorage.getItem('reloaded')) {
        localStorage.removeItem('reloaded');
    } else {
        localStorage.setItem('reloaded', '1');
        location.reload();
    }
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
  .pagination-container {
    display: flex;
    column-gap: 10px;
  }
  .paginate-buttons {
    height: 40px;
    width: 40px;
    border-radius: 20px;
    cursor: pointer;
    background-color: rgb(242, 242, 242);
    border: 1px solid rgb(217, 217, 217);
    color: black;
  }
  .paginate-buttons:hover {
    background-color: #d8d8d8;
  }
  .active-page {
    background-color: #3498db;
    border: 1px solid #3498db;
    color: white;
  }
  .active-page:hover {
    background-color: #2988c8;
  }
</style>