import { Component, inject } from '@angular/core';
import { ThemeService } from '../../Services/theme.service';

@Component({
  selector: 'app-toggle-button',
  standalone: true,
  imports: [],
  templateUrl: './toggle-button.component.html',
  styleUrl: './toggle-button.component.css',
})
export class ToggleButtonComponent {
  theme = inject(ThemeService);
}
