<template>
  <div class="ta-search">
      <label>Answer</label>
      <input type="text" placeholder="搜索标准答案" readonly @click="toSearchMain">
  </div>
</template>
<script type="text/ecmascript-6">
    export default {
        data() {
            return {

            }
        },
        methods: {
            toSearchMain() {
                this.$router.push({path: '/search'})
            }
        }
    }
</script>
<style>

    .ta-search{
        padding: 6px;
        background-color: rgba(176,196,222,0.5);
    }
    .ta-search label{
        margin-right: 2%;
        width: 30%;
        font-style:italic;
        font-size: 20px;
	    color: #333;
        
    }
    .ta-search input {
	    display: inline-block;
	    position: relative;
	    padding-left: 10px;
	    width: 68%;
	    height: 40px;
	    text-align: left;
	    background-color: #fff;
        border-radius: 4px;
    }
</style>
