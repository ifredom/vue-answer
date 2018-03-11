<template>
  <div class="home-list-detail">
    <v-Header :title="$route.params.title" back></v-Header>
    <section class="container">
      <h3>{{$route.query.title}}</h3>
      <h3>{{$route.params}}</h3>
      <p>点赞数
        <span v-text="$route.query.zan"></span>
      </p>
    </section>

  </div>
</template>
<script type="text/ecmascript-6">
import vHeader from '@/components/common/header';
export default {
  data() {
    return {

    }
  },
  components: {
    vHeader
  },
}
</script>
<style scoped lang="stylus">
.container {
  width: 100%;
  height: 100%;
  padding: 0.625rem;
  background: linear-gradient(to right, #fce6ad, #f6c372); /* 标准的语法 */

  h3 {
    font-size: 1rem;
  }

  p {
    font-size: 0.8rem;

    span {
      text-indent: 1rem;
    }
  }
}
</style>
