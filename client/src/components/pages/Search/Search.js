import React, { Component } from 'react'
import NavBar from '../../NavBar/NavBar';
import Jumbotron from '../../Jumbotron/Jumbotron';
import SearchForm from '../../SearchForm/SearchForm';
import axios from 'axios';
const API_KEY = process.env.REACT_APP_API_KEY; 

class Search extends Component {
    state = {
        search: "",
        books: [],
    }

    componentDidMount() {
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
    };

    handleSubmit = event => {
        event.preventDefault()
        console.log('hello')
        const searchValue = this.state.search
        console.log(searchValue)
        axios.get(`https://www.googleapis.com/books/v1/volumes/?q=${searchValue}&key=${API_KEY}`).then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    };

    render() {
        return (
            <React.Fragment>
                <NavBar/>
                <Jumbotron/>
                <SearchForm
                    title={this.state.search}
                    value={this.state.search}
                    name="search"
                    handleChange={this.handleChange}
                    handleSubmit={this.handleFormSubmit}
                />
            </React.Fragment>
        )
    }
}

export default Search;

