// index.js
 
// applyMiddleware: redux通过该函数来使用中间件
// createStore: 用于创建store实例
import {createStore} from 'redux'
import state from './state'

// 创建store实例 第一个参数是reducer集合（reducers），第二个参数初始化的store（initialState），第三个参数是applyMiddleware函数，来使用中间件。
let store = createStore(
    ()=>{},
    state
)
   
export default store