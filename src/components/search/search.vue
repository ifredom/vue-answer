<template>
  <div class="ta-search">
      <label>Answer</label>
      <input type="text" placeholder="这里就是类似搜索的地方啦" readonly @click="toSearchMain">
  </div>
</template>
<script type="text/ecmascript-6">
    export default {
        data() {
            return  {

            }
        },
        methods:{
            toSearchMain(){
                this.$router.push({ path: '/search' });
            }
        }
    }
</script>
<style>
  .ta-search{padding: 8px;}
  .ta-search label{
      margin-right: 2%;
      width: 30%;
      font-style:italic;
      font-size: 20px;
  }
  .ta-search input {
    display: inline-block;
    position: relative;
    padding-left: 10px;
    width: 68%;
    height: 42px;
    text-align: left;
    background-color: #fff;
    border-radius: 4px;
  }
</style>
