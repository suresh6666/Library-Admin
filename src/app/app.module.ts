import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';


import { AppComponent } from './app.component';
import { routes } from './config/router.config';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PublishBookComponent } from './publish-book/publish-book.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    RegisterComponent,
    HomepageComponent,
    PublishBookComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AgGridModule.withComponents(
      []
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
