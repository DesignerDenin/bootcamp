'use strict';


/**
 * Add a new book to the library
 * Add a new book to the library
 *
 * body Book Create a new book in the store
 * returns Book
 **/
exports.addBook = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "no of pages" : 200,
  "publication date" : "06-07-2020",
  "author" : "JK Rowling",
  "isbn" : 2200,
  "name" : "Harry Potter",
  "genre" : "Fantasy",
  "id" : 10
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Add a new book to the library
 * Add a new book to the library
 *
 * body Book Create a new book in the store
 * returns Book
 **/
exports.addBook = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "no of pages" : 200,
  "publication date" : "06-07-2020",
  "author" : "JK Rowling",
  "isbn" : 2200,
  "name" : "Harry Potter",
  "genre" : "Fantasy",
  "id" : 10
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Deletes a book
 * delete a book
 *
 * bookId Long Book id to delete
 * no response value expected for this operation
 **/
exports.deleteBook = function(bookId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Find available books
 * Returns all books
 *
 * returns Book
 **/
exports.getBook = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "no of pages" : 200,
  "publication date" : "06-07-2020",
  "author" : "JK Rowling",
  "isbn" : 2200,
  "name" : "Harry Potter",
  "genre" : "Fantasy",
  "id" : 10
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Find book by ID
 * Returns a single book
 *
 * bookId Long ID of book to return
 * returns Book
 **/
exports.getBookById = function(bookId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "no of pages" : 200,
  "publication date" : "06-07-2020",
  "author" : "JK Rowling",
  "isbn" : 2200,
  "name" : "Harry Potter",
  "genre" : "Fantasy",
  "id" : 10
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Replace book by ID
 * Replace book by ID
 *
 * body Book Replace book in the store
 * returns Book
 **/
exports.replaceBook = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "no of pages" : 200,
  "publication date" : "06-07-2020",
  "author" : "JK Rowling",
  "isbn" : 2200,
  "name" : "Harry Potter",
  "genre" : "Fantasy",
  "id" : 10
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Replace book by ID
 * Replace book by ID
 *
 * body Book Replace book in the store
 * returns Book
 **/
exports.replaceBook = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "no of pages" : 200,
  "publication date" : "06-07-2020",
  "author" : "JK Rowling",
  "isbn" : 2200,
  "name" : "Harry Potter",
  "genre" : "Fantasy",
  "id" : 10
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Search for books according to author, title or genre
 * Rearch for books according to author, title or genre
 *
 * author String  (optional)
 * genre String  (optional)
 * title String  (optional)
 * returns Book
 **/
exports.searchBook = function(author,genre,title) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "no of pages" : 200,
  "publication date" : "06-07-2020",
  "author" : "JK Rowling",
  "isbn" : 2200,
  "name" : "Harry Potter",
  "genre" : "Fantasy",
  "id" : 10
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Updates a book in the store with form data
 *
 * bookId Long ID of book that needs to be updated
 * name String Name of book that needs to be updated (optional)
 * author String Author of book that needs to be updated (optional)
 * no of pages String No of pages in the book to be updated (optional)
 * publication date String Publication date of the book to be updated (optional)
 * genre String Genre of the book to be updated (optional)
 * no response value expected for this operation
 **/
exports.updateBookById = function(bookId,name,author,no_of_pages,publication_date,genre) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

