import { Component, EventEmitter, Output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-regions-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './regions-bar.component.html',
  styleUrl: './regions-bar.component.css',
})
export class RegionsBarComponent {
  @Output() selectRegion = new EventEmitter();

  display = signal<boolean>(false);
  selectedRegion = signal<string>('Filter by Region');
  regions: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  onDisplay() {
    this.display.update((c) => !c);
  }

  // onSelectRegion(event: Event) {}

  onChange(region: string) {
   this.selectedRegion.set(region);
    this.selectRegion.emit(region);
    this.display.set(false); 
  }
}
