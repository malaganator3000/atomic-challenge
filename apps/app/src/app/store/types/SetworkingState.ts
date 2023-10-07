import { Equipo } from "./Equipo";

export interface NetworkingState{
    equipo:Equipo,
    loadingEquipo:boolean,
    loadingForm:boolean
}