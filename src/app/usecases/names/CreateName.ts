import { UseCase } from "../../common/UseCase";
import { Name } from "../../domain/Name";

export type Response = Name;

export class CreateName extends UseCase<Name, Response> {

}
