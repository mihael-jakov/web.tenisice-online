<template>
<div :class="{ 'onScroll': !view.topOfPage}" class="w-full flex justify-center px-8 max-[340px]:px-2 fixed z-[999] bg-[#131313]">
  <ul class="flex w-[1440px] justify-between items-center text-[14px] uppercase tracking-[0.2rem] font-bold h-[100px] max-[749px]:hidden">
    <li class=""><router-link class="pb-[10px]" to="/">Home</router-link></li>
    <li class="px-16 "><router-link class="pb-[10px]" to="/about">About Us</router-link></li>
    <li><img src="../../assets/tenisice-logo.png" alt="" class="w-[100px] h-[100px]"></li>
    <li class="px-16"><router-link class="pb-[10px]" to="/contact">Contact Us</router-link></li>
    <li class=""><router-link class="pb-[10px]" to="/store">Store</router-link></li>
  </ul>

  <ul class="flex w-[1440px] justify-between items-center text-[14px] uppercase tracking-[0.2rem] font-bold h-[100px] min-[750px]:hidden">
    <li><img src="../../assets/tenisice-logo.png" alt="" class="w-[100px] h-[100px]"></li>
    <li class="">HAMBURGER</li>
  </ul>
</div>
  
</template>

<script>
export default{
  data () {
  return {
    view: {
      topOfPage: true,
    }
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
.router-link-active{
  border-bottom: 2px solid white;
}
.onScroll{
      -webkit-box-shadow: 0px 14px 19px 0px rgba(0,0,0,0.75);
      -moz-box-shadow: 0px 14px 19px 0px rgba(0,0,0,0.75);
      box-shadow: 0px 14px 19px 0px rgba(0,0,0,0.75);
      transition: all .5s ease-in-out;
    }
</style>