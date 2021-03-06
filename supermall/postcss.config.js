module.exports = {
        plugins: {
            autoprefixer: {},
            "postcss-px-to-viewport": {
                unitToConvert: "px", // 默认值`px`，需要转换的单位
                viewportWidth: 375, //视窗的宽度，对应的是我们设计稿的宽度
                viewportHeight: 667, // 视窗的高度，根据750设备的宽度来指定，一般指定1334，也可以不配置
                unitPrecision: 5, //指定`px`转换为视窗单位值的小数位数，默认是5(很多时候无法整除)
                viewportUnit: 'vw', //指定需要转换成的视窗单位，建议使用vw
                fontViewportUnit: 'vw', //指定字体需要转换成的视窗单位，默认vw;
                selectorBlackList: ['.ignore', 'tab-bar', 'tab-bar-item'], //指定不转换为视窗单位的类 
                minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位
                mediaQuery: false, // 允许在媒体查询中转换`px`，默认false
                exclude: [/TabBar/],
            }
        }
    }
    //1.在js中使用正则：/正则相关规则/
    //2.exclude中存放的元素必须是正则表达式
    //3.按照排除的文件写对应的正则
    //正则的规则：
    //1> ^abc:表示匹配的内容，必须以什么内容开头（以abc开头）
    //1> abc$:表示匹配的内容，必须以什么内结尾（以abc结尾）