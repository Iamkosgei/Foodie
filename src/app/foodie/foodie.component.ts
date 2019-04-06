import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-foodie',
  templateUrl: './foodie.component.html',
  styleUrls: ['./foodie.component.css']
})
export class FoodieComponent implements OnInit {

  foodService:FoodService;

  constructor(foodService:FoodService) {
    this.foodService = foodService;
   }

  ngOnInit() {
    this.foodService.getFood().subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
 
  }
}
