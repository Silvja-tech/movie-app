import { Component, OnInit , Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie: any;
  

  constructor(private route: ActivatedRoute, private movieService: MovieService) {}

  ngOnInit(): void {
    const imdbID = this.route.snapshot.paramMap.get('imdbID');
    if (imdbID) {
      this.movieService.getMovieDetails(imdbID).subscribe((response: any) => {
        this.movie = response;
      });
    } else {
      console.error('IMDb ID is null');
    }
  }

 
}