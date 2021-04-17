import { ParametroLista } from "./parametrolista";
import { Perfil } from "./perfil";

export class ParametroSublista {
    id: number;
    nombre: string;
    diminutivo: string;
    info: string;
    core: boolean;
    fechaCreacion: Date;
    fechaModificacion: Date;
    creador: Perfil;
    modificador: Perfil;
    parametroLista: ParametroLista;
}