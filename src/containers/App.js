import React, { Component } from 'react';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import './App.css';
import ErrorBoundary from '../components/ErrorBoundary';

class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: [],
			searchField: ''
		}
		this.onSearchChange = this.onSearchChange.bind(this);
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
  			.then( response => response.json() )
  			.then( users => {this.setState({ robots: users })} );

	}
	onSearchChange (event) {
		this.setState({ searchField: event.target.value });
	}

	render() {
		const { robots, searchField } = this.state;
		const filtered = robots.filter( (robot) => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase())
		});
		if (!robots.length) {
			return(
				<h1>Loading...</h1>
			);
		}
		return(
			<div className="tc">
				<h1 className='f2'>KitKat Friends</h1>
				<SearchBox searchChange={this.onSearchChange} /><hr/>
				<Scroll >
					<ErrorBoundary>
		    			<CardList robots={ filtered }/>
		    		</ErrorBoundary>
		    	</Scroll>
		    </div>
		);		
	}
}
export default App;