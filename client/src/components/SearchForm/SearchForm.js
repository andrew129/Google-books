import React from 'react';
import './style.css';

const SearchForm = props => {
    return (
        <form>
            <p>Search: {props.title}</p>
            <div className="form-group">
                <label htmlFor="book">Book</label>
                <input name="search" value={props.search} onChange={props.handleInputChange} type="text" className="form-control" aria-describedby="emailHelp" placeholder="Enter Book Name"></input>
            </div>
            <button type="submit" onSubmit={props.handleFormSubmit} className="btn btn-primary">Submit</button>
        </form>
    )
}

export default SearchForm;
