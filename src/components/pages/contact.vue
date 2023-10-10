<template>
    <navigation_menu/>
    <div>

       <section class="h-[70em] bg-[#131313] w-full relative z-3 flex justify-center items-center max-[630px]:h-[60em]">
        <form ref="form" @submit.prevent="sendEmail " class="w-[1200px] mx-[20px]">
          <p class="font-bold mb-[50px] leading-[3rem] text-[3rem] text-white max-[350px]:w-full max-[340px]:text-[2.5rem]">Kontaktirajte nas.</p>
          <div class="flex justify-between max-[630px]:flex-col ">
            <div class="w-[49%] max-[630px]:w-full">
              <input type="text" name="ime" placeholder="Ime" class="" required v-model="ime">
            </div>
            <div class="w-[49%] max-[630px]:w-full max-[630px]:mt-[16px]">
              <input type="text" name="prezime" placeholder="Prezime" required v-model="prezime">
            </div>
          </div>
          <div class="flex justify-between max-[630px]:flex-col">
            <div class="w-[49%] max-[630px]:w-full my-[1rem]">
              <input type="email" name="email" placeholder="Email" required v-model="email">
            </div>
            <div class="w-[49%] max-[630px]:w-full my-[1rem] max-[630px]:mb-[16px] max-[630px]:mt-[0px]">
              <input type="tel" name="telefon" placeholder="Telefon" required v-model="telefon">
            </div>
          </div>
            <textarea name="poruka" placeholder="Poruka za nas!" v-model="poruka" class="mt-[30px] p-[15px] min-h-[200px] text-[white] bg-transparent max-h-[250px] mb-[1rem]" style="border: 1px solid rgba(255, 255, 255, 0.3);"></textarea>
            <input type="submit" value="Send" class="float-right h-[50px] cursor-pointer max-[630px]:!w-full">
        </form>
       </section>
    </div>
    <footer_page/>
</template>

<script>
import emailjs from 'emailjs-com';
import swal from 'sweetalert';

export default {
  data(){
    return{
      ime:"",
      prezime:"",
      email:"",
      telefon:"",
      poruka:""
    }
  },
  methods: {
    sendEmail() {
      emailjs.sendForm('service_rcsxwsd', 'template_qxl8c85', this.$refs.form, 'VBFADQxJgX8e82_E1')
        .then((result) => {
             console.log('SUCCESS!', result.text, this.ime, this.prezime);
            swal({title: "Uspješno!", text: "Hvala Na poruci", type: 
"success"}).then(function(){ 
   location.reload();
   }
);
        }, (error) => {
            console.log('FAILED...', error.text);
        });
        
    },

  },
}
</script>

<script setup>
import navigation_menu from "./navigation.vue"
import footer_page from "../pages/footer.vue"
</script>

<style scoped>
.big-text{
  -webkit-text-stroke: 1px white;
  font-size: max(20vw, 20%, 10rem);
    font-weight: 700;
    color: transparent;
    -webkit-text-stroke: 2px rgba(255, 255, 255, 0.1);
}
@media only screen and (max-width: 700px){
	.big-text{
  font-size: 20vw;
}
}
input {
  outline: none;
  border:none;
  background-image:none;
  background-color:transparent;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
}
.display-input { display: inline-block; }
.display-input2 { display: none; }

@media (max-width: 320px) { 
  .display-input { display: none; }
  .display-input2 { display: inline-block; 
  width: 100%;}
}
label {
  float: left;
  color:white;
}

input, textarea {
  width: 100%;
  resize: vertical;
}
input[type=submit] {
  font-size: 15px;
  border:1px solid white;
  color: white;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 3px;
  width: 200px;
  padding: 12px 35px;
  transition: 0.6s all ease-in;
}

input[type=radio],input[type=checkbox]{
width:30px;
accent-color: #75dab4;
}

input[type=text],[type=email],[type=tel]{
  color: #fff;
    width: 100%;
    padding: 15px 0;
    background: transparent;
    border: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}
</style>