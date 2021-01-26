import { Repository } from "../common/Repository";
import { User } from "../domain/User";

export abstract class UserRepo extends Repository<User> {
  abstract all(): Promise<User[]>;
  abstract exists(r: User): Promise<boolean>;
  abstract delete(r: User): Promise<boolean>;
  abstract update(r: User): Promise<boolean | User>;
  abstract create(r: User): Promise<boolean | User>;
}