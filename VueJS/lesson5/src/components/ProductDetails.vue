<template>
    <div>
        <div>
        <p>{{"Название товара: " + product.name}}</p>
        <p v-if="product.available === true">{{"Доступность товара: Товар доступен "}}</p>
        <p v-if="product.available === false">{{"Доступность товара: Товара нет на складе "}}</p>
        <p>{{"Форматированная стоимость товара: " + formattedPrice}}</p>
        
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductDetails',

    data() {
        return {
            product:{name:"Notebook", price: 5000, available: true}
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
    computed:{
        formattedPrice(){
            return "$" + this.$data.product.price
            
        }
    }
};
</script>

<style lang="sass" scoped>

</style>