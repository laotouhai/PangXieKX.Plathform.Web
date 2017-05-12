const REQUEST_MENUS = 'REQUEST_MENUS'

//系统菜单状态加载
export const menusAction = (data) => {
    return{
        type:REQUEST_MENUS,
        data,
    }
}

function fetchPosts() {
    return dispatch => {
        return fetch('../../containers/layout/menus.json')
            .then((res) => { console.log(res.status); return res.json() })
            .then((data) => {
                dispatch(getSuccess(data))
            })
            .catch((e) => { console.log(e.message) })
        }
}

// 这里的方法返回一个函数进行异步操作
export function fetchPostsIfNeeded() {
    return (dispatch, getState) => {
        return dispatch(fetchPosts())
    }
}