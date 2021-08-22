import { Scope } from 'typescript-ioc';
import { NameRepo } from "../../app/repos/NameRepo";
import { NameRepoMock } from "../repos/mock/NameRepoMock";

export default [
  { bind: NameRepo, to: NameRepoMock, scope: Scope.Singleton },
];
