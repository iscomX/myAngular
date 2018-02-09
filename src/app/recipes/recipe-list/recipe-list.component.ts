import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe-model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe-1',
      'This is simply a test-1',
      'assets/img_1.png'
    ),
    new Recipe(
      'A Test Recipe-2',
      'This is simply a test-2',
      'assets/img_2.png'
    ),
    new Recipe(
      'A Test Recipe-3',
      'This is simply a test-3',
      'assets/img_3.png'
    )
  ];

  constructor() {}

  ngOnInit() {}
}
