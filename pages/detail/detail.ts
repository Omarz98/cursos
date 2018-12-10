import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NotesService } from '../../services/notes.service';


/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  inscribir = 0;

	note:any = { id: null, NombreCurso: null, instructor: null,resumenCurso:null,temario:null,duracion:null,inicio:null,termino:null,horario:null,inicioInscripciones:null,fechacierre:null,lugar:null,numMax:null,numMin:null,costo:null,observaciones:null};
	id=null;
  	constructor(public navCtrl: NavController, public navParams: NavParams, public notesService: NotesService) {
  		this.id= navParams.get('id');
  		if(this.id != 0){
  			//this.note = notesService.getNote(this.id);
        notesService.getNote(this.id).valueChanges().subscribe( note => {
            this.note = note;
          });
  		}

  	}

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }



  /*addNote(){

      if(this.id != 0){
  		this.notesService.editNote(this.note);
  		alert('Nota editada con exito');

  	}else{
  		this.note.id = Date.now();
  		this.notesService.createNote(this.note);
  		alert('Nota creada con exito');
  	}

   	this.navCtrl.pop();

  }*/

  inscribirme(){
    this.inscribir=1;
    alert('Inscrito al curso');
    //this.navCtrl.pop();
  }

  desenscribirme(){
    this.inscribir=0;
    alert('Curso eliminado');
    //this.navCtrl.pop();
  }

  /*deleteNote(){
    this.notesService.deleteNote(this.note);
    alert('Nota eliminada con exito');
    this.navCtrl.pop();

  }*/

}
