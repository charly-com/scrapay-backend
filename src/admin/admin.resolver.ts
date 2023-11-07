import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql'; // Importing decorators for defining GraphQL resolvers and operations
import { AdminService } from './admin.service'; // Importing the AdminService to interact with admin data
import { Admin } from './entities/admin.entity'; // Importing the Admin entity class
import { CreateAdminInput } from './dto/create-admin.input'; // Importing the input type for creating an admin
import { UpdateAdminInput } from './dto/update-admin.input'; // Importing the input type for updating an admin

@Resolver(() => Admin) // Defines a resolver class for the Admin entity
export class AdminResolver {
  constructor(private readonly adminService: AdminService) {} // Constructor to inject the AdminService

  @Mutation(() => Admin) // Defines a GraphQL mutation for creating an admin
  createAdmin(@Args('admin') createAdminInput: CreateAdminInput) {
    return this.adminService.create(createAdminInput); // Calls the admin service to create an admin
  }

  @Query(() => [Admin], { name: 'getAllAdmin' }) // Defines a GraphQL query to retrieve all admin entities
  findAll() {
    return this.adminService.findAll(); // Calls the admin service to find all admin entities
  }

  @Query(() => Admin, { name: 'findAdminById' }) // Defines a GraphQL query to retrieve an admin by ID
  findOne(@Args('adminId') id: string) {
    return this.adminService.findOne(id); // Calls the admin service to find an admin by ID
  }

  @Mutation(() => Admin) // Defines a GraphQL mutation for updating an admin
  updateAdmin(@Args('updateAdminInput') updateAdminInput: UpdateAdminInput) {
    return this.adminService.update(updateAdminInput.id, updateAdminInput); // Calls the admin service to update an admin
  }

  @Mutation(() => Admin) // Defines a GraphQL mutation for removing an admin
  removeAdmin(@Args('adminId') id: string) {
    return this.adminService.remove(id); // Calls the admin service to remove an admin
  }
}
