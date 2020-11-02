# 从 2.x 升级 3.x

在beta阶段，官方是推荐使用 [vite](https://github.com/vitejs/vite) 进行项目构建，因此脚手架是需要自己搭的，搭也不是搭不起来，跑个demo肯定没问题。

但是日常的业务会有很多自定义的东西，包括插件使用，以前封装好的各种类库和组件，兼容起来就比较难搞，还有一些个性化的配置，比如在 `@vue/cli` 很常用的 `vue.config.js` ， `vite` 到了 `0.14.0` 版本以后才开始支持 `vite.config.js`，就很折腾人了，用起来没有这么痛快。

现在，官方脚手架 `@vue/cli` 目前已经可以直接创建 `3.0` 的项目了，我们先按照 `@vue/cli` 的方法来处理我们的项目，避免步伐太大扯到蛋，关于 `vite` 稍后再统一总结。

## 更新脚手架

老规矩，还是全局安装，把脚手架更新到最新版本。

```js
npm install -g @vue/cli
```

## 创建 3.x 项目

还是熟悉的命令。

```js
vue create vue-3-ts-demo
```

由于我们要使用ts，所以需要选择最后一个选项来进行自定义搭配。

```js
Vue CLI v4.5.8
? Please pick a preset:
  vue-config ([Vue 2] stylus, babel, router, eslint)
  vue-3-ts-config ([Vue 3] stylus, babel, typescript, router, vuex, eslint)
  Default ([Vue 2] babel, eslint)
  Default (Vue 3 Preview) ([Vue 3] babel, eslint)
> Manually select features
```

我上面的 `vue-3-ts-config` 预设，就是选择了下面这些东西。

```js
Vue CLI v4.5.8
? Please pick a preset: Manually select features
? Check the features needed for your project:
>(*) Choose Vue version
 (*) Babel
 (*) TypeScript
 ( ) Progressive Web App (PWA) Support
 (*) Router
 (*) Vuex
 (*) CSS Pre-processors
 (*) Linter / Formatter
 ( ) Unit Testing
 ( ) E2E Testing
```

选择vue版本，目前由于3.0才发布不久，所以脚手架还支持同时使用2和3的vue，我们本次选择3.x

```js
? Choose a version of Vue.js that you want to start the project with
  2.x
> 3.x (Preview)
```

是否选择class语法的模板，这个选项是针对ts的，在2.x版本为了更好的写ts，通常需要使用class语法。

因为3.0有更好的composition api，所以我们选择“否”

```js
? Use class-style component syntax? (y/N) n
```

babel必须的…

```js
? Use Babel alongside TypeScript (required for modern mode, auto-detected polyfills, transpiling JSX)? (Y/n) y
```

路由模式（hash还是history），这个根据自己项目情况选择。

```js
? Use history mode for router? (Requires proper server setup for index fallback in production) (Y/n) y
```

选择一个css预处理器，可以根据自己的喜好选择，我自己是喜欢用stylus。

```js
? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default):
  Sass/SCSS (with dart-sass)
  Sass/SCSS (with node-sass)
  Less
> Stylus
```

lint规则，根据自己喜好选择，我是默认。

```js
? Pick a linter / formatter config: (Use arrow keys)
> ESLint with error prevention only
  ESLint + Airbnb config
  ESLint + Standard config
  ESLint + Prettier
  TSLint (deprecated)
```

lint的校验时机，我是默认在保存时校验。

```js
? Pick additional lint features: (Press <space> to select, <a> to toggle all, <i> to invert selection)
>(*) Lint on save
 ( ) Lint and fix on commit
```

项目配置文件，我习惯独立文件。

```js
? Where do you prefer placing config for Babel, ESLint, etc.? (Use arrow keys)
> In dedicated config files
  In package.json
```

是否保存为未来的项目配置，存起来方便以后快速创建。

```js
? Save this as a preset for future projects? Yes
? Save preset as: vue-3-ts-config
```

至此，项目创建完成！

你可以跟原来一样，通过 `npm run serve` 开启热更进行开发调试，通过 `npm run build` 构建打包上线。

## 添加项目配置

用脚手架最重要的一个配置文件就是 `vue.config.js` 了，你可以拷贝你之前项目下的这个文件过来，就立即可以用。

如果之前没有用过脚手架，也可以用我常用的配置做参考。

具体的各个选项说明和调整可以参考官网的说明文档：[配置参考 | Vue CLI](https://cli.vuejs.org/zh/config/)

```js
const webpack = require('webpack');
const path = require('path');
const resolve = dir => path.join(__dirname, dir);

module.exports = {
  publicPath: '/',
  assetsDir: 'static',
  productionSourceMap: false,
  lintOnSave: false,
  devServer:{
    port: 1234,
    disableHostCheck: true,
    // proxy: {
    //   '/xxx': {
    //     target: 'https://xxx.com/xxx',
    //     ws: true,
    //     changOrigin: true
    //   }
    // }
  },
  // css: {
  //   loaderOptions: {
  //     // css: {
  //     // // options here will be passed to css-loader
  //     // },
  //     postcss: {
  //       // options here will be passed to postcss-loader
  //       plugins: [
  //         require('postcss-px2rem')({
  //           remUnit: 75
  //         })
  //         // require('postcss-px-to-viewport')({
  //         //   viewportWidth: 750,
  //         //   minPixelValue: 1
  //         // })
  //       ]
  //     }
  //   }
  // },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@img',resolve('src/assets/img'))
      .set('@styl',resolve('src/assets/styl'))
      .set('@js',resolve('src/assets/js'))
      .set('@ts',resolve('src/assets/ts'))
      .set('@fonts', resolve('src/assets/fonts'))
      .set('@css', resolve('src/assets/css'))
      .set('@libs',resolve('src/libs'))
      .set('@cp',resolve('src/components'))
      .set('@views',resolve('src/views'))
      .set('@plugins',resolve('src/plugins'))
      .end()
    config.module
      .rule('images')
        .test(/\.(png|jpe?g|gif|webp|svg)(\?.*)?$/)
        .use('url-loader')
          .loader('url-loader')
          .options({
            limit: 10000,
            fallback: {
              loader: 'file-loader',
              options: {
                name: 'static/img/[name].[hash:8].[ext]'
              }
            }
          })
        .end()
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV !== 'production') return;
    return {
      plugins: [
        new webpack.BannerPlugin(' The roject developed by chengpeiquan! ')
      ]
    };
  }
}
```

## 添加协作规范

考虑到后续可能会有团队协作，我们最好是能够统一编码风格，所以建议在项目根目录下再增加一个 `.editorconfig` 文件。

这个文件的作用是强制编辑器以该配置来进行编码，比如缩进统一为空格而不是tab，每次缩进都是2个空格而不是4个等等。

文件内容如下：

```js
# http://editorconfig.org
root = true

[*]
charset = utf-8
end_of_line = lf
indent_size = 2
indent_style = space
insert_final_newline = true
max_line_length = 80
trim_trailing_whitespace = true

[*.md]
max_line_length = 0
trim_trailing_whitespace = false
```

具体的参数说明可参考：[项目代码风格统一神器 editorconfig的作用与配置说明](https://chengpeiquan.com/article/editorconfig.html)

## 本章小结

这一章就到这里了，不打算一次性总结vue3的变化，因为网上实在太多了，而且一次性汇总太多东西，其实很容易看完就忘了。

我打算在每一章节涉及到的内容里面，再单独和2.x进行对比，这样比较能加深各个功能模块的记忆。