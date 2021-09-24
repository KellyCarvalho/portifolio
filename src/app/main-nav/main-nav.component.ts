import { Component, Output, Input} from '@angular/core';
import { HabilidadesComponent} from '../habilidades/habilidades.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { from, Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import * as EventEmitter from 'events';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
    @Output() click = new EventEmitter();
  

    itemAtual='Kelly Do Nascimento Carvalho';
 
  constructor(private breakpointObserver: BreakpointObserver) {}

  atualizarSpan($event){
    console.log($event.srcElement.childNodes);
    this.itemAtual=$event.srcElement.childNodes[2].textContent;

  }


  

}
