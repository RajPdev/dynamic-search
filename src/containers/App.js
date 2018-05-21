import React, {Component} from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import { setSearchField, requestMonsters } from '../actions';


const mapStateToProps = (state) => {
	return  {
		searchField: state.searchMonsters.searchField,
		monsters: state.requestMonsters.monsters,
		isPending: state.requestMonsters.isPending,
		error: state.requestMonsters.error
	}
}

const mapDispatchToProps = (dispatch) => {
	return{	
		onSearchChange: (event) => 	dispatch(setSearchField(event.target.value)),
		onRequestMonsters: () => dispatch(requestMonsters())
	}
} 


class App extends Component {
	componentDidMount() {
	this.props.onRequestMonsters();
}

render() {
	const { searchField, onSearchChange, monsters, isPending } = this.props;
	const filterMonster=monsters.filter(monster =>{
			return monster.name.toLowerCase().includes(searchField.toLowerCase());
		})
		return isPending ?
		<h1>Loading</h1>:
		(
		<div className='tc'>
		<h1>Pick Your Monster</h1>
		<SearchBox searchChange={onSearchChange} />

		<Scroll>
		<CardList monsters={filterMonster}/>
		</Scroll>
		</div>
	);
	
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);