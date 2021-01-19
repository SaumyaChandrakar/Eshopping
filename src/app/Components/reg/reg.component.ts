import { Component, OnInit } from '@angular/core';
import { Imodel } from '../imodel';
import { Omodel } from '../omodel';
import { AppServiceService } from '../appservice.service';


@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.less']
})
export class RegComponent implements OnInit {


  event:any="status";
   
 
  obj1:Imodel;
  obj2:Omodel;
  
  abc:any="";
 
 
constructor(private so:AppServiceService)
  { 
    this.obj1=new Imodel();
    this.obj1.Reg_Id="";
    this.obj1.Name="";
    this.obj1.Email_id="";
    this.obj1.Address="";
    this.obj1.Mobile_no="";
    this.obj1.Password="";
   
  }

 sgg()
 {
   
   this.so.postFunctionCall(this.obj1).subscribe(
     (data:Omodel)=>{  
         
       if(data.status ==0)
       {
           this.event ="nothing to calcualte";
          
 
      }
 
      
       else
       {
       this.event =data.status  ;
    
       this.abc = "";
        
       alert("signup successfull")
  }
        
 }
 ,(error)=>{
   this.event ="ajax failed some issue in contacting";
   
 
 }
 );
 }



  

  ngOnInit(): void {
  }

}
