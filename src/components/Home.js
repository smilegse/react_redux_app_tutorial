import React, { Component } from 'react';
// import Example from './Example'
import Books from '../components/Books/Books'

class Home extends Component {

    state = {
        name: '',
        email: '',
        books: [
            {
                id: 1,
                name: 'Javascript',
                price: 20
            },
            {
                id: 2,
                name: 'React',
                price: 30
            },
            {
                id: 3,
                name: 'Redux',
                price: 33
            },
            {
                id: 4,
                name: 'React Native',
                price: 24
            }

        ]

    }

    deleteHandler = (id) => {
        let newBooks = this.state.books.filter(book => book.id !== id)
        this.setState({
            books: newBooks
        })
    }

    changeHandler = (id, name) => {
        let editedBooks = this.state.books.map(book => {
            if (id === book.id){
                return {
                    ...book,
                    name
                }
            }

            return book
        })

        this.setState({
                books: editedBooks
            })
    }

    nameInputHandller = (event) => {
        this.setState ({
            name: event.target.value
        })
    }
    emailInputHandller = (event) => {
        this.setState ({
            email: event.target.value
        })
    }

    render() {
        return (
            <div className="container my-3">
                {/* <input type="text" onChange={ this.nameInputHandller } value={ this.state.name } placeholder="Enter your name" />
                <input type="text" onChange={ this.emailInputHandller } value={ this.state.email } placeholder="Enter your email" />
                <button className="btn btn-primary btn-small" onClick = { (event)=>{ console.log(event) }} >Click Me</button>
                { this.state.name ? <p>Hello Mr. { this.state.name } </p> : '' } 
                { this.state.email ? <p> Email: { this.state.email } </p> : '' } 
                <Example name="Md. Abu Bakar Siddique"/> */}

                <Books 
                    changeHandler= { this.changeHandler.bind(this) } 
                    deleteHandler = { this.deleteHandler.bind(this) } 
                    books = { this.state.books } 
                />
            </div>
        );
    }
}

export default Home;