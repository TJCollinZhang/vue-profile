<template>
    <div class="front-pages flex-display">
        <div class="avatar flex-display flex-center">
            <img src="../assets/images/avatar.jpg" alt="Avatar">
        </div>
        <p class="desc">Collin</p>

    </div>
    
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component
    export default class MainContent extends Vue {
        @Prop() private msg!: string;
    }
</script>

<style scoped lang="stylus">
    .front-pages
        position absolute
        top 50%
        left 50%
        transform translate(-50%,-50%)
        cursor pointer
        padding 20px
        width 200px
        height 200px
        background-color: #0d0d0d
        flex-direction column
        align-items center
        border-radius 5px
        overflow hidden
        .avatar
            width 100%
            img
                width 100px
                height 100px
                border-radius 50%
        .desc
            color #fff
            letter-spacing 3px
            padding-top 20px
            font-size 2rem
            font-weight 700



</style>