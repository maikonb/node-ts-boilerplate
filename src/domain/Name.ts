export enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE'
}

export interface Name {
  uuid?: string;
  fullname: string;
  first_name: string;
  last_name: string;
  gender: Gender;
}