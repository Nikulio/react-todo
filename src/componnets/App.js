import React, {Component} from 'react';
import Header from './Header'
import Main from './Main'

class App extends Component {
	render() {
		return (
			<div>
				<Header/>
				<Main
					text="Hello, friend!"
					subText="What is on your mind?"
				/>
			</div>
		);
	}
}

export default App;
