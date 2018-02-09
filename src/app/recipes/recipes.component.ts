import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe-model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('test recipe', 'this is a simple test', 'assets/001C.png')
  ];

  constructor() {}

  ngOnInit() {}
}
