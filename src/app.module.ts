import { Module } from '@nestjs/common'; // Importing the NestJS module decorator
import { GraphQLModule } from '@nestjs/graphql'; // Importing the GraphQL module for integrating GraphQL
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'; // Importing Apollo Driver and its configuration
import { TypeOrmModule } from '@nestjs/typeorm'; // Importing TypeORM module for working with databases
import { ConfigService, ConfigModule } from '@nestjs/config'; // Importing configuration services and modules
import { join } from 'path'; // Importing path module for file path handling
import { BookModule } from './book/book.module'; // Importing the Book module
import { UserModule } from './user/user.module'; // Importing the User module
import { AdminModule } from './admin/admin.module'; // Importing the Admin module
import { Admin } from 'typeorm'; // Importing the Admin entity (seems redundant)
import { Book } from './book/entities'; // Importing the Book entity
import { User from './user/entities'; // Importing the User entity

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver, // Configuring the GraphQL module to use Apollo
      autoSchemaFile: join(process.cwd(), 'src/graphql-schema.gql'), // Specifying the location of the auto-generated GraphQL schema file
    }),
    BookModule, // Importing the Book module
    UserModule, // Importing the User module
    TypeOrmModule.forRoot({
      type: 'postgres', // Specifying the database type (PostgreSQL)
      host: 'localhost', // Database host
      port: 5432, // Database port
      username: 'postgres', // Database username
      password: '!2012Chisom', // Database password
      database: 'fyyur', // Database name
      entities: ['dist/**/*.entity.js'], // Specifying the location of entity files
      synchronize: true, // Auto-create or update database tables
    }),
    AdminModule, // Importing the Admin module
  ],
})
export class AppModule {}
