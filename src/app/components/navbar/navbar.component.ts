import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  routes: {home: string, new: string, login: string} = {
    home: '/notes',
    new: '/notes/new',
    login: '/login'
  }
}
