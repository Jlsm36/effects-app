import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Usuario } from '../models/usuario.models';
import { Observable } from 'rxjs';


interface MyResponse {
  data: Usuario[];
  page: number;
  per_page: number;
  total_pages: number;
}


@Injectable({
  providedIn: 'root'
})



export class UsuarioService {
  url = "https://reqres.in/api";

  

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<MyResponse>(`${this.url}/users?delay=2`) 
      .pipe(
        map(resp => resp.data) 
      );
  }

  getUserById(id: string ): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.url}/users/${id}`) 
      .pipe(
        map(resp => resp)
      );
  }
}
