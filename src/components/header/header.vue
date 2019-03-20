<template>
    <div class="header">
        <header>
          <i class="mus icon-mine"></i>
          <div class="tab">
            <router-link to="/playlist"><i class="mus icon-resong resong tab-active"></i></router-link>
            <router-link to="/recommend"><i class="mus icon-music-reco reco"></i></router-link>
            <router-link to="/mv"><i class="mus icon-moment moment"></i></router-link>
          </div>
          <i class="mus icon-search"></i>
      </header>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {

    }
  },
  methods: {

  },
  components: {

  }
}
</script>

<style scoped lang="less">
  .header{
    width:100%;
    height:46px;
    background:#000;
    position:relative;
    z-index:1;
    header{
      position:fixed;
      top:0;
      width:100%;
      height:46px;
      background:@themeColor;
      display: flex;
      align-items:center;
      z-index:9999;
      .mus{
        font-size:24px;
        /* font-weight: bold; */
        color:#FFFFFF;
        margin:0 8px;
      }
      .tab{
        margin:0 auto;
        .mus{
          color:#f5f5f5;
        } 
        .mus.tab-active{
          color:#fff;
        } 
      }
    }
  }
</style>