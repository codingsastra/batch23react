import React,  {Component} from 'react'
import BookList from './BookList';
import Wishlist from './Wishlist';
import { throws } from 'assert';

class Library extends Component{
    constructor(){
        super();

        var books=[
            {
                id:1,
                title:"JS Fundamentals"
            },
            {
                id:2,
                title:"React Beginner"
            },
            {
                id:3,
                title:"Node in action"
            }
        ]

        this.state={
            books:books,
            wishlist:[]
        }
    }

    addToWishlist=(book)=>{
        console.log(JSON.stringify(book))
        this.setState({
            wishlist:[
                ...this.state.wishlist,
                book
            ]
        })
    }

    render(){
        return(
            <>
                <h1>Library</h1>
                <BookList books={this.state.books} addToWishlist={this.addToWishlist}/>
                <Wishlist books={this.state.wishlist}/>
            </>
        )
    }
}

export default Library;