

import { UsuariosEffects } from './usuarios.effects';
import { UsuarioEffects } from './usuario.effects';

/** =======================================================================================
 *  Esta es la parte de la configuración de NgRx que se encarga de crear los efectos.

    Al igual que se ha realizado con los Reducers, dejamos en un archivo aparte el export de las clases de efectos.
    Esto se utiliza para poder importarlas en el app.config.ts
========================================================================================= */

export const EffectArray: any[] = [UsuariosEffects, UsuarioEffects];