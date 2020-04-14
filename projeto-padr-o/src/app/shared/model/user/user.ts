import {Role} from '../role/role';

export class User {
    id: string;
    name: string;
    email: string;
    primaryRole: Role;
    roles?: Role[];
    token?: string;
}
