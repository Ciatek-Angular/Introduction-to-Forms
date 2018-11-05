import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  constructor() { }

  recipes = [
    {
      foodName: 'Pizza',
      description: `In a large mixing bowl, combine flours and salt.
      In a small mixing bowl, stir together 200 grams (a little less than 1 cup) lukewarm tap water, the yeast and the olive oil, then pour it into flour mixture. Knead with your hands until well combined, approximately 3 minutes, then let the mixture rest for 15 minutes.
      Knead rested dougavily floured surface and use your fingers to stretch it, then your hands to shape it into rounds or squares. Top and bake.`,
      image: '../../assets/images/pizza.png'
    },
    {
      foodName: 'HamBurger',
      description: `Preheat grill for high heat.
      In a large bowl, mix the ground beef, egg, bread crumbs, evaporated milk, Worcestershire sauce, cayenne pepper, and garlic using your hands. Form the mixture into 8 hamburger patties.
      Lightly oil the grill grate. Grill patties 5 minutes per side, or until well done.`,
      image: '../../assets/images/hamburger.png'
    },
    {
      foodName: 'Shawerma',
      description: `Make the Marinade
      Gather the ingredients.
      
      
      In a large bowl, combine yogurt, vinegar, crushed garlic, pepper, salt, cardamom, allspice, and juice of 1 lemon, until well mixed. 
      
      
      Add chicken, coating well with marinade. If mixture seems too dry, add olive oil, 1 tablespoon at a time, until you've achieved the right consistency. Cover and refrigerate at least 8 hours, preferably overnight.
      
      Cook the Chicken
      Gather the ingredients.
      
      In a stockpot or large saucepan, cook chicken over medium heat for 45 minutes or until done. Be sure not to overcook!
      
      If chicken becomes a little dry, add a few tablespoons of water.
      `,
      image: '../../assets/images/shawerma.png'
    },
  ]

  ngOnInit() {
  }

  OnFormSubmit(form, photo){
    console.log(form.value.foodName, photo.files)

    let newRecipe = {
      foodName: form.value.foodName,
      description: form.value.description,
      image: '../../assets/images/' + photo.files[0].name
    }

    this.recipes.push(newRecipe)
  }

  deleteRecipe(recipe){
    let index = this.recipes.indexOf(recipe)

    this.recipes.splice(index, 1)
  }
}
