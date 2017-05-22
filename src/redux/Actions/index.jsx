import * as types from '../constants/LeftmenuTypes';

const apiUrl = __API_URL__;
const memberMenuApiUrl = apiUrl + '/MemberMenu';

//系统菜单状态加载
export const recieve_menus = (data) => {
    return{
        type:types.RECEIVE_MENUS,
        data,
    }
}

function fetchPosts() {
    return dispatch => {
        return fetch(memberMenuApiUrl)
            .then((res) => { console.log(res.status); return res.json() })
            .then((data) => {
                dispatch(recieve_menus(data))
            })
            .catch((e) => { console.log(e.message) })
    }
}

// 返回一个函数进行异步操作
export function fetchMenus() {
    return (dispatch, getState) => {
        return dispatch(fetchPosts())
    }
}