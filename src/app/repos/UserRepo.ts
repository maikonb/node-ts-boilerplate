import { Repository } from "../common/Repository/Repository";
import { User } from "../domain/User";

export abstract class UserRepo extends Repository<User> {
}