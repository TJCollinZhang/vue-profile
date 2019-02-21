<template>
    <div id="app" class="absolute-fill-parent">


        <div class="wrapper">
            <div class="front-page flex-display" v-if="showFrontPage" @click="frontPageClick" ref="frontPage">
                <div class="line-part left-part">
                </div>
                <div class="line-part right-part"></div>
                <div class="avatar flex-display flex-center">
                    <img src="./assets/images/avatar.jpg" alt="Avatar">
                </div>
                <p class="desc" v-if="showDesc"><span>I'm </span><span ref="descStr"></span></p>
                <p class="desc" v-show="!showDesc"><span>Collin</span></p>
            </div>
            <div class="left-part part"></div>
            <div class="right-part part"></div>
            <div class="bottom-part part"></div>
            <!--<MainContent v-if="!showFrontPage"></MainContent>-->
        </div>

    </div>
</template>
<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import {TweenLite, CSSPlugin, TimelineLite} from 'gsap/TweenMax';
    import {init} from 'ityped';
    import MainContent from './components/MainContent';

    @Component({
        components: {
            MainContent,
        },
    })
    export default class App extends Vue {
        private showFrontPage:boolean = true
        private showDesc:boolean = true

        private mounted() {
            const tl = new TimelineLite();
            const loaderWrapper = document.getElementById('loaderWrapper');
            const preLoader = document.getElementById('preLoader');
            const circle = document.getElementById('circle');
            const descStr = this.$refs.descStr
            tl.to(circle, 0.3, {
                opacity: 0,
            }).to(preLoader, 0.5, {
                // height: 300,
                // width: 500,
                scale: 0,
                onComplete: function () {
                    console.log('complete');
                    init(descStr, {showCursor: true, strings: ['Collin.', 'a web developer.']});
                }
            }).to(loaderWrapper, 0, {
                display: 'none',
            });
        }

        private frontPageClick() {
            let self = this
            const tl = new TimelineLite();
            const frontPage = this.$refs.frontPage;
            self.showDesc = false;
            const partMargin = 20;
            const frontPageHeight = 200;
            tl.to(frontPage, 1, {
                width: frontPageHeight,
                height: frontPageHeight,
                top: partMargin,
                left: partMargin,
                x: 0,
                y: 0,
                // scale: 0,
                onComplete: function () {
                    // self.showFrontPage = false;
                }
            }, 'frontPageChange').to('.line-part', 0.2, {
                // display: 'none'
                height: 0,
            }, 'frontPageChange').to(
                '.desc', 0.2, {
                    paddingTop: 20,
            }, 'frontPageChange'
            ).to(
                '.left-part', 0.5, {
                    display: 'block',
                    left: partMargin,
                }
            ).to(
                '.right-part', 0.5, {
                    display: 'block',
                    right: partMargin,
                }
            ).to(
                '.bottom-part', 0.5, {
                    display: 'block',
                    bottom: partMargin,
                }
            )



        }
    }
</script>
<style lang="stylus">
    part-margin = 20px
    front-page-height = 200px
    front-page-width = 200px
    part-offset = 10px
    wrapper-width = 800
    wrapper-height = 600
    #app
        z-index 50
        background-size cover
        .wrapper
            position absolute
            width 800px
            height 600px
            top 50%
            left 50%
            transform translate(-50%,-50%)
            .front-page
                position absolute
                left 50%
                top 50%
                transform translate(-50%,-50%)
                cursor pointer
                padding 20px
                width 500px
                height 300px
                background-color: #0d0d0d
                flex-direction column
                align-items center
                border-radius 5px
                overflow hidden
                .line-part
                    position absolute
                    content ''
                    width 50%
                    top 50%
                    height 5px
                    background-color: #f4d03f
                .left-part
                    left 0
                    transform-origin right bottom
                    transform rotateZ(20deg)
                    border-bottom-left-radius 5px
                    border-top-left-radius 5px
                .right-part
                    right 0
                    transform-origin left bottom
                    transform rotateZ(-20deg)
                    border-top-right-radius 5px
                    border-bottom-right-radius 5px

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
                    .ityped-cursor
                        font-size: 2.2rem;
                        opacity: 1;
                        -webkit-animation: blink 0.4s infinite;
                        -moz-animation: blink 0.4s infinite;
                        animation: blink 0.4s infinite;
                        animation-direction: alternate;

                    @keyframes blink
                    {
                        100% {
                            opacity: 0;
                        }
                    }
                    @-webkit-keyframes blink
                    {
                        100% {
                            opacity: 0;
                        }
                    }
                    @-moz-keyframes blink
                    {
                        100% {
                            opacity: 0;
                        }
                    }

            .part
                position absolute
                border 1px solid black
                display none
            .left-part
                width front-page-width
                height wrapper-height - part-margin*2 - front-page-height - part-offset
                left -@width
                top part-margin + front-page-height + part-offset
            .right-part
                width wrapper-width - part-margin*2 - front-page-width - part-offset
                height front-page-height
                right -@width
                top part-margin
            .bottom-part
                width wrapper-width - part-margin*2 - front-page-width - part-offset
                height wrapper-height - part-margin*2 - front-page-height - part-offset
                bottom -@height
                right part-margin
</style>
