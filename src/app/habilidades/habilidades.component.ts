import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { HabilidadesService } from '../habilidades.service';


@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  constructor(
   
  ) { }
tecnologiaNome1="Java";
tecnologiaDescricao1="Java é legal";
@Input() item ='';
@Input() item2 ='Java2';

  ngOnInit(): void {
  }

}
