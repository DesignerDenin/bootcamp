import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/books";

class BookService {

    getBooks(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createBook(book){
        return axios.post(EMPLOYEE_API_BASE_URL, book);
    }

    getBookById(bookId){
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + bookId);
    }

    updateBook(book, bookId){
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + bookId, book);
    }

    deleteBook(bookId){
        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + bookId);
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new BookService()