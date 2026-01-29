import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { About } from '../about/about';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

}
