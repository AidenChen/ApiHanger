import { User } from './user.model';

export interface Auth {
  user?: User;
  success: boolean;
  token: string;
  redirect: string;
}
