import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";



class Saved extends Component {



    state = {
        books: [],
        title: "",
        author: "",
        description: "",
        img_Url: "",
        link: ""
    };

    componentDidMount() {
        this.loadBooks();
    };

    loadBooks = () => {
        API.getBooks()
            .then(res =>
                this.setState({ books: res.data, title: "", author: "", description: "", link: "" })
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
            

            </div>
        )
    }

} 


export default Saved;

