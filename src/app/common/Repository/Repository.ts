import { Result } from "../Result/Result";
import { ResultError } from "../Result/ResultError";
import { ResultSuccess } from "../Result/ResultSuccess";

export type ResponseType<T> =   Result<ResultSuccess<T> | ResultError>;  

export abstract class Repository<T> {

  abstract all(): Promise<  ResponseType<T[]> >;
  abstract exists(r: T): Promise<  ResponseType<boolean>  >;
  abstract delete(r: T): Promise<  ResponseType<boolean>  >;
  abstract update(r: T): Promise<  ResponseType<T>  > ;
  abstract create(r: T): Promise<  ResponseType<T>  > ;
  abstract findBy<F extends keyof T >(field: F, value: T[F]): Promise<  ResponseType<T[]>  >;
  abstract findBy(values: Partial<T>): Promise<ResponseType<T[]>>;
  abstract hasAny(values: Partial<T>): Promise<ResponseType<boolean>>;
  abstract count(values: Partial<T>): Promise<ResponseType<number>>;
}