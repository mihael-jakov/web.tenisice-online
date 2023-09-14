<template>
    <navigation_menu/>
    <div class="flex w-full flex-col justify-center max-[480px]:flex-col !overflow-x-hidden">
      <div class="w-[100%] text-center flex justify-center pl-4 max-[480px]:w-[100%] max-[480px]:pb-8">
        <ul class="max-[480px]:text-center w-full mb-24" >
          <div class="flex justify-center items-center max-[329px]:flex-col">
            <ul class="m-4">
              <li class="mb-[3rem] max-[480px]:mr-0 mr-[4rem] cursor-pointer w-[150px] h-[150px] p-8" @click="air_jordan_active()" :class="{'active':air_jordan}" >
                <img src="../../assets/jordan.png" alt="">
              </li>
              <li class=" cursor-pointer w-[150px] h-[120px] p-8" @click="yeezy_active()" :class="{'active':yeezy}">
                <img src="../../assets/yeezy.jpg" alt="">
              </li>
            </ul>
            <ul class="m-4">
              <li class="mb-[3rem] ml-[4rem]  max-[480px]:ml-0 cursor-pointer w-[150px] h-[150px] p-8" @click="offwhite_active()" :class="{'active':offwhite}">
                <img src="../../assets/offwhite.png" alt="">
              </li>
              <li class=" ml-[4rem] cursor-pointer w-[150px] h-[120px] p-8 max-[480px]:ml-0" @click="ostalo_active()" :class="{'active':ostalo}">
                <img src="../../assets/ostalo.png" alt="">
              </li>
            </ul>
          </div>
          
        </ul>
      </div>
      <div class="w-[full] flex pl-8 max-[480px]:w-[100%] max-[480px]:pl-0 overflow-hidden">
        <ul class="tenisice_visibility "  :class="{'air_jordan':air_jordan, 'yeezy':yeezy, 'offwhite':offwhite, 'ostalo':ostalo}" style="display: flex; flex-wrap: wrap; ">
            <li 
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
                
            </li>
            
          </ul>
      </div>
    </div>
</template>


<script>
export default {
  data() {
    return {
      air_jordan: false,
      yeezy: false,
      offwhite: false,
      ostalo: false,
    };
  },
  methods: {
    air_jordan_active() {
      this.air_jordan = !this.air_jordan;
      if (this.yeezy = true) {
        this.yeezy = false
      }if(this.offwhite = true){
        this.offwhite = false
      }if(this.ostalo = true){
        this.ostalo = false
      }
    },
    yeezy_active() {
      this.yeezy = !this.yeezy;
      if (this.air_jordan = true) {
        this.air_jordan = false
      }if(this.offwhite = true){
        this.offwhite = false
      }if(this.ostalo = true){
        this.ostalo = false
      }
    },
    offwhite_active() {
      this.offwhite = !this.offwhite;
      if (this.air_jordan = true) {
        this.air_jordan = false
      }if(this.yeezy = true){
        this.yeezy = false
      }if(this.ostalo = true){
        this.ostalo = false
      }
    },
    ostalo_active() {
      this.ostalo = !this.ostalo;
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
    import { onMounted } from 'vue';
    import { dostupno_odmah } from '../../stores/dostupnoodmah'

    const dostupno = dostupno_odmah()

    onMounted(() =>{
        console.log("MOUNTED");
        dostupno.fetchProductsFromDB()
    })
</script>

<style scoped>
.tenisice_visibility > li{
  display:none;

}
.air_jordan > li:nth-of-type(21){
  display:block;
  flex-basis: 100%;
}
.yeezy > li:nth-of-type(1),.yeezy > li:nth-of-type(2),.yeezy > li:nth-of-type(3),.yeezy > li:nth-of-type(4),.yeezy > li:nth-of-type(5),.yeezy > li:nth-of-type(6),.yeezy > li:nth-of-type(7),.yeezy > li:nth-of-type(8),.yeezy > li:nth-of-type(9),.yeezy > li:nth-of-type(10),.yeezy > li:nth-of-type(11),.yeezy > li:nth-of-type(12){
  display:block;
}
.offwhite > li:nth-of-type(14), .offwhite > li:nth-of-type(15), .offwhite > li:nth-of-type(16), .offwhite > li:nth-of-type(17), .offwhite > li:nth-of-type(18), .offwhite > li:nth-of-type(19){
  display:block;
}
.ostalo > li:nth-of-type(13),.ostalo > li:nth-of-type(20){
  display:initial;
  flex-basis: 50%;
}
.active{
 border: 3px solid green;
}
</style>