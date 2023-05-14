<template>
  <div class="w-full">
    <div
      class="fixed left-0 top-0 h-full w-[275px] pt-[60px] px-[70px] pb-[10px] flex flex-col justify-between max-[1000px]:hidden"
      style="box-shadow: 1px 2px 8px 0 rgba(0, 0, 0, 0.06)"
    >
      <img src="../../public/logo.png" alt="" class="rounded-[50%]" />
      <div class="font-bold text-[17px] leading-5 uppercase">
        <p class="py-[5px]">Home</p>
        <p class="py-[5px]">Portfolio</p>
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
      class="fixed flex justify-between items-center min-[1001px]:hidden z-[101] bg-[#FAF9F6] w-full top-0 left-0 px-[4em] py-[1em] max-[500px]:px-[1em]"
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
          class="bg-[#1E5D61] block absolute h-[3px] w-[30px] rounded transform transition duration-500 ease-in-out"
          :class="{
            'rotate-45': isActive,
            ' -translate-y-1.5': !isActive,
          }"
        ></span>
        <span
          aria-hidden="true"
          class="bg-[#1E5D61] block absolute h-[3px] w-[30px] rounded transform transition duration-500 ease-in-out"
          :class="{ 'opacity-0': isActive }"
        ></span>
        <span
          aria-hidden="true"
          class="bg-[#1E5D61] block absolute h-[3px] w-[30px] rounded transform transition duration-500 ease-in-out"
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
      class="fixed w-[80%] h-screen text-[#1E5D61] flex flex-col items-center gap-[3em] min-[1001px]:hidden bg-[#FAF9F6] pt-[20vh] z-[100] overflow-hidden right-[-50%]"
      :class="{ active: isActive }"
    >
      <li class="" id="navbar_naslovnica">Naslovnica</li>

      <li class="" id="navbar_naslovnica">Kontakt</li>
    </ul>

    <div class="parent pl-[275px] w-full place-items-center pt-[103px] max-[1000px]:pl-0">
      <div class="w-[80%] m-8">
        <div class="text-center hover_effect">
          <img
            src="../../public/tenisice_primjer1.jpg"
            class="w-[100%] shoes_image"
            alt=""
          />
          <p class="mt-[4px] uppercase font-size-[17px] font-bold leading-tight">
            Lorem Ipsum
          </p>
          <p>
            <a href="#" id="style-2" class="a1" data-replace="view more"
              ><span class="text-[#464646] tag_price">150$</span></a
            >
          </p>
        </div>
      </div>
      <div class="w-[80%] m-8">
        <div class="text-center hover_effect">
          <img
            src="../../public/tenisice_primjer1.jpg"
            class="w-[100%] shoes_image"
            alt=""
          />
          <p class="mt-[4px] uppercase font-size-[17px] font-bold leading-tight">
            Lorem Ipsum
          </p>
          <p>
            <a href="#" id="style-2" class="a1" data-replace="view more"
              ><span class="text-[#464646] tag_price">150$</span></a
            >
          </p>
        </div>
      </div>
      <div class="w-[80%] m-8">
        <div class="text-center hover_effect">
          <img
            src="../../public/tenisice_primjer1.jpg"
            class="w-[100%] shoes_image"
            alt=""
          />
          <p class="mt-[4px] uppercase font-size-[17px] font-bold leading-tight">
            Lorem Ipsum
          </p>
          <p>
            <a href="#" id="style-2" class="a1" data-replace="view more"
              ><span class="text-[#464646] tag_price">150$</span></a
            >
          </p>
        </div>
      </div>
      <div class="w-[80%] m-8">
        <div class="text-center hover_effect">
          <img
            src="../../public/tenisice_primjer1.jpg"
            class="w-[100%] shoes_image"
            alt=""
          />
          <p class="mt-[4px] uppercase font-size-[17px] font-bold leading-tight">
            Lorem Ipsum
          </p>
          <p>
            <a href="#" id="style-2" class="a1" data-replace="view more"
              ><span class="text-[#464646] tag_price">150$</span></a
            >
          </p>
        </div>
      </div>
      <div class="w-[80%] m-8">
        <div class="text-center hover_effect">
          <img
            src="../../public/tenisice_primjer1.jpg"
            class="w-[100%] shoes_image"
            alt=""
          />
          <p class="mt-[4px] uppercase font-size-[17px] font-bold leading-tight">
            Lorem Ipsum
          </p>
          <p>
            <a href="#" id="style-2" class="a1" data-replace="view more"
              ><span class="text-[#464646] tag_price">150$</span></a
            >
          </p>
        </div>
      </div>
      <div class="w-[80%] m-8">
        <div class="text-center hover_effect">
          <img
            src="../../public/tenisice_primjer1.jpg"
            class="w-[100%] shoes_image"
            alt=""
          />
          <p class="mt-[4px] uppercase font-size-[17px] font-bold leading-tight">
            Lorem Ipsum
          </p>
          <p>
            <a href="#" id="style-2" class="a1" data-replace="view more"
              ><span class="text-[#464646] tag_price">150$</span></a
            >
          </p>
        </div>
      </div>
      <div class="w-[80%] m-8">
        <div class="text-center hover_effect">
          <img
            src="../../public/tenisice_primjer1.jpg"
            class="w-[100%] shoes_image"
            alt=""
          />
          <p class="mt-[4px] uppercase font-size-[17px] font-bold leading-tight">
            Lorem Ipsum
          </p>
          <p>
            <a href="#" id="style-2" class="a1" data-replace="view more"
              ><span class="text-[#464646] tag_price">150$</span></a
            >
          </p>
        </div>
      </div>
      <div class="w-[80%] m-8">
        <div class="text-center hover_effect">
          <img
            src="../../public/tenisice_primjer1.jpg"
            class="w-[100%] shoes_image"
            alt=""
          />
          <p class="mt-[4px] uppercase font-size-[17px] font-bold leading-tight">
            Lorem Ipsum
          </p>
          <p>
            <a href="#" id="style-2" class="a1" data-replace="view more"
              ><span class="text-[#464646] tag_price">150$</span></a
            >
          </p>
        </div>
      </div>
      <div class="w-[80%] m-8">
        <div class="text-center hover_effect">
          <img
            src="../../public/tenisice_primjer1.jpg"
            class="w-[100%] shoes_image"
            alt=""
          />
          <p class="mt-[4px] uppercase font-size-[17px] font-bold leading-tight">
            Lorem Ipsum
          </p>
          <p>
            <a href="#" id="style-2" class="a1" data-replace="view more"
              ><span class="text-[#464646] tag_price">150$</span></a
            >
          </p>
        </div>
      </div>
      <div class="w-[80%] m-8">
        <div class="text-center hover_effect">
          <img
            src="../../public/tenisice_primjer1.jpg"
            class="w-[100%] shoes_image"
            alt=""
          />
          <p class="mt-[4px] uppercase font-size-[17px] font-bold leading-tight">
            Lorem Ipsum
          </p>
          <p>
            <a href="#" id="style-2" class="a1" data-replace="view more"
              ><span class="text-[#464646] tag_price">150$</span></a
            >
          </p>
        </div>
      </div>
      <div class="w-[80%] m-8">
        <div class="text-center hover_effect">
          <img
            src="../../public/tenisice_primjer1.jpg"
            class="w-[100%] shoes_image"
            alt=""
          />
          <p class="mt-[4px] uppercase font-size-[17px] font-bold leading-tight">
            Lorem Ipsum
          </p>
          <p>
            <a href="#" id="style-2" class="a1" data-replace="view more"
              ><span class="text-[#464646] tag_price">150$</span></a
            >
          </p>
        </div>
      </div>
      <div class="w-[80%] m-8">
        <div class="text-center hover_effect">
          <img
            src="../../public/tenisice_primjer1.jpg"
            class="w-[100%] shoes_image"
            alt=""
          />
          <p class="mt-[4px] uppercase font-size-[17px] font-bold leading-tight">
            Lorem Ipsuma
          </p>
          <p>
            <a href="#" id="style-2" class="a1" data-replace="view more"
              ><span class="text-[#464646] tag_price">150$</span></a
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    showMobile() {
      this.isActive = !this.isActive;
    },
  },
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
@media only screen and (max-width: 900px) {
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
</style>
