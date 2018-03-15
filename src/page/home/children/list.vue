<template>
  <div class="home-list" key="container">
    <section class="card" v-for="(item,index) in cardList" :key="'card'+index">
      <figure class="card-title">
        <div class="left">
          <p>{{item.title}}</p>
        </div>
        <div class="center">
          <img src="./../../../image/adavator/person2.png" width="24" height="24" />
          <img src="./../../../image/adavator/person3.png" width="24" height="24" />
          <img src="./../../../image/adavator/person4.png" width="24" height="24" />
          <img src="./../../../image/adavator/person3.png" width="24" height="24" />
        </div>
        <ta-timecountdown ref="timerbtn" autoplay :seconds="allTime-useTime"></ta-timecountdown>
        <div class="right">...</div>
      </figure>
      <div class="card-content">
        <router-link class="content-title" :to="{path:'/homedetail', query:{id:item.id, title:item.title, lang:item.lang,zan:item.zan},params:{title:item.title}}" tag="div">
          <img src="./../../../image/books/type1.jpg" width="60" height="80" />
        </router-link>
        <div class="content-detail">
          <span class="content-value">#{{item.conver}}</span>{{item.content}}</div>
      </div>

      <figure class="card-option">
        <div class="option-section option-section-left">
          <i class="heart" :class="dianzanClass" @click="dianzan($event,index)">
            <em>{{item.zan}}</em>
          </i>
          <i class="icon iconfont icon-shoucang"></i>
        </div>

        <div class="option-section option-section-center">
          <i class="icon iconfont icon-yaowan"></i>
        </div>
        <div class="option-section option-section-right">
          <i class="icon iconfont icon-fenxiang"></i>
        </div>
      </figure>
    </section>

    <loading v-show="showLoading"></loading>

  </div>
</template>

<script type="text/ecmascript-6">
import { mapState, mapActions } from 'vuex';
import { MockHomeList } from '@/api';
import loading from '@/components/common/loading';
import taTimecountdown from '@/components/timecountdown/timecountdown';
export default {
  data() {
    return {
      cardList: [], // 列表集合数据
      dianzanClass: '',// 点赞红星class绑定
      showLoading: true, // 是否显示侧边栏
      startX: 0,// 滑动距离
      endX: 0,
    };
  },
  computed: {
    ...mapState(['allTime', 'useTime', 'loginState'])
  },
  created() {
    MockHomeList({}).then(res => {
      console.log(res);
      this.cardList = res.data;
      this.record_home_list(res.data);
    });
  },
  mounted() {
    var self = this;
    setTimeout(() => {
      self.showLoading = false;
    }, 5000);
  },
  methods: {
    ...mapActions(['record_home_list', 'add_zan_num']),
    dianzan(event, index) {
      this.add_zan_num(index);

      var self = event.target;
      $(self).css('background-position', '');
      var attrRel = $(self).attr('rel');
      var self = $(self);
      if (attrRel === 'like') {
        $(self)
          .addClass('heartAnimation')
          .attr('rel', 'unlike');
      } else {
        $(self)
          .removeClass('heartAnimation')
          .attr('rel', 'like');
        $(self).css('background-position', 'left');
      }
    }
  },
  components: {
    taTimecountdown,
    loading
  }
};
</script>

<style scoped lang="stylus">
.home-list {
  position: relative;
  padding: 0.5rem;

  .card {
    position: relative;
    margin-bottom: 0.5rem;
    padding: 0.2rem 0.2rem 0.2rem 0.4rem;
    border-radius: 0.6rem;
    border-left: thick solid #dedede;
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
  }

  .card[data-type='0'] {
    transform: translate3d(0, 0, 0);
  }

  .card[data-type='1'] {
    transform: translate3d(-2rem, 0, 0);
  }

  .card-title {
    display: flex;
    justify-content: space-between;
    text-align: center;
    align-self: center;

    .left {
      display: flex;
      justify-content: space-between;
      text-align: center;
      align-items: center;
    }

    .center {
      display: flex;
      justify-content: space-between;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    img {
      display: block;
      margin-right: 0.2rem;
    }

    p {
      font-size: 1rem;
      color: #5cacee;
      font-weight: bold;
    }
  }
}

.card .content-lang {
  font-size: 0.853rem;
}

.card .card-content {
  display: flex;
  justify-content: flex-start;
  margin-top: 0.4rem;
  margin-bottom: 0.4rem;
}

.card .card-content .content-title {
  width: 30%;
  margin-right: 0.6rem;
  font-size: 0.92rem;
}

.card .card-content .content-title img {
  width: 100%;
  height: 100%;
}

.card .card-content .content-detail {
  width: 70%;
  font-size: 0.853rem;
  letter-spacing: 1px;
}

.card .card-content .content-value {
  color: #ff6347;
}

.card .card-option {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card .card-option .icon {
  padding-left: 0.3rem;
  padding-right: 0.3rem;
  font-size: 1.1rem;

  &.icon-dianzan {
    color: #FF7256;
  }
}

.card-option .icon-shoucang {
  margin-left: 2.5rem;
}

.card .card-option .icon em {
  margin-left: 0.2rem;
  font-style: normal;
  font-size: 0.8rem;
}

.card .option-section-left {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 20%;
}

.heart {
  background: url('../../../image/common/heart_animation.png');
  background-position: left;
  background-repeat: no-repeat;
  height: 4rem;
  width: 4rem;
  cursor: pointer;
  position: absolute;
  left: -1.25rem;
  background-size: 2900%;

  em {
    position: absolute;
    left: 2.5rem;
    top: 1.8rem;
    font-size: 0.5rem;
    color: #FF7256;
  }
}

.heart:hover, .heart:focus {
  background-position: right;
}

@keyframes heartBlast {
  0% {
    background-position: left;
  }

  100% {
    background-position: right;
  }
}

@keyframes heartBlast {
  0% {
    background-position: left;
  }

  100% {
    background-position: right;
  }
}

.heartAnimation {
  display: inline-block;
  -webkit-animation-name: heartBlast;
  animation-name: heartBlast;
  -webkit-animation-duration: 0.8s;
  animation-duration: 0.8s;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
  -webkit-animation-timing-function: steps(28);
  animation-timing-function: steps(28);
  background-position: right;
}
</style>
