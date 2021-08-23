export abstract class Repository<T> {
  abstract all(): Promise<  T[]>;
  abstract exists(r: T): Promise< boolean>;
  abstract delete(r: T): Promise< boolean>;
  abstract update(r: T): Promise< T>;
  abstract create(r: T): Promise< T>;
  abstract findBy<F extends keyof T >(field: F, value: T[F]): Promise<  T[]>;
  abstract findByFields(values: Partial<T>): Promise<T[]>;
  abstract hasAny(values: Partial<T>): Promise<boolean>;
  abstract count(values: Partial<T>): Promise<number>;
}