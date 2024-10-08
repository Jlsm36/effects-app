import {createAction, props } from '@ngrx/store'
import { Usuario } from '../../models/usuario.models'

export const cargarUsuarios = createAction(' [ Usuarios ] cargar usuarios')
export const cargarUsuariosSuccess = createAction('[Usuarios] Cargar Usuarios Success', props<{usuarios: Usuario[]}>())
export const cargarUsuariosError = createAction('[Usuarios] Cargar Usuarios Error', props<{payload: any}>())

