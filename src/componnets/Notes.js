import React, {Component} from 'react'
import styles from '../css/Notes.css'

class Notes extends Component {
	render() {
		return (
			<div className="notes">
				{this.props.idea}
			</div>
		)
	}
}

export default Notes