import React from 'react';

class Header extends React.Component
{
	componentDidMount(){

	}
	render(){
		return(
			<div className="navbar navbar-default" id="navbar">
				<script type="text/javascript">
					try{ace.settings.check('navbar' , 'fixed')}catch(e){}
				</script>

				<div className="navbar-container" id="navbar-container">
					<div className="navbar-header pull-left">
						<a href="#" className="navbar-brand">
							<small>
								<i className="icon-leaf"></i>
								螃蟹快修管理平台
							</small>
						</a>
					</div>
				</div>
			</div>
		);
	}
}

export default Header;
