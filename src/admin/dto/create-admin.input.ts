import { InputType, Field } from '@nestjs/graphql';
import {
  IsString,
  MaxLength,
  MinLength,
  Matches,
  IsPhoneNumber,
} from 'class-validator';

@InputType() // Defines this class as an input type for GraphQL
export class CreateAdminInput {
  @Field() // Exposes the 'email' field to GraphQL
  @IsString() // Ensures 'email' is a string
  email: string;

  @IsString() // Ensures 'password' is a string
  @MaxLength(20) // Validates maximum length of 20 characters
  @MinLength(6) // Validates minimum length of 6 characters
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/, {
    message:
      'Password must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number',
  }) // Validates password format with a regular expression
  @Field() // Exposes the 'password' field to GraphQL

  password: string;

  @IsPhoneNumber('NG', { message: 'Invalid phone number' }) // Validates phone number format for Nigeria
  @Field() // Exposes the 'phone' field to GraphQL
  phone: string;
}
