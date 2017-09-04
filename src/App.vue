<template>
    <router-view class="child-view"></router-view>
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

<style scoped>
 
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