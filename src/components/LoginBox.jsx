import React from 'react';

class LoginBox extends React.Component
{
	componentDidMount(){

	}
	render(){
		return(
            <div className="position-relative">
                <div id="login-box" className="login-box visible widget-box no-border">
                    <div className="widget-body">
                        <div className="widget-main">
                            <h4 className="header blue lighter bigger">
                                <i className="icon-coffee green"></i>
                                请输入您的登录信息
                            </h4>
                            <form>
                                <fieldset>
                                    <label className="block clearfix">
                                        <span className="block input-icon input-icon-right">
                                            <input type="text" className="form-control" placeholder="用户名" />
                                            <i className="icon-user"></i>
                                        </span>
                                    </label>
                                    <label className="block clearfix">
                                        <span className="block input-icon input-icon-right">
                                            <input type="password" className="form-control" placeholder="密码" />
                                            <i className="icon-lock"></i>
                                        </span>
                                    </label>
                                    <div className="space"></div>
                                    <div className="clearfix">
                                        <label className="inline">
                                            <input type="checkbox" className="ace" />
                                            <span className="lbl"> 下次自动登录</span>
                                        </label>
                                        <button type="button" className="width-35 pull-right btn btn-sm btn-primary">
                                            <i className="icon-key"></i>
                                            登录
                                        </button>
                                    </div>
                                    <div className="space-4"></div>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
		);
	}
}

export default LoginBox;
