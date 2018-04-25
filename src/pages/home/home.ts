import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DetalhePage } from '../detalhe/detalhe';

import { ICurso } from '../../interfaces/ICurso';

import { CursosProvider } from '../../providers/cursos/cursos';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  lista: ICurso[];

  constructor(public navCtrl: NavController, public cursoProvider: CursosProvider) {
        //this.lista = this.cursoProvider.all();

  }

  ionViewDidEnter(){ //Executa algo quando entrar na view
    this.cursoProvider.allTeste().subscribe(res => {
      this.lista = res;
    }, erro => {
      console.log("Erro:" + erro.message);
    });

    let data: ICurso = {
        "id":1,
        "titulo":"Curso de Android",
        "descricao":"Aprenda Android na pratica.",
        "valor":23.90,
        "valorTexto":"23,90",
        "imagem":"https://cdn-images-1.medium.com/max/2000/1*MbVgphFn5dsipV-Sb3eUpg.png",
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
          }
        ]
      };

    /*this.cursoProvider.addTeste(data).subscribe(res => {
      console.log(res);
    }, erro => {
      console.log("Erro:" + erro.message);
    });

    this.cursoProvider.editTeste(data).subscribe(res => {
      console.log(res);
    }, erro => {
      console.log("Erro:" + erro.message);
    });

    this.cursoProvider.deleteTeste(data).subscribe(res => {
      console.log(res);
    }, erro => {
      console.log("Erro:" + erro.message);
    });
    this.cursoProvider.showTeste(data).subscribe(res => {
      console.log(res);
    }, erro => {
      console.log("Erro:" + erro.message);
    });*/

  }

  abreDetalhe(item){
    this.navCtrl.push(DetalhePage, {dados:item});
  }

}
