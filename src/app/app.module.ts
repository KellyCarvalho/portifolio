import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingComponent } from './app-routing/app-routing.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar/';
import {  MatButtonModule } from '@angular/material/button';
import { MatSidenavContent, MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule, MatListSubheaderCssMatStyler } from '@angular/material/list';
import { MainNavComponent } from './main-nav/main-nav.component';
import {MatMenuModule} from '@angular/material/menu';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import {MatCardModule} from '@angular/material/card';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainNavComponent,
    HabilidadesComponent,
    CardComponent,
  
    
    
    
    
    
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingComponent,
    BrowserAnimationsModule,
    LayoutModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatButtonModule,
    
    
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
