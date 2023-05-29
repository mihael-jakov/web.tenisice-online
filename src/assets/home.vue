<template>
  <div class="w-full">
    <div
      class="fixed left-0 top-0 h-full w-[275px] pt-[60px] px-[70px] pb-[10px] flex flex-col justify-between max-[1000px]:hidden"
      style="box-shadow: 1px 2px 8px 0 rgba(0, 0, 0, 0.06)"
    >
      <img src="../../public/logo.png" alt="" class="rounded-[50%]" />
      <div class="font-bold text-[17px] leading-5 uppercase underline_hover_parent">
        <p class="py-[5px] underline_hover cursor-pointer">Home</p>
        <p class="py-[5px] underline_hover cursor-pointer">Portfolio</p>
      </div>
      <div class="mb-[36px] flex flex-row">
        <a href="https://www.instagram.com/tenisice_online/"
          ><img src="../../public/ig_icon.svg" alt="" class="w-[24px] h-[24px]"
        /></a>
        <a href="https://www.facebook.com/marketplace/item/758450665833123"
          ><img
            src="../../public/facebook_icon.svg"
            alt=""
            class="w-[18px] h-[24px] ml-4"
        /></a>
      </div>
    </div>

    <!-- hamburger menu -->
    <ul
      class="fixed bg-white z-[999] flex justify-between items-center min-[1001px]:hidden w-full top-0 left-0 px-[4em] py-[1em] max-[500px]:px-[1em]" style="box-shadow: 1px 2px 8px 0 rgba(0, 0, 0, 0.06)"
    >
      <li class="flex-1" id="navbar_logo">Tenisice Online</li>
      <button
        type="button"
        id="navbar-toggle"
        aria-controls="navbar-menu"
        class="w-[30px] h-[30px] flex justify-between items-center"
        :class="{ active: isActive }"
        @click="showMobile"
      >
        <span
          aria-hidden="true"
          class="bg-[black] block absolute h-[3px] w-[30px] rounded transform transition duration-500 ease-in-out"
          :class="{
            'rotate-45': isActive,
            ' -translate-y-1.5': !isActive,
          }"
        ></span>
        <span
          aria-hidden="true"
          class="bg-[black] block absolute h-[3px] w-[30px] rounded transform transition duration-500 ease-in-out"
          :class="{ 'opacity-0': isActive }"
        ></span>
        <span
          aria-hidden="true"
          class="bg-[black] block absolute h-[3px] w-[30px] rounded transform transition duration-500 ease-in-out"
          :class="{
            '-rotate-45': isActive,
            ' translate-y-1.5': !isActive,
          }"
        ></span>
      </button>
    </ul>
    <ul
      @click="showMobile"
      id="hamburger-menu"
      class="fixed w-[80%] h-screen text-[#1E5D61] flex flex-col items-center gap-[3em] min-[1001px]:hidden bg-[white] pt-[20vh] z-[105] overflow-hidden right-[-50%]"
      style="box-shadow: 1px 2px 8px 0 rgba(0, 0, 0, 0.06)"
      :class="{ active: isActive }"
    >
      <li class="font-bold text-[17px] leading-5 uppercase text-black" id="navbar_naslovnica">Naslovnica</li>

      <li class="font-bold text-[17px] leading-5 uppercase text-black" id="navbar_naslovnica">Kontakt</li>
    </ul>
    <div class="pl-[300px] pt-[25px] max-[1001px]:pl-[4rem] max-[1001px]:pt-[5rem] max-[500px]:pl-[1rem] max-[500px]:w-[97%] max-[500px]:justify-center">
        <div class="flex gap-[2em] max-[500px]:flex-col ">
          <label>Search model: </label>
          <input type="text" v-model="search" placeholder="Search..." class="bg-white max-[500px]:max-w-[100%]" style="border-bottom:1px solid black;"/>
        </div>
    </div>
    <div class="parent pl-[275px] w-full place-items-center max-[1000px]:pl-0">
      <div class="w-[80%] m-8 cursor-pointer"   v-for="post in filteredList" @click="open_modal">
        <div class="text-center hover_effect">
          <img
            v-bind:src="post.img"
            class="w-[100%] shoes_image"
            alt=""
          />
          <p class="mt-[4px] uppercase font-size-[17px] font-bold leading-tight">
            {{ post.title }}
          </p>
          <p>
            <a v-bind:href="post.link" id="style-2" class="a1" data-replace="view more"
              ><span class="text-[#464646] tag_price">{{ post.price }}</span></a
            >
          </p>
        </div>
      </div>
    </div>
    <div v-if="modal" class="fixed w-[100%] h-[100%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-[0.3]">
      <div class="fixed w-[70%] h-[70%] bg-[white] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div class="float-right mt-8 mr-12 cursor-pointer" @click="open_modal">X</div>
        <div class="flex items-center justify-between h-[80%] w-[1300px]">
          <img v-bind:src="modal_src" alt="" class="w-[50%]">
          <div class="w-[50%]">
            <h2 class="mb-[17px] uppercase text-[40px] leading-tight font-bold">{{ modal_name }}</h2>
            <p class="text-[23px] font-bold">{{ modal_price }}</p>
            <p class="font-light text-[#464646] mb-[37px] mt-[14px] text-[14px] tag_price">(1 customer review)</p>
            <p class="pb-[38px] tag_price text-[#464646] text-[16px] w-[530px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus lorem.</p>
            <p class="tag_price">velicina: 37-47</p>
            <p class="tag_price">Category: Shoes</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
