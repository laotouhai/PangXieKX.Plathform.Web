import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import LeftMenuRun from './Leftmenu.run'

class LeftMenu extends React.Component {
    constructor(props) {
        super(props);
    }

    /*    
    渲染完毕后绑定事件
    */    
    componentDidUpdate() {
        LeftMenuRun();
    }

    /**
    * 递归生成菜单树
    * @param menutrees
    * @returns {Array}
    */
    generateMenu(menutrees,length) {
        let vdom = [];
        
        if (menutrees instanceof Array) {
            let list = [];
            for (var item of menutrees) {
                list.push(this.generateMenu(item,length));
            }
            if(menutrees.length > 0) {
                vdom.push(
                    <ul key={new Date().getTime()} className={menutrees.length == length ? "nav nav-list" : "submenu"}>
                        {list}
                    </ul>
                );
            }
        } else {
            vdom.push(
                <li key={new Date().getTime()} className={menutrees.Id == 1 ? "active" : ""}>
                    <a href={menutrees.children.length>0 ? "#" : menutrees.MenuUrl} className={menutrees.children.length>0 ? "dropdown-toggle" : ""}>
                        <i className={menutrees.MenuIcon}></i>
                        <span className="menu-text"> {menutrees.MenuName} </span>
                        {menutrees.children.length>0 ? <b className="arrow icon-angle-down"></b> : ""}
                    </a>
                    {this.generateMenu(menutrees.children,length)}
                </li>
            );
        }
        return vdom;
    }
    render(){
        return(
            <div className="sidebar" id="sidebar">
                <div className="sidebar-shortcuts" id="sidebar-shortcuts">
                    <div className="sidebar-shortcuts-large" id="sidebar-shortcuts-large">
                        <button className="btn btn-success">
                            <i className="icon-signal"></i>
                        </button>

                        <button className="btn btn-info">
                            <i className="icon-pencil"></i>
                        </button>

                        <button className="btn btn-warning">
                            <i className="icon-group"></i>
                        </button>

                        <button className="btn btn-danger">
                            <i className="icon-cogs"></i>
                        </button>
                    </div>

                    <div className="sidebar-shortcuts-mini" id="sidebar-shortcuts-mini">
                        <span className="btn btn-success"></span>

                        <span className="btn btn-info"></span>

                        <span className="btn btn-warning"></span>

                        <span className="btn btn-danger"></span>
                    </div>
                </div>
                
                {this.generateMenu(this.props.menus,this.props.menus.length)}
                <div className="sidebar-collapse" id="sidebar-collapse">
                    <i className="icon-double-angle-left" data-icon1="icon-double-angle-left" data-icon2="icon-double-angle-right"></i>
                </div>
            </div>
        );
    }
}

export default LeftMenu;