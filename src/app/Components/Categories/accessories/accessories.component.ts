import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.less']
})
export class AccessoriesComponent implements OnInit {
 stat:any="ok";
  constructor() { }

  ngOnInit() {
  }
  addtocart()
  {
    this.stat="added to cart";
    
  }
 
}
