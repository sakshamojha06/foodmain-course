import { Injectable } from '@angular/core';
import { Food } from '../../shared/models/Food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  
  constructor() { }

  getAll(): Food[] {
    return [
      {
        id: 1,
        name: 'Pizza Pepperoni',
        price: 10,
        tags: ['FastFood', 'Pizza', 'Lunch'],
        favorite: false,
        stars: 4.5,
        imageUrl: '/images/foods/food-1.jpg',
        origins: ['Italy'],
        cookingTime: '10-20'
      },
      {
        id: 2,
        name: 'Meatball',
        price: 20,
        tags: ['SlowFood', 'Lunch'],
        favorite: true,
        stars: 4.7,
        imageUrl: '/images/foods/food-2.jpg',
        origins: ['Persia', 'Middle East', 'China'],
        cookingTime: '20-30'
      },
      {
        id: 3,
        name: 'Hamburger',
        price: 5,
        tags: ['FastFood', 'Hamburger'],
        favorite: false,
        stars: 3.5,
        imageUrl: 'images/foods/food-3.jpg',
        origins: ['Germany', 'USA'],
        cookingTime: '10-15',
      },
      {
        id: 4,
        name: 'Fried Potatoes',
        price: 2,
        tags: ['FastFood', 'Fry'],
        favorite: true,
        stars: 3.3,
        imageUrl: 'images/foods/food-4.jpg',
        origins: ['Belgium', 'France'],
        cookingTime: '15-20',
      },
      {
        id: 5,
        name: 'Chicken Soup',
        price: 11,
        tags: ['SlowFood', 'Soup'],
        favorite: false,
        stars: 3.0,
        imageUrl: 'images/foods/food-5.jpg',
        origins: ['India', 'Asia'],
        cookingTime: '40-50',
      },
      {
        id: 6,
        name: 'Vegetables Pizza',
        price: 9,
        tags: ['FastFood', 'Pizza', 'Lunch'],
        favorite: false,
        stars: 4.0,
        imageUrl: 'images/foods/food-6.jpg',
        origins: ['Italy'],
        cookingTime: '40-50',
      },
    ]
  }
}
