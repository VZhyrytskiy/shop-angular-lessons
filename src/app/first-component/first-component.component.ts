import { Component, OnInit } from '@angular/core';
import { FistComponentModel, Category } from './first-component.data';

const description = 'Counter Strike Global Offencive. FPS game for schoolars and marginals.';
const name = 'CS GO';
@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.sass']
})
export class FirstComponentComponent implements OnInit {
  public model: FistComponentModel;
  Category = Category;
  constructor() { }

  ngOnInit(): void {
    this.model = new FistComponentModel();
    this.model.category = Category.VideoGames;
    this.model.description = description;
    this.model.isAvailable = true;
    this.model.name = name;
    this.model.price = 460;
  }

}
