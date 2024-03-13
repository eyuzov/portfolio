<template>
    <div class="content">
        <div class="pagination">
            <a href="#">01</a>
            <a href="#">02</a>
            <a href="#">03</a>
            <a href="#">></a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AppPagination',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="sass" scoped>

body
    padding: 0
    margin: 0
.content
    padding: 0 calc(50% - 600px)

.pagination
    margin-top: 50px
    margin-bottom: 200px
    display: flex
    justify-content: center
    gap: 20px
    a
        color: rgb(41, 47, 54)
        font-family: Jost
        font-size: 16px
        font-weight: 500
        line-height: 150%
        letter-spacing: 0%
        text-align: left
        text-transform: capitalize
        box-sizing: border-box
        border: 1px solid rgb(205, 162, 116)
        border-radius: 50%
        padding: 14px
        text-decoration: none
</style>