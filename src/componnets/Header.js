import React, {Component} from 'react'
import style from '../css/Header.css'

class Header extends Component {
	constructor(props) {
		super(props);
		this.state =
			{
				brief: "Nikulio & Co. development. What a pleasure!"
			}
	}

	render() {
		return (
			<section className="header">
				<div className="logo">
					<img src="./n-logo.svg" alt=""/>
				</div>
				<div className="brief">
					{this.state.brief}
				</div>
			</section>
		)
	}
}

export default Header