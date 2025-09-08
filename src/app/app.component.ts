import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
<<<<<<< HEAD
import { HeaderComponent } from './Components/header/header.component';
import { ToggleButtonComponent } from './Components/toggle-button/toggle-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ToggleButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
=======

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
>>>>>>> 41632da (initial commit)
})
export class AppComponent {
  title = 'Countries';
}
