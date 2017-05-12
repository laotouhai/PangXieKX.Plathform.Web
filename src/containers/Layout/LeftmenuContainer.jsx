import React from 'react';
import {connect} from 'react-redux';

import LeftMenu from '../../components/layout/LeftMenu';
import *as action from '../../Redux/Actions/Index';

class LeftMenuContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    
  }
  render() {
    const { menus } = this.props.menus
    return(
            <LeftMenu menus={menus} />
          );
  }
}

const getMenus = state => {
    return {
        menus: state.updateMenus
    }
}

export default connect(getMenus, action)(LeftMenuContainer); //连接redux