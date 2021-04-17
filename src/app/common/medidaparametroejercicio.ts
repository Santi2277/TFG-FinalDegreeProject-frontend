import { Ejercicio } from "./ejercicio";
import { MedidaUnidad } from "./medidaunidad";
import { ParametroLista } from "./parametrolista";
import { ParametroSublista } from "./parametrosublista";
import { Perfil } from "./perfil";

export class MedidaParametroEjercicio {
    id: number;
    medidaValor: number;
    core: boolean;
    fechaCreacion: Date;
    fechaModificacion: Date;
    creador: Perfil;
    modificador: Perfil;
    ejercicio: Ejercicio;
    medidaUnidad: MedidaUnidad;
    parametroLista: ParametroLista;
    parametroSublista: ParametroSublista;
}