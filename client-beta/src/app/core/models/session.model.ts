import { User } from './user.model';

/*
Este servicio permite comunicarnos con el servidor para hacer login 
a través de una petición HTTP (Post) enviando un nombre de usuario y 
una contraseña. Se tiene que pasar por constructor el Http de Angular 
para ejecutar las peticiones. La petición de login nos devolverá un 
observable de tipo Session que almacenaremos después. El logout nos 
devolverá un observable de tipo Boolean.
*/

export class Session {
  public token: string;
  public user: User;
}
