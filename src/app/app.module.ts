import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { WadoComponent } from './components/wado/wado.component';

import { DataService } from './services/data.service';
import { CharTextDirective } from './char-text.directive';

const appRoutes: Routes = [
  { path:'', component: UserComponent },
  { path:'wado', component: WadoComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    WadoComponent,
    CharTextDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
