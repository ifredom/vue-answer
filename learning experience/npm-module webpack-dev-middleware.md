### API

    var webpackDevMiddleware = require("webpack-dev-middleware");
    var webpack = require("webpack");

    var compiler = webpack({
        // configuration
        output: { path: '/' }
    });

    app.use(webpackDevMiddleware(compiler, {
        // options
    }));

### options
* noInfo

    - Display no info to console (only warnings and errors)
    - Default: false

* quiet

    - Display nothing to the console
    - Default: false

* lazy

    - Switch into lazy mode.
    - Default: false

    - In lazy mode: Switch request should trigger the compilation.

* filename

    - In most cases this equals the webpack configuration option output.filename.

* watchOptions.aggregateTimeout

    - Delay the rebuilt after the first change. Value is a time in ms.

    - Default: 300

* watchOptions.poll

    - true: use polling

    - number: use polling with specified interval

    - Default: undefined

* publicPath (required)

    - The path where to bind the middleware to the server.

    - In most cases this equals the webpack configuration option output.publicPath.

* headers

    - Add custom headers. i. e. { "X-Custom-Header": "yes" }

* stats

    - Output options for the stats. See node.js API.