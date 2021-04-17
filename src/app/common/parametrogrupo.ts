import { Parametro } from "./parametro";
import { Perfil } from "./perfil";

export class ParametroGrupo {
    id: number;
    nombre: string;
    diminutivo: string;
    info: string;
    core: boolean;
    fechaCreacion: Date;
    fechaModificacion: Date;
    creador: Perfil;
    modificador: Perfil;
    parametro: Parametro;
}