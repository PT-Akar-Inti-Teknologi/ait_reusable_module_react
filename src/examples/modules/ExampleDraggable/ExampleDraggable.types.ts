export interface ExampleDraggableParams {
  search?: string;
  sort?: string;
  order?: string;
  page?: string;
  size?: string;
}

export interface ExampleDraggableModel {
  id: string;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  birth_date?: any;
  roles: RoleModel;
}
interface RoleModel {
  id: string;
  name: string;
}
