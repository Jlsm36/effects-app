
import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UsuarioService } from '../../services/usuario.service';
import * as usuariosActions from '../actions/usuarios.actions';
import { map, exhaustMap, catchError, tap, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';


@Injectable()
export class UsuariosEffects {
    actions$ = inject(Actions);


    constructor(
        private usuariosService: UsuarioService
    ) {}

    cargarUsuarios$ = createEffect(
        () => this.actions$.pipe(
            tap(data => console.log('ofType de usuarios:', data)),
            ofType(usuariosActions.cargarUsuarios),
            tap(data => console.log('effect tap cargarUsuarios$', data)),
            exhaustMap(
                () => this.usuariosService.getUsuarios()
                .pipe(
                    tap(data => console.log('usuarios', data)),
                    map(users =>usuariosActions.cargarUsuariosSuccess({usuarios:users})),
                    catchError(error => of(usuariosActions.cargarUsuariosError({payload:error})))
                )
            )
        )
    )
}