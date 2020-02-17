import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {UserModel} from '../../shared/models/user.model';

@Injectable()
export class AuthService {
  dataBase = localStorage;
  notifyAuth = new BehaviorSubject<any>(null);
  infoUser = new BehaviorSubject<UserModel>(null);
  constructor() {
  }

  getUserLogged() {
    this.infoUser.next(this.getDataFromDB(`userLogged`));
    return this.infoUser;
  }

  setUserLogged(user: UserModel) {
    this.saveInDB('userLogged', user );
  }

  getDataFromDB(endpoint: string) {
    return JSON.parse(this.dataBase.getItem(endpoint));
  }
  saveInDB(endpoint: string, obj: object) {
    this.dataBase.setItem(endpoint, JSON.stringify(obj));
  }

  removeInDB(endpoint: string, obj?: object) {
    this.dataBase.removeItem(endpoint);
  }

  register(userToRegister: UserModel): Observable<UserModel> {
    userToRegister.id = userToRegister.phone;
    let user =  this.getDataFromDB(`users/${userToRegister.id}`);
    if (user === null) {
      this.saveInDB(`users/${userToRegister.id}`, userToRegister);
      user = this.getDataFromDB(`users/${userToRegister.id}`);
      this.notifyAuth.next(user);
      this.setUserLogged(user);
      return this.notifyAuth;
    } else {
      return throwError('Este usuario ya se encuentra registrado');
    }
  }

  login(userToLogin: UserModel): Observable<UserModel> {
    const user =  this.getDataFromDB(`users/${userToLogin.phone}`);
    if (user !== null) {
    if (userToLogin.password === user.password) {
      this.setUserLogged(user);
      this.notifyAuth.next(user);
      return this.notifyAuth;
    } else {
      return throwError('Contraseña incorrecta');
    }
    } else {
      return throwError('Este usuario no existe');
    }
  }

  logOut() {
    this.removeInDB('userLogged');
  }

}
