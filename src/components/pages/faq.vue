<template>
    <navigation_menu/>
    <p class="pt-[150px] bg-[#131313] text-center text-[3rem] text-white assistant_font">FAQ</p>
    <div class=" flex justify-center items-center w-full text-white bg-[#131313]">
        <div class=" flex w-[1300px] justify-center items-center px-8 max-[770px]:flex-col max-[770px]:w-full max-[770px]:justify-start">
         <div class=" py-[20px] px-[24px] bg-[#E2E2E2] h-[232px]  text-[#141414] max-[770px]:mt-8 max-[770px]:h-auto max-[770px]:w-full">
            <p class="text-[1.125rem] leading-[1.33] assistant_font  font-bold">IMATE LI DODATNIH PITANJA?</p>
            <p class="assistant_font py-[15px] text-[#5a5a5a]">Ovdje smo za Vas.</p>
            <div class="flex flex-row items-center gap-[0.5em] mb-4 assistant_font text-[0.7rem] max-[315px]:gap-0"><img src="../../assets/footer_phone.svg" alt="" class="w-[25px] h-[25px]"><span class="flex mx-4 flex-col"> <a  href="tel:+385917292812">(+385) 91 729 2812</a><a href="tel:+385993600200">(+385) 99 360 0200</a> </span></div>
            <div class="flex flex-row items-center gap-[0.5em] assistant_font text-[0.7rem] max-[315px]:gap-0  max-[315px]:text-[0.58rem]"><img src="../../assets/footer_mail.svg" alt="" class="w-[25px] h-[25px]"><a href="mailto:luxuryshopcroatia@gmail.com" class="mx-4">luxuryshopcroatia@gmail.com</a></div>

        </div>
        
    <vue-collapsible-panel-group class="my-[100px] w-full text-black  max-[770px]:mt-0 max-[450px]:text-[0.8rem] max-[305px]:text-[0.6rem] ">
    <vue-collapsible-panel class=""  :expanded="false">
        <template #title>
            KADA ŠALJETE MOJU NARUDŽBU?
        </template>
        <template #content>
            Naravno, činimo sve kako bismo vam narudžbu dostavili što je prije moguće. Ako naručite do 9:00, poslat ćemo ga istog dana. U suprotnom, otprema traje 24 sata. (PROIZVOD MORA BITI ODMAH DOSTUPAN)
        </template>
    </vue-collapsible-panel>
    <vue-collapsible-panel  :expanded="false">
        <template #title>
            KAKO MOGU PRONAĆI BROJ ZA PRAĆENJE POŠILJKE?
        </template>
        <template #content>
            Broj za praćenje dobit ćete automatski putem e-pošte. Ako ga ne možete pronaći ili imate problema s praćenjem narudžbe, kontaktirajte nas!
        </template>
    </vue-collapsible-panel>
    <vue-collapsible-panel  :expanded="false">
        <template #title>
            PRIMIO/LA SAM OŠTEĆENU ROBU, ŠTO DA NAPRAVIM?
        </template>
        <template #content>
            Ispričavamo se! To se definitivno ne bi trebalo dogoditi. Kontaktirajte našu korisničku podršku u roku od 3 radna dana, a mi ćemo riješiti problem.
        </template>
    </vue-collapsible-panel>
    <vue-collapsible-panel  :expanded="false">
        <template #title>
            KAKO MOGU NARUČITI PROIZVODE NA WEB STRANICI?
        </template>
        <template #content>
            Kada ste odabrali proizvode i njihovu veličinu, jednostavno stisnite gumb i pošaljite mail sa svojim informacija 
        </template>
    </vue-collapsible-panel>
    <vue-collapsible-panel  :expanded="false">
        <template #title>
            KAKO ODABRATI VELICINU?
        </template>
        <template #content>
            Ispod svakog proizvoda mozete pronaci tablicu sa veličinama gdje se nalaze točne dimenzije svakog proizvoda.
        </template>
    </vue-collapsible-panel>
</vue-collapsible-panel-group>
        </div>


       

    </div>
    <footer_page/>
</template>

<script setup>
import navigation_menu from "./navigation.vue"
import footer_page from "../pages/footer.vue"
</script>

<script>
import {
  VueCollapsiblePanelGroup,
  VueCollapsiblePanel,
} from '@dafcoe/vue-collapsible-panel'
import '@dafcoe/vue-collapsible-panel/dist/vue-collapsible-panel.css'


</script>


<style scoped>
.assistant_font{
    font-family: 'Assistant', sans-serif;
}

</style>