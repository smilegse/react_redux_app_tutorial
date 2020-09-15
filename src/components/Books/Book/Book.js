import React, { Component } from 'react';

class Book extends Component {

    state = {
        isEditable: false
    }


    render() {

        let output = this.state.isEditable ? 
                    <input type='text' placeholder='Enter your Name' value={ this.props.book.name } />  
                    : <p> { this.props.book.name } </p> 

        return (


                <li className='list-group-item d-flex'>
                    { output }
                    <span className='ml-auto'> ${ this.props.book.price } </span>
                    <div className='mx-4'>
                        <button className='btn btn-primary btn-sm m-1' onClick= { () => this.setState({ isEditable: true }) } > <i className="fas fa-edit"></i> </button>
                        <button className='btn btn-danger btn-sm m-1' onClick= { () => this.props.deleteHandler(this.props.book.id) } > <i className="fas fa-trash"></i> </button>
                    </div>

                </li>
                
        );
    }
}

export default Book;