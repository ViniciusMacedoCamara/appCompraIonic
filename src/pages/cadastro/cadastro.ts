import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';
import { IUsuario } from '../../interfaces/IUsuario';
import { UsuariosProvider } from '../../providers/usuarios/usuarios';

/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  usuario:IUsuario = {name:'', email:'', password:''};

  constructor(public navCtrl: NavController, public navParams: NavParams, public usuariosProvider: UsuariosProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }

  cancelar(){
    this.navCtrl.setRoot(HomePage);
  }

  addUsuario(){
    this.usuariosProvider.addUsuario(this.usuario).subscribe(res => {
      console.log(this.usuario);
    }, erro => {
      console.log("Erro:" + erro.message);
    });
  }

}
