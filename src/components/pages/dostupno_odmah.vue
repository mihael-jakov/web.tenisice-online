<template>
    <navigation_menu/>
    <h1 class="text-[2rem] text-white uppercase font-bold py-32 pt-[5em] text-center bg-[#131313]">TENISICE</h1>
    <div class="flex w-full flex-col items-start justify-center max-[480px]:flex-col !overflow-x-hidden bg-[#131313]">
      <ul class="flex text-white justify-center gap-[5em] w-[100%]">
        <li class="flex items-center gap-[0.5em]" @click="modul_click_fun()">
          <span>Model</span><span>&#8595;</span> 
        </li>
        <li class="w-[150px] h-[200px] bg-white absolute ml-[0em] mt-[2em] rounded-[15px] text-black flex flex-col justify-between items-start pl-4 py-4 border-2 border-[black]" v-if="modul_click">
          <button @click="yeezy_active">YEEZY</button>
          <button @click="offwhite_active">OFF WHITE</button>
          <button @click="ostalo_active">OSTALO</button>
        </li>
        <!-- 
        <button class="" @click="air_jordan_active">AIR JORDAN</button>
        <li class="flex items-center gap-[0.5em]">
          <span>Dostupnost</span><span>&#8595;</span> 
        </li>
        <li class="flex items-center gap-[0.5em]">
          <span>Sale</span><span>&#8595;</span> 
        </li>
        -->
      </ul>
      <div class="w-[full] flex pl-8 max-[480px]:w-[100%] max-[480px]:pl-0 overflow-hidden">
        <ul class="tenisice_visibility"  :class="{'air_jordan':air_jordan, 'yeezy':yeezy, 'offwhite':offwhite, 'ostalo':ostalo}" style="display: flex; flex-wrap: wrap; ">
            <li 
                class="flex-col basis-[20%] max-[1880px]:basis-[25%] max-[1440px]:basis-[33%] max-[1105px]:basis-[50%] max-[480px]:basis-[50%] "
                v-for="dostupnoodmah in dostupno.products"
                :key="dostupnoodmah.id"
                @click="gotoproductpage(dostupnoodmah.id)"
            >
           
              <div class="flex text-start justify-start items-start flex-col py-8  max-[480px]:px-2 cursor-pointer">
                <div class="w-full max-[400px]:w-auto images">
                  <img :src="dostupnoodmah.image2" alt="" loading="lazy" class="image1 inline w-[350px] h-[400px] object-cover max-[1105px]:w-[90%] max-[1105px]:hidden">
                  <img :src="dostupnoodmah.image" alt="" loading="lazy" class="image2 inline w-[350px] h-[400px] object-cover max-[1105px]:w-[90%] max-[1105px]:h-[400px] max-[480px]:h-[220px] max-[480px]:w-[180px] max-[380px]:h-[250px] max-[380px]:w-[full]">
                </div>
                <p class="text-[1.2rem] my-2 leading-[1.5] font-semibold text-[white] mt-4 w-[80%] max-[480px]:w-full">{{ dostupnoodmah.name }}</p>
                <!--<div class="w-min text-white px-2 py-1 border border-white my-2">42</div>-->
                <div class="flex gap-4 items-center my-2 max-[380px]:mb-4 text-start ">
                  <p class="line-through text-[white] text-[13px]">{{ dostupnoodmah.price_before }}€</p>
                  <p class="text-[1.4rem] text-[white]">{{ dostupnoodmah.price }}€</p>
                </div>
              </div>
            </li>
            
          </ul>
      </div>
    </div>
    <footer_page/>
</template>


<script>
export default {
  data() {
    return {
      air_jordan: true,
      yeezy: true,
      offwhite: true,
      ostalo: true,

      modul_click:false,
    };
  },
  methods: {
    modul_click_fun(){
      this.modul_click = !this.modul_click
    },
    air_jordan_active() {
      if (this.air_jordan = true) {
        this.air_jordan = true
      }else{
        this.air_jordan = !this.air_jordan;
      } 
      if (this.yeezy = true) {
        this.yeezy = false
      }if(this.offwhite = true){
        this.offwhite = false
      }if(this.ostalo = true){
        this.ostalo = false
      }
    },
    yeezy_active() {
      if (this.yeezy = true) {
        this.yeezy = true
      }else{
        this.yeezy = !this.yeezy;
      } 
      
      if (this.air_jordan = true) {
        this.air_jordan = false
      }if(this.offwhite = true){
        this.offwhite = false
      }if(this.ostalo = true){
        this.ostalo = false
      }
    },
    offwhite_active() {
      if (this.offwhite = true) {
        this.offwhite = true
      }else{
        this.offwhite = !this.offwhite;
      } 
      if (this.air_jordan = true) {
        this.air_jordan = false
      }if(this.yeezy = true){
        this.yeezy = false
      }if(this.ostalo = true){
        this.ostalo = false
      }
    },
    ostalo_active() {
      if (this.ostalo = true) {
        this.ostalo = true
      }else{
        this.ostalo = !this.ostalo;
      } 
      if (this.air_jordan = true) {
        this.air_jordan = false
      }if(this.yeezy = true){
        this.yeezy = false
      }if( this.offwhite = true){
         this.offwhite = false
      }
    },
  },
};
</script>
<script setup>
    import navigation_menu from "./navigation.vue"
    import footer_page from "../pages/footer.vue"
    import { onMounted } from 'vue';
    import { dostupno_odmah } from '../../stores/dostupnoodmah'
    import { useRouter } from "vue-router"

    const dostupno = dostupno_odmah()

    const router = useRouter()

    const gotoproductpage = (id) => {
      router.push({ name: 'productsdetail', params: { id }})
    }

    onMounted(() =>{
       dostupno.fetchProductsFromDB()
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
.tenisice_visibility > li{
  display:none;

}
.yeezy > li:nth-of-type(1),.yeezy > li:nth-of-type(2),.yeezy > li:nth-of-type(3),.yeezy > li:nth-of-type(4),.yeezy > li:nth-of-type(5),.yeezy > li:nth-of-type(6),.yeezy > li:nth-of-type(7),.yeezy > li:nth-of-type(8),.yeezy > li:nth-of-type(9),.yeezy > li:nth-of-type(10),.yeezy > li:nth-of-type(11),.yeezy > li:nth-of-type(12),.yeezy > li:nth-of-type(22){
  display:block;
}
.offwhite > li:nth-of-type(14), .offwhite > li:nth-of-type(15), .offwhite > li:nth-of-type(16), .offwhite > li:nth-of-type(17), .offwhite > li:nth-of-type(18), .offwhite > li:nth-of-type(19), .offwhite > li:nth-of-type(25){
  display:block;
}
.ostalo > li:nth-of-type(13),.ostalo > li:nth-of-type(20),.ostalo > li:nth-of-type(21),.ostalo > li:nth-of-type(23),.ostalo > li:nth-of-type(24),.ostalo > li:nth-of-type(26){
  display:block;
}
.active{
 border: 3px solid green;
}
</style>