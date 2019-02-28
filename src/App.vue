<template>
    <div id="app" class="absolute-fill-parent">


        <div class="wrapper">
            <div class="front-page flex-display" v-if="showFrontPage" @click="frontPageClick" ref="frontPage">
                <div class="line-part left-line">
                </div>
                <div class="line-part right-line"></div>
                <div class="avatar flex-display flex-center">
                    <img src="./assets/images/avatar.jpg" alt="Avatar">
                </div>
                <p class="desc" v-if="showDesc"><span>I'm </span><span ref="descStr"></span></p>
                <p class="desc" v-show="!showDesc"><span>Collin</span></p>
            </div>
            <div class="left-part part">
                <ul class="nav">
                    <li v-for="item in navList" :class="{selected: item.title == selectedItem}" :key="item.title"
                        @click="handleClick(item.title)">
                        <h4>{{`${item.title} | ${item.label}`}}</h4>
                        <i class="iconfont" :class="item.icon"></i>
                    </li>
                    <!--<li @click="handleClick('home')">-->
                    <!--<h4>Home | 主页</h4>-->
                    <!--<i class="iconfont icon-people"></i>-->
                    <!--</li>-->
                    <!--<li>-->
                    <!--<h4>Resume| 简历</h4>-->
                    <!--<i class="iconfont icon-file"></i>-->
                    <!--</li>-->
                    <!--<li>-->
                    <!--<h4>Portfolio | 作品</h4>-->
                    <!--<i class="iconfont icon-case"></i>-->
                    <!--</li>-->
                    <!--<li>-->
                    <!--<h4>Contact | 联系</h4>-->
                    <!--<i class="iconfont icon-fly"></i>-->
                    <!--</li>-->
                </ul>
            </div>
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
        private showFrontPage = true;
        private showDesc = true;
        private selectedItem = 'Home';
        private partMargin = 20;
        private frontPageHeight = 260;
        private partOffset = 10;
        private wrapperWidth = 800;
        private wrapperHeight = 600;
        private diff = 50;
        private navList = [
            {
                title: 'Home',
                label: '主页',
                icon: 'icon-people'
            },
            {
                title: 'Resume',
                label: '简历',
                icon: 'icon-file'
            }, {
                title: 'Portfolio',
                label: '作品',
                icon: 'icon-case'
            }, {
                title: 'Contact',
                label: '联系',
                icon: 'icon-fly'
            }
        ];

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
        };

        private handleClick(item: string) {
            let self = this
            self.selectedItem = item;
            const navClickTl = new TimelineLite();
            navClickTl
                .to('.right-part', 0.5, {
                    top: self.partMargin + self.partOffset + self.frontPageHeight - self.diff,
                }, 'stage1')
                .to('.bottom-part', 0.5, {
                    height: 0
                }, 'stage1')
                .to('.right-part', 0.5, {
                    top: self.partMargin,
                }, 'stage2')
                .to('.bottom-part', 0.5, {
                    height: self.wrapperHeight - self.frontPageHeight - self.partOffset - self.partMargin * 2 + self.diff,
                }, 'stage2')
        }

        private frontPageClick() {
            let self = this
            const tl = new TimelineLite();
            const frontPage = this.$refs.frontPage;
            self.showDesc = false;
            const partMargin = self.partMargin;
            const frontPageHeight = self.frontPageHeight;
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
    front-page-height = 260px
    front-page-width = 260px
    part-offset = 10px
    wrapper-width = 800
    wrapper-height = 600
    diff = 50
    #app
        z-index 50
        background-size cover
        .wrapper
            position absolute
            width 800px
            height 600px
            top 50%
            left 50%
            transform translate(-50%, -50%)
            .front-page
                position absolute
                left 50%
                top 50%
                transform translate(-50%, -50%)
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
                    background-color #f4d03f
                .left-line
                    left 0
                    transform-origin right bottom
                    transform rotateZ(20deg)
                    border-bottom-left-radius 5px
                    border-top-left-radius 5px
                .right-line
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

            .part
                position absolute
                display none
            .left-part
                background-color: #f4d03f
                width front-page-width
                height wrapper-height - part-margin* 2 - front-page-height - part-offset
                left -@width
                top part-margin + front-page-height + part-offset
                padding 10px 0 0 0
                .nav
                    z-index 1
                    position relative
                    li
                        cursor pointer
                        position relative
                        overflow hidden
                        border-bottom 1px solid #e1c03a
                        text-align right
                        padding 10px
                        color #111111
                        &:hover
                            color #f4d03f
                            border-bottom-color black
                        &:hover::before
                            top 0
                            left -30%
                        &::before
                            position absolute
                            transform rotate(15deg)
                            z-index -1
                            content ''
                            background-color black
                            top 200%
                            left -100%
                            width 300%
                            height 300%
                            transition-timing-function ease-out
                            transition top 0.5s, left0 .5s
                        h4
                            display inline-block
                            font-size 1.2rem
                            padding-right 15px
                            border-right 2px solid #e1c03a
                        .iconfont
                            padding-left 10px
                            font-size 1.5rem
                    li.selected
                        color #f4d03f
                        background-color black
                        border-bottom-color black

            .right-part
                width wrapper-width - part-margin* 2 - front-page-width - part-offset
                height front-page-height - diff
                right -@width
                top part-margin
                background-color: yellow;
            .bottom-part
                width wrapper-width - part-margin* 2 - front-page-width - part-offset
                height wrapper-height - part-margin* 2 - front-page-height - part-offset + diff
                top front-page-height + part-margin + part-offset - diff
                right part-margin
                background-color: yellow;
</style>
