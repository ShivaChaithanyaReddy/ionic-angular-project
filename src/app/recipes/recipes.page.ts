import { Component, OnInit } from '@angular/core';
import { RecipesService } from './recipes.service';
import { Recipe } from './recipe.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {

  recipes: Recipe[];

  constructor(private recipesService: RecipesService, private route: ActivatedRoute) {
    route.params.subscribe(value => {
      this.recipes = this.recipesService.getAllRecipes();
    })
   }

  // ionViewDidEnter() {
    // this.recipes = this.recipesService.getAllRecipes();
  // }

  ngOnInit() {

  }

}
