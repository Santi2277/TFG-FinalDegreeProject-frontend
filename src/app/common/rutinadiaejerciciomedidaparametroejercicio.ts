import { Ejercicio } from "./ejercicio";
import { MedidaParametroEjercicio } from "./medidaparametroejercicio";
import { Perfil } from "./perfil";
import { RutinaDia } from "./rutinadia";

export class RutinaDiaEjercicioMedidaParametroEjercicio {
    id: number;
    secuenciaEjercicio: number;
    rutinaDia: RutinaDia;
    ejercicio: Ejercicio;
    medidaParametroEjercicio: MedidaParametroEjercicio;
}