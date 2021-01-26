export abstract class Repository<T> {
  abstract all(): Promise<T[]>;
  abstract exists(r: T): Promise<boolean>;
  abstract delete(r: T): Promise<boolean>;
  abstract update(r: T): Promise<boolean | T> ;
  abstract create(r: T): Promise<boolean | T> ;
}
