import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

clicked=false;
clicked1=false;
clicked2=false;
clicked3=false;
mostrarBackend=false;
mostrarFrontend=false;
  constructor() { }

  ngOnInit(): void {
  
  }

  verificarClicksBackend(){
    if(this.clicked||this.clicked1||this.clicked2||this.clicked2||this.clicked3){
      this.mostrarBackend=true;
    }else if(this.clicked===false&&this.clicked1===false&&this.clicked2===false&&this.clicked2===false&&this.clicked3===false){
      this.mostrarBackend=false;
    }
    

  }
  esconderBackend(){
  this.clicked=false;
this.clicked1=false;
this.clicked2=false;
this.clicked3=false;
this.mostrarBackend=false;

}
verificarClicksFrontend(){
  if(this.clicked||this.clicked1||this.clicked2||this.clicked2||this.clicked3){
    this.mostrarFrontend=true;
  }else if(this.clicked===false&&this.clicked1===false&&this.clicked2===false&&this.clicked2===false&&this.clicked3===false){
    this.mostrarFrontend=false;
  }
}

esconderFrontend(){
  this.clicked=false;
this.clicked1=false;
this.clicked2=false;
this.clicked3=false;
this.mostrarFrontend=false;

}






















 
}
