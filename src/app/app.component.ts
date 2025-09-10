import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
<<<<<<< HEAD
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
=======
import { HeaderComponent } from './Components/header/header.component';
import { ToggleButtonComponent } from './Components/toggle-button/toggle-button.component';
>>>>>>> 065d09a (Initial Commit)

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ToggleButtonComponent],
  templateUrl: './app.component.html',
<<<<<<< HEAD
  styleUrl: './app.component.css'
>>>>>>> 41632da (initial commit)
=======
  styleUrl: './app.component.css',
>>>>>>> 065d09a (Initial Commit)
})
export class AppComponent {
  title = 'Countries';
}
