<template>
    <navigation_menu/>
    <form ref="form" @submit.prevent="sendEmail" >
    <div class=" h-full pt-[200px] pb-[150px] bg-[#131313] w-full flex justify-center items-center max-[760px]:pb-[50px] max-[760px]:pt-[160px] max-[560px]:!justify-start max-[560px]:!items-start  max-[560px]:pt-[120px] ">
        <div class="w-[1440px] flex mx-8 max-[560px]:flex-col">
            <div class="flex justify-center max-h-[600px]">
              <img :src="selectedProducts.image" alt="" class="w-[800px] h-[650px] object-cover rounded-[10px] max-[920px]:mt-[1.4rem] max-[920px]:h-[500px] max-[760px]:h-[400px] max-[760px]:w-[400px] max-[760px]:mt-[4.4rem] max-[560px]:mt-0 ">
            </div>
            <div class="flex justify-start pl-[2rem] flex-col text-[white]  max-[1010px]:mt-8 max-[560px]:pl-0">
                <p class="uppercase text-[10px] tracking-[0.13rem] assistant_font  leading-[1rem]">tenisice online</p>
                <p class="my-[1.5rem] text-[5rem] assistant_font max-[1010px]:my-[0.2rem] max-[920px]:text-[3rem] max-[300px]:text-[2rem] name">{{ selectedProducts.name }}</p>
                <div class="flex gap-4 items-center max-[300px]:mt-4">
                  <p class="line-through text-[white] text-[13px]">{{ selectedProducts.price_before }}€</p>
                  <p class="text-[2.2rem] text-[white] max-[920px]:text-[1.5rem] ">{{ selectedProducts.price }}€</p>
                </div>
                <div class="custom-select mt-6">
                    <select v-model="broj_tenisice" name="broj_tenisice" required>
                        <option disabled value="">Dostupne Veličine</option>
                        <option>36</option>
                        <option>37</option>
                        <option>38</option>
                        <option>39</option>
                        <option>40</option>
                        <option>41</option>
                        <option>42</option>
                        <option>43</option>
                        <option>44</option>
                        <option>45</option>
                        <option>46</option>
                        <option>47</option>
                    </select>
                </div>
                <p class="mt-8 assistant_font">Pogledaj VIDEO:</p>
                <div class="flex flex-row mt-[20px] gap-[2em]">
                        <a href="https://www.instagram.com/luxury.shop.balkan/" target="_blank" class="border-2 p-[10px]"><img src="../../assets/footer_instagram.svg" alt="" class="w-[30px] h-[30px]" ></a>
                        <a href="https://www.tiktok.com/@tenisice_online" target="_blank" class="border-2 p-[10px]"><img src="../../assets/footer_tiktok.svg" alt="" class="w-[30px] h-[30px]" ></a>
                    </div>
                    	
              <button type="submit" value="Send" @click="getText(selectedProducts.name)" class="border-2 mt-8 py-[12px] px-[35px] bg-white text-[14px] text-[#242424] font-bold uppercase hover_herobutton !cursor-pointer">Kupi Tenisice!</button> 
            </div>
        </div>
    </div>
  </form>
    <footer_page/>
</template>
<script>
import emailjs from 'emailjs-com';
import swal from 'sweetalert';

export default {
  data(){
    return{
      ime_tenisica:"",
      broj_tenisice:"",
      broj_mobitela:"",
      igoremail:"",
      poruka:""
    }
  },
  methods: {
    sendEmail() {
      emailjs.sendForm('service_rcsxwsd', 'template_1c1ck78', this.$refs.form, 'VBFADQxJgX8e82_E1')
        .then((result) => {
             console.log('SUCCESS!', result.text, this.ime_tenisica, this.broj_tenisice);
            swal({title: "Uspješno!", text: "Hvala Na poruci", type: 
"success"}).then(function(){ 

   }
);
        }, (error) => {
            console.log('FAILED...', error.text);
        });
        
    },
    getText: function(text){
      console.log(text);
      this.ime_tenisica = text
      console.log(this.ime_tenisica);
    }
  },
}
</script>
<script setup>
    import navigation_menu from "./navigation.vue"
    import footer_page from "../pages/footer.vue"
    import { computed } from "vue"
    import { useRoute } from "vue-router"
    import { dostupno_odmah } from '../../stores/dostupnoodmah'

    const store = dostupno_odmah()
    const route = useRoute()

    const selectedProducts = computed(() => {
        return store.products.find((item) => item.id === Number(route.params.id))
    })
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Assistant&display=swap');

.assistant_font{
    font-family: 'Assistant', sans-serif;
}

.custom-select {
  position: relative;
}

select {
  appearance: none;
  /*  safari  */
  -webkit-appearance: none;
  /*  other styles for aesthetics */
  width: 100%;
  font-size: 1rem;
  padding: 0.5em 1em;
  background-color: #fff;
  border: 1px solid #caced1;
  border-radius: 0.25rem;
  color: #000;
  cursor: pointer;
}

.custom-select::before,
.custom-select::after {
  --size: 0.3rem;
  content: "";
  position: absolute;
  right: 1rem;
  pointer-events: none;
}

.custom-select::before {
  border-left: var(--size) solid transparent;
  border-right: var(--size) solid transparent;
  border-bottom: var(--size) solid black;
  top: 40%;
}

.custom-select::after {
  border-left: var(--size) solid transparent;
  border-right: var(--size) solid transparent;
  border-top: var(--size) solid black;
  top: 55%;
}

</style>
