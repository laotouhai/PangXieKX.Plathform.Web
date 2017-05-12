const REQUEST_MENUS = 'REQUEST_MENUS'
const RECEIVE_MENUS = 'RECEIVE_MENUS'

// 初始化state数据
const initialState = {data:[], isFetching: false}
//首次渲染时获取数据
export default function leftmenu(state = initialState, action = {}){
    switch(action.type){
        case REQUEST_MENUS:
            return state.set('isFetching',true);
        case RECEIVE_MENUS:
            return Object.assign({}, state, { data: action.json, isFetching : false })
        default:
            return state;
    }
}
