import React, { useEffect, useState } from 'react'
import BookService from '../services/bookService'
import { useParams } from 'react-router-dom';

const ViewBook = () => {
    const { id } = useParams();
    const [book, setBook] = useState({})

    useEffect(() => {
        BookService.getBookById(id).then(res => {
            setBook(res.data)
        })
    }, [id] )

    return (
        <div>
            <br></br>
            <div className="card col-md-6 offset-md-3">
                <div className="card-body">
                    <div className="row">
                        <label> Book Name: </label>
                        <h3> {book.name}</h3>
                    </div>
                    <br />
                    <div className="row">
                        <label> Author Name: </label>
                        <h3> {book.author}</h3>
                    </div>
                    <br />
                    <div className="row" >
                        <label> Genre Name: </label>
                        <h3> {book.genre}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewBook