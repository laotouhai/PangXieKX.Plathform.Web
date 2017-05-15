import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
class LeftMenu extends React.Component {
    constructor(props) {
        super(props);
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

                <ul className="nav nav-list">
                    {
                    this.props.menus.map((e, index) => 
                    <li className={index == 0 ? "active" : ""}>
                        <a href={e.chindren != undefined ? "#" : e.MenuUrl} className={e.chindren != undefined ? "" : "dropdown-toggle"}>
                            <i className={e.MenuIcon}></i>
                            <span className="menu-text"> {e.MenuName} </span>
                            {e.chindren != undefined ? <b className="arrow icon-angle-down"></b> : ""}
                        </a>
                    </li>
                    )}
                </ul>

                <div className="sidebar-collapse" id="sidebar-collapse">
                    <i className="icon-double-angle-left" data-icon1="icon-double-angle-left" data-icon2="icon-double-angle-right"></i>
                </div>
            </div>
        );
    }
}

export default LeftMenu;