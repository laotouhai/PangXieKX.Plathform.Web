const RECEIVE_MENUS = 'RECEIVE_MENUS'

//系统菜单状态加载
export const recieve_menus = (data) => {
    return{
        type:RECEIVE_MENUS,
        data,
    }
}

function fetchPosts() {
    return dispatch => {
        return fetch('./menus.json')
            .then((res) => { console.log(res.status); return res.json() })
            .then((data) => {
                dispatch(menusAction(data))
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