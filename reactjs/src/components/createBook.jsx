import React, { useState, useEffect } from 'react'
import BookService from '../services/bookService';
import { useParams, Link, useNavigate } from 'react-router-dom';

const CreateBook = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [name, setName] = useState('')
    const [author, setAuthor] = useState('')
    const [genre, setGenre] = useState('')

    useEffect(() => {
        if (id === '_add') {
            return
        } else {
            BookService.getBookById(id).then((res) => {
                let book = res.data;
                setName(book.name)
                setAuthor(book.author)
                setGenre(book.genre)
            });
        }
    }, [id])

    const saveOrUpdateBook = (e) => {
        e.preventDefault();
        let book = { name: name, author: author, genre: genre };
        console.log('book => ' + JSON.stringify(book));

        if (id === '_add') {
            BookService.createBook(book).then((res) => {
                navigate("/books")
            });
        } else {
            BookService.updateBook(book, id).then(res => {
                navigate("/books")
            });
        }
    }

    const changeNameHandler = (event) => {
        setName(event.target.value);
    }

    const changeAuthorHandler = (event) => {
        setAuthor(event.target.value);
    }

    const changeGenreHandler = (event) => {
        setGenre(event.target.value);
    }

    return (
        <div>
            <br></br>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label> Title: </label>
                                    <input placeholder="Book Name" name="name" className="form-control"
                                        value={name} onChange={changeNameHandler} />
                                </div>
                                <div className="form-group">
                                    <label> Author: </label>
                                    <input placeholder="Author Name" name="author" className="form-control"
                                        value={author} onChange={changeAuthorHandler} />
                                </div>
                                <div className="form-group">
                                    <label> Genre: </label>
                                    <input placeholder="Genre Name" name="genre" className="form-control"
                                        value={genre} onChange={changeGenreHandler} />
                                </div>
                                <br />
                                <button onClick={saveOrUpdateBook} className="btn btn-success" >Save </button>
                                <Link to={`/books`} className="btn btn-danger" style={{ marginLeft: "10px" }}> Cancel </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default CreateBook