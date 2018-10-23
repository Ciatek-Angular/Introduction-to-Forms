import { Component, OnInit, DoCheck } from '@angular/core';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit, DoCheck {
   
  movies = [
    {
      name: 'Harry Potter',
      genre: 'Magic',
      length: 126,
      image: '../../assets/images/harry.png',
    },
    {
      name: 'Naruto',
      genre: 'Action',
      length: 150,
      image:  '../../assets/images/naruto.png',
    },
    {
      name: 'One Piece',
      genre: 'Adventure',
      length: 175,
      image:  '../../assets/images/lofi.png',
    },
    
  ]

  constructor() { }

  ngOnInit() {
    // this.movies = this.movieService.movies
    
    // Getting data from service
   
  }

  ngDoCheck(){
  }



  addMovie(title,genre,length,photo) {

    console.log(photo.files[0].name)

    let newMovie = {
      name: title.value,
      genre: genre.value,
      length: length.value,
      image: '../../assets/images/' + photo.files[0].name
    }
    // console.log(title.value,genre.value,length.value,photo.files[0].name)
    this.movies.push(newMovie)
    
  }

  onDeleteMovie(movie){
    // console.log(movie)
    let index = this.movies.indexOf(movie)

    this.movies.splice(index, 1)
  }

}
