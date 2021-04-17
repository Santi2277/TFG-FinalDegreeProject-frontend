import { PerfilGrupo } from "./perfilgrupo";

export class Perfil {
    id: number;
    nombre: string;
    apellidos: string;
    correo: string;
    nick: string;
    perfilGrupo: PerfilGrupo;
}