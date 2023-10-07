<template>
    <div class="w-full bottom-0 h-[30em] bg-[#131313] flex justify-center flex-col items-center max-[1430px]:h-[60em] max-[850px]:h-[80em] max-[350px]:h-[90em] !overflow-x-hidden border-t border-[#757575] border-opacity-[0.1] ">
        <div class="w-[1440px] flex justify-center gap-[10em] items-center max-[1510px]:w-full max-[1510px]:px-2 max-[850px]:flex-col max-[850px]:gap-8 max-[850px]:text-center ">
            <ul class="flex flex-row max-[1430px]:flex-col gap-[10em] max-[850px]:gap-8 ">
                <li class="flex flex-col justify-between h-[250px] max-[850px]:w-full max-[850px]:justify-center max-[850px]:items-center ">
                <img src="../../assets/tenisice-logo.png" alt="" class="w-[100px] h-[100px]">
                <p class="mt-[15px] mb-[35px]">Najbolje cijene, za najbolju kvalitetu</p>
                <div class="flex flex-row items-center gap-[0.5em] mb-4"><img src="../../assets/footer_phone.svg" alt="" class="w-[25px] h-[25px]"><span class="max-[360px]:flex max-[360px]:flex-col"> <a  href="tel:+385917292812">(+385) 91 729 2812</a><span class="max-[360px]:hidden mx-2">|</span><a href="tel:+385993600200">(+385) 99 360 0200</a> </span></div>
                <div class="flex flex-row items-center gap-[0.5em]"><img src="../../assets/footer_mail.svg" alt="" class="w-[25px] h-[25px]"><a href="mailto:luxuryshopcroatia@gmail.com">luxuryshopcroatia@gmail.com</a></div>
                </li>
                <li class="flex flex-col justify-between h-[250px] max-[850px]:w-full max-[850px]:justify-center max-[850px]:items-center">
                <p class="mb-[30px] !text-white text-[16px] font-bold uppercase leading-[24px] big-text">information</p>
                <p class="my-[16px] text-[14px]"><router-link to="/PrivacyPolicy">Privacy Policy</router-link></p>
                <p class="my-[16px] text-[14px]"><router-link to="/RefundPolicy">Refund Policy</router-link></p>
                <p class="my-[16px] text-[14px]"><router-link to="/TermsOfService">Terms Of Service</router-link></p>
                </li>
            </ul>
            <ul class="flex flex-row max-[1430px]:flex-col gap-[10em] max-[850px]:gap-8">
                <li class="flex flex-col justify-between h-[250px] max-[850px]:w-full max-[850px]:justify-center max-[850px]:items-center">
                <p class="mb-[30px] !text-white text-[16px] font-bold uppercase leading-[24px] big-text">contact</p>
                <p class="my-[16px] text-[14px]"><router-link to="about">About Us</router-link></p>
                <p class="my-[16px] text-[14px]"><router-link to="/contact">Contact Us</router-link></p>
                <p class="my-[16px] text-[14px]"><router-link to="/store">Tenisice</router-link></p>
                </li>
                <li class="flex flex-col justify-between h-[250px] max-[850px]:w-full max-[850px]:justify-between max-[850px]:items-center">
                <p class=" !text-white text-[16px] font-bold uppercase leading-[24px] big-text">pretplati se na newsletter</p>
                <p class="">Prvi vidi sve nove tenisice!</p>
                <form action="" class="flex items-center max-[360px]:flex-col">
                    <input type="text" class="pl-[15px] h-[50px] bg-[#282828] text-[#555555]" placeholder="Enter Your Mail">
                    <button class="px-[18px] h-[100%] border-2 max-[360px]:w-[100%] max-[360px]:flex max-[360px]:justify-center max-[360px]:items-center max-[360px]:h-[50%] max-[360px]:mt-4"><img src="../../assets/footer_button_send.svg" alt="" class="w-[25px] h-[25px]"></button>
                </form>
                    <div class="flex flex-row mt-[20px] gap-[2em]">
                        <a href="https://www.instagram.com/luxury.shop.balkan/" target="_blank" class="border-2 p-[10px]"><img src="../../assets/footer_instagram.svg" alt="" class="w-[30px] h-[30px]" ></a>
                        <a href="https://www.tiktok.com/@tenisice_online" target="_blank" class="border-2 p-[10px]"><img src="../../assets/footer_tiktok.svg" alt="" class="w-[30px] h-[30px]" ></a>
                    </div>
                </li>
            </ul>
            
            
        </div>
        <div class="border w-[80%] border-[#757575] mt-16 opacity-[0.1] "></div>
        <div class="pt-8 max-[850px]:px-8 text-center">© Copyright 2023 <span class="!text-white">Tenisice Online</span> - All Rights Reserved - Powered by <a href="https://agencycroatia.com/#/" target="_blank" class="!text-white">New Age</a>.</div>
    </div>
</template>

<script setup>

</script>

<style scoped>
*{
    color:#757575;
    font-family:inherit;
}
.big-text::after{
    content:"";
    width: 20px;
    height: 1px;
    background: #ffffff;
    display: inline-block;
    vertical-align: middle;
    margin-top: -3px;
    margin-left: 10px;
}
</style>