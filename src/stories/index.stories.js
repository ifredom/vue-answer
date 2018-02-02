/* eslint-disable react/react-in-jsx-scope */
import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import StoryRouter from 'storybook-router';
import Vue from 'vue';
import Vuex from 'vuex';
import routes from '../router';

// 第一步，引入组件
import MyButton from './MyButton.vue';
import Welcome from './Welcome.vue';
import Header from './test/header.vue';
import TargetComponent from './test/TargetComponent.vue';

Vue.use(Vuex);

// 第二步，注册组件.
const install = function(config = {}) {
  if (install.installed) return;

  Vue.component(Header.name, Header);

  // Vue.$messagebox = Vue.prototype.$messagebox = MessageBox;
  // Vue.$toast = Vue.prototype.$toast = Toast;
  // Vue.$indicator = Vue.prototype.$indicator = Indicator;
};
if (typeof window !== 'undefined') {
  install();
}

/* eslint-enable react/react-in-jsx-scope */
// 示例组件
storiesOf('Welcome', module).add('to Storybook', () => ({
  components: { Welcome },
  template: '<welcome :showApp="action" />',
  methods: { action: linkTo('Button') }
}));

storiesOf('Example', module)
  .add('target-story', () => TargetComponent)
  .addDecorator(
    StoryRouter(
      { '/component': linkTo('Example', 'target-story') },
      {
        routes: routes[0].children
      }
    )
  )
  .add('named route link', () => ({
    template: `<router-link :to="{path: 'component'}">Named link</router-link>`
  }));

storiesOf('Example', module)
  .add('with text', () => ({
    components: { MyButton },
    template: '<my-button @click="action">Hello Button</my-button>',
    methods: { action: action('clicked') }
  }))
  .add('with JSX', () => ({
    components: { MyButton },
    template: '<my-button onClick={this.action}>With JSX</my-button>',
    methods: { action: linkTo('clicked') }
  }))
  .add('with some emoji', () => ({
    components: { MyButton },
    template: '<my-button @click="action">😀 😎 👍 💯</my-button>',
    methods: { action: action('clicked') }
  }));

// 自定义组件
storiesOf('Header ', module).add('Vue common components', () => ({
    components: { Header },
    // render() {
    //     return <ta-header title="测试标题" back fixed />;
    // },
    template: '<ta-header title="测试标题" back fixed />',
    methods: { action: linkTo('home') }
}));
