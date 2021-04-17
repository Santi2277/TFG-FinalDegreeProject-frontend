import { MedidaGrupo } from "./medidagrupo";
import { Perfil } from "./perfil";

export class MedidaUnidad {
    id: number;
    nombre: string;
    diminutivo: string;
    info: string;
    core: boolean;
    fechaCreacion: Date;
    fechaModificacion: Date;
    creador: Perfil;
    modificador: Perfil;
    medidaGrupo: MedidaGrupo;
}