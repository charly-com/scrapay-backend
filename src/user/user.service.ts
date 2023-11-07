import { Injectable } from '@nestjs/common'; // Importing the Injectable decorator for defining a service
import { InjectRepository } from '@nestjs/typeorm'; // Importing the InjectRepository decorator for injecting the repository
import { Repository } from 'typeorm'; // Importing the Repository class for database operations
import { User } from './entities'; // Importing the User entity class
import { CreateUserDto } from './dto'; // Importing the DTO for creating a user

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>, // Injecting the repository for the User entity
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    return this.userRepository.save(createUserDto); // Saving a new user to the repository
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find({
      relations: ['books'], // Fetching user's books as related entities
      select: ['id', 'firstName', 'lastName', 'phone', 'email', 'role'], // Selecting specific user properties
    });
  }
}
