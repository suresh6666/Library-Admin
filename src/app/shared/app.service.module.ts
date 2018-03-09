import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class AppServiceModule {
  constructor(private httpClient: HttpClient) {}
  get(url: string) {
    return this.httpClient.get(url);
  }
  post(url: string, data: any) {
    return this.httpClient.post(url, data);
  }
  put(url: string, data: any) {
    this.httpClient.put(url, data);
  }
  delete(url: string) {
    this.httpClient.delete(url);
  }
}

