<template>
    <div class="h-[100vh] w-full bg-[#131313]">
        <navigation/>
        <div class="flex justify-center w-[100%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[1]">
            <div class="flex w-[1440px] justify-between items-center max-[1470px]:w-full px-16">
            <div class="text-white max-[750px]:text-center max-[750px]:absolute max-[750px]:top-1/2 max-[750px]:left-1/2 max-[750px]:transform max-[750px]:-translate-x-1/2 max-[750px]:-translate-y-1/2">
                <p class="leading-[22px] text-[39px] text-white uppercase max-[750px]:leading-[40px]">Tenisice Online</p>
                <p class="leading-[-2px] text-[56px] text-white uppercase font-bold my-4">Luxury Shoes</p>
                <p class="text-hero">Sva markirana obuća i odjeća po nižim cijenama</p>
                <router-link to="/dostupnost_pick"><button class="border-2 mt-8 py-[7px] px-[35px] !bg-white text-[14px] text-[#242424] font-bold uppercase hover_herobutton !cursor-pointer">Store</button></router-link>
            </div>
                <img src="../../assets/home_heroimg.png" alt="" class="object-cover max-[1060px]:w-[40%] ml-8 max-[750px]:opacity-[0.1] max-[750px]:absolute max-[750px]:z-[-1] max-[750px]:top-1/2 max-[750px]:left-1/2 max-[750px]:transform max-[750px]:-translate-x-1/2 max-[750px]:-translate-y-1/2 max-[750px]:ml-0 max-[750px]:w-[80%]">
            </div>
        </div>
    </div>
    <div class="h-[40vh] w-full flex justify-center max-[970px]:h-[60vh]">
        <ul class="flex mt-8 w-[1440px] justify-between items-center max-[970px]:w-full h-[full] max-[970px]:flex-row max-[970px]:flex-wrap max-[970px]:justify-center  max-[970px]:gap-[2em]">
            <li class="w-[300px] h-auto flex justify-center items-center flex-col text-center" >
                <img src="../../assets/deliverytruck_home.svg" alt="" class="w-[80px] h-[80px]">
                <p class="my-[15px] text-[#181818] text-[16px] font-semibold uppercase leading-[1.25em]">Shipping</p>
                <p class="text-[#666666] text-[14px] leading-[1.7em] mx-2">Osiguravamo sigurnu dostavu, tenisice možete dobit u roku 24 sata!</p>
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
    <div class="text-start bg-[#131313] mt-8 w-full flex items-center flex-col max-[970px]:mt-32 max-[630px]:mt-[25em] max-[520px]:text-center">
            <p class="leading-[-2px] text-[2rem] text-white uppercase font-bold mt-16">DOSTUPNO ODMAH</p>
            <p class="text-[white] text-[20px] mb-8 text-center mb-20">(povoljno).</p>
            <div class="flex justify-center items-center w-[1440px] max-[1460px]:w-full max-[1460px]:px-4 max-[1250px]:gap-[1em] max-[520px]:flex max-[520px]:flex-col ">
                <ul class="flex flex-row mx-2 gap-[1em] max-[1040px]:block max-[1040px]:m-0">
                <li >
                    <img src="../../assets/nikeice_zelene/photo1.jpeg" alt="" class="w-[300px] h-[450px] object-cover rounded-lg  max-[520px]:w-[500px]">
                    <p class="text-[1.4rem] my-2 leading-[1.5] font-semibold text-[white] mt-4 w-[80%] max-[520px]:w-full" style="font-family: 'Roboto', sans-serif;">Nike Dunk Low 'Legion Pine'</p>
                    <!--<div class="w-min text-white px-2 py-1 border border-white my-2">42</div>-->
                    <div class="flex justify-start items-center gap-[1em] max-[520px]:justify-center mb-8">
                        <p class="line-through text-[white] text-[13px]">235,00€</p>
                        <p class="text-[1.4rem] text-[white]">130,00€</p>
                    </div>
                </li>
                <li>
                    <img src="../../assets/offwhite_bijelevezice/photo1.jpeg" class="w-[300px] h-[450px] object-cover rounded-lg max-[520px]:w-[500px]">
                    <p class="text-[1.4rem] my-2 leading-[1.5] font-semibold text-[white] mt-4 w-[80%] max-[520px]:w-full" style="font-family: 'Roboto', sans-serif;">Nike Off-White Dunk Low 'Lot 1'</p>
                    <!--<div class="w-min text-white px-2 py-1 border border-white my-2">42</div>-->
                    <div class="flex justify-start items-center gap-[1em] max-[520px]:justify-center mb-8">
                        <p class="line-through text-[white] text-[13px]">235,00€</p>
                        <p class="text-[1.4rem] text-[white]">170,00€</p>
                    </div>
                </li>
            </ul>
            <ul class="flex flex-row mx-2 gap-[1em] max-[1040px]:block max-[1040px]:m-0">
                <li>
                    <img src="../../assets/valentino/photo1.jpeg" alt="" class="w-[300px] h-[450px] object-cover rounded-lg max-[520px]:w-[500px]">
                    <p class="text-[1.4rem] my-2 leading-[1.5] font-semibold text-[white] mt-4 w-[80%] max-[520px]:w-full" style="font-family: 'Roboto', sans-serif;">Valentino Garavani (povoljno!)</p>
                    <!--<div class="w-min text-white px-2 py-1 border border-white my-2">42</div>-->
                    <div class="flex justify-start items-center gap-[1em] max-[520px]:justify-center mb-8">
                        <p class="line-through text-[white] text-[13px]">235,00€</p>
                        <p class="text-[1.4rem] text-[white]">130,00€</p>
                    </div>
                </li>
                <li>
                    <img src="../../assets/yeezy_crne/photo1.jpeg" alt="" class="w-[300px] h-[450px] object-cover rounded-lg max-[520px]:w-[500px]">
                    <p class="text-[1.4rem] my-2 leading-[1.5] font-semibold text-[white] mt-4 w-[80%] max-[520px]:w-full" style="font-family: 'Roboto', sans-serif;">Yeezy Boost Black Red</p>
                    <!--<div class="w-min text-white px-2 py-1 border border-white my-2">42</div>-->
                    <div class="flex justify-start items-center gap-[1em] max-[520px]:justify-center mb-8">
                        <p class="line-through text-[white] text-[13px]">235,00€</p>
                        <p class="text-[1.4rem] text-[white]">150,00€</p>
                    </div>
                </li>
            </ul>
            </div>
            <router-link to="/dostupnost_pick"><button class="border-2 mb-16 mt-6 py-[10px] px-[42px] !bg-white text-[16px] text-[#242424] font-bold uppercase hover_herobutton !cursor-pointer">Store</button></router-link>
        </div>


        <div class="my-[5em] w-full flex justify-center overflow-hidden flex-col">
            <p class="leading-[-2px] text-[2rem] text-black uppercase font-bold my-16 text-center">Collections</p>
        <section class="w-full flex justify-center flex-col items-center max-[720px]:px-6">
            <div class="flex flex-row w-[1440px] justify-between max-[1485px]:w-auto max-[880px]:gap-[1em] max-[880px]:mt-8 max-[520px]:flex-col max-[520px]:w-[90%] ">
            <router-link to="/dostupno_jordan" class="hover_card">
                <div class="border-2 max-[880px]:p-8 !cursor-pointer max-[630px]:w-[150px] max-[520px]:flex max-[520px]:w-full  max-[380px]:flex-col max-[380px]:items-center">
                    <img src="../../assets/jordan.png" alt="" class="w-[500px] !cursor-pointer h-[30rem] object-cover max-[1310px]:w-[300px] max-[1310px]:h-[300px] max-[880px]:w-[150px] max-[880px]:h-[150px] max-[630px]:w-[100px] max-[630px]:h-[100px] ">
                    <p class="text-[1.6rem] my-2 leading-[1.5] !cursor-pointer my-8 ml-8 max-[880px]:text-center max-[880px]:ml-0 max-[880px]:mb-0 flex flex-row items-center max-[880px]:justify-center gap-[0.5em] max-[520px]:mt-0 max-[520px]:ml-8  max-[380px]:mt-8  max-[380px]:ml-0" style="color: rgba(16,16,16);font-family: 'Roboto', sans-serif;">Nike Jordan <span class="text-[20px] hover_card_arrow" style="transition: 0.3s all ease-out;">&#8594;</span></p>
                </div>
            </router-link>
            <router-link to="/" class="hover_card">
                <div class="border-2 max-[880px]:p-8 !cursor-pointer max-[630px]:w-[150px] max-[520px]:flex max-[520px]:w-full max-[380px]:flex-col max-[380px]:items-center">
                    <img src="../../assets/nike_sb.png" alt="" class="w-[500px] !cursor-pointer h-[30rem] object-fit max-[1310px]:w-[300px] max-[1310px]:h-[300px] max-[880px]:w-[150px] max-[880px]:h-[150px] max-[630px]:w-[100px] max-[630px]:h-[100px]">
                    <p class="text-[1.6rem] my-2 leading-[1.5] !cursor-pointer my-8 ml-8 max-[880px]:ml-0 max-[880px]:mb-0 max-[880px]:text-center flex flex-row items-center max-[880px]:justify-center gap-[0.5em] max-[520px]:mt-0 max-[520px]:ml-8   max-[380px]:mt-8  max-[380px]:ml-0" style="color: rgba(16,16,16);font-family: 'Roboto', sans-serif;">Nike Dunk <span class="text-[20px] hover_card_arrow" style="transition: 0.3s all ease-out;">&#8594;</span></p>
                </div>
            </router-link>
            <router-link to="/" class="hover_card">
                <div class="border-2 max-[880px]:p-8 !cursor-pointer max-[630px]:w-[150px] max-[520px]:flex max-[520px]:w-full max-[380px]:flex-col max-[380px]:items-center">
                    <img src="../../assets/offwhite.png" alt="" class="w-[500px] !cursor-pointer h-[30rem] object-cover max-[1310px]:w-[300px] max-[1310px]:h-[300px] max-[880px]:w-[150px] max-[880px]:h-[150px] max-[630px]:w-[100px] max-[630px]:h-[100px]">
                    <p class="text-[1.6rem] my-8 ml-8 leading-[1.5] !cursor-pointer max-[880px]:text-center max-[880px]:ml-0 max-[880px]:mb-0 flex flex-row items-center max-[880px]:justify-center gap-[0.5em] max-[520px]:mt-0 max-[520px]:ml-8   max-[380px]:mt-8  max-[380px]:ml-0" style="color: rgba(16,16,16);font-family: 'Roboto', sans-serif;">Off-White <span class="text-[20px] hover_card_arrow" style="transition: 0.3s all ease-out;">&#8594;</span></p>
                </div>
            </router-link>
            </div>
            <div class="flex flex-row w-[1440px] justify-between max-[1485px]:w-auto max-[880px]:gap-[1em] max-[880px]:mt-8 max-[520px]:flex-col max-[520px]:w-[90%]">
            <router-link to="/dostupno_yeezy" class="hover_card">
                <div class="border-2 max-[880px]:p-8 !cursor-pointer max-[630px]:w-[150px] max-[520px]:flex max-[520px]:w-full max-[380px]:flex-col max-[380px]:items-center">
                    <img src="../../assets/nike_air_max.png" alt="" class="w-[500px] !cursor-pointer h-[30rem] object-cover max-[1310px]:w-[300px] max-[1310px]:h-[300px] max-[880px]:w-[150px] max-[880px]:h-[150px] max-[630px]:w-[100px] max-[630px]:h-[100px]">
                    <p class="text-[1.6rem] my-2 leading-[1.5] my-8 ml-8 !cursor-pointer max-[880px]:text-center max-[880px]:ml-0 max-[880px]:mb-0 flex flex-row items-center max-[880px]:justify-center gap-[0.5em] max-[630px]:text-[1rem] max-[630px]:mt-6 max-[520px]:mt-0 max-[520px]:ml-8 max-[520px]:text-[1.4rem]   max-[380px]:mt-8  max-[380px]:ml-0" style="color: rgba(16,16,16);font-family: 'Roboto', sans-serif;">Nike Air Max <span class="text-[20px] hover_card_arrow " style="transition: 0.3s all ease-out;">&#8594;</span></p>
                </div>
            </router-link>
            <router-link to="/" class="hover_card">
                <div class="border-2 max-[880px]:p-8 !cursor-pointer max-[630px]:w-[150px] max-[520px]:flex max-[520px]:w-full max-[380px]:flex-col max-[380px]:items-center">
                    <img src="../../assets/yeezy.jpg" alt="" class="w-[500px] !cursor-pointer h-[30rem] object-cover max-[1310px]:w-[300px] max-[1310px]:h-[300px] max-[880px]:w-[150px] max-[880px]:h-[150px] max-[630px]:w-[100px] max-[630px]:h-[100px]">
                    <p class="text-[1.6rem] my-2 leading-[1.5] my-8 ml-8 !cursor-pointer max-[880px]:text-center max-[880px]:ml-0 max-[880px]:mb-0 flex flex-row items-center max-[880px]:justify-center gap-[0.5em] max-[520px]:mt-0 max-[520px]:ml-8   max-[380px]:mt-8  max-[380px]:ml-0" style="color: rgba(16,16,16);font-family: 'Roboto', sans-serif;">Yeezy <span class="text-[20px] hover_card_arrow" style="transition: 0.3s all ease-out;">&#8594;</span></p>
                </div>
            </router-link>
            <router-link to="/store" class="hover_card">
                <div class="border-2 max-[880px]:p-8 !cursor-pointer max-[630px]:w-[150px] max-[520px]:flex max-[520px]:w-full max-[380px]:flex-col max-[380px]:items-center">
                    <img src="../../assets/ostalo.png" alt="" class="w-[500px] !cursor-pointer h-[30rem] object-cover max-[1310px]:w-[300px] max-[1310px]:h-[300px] max-[880px]:w-[150px] max-[880px]:h-[150px] max-[630px]:w-[100px] max-[630px]:h-[100px]">
                    <p class="text-[1.6rem] my-2 leading-[1.5] my-8 ml-8 !cursor-pointer max-[880px]:text-center max-[880px]:ml-0 max-[880px]:mb-0 max-[880px]:text-[1rem]  max-[880px]:mt-10 flex flex-row items-center max-[880px]:justify-center gap-[0.5em] max-[520px]:mt-0 max-[520px]:ml-8  max-[520px]:text-[1.4rem]  max-[380px]:mt-8  max-[380px]:ml-0" style="color: rgba(16,16,16);font-family: 'Roboto', sans-serif;">Dostupno Odmah <span class="text-[20px] hover_card_arrow" style="transition: 0.3s all ease-out;">&#8594;</span></p>
                </div>
            </router-link>
            </div>
            </section>
        </div>
        <footer_page/>
</template>

<script setup>
import navigation from "../pages/navigation.vue"
import footer_page from "../pages/footer.vue"
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
*{
  font-family:inherit;
  cursor:default;
}
.hover_herobutton{}

.hover_card:hover .hover_card_arrow{
    font-size: 25px;
    transition: 0.2s all ease-in;
}
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

