<template>
  <!-- hamburger -->
  <input type="checkbox" id="navi-toggle" class="checkbox" />
  <label for="navi-toggle" class="button">
    <span class="icon">&nbsp;</span>
  </label>
  <div class="background">&nbsp;</div>

  <!-- nav -->
  <nav class="nav">
    <ul class="list">
      <li class="item"> <a class="link"> Home </a> </li>
      <li class="item"> <a class="link"> About Us </a> </li>
      <li class="item"> <a class="link"> Instagram </a> </li>
      <li class="item"> <a class="link"> Contact Us </a> </li>
      <li class="item"> <a class="link"> FAQ </a> </li>
    </ul>
</nav>
</template>

<script setup>

</script >

<style scoped>
@media only screen and (max-width: 480px) {
  .button {
  height: 6rem !important;
  width: 6rem !important;
}

.background {
  height: 4rem !important;
  width: 4rem !important;
}
}
/* page styling */
section {
  max-width: 900px;
  margin: 0 auto;
}

section h1 {
  font-size: 46px;
  text-align: center;
}

section p {
  font-size: 26px;
  text-align: center;
}

/* hamburger */
.checkbox {
  display: none;
}

.button {
  position: relative;
  background-color: white;
  height: 8rem;
  width: 8rem;
  border-radius:0 0 0 50%;
  position: fixed;
  top: 0; 
  right: 0vw; 
  z-index: 2000;
  box-shadow: 0 1rem 3rem rgb(192, 192, 192);
  text-align: center; 
  cursor: pointer;
}

.background {
  height: 8rem;
  width: 8rem;
  border-radius:0 0 0 50%;
  position: fixed;
  top: 0vh; 
  right: 0vw; 
  background-image: radial-gradient(rgb(255, 255, 255), black);
  z-index: 1000;

  transition: transform 0.8s cubic-bezier(0.86, 0, 0.07, 1);
}

.nav {
  height: 100vh;
  position: fixed;
  top: 0;
  right: -60vw;
  z-index: 1500;
  opacity: 0;
  width: 0;
  transition: all 0.8s;
}

.list {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  list-style: none;
  text-align: center;
  width: 100%;
}

.item {
  margin: 1rem;
  font-size: 36px;
}

.link:link,
.link:visited {
  display: inline-block;
  font-size: 3rem;
  font-weight: 300;
  padding: 1rem 2rem;
  color: white;
  text-decoration: none !important;
  text-transform: uppercase;
  background-image: linear-gradient(
    120deg,
    transparent 0%,
    transparent 50%,
    white 50%
  );
  background-size: 220%;
  transition: all 0.4s;
}

.link:hover,
.link:active {
    transition: all 0.19s ease-in-out;
    text-decoration: none !important;
  color: rgb(73, 73, 73);
  cursor: pointer;
}

/* functionality */
.checkbox:checked ~ .background {
  transform: scale(80);
}
.checkbox:checked ~ .nav {
  opacity: 1;
  width: 100%;
  right: 0;
}

/*  */
/* styling hamb ICON */
.icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.icon,
.icon::before,
.icon::after {
  width: 3rem;
  height: 2px;
  background-color: gray;
  display: inline-block;
}

.icon::before,
.icon::after {
  content: "";
  position: absolute;
  left: 0;
  transition: all 0.2s;
}

.icon::before {
  top: -0.8rem;
}
.icon::after {
  top: 0.8rem;
}

.button:hover icon:before {
  top: -1rem;
}
.button:hover icon::after {
  top: 1rem;
}

.checkbox:checked + .button .icon {
  background-color: transparent;
}

.checkbox:checked + .button .icon::before {
  top: 0;
  transform: rotate(135deg);
}
.checkbox:checked + .button .icon::after {
  top: 0;
  transform: rotate(-135deg);
}

</style>