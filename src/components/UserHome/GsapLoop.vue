<template lang="">
  <div>
    <section class="gsapLoop bg-warning">
  <ul class="loop d-flex justify-content-center align-items-center">
    <li class="fs-6 text-bk-bread">
      <span> 限時領取優惠碼 2023 </span>

    </li>
  </ul>
</section>
  </div>
</template>

<script>
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import TextPlugin from 'gsap/TextPlugin'

export default {
  data () {
    return {

    }
  },
  components: {

  },
  methods: {

  },
  mounted () {
    gsap.registerPlugin(ScrollTrigger, TextPlugin)

    // 文字無限循環
    gsap.to('.loop', {
      xPercent: '-100',
      ease: 'none',
      duration: 5,
      repeat: -1
    })
  }
}
</script>

<style lang="scss">
.gsapLoop {
  height: 50px;
  overflow: hidden;
  max-width: 100%;
  overflow: hidden;
}

.loop {
  display: inline-block;
  // font-family: "Dela Gothic One";
  // font-size: 16px;
  color: #000;
  white-space: nowrap;
  height: 100%;
  letter-spacing: 10px;

}

.loop>span {
  display: inline-block;

}
</style> >
