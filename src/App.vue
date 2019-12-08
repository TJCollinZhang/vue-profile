<template>
    <div id="app" class="absolute-fill-parent">


        <div class="wrapper">
            <div class="front-page flex-display" v-if="showFrontPage" @click="frontPageClick" ref="frontPage">
                <div class="line-part left-line">
                </div>
                <div class="line-part right-line"></div>
                <div class="avatar flex-display flex-center" :class="{mini: !showDesc}">
                    <img src="./assets/images/avatar.jpg" alt="Avatar">
                </div>
                <p class="desc" v-show="showDesc"><span>I'm </span><span ref="descStr"></span></p>
                <p class="desc" v-show="!showDesc"><span>Collin</span></p>
            </div>
            <div class="left-part part">
                <ul class="nav">
                    <li v-for="item in navList" :class="{selected: item.title == selectedNav}" :key="item.title"
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
            <div class="bottom-part part">
                <div class="home" v-if="selectedItem == 'Home Page'">
                    <h3 class="part-title">Hello, I am <span class="name">Collin</span></h3>
                    <p class="intro-item">Web Developer</p>
                    <p class=""><span><i class="iconfont icon-check"></i>Coding</span></p>
                    <p class=""><span><i class="iconfont icon-check"></i>美剧</span></p>
                    <p class=""><span><i class="iconfont icon-check"></i>罗小黑</span></p>
                    <p class=""><span><i class="iconfont icon-check"></i>... ...</span></p>
                    <p class="intro-item"></p>
                    <h3 class="part-title second">Personal Info</h3>
                    <ul class="info-list">
                        <li><span class="label">Name</span><span class="content">Zhang Cong</span></li>
                        <li><span class="label">Address</span><span class="content">Shang Hai</span></li>
                        <li><span class="label">Email</span><span class="content">tjzhangcong@163.com</span></li>
                        <li><span class="label">GitHub</span><span class="content">TJCollinZhang</span></li>
                    </ul>
                    <div class="profile-img"></div>
                </div>
                <div class="resume" v-if="selectedItem == 'My Resume'">
                    <ul class="resume-nav">
                        <li :class="{selected: resumeSelectedItem == 'skills'}" @click="changeResumeList">
                            <h3 class="resume-nav-title">Projects</h3>
                        </li>
                        <div class="gap"></div>
                        <li :class="{selected: resumeSelectedItem != 'skills'}" @click="changeResumeList">
                            <h3 class="resume-nav-title">Blogs</h3>
                        </li>
                    </ul>
                    <div class="skills-list" v-if="resumeSelectedItem == 'skills'">
                        <ul class="skill-list">
                            <li><a href="https://blog.collinjs.site" target="_blank"><i class="iconfont icon-vue"></i></a><span>Blog</span></li>
                            <li><a href="https://github.com/TJCollinZhang/blog-server" target="_blank"><i class="iconfont icon-koa"></i></a><span>Blog-Server</span></li>
                            <li><a href="https://music.collinjs.site" target="_blank"><i class="iconfont icon-vue"></i></a><span>Vue Music</span></li>
                            <li><a href=""><i class="iconfont icon-vue" target="_blank"></i></a><span>Vue Profile</span></li>
                        </ul>
                    </div>
                    <div class="blogs-list" v-if="resumeSelectedItem != 'skills'">
                        <ul class="blog-list">
                            <li>
                                <h3><a href="https://blog.collinjs.site/front/article/5dea016d3225520ec59e551a" target="_blank">debounce</a></h3>
                                <span>解决debounce问题</span></li>
                            <li>
                                <h3><a href="">升级mongoDB遇到的坑</a></h3>
                                <span>mongoDB</span></li>
                            <li>
                                <h3>Vue 部署遇到刷新后404</h3>
                                <span>Vue</span></li>
                            <li>
                                <h3>Koa 401错误捕获</h3>
                                <span>Koa错误</span></li>
                            <li>
                                <h3>Vue 实现打字机效果–ityped.js</h3>
                                <span>Vue 实现打字机效果–ityped.js</span></li>
                            <li>
                                <h3>Vue 使用scrollreveal做初始动画</h3>
                                <span>初始动画</span></li>
                        </ul>
                    </div>
                </div>
                <div class="my-portfolio" v-if="selectedItem == 'My Portfolio'"></div>
                <div class="my-contact" v-if="selectedItem == 'My Contact'">
                    <div class="map">
                        <!--<baidu-map class="map-view"  :center="center" :zoom="zoom" @ready="handler"></baidu-map>-->
                        <baidu-map class="map-view" :center="{lng: 121.594, lat: 31.203}" :zoom="15">
                            <bm-marker :position="{lng: 121.594559, lat: 31.203775}" :dragging="false" animation="BMAP_ANIMATION_BOUNCE">
                                <bm-label content="" :labelStyle="{color: 'red', fontSize : '24px'}" :offset="{width: -35, height: 30}"/>
                            </bm-marker>
                        </baidu-map>
                    </div>
                    <div class="email-wrapper">
                        <div class="info-part">
                            <div class="info-content">
                                <h3>Contact Info</h3>
                                <div class="email-address">
                                    <i class="iconfont icon-email"></i>
                                    <span>tjzhangcong@163.com</span>
                                </div>
                            </div>
                        </div>
                        <div class="email-part">
                            <h3>MAIL ME</h3>
                            <form action="MAILTO: tjzhangcong@163.com" method="post" enctype="text/plain">
                                <input class="form-control" name="name" type="text" placeholder="Name">
                                <input class="form-control" type="text" name="mail" placeholder="Email">
                                <textarea class="form-control" rows="2" name="message" placeholder="Message"></textarea>
                                <button type="submit" class="form-control">SEND</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="right-part part">
                <h4 class="title">Welcome To <span class="title-part">{{title}}</span></h4>
            </div>
            <!--<MainContent v-if="!showFrontPage"></MainContent>-->
        </div>

    </div>
