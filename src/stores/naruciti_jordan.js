import { defineStore } from "pinia";

export const naruciti_jordan = defineStore('products', {
    state: () => ({
        products:[]
    }),
    actions:{
        fetchProductsFromDB(){
            fetch('/data/naruciti_jordan.json')
                .then(res => res.json())
                .then(json => 
                    this.products = json.products
                    )
        }
    }
})