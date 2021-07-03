import { Usuario } from './usuario';
import { Ocorrencia } from './ocorrencia';

export class Pessoa{
    nome: string;
    sobrenome: string;
    email: string;
    cpf: string;
    status: string;
    ocorrencia: Ocorrencia;
    senha: string;
    login: string;
}