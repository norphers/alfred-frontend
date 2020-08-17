/*
LoginObject es un objeto que typeamos para tener mayor control de la
información que se envía a la petición de login.
*/

export class LoginObject {
  public username: string;
  public password: string;

  constructor(object: any) {
    this.username = object.username ? object.username : null;
    this.password = object.password ? object.password : null;
  }
}
