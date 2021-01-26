export interface User {
  uuid: string;
  name: string;
  email: string;
  lastLogin: Date;
  emailVerified: boolean;
  hashedPassword: string;
}