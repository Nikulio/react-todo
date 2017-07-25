import React, {Component} from 'react';
import styles from '../css/Idea.css'



class Idea extends Component {

	constructor(props) {

		super(props);
		this.state = {
			userInput: '',
			visible: false,
			note: '',
			notesArray: []
		};

		this.handleUserInput = this.handleUserInput.bind(this);
		this.submitNote = this.submitNote.bind(this)
	}

	handleUserInput(e) {
		this.setState({
			visible: true,
			userInput: e.target.value,
		})
		console.log(this.state.visible)
	}

	submitNote(e) {
		let text = this.state.userInput;
		let array = this.state.notesArray;
		array.push(text);
		this.setState({
			userInput: '',
		})

	}


	render() {

		const notesPreview = [];
		const notesArray = this.state.notesArray;
		for (let i in notesArray) {
			notesPreview.push(<div className="note-item">{notesArray[i]}</div>);
		}

		return (
			<div>
				<div className="user-idea">
					<input placeholder="Just start typing..."
					       value={this.state.userInput}
					       onChange={this.handleUserInput}
					       type="text"/>

				</div>

				{this.state.visible &&
				<div>
					<div className="buttons">
						<a href="#" onClick={this.submitNote} className="button">Save</a>
						<a href="#" className="button">Delete</a>
					</div>
					<div className="data">
						<div className="preview">
							{this.state.userInput}
						</div>
						<div className="notes">
							{notesPreview}
						</div>
					</div>
				</div>
				}
			</div>
		);
	}
}

export default Idea
