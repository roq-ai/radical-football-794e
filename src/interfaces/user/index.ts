import { CoachInterface } from 'interfaces/coach';
import { ParentInterface } from 'interfaces/parent';
import { PlayerInterface } from 'interfaces/player';

import { GetQueryInterface } from '../get-query.interface';

export interface UserInterface {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  roq_user_id: string;
  tenant_id: string;

  coach: CoachInterface[];
  parent: ParentInterface[];
  player: PlayerInterface[];
}

export interface UserGetQueryInterface extends GetQueryInterface {
  roq_user_id?: string;
  tenant_id?: string;
}
