import React from 'react';

class Breadcrumbs extends React.Component {
    render() {
        return(
            <div className="breadcrumbs" id="breadcrumbs">
                <script type="text/javascript">
                    try{ace.settings.check('breadcrumbs' , 'fixed')}catch(e){}
                </script>

                <ul className="breadcrumb">
                    <li>
                        <i className="icon-home home-icon"></i>
                        <a href="#">首页</a>
                    </li>
                    <li className="active">控制台</li>
                </ul>

                <div className="nav-search" id="nav-search">
                    <form className="form-search">
                        <span className="input-icon">
                            <input type="text" placeholder="搜索..." className="nav-search-input" id="nav-search-input" />
                            <i className="icon-search nav-search-icon"></i>
                        </span>
                    </form>
                </div>
            </div>
        );
    }
}

export default Breadcrumbs;
