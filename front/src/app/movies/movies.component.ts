import { Component, OnInit, DoCheck } from '@angular/core';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';




@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), {optional: true}),
        query(':enter', stagger('300ms', [
          animate('1s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
          ]))]), {optional: true}),
          query(':leave', stagger('300ms', [
            animate('1s ease-in', keyframes([
              style({opacity: 1, transform: 'translateY(0)', offset: 0}),
              style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
              style({opacity: 0, transform: 'translateY(-75%)',     offset: 1.0}),
            ]))]), {optional: true})
      ]),
    ]),
  ]
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