</template>
<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import {TweenLite, CSSPlugin, TimelineLite} from 'gsap/TweenMax';
    import {init} from 'ityped';
    import MainContent from '@/components/MainContent.vue';

    @Component({
        components: {
            MainContent,
        },
    })
    export default class App extends Vue {
        private showFrontPage = true;
        private showDesc = true;
        private title = "Home Page"
        private selectedItem = 'Home Page';
        private selectedNav = 'Home Page';
        private resumeSelectedItem = 'skills';
        private partMargin = 20;
        private frontPageHeight = 260;
        private partOffset = 10;
        private wrapperWidth = 800;
        private wrapperHeight = 600;
        private diff = 150;
        private navList = [
            {
                title: 'Home Page',
                label: '主页',
                icon: 'icon-people',
            },
            {
                title: 'My Resume',
                label: '简历',
                icon: 'icon-file',
            }, {
                title: 'My Contact',
                label: '联系',
                icon: 'icon-fly',
            }
        ];

        private changeResumeList() {
            this.resumeSelectedItem = this.resumeSelectedItem === 'skills' ? 'blogs' : 'skills';
        }


        private mounted() {
            const tl = new TimelineLite();
            const loaderWrapper = document.getElementById('loaderWrapper');
            const preLoader = document.getElementById('preLoader');
            const circle = document.getElementById('circle');
            const descStr: Element = this.$refs.descStr as Element;

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
            const navClickTl = new TimelineLite();
            self.selectedNav = item;
            navClickTl
                .to('.right-part', 0.8, {
                    top: self.partMargin + self.partOffset + self.frontPageHeight - self.diff,
                }, 'stage1')
                .to('.bottom-part', 0.8, {
                    height: 0
                }, 'stage1')
                .to('.right-part .title', 0.5, {
                    rotationX: 90
                }, 'stage1')
                .call(()=>{
                    self.title = item;
                    self.selectedItem = item;

                })
                .to('.right-part', 0.8, {
                    top: self.partMargin,
                }, 'stage2')
                .to('.bottom-part', 0.8, {
                    height: self.wrapperHeight - self.frontPageHeight - self.partOffset - self.partMargin * 2 + self.diff,
                }, 'stage2')
                .to('.right-part .title', 0.8, {
                    rotationX: 0
                })
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
                    onComplete: function () {
                        self.selectedItem = 'Home Page'
                    }
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
    diff = 150
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
                .mini
                    padding-top 15px
                    padding-top 15px
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
                border-radius 5px
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
                background-color: #0d0d0d;
                .title
                    position absolute
                    bottom 25px
                    left 20px
                    font-size 2.5rem
                    font-weight 400
                    color #f4d03f
                    .title-part
                        color #fff
            .bottom-part
                overflow hidden
                width wrapper-width - part-margin* 2 - front-page-width - part-offset
                height wrapper-height - part-margin* 2 - front-page-height - part-offset + diff
                top front-page-height + part-margin + part-offset - diff
                right part-margin
                padding 15px 30px
                background-color: #fff
                .home
                    .part-title
                        font-size 1.5rem
                        line-height 4rem
                        color #111111
                        .name
                            background-color: #f4d03f;
                            padding 5px
                    .intro-item
                        font-size 1.2rem
                        padding-bottom 20px
                        font-weight 600
                        color: #666666

                    p .iconfont
                        padding-right 10px
                    .part-title.second
                        padding-top 5px
                    .info-list
                        li
                            line-height 2rem
                            margin 10px 0
                            .label
                                background-color: #f4d03f;
                                padding 5px
                                margin-right 10px
                            .content
                                color #fff
                                padding 5px
                                background-color: #111111;
                    .profile-img
                        position absolute
                        bottom 40px
                        right 30px
                        width 200px
                        height 300px
                        background: url("./assets/images/profile.png");
                        background-size: contain;

                .resume
                    height 100%
                    .resume-nav
                        height 65px
                        width 100%
                        position absolute
                        left 0
                        top 0
                        display flex
                        flex-direction row
                        .gap
                            width 3px
                        li
                            flex 1
                            background-image url("./assets/images/icon_01.png");
                            background-repeat no-repeat
                            background-position left top
                            background-color #111111;
                            transition all 0.5s
                            color #f4d03f
                            .resume-nav-title
                                text-align center
                                font-size 1.1rem
                                line-height 65px
                            &:hover
                                background-color: #f4d03f
                                color black
                            &:nth-child(3)
                                background-image url("./assets/images/icon_02.png");
                            &.selected
                                color black
                                background-color: #f4d03f;




                    .skill-list
                        padding-top 65px
                        display flex
                        flex-direction row
                        justify-content space-between
                        flex-wrap wrap
                        width 100%
                        li
                            margin 10px
                            width 120px
                            height 120px
                            padding 10px
                            display flex
                            flex-direction column
                            align-items center
                            span
                                color #555
                            i
                                transition all 0.3s
                                &:hover
                                    transform rotateY(180deg) scale(1.2)


                                display: block
                                color #f4d03f
                                font-size 60px



                    .blogs-list
                        height 350px
                        margin-top 65px
                        overflow-y scroll
                        &::-webkit-scrollbar{
                            width: 10px;
                            height: 10px;
                            background-color: #333;
                            border-radius:4px;
                        }
                        &::-webkit-scrollbar-button{/*滚动条两端的按钮，可以用display:none让其不显示，也可以添加背景图片，颜色改变显示效果（位置2）*/
                            display:none;
                        }
                        &::-webkit-scrollbar-thumb{/*滚动条里面可以拖动的那部分（位置5）*/
                            background: #F4D04F;
                            border-radius:4px;
                        }
                        .blog-list
                            display flex
                            flex-direction column
                            width 100%
                            li
                                width 100%
                                border-bottom 1px dashed #eee
                                h3
                                    width fit-content
                                    font-size 20px
                                    line-height 30px
                                    position relative
                                    &::after
                                        content: ''
                                        width 100%
                                        position absolute
                                        left 0
                                        bottom 0
                                        height 1px
                                        transform: scaleX(0);
                                        transform-origin center center
                                        transition: all 0.3s
                                        background-color: #555;
                                    &:hover::after
                                        transform: scaleX(1);

                                span
                                    color #555
                                    line-height 40px


                .my-contact
                    height 100%
                    .map
                        border 1px solid #f4d03f
                        padding 10px
                        width 100%
                        height 40%
                        .map-view
                            width 100%
                            height 100%
                    .email-wrapper
                        position relative
                        top 20px
                        height 50%
                        width 100%
                        display flex
                        justify-content space-between
                        .info-part
                            position relative
                            width 40%
                            height 100%
                            .info-content
                                position absolute
                                bottom 10px
                                color #111
                                .email-address
                                    display inline-block
                                    line-height 25px
                                    font-size 16px
                                    i
                                        padding 0 10px 0 0

                                h3
                                    font-weight 700
                                    font-size 1.5rem
                                    line-height 1.5rem
                                    padding 5px 0
                        .email-part
                            text-align center
                            color #fff
                            background-color: #111;
                            padding 10px
                            width 50%
                            height 100%
                            h3
                                font-size 1.5rem
                            .form-control
                                width 100%
                                margin-top 10px
                            button
                                background-color: #f4d03f;
                                border-color #f4d03f
                                &:hover
                                    color #fff
                                    opacity 0.9
</style>
