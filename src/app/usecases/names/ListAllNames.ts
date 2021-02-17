import { Inject } from "typescript-ioc";
import {UseCase} from "../../common/UseCase";
import {Name} from "../../domain/Name";
import { NameRepo } from "../../repos/NameRepo";

export interface Response {
  names: Name[];
};

export class ListAllNames extends UseCase<Request, Response> {
  
  @Inject
  private repo: NameRepo;

  async execute(): Promise<Response> {
    let names = await this.repo.all();
    return Promise.resolve({ names });
  }
}
