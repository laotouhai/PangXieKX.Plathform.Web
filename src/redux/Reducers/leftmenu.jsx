const REQUEST_MENUS = 'REQUEST_MENUS'

export default function updateMenus(state = {}, action = {}){
    switch(action.type){
        case REQUEST_MENUS:
            return Object.assign({},state);
        default:
            return state;
    }
}
