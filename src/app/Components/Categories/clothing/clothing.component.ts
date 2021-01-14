import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clothing',
  templateUrl: './clothing.component.html',
  styleUrls: ['./clothing.component.less']
})
export class ClothingComponent implements OnInit {
stat:any="ok";
  constructor() { }

  ngOnInit() {
  }
  addtocart()
  {
    this.stat="added to cart";
  }
}
