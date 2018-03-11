<template>
    <div class="ta-search">
        <div class="ta-search-def">
            <label>Answer</label>
            <input type="text" placeholder="搜索标准答案" readonly @click="toSearchDetail">
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'search',
  methods: {
    toSearchDetail() {
      this.$router.push({ path: '/search' });
    }
  }
};
</script>
<style scoped lang="stylus">
.ta-search {
    padding: 6px;
    width: 100%;
    background-color: #c9c3dd;

    .ta-search-def {
        label {
            margin-right: 2%;
            width: 30%;
            font-style: italic;
            font-size: 20px;
            color: inherit;
        }

        input {
            display: inline-block;
            position: relative;
            padding-left: 10px;
            width: 68%;
            height: 40px;
            text-align: left;
            background-color: #fff;
            border-radius: 4px;
        }
    }
}
</style>
