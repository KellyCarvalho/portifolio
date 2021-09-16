import { NgModule } from '@angular/core';
import {Routes, RouterModule, Router} from '@angular/router';
import { HabilidadesComponent } from '../habilidades/habilidades.component';
import {HomeComponent} from '../home/home.component';

const routes : Routes =[
  {
  path:'',
  component: HomeComponent
},
{
  path:'habilidades',
  component: HabilidadesComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
}

)
export class AppRoutingComponent {

}


