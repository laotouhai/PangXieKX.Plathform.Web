import React from 'react';

import Header from '../components/layout/Header'
import LeftMenu from '../components/layout/LeftMenu'
import Breadcrumbs from '../components/layout/Breadcrumbs'
import Maincontent from '../components/layout/Maincontent'

import LeftMenuContainer from '../containers/layout/LeftMenuContainer'

class Base extends React.Component {

    render() {

        const animationName = 'rag-fadeIn'

        return (
            <div className="wrapper">

                <Header />

                <div className="main-container" id="main-container">
                    <script type="text/javascript">
                        try{ace.settings.check('main-container' , 'fixed')}catch(e){}
                    </script>

                    <div className="main-container-inner">
                        <a className="menu-toggler" id="menu-toggler" href="#">
                            <span className="menu-text"></span>
                        </a>

                        <LeftMenuContainer />

                        <div className="main-content">

                            <Breadcrumbs />

                            <Maincontent />

                        </div>
                    </div>

                    <a href="#" id="btn-scroll-up" className="btn-scroll-up btn btn-sm btn-inverse">
                        <i className="icon-double-angle-up icon-only bigger-110"></i>
                    </a>
                </div>
            </div>
        );
    }
}

export default Base;