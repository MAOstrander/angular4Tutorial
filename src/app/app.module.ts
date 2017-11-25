import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- Needed for ngModel
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { WadoComponent } from './components/wado/wado.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginformComponent } from './components/loginform/loginform.component';
import { FooterComponent } from './components/footer/footer.component';

import { CharTextDirective } from './char-text.directive';
import { DataService } from './services/data.service';

const appRoutes: Routes = [
  { path:'', component: UserComponent },
  { path:'wado', component: WadoComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    WadoComponent,
    CharTextDirective,
    HeaderComponent,
    LoginformComponent,
    FooterComponent
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
