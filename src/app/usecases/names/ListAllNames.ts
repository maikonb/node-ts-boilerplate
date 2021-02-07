import {UseCase} from "../../common/UseCase";
import {Name} from "../../domain/Name";

type Response = {
  names: Name[];
};

export class ListAllNames extends UseCase<Request, Response> {
  execute(request?: Request): Response | Promise<Response> {
    return Promise.resolve({ names: []});
  }
}
