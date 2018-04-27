import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyACaJJh05-lMN9DbO0cvnorV5sKFyO91TM';

const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	)
}

ReactDOM.render(<App />, document.querySelector('.container'))
