import React from 'react';

import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class App extends React.Component {
	state = {
		language: 'english',
		color: 'red',
	};

	onLanguageChange = (language) => {
		const color = language === 'english' ? 'blue' : 'red';

		this.setState({
			language,
			color,
		});
	};

	render() {
		return (
			<div className="ui container">
				<div>
					Select a langauge:
					<i
						className="flag us"
						onClick={() => this.onLanguageChange('english')}
					/>
					<i
						className="flag nl"
						onClick={() => this.onLanguageChange('dutch')}
					/>
				</div>
				<ColorContext.Provider value={this.state.color}>
					<LanguageContext.Provider value={this.state.language}>
						<UserCreate />
					</LanguageContext.Provider>
				</ColorContext.Provider>
			</div>
		);
	}
}

export default App;
