import { defineStore } from "pinia";

export const naruciti_yeezy = defineStore('products', {
    state: () => ({
        products:[]
    }),
    actions:{
        fetchProductsFromDB(){
            fetch('/data/naruciti_yeezy.json')
                .then(res => res.json())
                .then(json => 
                    this.products = json.products
                    )
        }
    }
})