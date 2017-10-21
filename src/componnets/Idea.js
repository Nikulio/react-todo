import React, {Component} from 'react';
import styles from '../css/Idea.css'
import note_styles from '../css/Notes.css'


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
		this.deleteNote = this.deleteNote.bind(this);
		this.submitNote = this.submitNote.bind(this)
	}

	handleUserInput(e) {
		this.setState({
			visible: true,
			userInput: e.target.value,
		});
	}

	deleteNote(e) {
		let text = this.state.userInput;
		this.setState({
			userInput: '',
		})
	}

	submitNote(e) {
		let text = this.state.userInput;
		this.state.notesArray.push(text);
		this.setState({
			userInput: '',
		})
	}

	render() {
		const notesStack = this.state.notesArray;
		const notesPreview = [].reverse();
		for (let i in notesStack) {
			notesPreview.unshift(
				<div className="note-item" id={"id-" + (Number(i) + 1)}>
					<div className="note-number">{Number(i) + 1}</div>
					<div className="note-text">{notesStack[i]}</div>
				</div>
			);
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
						<a href="#" onClick={this.deleteNote} className="button">Delete</a>
					</div>
					<div className="data">
						{this.state.userInput &&
						<div className="preview">
							{this.state.userInput}
						</div>
						}
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
