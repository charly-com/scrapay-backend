import { Injectable } from '@nestjs/common'; // Importing the Injectable decorator for defining a service
import { InjectRepository } from '@nestjs/typeorm'; // Importing the InjectRepository decorator for injecting the repository
import { Book } from './entities'; // Importing the Book entity class
import { Repository } from 'typeorm'; // Importing the Repository class for database operations
import { CreateBookDto } from './dto/create-book.dto'; // Importing the DTO for creating a book

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book) private bookRepository: Repository<Book>, // Injecting the repository for the Book entity
  ) {}

  async findAll(): Promise<Book[]> {
    return this.bookRepository.find(); // Fetching all books from the repository
  }

  async create(book: CreateBookDto): Promise<Book> {
    return this.bookRepository.save(book); // Saving a new book to the repository
  }
}
