<template>
    <div id="app" class="absolute-fill-parent flex-display flex-center">


        <div class="front-page flex-display">
            <div class="line-part top-part">
            </div>
            <div class="line-part bottom-part"></div>
            <div class="avatar flex-display flex-center">
                <img src="./assets/images/avatar.jpg" alt="Avatar">
            </div>
            <p class="desc"><span>I'm </span><span ref="descStr"></span></p>
        </div>
        <!--<div id="nav">-->
        <!--<router-link to="/">Home</router-link> |-->
        <!--<router-link to="/about">About</router-link>-->
        <!--</div>-->
        <!--<router-view/>-->
    </div>
</template>
<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import {TweenLite, CSSPlugin, TimelineLite} from 'gsap/TweenMax';
    import {init} from 'ityped';

    @Component
    export default class App extends Vue {
        private mounted() {
            const tl = new TimelineLite();
            const loaderWrapper = document.getElementById('loaderWrapper');
            const preLoader = document.getElementById('preLoader');
            const circle = document.getElementById('circle');
            const descStr = this.$refs.descStr
            tl.to(circle, 0.3, {
                opacity: 0,
            }).to(preLoader, 0.5, {
                height: 300,
                width: 500,
            }).to(loaderWrapper, 0.5, {
                opacity: 0,
            }).to(loaderWrapper, 0.5, {
                display: 'none',
            });
            init(descStr, {showCursor: true, strings: ['Collin.', 'a web developer.']})

            // new TweenLite.to(circle, 0.5, {
            //     opacity: 0,
            // })
            // new TweenLite.to(preLoader,0.5,{
            //     // height: 0,
            //     // scale: 0.5,
            //     height: 300,
            //     width: 300,
            //     transformOrigin: 'center, center',
            //     // opacity: 0,
            //     onComplete: function ()  {
            //     }
            // })
        }
    }
</script>
<style lang="stylus">
    #app
        z-index 50
        background: url("assets/images/main-bg.jpg") center bottom
        background-size cover
        .front-page
            position relative
            padding 20px
            width 500px
            height 300px
            background-color: #0d0d0d
            flex-direction column
            align-items center
            border-radius 5px
            overflow hidden
            &::before
                position absolute
                content ''
                width 50%
                top 50%
                left 0
                height 5px
                background-color: #f4d03f
                transform-origin right bottom
                transform rotateZ(20deg)
            &::after
                position absolute
                content ''
                width 50%
                top 50%
                right 0
                height 5px
                background-color: #f4d03f
                transform-origin left bottom
                transform rotateZ(-20deg)

            .avatar
                width 100%
                img
                    width 100px
                    height 100px
                    border-radius 50%
            .desc
                color #fff
                letter-spacing 3px
                padding-top 50px
                font-size 2rem
                font-weight 700
                .ityped-cursor {
                    font-size: 2.2rem;
                    opacity: 1;
                    -webkit-animation: blink 0.4s infinite;
                    -moz-animation: blink 0.4s infinite;
                    animation: blink 0.4s infinite;
                    animation-direction: alternate;
                }

                @keyframes blink {
                    100% {
                        opacity: 0;
                    }
                }
                @-webkit-keyframes blink {
                    100% {
                        opacity: 0;
                    }
                }
                @-moz-keyframes blink {
                    100% {
                        opacity: 0;
                    }
                }
</style>
