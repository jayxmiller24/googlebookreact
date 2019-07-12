import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";




class Saved extends Component {



    state = {
        books: [],
        title: "",
        author: "",
        description: "",
        bookInfo: "",
        bookImg: ""
    };

    componentDidMount() {
        this.loadBooks();
        
    };

    loadBooks = () => {
        API.getBooks()

            .then(res =>
                this.setState({ books: res.data, title: "", author: "", description: "", bookInfo: "", bookImg: "" })
            )
            
            .catch(err => console.log(err));
    };

    deleteBook = id => {
        API.deleteBook(id)
            .then(res => this.loadBooks())
            .catch(err => console.log(err));
    };




    render() {
        return (
            <div>
                <Jumbotron>
                    <h1>Books On My List</h1>

                </Jumbotron>
                <ul className="list-group">
                    {this.state.books.map(results => (
                        <li className="list-group-item" key={results.id}>
                            <h5>Title: {results.title}</h5>
                            <h5>Author:{results.authors}</h5>
                            <img src = {results.bookImg} alt={results.title} />
                            <h5>Description:{results.description}</h5>
                            <h5><a href={results.bookInfo}>Link</a></h5>
                            <DeleteBtn onClick={() => this.deleteBook(results._id)}/>
                        </li>
                    ))}

                </ul>


            </div>
        )
    }

}


export default Saved;

