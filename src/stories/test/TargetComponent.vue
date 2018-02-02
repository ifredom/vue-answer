<template>
  <div>The target component</div>
</template>

<script>
  export default {
    name: 'comp',
    methods: {
      onClick () {
        this.$emit('click');
      }
    }
  }
</script>

<style>
  .button-styles {
    border: 1px solid #eee;
    border-radius: 3px;
    background-color: #FFFFFF;
    cursor: pointer;
    font-size: 15pt;
    padding: 3px 10px;
    margin: 10px;
  }
</style>
