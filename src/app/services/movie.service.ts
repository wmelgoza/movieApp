import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export enum SearchType {
  all = '',
  movie = 'movie',
  series = 'series',
  episode = 'episode'
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  url =  'http://www.omdbapi.com/';
  apiKey = '12ba6da9';

  constructor(private http: HttpClient) { }

  searchData() {

  }

  getDetails() {

  }
  
}
