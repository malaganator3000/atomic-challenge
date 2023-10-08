import { Equipo } from './Equipo';
export interface FormValue {
  valid: boolean;
  value: string;
}
export interface StatusForm {
  name: FormValue;
  last: FormValue;
  phone: FormValue;
}
export interface NetworkingState {
  equipo: Equipo;
  loadingEquipo: boolean;
  loadingForm: boolean;
  statusesForm: StatusForm;
  errForm:any
}
