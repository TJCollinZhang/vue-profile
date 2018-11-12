<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import {TweenLite, CSSPlugin, TimelineLite} from 'gsap/TweenMax'

    @Component
    export default class App extends Vue {
        private mounted() {
            let tl = new TimelineLite()
            let loaderWrapper = document.getElementById('loaderWrapper')
            let preLoader = document.getElementById('preLoader')
            let circle = document.getElementById('circle')
            tl.to(circle, 0.3, {
                opacity: 0,
            }).to(preLoader, 0.5, {
                height: 300,
                width: 300,
            }).to(loaderWrapper, 0.5, {
                opacity: 0,
                // delay: 1
            }).to(loaderWrapper, 0.5, {
                display: 'none'
            })
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
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50

#nav
  padding 30px
  a
    font-weight bold
    color #2c3e50
    &.router-link-exact-active
      color #42b983
</style>
