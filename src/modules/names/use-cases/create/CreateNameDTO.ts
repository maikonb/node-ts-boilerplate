import { Gender } from '../../../../domain/Name';

export interface CreateNameDTO {
  fullname: string;
  first_name: string;
  last_name: string;
  gender: Gender;
}