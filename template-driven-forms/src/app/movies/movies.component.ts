import { Component, OnInit, DoCheck } from '@angular/core';
import { from } from 'rxjs';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit, DoCheck {

  isTitle = true
  isGenre = true
  isLength = true
  isPhoto = true
   
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



  OnFormSubmit(form, photo) {
    console.log(form)

    if(form.controls.title.value == ''){
      this.isTitle = false
      return
    }else{
      this.isTitle = true
    }
    if(form.controls.genre.value == ''){
      this.isGenre = false
      return
    }else{
      this.isGenre = true
    }
    if(form.controls.length.value == ''){
      this.isLength = false
      return
    }else{
      this.isLength = true
    }
    if(form.controls.photo.value == ''){
      this.isPhoto = false
      return
    }else{
      this.isPhoto = true
    }

    let newMovie = {
      name: form.value.title,
      genre: form.value.genre,
      length: form.value.length,
      image: '../../assets/images/' + photo.files[0].name
    }
    // console.log(newMovie)
    this.movies.push(newMovie)
    
  }

  onDeleteMovie(movie){
    // console.log(movie)
    let index = this.movies.indexOf(movie)

    this.movies.splice(index, 1)
  }

}
