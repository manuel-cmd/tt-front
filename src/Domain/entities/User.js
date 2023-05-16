export interface User {
  id?: string;
  name: string;
  lastname1: string;
  lastname2: string;
  phone: string;
  address: string;
  email: string;
  password: string;
  confirmPassword: string;
  image?: string;
  session_token?: string;
  roles?: Rol[];
}
