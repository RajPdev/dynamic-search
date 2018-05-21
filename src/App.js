import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll'


class App extends Component {
	constructor() {
		super()
		this.state = {
			per: [],
			searchfield: ''
		}
	}

componentDidMount() {
	fetch('https://jsonplaceholder.typicode.com/users').then(response=> {
		return response.json();
	})
	.then(monsters => {
	this.setState({ per:monsters })
	})
}

	OnSearchChange = (event) =>{
		this.setState({ searchfield: event.target.value })
		}

	render() {
		const filterMonster=this.state.per.filter(monster =>{
			return monster.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		if (this.state.per.length===0) {
		return <h1>Loading</h1>}
		else {

		return  (
		<div className='tc'>
		<h1>Pick Your Monster</h1>
		<SearchBox searchChange={this.OnSearchChange} />

		<Scroll>
		<CardList per={filterMonster}/>
		</Scroll>
		</div>
	);
	}	
	}
}

export default App;