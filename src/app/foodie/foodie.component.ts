import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-foodie',
  templateUrl: './foodie.component.html',
  styleUrls: ['./foodie.component.css']
})
export class FoodieComponent implements OnInit {
  items: Observable<any[]>;

  constructor(db: AngularFirestore) {
    this.items = db.collection('food').valueChanges();
   }

  ngOnInit() {
    
  }

}