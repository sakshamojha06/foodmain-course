import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  
  constructor() { }

  getAll(): string[] {
    return [
      'images/foods/food-1.jpg',
      'images/foods/food-2.jpg',
      'images/foods/food-3.jpg',
      'images/foods/food-4.jpg',
      'images/foods/food-5.jpg',
      'images/foods/food-6.jpg',
    ]
  }
}
