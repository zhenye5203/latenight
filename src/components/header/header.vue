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

<style scoped>
  .header{
    width:100%;
    height:46px;
    background:#000;
    position:relative;
    z-index:1;
  }
  header{
    position:fixed;
    top:0;
    width:100%;
    height:46px;
    background:rgba(16,18,23,1);
    display: flex;
    align-items:center;
    z-index:9999;
  }
  .tab{
    margin:0 auto;
  }
  header .mus{
    font-size:24px;
    /* font-weight: bold; */
    color:#FFFFFF;
    margin:0 8px;
  }
  .tab .mus{
    color:#ccc;
  } 
  .tab .mus.tab-active{
    color:#fff;
  } 
</style>