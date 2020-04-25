import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MovieService {
  url =  'http://www.omdbapi.com/';
  apiKey = '12ba6da9';

  constructor() { }
}
