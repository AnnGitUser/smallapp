<template>
  <div class="wrapper">
    <web ref="webview" style="width: 500px; height: 500px" :src="h5url"
      @pagestart="onPageStart" @pagefinish="onPageFinish" @error="onError" @receivedtitle="onReceivedTitle"></web>
  </div>
</template>

<style scoped>
  .wrapper {
        flex-direction: column;
        padding: 10px;
    }
</style>

<script>
  module.exports = {
    data: {
      pagestart: '',
      pagefinish: '',
      title: '',
      error: '',
      canGoBack: false,
      canGoForward: false,
      //这是作者的本机IP
      h5url: 'http://192.168.7.46:8000/cml/h5/index'
    },
    methods: {
      onPageStart: function(e) {
        this.pagestart = e.url;
      },
      onPageFinish: function(e) {
        this.pagefinish = e.url;
        this.canGoBack = e.canGoBack;
        this.canGoForward = e.canGoForward;
        if (e.title) {
          this.title = e.title;
        }
      },
      onError: function(e) {
        this.error = url;
      },
      onReceivedTitle: function(e) {
        this.title = e.title;
      }
    }
  }
</script>