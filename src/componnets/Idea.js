import React, {Component} from 'react';
import Notes from './Notes'
import styles from '../css/Idea.css'

class Idea extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userInput: ''
		};
		this.handleUserInput = this.handleUserInput.bind(this)
	}

	handleUserInput(e) {
		document.querySelector('.notes').classList.add('show');
		document.querySelector('.buttons').classList.add('show');

		this.setState({
			userInput: e.target.value
		})
	}

	render() {
		return (
			<div>
				<div className="user-idea">
					<input placeholder="Just start typing..."
					       value={this.state.userInput}
					       onChange={this.handleUserInput}
					       type="text"/>
					<div className="buttons">
						<a href="#" className="button">
							Save
						</a>
						<a href="#" className="button">
							Delete
						</a>
					</div>
				</div>
				<Notes idea={this.state.userInput}/>
			</div>
		);
	}
}

export default Idea
