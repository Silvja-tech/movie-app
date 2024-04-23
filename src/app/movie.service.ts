import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiKey = '32e4e999';
  private apiUrl = 'https://www.omdbapi.com/';

  constructor(private http: HttpClient , private router:Router) {}

  searchMovies(query: string): Observable<any> {
    return this.http.get(`${this.apiUrl}?apikey=${this.apiKey}&s=${query}`);
  }

  getMovieDetails(imdbID: string): Observable<any> {
    return this.http.get(`${this.apiUrl}?apikey=${this.apiKey}&i=${imdbID}`);
  }
}

