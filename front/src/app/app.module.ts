import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MovieComponent } from './movie/movie.component';
import { MoviesComponent } from './movies/movies.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeComponent } from './recipe/recipe.component';





@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    MoviesComponent,
    RecipesComponent,
    RecipeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
