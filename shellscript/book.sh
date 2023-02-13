#!/usr/bin/env sh

usage() {
    echo "Usage: "
    echo "book.sh list"
    echo "book.sh create -title <title> -author <author> -genre <genre>"
    echo "book.sh list -id <id>"
    echo "book.sh delete -id <id>"
}

get_books(){
    echo " "
    curl -s http://localhost:8080/books | jq
}

get_book_id(){
    echo " "
    curl -s http://localhost:8080/books/$1 | jq
}

create_book(){
    echo "Create Book"
}

update_book(){
    echo "Update Book"
}

delete_book(){
    echo "Delete Book"
}

usage
get_books 1