import {createAction, props } from '@ngrx/store'
import { Usuario } from '../../models/usuario.models'

export const cargarUsuario = createAction(
    ' [ Usuario ] cargar usuario',
    props<{id: string }>()
)

export const cargarUsuarioSuccess = createAction(
    '[Usuario] Cargar Usuario Success', 
    props<{usuario: Usuario}>()
)

export const cargarUsuarioError = createAction(
    '[Usuario] Cargar Usuario Error', 
    props<{payload: any}>()
)