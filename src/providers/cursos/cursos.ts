import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ICurso } from '../../interfaces/ICurso';

/*
  Generated class for the CursosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CursosProvider {

  constructor(public http: HttpClient) {
    console.log('Hello CursosProvider Provider');
  }

  allTeste(){
    return this.http.get<ICurso[]>('http://localhost:3000/cursos');
  }

  showTeste(data: ICurso){
    return this.http.get<ICurso>('http://localhost:3000/cursos/'+data.id);
  }

  addTeste(data: ICurso){
    return this.http.post<ICurso>('http://localhost:3000/cursos', data);
  }

  editTeste(data: ICurso){
    return this.http.put<ICurso>('http://localhost:3000/cursos/'+data.id, data);
  }

  deleteTeste(data: ICurso){
    return this.http.delete<ICurso>('http://localhost:3000/cursos/'+data.id);
  }

  all(){
    const lista: ICurso[] = [
      {
        "id":1,
        "imagem":"https://cdn-images-1.medium.com/max/2000/1*MbVgphFn5dsipV-Sb3eUpg.png",
        "titulo":"Curso de Ionic",
        "descricao":"Aprenda Ionic na pratica.",
        "valor":23.90,
        "valorTexto":"23,90",
        "aulas":[
          {
            "id":1,
            "ordem":1,
            "titulo":"Introdução",
            "tempo":"10:21",
            "video":"https://www.youtube.com/embed/QwievZ1Tx-8"
          },
          {
            "id":2,
            "ordem":2,
            "titulo":"Aula 2",
            "tempo":"09:21",
            "video":"https://www.youtube.com/embed/QwievZ1Tx-8"
          },
          {
            "id":3,
            "ordem":3,
            "titulo":"Aula 3",
            "tempo":"13:51",
            "video":"https://www.youtube.com/embed/QwievZ1Tx-8"
          },
        ]
      },
      {
        "id":2,
        "imagem":"https://cdn-images-1.medium.com/max/2000/1*MbVgphFn5dsipV-Sb3eUpg.png",
        "titulo":"Curso de Java",
        "descricao":"Aprenda Java na pratica.",
        "valor":23.90,
        "valorTexto":"23,90",
        "aulas":[]
      },
      {
        "id":3,
        "imagem":"https://cdn-images-1.medium.com/max/2000/1*MbVgphFn5dsipV-Sb3eUpg.png",
        "titulo":"Curso de Swift",
        "descricao":"Aprenda Swift na pratica.",
        "valor":23.90,
        "valorTexto":"23,90",
        "aulas":[]
      }
    ];

    return lista;
  }

}
