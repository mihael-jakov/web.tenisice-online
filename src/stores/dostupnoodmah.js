import { defineStore } from "pinia";

export const dostupno_odmah = defineStore('products', {
    state: () => ({
        products:[]
    }),
    actions:{
        fetchProductsFromDB(){
            fetch('../../public/dostupno_odmah.json')
                .then(res => res.json())
                .then(json => 
                    this.products = json.products
                    )
        }
    }
})