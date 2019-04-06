import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'



@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http: HttpClient) { }

  getFood()
  {
    return this.http.get("https://foodangular.firebaseio.com/food.json")
  }
}
