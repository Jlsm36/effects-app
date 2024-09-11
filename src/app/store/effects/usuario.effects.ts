
import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UsuarioService } from '../../services/usuario.service';
import * as usuarioActions from '../actions/usuario.actions';
import { map, exhaustMap, catchError, tap, mergeMap } from 'rxjs/operators';
import { Usuario } from '../../models/usuario.models';
import { of } from 'rxjs';


@Injectable()
export class UsuarioEffects {
    actions$ = inject(Actions);


    constructor(
        private usuarioService: UsuarioService
    ) {
        console.log(' ********** HA ENTRADO EN USUARIO_EFFECTS ***********');
    }

    cargarUsuario$ = createEffect(
        () => this.actions$.pipe(
            ofType(usuarioActions.cargarUsuario),
            tap(data => console.log('effect tap cargarUsuario', data)),
            exhaustMap(
                (action) => this.usuarioService.getUserById(action.id)
                .pipe(
                    map(user =>usuarioActions.cargarUsuarioSuccess({usuario:{...user}})),
                    tap(data => console.log('usuarios::::::::::', data)),
                    catchError(error => of(usuarioActions.cargarUsuarioError({payload:error})))
                )
            )
        )
    )
}