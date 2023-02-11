package com.example.restservice;

import org.springframework.web.bind.annotation.*;

import java.util.*;
import java.util.concurrent.CopyOnWriteArrayList;
import java.util.concurrent.atomic.AtomicLong;

@RestController
public class BookController {

	private static final String template = "Hello, %s!";
	private static final List<Book> books = new CopyOnWriteArrayList<>();
	private static final AtomicLong counter = new AtomicLong();

	static {
		books.add(new Book(counter.getAndIncrement(), "Book" + counter.get()));
		books.add(new Book(counter.getAndIncrement(), "Book" + counter.get()));
		books.add(new Book(counter.getAndIncrement(), "Book" + counter.get()));
	}

	@GetMapping("/books")
	public List<Book> getBooks() {
		return books;
	}

	@PostMapping("/books")
	public Book addBook(@RequestBody Book book){
		var newBook = new Book(counter.getAndIncrement(), book.title());
		books.add(newBook);
		return newBook;
	}

	@GetMapping("/books/{id}")
	public Book getById(@PathVariable Long id){
		Book foundBook = books.stream()
				.filter(book->id.equals(book.id()))
				.findFirst()
				.orElseThrow(() -> new RuntimeException("ID not found"));
		return foundBook;
	}

	@GetMapping("/books/search")
	public Book searchByTitle(@RequestParam String title){
		Book foundBook = books.stream()
				.filter(book->title.equals(book.title()))
				.findFirst()
				.orElseThrow(() -> new RuntimeException("Book not found"));
		return foundBook;
	}

	@DeleteMapping("/books/{id}")
	public String deleteBook(@PathVariable Long id){
		Book foundBook = books.stream()
				.filter(book->id.equals(book.id()))
				.findFirst()
				.orElseThrow(() -> new RuntimeException("ID not found"));

		books.remove(foundBook);
		return "Delete Successful";
	}

	@PutMapping("/books/{id}")
	public String updateBook(@PathVariable Long id, @RequestBody Book book){
		Book foundBook = books.stream()
				.filter(b->id.equals(b.id()))
				.findFirst()
				.orElseThrow(() -> new RuntimeException("ID not found"));

		books.remove(foundBook);
		Book updatedBook = new Book(foundBook.id(), book.title());
		books.add(updatedBook);

		return "Update Successful";
	}
}