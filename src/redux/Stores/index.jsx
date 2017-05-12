import thunk from "redux-thunk"; // redux-thunk 支持 dispatch function，并且可以异步调用它
import {createLogger} from "redux-logger";
import {createStore, applyMiddleware, compose} from "redux";
import DevTools from './DevTools' // 引入DevTools调试组件

//调用日志打印方法
const loggerMiddleware = createLogger();

//创建一个中间件集合，注意thunk最好配置在第一个，因为中间件是顺序敏感的
const middleware = [thunk, loggerMiddleware];

const finalCreateStore = compose(
    applyMiddleware(...middleware),
    DevTools.instrument(),
)(createStore);

export default finalCreateStore