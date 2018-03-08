import { Routes } from '@angular/router';
import {LoginComponent} from '../login/login.component';
import {RegisterComponent} from '../register/register.component';
import {HomepageComponent} from '../homepage/homepage.component';
import {PublishBookComponent} from '../publish-book/publish-book.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: 'publish-book', component: PublishBookComponent },
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];
