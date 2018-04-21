import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CanActivate, Router} from '@angular/router';

@Injectable()
export class AppServiceModule {
  public options: any;
  constructor(private httpClient: HttpClient) {
    this.options = new Headers({'Content-Type': 'application/json'});
  }
  get(url: string) {
    return this.httpClient.get(url, this.options);
  }
  post(url: string, data: any, noHeaders?: any) {
    this.options = (noHeaders) ? new Headers({'Content-Type': undefined}) : this.options;
    console.log(this.options);
    return this.httpClient.post(url, data, this.options);
  }
  put(url: string, data: any) {
    this.httpClient.put(url, data, this.options);
  }
  delete(url: string) {
    this.httpClient.delete(url, this.options);
  }
  toast(titleMessage, bodyMessage, toastType) {
    const x = document.getElementById('toast');
    x.className = (toastType === 's') ? 'show green' : 'show red';
    // set title
    const tTitle = document.getElementById('toast-title'),
      tBody = document.getElementById('toast-body');
    tTitle.innerText = titleMessage;
    tBody.innerText = bodyMessage;
    setTimeout(function(){ x.className = x.className.replace('show', ''); }, 5000);
  }
}

@Injectable()
export class AuthService {
  constructor() {}
  // ...
  public isAuthenticated(): boolean {
    const token = localStorage.getItem('access_token');
    return !!(token);
  }
  public setToken(token): boolean {
    localStorage.setItem('access_token', token);
    return true;
  }
  public removeToken(): boolean {
    localStorage.removeItem('access_token');
    return true;
  }
}

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(public auth: AuthService, public router: Router) {}
  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}

@Injectable()
export class Languages {
  languages = [
    {text: 'Telugu', val: 'te'},
    {text: 'English', val: 'en'},
    {text: 'Tamil', val: 'ta'}
  ];
  constructor() {}
  get() {
    return this.languages;
  }
}
