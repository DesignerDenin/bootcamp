import React, { useEffect, useState } from 'react'
import BookService from '../services/bookService'
import { Link } from 'react-router-dom'

const ListBook = () => {
    const [books, setBooks] = useState([])

    useEffect(() => {
        BookService.getBooks().then((res) => {
            setBooks(res.data)
        });
    }, [])

    const deleteBook = (id) => {
        BookService.deleteBook(id).then(res => {
            setBooks(books.filter(book => book.id !== id))
        });
    }

    return (
        <div>
            <br />
            <h2 className="text-center">Books List</h2>
            <br />
            <div className="row">
                <Link to={`/add-book/_add`} className="btn btn-primary"> Add Book </Link>
            </div>
            <br />
            <div className="row">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th> Title </th>
                            <th> Author </th>
                            <th> Genre </th>
                            <th> .. </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            books.map(
                                book =>
                                    <tr key={book.id}>
                                        <td> {book.name} </td>
                                        <td> {book.author}</td>
                                        <td> {book.genre}</td>
                                        <td>
                                            <Link to={`/add-book/${book.id}`} className="btn btn-info"> Update </Link>
                                            <Link to={`/view-book/${book.id}`} className="btn btn-info" style={{ marginLeft: "10px" }}> View </Link>
                                            <button style={{ marginLeft: "10px" }} onClick={() => deleteBook(book.id)} className="btn btn-danger">Delete </button>
                                        </td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}


export default ListBook