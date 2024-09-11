import { createReducer, on, Action } from '@ngrx/store';
import { cargarUsuarios, cargarUsuariosSuccess, cargarUsuariosError } from '../actions/usuarios.actions';
import { Usuario } from '../../models/usuario.models';

export interface UsuariosState {
    users: Usuario[];
    loaded: boolean;
    loading: boolean;
    error: any;
}

export const usuariosInitialState: UsuariosState ={
    users: [],
    loaded: false,
    loading: false,
    error: null
}

const _usuariosReducer = createReducer( usuariosInitialState,
    on(cargarUsuarios, state => ({
        ...state,
        loading: true,
        error: null
    })),
    on(cargarUsuariosSuccess, (state, {usuarios})=>({
        ...state, 
        loading: false,
        loaded: true,
        users: [...usuarios]
    })),
    on(cargarUsuariosError, (state, {payload})=>({
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

export function usuariosReducer(state: UsuariosState | undefined, action: Action) {
    return _usuariosReducer(state, action);
}       