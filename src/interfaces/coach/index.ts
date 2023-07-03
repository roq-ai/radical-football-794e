import { UserInterface } from 'interfaces/user';
import { AcademyInterface } from 'interfaces/academy';
import { GetQueryInterface } from 'interfaces';

export interface CoachInterface {
  id?: string;
  user_id?: string;
  academy_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  academy?: AcademyInterface;
  _count?: {};
}

export interface CoachGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  academy_id?: string;
}
