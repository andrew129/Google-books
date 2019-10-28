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

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
    };

    handleSubmit = event => {
        console.log('hello')
        event.preventDefault()
        const searchValue = this.state.search
        console.log(searchValue)
        axios.get(`https://www.googleapis.com/books/v1/volumes/?q=${searchValue}&key=AIzaSyDy5YDtxcY811zWrBkj4EIcC1iAM6RQpw8`).then(res => {
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
                    handleSubmit={this.handleSubmit}
                />
            </React.Fragment>
        )
    }
}

export default Search;

