import { Component, Input } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { Country } from '../../Interfaces/country';
import { Router } from '@angular/router';

@Component({
  selector: 'app-country-card',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './country-card.component.html',
  styleUrl: './country-card.component.css',
})
export class CountryCardComponent {
  @Input() country!: Country;

  constructor(private router: Router){}

  navigateToDetail(){
    this.router.navigate(['/detail', this.country.cca3])
  }
}
