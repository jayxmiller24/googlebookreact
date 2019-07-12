import React from 'react';
import Jumbotron from "../../components/Jumbotron";
import { Input, FormBtn } from "../../components/Form";
import api from "../../utils/googleApi.js";

import SubmitButton from "../../components/SubmitButton";




class Wrapper extends React.Component {

    state = {
        result: [],
        search: "",
    
    
      };
      componentDidMount() {
        this.searchBooks("IT");
    
      }
    
      handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };
    
    
      searchBooks = query => {
        api.search(query)
          .then(res => this.setState({ result: res.data.items }))
          .catch(err => console.log(err));
      };
      handleFormSubmit = event => {
        event.preventDefault();
        this.searchBooks(this.state.search);
    
      };

      
    
    render() {
        return (


            <div className="container">
                <Jumbotron>
                    <h1>Google Books React</h1>
                </Jumbotron>
                <form>
                    <Input
                        value={this.state.search}
                        onChange={this.handleInputChange}
                        name="search"
                        placeholder="Title (required)"
                    />
                    <FormBtn
                        onClick={this.handleFormSubmit}
                    >
                        Submit Book
                          </FormBtn>
                </form>
                <ul className="list-group">
                    {this.state.result.map(results => (
                        <li className="list-group-item" key={results.id}>
                            <h5>Title: {results.volumeInfo.title}</h5>
                            
                            <h5>Author:{results.volumeInfo.authors}</h5>
                            <img src={results.volumeInfo.imageLinks.smallThumbnail} alt={results.volumeInfo.title} />
                            <h5>Description: {results.volumeInfo.description}</h5>
                            <h5><a href={results.volumeInfo.infoLink}>Link</a></h5>
                             <SubmitButton 
                                bookid={results.id}
                                booktitle={results.volumeInfo.title}
                                bookauthor = {results.volumeInfo.authors[0]}
                                bookdescriptions={results.volumeInfo.description}
                                bookinfo = {results.volumeInfo.infoLink}
                                bookimage = {results.volumeInfo.imageLinks.smallThumbnail}

                            /> 
                        </li>
                    ))}
                </ul>




            </div>

        )
    }


}

export default Wrapper;