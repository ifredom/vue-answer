<template>
    <footer class="tabbar">
        <ul  class="tabbar-box">
            <li  class="tabbar-item" v-for="item in list">
                <router-link   :class="{ active: item.path == $route.path }" :to="item.path" >
                    <span class="icon iconfont" :class="item.icon"></span>
                    <span class="tab-label">{{item.title}}</span>
                </router-link>
            </li>
        </ul>
    </footer>
</template>
<script type="text/ecmascript-6">
  export default {
      data(){
      	return{
          list: [
            {
              title: '动态',
              path: '/home',
              icon: 'icon-home'
            },
            {
              title: '趣读',
              path: '/person',
              icon: 'icon-person'
            },
            {
              title: '爱我',
              path: '/my',
              icon: 'icon-my'
            }
          ]
        }
      }
//      computed: {
//          iconClass () {
//              return "icon-"+this.icon
//          },
//          iconImgUrl(){//使用JS生成资源路径
//              return "static/"+this.icon+".png"
//          }
//      }

  }
</script>
<style>
  .tabbar {
    position: fixed;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 10;
    width: 100%;
    height: 55px;
    background-color: #f6f6f7;
    border-top: 1px solid #ddd;
  }
  .tabbar .tabbar-box {
    display: -webkit-flex;
    display: flex;
    margin-top: 8px;
    box-sizing: border-box;
    font-size: 14px;
    height: 55px;
    line-height: 55px;
    overflow: hidden;
  }
  .tabbar .tabbar-box .tabbar-item{
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    text-align: center;
    color: #666;
    width: 100%;
    box-sizing: border-box;
  }
  .tabbar .icon{
    position: relative;
    display: block;
    margin:0 auto;
    top: .05rem;
    height: 1.2rem;
    font-size: 1.2rem;
    line-height: 1.2rem;
    padding-top: 0;
    padding-bottom: 0;
  }
  .tabbar .tab-label{display: block;margin:0 auto;height: 33px;line-height: 28px;}
  /*active*/
  .tabbar .tabbar-box .tabbar-item .router-link-active{
    color: #289494;
  }
  .ta-left {
    position: absolute;
    bottom: 50%;
    left: .6875rem;
    transform: translate(0,50%);
  }
  .ta-right {
    position: absolute;
    bottom: 50%;
    right: .6875rem;
    transform: translate(0,50%);
  }
  .ta-back {
    position: absolute;
    bottom: 50%;
    left: .6875rem;
    transform: translate(0,50%);
  }
</style>
