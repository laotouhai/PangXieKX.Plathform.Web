import React from 'react';

import LoginBox from '../components/LoginBox'

class Login extends React.Component {

    render() {
        return(
            <body className="login-layout">
                <div className="main-container">
                    <div className="main-content">
                        <div className="row">
                            <div className="col-sm-10 col-sm-offset-1">
                                <div className="login-container">
                                    <div className="center">
                                        <h1>
                                            <span className="red">螃蟹快修管理平台</span>
                                        </h1>
                                        <h4 className="blue">©江西螃蟹云购信息技术有限公司</h4>
                                    </div>
                                    <div className="space-6"></div>
                                    <LoginBox />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        );
    }
}

export default Login;