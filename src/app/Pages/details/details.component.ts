import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriesService } from '../../Services/countries.service';
import { CountryDetails } from '../../Interfaces/country-details';
import { DecimalPipe } from '@angular/common';
import { Location, CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, DecimalPipe],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent implements OnInit {

  Object = Object;
  country = signal<CountryDetails | null>(null);
  borders = signal<CountryDetails[]>([]);
  isLoading = signal<boolean>(false);
  error = signal<string>('');
  imageUrl = signal<string>('assets/call-made.svg');

  // navigateToDetail(countryCode: string) {
  //   this.router.navigate(['/detail', countryCode]);
  // }

  constructor(
    private route: ActivatedRoute,
    private countryService: CountriesService,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit(): void {
<<<<<<< HEAD
=======
<<<<<<< HEAD
    const countryCode = this.route.snapshot.paramMap.get('countryId')!;
=======
>>>>>>> ad153f7 (Initial Commit)
    this.route.params.subscribe(params => {
      const countryCode = params['countryId'];

      if(countryCode){
        this.fetchCountry(countryCode)
      }
    })
  }
  
  fetchCountry(countryCode: string){
<<<<<<< HEAD
=======
>>>>>>> 065d09a (Initial Commit)
>>>>>>> ad153f7 (Initial Commit)

    this.isLoading.set(true);
    this.countryService.getCountryByCode(countryCode).subscribe({
      next: (countryData) => {
        this.country.set(countryData);
        this.isLoading.set(false);
<<<<<<< HEAD
  
=======
<<<<<<< HEAD

=======
  
>>>>>>> 065d09a (Initial Commit)
>>>>>>> ad153f7 (Initial Commit)
        if (countryData.borders?.length) {
          this.countryService
            .getCountriesByCodes(countryData.borders)
            .subscribe({
              next: (borderCountries) => {
                console.log('Border countries:', borderCountries);
                this.borders.set(borderCountries);
              },
              error: (err) => {
                console.error('Error fetching border countries:', err);
                this.borders.set([]);
              },
            });
        } else {
          this.borders.set([]);
        }
      },
      error: (err) => {
        this.error.set(err || 'Something Went Wrong!');
        this.isLoading.set(false);
      },
    });
<<<<<<< HEAD
    
=======
<<<<<<< HEAD
=======
    
>>>>>>> 065d09a (Initial Commit)
>>>>>>> ad153f7 (Initial Commit)
  }

  goToBack() {
    this.location.back();
  }

  navigateToDetail(code: string) {
<<<<<<< HEAD
     this.router.navigate(['/detail', code]);
=======
<<<<<<< HEAD
    console.log('Navigating to:', code);
    this.router.navigate(['/detail', code]).then(() => {
      // Force a reload of the component
      window.location.reload();
    });
=======
     this.router.navigate(['/detail', code]);
>>>>>>> 065d09a (Initial Commit)
>>>>>>> ad153f7 (Initial Commit)
  }
}
