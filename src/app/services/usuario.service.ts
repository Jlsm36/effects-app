import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Usuario } from '../models/usuario.models';


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

  getUsuarios() {
    return this.http.get<MyResponse>(`${this.url}/users?per_page=6`)
      .pipe(
        map(resp => resp.data)
      );
  }
}
