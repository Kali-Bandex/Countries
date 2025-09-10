import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { SearchBarComponent } from '../../Components/search-bar/search-bar.component';
import { RegionsBarComponent } from '../../Components/regions-bar/regions-bar.component';
import { CountriesService } from '../../Services/countries.service';
import { Country } from '../../Interfaces/country';
import { CountryCardComponent } from '../../Components/country-card/country-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchBarComponent, RegionsBarComponent, CountryCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit{
  countryService = inject(CountriesService);

  //Signals
  countries = signal<Country[]>([]);
  searchInput = signal<string>('');
  region = signal<string>('');
  isLoading = signal<boolean>(false);
  erroMsg = signal<string>('');

  filteredCountries = computed(() => {
    return this.countries().filter(c => {
      const matchesSearch = c.name.common.toLowerCase().includes(this.searchInput().toLowerCase());
      const matchesRegion = this.region() ? c.region === this.region() : true;
      return matchesSearch && matchesRegion;
<<<<<<< HEAD
    }).sort((a, b) => a.name.common.localeCompare(b.name.common));
=======
<<<<<<< HEAD
    })
=======
    }).sort((a, b) => a.name.common.localeCompare(b.name.common));
>>>>>>> 065d09a (Initial Commit)
>>>>>>> ad153f7 (Initial Commit)
  })

  ngOnInit(): void {
    this.isLoading.set(true);

    this.countryService.getAllCountry().subscribe({
      next: (data) => {
        this.countries.set(data);
        this.isLoading.set(false);
      },
      error: (err) => {
        this.erroMsg.set(err || 'Something Went Wrong!');
        this.isLoading.set(false);
      },
    });
    console.log(this.countries());
  }

  //Functions
  onSearch(term: string) {
    this.searchInput.set(term);
  }

  onRegionSelect(region: string){
    this.region.set(region);
  }

}
