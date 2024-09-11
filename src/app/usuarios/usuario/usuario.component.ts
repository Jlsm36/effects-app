import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { cargarUsuario } from '../../store/actions';
import { Subscriber } from 'rxjs';
import { Usuario } from '../../models/usuario.models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.scss'
})
export class UsuarioComponent implements OnInit {
  // subscription?: Subscriber<any>;
  usuario?: Usuario ;
  error: any = null;

  store = inject(Store);

  constructor( private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.store.select('usuario').subscribe(({user, error}) =>
      
      {
        if(!user)return;
        console.log('La data que nos viene de usuario individual es; ', user);
        this.usuario = user.data;
        this.error = error;
      }); // Utiliamos la destructuring para extraer los datos del estado

    this.router.paramMap.subscribe(params => {
      const id = params.get('id');
      console.log('id', id);
      if(!id)return;

      this.store.dispatch(cargarUsuario({id}));
    });


  }

}
