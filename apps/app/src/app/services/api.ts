import { environment } from '@app/environment/environment';
import { Fetch } from '../utils/Fetch';

export const api = new Fetch(`${environment.apiUrl}`);
