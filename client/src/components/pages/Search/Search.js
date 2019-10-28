import React, { Component } from 'react'
import NavBar from '../../NavBar/NavBar';
import Jumbotron from '../../Jumbotron/Jumbotron';
import SearchForm from '../../SearchForm/SearchForm';
import axios from 'axios';

class Search extends Component {
    state = {
        search: "",
        books: [],
    }

    componentDidMount() {
    }

    handleInputChange = event => {
        console.log(event.target)
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault()
        console.log('hello')
        const searchValue = this.state.search
        console.log(searchValue)
        axios.get(`https://www.googleapis.com/books/v1/volumes/?q=${searchValue}`).then(res => {
            console.log(res)
        })
    };

    render() {
        return (
            <React.Fragment>
                <NavBar/>
                <Jumbotron/>
                <SearchForm
                    value={this.state.search}
                    name="search"
                    onChange={this.handleInputChange}
                    onSubmit={this.handleFormSubmit}
                />
            </React.Fragment>
        )
    }
}

export default Search;

