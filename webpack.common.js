const path = require('path');
const rPath = (p) => {
    return path.resolve(__dirname, p);
}
module.exports = {
    entry: {
        index: rPath('./src/index.js')
    },
    output: {
        filename: 'bundle.js',
        path: rPath('./output')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            }
        ]
    }
}