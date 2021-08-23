import { Scope } from 'typescript-ioc';
import { NameRepoMock } from '../../names/repos/mock/NameRepoMock';
import { NameRepo } from '../../names/repos/NameRepo';

export const config = [
  { bind: NameRepo, to: NameRepoMock, scope: Scope.Singleton },
];
