<template>
    <navigation_menu/>
    <img src="../assets/tenisice-logo.png" alt="" class="w-[150px] h-[150px] mt-4 ml-8">
    <div class="flex w-full justify-between">
      <div class="w-[20%] flex justify-center">
        <ul>
          <li class="mb-4">CATEGORIES</li>
          <li class="border-[0.5px] border-black w-[400%] opacity-[0.1]"></li>
          <li class="my-8">Air Jordan</li>
          <li class="my-8 mt-4">Yeezy</li>
          <li class="mb-8">Off White</li>
          <li class="border-[0.5px] border-black w-[400%] opacity-[0.1]"></li>
        </ul>
      </div>
      <div class="w-[80%] flex justify-center">
        <div class="parent">
          <div class="div1">
            <img src="../assets/tenisice/1.jpg" alt="">
          </div>
          <div class="div2">
            <img src="../assets/tenisice/2.jpg" alt="">
          </div>
          <div class="div3">
            <img src="../assets/tenisice/3.jpg" alt="">
          </div>
          <div class="div4">
            <img src="../assets/tenisice/4.jpg" alt="">
          </div>
          <div class="div5">
            <img src="../assets/tenisice/5.jpg" alt="">
          </div>
          <div class="div6">
            <img src="../assets/tenisice/6.jpg" alt="">
          </div>
          <div class="div7">
            <img src="../assets/tenisice/7.jpg" alt="">
          </div>
          <div class="div8">
            <img src="../assets/tenisice/8.jpg" alt="">
          </div>
          <div class="div9">
            <img src="../assets/tenisice/9.jpg" alt="">
          </div>
          <div class="div10">
            <img src="../assets/tenisice/10.jpg" alt="">
          </div>
          <div class="div11">
            <img src="../assets/tenisice/11.jpg" alt="">
          </div>
          <div class="div12">
            <img src="../assets/tenisice/12.jpg" alt="">
          </div>
          <div class="div13">
            <img src="../assets/tenisice/13.jpg" alt="">
          </div>
          <div class="div14">
            <img src="../assets/tenisice/14.jpg" alt="">
          </div>
          <div class="div15">
            <img src="../assets/tenisice/15.jpg" alt="">
          </div>
          <div class="div16">
            <img src="../assets/tenisice/16.jpg" alt="">
          </div>
          <div class="div17">
            <img src="../assets/tenisice/17.jpg" alt="">
          </div>
          <div class="div18">
            <img src="../assets/tenisice/18.jpg" alt="">
          </div>
          <div class="div19">
            <img src="../assets/tenisice/19.jpg" alt="">
          </div>
          <div class="div20">
            <img src="../assets/tenisice/20.jpg" alt="">
          </div>
          <div class="div21">
            <img src="../assets/tenisice/21.jpg" alt="">
          </div>
          <div class="div22">
            <img src="../assets/tenisice/22.jpg" alt="">
          </div>
          <div class="div23">
            <img src="../assets/tenisice/23.jpg" alt="">
          </div>
          <div class="div24">
            <img src="../assets/tenisice/24.jpg" alt="">
          </div>
          <div class="div25">
            <img src="../assets/tenisice/25.jpg" alt="">
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>
  import navigation_menu from "./navigation.vue"
</script>

<style scoped>
.parent {
display: grid;
grid-template-columns: repeat(5, 1fr);
grid-template-rows: repeat(5, 1fr);
grid-column-gap: 20px;
grid-row-gap: 25px;
}
.div1 > img,.div2 > img,.div3 > img,.div4 > img,.div5 > img,.div6 > img,.div7 > img,.div8 > img,.div9 > img,.div10 > img,.div11 > img,.div12 > img,.div13 > img,.div14 > img,.div15 > img,.div16 > img,.div17 > img,.div18 > img,.div19 > img,.div20 > img,.div21 > img,.div22 > img,.div23 > img,.div24 > img,.div25 > img{
  width:200px;
  height: 200px;
  object-fit: cover;
}
.div1 { grid-area: 1 / 1 / 2 / 2; }
.div2 { grid-area: 1 / 2 / 2 / 3; }
.div3 { grid-area: 1 / 3 / 2 / 4; }
.div4 { grid-area: 1 / 4 / 2 / 5; }
.div5 { grid-area: 1 / 5 / 2 / 6; }
.div6 { grid-area: 2 / 1 / 3 / 2; }
.div7 { grid-area: 2 / 2 / 3 / 3; }
.div8 { grid-area: 2 / 3 / 3 / 4; }
.div9 { grid-area: 2 / 4 / 3 / 5; }
.div10 { grid-area: 2 / 5 / 3 / 6; }
.div11 { grid-area: 3 / 1 / 4 / 2; }
.div12 { grid-area: 3 / 2 / 4 / 3; }
.div13 { grid-area: 3 / 3 / 4 / 4; }
.div14 { grid-area: 3 / 4 / 4 / 5; }
.div15 { grid-area: 3 / 5 / 4 / 6; }
.div16 { grid-area: 4 / 1 / 5 / 2; }
.div17 { grid-area: 4 / 2 / 5 / 3; }
.div18 { grid-area: 4 / 3 / 5 / 4; }
.div19 { grid-area: 4 / 4 / 5 / 5; }
.div20 { grid-area: 4 / 5 / 5 / 6; }
.div21 { grid-area: 5 / 1 / 6 / 2; }
.div22 { grid-area: 5 / 2 / 6 / 3; }
.div23 { grid-area: 5 / 3 / 6 / 4; }
.div24 { grid-area: 5 / 4 / 6 / 5; }
.div25 { grid-area: 5 / 5 / 6 / 6; }
</style>