import React from 'react';
import {connect} from 'react-redux';

import LeftMenu from '../../components/layout/LeftMenu';
import *as action from '../../Redux/Actions/Index';

class LeftMenuContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {//获取数据
    this.props.fetchMenus();
  }

  render() {
    return(
            <LeftMenu menus={this.props.menus} />
        );
    }
}

const getMenus = state => {
    return {
        menus: state.leftmenu.data
    }
}

export default connect(getMenus, action)(LeftMenuContainer); //连接redux