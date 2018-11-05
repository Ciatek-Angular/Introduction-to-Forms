import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  constructor() { }

  @Input() recipe
  @Output() delete = new EventEmitter()

  ngOnInit() {
  }

  deleteRequest(recipe){
    this.delete.emit(recipe)
  }

}
