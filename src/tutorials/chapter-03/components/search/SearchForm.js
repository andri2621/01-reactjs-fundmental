import React, { Component } from 'react'
import styled from 'styled-components';
import {withRouter} from 'react-router-dom';

export const Search = styled.div`
	display: flex;
	flex-direction: row;
	flex: 10%;
	margin-left: 30px;
	justify-content: space-around;
	justify-items: flex-start;
	input {
		background-color: #fff;
		border-radius: 4px;
		border: 1px solid #ccc;
		font-size: 14px;
		margin-bottom: 5px;
		margin-right: 3px;
		height: 35px;
		box-shadow: insert 0 1px rgba(0, 0, .75);
	}
`;

 class SearchForm extends Component {
   state = {
     search:''
   }

   handleOnChange = e =>{
     const {value} = e.target;
     this.setState({search:value});
   }

   handleOnSubmit = e =>{
     //console.log(this.state.search);
     e.preventDefault();
     this.props.history.push(`/searchMovie/${this.state.search}`);
   }

  render() {
    const {search} = this.state;
    return (
      <Search>
        <form onSubmit={this.handleOnSubmit}>
          <input 
            placeholder="Find Movies..."
            value={search}
            onChange={this.handleOnChange}
          />
        </form>
      </Search>
    )
  }
}

export default withRouter(SearchForm);

