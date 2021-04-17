import { Perfil } from "./perfil";

export class MedidaGrupo {
    id: number;
    nombre: string;
    info: string;
    core: boolean;
    fechaCreacion: Date;
    fechaModificacion: Date;
    creador: Perfil;
    modificador: Perfil;
}