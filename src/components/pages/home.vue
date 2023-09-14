<template>
    <div class="h-[100vh] w-full bg-[#131313]">
        <navigation/>
        <div class="flex justify-center w-[100%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div class="flex w-[1440px] justify-between items-center max-[1470px]:w-full px-16">
            <div class="text-white max-[750px]:text-center max-[750px]:absolute max-[750px]:top-1/2 max-[750px]:left-1/2 max-[750px]:transform max-[750px]:-translate-x-1/2 max-[750px]:-translate-y-1/2">
                <p class="leading-[22px] text-[39px] text-white uppercase max-[750px]:leading-[40px]">Tenisice Online</p>
                <p class="leading-[-2px] text-[56px] text-white uppercase font-bold my-4">Luxury Shoes</p>
                <p class="text-hero">Sva markirana obuća i odjeća po nižim cijenama</p>
                <router-link to="/store"><button class="border-2 mt-8 py-[7px] px-[35px] !bg-white text-[14px] text-[#242424] font-bold uppercase hover_herobutton">Store</button></router-link>
            </div>
                <img src="../../assets/home_heroimg.png" alt="" class="object-cover max-[1060px]:w-[40%] ml-8 max-[750px]:opacity-[0.1] max-[750px]:absolute max-[750px]:top-1/2 max-[750px]:left-1/2 max-[750px]:transform max-[750px]:-translate-x-1/2 max-[750px]:-translate-y-1/2 max-[750px]:ml-0 max-[750px]:w-[80%]">
            </div>
        </div>
    </div>
    <div class="h-[50vh] w-full flex justify-center">
        <ul class="flex mt-8 w-[1440px] justify-between items-center max-[970px]:w-full h-[full] max-[970px]:flex-row max-[970px]:flex-wrap max-[970px]:justify-center  max-[970px]:gap-[2em]">
            <li class="w-[300px] h-auto flex justify-center items-center flex-col text-center" >
                <img src="../../assets/deliverytruck_home.svg" alt="" class="w-[80px] h-[80px]">
                <p class="my-[15px] text-[#181818] text-[16px] font-semibold uppercase leading-[1.25em]">Shipping</p>
                <p class="text-[#666666] text-[14px] leading-[1.7em] mx-2">Osiguravamo sigurnu dostavu, vrijeme čekanja je 20-25 dana!</p>
            </li>
            <li class="w-[300px] h-auto flex justify-center items-center flex-col text-center mx-8 max-[969px]:hidden max-[632px]:flex">
                <img src="../../assets/authenthic_home.svg" alt="">
                <p class="my-[15px] text-[#181818] text-[16px] font-semibold uppercase leading-[1.25em]">AUTHENTIC</p>
                <p class="text-[#666666] text-[14px] leading-[1.7em] mx-2">Naše cipele su autentične, kupcima pružajući povjerenje u kvalitetu. Pažljivo biramo proizvode od pouzdanih izvora. Kupujte s povjerenjem, znajući da su cipele koje prodajemo pravi proizvodi..</p>
            </li>
            <li class="w-[300px] h-auto flex justify-center items-center flex-col text-center">
                <img src="../../assets/bigsale_home.svg" alt="" class="w-[80px] h-[80px]">
                <p class="my-[15px] text-[#181818] text-[16px] font-semibold uppercase leading-[1.25em]">BIG SALE</p>
                <p class="text-[#666666] text-[14px] leading-[1.7em]">Za 2 para popust od 15€ i besplatna dostava. Za 3 para popust od 30€ i besplatna dostava</p>
            </li>
            <li class="w-[300px] h-auto flex justify-center items-center flex-col text-center mx-8 min-[970px]:hidden max-[632px]:hidden">
                <img src="../../assets/authenthic_home.svg" alt="">
                <p class="my-[15px] text-[#181818] text-[16px] font-semibold uppercase leading-[1.25em]">AUTHENTIC</p>
                <p class="text-[#666666] text-[14px] leading-[1.7em] mx-2">Naše cipele su autentične, kupcima pružajući povjerenje u kvalitetu. Pažljivo biramo proizvode od pouzdanih izvora. Kupujte s povjerenjem, znajući da su cipele koje prodajemo pravi proizvodi..</p>
            </li>
        </ul>
    </div>
    <div class="text-start mt-8 w-full flex items-center flex-col max-[970px]:mt-32 max-[630px]:mt-[25em]">
            <p class="text-[#181818] text-[26px] font-bold uppercase leading-[24px] my-8 text-center">DOSTUPNO ODMAH</p>
            <p class="text-[#888888] text-[14px] mb-8 text-center">(povoljno)</p>
            <ul class="min-[971px]:hidden flex items-center justify-between w-[1440px] max-[1460px]:w-full max-[1460px]:px-4 max-[1250px]:gap-[1em] max-[970px]:flex-col">
                <div class=" flex flex-row gap-[1em] max-[350px]:flex-col">
                    <li style="">
                    <img src="../../assets/nikeice_zelene/photo1.jpeg" alt="" class="w-[300px] h-[450px] object-cover rounded-lg">
                    <p class="text-[1.4rem] my-2 leading-[1.5]" style="color: rgba(16,16,16);font-family: 'Roboto', sans-serif;">Nike Air Jordan</p>
                    <div class="flex justify-start items-center gap-[1em]">
                        <p class="line-through text-[#888888] text-[13px]">235,00€</p>
                        <p class="text-[1.4rem]">170,00€</p>
                    </div>
                </li>
                <li style="">
                    <img src="../../assets/nikeice_zelene/photo1.jpeg" class="w-[300px] h-[450px] object-cover rounded-lg">
                    <p class="text-[1.4rem] my-2 leading-[1.5]" style="color: rgba(16,16,16);font-family: 'Roboto', sans-serif;">Nike Zelene</p>
                    <div class="flex justify-start items-center gap-[1em] max-[350px]:flex-col">
                        <p class="line-through text-[#888888] text-[13px]">235,00€</p>
                        <p class="text-[1.4rem]">170,00€</p>
                    </div>
                </li>
            </div>
                <div class="flex flex-row gap-[1em] max-[350px]:flex-col">
                    <li style="">
                    <img src="../../assets/nikeice_zelene/photo1.jpeg" alt="" class="w-[300px] h-[450px] object-cover rounded-lg">
                    <p class="text-[1.4rem] my-2 leading-[1.5]" style="color: rgba(16,16,16);font-family: 'Roboto', sans-serif;">Off White Plave Visoke</p>
                    <div class="flex justify-start items-center gap-[1em] max-[350px]:flex-col">
                        <p class="line-through text-[#888888] text-[13px]">235,00€</p>
                        <p class="text-[1.4rem]">170,00€</p>
                    </div>
                </li>
                <li style="">
                    <img src="../../assets/nikeice_zelene/photo1.jpeg" alt="" class="w-[300px] h-[450px] object-cover rounded-lg">
                    <p class="text-[1.4rem] my-2 leading-[1.5]" style="color: rgba(16,16,16);font-family: 'Roboto', sans-serif;">Valentino</p>
                    <div class="flex justify-start items-center gap-[1em] max-[350px]:flex-col">
                        <p class="line-through text-[#888888] text-[13px]">235,00€</p>
                        <p class="text-[1.4rem]">170,00€</p>
                    </div>
                </li>
            </div>
            </ul>


            <ul class="flex max-[970px]:hidden items-center justify-between w-[1440px] max-[1460px]:w-full max-[1460px]:px-4 max-[1250px]:gap-[1em] max-[970px]:flex-col ">
                    <li style="">
                    <img src="../../assets/nikeice_zelene/photo1.jpeg" alt="" class="w-[300px] h-[450px] object-cover rounded-lg">
                    <p class="text-[1.4rem] my-2 leading-[1.5]" style="color: rgba(16,16,16);font-family: 'Roboto', sans-serif;">Nike Air Jordan</p>
                    <div class="flex justify-start items-center gap-[1em]">
                        <p class="line-through text-[#888888] text-[13px]">235,00€</p>
                        <p class="text-[1.4rem]">170,00€</p>
                    </div>
                </li>
                <li style="">
                    <img src="../../assets/nikeice_zelene/photo1.jpeg" class="w-[300px] h-[450px] object-cover rounded-lg">
                    <p class="text-[1.4rem] my-2 leading-[1.5]" style="color: rgba(16,16,16);font-family: 'Roboto', sans-serif;">Nike Zelene</p>
                    <div class="flex justify-start items-center gap-[1em] max-[350px]:flex-col">
                        <p class="line-through text-[#888888] text-[13px]">235,00€</p>
                        <p class="text-[1.4rem]">170,00€</p>
                    </div>
                </li>
                    <li style="">
                    <img src="../../assets/nikeice_zelene/photo1.jpeg" alt="" class="w-[300px] h-[450px] object-cover rounded-lg">
                    <p class="text-[1.4rem] my-2 leading-[1.5]" style="color: rgba(16,16,16);font-family: 'Roboto', sans-serif;">Off White Plave Visoke</p>
                    <div class="flex justify-start items-center gap-[1em] max-[350px]:flex-col">
                        <p class="line-through text-[#888888] text-[13px]">235,00€</p>
                        <p class="text-[1.4rem]">170,00€</p>
                    </div>
                </li>
                <li style="">
                    <img src="../../assets/nikeice_zelene/photo1.jpeg" alt="" class="w-[300px] h-[450px] object-cover rounded-lg">
                    <p class="text-[1.4rem] my-2 leading-[1.5]" style="color: rgba(16,16,16);font-family: 'Roboto', sans-serif;">Valentino</p>
                    <div class="flex justify-start items-center gap-[1em] max-[350px]:flex-col">
                        <p class="line-through text-[#888888] text-[13px]">235,00€</p>
                        <p class="text-[1.4rem]">170,00€</p>
                    </div>
                </li>
            </ul>
        </div>
        <router-link to="/store" class="flex justify-center"><button class="border-2 mt-8 py-[10px] px-[45px] bg-black text-[14px] text-[white] font-medium tracking-[0.2rem] uppercase">Store</button></router-link>
</template>

<script setup>
import navigation from "../pages/navigation.vue"
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
*{
  font-family:inherit;
}
.hover_herobutton{}
.text-hero::before{
    content:"";
    width: 20px;
    height: 1px;
    background: #ffffff;
    display: inline-block;
    vertical-align: middle;
    margin-top: -3px;
    margin-right: 10px;
}
.hero_imgshadow{
    -webkit-box-shadow: -43px 37px 79px 5px rgba(0,0,0,0.58);
-moz-box-shadow: -43px 37px 79px 5px rgba(0,0,0,0.58);
box-shadow: -43px 37px 79px 5px rgba(0,0,0,0.58);
}
</style>