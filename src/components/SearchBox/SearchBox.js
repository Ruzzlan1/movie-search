import React, { Component } from 'react';
import './SearchBox.css';

class SearchBox extends Component { 
    render() {
        return (
            <div className="search-box">
                <form className="search-box__form" onSubmit={(e) => this.props.movieRequest(e)}>
                    <label className="search-box__form-label">
                         Search movies by title:
                        <input
                            onChange = {(e) => this.props.changeMovies(e)}
                            name = 'nameMuvei'
                            value={this.props.searchMovies}
                            type="text"
                            className="search-box__form-input"
                            placeholder="For example, Shawshank Redemption"                          
                        />
                    </label>
                    <button
                        type="submit"
                        className="search-box__form-submit"
                        disabled={!this.props.searchMovies}
                    >
                        Search
                    </button>
                </form>
            </div>
        );
    }
}
 
export default SearchBox;