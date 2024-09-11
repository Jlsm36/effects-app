import { createReducer, on, Action } from '@ngrx/store';
import { cargarUsuario, cargarUsuarioSuccess, cargarUsuarioError } from '../actions/usuario.actions';
import { Usuario } from '../../models/usuario.models';

export interface UsuarioState {
    id     : string
    user   : Usuario | null;
    loaded : boolean;
    loading: boolean;
    error  : any;
}

export const usuarioInitialState: UsuarioState ={
    id     : '',
    user   : null,
    loaded : false,
    loading: false,
    error  : null
}

const _usuarioReducer = createReducer( usuarioInitialState,

    on(cargarUsuario, (state, {id})=>({
        ...state,
        loading: true,
        id  : id,
    })),
    on(cargarUsuarioSuccess, (state, {usuario})=>({
        ...state, 
        loading: false,
        loaded: true,
        user: {...usuario}
    })),
    on(cargarUsuarioError, (state, {payload})=>({
        ...state,
        loading: false,
        loaded: false,
        // error: payload
        error: {        // limitamos la contestación de error a lo que nos interesa
            url: payload.url,
            status: payload.status,
            statusText: payload.statusText,
            message: payload.message
        }
    }))
    
)

export function usuarioReducer(state: UsuarioState | undefined, action: Action) {
    return _usuarioReducer(state, action);
}       