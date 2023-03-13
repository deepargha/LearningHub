import { Injectable } from '@angular/core';
import { User } from 'src/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginRegistrationService {

  constructor(private http: HttpClient) { }
  public saveUser(user: User): Observable<any> {
    const url = 'http://localhost:8081/addUser';
    return this.http.post<any>(url, user);
  }

}
