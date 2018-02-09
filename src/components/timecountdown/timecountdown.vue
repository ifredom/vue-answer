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
            _disabled: false
        };
    },
    computed: {
        ...mapState(['qesTimer', 'useTime','allTime']),
        text: function() {
            return this.time > 0 ? this.time + 's后结束啦' : '00:00:00';
        }
    },
    mounted() {
        console.log("加载组件",this.useTime,this.allTime-this.time)
        if (this.autoplay) { // 用户计时开始后，不再重新加载
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
            if (this.time > 0) {
                this.time--;
                this.set_user_time(this.allTime-this.time)
                setTimeout(this.timer, 1000);
            } else {
                this._disabled = false;
            }
        },
        formatTime(timestamp) {
            let self = this;
            let nowTime = new Date();
            let endTime = new Date(timestamp * 1000);
            let t = endTime.getTime() - nowTime.getTime();
            if (t > 0) {
                let day = Math.floor(t / 86400000);
                let hour = Math.floor((t / 3600000) % 24);
                let min = Math.floor((t / 60000) % 60);
                let sec = Math.floor((t / 1000) % 60);
                hour = hour < 10 ? '0' + hour : hour;
                min = min < 10 ? '0' + min : min;
                sec = sec < 10 ? '0' + sec : sec;
                let format = '';
                if (day > 0) {
                    format = `${day}天${hour}小时${min}分${sec}秒`;
                }
                if (day <= 0 && hour > 0) {
                    format = `${hour}小时${min}分${sec}秒`;
                }
                if (day <= 0 && hour <= 0) {
                    format = `${min}分${sec}秒`;
                }
                self.text = format;
            } else {
                clearInterval(timer);
                self.text = self.endText;
                self._callback();
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
  color: #fff;
  font-size: 1.125rem;
}
</style>
