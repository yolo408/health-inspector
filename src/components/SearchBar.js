import React from 'react'

class SearchBar extends React.Component{

    constructor(){
        super()

        this.state = {
            search: ''
        }
    }

    handleSearchChange =  (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    render(){
        this.state.search
        return (
        
            <div className="searchbar-container">
                <form classname ="search-form">
                     <input 
                         type ="search"
                         name ="search"
                         value = {this.state.search}
                         className = "search-input"
                         placeholder = "Search Restaurants"
                         onChange = {this.handleSearchChange}
                    />

                </form>


            </div>

        )

    }

}
export default SearchBar