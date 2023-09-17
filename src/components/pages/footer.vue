<template>
    <div class="w-full h-[30em] bg-[#131313] flex justify-center flex-col items-center max-[1430px]:h-[60em] max-[720px]:h-[80em]">
        <div class="w-[1440px] flex justify-center gap-[10em] items-center max-[1510px]:w-full max-[1510px]:px-8 max-[720px]:flex-col max-[720px]:gap-8">
            <ul class="flex flex-row max-[1430px]:flex-col gap-[10em] max-[720px]:gap-8">
                <li class="flex flex-col justify-between h-[250px] max-[370px]:w-full max-[720px]:justify-center max-[720px]:items-center ">
                <img src="../../assets/tenisice-logo.png" alt="" class="w-[100px] h-[100px]">
                <p class="mt-[15px] mb-[35px]">Najbolje cijene, za najbolju kvalitetu</p>
                <div class="flex flex-row items-center gap-[0.5em] mb-4"><img src="../../assets/footer_phone.svg" alt="" class="w-[25px] h-[25px]"><span>(+385) 91 729 2812 | (+385) 91 729 2812</span></div>
                <div class="flex flex-row items-center gap-[0.5em]"><img src="../../assets/footer_mail.svg" alt="" class="w-[25px] h-[25px]"><span>jakov.sijarto2@gmail.com</span></div>
                </li>
                <li class="flex flex-col justify-between h-[250px] max-[370px]:w-full max-[720px]:justify-center max-[720px]:items-center">
                <p class="mb-[30px] !text-white text-[16px] font-bold uppercase leading-[24px] big-text">information</p>
                <p class="my-[16px] text-[14px]">Privacy Policy</p>
                <p class="my-[16px] text-[14px]">Refund Policy</p>
                <p class="my-[16px] text-[14px]">Terms Of Service</p>
                </li>
            </ul>
            <ul class="flex flex-row max-[1430px]:flex-col gap-[10em] max-[720px]:gap-8 max-[720px]:ml-[-3em] max-[370px]:ml-8">
                <li class="flex flex-col justify-between h-[250px] max-[370px]:w-full max-[720px]:justify-center max-[720px]:items-center">
                <p class="mb-[30px] !text-white text-[16px] font-bold uppercase leading-[24px] big-text">contact</p>
                <p class="my-[16px] text-[14px]">About Us</p>
                <p class="my-[16px] text-[14px]">Contact Us</p>
                <p class="my-[16px] text-[14px]">Our Store</p>
                </li>
                <li class="flex flex-col justify-between h-[250px] max-[370px]:w-full max-[720px]:justify-between max-[720px]:items-center">
                <p class=" !text-white text-[16px] font-bold uppercase leading-[24px] big-text">pretplati se na newsletter</p>
                <p class="">Prvi vidi sve nove tenisice!</p>
                <form action="" class="flex items-center">
                    <input type="text" class="pl-[15px] h-[50px] bg-[#282828] text-[#555555]" placeholder="Enter Your Mail">
                    <button class="px-[18px] h-[100%] border-2"><img src="../../assets/footer_button_send.svg" alt="" class="w-[25px] h-[25px]"></button>
                </form>
                    <ul class="flex flex-row mt-[20px] gap-[2em]">
                        <li class="border-2 p-[10px]"><img src="../../assets/footer_instagram.svg" alt="" class="w-[30px] h-[30px]" ></li>
                        <li class="border-2 p-[10px]"><img src="../../assets/footer_tiktok.svg" alt="" class="w-[30px] h-[30px]" ></li>
                        <li class="border-2 p-[10px]"><img src="../../assets/footer_facebook.svg" alt="" class="w-[30px] h-[30px]" ></li>
                    </ul>
                </li>
            </ul>
            
            
        </div>
        <div class="border w-[80%] border-[#757575] mt-16 opacity-[0.1] "></div>
        <div class="pt-8 max-[720px]:px-8 text-center">© Copyright 2023 <span class="!text-white">Tenisice Online</span> - All Rights Reserved - Powered by <a href="https://agencycroatia.com/#/" target="_blank" class="!text-white">New Age</a>.</div>
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