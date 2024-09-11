import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.models';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import * as usuariosActions from '../../store/actions/usuarios.actions';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.scss'
})
export class ListaComponent implements OnInit, OnDestroy {
  usuarios: Usuario[] = [];
  subscription?: Subscription;
  loading: boolean=false; 
  error:any=null;

  store = inject(Store);
 

  ngOnInit(): void {
    this.subscription = this.store.select('usuarios').subscribe(({users, loading, error}) =>
      {
        this.usuarios = users;
        this.loading = loading;
        this.error = error;
      }); // Utiliamos la destructuring para extraer los datos del estado
   
    this.store.dispatch(usuariosActions.cargarUsuarios());
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe(); 
}

}
