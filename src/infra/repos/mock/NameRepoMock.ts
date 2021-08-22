import { Gender, Name } from "../../../app/domain/Name";
import { NameRepo } from "../../../app/repos/NameRepo";

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
    throw new Error("Method not implemented.");
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
    this.names.push(r);
    return Promise.resolve(r);
  }
  findByFields(values: Partial<Name>): Promise<Name[]> {
    throw new Error("Method not implemented.");
  }
  findBy< F extends keyof Name >(field: keyof Name, value: Name[F]): Promise<  Name[]>  {
    throw new Error("Method not implemented.");
  }
  hasAny(values: Partial<Name>): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  count(values: Partial<Name>): Promise<number> {
    return Promise.resolve( this.names.length );
  }
  
  private names: Name[] = [ 
    {uuid: '00001', first_name: 'Adam', last_name: 'Silva', gender: Gender.MALE, fullname: 'Adam A. Silva'},
    {uuid: '00002', first_name: 'Bia', last_name: 'Diniz', gender: Gender.FEMALE, fullname: 'Bia S. Diniz'},
    {uuid: '00003', first_name: 'Anna', last_name: 'Bask', gender: Gender.FEMALE, fullname: 'Anna B. Bask'},
    {uuid: '00004', first_name: 'Sam', last_name: 'Flem', gender: Gender.MALE, fullname: 'Sam T. Flem'},
  ];

  all(): Promise< Name[]> {
    let res = this.names;
    return Promise.resolve(res);
  }

}