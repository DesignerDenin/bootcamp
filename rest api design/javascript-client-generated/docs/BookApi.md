# LibraryManagement.BookApi

All URIs are relative to *https://librarymanagement.swagger.io/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addBook**](BookApi.md#addBook) | **POST** /book | Add a new book to the library
[**deleteBook**](BookApi.md#deleteBook) | **DELETE** /book/{bookId} | Deletes a book
[**getBook**](BookApi.md#getBook) | **GET** /book | Find available books
[**getBookById**](BookApi.md#getBookById) | **GET** /book/{bookId} | Find book by ID
[**replaceBook**](BookApi.md#replaceBook) | **PUT** /book | Replace book by ID
[**searchBook**](BookApi.md#searchBook) | **GET** /book/search | Search for books according to author, title or genre
[**updateBookById**](BookApi.md#updateBookById) | **PATCH** /book/{bookId} | Updates a book in the store with form data

<a name="addBook"></a>
# **addBook**
> Book addBook(body, id, isbn, name, author, noOfPages, publicationDate, genre)

Add a new book to the library

Add a new book to the library

### Example
```javascript
import {LibraryManagement} from 'library_management';

let apiInstance = new LibraryManagement.BookApi();
let body = new LibraryManagement.Book(); // Book | Create a new book in the store
let id = 789; // Number | 
let isbn = 789; // Number | 
let name = "name_example"; // String | 
let author = "author_example"; // String | 
let noOfPages = 789; // Number | 
let publicationDate = "publicationDate_example"; // String | 
let genre = "genre_example"; // String | 

apiInstance.addBook(body, id, isbn, name, author, noOfPages, publicationDate, genre, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Book**](Book.md)| Create a new book in the store | 
 **id** | **Number**|  | 
 **isbn** | **Number**|  | 
 **name** | **String**|  | 
 **author** | **String**|  | 
 **noOfPages** | **Number**|  | 
 **publicationDate** | **String**|  | 
 **genre** | **String**|  | 

### Return type

[**Book**](Book.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, application/xml

<a name="deleteBook"></a>
# **deleteBook**
> deleteBook(bookId)

Deletes a book

delete a book

### Example
```javascript
import {LibraryManagement} from 'library_management';

let apiInstance = new LibraryManagement.BookApi();
let bookId = 789; // Number | Book id to delete

apiInstance.deleteBook(bookId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bookId** | **Number**| Book id to delete | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getBook"></a>
# **getBook**
> Book getBook()

Find available books

Returns all books

### Example
```javascript
import {LibraryManagement} from 'library_management';

let apiInstance = new LibraryManagement.BookApi();
apiInstance.getBook((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Book**](Book.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="getBookById"></a>
# **getBookById**
> Book getBookById(bookId)

Find book by ID

Returns a single book

### Example
```javascript
import {LibraryManagement} from 'library_management';

let apiInstance = new LibraryManagement.BookApi();
let bookId = 789; // Number | ID of book to return

apiInstance.getBookById(bookId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bookId** | **Number**| ID of book to return | 

### Return type

[**Book**](Book.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="replaceBook"></a>
# **replaceBook**
> Book replaceBook(body, id, isbn, name, author, noOfPages, publicationDate, genre)

Replace book by ID

Replace book by ID

### Example
```javascript
import {LibraryManagement} from 'library_management';

let apiInstance = new LibraryManagement.BookApi();
let body = new LibraryManagement.Book(); // Book | Replace book in the store
let id = 789; // Number | 
let isbn = 789; // Number | 
let name = "name_example"; // String | 
let author = "author_example"; // String | 
let noOfPages = 789; // Number | 
let publicationDate = "publicationDate_example"; // String | 
let genre = "genre_example"; // String | 

apiInstance.replaceBook(body, id, isbn, name, author, noOfPages, publicationDate, genre, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Book**](Book.md)| Replace book in the store | 
 **id** | **Number**|  | 
 **isbn** | **Number**|  | 
 **name** | **String**|  | 
 **author** | **String**|  | 
 **noOfPages** | **Number**|  | 
 **publicationDate** | **String**|  | 
 **genre** | **String**|  | 

### Return type

[**Book**](Book.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, application/xml

<a name="searchBook"></a>
# **searchBook**
> Book searchBook(opts)

Search for books according to author, title or genre

Rearch for books according to author, title or genre

### Example
```javascript
import {LibraryManagement} from 'library_management';

let apiInstance = new LibraryManagement.BookApi();
let opts = { 
  'author': "author_example", // String | 
  'genre': "genre_example", // String | 
  'title': "title_example" // String | 
};
apiInstance.searchBook(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **author** | **String**|  | [optional] 
 **genre** | **String**|  | [optional] 
 **title** | **String**|  | [optional] 

### Return type

[**Book**](Book.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="updateBookById"></a>
# **updateBookById**
> updateBookById(bookId, opts)

Updates a book in the store with form data

### Example
```javascript
import {LibraryManagement} from 'library_management';

let apiInstance = new LibraryManagement.BookApi();
let bookId = 789; // Number | ID of book that needs to be updated
let opts = { 
  'name': "name_example", // String | Name of book that needs to be updated
  'author': "author_example", // String | Author of book that needs to be updated
  'noOfPages': "noOfPages_example", // String | No of pages in the book to be updated
  'publicationDate': "publicationDate_example", // String | Publication date of the book to be updated
  'genre': "genre_example" // String | Genre of the book to be updated
};
apiInstance.updateBookById(bookId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bookId** | **Number**| ID of book that needs to be updated | 
 **name** | **String**| Name of book that needs to be updated | [optional] 
 **author** | **String**| Author of book that needs to be updated | [optional] 
 **noOfPages** | **String**| No of pages in the book to be updated | [optional] 
 **publicationDate** | **String**| Publication date of the book to be updated | [optional] 
 **genre** | **String**| Genre of the book to be updated | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

