import { User } from './user.model';

export class Auth {
  user?: User;
  success: boolean;
  token: string;
  redirect: string;
}
