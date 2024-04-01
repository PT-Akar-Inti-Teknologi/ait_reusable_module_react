
export interface ExampleParams {
  searchBy?: string;
  sortBy?: string;
  sortField?: string;
  pageNumber?: string;
  pageSize?: string;
}

export interface ExampleModel {
  id: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  birthDate?: any;
  roles: RoleModel;
}
interface RoleModel {
  id: string;
  name: string;
}
