import { Gender, Name } from '../../../../domain/Name';
import { NameRepo } from '../NameRepo';
import {v4 as uuidv4} from 'uuid';

export class NameRepoMock extends NameRepo {

  exists(r: Name): Promise<boolean> {
    return Promise.resolve(
      this.names.some((name) => (
        (name.first_name===r.first_name) && 
        (name.last_name===r.last_name) && 
        (name.gender===r.gender) && 
        (name.fullname===r.fullname)
      ))
    );
  }
  delete(r: Name): Promise<boolean> {
    let index = this.names.findIndex((name) => name.uuid === r.uuid);
    if (index < 0) return Promise.resolve(false);
    this.names = this.names.filter((name) => name.uuid != r.uuid);
    return Promise.resolve(false);
  }
  update(r: Name): Promise<Name> {
    if ('uuid' in r) {
      let index = this.names.findIndex((name) => name.uuid === r.uuid);
      if (index >= 0)
        this.names[index] = r;
    }
    throw new Error("Missing field 'uuid'");
  }
  create(r: Name): Promise<Name> {
    r.uuid = uuidv4();
    this.names.push(r);
    return Promise.resolve(r);
  }
  findByFields(values: Partial<Name>): Promise<Name[]> {
    throw new Error("Method not implemented.");
  }
  findBy< F extends keyof Name >(field: keyof Name, value: Name[F]): Promise<  Name[]>  {
    return Promise.resolve(this.names.filter((name) => name[field] === value));
  }
  hasAny(values: Partial<Name>): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  count(values: Partial<Name>): Promise<number> {
    return Promise.resolve( this.names.length );
  }

  findOne<F extends keyof Name >(field:  keyof Name, value: Name[F]): Promise<Name> {
    let names = this.names.filter((name) => name[field] === value);
    if (names.length===0) return Promise.resolve(null);
    return Promise.resolve( names[0] );
  }

  
  private names: Name[] = [ 
    {uuid: uuidv4(), first_name: 'Adam', last_name: 'Silva', gender: Gender.MALE, fullname: 'Adam A. Silva'},
    {uuid: uuidv4(), first_name: 'Bia', last_name: 'Diniz', gender: Gender.FEMALE, fullname: 'Bia S. Diniz'},
    {uuid: uuidv4(), first_name: 'Anna', last_name: 'Bask', gender: Gender.FEMALE, fullname: 'Anna B. Bask'},
    {uuid: uuidv4(), first_name: 'Sam', last_name: 'Flem', gender: Gender.MALE, fullname: 'Sam T. Flem'},
  ];

  all(): Promise< Name[]> {
    let res = this.names;
    return Promise.resolve(res);
  }

}