import { Repository, ResponseType } from "../../../app/common/Repository/Repository";
import { Result } from "../../../app/common/Result/Result";
import { ResultSuccess } from "../../../app/common/Result/ResultSuccess";
import { Gender, Name } from "../../../app/domain/Name";

export abstract class NameRepo extends Repository<Name> {
  
  private names: Name[] = [ 
    {uuid: '00001', first_name: 'Adam', last_name: 'Silva', gender: Gender.MALE, fullname: 'Adam A. Silva'},
    {uuid: '00002', first_name: 'Bia', last_name: 'Diniz', gender: Gender.FEMALE, fullname: 'Bia S. Diniz'},
    {uuid: '00003', first_name: 'Anna', last_name: 'Bask', gender: Gender.FEMALE, fullname: 'Anna B. Bask'},
    {uuid: '00004', first_name: 'Sam', last_name: 'Flem', gender: Gender.MALE, fullname: 'Sam T. Flem'},
  ];

  all(): Promise<  ResponseType<Name[]> > {
    let res: ResultSuccess<Name[]> = new ResultSuccess('', this.names);
    return Promise.resolve(Result.success(res));;
  }

}