import React, {Component} from 'react'
import Idea from './Idea'
import style from '../css/Main.css'

class Main extends Component {
	constructor(props) {
		super(props);

	}
	render() {
		return (
			<section className="main">
				<h1 className="title">
					{this.props.text}
				</h1>
				<h3 className="sub-title">
					{this.props.subText}
				</h3>
				<Idea />
			</section>
		)
	}
}

export default Main