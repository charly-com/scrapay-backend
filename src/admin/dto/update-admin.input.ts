import { IsString } from 'class-validator'; // Importing the 'IsString' validator from class-validator
import { CreateAdminInput } from './create-admin.input'; // Importing 'CreateAdminInput' from a different file
import { InputType, Field, PartialType } from '@nestjs/graphql'; // Importing decorators and types from NestJS

@InputType() // Defines this class as an input type for GraphQL
export class UpdateAdminInput extends PartialType(CreateAdminInput) {
  @IsString() // Ensures 'id' is a string
  @Field() // Exposes the 'id' field to GraphQL
  id: string;

  @Field() // Exposes the 'firstName' field to GraphQL
  @IsString() // Ensures 'firstName' is a string
  firstName?: string;

  @IsString() // Ensures 'lastName' is a string
  @Field() // Exposes the 'lastName' field to GraphQL
  lastName?: string;

  @Field({ nullable: true }) // Exposes the 'role' field to GraphQL (with nullable option)
  role?: string; // 'role' is a string, but it's nullable, so it's optional
}
