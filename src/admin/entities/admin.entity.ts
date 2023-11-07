import { ObjectType, Field } from '@nestjs/graphql'; // Importing decorators for GraphQL
import { CommonEntity } from 'src/common'; // Importing a common entity class
import { USERROLE } from 'src/common/interface'; // Importing a user role enum
import { Column, Entity, Unique } from 'typeorm'; // Importing decorators for TypeORM

@ObjectType() // Defines this class as a GraphQL object type
@Entity() // Marks this class as an entity for TypeORM
@Unique(['email', 'phone']) // Ensures the email and phone columns have unique constraints in the database
export class Admin extends CommonEntity {
  @Field({ nullable: true }) // Exposes 'firstName' as a GraphQL field, with an optional nullable option
  @Column({ nullable: true }) // Specifies 'firstName' as a nullable column in the database
  firstName: string;

  @Field({ nullable: true }) // Exposes 'lastName' as a GraphQL field, with an optional nullable option
  @Column({ nullable: true }) // Specifies 'lastName' as a nullable column in the database
  lastName: string;

  @Field() // Exposes 'email' as a required GraphQL field
  @Column({ unique: true }) // Specifies 'email' as a unique column in the database
  email: string;

  @Field() // Exposes 'password' as a required GraphQL field
  @Column() // Specifies 'password' as a regular column in the database
  password: string;

  @Field() // Exposes 'phone' as a required GraphQL field
  @Column({ unique: true }) // Specifies 'phone' as a unique column in the database
  phone: string;

  @Field() // Exposes 'role' as a required GraphQL field
  @Column({ default: 'ADMIN', enum: USERROLE }) // Specifies 'role' with default 'ADMIN' and using the 'USERROLE' enum
  role: USERROLE;
}
