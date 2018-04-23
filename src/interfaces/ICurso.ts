import { IAula } from './IAula';

export interface ICurso {
  id?: number;
  imagem: string;
  titulo: string;
  descricao: string;
  valor: number;
  valorTexto: string;
  aulas: IAula[];
}
