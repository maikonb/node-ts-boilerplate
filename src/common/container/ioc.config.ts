import { Scope } from 'typescript-ioc';
import { NameRepoMock } from '../../modules/names/repos/mock/NameRepoMock';
import { NameRepo } from '../../modules/names/repos/NameRepo';

export const config = [
  { bind: NameRepo, to: NameRepoMock, scope: Scope.Singleton },
];
