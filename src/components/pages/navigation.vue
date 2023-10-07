<template>
<div>
  <div :class="{ 'onScroll': !view.topOfPage}"  class="w-full flex justify-center px-8 max-[340px]:px-2 fixed z-[100] bg-[#131313]">
    <ul class="flex w-[700px] justify-between items-center text-[14px] uppercase tracking-[0.2rem] font-bold h-[100px] max-[749px]:hidden">
    <li class=""><router-link class="pb-[10px]" to="/">Home</router-link></li>
  <!-- <li class="px-16 "><router-link class="pb-[10px]" to="/about">About Us</router-link></li> -->  
    <li><img src="../../assets/tenisice-logo.png" alt="" class="w-[100px] h-[100px]"></li>
   <!-- <li class="px-16"><router-link class="pb-[10px]" to="/contact">Contact Us</router-link></li>-->  
    <li class=""><router-link class="pb-[10px]" to="/store">TENISICE</router-link></li>
  </ul>
  </div>
 
  <div class="fixed bg-[#131313]  z-[999] w-full text-[14px] uppercase tracking-[0.2rem] font-bold min-[750px]:hidden">
    <ul class="flex w-full items-center bg-[#131313]  justify-between h-[100px] absolute z-[999]">
      <li><img src="../../assets/tenisice-logo.png" alt="" class="w-[100px] h-[100px] ml-2"></li>
    <li @click="mobile_show()" class=" mr-2">
      <svg class="ham hamRotate ham1" viewBox="0 0 100 100" width="80" onclick="this.classList.toggle('active')">
  <path
        class="line top"
        d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40" />
  <path
        class="line middle"
        d="m 30,50 h 40" />
  <path
        class="line bottom"
        d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40" />
  </svg>
  </li>
    </ul>
    
  
  <div  :class="{ 'dojdi_dole' : isActive_var}" class="fixed flex-col w-[100%] z-[2] top-[-30em] left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[40rem] bg-[#131313] flex justify-end gap-[5em] items-center text-white" style="transition:0.5s all ease-in;">
    <!--<p class=""><router-link class="" to="/about">About Us</router-link></p>-->
   <!--<p class="mt-16"><router-link class="" to="/contact">Contact Us</router-link></p>-->
   <p class="mt-32"><router-link class="" to="/">Home</router-link></p>
    <p class="mb-16"><router-link class="" to="/store">Store</router-link></p>
    <!--<p class="my-16"><router-link class="" to="/">FAQ</router-link></p>-->
  </div>
</div>
</div>
  
</template>

<script>
export default{
  data () {
  return {
    view: {
      topOfPage: true,
    },
    isActive_var:false
  }
},
beforeMount() {
  window.addEventListener('scroll', this.handleScroll)
},
methods: {
  handleScroll(){
    if(window.pageYOffset>0){
      if(this.view.topOfPage) this.view.topOfPage = false
    } else {
      if(!this.view.topOfPage) this.view.topOfPage = true
    }
  },
  mobile_show(){
    this.isActive_var = !this.isActive_var
  }
  }
}
</script> 

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed&display=swap');
*{
  font-family:inherit;
  font-size:14px;
  color:white;
}
.dojdi_dole{
  top:0em;
  transition:0.2s all ease-in;
}
.ham {
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transition: transform 400ms;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.hamRotate.active {
  transform: rotate(45deg);
}
.hamRotate180.active {
  transform: rotate(180deg);
}
.line {
  fill:none;
  transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
  stroke:white;
  stroke-width:5.5;
  stroke-linecap:round;
}
.ham1 .top {
  stroke-dasharray: 40 139;
}
.ham1 .bottom {
  stroke-dasharray: 40 180;
}
.ham1.active .top {
  stroke-dashoffset: -98px;
}
.ham1.active .bottom {
  stroke-dashoffset: -138px;
}
.router-link-active{
  border-bottom: 2px solid white;
}
.onScroll{
      -webkit-box-shadow: 0px 14px 19px 0px rgba(0,0,0,0.75);
      -moz-box-shadow: 0px 14px 19px 0px rgba(0,0,0,0.75);
      box-shadow: 0px 14px 19px 0px rgba(0,0,0,0.75);
      transition: all .5s ease-in-out;
    }
    @media only screen and (max-width: 750px) {
      .router-link-active{
  border-bottom:0;
}
}
</style>