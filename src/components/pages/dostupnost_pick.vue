<template>
<navigation_menu/>
    <div class="pt-[150px] pb-[50px] bg-[#131313] flex justify-center items-center  text-[white] min-[900px]:py-[15rem]">
        <div class="flex flex-row gap-[5em] cursor-pointer max-[900px]:flex-col  max-[440px]:px-8 max-[440px]:w-full  max-[440px]:gap-[3em]" v-if="odmah">
            <router-link to="/store" class="border h-[14rem] w-[25rem] max-[440px]:w-full max-[440px]:h-full">
                <p class="text-center py-8 px-8 text-[2rem] max-[300px]:text-left max-[300px]:text-[1.8rem]">DOSTUPNO ODMAH</p>
                <p class="text-[#666666] text-[14px] leading-[1.7em] px-8  max-[440px]:mb-4">
                    Tenisice ovdje su dostupne odmah. *Moguća je primopredaja u roku 24sata ako živite u okolici ZAGREBA*
                </p>
            </router-link>
            <div class="border h-[14rem] w-[25rem] max-[440px]:w-full max-[440px]:h-full" @click="naruciti_function()">
                <p class="text-center py-8 px-8 text-[2rem]">NARUČITI</p>
                <p class="text-[#666666] text-[14px] leading-[1.7em] px-8 max-[440px]:mb-4">
                    Tenisice ovdje nisu dostupne odmah. *Trebamo ih naručiti za Vas, čekanje tenisica je 20-25 dana*
                </p>
            </div>
        </div>
        
        <div class="flex flex-row gap-[5em]" v-if="naruciti">
            <div class="flex gap-[5em]">
                <router-link to="/dostupno_jordan" class="flex justify-center items-center border h-[9rem] w-[15rem] text-center py-8 px-8 text-[2rem]">NIKE JORDAN</router-link> 
                <div class="flex justify-center items-center border h-[9rem] w-[15rem] text-center py-8 px-8 text-[2rem]">YEZZY ADIDAS</div>
            </div>
            <div class="flex gap-[5em]">
                <div class="flex justify-center items-center border h-[9rem] w-[15rem] text-center py-8 px-8 text-[2rem]">OFF WHITE</div>
                <div class="flex justify-center items-center border h-[9rem] w-[15rem] text-center py-8 px-8 text-[2rem]">NIKE AIR MAX</div>
            </div>
        </div>
    </div>
    <footer_page/>
</template>

<script>
export default {
  data() {
    return {
        odmah:true,
        naruciti:false
    };
  },
  methods: {
    naruciti_function(){
        this.odmah = !this.odmah
        this.naruciti = !this.naruciti
    }
  }
  }
</script>



<style lang="scss" scoped>

</style>
<script setup>
import navigation_menu from "./navigation.vue"
import footer_page from "../pages/footer.vue"
</script>