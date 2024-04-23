import { Component } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchQuery: string = '';
  top3Movies: any[] = [];

  constructor(private movieService: MovieService) {}

  search() {
    this.movieService.searchMovies(this.searchQuery).subscribe((data: any) => {
      if (data && data.Search && data.Search.length > 0) {
        this.top3Movies = data.Search.slice(0, 3);
      } else {
        this.top3Movies = [];
      }
    });
  }
}