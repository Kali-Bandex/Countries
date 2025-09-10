import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../Interfaces/country';
import { CountryDetails } from '../Interfaces/country-details';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  baseUrl = 'https://restcountries.com/v3.1';

  constructor() {}

  http = inject(HttpClient);

  getAllCountry(): Observable<Country[]> {
    return this.http.get<Country[]>(
      `${this.baseUrl}/all?fields=name,cca3,capital,region,population,flags`
    );
  }

  getCountryByCode(code: string): Observable<CountryDetails> {
    return this.http.get<CountryDetails>(
      `${this.baseUrl}/alpha/${code}?fields=name,tld,currencies,capital,region,subregion,languages,borders,population,flags`
    );
  }

  getCountriesByCodes(codes: string[]): Observable<CountryDetails[]> {
    return this.http.get<CountryDetails[]>(
      `${this.baseUrl}/alpha?codes=${codes.join(',')}`
    );
  }
}
