import { Perfil } from "./perfil";

export class Rutina {
    id: number;
    nombre: string;
    numeroDias: number;
    parametroLibre: boolean;
    descripcionCorta: string;
    info: string;
    core: boolean;
    fechaCreacion: Date;
    fechaModificacion: Date;
    creador: Perfil;
    modificador: Perfil;
}