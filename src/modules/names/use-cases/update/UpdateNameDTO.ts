import { Gender } from '../../../../domain/Name';

export interface UpdateNameDTO {
  fullname: string;
  first_name: string;
  last_name: string;
  gender: Gender;
}