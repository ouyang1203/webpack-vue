/**
 * Node中向外暴露成员的方式
 * 在ES6中定义了导入和导出模块
 * ES6中使用import 模块名称 from '模块标识符' 或者import '表示路径'
 * 使用 export default 和export向外暴露成员,可以使用任意的变量来接收,同时一个模块中export default只允许向外暴露一次
 */
var info = {
    name:'zs',
    age:23
};
export default info;
/**
 * 在一个模块中可以同时存在export default 和export向外暴露成员
 * 使用export向外暴露的成员，只能使用{}的形式来接收。这种形式叫做【按需导出】
 * 一个模块里export可以向外暴露多个成员，同时，某些成员如果我们import的时候不需要，可以不在{}中定义
 * 使用export导出的成员，必须严格按照定义的名称，在{}中接收
*/
export var title = "测试title";