import { Component, OnInit } from '@angular/core';
import { Pimodel } from 'src/app/pimodel';
import { Pomodel } from 'src/app/pomodel';
import { AppServiceService } from '../../appservice.service';

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.less']
})
export class AccessoriesComponent implements OnInit {
  stat:any="ok";
obj:Pomodel[];
//dobj:Pomodel;
obj1:Pimodel;
constructor(private cs:AppServiceService) 
{ 
  this.obj1 = new Pimodel('c3');

  this.cs.GetListOfProduct(this.obj1).subscribe
  (
    (data:Pomodel[])=>
    {
      console.log(data);
      this.obj = data; 
    }
  )
}

  ngOnInit() {
  }
  addtocart()
  {
    alert("added to cart");
  }
}
