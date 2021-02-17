import { Repository } from "../common/Repository";
import { Name } from "../domain/Name";

export abstract class NameRepo extends Repository<Name> {
  abstract all(): Promise<Name[]>;
  abstract exists(r: Name): Promise<boolean>;
  abstract delete(r: Name): Promise<boolean>;
  abstract update(r: Name): Promise<boolean | Name>;
  abstract create(r: Name): Promise<boolean | Name>;
}