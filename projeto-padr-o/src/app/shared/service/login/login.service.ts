import { Injectable } from '@angular/core';
import {environment} from '../../../../environments/environment';
import {shareReplay, tap} from 'rxjs/operators';
import {User} from '../../model/user/user';
import {Token} from '../../model/token/token';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private usuarioAtualSubject: BehaviorSubject<User>;
  public usuarioAtual: Observable<User>;

  constructor(private http: HttpClient,  private route: Router) {

    this.usuarioAtualSubject = new BehaviorSubject<User>(
        // @ts-ignore
        localStorage.getItem('usuarioAtual') ? JSON.parse(atob(localStorage.getItem('usuarioAtual'))) : null);
    this.usuarioAtual = this.usuarioAtualSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.usuarioAtualSubject.value;
  }

  login(username: string, password: string): Observable<any> {
      let headers: HttpHeaders;

      headers = new HttpHeaders()
          .set('Accept', 'application/json')
          .set('Content-Type', 'application/json')
          // @ts-ignore
          .set('Authorization', 'Basic ' + btoa(username + ':' + password));

    return this.http.get<any>(`${environment.apiUrl}/auth/jwt/token`, {headers: headers})
        .pipe(
            tap(response => {
              const item: Token = response.data;
              this.getMe(item.jwt);
            }),
            shareReplay(),
        );

  }

  getMe(token: string) {
    console.log(token);
      // @ts-ignore
    localStorage.setItem('token', token);
    this.http.get<any>(`${environment.apiUrl}/auth/me`)
        .pipe(
            tap(response => {
              const usuario: User = response.data;
              usuario.token = token;
              // @ts-ignore
                localStorage.setItem('usuarioAtual', btoa(JSON.stringify(usuario)));
              this.route.navigateByUrl('/admin').then(r => r);
              this.usuarioAtualSubject.next(usuario);
              this.usuarioAtual = this.usuarioAtualSubject.asObservable();
            })
        ).subscribe();
  }


  logout() {
    // remove user from local storage to log user out
      // @ts-ignore
    localStorage.removeItem('usuarioAtual');
    this.usuarioAtualSubject.next(null);
  }
}
