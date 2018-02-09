<template>
  <div class="root-view" ref="rootView">
    <transition :name="transitionName" mode="out-in">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>
    <transition :name="transitionName" mode="out-in">
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
  </div>
</template>

<script type="text/javascript">
    export default {
        data(){
            return{
                transitionName:'slide-left'
            }
        }
    }
</script>

<style>
@import 'mint-ui/lib/style.css';
@import "./style/common.css";
@import "./style/iconfont/iconfont.css";
@import "./style/ngprogress/ngprogress.css";

.child-view.black-bg{
    background-color: #272822;
    color:azure;
}

.slide-left-enter,
.slide-right-leave-active {
	opacity: 0;
	-webkit-transform: translate(100%, 0);
	transform: translate(100% 0);
}

.slide-left-leave-active,
.slide-right-enter {
	opacity: 0;
	-webkit-transform: translate(-100%, 0);
	transform: translate(-100%x, 0);
}


.slide-left-enter-active {
	animation: slideLeft .3s;
}

.slide-right-enter-active {
	animation: slideRight .3s;
}
@keyframes slideLeft {
	from {
		transform: translate3d(100%, 0, 0);
		visibility: visible;
	}
	to {
		transform: translate3d(0, 0, 0);
	}
}

@keyframes slideRight {
	from {
		transform: translate3d(-100%, 0, 0);
		visibility: visible;
	}
	to {
		transform: translate3d(0, 0, 0);
	}
}

@-webkit-keyframes slideLeft {
	from {
		transform: translate3d(100%, 0, 0);
		visibility: visible;
	}
	to {
		transform: translate3d(0, 0, 0);
	}
}

@-webkit-keyframes slideRight {
	from {
		transform: translate3d(-100%, 0, 0);
		visibility: visible;
	}
	to {
		transform: translate3d(0, 0, 0);
	}
}
</style>