import { Perfil } from "./perfil";
import { Rutina } from "./rutina";

export class RutinaDia {
    id: number;
    numero: number;
    core: boolean;
    fechaCreacion: Date;
    fechaModificacion: Date;
    creador: Perfil;
    modificador: Perfil;
    rutina: Rutina;
}