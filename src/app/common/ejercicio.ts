import { EjercicioGrupo } from "./ejerciciogrupo";
import { ParametroLista } from "./parametrolista";
import { ParametroSublista } from "./parametrosublista";
import { Perfil } from "./perfil";

export class Ejercicio {
        id: number;
        nombre: string;
        descripcionCorta: string;
        descripcionLarga: string;
        info: string;
        core: boolean;
        fechaCreacion: Date;
        fechaModificacion: Date;
        ejercicioGrupo: EjercicioGrupo;
        creador: Perfil;
        modificador: Perfil;
        parametroListas: ParametroLista[];
        parametroSublistas: ParametroSublista[];
}
