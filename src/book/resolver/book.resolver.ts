import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'; // Importing decorators for defining GraphQL resolvers and operations
import { Book } from '../entities'; // Importing the Book entity class
import { BookService } from '../book.service'; // Importing the BookService to interact with book data
import { CreateBookDto } from '../dto/create-book.dto'; // Importing the DTO for creating a book

@Resolver((of) => Book) // Defines a resolver class for the Book entity
export class BookResolver {
  constructor(private bookService: BookService) {} // Constructor to inject the BookService

  @Query((returns) => [Book], { name: 'getAllBooks' }) // Defines a GraphQL query to retrieve all books
  async book() {
    const books = await this.bookService.findAll(); // Calls the book service to find all books
    return books;
  }

  @Mutation((returns) => Book, { name: 'createBook' }) // Defines a GraphQL mutation for creating a book
  async createBook(@Args('book') book: CreateBookDto) {
    return this.bookService.create(book); // Calls the book service to create a new book
  }
}
