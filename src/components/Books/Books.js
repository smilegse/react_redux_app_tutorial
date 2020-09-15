import React, { Component } from 'react';
import Book from './Book/Book';

class Books extends Component {
    
    render() {
        return (
            <div>
                {
                    this.props.books.map(book => {
                        return (
                            <Book deleteHandler={ this.props.deleteHandler } book = {book} />
                        )
                    })

                }
                {/* <ul className=''>
                    <Book />
                </ul> */}
                
            </div>
        );
    }
}

export default Books;