class Post {
  constructor(title, link, price, img) {
    this.title = title;
    this.link = link;
    this.price = price;
    this.img = img;
  }
}
export default {
  data() {
    return {
      isActive: false,
      modal:false,
      modal_price:"",
      modal_name:"",
      modal_src:"",
      search: '',
      postList: [
        new Post(
          'Yeezy 350 boost',
          '#',
          '350$',
          '../../public/tenisice_primjer1.jpg'
        ),
        new Post(
          'Yeezy 40 boost',
          '#',
          '350$',
          '../../public/tenisice_primjer1.jpg'
        ),
        new Post(
          'Yeezy 250 boost',
          '#',
          '150$',
          '../../public/tenisice_primjer1.jpg'
        ),
      ]
    };
  },
  methods: {
    showMobile() {
      this.isActive = !this.isActive;
    },
    open_modal(e){
      this.modal = !this.modal;
      this.modal_src = e.target.querySelector('img').src;
      this.modal_name = e.target.querySelector('p').textContent;
      this.modal_price = e.target.querySelector('span').textContent;
    }
  },
  computed: {
    filteredList() {
      return this.postList.filter(post => {
        return post.title.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Titillium+Web:wght@400&display=swap");

.tag_price {
  font-family: "Titillium Web", sans-serif;
}

.parent {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}
@media only screen and (max-width: 1450px) {
  .parent {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media only screen and (max-width: 1250px) {
  .parent {
    grid-template-columns: repeat(1, 1fr);
  }
}
@media only screen and (max-width: 1000px) {
  .parent {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media only screen and (max-width: 720px) {
  .parent {
    grid-template-columns: repeat(1, 1fr);
  }
}

.a1 {
  overflow: hidden;
  position: relative;
  z-index: -1;
  display: inline-block;
  font-family: "Titillium Web", sans-serif;
}

.a1::before,
.a1::after {
  content: "";
  position: absolute;
  width: 100%;
  left: 0;
}

.a1::after {
  content: attr(data-replace);
  height: 100%;
  width: 100%;
  top: 0;
  transform-origin: 100% 50%;
  transform: translate3d(200%, 0, 0);
  transition: transform 0.3s cubic-bezier(0.76, 0, 0.24, 1);
  color: #464646;
}

.hover_effect:hover .a1::before {
  transform-origin: 0% 50%;
  transform: scaleX(1);
}
.hover_effect:hover .shoes_image {
  transform: scale(1.05);
}
.shoes_image {
  transition: all 0.37s ease-in-out;
  position: relative;
  z-index: -1;
}
.hover_effect:hover .a1::after {
  transform: translate3d(0, 0, 0);
}

.a1 span {
  display: inline-block;
  transition: transform 0.3s cubic-bezier(0.76, 0, 0.24, 1);
}

.hover_effect:hover .a1 span {
  transform: translate3d(-200%, 0, 0);
}
#hamburger-menu {
  z-index: 102;
  top: 50%;
  transform: translate(50%, -50%);
  transition: all 0.4s ease-in-out;
}
.active {
  right: 40%;
  transition: all 0.4s ease-in-out;
}
.border_nula {
  border: 0;
}
.active + #navbar-menu {
  background-color: rgba(0, 0, 0, 0.4);
  opacity: 1;
  visibility: visible;
}
.active + #navbar-menu .navbar-links {
  padding: 1em;
}

.underline_hover_parent .underline_hover {
  overflow: hidden;
}

.underline_hover_parent .underline_hover::after {
  opacity: 1;
  transform: translate3d(-100%, 0, 0);
}

.underline_hover_parent .underline_hover:hover::after,
.underline_hover_parent .underline_hover:focus::after{
  transform: translate3d(0, 0, 0);
}
.underline_hover {
  display: block;
  position: relative;
  padding: 0.2em 0;
}
.underline_hover::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: -1px;
  width: 30%;
  height: 0.1em;
  background-color: black;
  opacity: 0;
  transition: opacity 300ms, transform 300ms;
}
.underline_hover:hover::after,
.underline_hover:focus::after {
  opacity: 1;
  transform: translate3d(0, 0.2em, 0);
}
</style>
