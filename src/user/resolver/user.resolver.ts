import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'; // Importing decorators and utilities for creating a GraphQL resolver
import { User } from '../entities'; // Importing the User entity
import { UserService } from '../user.service'; // Importing the UserService for user-related operations
import { CreateUserDto } from '../dto'; // Importing the DTO for creating a user

@Resolver((of) => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {} // Injecting the UserService to use user-related operations

  @Mutation(() => User, { name: 'createUser' })
  async createUser(@Args('user') user: CreateUserDto) {
    return this.userService.create(user); // Handling the mutation to create a new user
  }

  @Query(() => [User], { name: 'AllUsers' })
  async user() {
    const users = await this.userService.findAll(); // Query to fetch all users
    return users;
  }
}
