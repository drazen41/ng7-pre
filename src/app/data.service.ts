import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  firstClick(){
    return console.log('servis kliknut');
  }
  getUsers(){
    return this.http.get('https://reqres.in/api/users');
  }
}
