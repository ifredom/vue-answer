<template>
  <div class="main">
    <h1>欢迎来到STORYBOOK</h1>
    <p>
      这是应用UI组件开发环境。目的是构建更加健壮具有可用性的UI组件.
    </p>
    <p>
      在<code class="code">src/stories</code>目录中添加了一些基本的故事（组件） 。<br />故事（组件）展示的是一个或多个UI组件的某一单一状态。你可以用它们做尽可能多的任何事情。<br />
      (基本上，一个故事就是一个视觉测试案例。)
    </p>
    <p>
      查看这些使用示例<br />
      <a class="link" @click="onClick" role="button" tabIndex="0">stories</a>展示了一个名为<code class="code">Button</code>的组件用法<br />
    </p>
    <p>
      你可以模仿并添加自己的组件作为一个故事。<br />你还可以编辑这些组件并立即查看更改。<br />
      (尝试编辑 <code class="code">Button</code> 组件，位于<code class="code">src/stories/Button.js</code>.)<br />
    </p>
    <p>
      注意看看<a class="link" href="https://github.com/storybooks/storybook" target="_blank" rel="noopener noreferrer" >Storybook</a>获取更多使用信息.<br />
    </p>
    <p>
      <a class="link" href="https://github.com/gvaldambrini/storybook-router/blob/master/examples/vue-router/Links.js" target="_blank" rel="noopener noreferrer" >
        Storybook中使用vue-router的相关信息
      </a>
    </p>
    <p class="note">
      <b>NOTE:</b> <br /> 配置文件在这里 <code class="code">.storybook/webpack.config.js</code> <br /> 可以添加webpack的加载器和插件
    </p>
  </div>
</template>

<script>
const log = () => console.log('Welcome to storybook!');

export default {
  name: 'welcome',
  props: {
    showApp: {
      type: Function,
      default: log
    }
  },

  methods: {
    onClick(event) {
      event.preventDefault();
      this.showApp();
    }
  }
};
</script>

<style>
.main {
  margin: 15px;
  max-width: 600px;
  line-height: 1.4;
  font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans,
    sans-serif;
}

.logo {
  width: 200px;
}

.link {
  color: #1474f3;
  text-decoration: none;
  border-bottom: 1px solid #1474f3;
  padding-bottom: 2px;
}

.code {
  font-size: 15px;
  font-weight: 600;
  padding: 2px 5px;
  border: 1px solid #eae9e9;
  border-radius: 4px;
  background-color: #f3f2f2;
  color: #3a3a3a;
}

.note {
  opacity: 0.5;
}
</style>
