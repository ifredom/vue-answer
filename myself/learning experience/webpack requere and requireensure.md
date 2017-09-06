Vue 将一个组件（以及其所有依赖）改为异步加载，所需要的只是把：

import Foo from './Foo.vue'
改成

const Foo = () => import('./Foo.vue')