import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { of, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { User } from './user';
import { USERS } from './user.json';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private urlEndPoint:string = 'http://localhost:8090/api/users';

  constructor(private http: HttpClient) { }

  //Al usar 'Observable' y 'of', convertimos el antiguo método getUsers() - síncrono - 
  //en un 'stream' o flujo Observable a partir de los objetos USERS.
  getUsers(): Observable<User[]> {
    //return of(USERS);
    return this.http.get(this.urlEndPoint)
      .pipe(
        map( (response) => response as User[] )
      );
    
  }

}
