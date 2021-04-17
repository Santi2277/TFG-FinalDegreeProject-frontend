import { Perfil } from "./perfil";

export class ParametroLista {
    id: number;
    nombre: string;
    diminutivo: string;
    info: string;
    core: boolean;
    fechaCreacion: Date;
    fechaModificacion: Date;
    creador: Perfil;
    modificador: Perfil;
}