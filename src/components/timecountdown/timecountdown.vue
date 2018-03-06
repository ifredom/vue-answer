<template>
  <div class="sendcode" @click="run">
    {{text}}
  </div>
</template>

<script type="text/ecmascript-6">
import { mapState, mapActions } from 'vuex';
export default {
    props: {
        autoplay: {
            type: Boolean,
            default: false
        },
        seconds: {
            type: Number,
            default: 60
        },
        validate: {
            default: () => true
        }
    },
    data() {
        return {
            time: 0,
            formatTime: 0,
            startText:'s后结束啦',
            endText:'Time Over',
            _disabled: false
        };
    },
    computed: {
        ...mapState(['useTime','allTime']),
        text: function() {
            return this.time > 0 ? this.formatSeconds(this.time) : this.endText;
        }
    },
    mounted() {
        if (this.autoplay) { // 计时开始后，不再重新加载
            this.start();
        }
    },
    methods: {
        ...mapActions(['set_user_time']),
        run: function() {
            !this._disabled ? this.$emit('run') : '';
        },
        start: function() {
            this.time = this.seconds;
            this.formatTime = this.formatSeconds(this.seconds);
            this.timer();
            this._disabled = true;
        },
        stop: function() {
            this.time = 0;
            this._disabled = true;
        },
        setDisabled: function(val) {
            this._disabled = val;
        },
        timer: function() {
            if(this.isBeginTimer()){
              if (this.time > 0) {
                  this.time--;
                  this.set_user_time(this.allTime-this.time)
                  setTimeout(this.timer, 1000);

              } else {
                  this._disabled = false;
              }
            }
        },
        formatSeconds(value) {
            var theTime = parseInt(value);// 秒
            var theTime1 = 0;// 分
            var theTime2 = 0;// 小时
            if(theTime > 60) {
                theTime1 = parseInt(theTime/60);
                theTime = parseInt(theTime%60);
                if(theTime1 > 60) {
                    theTime2 = parseInt(theTime1/60);
                    theTime1 = parseInt(theTime1%60);
                }
            }
            var result = parseInt(theTime);
            if(theTime >= 0 && theTime<10) {
                result = '0'+parseInt(theTime);
            }else{
                result = parseInt(theTime);
            }
            if(theTime1 >= 0&&theTime1<10) {
                result = '0'+parseInt(theTime1)+':'+result;
            }else if(theTime1 > 0&&theTime1>=10){
                result = ''+parseInt(theTime1)+':'+result;
            }
            if(theTime2 >= 0 && theTime2<10) {
                result = '0' + parseInt(theTime2) + ':' + result;
            }else if(theTime2 > 0 &&theTime2>=10){
                result = ''+parseInt(theTime2)+':'+result;
            }
            return result;
        },
        isBeginTimer(){
          if(this.$route.path === '/home'){
            return true;
          }else{
            return true;
          }
        },
        _callback() {
            if (this.callback && this.callback instanceof Function) {
                this.callback(...this);
            }
        }
    }
};
</script>

<style scoped lang="stylus">
.sendcode {
  display: inline-block;
  width: 4.66rem;
  height: 1.44rem;
  line-height: 1.44rem;
  text-align: center;
  color: #B2DFEE;
  font-size: 1rem;
}
</style>
