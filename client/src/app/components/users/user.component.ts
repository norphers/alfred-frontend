import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
})
export class UserComponent implements OnInit {
  users: User[];

  /*
  private userService:UserService

  constructor(userService:UserService) {
    this.userService=userService;
  }
  */

  //es lo mismo que el bloque de código de encima.
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      users => this.users = users //este es el observador
    );
  }
}
